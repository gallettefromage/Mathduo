/**
 * DAILY.JS — Leçon du jour
 *
 * Sélection déterministe (seed = date locale),
 * streak quotidien, bonus XP ×3, progression 0/5.
 */

import { state, saveState, getNotionLevel, incrementNotionLevel, isNotionUnlocked } from './state.js';

// ── Clé de stockage ──────────────────────────────────
const DAILY_KEY = 'mathoduo_daily_v1';

// ── Constantes ───────────────────────────────────────
export const DAILY_COUNT     = 5;
export const DAILY_XP_BONUS  = 3;   // multiplicateur XP

// ── État module ──────────────────────────────────────
let _dailyData = null;   // chargé par loadDaily()
let _allNotions = [];    // [(chapter, notion), …] — peuplé par initDailyPool()

// ════════════════════════════════════════════════════
// DATE HELPERS
// ════════════════════════════════════════════════════

/** Renvoie la date locale sous forme "YYYY-MM-DD" */
function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

/** Renvoie un seed entier déterministe à partir d'une chaîne */
function seedFromString(str) {
  let h = 0x811C9DC5 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 0x01000193) >>> 0;
  }
  return h;
}

/** PRNG simple (xorshift32) à partir d'un seed */
function makePRNG(seed) {
  let s = seed || 1;
  return function() {
    s ^= s << 13; s ^= s >>> 17; s ^= s << 5;
    return (s >>> 0) / 0xFFFFFFFF;
  };
}

/** Fisher-Yates shuffle avec PRNG déterministe */
function seededShuffle(arr, rand) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ════════════════════════════════════════════════════
// POOL DE NOTIONS
// ════════════════════════════════════════════════════

/**
 * Construit le pool global de toutes les notions disponibles.
 * Doit être appelé après que SUBJECTS est connu (depuis app.js).
 * @param {Object} subjects — objet SUBJECTS de app.js
 * @param {string} currentSubject
 * @param {string} currentLevel
 */
export function initDailyPool(subjects, currentSubject, currentLevel) {
  _allNotions = [];
  Object.values(subjects).forEach(subject => {
    Object.values(subject.levels || {}).forEach(lvl => {
      (lvl.chapitres || []).forEach(chapter => {
        // Notions principales : on n'inclut que celles débloquées
        (chapter.notions || []).forEach((notion, idx) => {
          const unlocked = isNotionUnlocked(chapter.id, chapter.notions, idx);
          if (unlocked) {
            _allNotions.push({ chapter, notion });
          }
        });
        // L1 bonus : débloqué si la dernière notion principale a level ≥ 1
        if (chapter.l1Bonus?.notions?.length) {
          const lastMainNotion = chapter.notions?.[chapter.notions.length - 1];
          const l1Accessible = lastMainNotion
            ? getNotionLevel(chapter.id, lastMainNotion.id) >= 1
            : false;
          if (l1Accessible) {
            (chapter.l1Bonus.notions).forEach((notion, idx) => {
              const unlocked = isNotionUnlocked(chapter.id, chapter.l1Bonus.notions, idx);
              if (unlocked) {
                _allNotions.push({ chapter, notion, isL1: true });
              }
            });
          }
        }
      });
    });
  });
}

// ════════════════════════════════════════════════════
// PERSISTENCE
// ════════════════════════════════════════════════════

function loadDaily() {
  try {
    const saved = localStorage.getItem(DAILY_KEY);
    if (saved) _dailyData = JSON.parse(saved);
  } catch(e) {}
  // Init si absent ou date différente
  const today = todayKey();
  if (!_dailyData || _dailyData.date !== today) {
    _dailyData = {
      date:     today,
      indices:  [],      // indices dans _allNotions
      done:     [],      // indices des notions déjà faites aujourd'hui
      validated: false,  // true quand 5/5 complétées
    };
  }
  return _dailyData;
}

function saveDaily() {
  try { localStorage.setItem(DAILY_KEY, JSON.stringify(_dailyData)); } catch(e) {}
}

// ════════════════════════════════════════════════════
// SÉLECTION QUOTIDIENNE
// ════════════════════════════════════════════════════

/**
 * Retourne les DAILY_COUNT notions du jour (stables sur la journée).
 * @returns {Array<{chapter, notion, isL1?}>}
 */
