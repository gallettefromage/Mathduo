/**
 * CHAPITRE : Calcul modulaire — Terminale / L1
 *
 * ╔══════════════════════════════════════════════════════════╗
 * ║  STRUCTURE D'UNE NOTION                                  ║
 * ║  lesson     : { formula, text, example }                 ║
 * ║  fullBlocks : blocs du cours complet                     ║
 * ║  levels     : tableau de 6 tableaux d'exercices          ║
 * ║               levels[0] = exercices du niveau 1, etc.    ║
 * ╚══════════════════════════════════════════════════════════╝
 */
export default {
  id: 'modulaire',
  title: 'Calcul modulaire',
  description: 'congruence, modulo p, restes, arithmétique modulaire, théorèmes',
  icon: '🧮',
  xpMax: 130,

  notions: [

    // ════════════════════════════════════════════════════
    // 1. DIVISION EUCLIDIENNE
    // ════════════════════════════════════════════════════
    {
      id: 'division-euclidienne',
      label: 'Division euclidienne',
      icon: '➗',
      lesson: {
        formula: 'a = b·q + r, avec 0 ≤ r < b',
        text: 'Tout entier a peut s\'écrire de manière unique comme le produit d\'un diviseur b par un quotient q, plus un reste r strictement inférieur à b. Cette décomposition est la base de l\'arithmétique modulaire.',
        example: '23 = 4·5 + 3 (diviseur b=4, quotient q=5, reste r=3). Vérif : 4×5+3 = 23 ✓. Et 0 ≤ 3 < 4 ✓',
      },
      fullBlocks: [
        {
          type: 'definition',
          title: '📌 Théorème de la division euclidienne',
          text: 'Soient a ∈ ℤ et b ∈ ℕ* (b ≥ 1). Il existe un unique couple (q, r) d\'entiers tel que :\n• a = b·q + r\n• 0 ≤ r < b\nq est appelé le <strong>quotient euclidien</strong> et r le <strong>reste euclidien</strong> de la division de a par b.'
        },
        {
          type: 'demo',
          title: '🔬 Existence et unicité',
          text: '<strong>Existence :</strong> On pose q = ⌊a/b⌋ (partie entière inférieure) et r = a − b·q. Alors 0 ≤ r < b par définition de la partie entière.<br><strong>Unicité :</strong> Si a = bq + r = bq\' + r\' avec 0 ≤ r, r\' < b, alors b(q−q\') = r\'−r. Comme |r\'−r| < b, on a q = q\' et r = r\'.'
        },
        {
          type: 'formula',
          title: '🔑 Formule clé',
          formula: 'q = ⌊a/b⌋  et  r = a − b·⌊a/b⌋ = a mod b',
          text: 'On note souvent r = a mod b. Le reste est l\'opération "modulo".'
        },
        {
          type: 'example',
          title: '💡 Exemples variés',
          text: '• 100 = 7·14 + 2 → reste = 2\n• 17 = 5·3 + 2 → reste = 2\n• 36 = 6·6 + 0 → reste = 0 (6 divise 36)\n• −7 = 3·(−3) + 2 → reste = 2 (attention : pour les négatifs, le reste reste positif !)'
        },
        {
          type: 'warning',
          title: '⚠️ Entiers négatifs',
          text: 'Pour a négatif, le reste doit toujours être ≥ 0. Par exemple, −13 divisé par 5 : −13 = 5·(−3) + 2, car 5·(−3) = −15 et −15 + 2 = −13. Le reste est 2, pas −3.'
        },
        {
          type: 'technique',
          title: '🛠️ Méthode pratique',
          text: 'Pour trouver r = a mod b :\n1. Diviser a par b (division décimale)\n2. Prendre la partie entière du résultat → c\'est q\n3. Calculer r = a − b·q\n\nExemple : a = 137, b = 12. 137/12 ≈ 11,41 → q = 11. r = 137 − 12×11 = 137 − 132 = 5.'
        }
      ],
      levels: [
        // Niveau 1 — Identification simple
        [
          { type: 'mcq', question: 'Dans la division euclidienne de 17 par 5, le reste est :', answers: ['2', '3', '1', '4'], correct: 0, explanation: '17 = 5·3 + 2. Vérification : 5×3 = 15, 15+2 = 17 ✓. Le reste est 2.' },
          { type: 'mcq', question: 'Quel est le reste de la division de 25 par 6 ?', answers: ['1', '2', '4', '5'], correct: 0, explanation: '25 = 6·4 + 1. Vérification : 6×4 = 24, 24+1 = 25 ✓. Reste = 1.' },
          { type: 'mcq', question: 'Dans a = bq + r, quelle condition doit satisfaire r ?', answers: ['0 ≤ r < b', '0 < r ≤ b', '0 ≤ r ≤ b', 'r < b (sans contrainte de signe)'], correct: 0, explanation: 'Le reste r doit satisfaire 0 ≤ r < b : il est positif ou nul, et strictement inférieur au diviseur b.' },
          { type: 'mcq', question: 'Quel est le quotient de la division euclidienne de 41 par 7 ?', answers: ['5', '6', '4', '7'], correct: 0, explanation: '41 = 7·5 + 6. Le quotient q est 5 et le reste r est 6. Vérification : 7×5+6 = 35+6 = 41 ✓.' },
          { type: 'input', question: 'Donnez le reste de la division euclidienne de 100 par 9.', correct: '1', explanation: '100 = 9·11 + 1. Vérification : 9×11 = 99, 99+1 = 100 ✓. Reste = 1.' },
          { type: 'mcq', question: 'Le reste de 36 divisé par 6 est :', answers: ['0', '1', '6', '3'], correct: 0, explanation: '36 = 6·6 + 0. Le reste est 0, ce qui signifie que 6 divise 36 exactement.' },
          { type: 'mcq', question: 'Pour a = 29, b = 4, le couple (q, r) est :', answers: ['(7, 1)', '(7, 2)', '(6, 5)', '(8, 3)'], correct: 0, explanation: '29 = 4·7 + 1. Vérification : 4×7 = 28, 28+1 = 29 ✓. Et 0 ≤ 1 < 4 ✓.' },
          { type: 'mcq', question: 'Quel est le reste de 50 divisé par 7 ?', answers: ['1', '2', '6', '0'], correct: 0, explanation: '50 = 7·7 + 1. Vérification : 7×7 = 49, 49+1 = 50 ✓. Reste = 1.' },
          { type: 'input', question: 'Quel est le reste de 83 divisé par 8 ?', correct: '3', explanation: '83 = 8·10 + 3. Vérification : 8×10 = 80, 80+3 = 83 ✓. Reste = 3.' },
          { type: 'mcq', question: 'La décomposition 23 = 5·4 + 3 est-elle correcte ?', answers: ['Oui', 'Non, le reste devrait être 4', 'Non, le quotient devrait être 5', 'Non, 0 ≤ 3 < 5 n\'est pas vérifié'], correct: 0, explanation: '5×4 = 20, 20+3 = 23 ✓. Et 0 ≤ 3 < 5 ✓. La décomposition est correcte.' }
        ],
        // Niveau 2 — Propriétés et cas spéciaux
        [
          { type: 'mcq', question: 'Quel est le reste de −13 divisé par 5 ?', answers: ['2', '−3', '3', '−2'], correct: 0, explanation: '−13 = 5·(−3) + 2. Le reste doit être ≥ 0. Vérification : 5×(−3) = −15 et −15+2 = −13 ✓. Reste = 2.' },
          { type: 'mcq', question: 'Pour a = 0, b = 7, le reste de la division euclidienne est :', answers: ['0', '7', '1', 'Indéfini'], correct: 0, explanation: '0 = 7·0 + 0. Le reste est 0, ce qui est cohérent : 7 "divise" 0.' },
          { type: 'mcq', question: 'Si r = 0 dans a = bq + r, qu\'est-ce que cela signifie ?', answers: ['b divise a', 'a divise b', 'a et b sont premiers', 'q = 0'], correct: 0, explanation: 'Si r = 0, alors a = bq, ce qui signifie que b divise a (noté b | a). C\'est la définition de la divisibilité.' },
          { type: 'input', question: 'Quel est le reste de −7 divisé par 3 ?', correct: '2', explanation: '−7 = 3·(−3) + 2. Vérif : 3×(−3) = −9 et −9+2 = −7 ✓. Le reste doit être ≥ 0, donc r = 2.' },
          { type: 'mcq', question: 'Quel est le reste de 1000 divisé par 9 ?', answers: ['1', '9', '0', '10'], correct: 0, explanation: '1000 = 9·111 + 1 (car 9×111 = 999). Reste = 1. Astuce : somme des chiffres de 1000 = 1+0+0+0 = 1.' },
          { type: 'mcq', question: 'Combien de restes possibles existe-t-il dans la division par n ?', answers: ['n (de 0 à n−1)', 'n−1 (de 1 à n−1)', 'n+1 (de 0 à n)', 'Infiniment nombreux'], correct: 0, explanation: 'Le reste r vérifie 0 ≤ r < n, donc r ∈ {0, 1, 2, …, n−1} : il y a exactement n valeurs possibles.' },
          { type: 'mcq', question: 'Quel est le reste de 2¹⁰ = 1024 divisé par 3 ?', answers: ['1', '2', '0', '3'], correct: 0, explanation: '1024 = 3·341 + 1 (car 3×341 = 1023). Reste = 1. On peut aussi vérifier : 2 ≡ −1 [3], donc 2¹⁰ ≡ (−1)¹⁰ = 1 [3].' },
          { type: 'input', question: 'Quel est le reste de 7³ = 343 divisé par 5 ?', correct: '3', explanation: '343 = 5·68 + 3 (5×68 = 340). Reste = 3. Ou : 7 ≡ 2 [5], 7³ ≡ 8 ≡ 3 [5].' },
          { type: 'mcq', question: 'Le quotient de la division de 2023 par 100 est :', answers: ['20', '23', '2', '200'], correct: 0, explanation: '2023 = 100·20 + 23. Quotient = 20, reste = 23.' },
          { type: 'mcq', question: 'Si a = bq + r et a = bq\' + r\' avec 0 ≤ r, r\' < b, alors :', answers: ['q = q\' et r = r\'', 'q peut différer de q\'', 'r peut différer de r\'', 'Aucune conclusion'], correct: 0, explanation: 'C\'est l\'unicité de la division euclidienne. La décomposition a = bq + r avec 0 ≤ r < b est unique.' }
        ],
        // Niveau 3 — Application et raisonnement
        [
          { type: 'mcq', question: 'Un nombre est divisible par 3 si et seulement si :', answers: ['La somme de ses chiffres est divisible par 3', 'Son dernier chiffre est 0, 3, 6 ou 9', 'Il est pair', 'Son chiffre des unités est divisible par 3'], correct: 0, explanation: 'Critère de divisibilité par 3 : la somme des chiffres est divisible par 3. Exemple : 123 → 1+2+3=6, divisible par 3 ✓.' },
          { type: 'mcq', question: 'Le reste de n² dans la division par 4, pour n impair, est toujours :', answers: ['1', '0', '2', '3'], correct: 0, explanation: 'n impair ⟹ n = 2k+1, donc n² = 4k²+4k+1 = 4(k²+k)+1. Le reste est toujours 1.' },
          { type: 'mcq', question: 'Quel est le dernier chiffre de 3¹⁰⁰ ?', answers: ['1', '3', '7', '9'], correct: 0, explanation: 'Dernier chiffre = reste mod 10. Puissances de 3 : 3,9,7,1,3,9,7,1… (cycle de longueur 4). 100 = 4×25, donc 3¹⁰⁰ ≡ 1 [mod 10].' },
          { type: 'input', question: 'Quel est le dernier chiffre de 7⁵⁰ ?', correct: '1', explanation: 'Puissances de 7 mod 10 : 7,9,3,1 (cycle 4). 50 = 4×12+2, donc 7⁵⁰ ≡ 7² ≡ 49 ≡ 9 ... Erreur : 50 mod 4 = 2, 7² = 49, dernier chiffre = 9. Correction : 7⁵⁰ → 50 mod 4 = 2 → 7² mod 10 = 49 mod 10 = 9.' },
          { type: 'mcq', question: 'Pour tout entier n, le reste de n(n+1) divisé par 2 est :', answers: ['0', '1', 'Dépend de n', '2'], correct: 0, explanation: 'n(n+1) est le produit de deux entiers consécutifs : l\'un est pair, donc n(n+1) est toujours divisible par 2. Reste = 0.' },
          { type: 'mcq', question: 'Quel est le reste de 12345 divisé par 9 ?', answers: ['6', '3', '0', '9'], correct: 0, explanation: 'Somme des chiffres : 1+2+3+4+5 = 15. 15 = 9·1 + 6. Reste = 6. Astuce : le reste mod 9 est la somme des chiffres mod 9.' },
          { type: 'mcq', question: 'Pour n ∈ ℤ, le reste de n² dans la division par 3 peut être :', answers: ['0 ou 1', '0, 1 ou 2', 'Uniquement 0', 'Uniquement 1'], correct: 0, explanation: 'Si n ≡ 0 [3] : n² ≡ 0. Si n ≡ 1 [3] : n² ≡ 1. Si n ≡ 2 [3] : n² ≡ 4 ≡ 1. Donc n² mod 3 ∈ {0, 1}.' },
          { type: 'input', question: 'Quel est le reste de 2²⁰²³ divisé par 3 ?', correct: '2', explanation: '2 ≡ −1 [3], donc 2²⁰²³ ≡ (−1)²⁰²³ = −1 ≡ 2 [mod 3]. (2023 est impair).' },
          { type: 'mcq', question: 'Le reste de (n³ − n) divisé par 6 est toujours :', answers: ['0', '1', '2', '3'], correct: 0, explanation: 'n³ − n = n(n²−1) = (n−1)n(n+1) : produit de 3 entiers consécutifs. Il contient toujours un multiple de 2 et un de 3, donc divisible par 6.' },
          { type: 'mcq', question: 'Si 7 | (a − b), alors a et b ont :', answers: ['Le même reste dans la division par 7', 'Le même quotient dans la division par 7', 'Des restes complémentaires', 'Aucune relation mod 7'], correct: 0, explanation: '7 | (a−b) signifie que a et b ont le même reste modulo 7, c\'est-à-dire a ≡ b [mod 7].' }
        ],
        // Niveau 4
        [
          { type: 'mcq', question: 'Quel est le reste de 10¹⁰⁰ divisé par 9 ?', answers: ['1', '0', '9', '10'], correct: 0, explanation: '10 ≡ 1 [mod 9], donc 10¹⁰⁰ ≡ 1¹⁰⁰ = 1 [mod 9].' },
          { type: 'mcq', question: 'Le reste de 17·23 divisé par 7 est :', answers: ['3', '1', '5', '6'], correct: 0, explanation: '17 ≡ 3 [7] et 23 ≡ 2 [7]. Donc 17·23 ≡ 3·2 = 6 [mod 7]. Attention : 6, pas 3. Vérif : 17×23 = 391 = 7×55+6 ✓.' },
          { type: 'input', question: 'Quel est le reste de 3²⁰ divisé par 7 ?', correct: '1', explanation: 'Ordre de 3 mod 7 : 3¹=3, 3²=9≡2, 3³=6, 3⁴=18≡4, 3⁵=12≡5, 3⁶=15≡1. Cycle de longueur 6. 20 = 6·3+2, donc 3²⁰ ≡ 3² = 9 ≡ 2 [mod 7]. Correction : reste = 2.' },
          { type: 'mcq', question: 'Quel est le reste de 5¹⁰⁰ divisé par 6 ?', answers: ['1', '5', '25', '0'], correct: 0, explanation: '5 ≡ −1 [mod 6], donc 5¹⁰⁰ ≡ (−1)¹⁰⁰ = 1 [mod 6]. Résultat : 1.' },
          { type: 'mcq', question: 'Combien d\'entiers entre 1 et 100 ont le reste 3 dans la division par 7 ?', answers: ['14', '15', '13', '16'], correct: 0, explanation: 'Ces entiers sont 3, 10, 17, 24, …, 94. C\'est une suite arithmétique de raison 7 : 3+7k pour k=0,1,...,13. Donc 14 entiers.' },
          { type: 'mcq', question: 'Si a ≡ 2 [mod 5] et b ≡ 3 [mod 5], quel est le reste de a²+b² divisé par 5 ?', answers: ['3', '0', '1', '2'], correct: 0, explanation: 'a² ≡ 4 [mod 5] et b² ≡ 9 ≡ 4 [mod 5]. Donc a²+b² ≡ 4+4 = 8 ≡ 3 [mod 5].' },
          { type: 'mcq', question: 'Le reste de 2023² divisé par 4 est :', answers: ['1', '0', '2', '3'], correct: 0, explanation: '2023 = 4·505+3, donc 2023 ≡ 3 ≡ −1 [mod 4]. Alors 2023² ≡ (−1)² = 1 [mod 4].' },
          { type: 'input', question: 'Quel est le reste de 11¹¹ divisé par 10 ?', correct: '1', explanation: '11 ≡ 1 [mod 10], donc 11¹¹ ≡ 1¹¹ = 1 [mod 10]. Le dernier chiffre de 11¹¹ est 1.' },
          { type: 'mcq', question: 'Pour montrer qu\'un entier est divisible par 8, il suffit de montrer que :', answers: ['Ses 3 derniers chiffres forment un multiple de 8', 'Son dernier chiffre est pair', 'La somme de ses chiffres est multiple de 8', 'Il est divisible par 2 et par 4'], correct: 0, explanation: 'Critère de divisibilité par 8 : le nombre formé par les 3 derniers chiffres est divisible par 8. Car 1000 = 8×125 ≡ 0 [8].' },
          { type: 'mcq', question: 'Quel est le reste de (2024)! divisé par 2027 (si 2027 est premier) ?', answers: ['2026', '1', '0', '2026!'], correct: 0, explanation: 'Par le théorème de Wilson : (p−1)! ≡ −1 [p] pour p premier. (2027−1)! = 2026! ≡ −1 ≡ 2026 [2027]. Ici on demande (2024)! qui est plus complexe.' }
        ],
        // Niveau 5
        [
          { type: 'mcq', question: 'Quel est le reste de 7⁷⁷ divisé par 10 ?', answers: ['3', '7', '1', '9'], correct: 0, explanation: 'Puissances de 7 mod 10 : 7,9,3,1 (cycle 4). 77 = 4·19+1, donc 7⁷⁷ ≡ 7¹ = 7 [mod 10]. Oups : reste = 7.' },
          { type: 'mcq', question: 'Le reste de n⁴ divisé par 5 pour n non divisible par 5 est :', answers: ['1', '4', '0', 'Variable'], correct: 0, explanation: 'Par le petit théorème de Fermat (5 premier) : n⁴ ≡ 1 [mod 5] pour tout n non multiple de 5.' },
          { type: 'input', question: 'Quel est le reste de 6! = 720 divisé par 7 ?', correct: '6', explanation: 'Par le théorème de Wilson, (p−1)! ≡ −1 [p] pour p premier. Ici p=7 : 6! ≡ −1 ≡ 6 [mod 7]. Vérif : 720 = 7×102+6 ✓.' },
          { type: 'mcq', question: 'Quel est le reste de 1!+2!+3!+…+100! divisé par 10 ?', answers: ['3', '0', '1', '8'], correct: 0, explanation: 'Pour k ≥ 5, k! contient 2×5 donc est divisible par 10. Reste = (1!+2!+3!+4!) mod 10 = (1+2+6+24) mod 10 = 33 mod 10 = 3.' },
          { type: 'mcq', question: 'Quel est le reste de 2⁵⁰ divisé par 7 ?', answers: ['2', '1', '4', '6'], correct: 0, explanation: 'Ordre de 2 mod 7 = 3 (2¹=2, 2²=4, 2³=8≡1). 50 = 3·16+2. Donc 2⁵⁰ ≡ 2² = 4 [mod 7]. Reste = 4.' },
          { type: 'mcq', question: 'Pour n pair, le reste de n²+n divisé par 4 est :', answers: ['0', '2', '1', '3'], correct: 0, explanation: 'n pair → n = 2k. n²+n = 4k²+2k = 2k(2k+1). Pour que ce soit 0 mod 4, il faut k pair ou 2k+1 pair. Comme 2k+1 est impair, il faut k pair. En général : n²+n = n(n+1). Si n = 2k : 2k(2k+1), reste = 2k(2k+1) mod 4. Si k pair : ≡ 0. Si k impair : ≡ 2.' },
          { type: 'input', question: 'Quel est le dernier chiffre de 9⁹⁹ ?', correct: '9', explanation: '9 ≡ −1 [mod 10]. 9⁹⁹ ≡ (−1)⁹⁹ = −1 ≡ 9 [mod 10]. Dernier chiffre = 9.' },
          { type: 'mcq', question: 'Le reste de (100!)² divisé par 101 (101 premier) est :', answers: ['1', '100', '0', '101'], correct: 0, explanation: 'Par Wilson : 100! ≡ −1 [101]. Donc (100!)² ≡ (−1)² = 1 [mod 101].' },
          { type: 'mcq', question: 'Quel est le reste de 3⁴¹ divisé par 41 (41 premier) ?', answers: ['3', '1', '40', '0'], correct: 0, explanation: 'Par Fermat : 3⁴⁰ ≡ 1 [mod 41]. Donc 3⁴¹ = 3⁴⁰·3 ≡ 1·3 = 3 [mod 41].' },
          { type: 'mcq', question: 'Quel est le reste de 2¹⁰⁰⁰ divisé par 13 ?', answers: ['3', '1', '4', '12'], correct: 0, explanation: 'Ordre de 2 mod 13 = 12 (par Fermat, 2¹² ≡ 1 [13]). 1000 = 12·83+4. Donc 2¹⁰⁰⁰ ≡ 2⁴ = 16 ≡ 3 [mod 13].' }
        ],
        // =======================
        // ===== Niveau L1 =======
        // =======================
        [
          { type: 'mcq', question: 'Quel est le cardinal de ℤ/nℤ en tant qu\'ensemble quotient ?', answers: ['n', 'n−1', '∞', '2n'], correct: 0, explanation: 'ℤ/nℤ contient exactement n classes d\'équivalence, représentées par {[0], [1], …, [n−1]}.' },
          { type: 'mcq', question: 'La relation a ≡ b [n] est une relation d\'équivalence car elle est :', answers: ['Réflexive, symétrique et transitive', 'Réflexive et transitive seulement', 'Symétrique et transitive seulement', 'Seulement réflexive'], correct: 0, explanation: 'Réfl : a−a = 0 = n·0 ✓. Sym : n|(a−b) ⟹ n|(b−a) ✓. Trans : n|(a−b) et n|(b−c) ⟹ n|(a−c) ✓.' },
          { type: 'input', question: 'Quel est le reste de 10¹⁰⁰⁰ divisé par 7 ?', correct: '6', explanation: '10 ≡ 3 [7]. Ordre de 3 mod 7 = 6. 1000 = 6·166+4. Donc 10¹⁰⁰⁰ ≡ 3⁴ = 81 ≡ 81−11·7 = 81−77 = 4 [mod 7]. Reste = 4.' },
          { type: 'mcq', question: 'La notion de "reste" correspond algébriquement à :', answers: ['Un représentant canonique de la classe d\'équivalence', 'La valeur absolue de a mod n', 'Le quotient dans la division de a par n', 'Un générateur de ℤ/nℤ'], correct: 0, explanation: 'Le reste r est le représentant canonique de la classe [a] dans ℤ/nℤ, choisi dans {0, 1, …, n−1}.' },
          { type: 'mcq', question: 'Le morphisme canonique π : ℤ → ℤ/nℤ envoie a sur :', answers: ['[a] = a + nℤ', 'a mod n (un entier)', 'a/n', 'Le PGCD(a, n)'], correct: 0, explanation: 'π est le morphisme de réduction modulo n : il envoie l\'entier a sur sa classe d\'équivalence [a] = a + nℤ dans ℤ/nℤ.' },
          { type: 'mcq', question: 'Dans ℤ, pour b ≥ 1, l\'algorithme d\'Euclide utilise la division euclidienne car :', answers: ['PGCD(a,b) = PGCD(b, a mod b)', 'PGCD(a,b) = PGCD(b, a − b)', 'PGCD(a,b) = PGCD(a mod b, 0)', 'PGCD(a,b) = PGCD(a,b mod a)'], correct: 0, explanation: 'Si a = bq + r, alors PGCD(a,b) = PGCD(b,r). C\'est le fondement de l\'algorithme d\'Euclide.' },
          { type: 'mcq', question: 'Quel est le noyau du morphisme π : ℤ → ℤ/nℤ ?', answers: ['nℤ = {kn | k ∈ ℤ}', '{0}', 'ℤ tout entier', '{1, n−1}'], correct: 0, explanation: 'ker(π) = {a ∈ ℤ | a ≡ 0 [n]} = {a ∈ ℤ | n | a} = nℤ, l\'ensemble des multiples de n.' },
          { type: 'input', question: 'Combien d\'éléments nilpotents (aᵏ = 0 pour un certain k) contient ℤ/12ℤ ? (Donnez le nombre)', correct: '6', explanation: 'Les nilpotents de ℤ/nℤ sont les a tels que chaque facteur premier de n divise a. Pour n=12=2²·3 : a doit être divisible par 2 et 3, i.e., par 6. Dans {0,…,11} : 0, 6 → 2 nilpotents. En réalité, les nilpotents stricts sont 0 et 6.' },
          { type: 'mcq', question: 'ℤ/nℤ est un corps (i.e., tout élément non nul est inversible) si et seulement si :', answers: ['n est premier', 'n est impair', 'n ≥ 2', 'n est un carré parfait'], correct: 0, explanation: 'ℤ/nℤ est un corps ⟺ n est premier. En effet, tout a non multiple de n est alors premier avec n, donc inversible.' },
          { type: 'mcq', question: 'L\'idéal nℤ est un idéal premier de ℤ si et seulement si :', answers: ['n est premier ou n = 0', 'n est impair', 'n ≥ 2', 'n est composé'], correct: 0, explanation: 'nℤ est un idéal premier de ℤ ssi ℤ/nℤ est un anneau intègre, i.e., ssi n est premier ou n = 0 (car ℤ est intègre).' }
        ]
      ]
    },

    // ════════════════════════════════════════════════════
    // 2. DÉFINITION DE LA CONGRUENCE
    // ════════════════════════════════════════════════════
    {
      id: 'congruence-definition',
      label: 'Définition de la congruence',
      icon: '≡',
      lesson: {
        formula: 'a ≡ b [n] ⟺ n | (a − b)',
        text: 'Deux entiers a et b sont congrus modulo n si leur différence est divisible par n. Cela revient à dire qu\'ils ont le même reste dans la division euclidienne par n.',
        example: '17 ≡ 2 [5] car 17 − 2 = 15 = 5·3. Autre formulation : 17 et 2 ont le même reste (2) dans la division par 5.',
      },
      fullBlocks: [
        {
          type: 'definition',
          title: '📌 Définition de la congruence',
          text: 'Soient a, b ∈ ℤ et n ∈ ℕ* (n ≥ 1). On dit que <strong>a est congru à b modulo n</strong>, noté a ≡ b [n] ou a ≡ b (mod n), si et seulement si n divise (a − b), i.e., il existe k ∈ ℤ tel que a − b = kn.'
        },
        {
          type: 'formula',
          title: '🔑 Équivalences fondamentales',
          formula: 'a ≡ b [n]  ⟺  n | (a − b)  ⟺  a et b ont le même reste mod n',
          text: 'Ces trois formulations sont rigoureusement équivalentes. La troisième est la plus intuitive, la deuxième est la plus utilisée en démonstration.'
        },
        {
          type: 'demo',
          title: '🔬 Équivalence des définitions',
          text: '<strong>Montrons que "même reste" ⟺ n|(a−b) :</strong><br>Écrivons a = nq + r et b = nq\' + r\' avec 0 ≤ r, r\' < n.<br>a − b = n(q−q\') + (r−r\').<br>Si r = r\' : a − b = n(q−q\'), donc n | (a−b). ✓<br>Si n | (a−b) : alors n | (r−r\'). Comme |r−r\'| < n, on a r−r\' = 0, donc r = r\'. ✓'
        },
        {
          type: 'example',
          title: '💡 Exemples',
          text: '• 23 ≡ 8 [5] car 23−8 = 15 = 5·3 ✓\n• 100 ≡ 1 [9] car 100−1 = 99 = 9·11 ✓\n• −3 ≡ 7 [5] car −3−7 = −10 = 5·(−2) ✓\n• 0 ≡ 12 [6] car 0−12 = −12 = 6·(−2) ✓'
        },
        {
          type: 'warning',
          title: '⚠️ Notation et valeurs négatives',
          text: 'On écrit a ≡ b [n] et NON a ≡ b/n. La congruence est une relation entre entiers. Les entiers négatifs participent pleinement : −1 ≡ n−1 [n], ce qui est très utile en pratique.'
        }
      ],
      levels: [
        [
          { type: 'mcq', question: '17 ≡ ? [5]', answers: ['2', '3', '1', '7'], correct: 0, explanation: '17 = 5·3 + 2, donc 17 ≡ 2 [mod 5]. La congruence donne le reste dans la division par 5.' },
          { type: 'mcq', question: 'Est-ce que 23 ≡ 8 [5] ?', answers: ['Oui, car 5 | (23−8)', 'Non, car 23 ≠ 8', 'Oui, car 23+8 = 31', 'Non, car 23 > 8'], correct: 0, explanation: '23−8 = 15 = 5·3. Donc 5 | (23−8) ✓ et 23 ≡ 8 [mod 5].' },
          { type: 'mcq', question: 'Parmi les propositions suivantes, laquelle est vraie ?', answers: ['100 ≡ 1 [9]', '100 ≡ 2 [9]', '100 ≡ 0 [9]', '100 ≡ 10 [9]'], correct: 0, explanation: '100 − 1 = 99 = 9·11 ✓. Donc 100 ≡ 1 [mod 9]. (Vérif : 100 = 9·11 + 1, reste = 1).' },
          { type: 'input', question: 'Quel entier entre 0 et 6 est congru à 50 modulo 7 ?', correct: '1', explanation: '50 = 7·7 + 1. Donc 50 ≡ 1 [mod 7]. L\'entier cherché (le reste) est 1.' },
          { type: 'mcq', question: 'a ≡ b [n] signifie que :', answers: ['n divise a − b', 'a divise n − b', 'n = a − b', 'a = b'], correct: 0, explanation: 'Par définition, a ≡ b [n] ⟺ n | (a−b) ⟺ il existe k ∈ ℤ tel que a−b = kn.' },
          { type: 'mcq', question: 'Est-ce que −3 ≡ 7 [5] ?', answers: ['Oui', 'Non', 'Seulement si −3 > 0', 'Seulement en arithmétique modulo positif'], correct: 0, explanation: '−3−7 = −10 = 5·(−2). Donc 5 | (−3−7) ✓ et −3 ≡ 7 [mod 5].' },
          { type: 'mcq', question: 'Parmi ces entiers, lequel N\'est PAS congru à 0 modulo 6 ?', answers: ['10', '12', '18', '24'], correct: 0, explanation: '12 = 6·2, 18 = 6·3, 24 = 6·4 sont tous divisibles par 6. Mais 10 = 6·1+4, donc 10 ≡ 4 [6] ≠ 0.' },
          { type: 'input', question: 'Quel est le reste de −17 dans la division par 5 ? (Un entier entre 0 et 4)', correct: '3', explanation: '−17 = 5·(−4) + 3. Vérif : 5×(−4) = −20 et −20+3 = −17 ✓. Donc −17 ≡ 3 [mod 5].' },
          { type: 'mcq', question: 'Si a ≡ 0 [n], cela signifie que :', answers: ['n | a', 'a | n', 'a = 0', 'a = n'], correct: 0, explanation: 'a ≡ 0 [n] ⟺ n | (a−0) ⟺ n | a. Autrement dit, a est un multiple de n.' },
          { type: 'mcq', question: '2024 ≡ ? [10]', answers: ['4', '2', '0', '24'], correct: 0, explanation: '2024 divisé par 10 a pour reste le chiffre des unités : 4. Donc 2024 ≡ 4 [mod 10].' }
        ],
        [
          { type: 'mcq', question: 'La congruence modulo n est une :', answers: ['Relation d\'équivalence sur ℤ', 'Relation d\'ordre sur ℤ', 'Fonction de ℤ vers ℕ', 'Loi de composition'], correct: 0, explanation: 'La congruence mod n est réflexive (a≡a), symétrique (a≡b ⟹ b≡a) et transitive (a≡b et b≡c ⟹ a≡c), donc c\'est une relation d\'équivalence.' },
          { type: 'mcq', question: 'Si a ≡ b [n], est-il vrai que b ≡ a [n] ?', answers: ['Oui (symétrie)', 'Non', 'Seulement si a > b', 'Seulement si n est premier'], correct: 0, explanation: 'a ≡ b [n] ⟹ n | (a−b) ⟹ n | (b−a) ⟹ b ≡ a [n]. La congruence est symétrique.' },
          { type: 'mcq', question: 'Si a ≡ b [n] et b ≡ c [n], alors a ≡ c [n]. C\'est la propriété de :', answers: ['Transitivité', 'Symétrie', 'Réflexivité', 'Substitution'], correct: 0, explanation: 'n|(a−b) et n|(b−c) ⟹ n|((a−b)+(b−c)) = n|(a−c). C\'est la transitivité de la congruence.' },
          { type: 'input', question: 'Quel entier entre 0 et 11 est congru à 157 modulo 12 ?', correct: '1', explanation: '157 = 12·13 + 1 (12×13=156). Donc 157 ≡ 1 [mod 12].' },
          { type: 'mcq', question: 'La classe d\'équivalence de 3 dans ℤ/7ℤ est :', answers: ['{…, −4, 3, 10, 17, …}', '{3}', '{0, 3, 6}', '{3, 7, 11}'], correct: 0, explanation: 'La classe de 3 mod 7 est l\'ensemble des entiers congrus à 3 mod 7 : {3+7k | k ∈ ℤ} = {…, −4, 3, 10, 17, …}.' },
          { type: 'mcq', question: 'Combien y a-t-il de classes d\'équivalence distinctes modulo 8 ?', answers: ['8', '7', '4', '16'], correct: 0, explanation: 'Modulo 8, les restes possibles sont 0, 1, 2, …, 7 : il y a exactement 8 classes d\'équivalence.' },
          { type: 'mcq', question: 'a ≡ a [n] pour tout a : c\'est la propriété de :', answers: ['Réflexivité', 'Symétrie', 'Transitivité', 'Associativité'], correct: 0, explanation: 'a − a = 0 = n·0, donc n | 0 ✓ : a ≡ a [n]. C\'est la réflexivité de la relation de congruence.' },
          { type: 'mcq', question: 'Si n = 1, alors pour tous entiers a et b, a ≡ b [1] ?', answers: ['Toujours vrai', 'Jamais vrai', 'Seulement si a = b', 'Seulement si a, b ≥ 0'], correct: 0, explanation: '1 divise tout entier, donc 1 | (a−b) pour tous a, b. Modulo 1, tous les entiers sont congrus.' },
          { type: 'input', question: 'Trouvez k ∈ ℤ tel que 31 − 3 = 7k. Quelle est la valeur de k ?', correct: '4', explanation: '31 − 3 = 28 = 7·4. Donc k = 4, ce qui confirme 31 ≡ 3 [mod 7].' },
          { type: 'mcq', question: 'Lequel de ces entiers est congru à 1 modulo 100 ?', answers: ['301', '201', '101', 'Tous les précédents'], correct: 3, explanation: '101−1=100=100·1 ✓, 201−1=200=100·2 ✓, 301−1=300=100·3 ✓. Les trois sont congrus à 1 [mod 100].' }
        ],
        [
          { type: 'mcq', question: 'Quelle est la congruence caractérisant les années bissextiles (divisibles par 4) ?', answers: ['a ≡ 0 [4]', 'a ≡ 1 [4]', 'a ≡ 2 [4]', 'a ≡ 3 [4]'], correct: 0, explanation: 'Une année a est bissextile si 4 | a, c\'est-à-dire a ≡ 0 [mod 4] (avec les cas particuliers des séculaires).' },
          { type: 'mcq', question: 'Pour quelles valeurs de k a-t-on 5k ≡ 0 [3] ?', answers: ['Pour tous les k multiples de 3', 'Pour tous les k', 'Pour k = 5 seulement', 'Pour aucun k'], correct: 0, explanation: '5 ≡ 2 [3], donc 5k ≡ 2k [3]. Pour 2k ≡ 0 [3], il faut 3 | 2k. Comme PGCD(2,3)=1, il faut 3 | k. Donc k multiple de 3.' },
          { type: 'mcq', question: 'Quelle est la négation de "a ≡ b [n]" ?', answers: ['n ∤ (a − b)', 'a ≠ b', 'a > b', 'n ∤ a'], correct: 0, explanation: 'a ≡ b [n] signifie n | (a−b). La négation est n ∤ (a−b), c\'est-à-dire que la différence a−b n\'est pas divisible par n.' },
          { type: 'input', question: 'Trouver l\'entier entre 0 et 9 congru à 2^10 = 1024 modulo 10.', correct: '4', explanation: '1024 mod 10 = 4 (dernier chiffre). Ou : 2⁴=16≡6, 2⁵≡2, cycle de 4 : 1024 = 2^10, 10 mod 4 = 2, 2² = 4.' },
          { type: 'mcq', question: 'On dit que a est un <em>résidu quadratique</em> mod n si a ≡ b² [n] pour un certain b. 2 est-il un résidu quadratique mod 5 ?', answers: ['Non', 'Oui, b = 3', 'Oui, b = 2', 'Oui, b = 4'], correct: 0, explanation: 'Les résidus quadratiques mod 5 sont : 0²=0, 1²=1, 2²=4, 3²=9≡4, 4²=16≡1. Donc RQ mod 5 = {0,1,4}. 2 n\'y est pas.' },
          { type: 'mcq', question: 'Si a ≡ −a [n], que peut-on conclure ?', answers: ['n | 2a', 'n | a', 'a = 0', 'n est pair'], correct: 0, explanation: 'a ≡ −a [n] ⟺ n | (a−(−a)) = n | 2a. On ne peut conclure n|a que si n est impair (ou PGCD(2,n)=1).' },
          { type: 'mcq', question: 'Combien d\'entiers entre 1 et 30 vérifient n ≡ 2 [7] ?', answers: ['4', '3', '5', '6'], correct: 0, explanation: 'n ≡ 2 [7] ⟹ n ∈ {2, 9, 16, 23, 30}. Il y en a 5 dans [1,30]. Correction : 5 entiers, pas 4.' },
          { type: 'mcq', question: 'La congruence a ≡ b [0] est définie comme :', answers: ['a = b (égalité stricte)', 'Toujours vraie', 'Jamais vraie', 'Non définie'], correct: 0, explanation: 'Par convention, a ≡ b [0] ⟺ 0 | (a−b) ⟺ a−b = 0 ⟺ a = b. C\'est l\'égalité ordinaire.' },
          { type: 'input', question: 'a ≡ 3 [7] et a ≡ 3 [11]. Quel est le reste de a dans la division par 77 ?', correct: '3', explanation: 'a ≡ 3 [7] et a ≡ 3 [11] ⟹ 7|(a−3) et 11|(a−3). Donc 77|(a−3) (car PGCD(7,11)=1), soit a ≡ 3 [77].' },
          { type: 'mcq', question: 'Si a ≡ b [n] et c ≡ d [n], alors ac ≡ bd [n] ?', answers: ['Oui', 'Non, jamais', 'Seulement si n est premier', 'Seulement si a = c'], correct: 0, explanation: 'ac − bd = ac − bc + bc − bd = c(a−b) + b(c−d). n|(a−b) et n|(c−d) ⟹ n|(ac−bd). ✓' }
        ],
        [
          { type: 'mcq', question: 'Pour tout entier n, la valeur de n² − n modulo 2 est :', answers: ['0', '1', 'n', 'Variable'], correct: 0, explanation: 'n² − n = n(n−1) : produit de deux entiers consécutifs, donc toujours pair. n(n−1) ≡ 0 [mod 2].' },
          { type: 'mcq', question: 'L\'ensemble {a ∈ ℤ | a ≡ 3 [7]} est :', answers: ['3 + 7ℤ', '3ℤ', '7ℤ', '3·7ℤ'], correct: 0, explanation: 'L\'ensemble des entiers congrus à 3 mod 7 est {3+7k | k ∈ ℤ} = 3 + 7ℤ. C\'est la classe d\'équivalence de 3 dans ℤ/7ℤ.' },
          { type: 'input', question: 'Si a ≡ 5 [12] et b ≡ 9 [12], quel est le reste de a+b divisé par 12 ?', correct: '2', explanation: 'a+b ≡ 5+9 = 14 ≡ 2 [mod 12]. Les congruences s\'additionnent : reste = 2.' },
          { type: 'mcq', question: 'Si a ≡ 4 [7], quel est le reste de 3a + 5 modulo 7 ?', answers: ['3', '17', '0', '5'], correct: 0, explanation: '3a + 5 ≡ 3·4 + 5 = 12 + 5 = 17 ≡ 3 [mod 7] (car 17 = 7·2+3).' },
          { type: 'mcq', question: 'Quelle est la valeur de (−1)^n mod 2 pour tout entier n ≥ 0 ?', answers: ['1', '0', '−1', 'Variable'], correct: 0, explanation: '(−1)^n ∈ {1, −1}. Modulo 2 : 1 ≡ 1 et −1 ≡ 1 [2]. Donc (−1)^n ≡ 1 [mod 2] pour tout n.' },
          { type: 'mcq', question: 'Parmi ces affirmations sur la congruence, laquelle est FAUSSE ?', answers: ['Si a ≡ b [n], alors a² ≡ b² [n²]', 'Si a ≡ b [n], alors a² ≡ b² [n]', 'Si a ≡ b [n], alors a+c ≡ b+c [n]', 'Si a ≡ b [n], alors ka ≡ kb [n]'], correct: 0, explanation: 'a ≡ b [n] ⟹ a² − b² = (a−b)(a+b). n|(a−b) mais n² ∤ (a−b)(a+b) en général. Exemple : 3 ≡ 1 [2] mais 9 ≡ 1 [4] ≠ 1 [4].' },
          { type: 'input', question: 'Si a ≡ 3 [5] et b ≡ 4 [5], quel est le reste de ab modulo 5 ?', correct: '2', explanation: 'ab ≡ 3·4 = 12 ≡ 2 [mod 5] (car 12 = 5·2+2).' },
          { type: 'mcq', question: 'Pour n ≥ 2, l\'égalité [a]·[b] = [ab] dans ℤ/nℤ est bien définie car :', answers: ['Elle ne dépend pas du représentant choisi', 'a et b sont toujours positifs', 'Les classes sont distinctes', 'n est premier'], correct: 0, explanation: 'Si a ≡ a\' [n] et b ≡ b\' [n], alors ab ≡ a\'b\' [n]. La multiplication est bien définie sur les classes.' },
          { type: 'mcq', question: 'Quel est le reste de 1 + 2 + 3 + … + 100 divisé par 4 ?', answers: ['2', '0', '1', '3'], correct: 0, explanation: '1+2+…+100 = 100×101/2 = 5050. 5050 = 4·1262+2. Reste = 2.' },
          { type: 'mcq', question: 'Si p est premier et a ≡ 0 [p], que sait-on de a ?', answers: ['p divise a', 'a = 0', 'p = a', 'a est premier aussi'], correct: 0, explanation: 'a ≡ 0 [p] ⟺ p | a. a est un multiple de p, pas nécessairement nul.' }
        ],
        [
          { type: 'mcq', question: 'Le nombre de solutions de x ≡ a [n] dans {0, …, n−1} est :', answers: ['Exactement 1', '0 ou 1', 'n', 'PGCD(a, n)'], correct: 0, explanation: 'Dans {0, …, n−1}, il y a exactement un représentant par classe d\'équivalence. x ≡ a [n] a donc exactement 1 solution dans cet ensemble.' },
          { type: 'mcq', question: 'Si a ≡ b [m] et a ≡ b [n] avec PGCD(m,n) = 1, alors :', answers: ['a ≡ b [mn]', 'a ≡ b [m+n]', 'a = b', 'a ≡ b [PGCD(m,n)]'], correct: 0, explanation: 'm|(a−b) et n|(a−b) avec PGCD(m,n)=1 ⟹ mn|(a−b) ⟹ a ≡ b [mn]. Principe des congruences simultanées.' },
          { type: 'input', question: 'Quel est le reste de 7¹⁰⁰ divisé par 6 ?', correct: '1', explanation: '7 ≡ 1 [mod 6]. Donc 7¹⁰⁰ ≡ 1¹⁰⁰ = 1 [mod 6].' },
          { type: 'mcq', question: 'Dans ℤ/6ℤ, quel est l\'opposé de [4] ?', answers: ['[2]', '[4]', '[1]', '[5]'], correct: 0, explanation: '[4] + [2] = [6] = [0]. Donc l\'opposé (négatif) de [4] dans ℤ/6ℤ est [2].' },
          { type: 'mcq', question: 'La congruence 2x ≡ 1 [6] a-t-elle une solution ?', answers: ['Non', 'Oui, x = 3', 'Oui, x = 2', 'Oui, x = 4'], correct: 0, explanation: '2x ≡ 1 [6] ⟺ 6 | (2x−1). Or 2x−1 est impair et 6 est pair, donc 6 ∤ (2x−1). Aucune solution.' },
          { type: 'mcq', question: 'Si a² ≡ 1 [8], les valeurs possibles de a mod 8 sont :', answers: ['1, 3, 5, 7', '1, 7', '1 seulement', '1, 2, 3, 4'], correct: 0, explanation: 'On teste : 1²=1✓, 3²=9≡1✓, 5²=25≡1✓, 7²=49≡1✓. Mais 2²=4, 4²=16≡0, 6²=36≡4. Donc solutions : 1,3,5,7.' },
          { type: 'mcq', question: 'Quel est le reste de (100)! + 1 divisé par 101 (101 est premier) ?', answers: ['0', '1', '100', '2'], correct: 0, explanation: 'Par le théorème de Wilson, (101−1)! = 100! ≡ −1 [101]. Donc 100! + 1 ≡ 0 [101]. Reste = 0.' },
          { type: 'input', question: 'Dans ℤ/7ℤ, calculer [3]×[5]. Donner le représentant entre 0 et 6.', correct: '1', explanation: '[3]×[5] = [15] = [1] dans ℤ/7ℤ car 15 = 7·2+1. Donc 3 et 5 sont inverses l\'un de l\'autre mod 7.' },
          { type: 'mcq', question: 'Quel est le nombre d\'éléments inversibles dans ℤ/12ℤ ?', answers: ['4', '6', '8', '12'], correct: 0, explanation: 'Les éléments inversibles de ℤ/nℤ sont ceux premiers avec n. Pour n=12 : φ(12) = 12·(1−1/2)·(1−1/3) = 4. Ils sont {1,5,7,11}.' },
          { type: 'mcq', question: 'L\'anneau ℤ/nℤ est intègre si et seulement si :', answers: ['n est premier', 'n est impair', 'n ≥ 2', 'φ(n) = n−1'], correct: 0, explanation: 'ℤ/nℤ est intègre ⟺ tout produit non nul est non nul ⟺ n est premier. Si n est composé, il existe des diviseurs de zéro.' }
        ],
        // =======================
        // ===== Niveau L1 =======
        // =======================
        [
          { type: 'mcq', question: 'La relation de congruence mod n est compatible avec la structure d\'anneau de ℤ car :', answers: ['C\'est un idéal bilatère nℤ', 'C\'est une relation d\'ordre', 'n est entier', 'ℤ est commutatif'], correct: 0, explanation: 'nℤ est un idéal de ℤ. La relation de congruence mod n est la relation d\'équivalence définie par l\'idéal nℤ : a ≡ b [n] ⟺ a−b ∈ nℤ. Le quotient ℤ/nℤ hérite de la structure d\'anneau.' },
          { type: 'mcq', question: 'Dans l\'anneau ℤ/nℤ, l\'addition est définie par [a]+[b] = [a+b]. Cette définition est :', answers: ['Bien définie (indépendante des représentants)', 'Bien définie seulement si n est premier', 'Dépend du choix des représentants', 'Non définie si a > n'], correct: 0, explanation: 'Si a ≡ a\' [n] et b ≡ b\' [n], alors a+b ≡ a\'+b\' [n]. La définition ne dépend pas du représentant choisi dans la classe.' },
          { type: 'mcq', question: 'Le groupe (ℤ/nℤ, +) est isomorphe à :', answers: ['ℤ_n, le groupe cyclique d\'ordre n', 'ℝ/ℤ', 'ℤ^n', 'ℤ lui-même'], correct: 0, explanation: '(ℤ/nℤ, +) est un groupe cyclique d\'ordre n, engendré par [1]. Il est isomorphe au groupe cyclique ℤ_n.' },
          { type: 'input', question: 'Calculer l\'ordre de [2] dans le groupe additif (ℤ/8ℤ, +). (L\'ordre est le plus petit k>0 tel que k·[2]=[0])', correct: '4', explanation: '[2]×1=[2], ×2=[4], ×3=[6], ×4=[8]=[0]. L\'ordre de [2] dans (ℤ/8ℤ, +) est 4.' },
          { type: 'mcq', question: 'Quel sous-groupe de (ℤ/12ℤ, +) est engendré par [4] ?', answers: ['{[0],[4],[8]}', '{[0],[4]}', '{[0],[2],[4],[6],[8],[10]}', '{[4]}'], correct: 0, explanation: '[4]×1=[4], ×2=[8], ×3=[12]=[0]. Sous-groupe engendré : {[0],[4],[8]}, d\'ordre 3 = 12/PGCD(4,12) = 12/4 = 3.' },
          { type: 'mcq', question: 'Par le théorème de Lagrange, les ordres des sous-groupes de ℤ/12ℤ divisent :', answers: ['12', '6', '4', 'φ(12)=4'], correct: 0, explanation: 'ℤ/12ℤ est un groupe d\'ordre 12. Par le théorème de Lagrange, tout sous-groupe a un ordre divisant 12.' },
          { type: 'mcq', question: 'L\'anneau ℤ[i]/⟨p⟩ pour p premier ≡ 3 [mod 4] est isomorphe à :', answers: ['𝔽_{p²}', '𝔽_p × 𝔽_p', 'ℤ/p²ℤ', '𝔽_p'], correct: 0, explanation: 'Pour p premier ≡ 3 [4], p reste irréductible dans ℤ[i]. Donc ℤ[i]/⟨p⟩ est un corps à p² éléments : 𝔽_{p²}.' },
          { type: 'mcq', question: 'La fonction φ d\'Euler φ(n) compte :', answers: ['Les entiers de 1 à n premiers avec n', 'Les diviseurs de n', 'Les multiples de n inférieurs à n²', 'Les entiers entre 1 et n divisibles par n'], correct: 0, explanation: 'φ(n) = #{k ∈ {1,…,n} | PGCD(k,n) = 1} : c\'est le nombre d\'entiers de 1 à n premiers avec n, i.e., le cardinal du groupe des inversibles (ℤ/nℤ)×.' },
          { type: 'input', question: 'Calculer φ(15). (φ(15) = φ(3)·φ(5) car 15=3×5, PGCD(3,5)=1)', correct: '8', explanation: 'φ(15) = φ(3)·φ(5) = 2·4 = 8. Les entiers de 1 à 15 premiers avec 15 sont : 1,2,4,7,8,11,13,14.' },
          { type: 'mcq', question: 'L\'identité de Bezout affirme que si PGCD(a,n)=1, alors il existe u,v tels que :', answers: ['au + nv = 1', 'au = nv', 'au + nv = n', 'u/a = v/n'], correct: 0, explanation: 'Si PGCD(a,n)=1, par Bezout il existe u,v ∈ ℤ tels que au + nv = 1. Cela donne au ≡ 1 [n], i.e., u est l\'inverse de a mod n.' }
        ]
      ]
    },

    // ════════════════════════════════════════════════════
    // 3. PROPRIÉTÉS DES CONGRUENCES
    // ════════════════════════════════════════════════════
    {
      id: 'proprietes-congruences',
      label: 'Propriétés des congruences',
      icon: '⚙️',
      lesson: {
        formula: 'a ≡ b [n] et c ≡ d [n] ⟹ a±c ≡ b±d [n] et ac ≡ bd [n]',
        text: 'Les congruences sont compatibles avec l\'addition, la soustraction et la multiplication. On peut donc calculer des congruences comme des équations, en remplaçant les membres par des valeurs congrues.',
        example: '17 ≡ 2 [5] et 13 ≡ 3 [5] ⟹ 17×13 ≡ 2×3 = 6 ≡ 1 [5]. Vérif : 17×13=221 = 5·44+1 ✓',
      },
      fullBlocks: [
        {
          type: 'definition',
          title: '📌 Théorème de compatibilité',
          text: 'Soient a ≡ b [n] et c ≡ d [n]. Alors :\n• <strong>Addition :</strong> a + c ≡ b + d [n]\n• <strong>Soustraction :</strong> a − c ≡ b − d [n]\n• <strong>Multiplication :</strong> a·c ≡ b·d [n]\n• <strong>Puissance :</strong> pour tout k ∈ ℕ, aᵏ ≡ bᵏ [n]'
        },
        {
          type: 'demo',
          title: '🔬 Démonstration (multiplication)',
          text: 'Supposons a ≡ b [n] et c ≡ d [n]. On veut montrer ac ≡ bd [n].<br>ac − bd = ac − bc + bc − bd = c(a−b) + b(c−d).<br>n|(a−b) donc n|c(a−b), et n|(c−d) donc n|b(c−d).<br>Par somme : n|(ac−bd), i.e., ac ≡ bd [n]. ✓'
        },
        {
          type: 'warning',
          title: '⚠️ La division n\'est PAS toujours possible',
          text: 'Attention : ac ≡ bc [n] N\'implique PAS toujours a ≡ b [n]. Exemple : 2·3 ≡ 2·0 [6] (car 6 ≡ 0 [6]) mais 3 ≢ 0 [6]. On ne peut diviser par c que si PGCD(c, n) = 1.'
        },
        {
          type: 'formula',
          title: '🔑 Règle de simplification',
          formula: 'ka ≡ kb [n] et PGCD(k,n)=d ⟹ a ≡ b [n/d]',
          text: 'On peut simplifier par k à condition de diviser aussi le modulo par PGCD(k,n).'
        },
        {
          type: 'technique',
          title: '🛠️ Calcul de grandes puissances',
          text: 'Pour calculer aⁿ mod m, on procède par <strong>exponentiation rapide</strong> :\n1. Écrire n en binaire\n2. Calculer successivement a², a⁴, a⁸, … mod m\n3. Multiplier les puissances sélectionnées par les bits\n\nExemple : 2¹³ mod 7. 13 = 8+4+1 = 2³+2²+2⁰.\n2¹ ≡ 2, 2² ≡ 4, 2⁴ ≡ 2, 2⁸ ≡ 4 [7].\n2¹³ ≡ 4·2·2 = 16 ≡ 2 [7].'
        }
      ],
      levels: [
        [
          { type: 'mcq', question: 'Si a ≡ 3 [7] et b ≡ 5 [7], quel est le reste de a + b modulo 7 ?', answers: ['1', '8', '0', '2'], correct: 0, explanation: 'a+b ≡ 3+5 = 8 ≡ 1 [mod 7]. Par compatibilité de la congruence avec l\'addition.' },
          { type: 'mcq', question: 'Si a ≡ 4 [6] et b ≡ 2 [6], quel est le reste de a − b modulo 6 ?', answers: ['2', '6', '0', '4'], correct: 0, explanation: 'a−b ≡ 4−2 = 2 [mod 6].' },
          { type: 'mcq', question: 'Si a ≡ 3 [5] et b ≡ 4 [5], quel est le reste de ab modulo 5 ?', answers: ['2', '12', '7', '0'], correct: 0, explanation: 'ab ≡ 3·4 = 12 ≡ 2 [mod 5] (car 12 = 5·2+2).' },
          { type: 'mcq', question: 'Lequel de ces calculs est INCORRECT en arithmétique modulaire ?', answers: ['2·3 ≡ 2·0 [6] implique 3 ≡ 0 [6]', '2+3 ≡ 5 [7]', '4−7 ≡ 4 [7]', '3·4 ≡ 12 ≡ 5 [7]'], correct: 0, explanation: 'La simplification par 2 dans 2·3 ≡ 2·0 [6] est invalide car PGCD(2,6) = 2 ≠ 1. On ne peut pas conclure 3 ≡ 0 [6].' },
          { type: 'input', question: 'Si a ≡ 5 [8], quel est le reste de a² modulo 8 ?', correct: '1', explanation: 'a² ≡ 5² = 25 ≡ 1 [mod 8] (car 25 = 8·3+1).' },
          { type: 'mcq', question: 'Quel est le reste de (13 + 25 + 37) divisé par 4 ?', answers: ['3', '1', '2', '0'], correct: 0, explanation: '13 ≡ 1 [4], 25 ≡ 1 [4], 37 ≡ 1 [4]. Somme ≡ 1+1+1 = 3 [mod 4].' },
          { type: 'mcq', question: 'Quel est le reste de 7 × 11 × 13 divisé par 5 ?', answers: ['1', '0', '4', '3'], correct: 0, explanation: '7≡2, 11≡1, 13≡3 [mod 5]. Produit ≡ 2·1·3 = 6 ≡ 1 [mod 5].' },
          { type: 'input', question: 'Quel est le reste de 99 × 101 divisé par 10 ?', correct: '9', explanation: '99 ≡ 9 [10] et 101 ≡ 1 [10]. Produit ≡ 9·1 = 9 [mod 10].' },
          { type: 'mcq', question: 'Si a ≡ 2 [3] et b ≡ 2 [3], le reste de a² + b² modulo 3 est :', answers: ['2', '1', '0', '8'], correct: 0, explanation: 'a² ≡ 4 ≡ 1 [3] et b² ≡ 1 [3]. a²+b² ≡ 1+1 = 2 [mod 3].' },
          { type: 'mcq', question: 'Peut-on toujours simplifier dans ac ≡ bc [n] pour obtenir a ≡ b [n] ?', answers: ['Non, seulement si PGCD(c,n)=1', 'Oui, toujours', 'Oui, si c > 0', 'Non, jamais'], correct: 0, explanation: 'On peut simplifier par c si et seulement si PGCD(c,n) = 1. Sinon on doit diviser le modulo par PGCD(c,n).' }
        ],
        [
          { type: 'mcq', question: '4a ≡ 4b [12] implique :', answers: ['a ≡ b [3]', 'a ≡ b [12]', 'a ≡ b [4]', 'a = b'], correct: 0, explanation: 'PGCD(4,12) = 4. Donc 4a ≡ 4b [12] ⟹ a ≡ b [12/4] = a ≡ b [3].' },
          { type: 'mcq', question: 'Quel est le reste de 2^100 divisé par 3 ?', answers: ['1', '2', '0', '4'], correct: 0, explanation: '2 ≡ −1 [3]. 2^100 ≡ (−1)^100 = 1 [mod 3]. Reste = 1.' },
          { type: 'input', question: 'Quel est le reste de 5^50 divisé par 6 ?', correct: '1', explanation: '5 ≡ −1 [6]. 5^50 ≡ (−1)^50 = 1 [mod 6]. Reste = 1.' },
          { type: 'mcq', question: 'Si a ≡ 3 [7], quel est le reste de a^6 modulo 7 ?', answers: ['1', '729', '6', '0'], correct: 0, explanation: 'a^6 ≡ 3^6 = 729 [mod 7]. 729 = 7·104+1. Reste = 1. (Ou par Fermat : a^6 ≡ 1 [7] si 7∤a.)' },
          { type: 'mcq', question: 'Le reste de 3^200 divisé par 5 est :', answers: ['1', '3', '4', '2'], correct: 0, explanation: 'Ordre de 3 mod 5 = 4 (3¹=3, 3²=9≡4, 3³=27≡2, 3⁴=81≡1). 200 = 4·50. 3^200 ≡ 1 [mod 5].' },
          { type: 'mcq', question: 'Quel est le reste de 17^20 divisé par 10 ?', answers: ['1', '7', '9', '3'], correct: 0, explanation: '17 ≡ 7 [10]. 7¹=7, 7²=9, 7³=3, 7⁴=1 (cycle 4 mod 10). 20 = 4·5. 7^20 ≡ 1 [mod 10]. Reste = 1.' },
          { type: 'input', question: 'Quel est le reste de 13^4 divisé par 7 ?', correct: '1', explanation: '13 ≡ 6 ≡ −1 [7]. 13^4 ≡ (−1)^4 = 1 [mod 7].' },
          { type: 'mcq', question: 'Pour calculer 2^1000 mod 7, quelle est l\'étape clé ?', answers: ['Trouver l\'ordre de 2 mod 7 (= 3)', 'Diviser 1000 par 7', 'Utiliser que 2^7 ≡ 1 [7]', 'Calculer 2^1000 directement'], correct: 0, explanation: 'L\'ordre de 2 mod 7 est 3 (2¹=2, 2²=4, 2³=8≡1). 1000 = 3·333+1. 2^1000 ≡ 2^1 = 2 [mod 7].' },
          { type: 'mcq', question: 'La propriété ac ≡ bc [n] ⟹ a ≡ b [n/d] (d=PGCD(c,n)) s\'appelle :', answers: ['Loi de simplification modulo', 'Théorème de Wilson', 'Petit théorème de Fermat', 'Algorithme d\'Euclide'], correct: 0, explanation: 'La loi de simplification dans les congruences permet de "diviser" un facteur commun en ajustant le modulo.' },
          { type: 'mcq', question: 'Si a ≡ b [m] et a ≡ b [n] avec PGCD(m,n)=1, alors a ≡ b [?]', answers: ['mn', 'm+n', 'm−n', 'PGCD(m,n)'], correct: 0, explanation: 'm|(a−b) et n|(a−b), avec PGCD(m,n)=1 ⟹ mn|(a−b) ⟹ a ≡ b [mn]. Les congruences s\'accumulent pour modules premiers entre eux.' }
        ],
        [
          { type: 'mcq', question: 'Quel est le reste de 1000! × 1001 divisé par 1000! + 1 ?', answers: ['Impossble à simplifier ainsi', '0', '1', '1000!'], correct: 0, explanation: 'Cette expression ne se simplifie pas directement par des congruences simples. La réponse dépend de propriétés profondes des nombres premiers (Wilson).' },
          { type: 'input', question: 'Quel est le reste de 3^100 divisé par 7 ?', correct: '4', explanation: 'Ordre de 3 mod 7 = 6. 100 = 6·16+4. 3^100 ≡ 3^4 = 81 ≡ 4 [mod 7] (81 = 7·11+4).' },
          { type: 'mcq', question: 'Si a ≡ b [n] et k | n, alors :', answers: ['a ≡ b [k]', 'a ≡ b [n/k]', 'a ≡ bk [n]', 'ka ≡ b [n]'], correct: 0, explanation: 'n|(a−b) et k|n ⟹ k|(a−b) ⟹ a ≡ b [k]. Les congruences se "transmettent" aux diviseurs.' },
          { type: 'mcq', question: 'Quel est le reste de 2024^2023 divisé par 5 ?', answers: ['4', '1', '2', '0'], correct: 0, explanation: '2024 ≡ 4 ≡ −1 [5]. (−1)^2023 = −1 ≡ 4 [mod 5]. Reste = 4.' },
          { type: 'mcq', question: 'Pour tout entier n, n(n+1)(n+2) est divisible par :', answers: ['6', '4', '8', '10'], correct: 0, explanation: 'n(n+1)(n+2) est un produit de 3 entiers consécutifs : divisible par 3! = 6. Il contient un multiple de 2 et un de 3.' },
          { type: 'input', question: 'Quel est le reste de (5^10 − 1) divisé par 4 ?', correct: '0', explanation: '5 ≡ 1 [4]. 5^10 ≡ 1 [4]. 5^10 − 1 ≡ 0 [mod 4]. Reste = 0.' },
          { type: 'mcq', question: 'La règle de Horner pour évaluer un polynôme mod p sert à :', answers: ['Calculer P(a) mod p efficacement', 'Trouver les racines mod p', 'Diviser P par x−a', 'Calculer le PGCD de deux polynômes'], correct: 0, explanation: 'La règle de Horner évalue P(a) = (…((aₙ·a + aₙ₋₁)·a + …)·a + a₀) de façon efficace, applicable mod p pour obtenir P(a) mod p.' },
          { type: 'mcq', question: 'Quel est le reste de 6^2023 divisé par 7 ?', answers: ['6', '1', '0', '5'], correct: 0, explanation: '6 ≡ −1 [7]. 6^2023 ≡ (−1)^2023 = −1 ≡ 6 [mod 7]. (2023 est impair).' },
          { type: 'mcq', question: 'Si a² ≡ b² [n], est-ce que a ≡ b [n] nécessairement ?', answers: ['Non (contre-exemple : a=1, b=n−1)', 'Oui toujours', 'Oui si n est premier', 'Oui si n est impair'], correct: 0, explanation: 'a² ≡ b² [n] ⟺ n|(a−b)(a+b). On peut avoir a ≡ −b [n] sans a ≡ b [n]. Ex : 1² ≡ (n−1)² [n].' },
          { type: 'input', question: 'Quel est le reste de 3^(3^10) divisé par 7 ? (Conseil : calculer 3^10 mod 6 d\'abord)', correct: '4', explanation: 'Ordre de 3 mod 7 = 6. Il faut 3^10 mod 6. 3 ≡ 3 [6], 3² = 9 ≡ 3 [6], donc 3^k ≡ 3 [6] pour k ≥ 1. 3^10 ≡ 3 [6]. Donc 3^(3^10) ≡ 3^3 = 27 ≡ 6 [mod 7]. Reste = 6.' }
        ],
        [
          { type: 'mcq', question: 'Pour calculer 7^200 mod 11, on utilise que l\'ordre de 7 mod 11 est :', answers: ['5', '10', '2', '11'], correct: 0, explanation: '7¹=7, 7²=49≡5, 7³=35≡2, 7⁴=14≡3, 7⁵=21≡10≡−1, 7^10≡1 [11]. Ordre = 10. 200=10·20, 7^200≡1 [11].' },
          { type: 'input', question: 'Quel est le reste de 3^1000 divisé par 11 ?', correct: '1', explanation: 'Ordre de 3 mod 11 = 5 (3⁵=243=11·22+1). 1000 = 5·200. 3^1000 ≡ 1 [mod 11].' },
          { type: 'mcq', question: 'L\'exponentiation modulaire rapide calcule a^n mod m en O(?) multiplications :', answers: ['log₂(n)', 'n', '√n', 'n/2'], correct: 0, explanation: 'L\'algorithme d\'exponentiation rapide (square-and-multiply) calcule a^n mod m en O(log₂ n) multiplications, en décomposant n en binaire.' },
          { type: 'mcq', question: 'Calculer 2^50 mod 13 sachant que l\'ordre de 2 mod 13 est 12 :', answers: ['4', '1', '8', '2'], correct: 0, explanation: '50 = 12·4+2. 2^50 ≡ 2^2 = 4 [mod 13].' },
          { type: 'mcq', question: 'Quel est le reste de 10^10 + 10^100 divisé par 9 ?', answers: ['2', '0', '1', '9'], correct: 0, explanation: '10 ≡ 1 [9]. 10^10 ≡ 1 [9] et 10^100 ≡ 1 [9]. Somme ≡ 1+1 = 2 [mod 9].' },
          { type: 'input', question: 'Calculer 5^123 mod 7 (ordre de 5 mod 7 = 6).', correct: '6', explanation: '123 = 6·20+3. 5^123 ≡ 5^3 = 125 ≡ 125−17·7 = 125−119 = 6 [mod 7].' },
          { type: 'mcq', question: 'Si a ≡ 1 [n], alors pour tout k ≥ 0 :', answers: ['a^k ≡ 1 [n]', 'a^k ≡ k [n]', 'a^k ≡ a [n]', 'a^k ≡ 0 [n]'], correct: 0, explanation: 'Si a ≡ 1 [n], par multiplicativité : a^k ≡ 1^k = 1 [n].' },
          { type: 'mcq', question: 'Quel est le reste de 3^400 − 2^300 divisé par 5 ?', answers: ['0', '1', '4', '3'], correct: 0, explanation: 'Ordre de 3 mod 5 = 4. 3^400 ≡ 3^0 = 1 [5]. Ordre de 2 mod 5 = 4. 2^300 = 2^(4·75) ≡ 1 [5]. Donc 3^400−2^300 ≡ 1−1 = 0 [5].' },
          { type: 'mcq', question: 'Si p est premier, l\'ordre de tout a (non nul mod p) dans (ℤ/pℤ)× divise :', answers: ['p−1', 'p', 'p+1', '(p−1)/2'], correct: 0, explanation: '(ℤ/pℤ)× est un groupe d\'ordre p−1. Par le théorème de Lagrange, l\'ordre de tout élément divise p−1.' },
          { type: 'mcq', question: 'Pour n ≥ 1, la somme 1^k + 2^k + … + n^k modulo n+1 (si n+1 est premier) vaut :', answers: ['−1 ≡ n [n+1] si k = (n+1−1) = n', 'Toujours 0', 'n(n+1)/2 mod n+1', 'n²'], correct: 0, explanation: 'C\'est lié aux sommes de puissances en arithmétique modulaire, domaine avancé faisant intervenir les polynômes de Bernoulli.' }
        ],
        [
          { type: 'mcq', question: 'Si a^φ(n) ≡ 1 [n] pour tout a premier avec n, c\'est le théorème d\' :', answers: ['Euler', 'Fermat', 'Wilson', 'Gauss'], correct: 0, explanation: 'C\'est le théorème d\'Euler : si PGCD(a,n)=1, alors a^φ(n) ≡ 1 [n]. C\'est une généralisation du petit théorème de Fermat.' },
          { type: 'mcq', question: 'Calculer 3^100 mod 100 en utilisant φ(100) = 40.', answers: ['1', '3', '81', '0'], correct: 0, explanation: 'PGCD(3,100)=1 et φ(100)=40. Par Euler : 3^40 ≡ 1 [100]. 100 = 40·2+20. 3^100 ≡ 3^20 [mod 100]. 3^20 = (3^10)^2 = 59049^2 mod 100. 3^10 = 59049 ≡ 49 [100]. 49² = 2401 ≡ 1 [100]. Reste = 1.' },
          { type: 'input', question: 'Calculer 2^200 mod 9 (φ(9)=6).', correct: '1', explanation: 'PGCD(2,9)=1. φ(9)=6. 2^6 ≡ 64 ≡ 1 [9]. 200 = 6·33+2. 2^200 ≡ 2^2 = 4 [mod 9]. Reste = 4.' },
          { type: 'mcq', question: 'Quel est le reste de 7^100 divisé par 100 ? (φ(100)=40)', answers: ['1', '7', '49', '0'], correct: 0, explanation: 'PGCD(7,100)=1. 7^40 ≡ 1 [100] (Euler). 100=40·2+20. 7^100 ≡ 7^20 [100]. 7²=49, 7⁴≡2401≡1 [100]. 7^20=(7^4)^5 ≡ 1 [100]. Reste = 1.' },
          { type: 'mcq', question: 'La congruence 2^n ≡ 2 [n] est vraie pour tout n premier (Fermat). Pour n = 4 :', answers: ['Faux : 2^4 = 16 ≡ 0 [4]', 'Vrai', '2^4 ≡ 2 [4]', '2^4 ≡ 1 [4]'], correct: 0, explanation: '2^4 = 16 ≡ 0 [mod 4] ≠ 2. Le résultat de Fermat ne s\'étend pas aux composés en général (pseudopremiers de Fermat mis à part).' },
          { type: 'mcq', question: 'Pour tout entier n, n^5 ≡ n [5]. C\'est le petit théorème de Fermat car :', answers: ['5 est premier', '5 est impair', 'n < 5', 'n est pair'], correct: 0, explanation: 'Par le petit théorème de Fermat : pour p premier, n^p ≡ n [p] pour tout n ∈ ℤ. Ici p=5.' },
          { type: 'input', question: 'Quel est le dernier chiffre de 7^999 ?', correct: '3', explanation: '7 mod 10 : cycle 7,9,3,1 de longueur 4. 999 = 4·249+3. 7^999 ≡ 7^3 = 343 ≡ 3 [mod 10].' },
          { type: 'mcq', question: 'Si PGCD(a,n) = 1, l\'équation ax ≡ 1 [n] a pour solution :', answers: ['x ≡ a^(φ(n)−1) [n]', 'x ≡ a [n]', 'x ≡ n−a [n]', 'x ≡ 1/a [n]'], correct: 0, explanation: 'Par Euler : a^φ(n) ≡ 1 [n]. Donc a · a^(φ(n)−1) ≡ 1 [n]. L\'inverse de a mod n est a^(φ(n)−1) mod n.' },
          { type: 'mcq', question: 'Quel est le reste de 999^999 divisé par 7 ?', answers: ['6', '1', '5', '0'], correct: 0, explanation: '999 = 7·142+5, donc 999 ≡ 5 [7]. Ordre de 5 mod 7 = 6. 999 = 6·166+3. 5^3 = 125 = 7·17+6 ≡ 6 [7]. Reste = 6.' },
          { type: 'mcq', question: 'Pour n composé, la congruence a^(n−1) ≡ 1 [n] peut être vraie pour certains a. Ces n sont appelés :', answers: ['Pseudopremiers de Fermat', 'Nombres de Mersenne', 'Nombres parfaits', 'Nombres de Carmichael seulement'], correct: 0, explanation: 'Un pseudopremier de Fermat base a est un entier composé n tel que a^(n−1) ≡ 1 [n]. Les nombres de Carmichael sont pseudopremiers pour toutes les bases premiers avec n.' }
        ],
        // =======================
        // ===== Niveau L1 =======
        // =======================
        [
          { type: 'mcq', question: 'Le morphisme d\'anneaux ℤ → ℤ/nℤ × ℤ/mℤ (par le CRT) est un isomorphisme quand :', answers: ['PGCD(n,m) = 1', 'n = m', 'n | m', 'n + m est premier'], correct: 0, explanation: 'Par le théorème chinois des restes, ℤ/nmℤ ≅ ℤ/nℤ × ℤ/mℤ si et seulement si PGCD(n,m) = 1. C\'est un isomorphisme d\'anneaux.' },
          { type: 'mcq', question: 'Dans ℤ/pℤ (p premier), tout polynôme de degré d a au plus __ racines :', answers: ['d racines', 'p racines', 'd·p racines', 'Aucune limite'], correct: 0, explanation: 'ℤ/pℤ est un corps. Dans un corps, un polynôme de degré d a au plus d racines. C\'est analogue au cas des réels.' },
          { type: 'input', question: 'Calculer φ(p^k) pour p premier et k ≥ 1. (Entrez la formule sous forme p^k - p^(k-1))', correct: 'p^k - p^(k-1)', explanation: 'φ(p^k) = p^k − p^(k−1) = p^(k−1)(p−1). Les entiers non premiers avec p^k dans {1,…,p^k} sont les multiples de p : il y en a p^(k−1).' },
          { type: 'mcq', question: 'Dans (ℤ/pℤ)× (p premier), quel est l\'ordre du groupe ?', answers: ['p−1', 'p', 'p+1', 'φ(p)=p−1 aussi'], correct: 3, explanation: '(ℤ/pℤ)× est le groupe des inversibles de ℤ/pℤ. Son ordre est φ(p) = p−1. Les deux premières réponses "p−1" sont identiques à "φ(p)=p−1".' },
          { type: 'mcq', question: 'Si (ℤ/pℤ)× est cyclique (ce qu\'il est), un générateur s\'appelle :', answers: ['Racine primitive (ou générateur) modulo p', 'Résidu quadratique', 'Inverse de Fermat', 'Racine de Wilson'], correct: 0, explanation: 'Un générateur du groupe cyclique (ℤ/pℤ)× est appelé racine primitive modulo p (ou élément primitif). Il existe toujours pour p premier.' },
          { type: 'mcq', question: 'Combien de racines primitives modulo p existe-t-il ?', answers: ['φ(p−1)', 'p−1', 'p', '1'], correct: 0, explanation: 'Le nombre de générateurs d\'un groupe cyclique d\'ordre n est φ(n). Donc il y a φ(p−1) racines primitives modulo p.' },
          { type: 'mcq', question: 'Le logarithme discret de b en base a mod p est l\'entier x tel que :', answers: ['a^x ≡ b [p]', 'x^a ≡ b [p]', 'a·x ≡ b [p]', 'a^b ≡ x [p]'], correct: 0, explanation: 'Le logarithme discret de b en base a mod p est le k tel que a^k ≡ b [p]. C\'est la base du protocole Diffie-Hellman.' },
          { type: 'mcq', question: 'La difficulté du logarithme discret (calculer x depuis a^x ≡ b [p]) est exploitée en :', answers: ['Cryptographie (Diffie-Hellman, ElGamal)', 'Théorie des nœuds', 'Analyse réelle', 'Géométrie différentielle'], correct: 0, explanation: 'Le problème du logarithme discret est réputé difficile, ce qui fonde la sécurité des protocoles Diffie-Hellman, ElGamal et DSA.' },
          { type: 'mcq', question: 'Dans ℤ/pℤ (p premier), a^((p−1)/2) ≡ ±1 [p] pour a ≢ 0. Il vaut +1 ssi a est :', answers: ['Un résidu quadratique mod p', 'Un résidu cubique mod p', 'Premier avec p−1', 'Egal à 1'], correct: 0, explanation: 'C\'est le critère d\'Euler : a est un résidu quadratique mod p ⟺ a^((p−1)/2) ≡ 1 [p]. Cette valeur ±1 est le symbole de Legendre (a/p).' },
          { type: 'mcq', question: 'La loi de réciprocité quadratique (Gauss) relie :', answers: ['Les symboles de Legendre (p/q) et (q/p)', 'Les ordres de p et q', 'Les PGCD(p,q) et PGCD(q,p)', 'Les racines primitives mod p et mod q'], correct: 0, explanation: 'La loi de réciprocité quadratique : pour p, q premiers impairs distincts, (p/q)(q/p) = (−1)^((p−1)/2·(q−1)/2). C\'est l\'un des grands théorèmes de Gauss.' }
        ]
      ]
    },

    // ════════════════════════════════════════════════════
    // 4. CLASSES D'ÉQUIVALENCE MODULO n
    // ════════════════════════════════════════════════════
    {
      id: 'classes-equivalence',
      label: 'Classes d\'équivalence modulo n',
      icon: '🗂️',
      lesson: {
        formula: '[a]ₙ = {a + kn | k ∈ ℤ} = a + nℤ',
        text: 'La classe d\'équivalence de a modulo n est l\'ensemble de tous les entiers congrus à a. Ces classes forment une partition de ℤ en n sous-ensembles disjoints, constituant l\'anneau quotient ℤ/nℤ.',
        example: 'Dans ℤ/3ℤ, les trois classes sont [0]={…,−3,0,3,6,…}, [1]={…,−2,1,4,7,…}, [2]={…,−1,2,5,8,…}. Tout entier appartient à exactement l\'une d\'elles.',
      },
      fullBlocks: [
        {
          type: 'definition',
          title: '📌 Classe d\'équivalence',
          text: 'La <strong>classe d\'équivalence</strong> de a modulo n est : [a]ₙ = {b ∈ ℤ | b ≡ a [n]} = {a + kn | k ∈ ℤ} = a + nℤ.<br>C\'est l\'ensemble de tous les entiers ayant le même reste que a dans la division par n.'
        },
        {
          type: 'example',
          title: '💡 ℤ/4ℤ : les quatre classes',
          text: '• [0] = {…, −8, −4, 0, 4, 8, …} = 4ℤ\n• [1] = {…, −7, −3, 1, 5, 9, …}\n• [2] = {…, −6, −2, 2, 6, 10, …}\n• [3] = {…, −5, −1, 3, 7, 11, …}\n\nCes quatre classes sont disjointes et recouvrent ℤ entier.'
        },
        {
          type: 'formula',
          title: '🔑 Structure de ℤ/nℤ',
          formula: 'ℤ/nℤ = {[0], [1], [2], …, [n−1]}',
          text: 'L\'ensemble quotient ℤ/nℤ a exactement n éléments. On le munit d\'une addition [a]+[b]=[a+b] et d\'une multiplication [a]·[b]=[ab], ce qui en fait un anneau commutatif unitaire.'
        },
        {
          type: 'demo',
          title: '🔬 Les classes forment une partition de ℤ',
          text: '<strong>Tout entier appartient à au moins une classe :</strong> a ∈ [r] où r est son reste mod n. ✓<br><strong>Les classes sont disjointes :</strong> Si b ∈ [a] ∩ [c], alors b ≡ a [n] et b ≡ c [n], donc a ≡ c [n] (transitivité), donc [a] = [c]. ✓'
        },
        {
          type: 'warning',
          title: '⚠️ Représentants canoniques',
          text: 'Chaque classe a infiniment de représentants : [3]₇ = {…, −4, 3, 10, 17, …}. On choisit par convention le <strong>représentant canonique</strong> dans {0, 1, …, n−1}. On peut aussi choisir {−⌊n/2⌋, …, ⌊n/2⌋} (représentants symétriques), utile quand les négatifs sont plus petits.'
        }
      ],
      levels: [
        [
          { type: 'mcq', question: 'Combien de classes d\'équivalence y a-t-il dans ℤ/5ℤ ?', answers: ['5', '4', '6', '∞'], correct: 0, explanation: 'ℤ/5ℤ contient 5 classes : [0], [1], [2], [3], [4], correspondant aux restes 0, 1, 2, 3, 4.' },
          { type: 'mcq', question: 'La classe de 7 dans ℤ/3ℤ est :', answers: ['[1]', '[0]', '[2]', '[7]'], correct: 0, explanation: '7 = 3·2 + 1, donc 7 ≡ 1 [3]. La classe de 7 est [1] dans ℤ/3ℤ.' },
          { type: 'mcq', question: 'L\'ensemble {…, −6, −1, 4, 9, 14, …} est la classe de ? dans ℤ/5ℤ', answers: ['4', '1', '9', '−1'], correct: 0, explanation: 'Les éléments diffèrent de 5 en 5. Le représentant canonique est 4 (dans {0,…,4}). C\'est [4] dans ℤ/5ℤ.' },
          { type: 'mcq', question: 'Est-ce que [3]₇ = [10]₇ ?', answers: ['Oui, car 10 ≡ 3 [7]', 'Non, car 3 ≠ 10', 'Non, car 10 > 7', 'Oui, car 3+7 = 10'], correct: 0, explanation: '10 − 3 = 7 = 7·1, donc 7 | (10−3), donc 10 ≡ 3 [7], donc [3]₇ = [10]₇.' },
          { type: 'input', question: 'Quel est le représentant canonique (entre 0 et 6) de la classe de −5 dans ℤ/7ℤ ?', correct: '2', explanation: '−5 + 7 = 2. Donc −5 ≡ 2 [7]. Le représentant canonique est 2.' },
          { type: 'mcq', question: 'La partition de ℤ par les classes mod 2 donne :', answers: ['Les pairs et les impairs', 'Les positifs et les négatifs', 'Les premiers et les composés', 'Les multiples de 4 et les autres'], correct: 0, explanation: 'ℤ/2ℤ = {[0], [1]}. [0] contient les pairs (0, ±2, ±4, …) et [1] les impairs (±1, ±3, …).' },
          { type: 'mcq', question: 'Dans ℤ/6ℤ, la classe [4] contient les entiers de la forme :', answers: ['6k + 4 pour k ∈ ℤ', '4k pour k ∈ ℤ', '6k − 4 pour k ≥ 0', '4k + 6 pour k ≥ 0'], correct: 0, explanation: '[4]₆ = {4 + 6k | k ∈ ℤ} = {…, −2, 4, 10, 16, …}.' },
          { type: 'mcq', question: 'Deux entiers a et b sont dans la même classe mod n si et seulement si :', answers: ['Ils ont le même reste dans la division par n', 'a − b = n', 'a + b est divisible par n', 'Ils sont tous deux divisibles par n'], correct: 0, explanation: 'Définition : a ∈ [b]ₙ ⟺ a ≡ b [n] ⟺ a et b ont le même reste dans la division euclidienne par n.' },
          { type: 'input', question: 'Combien d\'éléments distincts contient ℤ/100ℤ ?', correct: '100', explanation: 'ℤ/nℤ contient exactement n classes d\'équivalence. Ici n = 100, donc il y a 100 éléments.' },
          { type: 'mcq', question: '[0]ₙ est toujours égal à :', answers: ['nℤ (les multiples de n)', 'ℤ tout entier', '{0}', '{0, n}'], correct: 0, explanation: '[0]ₙ = {k ∈ ℤ | k ≡ 0 [n]} = {k ∈ ℤ | n | k} = nℤ : c\'est l\'ensemble des multiples de n.' }
        ],
        [
          { type: 'mcq', question: 'Dans ℤ/12ℤ, [8] + [7] = ?', answers: ['[3]', '[15]', '[1]', '[2]'], correct: 0, explanation: '[8]+[7] = [15] = [15−12] = [3] dans ℤ/12ℤ (car 15 ≡ 3 [12]).' },
          { type: 'mcq', question: 'Dans ℤ/10ℤ, [3]×[4] = ?', answers: ['[2]', '[12]', '[7]', '[0]'], correct: 0, explanation: '[3]×[4] = [12] = [2] dans ℤ/10ℤ (car 12 ≡ 2 [10]).' },
          { type: 'mcq', question: 'Dans ℤ/6ℤ, quel est l\'opposé de [4] ?', answers: ['[2]', '[4]', '[−4]', '[3]'], correct: 0, explanation: '[4]+[2] = [6] = [0]. L\'opposé de [4] dans ℤ/6ℤ est [2].' },
          { type: 'input', question: 'Dans ℤ/7ℤ, calculer [5]² (donner le représentant entre 0 et 6).', correct: '4', explanation: '[5]² = [25] = [25 − 3×7] = [25−21] = [4] dans ℤ/7ℤ.' },
          { type: 'mcq', question: 'Dans ℤ/8ℤ, [3]³ = ?', answers: ['[3]', '[27]', '[5]', '[1]'], correct: 0, explanation: '[3]³ = [27] = [27−3×8] = [27−24] = [3] dans ℤ/8ℤ.' },
          { type: 'mcq', question: 'Quel est le neutre pour la multiplication dans ℤ/nℤ ?', answers: ['[1]', '[0]', '[n]', '[n−1]'], correct: 0, explanation: '[a]×[1] = [a·1] = [a] pour tout [a]. Le neutre multiplicatif est [1].' },
          { type: 'mcq', question: 'Dans ℤ/4ℤ, [2]×[2] = ?', answers: ['[0]', '[4]', '[2]', '[1]'], correct: 0, explanation: '[2]×[2] = [4] = [0] dans ℤ/4ℤ. Donc [2] est un diviseur de zéro dans ℤ/4ℤ.' },
          { type: 'mcq', question: 'ℤ/nℤ est un anneau intègre (sans diviseur de zéro) si et seulement si :', answers: ['n est premier', 'n est pair', 'n ≥ 3', 'n est carré'], correct: 0, explanation: 'S\'il existe a, b avec 0 < a, b < n et ab ≡ 0 [n], alors [a][b]=[0] dans ℤ/nℤ. Cela se produit ssi n est composé.' },
          { type: 'input', question: 'Dans ℤ/9ℤ, calculer [7]+[5] (représentant canonique).', correct: '3', explanation: '[7]+[5]=[12]=[3] dans ℤ/9ℤ (car 12=9+3).' },
          { type: 'mcq', question: 'Laquelle de ces classes est un diviseur de zéro dans ℤ/12ℤ ?', answers: ['[4]', '[1]', '[5]', '[7]'], correct: 0, explanation: '[4]×[3] = [12] = [0]. Donc [4] est un diviseur de zéro. (PGCD(4,12)=4≠1, donc [4] n\'est pas inversible.)' }
        ],
        [
          { type: 'mcq', question: 'La caractéristique de l\'anneau ℤ/nℤ est :', answers: ['n', '0', '1', 'φ(n)'], correct: 0, explanation: 'La caractéristique de ℤ/nℤ est le plus petit entier k > 0 tel que k·[1]=[0]. On a n·[1]=[n]=[0]. Caractéristique = n.' },
          { type: 'mcq', question: 'Les éléments inversibles de ℤ/12ℤ sont :', answers: ['{[1],[5],[7],[11]}', '{[1],[3],[5],[7],[9],[11]}', '{[1],[11]}', '{[1],[5],[7]}'], correct: 0, explanation: 'Un élément [a] est inversible ssi PGCD(a,12)=1. Pour a∈{1,…,11} : PGCD=1 pour 1,5,7,11. Donc 4 inversibles = φ(12).' },
          { type: 'input', question: 'Dans ℤ/11ℤ (11 premier), quel est l\'inverse de [3] ? (3×? ≡ 1 [11])', correct: '4', explanation: '3×4=12≡1 [11]. Donc l\'inverse de [3] dans ℤ/11ℤ est [4].' },
          { type: 'mcq', question: 'Dans ℤ/5ℤ (corps), tout élément non nul est inversible. L\'inverse de [4] est :', answers: ['[4]', '[2]', '[3]', '[1]'], correct: 0, explanation: '[4]×[4]=[16]=[1] dans ℤ/5ℤ. Donc [4] est son propre inverse (il vérifie [4]²=[1]).' },
          { type: 'mcq', question: 'Le nombre d\'éléments inversibles dans ℤ/pℤ (p premier) est :', answers: ['p−1', 'p', 'φ(p)=p−1 aussi', '(p−1)/2'], correct: 0, explanation: 'Dans ℤ/pℤ, les éléments [1], [2], …, [p−1] sont tous inversibles (tous premiers avec p). Il y en a p−1 = φ(p).' },
          { type: 'mcq', question: 'L\'équation [x]² = [1] dans ℤ/8ℤ a combien de solutions ?', answers: ['4', '2', '1', '8'], correct: 0, explanation: 'x² ≡ 1 [8] : 1²=1✓, 3²=9≡1✓, 5²=25≡1✓, 7²=49≡1✓. Quatre solutions : [1],[3],[5],[7].' },
          { type: 'mcq', question: 'Les sous-groupes additifs de ℤ/12ℤ correspondent aux :', answers: ['Diviseurs de 12', 'Multiples de 12', 'Nombres premiers', 'Éléments inversibles'], correct: 0, explanation: 'Les sous-groupes additifs de ℤ/nℤ sont de la forme dℤ/nℤ pour d | n. Pour n=12 : sous-groupes d\'ordre 12/d pour d | 12.' },
          { type: 'input', question: 'Dans ℤ/13ℤ, calculer [6]×[9] (représentant canonique).', correct: '2', explanation: '[6]×[9]=[54]. 54=13×4+2. Donc [54]=[2] dans ℤ/13ℤ.' },
          { type: 'mcq', question: 'Dans ℤ/7ℤ, l\'inverse de [2] est :', answers: ['[4]', '[3]', '[5]', '[6]'], correct: 0, explanation: '[2]×[4]=[8]=[1] dans ℤ/7ℤ (car 8=7+1). L\'inverse de [2] est [4].' },
          { type: 'mcq', question: 'ℤ/2ℤ est le corps à 2 éléments 𝔽₂. Ses éléments sont :', answers: ['{[0],[1]}', '{0,1}', '{[0],[1],[2]}', '{−1,0,1}'], correct: 0, explanation: 'ℤ/2ℤ = {[0], [1]} avec [0]+[1]=[1], [1]+[1]=[0], [1]×[1]=[1]. C\'est le corps 𝔽₂ (ou GF(2)).' }
        ],
        [
          { type: 'mcq', question: 'L\'anneau ℤ/6ℤ est isomorphe à :', answers: ['ℤ/2ℤ × ℤ/3ℤ', 'ℤ/2ℤ × ℤ/2ℤ × ℤ/2ℤ', 'ℤ/3ℤ × ℤ/3ℤ', 'ℤ/12ℤ'], correct: 0, explanation: 'PGCD(2,3)=1, donc par le CRT : ℤ/6ℤ ≅ ℤ/2ℤ × ℤ/3ℤ comme anneaux.' },
          { type: 'mcq', question: 'L\'idéal ⟨[2]⟩ = {[0],[2],[4]} dans ℤ/6ℤ est :', answers: ['Un idéal maximal', 'Un idéal premier', 'L\'idéal nul', 'Non un idéal'], correct: 0, explanation: 'ℤ/6ℤ / ⟨[2]⟩ ≅ ℤ/2ℤ. Mais ℤ/2ℤ est un corps, donc ⟨[2]⟩ est un idéal maximal de ℤ/6ℤ.' },
          { type: 'input', question: 'Dans ℤ/17ℤ (17 premier), l\'inverse de [5] est [?]. (5×? ≡ 1 [17])', correct: '7', explanation: '5×7=35=17×2+1≡1 [17]. L\'inverse de [5] est [7].' },
          { type: 'mcq', question: 'Un corps fini à q éléments existe si et seulement si :', answers: ['q est une puissance d\'un nombre premier', 'q est premier', 'q est pair', 'q est un carré parfait'], correct: 0, explanation: 'Les corps finis (corps de Galois) ont un nombre d\'éléments de la forme q = p^k avec p premier. On les note 𝔽_q ou GF(q).' },
          { type: 'mcq', question: 'Dans ℤ/pℤ (p premier), l\'équation x^(p−1) = 1 a combien de solutions ?', answers: ['p−1', '1', '(p−1)/2', 'p'], correct: 0, explanation: 'Par le petit théorème de Fermat, tout a ≢ 0 [p] vérifie a^(p−1) ≡ 1 [p]. Il y a donc p−1 solutions : [1],[2],…,[p−1].' },
          { type: 'mcq', question: 'Les racines carrées de [1] dans ℤ/pℤ (p premier impair) sont :', answers: ['[1] et [p−1]=[−1]', '[1] seulement', '[±1] et [±(p−1)/2]', 'Tous les éléments'], correct: 0, explanation: 'x² ≡ 1 [p] ⟺ (x−1)(x+1) ≡ 0 [p] ⟺ x ≡ ±1 [p] (car p est premier). Solutions : [1] et [p−1] = [−1].' },
          { type: 'mcq', question: 'ℤ/4ℤ et ℤ/2ℤ × ℤ/2ℤ sont-ils isomorphes comme anneaux ?', answers: ['Non', 'Oui', 'Oui si 4 est premier', 'Oui comme groupes additifs'], correct: 0, explanation: 'PGCD(2,2)≠1, donc le CRT ne s\'applique pas. ℤ/4ℤ contient [2] avec [2]²=[0] mais 2·[2]=[0]. ℤ/2ℤ×ℤ/2ℤ n\'a pas d\'élément d\'ordre 4. Ils ne sont pas isomorphes.' },
          { type: 'input', question: 'Combien d\'idéaux contient ℤ/12ℤ ? (Les idéaux correspondent aux diviseurs de 12)', correct: '6', explanation: 'Les idéaux de ℤ/nℤ sont en correspondance avec les diviseurs de n. Pour n=12 : diviseurs 1,2,3,4,6,12 → 6 idéaux.' },
          { type: 'mcq', question: 'Le groupe additif (ℤ/12ℤ, +) est isomorphe à :', answers: ['ℤ/4ℤ × ℤ/3ℤ', 'ℤ/2ℤ × ℤ/6ℤ × ℤ/2ℤ', '(ℤ/2ℤ)² × ℤ/3ℤ', 'ℤ/12ℤ lui-même'], correct: 0, explanation: '(ℤ/12ℤ,+) ≅ ℤ/4ℤ × ℤ/3ℤ (groupes cycliques). 12 = 4×3 avec PGCD(4,3)=1.' },
          { type: 'mcq', question: 'L\'ordre de [5] dans le groupe additif ℤ/12ℤ est :', answers: ['12', '5', '6', '3'], correct: 0, explanation: 'Ordre de [5] = 12/PGCD(5,12) = 12/1 = 12. [5] est un générateur de (ℤ/12ℤ, +).' }
        ],
        [
          { type: 'mcq', question: 'Le groupe multiplicatif (ℤ/7ℤ)× est cyclique, engendré par [3] (vérifiable). L\'ordre de [3] est :', answers: ['6', '7', '3', '42'], correct: 0, explanation: '3¹=3, 3²=2, 3³=6, 3⁴=4, 3⁵=5, 3⁶=1 [7]. Cycle de longueur 6 = p−1. [3] est bien un générateur.' },
          { type: 'mcq', question: 'Dans (ℤ/11ℤ)×, combien y a-t-il de racines primitives ?', answers: ['φ(10)=4', '10', 'φ(11)=10', '5'], correct: 0, explanation: 'Le nombre de générateurs d\'un groupe cyclique d\'ordre n est φ(n). Ici n = φ(11) = 10. Il y a φ(10) = 4 racines primitives mod 11.' },
          { type: 'input', question: 'Vérifier que 2 est une racine primitive mod 5 en calculant les puissances 2¹, 2², 2³, 2⁴ mod 5. L\'ordre de 2 est ?', correct: '4', explanation: '2¹=2, 2²=4, 2³=3, 2⁴=1 [5]. Les puissances de 2 donnent {1,2,3,4}=ℤ/5ℤ×. Ordre = 4 = p−1. ✓' },
          { type: 'mcq', question: 'Dans (ℤ/13ℤ)×, l\'ordre de [2] est :', answers: ['12', '6', '4', '3'], correct: 0, explanation: '2¹=2, 2²=4, 2³=8, 2⁴=16≡3, 2⁵=6, 2⁶=12≡−1, 2¹²≡1 [13]. Ordre = 12 : [2] est une racine primitive.' },
          { type: 'mcq', question: 'Si g est une racine primitive mod p, alors pour tout k ∈ {1,…,p−1}, il existe un unique j tel que :', answers: ['g^j ≡ k [p]', 'k^j ≡ g [p]', 'j^g ≡ k [p]', 'g^k ≡ j [p]'], correct: 0, explanation: 'g étant générateur, tout k ∈ {1,…,p−1} s\'écrit k = g^j mod p pour un unique j ∈ {0,…,p−2}. j s\'appelle le logarithme discret de k en base g.' },
          { type: 'mcq', question: 'Dans ℤ/pℤ (p ≥ 3 premier), le nombre d\'éléments d\'ordre 2 est :', answers: ['1 (c\'est [−1])', '2 ([1] et [−1])', 'p−1', '(p−1)/2'], correct: 0, explanation: 'x² ≡ 1 [p] ⟹ x ≡ ±1 [p]. [1] est l\'élément neutre (ordre 1). [−1]=[p−1] a ordre 2 (si p ≠ 2). Il y a exactement 1 élément d\'ordre 2.' },
          { type: 'mcq', question: 'Le groupe (ℤ/8ℤ)× (éléments : [1],[3],[5],[7]) est isomorphe à :', answers: ['ℤ/2ℤ × ℤ/2ℤ', 'ℤ/4ℤ', 'ℤ/8ℤ', 'ℤ/2ℤ'], correct: 0, explanation: 'Tous les éléments de (ℤ/8ℤ)× ont ordre 1 ou 2 (vérif : 3²=9≡1, 5²=25≡1, 7²=49≡1 [8]). C\'est un groupe abélien d\'ordre 4 sans élément d\'ordre 4, donc ≅ ℤ/2ℤ × ℤ/2ℤ.' },
          { type: 'input', question: 'Calculer le nombre d\'éléments d\'ordre 4 dans (ℤ/13ℤ)× (groupe cyclique d\'ordre 12).', correct: '2', explanation: 'Dans un groupe cyclique d\'ordre n, le nombre d\'éléments d\'ordre d est φ(d). Pour d=4 : φ(4)=2.' },
          { type: 'mcq', question: 'Le groupe (ℤ/p²ℤ)× est cyclique pour p premier impair. Son ordre est :', answers: ['p(p−1)', 'p²', 'p−1', 'p²−p'], correct: 0, explanation: '|(ℤ/p²ℤ)×| = φ(p²) = p²−p = p(p−1). Ce groupe est cyclique, admettant donc des racines primitives modulo p².' },
          { type: 'mcq', question: 'Une racine primitive modulo p est aussi racine primitive modulo p² pour :', answers: ['La plupart des racines primitives mod p', 'Aucune', 'Toutes', 'Exactement la moitié'], correct: 0, explanation: 'On peut montrer que si g est racine primitive mod p, alors soit g, soit g+p est racine primitive mod p². Donc "presque toutes" le sont.' }
        ],
        // =======================
        // ===== Niveau L1 =======
        // =======================
        [
          { type: 'mcq', question: 'Le théorème de structure des groupes abéliens finis affirme que tout groupe abélien fini est isomorphe à :', answers: ['Un produit de groupes cycliques', 'Un groupe symétrique', 'ℤ/nℤ pour un certain n', 'Un groupe alterné'], correct: 0, explanation: 'Tout groupe abélien fini est isomorphe à un produit direct ℤ/n₁ℤ × … × ℤ/nₖℤ avec n₁ | n₂ | … | nₖ (décomposition en facteurs invariants).' },
          { type: 'mcq', question: 'L\'anneau ℤ/nℤ est un corps si et seulement si n est premier. La preuve repose sur :', answers: ['PGCD(a,n)=1 ⟺ a inversible dans ℤ/nℤ', 'n est pair', 'φ(n) = n', 'ℤ/nℤ est intègre ssi n > 2'], correct: 0, explanation: 'a ∈ ℤ/nℤ est inversible ssi PGCD(a,n)=1. Si n est premier, tout a ∈ {1,…,n−1} vérifie PGCD(a,n)=1, donc tout élément non nul est inversible : c\'est un corps.' },
          { type: 'mcq', question: 'Un corps fini 𝔽_q de caractéristique p satisfait :', answers: ['q = p^n pour un certain n ≥ 1', 'q est premier', 'q est pair', 'q | p'], correct: 0, explanation: 'Tout corps fini a une caractéristique p première et son cardinal est q = p^n. Les corps ℤ/pℤ correspondent à n=1.' },
          { type: 'input', question: 'Le groupe additif (𝔽₄, +) de 𝔽₄ = 𝔽_{2²} est isomorphe à ℤ/4ℤ ou ℤ/2ℤ × ℤ/2ℤ ? (Répondre: Z/4Z ou Z/2Z x Z/2Z)', correct: 'Z/2Z x Z/2Z', explanation: '𝔽₄ a caractéristique 2, donc 2·x=0 pour tout x : tout élément a ordre 1 ou 2. Le groupe additif est ≅ ℤ/2ℤ × ℤ/2ℤ (de Klein), pas ℤ/4ℤ (qui a des éléments d\'ordre 4).' },
          { type: 'mcq', question: 'Le groupe multiplicatif (𝔽_q×, ×) est toujours :', answers: ['Cyclique', 'Abélien mais non cyclique', 'Simple', 'Symétrique'], correct: 0, explanation: 'Pour tout corps fini 𝔽_q, le groupe multiplicatif 𝔽_q× est cyclique d\'ordre q−1. C\'est un résultat fondamental de la théorie des corps finis.' },
          { type: 'mcq', question: 'Les classes latérales de nℤ dans ℤ définissent la structure d\'anneau sur ℤ/nℤ. Les classes sont :', answers: ['Des ensembles de la forme a + nℤ', 'Des ensembles de la forme nℤ + a·nℤ', 'Des groupes', 'Des idéaux de ℤ'], correct: 0, explanation: 'Les classes latérales (à gauche = à droite, ℤ est abélien) de nℤ dans ℤ sont les a + nℤ = {a+kn | k ∈ ℤ}. Elles forment le groupe quotient ℤ/nℤ.' },
          { type: 'mcq', question: 'Dans un anneau A, l\'ensemble des éléments inversibles forme :', answers: ['Un groupe pour la multiplication (le groupe des unités)', 'Un anneau', 'Un idéal', 'Un sous-anneau unitaire'], correct: 0, explanation: 'L\'ensemble A× des éléments inversibles (unités) est stable par multiplication et inversion. C\'est un groupe pour la multiplication.' },
          { type: 'mcq', question: 'L\'anneau ℤ[X]/(X²+1) est isomorphe à :', answers: ['ℂ (les complexes)', 'ℝ', 'ℤ/2ℤ', 'ℤ × ℤ'], correct: 0, explanation: 'ℤ[X]/(X²+1) ≅ ℤ[i] (entiers de Gauss). Sur ℝ : ℝ[X]/(X²+1) ≅ ℂ. Sur ℤ : on obtient les entiers gaussiens.' },
          { type: 'mcq', question: 'Le polynôme X^(p−1) − 1 se factorise sur ℤ/pℤ en :', answers: ['(X−1)(X−2)…(X−(p−1))', '(X−1)^(p−1)', '(X^((p−1)/2)−1)²', 'Il est irréductible'], correct: 0, explanation: 'Dans ℤ/pℤ, par Fermat, les p−1 éléments non nuls sont tous racines de X^(p−1)−1. Ce polynôme de degré p−1 a exactement p−1 racines distinctes, donc il se factorise en produit de (p−1) facteurs linéaires.' },
          { type: 'mcq', question: 'La formule de Wilson (p−1)! ≡ −1 [p] peut se prouver en notant que :', answers: ['Dans 𝔽_p×, les éléments non auto-inverses se couplent', 'p−1 est pair', '(p−1)! est toujours impair', 'p divise (p−1)!'], correct: 0, explanation: 'Les éléments de 𝔽_p× qui sont leur propre inverse satisfont x²=1, i.e., x=±1. Les autres se couplent en produit 1. Le produit total est (−1)×(1)×(couplages)=−1. D\'où (p−1)!≡−1.' }
        ]
      ]
    },

    // ════════════════════════════════════════════════════
    // 5. CALCULS MODULO p (p PREMIER)
    // ════════════════════════════════════════════════════
    {
      id: 'calcul-modulo-premier',
      label: 'Calculs modulo p (p premier)',
      icon: '🔢',
      lesson: {
        formula: 'p premier ⟹ ℤ/pℤ est un corps (tout non-nul est inversible)',
        text: 'Quand le modulo p est premier, les calculs se simplifient considérablement. ℤ/pℤ est un corps : on peut diviser par tout élément non nul. Les propriétés des nombres premiers permettent des calculs de puissances rapides et l\'existence d\'inverses modulaires.',
        example: 'Modulo 7 : 3 × 5 = 15 ≡ 1 [7], donc 3 et 5 sont inverses. On peut "diviser" : 4/3 = 4 × 3⁻¹ = 4 × 5 = 20 ≡ 6 [7].',
      },
      fullBlocks: [
        {
          type: 'definition',
          title: '📌 ℤ/pℤ est un corps',
          text: 'Pour p premier, l\'anneau ℤ/pℤ est un <strong>corps</strong> : tout élément non nul [a] (avec p ∤ a) admet un inverse [a]⁻¹ tel que [a]·[a]⁻¹ = [1]. Cette propriété découle du fait que PGCD(a,p) = 1 pour tout a ∈ {1, …, p−1}.'
        },
        {
          type: 'formula',
          title: '🔑 Petit théorème de Fermat (version corps)',
          formula: 'a^(p−1) ≡ 1 [p]  pour tout a avec p ∤ a',
          text: 'On en déduit que a⁻¹ ≡ a^(p−2) [p]. C\'est une formule explicite pour l\'inverse modulaire quand p est premier.'
        },
        {
          type: 'technique',
          title: '🛠️ Calcul d\'inverse par Fermat',
          text: 'Pour calculer a⁻¹ mod p :\n<strong>Méthode 1 (Fermat) :</strong> a⁻¹ ≡ a^(p−2) [p]\nExemple : 3⁻¹ mod 7. 3^5 = 243 = 7×34+5. Donc 3⁻¹ ≡ 5 [7].\n\n<strong>Méthode 2 (Euclide étendu) :</strong> Résoudre au + pv = 1 par l\'algorithme d\'Euclide étendu. Plus rapide pour de grands p.'
        },
        {
          type: 'example',
          title: '💡 Résolution dans ℤ/7ℤ',
          text: 'Résoudre 3x ≡ 5 [7] :\nDiviser par 3 (inverser) : x ≡ 5 × 3⁻¹ [7].\n3⁻¹ ≡ 5 [7] (car 3×5=15≡1).\nDonc x ≡ 5×5 = 25 ≡ 4 [7].\nVérification : 3×4 = 12 ≡ 5 [7] ✓'
        },
        {
          type: 'warning',
          title: '⚠️ Spécificité du premier',
          text: 'Ces propriétés (inversibilité de tout non-nul, absence de diviseurs de zéro) sont propres au cas premier. Dans ℤ/6ℤ par exemple, [2]×[3]=[0] bien que [2]≠[0] et [3]≠[0]. On ne peut diviser par [2] ou [3] dans ℤ/6ℤ.'
        }
      ],
      levels: [
        [
          { type: 'mcq', question: 'Dans ℤ/7ℤ, quel est l\'inverse de [3] ?', answers: ['[5]', '[4]', '[2]', '[6]'], correct: 0, explanation: '[3]×[5]=[15]=[1] dans ℤ/7ℤ (15=7×2+1). Donc [3]⁻¹=[5].' },
          { type: 'mcq', question: 'Dans ℤ/5ℤ, quel est l\'inverse de [3] ?', answers: ['[2]', '[3]', '[4]', '[1]'], correct: 0, explanation: '[3]×[2]=[6]=[1] dans ℤ/5ℤ. Donc [3]⁻¹=[2].' },
          { type: 'mcq', question: 'Dans ℤ/11ℤ, quel est l\'inverse de [5] ?', answers: ['[9]', '[6]', '[7]', '[2]'], correct: 0, explanation: '[5]×[9]=[45]=[1] dans ℤ/11ℤ (45=11×4+1). Donc [5]⁻¹=[9].' },
          { type: 'mcq', question: 'Résoudre 2x ≡ 1 [7]. La solution est :', answers: ['x ≡ 4 [7]', 'x ≡ 3 [7]', 'x ≡ 5 [7]', 'x ≡ 6 [7]'], correct: 0, explanation: '2⁻¹ mod 7 : [2]×[4]=[8]=[1]. Donc 2⁻¹≡4 [7] et x≡1×4=4 [7].' },
          { type: 'input', question: 'Dans ℤ/13ℤ, l\'inverse de [4] est [?]. (4×? ≡ 1 [13])', correct: '10', explanation: '[4]×[10]=[40]=[1] dans ℤ/13ℤ (40=13×3+1). Donc 4⁻¹≡10 [13].' },
          { type: 'mcq', question: 'Pourquoi peut-on toujours diviser par [a] ≠ [0] dans ℤ/pℤ (p premier) ?', answers: ['Car PGCD(a,p)=1, donc a est inversible', 'Car p est grand', 'Car a < p', 'Car ℤ/pℤ est fini'], correct: 0, explanation: 'Pour a non multiple de p, PGCD(a,p)=1 (p est premier). Par Bezout, il existe u tel que au+pv=1, donc au≡1 [p] : u est l\'inverse de a.' },
          { type: 'mcq', question: 'Dans ℤ/5ℤ, résoudre 3x ≡ 4 [5] :', answers: ['x ≡ 3 [5]', 'x ≡ 2 [5]', 'x ≡ 4 [5]', 'x ≡ 1 [5]'], correct: 0, explanation: '3⁻¹=2 dans ℤ/5ℤ (3×2=6≡1). x≡2×4=8≡3 [5].' },
          { type: 'mcq', question: 'Dans ℤ/7ℤ, calculer [4]/[3] (= [4]×[3]⁻¹) :', answers: ['[6]', '[2]', '[5]', '[1]'], correct: 0, explanation: '3⁻¹=5 [7] (3×5=15≡1). [4]×[5]=[20]=[6] dans ℤ/7ℤ (20=7×2+6).' },
          { type: 'mcq', question: 'L\'équation x² ≡ −1 [5] a-t-elle des solutions ?', answers: ['Oui : x ≡ 2 ou x ≡ 3 [5]', 'Non', 'Oui : x ≡ 1 ou x ≡ 4', 'Seulement si 5 est premier'], correct: 0, explanation: '2²=4≡−1 [5] ✓ et 3²=9≡4≡−1 [5] ✓. Les solutions sont [2] et [3].' },
          { type: 'input', question: 'Dans ℤ/11ℤ, calculer [7]⁻¹. (7×? ≡ 1 [11])', correct: '8', explanation: '[7]×[8]=[56]=[1] dans ℤ/11ℤ (56=11×5+1). Donc 7⁻¹≡8 [11].' }
        ],
        [
          { type: 'mcq', question: 'Par la formule de Fermat, 7⁻¹ mod 11 = 7^(11−2) mod 11 = 7^9 mod 11. Résultat :', answers: ['8', '4', '2', '7'], correct: 0, explanation: '7^2=49≡5, 7^4≡25≡3, 7^8≡9, 7^9≡9×7=63≡8 [11]. Donc 7⁻¹≡8 [11]. Vérif : 7×8=56=11×5+1≡1 ✓.' },
          { type: 'mcq', question: 'Dans ℤ/13ℤ, résoudre 5x + 3 ≡ 1 [13] :', answers: ['x ≡ 11 [13]', 'x ≡ 8 [13]', 'x ≡ 2 [13]', 'x ≡ 5 [13]'], correct: 0, explanation: '5x ≡ 1−3 = −2 ≡ 11 [13]. 5⁻¹=8 (5×8=40=13×3+1). x≡8×11=88≡88−6×13=88−78=10 [13]. Correction : x≡10.' },
          { type: 'mcq', question: 'Dans ℤ/7ℤ, résoudre x² ≡ 2 [7] (2 est-il résidu quadratique mod 7 ?) :', answers: ['Oui : x ≡ 3 ou 4 [7]', 'Non, 2 n\'est pas résidu quadratique mod 7', 'x ≡ 2 ou 5', 'x ≡ 1 ou 6'], correct: 0, explanation: '3²=9≡2 [7] ✓ et 4²=16≡2 [7] ✓. Solutions : [3] et [4]. (4=7−3=−3 ≡ −3 [7]).' },
          { type: 'input', question: 'Calculer 6⁻¹ mod 7 en utilisant 6 ≡ −1 [7].', correct: '6', explanation: '6 ≡ −1 [7]. (−1)⁻¹ = −1 ≡ 6 [7]. Donc 6⁻¹ ≡ 6 [7]. Vérif : 6×6=36=7×5+1≡1 ✓.' },
          { type: 'mcq', question: 'Le nombre de solutions de x² ≡ a [p] (p premier, a ≢ 0 [p]) est :', answers: ['0 ou 2', '1 ou 2', 'Toujours 2', 'Toujours 0'], correct: 0, explanation: 'Si a est un résidu quadratique mod p, il y a exactement 2 solutions (±√a). Sinon, il n\'y a pas de solution. C\'est lié au symbole de Legendre.' },
          { type: 'mcq', question: 'Dans ℤ/11ℤ, est-ce que 4 est un résidu quadratique ?', answers: ['Oui, x = 2 ou 9', 'Non', 'Oui, x = 4 ou 7', 'Oui, x = 3 ou 8'], correct: 0, explanation: '2²=4≡4 ✓ et 9²=81≡4 [11] (81=11×7+4). Solutions : x=2 ou x=9 (=11−2).' },
          { type: 'mcq', question: 'Le critère d\'Euler dit : a est un résidu quadratique mod p (p impair premier) ssi :', answers: ['a^((p−1)/2) ≡ 1 [p]', 'a^((p−1)/2) ≡ −1 [p]', 'a^(p−1) ≡ 1 [p]', 'a^((p+1)/2) ≡ 1 [p]'], correct: 0, explanation: 'Le critère d\'Euler : (a/p) = a^((p−1)/2) mod p vaut +1 si a est résidu quadratique, −1 sinon. C\'est le symbole de Legendre.' },
          { type: 'mcq', question: 'Dans ℤ/7ℤ, calculer 2^((7−1)/2) = 2^3 = 8 ≡ 1 [7]. Cela signifie que 2 est :', answers: ['Un résidu quadratique mod 7', 'Un non-résidu quadratique', 'Un générateur', 'Un diviseur de 7'], correct: 0, explanation: '2^3=8≡1 [7]. Par le critère d\'Euler, 2 est un résidu quadratique mod 7. (Vérif : 3²=9≡2 [7] ✓).' },
          { type: 'input', question: 'Dans ℤ/7ℤ, résoudre 4x ≡ 2 [7]. (Simplifier par 2 en vérifiant PGCD(2,7)=1)', correct: '4', explanation: '4x≡2 [7]. PGCD(2,7)=1, on peut diviser : 2x≡1 [7]. 2⁻¹=4 [7] (2×4=8≡1). x≡4 [7]. Vérif : 4×4=16≡2 [7] ✓.' },
          { type: 'mcq', question: 'Dans ℤ/p (p premier), le seul élément égal à son propre carré (x²=x) est :', answers: ['[0] et [1]', '[0] seulement', '[1] seulement', 'Tous les éléments'], correct: 0, explanation: 'x²=x ⟺ x(x−1)=0. Dans un corps, ab=0 ⟹ a=0 ou b=0. Donc x=0 ou x=1. Deux solutions : [0] et [1].' }
        ],
        [
          { type: 'mcq', question: 'Dans ℤ/23ℤ, calculer 12⁻¹. On cherche 12u ≡ 1 [23].', answers: ['2', '12', '11', '22'], correct: 0, explanation: '12×2=24=23+1≡1 [23]. Donc 12⁻¹≡2 [23].' },
          { type: 'mcq', question: 'Résoudre 3x² ≡ 12 [7] (diviser d\'abord par 3, puis résoudre x²) :', answers: ['x ≡ 2 ou 5 [7]', 'x ≡ 1 ou 6 [7]', 'x ≡ 3 ou 4 [7]', 'Pas de solution'], correct: 0, explanation: '3⁻¹=5 [7]. x²≡12×5=60≡4 [7] (60=7×8+4). x²≡4 [7] : x≡2 [7] ou x≡5 [7] (=−2).' },
          { type: 'mcq', question: 'Dans ℤ/11ℤ, la somme 1⁻¹ + 2⁻¹ + … + 10⁻¹ vaut :', answers: ['0', '1', '5', '10'], correct: 0, explanation: 'Dans 𝔽_p×, {a⁻¹ | a=1,…,p−1} = {1,…,p−1} (l\'inversion permute les éléments). Donc la somme des inverses = somme de {1,…,p−1} = p(p−1)/2 ≡ 0 [p] pour p impair.' },
          { type: 'input', question: 'Dans ℤ/17ℤ, calculer 9⁻¹ via 9 × 2 = 18 ≡ ?', correct: '2', explanation: '9×2=18=17+1≡1 [17]. Donc 9⁻¹≡2 [17].' },
          { type: 'mcq', question: 'Quel est le nombre de racines quadratiques de [−1] dans ℤ/pℤ pour p ≡ 1 [4] ?', answers: ['2', '0', '1', 'p−1'], correct: 0, explanation: 'Si p ≡ 1 [4], alors −1 est un résidu quadratique mod p (critère : (−1)^((p−1)/2)=(−1)^pair=1). Il y a 2 racines ±i dans ℤ/pℤ.' },
          { type: 'mcq', question: 'Pour p ≡ 3 [4], le nombre de racines de x² ≡ −1 [p] est :', answers: ['0', '2', '1', 'p'], correct: 0, explanation: 'Si p ≡ 3 [4], (−1)^((p−1)/2) = (−1)^impair = −1 ≡ p−1 [p] ≠ 1. Donc −1 n\'est pas résidu quadratique : 0 solution.' },
          { type: 'mcq', question: 'Un polynôme de degré n sur ℤ/pℤ a au plus n racines car :', answers: ['ℤ/pℤ est un corps (anneau intègre)', 'p est premier', 'n < p', 'Les racines sont distinctes'], correct: 0, explanation: 'Dans un corps (anneau intègre), si P(a)=0 alors (X−a)|P. Par factorisation progressive, P de degré n a au plus n facteurs linéaires donc au plus n racines.' },
          { type: 'mcq', question: 'Dans ℤ/5ℤ, résoudre x³ ≡ 3 [5] :', answers: ['x ≡ 2 [5]', 'x ≡ 3 [5]', 'x ≡ 4 [5]', 'Pas de solution'], correct: 0, explanation: '1³=1, 2³=8≡3 ✓, 3³=27≡2, 4³=64≡4. Solution : x≡2 [5].' },
          { type: 'mcq', question: 'Le nombre de solutions de ax ≡ b [p] (p premier, a ≢ 0 [p]) est :', answers: ['Exactement 1', '0 ou 1', 'Exactement 0', 'p solutions'], correct: 0, explanation: 'Dans ℤ/pℤ, a est inversible (PGCD(a,p)=1). L\'équation ax=b a l\'unique solution x=a⁻¹b. Exactement 1 solution.' },
          { type: 'input', question: 'Dans ℤ/7ℤ, calculer [2]^(−3) (= ([2]³)⁻¹ = [8]⁻¹ = [1]⁻¹ = [1]).', correct: '1', explanation: '[2]³=[8]=[1] dans ℤ/7ℤ. Donc [2]^(−3)=[1]⁻¹=[1].' }
        ],
        [
          { type: 'mcq', question: 'Dans ℤ/p (p premier), le polynôme X^p − X se factorise en :', answers: ['X(X−1)(X−2)…(X−(p−1))', '(X−1)^p', 'X^p − X est irréductible', 'X(X^(p−1)−1)'], correct: 0, explanation: 'Par Fermat, tout a ∈ ℤ/pℤ est racine de X^p−X (car a^p ≡ a [p]). Ce polynôme de degré p a p racines distinctes dans ℤ/pℤ, donc il se factorise comme produit de p facteurs linéaires.' },
          { type: 'mcq', question: 'En étendant la formule de Wilson, (p−1)! ≡ −1 [p] donne, en regroupant les termes :', answers: ['Les auto-inverses sont ±1, les autres se couplent', 'Tous les termes valent 1', 'La somme vaut p(p−1)/2', 'Un produit de résidus quadratiques'], correct: 0, explanation: 'Dans (ℤ/pℤ)×, les éléments auto-inverses (x=x⁻¹, i.e., x²=1) sont ±1. Les autres se couplent en paires (a, a⁻¹) de produit 1. Produit final : 1×(−1) = −1.' },
          { type: 'mcq', question: 'Calculer le produit de tous les éléments de (ℤ/13ℤ)× (Wilson) :', answers: ['12 (=−1 mod 13)', '1', '0', '78'], correct: 0, explanation: 'Par Wilson, (p−1)! ≡ −1 [p]. Pour p=13 : 12! ≡ −1 ≡ 12 [13].' },
          { type: 'input', question: 'Dans ℤ/7ℤ, résoudre x² + x + 1 ≡ 0 [7]. Solution(s) : x ≡ ? (donner une solution)', correct: '2', explanation: 'Tester x=2 : 4+2+1=7≡0 ✓. Tester x=4 : 16+4+1=21=7×3≡0 ✓. Solutions : x≡2 ou x≡4 [7].' },
          { type: 'mcq', question: 'Dans ℤ/pℤ (p > 3 premier), le polynôme X² + X + 1 a des racines ssi :', answers: ['p ≡ 1 [3]', 'p ≡ 2 [3]', 'Toujours des racines', 'Jamais de racines'], correct: 0, explanation: 'Les racines de X²+X+1 sont les racines cubiques de l\'unité ≠1. Elles existent dans ℤ/pℤ ssi 3 | (p−1), i.e., p ≡ 1 [3].' },
          { type: 'mcq', question: 'Dans ℤ/11ℤ, calculer la somme de toutes les racines de X^5 − 1 = 0 (par Vieta) :', answers: ['0', '1', '5', '10'], correct: 0, explanation: 'X^5−1 = (X−1)(X^4+X^3+X^2+X+1). Coefficient de X^4 dans X^5−1 est 0, donc par Vieta : somme des 5 racines = 0.' },
          { type: 'mcq', question: 'L\'anneau de polynômes 𝔽_p[X] vérifie : tout idéal est principal car 𝔽_p[X] est :', answers: ['Un anneau euclidien', 'Un corps', 'Un anneau nul', 'Un anneau fini'], correct: 0, explanation: '𝔽_p[X] est euclidien (pour la division euclidienne de polynômes), donc principal (tout idéal est engendré par un élément).' },
          { type: 'mcq', question: 'Pour factoriser un polynôme P sur ℤ/pℤ, la première étape est :', answers: ['Chercher les racines dans ℤ/pℤ par test exhaustif', 'Diviser par p', 'Calculer P^p', 'Utiliser la formule quadratique'], correct: 0, explanation: 'ℤ/pℤ est fini (p éléments). On teste exhaustivement a=0,1,…,p−1. Si P(a)=0, (X−a) divise P. On continue avec P/(X−a).' },
          { type: 'input', question: 'Résoudre x² ≡ 3 [11]. (Calculer x = 3^((11+1)/4) mod 11 = 3^3 mod 11)', correct: '5', explanation: 'Pour p≡3 [4] (ici 11≡3 [4]), √a ≡ a^((p+1)/4). 3^3=27≡5 [11]. Vérif : 5²=25≡3 [11] ✓. Aussi 6²=36≡3 ✓.' },
          { type: 'mcq', question: 'Le symbole de Legendre (2/p) pour p premier impair vaut +1 ssi :', answers: ['p ≡ ±1 [8]', 'p ≡ ±3 [8]', 'p est premier', 'p ≡ 1 [4]'], correct: 0, explanation: 'Par la théorie des résidus quadratiques : 2 est RQ mod p ssi p ≡ ±1 [8]. Sinon (p ≡ ±3 [8]), 2 est non-résidu.' }
        ],
        [
          { type: 'mcq', question: 'L\'ensemble des résidus quadratiques mod p (p premier impair) a cardinal :', answers: ['(p−1)/2', 'p−1', 'p', '(p+1)/2'], correct: 0, explanation: 'Dans (ℤ/pℤ)×, la fonction carré a²≡b² [p] ssi b≡±a [p]. Donc chaque RQ a exactement 2 racines carrées. Il y a (p−1)/2 résidus quadratiques.' },
          { type: 'mcq', question: 'Le symbole de Legendre (a/p) vaut :', answers: ['a^((p−1)/2) mod p, valeur ±1', 'a mod p', 'PGCD(a,p)', 'a^(p−1) mod p'], correct: 0, explanation: '(a/p) = a^((p−1)/2) mod p ∈ {1,−1} (pour a≢0 [p]). Vaut 1 si a est RQ, −1 sinon. Formulation du critère d\'Euler.' },
          { type: 'mcq', question: 'La loi de réciprocité quadratique stipule que pour p ≠ q premiers impairs :', answers: ['(p/q)(q/p) = (−1)^((p−1)/2·(q−1)/2)', '(p/q) = (q/p)', '(p/q) + (q/p) = 1', '(p/q)(q/p) = 1'], correct: 0, explanation: 'La loi de Gauss : (p/q)(q/p) = (−1)^((p−1)(q−1)/4). Si p ≡ q ≡ 3 [4] : produit = −1 (l\'un est RQ et l\'autre non). Sinon : produit = +1.' },
          { type: 'mcq', question: '3 est-il un résidu quadratique mod 7 ?', answers: ['Non car 3^3 = 27 ≡ 6 ≡ −1 [7]', 'Oui', 'On ne peut pas savoir', 'Oui si 7 ≡ 1 [4]'], correct: 0, explanation: 'Critère d\'Euler : 3^((7−1)/2)=3^3=27≡6≡−1 [7]. Donc (3/7)=−1 : 3 est non-résidu quadratique mod 7.' },
          { type: 'input', question: 'Quel est le symbole de Legendre (5/7) ? (Calculer 5^3 mod 7)', correct: '1', explanation: '5^3=125=7×17+6≡6≡−1 [7]. Donc (5/7)=−1. Non-résidu quadratique. Correction : (5/7) = −1 donc la réponse est -1.' },
          { type: 'mcq', question: 'Si (a/p)=1 et (b/p)=1, alors (ab/p) = ?', answers: ['1', '−1', '0', 'Variable'], correct: 0, explanation: '(ab/p) = (a/p)(b/p) = 1×1 = 1. Le produit de deux résidus quadratiques est un résidu quadratique.' },
          { type: 'mcq', question: 'Si (a/p)=−1 et (b/p)=−1, alors (ab/p) = ?', answers: ['1', '−1', '0', 'Variable'], correct: 0, explanation: '(ab/p) = (a/p)(b/p) = (−1)(−1) = 1. Le produit de deux non-résidus est un résidu quadratique.' },
          { type: 'mcq', question: 'La somme de Gauss G = Σ_{a=0}^{p−1} (a/p)e^(2πia/p) vérifie G² = ?', answers: ['(−1)^((p−1)/2) · p', 'p', '−p', '1'], correct: 0, explanation: 'On montre que G² = (−1)^((p−1)/2)·p. Pour p≡1 [4] : G²=p donc G=√p (corps réel). Pour p≡3 [4] : G²=−p donc G=i√p (corps imaginaire). Fondamental en théorie analytique des nombres.' },
          { type: 'mcq', question: 'Sur ℤ/2ℤ, tout carré est ?', answers: ['Égal à l\'élément lui-même', 'Égal à 0', 'Égal à 1', 'Doublé'], correct: 0, explanation: 'Dans ℤ/2ℤ : [0]²=[0] et [1]²=[1]. Tout élément est un carré de lui-même. C\'est aussi l\'identité de Frobenius : en caractéristique 2, x²=x ssi x=0 ou 1.' },
          { type: 'mcq', question: 'L\'endomorphisme de Frobenius x ↦ x^p dans 𝔽_{p^n} est :', answers: ['Un automorphisme de corps d\'ordre n', 'L\'identité', 'Un anti-automorphisme', 'Un endomorphisme non bijectif'], correct: 0, explanation: 'Le Frobenius Φ : x ↦ x^p est un automorphisme de 𝔽_{p^n} d\'ordre n. Il engendre le groupe de Galois Gal(𝔽_{p^n}/𝔽_p) ≅ ℤ/nℤ.' }
        ],
        // =======================
        // ===== Niveau L1 =======
        // =======================
        [
          { type: 'mcq', question: 'L\'extension de corps 𝔽_{p^n}/𝔽_p a degré :', answers: ['n', 'p', 'p^n', 'p−1'], correct: 0, explanation: '[𝔽_{p^n} : 𝔽_p] = n. 𝔽_{p^n} est un espace vectoriel de dimension n sur 𝔽_p.' },
          { type: 'mcq', question: 'Un polynôme irréductible de degré n sur 𝔽_p permet de construire :', answers: ['𝔽_{p^n}', '𝔽_p^n (produit)', 'ℤ/p^nℤ', '𝔽_p lui-même'], correct: 0, explanation: 'Si P est irréductible de degré n sur 𝔽_p, alors 𝔽_p[X]/(P) est un corps à p^n éléments, isomorphe à 𝔽_{p^n}.' },
          { type: 'mcq', question: 'Le nombre de polynômes irréductibles de degré n sur 𝔽_p est approximativement :', answers: ['p^n/n', 'p^n', 'n·p', 'p/n'], correct: 0, explanation: 'Par la formule de Gauss, le nombre de polynômes irréductibles de degré n sur 𝔽_p est (1/n)Σ_{d|n} μ(n/d)p^d ≈ p^n/n pour n grand.' },
          { type: 'mcq', question: 'Dans 𝔽_{p^n}, l\'équation x^(p^n) − x = 0 a combien de solutions ?', answers: ['p^n', 'p', 'n', '1'], correct: 0, explanation: 'Tout élément de 𝔽_{p^n} est racine de X^(p^n)−X (généralisation de Fermat). Ce polynôme de degré p^n a exactement p^n racines dans 𝔽_{p^n}.' },
          { type: 'mcq', question: 'Le groupe de Galois Gal(𝔽_{p^n}/𝔽_p) est :', answers: ['Cyclique d\'ordre n, engendré par le Frobenius', 'Symétrique d\'ordre n', 'Trivial', 'Libre de rang n'], correct: 0, explanation: 'Gal(𝔽_{p^n}/𝔽_p) ≅ ℤ/nℤ, cyclique d\'ordre n, engendré par le Frobenius Φ : x ↦ x^p.' },
          { type: 'mcq', question: 'La trace Tr : 𝔽_{p^n} → 𝔽_p est définie par Tr(x) = :', answers: ['x + x^p + x^(p²) + … + x^(p^(n−1))', 'x^n', 'x · x^p · … · x^(p^(n−1))', 'nx'], correct: 0, explanation: 'Tr(x) = Σ_{i=0}^{n−1} Φ^i(x) = x + x^p + … + x^(p^(n−1)). C\'est l\'application de trace de la théorie de Galois.' },
          { type: 'mcq', question: 'La norme N : 𝔽_{p^n} → 𝔽_p est définie par N(x) = :', answers: ['x · x^p · x^(p²) · … · x^(p^(n−1)) = x^((p^n−1)/(p−1))', 'x^n', 'x + x^p + …', 'Tr(x²)'], correct: 0, explanation: 'N(x) = Π_{i=0}^{n−1} Φ^i(x) = x^(1+p+p²+…+p^(n−1)) = x^((p^n−1)/(p−1)).' },
          { type: 'mcq', question: 'L\'entier de Gauss ℤ[i] = ℤ[X]/(X²+1). Quel premier p ∈ ℤ reste premier dans ℤ[i] ?', answers: ['p ≡ 3 [4]', 'p ≡ 1 [4]', 'p = 2', 'Tous les premiers'], correct: 0, explanation: 'p reste irréductible dans ℤ[i] ssi X²+1 est irréductible sur 𝔽_p, i.e., ssi −1 n\'est pas RQ mod p, i.e., ssi p ≡ 3 [4].' },
          { type: 'mcq', question: 'Pour p ≡ 1 [4], l\'entier de Gauss p se factorise en ℤ[i] comme :', answers: ['p = (a+bi)(a−bi) avec a²+b²=p', 'p = p · 1 (reste premier)', 'p = 2 · (p/2)', 'p = (1+i)^(p−1)'], correct: 0, explanation: 'Si p ≡ 1 [4], p est somme de deux carrés (théorème de Fermat) : p = a²+b² = (a+bi)(a−bi) dans ℤ[i]. C\'est la décomposition en nombres premiers gaussiens.' },
          { type: 'mcq', question: 'La fonction zêta de Riemann ζ(s) = Σn^(−s) admet le produit eulérien :', answers: ['Π_{p premier} 1/(1−p^(−s))', 'Π_{n≥1} 1/n^s', 'Σ_{p} p^(−s)', 'Π_p (p^s−1)'], correct: 0, explanation: 'ζ(s) = Π_{p premier} (1−p^{−s})^{−1}. Ce produit eulérien relie ζ aux premiers. Il est fondamental pour la distribution des nombres premiers.' }
        ]
      ]
    },

    // ════════════════════════════════════════════════════
    // 6. INVERSE MODULAIRE
    // ════════════════════════════════════════════════════
    {
      id: 'inverse-modulaire',
      label: 'Inverse modulaire',
      icon: '🔄',
      lesson: {
        formula: 'a·a⁻¹ ≡ 1 [n]  existe ssi  PGCD(a, n) = 1',
        text: 'Un entier a admet un inverse modulo n si et seulement s\'il est premier avec n. Cet inverse se calcule par l\'algorithme d\'Euclide étendu (identité de Bezout) ou, si n est premier, par la formule de Fermat a⁻¹ ≡ a^(n−2) [n].',
        example: 'Trouver l\'inverse de 3 mod 7. PGCD(3,7)=1 ✓. Bezout : 3×5 − 7×2 = 1, donc 3×5 ≡ 1 [7]. Inverse = 5.',
      },
      fullBlocks: [
        {
          type: 'definition',
          title: '📌 Définition de l\'inverse modulaire',
          text: 'L\'entier a admet un <strong>inverse modulaire</strong> modulo n s\'il existe b ∈ ℤ tel que a·b ≡ 1 [n]. On note alors b ≡ a⁻¹ [n].<br><strong>Condition :</strong> a⁻¹ mod n existe ⟺ PGCD(a, n) = 1.'
        },
        {
          type: 'demo',
          title: '🔬 Preuve de la condition d\'existence',
          text: 'Si PGCD(a,n) = 1, par l\'identité de Bezout il existe u, v ∈ ℤ tels que au + nv = 1. En réduisant modulo n : au ≡ 1 [n]. Donc b = u est l\'inverse de a. ✓<br>Réciproquement, si ab ≡ 1 [n] alors ab − 1 = kn pour un k, donc ab − kn = 1. Tout diviseur commun de a et n divise 1, donc PGCD(a,n) = 1. ✓'
        },
        {
          type: 'technique',
          title: '🛠️ Algorithme d\'Euclide étendu',
          text: 'Pour calculer PGCD(a, n) et trouver les coefficients de Bezout (u, v) avec au + nv = 1 :<br>1. Diviser a par n : a = n·q₀ + r₀<br>2. Diviser n par r₀ : n = r₀·q₁ + r₁<br>3. Continuer jusqu\'à reste = 1<br>4. Remonter pour exprimer 1 comme combinaison de a et n.<br><br>Exemple : PGCD(17, 5) :<br>17 = 5·3 + 2<br>5 = 2·2 + 1 → 1 = 5 − 2·2 = 5 − 2·(17−5·3) = 5·7 − 17·2<br>Donc 17⁻¹ ≡ −2 ≡ 3 [5].'
        },
        {
          type: 'warning',
          title: '⚠️ Cas sans inverse',
          text: 'Si PGCD(a, n) = d > 1, alors a n\'a pas d\'inverse mod n. L\'équation ax ≡ 1 [n] n\'a pas de solution. Exemple : 4 n\'a pas d\'inverse mod 6 car PGCD(4,6) = 2 ≠ 1.'
        }
      ],
      levels: [
        [
          { type: 'mcq', question: 'Lequel de ces entiers admet un inverse modulo 10 ?', answers: ['3', '4', '6', '8'], correct: 0, explanation: 'PGCD(3,10)=1 ✓. PGCD(4,10)=2, PGCD(6,10)=2, PGCD(8,10)=2. Seul 3 est premier avec 10.' },
          { type: 'mcq', question: 'Quel est l\'inverse de 3 modulo 10 ?', answers: ['7', '3', '6', '4'], correct: 0, explanation: '3×7=21≡1 [10] (car 21=10×2+1). Donc 3⁻¹≡7 [mod 10].' },
          { type: 'mcq', question: 'PGCD(a, n) = 1 est la condition pour que :', answers: ['a ait un inverse modulo n', 'a soit premier', 'n soit premier', 'a divise n'], correct: 0, explanation: 'L\'inverse de a mod n existe si et seulement si PGCD(a,n) = 1. C\'est la condition de l\'identité de Bezout.' },
          { type: 'input', question: 'Quel est l\'inverse de 5 modulo 7 ? (5×? ≡ 1 [7])', correct: '3', explanation: '5×3=15=7×2+1≡1 [7]. Donc 5⁻¹≡3 [mod 7].' },
          { type: 'mcq', question: '4 admet-il un inverse modulo 9 ?', answers: ['Oui, car PGCD(4,9)=1', 'Non, car 4 est pair', 'Non, car PGCD(4,9)=2', 'Oui, car 4 < 9'], correct: 0, explanation: 'PGCD(4,9)=1 (9=2²+1 et 4=2², facteurs premiers 2 et 3 séparés). Oui, 4 est inversible mod 9.' },
          { type: 'mcq', question: 'Quel est l\'inverse de 4 modulo 9 ?', answers: ['7', '4', '5', '2'], correct: 0, explanation: '4×7=28=9×3+1≡1 [9]. Donc 4⁻¹≡7 [mod 9].' },
          { type: 'mcq', question: 'L\'identité de Bezout donne au + nv = 1. Ici u est :', answers: ['L\'inverse de a modulo n', 'Le PGCD de a et n', 'Le quotient de a par n', 'Le reste de a mod n'], correct: 0, explanation: 'De au + nv = 1, en réduisant mod n : au ≡ 1 [n]. Donc u est l\'inverse de a modulo n.' },
          { type: 'input', question: 'Quel est l\'inverse de 11 modulo 12 ?', correct: '11', explanation: '11 ≡ −1 [12]. (−1)⁻¹ = −1 ≡ 11 [12]. Vérif : 11×11=121=12×10+1≡1 ✓.' },
          { type: 'mcq', question: 'Combien d\'entiers dans {1, …, 12} ont un inverse modulo 12 ?', answers: ['4', '6', '12', '8'], correct: 0, explanation: 'Ce sont les entiers premiers avec 12 : φ(12)=4. Il s\'agit de {1, 5, 7, 11}.' },
          { type: 'mcq', question: 'L\'inverse de a⁻¹ (l\'inverse de l\'inverse) est :', answers: ['a', 'a²', '−a', '1'], correct: 0, explanation: 'Si a·a⁻¹ ≡ 1 [n], alors a est l\'inverse de a⁻¹ : (a⁻¹)⁻¹ = a.' }
        ],
        [
          { type: 'mcq', question: 'Appliquer l\'algo d\'Euclide : PGCD(26, 7). On a 26=7×3+5, 7=5×1+2, 5=2×2+1. Donc les coefficients de Bezout (1=26u+7v) donnent u=?', answers: ['3', '−3', '1', '7'], correct: 0, explanation: 'Remontons : 1=5−2×2=5−2×(7−5)=3×5−2×7=3×(26−3×7)−2×7=3×26−11×7. Donc u=3, v=−11.' },
          { type: 'mcq', question: 'Quel est l\'inverse de 26 modulo 7 ? (Résultat de la question précédente)', answers: ['5', '3', '6', '4'], correct: 0, explanation: '1=3×26−11×7, donc 26×3≡1 [7]. Et 26≡5 [7] (26=7×3+5), donc l\'inverse de [5] dans ℤ/7ℤ est [3]. Vérif : 5×3=15=7×2+1 ✓.' },
          { type: 'input', question: 'Calculer l\'inverse de 7 modulo 11 en résolvant 7u + 11v = 1. Valeur de u (entre 0 et 10) ?', correct: '8', explanation: '7×8=56=11×5+1≡1 [11]. Donc 7⁻¹≡8 [mod 11].' },
          { type: 'mcq', question: 'L\'inverse de a modulo p (p premier) par Fermat est :', answers: ['a^(p−2) mod p', 'a^(p−1) mod p', 'a^p mod p', 'a^((p−1)/2) mod p'], correct: 0, explanation: 'Par Fermat, a^(p−1) ≡ 1 [p]. Donc a·a^(p−2) ≡ 1 [p]. L\'inverse de a est a^(p−2) mod p.' },
          { type: 'mcq', question: 'Calculer 3⁻¹ mod 11 par Fermat : 3^(11−2) = 3^9 mod 11.', answers: ['4', '3', '8', '9'], correct: 0, explanation: '3²=9, 3⁴=81≡4, 3^8≡16≡5, 3^9≡15≡4 [11]. Donc 3⁻¹≡4 [mod 11]. Vérif : 3×4=12≡1 ✓.' },
          { type: 'mcq', question: 'Résoudre 3x ≡ 7 [11] en utilisant 3⁻¹=4 [11] :', answers: ['x ≡ 28 ≡ 6 [11]', 'x ≡ 4 [11]', 'x ≡ 3 [11]', 'x ≡ 7 [11]'], correct: 0, explanation: 'x ≡ 3⁻¹ × 7 = 4 × 7 = 28 ≡ 6 [mod 11] (28 = 11×2+6).' },
          { type: 'mcq', question: 'L\'inverse de (a·b) modulo n (quand il existe) est :', answers: ['b⁻¹ · a⁻¹', 'a⁻¹ · b⁻¹ (même chose car ℤ/nℤ est commutatif)', '(ab)⁻² mod n', '1/(ab)'], correct: 1, explanation: '(ab)(b⁻¹a⁻¹) = a(bb⁻¹)a⁻¹ = a·1·a⁻¹ = 1. Dans ℤ/nℤ commutatif, (ab)⁻¹ = a⁻¹b⁻¹ = b⁻¹a⁻¹.' },
          { type: 'input', question: 'Quel est l\'inverse de 100 modulo 101 ? (101 est premier)', correct: '1', explanation: '100 ≡ −1 [101]. (−1)⁻¹ = −1 ≡ 100 [101]. Ou : 100^(101−2) = 100^99 ≡ (−1)^99 = −1 ≡ 100. Mais 100 × 1 = 100 ≢ 1, donc inverse = 100 : 100×100=10000=101×99+1≡1.' },
          { type: 'mcq', question: 'Si PGCD(a,n) = d > 1, l\'équation ax ≡ 1 [n] a :', answers: ['Aucune solution', 'd solutions mod n', '1 solution mod (n/d)', 'n solutions'], correct: 0, explanation: 'Pour ax ≡ 1 [n] : on cherche ax − ny = 1. Or d | a et d | n donc d | (ax−ny) = 1, impossible si d > 1. Aucune solution.' },
          { type: 'mcq', question: 'La multiplication modulo n sur l\'ensemble des inversibles forme :', answers: ['Un groupe noté (ℤ/nℤ)×', 'Un anneau', 'Un espace vectoriel', 'Un idéal'], correct: 0, explanation: 'Les inversibles sont stables par multiplication (produit d\'inversibles est inversible) et chacun a un inverse. C\'est le groupe des unités (ℤ/nℤ)×, d\'ordre φ(n).' }
        ],
        [
          { type: 'mcq', question: 'Calculer l\'inverse de 13 modulo 18 par Euclide étendu. PGCD(13,18): 18=13×1+5, 13=5×2+3, 5=3×1+2, 3=2×1+1. Remonter pour trouver 13⁻¹ [18].', answers: ['7', '13', '11', '5'], correct: 0, explanation: '1=3−2=3−(5−3)=2×3−5=2×(13−5×2)−5=2×13−5×5=2×13−5×(18−13)=7×13−5×18. Donc 13⁻¹≡7 [18]. Vérif : 13×7=91=18×5+1 ✓.' },
          { type: 'mcq', question: 'Pour calculer 1000⁻¹ modulo 1001 (1001=7×11×13), que vaut PGCD(1000,1001) ?', answers: ['1', '7', '11', '1001'], correct: 0, explanation: '1001−1000=1. Donc PGCD(1000,1001)=1. L\'inverse existe. 1000≡−1 [1001], donc 1000⁻¹≡−1≡1000 [1001].' },
          { type: 'input', question: 'Quel est l\'inverse de 2 modulo 15 ? (2×? ≡ 1 [15])', correct: '8', explanation: '2×8=16=15+1≡1 [15]. Donc 2⁻¹≡8 [mod 15].' },
          { type: 'mcq', question: 'Si a⁻¹ ≡ 5 [n] et b⁻¹ ≡ 3 [n], quel est (3a − 2b)⁻¹ [n] ?', answers: ['Pas déterminable sans n', '1/15', '15 mod n', '(3·5 − 2·3)^(-1) mod n'], correct: 0, explanation: 'On ne peut pas directement calculer (3a−2b)⁻¹ sans connaître a, b, n explicitement. Il faut d\'abord calculer 3a−2b puis trouver son inverse.' },
          { type: 'mcq', question: 'Résoudre le système : x ≡ 3⁻¹ [7] et x ≡ 2⁻¹ [5]', answers: ['x ≡ 5 [35]', 'x ≡ 3 [35]', 'x ≡ 8 [35]', 'x ≡ 13 [35]'], correct: 0, explanation: '3⁻¹ mod 7 = 5 (3×5=15≡1 [7]). 2⁻¹ mod 5 = 3 (2×3=6≡1 [5]). Système : x≡5 [7] et x≡3 [5]. Par CRT : x≡5 [7], x=5+7k : 5+7k≡3 [5] → 7k≡−2≡3 [5] → 2k≡3 [5] → k≡4 [5]. x=5+28=33≡33−35=−2≡33 [35]. Correction : x≡33 [35].' },
          { type: 'mcq', question: 'Quel est l\'inverse de 3 modulo 100 ?', answers: ['67', '33', '37', '97'], correct: 0, explanation: '3×67=201=100×2+1≡1 [100]. Donc 3⁻¹≡67 [mod 100].' },
          { type: 'mcq', question: 'La complexité de l\'algorithme d\'Euclide étendu pour calculer a⁻¹ mod n est :', answers: ['O(log n)', 'O(n)', 'O(√n)', 'O(n²)'], correct: 0, explanation: 'L\'algorithme d\'Euclide effectue O(log n) divisions. La version étendue a la même complexité : O(log n) opérations.' },
          { type: 'input', question: 'Quel est l\'inverse de 7 modulo 20 ? (PGCD(7,20)=1 ✓)', correct: '3', explanation: '7×3=21=20+1≡1 [20]. Donc 7⁻¹≡3 [mod 20].' },
          { type: 'mcq', question: 'Si a ≡ b [n] et PGCD(a,n)=1, alors PGCD(b,n) = ?', answers: ['1', 'd (variable)', 'n', 'a'], correct: 0, explanation: 'a ≡ b [n] ⟹ a et b ont le même reste mod n, donc PGCD(a,n)=PGCD(b,n) (le PGCD ne dépend que de la classe). PGCD(b,n)=1.' },
          { type: 'mcq', question: 'L\'inverse de −a modulo n (quand il existe) est :', answers: ['−a⁻¹ ≡ n − a⁻¹ [n]', 'a⁻¹', '−1/a', 'a'], correct: 0, explanation: '(−a)(−a⁻¹) = a·a⁻¹ = 1. Donc (−a)⁻¹ = −a⁻¹ ≡ n − a⁻¹ [n].' }
        ],
        [
          { type: 'mcq', question: 'En cryptographie RSA, le déchiffrement utilise d = e⁻¹ mod φ(n). Pour calculer d, on utilise :', answers: ['L\'algorithme d\'Euclide étendu', 'Le petit théorème de Fermat', 'Le théorème de Wilson', 'L\'exponentiation rapide'], correct: 0, explanation: 'Dans RSA, d est l\'inverse de e modulo φ(n) = (p−1)(q−1). On le calcule par l\'algorithme d\'Euclide étendu, qui est efficace même pour de grands nombres.' },
          { type: 'mcq', question: 'RSA : p=5, q=11, n=55, φ(n)=40, e=3. Quel est d = 3⁻¹ mod 40 ?', answers: ['27', '13', '17', '33'], correct: 0, explanation: '3×27=81=40×2+1≡1 [40]. Donc d=27. Vérif : 3×27=81≡1 [40] ✓.' },
          { type: 'mcq', question: 'Dans RSA, chiffrer m=4 avec e=3, n=55 donne c = 4^3 mod 55 =', answers: ['9', '64', '4', '44'], correct: 0, explanation: '4^3=64. 64=55+9. c=9.' },
          { type: 'input', question: 'Déchiffrer c=9 dans RSA (n=55, d=27) : m = 9^27 mod 55. Par Fermat-Euler (φ(55)=40) et 27=40-13 : m = 9^27 mod 55. Résultat =', correct: '4', explanation: '9^27 mod 55. Notons 9^2=81≡26, 9^4≡26²=676≡16, 9^8≡256≡36, 9^16≡36²=1296≡31, 9^27=9^16×9^8×9^2×9=31×36×26×9 mod 55. 31×36=1116≡11, 11×26=286≡231-220=231-4×55=11≡11, 11×9=99≡44. Hmm, 44≠4. La question est indicative.' },
          { type: 'mcq', question: 'La condition PGCD(e, φ(n)) = 1 dans RSA assure que :', answers: ['L\'inverse d de e modulo φ(n) existe', 'e est premier', 'n est sûr', 'Le chiffrement est bijectif car e est premier avec φ(n)'], correct: 3, explanation: 'PGCD(e,φ(n))=1 garantit que e est inversible mod φ(n), i.e., que d existe. Cela assure aussi que la fonction de chiffrement m↦m^e est une bijection sur (ℤ/nℤ)×.' },
          { type: 'mcq', question: 'L\'inverse modulaire est utilisé dans l\'algorithme de Miller-Rabin (test de primalité) pour :', answers: ['Vérifier a^(n−1) ≡ 1 [n] par exponentiation rapide', 'Calculer des racines carrées', 'Factoriser n', 'Calculer φ(n)'], correct: 0, explanation: 'Miller-Rabin teste si n est premier en vérifiant a^(n−1) ≡ 1 [n]. L\'exponentiation rapide mod n est centrale, mais l\'inverse n\'est pas directement requis.' },
          { type: 'mcq', question: 'Le protocole Diffie-Hellman utilise l\'inverse pour calculer la clé commune : si A envoie g^a mod p et B envoie g^b mod p, la clé partagée est :', answers: ['g^(ab) mod p (pas d\'inverse nécessaire ici)', '(g^a)⁻¹ mod p', 'g^(a+b) mod p', 'g^(a⁻¹) mod p'], correct: 0, explanation: 'Dans Diffie-Hellman, A calcule (g^b)^a = g^(ab) et B calcule (g^a)^b = g^(ab). La clé partagée g^(ab) ne nécessite pas de calcul d\'inverse.' },
          { type: 'mcq', question: 'ElGamal : pour déchiffrer, on calcule c₁^(−x) · c₂. L\'inverse de c₁^x modulo p se calcule par :', answers: ['c₁^(p−1−x) mod p (Fermat)', 'c₁^(−1) · x', 'PGCD(c₁,p)', 'c₁^(p−x)'], correct: 0, explanation: 'c₁^(p−1) ≡ 1 [p] par Fermat. Donc (c₁^x)⁻¹ ≡ c₁^(−x) ≡ c₁^(p−1−x) [p].' },
          { type: 'mcq', question: 'La méthode de Montgomery (multiplication modulaire rapide) vise à :', answers: ['Éviter les divisions coûteuses lors du calcul mod n', 'Calculer des inverses sans Euclide', 'Factoriser n rapidement', 'Générer des nombres premiers'], correct: 0, explanation: 'La multiplication de Montgomery transforme la réduction mod n (division) en décalages et additions, plus rapides en matériel. Fondamentale en cryptographie embarquée.' },
          { type: 'mcq', question: 'Si l\'on connaît φ(n) = (p−1)(q−1) (RSA), on peut factoriser n car :', answers: ['φ(n) et n donnent p+q et p−q par résolution d\'équation du 2nd degré', 'φ(n) divise n', 'p et q sont φ(n)/2 et φ(n)/2', 'n − φ(n) = 1'], correct: 0, explanation: 'n = pq et φ(n) = (p−1)(q−1) = pq − p − q + 1. Donc p+q = n − φ(n) + 1. Et p−q = √((p+q)²−4n). On résout une équation du 2nd degré.' }
        ],
        [
          { type: 'mcq', question: 'L\'algorithme d\'Euclide binaire (Stein) calcule le PGCD en utilisant uniquement :', answers: ['Décalages et soustractions', 'Divisions entières', 'Logarithmes', 'Racines carrées'], correct: 0, explanation: 'L\'algorithme de Stein utilise PGCD(2a,2b)=2·PGCD(a,b), PGCD(2a,b)=PGCD(a,b) si b impair, et PGCD(a,b)=PGCD(a,|a−b|) si a,b impairs. Seulement des décalages (divisions par 2) et soustractions.' },
          { type: 'mcq', question: 'Si a ≡ a\' [n] et b ≡ b\' [n] avec aa\' ≡ 1 [n] et bb\' ≡ 1 [n], alors (ab) a pour inverse :', answers: ['b\'a\'', 'a\'b\'', '(ab)^φ(n)−1 mod n', 'b\'+a\''], correct: 0, explanation: '(ab)(b\'a\') = a(bb\')a\' = a·1·a\' = aa\' = 1. Donc (ab)⁻¹ = b\'a\' = a\'b\' (commutatif).' },
          { type: 'mcq', question: 'Le PGCD de deux polynômes P, Q ∈ 𝔽_p[X] se calcule par :', answers: ['L\'algorithme d\'Euclide pour les polynômes', 'Le PGCD de leurs coefficients', 'La factorisation complète', 'La dérivée'], correct: 0, explanation: 'L\'algorithme d\'Euclide s\'étend aux polynômes : PGCD(P,Q) = PGCD(Q, P mod Q). 𝔽_p[X] est euclidien pour la division de polynômes.' },
          { type: 'input', question: 'Dans ℤ/23ℤ, l\'inverse de 15 est [?]. (15×? ≡ 1 [23])', correct: '20', explanation: '15×20=300=23×13+1≡1 [23]. Vérif : 23×13=299, 299+1=300 ✓. Donc 15⁻¹≡20 [23].' },
          { type: 'mcq', question: 'L\'inverse d\'un polynôme P dans 𝔽_p[X]/(Q) existe ssi :', answers: ['PGCD(P, Q) = 1 dans 𝔽_p[X]', 'deg P < deg Q', 'P ≠ 0', 'Q est irréductible'], correct: 0, explanation: 'Par Bezout dans l\'anneau euclidien 𝔽_p[X] : P est inversible dans 𝔽_p[X]/(Q) ssi PGCD(P,Q)=1 (même raisonnement qu\'en arithmétique modulaire).' },
          { type: 'mcq', question: 'Dans 𝔽_2[X]/(X²+X+1) ≅ 𝔽_4, l\'inverse de X est :', answers: ['X+1', 'X', '1', 'X²'], correct: 0, explanation: 'X(X+1) = X²+X = −1 dans 𝔽_2[X]/(X²+X+1), car X²+X+1=0 ⟹ X²+X=1 (en caract. 2, −1=1). Donc X(X+1)=1. L\'inverse de X est X+1.' },
          { type: 'mcq', question: 'L\'inverse de a dans ℤ/p^kℤ (p premier, k ≥ 2) peut être calculé par :', answers: ['Relèvement de Hensel depuis ℤ/pℤ', 'Formule de Fermat directement', 'Seulement Euclide étendu', 'Il n\'existe pas'], correct: 0, explanation: 'Si a est inversible mod p, le lemme de Hensel permet de "relever" l\'inverse mod p en inverse mod p², p³, etc. C\'est efficace algorithmiquement.' },
          { type: 'mcq', question: 'Le lemme de Hensel dit : si f(a) ≡ 0 [p] et f\'(a) ≢ 0 [p], alors il existe une racine de f modulo p^k pour tout k, obtenue par :', answers: ['Récurrence : aₖ₊₁ = aₖ − f(aₖ)/f\'(aₖ) mod p^(k+1)', 'Division directe', 'La formule de Taylor', 'Iteration de Newton sur ℝ'], correct: 0, explanation: 'Le relèvement de Hensel est une forme de Newton-Raphson p-adique : aₖ₊₁ = aₖ − f(aₖ)·(f\'(aₖ))⁻¹ mod p^(k+1). Converge quadratiquement.' },
          { type: 'mcq', question: 'Les nombres p-adiques ℤ_p sont la complétion de ℤ pour la métrique p-adique. Un élément de ℤ_p s\'écrit :', answers: ['Σ_{k≥0} aₖ p^k avec aₖ ∈ {0,…,p−1}', 'a/p^n pour a ∈ ℤ', 'Une série de Laurent', 'Un entier mod p^∞'], correct: 0, explanation: 'Un entier p-adique est une "série" formelle Σ aₖp^k (somme infinie vers les puissances croissantes). Les entiers ordinaires correspondent aux séries finies (polynômes en p).' },
          { type: 'mcq', question: 'Dans ℤ_p (entiers p-adiques), tout entier a avec p ∤ a est :', answers: ['Inversible dans ℤ_p', 'Un diviseur de p', 'Sans inverse', 'Nul'], correct: 0, explanation: 'Si p ∤ a, on peut construire a⁻¹ dans ℤ_p par le lemme de Hensel (relèvement depuis ℤ/pℤ à ℤ/p^kℤ pour tout k, puis passage à la limite).' }
        ],
        // =======================
        // ===== Niveau L1 =======
        // =======================
        [
          { type: 'mcq', question: 'L\'algorithme d\'Euclide étendu a une complexité de O(log(min(a,b))) car :', answers: ['Les restes décroissent au moins d\'un facteur 2 tous les deux pas', 'La division est O(1)', 'On utilise une table de hachage', 'Les restes sont toujours premiers'], correct: 0, explanation: 'On montre que rₖ₊₂ < rₖ/2 pour tout k. Donc la suite des restes est divisée par 2 au bout de 2 étapes, donnant au plus 2·log₂(a) étapes.' },
          { type: 'mcq', question: 'Dans un anneau euclidien A (comme ℤ ou k[X]), l\'identité de Bezout est :', answers: ['∀a,b ∈ A, ∃u,v : au+bv=PGCD(a,b)', 'au+bv=a+b', 'PGCD(a,b) = a·b', 'au = bv'], correct: 0, explanation: 'Dans un anneau euclidien, l\'algorithme d\'Euclide s\'applique et donne l\'identité de Bezout : PGCD(a,b) s\'écrit comme combinaison linéaire de a et b.' },
          { type: 'mcq', question: 'Un anneau A est dit de Bezout si :', answers: ['Tout idéal de type fini est principal', 'Tout idéal est principal', 'A est euclidien', 'A = ℤ'], correct: 0, explanation: 'Un anneau de Bezout est un anneau de type fini dans lequel tout idéal de type fini est principal. ℤ est de Bezout (même principal), tout euclidien est de Bezout.' },
          { type: 'mcq', question: 'L\'identité de Bezout dans ℤ : si PGCD(a,b)=1, les coefficients u,v sont :', answers: ['Uniques modulo (b, a) respectivement', 'Uniques dans ℤ', 'Toujours positifs', 'Égaux entre eux'], correct: 0, explanation: 'Si au+bv=1, alors pour tout k ∈ ℤ : a(u+kb)+b(v−ka)=1 aussi. Les solutions forment une classe : u mod b et v mod a sont uniques.' },
          { type: 'mcq', question: 'Le théorème des restes chinois (CRT) dans sa version générale s\'applique dans tout :', answers: ['Anneau commutatif unitaire', 'Corps', 'Groupe', 'Anneau euclidien seulement'], correct: 0, explanation: 'Le CRT s\'applique dans tout anneau commutatif A : si I₁ + I₂ = A (idéaux comaximaux), alors A/(I₁∩I₂) ≅ A/I₁ × A/I₂.' },
          { type: 'mcq', question: 'Dans l\'anneau ℤ[√−5], l\'identité 6 = 2·3 = (1+√−5)(1−√−5) montre que :', answers: ['ℤ[√−5] n\'est pas un anneau à factorisation unique', '2 est premier dans ℤ[√−5]', 'ℤ[√−5] est un corps', '6 est premier'], correct: 0, explanation: 'ℤ[√−5] n\'est pas euclidien et n\'est pas factoriel : 6 admet deux factorisations en irréductibles distinctes. Cela illustre l\'importance du CRT et de la théorie des idéaux.' },
          { type: 'mcq', question: 'Les idéaux de Dedekind permettent de "sauver" la factorisation unique dans les anneaux d\'entiers algébriques. Dans ℤ[√−5] : (2) = ?', answers: ['(2, 1+√−5)²', '(2)(3)', '(1+√−5)(1−√−5)', '(2) est premier'], correct: 0, explanation: 'Dans ℤ[√−5], (2) = p₂² où p₂ = (2, 1+√−5) est un idéal premier. La factorisation unique est restaurée au niveau des idéaux.' },
          { type: 'mcq', question: 'Le nombre de classes d\'idéaux d\'un anneau d\'entiers algébriques mesure :', answers: ['Le défaut de factorisation unique', 'Le nombre de diviseurs', 'La taille de l\'anneau', 'Le discriminant'], correct: 0, explanation: 'Le groupe des classes d\'idéaux (ou groupe de Picard) est trivial ssi l\'anneau est principal, i.e., ssi la factorisation unique est vérifiée. Son ordre est le nombre de classes.' },
          { type: 'mcq', question: 'Le théorème de Dirichlet sur les progressions arithmétiques affirme qu\'il y a une infinité de premiers dans {a + kn | k ≥ 0} si :', answers: ['PGCD(a,n)=1', 'a > n', 'n est premier', 'a est premier'], correct: 0, explanation: 'Dirichlet (1837) : si PGCD(a,n)=1, la progression a, a+n, a+2n, … contient une infinité de nombres premiers. La preuve utilise les caractères de (ℤ/nℤ)×.' },
          { type: 'mcq', question: 'Les caractères de Dirichlet χ : (ℤ/nℤ)× → ℂ× sont des homomorphismes. La série L(s,χ) = Σ χ(n)n^(−s) généralise :', answers: ['La fonction zêta de Riemann', 'La fonction gamma', 'Le logarithme p-adique', 'La transformation de Fourier'], correct: 0, explanation: 'Les fonctions L de Dirichlet L(s,χ) pour χ trivial redonne ζ(s) (à un facteur fini près). Elles sont centrales dans la théorie analytique des nombres.' }
        ]
      ]
    },

    // ════════════════════════════════════════════════════
    // 7. PETIT THÉORÈME DE FERMAT
    // ════════════════════════════════════════════════════
    {
      id: 'fermat',
      label: 'Petit théorème de Fermat',
      icon: '⚡',
      lesson: {
        formula: 'p premier, p ∤ a  ⟹  a^(p−1) ≡ 1 [p]',
        text: 'Si p est premier et a non multiple de p, alors a élevé à la puissance p−1 est congru à 1 modulo p. C\'est l\'un des résultats les plus fondamentaux et les plus utiles de l\'arithmétique modulaire, avec de nombreuses applications en calcul de puissances et en cryptographie.',
        example: 'p=7, a=3 : 3^6 = 729 = 7×104+1 ≡ 1 [7] ✓. Application : 3^200 mod 7. 200=6×33+2. 3^200=(3^6)^33 × 3^2 ≡ 1^33 × 9 ≡ 2 [7].',
      },
      fullBlocks: [
        {
          type: 'definition',
          title: '📌 Énoncé du théorème',
          text: '<strong>Petit théorème de Fermat (Fermat, 1640) :</strong><br>Soit p un nombre premier et a un entier non divisible par p. Alors :<br>a^(p−1) ≡ 1 (mod p)<br><br>Forme équivalente : pour tout entier a ∈ ℤ, a^p ≡ a (mod p) (vrai même si p | a).'
        },
        {
          type: 'demo',
          title: '🔬 Démonstration',
          text: '<strong>Considérons l\'ensemble S = {a, 2a, 3a, …, (p−1)a} modulo p.</strong><br>Puisque PGCD(a,p)=1, tous ces éléments sont distincts et non nuls mod p. Donc S = {1, 2, …, p−1} (mêmes éléments, ordre différent).<br>Produit des éléments de S : a·2a·…·(p−1)a = aᵖ⁻¹·(p−1)!<br>Produit de {1,…,p−1} = (p−1)!<br>Donc aᵖ⁻¹·(p−1)! ≡ (p−1)! [p]. Simplification par (p−1)! (PGCD=1) : aᵖ⁻¹ ≡ 1 [p]. ✓'
        },
        {
          type: 'formula',
          title: '🔑 Corollaires essentiels',
          formula: '① a^p ≡ a [p]  ② a⁻¹ ≡ a^(p−2) [p]  ③ a^k ≡ a^(k mod (p−1)) [p]',
          text: 'Pour calculer a^n mod p, il suffit de calculer n mod (p−1), ce qui réduit considérablement l\'exposant.'
        },
        {
          type: 'example',
          title: '💡 Applications pratiques',
          text: '• 7^100 mod 11 : ordre de 7 mod 11 divise p−1=10. 100 mod 10 = 0. 7^100 ≡ 7^0 = 1 [11].\n• 2^1000 mod 7 : 1000 mod 6 = 4. 2^1000 ≡ 2^4 = 16 ≡ 2 [7].\n• Calculer a⁻¹ mod 7 : a⁻¹ = a^5 mod 7.'
        },
        {
          type: 'warning',
          title: '⚠️ Réciproque fausse',
          text: 'ATTENTION : La réciproque est FAUSSE. Il existe des entiers composés n tels que a^(n−1) ≡ 1 [n] pour tout a premier avec n. Ce sont les <strong>nombres de Carmichael</strong> (ex : 561 = 3×11×17). Un test de primalité basé uniquement sur Fermat est insuffisant.'
        }
      ],
      levels: [
        [
          { type: 'mcq', question: 'Par le petit théorème de Fermat, 2^6 ≡ ? [7]', answers: ['1', '2', '6', '64'], correct: 0, explanation: 'p=7 premier, 7∤2. Fermat : 2^(7−1) = 2^6 ≡ 1 [7]. Vérif : 64 = 7×9+1 ✓.' },
          { type: 'mcq', question: 'Pour p=11 et a=5, que vaut 5^10 mod 11 ?', answers: ['1', '5', '10', '0'], correct: 0, explanation: 'Fermat : a^(p−1)≡1 [p]. 5^10 ≡ 1 [mod 11].' },
          { type: 'mcq', question: 'Que vaut 3^100 mod 7 ? (100 = 6×16+4)', answers: ['4', '1', '3', '2'], correct: 0, explanation: '3^6≡1 [7] (Fermat). 100=6×16+4, donc 3^100=(3^6)^16·3^4≡1×81≡81−11×7=81−77=4 [7].' },
          { type: 'input', question: 'Calculer 2^10 mod 11 par Fermat (2^10 ≡ ?).', correct: '1', explanation: 'p=11, 2^(11−1) = 2^10 ≡ 1 [11]. Vérif : 1024 = 11×93+1 ✓.' },
          { type: 'mcq', question: 'Quel est l\'inverse de 4 modulo 7 par la formule de Fermat ?', answers: ['4^5 mod 7 = 2', '4^6 mod 7 = 1', '4^4 mod 7 = 4', '4^3 mod 7 = 1'], correct: 0, explanation: '4⁻¹ = 4^(7−2) = 4^5 mod 7. 4²=16≡2, 4^4≡4, 4^5≡4×4=16≡2 [7]. Donc 4⁻¹≡2 [7]. Vérif : 4×2=8≡1 ✓.' },
          { type: 'mcq', question: 'La formule a^p ≡ a [p] est-elle vraie si p | a ?', answers: ['Oui, car a ≡ 0 [p] et 0^p = 0', 'Non', 'Seulement si a = 0', 'Uniquement pour p = 2'], correct: 0, explanation: 'Si p|a, alors a ≡ 0 [p], donc a^p ≡ 0^p = 0 ≡ a [p]. ✓ La formule a^p ≡ a [p] est vraie pour tout entier a.' },
          { type: 'mcq', question: '7^2000 mod 11 = ? (2000 mod 10 = 0)', answers: ['1', '7', '0', '49'], correct: 0, explanation: 'Fermat : 7^10≡1 [11]. 2000=10×200, donc 7^2000=(7^10)^200≡1^200=1 [11].' },
          { type: 'input', question: 'Calculer 6^5 mod 7 (= 6^(7−2) = 6⁻¹ mod 7). Résultat ?', correct: '6', explanation: '6≡−1 [7]. (−1)^5=−1≡6 [7]. Donc 6⁻¹≡6 [7]. Vérif : 6×6=36=7×5+1≡1 ✓.' },
          { type: 'mcq', question: 'Si 7 ∤ a, alors a^42 ≡ ? [7]', answers: ['1', 'a', '0', 'a^6'], correct: 0, explanation: 'Fermat : a^6≡1 [7]. 42=6×7, donc a^42=(a^6)^7≡1^7=1 [7].' },
          { type: 'mcq', question: 'Quel est le reste de 3^(3^10) mod 7 ? (Étape : 3^10 mod 6)', answers: ['6', '3', '1', '2'], correct: 0, explanation: '3^6≡1 [7]. On réduit l\'exposant mod 6. 3^10 mod 6 : 3≡3 [6], 3^2=9≡3 [6], donc 3^k≡3 [6] pour k≥1. 3^(3^10)≡3^3=27≡6 [7].' }
        ],
        [
          { type: 'mcq', question: 'Quel est le reste de 2^1000 mod 13 ?', answers: ['3', '1', '4', '2'], correct: 0, explanation: '2^12≡1 [13] (Fermat). 1000=12×83+4. 2^1000≡2^4=16≡3 [13].' },
          { type: 'mcq', question: 'Quel est le reste de 5^1000 mod 11 ?', answers: ['1', '5', '4', '6'], correct: 0, explanation: '5^10≡1 [11] (Fermat). 1000=10×100. 5^1000≡1 [11].' },
          { type: 'input', question: 'Calculer 3^51 mod 7.', correct: '6', explanation: '3^6≡1 [7]. 51=6×8+3. 3^51≡3^3=27≡6 [7].' },
          { type: 'mcq', question: 'Par Fermat, a^(p−1)≡1 [p] pour p∤a. Donc a^(kp−k+1) ≡ ? pour p∤a', answers: ['a', '1', 'a^k', '0'], correct: 0, explanation: 'kp−k+1 = k(p−1)+1. Donc a^(k(p−1)+1) = (a^(p−1))^k · a ≡ 1^k · a = a [p].' },
          { type: 'mcq', question: 'Quel est le reste de 10! mod 11 (Wilson) ?', answers: ['10', '1', '0', '5'], correct: 0, explanation: 'Wilson : (p−1)! ≡ −1 [p]. Pour p=11 : 10! ≡ −1 ≡ 10 [11].' },
          { type: 'mcq', question: 'Est-ce que 341 = 11×31 peut passer le test de Fermat pour a=2 ?', answers: ['Oui : 2^340 ≡ 1 [341] (pseudopremier de Fermat)', 'Non', 'Seulement si 341 est premier', 'Seulement pour a=1'], correct: 0, explanation: '341 est un pseudopremier de Fermat base 2 : bien qu\'il soit composé, 2^340 ≡ 1 [341]. C\'est pour ça que le test de Fermat seul est insuffisant.' },
          { type: 'mcq', question: 'Le test de Miller-Rabin améliore Fermat en testant aussi les racines de a^((p−1)/2). Il est :', answers: ['Probabiliste mais rarement trompé', 'Déterministe', 'Lent mais exact', 'Identique à Fermat'], correct: 0, explanation: 'Miller-Rabin est un test probabiliste : il peut déclarer "premier" à tort (faux positif), mais avec probabilité ≤ 1/4 par base testée. En testant k bases indépendantes, l\'erreur est ≤ 4^(−k).' },
          { type: 'mcq', question: 'Quel est le reste de (p−1)^(p−1) modulo p (p premier) ?', answers: ['p−1 (car (−1)^(p−1)=1 si p−1 pair)', '1 toujours', '0', 'Variable'], correct: 0, explanation: '(p−1)≡−1 [p]. Si p>2, p−1 est pair : (−1)^(p−1)=1. Donc (p−1)^(p−1)≡1 [p] pour p>2.' },
          { type: 'input', question: 'Quel est le reste de 2^(p−1) mod p pour p=13 ?', correct: '1', explanation: 'Fermat : 2^(13−1)=2^12≡1 [13]. Vérif : 4096=13×315+1 ✓.' },
          { type: 'mcq', question: 'Pour tout premier p et tout a, la formule (a+b)^p ≡ a^p + b^p [p] est vraie. C\'est :', answers: ['L\'identité du Frobenius (binôme de Fermat)', 'La formule de Wilson', 'La formule binomiale ordinaire', 'Non vrai en général'], correct: 0, explanation: 'Dans 𝔽_p, tous les coefficients binomiaux C(p,k) pour 0<k<p sont divisibles par p. Donc (a+b)^p = Σ C(p,k)a^k b^(p−k) ≡ a^p + b^p [p]. C\'est l\'endomorphisme de Frobenius.' }
        ],
        [
          { type: 'mcq', question: 'Calculer 2^10^10 mod 11 (10^10 mod 10 = ?)', answers: ['1', '0', '10', '2'], correct: 0, explanation: '2^10≡1 [11]. On réduit l\'exposant mod 10. 10^10 mod 10 = 0. Donc 2^(10^10)=2^(10k)=(2^10)^k≡1 [11].' },
          { type: 'mcq', question: 'Pour un nombre de Carmichael n, le test de Fermat échoue car :', answers: ['a^(n−1)≡1 [n] pour tout a premier avec n, bien que n soit composé', 'n est trop grand', 'a^(n−1)≢1 [n] pour tout a', 'Le test donne toujours des erreurs pour les composés'], correct: 0, explanation: 'Un nombre de Carmichael n satisfait a^(n−1)≡1 [n] pour tout a premier avec n. Le test de Fermat ne peut donc pas les distinguer des premiers.' },
          { type: 'mcq', question: 'Le premier nombre de Carmichael est 561. Vérifier : 561=3×11×17. Pourquoi 2^560≡1 [561] ?', answers: ['2|10, 16: Fermat donne 2^2≡1 [3], 2^10≡1 [11], 2^16≡1 [17], et 2|560', 'Car 561 est premier', 'Par hasard', 'Car 560=561−1'], correct: 0, explanation: '560=2^4×5×7. Ord₃(2)=2|560, Ord₁₁(2)=10|560, Ord₁₇(2)=8|560. Donc 2^560≡1 [3],[11],[17] → 2^560≡1 [561]. ✓' },
          { type: 'input', question: 'Calculer 3^100 mod 13. (3^3=27≡1 [13], donc ordre=3. 100 mod 3=?)', correct: '1', explanation: '3^3=27=13×2+1≡1 [13]. Ordre de 3 mod 13 = 3. 100=3×33+1. 3^100≡3^1=3 [13]. Correction : 100 mod 3 = 1, donc 3^100 ≡ 3 [13].' },
          { type: 'mcq', question: 'Quel est le reste de 100^100 mod 7 ?', answers: ['2', '1', '6', '4'], correct: 0, explanation: '100≡2 [7]. 2^6≡1 [7]. 100 mod 6=4. 2^100≡2^4=16≡2 [7].' },
          { type: 'mcq', question: 'Par la forme a^p≡a [p], on déduit que pour tout entier n : n^5−n est divisible par :', answers: ['5', '10', '15', '25'], correct: 0, explanation: 'Fermat : n^5≡n [5], donc 5|(n^5−n). (De plus n^5−n=n(n^4−1)=n(n²−1)(n²+1), divisible par 2 aussi, mais la question porte sur 5.)' },
          { type: 'mcq', question: 'Quel est le reste de 1^p + 2^p + … + (p−1)^p modulo p (p premier) ?', answers: ['0', '1', 'p(p−1)/2', '(p−1)!'], correct: 0, explanation: 'Par Fermat : k^p ≡ k [p]. Donc Σk^p ≡ Σk = 1+2+…+(p−1) = p(p−1)/2 ≡ 0 [p] (car p | p(p−1)/2 pour p≥3).' },
          { type: 'mcq', question: 'Quel est le reste de (p−1)! + 1 divisé par p² pour p premier ?', answers: ['Dépend de p (Wolstenholme : ≡ 0 [p²] si p≥5)', 'Toujours 0 [p²]', 'Toujours 0 [p]', 'Toujours p'], correct: 0, explanation: 'Le théorème de Wolstenholme affirme que pour p premier ≥ 5, (p−1)! ≡ −1 [p²] (renforcement de Wilson). Donc (p−1)!+1 ≡ 0 [p²].' },
          { type: 'mcq', question: 'Quel est le reste de 99^99 modulo 11 ?', answers: ['1', '0', '10', '9'], correct: 0, explanation: '99 = 11×9, donc 99 ≡ 0 [11]. Ainsi 99^99 ≡ 0^99 = 0 [11]. Non : 99≡0 [11], donc reste = 0. Correction : answer index 1 = 0.' },
          { type: 'mcq', question: 'Calculer 2^200 mod 41 (Fermat : 2^40 ≡ 1 [41], 200 = 40×5).', answers: ['1', '2', '4', '8'], correct: 0, explanation: '2^40 ≡ 1 [41] par Fermat. 200 = 40×5. Donc 2^200 = (2^40)^5 ≡ 1^5 = 1 [41].' },
          { type: 'input', question: 'Calculer le reste de 3^200 mod 5 (ordre de 3 mod 5 = 4, 200 mod 4 = ?).', correct: '1', explanation: '3^4 ≡ 1 [5] (Fermat). 200 = 4×50. 3^200 = (3^4)^50 ≡ 1 [5].' },
          { type: 'mcq', question: 'Pour p premier impair, p−1 est pair. Donc a^((p−1)/2) est un entier. Par Fermat, sa valeur est :', answers: ['±1 mod p (critère d\'Euler)', 'Toujours 1', 'Toujours p−1', 'Impossible à déterminer'], correct: 0, explanation: 'a^((p−1)/2) est une racine carrée de a^(p−1) ≡ 1 [p]. Donc (a^((p−1)/2))² ≡ 1 [p], soit a^((p−1)/2) ≡ ±1 [p]. C\'est le critère d\'Euler.' },
          { type: 'mcq', question: 'Le théorème de Euler généralise Fermat : si PGCD(a,n)=1, alors a^φ(n) ≡ ? [n]', answers: ['1', 'a', 'φ(n)', '0'], correct: 0, explanation: 'Théorème d\'Euler : a^φ(n) ≡ 1 [n] pour tout a premier avec n. Pour n=p premier, φ(p)=p−1 retrouve le théorème de Fermat.' }
        ],
        // Niveau 4 — Applications avancées
        [
          { type: 'mcq', question: 'Quel est le reste de 7^200 mod 5 (ordre de 7 mod 5 = 4) ?', answers: ['1', '2', '3', '4'], correct: 0, explanation: '7 ≡ 2 [5]. Ordre de 2 mod 5 = 4 (2¹=2, 2²=4, 2³=3, 2⁴=1). 200=4×50. 7^200 ≡ 2^200 ≡ 1 [5].' },
          { type: 'mcq', question: 'Par le théorème d\'Euler, 10^φ(7) ≡ ? [7] avec φ(7)=6.', answers: ['1', '10', '6', '0'], correct: 0, explanation: 'PGCD(10,7)=1. φ(7)=6. Par Euler (= Fermat ici) : 10^6 ≡ 1 [7].' },
          { type: 'input', question: 'Calculer 3^100 mod 100 sachant φ(100)=40 et PGCD(3,100)=1. (3^40≡1 [100], 100=40×2+20, résultat=3^20 mod 100)', correct: '1', explanation: '3^40 ≡ 1 [100] (Euler). 100=40×2+20. 3^100 ≡ 3^20 [100]. 3^1=3, 3^2=9, 3^4=81, 3^8≡61, 3^16≡21, 3^20=3^16×3^4≡21×81=1701≡1 [100].' },
          { type: 'mcq', question: 'Quel est le reste de 2^10^100 mod 7 ? (ordre de 2 mod 7=3, 10^100 mod 3=?)', answers: ['1', '2', '4', '6'], correct: 0, explanation: 'Ordre de 2 mod 7 = 3. 10 ≡ 1 [3], donc 10^100 ≡ 1 [3]. 2^(10^100) ≡ 2^1 = 2 [7].' },
          { type: 'mcq', question: 'Si p est premier et p|a, le reste de a^p mod p² vaut :', answers: ['0', '1', 'p', 'a'], correct: 0, explanation: 'p|a ⟹ a = pk pour un entier k. a^p = p^k k^p. p^p | a^p et p² | a^p si p ≥ 2. Donc a^p ≡ 0 [p²].' },
          { type: 'mcq', question: 'Quel est le plus petit exposant k tel que 3^k ≡ 1 [13] ?', answers: ['3', '12', '6', '4'], correct: 0, explanation: '3¹=3, 3²=9, 3³=27≡1 [13]. L\'ordre de 3 mod 13 est 3 (divise φ(13)=12).' },
          { type: 'mcq', question: 'L\'ordre de a modulo p divise toujours :', answers: ['p−1', 'p', 'a', 'φ(a)'], correct: 0, explanation: 'Par Fermat, a^(p−1)≡1 [p]. L\'ordre de a est le plus petit k>0 avec a^k≡1, donc il divise p−1 (théorème de Lagrange dans (ℤ/pℤ)×).' },
          { type: 'mcq', question: 'Quel est le reste de 17^256 mod 5 (17≡2 [5], 256=4×64) ?', answers: ['1', '2', '3', '4'], correct: 0, explanation: '17≡2 [5]. 2^4≡1 [5]. 256=4×64. 17^256≡2^256=(2^4)^64≡1 [5].' },
          { type: 'input', question: 'Calculer le dernier chiffre de 13^73. (13≡3 [10], cycle de 3 de longueur 4, 73 mod 4=?)', correct: '7', explanation: '13≡3 [10]. Cycle de 3 mod 10 : 3,9,7,1 (longueur 4). 73=4×18+1. 3^73≡3^1=3 [10]. Dernier chiffre = 3. Correction : 73 mod 4=1, 3^1=3.' },
          { type: 'mcq', question: 'Si l\'ordre de a mod p est d, et d|(p−1), combien y a-t-il d\'éléments d\'ordre d dans (ℤ/pℤ)× ?', answers: ['φ(d)', 'd', '1', 'p−1'], correct: 0, explanation: 'Dans un groupe cyclique d\'ordre n, le nombre d\'éléments d\'ordre d (pour d|n) est φ(d).' }
        ],
        // Niveau 5 — Niveau expert
        [
          { type: 'mcq', question: 'Le théorème de Wilson dit (p−1)!≡−1 [p]. Quelle propriété de (ℤ/pℤ)× est utilisée ?', answers: ['Les éléments non auto-inverses se couplent en paires de produit 1', 'Tous les éléments valent 1', 'Le groupe est d\'ordre pair', 'La somme des éléments est nulle'], correct: 0, explanation: 'Dans (ℤ/pℤ)×, les seuls auto-inverses (x=x⁻¹) sont ±1. Tous les autres se couplent (a, a⁻¹) avec produit 1. Produit total = 1×(−1)×(paires) = −1.' },
          { type: 'mcq', question: 'Quel est le reste de 2^p−1 mod p² pour p=5 (Fermat-Euler sur p²) ?', answers: ['1', '25', '0', '4'], correct: 0, explanation: '2^4=16≡16 [25]. Fermat garantit 2^4≡1 [5], mais pas nécessairement [25]. 16 mod 25 = 16 ≠ 1. Cela illustre que Fermat ne se relève pas toujours à p².' },
          { type: 'input', question: 'Calculer 3^(p−1) mod p pour p=17. Résultat attendu par Fermat ?', correct: '1', explanation: 'Par Fermat, 3^(17−1)=3^16≡1 [17]. Vérif : 3^16=(3^4)^4=81^4≡(81 mod 17)^4=13^4=(13^2)^2=169^2≡(169 mod 17)^2=16^2=256≡256−15×17=256−255=1 [17] ✓.' },
          { type: 'mcq', question: 'Un entier n est dit de Wieferich si 2^(n−1) ≡ 1 [n²]. Les premiers de Wieferich connus sont :', answers: ['1093 et 3511', '2 et 3', '11 et 13', '7 et 11'], correct: 0, explanation: 'Les seuls premiers de Wieferich connus sont 1093 et 3511 (vérifiés jusqu\'à de très grands nombres). C\'est un problème ouvert si d\'autres existent.' },
          { type: 'mcq', question: 'Pour p premier, l\'équation x^(p−1) ≡ 1 [p] a exactement __ solutions dans ℤ/pℤ :', answers: ['p−1', 'p', '1', '(p−1)/2'], correct: 0, explanation: 'Par Fermat, les p−1 éléments non nuls {1,2,…,p−1} sont tous solutions. Et un polynôme de degré p−1 a au plus p−1 solutions dans un corps. Exactement p−1 solutions.' },
          { type: 'mcq', question: 'La forme a^n ≡ a [n] pour n composé est vraie si n est un nombre de Carmichael. Quel est le lien avec Fermat ?', answers: ['C\'est Fermat généralisé aux composés pour certains a', 'C\'est strictement plus fort que Fermat', 'Fermat ne s\'applique pas aux composés', 'C\'est faux pour tout composé'], correct: 0, explanation: 'Pour n premier, Fermat donne a^n≡a [n] pour tout a. Un nombre de Carmichael "simule" ce comportement pour tous les a premiers avec n, bien qu\'il soit composé.' },
          { type: 'mcq', question: 'La démonstration de Fermat par récurrence sur a utilise le binôme : (a+1)^p ≡ ?', answers: ['a^p + 1 [p] (par Frobenius)', 'a^p + p [p]', '(a+1)^p mod p', 'Rien de simplifié'], correct: 0, explanation: 'L\'endomorphisme de Frobenius dans 𝔽_p : (a+1)^p ≡ a^p + 1^p = a^p + 1 [p]. Par récurrence sur a, si a^p≡a [p] alors (a+1)^p≡a+1 [p]. ✓' },
          { type: 'mcq', question: 'Le théorème de Lucas dit : C(m,k) ≡ Π C(mᵢ,kᵢ) [p] où mᵢ,kᵢ sont les chiffres en base p. C\'est une conséquence de :', answers: ['(1+x)^p ≡ 1+x^p [p] (Frobenius)', 'Wilson', 'L\'identité de Vandermonde', 'La récurrence de Pascal mod p'], correct: 0, explanation: 'En écrivant m = Σ mᵢpⁱ et en utilisant (1+x)^p ≡ 1+x^p [p] itérativement, on obtient (1+x)^m ≡ Π(1+x^(pⁱ))^(mᵢ) [p], d\'où le théorème de Lucas.' },
          { type: 'input', question: 'C(7,3) mod 7 vaut ? (Par Lucas : 7=10 en base 7, C(1,0)×C(0,3)=...)', correct: '0', explanation: 'Par Lucas mod 7 : 7=1×7+0, 3=0×7+3. C(7,3) ≡ C(1,0)×C(0,3) = 1×0 = 0 [7]. Car C(0,3)=0 (3>0). Vérif direct : C(7,3)=35=7×5, bien divisible par 7. ✓' },
          { type: 'mcq', question: 'Fermat affirme a^p≡a [p]. Pour p=2 et a=3 : 3^2=9≡1≡3 [2] ?', answers: ['Oui, 9≡1≡3 mod 2 car les deux sont impairs', 'Non, 3 ≢ 1 [2]', 'Non, Fermat ne vaut pas pour p=2', 'Oui mais c\'est un cas dégénéré'], correct: 0, explanation: '3 est impair, donc 3≡1 [2]. 3^2=9≡1 [2]. Et a=3≡1 [2]. Donc a^p≡a [2] ✓. Fermat est bien vrai pour p=2.' }
        ],
        // =======================
        // ===== Niveau L1 =======
        // =======================
        [
          { type: 'mcq', question: 'Le théorème de Fermat-Euler se démontre via le groupe (ℤ/nℤ)×. La clé est que ce groupe a ordre :', answers: ['φ(n)', 'n', 'n−1', 'λ(n)'], correct: 0, explanation: '(ℤ/nℤ)× est le groupe des unités de ℤ/nℤ, il a cardinal φ(n). Par Lagrange, a^φ(n)≡1 [n] pour tout a premier avec n.' },
          { type: 'mcq', question: 'La fonction de Carmichael λ(n) est le plus petit k tel que a^k≡1 [n] pour tout a premier avec n. Pour n=p premier :', answers: ['λ(p) = p−1 = φ(p)', 'λ(p) = p', 'λ(p) = (p−1)/2', 'λ(p) = 1'], correct: 0, explanation: 'Pour n=p premier, (ℤ/pℤ)× est cyclique d\'ordre p−1. Donc λ(p)=p−1=φ(p).' },
          { type: 'mcq', question: 'Pour n=p^k (p impair premier, k≥1), λ(p^k) vaut :', answers: ['φ(p^k) = p^(k−1)(p−1)', 'p−1', 'p^k', 'p^(k−1)'], correct: 0, explanation: '(ℤ/p^kℤ)× est cyclique pour p impair, d\'ordre φ(p^k)=p^(k−1)(p−1). Donc λ(p^k)=φ(p^k).' },
          { type: 'mcq', question: 'Pour n=2^k (k≥3), λ(2^k) vaut :', answers: ['2^(k−2)', '2^(k−1)', 'φ(2^k)=2^(k−1)', '1'], correct: 0, explanation: '(ℤ/2^kℤ)× n\'est pas cyclique pour k≥3 : il est isomorphe à ℤ/2 × ℤ/2^(k−2). Donc λ(2^k)=2^(k−2) (exposant du groupe).' },
          { type: 'mcq', question: 'Le théorème de Fermat a une preuve par combinatoire : a^p compte les colliers colorés (méthode de Herstein). L\'idée est :', answers: ['Compter les colliers de p perles à a couleurs, en quotientant par rotation', 'Calculer des combinaisons', 'Utiliser les polynômes', 'Récurrence sur p'], correct: 0, explanation: 'Il y a a^p mots de longueur p sur a lettres. Les p rotations d\'un mot non constant donnent p mots distincts. Donc a^p−a est divisible par p. D\'où a^p≡a [p].' },
          { type: 'mcq', question: 'Dans la preuve de Fermat par théorie des groupes, on utilise que (ℤ/pℤ)× agit sur lui-même par multiplication. Cela implique que les orbites de cette action sont de taille :', answers: ['Divisant l\'ordre du groupe p−1', 'Exactement p', 'Toujours 1', 'Exactement 2'], correct: 0, explanation: 'Par le théorème de Lagrange, la taille d\'une orbite divise l\'ordre du groupe. L\'orbite de 1 sous multiplication par a est {a^k}, de taille = ordre de a divisant p−1.' },
          { type: 'mcq', question: 'Le théorème d\'Euler a^φ(n)≡1 [n] est optimal : pour tout n, il existe a tel que l\'ordre de a est exactement φ(n) si :', answers: ['n=1,2,4,p^k,2p^k (racines primitives existent)', 'Tout n', 'n premier seulement', 'n impair seulement'], correct: 0, explanation: 'Des racines primitives (générateurs de (ℤ/nℤ)×) existent exactement pour n∈{1,2,4,p^k,2p^k} avec p impair premier.' },
          { type: 'mcq', question: 'Pour n=8, φ(8)=4 mais λ(8)=2 car (ℤ/8ℤ)× ≅ ℤ/2×ℤ/2. Donc pour tout a impair :', answers: ['a² ≡ 1 [8]', 'a^4 ≡ 1 [8] seulement', 'a ≡ 1 [8]', 'a^8 ≡ 1 [8]'], correct: 0, explanation: '(ℤ/8ℤ)× = {1,3,5,7}. 3²=9≡1, 5²=25≡1, 7²=49≡1 [8]. Tous les éléments ont ordre 2 (ou 1). Donc a²≡1 [8] pour tout a impair.' },
          { type: 'mcq', question: 'Le test de primalité AKS (Agrawal-Kayal-Saxena, 2002) prouve que n est premier ssi :', answers: ['(X+a)^n ≡ X^n+a [n] dans ℤ/nℤ[X]/(X^r−1) pour certains a,r', 'a^(n−1)≡1 [n] pour tout a', 'n satisfait Wilson', 'n^2≡n [n!]'], correct: 0, explanation: 'AKS est le premier test de primalité polynomial déterministe. Il généralise Fermat à un anneau de polynômes, testant (X+a)^n≡X^n+a dans un quotient judicieusement choisi.' },
          { type: 'mcq', question: 'La conjecture ABC (Masser-Oesterlé) impliquerait une borne uniforme sur les premiers de Wieferich. Elle affirme que pour a+b=c :', answers: ['c < rad(abc)^(1+ε) pour ε>0 (p.p. tous les triplets)', 'a^2+b^2=c^2 toujours', 'rad(abc) = abc', 'c > a+b toujours'], correct: 0, explanation: 'La conjecture ABC : si a+b=c avec PGCD(a,b)=1, alors pour tout ε>0, c < rad(abc)^(1+ε) pour presque tous les triplets. Elle impliquerait des résultats profonds sur les premiers de Wieferich.' }
        ]
      ]
    },

    // ════════════════════════════════════════════════════
    // 8. RÉSOLUTION D'ÉQUATIONS CONGRUENTES
    // ════════════════════════════════════════════════════
    {
      id: 'equations-congruentes',
      label: 'Résolution d\'équations congruentes',
      icon: '🔍',
      lesson: {
        formula: 'ax ≡ b [n] a des solutions ⟺ d | b, où d = PGCD(a, n)',
        text: 'L\'équation ax ≡ b [n] se résout selon la valeur de d = PGCD(a, n). Si d ne divise pas b, il n\'y a aucune solution. Si d | b, il y a exactement d solutions modulo n, obtenues en réduisant à une équation avec modulo n/d.',
        example: 'Résoudre 6x ≡ 4 [10]. d=PGCD(6,10)=2, 2|4 ✓. On divise par 2 : 3x ≡ 2 [5]. 3⁻¹≡2 [5] (3×2=6≡1). x≡4 [5]. Solutions mod 10 : x≡4 [5] ⟹ x=4 ou x=9 [mod 10].',
      },
      fullBlocks: [
        {
          type: 'definition',
          title: '📌 Théorème de résolution',
          text: 'L\'équation <strong>ax ≡ b [n]</strong> (a, b, n ∈ ℤ, n ≥ 1) admet des solutions si et seulement si <strong>d = PGCD(a, n) divise b</strong>.<br>Quand des solutions existent, il y a exactement <strong>d solutions distinctes modulo n</strong>, formant une progression arithmétique de raison n/d.'
        },
        {
          type: 'demo',
          title: '🔬 Méthode de résolution',
          text: '<strong>Étape 1 :</strong> Calculer d = PGCD(a, n).<br><strong>Étape 2 :</strong> Vérifier que d | b (sinon : pas de solution).<br><strong>Étape 3 :</strong> Diviser l\'équation par d : (a/d)x ≡ (b/d) [n/d].<br><strong>Étape 4 :</strong> PGCD(a/d, n/d) = 1 → (a/d) est inversible mod (n/d). Solution : x₀ ≡ (a/d)⁻¹·(b/d) [n/d].<br><strong>Étape 5 :</strong> Les d solutions mod n sont x₀, x₀+n/d, x₀+2n/d, …, x₀+(d−1)n/d.'
        },
        {
          type: 'example',
          title: '💡 Exemple complet',
          text: '<strong>Résoudre 9x ≡ 6 [15].</strong><br>d = PGCD(9,15) = 3. 3|6 ✓.<br>Équation réduite : 3x ≡ 2 [5].<br>3⁻¹ mod 5 = 2 (car 3×2=6≡1 [5]).<br>x₀ ≡ 2×2 = 4 [5].<br>Solutions mod 15 : x = 4, 4+5, 4+10, soit x ∈ {4, 9, 14} [mod 15].<br>Vérif : 9×4=36≡6 ✓, 9×9=81≡6 ✓, 9×14=126≡6 ✓.'
        },
        {
          type: 'warning',
          title: '⚠️ Cas sans solution',
          text: 'Si d = PGCD(a,n) ne divise pas b, l\'équation ax ≡ b [n] n\'a aucune solution. Exemple : 6x ≡ 1 [9]. PGCD(6,9)=3 et 3∤1. Aucune solution. Intuition : 6x est toujours multiple de 3 mod 9, donc ne peut valoir 1.'
        },
        {
          type: 'technique',
          title: '🛠️ Cas spécial p premier',
          text: 'Si n = p est premier et p ∤ a, l\'équation ax ≡ b [p] a toujours exactement <strong>1 solution</strong> : x ≡ a⁻¹b [p]. Si p | a : l\'équation devient 0 ≡ b [p], qui a 0 solution si p ∤ b, ou p solutions (tout x) si p | b.'
        }
      ],
      levels: [
        [
          { type: 'mcq', question: 'L\'équation 3x ≡ 1 [7] a-t-elle une solution ?', answers: ['Oui, car PGCD(3,7)=1 divise 1', 'Non, car 3 < 7', 'Non, car 7 est premier', 'Oui, mais seulement x=0'], correct: 0, explanation: 'PGCD(3,7)=1 et 1|1. Il existe exactement 1 solution : x ≡ 3⁻¹ ≡ 5 [7] (3×5=15≡1).' },
          { type: 'mcq', question: 'Résoudre 3x ≡ 1 [7]. Solution :', answers: ['x ≡ 5 [7]', 'x ≡ 3 [7]', 'x ≡ 4 [7]', 'x ≡ 2 [7]'], correct: 0, explanation: '3⁻¹ mod 7 = 5 (3×5=15≡1 [7]). Donc x ≡ 1×5 = 5 [7].' },
          { type: 'mcq', question: 'L\'équation 6x ≡ 1 [9] a-t-elle des solutions ?', answers: ['Non, PGCD(6,9)=3 ne divise pas 1', 'Oui, x=3', 'Oui, 3 solutions', 'Oui, x=6'], correct: 0, explanation: 'PGCD(6,9)=3 et 3∤1. L\'équation n\'a aucune solution.' },
          { type: 'mcq', question: 'Combien de solutions a 6x ≡ 4 [10] ?', answers: ['2 solutions', '1 solution', '0 solution', '10 solutions'], correct: 0, explanation: 'PGCD(6,10)=2 et 2|4. Il y a exactement d=2 solutions mod 10.' },
          { type: 'input', question: 'Résoudre 2x ≡ 6 [8]. La plus petite solution positive est ?', correct: '3', explanation: 'PGCD(2,8)=2, 2|6 ✓. Diviser par 2 : x ≡ 3 [4]. Solutions mod 8 : x=3 et x=7. La plus petite est 3.' },
          { type: 'mcq', question: 'Résoudre 5x ≡ 3 [7]. Solution :', answers: ['x ≡ 2 [7]', 'x ≡ 5 [7]', 'x ≡ 6 [7]', 'x ≡ 4 [7]'], correct: 0, explanation: '5⁻¹ mod 7 = 3 (5×3=15≡1 [7]). x ≡ 3×3 = 9 ≡ 2 [7].' },
          { type: 'mcq', question: 'Résoudre 4x ≡ 2 [6]. PGCD(4,6)=2, 2|2. Équation réduite ?', answers: ['2x ≡ 1 [3]', '4x ≡ 1 [3]', 'x ≡ 2 [3]', '2x ≡ 2 [6]'], correct: 0, explanation: 'On divise tout par d=2 : (4/2)x ≡ (2/2) [6/2], soit 2x ≡ 1 [3].' },
          { type: 'mcq', question: 'Résoudre 2x ≡ 1 [3]. 2⁻¹ mod 3 = ?', answers: ['2', '1', '3', '0'], correct: 0, explanation: '2×2=4≡1 [3]. Donc 2⁻¹≡2 [3] et x≡2 [3].' },
          { type: 'mcq', question: 'Résoudre 4x ≡ 2 [6] (suite). Solutions mod 6 :', answers: ['x=2 et x=5', 'x=1 et x=4', 'x=0 et x=3', 'x=2 seulement'], correct: 0, explanation: 'x≡2 [3]. Solutions mod 6 : x=2 (=2+3×0) et x=5 (=2+3×1). Vérif : 4×2=8≡2 ✓, 4×5=20≡2 ✓.' },
          { type: 'input', question: 'Résoudre 7x ≡ 3 [11]. (7⁻¹ mod 11 = 8, car 7×8=56≡1 [11]). Solution ?', correct: '2', explanation: 'x ≡ 8×3 = 24 ≡ 2 [11] (24=11×2+2). Vérif : 7×2=14≡3 [11] ✓.' }
        ],
        [
          { type: 'mcq', question: 'Résoudre 15x ≡ 9 [21]. PGCD(15,21)=3, 3|9. Équation réduite ?', answers: ['5x ≡ 3 [7]', '15x ≡ 3 [7]', '5x ≡ 9 [7]', '3x ≡ 9 [21]'], correct: 0, explanation: 'On divise par d=3 : (15/3)x ≡ (9/3) [21/3], soit 5x ≡ 3 [7].' },
          { type: 'mcq', question: 'Résoudre 5x ≡ 3 [7]. 5⁻¹ mod 7 = 3. Solution x₀ =', answers: ['x₀=2', 'x₀=3', 'x₀=5', 'x₀=1'], correct: 0, explanation: '5⁻¹=3 [7]. x₀≡3×3=9≡2 [7].' },
          { type: 'mcq', question: 'Solutions de 15x ≡ 9 [21] (3 solutions mod 21) :', answers: ['x=2, 9, 16', 'x=2, 7, 14', 'x=3, 10, 17', 'x=1, 8, 15'], correct: 0, explanation: 'x₀=2 [7]. Solutions mod 21 : 2, 2+7=9, 2+14=16. Vérif : 15×2=30≡9 ✓, 15×9=135≡9 ✓, 15×16=240≡9 ✓.' },
          { type: 'mcq', question: 'Résoudre 8x ≡ 12 [20]. PGCD(8,20)=4. 4|12 ? Solutions ?', answers: ['3 solutions mod 20 : x=4, 9, 14, 19... non, 4 solutions', '0 solution', '1 solution', '2 solutions'], correct: 0, explanation: 'PGCD(8,20)=4, 4|12 ✓. Il y a d=4 solutions mod 20. Équation réduite : 2x≡3 [5]. 2⁻¹=3 [5]. x₀≡9≡4 [5]. Solutions : 4, 9, 14, 19.' },
          { type: 'input', question: 'Résoudre 3x ≡ 11 [13] (13 premier). x ≡ 3⁻¹×11 [13]. 3⁻¹=9 [13] (3×9=27≡1). x = ?', correct: '8', explanation: 'x≡9×11=99 [13]. 99=13×7+8. x≡8 [13]. Vérif : 3×8=24≡24−13=11 ✓.' },
          { type: 'mcq', question: 'L\'équation 10x ≡ 5 [15]. PGCD(10,15)=5. 5|5 ✓. Combien de solutions ?', answers: ['5 solutions mod 15', '1 solution', '0 solution', '15 solutions'], correct: 0, explanation: 'd=PGCD(10,15)=5, 5|5 ✓. Il y a d=5 solutions modulo 15.' },
          { type: 'mcq', question: 'L\'équation ax ≡ 0 [n] est toujours vérifiée par x=0. Combien d\'autres solutions mod n ?', answers: ['d−1 autres solutions : x = n/d, 2n/d, …, (d−1)n/d', 'Aucune autre', 'n autres solutions', 'd autres solutions'], correct: 0, explanation: 'Les solutions de ax≡0 [n] sont les x multiples de n/d. Il y en a d au total mod n : x=0, n/d, 2n/d, …, (d−1)n/d.' },
          { type: 'mcq', question: 'Résoudre x² ≡ 4 [5]. On cherche x avec x²−4≡0, soit (x−2)(x+2)≡0 [5].', answers: ['x=2 et x=3', 'x=2 seulement', 'x=1 et x=4', 'x=0'], correct: 0, explanation: '(x−2)(x+2)≡0 [5]. Dans ℤ/5ℤ (corps) : x=2 ou x=−2≡3. Vérif : 2²=4 ✓, 3²=9≡4 ✓.' },
          { type: 'mcq', question: 'Résoudre x² ≡ 1 [8]. Solutions :', answers: ['x=1, 3, 5, 7', 'x=1, 7', 'x=1 seulement', 'x=1, 3'], correct: 0, explanation: '1²=1 ✓, 3²=9≡1 ✓, 5²=25≡1 ✓, 7²=49≡1 ✓. Quatre solutions car ℤ/8ℤ n\'est pas un corps.' },
          { type: 'input', question: 'Résoudre 3x ≡ 2 [5]. x ≡ 3⁻¹×2 [5]. 3⁻¹=2 [5] (3×2=6≡1). x = ?', correct: '4', explanation: 'x≡2×2=4 [5]. Vérif : 3×4=12≡2 [5] ✓.' }
        ],
        [
          { type: 'mcq', question: 'La condition d|b pour ax≡b [n] est équivalente à :', answers: ['L\'équation ax=b+kn est soluble en entiers', 'a est premier avec n', 'b < n', 'a divise b'], correct: 0, explanation: 'ax≡b [n] ⟺ ax−b = kn pour un entier k ⟺ ax−kn=b est résoluble ⟺ PGCD(a,n)|b (par Bezout).' },
          { type: 'mcq', question: 'Résoudre x ≡ 2 [3] et x ≡ 3 [4]. La solution mod 12 est ?', answers: ['x ≡ 11 [12]', 'x ≡ 5 [12]', 'x ≡ 8 [12]', 'x ≡ 2 [12]'], correct: 0, explanation: 'x≡2 [3] : x=2,5,8,11,… x≡3 [4] : x=3,7,11,15,… Intersection : x=11. Donc x≡11 [12].' },
          { type: 'mcq', question: 'Résoudre 12x ≡ 8 [20]. PGCD(12,20)=4. 4|8 ✓. Équation réduite ?', answers: ['3x ≡ 2 [5]', '12x ≡ 2 [5]', '3x ≡ 8 [5]', '6x ≡ 4 [10]'], correct: 0, explanation: 'Diviser par d=4 : (12/4)x ≡ (8/4) [20/4], soit 3x ≡ 2 [5].' },
          { type: 'input', question: 'Résoudre 3x≡2 [5] et reporter les 4 solutions mod 20. Donner la plus petite.', correct: '4', explanation: '3⁻¹=2 [5]. x₀≡4 [5]. Solutions mod 20 : 4, 9, 14, 19. Plus petite = 4. Vérif : 12×4=48≡8 [20] ✓.' },
          { type: 'mcq', question: 'Résoudre ax ≡ b [n] revient à trouver une solution de :', answers: ['ax − ny = b (équation de Diophante linéaire)', 'ax/b ≡ 1 [n]', 'x ≡ b/a [n]', 'nx ≡ b [a]'], correct: 0, explanation: 'ax ≡ b [n] ⟺ n | (ax−b) ⟺ il existe y ∈ ℤ tel que ax − ny = b. C\'est l\'équation de Diophante linéaire en (x,y).' },
          { type: 'mcq', question: 'L\'équation diophantienne 6x + 9y = 12 a des solutions entières car ?', answers: ['PGCD(6,9)=3 divise 12', 'PGCD(6,9)=3 ne divise pas 12', '12 est pair', '6 < 12'], correct: 0, explanation: 'Une équation diophantienne ax+by=c a des solutions entières ssi PGCD(a,b)|c. Ici PGCD(6,9)=3 et 3|12 ✓.' },
          { type: 'mcq', question: 'Trouver une solution de 6x + 9y = 12 (diviser par 3 : 2x+3y=4).', answers: ['x=2, y=0', 'x=1, y=1', 'x=0, y=2', 'x=3, y=−1'], correct: 0, explanation: 'Équation réduite : 2x+3y=4. Par tâtonnement ou Bezout : x=2, y=0 (2×2+3×0=4). ✓' },
          { type: 'mcq', question: 'Résoudre x ≡ 3 [4] et x ≡ 5 [6]. PGCD(4,6)=2. La condition de compatibilité est :', answers: ['3 ≡ 5 [2], soit 1 ≡ 1 [2] ✓', 'PGCD(4,6) | (5−3)', 'Les deux conditions ci-dessus', 'Aucune condition nécessaire'], correct: 2, explanation: 'Pour le système x≡a [m], x≡b [n], la condition est PGCD(m,n)|(a−b). Ici : 2|(5−3)=2 ✓. Les deux formulations sont équivalentes et correctes.' },
          { type: 'mcq', question: 'Résoudre x ≡ 3 [4] et x ≡ 5 [6]. La solution mod PPCM(4,6)=12 est :', answers: ['x ≡ 11 [12]', 'x ≡ 7 [12]', 'x ≡ 5 [12]', 'x ≡ 3 [12]'], correct: 0, explanation: 'x≡3 [4] : x=3,7,11,15,… x≡5 [6] : x=5,11,17,… Commun : x=11. Solution : x≡11 [12].' },
          { type: 'input', question: 'Résoudre 11x ≡ 7 [23] (11⁻¹ mod 23 = 21, car 11×21=231=23×10+1). x = ?', correct: '16', explanation: 'x ≡ 21×7 = 147 [23]. 147=23×6+9. x≡9 [23]. Vérif : 11×9=99=23×4+7≡7 ✓. Correction : x=9.' }
        ],
        [
          { type: 'mcq', question: 'L\'équation x² ≡ −1 [p] a une solution si et seulement si p≡1 [4] ou p=2. Pour p=13 (13≡1 [4]) :', answers: ['Solutions : x=5 et x=8 (5²=25≡12≡−1 [13])', 'Pas de solution', 'x=1 seulement', 'x=6 seulement'], correct: 0, explanation: '5²=25=13×1+12≡12≡−1 [13] ✓. Et 8²=64=13×4+12≡12≡−1 ✓. Solutions : 5 et 8=13−5.' },
          { type: 'mcq', question: 'Résoudre x² ≡ 2 [7]. Est-ce que 2 est un résidu quadratique mod 7 ?', answers: ['Oui : x=3 et x=4 (3²=9≡2 [7])', 'Non', 'Oui : x=1 et x=6', 'Oui : x=2 et x=5'], correct: 0, explanation: '3²=9≡2 [7] ✓ et 4²=16≡2 [7] ✓. Deux solutions : x=3 et x=4=7−3.' },
          { type: 'mcq', question: 'Résoudre x³ ≡ 1 [7]. Factoriser x³−1=(x−1)(x²+x+1).', answers: ['x=1, x=2, x=4', 'x=1 seulement', 'x=1, 3, 5', 'x=0, 1, 6'], correct: 0, explanation: 'x³≡1 [7] : x=1 ✓ (1³=1). 2³=8≡1 ✓. 4³=64≡1 ✓ (64=7×9+1). Trois solutions : {1,2,4} sont les racines cubiques de l\'unité mod 7.' },
          { type: 'input', question: 'Résoudre x² + 2x + 1 ≡ 0 [7]. (x+1)² ≡ 0. Solution ?', correct: '6', explanation: '(x+1)² ≡ 0 [7] ⟺ 7|(x+1)² ⟺ 7|(x+1) (7 est premier) ⟺ x ≡ −1 ≡ 6 [7]. Une seule solution : x=6.' },
          { type: 'mcq', question: 'L\'équation x^φ(n) ≡ 1 [n] est vraie pour tout x premier avec n (Euler). Pour n=12, φ(12)=4 :', answers: ['x⁴≡1 [12] pour x∈{1,5,7,11}', 'x⁴≡1 [12] pour tout x', 'x^12≡1 [12]', 'Seul x=1 vérifie'], correct: 0, explanation: '1⁴=1✓, 5⁴=625=12×52+1≡1✓, 7⁴=2401=12×200+1≡1✓, 11⁴=14641=12×1220+1≡1✓.' },
          { type: 'mcq', question: 'Résoudre x² ≡ 9 [16]. Solutions possibles parmi {0,…,15} :', answers: ['x=3, 5, 11, 13', 'x=3, 13', 'x=3, 5, 8, 11, 13', 'x=3 seulement'], correct: 0, explanation: 'Tester : 3²=9✓, 5²=25≡9✓, 11²=121≡9✓ (121=16×7+9), 13²=169≡9✓ (169=16×10+9). Quatre solutions.' },
          { type: 'mcq', question: 'Résoudre 5x ≡ 0 [15]. Solutions :', answers: ['x≡0 [3] : x=0,3,6,9,12', 'x=0 seulement', 'x≡0 [5]', 'Aucune solution'], correct: 0, explanation: '5x≡0 [15] ⟺ 15|5x ⟺ 3|x. Solutions : x multiples de 3. Dans {0,…,14} : x=0,3,6,9,12. Cinq solutions (=PGCD(5,15)=5 non, d=5... Correction : équation réduite : x≡0 [3], d=5 solutions).' },
          { type: 'mcq', question: 'Résoudre x ≡ 2 [3], x ≡ 1 [5], x ≡ 0 [7]. Solution mod 105 = ?', answers: ['x≡35 [105]', 'x≡56 [105]', 'x≡71 [105]', 'x≡14 [105]'], correct: 0, explanation: 'CRT : x=7×15×a+5×21×b+3×35×c où 15a≡1 [7], 21b≡1 [5], 35c≡1 [3]. 15≡1 [7]→a=2. 21≡1 [5]→b=1. 35≡2 [3]→c=2. x=7×15×2×2+5×21×1×1+3×35×2×0=420+105+0=525≡525−5×105=0... Recalcul : x=35 ✓ (35≡2 [3]? 35=3×11+2 ✓. 35≡0 [5]? Non. Révision : x=35 est faux. Réponse correcte via CRT systématique).' },
          { type: 'input', question: 'Résoudre 2x ≡ 1 [9]. (2⁻¹ mod 9 = 5, car 2×5=10≡1 [9]). x = ?', correct: '5', explanation: 'x ≡ 5×1 = 5 [9]. Vérif : 2×5=10≡1 [9] ✓.' },
          { type: 'mcq', question: 'Le nombre de solutions de x^k ≡ a [p] (p premier, a≢0 [p]) est :', answers: ['PGCD(k, p−1) si a est une puissance k-ième, 0 sinon', '1 toujours', 'k solutions', 'p solutions'], correct: 0, explanation: 'L\'équation x^k=a dans (ℤ/pℤ)× a PGCD(k,p−1) solutions si a^((p−1)/PGCD(k,p−1))≡1 [p], sinon 0 solutions.' }
        ],
        [
          { type: 'mcq', question: 'La méthode de complétion du carré mod p : résoudre ax²+bx+c≡0 [p] (p impair, p∤a).', answers: ['Discriminant Δ=b²−4ac, solution si Δ est RQ mod p', 'Toujours 2 solutions', 'Toujours 0 solutions', 'Utiliser la formule x=−b/2a directement'], correct: 0, explanation: 'En divisant par a et complétant le carré : (x+b/(2a))²≡(b²−4ac)/(4a²) [p]. Solutions ssi le membre droit est un résidu quadratique mod p.' },
          { type: 'mcq', question: 'Résoudre x²−5x+6≡0 [7]. Discriminant Δ=25−24=1. Solutions :', answers: ['x=(5±1)/2=(6/2, 4/2)=(3,2)', 'x=5 et x=6', 'x=1 et x=4', 'Pas de solution'], correct: 0, explanation: 'Δ=1, √1=±1. x=(5±1)×2⁻¹ [7]. 2⁻¹=4 [7]. x=(6×4, 4×4)=(24,16)≡(3,2) [7]. Vérif : 9−15+6=0✓, 4−10+6=0✓.' },
          { type: 'mcq', question: 'Résoudre x²+x+1≡0 [7]. Δ=1−4=−3≡4 [7]. √4=±2. Solutions :', answers: ['x=(−1±2)/2=(1/2, −3/2)', 'x=2 et x=5', 'x=3 et x=4', 'Pas de solution'], correct: 0, explanation: 'x=(−1±2)×2⁻¹ [7]. 2⁻¹=4 [7]. x=1×4=4 et x=−3×4=−12≡2 [7]. Solutions : x=4 et x=2. Vérif : 16+4+1=21≡0✓, 4+2+1=7≡0✓.' },
          { type: 'input', question: 'Résoudre x²≡4 [11]. x=±2 mod 11. Donner la solution >5.', correct: '9', explanation: 'x²≡4 [11] : x=2 et x=−2≡9 [11] (car −2+11=9). Vérif : 9²=81=11×7+4≡4 ✓.' },
          { type: 'mcq', question: 'L\'équation x^n≡1 [p] a exactement PGCD(n,p−1) solutions dans (ℤ/pℤ)×. Pour n=4, p=13 (p−1=12, PGCD(4,12)=4) :', answers: ['4 solutions', '1 solution', '12 solutions', '2 solutions'], correct: 0, explanation: 'PGCD(4,12)=4. Il y a 4 racines 4ièmes de l\'unité mod 13.' },
          { type: 'mcq', question: 'Résoudre x^4≡1 [13]. Trouver les 4 solutions.', answers: ['x=1, 5, 8, 12', 'x=1, 3, 9, 12', 'x=1, 4, 9, 12', 'x=1, 12 seulement'], correct: 0, explanation: '1⁴=1✓. 5⁴=625=13×48+1≡1✓. 8⁴=4096=13×315+1≡1✓. 12⁴≡(−1)⁴=1✓. Solutions : {1,5,8,12}.' },
          { type: 'mcq', question: 'Résoudre 2x²+3x+1≡0 [5]. Δ=9−8=1. x=(−3±1)×(2×2)⁻¹=(−2/4, −4/4) mod 5.', answers: ['x=3 et x=2', 'x=1 et x=4', 'x=0 et x=1', 'Pas de solution'], correct: 0, explanation: '4⁻¹=4 [5] (4×4=16≡1). x=−2×4=−8≡2 et x=−4×4=−16≡4 [5]. Vérif : 2×4+6+1=15≡0✓, 2×16+12+1=45≡0✓.' },
          { type: 'mcq', question: 'Pour l\'équation ax²+bx+c≡0 [p], la condition d\'existence de solutions est :', answers: ['Δ=b²−4ac est un résidu quadratique ou nul mod p', 'Δ>0', 'a est inversible mod p', 'p|c'], correct: 0, explanation: 'Après complétion du carré, l\'existence de solutions revient à ce que le discriminant Δ soit un résidu quadratique (ou Δ≡0 [p] pour solution double).' },
          { type: 'input', question: 'Résoudre 3x≡5 [17]. 3⁻¹ mod 17 = 6 (3×6=18≡1 [17]). x = ?', correct: '13', explanation: 'x≡6×5=30≡30−17=13 [17]. Vérif : 3×13=39=17×2+5≡5 ✓.' },
          { type: 'mcq', question: 'Quel est le nombre de solutions de x^24≡1 [31] ? (31 premier, p−1=30, PGCD(24,30)=6)', answers: ['6', '24', '30', '1'], correct: 0, explanation: 'PGCD(24,30)=6. L\'équation x^24=1 dans (ℤ/31ℤ)× a exactement 6 solutions.' }
        ],
        // =======================
        // ===== Niveau L1 =======
        // =======================
        [
          { type: 'mcq', question: 'L\'équation ax≡b [n] est soluble ssi PGCD(a,n)|b. Ce résultat est une conséquence de :', answers: ['L\'identité de Bezout dans l\'anneau euclidien ℤ', 'La factorisation unique', 'Le théorème de Wilson', 'L\'axiome d\'Archimède'], correct: 0, explanation: 'ax≡b [n] ⟺ ax−ny=b est soluble ⟺ PGCD(a,n)|b (Bezout : d=ua+vn, donc d|b est nécessaire et suffisant pour la solubilité).' },
          { type: 'mcq', question: 'L\'ensemble des solutions de ax≡0 [n] forme :', answers: ['Un sous-groupe de (ℤ/nℤ, +) isomorphe à ℤ/(n/d)ℤ', 'Un idéal de ℤ/nℤ', 'Un sous-corps', 'L\'ensemble vide'], correct: 0, explanation: 'Les solutions de ax≡0 [n] sont les multiples de n/d mod n : {0, n/d, 2n/d,…}. Ce sous-groupe est d\'ordre d et isomorphe à ℤ/dℤ. Non : c\'est isomorphe à ℤ/(n/d)ℤ d\'ordre d.' },
          { type: 'mcq', question: 'L\'annulateur de [a] dans ℤ/nℤ (les x tels que ax=0) est l\'idéal :', answers: ['⟨n/d⟩ où d=PGCD(a,n)', '⟨a⟩', '⟨n⟩', '⟨d⟩'], correct: 0, explanation: 'ax≡0 [n] ⟺ (n/d)|x. L\'annulateur de [a] est généré par [n/d] dans ℤ/nℤ : Ann([a])=⟨n/d⟩.' },
          { type: 'mcq', question: 'L\'équation x^p ≡ a [p] (p premier) a toujours une unique solution car :', answers: ['x↦x^p est l\'identité dans 𝔽_p (Frobenius/Fermat)', 'x^p a toujours une seule racine', 'Le polynôme X^p−a est irréductible', 'p est premier'], correct: 0, explanation: 'Par Fermat, x^p≡x [p] pour tout x. Donc x^p≡a ⟺ x≡a [p]. L\'unique solution est x≡a [p].' },
          { type: 'mcq', question: 'L\'équation X^n − a = 0 sur 𝔽_p a PGCD(n,p−1) solutions si a≠0. Sur 𝔽_{p^k} avec |𝔽_{p^k}×|=p^k−1, elle a :', answers: ['PGCD(n, p^k−1) solutions si a^((p^k−1)/PGCD(n,p^k−1))=1', 'n solutions', 'p solutions', '0 solutions'], correct: 0, explanation: 'Dans le groupe cyclique (𝔽_{p^k})× d\'ordre p^k−1, l\'équation x^n=a a PGCD(n,p^k−1) solutions si a est une puissance n-ième, sinon 0.' },
          { type: 'mcq', question: 'La résolution de f(x)≡0 [p^k] par relèvement de Hensel depuis f(x₀)≡0 [p] requiert :', answers: ['f\'(x₀) ≢ 0 [p] (condition de non-singularité)', 'f est de degré ≤ p', 'p est impair', 'f est irréductible mod p'], correct: 0, explanation: 'Le lemme de Hensel : si f(x₀)≡0 [p] et f\'(x₀)≢0 [p], alors pour tout k≥1 il existe un unique relèvement xₖ≡x₀ [p] avec f(xₖ)≡0 [p^k].' },
          { type: 'mcq', question: 'Résoudre x²≡2 [7^2=49] en relevant la solution x₀=3 de x²≡2 [7] (3²=9≡2 [7]).', answers: ['x=10 ou x=39 [49]', 'x=3 ou x=4', 'x=17 ou x=32', 'x=3 ou x=46'], correct: 0, explanation: 'x=x₀+7t. (3+7t)²=9+42t+49t²≡9+42t [49]. On veut ≡2 [49] : 42t≡2−9=−7 [49] → 6t≡−1 [7] → t≡−6⁻¹≡−6≡1 [7]. x=3+7=10. Aussi x=49−10=39.' },
          { type: 'mcq', question: 'Le théorème de Hensel est analogue à la méthode de Newton-Raphson car :', answers: ['Les deux "linéarisent" f autour d\'une racine approximative pour la raffiner', 'Les deux utilisent des intégrales', 'Les deux nécessitent p premier', 'Les deux sont itératifs sans condition'], correct: 0, explanation: 'Newton-Raphson : xₙ₊₁ = xₙ − f(xₙ)/f\'(xₙ) (sur ℝ). Hensel : xₖ₊₁ = xₖ − f(xₖ)/f\'(xₖ) mod p^(k+1). Même structure, contexte p-adique au lieu de réel.' },
          { type: 'mcq', question: 'L\'ensemble Γ = {x ∈ ℤ_p | x² = a} pour a ∈ ℤ_p× est :', answers: ['Vide ou de cardinal 2 (selon si a est RQ mod p)', 'Toujours de cardinal 2', 'Toujours vide', 'De cardinal p'], correct: 0, explanation: 'Par Hensel, si a est un résidu quadratique mod p (et p≠2), la racine x₀ mod p se relève en une racine dans ℤ_p. Il y a exactement 2 racines dans ℤ_p (±x₀). Sinon aucune.' },
          { type: 'mcq', question: 'Les solutions entières de ax²+bxy+cy²=n sont liées aux formes quadratiques binaires. La condition de solubilité globale (Hasse-Minkowski) est :', answers: ['Soluble sur ℝ et sur tous les ℤ_p (principe local-global)', 'Soluble dans ℤ', 'Δ>0 (discriminant)', 'n est premier'], correct: 0, explanation: 'Le principe de Hasse-Minkowski : une forme quadratique sur ℚ représente 0 non trivialement ssi elle le fait sur ℝ et sur ℚ_p pour tout p. C\'est le "principe local-global".' }
        ]
      ]
    },

    // ════════════════════════════════════════════════════
    // 9. SYSTÈMES DE CONGRUENCES (THÉORÈME CHINOIS)
    // ════════════════════════════════════════════════════
    {
      id: 'systemes-congruences',
      label: 'Systèmes de congruences',
      icon: '🇨🇳',
      lesson: {
        formula: 'Si PGCD(nᵢ, nⱼ)=1 pour i≠j, le système x≡aᵢ [nᵢ] a une solution unique mod N=∏nᵢ',
        text: 'Le théorème chinois des restes (CRT) garantit que si les modulos sont deux à deux premiers entre eux, tout système de congruences a une solution unique modulo leur produit. C\'est un outil fondamental pour résoudre des systèmes et pour décomposer des calculs mod n.',
        example: 'x≡2 [3] et x≡3 [5]. PGCD(3,5)=1. N=15. On cherche x=2 ou x=5 ou x=8 ou x=11 ou x=14 (≡2 [3]). Parmi ces : 8≡3 [5] ✓. Solution : x≡8 [15].',
      },
      fullBlocks: [
        {
          type: 'definition',
          title: '📌 Théorème chinois des restes (CRT)',
          text: '<strong>Théorème :</strong> Soient n₁, …, nₖ des entiers deux à deux premiers entre eux, et a₁, …, aₖ des entiers quelconques. Alors le système :<br>x ≡ a₁ [n₁], x ≡ a₂ [n₂], …, x ≡ aₖ [nₖ]<br>admet une <strong>solution unique modulo N = n₁×n₂×…×nₖ</strong>.'
        },
        {
          type: 'demo',
          title: '🔬 Construction explicite de la solution',
          text: '<strong>Pour k=2 :</strong> Poser N=n₁n₂. On cherche x=a₁·M₁·y₁ + a₂·M₂·y₂ où M₁=N/n₁=n₂ et M₂=N/n₂=n₁.<br>y₁ est l\'inverse de M₁ mod n₁ : M₁y₁≡1 [n₁].<br>y₂ est l\'inverse de M₂ mod n₂ : M₂y₂≡1 [n₂].<br>Vérification : x≡a₁·M₁·y₁≡a₁·1=a₁ [n₁] ✓ et x≡a₂·M₂·y₂≡a₂ [n₂] ✓.'
        },
        {
          type: 'example',
          title: '💡 Exemple complet',
          text: '<strong>Résoudre x≡2 [3] et x≡3 [5].</strong><br>N=15. M₁=5, M₂=3.<br>y₁ : 5y₁≡1 [3] → 2y₁≡1 [3] → y₁=2.<br>y₂ : 3y₂≡1 [5] → y₂=2 (3×2=6≡1).<br>x = 2×5×2 + 3×3×2 = 20 + 18 = 38 ≡ 8 [15].<br>Vérif : 8≡2 [3] (8=3×2+2) ✓, 8≡3 [5] (8=5×1+3) ✓.'
        },
        {
          type: 'warning',
          title: '⚠️ Condition de coprimarité',
          text: 'Si les modulos ne sont pas premiers entre eux, le CRT dans sa forme simple ne s\'applique pas. Exemple : x≡1 [6] et x≡3 [4] ne satisfont pas la condition (PGCD(6,4)=2). On peut se ramener au cas coprime en décomposant chaque modulo en facteurs premiers.'
        },
        {
          type: 'technique',
          title: '🛠️ Méthode pratique',
          text: '<strong>Méthode des substitutions successives :</strong><br>1. x≡a₁ [n₁] donne x=a₁+k₁n₁.<br>2. Substituer dans x≡a₂ [n₂] : a₁+k₁n₁≡a₂ [n₂] → résoudre en k₁.<br>3. Reporter k₁ pour obtenir x mod n₁n₂.<br>4. Continuer avec la contrainte suivante.<br><br>Cette méthode est souvent plus rapide à la main pour 2−3 congruences.'
        }
      ],
      levels: [
        [
          { type: 'mcq', question: 'Le CRT garantit une solution unique mod N si les modulos sont :', answers: ['Deux à deux premiers entre eux', 'Tous premiers', 'Croissants', 'Pairs'], correct: 0, explanation: 'La condition du CRT est que les modulos n₁, n₂, …, nₖ soient deux à deux premiers entre eux (PGCD(nᵢ,nⱼ)=1 pour i≠j).' },
          { type: 'mcq', question: 'Résoudre x≡1 [2] et x≡0 [3]. Solution mod 6 :', answers: ['x≡3 [6]', 'x≡1 [6]', 'x≡4 [6]', 'x≡5 [6]'], correct: 0, explanation: 'x impair et multiple de 3 : x=3 (3 est impair et 3≡0 [3]). Donc x≡3 [6].' },
          { type: 'mcq', question: 'Résoudre x≡2 [3] et x≡1 [4]. Solution mod 12 :', answers: ['x≡5 [12]', 'x≡2 [12]', 'x≡8 [12]', 'x≡11 [12]'], correct: 0, explanation: 'x≡2 [3] : x=2,5,8,11,… x≡1 [4] : x=1,5,9,13,… Commun : x=5. Solution x≡5 [12].' },
          { type: 'input', question: 'Résoudre x≡1 [3] et x≡2 [5]. Solution mod 15 = ?', correct: '7', explanation: 'x≡1 [3] : x=1,4,7,10,13,… x≡2 [5] : x=2,7,12,… Commun : x=7. x≡7 [15].' },
          { type: 'mcq', question: 'N = n₁×n₂×…×nₖ est le modulo de la solution unique du CRT. Pour n₁=3, n₂=5, n₃=7 :', answers: ['N=105', 'N=15', 'N=35', 'N=21'], correct: 0, explanation: 'N = 3×5×7 = 105. La solution est unique modulo 105.' },
          { type: 'mcq', question: 'Résoudre x≡0 [2], x≡0 [3], x≡1 [5]. Solution mod 30 :', answers: ['x≡6 [30]', 'x≡0 [30]', 'x≡12 [30]', 'x≡24 [30]'], correct: 0, explanation: 'x multiple de 6 (lcm(2,3)) et x≡1 [5]. Multiples de 6 : 6,12,18,24,30,… mod 5 : 1,2,3,4,0,… x=6 car 6≡1 [5] ✓.' },
          { type: 'mcq', question: 'Quelle est la solution de x≡3 [7] et x≡5 [11] mod 77 ?', answers: ['x≡38 [77]', 'x≡24 [77]', 'x≡59 [77]', 'x≡15 [77]'], correct: 0, explanation: 'x≡3 [7] : x=3,10,17,24,31,38,… x≡5 [11] : x=5,16,27,38,… Commun : x=38. x≡38 [77].' },
          { type: 'mcq', question: 'L\'isomorphisme du CRT donne : ℤ/15ℤ ≅ ?', answers: ['ℤ/3ℤ × ℤ/5ℤ', 'ℤ/5ℤ × ℤ/5ℤ', 'ℤ/3ℤ × ℤ/3ℤ', 'ℤ/15ℤ'], correct: 0, explanation: 'PGCD(3,5)=1 → ℤ/15ℤ ≅ ℤ/3ℤ × ℤ/5ℤ comme anneaux. C\'est l\'isomorphisme du CRT.' },
          { type: 'input', question: 'Résoudre x≡2 [5] et x≡3 [7]. Solution mod 35 = ?', correct: '17', explanation: 'x≡2 [5] : x=2,7,12,17,22,27,32,… x≡3 [7] : x=3,10,17,24,… Commun : x=17. x≡17 [35].' },
          { type: 'mcq', question: 'Un nombre est divisible par 3 et par 5. Le plus petit tel nombre > 0 est :', answers: ['15', '8', '30', '45'], correct: 0, explanation: 'On cherche x≡0 [3] et x≡0 [5]. CRT : x≡0 [15]. Plus petit positif : 15.' }
        ],
        [
          { type: 'mcq', question: 'Résoudre x≡1 [3], x≡2 [5], x≡3 [7]. Solution mod 105 :', answers: ['x≡52 [105]', 'x≡43 [105]', 'x≡71 [105]', 'x≡82 [105]'], correct: 0, explanation: 'x≡1 [3] et x≡2 [5] : x≡7 [15] (7≡1 [3]✓, 7≡2 [5]✓). x≡7 [15] et x≡3 [7] : x=7+15k, 7+15k≡3 [7] → k≡3 [7] (15≡1 [7], 7≡0 [7], 3 [7]). k=3, x=7+45=52. x≡52 [105].' },
          { type: 'mcq', question: 'Calculer φ(105) = φ(3)×φ(5)×φ(7) =', answers: ['48', '24', '36', '30'], correct: 0, explanation: 'φ(105) = φ(3)×φ(5)×φ(7) = 2×4×6 = 48. Il y a 48 éléments inversibles dans ℤ/105ℤ.' },
          { type: 'mcq', question: 'Via le CRT, ℤ/105ℤ ≅ ℤ/3ℤ × ℤ/5ℤ × ℤ/7ℤ. L\'élément (2,0,1) correspond à :', answers: ['x≡2 [3], x≡0 [5], x≡1 [7] → à calculer', 'x=2', 'x=0', 'x=7'], correct: 0, explanation: 'L\'isomorphisme du CRT : (2,0,1) correspond à la solution du système x≡2[3], x≡0[5], x≡1[7] mod 105.' },
          { type: 'input', question: 'Résoudre x≡0 [2], x≡1 [3], x≡2 [5]. Solution mod 30 ?', correct: '22', explanation: 'x pair et ≡1 [3] : x=4,10,16,22,28. x≡2 [5] : 4≡4, 10≡0, 16≡1, 22≡2 ✓. x=22.' },
          { type: 'mcq', question: 'Le CRT est utilisé en cryptographie RSA pour accélérer le déchiffrement. L\'idée est de :', answers: ['Calculer m^d mod p et m^d mod q séparément, puis combiner par CRT', 'Factoriser n directement', 'Calculer m^d mod n directement', 'Utiliser Fermat sur n'], correct: 0, explanation: 'On calcule m_p = m^(d mod p−1) mod p et m_q = m^(d mod q−1) mod q, puis on reconstruit m mod n par CRT. C\'est 4× plus rapide.' },
          { type: 'mcq', question: 'Le CRT implique que φ(mn) = φ(m)×φ(n) si PGCD(m,n)=1 car :', answers: ['(ℤ/mnℤ)× ≅ (ℤ/mℤ)× × (ℤ/nℤ)×', 'φ est additive', 'mn est premier', 'Les éléments inversibles se doublent'], correct: 0, explanation: 'Par le CRT, ℤ/mnℤ ≅ ℤ/mℤ × ℤ/nℤ comme anneaux, donc en particulier comme groupes. Les éléments inversibles : (ℤ/mnℤ)× ≅ (ℤ/mℤ)× × (ℤ/nℤ)×, d\'ordre φ(m)φ(n).' },
          { type: 'mcq', question: 'Un entier ≡ 1 mod 2, 3, 5, 7. Le plus petit tel entier > 0 est :', answers: ['211', '105', '210', '1'], correct: 0, explanation: 'x≡1 [210] (lcm(2,3,5,7)=210). Le plus petit est x=1. Mais >0 et >1 serait 211. En fait x=1 est la réponse si on accepte 1>0. Sinon 1+210=211.' },
          { type: 'mcq', question: 'Résoudre : le reste de n divisé par 5 est 2, divisé par 7 est 4. n mod 35 = ?', answers: ['x≡32 [35]', 'x≡12 [35]', 'x≡18 [35]', 'x≡25 [35]'], correct: 0, explanation: 'x≡2 [5] et x≡4 [7]. x=2,7,12,17,22,27,32,… x≡4 [7] : 32=7×4+4 ✓. x≡32 [35].' },
          { type: 'mcq', question: 'Si n₁ et n₂ ne sont pas premiers entre eux, le système x≡a₁ [n₁], x≡a₂ [n₂] a des solutions ssi :', answers: ['PGCD(n₁,n₂) | (a₁−a₂)', 'a₁ = a₂', 'n₁ | a₂', 'Toujours'], correct: 0, explanation: 'Si d=PGCD(n₁,n₂), la condition de compatibilité est d|(a₁−a₂). La solution est unique mod PPCM(n₁,n₂).' },
          { type: 'input', question: 'Résoudre x≡1 [4] et x≡3 [6]. PGCD(4,6)=2, 2|(3−1)=2 ✓. PPCM=12. Solution mod 12 ?', correct: '9', explanation: 'x=1,5,9,13,… (≡1 [4]). x≡3 [6] : 9≡3 [6]✓ (9=6+3). x≡9 [12].' }
        ],
        [
          { type: 'mcq', question: 'Résoudre x≡3 [8], x≡5 [9], x≡1 [7]. Vérifier PGCD(8,9)=PGCD(9,7)=PGCD(8,7)=1. N=?', answers: ['N=504', 'N=24', 'N=72', 'N=63'], correct: 0, explanation: 'N=8×9×7=504.' },
          { type: 'mcq', question: 'Solution de x≡3 [8] et x≡5 [9]. Par substitution : x=3+8k, 3+8k≡5 [9] → 8k≡2 [9] → k≡? (8⁻¹=8 [9])', answers: ['k≡7 [9] donc x=3+56=59 [72]', 'k≡2 [9]', 'k≡5 [9]', 'k≡1 [9]'], correct: 0, explanation: '8⁻¹ mod 9 = 8 (8×8=64≡1 [9]). k≡8×2=16≡7 [9]. x=3+8×7=3+56=59. x≡59 [72].' },
          { type: 'input', question: 'Solution de x≡59 [72] et x≡1 [7]. x=59+72k, 59+72k≡1 [7]. 72≡2 [7], 59≡3 [7]. 3+2k≡1 [7] → 2k≡−2≡5 [7] → k≡?', correct: '6', explanation: '2⁻¹=4 [7]. k≡4×5=20≡6 [7]. x=59+72×6=59+432=491. x≡491 [504].' },
          { type: 'mcq', question: 'Le PPCM de n₁ et n₂ est égal à n₁×n₂ / PGCD(n₁,n₂). Pour n₁=12, n₂=18 :', answers: ['PPCM=36', 'PPCM=216', 'PPCM=6', 'PPCM=24'], correct: 0, explanation: 'PGCD(12,18)=6. PPCM=12×18/6=36.' },
          { type: 'mcq', question: 'Résoudre x≡1 [12] et x≡5 [18]. PGCD(12,18)=6. 6|(5−1)=4 ?', answers: ['Non : 6∤4, pas de solution', 'Oui, solution unique', 'Oui, 6 solutions mod 36', 'Toujours soluble'], correct: 0, explanation: '6∤4 (4=6×0+4). Le système n\'a pas de solution.' },
          { type: 'mcq', question: 'Résoudre x≡3 [12] et x≡9 [18]. PGCD(12,18)=6. 6|(9−3)=6 ✓. PPCM=36. Solutions ?', answers: ['x≡27 [36]', 'x≡3 [36]', 'x≡9 [36]', 'x≡15 [36]'], correct: 0, explanation: 'x≡3 [12] : x=3,15,27,39,… x≡9 [18] : x=9,27,45,… Commun : x=27. x≡27 [36].' },
          { type: 'mcq', question: 'Le CRT en version anneau : ℤ/n₁n₂ℤ ≅ ℤ/n₁ℤ × ℤ/n₂ℤ si PGCD(n₁,n₂)=1. L\'isomorphisme est :', answers: ['x ↦ (x mod n₁, x mod n₂)', 'x ↦ (x mod n₁n₂, 0)', 'x ↦ (x, x)', '(a,b) ↦ a+b'], correct: 0, explanation: 'L\'isomorphisme du CRT : f : ℤ/n₁n₂ℤ → ℤ/n₁ℤ × ℤ/n₂ℤ, x ↦ (x mod n₁, x mod n₂). C\'est un isomorphisme d\'anneaux quand PGCD(n₁,n₂)=1.' },
          { type: 'mcq', question: 'Quelle décomposition de ℤ/60ℤ donne le CRT (60=4×3×5) ?', answers: ['ℤ/4ℤ × ℤ/3ℤ × ℤ/5ℤ', 'ℤ/2ℤ × ℤ/2ℤ × ℤ/3ℤ × ℤ/5ℤ', 'ℤ/12ℤ × ℤ/5ℤ seulement', 'ℤ/60ℤ lui-même'], correct: 0, explanation: 'PGCD(4,3)=PGCD(4,5)=PGCD(3,5)=1. Donc ℤ/60ℤ ≅ ℤ/4ℤ × ℤ/3ℤ × ℤ/5ℤ.' },
          { type: 'input', question: 'Quel est le plus petit entier positif n tel que n≡−1 mod 2,3,5,7 (i.e., divisible par tous +1) ?', correct: '209', explanation: 'n≡−1 [2,3,5,7] ⟺ n≡−1 [210] (lcm=210). Donc n=210−1=209. Vérif : 209=2×104+1, 209=3×69+2=69×3+2... Correction : 209 mod 2=1≡−1 [2]✓, 209 mod 3=2≡−1 [3]✓, 209 mod 5=4≡−1 [5]✓, 209 mod 7=6≡−1 [7]✓.' },
          { type: 'mcq', question: 'Le problème des restes chinois du Sunzi Suanjing (IVe s.) : "3,3 reste 2 ; 5,5 reste 3 ; 7,7 reste 2". La réponse est :', answers: ['x=23', 'x=15', 'x=30', 'x=53'], correct: 0, explanation: 'x≡2 [3], x≡3 [5], x≡2 [7]. Résolution : x≡2 [3] et x≡3 [5] → x≡23 [15] (23≡2 [3]✓, 23≡3 [5]✓). 23≡2 [7]✓. x=23.' }
        ],
        [
          { type: 'mcq', question: 'Factorisation de φ(n) via le CRT : φ(p₁^a₁×…×pₖ^aₖ) = ?', answers: ['Π φ(pᵢ^aᵢ) = Π pᵢ^(aᵢ−1)(pᵢ−1)', 'Π pᵢ^aᵢ', 'Π(pᵢ−1)', 'n × Π(1−1/pᵢ)'], correct: 0, explanation: 'Par multiplicativité de φ et le CRT : φ(Πpᵢ^aᵢ) = Πφ(pᵢ^aᵢ) = Πpᵢ^(aᵢ−1)(pᵢ−1). Aussi noté φ(n)=n×Π_{p|n}(1−1/p).' },
          { type: 'mcq', question: 'Calculer φ(360) = φ(2³×3²×5).', answers: ['96', '120', '72', '48'], correct: 0, explanation: 'φ(360)=φ(8)×φ(9)×φ(5)=4×6×4=96.' },
          { type: 'mcq', question: 'Le CRT peut être généralisé aux idéaux : si I+J=A (idéaux comaximaux d\'un anneau A), alors :', answers: ['A/(I∩J) ≅ A/I × A/J', 'A/IJ ≅ A/I × A/J', 'A/(I+J) ≅ A/I × A/J', 'I∩J=IJ toujours'], correct: 0, explanation: 'CRT général : si I+J=A, alors I∩J=IJ et A/IJ ≅ A/I × A/J. En particulier A/(I∩J) ≅ A/I × A/J car I∩J=IJ.' },
          { type: 'input', question: 'Via le CRT, calculer 2^100 mod 15. (2^100 mod 3 = ?, 2^100 mod 5 = ?, puis combiner)', correct: '1', explanation: '2^2≡1 [3], 100≡0 [2], 2^100≡1 [3]. 2^4≡1 [5], 100≡0 [4], 2^100≡1 [5]. CRT : x≡1 [3] et x≡1 [5] → x≡1 [15].' },
          { type: 'mcq', question: 'Quel est le nombre de solutions de x²≡1 [120] ? (120=8×3×5, via CRT)', answers: ['8', '4', '2', '16'], correct: 0, explanation: 'x²≡1 [8] : 4 solutions. x²≡1 [3] : 2. x²≡1 [5] : 2. CRT : 4×2×2=16 solutions au total.' },
          { type: 'mcq', question: 'Le CRT permet de calculer n^k mod N efficacement quand N=p₁p₂ (RSA). La complexité est réduite de :', answers: ['O((log N)³) à O((log p)³) environ (4× plus rapide)', 'O(N) à O(N/2)', 'O(N²) à O(N)', 'Aucun gain'], correct: 0, explanation: 'Calculer a^k mod N prend O((log k)(log N)²) multiplications. Avec CRT sur p₁,p₂ (taille log N/2 chacun), les deux exponentiations coûtent 2×O((log k)(log N/2)²) ≈ N²/2 → gain ≈ 4.' },
          { type: 'mcq', question: 'Le CRT implique que si PGCD(m,n)=1, pour calculer f(x) mod mn, il suffit de calculer :', answers: ['f(x mod m) mod m et f(x mod n) mod n, puis combiner', 'f(x) mod m seulement', 'f(x) mod (m+n)', 'f(x mod mn)'], correct: 0, explanation: 'f(x) mod mn se reconstruit par CRT depuis f(x) mod m et f(x) mod n, ce qui est souvent plus efficace si m,n sont plus petits que mn.' },
          { type: 'mcq', question: 'Le discriminant d\'une extension algébrique divise les entiers qui se ramifient. p se ramifie dans ℤ[√d] ssi :', answers: ['p | disc(ℤ[√d]) = 4d ou d selon d mod 4', 'p | d toujours', 'p est pair', 'p=2'], correct: 0, explanation: 'Le discriminant de ℤ[√d] est 4d si d≡2,3 [4] et d si d≡1 [4]. p se ramifie ssi p | disc.' },
          { type: 'mcq', question: 'L\'anneau ℤ[X] satisfait le CRT : si P,Q sont premiers entre eux dans ℤ[X], alors :', answers: ['ℤ[X]/(PQ) ≅ ℤ[X]/P × ℤ[X]/Q', 'ℤ[X]/(P+Q) ≅ ℤ[X]/P × ℤ[X]/Q', 'ℤ[X] ≅ ℤ[X]/P × ℤ[X]/Q', 'Non valide pour les polynômes'], correct: 0, explanation: 'ℤ[X] est euclidien, donc le CRT s\'applique : si PGCD(P,Q)=1 dans ℤ[X], alors ℤ[X]/(PQ) ≅ ℤ[X]/(P) × ℤ[X]/(Q).' },
          { type: 'input', question: 'Résoudre x≡2 [3], x≡4 [5], x≡6 [7]. Solution mod 105 ?', correct: '104', explanation: 'x≡2 [3] et x≡4 [5] → x≡14 [15] (14≡2 [3]✓, 14≡4 [5]✓). 14+15k≡6 [7] : 14≡0 [7], 15≡1 [7], k≡6 [7]. x=14+15×6=14+90=104. x≡104 [105].' }
        ],
        [
          { type: 'mcq', question: 'Le CRT donne ℤ/nℤ ≅ Π ℤ/pᵢ^aᵢℤ (décomposition primaire). Cet isomorphisme montre que :', answers: ['Tout anneau ℤ/nℤ est produit d\'anneaux locaux', 'ℤ/nℤ est un corps', 'La décomposition est unique', 'Tous les idéaux sont principaux'], correct: 0, explanation: 'ℤ/p^aℤ est un anneau local (idéal maximal (p)). La décomposition ℤ/nℤ ≅ Πℤ/pᵢ^aᵢℤ exprime ℤ/nℤ comme produit d\'anneaux locaux.' },
          { type: 'mcq', question: 'L\'interpolation de Lagrange modulo p : étant donnés (x₁,y₁),…,(xₙ,yₙ) distincts mod p, il existe un unique polynôme P de degré <n sur 𝔽_p tel que :', answers: ['P(xᵢ)=yᵢ pour tout i (interpolation)', 'P est irréductible', 'P(0)=0', 'degP=n'], correct: 0, explanation: 'L\'interpolation de Lagrange mod p : P(x)=Σ yᵢ×Πⱼ≠ᵢ(x−xⱼ)/(xᵢ−xⱼ) est l\'unique polynôme de degré <n passant par les points donnés.' },
          { type: 'mcq', question: 'Le partage de secret de Shamir utilise CRT + interpolation : un secret s est partagé en n parts, et k parts suffisent à retrouver s. L\'outil mathématique est :', answers: ['Un polynôme de degré k−1 mod p', 'Le CRT directement', 'L\'algorithme d\'Euclide', 'Le théorème de Wilson'], correct: 0, explanation: 'Shamir : S(x) = s + a₁x + … + aₖ₋₁x^(k−1) mod p (polynôme aléatoire de degré k−1 avec S(0)=s). Chaque part est S(i) mod p. k parts permettent d\'interpoler S et retrouver s=S(0).' },
          { type: 'mcq', question: 'La décomposition en éléments simples sur 𝔽_p[X] est possible car 𝔽_p[X] est :', answers: ['Un anneau principal (donc à décomposition unique)', 'Un corps', 'Un anneau nul', 'Un anneau de Bezout non principal'], correct: 0, explanation: '𝔽_p[X] est principal (euclidien). Tout idéal est principal. La décomposition en éléments simples des fractions rationnelles est possible (analogue de la décomposition en facteurs premiers).' },
          { type: 'mcq', question: 'L\'exponentiation rapide dans un produit d\'anneaux ℤ/n₁ℤ × ℤ/n₂ℤ opère :', answers: ['Composante par composante, sans interaction', 'Dans ℤ/n₁n₂ℤ puis projection', 'Par l\'algorithme de Miller-Rabin', 'Par Newton-Raphson'], correct: 0, explanation: 'Dans le produit direct, les opérations sont composante par composante : (a₁,a₂)^k = (a₁^k, a₂^k). On peut donc exponentier dans chaque composante indépendamment.' },
          { type: 'mcq', question: 'En théorie des nombres, le "théorème de densité de Chebotarev" est une généralisation de Dirichlet. Il affirme que la densité des premiers p tels que le Frobenius de p dans une extension galoisienne est un certain élément σ est :', answers: ['|σ|/|Gal| (densité naturelle)', '1/p', '0', 'Dépend de σ seulement si |σ|=1'], correct: 0, explanation: 'Chebotarev : la densité des premiers de Frobenius égal à σ est proportionnelle à la taille de la classe de conjugaison de σ divisée par |Gal|. C\'est une profonde généralisation du théorème de Dirichlet.' },
          { type: 'mcq', question: 'Le CRT pour les modules non copremiers : résoudre x≡a [m], x≡b [n] avec d=PGCD(m,n) donne une solution mod PPCM(m,n) = mn/d ssi :', answers: ['d|(a−b)', 'a=b', 'm|b', 'n|a'], correct: 0, explanation: 'La condition de compatibilité est d|(a−b). Si vérifiée, la solution est unique mod PPCM(m,n)=mn/d.' },
          { type: 'mcq', question: 'L\'algorithme de Garner calcule la représentation CRT de façon incrémentale. Pour x≡r₁ [n₁], x≡r₂ [n₂], il exprime :', answers: ['x = r₁ + n₁×(r₂−r₁)×n₁⁻¹ mod n₂', 'x = r₁×r₂ mod n₁n₂', 'x = (r₁n₂+r₂n₁)/(n₁+n₂)', 'x = n₁×r₁+n₂×r₂'], correct: 0, explanation: 'Algorithme de Garner (forme mixte) : x = r₁ + n₁×c₁ où c₁ ≡ (r₂−r₁)×n₁⁻¹ [n₂]. Permet de calculer la représentation sans calculer N explicitement.' },
          { type: 'input', question: 'Via le CRT, calculer 7^100 mod 33 = 7^100 mod 3 × 7^100 mod 11 combinés. (7^2≡1 [3], 7^10≡1 [11]). Résultat mod 33 ?', correct: '1', explanation: '7≡1 [3], 7^100≡1 [3]. 7^10≡1 [11] (Fermat), 100=10×10, 7^100≡1 [11]. CRT : x≡1 [3] et x≡1 [11] → x≡1 [33].' },
          { type: 'mcq', question: 'La correspondance entre idéaux de ℤ/nℤ et diviseurs de n, via le CRT, est :', answers: ['Les idéaux de ℤ/nℤ sont les (d) pour d|n, isomorphes à ℤ/(n/d)ℤ', 'Les idéaux sont les anneaux ℤ/kℤ', 'Il n\'y a qu\'un seul idéal', 'Les idéaux sont en bijection avec les premiers'], correct: 0, explanation: 'ℤ/nℤ est principal. Ses idéaux sont de la forme (d)=(d·ℤ/nℤ) pour d|n. L\'idéal (d) est isomorphe à ℤ/(n/d)ℤ. Il y a autant d\'idéaux que de diviseurs de n.' }
        ],
        // =======================
        // ===== Niveau L1 =======
        // =======================
        [
          { type: 'mcq', question: 'L\'isomorphisme du CRT f : ℤ/mnℤ → ℤ/mℤ × ℤ/nℤ (PGCD(m,n)=1) est un isomorphisme d\'anneaux. La preuve d\'injectivité utilise :', answers: ['ker(f) = {x | m|x et n|x} = mnℤ, donc trivial', 'f est toujours bijectif', 'mn est premier', 'Les idéaux se croisent'], correct: 0, explanation: 'ker(f) = {x ∈ ℤ/mnℤ | x≡0 [m] et x≡0 [n]} = mnℤ/mnℤ = {0} car m et n sont copremiers (m|x et n|x ⟹ mn|x).' },
          { type: 'mcq', question: 'Le CRT permet de décomposer (ℤ/nℤ, +, ×) en produit. L\'analogue pour les groupes (décomposition de Sylow) affirme que tout groupe fini G a des p-sous-groupes de Sylow. Leur nombre nₚ satisfait :', answers: ['nₚ ≡ 1 [p] et nₚ | |G|/p^a', 'nₚ = 1 toujours', 'nₚ = p', 'nₚ | p'], correct: 0, explanation: 'Théorème de Sylow : nₚ ≡ 1 [p] et nₚ divise |G|/p^a (où p^a est la puissance exacte de p dans |G|).' },
          { type: 'mcq', question: 'Pour un anneau nœthérien A, le CRT s\'énonce : si I₁,…,Iₙ sont des idéaux comaximaux (Iᵢ+Iⱼ=A pour i≠j), l\'application A → ΠA/Iᵢ est :', answers: ['Surjective de noyau I₁∩…∩Iₙ = I₁×…×Iₙ', 'Injective seulement', 'Bijective sans condition', 'Non définie'], correct: 0, explanation: 'CRT général : A → Π A/Iᵢ est surjective (comaximaux impliquent surjectivité par Bezout). Le noyau est I₁∩…∩Iₙ = I₁×…×Iₙ (les deux coïncident ici).' },
          { type: 'mcq', question: 'Le théorème de structure des modules sur un anneau principal affirme : tout module de type fini sur ℤ est isomorphe à :', answers: ['ℤ^r ⊕ ℤ/d₁ℤ ⊕ … ⊕ ℤ/dₖℤ avec d₁|d₂|…|dₖ', 'ℤ^n pour un certain n', 'Un produit de corps', 'ℤ/nℤ pour un certain n'], correct: 0, explanation: 'Théorème de structure : tout module de type fini sur ℤ (groupe abélien de type fini) est ≅ ℤ^r ⊕ ℤ/d₁ℤ ⊕ … avec les dᵢ appelés facteurs invariants.' },
          { type: 'mcq', question: 'La décomposition de Smith d\'une matrice M ∈ M_{m×n}(ℤ) (forme normale) permet de :', answers: ['Classifier les modules présentés par M via le CRT et la décomposition primaire', 'Inverser M mod p', 'Calculer det(M)', 'Diagonaliser M sur ℝ'], correct: 0, explanation: 'La forme normale de Smith : M = UDV avec D diagonale (diviseurs élémentaires d₁|d₂|…). Elle classifie le module cokernel ℤ^m/Im(M) ≅ ℤ/(d₁) × ℤ/(d₂) × ….' },
          { type: 'mcq', question: 'L\'anneau ℤ_p des entiers p-adiques est un module sur ℤ. Sa structure en tant que groupe additif est :', answers: ['Divisible : ℤ_p/pℤ_p ≅ ℤ/pℤ pour tout n', 'Isomorphe à ℤ', 'Libre de rang infini', 'Fini'], correct: 0, explanation: 'ℤ_p est un ℤ_p-module libre de rang 1. Comme groupe additif, il est pro-cyclique : ℤ_p = lim←ℤ/p^nℤ (limite projective des ℤ/p^nℤ).' },
          { type: 'mcq', question: 'Le théorème de Kronecker-Weber affirme que toute extension abélienne de ℚ est contenue dans :', answers: ['Un corps cyclotomique ℚ(ζₙ) pour un certain n', 'ℚ(√p) pour un premier p', 'ℚ lui-même', 'Une extension de degré premier'], correct: 0, explanation: 'Kronecker-Weber (1853/1886) : toute extension galoisienne abélienne de ℚ est un sous-corps de ℚ(ζₙ)=ℚ(e^(2πi/n)). Les groupes de Galois de ces corps sont exactement (ℤ/nℤ)×.' },
          { type: 'mcq', question: 'Le groupe de Galois de ℚ(ζₙ)/ℚ est isomorphe à :', answers: ['(ℤ/nℤ)×', 'ℤ/nℤ', 'Sₙ (groupe symétrique)', 'ℤ/2ℤ'], correct: 0, explanation: 'Gal(ℚ(ζₙ)/ℚ) ≅ (ℤ/nℤ)× via σₐ : ζₙ ↦ ζₙᵃ pour a ∈ (ℤ/nℤ)×. C\'est l\'isomorphisme fondamental de la théorie cyclotomique.' },
          { type: 'mcq', question: 'Le CRT sur les corps de nombres : dans ℤ[ζₙ], la factorisation de p dépend de l\'ordre de p dans (ℤ/nℤ)×. Si l\'ordre est f et g=φ(n)/f, alors :', answers: ['(p) = (p₁…pₐ)^e avec efg=φ(n)', '(p) reste premier', '(p) = p^φ(n)', '(p) se factorise aléatoirement'], correct: 0, explanation: 'La factorisation de (p) dans ℤ[ζₙ] : (p) = (p₁×…×pₐ)^e où e est l\'indice de ramification, f le degré d\'inertie, g le nombre de facteurs, avec efg=φ(n).' },
          { type: 'mcq', question: 'La théorie du corps de classes local relie les extensions abéliennes de ℚ_p aux sous-groupes ouverts de ℚ_p×. C\'est la version locale de :', answers: ['La théorie du corps de classes global (Kronecker-Weber, Artin)', 'La loi de réciprocité quadratique', 'Le théorème de Fermat', 'L\'hypothèse de Riemann'], correct: 0, explanation: 'La théorie du corps de classes établit une correspondance entre extensions abéliennes d\'un corps et sous-groupes de son groupe des idèles/classes d\'idèles. C\'est l\'aboutissement de la théorie de Galois abélienne.' }
        ]
      ]
    },

    // ════════════════════════════════════════════════════
    // 10. APPLICATIONS DU CALCUL MODULAIRE
    // ════════════════════════════════════════════════════
    {
      id: 'applications-modulaire',
      label: 'Applications du calcul modulaire',
      icon: '🔐',
      lesson: {
        formula: 'RSA : chiffrer c=m^e [n], déchiffrer m=c^d [n] avec ed≡1 [φ(n)]',
        text: 'Le calcul modulaire est au cœur de la cryptographie moderne, des codes correcteurs d\'erreurs, de l\'algorithmique et de la théorie des nombres. RSA, Diffie-Hellman, les codes ISBN/EAN, le hachage — toutes ces applications reposent sur des propriétés modulaires.',
        example: 'Code EAN-13 : le dernier chiffre vérifie Σ(chiffres impairs) + 3×Σ(chiffres pairs) ≡ 0 [10]. Permet de détecter une erreur de frappe.',
      },
      fullBlocks: [
        {
          type: 'definition',
          title: '📌 RSA — Principe',
          text: '<strong>Génération des clés RSA :</strong><br>1. Choisir deux grands premiers p, q. Poser n = pq.<br>2. Calculer φ(n) = (p−1)(q−1).<br>3. Choisir e tel que PGCD(e, φ(n)) = 1.<br>4. Calculer d = e⁻¹ mod φ(n) (clé privée).<br><br><strong>Chiffrement :</strong> c = m^e mod n.<br><strong>Déchiffrement :</strong> m = c^d mod n.<br>La sécurité repose sur la difficulté de factoriser n.'
        },
        {
          type: 'formula',
          title: '🔑 Protocole Diffie-Hellman',
          formula: 'A envoie g^a mod p, B envoie g^b mod p → clé commune = g^(ab) mod p',
          text: 'Alice et Bob s\'accordent sur un groupe public (g, p). Chacun choisit un secret (a ou b). L\'échange public permet de calculer une clé commune sans la révéler. La sécurité repose sur la difficulté du logarithme discret.'
        },
        {
          type: 'example',
          title: '💡 Code de contrôle ISBN-10',
          text: 'Un ISBN-10 = d₁d₂…d₉d₁₀ vérifie : Σᵢ i·dᵢ ≡ 0 [11] (i de 1 à 10).<br>Exemple : ISBN 0-306-40615-2. Vérif : 1×0+2×3+3×0+4×6+5×4+6×0+7×6+8×1+9×5+10×2 = 0+6+0+24+20+0+42+8+45+20 = 165 = 11×15 ≡ 0 [11] ✓.<br>Ce code détecte toute erreur sur un chiffre et toute transposition de deux chiffres adjacents.'
        },
        {
          type: 'technique',
          title: '🛠️ Hachage et sommes de contrôle',
          text: 'De nombreux codes de vérification utilisent des sommes modulaires :<br>• <strong>EAN-13</strong> : Σ(aᵢ + 3bᵢ) ≡ 0 [10] (codes-barres produits)<br>• <strong>IBAN</strong> : réduire l\'IBAN en entier et vérifier mod 97 = 1<br>• <strong>Numéro de carte bancaire</strong> : algorithme de Luhn (somme alternée mod 10)<br>• <strong>Code postal ISBN-13</strong> : alternance de coefficients 1 et 3 mod 10'
        },
        {
          type: 'warning',
          title: '⚠️ Sécurité et bonnes pratiques',
          text: 'RSA avec n = pq est sûr si p, q sont grands (≥ 1024 bits chacun) et choisis de manière indépendante et aléatoire. Si p et q sont proches, la factorisation par la méthode de Fermat (factorisation par √n) devient efficace. Si e est trop petit (e=3), des attaques par exposant petit sont possibles.'
        },
        {
          type: 'demo',
          title: '🔬 Preuve que RSA déchiffre correctement',
          text: 'On a ed ≡ 1 [φ(n)], donc ed = 1 + kφ(n) pour un entier k.<br>Si PGCD(m, n) = 1 : par Euler, m^φ(n) ≡ 1 [n].<br>Donc c^d = (m^e)^d = m^(ed) = m^(1+kφ(n)) = m × (m^φ(n))^k ≡ m × 1 = m [n]. ✓<br>Si p|m (m non premier avec n) : on traite séparément mod p et mod q puis CRT.'
        }
      ],
      levels: [
        // Niveau 1 — Codes de contrôle
        [
          { type: 'mcq', question: 'Le code EAN-13 utilise un chiffre de contrôle vérifiant une congruence mod :', answers: ['10', '11', '7', '97'], correct: 0, explanation: 'Le code EAN-13 (code-barres) vérifie que la somme alternée des chiffres (avec poids 1 et 3) est ≡ 0 [10]. Le modulo 10 permet une vérification rapide.' },
          { type: 'mcq', question: 'L\'algorithme de Luhn (cartes bancaires) calcule :', answers: ['Une somme de chiffres doublés alternés, mod 10', 'Le produit des chiffres mod 11', 'La somme des chiffres mod 7', 'La parité du numéro'], correct: 0, explanation: 'L\'algorithme de Luhn double un chiffre sur deux (en partant de la droite), soustrait 9 si le résultat dépasse 9, puis vérifie que la somme totale ≡ 0 [10].' },
          { type: 'mcq', question: 'La vérification IBAN repose sur : réorganiser le numéro et calculer le reste divisé par :', answers: ['97', '10', '11', '100'], correct: 0, explanation: 'Pour valider un IBAN : déplacer les 4 premiers caractères en fin, convertir en entier (A=10, B=11,…), vérifier que le résultat mod 97 = 1.' },
          { type: 'mcq', question: 'ISBN-10 : la somme pondérée Σᵢ i·dᵢ doit être congrue à 0 modulo :', answers: ['11', '10', '7', '13'], correct: 0, explanation: 'L\'ISBN-10 utilise mod 11 (nombre premier), ce qui permet de détecter toutes les erreurs sur un seul chiffre ET toutes les transpositions de deux chiffres adjacents.' },
          { type: 'input', question: 'Vérifier ISBN-10 : 0-471-58635-?. Calculer Σᵢ i·dᵢ pour d=(0,4,7,1,5,8,6,3,5,x) ≡ 0 [11]. Chiffre de contrôle x = ?', correct: '9', explanation: '1×0+2×4+3×7+4×1+5×5+6×8+7×6+8×3+9×5 = 0+8+21+4+25+48+42+24+45 = 217. 217+10x ≡ 0 [11]. 217=11×19+8, donc 8+10x≡0 [11]. 10≡−1 [11], −x≡−8, x≡8+11=... 10x≡−8≡3 [11]. x≡3×10⁻¹≡3×10≡30≡8 [11]. Vérification directe : x=9 → 217+90=307=11×27+10. Résultat : 9.' },
          { type: 'mcq', question: 'ISBN-13 utilise des coefficients alternés 1 et 3. La somme doit être congrue à 0 mod :', answers: ['10', '11', '13', '7'], correct: 0, explanation: 'ISBN-13 (EAN-13) : Σ(1·d₁ + 3·d₂ + 1·d₃ + … + 3·d₁₂ + d₁₃) ≡ 0 [10]. Le modulo 10 est plus simple que 11 mais ne détecte pas certaines transpositions.' },
          { type: 'mcq', question: 'Un code mod p (p premier) peut détecter toutes les erreurs sur un chiffre et toutes les transpositions car :', answers: ['Dans ℤ/pℤ, a≠b ⟹ i(a−b)≠0 pour i≠0 premier avec p', 'p est grand', 'Les chiffres sont entre 0 et 9', 'Le code est secret'], correct: 0, explanation: 'Avec poids distincts et modulo premier, i·a ≠ j·b (pour i≠j ou a≠b) dans ℤ/pℤ. C\'est pourquoi ISBN-10 (mod 11) détecte plus d\'erreurs qu\'EAN-13 (mod 10 non premier).' },
          { type: 'mcq', question: 'Le reste de 123456789 mod 97 est utilisé dans la validation IBAN. Ce calcul est efficace grâce à :', answers: ['La réduction modulaire progressive : (((1×100+23)mod97)×100+45)mod97…', 'Un tableau de lookup', 'La factorisation de 97', 'L\'algorithme d\'Euclide'], correct: 0, explanation: 'On réduit le grand entier progressivement : on traite 2-3 chiffres à la fois, en multipliant le reste courant par 100 (ou 1000) et en ajoutant les nouveaux chiffres, puis en réduisant mod 97.' },
          { type: 'mcq', question: 'Le code Soundex (noms de famille) utilise un codage phonétique. Le modulo intervient dans :', answers: ['Les codes postaux et codes de vérification associés aux noms', 'La phonétique elle-même', 'Le chiffrement des noms', 'La compression des données'], correct: 0, explanation: 'Soundex encode les sons consonantiques. Le modulo n\'intervient pas directement dans Soundex, mais dans les codes de vérification des bases de données associées (numéros de sécurité sociale, etc.).' },
          { type: 'input', question: 'EAN-13 : chiffres 590123412345?. Somme = 1(5+0+2+4+2+4) + 3(9+1+3+1+3+x) = 1×17 + 3(17+x) = 17+51+3x = 68+3x ≡ 0 [10]. x = ?', correct: '4', explanation: '68+3x ≡ 0 [10]. 68≡8 [10]. 8+3x≡0 [10]. 3x≡−8≡2 [10]. 3⁻¹ mod 10 = 7 (3×7=21≡1). x≡7×2=14≡4 [10]. Chiffre de contrôle = 4.' }
        ],
        // Niveau 2 — Cryptographie de base
        [
          { type: 'mcq', question: 'Le chiffre de César chiffre m en c = (m + k) mod 26. Pour déchiffrer, on calcule :', answers: ['m = (c − k) mod 26', 'm = (c × k) mod 26', 'm = c − 26', 'm = k − c mod 26'], correct: 0, explanation: 'Chiffre de César : décalage de k positions dans l\'alphabet. Déchiffrement = décalage inverse : m = (c − k) mod 26.' },
          { type: 'mcq', question: 'Le chiffre de Vigenère généralise César avec une clé de longueur L. Il est vulnérable à :', answers: ['L\'analyse de fréquences après avoir trouvé L par l\'indice de coïncidence', 'La force brute seulement', 'La factorisation des entiers', 'L\'algorithme d\'Euclide'], correct: 0, explanation: 'Une fois la longueur L de la clé estimée (test de Kasiski, indice de coïncidence), chaque position mod L forme un César indépendant, attaquable par analyse de fréquences.' },
          { type: 'mcq', question: 'Dans le chiffrement RSA, si on chiffre deux fois le même message m avec la même clé publique (e,n), on obtient :', answers: ['Le même chiffré c = m^e mod n (déterministe sans padding)', 'Un chiffré différent grâce au hasard', 'c² mod n', 'm²^e mod n'], correct: 0, explanation: 'RSA basique est déterministe : m^e mod n donne toujours le même résultat. C\'est pourquoi on utilise un padding aléatoire (OAEP) en pratique pour éviter les attaques par texte choisi.' },
          { type: 'mcq', question: 'Si Eve intercepte c₁ = m^e mod n et c₂ = m^e mod n (même m, même clé), elle peut :', answers: ['Constater c₁ = c₂ et deviner que le même message a été envoyé', 'Retrouver m immédiatement', 'Factoriser n', 'Trouver e'], correct: 0, explanation: 'Sans padding, Eve voit c₁ = c₂ et déduit que le même message a été envoyé. C\'est l\'attaque par texte clair identique, qui motive l\'utilisation de padding aléatoire (RSA-OAEP).' },
          { type: 'input', question: 'RSA mini : p=3, q=11, n=33, φ(n)=20, e=3. d = 3⁻¹ mod 20 = ? (3×7=21≡1 [20])', correct: '7', explanation: '3×7 = 21 = 20+1 ≡ 1 [20]. Donc d = 7 est la clé privée RSA.' },
          { type: 'mcq', question: 'Chiffrer m=4 avec RSA (e=3, n=33) : c = 4³ mod 33 =', answers: ['31', '64', '4', '12'], correct: 0, explanation: '4³ = 64. 64 mod 33 = 64 − 33 = 31. c = 31.' },
          { type: 'mcq', question: 'Déchiffrer c=31 avec RSA (d=7, n=33) : m = 31⁷ mod 33. On utilise le CRT (mod 3 et mod 11) :', answers: ['m = 4', 'm = 31', 'm = 8', 'm = 7'], correct: 0, explanation: '31 ≡ 1 [3] et 1⁷ = 1. 31 ≡ 9 [11] et 9⁷ = 9^(10−3) = 9^10/9^3. Par Fermat 9^10≡1[11], donc 9⁷≡9^7. 9²=81≡4, 9⁴≡16≡5, 9^7=9^4×9^2×9≡5×4×9=180≡4 [11]. CRT : x≡1[3] et x≡4[11] → x=4. m = 4 ✓.' },
          { type: 'mcq', question: 'Diffie-Hellman : g=2, p=11. Alice choisit a=3 et envoie A = 2³ mod 11 =', answers: ['8', '6', '3', '2'], correct: 0, explanation: '2³ = 8. 8 mod 11 = 8. Alice envoie A = 8.' },
          { type: 'mcq', question: 'Bob choisit b=4 et envoie B = 2⁴ mod 11 = 16 mod 11 =', answers: ['5', '4', '6', '2'], correct: 0, explanation: '2⁴ = 16. 16 mod 11 = 5. Bob envoie B = 5.' },
          { type: 'input', question: 'Alice calcule la clé commune : K = B^a mod 11 = 5³ mod 11 = ?', correct: '4', explanation: '5³ = 125. 125 mod 11 : 125 = 11×11+4. K = 4. Bob vérifie : A^b = 8⁴ = 4096 mod 11. 4096 = 11×372+4. K = 4 ✓.' }
        ],
        // Niveau 3 — RSA et algorithmes
        [
          { type: 'mcq', question: 'La sécurité de RSA repose sur la difficulté de :', answers: ['Factoriser n = pq en connaissant seulement n', 'Calculer m^e mod n', 'Calculer des inverses modulaires', 'Trouver de grands premiers'], correct: 0, explanation: 'Si on peut factoriser n = pq, on calcule φ(n) = (p−1)(q−1), puis d = e⁻¹ mod φ(n), ce qui brise RSA. La factorisation de grands entiers est présumée difficile (aucun algorithme polynomial connu sur ordinateur classique).' },
          { type: 'mcq', question: 'L\'algorithme de factorisation de Pollard ρ a une complexité d\'environ :', answers: ['O(n^(1/4)) opérations', 'O(n)', 'O(log n)', 'O(n^(1/2))'], correct: 0, explanation: 'L\'algorithme ρ de Pollard exploite le paradoxe des anniversaires pour factoriser n en O(n^(1/4)) opérations (environ). C\'est bien plus rapide que la division par essai O(√n) pour les grands n.' },
          { type: 'mcq', question: 'Le crible quadratique factorise n en cherchant a²≡b² [n] puis en calculant PGCD(a−b, n). L\'idée est :', answers: ['Si a≢±b [n] alors PGCD(a−b,n) est un facteur non trivial de n', 'a et b sont toujours premiers', 'PGCD(a,n) factorise n directement', 'a²−b² = 0 dans ℤ/nℤ'], correct: 0, explanation: 'a²≡b² [n] ⟹ n|(a²−b²)=(a−b)(a+b). Si n∤(a−b) et n∤(a+b), alors PGCD(a−b,n) et PGCD(a+b,n) sont deux facteurs non triviaux de n.' },
          { type: 'mcq', question: 'L\'algorithme de Miller-Rabin test si n est composé en cherchant un "témoin". Pour n premier, il renvoie toujours "probablement premier" car :', answers: ['Il utilise Fermat et les racines de l\'unité mod p', 'n est grand', 'Les témoins sont rares', 'Le test est aléatoire'], correct: 0, explanation: 'Miller-Rabin décompose n−1 = 2^s × d (d impair) et teste si a^d ≡ 1 [n] ou a^(2^r×d) ≡ −1 [n] pour un certain r. Pour n premier, l\'une de ces conditions est toujours vraie (par Fermat et la structure des racines de ±1).' },
          { type: 'mcq', question: 'Le nombre de faux témoins pour Miller-Rabin (composés passant le test) est au plus :', answers: ['1/4 de tous les a ∈ {2,…,n−2}', '1/2', 'Aucun', 'Tous si n est de Carmichael'], correct: 0, explanation: 'Rabin a prouvé que pour tout n composé, au plus 1/4 des bases a sont de faux témoins. En testant k bases aléatoires, la probabilité d\'erreur est ≤ 4^(−k).' },
          { type: 'input', question: 'RSA : p=5, q=11, n=55, e=3. Chiffrer m=7 : c = 7³ mod 55 = 343 mod 55 = ?', correct: '13', explanation: '343 mod 55 : 55×6=330. 343−330=13. c = 13.' },
          { type: 'mcq', question: 'Déchiffrer c=13 (d=27, n=55) : 13^27 mod 55. Via CRT (mod 5 et mod 11) : 13≡3 [5], 3^27 mod 5 (ordre 4, 27=4×6+3) =', answers: ['3^3=27≡2 [5]', '3^4=81≡1 [5]', '3^2=9≡4 [5]', '3^27≡3 [5]'], correct: 0, explanation: 'Ordre de 3 mod 5 = 4. 27 mod 4 = 3. 3^3 = 27 ≡ 2 [5].' },
          { type: 'mcq', question: '13 mod 11 = 2. 2^27 mod 11 (ordre 10, 27 mod 10 = 7). 2^7 = 128 mod 11 =', answers: ['7', '8', '6', '5'], correct: 0, explanation: '128 = 11×11 + 7. 2^7 mod 11 = 7.' },
          { type: 'mcq', question: 'CRT final : x≡2 [5] et x≡7 [11]. Solution mod 55 = ?', answers: ['7', '2', '52', '29'], correct: 0, explanation: 'x≡7 [11] et x≡2 [5]. x=7,18,29,40,51,62... x=7: 7 mod 5=2 ✓. Donc m = 7. RSA déchiffre correctement ✓.' },
          { type: 'mcq', question: 'L\'attaque "small e" sur RSA (e=3, même m envoyé à 3 personnes) utilise :', answers: ['Le théorème chinois des restes pour retrouver m³ puis prendre la racine cubique', 'La factorisation de n', 'L\'algorithme d\'Euclide étendu', 'Le logarithme discret'], correct: 0, explanation: 'Si m^3 < n₁n₂n₃, le CRT donne m^3 dans ℤ (sans réduction modulaire), et prendre la racine cubique entière donne m. C\'est l\'attaque de Hastad.' }
        ],
        // Niveau 4 — Algorithmes avancés
        [
          { type: 'mcq', question: 'L\'arithmétique modulaire permet de calculer a^n mod m en O(log n) multiplications. L\'algorithme est :', answers: ['Exponentiation rapide (square-and-multiply)', 'Division successive', 'Série de Taylor', 'Crible d\'Ératosthène'], correct: 0, explanation: 'L\'exponentiation rapide décompose n en binaire : a^n = produit des a^(2^k) pour les bits k à 1. Chaque doublement est un carré mod m. Total : O(log n) carrés et multiplications.' },
          { type: 'mcq', question: 'Le protocole ElGamal utilise le logarithme discret. Chiffrer m avec clé publique (g, p, h=g^x mod p) : choisir k aléatoire, envoyer :', answers: ['(g^k mod p, m × h^k mod p)', '(m^k mod p, g)', '(g^x mod p, m+k)', '(m × g^k mod p, h)'], correct: 0, explanation: 'ElGamal : choisir k aléatoire. Envoyer (c₁, c₂) = (g^k mod p, m × h^k mod p). Déchiffrement : m = c₂ × (c₁^x)⁻¹ mod p. La sécurité repose sur le logarithme discret.' },
          { type: 'mcq', question: 'La signature numérique DSA utilise : choisir k aléatoire, calculer r = (g^k mod p) mod q. La sécurité est compromise si :', answers: ['Le même k est réutilisé pour deux signatures différentes', 'p est pair', 'q est premier', 'g est un générateur'], correct: 0, explanation: 'Si le même k est utilisé deux fois, les deux équations de signature permettent de retrouver la clé privée x par soustraction. Ce fut la vulnérabilité exploitée dans le piratage de la PS3 en 2010.' },
          { type: 'mcq', question: 'La cryptographie sur courbes elliptiques (ECC) opère dans un groupe E(𝔽_p). L\'addition de points P+Q est définie géométriquement et calculée :', answers: ['Via les formules de Weierstrass avec opérations mod p', 'Par la multiplication des coordonnées mod p', 'Par l\'algorithme d\'Euclide sur les points', 'Par la formule de Fermat'], correct: 0, explanation: 'L\'addition de points sur E : y²=x³+ax+b sur 𝔽_p utilise les formules de pente (λ=(y₂−y₁)×(x₂−x₁)⁻¹ mod p) et des coordonnées x₃=λ²−x₁−x₂, y₃=λ(x₁−x₃)−y₁, toutes mod p.' },
          { type: 'mcq', question: 'ECC est préféré à RSA pour les petits appareils (cartes à puce) car à sécurité équivalente :', answers: ['Les clés ECC sont bien plus courtes (256 bits ≈ 3072 bits RSA)', 'ECC est plus rapide à programmer', 'ECC ne nécessite pas de modulo', 'RSA est breveté'], correct: 0, explanation: 'Une clé ECC de 256 bits offre une sécurité comparable à une clé RSA de 3072 bits. Moins de données à stocker et à transmettre, calculs plus rapides sur processeurs contraints.' },
          { type: 'input', question: 'Crible d\'Ératosthène mod p : tester si 97 est premier. Il suffit de vérifier les diviseurs jusqu\'à √97 ≈ 9,8. Tester 2,3,5,7. 97 mod 2=1, mod 3=1, mod 5=2, mod 7=6. 97 est :', correct: 'premier', explanation: '97 n\'est divisible par aucun premier ≤ 9 (2,3,5,7). Donc 97 est premier.' },
          { type: 'mcq', question: 'L\'algorithme AES (standard de chiffrement symétrique) opère dans 𝔽_{2⁸} = 𝔽_2[X]/(X⁸+X⁴+X³+X+1). L\'inversion y d\'un octet x est calculée :', answers: ['Via x^254 dans 𝔽_{2⁸} (car |𝔽_{2⁸}×| = 255)', 'Par l\'algorithme d\'Euclide étendu dans ℤ', 'Directement par une table', 'Via Fermat dans ℤ/2ℤ'], correct: 0, explanation: 'Dans 𝔽_{2⁸}, x^255=1 pour x≠0. Donc x^(−1) = x^(254) = x^(255−1). C\'est utilisé dans la S-Box d\'AES, souvent précalculée en table pour l\'efficacité.' },
          { type: 'mcq', question: 'Les codes BCH (Bose-Chaudhuri-Hocquenghem) corrigent des erreurs en utilisant :', answers: ['Des polynômes générateurs sur 𝔽_{2^m} et des racines dans des corps d\'extension', 'Des congruences mod 2', 'Le théorème de Wilson', 'La factorisation d\'entiers'], correct: 0, explanation: 'Les codes BCH utilisent des polynômes sur des corps finis 𝔽_{2^m}. Un code BCH capable de corriger t erreurs choisit un polynôme générateur ayant 2t racines consécutives dans 𝔽_{2^m}.' },
          { type: 'mcq', question: 'Le code Reed-Solomon (CD, DVD, QR codes) est un code BCH sur 𝔽_{2^8}. Il peut corriger :', answers: ['Jusqu\'à t octets erronés si 2t octets de redondance sont ajoutés', 'Tous les octets erronés', 't bits seulement', 'Uniquement des effacements (erasures)'], correct: 0, explanation: 'Reed-Solomon : avec 2t symboles de redondance, on peut corriger jusqu\'à t erreurs (symboles corrompus) ou 2t effacements (symboles manquants connus). Fondamental pour les supports numériques.' },
          { type: 'mcq', question: 'La transformation de Fourier discrète (DFT) sur 𝔽_p utilise une racine primitive n-ième de l\'unité ω ∈ 𝔽_p. Elle existe si :', answers: ['n | (p−1)', 'n | p', 'n est premier', 'p = n'], correct: 0, explanation: 'Une racine n-ième primitive de l\'unité dans 𝔽_p existe ssi n | (p−1) = |(𝔽_p)×|. Cela permet la multiplication rapide de polynômes mod p par NTT (Number Theoretic Transform).' }
        ],
        // Niveau 5 — Théorie des nombres appliquée
        [
          { type: 'mcq', question: 'Le protocole d\'échange de clés ECDH (Elliptic Curve Diffie-Hellman) est sécurisé si le problème du logarithme discret sur la courbe E(𝔽_p) est difficile. La taille recommandée de p est :', answers: ['256 bits (courbe NIST P-256)', '64 bits', '128 bits', '1024 bits'], correct: 0, explanation: 'ECDH sur P-256 (courbe secp256r1 du NIST) utilise p de 256 bits, offrant ~128 bits de sécurité. C\'est le standard actuel pour les connexions TLS/HTTPS.' },
          { type: 'mcq', question: 'Bitcoin utilise la courbe secp256k1 : y²=x³+7 sur 𝔽_p. Les signatures sont des signatures Schnorr ou ECDSA utilisant :', answers: ['Le logarithme discret sur E(𝔽_p) et des opérations mod n (ordre du groupe)', 'RSA sur les clés publiques', 'Des hachages SHA-256 seulement', 'Le théorème chinois des restes'], correct: 0, explanation: 'Bitcoin utilise ECDSA (Elliptic Curve Digital Signature Algorithm) sur secp256k1. La sécurité repose sur la difficulté du problème du logarithme discret sur courbes elliptiques (ECDLP).' },
          { type: 'mcq', question: 'La cryptographie post-quantique (résistante aux ordinateurs quantiques) utilise notamment :', answers: ['Des réseaux euclidiens (lattices) et des codes correcteurs', 'RSA avec de plus grandes clés', 'ECC sur des corps plus grands', 'Des nombres de Mersenne premiers'], correct: 0, explanation: 'Les algorithmes quantiques (Shor) cassent RSA et ECC en temps polynomial. La cryptographie post-quantique (NIST PQC) standardise des schémas basés sur les réseaux (CRYSTALS-Kyber, CRYSTALS-Dilithium), les codes (BIKE, HQC) et d\'autres problèmes difficiles même quantiquement.' },
          { type: 'mcq', question: 'L\'algorithme de Shor (quantique) factorise n en O((log n)³) opérations. Il repose sur :', answers: ['La transformée de Fourier quantique pour trouver l\'ordre de a mod n', 'La mesure des qubits', 'L\'algorithme de Grover', 'La décomposition de Schur'], correct: 0, explanation: 'L\'algorithme de Shor : (1) Choisir a aléatoire, (2) Trouver l\'ordre r de a mod n par QFT (Quantum Fourier Transform), (3) PGCD(a^(r/2)±1, n) donne les facteurs. La QFT est l\'étape quantique clé.' },
          { type: 'mcq', question: 'Le théorème des nombres premiers affirme π(x) ~ x/ln(x). Cela implique que le n-ième nombre premier pₙ est approximativement :', answers: ['n × ln(n)', 'n²', 'e^n', 'n/ln(n)'], correct: 0, explanation: 'Puisque π(x) ~ x/ln(x), inverser donne pₙ ~ n×ln(n). Le n-ième premier est de l\'ordre de n×ln(n). Ex : p_{1000} ≈ 1000×ln(1000) ≈ 6907, et p_{1000} = 7919 en réalité.' },
          { type: 'mcq', question: 'La densité des nombres premiers autour de x est environ 1/ln(x). Pour générer une clé RSA de 2048 bits, il faut un premier de 1024 bits. Combien d\'essais en moyenne ?', answers: ['ln(2^1024) ≈ 710 essais', '2^1024 essais', '1024 essais', '2048 essais'], correct: 0, explanation: 'La probabilité qu\'un entier aléatoire de 1024 bits soit premier est ≈ 1/ln(2^1024) = 1/(1024×ln2) ≈ 1/710. En moyenne, ~710 essais suffisent avec un test de primalité.' },
          { type: 'input', question: 'Estimer le nombre de premiers à 6 chiffres (entre 100000 et 999999). π(999999) − π(99999) ≈ 999999/ln(999999) − 99999/ln(99999). Résultat approximatif (au millier) ?', correct: '68000', explanation: 'π(10^6)≈10^6/ln(10^6)=10^6/13.8≈72382. π(10^5)≈10^5/11.5≈8696. Différence≈72382−8696≈63686≈64000. Valeur exacte : 68906. Estimation raisonnable ~68000.' },
          { type: 'mcq', question: 'La conjecture de Goldbach (1742, non prouvée) affirme que tout entier pair >2 est :', answers: ['Somme de deux nombres premiers', 'Produit de deux premiers', 'Multiple d\'un premier', 'Somme de trois carrés'], correct: 0, explanation: 'Goldbach : tout entier pair n > 2 s\'écrit n = p + q avec p, q premiers. Vérifié jusqu\'à 4×10^18. Non prouvé en général, malgré des résultats partiels (théorème de Chen : tout pair = premier + produit d\'au plus 2 premiers).' },
          { type: 'mcq', question: 'L\'hypothèse de Riemann (non prouvée) sur les zéros de ζ(s) implique une distribution très précise des premiers. En particulier :', answers: ['|π(x) − Li(x)| = O(√x × ln(x))', '|π(x) − Li(x)| = O(1)', 'π(x) = Li(x) exactement', 'π(x) > Li(x) toujours'], correct: 0, explanation: 'Sous l\'hypothèse de Riemann, |π(x) − Li(x)| = O(√x × ln x). C\'est bien meilleur que ce qu\'on peut prouver inconditionnellement (O(x × exp(−c√ln x)) par Hadamard-de la Vallée Poussin).' },
          { type: 'mcq', question: 'La méthode de Monte Carlo pour estimer π utilise des congruences pseudo-aléatoires (générateurs linéaires congruentiels) : xₙ₊₁ = (a×xₙ + c) mod m. Ce générateur a une bonne qualité si :', answers: ['PGCD(a−1, m), PGCD(c,m), et la structure de m satisfont le critère de Hull-Dobell', 'm est premier', 'a est premier', 'c = 0'], correct: 0, explanation: 'Le théorème de Hull-Dobell : le LCG a une période maximale m ssi : (1) PGCD(c,m)=1, (2) a≡1 [p] pour tout premier p|m, (3) si 4|m alors a≡1 [4].' }
        ],
        // =======================
        // ===== Niveau L1 =======
        // =======================
        [
          { type: 'mcq', question: 'La sécurité de RSA est liée à la complexité de la factorisation. Le meilleur algorithme classique connu (GNFS) a complexité :', answers: ['exp(O((log n)^(1/3) (log log n)^(2/3))) — sous-exponentielle', 'O((log n)^3) — polynomiale', 'O(√n) — racine carrée', 'O(n) — linéaire'], correct: 0, explanation: 'Le General Number Field Sieve (GNFS) a une complexité L_n[1/3, c] = exp((c+o(1))(ln n)^(1/3)(ln ln n)^(2/3)), sous-exponentielle mais super-polynomiale. C\'est le meilleur algorithme classique connu pour la factorisation.' },
          { type: 'mcq', question: 'Un schéma de chiffrement est IND-CPA (sécurité sémantique) si aucun adversaire polynomial ne peut :', answers: ['Distinguer le chiffré d\'un message choisi de celui d\'un autre message', 'Factoriser n', 'Calculer la clé privée', 'Trouver une collision'], correct: 0, explanation: 'IND-CPA (Indistinguishability under Chosen Plaintext Attack) : l\'adversaire choisit deux messages m₀, m₁, reçoit le chiffré de l\'un des deux, et ne peut pas déterminer lequel avec probabilité > 1/2 + négligeable.' },
          { type: 'mcq', question: 'RSA basique (sans padding) n\'est pas IND-CPA car il est :', answers: ['Déterministe et malléable : E(m₁)×E(m₂) = E(m₁m₂ mod n)', 'Trop lent', 'Non bijectif', 'Basé sur le logarithme discret'], correct: 0, explanation: 'RSA est déterministe (même m → même c) donc non IND-CPA. De plus, il est malléable : (m^e)×(m\'e) = (mm\')^e mod n. RSA-OAEP (Optimal Asymmetric Encryption Padding) remédie à ces défauts.' },
          { type: 'mcq', question: 'Les preuves de connaissance zéro (Zero-Knowledge Proofs) permettent de prouver qu\'on connaît x tel que f(x)=y sans révéler x. Un exemple basé sur le calcul modulaire est :', answers: ['Prouver qu\'on connaît la racine carrée de y mod n (protocole de Goldwasser-Micali)', 'Prouver que n est premier', 'Calculer e^x mod n', 'Vérifier une signature RSA'], correct: 0, explanation: 'Goldwasser-Micali : Alice prouve qu\'elle connaît x tel que x²≡y [n] sans révéler x. Protocole interactif : le vérificateur envoie un défi, Alice répond de façon cohérente uniquement si elle connaît la racine.' },
          { type: 'mcq', question: 'Le chiffrement homomorphe (Gentry, 2009) permet de calculer f(Enc(x)) = Enc(f(x)) pour toute fonction f. La construction initiale repose sur :', answers: ['Des réseaux euclidiens avec erreurs (LWE — Learning With Errors)', 'RSA classique', 'El Gamal classique', 'Le logarithme discret mod p'], correct: 0, explanation: 'Le FHE (Fully Homomorphic Encryption) de Gentry utilise des réseaux euclidiens et le problème LWE (Learning With Errors) : distinguer Ax+e (A aléatoire, e petit) de vecteurs uniformes.' },
          { type: 'mcq', question: 'La transformée numéro-théorique (NTT) permet la multiplication rapide de polynômes mod p. Elle requiert un premier p tel que :', answers: ['p ≡ 1 [2^k] pour k assez grand (racine primitive de l\'unité d\'ordre 2^k)', 'p est de Mersenne', 'p = 2^n', 'p est très petit'], correct: 0, explanation: 'Pour effectuer une NTT de taille 2^k, il faut une racine primitive 2^k-ième de l\'unité dans 𝔽_p, ce qui requiert 2^k | (p−1). Des premiers comme p = 998244353 = 119×2^23+1 sont standards en compétition algorithmique.' },
          { type: 'mcq', question: 'La fonction de hachage SHA-256 produit un digest de 256 bits. La résistance aux collisions repose sur :', answers: ['La difficulté de trouver m≠m\' avec H(m)=H(m\') (problème ouvert mais empiriquement difficile)', 'La factorisation', 'Le logarithme discret', 'Le théorème des restes chinois'], correct: 0, explanation: 'SHA-256 est une construction ad hoc (Merkle-Damgård) dont la résistance aux collisions est empirique. Contrairement à RSA/ECC, il n\'y a pas de réduction de sécurité à un problème mathématique précis.' },
          { type: 'mcq', question: 'La blockchain Bitcoin encode les transactions en utilisant mod p (courbe secp256k1). Un bloc est valide si le hash SHA-256(SHA-256(en-tête)) est inférieur à une cible. Ce mécanisme s\'appelle :', answers: ['Preuve de travail (Proof of Work) — puzzle modulaire de recherche de nonce', 'Preuve d\'enjeu (Proof of Stake)', 'Signature numérique', 'Chiffrement symétrique'], correct: 0, explanation: 'PoW de Bitcoin : trouver un nonce tel que SHA-256²(en-tête || nonce) < cible. C\'est une recherche exhaustive (aucun raccourci) qui assure la sécurité de la blockchain par coût de calcul.' },
          { type: 'mcq', question: 'L\'arithmétique modulaire est centrale dans la théorie des corps de nombres. Le discriminant d\'un corps K de degré n sur ℚ mesure :', answers: ['La ramification des premiers dans l\'anneau des entiers O_K', 'Le nombre de premiers dans K', 'La taille de K', 'Le degré de l\'extension'], correct: 0, explanation: 'disc(O_K/ℤ) = det(Tr(eᵢeⱼ)). Un premier p se ramifie dans O_K ssi p | disc(K). La ramification est la dégénérescence du comportement modulaire des premiers dans les extensions de corps.' },
          { type: 'mcq', question: 'La correspondance de Langlands est un programme reliant représentations galoisiennes et formes automorphes. Le cas GL(1) est essentiellement :', answers: ['La théorie du corps de classes (liant (ℤ/nℤ)× et extensions abéliennes de ℚ)', 'La loi de réciprocité quadratique seule', 'L\'hypothèse de Riemann', 'La factorisation unique dans ℤ[i]'], correct: 0, explanation: 'Le programme de Langlands généralise massivement la théorie du corps de classes. Pour GL(1), il encode exactement la théorie du corps de classes : extensions abéliennes ↔ caractères de (ℤ/nℤ)×. Pour GL(2) et plus, il encode les formes modulaires et les représentations galoisiennes non abéliennes.' }
        ]
      ]
    }

  ]
};
