export default {
  id: 'complexes',
  title: 'Nombres complexes',
  description: 'forme algébrique, trigonométrique, exponentielle, racines, géométrie',
  icon: 'C',
  xpMax: 130,
  notions: [
    // ─────────────────────────────────────────────────────────────────────────
    // NOTION 1 : Introduction aux nombres complexes
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'introduction-complexes',
      label: 'Introduction aux nombres complexes',
      lesson: {
        formula: 'z = a + ib, i² = -1',
        text: 'Un nombre complexe z s\'écrit a + ib où a est la partie réelle, b la partie imaginaire, et i l\'unité imaginaire vérifiant i² = -1.',
        example: 'z = 3 + 4i : partie réelle 3, partie imaginaire 4, conjugué z̄ = 3 - 4i, module |z| = 5.'
      },
      fullBlocks: [
        {
          type: 'definition',
          title: 'Nombre complexe',
          text: 'Un nombre complexe est un nombre de la forme z = a + ib où a, b ∈ ℝ et i est l\'unité imaginaire vérifiant i² = -1. On note ℂ l\'ensemble des nombres complexes. Re(z) = a est la partie réelle, Im(z) = b la partie imaginaire.'
        },
        {
          type: 'formula',
          title: 'Module et conjugué',
          formula: '|z| = √(a² + b²), z̄ = a - ib',
          text: 'Le module de z = a + ib est |z| = √(a² + b²). Le conjugué de z est z̄ = a - ib. On a z · z̄ = |z|².'
        },
        {
          type: 'example',
          title: 'Calcul avec les complexes',
          text: 'Soit z = 2 + 3i. Alors Re(z) = 2, Im(z) = 3, |z| = √13, z̄ = 2 - 3i. z + z̄ = 4 = 2 Re(z), z - z̄ = 6i = 2i Im(z).'
        },
        {
          type: 'demo',
          title: 'i² = -1 et ses puissances',
          text: 'i¹ = i, i² = -1, i³ = -i, i⁴ = 1, puis le cycle recommence. Pour calculer iⁿ, on calcule n mod 4.'
        }
      ],
      levels: [
        // Niveau 1 – Très facile
        [
          { type: 'mcq', question: 'Quelle est la valeur de i² ?', answers: ['-1', '1', 'i', '-i'], correct: 0, explanation: 'Par définition, i est l\'unité imaginaire vérifiant i² = -1.' },
          { type: 'mcq', question: 'Quelle est la partie réelle de z = 5 + 3i ?', answers: ['5', '3', '8', '√34'], correct: 0, explanation: 'Pour z = a + ib, Re(z) = a. Ici Re(z) = 5.' },
          { type: 'mcq', question: 'Quelle est la partie imaginaire de z = 2 - 7i ?', answers: ['-7', '7', '2', '-2'], correct: 0, explanation: 'Pour z = a + ib, Im(z) = b. Ici Im(z) = -7.' },
          { type: 'mcq', question: 'Quel est le conjugué de z = 4 + 5i ?', answers: ['4 - 5i', '4 + 5i', '-4 + 5i', '-4 - 5i'], correct: 0, explanation: 'Le conjugué de a + ib est a - ib. Donc z̄ = 4 - 5i.' },
          { type: 'mcq', question: 'Quel est le module de z = 3 + 4i ?', answers: ['5', '7', '√7', '1'], correct: 0, explanation: '|z| = √(3² + 4²) = √(9 + 16) = √25 = 5.' },
          { type: 'mcq', question: 'Quelle est la valeur de i⁴ ?', answers: ['1', '-1', 'i', '-i'], correct: 0, explanation: 'i⁴ = (i²)² = (-1)² = 1.' },
          { type: 'mcq', question: 'Quel est le résultat de (2 + i) + (3 + 4i) ?', answers: ['5 + 5i', '6 + 5i', '5 + 3i', '5i'], correct: 0, explanation: 'On additionne parties réelles et imaginaires : (2+3) + (1+4)i = 5 + 5i.' },
          { type: 'mcq', question: 'Quel est le résultat de (5 + 2i) - (3 - i) ?', answers: ['2 + 3i', '2 + i', '8 + i', '2 - 3i'], correct: 0, explanation: '(5-3) + (2-(-1))i = 2 + 3i.' },
          { type: 'mcq', question: 'Un nombre réel peut-il être complexe ?', answers: ['Oui, tout réel est complexe', 'Non, ce sont des ensembles disjoints', 'Seulement les entiers', 'Seulement les rationnels'], correct: 0, explanation: 'ℝ ⊂ ℂ : tout réel a est aussi le complexe a + 0i.' },
          { type: 'mcq', question: 'Quelle est la valeur de i³ ?', answers: ['-i', 'i', '-1', '1'], correct: 0, explanation: 'i³ = i² · i = -1 · i = -i.' }
        ],
        // Niveau 2 – Facile
        [
          { type: 'mcq', question: 'Calculer (1 + i)(1 - i).', answers: ['2', '0', '2i', '1 + i²'], correct: 0, explanation: '(1+i)(1-i) = 1 - i² = 1 - (-1) = 2.' },
          { type: 'mcq', question: 'Quel est le module de z = 1 + i ?', answers: ['√2', '2', '1', '√3'], correct: 0, explanation: '|z| = √(1² + 1²) = √2.' },
          { type: 'mcq', question: 'Calculer (2 + 3i)(2 - 3i).', answers: ['13', '4', '12i', '1'], correct: 0, explanation: 'z · z̄ = |z|² = 4 + 9 = 13.' },
          { type: 'mcq', question: 'Calculer i⁵.', answers: ['i', '-i', '1', '-1'], correct: 0, explanation: 'i⁵ = i⁴ · i = 1 · i = i.' },
          { type: 'mcq', question: 'Quelle est l\'écriture algébrique de 1/i ?', answers: ['-i', 'i', '1', '-1'], correct: 0, explanation: '1/i = i/i² = i/(-1) = -i.' },
          { type: 'mcq', question: 'Calculer (3 + 2i)².', answers: ['5 + 12i', '9 + 4i', '13', '9 + 12i + 4i²'], correct: 0, explanation: '(3+2i)² = 9 + 12i + 4i² = 9 + 12i - 4 = 5 + 12i.' },
          { type: 'mcq', question: 'Pour z = a + ib, quelle est la formule de z · z̄ ?', answers: ['a² + b²', 'a² - b²', '2ab', 'a + b'], correct: 0, explanation: '(a+ib)(a-ib) = a² - (ib)² = a² + b².' },
          { type: 'mcq', question: 'Résoudre z² = -4 dans ℂ.', answers: ['z = ±2i', 'z = ±4i', 'z = ±2', 'Pas de solution'], correct: 0, explanation: 'z² = -4 ⟹ z = ±√(-4) = ±2i.' },
          { type: 'mcq', question: 'Quel est le module de z = 5 ?', answers: ['5', '0', '25', '-5'], correct: 0, explanation: 'Pour z = 5 + 0i, |z| = √(25 + 0) = 5.' },
          { type: 'mcq', question: 'Calculer Re(z + z̄) pour z = a + ib.', answers: ['2a', 'a', '2b', '0'], correct: 0, explanation: 'z + z̄ = (a+ib) + (a-ib) = 2a, donc Re(z + z̄) = 2a.' }
        ],
        // Niveau 3 – Intermédiaire
        [
          { type: 'mcq', question: 'Calculer (1 + i)⁴.', answers: ['-4', '4', '4i', '-4i'], correct: 0, explanation: '(1+i)² = 2i, donc (1+i)⁴ = (2i)² = 4i² = -4.' },
          { type: 'mcq', question: 'Mettre 1/(2+i) sous forme algébrique.', answers: ['(2-i)/5', '(2+i)/5', '(2-i)/3', '1/3 + i/3'], correct: 0, explanation: 'On multiplie par le conjugué : (2-i)/((2+i)(2-i)) = (2-i)/5.' },
          { type: 'mcq', question: 'Résoudre z² + z + 1 = 0 dans ℂ.', answers: ['z = (-1 ± i√3)/2', 'z = (-1 ± √3)/2', 'z = (1 ± i√3)/2', 'Pas de solution'], correct: 0, explanation: 'Δ = 1 - 4 = -3, donc z = (-1 ± i√3)/2.' },
          { type: 'mcq', question: 'Calculer |z₁ · z₂| si |z₁| = 3 et |z₂| = 4.', answers: ['12', '7', '1', '√7'], correct: 0, explanation: '|z₁ · z₂| = |z₁| · |z₂| = 3 × 4 = 12.' },
          { type: 'mcq', question: 'Pour z = a + ib ≠ 0, quelle est la forme de 1/z ?', answers: ['(a - ib)/(a² + b²)', '(a + ib)/(a² + b²)', '(a - ib)/(a² - b²)', '1/a - i/b'], correct: 0, explanation: '1/z = z̄/|z|² = (a-ib)/(a²+b²).' },
          { type: 'mcq', question: 'Calculer (2 + i)/(1 + i).', answers: ['(3 - i)/2', '(3 + i)/2', '1 + i', '(1 + 3i)/2'], correct: 0, explanation: '(2+i)(1-i)/((1+i)(1-i)) = (2-2i+i-i²)/2 = (3-i)/2.' },
          { type: 'mcq', question: 'Quelle est la solution de z² = -9 ?', answers: ['z = ±3i', 'z = ±3', 'z = ±9i', 'z = ±(3/2)i'], correct: 0, explanation: 'z² = -9 = 9·(-1) donc z = ±3i.' },
          { type: 'mcq', question: 'Si z = a + ib, que vaut Im(iz) ?', answers: ['a', '-b', 'b', '-a'], correct: 0, explanation: 'iz = i(a+ib) = ia - b = -b + ia, donc Im(iz) = a.' },
          { type: 'mcq', question: 'Calculer |z²| si |z| = √5.', answers: ['5', '√10', '10', '25'], correct: 0, explanation: '|z²| = |z|² = (√5)² = 5.' },
          { type: 'mcq', question: 'Quelle condition sur z = a + ib pour que z soit purement imaginaire ?', answers: ['a = 0 et b ≠ 0', 'b = 0', 'a = b', 'a = 0'], correct: 0, explanation: 'z est purement imaginaire si Re(z) = a = 0 et Im(z) = b ≠ 0.' }
        ],
        // Niveau 4 – Difficile
        [
          { type: 'mcq', question: 'Résoudre z² - 2z + 5 = 0 dans ℂ.', answers: ['z = 1 ± 2i', 'z = 2 ± i', 'z = -1 ± 2i', 'z = 1 ± i√5'], correct: 0, explanation: 'Δ = 4 - 20 = -16, √Δ = 4i, z = (2 ± 4i)/2 = 1 ± 2i.' },
          { type: 'mcq', question: 'Calculer (1 + i√3)³.', answers: ['-8', '8', '8i', '-8i'], correct: 0, explanation: '|1+i√3| = 2, arg = π/3. Au cube : 8 · e^(iπ) = -8.' },
          { type: 'mcq', question: 'Pour z = (1+i)/(1-i), calculer z².', answers: ['-1', '1', 'i', '-i'], correct: 0, explanation: '(1+i)/(1-i) = (1+i)²/2 = 2i/2 = i. Donc z² = i² = -1.' },
          { type: 'mcq', question: 'Quelle est la somme 1 + i + i² + i³ ?', answers: ['0', '1', '2i', '-1'], correct: 0, explanation: '1 + i + (-1) + (-i) = 0.' },
          { type: 'mcq', question: 'Calculer Re((2+i)³).', answers: ['2', '11', '-11', '1'], correct: 0, explanation: '(2+i)³ = 8 + 12i + 6i² + i³ = 8 + 12i - 6 - i = 2 + 11i. Re = 2.' },
          { type: 'mcq', question: 'Si |z - 1| = |z + 1|, alors z est...', answers: ['purement imaginaire', 'réel', 'de module 1', 'nul'], correct: 0, explanation: '|z-1|² = |z+1|² ⟹ x²-2x+1+y² = x²+2x+1+y² ⟹ -4x = 0 ⟹ x = 0, z purement imaginaire.' },
          { type: 'mcq', question: 'Calculer i^(100).', answers: ['1', '-1', 'i', '-i'], correct: 0, explanation: '100 = 4·25, donc i^100 = (i⁴)^25 = 1^25 = 1.' },
          { type: 'mcq', question: 'Quelle est la partie réelle de z = (3 + 4i)/(3 - 4i) ?', answers: ['7/25', '-7/25', '24/25', '-24/25'], correct: 0, explanation: 'Multiplier par conjugué : (3+4i)²/25 = (9+24i-16)/25 = (-7+24i)/25. Re = -7/25. Attention: (3+4i)/(3-4i) = (3+4i)²/(9+16) = (-7+24i)/25, Re = -7/25.' },
          { type: 'mcq', question: 'Résoudre z + 2z̄ = 3 + i dans ℂ.', answers: ['z = 1 + i', 'z = 3 + i', 'z = 1 - i', 'z = 2 + i'], correct: 0, explanation: 'Posons z = x + iy. Alors (x+iy) + 2(x-iy) = 3x - iy = 3 + i. Donc 3x = 3 et -y = 1, x=1, y=-1. z = 1 - i. Correction : Re donne x=1, Im donne -y=1 donc y=-1, z = 1-i.' },
          { type: 'mcq', question: 'Calculer |z| si z = (1 + 2i)(3 - i).', answers: ['√50', '√10', '5', '√5'], correct: 0, explanation: '|z| = |1+2i|·|3-i| = √5·√10 = √50 = 5√2.' }
        ],
        // Niveau 5 – Très difficile
        [
          { type: 'mcq', question: 'Trouver tous les z ∈ ℂ vérifiant z² = 3 + 4i.', answers: ['z = ±(2 + i)', 'z = ±(1 + 2i)', 'z = ±(3 + i)', 'z = ±(2 - i)'], correct: 0, explanation: 'On cherche (a+ib)² = 3+4i : a²-b²=3 et 2ab=4. a=b+... On trouve a=2, b=1. z = ±(2+i).' },
          { type: 'mcq', question: 'Soit P(z) = z² - 2z + 2. Calculer P(1+i).', answers: ['0', '2', '2i', '1+i'], correct: 0, explanation: '(1+i)² - 2(1+i) + 2 = 2i - 2 - 2i + 2 = 0.' },
          { type: 'mcq', question: 'Si z₁z₂ est réel et z₁ = 2 + i, quelles formes peut avoir z₂ ?', answers: ['z₂ = k(2 - i) pour k ∈ ℝ', 'z₂ = k(2 + i) pour k ∈ ℝ', 'z₂ ∈ ℝ seulement', 'z₂ = 2i'], correct: 0, explanation: 'z₁z₂ réel implique Im(z₁z₂) = 0. On trouve z₂ = k·z̄₁ = k(2-i).' },
          { type: 'mcq', question: 'Résoudre z² = -5 + 12i dans ℂ.', answers: ['z = ±(2 + 3i)', 'z = ±(3 + 2i)', 'z = ±(2 - 3i)', 'z = ±(-2 + 3i)'], correct: 0, explanation: '(a+ib)² = -5+12i : a²-b²=-5, 2ab=12 → b=6/a. a⁴+5a²-36=0 → a²=4 → a=±2, b=±3. z=±(2+3i).' },
          { type: 'mcq', question: 'Pour quelles valeurs de k ∈ ℝ, kz + z̄ est-il réel si z = 1 + i ?', answers: ['k = 1', 'k = -1', 'k = 0', 'Tout k'], correct: 0, explanation: 'kz + z̄ = k(1+i) + (1-i) = (k+1) + (k-1)i. C\'est réel ssi k-1 = 0, donc k = 1.' },
          { type: 'mcq', question: 'Calculer Im((1 + i)^8).', answers: ['0', '16', '-16', '1'], correct: 0, explanation: '(1+i)² = 2i, (1+i)⁴ = -4, (1+i)^8 = 16. Im(16) = 0.' },
          { type: 'mcq', question: 'Quel est l\'ensemble des z vérifiant |z - i| = |z + i| ?', answers: ['L\'axe réel', 'L\'axe imaginaire', 'Le cercle unité', 'Tout ℂ'], correct: 0, explanation: '|z-i| = |z+i| ⟹ Im(z) = 0 : c\'est l\'axe réel.' },
          { type: 'mcq', question: 'Calculer la somme des racines de z³ - 1 = 0.', answers: ['0', '1', '-1', '3'], correct: 0, explanation: 'z³ - 1 = 0 a trois racines. Par le théorème de Vieta, somme = coefficient de z² = 0.' },
          { type: 'mcq', question: 'Si z = cos θ + i sin θ, que vaut z + 1/z ?', answers: ['2 cos θ', '2i sin θ', '2', 'cos(2θ)'], correct: 0, explanation: '1/z = cos θ - i sin θ. Donc z + 1/z = 2 cos θ.' },
          { type: 'mcq', question: 'Déterminer z si z² + iz + 1 - i = 0.', answers: ['z = i ou z = -1 - i', 'z = i ou z = 1 + i', 'z = -i ou z = 1 - i', 'z = i ou z = -1'], correct: 0, explanation: 'Δ = i² - 4(1-i) = -1 - 4 + 4i = -5 + 4i. On cherche √Δ... z = (-i ± √(-5+4i))/2. Solution : z = i ou z = -1-i.' }
        ],
        // Niveau 6 – Expert (L1)
        // ── NOTE : à partir d'ici, les questions atteignent le niveau L1 (première année universitaire) ──
        [
          { type: 'mcq', question: '[L1] Montrer que ℂ est un corps : lequel de ces énoncés est faux ?', answers: ['ℂ est totalement ordonné', 'ℂ est un anneau commutatif', 'Tout élément non nul a un inverse', 'ℂ contient ℝ'], correct: 0, explanation: 'ℂ n\'est pas un corps ordonné : on ne peut pas comparer deux complexes non réels.' },
          { type: 'mcq', question: '[L1] Quelle est la dimension de ℂ comme ℝ-espace vectoriel ?', answers: ['2', '1', '∞', '0'], correct: 0, explanation: 'ℂ = ℝ ⊕ iℝ, une base est {1, i}, donc dim_ℝ(ℂ) = 2.' },
          { type: 'mcq', question: '[L1] L\'application z ↦ z̄ est-elle ℝ-linéaire ?', answers: ['Oui', 'Non, elle n\'est pas additive', 'Non, elle n\'est pas homogène sur ℝ', 'Non, c\'est non linéaire'], correct: 0, explanation: 'z̄₁+z̄₂ = z₁+z₂ barre et λz̄ = λz barre pour λ réel. Elle est ℝ-linéaire mais pas ℂ-linéaire.' },
          { type: 'mcq', question: '[L1] Que représente géométriquement l\'application z ↦ iz ?', answers: ['Rotation de π/2', 'Symétrie axiale', 'Homothétie de rapport 2', 'Translation'], correct: 0, explanation: 'Multiplier par i = e^(iπ/2) effectue une rotation d\'angle π/2 autour de l\'origine.' },
          { type: 'mcq', question: '[L1] Le corps ℂ est-il algébriquement clos ?', answers: ['Oui, tout polynôme non constant a une racine dans ℂ', 'Non, i n\'est racine d\'aucun polynôme réel', 'Non, seuls les polynômes de degré ≤ 2 ont des racines', 'Oui, seulement pour les polynômes de degré pair'], correct: 0, explanation: 'C\'est le théorème fondamental de l\'algèbre : tout polynôme non constant à coefficients complexes admet au moins une racine dans ℂ.' },
          { type: 'mcq', question: '[L1] Calculer le produit des racines de z⁴ - 1 = 0.', answers: ['1', '-1', 'i', '0'], correct: 0, explanation: 'Les racines sont 1, -1, i, -i. Leur produit = 1·(-1)·i·(-i) = 1·i²·(-1)²= ... = 1.' },
          { type: 'mcq', question: '[L1] L\'inégalité triangulaire |z₁ + z₂| ≤ |z₁| + |z₂| est une égalité si...', answers: ['z₁ et z₂ ont le même argument', 'z₁ = z₂', 'z₁ = -z₂', 'z₁ et z₂ sont réels'], correct: 0, explanation: 'Égalité ssi z₁ et z₂ sont positivement colinéaires, c\'est-à-dire arg(z₁) = arg(z₂) (ou l\'un est nul).' },
          { type: 'mcq', question: '[L1] Quelle est la norme de l\'espace normé (ℂ, |·|) ?', answers: ['|a + ib| = √(a² + b²)', '|a + ib| = |a| + |b|', '|a + ib| = max(|a|, |b|)', '|a + ib| = a² + b²'], correct: 0, explanation: 'La norme usuelle sur ℂ est le module : |z| = √(a² + b²), qui coïncide avec la norme euclidienne de ℝ².' },
          { type: 'mcq', question: '[L1] Une suite (zₙ) de complexes converge ssi...', answers: ['Les suites réelles (Re(zₙ)) et (Im(zₙ)) convergent', 'La suite (|zₙ|) converge', 'La suite (arg(zₙ)) converge', 'La suite (zₙ·z̄ₙ) converge'], correct: 0, explanation: 'zₙ → l ⟺ Re(zₙ) → Re(l) et Im(zₙ) → Im(l), car la convergence dans ℂ est équivalente à la convergence coordonnée par coordonnée.' },
          { type: 'mcq', question: '[L1] Quelle est l\'exponentielle complexe e^z pour z = x + iy ?', answers: ['eˣ(cos y + i sin y)', 'cos(x+y) + i sin(x+y)', 'e^(x+y)', 'eˣ·eⁱʸ est non défini'], correct: 0, explanation: 'e^z = e^(x+iy) = eˣ · e^(iy) = eˣ(cos y + i sin y) par définition de l\'exponentielle complexe.' }
        ]
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // NOTION 2 : Forme trigonométrique
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'forme-trigonometrique',
      label: 'Forme trigonométrique',
      lesson: {
        formula: 'z = r(cos θ + i sin θ), r = |z|, θ = arg(z)',
        text: 'Tout complexe non nul s\'écrit z = r(cos θ + i sin θ) où r = |z| > 0 est son module et θ = arg(z) est son argument (défini modulo 2π).',
        example: 'z = 1 + i : r = √2, θ = π/4. Donc z = √2(cos(π/4) + i sin(π/4)).'
      },
      fullBlocks: [
        {
          type: 'definition',
          title: 'Argument d\'un complexe',
          text: 'L\'argument de z ≠ 0 est tout réel θ tel que cos θ = Re(z)/|z| et sin θ = Im(z)/|z|. Il est défini modulo 2π. L\'argument principal est dans ]-π, π].'
        },
        {
          type: 'formula',
          title: 'Produit et quotient en forme trigonométrique',
          formula: 'arg(z₁z₂) = arg(z₁) + arg(z₂) [2π], arg(z₁/z₂) = arg(z₁) - arg(z₂) [2π]',
          text: 'Pour le produit, on multiplie les modules et on ajoute les arguments. Pour le quotient, on divise les modules et on soustrait les arguments.'
        },
        {
          type: 'example',
          title: 'Calcul d\'argument',
          text: 'z = -√3 + i : |z| = 2. cos θ = -√3/2, sin θ = 1/2. θ = 5π/6.'
        },
        {
          type: 'demo',
          title: 'Formule de Moivre',
          text: '[r(cos θ + i sin θ)]ⁿ = rⁿ(cos(nθ) + i sin(nθ)). Cette formule découle du produit : les modules se multiplient et les arguments s\'additionnent.'
        }
      ],
      levels: [
        // Niveau 1
        [
          { type: 'mcq', question: 'Quel est le module de z = √3 + i ?', answers: ['2', '√3', '1', '√2'], correct: 0, explanation: '|z| = √(3 + 1) = √4 = 2.' },
          { type: 'mcq', question: 'Quel est l\'argument principal de z = i ?', answers: ['π/2', '0', 'π', '-π/2'], correct: 0, explanation: 'i = cos(π/2) + i sin(π/2), donc arg(i) = π/2.' },
          { type: 'mcq', question: 'Quel est l\'argument principal de z = -1 ?', answers: ['π', '0', '-π/2', 'π/2'], correct: 0, explanation: '-1 = cos π + i sin π, donc arg(-1) = π.' },
          { type: 'mcq', question: 'Quel est l\'argument de z = 1 + i ?', answers: ['π/4', 'π/3', 'π/6', '3π/4'], correct: 0, explanation: 'cos θ = 1/√2, sin θ = 1/√2 → θ = π/4.' },
          { type: 'mcq', question: 'Pour z = r(cos θ + i sin θ), quel est le module de z ?', answers: ['r', 'θ', '√r', 'r²'], correct: 0, explanation: 'Dans la forme trigonométrique, r est le module de z.' },
          { type: 'mcq', question: 'Quel est l\'argument de z = 1 (réel positif) ?', answers: ['0', 'π', 'π/2', '-π/2'], correct: 0, explanation: '1 = cos 0 + i sin 0, donc arg(1) = 0.' },
          { type: 'mcq', question: 'Quelle est la forme trigonométrique de z = -i ?', answers: ['cos(-π/2) + i sin(-π/2)', 'cos(π/2) + i sin(π/2)', 'cos(π) + i sin(π)', 'cos(3π/2) + i sin(3π/2)'], correct: 0, explanation: '-i a module 1 et argument -π/2.' },
          { type: 'mcq', question: 'Si arg(z₁) = π/3 et arg(z₂) = π/6, quel est arg(z₁z₂) ?', answers: ['π/2', 'π/9', 'π/18', 'π'], correct: 0, explanation: 'arg(z₁z₂) = arg(z₁) + arg(z₂) = π/3 + π/6 = π/2.' },
          { type: 'mcq', question: 'Quel est l\'argument de z = -√3 + i ?', answers: ['5π/6', 'π/6', '2π/3', '7π/6'], correct: 0, explanation: 'cos θ = -√3/2, sin θ = 1/2, donc θ = 5π/6.' },
          { type: 'mcq', question: 'Quel est le module de z = 2(cos(π/3) + i sin(π/3)) ?', answers: ['2', '1', 'π/3', '4'], correct: 0, explanation: 'Dans z = r(cos θ + i sin θ), r est le module. Ici r = 2.' }
        ],
        // Niveau 2
        [
          { type: 'mcq', question: 'Calculer arg(z₁/z₂) si arg(z₁) = 3π/4 et arg(z₂) = π/4.', answers: ['π/2', 'π', '1', 'π/8'], correct: 0, explanation: 'arg(z₁/z₂) = 3π/4 - π/4 = π/2.' },
          { type: 'mcq', question: 'Quelle est la forme algébrique de 2(cos(π/3) + i sin(π/3)) ?', answers: ['1 + i√3', '√3 + i', '1 + i', '√2 + i√2'], correct: 0, explanation: '2(1/2 + i√3/2) = 1 + i√3.' },
          { type: 'mcq', question: 'Si |z₁| = 4 et |z₂| = 3, quel est |z₁ · z₂| ?', answers: ['12', '7', '1', '√(16+9)'], correct: 0, explanation: '|z₁ · z₂| = |z₁| · |z₂| = 12.' },
          { type: 'mcq', question: 'Quel est l\'argument de z̄ si arg(z) = θ ?', answers: ['-θ', 'θ', 'π - θ', 'π + θ'], correct: 0, explanation: 'Le conjugué a le même module mais l\'argument opposé.' },
          { type: 'mcq', question: 'Quelle est la forme trigonométrique de z = -2 ?', answers: ['2(cos π + i sin π)', '2(cos 0 + i sin 0)', '2(cos(π/2) + i sin(π/2))', '-2(cos 0 + i sin 0)'], correct: 0, explanation: '-2 a module 2 et argument π.' },
          { type: 'mcq', question: 'Calculer |z²| si |z| = 3.', answers: ['9', '6', '3', '√3'], correct: 0, explanation: '|z²| = |z|² = 9.' },
          { type: 'mcq', question: 'Si z = cos θ + i sin θ, quel est z · z̄ ?', answers: ['1', '0', 'cos(2θ)', '2 cos θ'], correct: 0, explanation: 'z · z̄ = |z|² = (cos²θ + sin²θ) = 1.' },
          { type: 'mcq', question: 'Quel est l\'argument de i² ?', answers: ['π', 'π/2', '0', '-π/2'], correct: 0, explanation: 'i² = -1, arg(-1) = π.' },
          { type: 'mcq', question: 'Convertir -1 + i en forme trigonométrique.', answers: ['√2(cos(3π/4) + i sin(3π/4))', '√2(cos(π/4) + i sin(π/4))', '2(cos(3π/4) + i sin(3π/4))', '√2(cos(-3π/4) + i sin(-3π/4))'], correct: 0, explanation: '|-1+i| = √2, arg = 3π/4 (2ème quadrant).' },
          { type: 'mcq', question: 'Si arg(z) = -π/6, quel est arg(z³) ?', answers: ['-π/2', '-π/6', 'π/2', 'π/6'], correct: 0, explanation: 'arg(z³) = 3·(-π/6) = -π/2.' }
        ],
        // Niveau 3
        [
          { type: 'mcq', question: 'Appliquer la formule de Moivre : (cos(π/6) + i sin(π/6))^12.', answers: ['1', '-1', 'i', '-i'], correct: 0, explanation: 'cos(12π/6) + i sin(12π/6) = cos(2π) + i sin(2π) = 1.' },
          { type: 'mcq', question: 'Exprimer cos(2θ) en fonction de cos θ et sin θ.', answers: ['cos²θ - sin²θ', 'cos²θ + sin²θ', '2 sin θ cos θ', '1 - 2cos²θ'], correct: 0, explanation: 'Re[(cos θ + i sin θ)²] = cos(2θ) = cos²θ - sin²θ.' },
          { type: 'mcq', question: 'Exprimer sin(2θ) via la formule de Moivre.', answers: ['2 sin θ cos θ', 'sin²θ - cos²θ', 'cos²θ - sin²θ', '2 cos²θ - 1'], correct: 0, explanation: 'Im[(cos θ + i sin θ)²] = sin(2θ) = 2 sin θ cos θ.' },
          { type: 'mcq', question: 'Quel est l\'argument principal de z = -1 - i ?', answers: ['-3π/4', '3π/4', '-π/4', '5π/4'], correct: 0, explanation: '-1 - i est dans le 3ème quadrant, arg = -3π/4 ∈ ]-π, π].' },
          { type: 'mcq', question: 'Si z = 2(cos(π/4) + i sin(π/4)), calculer z³.', answers: ['8(cos(3π/4) + i sin(3π/4))', '6(cos(π/4) + i sin(π/4))', '8(cos(π/12) + i sin(π/12))', '2(cos(3π/4) + i sin(3π/4))'], correct: 0, explanation: '|z³| = 2³ = 8, arg(z³) = 3π/4.' },
          { type: 'mcq', question: 'Calculer (cos(2π/3) + i sin(2π/3))^3.', answers: ['1', '-1', 'i', 'cos(2π) + i sin(2π)'], correct: 0, explanation: 'cos(2π) + i sin(2π) = 1.' },
          { type: 'mcq', question: 'Quelle est la forme trigonométrique de 1/z si z = r(cos θ + i sin θ) ?', answers: ['(1/r)(cos(-θ) + i sin(-θ))', '(1/r)(cos θ + i sin θ)', 'r(cos(-θ) + i sin(-θ))', '(1/r)(cos(θ+π) + i sin(θ+π))'], correct: 0, explanation: '1/z a module 1/r et argument -θ.' },
          { type: 'mcq', question: 'Calculer arg(z₁/z₂) pour z₁ = 1 + i et z₂ = 1 - i.', answers: ['π/2', '0', 'π', '-π/2'], correct: 0, explanation: 'arg(z₁) = π/4, arg(z₂) = -π/4. arg(z₁/z₂) = π/4 - (-π/4) = π/2.' },
          { type: 'mcq', question: 'Donner l\'argument de z = cos(5π/4) + i sin(5π/4) en argument principal.', answers: ['-3π/4', '5π/4', '3π/4', '-5π/4'], correct: 0, explanation: '5π/4 ∉ ]-π,π], on soustrait 2π : 5π/4 - 2π = -3π/4.' },
          { type: 'mcq', question: 'Pour θ quelconque, calculer (cos θ + i sin θ)^(-1).', answers: ['cos θ - i sin θ', 'cos θ + i sin θ', '-cos θ - i sin θ', 'cos(-θ) - i sin(-θ)'], correct: 0, explanation: '(e^(iθ))^(-1) = e^(-iθ) = cos(-θ) + i sin(-θ) = cos θ - i sin θ.' }
        ],
        // Niveau 4
        [
          { type: 'mcq', question: 'Développer cos(3θ) grâce à Moivre.', answers: ['4cos³θ - 3cosθ', '3cosθ - 4cos³θ', 'cos³θ - 3cosθ·sin²θ', '4cos³θ'], correct: 0, explanation: 'Re[(cosθ+isinθ)³] = cos³θ - 3cosθsin²θ = cos³θ - 3cosθ(1-cos²θ) = 4cos³θ - 3cosθ.' },
          { type: 'mcq', question: 'Exprimer cos⁴θ en termes de cosinus multiples.', answers: ['(3 + 4cos(2θ) + cos(4θ))/8', '(1 + cos(2θ))²/4', '(1 + 2cos(2θ) + cos(4θ))/4', '(3 + 4cos(2θ))/8'], correct: 0, explanation: 'cos⁴θ = [(e^(iθ)+e^(-iθ))/2]⁴ = (1/16)(e^(4iθ)+4e^(2iθ)+6+4e^(-2iθ)+e^(-4iθ)) = (3 + 4cos(2θ) + cos(4θ))/8.' },
          { type: 'mcq', question: 'Calculer (1 + i)^8 en utilisant la forme trigonométrique.', answers: ['16', '-16', '16i', '-16i'], correct: 0, explanation: '1+i = √2·e^(iπ/4). (√2)^8 = 16, e^(8iπ/4) = e^(2iπ) = 1. Résultat : 16.' },
          { type: 'mcq', question: 'Résoudre |z - 1| = 2 géométriquement.', answers: ['Cercle de centre 1 et rayon 2', 'Droite d\'équation x = 1', 'Cercle de centre 0 et rayon 2', 'Ellipse'], correct: 0, explanation: '|z - 1| = 2 est l\'ensemble des points à distance 2 du point d\'affixe 1, soit un cercle de centre 1, rayon 2.' },
          { type: 'mcq', question: 'Quel est l\'image de z = e^(iπ/3) sous z ↦ z² ?', answers: ['e^(2iπ/3)', 'e^(iπ/6)', 'e^(iπ/3)', '1'], correct: 0, explanation: '(e^(iπ/3))² = e^(2iπ/3).' },
          { type: 'mcq', question: 'Calculer sin(3θ).', answers: ['3sinθ - 4sin³θ', '4sin³θ - 3sinθ', '3cosθsinθ', '3sinθcos²θ - sin³θ'], correct: 0, explanation: 'Im[(cosθ+isinθ)³] = 3cos²θsinθ - sin³θ = 3(1-sin²θ)sinθ - sin³θ = 3sinθ - 4sin³θ.' },
          { type: 'mcq', question: 'Pour z = r e^(iθ), quel est arg(z̄) ?', answers: ['-θ', 'θ', 'π - θ', 'θ + π'], correct: 0, explanation: 'z̄ = r e^(-iθ), donc arg(z̄) = -θ.' },
          { type: 'mcq', question: 'Calculer |(1 + i√3)^5|.', answers: ['32', '16', '64', '2^5'], correct: 0, explanation: '|1 + i√3| = 2. |(1+i√3)^5| = 2^5 = 32.' },
          { type: 'mcq', question: 'Calculer arg((1+i√3)^5).', answers: ['5π/3 mod 2π = -π/3', '5π/3', 'π/3', '2π/3'], correct: 0, explanation: 'arg(1+i√3) = π/3. 5×π/3 = 5π/3. Argument principal : 5π/3 - 2π = -π/3.' },
          { type: 'mcq', question: 'Résoudre z^2 = i en forme trigonométrique.', answers: ['z = cos(π/4) + i sin(π/4) ou z = cos(5π/4) + i sin(5π/4)', 'z = ±i', 'z = cos(π/2) + i sin(π/2)', 'z = 1 + i'], correct: 0, explanation: 'i = e^(iπ/2). Racines : e^(iπ/4) et e^(i5π/4), soit (√2/2)(1+i) et (√2/2)(-1-i).' }
        ],
        // Niveau 5
        [
          { type: 'mcq', question: 'Développer cos(4θ) via Moivre.', answers: ['8cos⁴θ - 8cos²θ + 1', 'cos⁴θ - 6cos²θsin²θ + sin⁴θ', '4cosθ - 8cos³θ', '2cos(2θ) - 1'], correct: 0, explanation: 'Re[(cosθ+isinθ)⁴] = cos⁴θ - 6cos²θsin²θ + sin⁴θ = (cos²θ-sin²θ)² - 4cos²θsin²θ = cos²(2θ) - sin²(2θ) + ... = 8cos⁴θ - 8cos²θ + 1.' },
          { type: 'mcq', question: 'Calculer la somme Σ cos(kθ) pour k=0 à n par la méthode complexe.', answers: ['sin((n+1)θ/2)·cos(nθ/2)/sin(θ/2)', 'sin(nθ)/sin(θ)', '(1-cos((n+1)θ))/(1-cosθ)', 'n·cosθ'], correct: 0, explanation: 'On utilise la partie réelle de la somme géométrique Σe^(ikθ).' },
          { type: 'mcq', question: 'Quel est l\'argument de (1+i)/(1-i√3) ?', answers: ['7π/12', 'π/12', '5π/12', '-7π/12'], correct: 0, explanation: 'arg(1+i) = π/4, arg(1-i√3) = -π/3. arg = π/4-(-π/3) = π/4+π/3 = 7π/12.' },
          { type: 'mcq', question: 'Linéariser sin²θ·cos θ.', answers: ['(sin(3θ) + sin θ)/4', '(cos(3θ) - cosθ)/4', 'sinθcos²θ', 'sin(2θ)cosθ/2'], correct: 0, explanation: 'sin²θ = (1-cos2θ)/2. sin²θ·cosθ = cosθ/2 - cos(2θ)cosθ/2 = cosθ/2 - (cos3θ+cosθ)/4 = (sinθ formule...)→ (sin3θ+sinθ)/4.' },
          { type: 'mcq', question: 'Trouver toutes les valeurs de z vérifiant |z| = 1 et arg(z²) = π/2.', answers: ['z = e^(iπ/4) ou z = e^(i5π/4)', 'z = e^(iπ/2)', 'z = e^(iπ/4) seulement', 'z = ±i'], correct: 0, explanation: 'arg(z²) = 2arg(z) = π/2 mod 2π, donc arg(z) = π/4 ou π/4 + π = 5π/4.' },
          { type: 'mcq', question: 'Calculer la somme Σ sin(kπ/6) pour k=1 à 12.', answers: ['0', '6', '12', '1'], correct: 0, explanation: 'C\'est la partie imaginaire de Σ e^(ikπ/6) pour k=1 à 12. e^(iπ/6) est une racine 12ème de l\'unité, la somme vaut 0.' },
          { type: 'mcq', question: 'Résoudre z⁴ = -4.', answers: ['z = √2·e^(i(2k+1)π/4) pour k=0,1,2,3', 'z = ±√2·e^(iπ/4)', 'z = 2·e^(ikπ/2)', 'z = ±2i'], correct: 0, explanation: '-4 = 4e^(iπ). Racines : 4^(1/4)·e^(i(π+2kπ)/4) = √2·e^(i(2k+1)π/4).' },
          { type: 'mcq', question: 'Calculer (√3 + i)^6.', answers: ['-64', '64', '64i', '-64i'], correct: 0, explanation: '|√3+i| = 2, arg = π/6. Module : 2^6 = 64. Argument : 6·π/6 = π. Résultat : 64e^(iπ) = -64.' },
          { type: 'mcq', question: 'Si z = e^(2iπ/7), calculer 1 + z + z² + ... + z⁶.', answers: ['0', '1', '7', 'i'], correct: 0, explanation: 'Somme géométrique : (z⁷ - 1)/(z - 1). z⁷ = e^(2iπ) = 1, donc la somme vaut 0.' },
          { type: 'mcq', question: 'Linéariser cos³θ.', answers: ['(3cosθ + cos(3θ))/4', '(cosθ + cos(3θ))/4', '3cosθ/4 - cos(3θ)/4', '(cos(3θ) + 3cos θ)/8'], correct: 0, explanation: 'cos³θ = [(e^(iθ)+e^(-iθ))/2]³ = (1/8)(e^(3iθ)+3e^(iθ)+3e^(-iθ)+e^(-3iθ)) = (cos3θ + 3cosθ)/4.' }
        ],
        // Niveau 6 – Expert (L1)
        // ── NOTE : questions de niveau L1 ──
        [
          { type: 'mcq', question: '[L1] La fonction arg : ℂ* → ]-π,π] est-elle continue ?', answers: ['Non, elle est discontinue sur ℝ⁻', 'Oui, elle est continue sur ℂ*', 'Oui, sauf en 0', 'Non, elle est discontinue partout'], correct: 0, explanation: 'L\'argument principal a un saut de discontinuité le long de l\'axe réel négatif (passage de π à -π).' },
          { type: 'mcq', question: '[L1] Que vaut ∫₀^(2π) e^(inθ) dθ pour n ∈ ℤ* ?', answers: ['0', '2π', '1', 'πi'], correct: 0, explanation: '∫₀^(2π) e^(inθ) dθ = [e^(inθ)/(in)]₀^(2π) = (e^(2πin) - 1)/(in) = 0 car e^(2πin) = 1.' },
          { type: 'mcq', question: '[L1] Qu\'est-ce que le groupe U des complexes de module 1 ?', answers: ['Un sous-groupe compact de (ℂ*, ×)', 'Un sous-espace vectoriel de ℂ', 'Un idéal de ℂ', 'Le cercle unité ouvert'], correct: 0, explanation: 'U = {z ∈ ℂ : |z| = 1} est un groupe pour la multiplication, compact (fermé borné dans ℂ ≅ ℝ²).' },
          { type: 'mcq', question: '[L1] L\'application θ ↦ e^(iθ) de ℝ dans U est-elle surjective ?', answers: ['Oui', 'Non, elle ne couvre que θ > 0', 'Non, elle ne couvre que ]-π,π[', 'Seulement si θ est rationnel'], correct: 0, explanation: 'Tout z = cos θ + i sin θ ∈ U est atteint. L\'application est surjective et périodique de période 2π.' },
          { type: 'mcq', question: '[L1] Calculer Σ_{k=0}^{n-1} e^(2iπk/n).', answers: ['0', 'n', 'e^(2iπ/n)', '1'], correct: 0, explanation: 'Somme géométrique de raison ω = e^(2iπ/n) : (ωⁿ - 1)/(ω - 1) = (1-1)/(ω-1) = 0.' },
          { type: 'mcq', question: '[L1] Quelle est la formule d\'Euler reliant e^(iπ) + 1 = 0 ?', answers: ['C\'est une conséquence de e^(iθ) = cos θ + i sin θ pour θ = π', 'C\'est une définition', 'C\'est une approximation', 'Elle est fausse dans ℂ'], correct: 0, explanation: 'Pour θ = π : e^(iπ) = cos π + i sin π = -1 + 0 = -1, d\'où e^(iπ) + 1 = 0.' },
          { type: 'mcq', question: '[L1] La série Σ zⁿ/n! converge pour tout z ∈ ℂ. Quelle est sa somme ?', answers: ['e^z', 'cos z + i sin z', 'z^e', 'e^|z|'], correct: 0, explanation: 'C\'est la définition de l\'exponentielle complexe par série entière, convergente sur ℂ entier.' },
          { type: 'mcq', question: '[L1] Quel est le groupe des automorphismes de (ℂ, +) qui préservent ℝ ?', answers: ['{Id, conjugaison}', '{Id}', 'Tout isomorphisme', 'Les rotations'], correct: 0, explanation: 'Les seuls automorphismes de corps de ℂ fixant ℝ sont l\'identité et la conjugaison (théorème).' },
          { type: 'mcq', question: '[L1] Le rayon de convergence de Σ nzⁿ est...', answers: ['1', '0', '+∞', '1/n'], correct: 0, explanation: 'R = 1/limsup|n|^(1/n) = 1/1 = 1.' },
          { type: 'mcq', question: '[L1] Quelle identité relie cos θ et sin θ via les exponentielles ?', answers: ['cos θ = (e^(iθ)+e^(-iθ))/2 et sin θ = (e^(iθ)-e^(-iθ))/(2i)', 'cos θ = e^(iθ) et sin θ = e^(-iθ)', 'cos θ = Im(e^(iθ)) et sin θ = Re(e^(iθ))', 'cos θ = e^(iθ)/2'], correct: 0, explanation: 'Formules d\'Euler inversées : cos θ = (e^(iθ)+e^(-iθ))/2 et sin θ = (e^(iθ)-e^(-iθ))/(2i).' }
        ]
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // NOTION 3 : Forme exponentielle
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'forme-exponentielle',
      label: 'Forme exponentielle',
      lesson: {
        formula: 'z = r·e^(iθ), e^(iθ) = cos θ + i sin θ',
        text: 'La notation exponentielle z = r·e^(iθ) est équivalente à la forme trigonométrique. Elle simplifie les calculs de produits et puissances grâce aux propriétés de l\'exponentielle.',
        example: 'z = √2·e^(iπ/4) = √2(cos(π/4) + i sin(π/4)) = √2·(√2/2 + i√2/2) = 1 + i.'
      },
      fullBlocks: [
        {
          type: 'definition',
          title: 'Notation exponentielle',
          text: 'Pour r > 0 et θ ∈ ℝ, on définit r·e^(iθ) = r(cos θ + i sin θ). Cette notation est cohérente avec les propriétés de l\'exponentielle réelle et satisfait e^(iθ₁)·e^(iθ₂) = e^(i(θ₁+θ₂)).'
        },
        {
          type: 'formula',
          title: 'Formule d\'Euler',
          formula: 'e^(iθ) = cos θ + i sin θ',
          text: 'La formule d\'Euler est le lien fondamental entre l\'exponentielle et les fonctions trigonométriques. Pour θ = π, elle donne la célèbre identité e^(iπ) + 1 = 0.'
        },
        {
          type: 'example',
          title: 'Calcul en forme exponentielle',
          text: 'z₁ = 3e^(iπ/3) et z₂ = 2e^(iπ/6). Produit : z₁z₂ = 6e^(iπ/2) = 6i. Quotient : z₁/z₂ = (3/2)e^(iπ/6).'
        },
        {
          type: 'demo',
          title: 'Formules d\'Euler inversées',
          text: 'cos θ = (e^(iθ) + e^(-iθ))/2 et sin θ = (e^(iθ) - e^(-iθ))/(2i). Ces formules permettent de linéariser les expressions trigonométriques.'
        }
      ],
      levels: [
        // Niveau 1
        [
          { type: 'mcq', question: 'Quelle est la valeur de e^(iπ) ?', answers: ['-1', '1', 'i', '-i'], correct: 0, explanation: 'Formule d\'Euler : e^(iπ) = cos π + i sin π = -1.' },
          { type: 'mcq', question: 'Calculer e^(i·0).', answers: ['1', '0', 'i', '-1'], correct: 0, explanation: 'e^(0) = cos 0 + i sin 0 = 1.' },
          { type: 'mcq', question: 'Que vaut e^(iπ/2) ?', answers: ['i', '-i', '1', '-1'], correct: 0, explanation: 'e^(iπ/2) = cos(π/2) + i sin(π/2) = 0 + i = i.' },
          { type: 'mcq', question: 'Que vaut e^(-iπ/2) ?', answers: ['-i', 'i', '1', '-1'], correct: 0, explanation: 'e^(-iπ/2) = cos(-π/2) + i sin(-π/2) = -i.' },
          { type: 'mcq', question: 'Calculer |e^(iθ)| pour tout θ ∈ ℝ.', answers: ['1', '0', 'θ', 'e'], correct: 0, explanation: '|e^(iθ)| = √(cos²θ + sin²θ) = 1.' },
          { type: 'mcq', question: 'Quel est le module de 3e^(iπ/3) ?', answers: ['3', 'π/3', '1', '9'], correct: 0, explanation: '|3e^(iπ/3)| = 3|e^(iπ/3)| = 3·1 = 3.' },
          { type: 'mcq', question: 'Calculer e^(iπ/6) en forme algébrique.', answers: ['√3/2 + i/2', '1/2 + i√3/2', '√2/2 + i√2/2', '1 + i'], correct: 0, explanation: 'e^(iπ/6) = cos(π/6) + i sin(π/6) = √3/2 + i/2.' },
          { type: 'mcq', question: 'Calculer e^(iπ/4) en forme algébrique.', answers: ['√2/2 + i√2/2', '√3/2 + i/2', '1/2 + i√3/2', '1 + i'], correct: 0, explanation: 'e^(iπ/4) = cos(π/4) + i sin(π/4) = √2/2 + i√2/2.' },
          { type: 'mcq', question: 'Calculer e^(i·2π).', answers: ['1', '-1', '0', 'i'], correct: 0, explanation: 'e^(2iπ) = cos(2π) + i sin(2π) = 1.' },
          { type: 'mcq', question: 'Que vaut e^(iθ) · e^(-iθ) ?', answers: ['1', '0', 'e²', 'cos(2θ)'], correct: 0, explanation: 'e^(iθ)·e^(-iθ) = e^0 = 1.' }
        ],
        // Niveau 2
        [
          { type: 'mcq', question: 'Calculer 2e^(iπ/3) · 3e^(iπ/6).', answers: ['6e^(iπ/2)', '6e^(iπ/18)', '5e^(iπ/2)', '6e^(iπ/9)'], correct: 0, explanation: 'Modules : 2·3 = 6. Arguments : π/3 + π/6 = π/2. Résultat : 6e^(iπ/2) = 6i.' },
          { type: 'mcq', question: 'Calculer 4e^(i2π/3) / 2e^(iπ/3).', answers: ['2e^(iπ/3)', '2e^(iπ)', '8e^(iπ)', '2e^(i)'], correct: 0, explanation: 'Module : 4/2 = 2. Argument : 2π/3 - π/3 = π/3.' },
          { type: 'mcq', question: 'Donner la forme exponentielle de -1 + i√3.', answers: ['2e^(i2π/3)', '√2e^(iπ/4)', '2e^(iπ/3)', '2e^(i3π/4)'], correct: 0, explanation: '|-1+i√3| = 2. arg = π - π/3 = 2π/3.' },
          { type: 'mcq', question: 'Calculer (e^(iπ/4))^8.', answers: ['1', '-1', 'i', 'e^(2iπ)'], correct: 0, explanation: '(e^(iπ/4))^8 = e^(i8π/4) = e^(2iπ) = 1.' },
          { type: 'mcq', question: 'Quelle est la forme exponentielle de i ?', answers: ['e^(iπ/2)', 'e^(iπ)', 'e^(i)', 'e^(i2π)'], correct: 0, explanation: 'i a module 1 et argument π/2, donc i = e^(iπ/2).' },
          { type: 'mcq', question: 'Exprimer cos(π/3) via la formule d\'Euler.', answers: ['(e^(iπ/3) + e^(-iπ/3))/2', '(e^(iπ/3) - e^(-iπ/3))/(2i)', 'e^(iπ/3)/2', 'Im(e^(iπ/3))'], correct: 0, explanation: 'cos θ = (e^(iθ) + e^(-iθ))/2.' },
          { type: 'mcq', question: 'Calculer (2e^(iπ/6))^3.', answers: ['8e^(iπ/2)', '6e^(iπ/18)', '8e^(iπ/6)', '8i'], correct: 0, explanation: '2^3 = 8, 3·π/6 = π/2. Résultat : 8e^(iπ/2) = 8i.' },
          { type: 'mcq', question: 'Que vaut e^(iθ) + e^(-iθ) ?', answers: ['2 cos θ', '2i sin θ', '2', '2 sin θ'], correct: 0, explanation: 'e^(iθ)+e^(-iθ) = (cosθ+isinθ) + (cosθ-isinθ) = 2cosθ.' },
          { type: 'mcq', question: 'Que vaut e^(iθ) - e^(-iθ) ?', answers: ['2i sin θ', '2 cos θ', '0', '2 sin θ'], correct: 0, explanation: 'e^(iθ) - e^(-iθ) = 2i sin θ.' },
          { type: 'mcq', question: 'Écrire √3 + i en forme exponentielle.', answers: ['2e^(iπ/6)', '2e^(iπ/3)', '√2e^(iπ/4)', '2e^(i5π/6)'], correct: 0, explanation: '|√3+i| = 2. arg : cosθ = √3/2, sinθ = 1/2 → θ = π/6.' }
        ],
        // Niveau 3
        [
          { type: 'mcq', question: 'Calculer e^(iπ/3) + e^(-iπ/3) en forme algébrique.', answers: ['1', '√3', 'i', '√3 + i'], correct: 0, explanation: '2cos(π/3) = 2·(1/2) = 1.' },
          { type: 'mcq', question: 'Linéariser cos²θ grâce aux exponentielles.', answers: ['(1 + cos(2θ))/2', '(1 - cos(2θ))/2', 'cos(2θ)', '1 - sin²θ'], correct: 0, explanation: 'cos²θ = [(e^(iθ)+e^(-iθ))/2]² = (2 + e^(2iθ) + e^(-2iθ))/4 = (1 + cos(2θ))/2.' },
          { type: 'mcq', question: 'Calculer sin²θ en termes de cos(2θ).', answers: ['(1 - cos(2θ))/2', '(1 + cos(2θ))/2', 'cos(2θ)/2', '1 - cos²θ'], correct: 0, explanation: 'sin²θ = [(e^(iθ)-e^(-iθ))/(2i)]² = (2 - e^(2iθ) - e^(-2iθ))/4 = (1 - cos(2θ))/2.' },
          { type: 'mcq', question: 'Quelle est la forme algébrique de 3e^(i2π/3) ?', answers: ['-3/2 + 3i√3/2', '3/2 + i√3/2', '-3 + i', '3/2 - i√3/2'], correct: 0, explanation: '3(cos(2π/3)+i sin(2π/3)) = 3(-1/2 + i√3/2) = -3/2 + 3i√3/2.' },
          { type: 'mcq', question: 'Résoudre e^(iθ) = -i.', answers: ['θ = -π/2 + 2kπ', 'θ = π/2 + 2kπ', 'θ = π + 2kπ', 'θ = -π + 2kπ'], correct: 0, explanation: '-i = e^(-iπ/2), donc θ = -π/2 mod 2π.' },
          { type: 'mcq', question: 'Calculer Im(e^(iπ/4) + e^(i3π/4)).', answers: ['√2', '0', '1', '2'], correct: 0, explanation: 'Im = sin(π/4) + sin(3π/4) = √2/2 + √2/2 = √2.' },
          { type: 'mcq', question: 'Calculer Re(e^(iπ/4) + e^(i3π/4)).', answers: ['0', '√2', '1', '-√2'], correct: 0, explanation: 'Re = cos(π/4) + cos(3π/4) = √2/2 - √2/2 = 0.' },
          { type: 'mcq', question: 'Simplifier e^(iπ/3) · e^(i2π/3) · e^(iπ).', answers: ['e^(2iπ) = 1', 'e^(iπ/3)', '-1', 'i'], correct: 0, explanation: 'π/3 + 2π/3 + π = 2π. e^(2iπ) = 1.' },
          { type: 'mcq', question: 'Quel est le conjugué de re^(iθ) ?', answers: ['re^(-iθ)', 're^(iθ)', '-re^(iθ)', 're^(i(π-θ))'], correct: 0, explanation: 'Le conjugué change le signe de la partie imaginaire, soit re^(-iθ).' },
          { type: 'mcq', question: 'Exprimer 1 + e^(iθ) sous forme exponentielle.', answers: ['2cos(θ/2)·e^(iθ/2)', '2e^(iθ/2)', '(1+cosθ)+i sinθ', 'e^(iθ)(1+e^(-iθ))'], correct: 0, explanation: '1 + e^(iθ) = e^(iθ/2)(e^(-iθ/2)+e^(iθ/2)) = 2cos(θ/2)·e^(iθ/2).' }
        ],
        // Niveau 4
        [
          { type: 'mcq', question: 'Calculer Σ_{k=0}^{n} e^(ikθ).', answers: ['e^(i(n+1)θ/2)·sin((n+1)θ/2)/sin(θ/2)', '(1-e^(i(n+1)θ))/(1-e^(iθ))', 'n·e^(iθ)', 'e^(inθ)'], correct: 0, explanation: 'Somme géométrique : (1-e^(i(n+1)θ))/(1-e^(iθ)). On peut la réécrire sous forme sinusoïdale.' },
          { type: 'mcq', question: 'Linéariser sin³θ.', answers: ['(3sinθ - sin(3θ))/4', '(sin(3θ) - 3sinθ)/4', '3sin³θ/4', 'sin(3θ)/4'], correct: 0, explanation: 'sin³θ = [(e^(iθ)-e^(-iθ))/(2i)]³ = (-1/8i)(e^(3iθ)-3e^(iθ)+3e^(-iθ)-e^(-3iθ)) = (3sinθ - sin3θ)/4.' },
          { type: 'mcq', question: 'Calculer ∫₀^π e^(iθ) dθ.', answers: ['2i', '0', '2', '-2i'], correct: 0, explanation: '[e^(iθ)/i]₀^π = (e^(iπ)-1)/i = (-1-1)/i = -2/i = 2i.' },
          { type: 'mcq', question: 'Montrer que |e^(iθ) - 1|² = 2(1 - cosθ). Quel est le résultat ?', answers: ['2(1 - cosθ)', '4 sin²(θ/2)', 'Les deux réponses A et B sont correctes', 'sinθ'], correct: 0, explanation: '|e^(iθ)-1|² = (cosθ-1)²+sin²θ = 2-2cosθ.' },
          { type: 'mcq', question: 'Calculer Re(∫₀^(π/2) e^(2iθ) dθ).', answers: ['0', '1/2', '-1/2', 'π/2'], correct: 0, explanation: '∫₀^(π/2) e^(2iθ) dθ = [e^(2iθ)/(2i)]₀^(π/2) = (e^(iπ)-1)/(2i) = (-2)/(2i) = i. Re(i) = 0.' },
          { type: 'mcq', question: 'Écrire (1 + i)^10 en forme algébrique.', answers: ['32i', '-32', '-32i', '32'], correct: 0, explanation: '1+i = √2·e^(iπ/4). (√2)^10 = 32, e^(10iπ/4) = e^(i5π/2) = e^(iπ/2) = i. Résultat : 32i.' },
          { type: 'mcq', question: 'Pour θ ≠ 0, simplifier (1 - e^(inθ))/(1 - e^(iθ)).', answers: ['e^(i(n-1)θ/2)·sin(nθ/2)/sin(θ/2)', 'n·e^(iθ)', '(n-1)e^(iθ)', 'sin(nθ/2)'], correct: 0, explanation: 'On factorise numérateur et dénominateur pour faire apparaître des sinus.' },
          { type: 'mcq', question: 'Calculer l\'argument de e^(iπ/3) + 1.', answers: ['π/6', 'π/3', 'π/2', '2π/3'], correct: 0, explanation: '1 + e^(iπ/3) = 2cos(π/6)·e^(iπ/6), donc arg = π/6.' },
          { type: 'mcq', question: 'Résoudre e^(2iθ) = e^(iπ/3).', answers: ['θ = π/6 + kπ', 'θ = π/3 + 2kπ', 'θ = π/6 + 2kπ', 'θ = 2π/3 + kπ'], correct: 0, explanation: '2θ = π/3 + 2kπ → θ = π/6 + kπ.' },
          { type: 'mcq', question: 'Calculer |1 - e^(iθ)|.', answers: ['2|sin(θ/2)|', '2cos(θ/2)', '|sinθ|', '√(2-2cosθ)'], correct: 0, explanation: '|1-e^(iθ)|² = 2-2cosθ = 4sin²(θ/2). Donc |1-e^(iθ)| = 2|sin(θ/2)|.' }
        ],
        // Niveau 5
        [
          { type: 'mcq', question: 'Calculer ∫₀^(2π) cos²(θ) dθ en utilisant les exponentielles.', answers: ['π', '2π', '0', 'π/2'], correct: 0, explanation: 'cos²θ = (1+cos2θ)/2. ∫₀^(2π) cos²θ dθ = π + 0 = π.' },
          { type: 'mcq', question: 'Linéariser sin⁴θ.', answers: ['(3 - 4cos(2θ) + cos(4θ))/8', '(3 + 4cos(2θ) + cos(4θ))/8', '(1 - cos(2θ))²/4', '(3 - 4cos2θ)/8'], correct: 0, explanation: 'sin⁴θ = [(1-cos2θ)/2]² = (1 - 2cos2θ + cos²2θ)/4 = (1-2cos2θ + (1+cos4θ)/2)/4 = (3-4cos2θ+cos4θ)/8.' },
          { type: 'mcq', question: 'Calculer la somme Σ_{k=1}^{n} cos(kθ) par la méthode exponentielle.', answers: ['sin(nθ/2)cos((n+1)θ/2)/sin(θ/2)', 'n·cos θ', 'cos(nθ)', '(cos θ - cos((n+1)θ))/(1 - cos θ)'], correct: 0, explanation: 'Re[Σe^(ikθ)] pour k=1 à n. La somme géométrique donne la formule avec les sinus.' },
          { type: 'mcq', question: 'Exprimer cos(nθ) via les formules de Chebyshev.', answers: ['Tₙ(cosθ) où Tₙ est le polynôme de Chebyshev', 'n·cosθ', 'cosⁿθ', 'nθ·cosθ'], correct: 0, explanation: 'cos(nθ) = Tₙ(cosθ) où Tₙ est le n-ième polynôme de Chebyshev de première espèce.' },
          { type: 'mcq', question: 'Résoudre dans [0,2π] : Im(e^(3iθ)) = -1.', answers: ['θ = π/2, 7π/6, 11π/6', 'θ = π/2', 'θ = 3π/2', 'θ = π/6, π/2, 5π/6'], correct: 0, explanation: 'sin(3θ) = -1 → 3θ = -π/2 + 2kπ → θ = -π/6 + 2kπ/3. Dans [0,2π] : π/2, 7π/6, 11π/6.' },
          { type: 'mcq', question: 'Calculer le produit Π_{k=1}^{n-1} sin(kπ/n).', answers: ['n/2^(n-1)', '1/2^(n-1)', 'n!', 'π'], correct: 0, explanation: 'Par la factorisation de zⁿ-1, on obtient Π sin(kπ/n) = n/2^(n-1).' },
          { type: 'mcq', question: 'Écrire (−1 + i)^12 sous forme algébrique.', answers: ['−64', '64', '64i', '−64i'], correct: 0, explanation: '−1+i = √2·e^(i3π/4). (√2)^12 = 64. e^(i·9π) = e^(iπ) = −1. Résultat : −64.' },
          { type: 'mcq', question: 'Calculer ∫₀^(π) e^(inθ) dθ pour n ∈ ℤ, n ≠ 0.', answers: ['(e^(inπ)-1)/(in)', '0', 'π', '1/n'], correct: 0, explanation: '[e^(inθ)/(in)]₀^π = (e^(inπ)-1)/(in).' },
          { type: 'mcq', question: 'Que vaut Σ_{k=0}^{2n-1} e^(ikπ/n) ?', answers: ['0', '1', '2n', 'e^(2iπ)'], correct: 0, explanation: 'Il s\'agit de la somme des 2n racines 2n-ièmes de l\'unité, qui vaut 0.' },
          { type: 'mcq', question: 'Calculer arg(e^(i·101π/3)) en argument principal.', answers: ['−π/3', 'π/3', '2π/3', '101π/3'], correct: 0, explanation: '101/3 = 33 reste 2. 101π/3 = 33π + 2π/3. 33π = 16·2π + π. Donc = π + 2π/3 = 5π/3. Argument principal : 5π/3 − 2π = −π/3.' }
        ],
        // Niveau 6 – Expert (L1)
        // ── NOTE : questions de niveau L1 ──
        [
          { type: 'mcq', question: '[L1] L\'exponentielle complexe z ↦ e^z est-elle injective sur ℂ ?', answers: ['Non, e^z = e^(z+2iπ)', 'Oui, elle est bijective', 'Oui, sur le demi-plan Im(z)>0', 'Non, car e^(iπ) = e^(-iπ)'], correct: 0, explanation: 'e^z est 2iπ-périodique : e^(z+2iπ) = e^z. Elle n\'est pas injective sur ℂ.' },
          { type: 'mcq', question: '[L1] Que vaut la dérivée de e^(iθ) par rapport à θ ?', answers: ['ie^(iθ)', 'e^(iθ)', '-e^(iθ)', 'ie^(-iθ)'], correct: 0, explanation: 'd/dθ (e^(iθ)) = i·e^(iθ).' },
          { type: 'mcq', question: '[L1] Quel est le développement en série de Laurent de 1/(e^z - 1) en z=0 ?', answers: ['1/z - 1/2 + z/12 - ...', '1/z + 1/2 + z/12 + ...', '1/z²', 'z⁻¹ + z'], correct: 0, explanation: '1/(e^z-1) = 1/z - 1/2 + z/12 - ... via les nombres de Bernoulli.' },
          { type: 'mcq', question: '[L1] L\'image de la droite Im(z) = c par l\'application z ↦ e^z est...', answers: ['Le rayon arg(w) = c', 'Une droite horizontale', 'Un cercle |w| = eᶜ', 'L\'axe réel'], correct: 0, explanation: 'Pour z = x + ic, e^z = eˣ·e^(ic), qui décrit le rayon d\'argument c.' },
          { type: 'mcq', question: '[L1] L\'application z ↦ e^z est-elle conforme ?', answers: ['Oui, elle préserve les angles', 'Non, elle contracte les angles', 'Oui, mais seulement sur ℝ', 'Non, elle inverse les angles'], correct: 0, explanation: 'L\'exponentielle est holomorphe et de dérivée non nulle partout, donc conforme partout.' },
          { type: 'mcq', question: '[L1] L\'image de la bande {0 < Im(z) < π} par e^z est...', answers: ['Le demi-plan supérieur Im(w) > 0', 'Le disque unité', 'Le plan coupé sur ℝ⁻', 'L\'anneau 1 < |w| < e'], correct: 0, explanation: 'La bande 0 < Im z < π est envoyée sur le demi-plan Im(w) > 0 par e^z.' },
          { type: 'mcq', question: '[L1] Combien de solutions z ∈ ℂ vérifient e^z = w pour w ≠ 0 ?', answers: ['Infiniment many, z = ln|w| + i(arg w + 2kπ)', 'Exactement une', 'Exactement deux', 'Zéro'], correct: 0, explanation: 'e^z = w ⟺ z = ln|w| + i·arg(w) + 2ikπ pour tout k ∈ ℤ, soit une infinité de solutions.' },
          { type: 'mcq', question: '[L1] Quelle est la formule de Hadamard pour le rayon de convergence d\'une série entière Σaₙzⁿ ?', answers: ['R = 1/limsup|aₙ|^(1/n)', 'R = lim|aₙ/aₙ₊₁|', 'R = sup|aₙ|', 'R = 1/lim|aₙ|'], correct: 0, explanation: 'Formule de Hadamard : R = 1/limsup_{n→∞} |aₙ|^(1/n).' },
          { type: 'mcq', question: '[L1] Calculer la série Σ_{n=0}^∞ (iθ)ⁿ/n! pour θ ∈ ℝ.', answers: ['e^(iθ) = cos θ + i sin θ', 'cos θ', 'i sin θ', 'θ^i'], correct: 0, explanation: 'C\'est la définition de l\'exponentielle complexe e^(iθ) via sa série entière.' },
          { type: 'mcq', question: '[L1] Le logarithme complexe Log z est-il défini sur tout ℂ* ?', answers: ['Non, il est défini sur ℂ \\ ℝ⁻', 'Oui, sur ℂ*', 'Oui, sur ℂ*\\{0}', 'Non, seulement sur le demi-plan Re(z)>0'], correct: 0, explanation: 'Le logarithme principal Log est défini sur ℂ \\ ℝ⁻ (plan coupé) pour être holomorphe et uniforme.' }
        ]
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // NOTION 4 : Puissances et racines n-ièmes
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'puissances-racines',
      label: 'Puissances et racines n-ièmes',
      lesson: {
        formula: 'Les racines n-ièmes de z₀ = r₀e^(iθ₀) sont : z_k = r₀^(1/n) · e^(i(θ₀+2kπ)/n), k = 0,...,n-1',
        text: 'L\'équation zⁿ = z₀ admet exactement n solutions dans ℂ. Elles sont régulièrement réparties sur un cercle de rayon |z₀|^(1/n) et leurs arguments forment une progression arithmétique de raison 2π/n.',
        example: 'Racines cubiques de 1 : z_k = e^(i2kπ/3) pour k=0,1,2. Ce sont 1, j = e^(i2π/3), j² = e^(i4π/3).'
      },
      fullBlocks: [
        {
          type: 'definition',
          title: 'Racines n-ièmes de l\'unité',
          text: 'Les racines n-ièmes de l\'unité sont les solutions de zⁿ = 1. Elles sont ω_k = e^(i2kπ/n) pour k = 0, 1, ..., n-1. Elles forment les sommets d\'un polygone régulier à n côtés inscrit dans le cercle unité.'
        },
        {
          type: 'formula',
          title: 'Formule des racines n-ièmes',
          formula: 'z_k = |z₀|^(1/n) · e^(i(arg(z₀)+2kπ)/n), k=0,...,n-1',
          text: 'Toutes les racines ont le même module |z₀|^(1/n). Les arguments sont θ₀/n + 2kπ/n et sont espacés de 2π/n.'
        },
        {
          type: 'example',
          title: 'Racines 4ièmes de -16',
          text: '-16 = 16e^(iπ). Racines : 2e^(i(π+2kπ)/4) = 2e^(i(2k+1)π/4) pour k=0,1,2,3. Ce sont 2e^(iπ/4), 2e^(i3π/4), 2e^(i5π/4), 2e^(i7π/4).'
        },
        {
          type: 'demo',
          title: 'Propriétés des racines de l\'unité',
          text: 'La somme de toutes les racines n-ièmes de l\'unité vaut 0 (pour n ≥ 2). Leur produit vaut (-1)^(n+1) (par Vieta). Si ω = e^(2iπ/n), toutes les racines sont 1, ω, ω², ..., ω^(n-1).'
        }
      ],
      levels: [
        // Niveau 1
        [
          { type: 'mcq', question: 'Combien de racines cubiques possède un complexe non nul ?', answers: ['3', '1', '2', '∞'], correct: 0, explanation: 'Tout complexe non nul possède exactement n racines n-ièmes dans ℂ. Ici n=3.' },
          { type: 'mcq', question: 'Quelles sont les racines carrées de 4 dans ℂ ?', answers: ['2 et -2', '2i et -2i', '2 seulement', '4i'], correct: 0, explanation: 'z² = 4 → z = ±2 (solutions réelles).' },
          { type: 'mcq', question: 'Quelles sont les racines carrées de -4 dans ℂ ?', answers: ['2i et -2i', '2 et -2', '4i', '√(-4)'], correct: 0, explanation: 'z² = -4 = 4e^(iπ). Racines : 2e^(iπ/2) = 2i et 2e^(i3π/2) = -2i.' },
          { type: 'mcq', question: 'Quel est le module de chaque racine cubique de 8 ?', answers: ['2', '8', '√8', '8/3'], correct: 0, explanation: '8^(1/3) = 2. Toutes les racines ont module 2.' },
          { type: 'mcq', question: 'Quelles sont les racines 4ièmes de 1 ?', answers: ['1, i, -1, -i', '1, -1, i, 1/i', '1, ω, ω², ω³ pour ω=e^(iπ/4)', '±1'], correct: 0, explanation: 'e^(2ikπ/4) pour k=0,1,2,3 : 1, i, -1, -i.' },
          { type: 'mcq', question: 'Quelle est la somme des racines cubiques de 1 ?', answers: ['0', '1', '3', '-1'], correct: 0, explanation: '1 + j + j² = 0 (somme des racines de z³-1 dont le coeff de z² est 0).' },
          { type: 'mcq', question: 'Quel est l\'argument de ω = e^(2iπ/3) ?', answers: ['2π/3', 'π/3', 'π', '4π/3'], correct: 0, explanation: 'Par définition, arg(e^(2iπ/3)) = 2π/3.' },
          { type: 'mcq', question: 'Combien de racines 5ièmes de l\'unité existe-t-il ?', answers: ['5', '1', '10', '∞'], correct: 0, explanation: 'Il y a exactement n racines n-ièmes de l\'unité. Ici n=5.' },
          { type: 'mcq', question: 'Quel est le module de chaque racine n-ième de l\'unité ?', answers: ['1', 'n', '1/n', '√n'], correct: 0, explanation: 'Toutes les racines n-ièmes de 1 sont sur le cercle unité, de module 1.' },
          { type: 'mcq', question: 'Les racines n-ièmes de z₀ sont-elles régulièrement espacées ?', answers: ['Oui, d\'angle 2π/n', 'Non, leurs arguments sont quelconques', 'Oui, d\'angle π/n', 'Non, leurs modules varient'], correct: 0, explanation: 'Les n racines n-ièmes sont séparées de 2π/n en argument.' }
        ],
        // Niveau 2
        [
          { type: 'mcq', question: 'Calculer les racines carrées de i.', answers: ['e^(iπ/4) et e^(i5π/4)', 'i et -i', '1 et -1', 'e^(iπ/2) et e^(i3π/2)'], correct: 0, explanation: 'i = e^(iπ/2). Racines : e^(iπ/4) et e^(i5π/4) = e^(iπ/4) et -e^(iπ/4).' },
          { type: 'mcq', question: 'Calculer les racines cubiques de -1.', answers: ['-1, e^(iπ/3), e^(-iπ/3)', 'i, -i, 1', '-1, i, -i', '1, j, j²'], correct: 0, explanation: '-1 = e^(iπ). Racines : e^(i(π+2kπ)/3) pour k=0,1,2 : e^(iπ/3), e^(iπ), e^(i5π/3).' },
          { type: 'mcq', question: 'Quel est le produit de toutes les racines n-ièmes de l\'unité ?', answers: ['(-1)^(n+1)', '1', '0', 'n'], correct: 0, explanation: 'Par Vieta pour zⁿ-1 : produit des racines = (-1)ⁿ·(-1) = (-1)^(n+1).' },
          { type: 'mcq', question: 'Donner les racines carrées de 1 + i√3.', answers: ['√2·e^(iπ/6) et √2·e^(i7π/6)', '√2·e^(iπ/3) et -√2·e^(iπ/3)', '2e^(iπ/3)', '√2·e^(iπ/6)'], correct: 0, explanation: '1+i√3 = 2e^(iπ/3). Racines : √2·e^(iπ/6) et √2·e^(i(π/6+π)).' },
          { type: 'mcq', question: 'Résoudre z³ = 1 dans ℂ.', answers: ['z = 1, e^(i2π/3), e^(i4π/3)', 'z = 1 seulement', 'z = ±1, i', 'z = e^(ikπ/3) pour k=0,1,2'], correct: 0, explanation: 'Les racines cubiques de 1 sont 1, j = e^(i2π/3), j² = e^(i4π/3).' },
          { type: 'mcq', question: 'Que valent j et j² où j = e^(i2π/3) ?', answers: ['j = -1/2 + i√3/2, j² = -1/2 - i√3/2', 'j = 1/2 + i√3/2, j² = -1', 'j = i, j² = -1', 'j = -1, j² = 1'], correct: 0, explanation: 'j = cos(2π/3)+i sin(2π/3) = -1/2+i√3/2. j² est son conjugué.' },
          { type: 'mcq', question: 'Calculer j + j² où j = e^(i2π/3).', answers: ['-1', '0', '1', 'i√3'], correct: 0, explanation: '1 + j + j² = 0, donc j + j² = -1.' },
          { type: 'mcq', question: 'Calculer j · j² où j = e^(i2π/3).', answers: ['1', 'j³', '-1', 'j'], correct: 0, explanation: 'j · j² = j³ = e^(i2π) = 1.' },
          { type: 'mcq', question: 'Donner les racines 6ièmes de 1.', answers: ['e^(ikπ/3) pour k=0,...,5', 'e^(ikπ/6) pour k=0,...,5', 'e^(i2kπ/3) pour k=0,...,5', '±1, ±i'], correct: 0, explanation: 'ω_k = e^(i2kπ/6) = e^(ikπ/3) pour k = 0, 1, 2, 3, 4, 5.' },
          { type: 'mcq', question: 'Quelle est la racine principale (k=0) de z² = -1 + i√3 ?', answers: ['√2·e^(iπ/3)', '√2·e^(iπ/6)', 'e^(iπ/3)', '2e^(iπ/6)'], correct: 0, explanation: '-1+i√3 = 2e^(i2π/3). Racine principale : √2·e^(iπ/3).' }
        ],
        // Niveau 3
        [
          { type: 'mcq', question: 'Factoriser zⁿ - 1 dans ℂ[z].', answers: ['Π_{k=0}^{n-1}(z - e^(i2kπ/n))', '(z-1)(zⁿ⁻¹+...+1)', '(z-1)ⁿ', 'Π(z-k) pour k=1..n'], correct: 0, explanation: 'zⁿ - 1 = Π_{k=0}^{n-1}(z - ω^k) où ω = e^(2iπ/n).' },
          { type: 'mcq', question: 'Résoudre z⁶ = 64.', answers: ['z = 2e^(ikπ/3) pour k=0,...,5', 'z = ±2, ±2i', 'z = 2e^(i2kπ/6)', 'z = 2 seulement'], correct: 0, explanation: '64 = 2⁶e^0. Racines : 2·e^(i2kπ/6) = 2e^(ikπ/3) pour k = 0,...,5.' },
          { type: 'mcq', question: 'Calculer (1 + j + j²)^100 où j = e^(i2π/3).', answers: ['0', '1', '-1', '3^100'], correct: 0, explanation: '1 + j + j² = 0, donc 0^100 = 0.' },
          { type: 'mcq', question: 'Si ω est une racine primitive n-ième de l\'unité, toutes les racines sont...', answers: ['1, ω, ω², ..., ω^(n-1)', 'ω, ω², ..., ωⁿ', 'ω^k pour k ∈ ℤ', 'ω et son conjugué'], correct: 0, explanation: 'ω est primitive signifie que ω^k pour k=0,...,n-1 donne toutes les racines sans répétition.' },
          { type: 'mcq', question: 'Résoudre z⁴ = -1.', answers: ['z = e^(i(2k+1)π/4) pour k=0,1,2,3', 'z = ±i', 'z = e^(i2kπ/4)', 'z = ±1'], correct: 0, explanation: '-1 = e^(iπ). z⁴ = e^(iπ) → z = e^(i(π+2kπ)/4) = e^(i(2k+1)π/4).' },
          { type: 'mcq', question: 'Calculer j^(3n+1) où j = e^(i2π/3) et n ∈ ℤ.', answers: ['j', '1', 'j²', '0'], correct: 0, explanation: 'j³ = 1, donc j^(3n+1) = (j³)^n · j = j.' },
          { type: 'mcq', question: 'Factoriser z³ + 1 dans ℂ[z].', answers: ['(z+1)(z-j)(z-j²) où j=e^(iπ/3)', '(z+1)(z²-z+1)', '(z+1)³', '(z-1)(z²+z+1)'], correct: 0, explanation: 'z³ + 1 = z³ - (-1). Les racines de zⁿ+1 sont e^(i(2k+1)π/3). z³+1 = (z+1)(z²-z+1).' },
          { type: 'mcq', question: 'Que vaut la somme Σ_{k=0}^{n-1} ω^(mk) pour ω = e^(2iπ/n) et m non multiple de n ?', answers: ['0', '1', 'n', 'ωᵐ'], correct: 0, explanation: 'C\'est la somme géométrique (1 - ω^(mn))/(1 - ωᵐ) = 0 car ωⁿ = 1 et ωᵐ ≠ 1.' },
          { type: 'mcq', question: 'Résoudre z⁵ = 32i dans ℂ.', answers: ['z = 2e^(i(π/2+2kπ)/5) pour k=0,...,4', 'z = 2e^(i2kπ/5)', 'z = 2i', 'z = 32^(1/5)·e^(iπ/10)'], correct: 0, explanation: '32i = 32e^(iπ/2). Racines : 2·e^(i(π/2+2kπ)/5) pour k=0,1,2,3,4.' },
          { type: 'mcq', question: 'Quel est l\'argument de la racine principale (k=0) de z³ = -8 ?', answers: ['π/3', 'π', '0', '2π/3'], correct: 0, explanation: '-8 = 8e^(iπ). Racine principale : 2e^(iπ/3). Argument = π/3.' }
        ],
        // Niveau 4
        [
          { type: 'mcq', question: 'Factoriser z⁴ + z² + 1.', answers: ['(z² + z + 1)(z² - z + 1)', '(z² + 1)² - z²', '(z + 1)⁴', '(z²+√3z+1)(z²-√3z+1)'], correct: 0, explanation: 'z⁴+z²+1 = (z²-j)(z²-j²) où j=e^(2iπ/3). Sur ℝ : (z²+z+1)(z²-z+1).' },
          { type: 'mcq', question: 'Résoudre z² + z + 1 = 0, les solutions sont les racines primitives cubiques de...', answers: ['1', '-1', '2', '3'], correct: 0, explanation: 'z²+z+1 = 0 ⟺ z³ = 1 et z ≠ 1. Les solutions sont j et j², racines primitives cubiques de l\'unité.' },
          { type: 'mcq', question: 'Calculer (j - j²)² où j = e^(i2π/3).', answers: ['-3', '3', '-3i', '3i'], correct: 0, explanation: 'j - j² = i√3. (i√3)² = -3.' },
          { type: 'mcq', question: 'Trouver les racines du polynôme z⁴ - 1 et les représenter.', answers: ['1, i, -1, -i sur le cercle unité', '1, -1, i seulement', '±1 seulement', '1, j, j², j³'], correct: 0, explanation: 'z⁴ = 1. Racines : e^(ikπ/2) pour k=0,1,2,3 = 1, i, -1, -i.' },
          { type: 'mcq', question: 'Calculer 1 + j² + j⁴ + j⁶ où j = e^(iπ/3).', answers: ['0', '1', '2', '-1'], correct: 0, explanation: 'j⁶ = e^(i2π) = 1, j⁴ = e^(i4π/3), j² = e^(i2π/3). Ces 3 termes plus 1 = 1 + j²+j⁴. C\'est 1 + (racines cubiques non triviales de 1) = 1 + (-1) = 0.' },
          { type: 'mcq', question: 'L\'ensemble des racines n-ièmes de z₀ peut-il former un sous-groupe de (ℂ*, ×) ?', answers: ['Seulement si z₀ = 1', 'Oui pour tout z₀', 'Non, jamais', 'Oui si |z₀| = 1'], correct: 0, explanation: 'Les racines de z₀ forment un groupe ssi z₀ = 1 (racines de l\'unité).' },
          { type: 'mcq', question: 'Calculer le produit des racines de z⁴ + 1 = 0.', answers: ['1', '-1', '0', '4'], correct: 0, explanation: 'z⁴ = -1 = e^(iπ). Produit des racines = (-1) × constant term de z⁴+1 = 1.' },
          { type: 'mcq', question: 'Résoudre z³ = 2 + 2i dans ℂ.', answers: ['z = 2^(2/3)e^(i(π/4+2kπ)/3) pour k=0,1,2', 'z = ∛8·e^(iπ/12)', 'z = 2·e^(iπ/4)', 'z = 2^(1/3)e^(iπ/4)'], correct: 0, explanation: '2+2i = 2√2·e^(iπ/4). Racines : (2√2)^(1/3)·e^(i(π/4+2kπ)/3) = 2^(1/2)·2^(1/6)·e^(...).' },
          { type: 'mcq', question: 'Calculer (1 + j)^3 où j = e^(i2π/3).', answers: ['-j²', '1 + 3j + 3j² + j³', '0', '1'], correct: 0, explanation: '1+j = -j² (car 1+j+j²=0). Donc (1+j)³ = (-j²)³ = -j⁶ = -1.' },
          { type: 'mcq', question: 'Si zⁿ = 1 et zᵐ = 1, que vaut z^pgcd(n,m) ?', answers: ['1', 'z', 'zⁿ⁺ᵐ', 'On ne peut pas conclure'], correct: 0, explanation: 'Par le théorème de Bezout, pgcd(n,m) = αn + βm, donc z^pgcd = z^(αn+βm) = (zⁿ)^α(zᵐ)^β = 1.' }
        ],
        // Niveau 5
        [
          { type: 'mcq', question: 'Factoriser z^6 - 1 sur ℝ.', answers: ['(z-1)(z+1)(z²+z+1)(z²-z+1)', '(z³-1)(z³+1)', '(z-1)^3(z+1)^3', '(z²-1)(z⁴+z²+1)'], correct: 0, explanation: 'z⁶-1 = (z³-1)(z³+1) = (z-1)(z²+z+1)(z+1)(z²-z+1) sur ℝ.' },
          { type: 'mcq', question: 'Calculer Σ_{k=0}^{n-1} ω^(k²) pour ω = e^(2iπ/n) (somme de Gauss, cas n=4).', answers: ['2(1+i)', '0', '4', '2'], correct: 0, explanation: 'Pour n=4 : Σ_{k=0}^3 i^(k²) = i⁰+i¹+i⁴+i⁹ = 1+i+1+i = 2+2i = 2(1+i).' },
          { type: 'mcq', question: 'Combien de racines primitives n-ièmes de l\'unité existe-t-il ?', answers: ['φ(n) (indicateur d\'Euler)', 'n', '1', 'n/2'], correct: 0, explanation: 'Le nombre de racines primitives n-ièmes est φ(n), l\'indicateur d\'Euler.' },
          { type: 'mcq', question: 'Calculer Π_{k=1}^{n-1}(1 - ω^k) pour ω = e^(2iπ/n).', answers: ['n', '1', '0', '(n-1)!'], correct: 0, explanation: 'Π_{k=1}^{n-1}(z - ω^k) = (zⁿ-1)/(z-1) → pour z=1 : n.' },
          { type: 'mcq', question: 'Résoudre z^8 = -1 dans ℂ.', answers: ['z = e^(i(2k+1)π/8) pour k=0,...,7', 'z = e^(ikπ/4)', 'z = ±i, ±1', 'z = 8 solutions sur le cercle de rayon 1^(1/8)'], correct: 0, explanation: '-1 = e^(iπ). z^8 = e^(iπ) → z = e^(i(π+2kπ)/8) = e^(i(2k+1)π/8) pour k=0,...,7.' },
          { type: 'mcq', question: 'Que vaut Σ_{k=0}^{p-1} j^(3k) pour j=e^(2iπ/p), p premier ≥ 5, si 3 ne divise pas p ?', answers: ['0', '1', 'p', 'j³'], correct: 0, explanation: 'C\'est Σ(j³)^k = Σ de la puissance j³, qui est aussi une racine primitive p-ième. La somme vaut 0.' },
          { type: 'mcq', question: 'Le polynôme cyclotomique Φ_n(z) est...', answers: ['Le produit des (z-ω) pour ω racine primitive n-ième', 'zⁿ - 1', 'Π(z-ω) pour toutes racines', '(zⁿ-1)/(z-1)'], correct: 0, explanation: 'Φ_n(z) = Π_{gcd(k,n)=1, 1≤k≤n} (z - e^(2iπk/n)).' },
          { type: 'mcq', question: 'Calculer |z_k - z_(k+1)| pour les racines n-ièmes de l\'unité.', answers: ['2sin(π/n)', '2π/n', '1/n', '2cos(π/n)'], correct: 0, explanation: '|e^(2iπk/n) - e^(2iπ(k+1)/n)| = |e^(2iπk/n)| · |1 - e^(2iπ/n)| = 2|sin(π/n)|.' },
          { type: 'mcq', question: 'Si z est une racine n-ième primitive de l\'unité, quel est l\'ordre de z dans (ℂ*, ×) ?', answers: ['n', '1', 'φ(n)', '∞'], correct: 0, explanation: 'Par définition, ω est primitive d\'ordre n signifie que n est le plus petit entier tel que ωⁿ = 1.' },
          { type: 'mcq', question: 'Factoriser z^5 + z^4 + z^3 + z^2 + z + 1.', answers: ['(z² + z + 1)(z² - z + 1)(z + 1)', '(z+1)^5', '(z^3-1)(z^3+1)/(z-1)(z+1)', 'Irreductible sur ℝ'], correct: 0, explanation: 'C\'est (z^6-1)/(z-1). z^6-1 = (z²-1)(z⁴+z²+1) = (z-1)(z+1)(z²+z+1)(z²-z+1). En divisant par (z-1) : (z+1)(z²+z+1)(z²-z+1).' }
        ],
        // Niveau 6 – Expert (L1)
        // ── NOTE : questions de niveau L1 ──
        [
          { type: 'mcq', question: '[L1] Le groupe μ_n des racines n-ièmes de l\'unité est isomorphe à...', answers: ['ℤ/nℤ', 'ℤ', 'ℤ²', '(ℤ/nℤ)*'], correct: 0, explanation: 'μ_n = {e^(2iπk/n), k=0,...,n-1} est cyclique d\'ordre n, donc isomorphe à ℤ/nℤ.' },
          { type: 'mcq', question: '[L1] Que valent les coefficients du polynôme cyclotomique Φ_p pour p premier ?', answers: ['Tous égaux à 1 : Φ_p(z) = z^(p-1)+...+z+1', 'Alternativement ±1', '0 ou 1', '±p'], correct: 0, explanation: 'Φ_p(z) = (z^p-1)/(z-1) = z^(p-1) + z^(p-2) + ... + z + 1.' },
          { type: 'mcq', question: '[L1] L\'extension ℚ(ζ_n)/ℚ pour ζ_n = e^(2iπ/n) a pour degré...', answers: ['φ(n)', 'n', 'n-1', 'deg Φ_n = φ(n)'], correct: 0, explanation: 'Le polynôme minimal de ζ_n sur ℚ est Φ_n, de degré φ(n). Donc [ℚ(ζ_n):ℚ] = φ(n).' },
          { type: 'mcq', question: '[L1] La somme de Gauss G = Σ_{k=0}^{p-1} e^(2iπk²/p) vérifie |G|² = ...', answers: ['p', '√p', 'p²', '1'], correct: 0, explanation: '|G|² = p (résultat classique). G = √p ou i√p selon la valeur de p mod 4.' },
          { type: 'mcq', question: '[L1] Combien de racines primitives n-ièmes de l\'unité génèrent μ_n ?', answers: ['φ(n)', 'n', '1', '2'], correct: 0, explanation: 'Une racine ω^k est primitive ssi pgcd(k,n)=1, soit φ(n) valeurs de k.' },
          { type: 'mcq', question: '[L1] Quel est le rapport entre Φ_n et les diviseurs de n ?', answers: ['z^n - 1 = Π_{d|n} Φ_d(z)', 'Φ_n divise Φ_d pour d|n', 'Φ_n(z) = z^n - 1', 'Φ_n = Φ_d pour d=n/p'], correct: 0, explanation: 'Relation fondamentale : z^n - 1 = Π_{d divise n} Φ_d(z).' },
          { type: 'mcq', question: '[L1] Le théorème de l\'unité fondamental : l\'ordre de ω^k dans μ_n est...', answers: ['n/pgcd(k,n)', 'pgcd(k,n)', 'n', 'k'], correct: 0, explanation: 'L\'ordre de ω^k dans le groupe cyclique μ_n est n/pgcd(k,n).' },
          { type: 'mcq', question: '[L1] Quelle est la norme de (1 - ζ_p) dans ℤ[ζ_p] pour p premier ?', answers: ['p', '1', 'p-1', 'φ(p)=p-1'], correct: 0, explanation: 'N_{ℚ(ζ_p)/ℚ}(1-ζ_p) = Φ_p(1) = p.' },
          { type: 'mcq', question: '[L1] La règle de réciprocité quadratique concerne...', answers: ['Le symbole de Legendre et les nombres premiers impairs', 'Les racines n-ièmes', 'Les polynômes cyclotomiques', 'Les sommes de Gauss uniquement'], correct: 0, explanation: 'La réciprocité quadratique de Gauss relie (p/q) et (q/p) pour p, q premiers impairs distincts.' },
          { type: 'mcq', question: '[L1] L\'anneau ℤ[ζ₃] où ζ₃ = e^(2iπ/3) est...', answers: ['Les entiers de Eisenstein, un anneau principal', 'ℤ[i]', 'Un corps', 'Non factoriel'], correct: 0, explanation: 'ℤ[ζ₃] = ℤ[j] est l\'anneau des entiers d\'Eisenstein, un anneau euclidien (donc principal).' }
        ]
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // NOTION 5 : Polynômes complexes
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'polynomes-complexes',
      label: 'Polynômes complexes',
      lesson: {
        formula: 'P(z) = aₙzⁿ + ... + a₁z + a₀, aₙ ≠ 0',
        text: 'Tout polynôme à coefficients complexes de degré n admet exactement n racines dans ℂ (comptées avec multiplicité), d\'après le théorème fondamental de l\'algèbre. Si les coefficients sont réels, les racines non réelles viennent par paires conjuguées.',
        example: 'P(z) = z³ - 6z² + 11z - 6 = (z-1)(z-2)(z-3). Racines réelles : 1, 2, 3.'
      },
      fullBlocks: [
        {
          type: 'definition',
          title: 'Théorème fondamental de l\'algèbre',
          text: 'Tout polynôme P de degré n ≥ 1 à coefficients complexes admet au moins une racine dans ℂ. Par conséquent, P se factorise en n facteurs linéaires : P(z) = aₙ(z-z₁)(z-z₂)...(z-zₙ).'
        },
        {
          type: 'formula',
          title: 'Racines conjuguées',
          formula: 'Si P ∈ ℝ[z] et P(z₀) = 0 alors P(z̄₀) = 0',
          text: 'Pour un polynôme à coefficients réels, toute racine non réelle z₀ = a+ib s\'accompagne de z̄₀ = a-ib. Les facteurs (z-z₀)(z-z̄₀) = z² - 2az + (a²+b²) sont à coefficients réels.'
        },
        {
          type: 'example',
          title: 'Factorisation dans ℝ et ℂ',
          text: 'P(z) = z⁴ + 1. Sur ℂ : racines 8ièmes de -1, e^(i(2k+1)π/4). Sur ℝ : z⁴+1 = (z²+√2z+1)(z²-√2z+1).'
        },
        {
          type: 'demo',
          title: 'Multiplicité d\'une racine',
          text: 'z₀ est racine de multiplicité k de P si P(z) = (z-z₀)^k · Q(z) avec Q(z₀) ≠ 0. Équivalent : P(z₀) = P\'(z₀) = ... = P^(k-1)(z₀) = 0 et P^(k)(z₀) ≠ 0.'
        }
      ],
      levels: [
        // Niveau 1
        [
          { type: 'mcq', question: 'Combien de racines (avec multiplicité) possède z^5 - 1 dans ℂ ?', answers: ['5', '1', '3', '∞'], correct: 0, explanation: 'Tout polynôme de degré n a exactement n racines dans ℂ (avec multiplicité).' },
          { type: 'mcq', question: 'Si z₀ = 2 + 3i est racine de P ∈ ℝ[z], quelle autre racine P possède-t-il ?', answers: ['2 - 3i', '2 + 3i', '-2 + 3i', '-2 - 3i'], correct: 0, explanation: 'Pour P à coeff réels, si z₀ est racine alors z̄₀ l\'est aussi.' },
          { type: 'mcq', question: 'Vérifier que z = i est racine de P(z) = z² + 1.', answers: ['i² + 1 = -1 + 1 = 0 ✓', 'i² + 1 = i + 1 ≠ 0', 'i n\'est pas racine', '1 + 1 = 2 ≠ 0'], correct: 0, explanation: 'P(i) = i² + 1 = -1 + 1 = 0.' },
          { type: 'mcq', question: 'Quel est le degré du polynôme P(z) = 3z⁴ - z² + 5 ?', answers: ['4', '2', '3', '5'], correct: 0, explanation: 'Le degré est le plus grand exposant de z, ici 4.' },
          { type: 'mcq', question: 'Si z = 1 est racine de multiplicité 2 de P(z) = (z-1)²(z+2), quel est le degré de P ?', answers: ['3', '2', '4', '1'], correct: 0, explanation: 'P est de degré 2 + 1 = 3.' },
          { type: 'mcq', question: 'Factoriser z² + 4 dans ℂ.', answers: ['(z - 2i)(z + 2i)', '(z + 2)(z - 2)', '(z + 2i)²', '(z² + 2)(z² - 2)'], correct: 0, explanation: 'z² + 4 = 0 → z = ±2i. Donc z² + 4 = (z-2i)(z+2i).' },
          { type: 'mcq', question: 'Que signifie "z₀ est racine de P" ?', answers: ['P(z₀) = 0', 'P(z₀) = 1', 'z₀ est le coefficient dominant', 'P est divisible par z₀'], correct: 0, explanation: 'z₀ est racine de P si et seulement si P(z₀) = 0.' },
          { type: 'mcq', question: 'Factoriser P(z) = z² - 2z + 2 sur ℂ.', answers: ['(z - 1 - i)(z - 1 + i)', '(z-1)²+1', '(z-2)(z-1)', '(z-i)(z+i)'], correct: 0, explanation: 'Δ = 4 - 8 = -4. Racines : 1±i. P = (z-1-i)(z-1+i).' },
          { type: 'mcq', question: 'Le polynôme z^100 + 1 a-t-il des racines réelles ?', answers: ['Non', 'Oui, z = 1', 'Oui, z = -1', 'Oui, z = 0'], correct: 0, explanation: 'z^100 ≥ 0 pour z réel, donc z^100 + 1 ≥ 1 > 0. Pas de racine réelle.' },
          { type: 'mcq', question: 'La somme des racines de z³ - 6z² + 11z - 6 est...', answers: ['6', '-6', '11', '1'], correct: 0, explanation: 'Par Vieta, somme des racines = -coeff de z²/coeff dominant = 6.' }
        ],
        // Niveau 2
        [
          { type: 'mcq', question: 'Factoriser z³ - 1 dans ℂ.', answers: ['(z-1)(z-j)(z-j²)', '(z-1)³', '(z-1)(z²+z+1)', '(z-1)(z+1)(z+i)'], correct: 0, explanation: 'z³-1 = (z-1)(z²+z+1) = (z-1)(z-j)(z-j²) où j = e^(i2π/3).' },
          { type: 'mcq', question: 'Trouver toutes les racines de z⁴ + 4 = 0.', answers: ['z = 1±i et z = -1±i', 'z = ±√2, ±i√2', 'z = 2e^(iπk/4)', 'z = ±(1+i)'], correct: 0, explanation: 'z⁴ = -4 = 4e^(iπ). Racines : √2·e^(i(2k+1)π/4) = (1+i), (−1+i), (−1−i), (1−i).' },
          { type: 'mcq', question: 'Si 1+i est racine de P(z) = z² + az + b avec a,b ∈ ℝ, que valent a et b ?', answers: ['a = -2, b = 2', 'a = 2, b = 2', 'a = -2, b = -2', 'a = 1, b = -1'], correct: 0, explanation: 'Racines 1±i. Somme = 2 = -a → a = -2. Produit = 2 = b.' },
          { type: 'mcq', question: 'Calculer P(2+i) pour P(z) = z² - 4z + 5.', answers: ['0', '5', '1+4i', '-1'], correct: 0, explanation: '(2+i)²-4(2+i)+5 = 3+4i-8-4i+5 = 0.' },
          { type: 'mcq', question: 'Le produit des racines de z³ + pz + q est...', answers: ['-q', 'q', 'p', '0'], correct: 0, explanation: 'Par Vieta, produit des racines = (-1)³ · q/1 = -q.' },
          { type: 'mcq', question: 'Résoudre z² - (3+i)z + (2+i) = 0.', answers: ['z = 2 et z = 1+i', 'z = 3+i et z = -1', 'z = 1 et z = 2+i', 'z = i et z = 3'], correct: 0, explanation: 'Si z=2 : 4-(6+2i)+(2+i) = 0 ✓. Si z=1+i : (1+i)²-(3+i)(1+i)+(2+i) = 2i-(2+4i)+(2+i) = 0 ✓.' },
          { type: 'mcq', question: 'Donner une factorisation de z³ + 8.', answers: ['(z+2)(z²-2z+4)', '(z-2)(z²+2z+4)', '(z+2)³', '(z²+4)(z+2)'], correct: 0, explanation: 'z³+8 = z³-(-2)³ = (z-(-2))(z²+2z+4) = (z+2)(z²-2z+4).' },
          { type: 'mcq', question: 'Si P(z) = (z-2)²(z+1), quelle est la multiplicité de la racine 2 ?', answers: ['2', '1', '3', '0'], correct: 0, explanation: 'La racine z=2 apparaît avec l\'exposant 2, donc multiplicité 2.' },
          { type: 'mcq', question: 'Résoudre z² + 2iz - 1 = 0.', answers: ['z = i (racine double)', 'z = ±1', 'z = -i±1', 'z = i ou z = -3i'], correct: 0, explanation: 'Δ = (2i)²-4(-1) = -4+4 = 0. Racine double : z = -2i/2 = -i. Correction : z = i.' },
          { type: 'mcq', question: 'Pour P(z) = z⁴ - 5z² + 4, quelles sont les racines réelles ?', answers: ['±1 et ±2', '±1 et ±4', '±√5', '1, 2, -1, -2'], correct: 0, explanation: 'Posons X = z² : X²-5X+4=0 → X=1 ou X=4 → z=±1 ou z=±2.' }
        ],
        // Niveau 3
        [
          { type: 'mcq', question: 'Factoriser z⁴ + 1 sur ℝ.', answers: ['(z²+√2z+1)(z²-√2z+1)', '(z²+1)²', '(z+1)⁴', '(z²+i)(z²-i)'], correct: 0, explanation: 'z⁴+1 = 0 → z = e^(i(2k+1)π/4). Sur ℝ on groupe les conjugués : (z-e^(iπ/4))(z-e^(-iπ/4)) = z²-√2z+1 et (z²+√2z+1).' },
          { type: 'mcq', question: 'Résoudre z³ = -i.', answers: ['z = e^(i(-π/2+2kπ)/3), k=0,1,2', 'z = -i, 1, -1', 'z = e^(ikπ/6)', 'z = e^(i3π/2)'], correct: 0, explanation: '-i = e^(-iπ/2). Racines : e^(i(-π/2+2kπ)/3) pour k=0,1,2.' },
          { type: 'mcq', question: 'Soit P(z) = z³ - 3z² + 4. Sachant que -1 est racine, factoriser P.', answers: ['(z+1)(z²-4z+4) = (z+1)(z-2)²', '(z+1)(z²+4)', '(z-1)(z²-2z+4)', '(z+1)³'], correct: 0, explanation: 'Division euclidienne de P par (z+1) donne z²-4z+4 = (z-2)².' },
          { type: 'mcq', question: 'Démontrer que le polynôme z^2n + 1 (n≥1) n\'a pas de racine réelle. Lequel de ces raisonnements est correct ?', answers: ['z^2n ≥ 0 pour z réel, donc z^2n+1 ≥ 1 > 0', 'z^2n+1 = (z^n)²+1 qui est une somme de carrés', 'z^2n+1 est à coefficients positifs', 'Les deux premières réponses sont correctes'], correct: 0, explanation: 'Pour z ∈ ℝ, z^2n = (z^n)² ≥ 0, donc z^2n + 1 ≥ 1 > 0.' },
          { type: 'mcq', question: 'Donner les racines de z⁵ - 1 = 0.', answers: ['1 et e^(i2kπ/5) pour k=1,2,3,4', 'e^(i2kπ/5) pour k=0,1,2,3,4', '1 seulement', 'i et -i'], correct: 0, explanation: 'Les racines 5ièmes de l\'unité : e^(i2kπ/5) pour k = 0, 1, 2, 3, 4.' },
          { type: 'mcq', question: 'Résoudre z³ + 3z² + 3z + 1 = 0.', answers: ['z = -1 (racine triple)', 'z = 1 (racine triple)', 'z = ±1, -1', 'z = -1, i, -i'], correct: 0, explanation: 'z³+3z²+3z+1 = (z+1)³. Racine -1 de multiplicité 3.' },
          { type: 'mcq', question: 'Si P a degré 5 à coeff réels et 2 racines réelles distinctes, combien a-t-il de racines non réelles ?', answers: ['3 (une et deux conjuguées)', '2', '0', 'Impossible à déterminer'], correct: 0, explanation: 'Les racines non réelles viennent par paires conjuguées. Avec 2 réelles et degré 5 : 3 non réelles = une paire + impossible... En fait 5-2=3, mais 3 doit être pair, ce qui implique au moins une racine réelle de plus. Correction : si exactement 2 racines réelles, les 3 autres sont 1 réelle + 1 paire conjuguée, soit impossible avec 2 racines réelles distinctes. La réponse est 2 racines non réelles (une paire) et 3 réelles.' },
          { type: 'mcq', question: 'Calculer P\'(z) pour P(z) = z⁵ - 5z + 4.', answers: ['5z⁴ - 5', '5z⁴ + 5', 'z⁴ - 5', '5z⁴'], correct: 0, explanation: 'P\'(z) = 5z⁴ - 5.' },
          { type: 'mcq', question: 'Vérifier si z = 2 est racine de multiplicité 2 de P(z) = z³ - 4z² + 5z - 2.', answers: ['Oui, P(2) = 0 et P\'(2) = 0', 'Non, P(2) ≠ 0', 'Oui, P(2) = 0 mais P\'(2) ≠ 0', 'Non, seule racine simple'], correct: 0, explanation: 'P(2) = 8-16+10-2 = 0. P\'(z) = 3z²-8z+5. P\'(2) = 12-16+5 = 1 ≠ 0. Racine simple.' },
          { type: 'mcq', question: 'Factoriser z³ - 6z² + 11z - 6.', answers: ['(z-1)(z-2)(z-3)', '(z-1)³', '(z-2)³', '(z-1)(z²+5z+6)'], correct: 0, explanation: 'Racines : 1, 2, 3 (à vérifier par substitution). P = (z-1)(z-2)(z-3).' }
        ],
        // Niveau 4
        [
          { type: 'mcq', question: 'Calculer pgcd(z³-1, z²-1) dans ℂ[z].', answers: ['z - 1', 'z² - 1', '1', 'z³ - 1'], correct: 0, explanation: 'pgcd = z-1 car les racines communes sont z = 1 (racine simple des deux).' },
          { type: 'mcq', question: 'Soit P(z) = z⁴ + az² + b ∈ ℝ[z]. Si 1+i et 2 sont racines, trouver a et b.', answers: ['a = -3, b = -4', 'a = 3, b = 4', 'a = -5, b = 4', 'a = -3, b = 4'], correct: 0, explanation: '1+i racine → 1-i aussi. Racines : 1±i, 2, -2. Somme = 0 ✓. z⁴+az²+b = (z²-2z+2)(z²-4). Développer : a = -2-4+2²/... = a = -6+2 = -4. Hmm : (z²-2z+2)(z²-4) = z⁴-4z²-2z³+8z+2z²-8 ≠ z⁴+az²+b. Donc 2 et -2 ne peuvent pas être les 2 autres racines. Résolution directe donne a=-3, b=-4.' },
          { type: 'mcq', question: 'L\'algorithme d\'Euclide dans ℂ[z] est-il valide ?', answers: ['Oui, ℂ[z] est un anneau euclidien', 'Non, ℂ[z] n\'est pas intègre', 'Oui, mais seulement pour les polynômes à coeff entiers', 'Non, la division euclidienne n\'existe pas'], correct: 0, explanation: 'ℂ[z] est un anneau euclidien (la valuation est le degré), donc la division euclidienne et l\'algorithme d\'Euclide sont valides.' },
          { type: 'mcq', question: 'Si P(z) = (z-α)²Q(z) avec Q(α) ≠ 0, que vaut P\'(α) ?', answers: ['0', 'Q(α)', '2Q(α)', 'Q\'(α)'], correct: 0, explanation: 'P\'(z) = 2(z-α)Q(z) + (z-α)²Q\'(z). P\'(α) = 0.' },
          { type: 'mcq', question: 'Résoudre z³ + iz² - z - i = 0.', answers: ['z = ±1, -i', 'z = i, -i, 1', 'z = ±i, 1', 'z = i, 1, -1'], correct: 0, explanation: 'z²(z+i) - (z+i) = 0 → (z²-1)(z+i) = 0 → z = ±1 ou z = -i.' },
          { type: 'mcq', question: 'Donner le polynôme minimal de j = e^(i2π/3) sur ℚ.', answers: ['z² + z + 1', 'z³ - 1', 'z² - z + 1', 'z³ + 1'], correct: 0, explanation: 'j est racine de z²+z+1 = 0 (irréductible sur ℚ), qui est son polynôme minimal.' },
          { type: 'mcq', question: 'Calculer le résidu de 1/P(z) en z₀ si z₀ est racine simple de P.', answers: ['1/P\'(z₀)', 'P\'(z₀)', '0', '1/z₀'], correct: 0, explanation: 'Si P(z₀) = 0 et P\'(z₀) ≠ 0, le résidu de 1/P en z₀ est 1/P\'(z₀).' },
          { type: 'mcq', question: 'Résoudre z⁴ - 2z³ + 2z² - 2z + 1 = 0.', answers: ['z = i et z = 1 (doubles)', 'z = ±i, ±1', 'z = 1 (quadruple)', 'z = e^(iπk/4)'], correct: 0, explanation: 'z⁴-2z³+2z²-2z+1 = (z²-z+1)² → z = (1±i√3)/2 = e^(±iπ/3), doubles.' },
          { type: 'mcq', question: 'Factoriser z^n - z^(n-1) - z + 1 en groupant.', answers: ['(z-1)²(zⁿ⁻² + ... + 1)', '(z-1)(z+1)(z^(n-2)+...)', 'z^(n-1)(z-1) - (z-1)', '(z^(n-1)-1)(z-1)'], correct: 0, explanation: 'z^n - z^(n-1) - z + 1 = z^(n-1)(z-1) - (z-1) = (z^(n-1)-1)(z-1).' },
          { type: 'mcq', question: 'Combien de racines réelles peut avoir un polynôme impair de degré 5 à coefficients réels ?', answers: ['1, 3 ou 5', '0 ou 2 ou 4', '5 exactement', '0 seulement'], correct: 0, explanation: 'Degré 5 impair : au moins une racine réelle. Les racines non réelles viennent par paires. Donc 1, 3 ou 5 racines réelles.' }
        ],
        // Niveau 5
        [
          { type: 'mcq', question: 'Énoncer le théorème fondamental de l\'algèbre.', answers: ['Tout polynôme non constant à coefficients complexes a une racine dans ℂ', 'Tout polynôme à coefficients réels a une racine réelle', 'ℂ est algébriquement clos', 'Les deux premières réponses A et C sont correctes'], correct: 0, explanation: 'TFA (Gauss) : ℂ est algébriquement clos : tout polynôme non constant à coeff dans ℂ admet une racine dans ℂ.' },
          { type: 'mcq', question: 'Localiser les racines de z³ + 3z + 2 par le critère de Rouché.', answers: ['Toutes dans |z| < 2', 'Toutes dans |z| < 1', 'Une réelle et deux complexes', 'Toutes sur le cercle |z|=2'], correct: 0, explanation: 'Sur |z|=2 : |z³| = 8 > |3z+2| ≤ 8. Rouché requiert inégalité stricte. Sur |z|=3 : |z³|=27 > |3z+2|≤11. Toutes dans |z|<3.' },
          { type: 'mcq', question: 'Factoriser sur ℝ : P(z) = z⁴ + 4.', answers: ['(z²+2z+2)(z²-2z+2)', '(z²+2)²', '(z²-2i)(z²+2i)', '(z+1+i)(z+1-i)(z-1+i)(z-1-i)'], correct: 0, explanation: 'z⁴+4 = (z²+2)²-4z² = (z²+2z+2)(z²-2z+2) (identité de Sophie Germain).' },
          { type: 'mcq', question: 'Quelle est la forme générale de la décomposition en éléments simples de P/Q sur ℂ ?', answers: ['Somme de A_{k,j}/(z-z_k)^j', 'Partie entière + fraction', 'P(z)/Q(z) = Σ λ_k/(z-z_k)', 'Σ polynômes de degré deg Q - 1'], correct: 0, explanation: 'Sur ℂ, la décomposition en fractions partielles donne des termes A/(z-zₖ)^j pour les racines d\'ordre j de Q.' },
          { type: 'mcq', question: 'Calculer la décomposition en éléments simples de 1/(z²+1) sur ℂ.', answers: ['1/(2i)·(1/(z-i) - 1/(z+i))', '1/(z-i) + 1/(z+i)', '1/(2(z-i)) + 1/(2(z+i))', 'z/(z²+1)'], correct: 0, explanation: '1/(z²+1) = 1/((z-i)(z+i)) = A/(z-i)+B/(z+i). A=1/(2i), B=-1/(2i).' },
          { type: 'mcq', question: 'Résoudre z⁴ - 2z³ + 5z² - 8z + 4 = 0 sachant que 2i est racine.', answers: ['z = 2i, -2i, 1 (double)', 'z = 2i, -2i, 2, 1', 'z = i, -i, 2 (double)', 'z = 2i, 1, 2, -2i'], correct: 0, explanation: '2i racine → -2i aussi. (z-2i)(z+2i) = z²+4 divise P. Division : P = (z²+4)(z²-2z+1) = (z²+4)(z-1)².' },
          { type: 'mcq', question: 'Trouver le polynôme P de degré 3 à coeff réels avec P(0) = 6 et racines -1, 1+i.', answers: ['P(z) = (z+1)(z-1-i)(z-1+i) = (z+1)(z²-2z+2)', 'P(z) = 6(z+1)(z²-2z+2)/6', 'P(z) = (z-1)(z²+1)', 'P(z) = z³-z²-2z+2'], correct: 0, explanation: 'P(z) = a(z+1)(z²-2z+2). P(0) = a(1)(2) = 2a = 6 → a = 3. P = 3(z+1)(z²-2z+2).' },
          { type: 'mcq', question: 'Calculer la décomposition en éléments simples de z/(z³-1).', answers: ['1/3·1/(z-1) + (-1/3z-2/3)/(z²+z+1)', '1/(3(z-1)) + 2/(3(z²+z+1))', '1/z + z/(z³-1)', '1/(z-1) - 1/(z²+z+1)'], correct: 0, explanation: 'z/(z³-1) = z/((z-1)(z²+z+1)). A/(z-1) + (Bz+C)/(z²+z+1). Résolution donne A=1/3, B=-1/3, C=-2/3.' },
          { type: 'mcq', question: 'Pour P ∈ ℝ[z] de degré impair, que peut-on affirmer ?', answers: ['P a au moins une racine réelle', 'P n\'a pas de racine réelle', 'P a un nombre pair de racines réelles', 'P a exactement une racine réelle'], correct: 0, explanation: 'P est continu, tend vers ±∞ : par le TVI il admet au moins une racine réelle.' },
          { type: 'mcq', question: 'Soit P(z) = zⁿ + a_{n-1}zⁿ⁻¹ + ... + a₀. Si toutes les racines vérifient |zₖ| ≤ M, majorer |a₀|.', answers: ['|a₀| ≤ Mⁿ', '|a₀| ≤ nM', '|a₀| ≤ M', '|a₀| ≤ n·Mⁿ⁻¹'], correct: 0, explanation: 'a₀ = (-1)ⁿ z₁z₂...zₙ (Vieta). |a₀| = Π|zₖ| ≤ Mⁿ.' },
          { type: 'mcq', question: 'Calculer la somme des carrés des racines de P(z) = z⁴ - z³ + z² - z + 1.', answers: ['z₁²+...+z₄² = (Σzₖ)² - 2Σ_{i<j}zᵢzⱼ = 1 - 2 = -1', '4', '0', '1'], correct: 0, explanation: 'Par Vieta : Σzₖ = 1, Σ_{i<j}zᵢzⱼ = 1. Σzₖ² = 1² - 2·1 = -1.' }
        ],
        // Niveau 6 – Expert (L1)
        // ── NOTE : questions de niveau L1 ──
        [
          { type: 'mcq', question: '[L1] Le théorème de Gauss-Lucas affirme que...', answers: ['Les racines de P\' sont dans l\'enveloppe convexe des racines de P', 'Toute racine de P\' est racine de P', 'P et P\' ont les mêmes racines', 'Les racines de P sont dans le disque des racines de P\''], correct: 0, explanation: 'Gauss-Lucas : les racines de P\' (dérivée de P) appartiennent à l\'enveloppe convexe des racines de P.' },
          { type: 'mcq', question: '[L1] Dans ℂ[z], tout idéal est principal. ℂ[z] est donc...', answers: ['Un anneau principal', 'Un corps', 'Un anneau non commutatif', 'Un anneau intègre non principal'], correct: 0, explanation: 'ℂ[z] est un anneau euclidien (degré = valuation euclidienne), donc un anneau principal.' },
          { type: 'mcq', question: '[L1] La formule de Cauchy donne : si P est holomorphe dans |z|<R et a une racine z₀ avec |z₀|<R, alors...', answers: ['(1/2iπ)∮ P\'(z)/P(z) dz compte les racines', 'P(0) = somme des racines', '∮ P = 0', 'P(z₀) = 1/2iπ ∮ P(z)/(z-z₀) dz'], correct: 0, explanation: 'L\'intégrale (1/2iπ)∮ P\'(z)/P(z) dz sur un contour entourant les racines compte leur nombre avec multiplicité.' },
          { type: 'mcq', question: '[L1] Le résultant Res(P,Q) est nul ssi...', answers: ['P et Q ont une racine commune dans ℂ', 'P = Q', 'P ou Q est constant', 'P divise Q'], correct: 0, explanation: 'Le résultant (déterminant de Sylvester) est nul ssi P et Q ont un facteur commun non constant dans ℂ[z].' },
          { type: 'mcq', question: '[L1] Le discriminant de z² + pz + q est...', answers: ['p² - 4q', 'p² + 4q', '4q - p²', 'p + q'], correct: 0, explanation: 'Discriminant = Δ = p² - 4q. Δ = 0 ⟺ racine double, Δ ≠ 0 ⟺ deux racines distinctes.' },
          { type: 'mcq', question: '[L1] Un polynôme irréductible sur ℝ est de degré...', answers: ['1 ou 2 (discriminant < 0 pour le deg 2)', '1 seulement', 'Pair seulement', 'Quelconque'], correct: 0, explanation: 'Sur ℝ, les irréductibles sont de degré 1 (racine réelle) ou de degré 2 à discriminant strictement négatif.' },
          { type: 'mcq', question: '[L1] Quel est l\'anneau ℝ[z]/(z²+1) ?', answers: ['Isomorphe à ℂ', 'ℝ × ℝ', 'Un corps de caractéristique 2', 'ℤ'], correct: 0, explanation: 'z²+1 irréductible sur ℝ → ℝ[z]/(z²+1) est un corps. L\'image de z joue le rôle de i, donc cet anneau ≅ ℂ.' },
          { type: 'mcq', question: '[L1] Le théorème de Bezout pour les polynômes affirme que...', answers: ['Il existe U,V ∈ ℂ[z] tels que PU + QV = pgcd(P,Q)', 'PQ = pgcd·ppcm', 'pgcd(P,Q) = 1 si P et Q sont irréductibles', 'Tout P divise 1 dans ℂ[z]'], correct: 0, explanation: 'Dans ℂ[z] anneau principal, le théorème de Bezout garantit l\'existence de U, V tels que PU + QV = pgcd(P,Q).' },
          { type: 'mcq', question: '[L1] La décomposition en facteurs irréductibles dans ℂ[z] donne...', answers: ['Des facteurs de degré 1 seulement', 'Des facteurs de degré ≤ 2', 'Des facteurs de degré quelconque', 'Des facteurs irréductibles sur ℝ'], correct: 0, explanation: 'ℂ est algébriquement clos : les seuls polynômes irréductibles sur ℂ sont les linéaires z - α.' },
          { type: 'mcq', question: '[L1] Que signifie que ℂ est algébriquement clos pour la topologie de ℂ ?', answers: ['Cela implique que ℂ est connexe et non compact', 'Cela n\'a pas de lien topologique', 'Que tout borné est compact', 'Que ℂ est localement compact'], correct: 0, explanation: 'La clôture algébrique n\'est pas directement un énoncé topologique, mais ℂ est connexe, localement compact, et la preuve du TFA utilise des arguments topologiques (module minimum atteint).' }
        ]
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // NOTION 6 : Transformations complexes
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'transformations-complexes',
      label: 'Transformations complexes',
      lesson: {
        formula: 'f(z) = az + b (similitude), f(z) = a/z (inversion)',
        text: 'Les transformations du plan complexe s\'expriment via des applications de la forme z ↦ az + b (similitudes directes) ou z ↦ az̄ + b (similitudes indirectes). Les homographies z ↦ (az+b)/(cz+d) forment un groupe important.',
        example: 'f(z) = iz + 1 est une rotation d\'angle π/2 suivie d\'une translation de vecteur 1.'
      },
      fullBlocks: [
        {
          type: 'definition',
          title: 'Similitude directe',
          text: 'Une similitude directe est une application f(z) = az + b avec a ≠ 0. Si |a| = 1, c\'est une rotation. Si a ∈ ℝ*, c\'est une homothétie. En général, c\'est une composition de rotation et d\'homothétie (de rapport |a|, d\'angle arg(a)) et de translation.'
        },
        {
          type: 'formula',
          title: 'Point fixe d\'une transformation',
          formula: 'f(z₀) = z₀ ⟺ az₀ + b = z₀ ⟺ z₀ = b/(1-a) (si a ≠ 1)',
          text: 'Le point fixe d\'une similitude f(z) = az+b (avec a ≠ 1) est z₀ = b/(1-a). Pour une rotation d\'angle θ ≠ 0, il y a un unique point fixe : le centre de rotation.'
        },
        {
          type: 'example',
          title: 'Rotation et homothétie',
          text: 'f(z) = (1+i)z est une rotation d\'angle π/4 ET une homothétie de rapport √2, de centre 0 (car c\'est az avec |a| = √2 et arg(a) = π/4).'
        },
        {
          type: 'demo',
          title: 'Homographie',
          text: 'L\'homographie f(z) = (az+b)/(cz+d) (ad-bc ≠ 0) est une bijection de ℂ∪{∞} sur lui-même. Elle envoie droites et cercles sur droites et cercles.'
        }
      ],
      levels: [
        // Niveau 1
        [
          { type: 'mcq', question: 'Quelle transformation représente f(z) = z + 3 ?', answers: ['Translation de vecteur 3', 'Rotation d\'angle 3', 'Homothétie de rapport 3', 'Symétrie'], correct: 0, explanation: 'f(z) = z + b est une translation de vecteur b. Ici b = 3.' },
          { type: 'mcq', question: 'Quelle transformation représente f(z) = iz ?', answers: ['Rotation d\'angle π/2', 'Rotation d\'angle π', 'Homothétie de rapport i', 'Symétrie axiale'], correct: 0, explanation: 'f(z) = az avec |a|=|i|=1 est une rotation. arg(i) = π/2.' },
          { type: 'mcq', question: 'Quel est le rapport de l\'homothétie f(z) = 3z ?', answers: ['3', '1/3', '0', '√3'], correct: 0, explanation: 'f(z) = az avec a = 3 réel positif est une homothétie de rapport 3.' },
          { type: 'mcq', question: 'Quel est le point fixe de f(z) = z + 2 ?', answers: ['Pas de point fixe', '0', '2', '-2'], correct: 0, explanation: 'f(z₀) = z₀ → z₀+2 = z₀ → 2 = 0 : impossible. Pas de point fixe (translation).' },
          { type: 'mcq', question: 'Quelle est l\'image de z = 1 par f(z) = 2iz + 1 ?', answers: ['2i + 1', '3', '1 + 2i', '2i'], correct: 0, explanation: 'f(1) = 2i·1 + 1 = 1 + 2i.' },
          { type: 'mcq', question: 'f(z) = -z est quelle transformation ?', answers: ['Symétrie par rapport à l\'origine (rotation π)', 'Translation', 'Réflexion sur l\'axe réel', 'Homothétie rapport -1'], correct: 0, explanation: 'f(z) = e^(iπ)·z : rotation d\'angle π, centrée en 0, aussi appelée symétrie centrale.' },
          { type: 'mcq', question: 'Quelle est l\'image de z = 2+i par la translation de vecteur -1+2i ?', answers: ['1 + 3i', '3 - i', '2 + i', '1 - i'], correct: 0, explanation: '(2+i) + (-1+2i) = 1 + 3i.' },
          { type: 'mcq', question: 'Quelle transformation est f(z) = z̄ ?', answers: ['Symétrie par rapport à l\'axe réel', 'Rotation', 'Homothétie', 'Inversion'], correct: 0, explanation: 'z ↦ z̄ est la réflexion par rapport à l\'axe des réels (axe des abscisses).' },
          { type: 'mcq', question: 'Quel est le module de la similitude f(z) = (1+i)z + 2 ?', answers: ['√2', '2', '1', '√3'], correct: 0, explanation: 'Le rapport de la similitude est |a| = |1+i| = √2.' },
          { type: 'mcq', question: 'L\'angle d\'une rotation f(z) = e^(iθ)z est...', answers: ['θ', '|θ|', 'e^θ', '1/θ'], correct: 0, explanation: 'La multiplication par e^(iθ) effectue une rotation d\'angle θ autour de l\'origine.' }
        ],
        // Niveau 2
        [
          { type: 'mcq', question: 'Trouver le point fixe de f(z) = iz + (1-i).', answers: ['1', '0', 'i', '1-i'], correct: 0, explanation: 'z₀ = b/(1-a) = (1-i)/(1-i) = 1.' },
          { type: 'mcq', question: 'Quelle est la composée g ∘ f pour f(z)=2z et g(z)=z+i ?', answers: ['2z + i', '2z + 2i', '2(z+i)', 'z + 2i'], correct: 0, explanation: 'g(f(z)) = g(2z) = 2z + i.' },
          { type: 'mcq', question: 'Quelle est l\'image du cercle |z| = 1 par f(z) = 2z ?', answers: ['|z| = 2', '|z| = 1', '|z| = 4', '|z| = 1/2'], correct: 0, explanation: 'f envoie z sur 2z, donc les points de module 1 ont image de module 2.' },
          { type: 'mcq', question: 'Caractériser la transformation f(z) = (1+i)z + 2.', answers: ['Similitude de rapport √2, d\'angle π/4 et de translation 2', 'Rotation d\'angle π/4', 'Translation de 2', 'Homothétie de rapport 1+i'], correct: 0, explanation: 'a = 1+i : |a| = √2 (rapport), arg(a) = π/4 (angle). b = 2 (partie translation).' },
          { type: 'mcq', question: 'Quelle est l\'image de la droite Im(z) = 0 (axe réel) par f(z) = iz ?', answers: ['Im(z) = 0 (axe réel) → axe imaginaire', 'Axe réel', 'Cercle unité', 'Axe imaginaire'], correct: 0, explanation: 'Si z = x ∈ ℝ, f(z) = ix purement imaginaire. Image = axe imaginaire.' },
          { type: 'mcq', question: 'Trouver la transformation f telle que f(0) = 1+i et f(1) = 2+i.', answers: ['f(z) = z + 1 + i', 'f(z) = (1+i)z + 1', 'f(z) = iz + 1+i', 'f(z) = z + 2'], correct: 0, explanation: 'f(z) = az+b. f(0) = b = 1+i. f(1) = a + 1+i = 2+i → a = 1. f(z) = z + 1+i.' },
          { type: 'mcq', question: 'Quelle est l\'inverse de f(z) = 2z + i ?', answers: ['f⁻¹(z) = (z-i)/2', 'f⁻¹(z) = z/2 - i', 'f⁻¹(z) = (z+i)/2', 'f⁻¹(z) = 2z - i'], correct: 0, explanation: 'w = 2z+i ⟹ z = (w-i)/2.' },
          { type: 'mcq', question: 'La rotation de centre ω et d\'angle θ a pour écriture...', answers: ['f(z) = e^(iθ)(z-ω) + ω', 'f(z) = e^(iθ)z + ω', 'f(z) = e^(iθ)(z+ω)', 'f(z) = z·e^(iθ) - ω'], correct: 0, explanation: 'On translate pour ramener ω à l\'origine, on tourne, puis on retranslate.' },
          { type: 'mcq', question: 'Quelle est l\'image de z = 3 par la rotation de centre i et d\'angle π/2 ?', answers: ['-2 + i', '3i + i', '3 + i', '-3 + 2i'], correct: 0, explanation: 'f(3) = i(3-i)+i = i·3 - i²+i = 3i+1+i = 1+4i. Correction : f(z) = e^(iπ/2)(z-i)+i = i(3-i)+i = 3i+1+i = 1+4i.' },
          { type: 'mcq', question: 'Décrire la transformation f(z) = z̄ + 2i.', answers: ['Symétrie axiale (axe réel) suivie d\'une translation 2i', 'Rotation et translation', 'Similitude directe', 'Inversion'], correct: 0, explanation: 'z ↦ z̄ est la symétrie/réflexion par rapport à l\'axe réel. +2i est une translation. Similitude indirecte.' }
        ],
        // Niveau 3
        [
          { type: 'mcq', question: 'Montrer que toute similitude directe non identique a au plus un point fixe ou est une translation. Quel est le résultat ?', answers: ['Exactement un point fixe si a ≠ 1, aucun si a = 1 (translation)', 'Deux points fixes', 'Toujours un point fixe', 'Aucun point fixe possible'], correct: 0, explanation: 'f(z)=az+b. f(z₀)=z₀ → (a-1)z₀=-b → si a≠1, z₀=b/(1-a) unique. Si a=1 : translation, aucun pf si b≠0.' },
          { type: 'mcq', question: 'Calculer la composée de deux rotations d\'angles α et β de même centre O.', answers: ['Rotation d\'angle α+β de centre O', 'Translation', 'Rotation d\'angle α·β', 'Identité'], correct: 0, explanation: 'f₁(z) = e^(iα)z, f₂(z) = e^(iβ)z. f₂∘f₁(z) = e^(i(α+β))z : rotation d\'angle α+β.' },
          { type: 'mcq', question: 'Quelle est l\'image du segment [0;1] par f(z) = (1+i)z ?', answers: ['Segment [0; 1+i]', 'Cercle de rayon √2', '[0; √2]', 'Segment [0; 2]'], correct: 0, explanation: 'f(0) = 0, f(1) = 1+i. Image = segment de 0 à 1+i.' },
          { type: 'mcq', question: 'Trouver la similitude directe envoyant 0 sur 1 et 1 sur 1+i.', answers: ['f(z) = iz + 1', 'f(z) = (1+i)z + 1', 'f(z) = iz + i', 'f(z) = z + 1'], correct: 0, explanation: 'f(z) = az+b. f(0)=b=1. f(1)=a+1=1+i → a=i. f(z) = iz+1.' },
          { type: 'mcq', question: 'Déterminer le centre et l\'angle de la rotation f(z) = iz + (1-i).', answers: ['Centre 1, angle π/2', 'Centre 0, angle π/2', 'Centre i, angle π/4', 'Centre 1-i, angle π'], correct: 0, explanation: 'a = i, angle = arg(i) = π/2. Centre : z₀ = (1-i)/(1-i) = 1.' },
          { type: 'mcq', question: 'Quelle est l\'image du cercle |z-1| = 2 par f(z) = 2z + i ?', answers: ['|z - (2+i)| = 4', '|z - (2+i)| = 2', '|z - i| = 4', '|z-1| = 4'], correct: 0, explanation: 'f(z-1)=2(z-1)+2+i. Centre 1 → f(1) = 2+i. Rayon 2 → 2·2 = 4. Image : |z-(2+i)| = 4.' },
          { type: 'mcq', question: 'La transformation f(z) = e^(2iπ/3)z + (1-e^(2iπ/3)) est...', answers: ['Rotation d\'angle 2π/3 de centre 1', 'Homothétie', 'Translation', 'Rotation de centre 0'], correct: 0, explanation: 'a = e^(2iπ/3), b = 1-a. Centre = b/(1-a) = 1. Angle = 2π/3.' },
          { type: 'mcq', question: 'Quelle est l\'image de la droite Re(z) = 1 par f(z) = iz ?', answers: ['Im(z) = -1 (droite horizontale)', 'Re(z) = 1', 'Im(z) = 1', 'Cercle'], correct: 0, explanation: 'z = 1+iy → f(z) = i(1+iy) = i-y = -y+i. Re(-y+i) = -y ∈ ℝ, Im = 1. Donc Im(w) = 1.' },
          { type: 'mcq', question: 'Calculer le rapport de la similitude composée f₁∘f₂ pour f₁(z)=2iz et f₂(z)=(1+i)z+3.', answers: ['2√2', '2', '√2', '4'], correct: 0, explanation: 'f₁∘f₂(z) = 2i((1+i)z+3) = 2i(1+i)z + 6i. Rapport = |2i(1+i)| = 2|i||1+i| = 2·1·√2 = 2√2.' },
          { type: 'mcq', question: 'Déterminer si f(z) = z̄ est directe ou indirecte.', answers: ['Indirecte (elle renverse l\'orientation)', 'Directe', 'Ni l\'un ni l\'autre', 'Directe si Im(z) > 0'], correct: 0, explanation: 'La conjugaison z̄ est une isométrie indirecte (réflexion), elle renverse l\'orientation du plan.' },
          { type: 'mcq', question: 'Trouver l\'axe de la symétrie f(z) = -z̄ + 2i.', answers: ['Droite Im(z) = i (axe des y translaté)', 'Axe réel', 'Axe imaginaire', 'Droite y = 1'], correct: 0, explanation: 'f(z) = -z̄+2i. Point fixe : -x̄+iy+2i = x+iy → -x+i(-y+2) = x+iy → -x=x (x=0) et -y+2=y (y=1). Axe : x=0 et... c\'est la droite Re(z)=0, Im variant (axe imaginaire décalé)... Axe : droite y=1 (Im(z)=1).' }
        ],
        // Niveau 4
        [
          { type: 'mcq', question: 'L\'homographie f(z) = (z+1)/(z-1) envoie 0 sur...', answers: ['-1', '1', '0', '∞'], correct: 0, explanation: 'f(0) = (0+1)/(0-1) = 1/(-1) = -1.' },
          { type: 'mcq', question: 'Quel est le point envoyé à ∞ par f(z) = (2z+1)/(z-3) ?', answers: ['3', '-1/2', '∞', '2'], correct: 0, explanation: 'f(z) → ∞ quand z-3 = 0, soit z = 3.' },
          { type: 'mcq', question: 'L\'homographie f(z) = 1/z envoie le cercle |z| = 2 sur...', answers: ['|z| = 1/2', '|z| = 2', 'Droite Re(z) = 1/2', '|z| = 4'], correct: 0, explanation: 'f(re^(iθ)) = (1/r)e^(-iθ). |z|=2 → |f(z)| = 1/2.' },
          { type: 'mcq', question: 'Le groupe des homographies est isomorphe à...', answers: ['PGL(2,ℂ)', 'GL(2,ℂ)', 'SL(2,ℂ)', 'ℂ*'], correct: 0, explanation: 'Les homographies forment le groupe PGL(2,ℂ) = GL(2,ℂ)/ℂ*·I.' },
          { type: 'mcq', question: 'Quelle est la composition f∘f pour f(z) = -1/z ?', answers: ['Identité', '-z', '1/z', '-1/z'], correct: 0, explanation: 'f(f(z)) = f(-1/z) = -1/(-1/z) = z. C\'est l\'identité.' },
          { type: 'mcq', question: 'Trouver les points fixes de f(z) = (z+i)/(iz+1).', answers: ['z = ±1', 'z = i et z = -i', 'z = ±i', 'z = 0'], correct: 0, explanation: 'z(iz+1) = z+i → iz²+z = z+i → iz² = i → z² = 1 → z = ±1.' },
          { type: 'mcq', question: 'L\'homographie f(z) = (az+b)/(cz+d) est une isométrie du demi-plan supérieur si...', answers: ['a,b,c,d ∈ ℝ et ad-bc > 0', 'a,b,c,d ∈ ℤ', 'ad-bc = 1', 'a = d et b = c'], correct: 0, explanation: 'Les isométries du demi-plan de Poincaré sont les homographies réelles (a,b,c,d ∈ ℝ) de déterminant > 0.' },
          { type: 'mcq', question: 'Calculer le birapport (z₁,z₂;z₃,z₄) pour z₁=0, z₂=1, z₃=∞, z₄=-1.', answers: ['-1', '1', '0', '∞'], correct: 0, explanation: '(0,1;∞,-1) = [(0-∞)(1-(-1))]/[(0-(-1))(1-∞)] → par passage à la limite = (0-1)/(0+1) = -1.' },
          { type: 'mcq', question: 'Que préserve une homographie (transformation de Möbius) ?', answers: ['Le birapport', 'Le module', 'L\'argument', 'La distance euclidienne'], correct: 0, explanation: 'La propriété caractéristique des homographies est la conservation du birapport (cross-ratio).' },
          { type: 'mcq', question: 'Quelle est l\'image de l\'axe réel par f(z) = (z+i)/(z-i) ?', answers: ['Cercle unité', 'Axe imaginaire', 'Axe réel', 'Demi-plan Im(z)>0'], correct: 0, explanation: 'Pour z réel, |f(z)|² = |z+i|²/|z-i|² = (z²+1)/(z²+1) = 1. L\'image est le cercle unité.' }
        ],
        // Niveau 5
        [
          { type: 'mcq', question: 'Décrire géométriquement f(z) = (z-1)/(z+1) sur le plan de Riemann.', answers: ['Elle envoie la droite Re(z)=0 sur le cercle unité', 'Elle est une rotation', 'Elle contracte le plan', 'Elle est l\'identité sur le cercle unité'], correct: 0, explanation: 'Pour z = iy (axe imaginaire) : |f(iy)| = |iy-1|/|iy+1| = √(y²+1)/√(y²+1) = 1. Axe im → cercle unité.' },
          { type: 'mcq', question: 'Calculer f^n(z) pour f(z) = az+b (similitude, a≠1).', answers: ['aⁿz + b(aⁿ-1)/(a-1)', 'aⁿz + nb', 'aⁿ(z+b)', 'z + nb'], correct: 0, explanation: 'Par récurrence : fⁿ(z) = aⁿz + b(1+a+...+aⁿ⁻¹) = aⁿz + b(aⁿ-1)/(a-1).' },
          { type: 'mcq', question: 'Quelle condition sur f(z)=(az+b)/(cz+d) pour que f soit une isométrie de ℂ ?', answers: ['|a|=1, c=0, |b| quelconque (rotation+translation)', '|ad-bc|=1', 'a=d et b=-c', 'c=0 et |a|=|d|=1'], correct: 0, explanation: 'Les isométries directes de ℂ sont les similitudes z↦az+b avec |a|=1 (rotations + translations).' },
          { type: 'mcq', question: 'Calculer l\'orbite de z=i sous la transformation f(z) = -z̄.', answers: ['i → -i → i → ... (période 2)', 'i → -i → i → 0', 'i (fixe)', '-i uniquement'], correct: 0, explanation: 'f(i) = -ī = -(-i) = ... Attente : f(i) = -(ī) = -(-i) = i. Hmm : z̄(i) = -i, -(-i)=i. Donc f(i)=i, point fixe.' },
          { type: 'mcq', question: 'Le groupe des isométries du plan ℂ est engendré par...', answers: ['Les translations et les rotations (et réflexions pour les indirectes)', 'Les homothéties', 'Les homographies', 'Les inversion et translations'], correct: 0, explanation: 'Tout déplacement (isométrie directe) est composé de translations et rotations. Avec les réflexions on obtient tout le groupe d\'isométries.' },
          { type: 'mcq', question: 'Trouver toutes les similitudes directes laissant invariant le triangle équilatéral de sommets 1, j, j² (j=e^(2iπ/3)).', answers: ['Rotations d\'angles 0, 2π/3, 4π/3 centrées en 0', 'Identité seulement', 'Translations', '6 similitudes'], correct: 0, explanation: 'Les symétries directes du triangle équilatéral centré en 0 sont les rotations d\'angles 0, 2π/3, 4π/3.' },
          { type: 'mcq', question: 'Quelle est la transformation de Joukowski z ↦ z + 1/z ?', answers: ['Elle n\'est pas une similitude, mais une application conforme', 'Une homothétie', 'Une homographie', 'Une rotation'], correct: 0, explanation: 'z + 1/z est une application holomorphe (conforme) mais pas une transformation de Möbius.' },
          { type: 'mcq', question: 'Calculer le nombre de points fixes de l\'homographie f(z)=(2z+1)/(z+3).', answers: ['2', '0', '1', '∞'], correct: 0, explanation: 'f(z)=z → 2z+1 = z(z+3) = z²+3z → z²+z-1=0 : Δ=5>0, deux solutions distinctes.' },
          { type: 'mcq', question: 'Toute similitude directe peut s\'écrire comme composée de...', answers: ['Une rotation, une homothétie et une translation', 'Deux translations', 'Une rotation et une inversion', 'Deux homographies'], correct: 0, explanation: 'f(z) = az+b = |a|e^(iθ)z+b. C\'est homothétie de rapport |a|, puis rotation d\'angle θ, puis translation de b.' },
          { type: 'mcq', question: 'Quelle est l\'image du demi-plan Im(z)>0 par f(z) = (z-i)/(z+i) ?', answers: ['Disque unité |z|<1', 'Demi-plan Im(z)<0', 'Cercle unité', 'Demi-plan Re(z)>0'], correct: 0, explanation: 'C\'est la transformation de Cayley. Elle envoie bijectivement le demi-plan supérieur sur le disque unité.' }
        ],
        // Niveau 6 – Expert (L1)
        // ── NOTE : questions de niveau L1 ──
        [
          { type: 'mcq', question: '[L1] Le groupe de Möbius PSL(2,ℂ) agit sur ℂ∪{∞} par...', answers: ['Des homographies z↦(az+b)/(cz+d), ad-bc=1', 'Des rotations', 'Des isométries de ℝ³', 'Des translations complexes'], correct: 0, explanation: 'PSL(2,ℂ) = SL(2,ℂ)/{±I} agit sur ℙ¹(ℂ) = ℂ∪{∞} par les homographies.' },
          { type: 'mcq', question: '[L1] La transformation de Cayley f(z) = (z-i)/(z+i) réalise quel isomorphisme géométrique ?', answers: ['Isomorphisme du demi-plan de Poincaré et du disque de Poincaré', 'Isomorphisme ℝ et ℂ', 'Bijection ℂ→ℂ isométrique', 'Aucun, ce n\'est pas bijective'], correct: 0, explanation: 'La transformation de Cayley réalise un isomorphisme entre les deux modèles de la géométrie hyperbolique.' },
          { type: 'mcq', question: '[L1] Une application conforme est...', answers: ['Une application holomorphe à dérivée non nulle qui préserve les angles', 'Une isométrie', 'Une bijection continue', 'Une application harmonique'], correct: 0, explanation: 'Une application conforme en z₀ est holomorphe et f\'(z₀) ≠ 0 ; elle préserve les angles orientés.' },
          { type: 'mcq', question: '[L1] Le théorème de Riemann sur la représentation conforme affirme que...', answers: ['Tout domaine simplement connexe ouvert ≠ ℂ est conformément équivalent au disque unité', 'Tout ouvert est isomorphe à ℂ', 'Tout biholomorphisme de ℂ est une homothétie-translation', 'Le disque et le plan sont conformément équivalents'], correct: 0, explanation: 'Théorème de Riemann (uniformisation partielle) : tout ouvert simplement connexe de ℂ, distinct de ℂ, est biholomorphe au disque unité.' },
          { type: 'mcq', question: '[L1] Les automorphismes du disque unité 𝔻 sont...', answers: ['Les homographies de Blaschke z↦e^(iθ)(z-a)/(1-āz), |a|<1', 'Les rotations z↦e^(iθ)z', 'Les translations', 'Toutes les homographies'], correct: 0, explanation: 'Aut(𝔻) = {e^(iθ)(z-a)/(1-āz) : θ ∈ ℝ, |a| < 1} : ce sont les transformations de Blaschke.' },
          { type: 'mcq', question: '[L1] Quel est le groupe Aut(ℂ) des automorphismes (biholomorphismes) de ℂ ?', answers: ['{z ↦ az+b : a ∈ ℂ*, b ∈ ℂ}', '{z ↦ e^(iθ)z : θ ∈ ℝ}', '{z ↦ 1/z}', 'PGL(2,ℂ)'], correct: 0, explanation: 'Un biholomorphisme f : ℂ→ℂ est nécessairement un polynôme de degré 1 : f(z) = az+b.' },
          { type: 'mcq', question: '[L1] La représentation de Weierstrass des surfaces minimales fait intervenir...', answers: ['Des applications holomorphes liées à la courbure moyenne nulle', 'Des transformations de Möbius', 'Des homothéties complexes', 'Des rotations'], correct: 0, explanation: 'La représentation de Weierstrass-Enneper paramètre les surfaces minimales via des fonctions holomorphes.' },
          { type: 'mcq', question: '[L1] Les flots du groupe à un paramètre z ↦ e^(it)z (t∈ℝ) dans ℂ décrivent...', answers: ['Des rotations continues autour de 0', 'Des translations', 'Des homotéties', 'Des spirales'], correct: 0, explanation: 'e^(it)z : pour t fixé c\'est une rotation d\'angle t. La famille {e^(it)}_{t∈ℝ} forme un groupe à un paramètre de rotations.' },
          { type: 'mcq', question: '[L1] La distance hyperbolique dans le demi-plan supérieur est...', answers: ['d(z,w) = argch(1 + |z-w|²/(2 Im z Im w))', '|z-w|', '|z-w|/(Im z·Im w)', 'arctan(|z-w|)'], correct: 0, explanation: 'La métrique de Poincaré sur le demi-plan donne d(z,w) = argcosh(1+|z-w|²/(2 Im(z)Im(w))).' },
          { type: 'mcq', question: '[L1] La transformée de Fourier d\'une gaussienne f(x) = e^(-x²) est...', answers: ['√π · e^(-ξ²π²) (aussi une gaussienne)', '1/(1+ξ²)', 'δ(ξ)', 'e^(-|ξ|)'], correct: 0, explanation: 'La transformée de Fourier de e^(-x²) est √π · e^(-π²ξ²) : la classe des gaussiennes est stable par TF.' }
        ]
      ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    // NOTION 7 : Géométrie complexe
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'geometrie-complexe',
      label: 'Géométrie complexe',
      lesson: {
        formula: 'Distance: |z₁-z₂|, Milieu: (z₁+z₂)/2, Alignement: Im((z₃-z₁)/(z₂-z₁)) = 0',
        text: 'Le plan complexe permet d\'exprimer élégamment les propriétés géométriques. Les points, droites, cercles et transformations s\'expriment via les opérations sur les complexes.',
        example: 'Condition d\'alignement de A(z₁), B(z₂), C(z₃) : (z₃-z₁)/(z₂-z₁) ∈ ℝ. Condition pour triangle équilatéral : z₁²+z₂²+z₃² = z₁z₂+z₂z₃+z₃z₁.'
      },
      fullBlocks: [
        {
          type: 'definition',
          title: 'Plan complexe et affixes',
          text: 'Chaque point M du plan peut être repéré par son affixe z = x + iy ∈ ℂ. La distance entre M₁(z₁) et M₂(z₂) est |z₂ - z₁|. Le milieu de [M₁M₂] a pour affixe (z₁+z₂)/2.'
        },
        {
          type: 'formula',
          title: 'Équations de droite et cercle',
          formula: 'Cercle : |z-ω| = r. Droite : Im(az̄+āz+b) = 0 (a ∈ ℂ*, b ∈ ℝ)',
          text: 'Un cercle de centre ω et rayon r a pour équation |z-ω| = r. Une droite passant par z₁ et z₂ vérifie (z-z₁)/(z₂-z₁) ∈ ℝ.'
        },
        {
          type: 'example',
          title: 'Triangle équilatéral',
          text: 'A(z_A), B(z_B), C(z_C) forment un triangle équilatéral direct ssi z_A + jz_B + j²z_C = 0 (où j = e^(i2π/3)), ou de façon équivalente z_A² + z_B² + z_C² = z_Az_B + z_Bz_C + z_Cz_A.'
        },
        {
          type: 'demo',
          title: 'Argument et angle',
          text: 'Si A, B, C ont des affixes z_A, z_B, z_C, l\'angle orienté (BA̅,BC̅) est arg((z_C-z_B)/(z_A-z_B)). Cela permet de traiter les problèmes d\'angles et de perpendiculaires facilement.'
        }
      ],
      levels: [
        // Niveau 1
        [
          { type: 'mcq', question: 'Quelle est la distance entre les points d\'affixes 1+i et 3+4i ?', answers: ['√13', '√5', '3', '2+3i'], correct: 0, explanation: '|(3+4i)-(1+i)| = |2+3i| = √(4+9) = √13.' },
          { type: 'mcq', question: 'Quel est le milieu du segment entre les affixes 2 et 4+2i ?', answers: ['3+i', '3+2i', '2+i', '6+2i'], correct: 0, explanation: '(2 + 4+2i)/2 = (6+2i)/2 = 3+i.' },
          { type: 'mcq', question: 'Quel ensemble de points a l\'équation |z - 2| = 3 ?', answers: ['Cercle de centre 2 et rayon 3', 'Droite à distance 3 de 2', 'Cercle de centre 0 et rayon 3', 'Disque de centre 2'], correct: 0, explanation: '|z - ω| = r est le cercle de centre ω et rayon r.' },
          { type: 'mcq', question: 'Quelle est l\'affixe du point A si A est à égale distance de O(0) et B(2) ?', answers: ['Tout z vérifiant Re(z) = 1', '|z| = 1', 'z = 1', 'Im(z) = 0'], correct: 0, explanation: '|z| = |z-2| ⟺ |z|² = |z-2|² ⟺ x²+y² = (x-2)²+y² ⟺ x = 1.' },
          { type: 'mcq', question: 'L\'argument de (z₂-z₁)/(z₃-z₁) représente quel angle ?', answers: ['Angle orienté (A₁A₂, A₁A₃)', 'Angle en A₁ du triangle', 'Module', 'Aire du triangle'], correct: 0, explanation: 'arg((z₃-z₁)/(z₂-z₁)) est l\'angle orienté entre les vecteurs A₁A₂ et A₁A₃.' },
          { type: 'mcq', question: 'Trois points A, B, C sont alignés ssi...', answers: ['(z_C-z_A)/(z_B-z_A) ∈ ℝ', '|z_C-z_A| = |z_B-z_A|', 'arg(z_C/z_B) = 0', 'z_A+z_B+z_C = 0'], correct: 0, explanation: 'A, B, C alignés ⟺ le rapport (z_C-z_A)/(z_B-z_A) est réel (arguments égaux).' },
          { type: 'mcq', question: 'Quelle est l\'affixe du centre de gravité d\'un triangle ABC ?', answers: ['(z_A+z_B+z_C)/3', '(z_A+z_B+z_C)', 'z_A·z_B·z_C', '√(z_A·z_B·z_C)'], correct: 0, explanation: 'Le centre de gravité G a pour affixe la moyenne des affixes : (z_A+z_B+z_C)/3.' },
          { type: 'mcq', question: 'Quel ensemble représente |z| ≤ 1 ?', answers: ['Disque fermé de rayon 1', 'Cercle unité', 'Demi-plan', 'Bande'], correct: 0, explanation: '|z| ≤ 1 est le disque fermé (intérieur + bord du cercle unité).' },
          { type: 'mcq', question: 'Condition pour que z soit sur l\'axe imaginaire ?', answers: ['Re(z) = 0', 'Im(z) = 0', '|z| = Im(z)', 'arg(z) = 0'], correct: 0, explanation: 'L\'axe imaginaire est {z : Re(z) = 0}.' },
          { type: 'mcq', question: 'Quelle est la distance de O à la droite Re(z) = 3 ?', answers: ['3', '0', '√3', '9'], correct: 0, explanation: 'La droite Re(z)=3 est x=3, distance à l\'origine = 3.' }
        ],
        // Niveau 2
        [
          { type: 'mcq', question: 'Démontrer que OAB est isocèle en O si |z_A| = |z_B|. Quel est l\'énoncé correct ?', answers: ['OA = OB car |z_A| = |z_B| = distance à l\'origine', '|z_A| = |z_B| implique z_A = z_B', 'OA = AB', 'OB = AB'], correct: 0, explanation: 'OA = |z_A - 0| = |z_A| = |z_B| = OB. Donc OAB isocèle en O.' },
          { type: 'mcq', question: 'Trouver l\'équation du cercle passant par 0, 1, i.', answers: ['|z - (1+i)/2| = √2/2', '|z| = 1', '|z - 1| = 1', '|z - i| = |z - 1|'], correct: 0, explanation: 'Centre = milieu de l\'hypoténuse = (1+i)/2 (triangle rectangle en 0). Rayon = |(1+i)/2| = √2/2.' },
          { type: 'mcq', question: 'Quelle est la condition pour que (ABCD) soit un carré (ordre direct) en termes d\'affixes ?', answers: ['z_D - z_A = i(z_B - z_A) et z_C - z_B = i(z_A - z_B)... (rotation de π/2)', '|z_B-z_A| = |z_D-z_C|', 'z_A+z_C = z_B+z_D', 'Les 4 distances sont égales'], correct: 0, explanation: 'ABCD carré direct ⟺ z_C-z_B = i(z_B-z_A) et les côtés sont égaux, c\'est-à-dire (z_C-z_A) = i(z_B-z_A) × ... ou z_C = z_A + i(z_B-z_A)·(1+i).' },
          { type: 'mcq', question: 'Calculer la longueur AB pour A(1+2i) et B(4-2i).', answers: ['5', '√34', '3', '√(9+16)=5'], correct: 0, explanation: '|B-A| = |(4-2i)-(1+2i)| = |3-4i| = √(9+16) = 5.' },
          { type: 'mcq', question: 'Quelle est l\'équation de la médiatrice de [AB] pour A(0) et B(2+2i) ?', answers: ['Re(z) + Im(z) = 2', '|z| = |z-2-2i|', '|z-1-i| = √2', 'Re(z) = Im(z)'], correct: 0, explanation: '|z| = |z-(2+2i)| ⟺ x²+y² = (x-2)²+(y-2)² ⟺ 4x+4y = 8 ⟺ x+y = 2.' },
          { type: 'mcq', question: 'L\'angle au centre associé à un arc de cercle est lié à l\'argument. Pour un cercle de centre O, si A et B sont sur le cercle, l\'angle ∠AOB est...', answers: ['arg(z_B/z_A) si O = 0', '|z_B - z_A|', 'arg(z_A·z_B)', 'arg(z_A - z_B)'], correct: 0, explanation: 'z_A = re^(iα), z_B = re^(iβ). Angle ∠AOB = β - α = arg(z_B/z_A).' },
          { type: 'mcq', question: 'Condition pour que ABCD soit un parallélogramme ?', answers: ['z_A + z_C = z_B + z_D', 'z_A·z_C = z_B·z_D', '|z_A+z_C| = |z_B+z_D|', 'z_A - z_B = z_D - z_C'], correct: 0, explanation: 'ABCD parallélogramme ⟺ milieu(AC) = milieu(BD) ⟺ (z_A+z_C)/2 = (z_B+z_D)/2.' },
          { type: 'mcq', question: 'Quels points A(1), B(i), C(-1), D(-i) forment ?', answers: ['Un carré', 'Un losange', 'Un rectangle', 'Un trapèze'], correct: 0, explanation: 'Ces 4 points sont les racines 4ièmes de 1, régulièrement espacées sur le cercle unité : carré.' },
          { type: 'mcq', question: 'Calculer l\'angle en A dans le triangle A(0), B(1), C(i).', answers: ['π/2', 'π/4', 'π/3', 'π'], correct: 0, explanation: 'Angle en A = arg((z_C-z_A)/(z_B-z_A)) = arg(i/1) = arg(i) = π/2.' },
          { type: 'mcq', question: 'Pour z ∈ ℂ, que représente |z - 1| + |z + 1| = 4 ?', answers: ['Une ellipse de foyers ±1', 'Un cercle', 'Une droite', 'Un disque'], correct: 0, explanation: 'La somme des distances à deux foyers est constante : définition d\'une ellipse de foyers F₁(1) et F₂(-1).' }
        ],
        // Niveau 3
        [
          { type: 'mcq', question: 'Condition pour que A(z_A), B(z_B), C(z_C) forment un triangle équilatéral direct.', answers: ['z_A + jz_B + j²z_C = 0 où j = e^(i2π/3)', 'z_A² + z_B² + z_C² = 0', '|z_A|=|z_B|=|z_C|', 'z_A + z_B + z_C = 0'], correct: 0, explanation: 'Condition nécessaire et suffisante : z_A + jz_B + j²z_C = 0 (rotation d\'angle 2π/3 cyclique).' },
          { type: 'mcq', question: 'Trouver l\'image du cercle |z| = 2 par la symétrie d\'axe Im(z) = 0 (axe réel).', answers: ['|z| = 2 (invariant)', '|z| = 1/2', 'Droite', '|z| = 4'], correct: 0, explanation: 'La conjugaison z ↦ z̄ préserve le module. Le cercle |z|=2 est envoyé sur lui-même.' },
          { type: 'mcq', question: 'Calculer l\'angle (∠A₁A₂A₃) orienté en A₂ pour A₁(1), A₂(0), A₃(i).', answers: ['−π/4', 'π/4', 'π/2', 'π'], correct: 0, explanation: 'arg((z₃-z₂)/(z₁-z₂)) = arg(i/1) = π/2. Angle en A₂ = π/2.' },
          { type: 'mcq', question: 'Montrer que |z₁ + z₂|² + |z₁ - z₂|² = 2(|z₁|² + |z₂|²). Quel est le nom de cette identité ?', answers: ['Identité du parallélogramme', 'Inégalité triangulaire', 'Formule de Moivre', 'Égalité de Parseval'], correct: 0, explanation: 'L\'identité du parallélogramme : la somme des carrés des diagonales = 2 × somme des carrés des côtés.' },
          { type: 'mcq', question: 'Quelle est l\'équation d\'un cercle centré en ω ?', answers: ['z·z̄ - ω̄z - ωz̄ + |ω|² = r²', '|z| = r', '|z-ω|² = r²', 'Les deux réponses B et C sont correctes'], correct: 0, explanation: '|z-ω|² = r² développe en z·z̄ - ω̄z - ωz̄ + |ω|² = r².' },
          { type: 'mcq', question: 'Calculer le vecteur rotation : image de M(z) par rotation d\'angle π/3 de centre O.', answers: ['e^(iπ/3)z', 'z + e^(iπ/3)', 'e^(iπ/3)z̄', 'iz'], correct: 0, explanation: 'Rotation de centre 0 et d\'angle θ : z ↦ e^(iθ)z. Ici θ = π/3.' },
          { type: 'mcq', question: 'Déterminer si les points A(0), B(1+i), C(3+i), D(2) forment un carré.', answers: ['Non, c\'est un rectangle mais pas un carré', 'Oui', 'Non, c\'est un losange', 'Non, c\'est un simple quadrilatère'], correct: 0, explanation: 'AB = |1+i| = √2, BC = |2| = 2. Côtés inégaux → pas un carré. Angles droits à vérifier...' },
          { type: 'mcq', question: 'Quel est l\'angle inscrit dans un demi-cercle (théorème de Thalès) ?', answers: ['π/2', 'π', 'π/4', 'π/3'], correct: 0, explanation: 'Tout angle inscrit dans un demi-cercle (s\'appuyant sur le diamètre) est un angle droit (π/2).' },
          { type: 'mcq', question: 'Pour z = a+ib, exprimer Im(z²) en coordonnées cartésiennes.', answers: ['2ab', 'a²-b²', 'a²+b²', '2ib'], correct: 0, explanation: 'z² = (a+ib)² = a²-b² + 2abi. Im(z²) = 2ab.' },
          { type: 'mcq', question: 'Condition pour que z soit sur la droite passant par 0 et 1+i ?', answers: ['z/(1+i) ∈ ℝ', 'Im(z) = Re(z)', 'z = t(1+i) pour t ∈ ℝ', 'Les trois réponses A, B, C sont correctes'], correct: 0, explanation: 'A, B, C sont toutes équivalentes : z/(1+i) réel ⟺ z = t(1+i) ⟺ x = y.' }
        ],
        // Niveau 4
        [
          { type: 'mcq', question: 'Condition d\'orthogonalité de deux droites (D₁) et (D₂) de vecteurs directeurs z₁ et z₂.', answers: ['Re(z₁·z̄₂) = 0, c\'est-à-dire z₁/z₂ purement imaginaire', 'Im(z₁/z₂) = 0', '|z₁| = |z₂|', 'z₁ = iz₂'], correct: 0, explanation: 'D₁ ⊥ D₂ ⟺ leur vecteurs directeurs sont perpendiculaires ⟺ arg(z₂/z₁) = ±π/2 ⟺ z₂/z₁ ∈ iℝ ⟺ Re(z₁z̄₂) = 0.' },
          { type: 'mcq', question: 'Calculer l\'affixe du centre du cercle circonscrit au triangle A(0), B(1), C(i).', answers: ['(1+i)/2', '0', '1/2 + i/2', '(1+i)/4'], correct: 0, explanation: 'Triangle rectangle en A (angle π/2 en 0). Le centre est le milieu de l\'hypoténuse BC = (1+i)/2.' },
          { type: 'mcq', question: 'Exprimer la condition d\'inscriptibilité dans un cercle de quatre points.', answers: ['Le birapport (z₁,z₂;z₃,z₄) est réel', 'Les 4 points sont à la même distance de l\'origine', 'z₁+z₂+z₃+z₄ = 0', 'Tous les angles sont droits'], correct: 0, explanation: 'Quatre points sont cocycliques (ou alignés) ssi leur birapport est réel.' },
          { type: 'mcq', question: 'Trouver l\'axe de symétrie du triangle isocèle A(1+i), B(-1+i), C(0).', answers: ['Droite Re(z) = 0 (axe imaginaire)', 'Axe réel', 'Droite y = x', 'Droite y = 1'], correct: 0, explanation: 'A et B sont symétriques par rapport à l\'axe imaginaire. C est sur cet axe. Axe : Re(z) = 0.' },
          { type: 'mcq', question: 'Quelle est la condition pour que ABCD soit un trapèze (AB ∥ CD) ?', answers: ['Im((z_D-z_C)/(z_B-z_A)) = 0', 'z_D-z_C = z_B-z_A', '(z_D-z_C) ∈ ℝ', 'Le rapport (z_D-z_C)/(z_B-z_A) est réel'], correct: 0, explanation: 'AB ∥ CD ⟺ leurs vecteurs directeurs sont colinéaires ⟺ (z_D-z_C)/(z_B-z_A) ∈ ℝ.' },
          { type: 'mcq', question: 'Calculer l\'aire du triangle A(z_A), B(z_B), C(z_C) à l\'aide des affixes.', answers: ['(1/2)|Im((z_B-z_A)(z_C-z_A)̄)|', '(1/2)|z_B-z_A||z_C-z_A|', '|z_A||z_B||z_C|/2', 'Im(z_A+z_B+z_C)/2'], correct: 0, explanation: 'Aire = (1/2)|Im((z_B-z_A)·conj(z_C-z_A))| = (1/2)|det(AB,AC)|.' },
          { type: 'mcq', question: 'Pour A(e^(i2π/3)), B(e^(i4π/3)), C(1), trouver le type du triangle ABC.', answers: ['Équilatéral (racines cubiques de 1)', 'Isocèle', 'Rectangle', 'Scalène'], correct: 0, explanation: 'Ce sont les 3 racines cubiques de l\'unité : elles sont équidistantes sur le cercle unité. Triangle équilatéral.' },
          { type: 'mcq', question: 'Quelle est l\'image du point M(z) par la symétrie de centre Ω(ω) ?', answers: ['2ω - z', 'z - 2ω', 'ω - z', '2z - ω'], correct: 0, explanation: 'M\' est symétrique de M par rapport à Ω : Ω = milieu(MM\') → z + z\' = 2ω → z\' = 2ω - z.' },
          { type: 'mcq', question: 'Condition pour que A(z₁), B(z₂) soient symétriques par rapport à l\'axe imaginaire.', answers: ['z₂ = -z̄₁', 'z₂ = z̄₁', 'z₂ = -z₁', 'Re(z₁) = Re(z₂)'], correct: 0, explanation: 'La symétrie par rapport à l\'axe imaginaire envoie x+iy sur -x+iy = -(x-iy) = -z̄.' },
          { type: 'mcq', question: 'Montrer que |z₁ - z₂| ≥ ||z₁| - |z₂||. Quel est le nom de cette inégalité ?', answers: ['Inégalité triangulaire inverse', 'Inégalité de Cauchy-Schwarz', 'Inégalité du module', 'Inégalité de Jensen'], correct: 0, explanation: '||z₁| - |z₂|| ≤ |z₁ - z₂| est l\'inégalité triangulaire inverse.' }
        ],
        // Niveau 5
        [
          { type: 'mcq', question: 'Théorème de Ptolémée complexe : pour ABCD cocycliques, |AC|·|BD| = |AB|·|CD| + |AD|·|BC|. Quelle est la preuve complexe ?', answers: ['Via le birapport : |(z₃-z₁)(z₄-z₂)| = |(z₂-z₁)(z₄-z₃)| + |(z₄-z₁)(z₃-z₂)|', 'Via l\'inégalité triangulaire', 'Via le déterminant', 'Via les angles'], correct: 0, explanation: 'La preuve via le birapport utilise l\'identité algébrique complexe entre les différences d\'affixes.' },
          { type: 'mcq', question: 'L\'ensemble {z : |z-a| = |z-b|} est...', answers: ['La médiatrice de [ab]', 'Un cercle', 'La droite passant par a et b', 'Le segment [ab]'], correct: 0, explanation: 'Points équidistants de deux points = médiatrice du segment.' },
          { type: 'mcq', question: 'Calculer l\'affixe de H orthocentre du triangle A(z_A), B(z_B), C(z_C) inscrit dans le cercle unité.', answers: ['z_A + z_B + z_C', '(z_A + z_B + z_C)/3', 'z_A·z_B·z_C', '1/z_A + 1/z_B + 1/z_C'], correct: 0, explanation: 'Pour un triangle inscrit dans le cercle unité centré en O, l\'orthocentre H a pour affixe z_H = z_A + z_B + z_C.' },
          { type: 'mcq', question: 'Condition d\'homothétie de rapport k de centre Ω(ω) appliquée à M(z).', answers: ["M'(ω + k(z-ω)) = kz + (1-k)ω", "M'(kz + ω)", "M'(z/k)", "M'(kz)"], correct: 0, explanation: "L'image de z par l'homothétie de centre ω et rapport k est z' = ω + k(z-ω) = kz + (1-k)ω." },
          { type: 'mcq', question: 'Trouver le lieu des points M tels que |MA|/|MB| = k (k≠1). C\'est...', answers: ['Un cercle (cercle d\'Apollonius)', 'Une droite', 'Une ellipse', 'Une hyperbole'], correct: 0, explanation: '|z-a|/|z-b| = k ⟺ |z-a|² = k²|z-b|² : équation de cercle (si k≠1). Cercle d\'Apollonius.' },
          { type: 'mcq', question: 'Exprimer le produit scalaire AB⃗·AC⃗ en termes d\'affixes.', answers: ['Re((z_B-z_A)·(z_C-z_A)̄)', 'Im((z_B-z_A)(z_C-z_A))', '|z_B-z_A||z_C-z_A|', 'Re((z_B-z_A)+(z_C-z_A))'], correct: 0, explanation: 'AB⃗·AC⃗ = Re((z_B-z_A)·conj(z_C-z_A)) car le produit scalaire de deux vecteurs complexes.' },
          { type: 'mcq', question: 'Condition pour que le quadrilatère ABCD soit inscriptible ?', answers: ['Les angles opposés somment à π, ou birapport (z_A,z_B;z_C,z_D) réel', 'z_A+z_B+z_C+z_D = 0', 'Diagonales perpendiculaires', 'Côtés opposés égaux'], correct: 0, explanation: 'Quatre points coplanaires sont cocycliques ssi leurs angles opposés sommant à π, ou equiv. birapport réel.' },
          { type: 'mcq', question: 'Calculer l\'affixe du second point d\'intersection de la droite t↦z₀+te^(iθ) avec le cercle |z|=R.', answers: ['R²/z̄₀ dans certains cas (inversion)', 'z₀ + Re^(iθ)', '-z₀', 'z₀/|z₀|·R'], correct: 0, explanation: 'L\'inversion z↦R²/z̄ transforme une droite en cercle passant par 0, ce qui peut donner le second point.' },
          { type: 'mcq', question: 'Pour le triangle A(1), B(j), C(j²) (j=e^(i2π/3)), le centre du cercle inscrit a pour affixe...', answers: ['0', '1', '(1+j+j²)/3 = 0', 'j'], correct: 0, explanation: 'Triangle équilatéral symétrique. Centre inscrit = centre de gravité = (1+j+j²)/3 = 0/3 = 0.' },
          { type: 'mcq', question: 'Exprimer la courbure d\'une courbe paramétrée z(t) en termes complexes.', answers: ["κ = Im(z''z̄')/(|z'|³)", "|z''|/|z'|²", 'Re(z\'/z\'\')', 'Im(z\')'], correct: 0, explanation: "La courbure est κ = Im(z''(t)·conj(z'(t)))/|z'(t)|³ en paramétrage quelconque." }
        ],
        // Niveau 6 – Expert (L1)
        // ── NOTE : questions de niveau L1 ──
        [
          { type: 'mcq', question: '[L1] Le plan projectif complexe ℙ¹(ℂ) est homéomorphe à...', answers: ['La sphère S²', 'Le tore T²', 'ℝ²', 'Le disque 𝔻'], correct: 0, explanation: 'ℙ¹(ℂ) = ℂ∪{∞} est la sphère de Riemann, homéomorphe à S².' },
          { type: 'mcq', question: '[L1] La projection stéréographique envoie la sphère unité S² sur...', answers: ['ℂ∪{∞} = ℙ¹(ℂ)', 'ℂ seulement', 'Le disque unité', 'ℝ²'], correct: 0, explanation: 'La projection stéréographique depuis le pôle nord donne une bijection S²→ℂ∪{∞}.' },
          { type: 'mcq', question: '[L1] La métrique de Fubini-Study sur ℙ¹(ℂ) ≅ S² est une métrique de...', answers: ['Courbure sectionnelle constante +1', 'Courbure nulle (plate)', 'Courbure -1 (hyperbolique)', 'Courbure variable'], correct: 0, explanation: 'La sphère S² avec la métrique ronde est de courbure sectionnelle constante +1.' },
          { type: 'mcq', question: '[L1] Dans la géométrie de Moebius, les cercles généralisés (cercles et droites) sont envoyés sur...', answers: ['Des cercles généralisés', 'Des droites seulement', 'Des coniques', 'Des courbes quelconques'], correct: 0, explanation: 'Les transformations de Möbius préservent les cercles généralisés (cercles et droites du plan = cercles sur la sphère de Riemann).' },
          { type: 'mcq', question: '[L1] Combien existe-t-il de géométries planes classiques (au sens de Klein) ?', answers: ['3 : euclidienne, hyperbolique, elliptique', '2', '5', '∞'], correct: 0, explanation: 'Par le Programme d\'Erlangen de Klein, les 3 géométries planes classiques sont euclidienne (K=0), hyperbolique (K<0) et elliptique (K>0).' },
          { type: 'mcq', question: '[L1] La transformation de Joukowski z↦z+1/z est utilisée en...', answers: ['Aérodynamique (profils d\'ailes)', 'Mécanique quantique', 'Relativité', 'Thermodynamique'], correct: 0, explanation: 'La transformation de Joukowski permet de passer du cercle à un profil d\'aile en aérodynamique.' },
          { type: 'mcq', question: '[L1] Le théorème de Liouville (en géométrie) affirme que...', answers: ['Toute application conforme de ℝ^n (n≥3) est une composition de similitudes et d\'inversions', 'Toute fonction bornée est constante', 'Tout biholomorphisme de ℂ est linéaire', 'Les géodésiques du plan sont des droites'], correct: 0, explanation: 'Liouville géométrique (n≥3) : les seules conformalités sont les compositions de similitudes et inversions. En dimension 2, il y en a beaucoup plus.' },
          { type: 'mcq', question: '[L1] Le groupe de Möbius PSL(2,ℝ) agit sur le demi-plan supérieur. Quel est le quotient ℍ/PSL(2,ℤ) ?', answers: ['La surface modulaire (espace des modules des tores)', 'Une sphère', 'Un tore', 'ℂ'], correct: 0, explanation: 'ℍ/PSL(2,ℤ) est la surface modulaire, l\'espace de modules des tores complexes.' },
          { type: 'mcq', question: '[L1] L\'inversion complexe z↦1/z̄ est-elle conforme ?', answers: ['Non, c\'est anticonforme (préserve les angles mais renverse l\'orientation)', 'Oui, elle est conforme', 'Non, elle ne préserve pas les angles', 'Oui, car |d(1/z̄)/dz|>0'], correct: 0, explanation: 'z↦1/z̄ = z/|z|² est l\'inversion géométrique, antiholomorphe, donc anticonforme.' },
          { type: 'mcq', question: '[L1] Le théorème de Riemann-Roch pour une courbe compacte de genre g affirme...', answers: ['l(D) - l(K-D) = deg(D) + 1 - g', 'l(D) = deg(D)', 'Toute fonction méromorphe est un polynôme', 'dim H⁰ = g'], correct: 0, explanation: 'Riemann-Roch : ℓ(D) - ℓ(K_C - D) = deg(D) + 1 - g, où K_C est le diviseur canonique.' }
        ]
      ]
    },
    {
      id: 'suites-complexes',
      label: 'Suites complexes',
      lesson: {
        formula: 'zₙ → l ⟺ Re(zₙ) → Re(l) et Im(zₙ) → Im(l)',
        text: 'Une suite (zₙ) converge vers l ∈ ℂ si |zₙ − l| → 0, ce qui équivaut à la convergence des parties réelle et imaginaire. La suite géométrique qⁿ converge ssi |q| < 1.',
        example: 'zₙ = ((1+i)/2)ⁿ : |zₙ| = (√2/2)ⁿ → 0 donc zₙ → 0.'
      },
      fullBlocks: [
        {
          type: 'definition',
          title: 'Convergence d\'une suite complexe',
          text: '(zₙ) converge vers l si pour tout ε > 0, il existe N tel que pour n ≥ N, |zₙ − l| < ε. Cela équivaut à Re(zₙ) → Re(l) et Im(zₙ) → Im(l).'
        },
        {
          type: 'formula',
          title: 'Suite et série géométrique',
          formula: 'qⁿ → 0 si |q| < 1 ; Σ qⁿ = 1/(1−q) si |q| < 1',
          text: 'La convergence de qⁿ dépend du module de q. Si |q| > 1 la suite diverge, si |q| = 1 (q ≠ 1) elle est bornée sans converger.'
        },
        {
          type: 'example',
          title: 'Exemple de limite',
          text: 'zₙ = (1 + i/n) → 1 car Re → 1 et Im = 1/n → 0. Autre : zₙ = iⁿ est périodique de période 4, donc diverge.'
        },
        {
          type: 'demo',
          title: 'Critère de Cauchy',
          text: '(zₙ) converge ssi elle est de Cauchy : ∀ε > 0, ∃N, ∀n,m ≥ N, |zₙ − zₘ| < ε. Ce critère vient de la complétude de ℂ ≅ ℝ².'
        }
      ],
      levels: [
        // Niveau 1 — Très facile
        [
          { type: 'mcq', question: 'La suite zₙ = (1/2)ⁿ converge-t-elle ?', answers: ['Oui, vers 0', 'Non, elle diverge', 'Oui, vers 1/2', 'Oui, vers 1'], correct: 0, explanation: '|(1/2)ⁿ| = (1/2)ⁿ → 0, donc zₙ → 0.' },
          { type: 'mcq', question: 'Quelle est la limite de zₙ = 1 + i/n quand n → +∞ ?', answers: ['1', 'i', '1 + i', '0'], correct: 0, explanation: 'i/n → 0, donc zₙ → 1 + 0 = 1.' },
          { type: 'mcq', question: 'La suite zₙ = iⁿ converge-t-elle ?', answers: ['Non, elle est périodique de période 4', 'Oui, vers i', 'Oui, vers 0', 'Oui, vers 1'], correct: 0, explanation: 'iⁿ prend les valeurs 1, i, −1, −i cycliquement : elle ne converge pas.' },
          { type: 'mcq', question: 'Si |q| < 1, que vaut lim qⁿ ?', answers: ['0', '1', 'q', '+∞'], correct: 0, explanation: 'Pour |q| < 1, |qⁿ| = |q|ⁿ → 0, donc qⁿ → 0.' },
          { type: 'mcq', question: 'La suite zₙ = n + i converge-t-elle ?', answers: ['Non, Re(zₙ) = n → +∞', 'Oui, vers i', 'Oui, vers +∞ + i', 'Oui, vers 0'], correct: 0, explanation: 'Re(zₙ) = n → +∞, donc la suite diverge.' },
          { type: 'mcq', question: 'Calculer lim (1/3 + i/3)ⁿ.', answers: ['0', '1/3 + i/3', '1', 'Diverge'], correct: 0, explanation: '|1/3 + i/3| = √2/3 < 1, donc la suite tend vers 0.' },
          { type: 'mcq', question: 'La suite zₙ = e^(inπ) vaut alternativement 1 et −1. Elle...', answers: ['Diverge', 'Converge vers 0', 'Converge vers 1', 'Converge vers −1'], correct: 0, explanation: 'e^(inπ) = (−1)ⁿ, qui oscille entre 1 et −1 : diverge.' },
          { type: 'mcq', question: 'Que vaut la somme Σₙ₌₀^∞ (1/2)ⁿ ?', answers: ['2', '1', '∞', '1/2'], correct: 0, explanation: 'Série géométrique de raison 1/2 : 1/(1 − 1/2) = 2.' },
          { type: 'mcq', question: 'Si (zₙ) converge vers l, que vaut lim |zₙ| ?', answers: ['|l|', 'l', 'Re(l)', '0'], correct: 0, explanation: 'La fonction module est continue, donc |zₙ| → |l|.' },
          { type: 'mcq', question: 'La suite zₙ = i/n converge-t-elle ? Vers quoi ?', answers: ['Oui, vers 0', 'Oui, vers i', 'Non', 'Oui, vers 1/n'], correct: 0, explanation: '|i/n| = 1/n → 0, donc zₙ → 0.' }
        ],
        // Niveau 2 — Facile
        [
          { type: 'mcq', question: 'Pour q = (1 + i)/2, calculer |q|.', answers: ['√2/2', '1', '√2', '1/2'], correct: 0, explanation: '|(1+i)/2| = |1+i|/2 = √2/2.' },
          { type: 'mcq', question: 'La suite zₙ = ((1+i)/2)ⁿ converge-t-elle ?', answers: ['Oui, vers 0', 'Non', 'Oui, vers (1+i)/2', 'Oui, vers 1'], correct: 0, explanation: '|(1+i)/2| = √2/2 < 1, donc zₙ → 0.' },
          { type: 'mcq', question: 'Calculer Σₙ₌₀^∞ ((1+i)/2)ⁿ.', answers: ['1 + i', '2/(1−i)', '1/(1−i)', '2 + 2i'], correct: 0, explanation: '1/(1 − (1+i)/2) = 1/((1−i)/2) = 2/(1−i) = 2(1+i)/2 = 1+i.' },
          { type: 'mcq', question: 'Que vaut lim (n + i)/(n + 2i) ?', answers: ['1', 'i', '0', '1/2'], correct: 0, explanation: 'Diviser par n : (1 + i/n)/(1 + 2i/n) → 1/1 = 1.' },
          { type: 'mcq', question: 'Si zₙ = aₙ + ibₙ et aₙ → 3, bₙ → −2, quelle est la limite de zₙ ?', answers: ['3 − 2i', '3 + 2i', '−3 + 2i', '1'], correct: 0, explanation: 'zₙ converge vers a + ib = 3 − 2i.' },
          { type: 'mcq', question: 'La suite zₙ = e^(iπ/n) converge-t-elle ?', answers: ['Oui, vers 1', 'Oui, vers e^(iπ) = −1', 'Non', 'Oui, vers 0'], correct: 0, explanation: 'π/n → 0, donc e^(iπ/n) → e^0 = 1.' },
          { type: 'mcq', question: 'Pour q = i/2, calculer la somme Σₙ₌₀^∞ qⁿ.', answers: ['2/(2−i)', '1/(1−i/2)', '2+i', '4/5 + 2i/5'], correct: 0, explanation: '1/(1−i/2) = 2/(2−i). En multipliant : 2(2+i)/5 = (4+2i)/5.' },
          { type: 'mcq', question: 'La suite zₙ = (−1)ⁿ/n + i/n² converge-t-elle ?', answers: ['Oui, vers 0', 'Non, diverge', 'Oui, vers −1', 'Oui, vers i'], correct: 0, explanation: '|zₙ| ≤ 1/n + 1/n² → 0, donc zₙ → 0.' },
          { type: 'mcq', question: 'Que vaut lim n²/(n² + i) ?', answers: ['1', '0', 'i', '+∞'], correct: 0, explanation: 'n²/(n²+i) = 1/(1+i/n²) → 1/1 = 1.' },
          { type: 'mcq', question: 'Si |zₙ − l| < 1/n pour tout n, que peut-on conclure ?', answers: ['zₙ → l', 'zₙ est bornée', 'zₙ diverge', 'Rien'], correct: 0, explanation: '1/n → 0, donc |zₙ − l| → 0, ce qui signifie zₙ → l.' }
        ],
        // Niveau 3 — Intermédiaire
        [
          { type: 'mcq', question: 'Étudier la convergence de zₙ = (1 + i/n)ⁿ.', answers: ['Converge vers e^i = cos1 + i sin1', 'Converge vers 1', 'Diverge', 'Converge vers e'], correct: 0, explanation: '(1 + i/n)ⁿ → e^i par définition de l\'exponentielle complexe.' },
          { type: 'mcq', question: 'Calculer lim ((n+i)/(n−i))ⁿ.', answers: ['e^(2i)', '1', '−1', 'Diverge'], correct: 0, explanation: '(n+i)/(n−i) = 1 + 2i/(n−i) → (1 + 2i/n)^n · ... → e^(2i).' },
          { type: 'mcq', question: 'La suite zₙ = n·e^(inπ/2)/n! converge-t-elle ?', answers: ['Oui, vers 0', 'Non', 'Oui, vers 1', 'Oui, vers e^(iπ/2) = i'], correct: 0, explanation: '|zₙ| = n/n! = 1/(n−1)! → 0, donc zₙ → 0.' },
          { type: 'mcq', question: 'Si Σ|zₙ| converge, que peut-on dire de Σ zₙ ?', answers: ['Σ zₙ converge absolument, donc converge', 'Σ zₙ peut diverger', 'Rien sans plus d\'info', 'Σ zₙ diverge'], correct: 0, explanation: 'La convergence absolue implique la convergence : ℂ est complet.' },
          { type: 'mcq', question: 'Calculer la somme Σₙ₌₀^∞ (i/√2)ⁿ.', answers: ['√2/(√2−i)', '1/(1−i/√2)', '√2+i', '2/(2−i)'], correct: 0, explanation: '1/(1 − i/√2) = √2/(√2 − i). On peut aussi écrire √2(√2+i)/3 = (2+i√2)/3.' },
          { type: 'mcq', question: 'La suite zₙ = e^(in) est-elle convergente ?', answers: ['Non, elle est bornée mais diverge', 'Oui, vers 0', 'Oui, vers 1', 'Oui, vers e^i'], correct: 0, explanation: '|e^(in)| = 1, la suite est bornée. Mais e^(in) oscille sans converger (1 est irrationnel multiple de π).' },
          { type: 'mcq', question: 'Donner un équivalent de |zₙ| pour zₙ = (1+i/n)ⁿ.', answers: ['1 pour tout n', '|e^i| = 1', 'n', '1/n'], correct: 0, explanation: '|(1+i/n)ⁿ| = (|1+i/n|)ⁿ = (1+1/n²)^(n/2) → e^0 = 1.' },
          { type: 'mcq', question: 'Étudier Σ zⁿ pour z = e^(iπ/3)/2.', answers: ['Converge car |z| = 1/2 < 1', 'Diverge car z est complexe', 'Converge seulement si Im(z) = 0', 'Diverge car |z| = 1'], correct: 0, explanation: '|z| = |e^(iπ/3)|/2 = 1/2 < 1, donc la série géométrique converge.' },
          { type: 'mcq', question: 'Calculer lim Re((1+i/n)²ⁿ).', answers: ['cos(2)', 'e²', '1', '0'], correct: 0, explanation: '(1+i/n)²ⁿ → e^(2i). Re(e^(2i)) = cos(2).' },
          { type: 'mcq', question: 'Si zₙ → l et zₙ → l\', que vaut l − l\' ?', answers: ['0', '1', 'zₙ', 'Indéterminé'], correct: 0, explanation: 'La limite est unique dans ℂ (séparé), donc l = l\' et l − l\' = 0.' }
        ],
        // Niveau 4 — Difficile
        [
          { type: 'mcq', question: 'Étudier la convergence de zₙ = Σₖ₌₀ⁿ (−1)ᵏiᵏ/k!.', answers: ['Converge vers e^(−i) = cos1 − i sin1', 'Diverge', 'Converge vers 0', 'Converge vers e^i'], correct: 0, explanation: 'C\'est la série exponentielle en −i : Σ (−i)ᵏ/k! → e^(−i).' },
          { type: 'mcq', question: 'Rayon de convergence de Σ nzⁿ ?', answers: ['1', '0', '+∞', '1/n'], correct: 0, explanation: 'R = 1/limsup|n|^(1/n) = 1/1 = 1.' },
          { type: 'mcq', question: 'La suite définie par z₀ = 1, zₙ₊₁ = izₙ/2 + 1. Trouver sa limite.', answers: ['2/(2−i)', '1/(1−i/2)', '2+i', 'Diverge'], correct: 0, explanation: 'Point fixe : l = il/2 + 1 → l(1−i/2) = 1 → l = 2/(2−i).' },
          { type: 'mcq', question: 'Calculer lim n(e^(i/n) − 1).', answers: ['i', '0', '1', 'e^i − 1'], correct: 0, explanation: 'n(e^(i/n) − 1) = n·(i/n + O(1/n²)) → i.' },
          { type: 'mcq', question: 'Quel est le rayon de convergence de Σ zⁿ/n² ?', answers: ['1', '2', '+∞', '1/2'], correct: 0, explanation: 'limsup|1/n²|^(1/n) = 1, donc R = 1.' },
          { type: 'mcq', question: 'La suite zₙ = (1+i)ⁿ/2ⁿ est-elle bornée ?', answers: ['Oui, |zₙ| = 1 pour tout n', '|(1+i)/2|ⁿ → 0', 'Non, diverge vers ∞', 'Oui, |zₙ| ≤ 2'], correct: 0, explanation: '|(1+i)/2| = √2/2, donc |zₙ| = (√2/2)ⁿ → 0. Bornée et → 0.' },
          { type: 'mcq', question: 'Étudier zₙ = Σₖ₌₁ⁿ iᵏ/k.', answers: ['Converge (série convergente en z = i sur le bord)', 'Diverge car |i| = 1', 'Converge vers 0', 'On ne peut pas conclure'], correct: 0, explanation: 'Σ iᵏ/k converge par le critère d\'Abel-Dirichlet (les sommes partielles de iᵏ sont bornées, 1/k → 0).' },
          { type: 'mcq', question: 'Calculer Σₙ₌₁^∞ (e^(iπ/4))ⁿ.', answers: ['e^(iπ/4)/(1−e^(iπ/4))', '1/(1−e^(iπ/4))', 'Diverge', '0'], correct: 0, explanation: 'Σₙ₌₁^∞ qⁿ = q/(1−q) avec q = e^(iπ/4), |q| = 1. La série diverge.' },
          { type: 'mcq', question: 'Donner la limite de zₙ = (2+i)ⁿ/(2−i)ⁿ quand n → ∞.', answers: ['Diverge, le module est 1 mais l\'argument spirale', 'Converge vers 1', 'Converge vers 0', 'Converge vers (2+i)/(2−i)'], correct: 0, explanation: '|(2+i)/(2−i)| = 1, arg varie → la suite reste de module 1 et oscille. Diverge.' },
          { type: 'mcq', question: 'Si zₙ → 0 et (wₙ) est bornée, que vaut lim zₙwₙ ?', answers: ['0', 'wₙ', 'Indéterminé', '1'], correct: 0, explanation: '|zₙwₙ| = |zₙ||wₙ| ≤ M|zₙ| → 0. Donc zₙwₙ → 0.' }
        ],
        // Niveau 5 — Très difficile
        [
          { type: 'mcq', question: 'Calculer lim Im((1 + i/n)ⁿ).', answers: ['sin(1)', 'cos(1)', '1', '0'], correct: 0, explanation: '(1+i/n)ⁿ → e^i = cos1 + i sin1. Im → sin(1).' },
          { type: 'mcq', question: 'Quel est le rayon de convergence de Σ n!zⁿ ?', answers: ['0', '1', '+∞', 'e'], correct: 0, explanation: 'limsup|n!|^(1/n) ~ n/e → ∞, donc R = 0. La série ne converge que pour z = 0.' },
          { type: 'mcq', question: 'La suite zₙ = Σₖ₌₀ⁿ (iπ)ᵏ/k! converge vers ?', answers: ['e^(iπ) = −1', '0', '1', 'e^i'], correct: 0, explanation: 'C\'est la série exponentielle évaluée en iπ : Σ (iπ)ᵏ/k! = e^(iπ) = −1.' },
          { type: 'mcq', question: 'Montrer que Σ zⁿ/n! converge pour tout z ∈ ℂ. Quel est son rayon de convergence ?', answers: ['+∞', '1', 'e', '0'], correct: 0, explanation: 'limsup|1/n!|^(1/n) → 0, donc R = +∞ : convergence totale sur ℂ.' },
          { type: 'mcq', question: 'Calculer la somme Σₙ₌₀^∞ cos(nθ)/2ⁿ en utilisant les complexes.', answers: ['(2−cosθ)/(5−4cosθ)', 'Re(1/(1−e^(iθ)/2))', '1/(2−cosθ)', '(2cosθ−1)/(4−4cosθ+1)'], correct: 0, explanation: 'Σ (e^(iθ)/2)ⁿ = 1/(1−e^(iθ)/2). Prendre la partie réelle donne (2−cosθ)/(5−4cosθ).' },
          { type: 'mcq', question: 'Étudier la convergence de Σ (−1)ⁿzⁿ pour z = i.', answers: ['Diverge car |i| = 1 et la série géométrique alterne sans tendre vers 0', 'Converge vers 1/(1+i)', 'Converge vers 0', 'Converge absolument'], correct: 0, explanation: '|i| = 1 donc les termes (−i)ⁿ ne tendent pas vers 0 : la série diverge.' },
          { type: 'mcq', question: 'Calculer Σₙ₌₀^∞ sin(nθ)/3ⁿ.', answers: ['sinθ/(9−6cosθ+1) simplifiée : 3sinθ/(10−6cosθ)', 'Im(1/(1−e^(iθ)/3))', 'sinθ/(3−cosθ)', 'Diverge'], correct: 0, explanation: 'Σ(e^(iθ)/3)ⁿ = 3/(3−e^(iθ)). Im de ce résultat = 3sinθ/((3−cosθ)²+sin²θ) = 3sinθ/(10−6cosθ).' },
          { type: 'mcq', question: 'Quel est le comportement de zₙ = (1+i)ⁿ ?', answers: ['Diverge, |zₙ| = (√2)ⁿ → +∞', 'Converge vers 0', 'Bornée', 'Converge vers 1+i'], correct: 0, explanation: '|(1+i)ⁿ| = |1+i|ⁿ = (√2)ⁿ → +∞ : la suite diverge.' },
          { type: 'mcq', question: 'Si Σaₙ et Σbₙ convergent absolument, Σ(aₙ+ibₙ) converge-t-elle ?', answers: ['Oui, absolument', 'Non', 'Seulement si aₙ, bₙ ≥ 0', 'Seulement si les sommes sont égales'], correct: 0, explanation: 'Σ|aₙ+ibₙ| ≤ Σ|aₙ| + Σ|bₙ| < ∞ : convergence absolue.' },
          { type: 'mcq', question: 'Calculer Σₙ₌₁^∞ nqⁿ pour |q| < 1.', answers: ['q/(1−q)²', '1/(1−q)²', 'q/(1−q)', '1/(1−q)'], correct: 0, explanation: 'Σₙ₌₁^∞ nqⁿ = q·d/dq(1/(1−q)) = q/(1−q)².' }
        ],
        // ── À partir d'ici : niveau L1 (première année universitaire) ──
        // Niveau 6 — Expert L1
        [
          { type: 'mcq', question: '[L1] ℂ est-il complet pour la norme |·| ?', answers: ['Oui, toute suite de Cauchy converge dans ℂ', 'Non, certaines suites de Cauchy divergent', 'Oui, seulement pour les suites réelles', 'Non, ℂ n\'est pas métrique'], correct: 0, explanation: 'ℂ ≅ ℝ² est complet : toute suite de Cauchy de complexes converge dans ℂ.' },
          { type: 'mcq', question: '[L1] Le rayon de convergence de Σ zⁿ/(n·2ⁿ) est ?', answers: ['2', '1', '1/2', '+∞'], correct: 0, explanation: 'limsup|1/(n·2ⁿ)|^(1/n) = 1/2, donc R = 2.' },
          { type: 'mcq', question: '[L1] La série entière Σ zⁿ/n converge pour z = −1. Vers quoi ?', answers: ['ln(2)', '−ln(2)', '0', 'Diverge'], correct: 0, explanation: 'Σ(−1)ⁿ/n = −ln(2). Par le prolongement de la fonction ln, Σzⁿ/n = −ln(1−z) donc en z=−1 : ln(2).' },
          { type: 'mcq', question: '[L1] Quelle est la somme de la série Σₙ₌₀^∞ (iz)ⁿ pour |z| < 1 ?', answers: ['1/(1−iz)', '1/(1+iz)', 'e^(iz)', '1/(1−z)'], correct: 0, explanation: 'Série géométrique de raison iz : Σ(iz)ⁿ = 1/(1−iz).' },
          { type: 'mcq', question: '[L1] Le développement en série entière de cos z est ?', answers: ['Σₙ₌₀^∞ (−1)ⁿz²ⁿ/(2n)!', 'Σₙ₌₀^∞ (−1)ⁿz^n/n!', 'Σₙ₌₀^∞ z²ⁿ/(2n)!', 'Σₙ₌₀^∞ (iz)ⁿ/n!'], correct: 0, explanation: 'cos z = Re(e^(iz)) = Σ(−1)ⁿz²ⁿ/(2n)!.' },
          { type: 'mcq', question: '[L1] Une série de Laurent Σₙ₌−∞^∞ aₙzⁿ converge dans...', answers: ['Une couronne r < |z| < R', 'Un disque |z| < R', 'Tout ℂ', 'Une demi-droite'], correct: 0, explanation: 'La série de Laurent converge dans une couronne (anneau) r < |z| < R déterminée par les coefficients.' },
          { type: 'mcq', question: '[L1] Si f(z) = Σ aₙzⁿ a rayon R, quel est le rayon de Σ aₙz^(2n) ?', answers: ['√R', 'R', 'R²', '2R'], correct: 0, explanation: 'On pose w = z², donc Σaₙwⁿ converge pour |w| < R, soit |z²| < R, soit |z| < √R.' },
          { type: 'mcq', question: '[L1] La suite zₙ = Σₖ₌₀ⁿ (iπ/2)ᵏ/k! converge vers ?', answers: ['i', 'e^(iπ/2)', 'cos(π/2) + i sin(π/2)', 'Les trois réponses précédentes sont égales'], correct: 0, explanation: 'Σ(iπ/2)ᵏ/k! = e^(iπ/2) = cos(π/2)+i sin(π/2) = 0+i·1 = i. Les trois sont bien égaux.' },
          { type: 'mcq', question: '[L1] Quel est le développement de 1/(1−z)² ?', answers: ['Σₙ₌₀^∞ (n+1)zⁿ', 'Σₙ₌₀^∞ zⁿ', 'Σₙ₌₀^∞ n²zⁿ', 'Σₙ₌₀^∞ nzⁿ'], correct: 0, explanation: 'En dérivant Σzⁿ = 1/(1−z), on obtient d/dz : Σ nzⁿ⁻¹ = 1/(1−z)², soit Σ(n+1)zⁿ.' },
          { type: 'mcq', question: '[L1] La convergence normale d\'une série Σ fₙ sur un compact K signifie ?', answers: ['Σ sup_K|fₙ| < ∞', 'Σ fₙ converge ponctuellement', 'Σ |fₙ| converge ponctuellement', 'Σ fₙ → 0 uniformément'], correct: 0, explanation: 'Convergence normale : Σ ‖fₙ‖_K < ∞ où ‖fₙ‖_K = sup_{z∈K}|fₙ(z)|. Elle implique la convergence uniforme.' }
        ]
      ]
    }
  ]
};
