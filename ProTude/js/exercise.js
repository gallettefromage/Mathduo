/**
 * EXERCISE ENGINE v5
 * - Réponses MCQ mélangées (Fisher-Yates)
 * - toggleHintPanel() : masquer/afficher le panneau cours (desktop)
 */
import { state, saveState, getNotionLevel } from './state.js';

let session = null;

export function initNotionSession(chapter, notion, isL1, onFinished) {
  const currentLevel = getNotionLevel(chapter.id, notion.id);
  let exercises;
  if (notion.levels && notion.levels.length > 0) {
    const idx = Math.min(currentLevel, notion.levels.length - 1);
    exercises = notion.levels[idx];
  } else {
    exercises = notion.exercises || [];
  }
  session = {
    chapter, notion, isL1,
    currentLevel,                  // ← niveau actuel (0-5) pour lessonPerLevels
    queue: [...exercises], retryQueue: [],
    totalQuestions: exercises.length,
    correct: 0, xp: 0,
    answered: false, selected: null,
    hintOpen: false, isRetry: false,
    shuffleMap: null,
    onFinished,
    isEval: false,
  };
  renderQuestion();
}

/**
 * Lance une session d'évaluation sur un chapitre entier.
 * Les questions sont déjà construites (avec _notionLabel attaché).
 */
export function initChapterEvalSession(chapter, questions, onFinished) {
  session = {
    chapter,
    notion: { label: chapter.title, lesson: { formula: '', text: '', example: '' } },
    isL1: false,
    queue: [...questions], retryQueue: [],
    totalQuestions: questions.length,
    correct: 0, xp: 0,
    answered: false, selected: null,
    hintOpen: false, isRetry: false,
    shuffleMap: null,
    onFinished,
    isEval: true,
  };
  renderQuestion();
}

export function retryNotionSession() {
  if (!session) return;
  if (session.isEval) {
    // Pour l'éval, on ne peut pas reconstruire les questions ici → signaler à app.js
    if (session.onRetry) { session.onRetry(); return; }
  }
  initNotionSession(session.chapter, session.notion, session.isL1, session.onFinished);
}

// ── Shuffle Fisher-Yates ─────────────────────────────
function buildShuffleMap(q) {
  const indices = q.answers.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return {
    shuffledAnswers:      indices.map(i => q.answers[i]),
    correctShuffledIndex: indices.indexOf(q.correct),
  };
}

// ── Render question ──────────────────────────────────
function renderQuestion() {
  if (session.queue.length === 0) { finish(); return; }
  // Vider le brouillon à chaque nouvelle question
  clearDraft();
  const q = session.queue[0];
  const total = session.totalQuestions;
  const done  = total - session.queue.length;

  setText('ex-label', session.isRetry ? '🔄 Rattrapage' : `${done + 1} / ${total}`);
  setWidth('ex-progress', ((done / total) * 100) + '%');

  session.answered   = false;
  session.selected   = null;
  session.hintOpen   = false;
  session.shuffleMap = q.type === 'mcq' ? buildShuffleMap(q) : null;

  const hintBtn = document.getElementById('hint-toggle');
  if (hintBtn) { hintBtn.textContent = '📖 Cours'; hintBtn.classList.remove('open'); }

  const valBtn = document.getElementById('btn-validate');
  valBtn.disabled = true;
  valBtn.textContent = 'Valider';
  valBtn.className   = 'btn btn--primary btn--lg btn--block';

  renderDesktopHint(session.notion);

  const body = document.getElementById('ex-body');
  body.innerHTML = '';
  body.appendChild(buildQuestion(q));

  const hintHolder = document.createElement('div');
  hintHolder.id = 'hint-mobile-holder';
  body.appendChild(hintHolder);

  const answersEl = document.createElement('div');
  answersEl.id = 'answers-zone';
  body.appendChild(answersEl);

  q.type === 'mcq' ? renderMCQ(q, answersEl) : renderInput(q, answersEl, valBtn);

  const fb = document.createElement('div');
  fb.id = 'feedback-zone';
  body.appendChild(fb);
}

