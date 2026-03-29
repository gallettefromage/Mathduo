/**
 * EVALUATION.JS — Mini-épreuve par notion
 *
 * Sélectionne 1 question aux niveaux 4, 5 et 6 (= indices 3,4,5)
 * et lance une session dédiée via l'engine exercise.js.
 */

import { getNotionLevel } from './state.js';

// ── Résultats de la dernière éval ────────────────────
let _evalResult = null;

/**
 * Construit le tableau de 3 questions pour l'évaluation.
 * @param {Object} notion  — la notion courante
 * @returns {Array|null}   — null si les niveaux 4-6 sont absents
 */
export function buildEvalExercises(notion) {
  const levels = notion.levels;
  if (!levels || levels.length < 6) return null;

  // Niveaux 4, 5, 6 → indices 3, 4, 5
  const evalLevels = [3, 4, 5];
  const questions  = [];

  evalLevels.forEach(idx => {
    const pool = levels[idx];
    if (!pool || pool.length === 0) return;
    // 1 question aléatoire par niveau
    const q = pool[Math.floor(Math.random() * pool.length)];
    questions.push({ ...q, _evalLevel: idx + 1 }); // tag pour affichage
  });

  return questions.length > 0 ? questions : null;
}

/** Sauvegarde le résultat de l'éval (appelé depuis app.js) */
export function setEvalResult(result) {
  _evalResult = result;
}

/** Récupère le dernier résultat d'éval */
export function getEvalResult() {
  return _evalResult;
}
