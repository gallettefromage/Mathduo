/**
 * STATE — État global + persistance localStorage
 *
 * notionProgress structure :
 * {
 *   [chapterId]: {
 *     [notionId]: { level: 0-6, totalDone: 0 }
 *   }
 * }
 */

const STORAGE_KEY = 'mathoduo_v4';

export const state = {
  currentLevel:       null,
  currentSubject:     null,   // 'maths' | 'physique' | ...
  totalXP:            0,
  dailyXP:            0,
  streak:             0,
  bestStreak:         0,
  lastPlayDate:       null,
  exercisesCompleted: 0,
  notionProgress:     {},
  achievements:       [],
};

export function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch(e) {}
}

export function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    const parsed = JSON.parse(saved);
    // Deep-merge : on copie chaque clé scalaire,
    // mais on REMPLACE notionProgress entièrement pour préserver la structure
    Object.keys(parsed).forEach(key => {
      if (key === 'notionProgress') {
        // Fusion profonde : on ne remplace pas la référence mais on peuple l'objet existant
        const src = parsed[key] || {};
        Object.keys(src).forEach(chId => {
          if (!state.notionProgress[chId]) state.notionProgress[chId] = {};
          Object.keys(src[chId]).forEach(nId => {
            state.notionProgress[chId][nId] = { ...src[chId][nId] };
          });
        });
      } else {
        state[key] = parsed[key];
      }
    });
  } catch(e) { console.warn('loadState error', e); }
}

/** Retourne la progression d'une notion (level 0-6) */
export function getNotionLevel(chapterId, notionId) {
  return state.notionProgress?.[chapterId]?.[notionId]?.level ?? 0;
}

/** Incrémente le niveau d'une notion (max 6) */
export function incrementNotionLevel(chapterId, notionId) {
  if (!state.notionProgress[chapterId]) state.notionProgress[chapterId] = {};
  const cur = state.notionProgress[chapterId][notionId] ?? { level: 0, totalDone: 0 };
  cur.level = Math.min(6, cur.level + 1);
  cur.totalDone = (cur.totalDone || 0) + 1;
  state.notionProgress[chapterId][notionId] = cur;
  saveState();
  return cur.level;
}

/** Vérifie si une notion est débloquée */
export function isNotionUnlocked(chapterId, notions, notionIndex) {
  if (notionIndex === 0) return true;
  const prevId = notions[notionIndex - 1].id;
  return getNotionLevel(chapterId, prevId) >= 1;
}

/** Calcule % de complétion d'un chapitre */
export function chapterCompletion(chapter) {
  const notions = chapter.notions;
  if (!notions?.length) return 0;
  const total = notions.length * 6;
  const done  = notions.reduce((acc, n) => acc + (getNotionLevel(chapter.id, n.id)), 0);
  return Math.round((done / total) * 100);
}