export function getDailyNotions() {
  loadDaily();
  const today = todayKey();

  // Si les indices sont déjà calculés pour aujourd'hui ET tous valides, on les réutilise
  // On vérifie aussi que les indices pointent vers des notions encore valides dans le pool actuel
  if (_dailyData.indices.length === DAILY_COUNT) {
    const notions = _dailyData.indices.map(i => _allNotions[i]).filter(Boolean);
    // Tous les indices sont valides → on réutilise
    if (notions.length === DAILY_COUNT) {
      return notions;
    }
    // Sinon, le pool a changé (nouvelles notions débloquées, index décalés) → on recalcule
    _dailyData.indices = [];
  }

  // Pool vide : pas assez de notions débloquées
  if (_allNotions.length === 0) return [];

  const seed     = seedFromString(today + '|mathoduo');
  const rand     = makePRNG(seed);
  const count    = Math.min(DAILY_COUNT, _allNotions.length);
  const allIdx   = _allNotions.map((_, i) => i);
  const shuffled = seededShuffle(allIdx, rand);
  _dailyData.indices = shuffled.slice(0, count);
  saveDaily();

  return _dailyData.indices.map(i => _allNotions[i]).filter(Boolean);
}

// ════════════════════════════════════════════════════
// PROGRESSION DU JOUR
// ════════════════════════════════════════════════════

/** Nombre de notions terminées aujourd'hui */
export function getDailyDone() {
  loadDaily();
  return _dailyData.done.length;
}

/** true si la notion (par son index pool) est déjà faite aujourd'hui */
export function isNotionDoneToday(poolIndex) {
  loadDaily();
  return _dailyData.done.includes(poolIndex);
}

/**
 * Marque une notion comme faite aujourd'hui.
 * Vérifie si la journée est validée (5/5).
 * Gère le streak.
 * @returns {{ dayComplete: boolean, streakUp: boolean }}
 */
export function markNotionDone(poolIndex) {
  loadDaily();
  if (!_dailyData.done.includes(poolIndex)) {
    _dailyData.done.push(poolIndex);
  }
  let dayComplete = false;
  let streakUp    = false;

  // La validation se fait quand toutes les notions SÉLECTIONNÉES pour aujourd'hui sont faites
  const targetCount = _dailyData.indices.length || DAILY_COUNT;
  const doneToday   = _dailyData.done.filter(idx => _dailyData.indices.includes(idx)).length;

  if (doneToday >= targetCount && !_dailyData.validated) {
    _dailyData.validated = true;
    dayComplete = true;
    streakUp = _updateStreak();
    saveDaily();
    saveState();
  } else {
    saveDaily();
  }
  return { dayComplete, streakUp };
}

/** Met à jour le streak global dans state */
function _updateStreak() {
  const today = todayKey();
  const last  = state.lastPlayDate;

  if (!last) {
    // Premier jour
    state.streak = 1;
    state.lastPlayDate = today;
    return true;
  }

  // Calcule la différence en jours
  const lastDate  = new Date(last);
  const todayDate = new Date(today);
  const diffMs    = todayDate - lastDate;
  const diffDays  = Math.round(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 1) {
    // Jour consécutif
    state.streak = (state.streak || 0) + 1;
    state.lastPlayDate = today;
    // Meilleur streak
    if (state.streak > (state.bestStreak || 0)) {
      state.bestStreak = state.streak;
    }
    return true;
  } else if (diffDays === 0) {
    // Même jour, déjà compté
    return false;
  } else {
    // Rupture de série
    state.streak = 1;
    state.lastPlayDate = today;
    return true;
  }
}

// ════════════════════════════════════════════════════
// INDEX DANS LE POOL (pour markNotionDone)
// ════════════════════════════════════════════════════

/** Trouve l'index pool d'une notion dans _allNotions */
export function getPoolIndex(chapterId, notionId) {
  return _allNotions.findIndex(
    item => item.chapter.id === chapterId && item.notion.id === notionId
  );
}

// ════════════════════════════════════════════════════
// ACCESSOR POUR LE RENDU
// ════════════════════════════════════════════════════

export function getDailyState() {
  loadDaily();
  return {
    date:       _dailyData.date,
    done:       _dailyData.done.length,
    total:      DAILY_COUNT,
    validated:  _dailyData.validated,
    streak:     state.streak || 0,
    bestStreak: state.bestStreak || 0,
    doneMask:   _dailyData.done,        // indices pool faits
    indices:    _dailyData.indices,     // indices pool sélectionnés
  };
}
