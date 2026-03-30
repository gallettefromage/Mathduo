/**
 * MATHODUO — app.js v5
 *
 * ╔══════════════════════════════════════════════════════╗
 * ║  BLOCS DISPONIBLES dans fullBlocks :                 ║
 * ║  definition | formula | example | warning            ║
 * ║  technique  | demo    | graph   | image              ║
 * ║                                                      ║
 * ║  Bloc graph : { type:'graph', title, svgContent,     ║
 * ║                 caption?, text? }                    ║
 * ║  Bloc image : { type:'image', title, src,            ║
 * ║                 caption?, text? }                    ║
 * ╚══════════════════════════════════════════════════════╝
 */

// ── Imports contenu ──────────────────────────────────
import integrales from '../terminale/maths/integrales/index.js';
import récurence  from '../terminale/maths/récurence/index.js';
import imaginaire from '../terminale/maths/imaginaire/index.js';
import calcul_modulaire from '../terminale/maths/calcul_modulaire/index.js';
import fonction_elliptique from '../terminale/maths/fonction_elliptique/index.js';
import fonction from '../terminale/maths/fonction/index.js';
import energie from '../premiere/physique/energie/index.js';
import série_entiere from '../terminale/maths/série_entiere/index.js';
import thermodynamique from '../terminale/physique/thermodynamique/index.js';
import revisiondevoircommunphysique from '../premiere/physique/révision devoir commun/index.js';
import Lementeur from '../premiere/français/Le menteur/index.js';
import PréparationBac from '../premiere/français/Préparation bac/index.js';
import preterit from '../premiere/Allemand/preterit/index.js';
import cas from '../premiere/Allemand/cas/index.js';
import StructureDesMolécules from '../premiere/physique/Structure des molécules/index.js';

// ── Catalogue Matières → Niveaux ─────────────────────
const SUBJECTS = {
  maths: {
    id: 'maths',
    label: 'Mathématiques',
    emoji: '📐',
    color: '#4F46E5',
    colorDark: '#3730A3',
    description: 'Algèbre, analyse, géométrie…',
    levels: {
      terminale: {
        id: 'terminale',
        label: 'Terminale',
        subtitle: 'Dérivées, intégrales, exp & ln…',
        color: '#3B82F6',
        colorDark: '#1D4ED8',
        icon: '📐',
        chapitres: [integrales, récurence,imaginaire, calcul_modulaire, fonction_elliptique, fonction, série_entiere],
      },
    },
  },
  physique: {
    id: 'physique',
    label: 'Physique-Chimie',
    emoji: '⚗️',
    color: '#10B981',
    colorDark: '#059669',
    description: 'Mécanique, électricité, chimie…',
    levels: {
      premiere : {
        id: 'premiere',
        label: 'Premiere',
        subtitle: 'Energie ...',
        color: '#ff7913',
        colorDark: '#3f1d02',
        icon: '⚛️',
        chapitres: [revisiondevoircommunphysique, energie, StructureDesMolécules],},
      terminale : {
        id: 'terminale',
        label: 'Terminale',
        subtitle: 'thermodynamique ...',
        color: '#ff7913',
        colorDark: '#3f1d02',
        icon: '⚛️',
        chapitres: [thermodynamique],}
    },
  },
  francais: {
    id: 'francais',
    label: 'Français',
    emoji: '📚',
    color: '#fea4e0',
    colorDark: '#c581ae',
    description: 'Bac français…',
    levels: {
      premiere : {
        id: 'premiere',
        label: 'Premiere',
        subtitle: 'Bac français ...',
        color: '#fea4e0',
        colorDark: '#c581ae',
        icon: '📚',
        chapitres: [Lementeur,PréparationBac],}
    },  
  },
  allemand: {
    id: 'allemand',
    label: 'Allemand',
    emoji: '📚',
    color: '#fedda4',
    colorDark: '#c5c281',
    description: 'Preterit…',
    levels: {
      premiere : {
        id: 'premiere',
        label: 'Premiere',
        subtitle: 'Preterit ...',
        color: '#fea4a4',
        colorDark: '#000000',
        icon: '📚',
        chapitres: [preterit, cas],}
    },},
};

// ── Expose SUBJECTS pour le gestionnaire de projet ──
window.__SUBJECTS = SUBJECTS;

const SCHOOL_LEVELS = [
  { id: 'premiere', label: 'Premiere', subtitle: 'Energie ...', color: '#ff7913', icon: '🎓' },
  { id: 'terminale', label: 'Terminale', subtitle: 'Dérivées, intégrales, exp & ln…', color: '#3B82F6', icon: '🎓' },
];

// ── Imports modules ──────────────────────────────────
import { state, saveState, loadState,
         getNotionLevel, incrementNotionLevel,
         isNotionUnlocked, chapterCompletion }  from './state.js';
import { initNotionSession, initChapterEvalSession, retryNotionSession,
         validateAnswer, toggleHint, toggleHintPanel,
         initDraftPanel, toggleDraftPanel,
         setDraftTool, setDraftColor, setDraftSize, clearDraft } from './exercise.js';
import {
  initDailyPool, getDailyNotions, getDailyDone, getDailyState,
  markNotionDone, getPoolIndex, DAILY_COUNT, DAILY_XP_BONUS,
} from './daily.js';

let _currentChapter  = null;
let _currentNotion   = null;
let _currentIsL1     = false;
let _selectedLevel   = null;
let _selectedSubject = null;
let _isEvalMode      = false;
let _isDailyMode     = false;   // true pendant la leçon du jour
let _dailyPoolIndex  = -1;      // index pool de la notion courante

// ══════════════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════════════
loadState();
document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
buildOnboarding();

if (state.currentLevel && state.currentSubject) {
  initDailyPool(SUBJECTS, state.currentSubject, state.currentLevel);
  renderHome(); showScreen('home'); showSidebar();
} else if (state.currentLevel) {
  showSubjectPicker();
} else {
  showScreen('onboarding');
}