function buildQuestion(q) {
  const div = document.createElement('div');
  div.className = 'question-card fade-up';
  const badge = session.isRetry
    ? '<span class="q-type q-type--retry">🔄 Rattrapage</span>'
    : `<span class="q-type">${q.type === 'mcq' ? 'QCM' : 'Réponse libre'}</span>`;

  // En mode éval, affiche la notion de la question ; sinon la notion de la session
  const notionLabel = session.isEval && q._notionLabel
    ? q._notionLabel
    : session.notion.label;

  // En mode éval, affiche le niveau de la question
  const evalBadge = session.isEval && q._evalLevel
    ? `<span class="q-eval-level">Niv. ${q._evalLevel}</span>`
    : '';

  div.innerHTML = `
    <div class="q-badges">${badge}<span class="q-notion">${notionLabel}</span>${evalBadge}</div>
    <div class="q-visual">${q.visual || ''}</div>
    <p class="q-text">${q.question}</p>`;
  return div;
}

function renderMCQ(q, container) {
  const { shuffledAnswers } = session.shuffleMap;
  const list = document.createElement('div');
  list.className = 'answers-list';
  ['A','B','C','D'].forEach((letter, i) => {
    if (i >= shuffledAnswers.length) return;
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.innerHTML = `<span class="ans-letter">${letter}</span><span class="ans-text">${shuffledAnswers[i]}</span>`;
    btn.addEventListener('click', () => selectAnswer(btn, i));
    list.appendChild(btn);
  });
  container.appendChild(list);
}