window.startApp        = startApp;
window.showTab         = showTab;
window.goBack          = goBack;
window.openChapter     = openChapter;
window.openFullLesson  = openFullLesson;
window.validateAnswer  = validateAnswer;
window.toggleHint      = toggleHint;
window.toggleHintPanel   = toggleHintPanel;
window.toggleDraftPanel  = toggleDraftPanel;
window.setDraftTool      = setDraftTool;
window.setDraftColor     = setDraftColor;
window.setDraftSize      = setDraftSize;
window.clearDraft        = clearDraft;
window.retryExercise   = () => {
  if (_isEvalMode && _currentChapter) { startChapterEval(_currentChapter.id); return; }
  retryNotionSession();
};
window.goToHome        = () => { renderHome(); showScreen('home'); };
window.changeLevel     = changeLevel;
window.changeSubject   = changeSubject;
window.startNotion     = startNotion;
window.showScreen      = showScreen;
window.confirmSubject  = confirmSubject;
window.startChapterEval = startChapterEval;
window.openDailyLesson  = openDailyLesson;
window.startDailyNotion = startDailyNotion;

/**
 * Réinitialise toutes les notions du chapitre courant au niveau 1.
 * Appelé depuis index.html via window.__resetCurrentChapter.
 */
window.__resetCurrentChapter = function() {
  if (!_currentChapter) return;
  const chapter = _currentChapter;

  // Remet toutes les notions principales à level 1
  (chapter.notions || []).forEach(notion => {
    if (!state.notionProgress[chapter.id]) state.notionProgress[chapter.id] = {};
    const cur = state.notionProgress[chapter.id][notion.id];
    if (cur) {
      cur.level = 1;
    } else {
      state.notionProgress[chapter.id][notion.id] = { level: 1, totalDone: 0 };
    }
  });

  // Remet aussi les notions L1 bonus si présentes
  (chapter.l1Bonus?.notions || []).forEach(notion => {
    if (!state.notionProgress[chapter.id]) state.notionProgress[chapter.id] = {};
    const cur = state.notionProgress[chapter.id][notion.id];
    if (cur) {
      cur.level = 1;
    } else {
      state.notionProgress[chapter.id][notion.id] = { level: 1, totalDone: 0 };
    }
  });

  saveState();

  // Rafraîchit l'affichage du chemin
  renderChapterPath(chapter);

  // Toast de confirmation
  const toast = document.createElement('div');
  toast.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:#1E293B;color:#fff;padding:10px 20px;border-radius:999px;font-size:.85rem;font-weight:700;z-index:9999;box-shadow:0 4px 16px rgba(0,0,0,.25)';
  toast.textContent = '🔄 Chapitre réinitialisé au niveau 1';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
};

// ══════════════════════════════════════════════════════
// ONBOARDING
// ══════════════════════════════════════════════════════
function buildOnboarding() {
  const container = document.getElementById('level-cards-container');
  if (!container) return;
  container.innerHTML = '';
  SCHOOL_LEVELS.forEach(level => {
    const card = document.createElement('div');
    card.className = 'level-card';
    card.innerHTML = `
      <span class="level-card__icon">${level.icon}</span>
      <div class="level-card__info"><h3>${level.label}</h3><p>${level.subtitle}</p></div>
      <span class="level-card__arrow">→</span>`;
    card.addEventListener('click', () => {
      document.querySelectorAll('.level-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      _selectedLevel = level.id;
      document.getElementById('btn-start').disabled = false;
    });
    container.appendChild(card);
  });
}

function startApp() {
  if (!_selectedLevel) return;
  state.currentLevel = _selectedLevel;
  saveState();
  showSubjectPicker();
}

// ══════════════════════════════════════════════════════
// SUBJECT PICKER
// ══════════════════════════════════════════════════════
function showSubjectPicker() {
  buildSubjectPicker();
  showScreen('subject-picker');
}

function buildSubjectPicker() {
  const grid = document.getElementById('subject-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const currentLevel = state.currentLevel;

  Object.values(SUBJECTS).forEach(subject => {
    const hasContent = subject.levels?.[currentLevel]?.chapitres?.length > 0;
    const isActive = state.currentSubject === subject.id;
    const isComingSoon = subject.comingSoon || !hasContent;

    const card = document.createElement('button');
    card.className = `subject-card${isActive ? ' subject-card--selected' : ''}${isComingSoon ? ' subject-card--soon' : ''}`;
    card.disabled = isComingSoon;
    card.innerHTML = `
      <div class="subject-card__emoji">${subject.emoji}</div>
      <div class="subject-card__label">${subject.label}</div>
      <div class="subject-card__desc">${subject.description}</div>
      ${isComingSoon ? '<div class="subject-card__soon">Bientôt</div>' : ''}
      ${isActive ? '<div class="subject-card__check">✓</div>' : ''}`;
    if (!isComingSoon) {
      card.addEventListener('click', () => {
        document.querySelectorAll('.subject-card').forEach(c => c.classList.remove('subject-card--selected'));
        document.querySelectorAll('.subject-card .subject-card__check').forEach(c => c.remove());
        card.classList.add('subject-card--selected');
        const check = document.createElement('div');
        check.className = 'subject-card__check'; check.textContent = '✓';
        card.appendChild(check);
        _selectedSubject = subject.id;
        document.getElementById('btn-confirm-subject').disabled = false;
      });
    }
    grid.appendChild(card);
  });

  if (state.currentSubject) {
    _selectedSubject = state.currentSubject;
    document.getElementById('btn-confirm-subject').disabled = false;
  }
}

function confirmSubject() {
  if (!_selectedSubject) return;
  state.currentSubject = _selectedSubject;
  saveState();
  renderHome(); showScreen('home'); showSidebar();
}

// ══════════════════════════════════════════════════════
// HOME
// ══════════════════════════════════════════════════════
export function renderHome() {
  const subject = SUBJECTS[state.currentSubject];
  const level = subject?.levels?.[state.currentLevel];
  if (!level) return;

  updateStats();
  updateSidebarSubject();
  setText('home-greeting', greeting());
  setText('home-level-label', `${subject.label} · ${level.label}`);
  setText('home-level-pill', `${subject.emoji} ${level.label}`);

  // ── Bannière Leçon du jour ──
  renderDailyBanner();

  const grid = document.getElementById('chapter-grid');
  if (!grid) return;
  grid.innerHTML = '';

  level.chapitres.forEach(ch => {
    const pct = chapterCompletion(ch);
    const card = document.createElement('div');
    card.className = 'chapter-card';
    card.innerHTML = `
      <div class="chapter-card__icon">${ch.icon}</div>
      <div class="chapter-card__body">
        <div class="chapter-card__title">${ch.title}</div>
        <div class="chapter-card__desc">${ch.description}</div>
        <div class="chapter-card__progress">
          <div class="progress-bar progress-bar--thin">
            <div class="progress-fill" style="width:${pct}%"></div>
          </div>
          <span class="chapter-card__pct">${pct}%</span>
        </div>
      </div>
      <div class="chapter-card__arr">→</div>`;
    card.addEventListener('click', () => openChapter(ch.id));
    grid.appendChild(card);
  });
}

function updateSidebarSubject() {
  const subject = SUBJECTS[state.currentSubject];
  const level = subject?.levels?.[state.currentLevel];
  const el = document.getElementById('sb-subject-label');
  if (el && subject) el.textContent = `${subject.emoji} ${subject.label}`;
  const lvlEl = document.getElementById('sb-level-label');
  if (lvlEl && level) lvlEl.textContent = level.label;
}

// ══════════════════════════════════════════════════════
// CHAPTER PATH — bulles améliorées avec anneau de progression
// ══════════════════════════════════════════════════════
export function openChapter(chapterId) {
  const subject = SUBJECTS[state.currentSubject];
  const level = subject?.levels?.[state.currentLevel];
  _currentChapter = level?.chapitres.find(c => c.id === chapterId);
  if (!_currentChapter) return;
  renderChapterPath(_currentChapter);
  showScreen('chapter');
}

function renderChapterPath(chapter) {
  setText('chapter-nav-title', chapter.title);

  // ── Bouton Évaluation dans le header ──
  const evalBtn = document.getElementById('chapter-eval-btn');
  if (evalBtn) {
    // Vérifie si assez de notions débloquées pour une éval (au moins 1 notion avec levels 3,4,5)
    const hasEval = chapter.notions?.some(n =>
      n.levels && n.levels.length >= 6 && getNotionLevel(chapter.id, n.id) >= 1
    );
    evalBtn.style.display = hasEval ? '' : 'none';
    evalBtn.onclick = () => startChapterEval(chapter.id);
  }

  const body = document.getElementById('chapter-path-body');
  if (!body) return;
  body.innerHTML = '';

  renderNotionBubbles(body, chapter, chapter.notions, false);

  if (chapter.l1Bonus) {
    const sep = document.createElement('div');
    sep.className = 'path-section-sep';
    sep.innerHTML = `
      <div class="path-sep__line"></div>
      <div class="path-sep__label">
        <span class="path-sep__badge">🎓 Prolongement L1</span>
        <span class="path-sep__sub">Optionnel — pour aller plus loin</span>
      </div>
      <div class="path-sep__line"></div>`;
    body.appendChild(sep);
    renderNotionBubbles(body, chapter, chapter.l1Bonus.notions, true);
  }
}

// ══════════════════════════════════════════════════════
// ÉVALUATION CHAPITRE
// ══════════════════════════════════════════════════════

/**
 * Construit les questions d'évaluation pour un chapitre.
 * Pour chaque notion débloquée ayant 6 niveaux :
 *   → 1 question au niveau 3 (idx 2), 1 au niveau 4 (idx 3), 1 au niveau 5 (idx 4)
 * Total = notions_éligibles × 3
 */
function buildChapterEvalQuestions(chapter) {
  const questions = [];
  const evalLevelIndices = [2, 3, 4]; // niveaux 3, 4, 5 (base 1) → indices 2, 3, 4

  (chapter.notions || []).forEach((notion, idx) => {
    // Notion doit être débloquée et avoir au moins 5 niveaux
    const unlocked = getNotionLevel(chapter.id, notion.id) >= 1;
    if (!unlocked) return;
    if (!notion.levels || notion.levels.length < 5) return;

    evalLevelIndices.forEach(levelIdx => {
      const pool = notion.levels[levelIdx];
      if (!pool || pool.length === 0) return;
      // 1 question aléatoire par niveau
      const q = pool[Math.floor(Math.random() * pool.length)];
      questions.push({
        ...q,
        _notionLabel: notion.label,
        _notionIcon:  notion.icon || '📐',
        _evalLevel:   levelIdx + 1,   // niveau affiché (3, 4 ou 5)
      });
    });
  });

  return questions;
}

export function startChapterEval(chapterId) {
  const subject = SUBJECTS[state.currentSubject];
  const lvl     = subject?.levels?.[state.currentLevel];
  const chapter = lvl?.chapitres.find(c => c.id === chapterId);
  if (!chapter) return;

  const questions = buildChapterEvalQuestions(chapter);

  if (questions.length === 0) {
    // Pas assez de progression — on informe l'utilisateur
    showEvalNotAvailable(chapter);
    return;
  }

  _currentChapter = chapter;
  _isEvalMode     = true;

  showScreen('exercise');
  requestAnimationFrame(() => initDraftPanel());
  initChapterEvalSession(chapter, questions, onEvalFinished);
}

function showEvalNotAvailable(chapter) {
  // Mini modal dans la page chapitre
  const body = document.getElementById('chapter-path-body');
  if (!body) return;
  const toast = document.createElement('div');
  toast.className = 'eval-toast';
  toast.innerHTML = `
    <span>📝</span>
    <div>
      <strong>Évaluation non disponible</strong><br>
      <span>Complète au moins une notion du chapitre pour débloquer l'évaluation.</span>
    </div>
    <button onclick="this.parentElement.remove()">✕</button>`;
  body.prepend(toast);
  setTimeout(() => toast?.remove(), 4000);
}

function onEvalFinished({ xpEarned, correct, total }) {
  _isEvalMode = false;

  state.totalXP += xpEarned;
  state.dailyXP += xpEarned;
  state.exercisesCompleted = (state.exercisesCompleted || 0) + total;
  saveState();
  updateStats();

  const pct   = Math.round((correct / total) * 100);
  const grade = pct === 100 ? '🏆 Parfait !' : pct >= 80 ? '🥇 Excellent' : pct >= 60 ? '🥈 Bien' : pct >= 40 ? '🥉 Passable' : '📚 À retravailler';

  // Écran résultat spécifique éval
  setText('result-trophy',  pct === 100 ? '🏆' : pct >= 60 ? '🥈' : '🥉');
  setText('result-title',   `Évaluation — ${grade}`);
  setText('result-sub',     `${correct}/${total} bonnes réponses · niveaux 3, 4 et 5`);
  setText('r-score',        `${pct}%`);
  setText('r-xp',           `+${xpEarned} XP`);
  setText('r-accuracy',     `${pct}%`);
  setText('r-level-new',    `${correct}/${total}`);

  // Bouton rejouer spécifique
  const retryBtn = document.getElementById('result-retry-btn');
  if (retryBtn) retryBtn.textContent = '🔄 Refaire l\'évaluation';

  showScreen('result');
}

function renderNotionBubbles(container, chapter, notions, isL1) {
  notions.forEach((notion, idx) => {
    const lvl = getNotionLevel(chapter.id, notion.id);
    const unlocked = isL1
      ? isNotionUnlocked(chapter.id, chapter.l1Bonus.notions, idx)
        && getNotionLevel(chapter.id, chapter.notions[chapter.notions.length - 1].id) >= 1
      : isNotionUnlocked(chapter.id, notions, idx);

    const isMastered = lvl >= 6;
    const inProgress = lvl > 0 && lvl < 6;

    // Zigzag connector between notions
    if (idx > 0) {
      const isRight = (idx - 1) % 2 === 1; // previous was right-aligned
      const connector = document.createElement('div');
      connector.className = `path-connector path-connector--${isRight ? 'from-right' : 'from-left'}`;
      connector.innerHTML = `<div class="path-connector__line${lvl > 0 ? ' done' : ''}"></div>`;
      container.appendChild(connector);
    }

    const row = document.createElement('div');
    row.className = 'path-row' + (idx % 2 === 1 ? ' path-row--right' : '');

    // Bubble status
    let statusClass = 'locked';
    if (unlocked) statusClass = isMastered ? 'mastered' : inProgress ? 'in-progress' : 'new';

    // Progress ring SVG (circumference of r=42: ~264)
    const circumference = 264;
    const filled = Math.round((lvl / 6) * circumference);

    const bubble = document.createElement('div');
    bubble.className = `notion-bubble notion-bubble--${statusClass}`;

    bubble.innerHTML = `
      <button class="bubble__btn"
        ${unlocked ? `onclick="startNotion('${chapter.id}','${notion.id}',${isL1})"` : 'disabled'}>
        <div class="bubble__ring-wrap">
          <svg class="bubble__ring-svg" viewBox="0 0 100 100" aria-hidden="true">
            <circle class="bubble__ring-track" cx="50" cy="50" r="42"/>
            ${lvl > 0 ? `<circle class="bubble__ring-fill" cx="50" cy="50" r="42"
              stroke-dasharray="${filled} ${circumference}"
              transform="rotate(-90 50 50)"/>` : ''}
          </svg>
          <div class="bubble__face">
            <div class="bubble__icon">${unlocked ? (notion.icon || '📐') : '🔒'}</div>
            ${isMastered ? '<div class="bubble__star">⭐</div>' : ''}
          </div>
        </div>
        <div class="bubble__info">
          <div class="bubble__label">${notion.label}</div>
          <div class="bubble__sublabel ${statusClass}">
            ${isMastered ? '✓ Maîtrisé' : inProgress ? `Niv. ${lvl}/6` : unlocked ? 'Commencer' : '🔒 Verrouillé'}
          </div>
        </div>
      </button>
    `;

    row.appendChild(bubble);
    container.appendChild(row);
  });
}

// ══════════════════════════════════════════════════════
// BLOCK RENDERER — supporte graph + image
// ══════════════════════════════════════════════════════

/**
 * Extrait le viewBox d'un SVG et renvoie le ratio w/h.
 * Permet de fixer l'aspect-ratio du conteneur pour que le bloc
 * s'adapte à la vraie taille du graphique.
 */
function _svgAspectRatio(svgContent) {
  const m = svgContent?.match(/viewBox=['"]([^'"]+)['"]/);
  if (!m) return null;
  const parts = m[1].trim().split(/\s+|,/);
  if (parts.length < 4) return null;
  const w = parseFloat(parts[2]);
  const h = parseFloat(parts[3]);
  if (!w || !h) return null;
  return (w / h).toFixed(4);
}

/**
 * Réécrit le SVG pour corriger le débordement de texte :
 * - Chaque <text> se voit ajouter un background-rect si absent
 * - On ajoute textLength="…" + lengthAdjust="spacingAndGlyphs" sur
 *   les textes qui risquent de dépasser leur viewBox
 * La solution CSS suffit pour 99% des cas (overflow:visible + clip-path none),
 * on laisse le SVG tel quel et on laisse le conteneur absorber l'overflow.
 */
function renderBlock(block, index) {
  const delay = `animation-delay:${index * 70}ms`;

  if (block.type === 'graph') {
    const ratio = _svgAspectRatio(block.svgContent);
    // Injecte --graph-ratio comme custom property CSS sur le conteneur.
    // CSS l'utilise via aspect-ratio: var(--graph-ratio, auto).
    // _fixGraphBlocks() le lit aussi en fallback pour les vieux navigateurs.
    const ratioStyle = ratio ? `style="--graph-ratio:${ratio}"` : '';

    return `
      <div class="lesson-block lesson-block--graph fade-up" style="${delay}">
        <div class="lesson-block__header"><h3>${block.title}</h3></div>
        <div class="graph-container" ${ratioStyle}>
          <div class="graph-svg-wrap">${block.svgContent || ''}</div>
        </div>
        ${block.caption ? `<p class="media-caption">📊 ${block.caption}</p>` : ''}
        ${block.text ? `<p class="lesson-block__text">${block.text}</p>` : ''}
      </div>`;
  }

  if (block.type === 'image') {
    return `
      <div class="lesson-block lesson-block--image fade-up" style="${delay}">
        <div class="lesson-block__header"><h3>${block.title}</h3></div>
        <div class="image-container">
          <img src="${block.src}" alt="${block.caption || block.title}" loading="lazy"/>
        </div>
        ${block.caption ? `<p class="media-caption">🖼 ${block.caption}</p>` : ''}
        ${block.text ? `<p class="lesson-block__text">${block.text}</p>` : ''}
      </div>`;
  }

  // Standard block types
  return `
    <div class="lesson-block lesson-block--${block.type} fade-up" style="${delay}">
      <div class="lesson-block__header"><h3>${block.title}</h3></div>
      ${block.formula ? `<div class="formula-box">${block.formula}</div>` : ''}
      ${block.text ? `<p class="lesson-block__text">${block.text}</p>` : ''}
    </div>`;
}

// ══════════════════════════════════════════════════════
// NOTION INTRO — layout redessiné
// ══════════════════════════════════════════════════════

/**
 * Post-processing des blocs graphique après injection dans le DOM.
 * Appelé via requestAnimationFrame pour que le layout soit calculé.
 *
 * Fait deux choses :
 * 1. Ajuste la hauteur du graph-container si l'aspect-ratio CSS
 *    n'est pas supporté (fallback pour vieux navigateurs).
 * 2. Corrige les <rect> de fond de texte SVG qui sont trop étroits :
 *    pour chaque <text> ayant un <rect> frère précédent dans le même <g>,
 *    on ajuste le width du rect à la largeur réelle du texte rendu.
 */
function _fixGraphBlocks(container) {
  if (!container) return;

  // ── 1. Ajuster les graph-containers ──────────────────────────────────
  // Si aspect-ratio CSS fonctionne → hauteur automatique ✓
  // Sinon (Safari ancien, etc.) → on force la hauteur manuellement
  container.querySelectorAll('.graph-container').forEach(div => {
    // Récupère le ratio depuis la custom property
    const ratioStr = div.style.getPropertyValue('--graph-ratio')
      || getComputedStyle(div).getPropertyValue('--graph-ratio');
    const ratio = parseFloat(ratioStr);

    if (ratio && ratio > 0) {
      const expectedH = Math.round(div.offsetWidth / ratio);
      // Si la hauteur réelle est trop petite (ex: aspect-ratio non supporté)
      if (div.offsetHeight < expectedH * 0.8) {
        div.style.height = expectedH + 'px';
      }
    } else {
      // Pas de ratio : utilise la hauteur intrinsèque du SVG
      const svg = div.querySelector('svg');
      if (svg) {
        const vb = svg.getAttribute('viewBox');
        if (vb) {
          const parts = vb.trim().split(/\s+|,/);
          if (parts.length >= 4) {
            const svgW = parseFloat(parts[2]);
            const svgH = parseFloat(parts[3]);
            if (svgW && svgH) {
              const naturalH = Math.round(div.offsetWidth * svgH / svgW);
              if (div.offsetHeight < naturalH * 0.8) {
                div.style.height = naturalH + 'px';
              }
            }
          }
        }
      }
    }
  });

  // ── 2. S'assurer que le bloc .lesson-block--graph s'étire ────────────
  // Après que le graph-container a sa bonne hauteur, le bloc parent
  // doit aussi s'adapter (en principe height:auto le fait, mais on force
  // si le navigateur a mis une hauteur figée).
  container.querySelectorAll('.lesson-block--graph').forEach(block => {
    // Retire toute hauteur fixe résiduelle
    block.style.height = '';
    block.style.minHeight = '';
  });

  // ── 3. Ajuster les rects de fond des textes SVG ──────────────────────
  container.querySelectorAll('.graph-svg-wrap svg').forEach(svg => {
    // Pour chaque groupe <g> contenant un <rect> suivi d'un <text>
    svg.querySelectorAll('g').forEach(g => {
      const children = Array.from(g.children);
      children.forEach((child, i) => {
        if (child.tagName === 'text') {
          const prevRect = children[i - 1];
          if (prevRect && prevRect.tagName === 'rect') {
            try {
              const bbox = child.getBBox();
              const padding = 6;
              const newW = bbox.width + padding * 2;
              const newX = bbox.x - padding;
              const newH = bbox.height + padding;
              const newY = bbox.y - padding / 2;
              const curW = parseFloat(prevRect.getAttribute('width') || '0');
              if (newW > curW || curW === 0) {
                prevRect.setAttribute('width',  newW);
                prevRect.setAttribute('x',      newX);
                prevRect.setAttribute('height', newH);
                prevRect.setAttribute('y',      newY);
              }
            } catch(e) {}
          }
        }
      });
    });

    // Cas rect + text à la racine du SVG (sans <g> parent)
    const allChildren = Array.from(svg.children);
    allChildren.forEach((child, i) => {
      if (child.tagName === 'text') {
        const prevRect = allChildren[i - 1];
        if (prevRect && prevRect.tagName === 'rect') {
          try {
            const bbox = child.getBBox();
            const padding = 6;
            const newW = bbox.width + padding * 2;
            const curW = parseFloat(prevRect.getAttribute('width') || '0');
            if (newW > curW || curW === 0) {
              prevRect.setAttribute('width',  newW);
              prevRect.setAttribute('x',      bbox.x - padding);
              prevRect.setAttribute('height', bbox.height + padding);
              prevRect.setAttribute('y',      bbox.y - padding / 2);
            }
          } catch(e) {}
        }
      }
    });
  });
}
export function startNotion(chapterId, notionId, isL1 = false) {
  const subject = SUBJECTS[state.currentSubject];
  const lvl = subject?.levels?.[state.currentLevel];
  let chapter = _currentChapter;
  if (!chapter || chapter.id !== chapterId) {
    chapter = lvl?.chapitres.find(c => c.id === chapterId);
  }
  if (!chapter) return;

  const notionList = isL1 ? chapter.l1Bonus?.notions : chapter.notions;
  const notion = notionList?.find(n => n.id === notionId);
  if (!notion) return;

  _currentChapter = chapter;
  _currentNotion  = notion;
  _currentIsL1    = isL1;

  const currentLvl = getNotionLevel(chapterId, notionId);
  renderNotionIntro(notion, currentLvl, isL1);
  showScreen('notion-intro');
}

function renderNotionIntro(notion, currentLvl, isL1) {
  const el = document.getElementById('notion-intro-body');
  if (!el) return;

  const l = notion.lesson;
  const blocks = notion.fullBlocks || [
    { type: 'definition', title: '📌 Formule clé', formula: l.formula, text: l.text },
    { type: 'example',    title: '💡 Exemple',     text: l.example },
  ];

  // ── Blocs spécifiques au niveau actuel (lessonPerLevels) ──
  const lpl = l?.lessonPerLevels;
  const levelIdx = Math.min(currentLvl, (notion.levels?.length ?? 1) - 1);
  const levelBlocks = (lpl && Array.isArray(lpl) && lpl[levelIdx]?.length)
    ? lpl[levelIdx]
    : null;

  const readingTime = Math.max(1, Math.ceil((blocks.length + (levelBlocks?.length ?? 0)) * 0.8));
  const pct = Math.round((currentLvl / 6) * 100);

  // Progress dots (6 steps)
  const dots = Array.from({ length: 6 }, (_, i) => {
    const cls = i < currentLvl ? 'ni-dot--filled' : i === currentLvl ? 'ni-dot--current' : '';
    return `<span class="ni-dot ${cls}"></span>`;
  }).join('');

  // Section blocs du niveau courant (si présente)
  const levelSection = levelBlocks ? `
    <div class="ni-section ni-section--level">
      <div class="ni-section__header">
        <span class="ni-section__title">🎯 Cours — Niveau ${currentLvl + 1}</span>
        <span class="ni-section__count">${levelBlocks.length} section${levelBlocks.length > 1 ? 's' : ''}</span>
      </div>
      <div class="ni-blocks">
        ${levelBlocks.map((b, i) => renderBlock(b, i)).join('')}
      </div>
    </div>` : '';

  el.innerHTML = `
    <!-- ══ HERO ══ -->
    <div class="ni-hero">
      <div class="ni-hero__orb">${notion.icon || '📐'}</div>
      <div class="ni-hero__text">
        <h1 class="ni-hero__title">${notion.label}</h1>
        <div class="ni-hero__badges">
          <span class="ni-badge">⏱ ${readingTime} min</span>
          <span class="ni-badge">${blocks.length} section${blocks.length > 1 ? 's' : ''}</span>
          ${isL1 ? '<span class="ni-badge ni-badge--l1">🎓 L1</span>' : ''}
          ${currentLvl === 0 ? '<span class="ni-badge ni-badge--new">✨ Nouveau</span>' : ''}
        </div>
      </div>
      <!-- Progression -->
      <div class="ni-level-bar">
        <div class="ni-level-bar__head">
          <span class="ni-level-bar__label">Progression</span>
          <span class="ni-level-bar__val">Niveau ${currentLvl}/6</span>
        </div>
        <div class="ni-level-bar__dots">${dots}</div>
        <div class="ni-level-bar__track">
          <div class="ni-level-bar__fill" style="width:${pct}%"></div>
        </div>
      </div>
    </div>

    <!-- ══ FORMULE CLÉ ══ -->
    <div class="ni-key">
      <div class="ni-key__eyebrow">⚡ Formule clé à retenir</div>
      <div class="ni-key__formula">${l.formula}</div>
      <p class="ni-key__desc">${l.text}</p>
    </div>

    ${levelSection}

    <!-- ══ BLOCS DE COURS ══ -->
    <div class="ni-section">
      <div class="ni-section__header">
        <span class="ni-section__title">📚 Cours détaillé</span>
        <span class="ni-section__count">${blocks.length} section${blocks.length > 1 ? 's' : ''}</span>
      </div>
      <div class="ni-blocks">
        ${blocks.map((b, i) => renderBlock(b, i)).join('')}
      </div>
    </div>
  `;

  setText('notion-intro-nav-title', notion.label);

  // Post-traitement des graphiques : ajuste taille des conteneurs et fonds de texte SVG
  requestAnimationFrame(() => _fixGraphBlocks(el));
}

window.launchExercises = function() {
  showScreen('exercise');
  // Init draft panel after screen switch
  requestAnimationFrame(() => initDraftPanel());
  initNotionSession(_currentChapter, _currentNotion, _currentIsL1, onNotionFinished);
};

function onNotionFinished({ xpEarned, correct, total, passed }) {
  const newLevel = passed
    ? incrementNotionLevel(_currentChapter.id, _currentNotion.id)
    : getNotionLevel(_currentChapter.id, _currentNotion.id);

  // ── Bonus XP si mode leçon du jour ──
  const finalXP = _isDailyMode ? xpEarned * DAILY_XP_BONUS : xpEarned;

  state.totalXP += finalXP;
  state.dailyXP += finalXP;
  state.exercisesCompleted = (state.exercisesCompleted || 0) + total;
  saveState();
  updateStats();

  // ── Marquer la notion comme faite si mode daily ──
  let dayComplete = false;
  if (_isDailyMode && _dailyPoolIndex >= 0) {
    const result = markNotionDone(_dailyPoolIndex);
    dayComplete = result.dayComplete;
  }
  _isDailyMode    = false;
  _dailyPoolIndex = -1;

  const pct = Math.round((correct / total) * 100);
  const xpLabel = _isDailyMode ? `+${finalXP} XP (×${DAILY_XP_BONUS})` : `+${finalXP} XP`;
  setText('result-trophy',  pct === 100 ? '🏆' : pct >= 60 ? '🥈' : '🥉');
  setText('result-title',   passed ? (newLevel === 6 ? '⭐ Maîtrisé !' : `Niveau ${newLevel} !`) : 'Continue !');
  setText('result-sub',     `${correct}/${total} bonnes réponses${dayComplete ? ' · 🎉 Objectif du jour atteint !' : ''}`);
  setText('r-score',        `${pct}%`);
  setText('r-xp',           `+${finalXP} XP`);
  setText('r-accuracy',     `${pct}%`);
  setText('r-level-new',    `Niv. ${newLevel}/6`);
  showScreen('result');
}

// ══════════════════════════════════════════════════════
// COURS COMPLET — supporte graph + image
// ══════════════════════════════════════════════════════
export function openFullLesson() {
  if (!_currentChapter) return;
  renderFullLesson(_currentChapter);
  showScreen('lesson');
}

function renderFullLesson(chapter) {
  setText('lesson-nav-title', chapter.title);
  const tocLinks = document.getElementById('toc-links');
  const content  = document.getElementById('lesson-content');
  if (!tocLinks || !content) return;

  tocLinks.innerHTML = '';
  content.innerHTML  = '';

  const allNotions = [
    ...chapter.notions,
    ...(chapter.l1Bonus ? chapter.l1Bonus.notions.map(n => ({...n, _isL1: true})) : [])
  ];

  allNotions.forEach((notion) => {
    const tocBtn = document.createElement('button');
    tocBtn.className = 'toc-link';
    tocBtn.textContent = notion.label + (notion._isL1 ? ' 🎓' : '');
    tocBtn.addEventListener('click', () => {
      document.getElementById(`notion-section-${notion.id}`)?.scrollIntoView({ behavior: 'smooth' });
    });
    tocLinks.appendChild(tocBtn);

    const section = document.createElement('div');
    section.className = 'lesson-notion-section';
    section.id = `notion-section-${notion.id}`;

    const heading = document.createElement('div');
    heading.className = 'lesson-section-header' + (notion._isL1 ? ' l1' : '');
    heading.innerHTML = `
      <span class="lesson-section-icon">${notion.icon || '∑'}</span>
      <h2>${notion.label}</h2>
      ${notion._isL1 ? '<span class="badge-l1">L1</span>' : ''}`;
    section.appendChild(heading);

    const blocks = notion.fullBlocks || [
      { type: 'definition', title: '📌 Formule', formula: notion.lesson.formula, text: notion.lesson.text },
      { type: 'example',    title: '💡 Exemple',  text: notion.lesson.example },
    ];

    const blocksList = document.createElement('div');
    blocksList.className = 'lesson-notion-blocks';
    blocksList.innerHTML = blocks.map((b, i) => renderBlock(b, i)).join('');
    section.appendChild(blocksList);
    content.appendChild(section);
  });

  // Post-traitement des graphiques après rendu complet
  requestAnimationFrame(() => _fixGraphBlocks(content));
}

// ══════════════════════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════════════════════
export function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById('screen-' + id);
  if (el) el.classList.add('active');
}

function goBack(to) {
  if (to === 'home') { renderHome(); showScreen('home'); }
  else if (to === 'chapter') {
    if (_currentChapter) { renderChapterPath(_currentChapter); showScreen('chapter'); }
    else { renderHome(); showScreen('home'); }
  }
  else showScreen(to);
}
window.goBack = goBack;

function showTab(tab) {
  document.querySelectorAll('.snav').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  if (tab === 'home') {
    renderHome(); showScreen('home');
    document.querySelectorAll('.bnav').forEach((b, i) => b.classList.toggle('active', i === 0));
  } else {
    renderProfile(); showScreen('profile');
    document.querySelectorAll('.bnav').forEach((b, i) => b.classList.toggle('active', i === 2));
  }
}

function changeLevel() {
  state.currentLevel = null; state.currentSubject = null;
  _selectedLevel = null; _selectedSubject = null;
  document.querySelectorAll('.level-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('btn-start').disabled = true;
  document.getElementById('sidebar').classList.add('hidden');
  showScreen('onboarding');
}

function changeSubject() {
  _selectedSubject = state.currentSubject;
  showSubjectPicker();
}

// ══════════════════════════════════════════════════════
// PROFILE
// ══════════════════════════════════════════════════════
function renderProfile() {
  const subject = SUBJECTS[state.currentSubject];
  const level = subject?.levels?.[state.currentLevel];
  setText('profile-level', `${subject?.emoji || ''} ${subject?.label || ''} · ${level?.label || ''}`.trim() || '—');
  setText('p-xp',          state.totalXP);
  setText('p-streak',      state.streak + '🔥');
  setText('p-exercises',   state.exercisesCompleted || 0);

  const grid = document.getElementById('achievement-grid');
  if (!grid) return;
  grid.innerHTML = state.achievements?.length
    ? state.achievements.map(a => `<div class="achievement unlocked">${a}</div>`).join('')
    : '<p style="color:var(--muted);font-size:.85rem">Aucun succès pour l\'instant.</p>';
}

function showSidebar() {
  const sb = document.getElementById('sidebar');
  if (sb) sb.classList.remove('hidden');
}

function updateStats() {
  const daily    = Math.min(state.dailyXP, 50);
  const dailyPct = (daily / 50 * 100).toFixed(0);
  setText('sb-streak',       state.streak);
  setText('sb-xp',           state.totalXP);
  setText('sb-daily-text',   `${daily} / 50 XP`);
  setWidth('sb-daily-bar',   dailyPct + '%');
  setText('home-streak',     state.streak);
  setText('home-xp',         state.totalXP);
  setText('home-daily-text', `${daily} / 50 XP`);
  setWidth('home-daily-bar', dailyPct + '%');
  updateSidebarSubject();
}

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Bonjour 👋';
  if (h < 18) return 'Bon après-midi 👋';
  return 'Bonsoir 👋';
}
function setText(id, val) { const e = document.getElementById(id); if(e) e.textContent = val; }
function setWidth(id, w)  { const e = document.getElementById(id); if(e) e.style.width = w; }

// ══════════════════════════════════════════════════════
// LEÇON DU JOUR
// ══════════════════════════════════════════════════════

function renderDailyBanner() {
  const container = document.getElementById('daily-banner-container');
  if (!container) return;

  const ds = getDailyState();
  const notions = getDailyNotions();
  if (notions.length === 0) { container.innerHTML = ''; return; }

  const pct = Math.round((ds.done / notions.length) * 100);

  container.innerHTML = `
    <button class="daily-banner" onclick="openDailyLesson()">
      <div class="daily-banner__left">
        <span class="daily-banner__icon">${ds.validated ? '🏅' : '☀️'}</span>
        <div>
          <div class="daily-banner__title">Leçon du jour${ds.validated ? ' — Complétée !' : ''}</div>
          <div class="daily-banner__sub">${ds.done}/${notions.length} notions · ×${DAILY_XP_BONUS} XP${ds.streak > 0 ? ` · 🔥 ${ds.streak}j` : ''}</div>
        </div>
      </div>
      <div class="daily-banner__right">
        <div class="daily-banner__bar">
          <div class="daily-banner__fill" style="width:${pct}%"></div>
        </div>
        <span class="daily-banner__arr">→</span>
      </div>
    </button>`;
}

export function openDailyLesson() {
  initDailyPool(SUBJECTS, state.currentSubject, state.currentLevel);
  renderDailyScreen();
  showScreen('daily');
}

function renderDailyScreen() {
  const el = document.getElementById('daily-body');
  if (!el) return;

  const ds      = getDailyState();
  const notions = getDailyNotions();

  if (notions.length === 0) {
    el.innerHTML = `
      <div class="daily-hero">
        <div class="daily-hero__icon">🔒</div>
        <h1 class="daily-hero__title">Leçon du jour</h1>
        <p class="daily-hero__sub">Commence par faire quelques exercices dans un chapitre pour débloquer des notions.</p>
      </div>`;
    return;
  }

  const actualTotal = notions.length;
  const streakHtml = ds.streak > 0 ? `
    <div class="daily-hero__streak">
      <span>🔥 ${ds.streak} jour${ds.streak !== 1 ? 's' : ''} de suite</span>
      ${ds.bestStreak > 1 ? `<span class="daily-hero__best">🏆 Record : ${ds.bestStreak}</span>` : ''}
    </div>` : '';

  const dotsHtml = Array.from({ length: actualTotal }, (_, i) => {
    const poolIdx = ds.indices[i];
    const done    = ds.doneMask.includes(poolIdx);
    return `<span class="daily-dot ${done ? 'daily-dot--done' : ''}"></span>`;
  }).join('');

  el.innerHTML = `
    <div class="daily-hero">
      <div class="daily-hero__icon">${ds.validated ? '🏅' : '☀️'}</div>
      <h1 class="daily-hero__title">Leçon du jour</h1>
      <p class="daily-hero__sub">${actualTotal} notion${actualTotal > 1 ? 's' : ''} · ×${DAILY_XP_BONUS} XP · Reset à minuit</p>
      ${streakHtml}
      <div class="daily-progress-dots">${dotsHtml}</div>
      <div class="daily-progress-label">${ds.done} / ${actualTotal} complétée${ds.done > 1 ? 's' : ''}</div>
    </div>
    <div class="daily-list">
      ${notions.map((item, i) => {
        if (!item) return '';
        const poolIdx = ds.indices[i];
        const done    = ds.doneMask.includes(poolIdx);
        const lvl     = getNotionLevel(item.chapter.id, item.notion.id);
        return `
          <div class="daily-item ${done ? 'daily-item--done' : ''}">
            <div class="daily-item__left">
              <div class="daily-item__num">${done ? '✓' : i + 1}</div>
              <div class="daily-item__info">
                <div class="daily-item__label">${item.notion.label}</div>
                <div class="daily-item__chapter">${item.chapter.icon} ${item.chapter.title}
                  <span class="daily-item__lvl">Niv.${lvl}/6</span>
                </div>
              </div>
            </div>
            <button class="daily-item__btn ${done ? 'daily-item__btn--done' : 'btn btn--primary btn--sm'}"
              ${done ? 'disabled' : `onclick="startDailyNotion('${item.chapter.id}','${item.notion.id}',${!!item.isL1},${poolIdx})"`}>
              ${done ? '✓ Fait' : '▶ Commencer'}
            </button>
          </div>`;
      }).join('')}
    </div>
    ${ds.validated ? `
      <div class="daily-complete-badge">
        <span>🎉 Objectif du jour atteint !</span>
        <span>🔥 Série : ${ds.streak} jour${ds.streak !== 1 ? 's' : ''}</span>
      </div>` : ''}`;
}

export function startDailyNotion(chapterId, notionId, isL1, poolIndex) {
  const subject    = SUBJECTS[state.currentSubject];
  const lvl        = subject?.levels?.[state.currentLevel];
  const chapter    = lvl?.chapitres.find(c => c.id === chapterId);
  if (!chapter) return;

  const notionList = isL1 ? chapter.l1Bonus?.notions : chapter.notions;
  const notion     = notionList?.find(n => n.id === notionId);
  if (!notion) return;

  _currentChapter  = chapter;
  _currentNotion   = notion;
  _currentIsL1     = !!isL1;
  _isDailyMode     = true;
  _dailyPoolIndex  = poolIndex;

  const currentLvl = getNotionLevel(chapterId, notionId);
  renderNotionIntro(notion, currentLvl, !!isL1);
  showScreen('notion-intro');
}