function selectAnswer(btn, shuffledIndex) {
  if (session.answered) return;
  document.querySelectorAll('.answer-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  session.selected = shuffledIndex;
  document.getElementById('btn-validate').disabled = false;
}

function renderInput(q, container, valBtn) {
  const wrap = document.createElement('div');
  wrap.className = 'input-wrap';
  const inp = document.createElement('input');
  inp.type = 'text'; inp.className = 'input-free'; inp.placeholder = 'Votre réponse…';
  inp.addEventListener('input', () => { session.selected = inp.value.trim(); valBtn.disabled = !inp.value.trim(); });
  inp.addEventListener('keydown', e => { if (e.key === 'Enter' && !valBtn.disabled) validateAnswer(); });
  wrap.appendChild(inp);
  container.appendChild(wrap);
  setTimeout(() => inp.focus(), 150);
}

export function validateAnswer() {
  if (!session) return;
  if (session.answered) { nextQuestion(); return; }
  if (session.hintOpen) closeHintMobile();

  session.answered = true;
  const q = session.queue[0];
  let isCorrect = false;

  if (q.type === 'mcq') {
    const { correctShuffledIndex } = session.shuffleMap;
    isCorrect = session.selected === correctShuffledIndex;
    document.querySelectorAll('.answer-btn').forEach((btn, i) => {
      btn.disabled = true;
      if (i === correctShuffledIndex)                btn.classList.add('correct');
      else if (i === session.selected && !isCorrect) btn.classList.add('wrong');
    });
  } else {
    const inp = document.querySelector('.input-free');
    if (inp) {
      isCorrect = inp.value.trim().toLowerCase() === String(q.correct).toLowerCase();
      inp.disabled = true;
      inp.classList.add(isCorrect ? 'correct' : 'wrong');
    }
  }

  if (isCorrect) {
    session.correct++; session.xp += 15;
    showFeedback(true, q.explanation, 15);
    session.queue.shift();
  } else {
    const failed = session.queue.shift();
    if (!session.isRetry) session.retryQueue.push(failed);
    showFeedback(false, q.explanation, 0);
  }

  const btn = document.getElementById('btn-validate');
  const remaining = session.queue.length + session.retryQueue.length;
  btn.disabled    = false;
  btn.textContent = remaining === 0 ? 'Terminer !' : 'Suivant →';
  btn.className   = `btn btn--${isCorrect ? 'success' : 'danger'} btn--lg btn--block`;
}

function showFeedback(correct, explanation, xp) {
  const zone = document.getElementById('feedback-zone');
  if (!zone) return;
  zone.innerHTML = `
    <div class="feedback ${correct ? 'correct' : 'wrong'} slide-down">
      <div class="feedback__header">
        <span class="feedback__icon">${correct ? '✅' : '❌'}</span>
        <span class="feedback__status">${correct ? 'Correct !' : 'Pas tout à fait…'}</span>
        ${correct && xp ? `<span class="badge badge--xp">+${xp} XP</span>` : ''}
      </div>
      <p class="feedback__explanation">${explanation}</p>
    </div>`;
}

function nextQuestion() {
  if (session.queue.length === 0 && session.retryQueue.length > 0) {
    session.queue = [...session.retryQueue];
    session.retryQueue = [];
    session.isRetry = true;
    session.totalQuestions = session.queue.length;
  }
  renderQuestion();
}

function finish() {
  if (session.onFinished) {
    session.onFinished({ xpEarned: session.xp, correct: session.correct, total: session.totalQuestions, passed: true });
  }
}

// ══════════════════════════════════════════════════════
// HINT PANEL — masquer / afficher (desktop)
// ══════════════════════════════════════════════════════
export function toggleHintPanel() {
  const panel  = document.getElementById('ex-hint-panel');
  const btnEl  = document.getElementById('btn-hide-panel');
  if (!panel) return;
  const collapsed = panel.classList.toggle('panel-collapsed');
  if (btnEl) btnEl.textContent = collapsed ? '▶ Cours' : '◀ Masquer';
}

// ══════════════════════════════════════════════════════
// HINT — mobile overlay
// ══════════════════════════════════════════════════════
export function toggleHint() {
  if (!session) return;
  session.hintOpen ? closeHintMobile() : openHintMobile();
}

function openHintMobile() {
  const { notion } = session;
  const holder = document.getElementById('hint-mobile-holder');
  if (!holder) return;
  holder.innerHTML = `
    <div class="hint-panel-inline slide-down">
      <button class="hint-close" onclick="toggleHint()">✕</button>
      ${buildHintHTML(notion, session?.currentLevel ?? 0)}
    </div>`;
  session.hintOpen = true;
  const btn = document.getElementById('hint-toggle');
  if (btn) { btn.textContent = '✕ Fermer'; btn.classList.add('open'); }
}

function closeHintMobile() {
  const holder = document.getElementById('hint-mobile-holder');
  if (holder) holder.innerHTML = '';
  session.hintOpen = false;
  const btn = document.getElementById('hint-toggle');
  if (btn) { btn.textContent = '📖 Cours'; btn.classList.remove('open'); }
}

// ══════════════════════════════════════════════════════
// LESSON PER LEVEL — helpers
// ══════════════════════════════════════════════════════

/**
 * Retourne les blocs à afficher dans le panneau cours pendant un exercice.
 * Priorité : lesson.lessonPerLevels[currentLevel] s'il existe,
 * sinon null (on affichera le contenu lesson standard).
 *
 * @param {Object} notion      — la notion courante
 * @param {number} currentLevel — niveau 0-5 en cours
 * @returns {Array|null}
 */
function getLevelBlocks(notion, currentLevel) {
  const lpl = notion.lesson?.lessonPerLevels;
  if (!lpl || !Array.isArray(lpl)) return null;
  // Accepte un tableau indexé OU un objet { 0: [...], 1: [...], ... }
  const blocks = lpl[currentLevel];
  if (!blocks || !Array.isArray(blocks) || blocks.length === 0) return null;
  return blocks;
}

/**
 * Construit le HTML du panneau cours (desktop ou mobile).
 * Affiche toujours le contenu lesson.{formula, text, example} de base,
 * puis, si présents, les blocs lessonPerLevels du niveau actuel.
 */
function buildHintHTML(notion, currentLevel) {
  const l          = notion.lesson;
  const levelBlocks = getLevelBlocks(notion, currentLevel);

  const basePart = `
    <div class="hint-header">
      <span class="hint-title">📖 ${notion.label}</span>
    </div>
    <div class="hint-formula">${l.formula}</div>
    <div class="hint-text">${l.text}</div>
    <div class="hint-example">💡 ${l.example}</div>`;

  // Blocs du niveau courant (s'affichent à la place des fullBlocks en mode exercice)
  const levelPart = levelBlocks
    ? `<div class="hint-level-blocks">
        <div class="hint-level-label">📌 Cours — Niveau ${currentLevel + 1}</div>
        ${renderMiniBlocks(levelBlocks)}
      </div>`
    : (notion.fullBlocks ? renderMiniBlocks(notion.fullBlocks) : '');

  return basePart + levelPart;
}

function renderDesktopHint(notion) {
  const idle    = document.getElementById('hint-idle');
  const content = document.getElementById('hint-content-desktop');
  if (!idle || !content) return;
  idle.classList.add('hidden');
  content.classList.remove('hidden');
  content.innerHTML = buildHintHTML(notion, session?.currentLevel ?? 0);
}

function renderMiniBlocks(blocks) {
  return `<div class="hint-blocks">${blocks.map(b => {
    if (b.type === 'graph') {
      return `
        <div class="hint-block hint-block--graph">
          <div class="hint-block__title">${b.title}</div>
          <div class="hint-block__graph">${b.svgContent || ''}</div>
          ${b.caption ? `<p class="hint-block__caption">${b.caption}</p>` : ''}
          ${b.text    ? `<p class="hint-block__text">${b.text}</p>`       : ''}
        </div>`;
    }
    if (b.type === 'image') {
      return `
        <div class="hint-block hint-block--image">
          <div class="hint-block__title">${b.title}</div>
          <img class="hint-block__img" src="${b.src}" alt="${b.caption || b.title}" loading="lazy"/>
          ${b.caption ? `<p class="hint-block__caption">${b.caption}</p>` : ''}
          ${b.text    ? `<p class="hint-block__text">${b.text}</p>`       : ''}
        </div>`;
    }
    return `
      <div class="hint-block hint-block--${b.type}">
        <div class="hint-block__title">${b.title}</div>
        ${b.formula ? `<div class="hint-block__formula">${b.formula}</div>` : ''}
        ${b.text    ? `<p class="hint-block__text">${b.text}</p>`           : ''}
      </div>`;
  }).join('')}</div>`;
}

function setText(id, v)  { const e = document.getElementById(id); if(e) e.textContent = v; }
function setWidth(id, w) { const e = document.getElementById(id); if(e) e.style.width   = w; }

// ══════════════════════════════════════════════════════
// DRAFT PANEL — brouillon dessin + texte
// ══════════════════════════════════════════════════════

let _draft = {
  tool:     'draw',
  color:    '#1E293B',
  size:     3,
  drawing:  false,
  lastX:    0,
  lastY:    0,
  ctx:      null,
  canvas:   null,
  resizeOb: null,
};

/** Initialise le canvas brouillon (appelé une fois au lancement de la session) */
export function initDraftPanel() {
  const canvas = document.getElementById('draft-canvas');
  if (!canvas) return;
  _draft.canvas = canvas;
  _draft.ctx    = canvas.getContext('2d');

  // Resize observer pour redimensionner le canvas proprement
  if (_draft.resizeOb) _draft.resizeOb.disconnect();
  _draft.resizeOb = new ResizeObserver(() => _resizeCanvas());
  const wrap = document.getElementById('draft-canvas-wrap');
  if (wrap) _draft.resizeOb.observe(wrap);
  _resizeCanvas();

  // Pointer events (souris + stylet + tactile)
  canvas.addEventListener('pointerdown', _onPointerDown);
  canvas.addEventListener('pointermove', _onPointerMove);
  canvas.addEventListener('pointerup',   _onPointerUp);
  canvas.addEventListener('pointerout',  _onPointerUp);
  canvas.addEventListener('contextmenu', e => e.preventDefault());

  // ── Resize handle entre textarea et canvas ───────────
  _initResizeHandle();

  // ── Bouton symboles ───────────────────────────────────
  _initSymbolPicker();
}

// ── Resize handle vertical (textarea ↕ canvas) ──────────
function _initResizeHandle() {
  const handle     = document.getElementById('draft-resize-handle');
  const noteWrap   = document.querySelector('.draft-note-wrap');
  const canvasWrap = document.getElementById('draft-canvas-wrap');
  if (!handle || !noteWrap || !canvasWrap) return;

  let startY = 0, startH = 0;

  handle.addEventListener('pointerdown', e => {
    e.preventDefault();
    handle.setPointerCapture(e.pointerId);
    startY = e.clientY;
    // Hauteur actuelle du wrapper texte
    startH = noteWrap.getBoundingClientRect().height;
    handle.classList.add('dragging');
  });

  handle.addEventListener('pointermove', e => {
    if (!handle.hasPointerCapture(e.pointerId)) return;
    // Déplacer vers le haut = agrandir la zone texte (delta négatif → zone plus grande)
    const delta = startY - e.clientY;
    const newH  = Math.max(40, Math.min(startH + delta, 320));
    noteWrap.style.height = newH + 'px';
    // Le canvas prend l'espace restant (flex: 1), on le redimensionne
    _resizeCanvas();
  });

  handle.addEventListener('pointerup', () => {
    handle.classList.remove('dragging');
    _resizeCanvas();
  });
}

// ── Symbol picker ─────────────────────────────────────────
// Symboles — on insère directement les caractères Unicode ou une notation lisible
// Pas de LaTeX brut dans une textarea : on insère ce qui s'affiche
const SYMBOL_GROUPS = [
  { label: 'Structures', symbols: [
    { label: '{ }',   insert: '{ \n   \n}' },
    { label: '|x|',   insert: '| |' },
    { label: '( )',   insert: '(  )' },
    { label: '[ ]',   insert: '[  ]' },
    { label: 'sys',   insert: '{ \n   (1)\n   (2)' },
  ]},
  { label: 'Opérateurs', symbols: [
    { label: '∑',  insert: '∑' },
    { label: '∫',  insert: '∫' },
    { label: '√',  insert: '√' },
    { label: '∞',  insert: '∞' },
    { label: '±',  insert: '±' },
    { label: '×',  insert: '×' },
    { label: '÷',  insert: '÷' },
    { label: '≠',  insert: '≠' },
    { label: '≤',  insert: '≤' },
    { label: '≥',  insert: '≥' },
    { label: '≈',  insert: '≈' },
    { label: '→',  insert: '→' },
    { label: '⟺',  insert: '⟺' },
    { label: '⇒',  insert: '⇒' },
    { label: '∈',  insert: '∈' },
    { label: '∉',  insert: '∉' },
    { label: '⊂',  insert: '⊂' },
    { label: '∀',  insert: '∀' },
    { label: '∃',  insert: '∃' },
  ]},
  { label: 'Fractions & puissances', symbols: [
    { label: 'a/b',  insert: ' / ' },
    { label: 'xⁿ',  insert: '^' },
    { label: 'x₀',  insert: '₀' },
    { label: 'x₁',  insert: '₁' },
    { label: 'x₂',  insert: '₂' },
    { label: 'xₙ',  insert: 'ₙ' },
    { label: '²',   insert: '²' },
    { label: '³',   insert: '³' },
    { label: '½',   insert: '½' },
    { label: '¼',   insert: '¼' },
    { label: '¾',   insert: '¾' },
  ]},
  { label: 'Lettres grecques', symbols: [
    { label: 'α', insert: 'α' },
    { label: 'β', insert: 'β' },
    { label: 'γ', insert: 'γ' },
    { label: 'δ', insert: 'δ' },
    { label: 'ε', insert: 'ε' },
    { label: 'λ', insert: 'λ' },
    { label: 'μ', insert: 'μ' },
    { label: 'π', insert: 'π' },
    { label: 'σ', insert: 'σ' },
    { label: 'θ', insert: 'θ' },
    { label: 'φ', insert: 'φ' },
    { label: 'ω', insert: 'ω' },
    { label: 'Δ', insert: 'Δ' },
    { label: 'Σ', insert: 'Σ' },
    { label: 'Ω', insert: 'Ω' },
    { label: 'Π', insert: 'Π' },
  ]},
];

// Initialisation unique du symbol picker (guard pour éviter listeners multiples)
let _symbolPickerReady = false;

function _initSymbolPicker() {
  const btn      = document.getElementById('draft-symbol-btn');
  const popover  = document.getElementById('draft-symbol-popover');
  if (!btn || !popover) return;

  // ── Construire le contenu du popover (une seule fois) ──
  if (!popover.dataset.built) {
    popover.dataset.built = '1';

    // On stocke les symboles dans un tableau JS indexé,
    // les boutons référencent l'index → pas de problème d'encodage
    const allSymbols = [];
    popover.innerHTML = SYMBOL_GROUPS.map(g => `
      <div class="sym-group">
        <div class="sym-group__label">${g.label}</div>
        <div class="sym-group__chips">
          ${g.symbols.map(s => {
            const idx = allSymbols.push(s.insert) - 1;
            return `<button class="sym-chip" data-idx="${idx}" title="${s.insert}">${s.label}</button>`;
          }).join('')}
        </div>
      </div>`).join('');

    // Délégation d'événement sur le popover (un seul listener)
    popover.addEventListener('mousedown', e => {
      // mousedown pour capturer AVANT que la textarea perde le focus
      const chip = e.target.closest('.sym-chip');
      if (!chip) return;
      e.preventDefault(); // empêche la textarea de perdre sa sélection

      const textarea = document.getElementById('draft-text');
      if (!textarea) return;

      const text  = allSymbols[parseInt(chip.dataset.idx, 10)];
      if (text == null) return;

      const start = textarea.selectionStart ?? textarea.value.length;
      const end   = textarea.selectionEnd   ?? textarea.value.length;
      textarea.value = textarea.value.slice(0, start) + text + textarea.value.slice(end);
      // Repositionner le curseur après le texte inséré
      const cursor = start + text.length;
      textarea.setSelectionRange(cursor, cursor);
      textarea.focus();
    });
  }

  // ── Toggle bouton (éviter les listeners multiples) ──
  if (!_symbolPickerReady) {
    _symbolPickerReady = true;

    btn.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = popover.classList.toggle('visible');
      btn.classList.toggle('active', isOpen);
      if (isOpen) {
        // Positionner le popover au-dessus du bouton (fixed)
        const rect = btn.getBoundingClientRect();
        popover.style.right  = (window.innerWidth - rect.right) + 'px';
        popover.style.bottom = (window.innerHeight - rect.top + 4) + 'px';
        // Si ça sort à gauche, ajuster
        const pRect = popover.getBoundingClientRect();
        if (pRect.left < 8) {
          popover.style.right = 'auto';
          popover.style.left  = '8px';
        }
      }
    });

    document.addEventListener('click', e => {
      if (!popover.contains(e.target) && e.target !== btn) {
        popover.classList.remove('visible');
        btn.classList.remove('active');
      }
    });
  }
}

function _resizeCanvas() {
  const canvas = _draft.canvas;
  if (!canvas) return;
  const wrap = document.getElementById('draft-canvas-wrap');
  if (!wrap) return;
  // Save current drawing
  const imageData = _draft.ctx?.getImageData(0, 0, canvas.width, canvas.height);
  canvas.width  = wrap.clientWidth  || 300;
  canvas.height = wrap.clientHeight || 300;
  // Restore drawing (best effort)
  if (imageData && imageData.width > 0) {
    _draft.ctx.putImageData(imageData, 0, 0);
  }
}

function _getPos(e) {
  const canvas = _draft.canvas;
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width  / rect.width;
  const scaleY = canvas.height / rect.height;
  return {
    x: (e.clientX - rect.left) * scaleX,
    y: (e.clientY - rect.top)  * scaleY,
  };
}

function _onPointerDown(e) {
  e.preventDefault();
  _draft.canvas.setPointerCapture(e.pointerId);
  _draft.drawing = true;
  const { x, y } = _getPos(e);
  _draft.lastX = x; _draft.lastY = y;
  // Draw a dot on single click
  _drawSegment(x, y, x, y);
}

function _onPointerMove(e) {
  if (!_draft.drawing) return;
  e.preventDefault();
  const { x, y } = _getPos(e);
  _drawSegment(_draft.lastX, _draft.lastY, x, y);
  _draft.lastX = x; _draft.lastY = y;
}

function _onPointerUp(e) {
  _draft.drawing = false;
}

function _drawSegment(x1, y1, x2, y2) {
  const ctx = _draft.ctx;
  ctx.save();
  if (_draft.tool === 'erase') {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.strokeStyle = 'rgba(0,0,0,1)';
    ctx.lineWidth = _draft.size * 4;
  } else {
    ctx.globalCompositeOperation = 'source-over';
    ctx.strokeStyle = _draft.color;
    ctx.lineWidth   = _draft.size;
  }
  ctx.lineCap  = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.restore();
}

/** Remet le brouillon à zéro (appelé à chaque nouvelle question) */
export function clearDraft() {
  const canvas = _draft.canvas;
  if (!canvas || !_draft.ctx) return;
  _draft.ctx.clearRect(0, 0, canvas.width, canvas.height);
  const txt = document.getElementById('draft-text');
  if (txt) txt.value = '';
}

/** Ouvre/ferme le panneau brouillon */
export function toggleDraftPanel() {
  const panel = document.getElementById('ex-draft-panel');
  if (!panel) return;
  const isCollapsed = panel.classList.toggle('panel-collapsed');
  const btn = document.getElementById('draft-toggle-bar');
  if (btn) btn.classList.toggle('open', !isCollapsed);
  // Si on vient d'ouvrir → redimensionner le canvas
  if (!isCollapsed) {
    setTimeout(() => {
      _resizeCanvas();
      if (!_draft.ctx) initDraftPanel();
    }, 220); // après la transition CSS
  }
}

export function setDraftTool(tool) {
  _draft.tool = tool;
  document.querySelectorAll('.draft-tool').forEach(b => b.classList.remove('active'));
  document.getElementById('dt-' + tool)?.classList.add('active');
  if (_draft.canvas) _draft.canvas.style.cursor = tool === 'erase' ? 'cell' : 'crosshair';
}

export function setDraftColor(btn) {
  _draft.color = btn.dataset.color;
  document.querySelectorAll('.draft-color').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  // Switch back to draw tool when picking a color
  if (_draft.tool === 'erase') setDraftTool('draw');
}

export function setDraftSize(val) {
  _draft.size = Number(val);
}
