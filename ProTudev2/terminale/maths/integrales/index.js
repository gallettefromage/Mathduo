// Chapitre: Intégrales
// terminale > maths
// Généré le 15/03/2026
// 8 notion(s) + 3 L1

export default {
  id: "integrales",
  title: "Intégrales",
  description: "Primitives, calcul intégral, techniques avancées",
  icon: "∫",
  xpMax: 220,
  notions: [
    {
      id: "primitives",
      label: "Primitives",
      icon: "∫",
      lesson: {
        formula: "F est primitive de f  ⟺  F' = f",
        text: "Une primitive de f est une fonction F dont la dérivée est f. Deux primitives d'une même fonction diffèrent d'une constante C.",
        example: "Primitives de 2x : x² + C.  Vérif : (x²+C)' = 2x ✓"
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Définition",
          text: "Chercher une primitive revient à faire l’opération inverse de la dérivation. F est une primitive de f sur I si F'(x)=f(x) pour tout x de I. Si une fonction décrit une vitesse, alors une primitive décrit la position. Deux primitives d’une même fonction diffèrent toujours d’une constante C ∈ ℝ : elles ont la même pente partout, mais pas forcément la même hauteur."
        },
        {
          type: "formula",
          title: "🔑 Règles fondamentales (linéarité)",
          formula: "∫(af(x)+bg(x))dx = a∫f(x)dx + b∫g(x)dx<br>∫k dx = kx + C",
          text: "L’intégrale est linéaire : on peut séparer une somme et sortir les constantes. C’est la première chose à faire pour simplifier une intégrale. Toujours commencer par distribuer et simplifier."
        },
        {
          type: "formula",
          title: "🔑 Primitives usuelles essentielles",
          formula: "∫xⁿ dx = xⁿ⁺¹/(n+1)+C (n≠−1)<br>∫1/x dx = ln|x|+C<br>∫eˣ dx = eˣ+C",
          text: "La règle de la puissance est la base : on ajoute 1 à l’exposant puis on divise par ce nouveau nombre. Exception : pour n=−1, on obtient le logarithme."
        },
        {
          type: "formula",
          title: "🔑 Trigonométrie indispensable",
          formula: "∫cos(x)dx = sin(x)+C<br>∫sin(x)dx = −cos(x)+C<br>∫1/(1+x²)dx = arctan(x)+C",
          text: "Ces primitives doivent être connues parfaitement. Elles apparaissent souvent après une reconnaissance de dérivée ou un changement de variable."
        },
        {
          type: "formula",
          title: "👑 Technique du roi (changement de variable mental)",
          formula: "∫ₐᵇu f(x) dx = ∫ₐᵇu f(a+b-x) dx ",
          text: "On va juste dans l'autre sens"
        },
        {
          type: "formula",
          title: "🧠 Reconnaître une dérivée cachée",
          formula: "∫u'(x)u(x)ⁿ dx = u(x)ⁿ⁺¹/(n+1)+C<br>∫u'(x)/(1+u(x)²) dx = arctan(u(x))+C",
          text: "On ne cherche pas à intégrer : on reconnaît une dérivée connue. Dès qu’une fonction et sa dérivée apparaissent ensemble, pense substitution immédiate."
        },
        {
          type: "demo",
          title: "🔬 Pourquoi le + C est obligatoire ?",
          text: "Si F' = f et G' = f alors (F−G)' = 0. Donc F−G est constante. Géométriquement : toutes les primitives ont les mêmes pentes, donc leurs courbes sont simplement translatées verticalement."
        },
        {
          type: "warning",
          title: "⚠️ Pièges classiques",
          text: "1/x² n’est pas un logarithme : ∫1/x² dx = −1/x+C.<br>Toujours vérifier en dérivant le résultat.<br>Ne jamais oublier de diviser quand on intègre une puissance.<br>Si une expression est compliquée, chercher d’abord une dérivée cachée avant de développer."
        },
        {
          type: "definition",
          title: "🛠️ Stratégie générale",
          text: "1) Simplifier avec la linéarité.<br>2) Chercher une primitive directe connue.<br>3) Repérer une dérivée cachée (technique du roi).<br>4) Vérifier en dérivant.<br>Une intégrale se gagne par reconnaissance, pas par force brute."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            visual: "∫",
            question: "Une primitive de x est :",
            answers: [
              "x²/2+C",
              "x²+C",
              "2x+C",
              "ln(x)+C"
            ],
            correct: 0,
            explanation: "(x²/2)'=x ✓"
          },
          {
            type: "mcq",
            visual: "∫",
            question: "Une primitive de 5 est :",
            answers: [
              "5x+C",
              "x⁵+C",
              "5/x+C",
              "ln(5x)+C"
            ],
            correct: 0,
            explanation: "(5x)'=5 ✓"
          },
          {
            type: "mcq",
            visual: "∫",
            question: "Une primitive de x² est :",
            answers: [
              "x³/3+C",
              "x³+C",
              "2x+C",
              "x²/2+C"
            ],
            correct: 0,
            explanation: "Règle puissance."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "Une primitive de eˣ est :",
            answers: [
              "eˣ+C",
              "xeˣ+C",
              "e²ˣ+C",
              "ln(x)+C"
            ],
            correct: 0,
            explanation: "Dérivée de eˣ = eˣ."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "Une primitive de 1/x est :",
            answers: [
              "ln|x|+C",
              "1/x²+C",
              "x+C",
              "eˣ+C"
            ],
            correct: 0,
            explanation: "Cas n=-1."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "Une primitive de cos(x) est :",
            answers: [
              "sin(x)+C",
              "−sin(x)+C",
              "cos(x)+C",
              "tan(x)+C"
            ],
            correct: 0,
            explanation: "Formule trig."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "Une primitive de sin(x) est :",
            answers: [
              "−cos(x)+C",
              "cos(x)+C",
              "sin(x)+C",
              "xsin(x)+C"
            ],
            correct: 0,
            explanation: "Formule trig."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "Une primitive de 3x² est :",
            answers: [
              "x³+C",
              "3x³+C",
              "x³/3+C",
              "ln(x)+C"
            ],
            correct: 0,
            explanation: "(x³)'=3x²."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "Une primitive de 4x³ est :",
            answers: [
              "x⁴+C",
              "4x⁴+C",
              "x⁴/4+C",
              "2x²+C"
            ],
            correct: 0,
            explanation: "Règle puissance."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "Une primitive de 2eˣ est :",
            answers: [
              "2eˣ+C",
              "e²ˣ+C",
              "2xeˣ+C",
              "ln(2eˣ)+C"
            ],
            correct: 0,
            explanation: "Constante multiplicative."
          }
        ],
        [
          {
            type: "mcq",
            visual: "∫",
            question: "Primitive de x²+2x ?",
            answers: [
              "x³/3+x²+C",
              "x³+x²+C",
              "x³/3+2x+C",
              "x²+x+C"
            ],
            correct: 0,
            explanation: "Linéarité."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "Primitive de 3x+4 ?",
            answers: [
              "3x²/2+4x+C",
              "x²+4x+C",
              "3x²+4x+C",
              "3x²/2+4+C"
            ],
            correct: 0,
            explanation: "Séparer."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "Primitive de x³−x ?",
            answers: [
              "x⁴/4−x²/2+C",
              "x⁴−x²+C",
              "x⁴/4−x+C",
              "x³/3−x²/2"
            ],
            correct: 0,
            explanation: "Puissance."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "Primitive de 2eˣ+3 ?",
            answers: [
              "2eˣ+3x+C",
              "eˣ+3x+C",
              "2eˣ+3+C",
              "2eˣ+x+C"
            ],
            correct: 0,
            explanation: "Linéarité."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "Primitive de cos(x)+x ?",
            answers: [
              "sin(x)+x²/2+C",
              "cos(x)+x²/2+C",
              "sin(x)+x+C",
              "sin(x)+x²+C"
            ],
            correct: 0,
            explanation: "Trig + puissance."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "Primitive de 1/x + x ?",
            answers: [
              "ln|x|+x²/2+C",
              "ln|x|+x+C",
              "x+x²/2+C",
              "ln|x²|+C"
            ],
            correct: 0,
            explanation: "Séparer."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "Primitive de 5x⁴ ?",
            answers: [
              "x⁵+C",
              "5x⁵+C",
              "x⁵/5+C",
              "x⁴/4+C"
            ],
            correct: 0,
            explanation: "Règle puissance."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "Primitive de −2sin(x) ?",
            answers: [
              "2cos(x)+C",
              "−2cos(x)+C",
              "2sin(x)+C",
              "−2sin(x)+C"
            ],
            correct: 0,
            explanation: "Constante."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "Primitive de 4/x ?",
            answers: [
              "4ln|x|+C",
              "ln|4x|+C",
              "4/x²+C",
              "x⁴+C"
            ],
            correct: 0,
            explanation: "Constante multiplicative."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "Primitive de 6 ?",
            answers: [
              "6x+C",
              "x⁶+C",
              "6/x+C",
              "ln(6x)+C"
            ],
            correct: 0,
            explanation: "Constante."
          }
        ],
        [
          {
            type: "input",
            visual: "🎯",
            question: "F(x)=x²+C primitive de 2x. Si F(1)=3, C=?",
            correct: "2",
            explanation: "1+C=3 donc C=2."
          },
          {
            type: "input",
            visual: "🎯",
            question: "F(x)=x³/3+C primitive de x². Si F(0)=5, C=?",
            correct: "5",
            explanation: "0+C=5."
          },
          {
            type: "input",
            visual: "🎯",
            question: "F(x)=eˣ+C primitive de eˣ. Si F(0)=4, C=?",
            correct: "3",
            explanation: "1+C=4."
          },
          {
            type: "input",
            visual: "🎯",
            question: "F(x)=−cos(x)+C primitive de sin(x). Si F(0)=2, C=?",
            correct: "3",
            explanation: "−1+C=2."
          },
          {
            type: "input",
            visual: "🎯",
            question: "F(x)=ln|x|+C primitive de 1/x. Si F(1)=0, C=?",
            correct: "0",
            explanation: "ln(1)=0."
          },
          {
            type: "input",
            visual: "🎯",
            question: "F(x)=x⁴/4+C primitive de x³. Si F(2)=5, C=?",
            correct: "1",
            explanation: "16/4=4 donc 4+C=5."
          },
          {
            type: "input",
            visual: "🎯",
            question: "F(x)=2eˣ+C primitive de 2eˣ. Si F(0)=5, C=?",
            correct: "3",
            explanation: "2+C=5."
          },
          {
            type: "input",
            visual: "🎯",
            question: "F(x)=sin(x)+C primitive de cos(x). Si F(π/2)=2, C=?",
            correct: "1",
            explanation: "1+C=2."
          },
          {
            type: "input",
            visual: "🎯",
            question: "F(x)=x²/2+C primitive de x. Si F(2)=5, C=?",
            correct: "3",
            explanation: "2+C=5."
          },
          {
            type: "input",
            visual: "🎯",
            question: "F(x)=3x²/2+C primitive de 3x. Si F(0)=−1, C=?",
            correct: "-1",
            explanation: "Direct."
          }
        ],
        [
          {
            type: "mcq",
            visual: "👑",
            question: "Primitive de 2x/(1+x²) ?",
            answers: [
              "ln(1+x²)+C",
              "1/(1+x²)+C",
              "arctan(x)+C",
              "x²+C"
            ],
            correct: 0,
            explanation: "f'/f."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "Primitive de 3e^(3x) ?",
            answers: [
              "e^(3x)+C",
              "e^(3x)/3+C",
              "3e^(3x)+C",
              "e^(x³)+C"
            ],
            correct: 0,
            explanation: "Dérivée interne."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "Primitive de (2x+1)³·2 ?",
            answers: [
              "(2x+1)⁴/2+C",
              "(2x+1)⁴/4+C",
              "(2x+1)³+C",
              "(2x+1)⁴+C"
            ],
            correct: 1,
            explanation: "u=2x+1."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "Primitive de cos(3x) ?",
            answers: [
              "sin(3x)/3+C",
              "sin(3x)+C",
              "3sin(3x)+C",
              "−sin(3x)/3+C"
            ],
            correct: 0,
            explanation: "Chaîne."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "Primitive de 1/(2x+1) ?",
            answers: [
              "(1/2)ln|2x+1|+C",
              "ln|2x+1|+C",
              "1/(2x+1)²+C",
              "arctan(x)+C"
            ],
            correct: 0,
            explanation: "f'/f."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "Primitive de 4x³/(x⁴+1) ?",
            answers: [
              "ln(x⁴+1)+C",
              "x⁴+1+C",
              "1/(x⁴+1)+C",
              "arctan(x⁴)+C"
            ],
            correct: 0,
            explanation: "f'/f."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "Primitive de 5(5x+2)⁴ ?",
            answers: [
              "(5x+2)⁵+C",
              "(5x+2)⁵/5+C",
              "5(5x+2)⁵+C",
              "(5x+2)⁴+C"
            ],
            correct: 0,
            explanation: "Chaîne."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "Primitive de x/(1+x²) ?",
            answers: [
              "(1/2)ln(1+x²)+C",
              "ln(1+x²)+C",
              "arctan(x)+C",
              "x²+C"
            ],
            correct: 0,
            explanation: "f'/f."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "Primitive de e^(2x) ?",
            answers: [
              "e^(2x)/2+C",
              "2e^(2x)+C",
              "e^(2x)+C",
              "ln(e^(2x))+C"
            ],
            correct: 0,
            explanation: "Chaîne."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "Primitive de sin(4x) ?",
            answers: [
              "−cos(4x)/4+C",
              "cos(4x)/4+C",
              "−cos(4x)+C",
              "sin(4x)/4+C"
            ],
            correct: 0,
            explanation: "Chaîne."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🔍",
            question: "Primitive de (x²+1)·2x ?",
            answers: [
              "(x²+1)²/2+C",
              "(x²+1)²+C",
              "x²+1+C",
              "ln(x²+1)+C"
            ],
            correct: 0,
            explanation: "u=x²+1."
          },
          {
            type: "mcq",
            visual: "🔍",
            question: "Primitive de 1/(1+9x²) ?",
            answers: [
              "(1/3)arctan(3x)+C",
              "arctan(3x)+C",
              "(1/9)arctan(9x)+C",
              "ln(1+9x²)+C"
            ],
            correct: 0,
            explanation: "Forme arctan."
          },
          {
            type: "mcq",
            visual: "🔍",
            question: "Primitive de 6x/(3x²+1) ?",
            answers: [
              "ln(3x²+1)+C",
              "(1/2)ln(3x²+1)+C",
              "arctan(3x²)+C",
              "3x²+1+C"
            ],
            correct: 0,
            explanation: "f'/f."
          },
          {
            type: "mcq",
            visual: "🔍",
            question: "Primitive de e^(x²)·2x ?",
            answers: [
              "e^(x²)+C",
              "e^(x²)/2+C",
              "2e^(x²)+C",
              "ln(e^(x²))+C"
            ],
            correct: 0,
            explanation: "Chaîne."
          },
          {
            type: "mcq",
            visual: "🔍",
            question: "Primitive de cos(x)/(sin(x)) ?",
            answers: [
              "ln|sin(x)|+C",
              "sin(x)+C",
              "−cos(x)+C",
              "arctan(x)+C"
            ],
            correct: 0,
            explanation: "f'/f."
          },
          {
            type: "mcq",
            visual: "🔍",
            question: "Primitive de 2/(1+(2x)²) ?",
            answers: [
              "arctan(2x)+C",
              "(1/2)arctan(2x)+C",
              "arctan(x)+C",
              "ln(1+4x²)+C"
            ],
            correct: 0,
            explanation: "Arctan chaîne."
          },
          {
            type: "mcq",
            visual: "🔍",
            question: "Primitive de (3x+1)²·3 ?",
            answers: [
              "(3x+1)³+C",
              "(3x+1)³/3+C",
              "3(3x+1)³+C",
              "(3x+1)²+C"
            ],
            correct: 1,
            explanation: "Chaîne."
          },
          {
            type: "mcq",
            visual: "🔍",
            question: "Primitive de 7e^(7x) ?",
            answers: [
              "e^(7x)+C",
              "7e^(7x)+C",
              "e^(7x)/7+C",
              "e^(x⁷)+C"
            ],
            correct: 0,
            explanation: "Chaîne."
          },
          {
            type: "mcq",
            visual: "🔍",
            question: "Primitive de x·e^(x²) ?",
            answers: [
              "(1/2)e^(x²)+C",
              "e^(x²)+C",
              "xe^(x²)+C",
              "ln(e^(x²))+C"
            ],
            correct: 0,
            explanation: "u=x²."
          },
          {
            type: "mcq",
            visual: "🔍",
            question: "Primitive de 8x⁷ ?",
            answers: [
              "x⁸+C",
              "8x⁸+C",
              "x⁸/8+C",
              "x⁷/7+C"
            ],
            correct: 0,
            explanation: "Puissance."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🏆",
            question: "Primitive de (x²+3)·2x ?",
            answers: [
              "(x²+3)²/2+C",
              "(x²+3)²+C",
              "x²+3+C",
              "ln(x²+3)+C"
            ],
            correct: 0,
            explanation: "Chaîne."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "Primitive de 4x/(x²+1) ?",
            answers: [
              "2ln(x²+1)+C",
              "ln(x²+1)+C",
              "arctan(x)+C",
              "x²+C"
            ],
            correct: 0,
            explanation: "f'/f."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "Primitive de e^(5x) ?",
            answers: [
              "e^(5x)/5+C",
              "5e^(5x)+C",
              "e^(5x)+C",
              "ln(e^(5x))+C"
            ],
            correct: 0,
            explanation: "Chaîne."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "Primitive de sin(2x) ?",
            answers: [
              "−cos(2x)/2+C",
              "cos(2x)/2+C",
              "−cos(2x)+C",
              "sin(2x)/2+C"
            ],
            correct: 0,
            explanation: "Chaîne."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "Primitive de 9x²e^(3x³) ?",
            answers: [
              "e^(3x³)+C",
              "3e^(3x³)+C",
              "e^(3x³)/3+C",
              "ln(e^(3x³))+C"
            ],
            correct: 0,
            explanation: "u=3x³."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "Primitive de 1/(x ln(x)) ?",
            answers: [
              "ln|ln(x)|+C",
              "1/ln(x)+C",
              "ln(x)+C",
              "arctan(ln(x))+C"
            ],
            correct: 0,
            explanation: "f'/f."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "Primitive de (4x+1)⁵·4 ?",
            answers: [
              "(4x+1)⁶+C",
              "(4x+1)⁶/4+C",
              "4(4x+1)⁶+C",
              "(4x+1)⁵+C"
            ],
            correct: 1,
            explanation: "Chaîne."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "Primitive de 2x cos(x²) ?",
            answers: [
              "sin(x²)+C",
              "cos(x²)+C",
              "−sin(x²)+C",
              "(1/2)sin(x²)+C"
            ],
            correct: 0,
            explanation: "u=x²."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "Primitive de 3/(1+(3x)²) ?",
            answers: [
              "arctan(3x)+C",
              "(1/3)arctan(3x)+C",
              "arctan(x)+C",
              "ln(1+9x²)+C"
            ],
            correct: 0,
            explanation: "Arctan chaîne."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "Primitive de 10x⁹ ?",
            answers: [
              "x¹⁰+C",
              "10x¹⁰+C",
              "x¹⁰/10+C",
              "x⁹/9+C"
            ],
            correct: 0,
            explanation: "Puissance."
          }
        ]
      ]
    },
    {
      id: "calcul-integral",
      label: "Calcul intégral",
      icon: "∫",
      lesson: {
        formula: "∫ₐᵇ f(x)dx = [F(x)]ₐᵇ = F(b) − F(a)",
        text: "L'intégrale définie de a à b = valeur de la primitive à b moins valeur à a.",
        example: "∫₀² (2x+1)dx = [x²+x]₀² = 6 − 0 = 6"
      },
      fullBlocks: [
        {
          type: "formula",
          title: "🔑 Formule fondamentale",
          formula: "∫ₐᵇ f(x)dx = F(b) − F(a)",
          text: "Si F est une primitive de f sur [a,b], alors l'intégrale mesure la variation totale de F entre a et b. Toutes les primitives diffèrent d'une constante, donc F(b)−F(a) ne dépend pas du choix de F."
        },
        {
          type: "demo",
          title: "🔬 Démonstration (Théorème fondamental)",
          text: "Soit F une primitive de f. Alors F'(x)=f(x). Par définition de l'intégrale comme limite de sommes : ∫ₐᵇ f(x)dx = ∫ₐᵇ F'(x)dx. Or la variation totale d'une fonction dérivable entre a et b est F(b)−F(a). Donc ∫ₐᵇ f(x)dx = F(b)−F(a)."
        },
        {
          type: "formula",
          title: "🔑 Linéarité",
          formula: "∫ₐᵇ(αf + βg)dx = α∫ₐᵇf(x)dx + β∫ₐᵇg(x)dx",
          text: "L'intégrale est une opération linéaire : on peut séparer une somme et sortir les constantes multiplicatives."
        },
        {
          type: "demo",
          title: "🔬 Pourquoi la linéarité ?",
          text: "Les sommes de Riemann vérifient déjà la linéarité : somme(αf + βg) = α somme(f) + β somme(g). En passant à la limite quand la largeur des intervalles tend vers 0, la propriété reste vraie pour l'intégrale."
        },
        {
          type: "formula",
          title: "🔑 Relation de Chasles",
          formula: "∫ₐᵇ f(x)dx + ∫ᵦ꜀ f(x)dx = ∫ₐ꜀ f(x)dx",
          text: "On peut découper un intervalle en deux parties sans changer la valeur totale : l'intégrale est additive sur les intervalles."
        },
        {
          type: "demo",
          title: "🔬 Justification géométrique",
          text: "L'intégrale représente une aire algébrique. L'aire entre a et c est la somme de l'aire entre a et b et de celle entre b et c. Cela correspond aussi à F(c)−F(a) = (F(b)−F(a)) + (F(c)−F(b))."
        },
        {
          type: "formula",
          title: "🔑 Changement de bornes",
          formula: "∫ₐᵇ f(x)dx = −∫ᵦₐ f(x)dx",
          text: "Inverser les bornes change le signe car on mesure la variation dans le sens opposé."
        },
        {
          type: "formula",
          title: "🔑 Fonction paire / impaire",
          formula: "∫₋ₐᵃ f(x)dx = 0 si f impaire",
          text: "Si f est impaire, les aires positives et négatives se compensent exactement sur [−a,a]. Si f est paire, ∫₋ₐᵃ f(x)dx = 2∫₀ᵃ f(x)dx."
        },
        {
          type: "demo",
          title: "🔬 Exemple symétrique",
          text: "Pour f(x)=x³, on a f(−x)=−f(x). Les contributions entre −a et 0 annulent celles entre 0 et a. Donc ∫₋ₐᵃ x³ dx = 0."
        },
        {
          type: "warning",
          title: "⚠️ Aire vs intégrale",
          text: "L'intégrale est une aire algébrique : si f(x)<0, la contribution est négative. L'aire géométrique nécessite ∫ₐᵇ |f(x)|dx."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            visual: "∫",
            question: "∫₀¹ x dx =",
            answers: [
              "1/2",
              "1",
              "0",
              "2"
            ],
            correct: 0,
            explanation: "[x²/2]₀¹=1/2."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "∫₀² 1 dx =",
            answers: [
              "2",
              "1",
              "0",
              "4"
            ],
            correct: 0,
            explanation: "2−0=2."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "∫₀¹ 2x dx =",
            answers: [
              "1",
              "2",
              "1/2",
              "0"
            ],
            correct: 0,
            explanation: "[x²]₀¹=1."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "∫₀³ 3 dx =",
            answers: [
              "9",
              "3",
              "6",
              "0"
            ],
            correct: 0,
            explanation: "3×3=9."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "∫₁² x dx =",
            answers: [
              "3/2",
              "1",
              "2",
              "5/2"
            ],
            correct: 0,
            explanation: "[x²/2]₁²=2−1/2=3/2."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "∫₀¹ x² dx =",
            answers: [
              "1/3",
              "1",
              "1/2",
              "2/3"
            ],
            correct: 0,
            explanation: "[x³/3]₀¹=1/3."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "∫₀² x² dx =",
            answers: [
              "8/3",
              "4",
              "2",
              "4/3"
            ],
            correct: 0,
            explanation: "8/3."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "∫₀¹ 5x dx =",
            answers: [
              "5/2",
              "5",
              "1",
              "0"
            ],
            correct: 0,
            explanation: "[5x²/2]₀¹=5/2."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "∫₂³ 1 dx =",
            answers: [
              "1",
              "3",
              "2",
              "0"
            ],
            correct: 0,
            explanation: "3−2=1."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "∫₀¹ 4 dx =",
            answers: [
              "4",
              "1",
              "0",
              "8"
            ],
            correct: 0,
            explanation: "4×1=4."
          }
        ],
        [
          {
            type: "mcq",
            visual: "∫",
            question: "∫₀π sin(x)dx =",
            answers: [
              "2",
              "0",
              "1",
              "π"
            ],
            correct: 0,
            explanation: "[−cos(x)]₀π=2."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "∫₀^(π/2) cos(x)dx =",
            answers: [
              "1",
              "0",
              "π/2",
              "2"
            ],
            correct: 0,
            explanation: "[sin(x)]₀^(π/2)=1."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "∫₀π cos(x)dx =",
            answers: [
              "0",
              "2",
              "−2",
              "1"
            ],
            correct: 0,
            explanation: "sin(π)−sin(0)=0."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "∫₀¹ eˣ dx =",
            answers: [
              "e−1",
              "e",
              "1",
              "e+1"
            ],
            correct: 0,
            explanation: "[eˣ]₀¹=e−1."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "∫₁² 1/x dx =",
            answers: [
              "ln2",
              "1",
              "ln3",
              "2"
            ],
            correct: 0,
            explanation: "ln2."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "∫₀¹ (x+1)dx =",
            answers: [
              "3/2",
              "2",
              "1",
              "1/2"
            ],
            correct: 0,
            explanation: "1/2+1=3/2."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "∫₀² (2x+1)dx =",
            answers: [
              "6",
              "4",
              "5",
              "2"
            ],
            correct: 0,
            explanation: "6."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "∫₀¹ 3x² dx =",
            answers: [
              "1",
              "3",
              "0",
              "1/3"
            ],
            correct: 0,
            explanation: "1."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "∫₁ᵉ 1/x dx =",
            answers: [
              "1",
              "e",
              "0",
              "ln(e²)"
            ],
            correct: 0,
            explanation: "ln(e)=1."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "∫₀¹ 2eˣ dx =",
            answers: [
              "2(e−1)",
              "e−1",
              "2e",
              "1"
            ],
            correct: 0,
            explanation: "2(e−1)."
          }
        ],
        [
          {
            type: "mcq",
            visual: "📐",
            question: "∫₋₁¹ x dx =",
            answers: [
              "0",
              "1",
              "−1",
              "2"
            ],
            correct: 0,
            explanation: "Impaire."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₋₂² x³ dx =",
            answers: [
              "0",
              "4",
              "−4",
              "8"
            ],
            correct: 0,
            explanation: "Impaire."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₋₂² x² dx =",
            answers: [
              "16/3",
              "0",
              "8",
              "4"
            ],
            correct: 0,
            explanation: "Paire."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₋π^π sin(x)dx =",
            answers: [
              "0",
              "2",
              "−2",
              "π"
            ],
            correct: 0,
            explanation: "Impaire."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₋π^π cos(x)dx =",
            answers: [
              "0",
              "2",
              "−2",
              "π"
            ],
            correct: 0,
            explanation: "sin(π)−sin(−π)=0."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₀² (x²−1)dx =",
            answers: [
              "2/3",
              "0",
              "1",
              "4/3"
            ],
            correct: 0,
            explanation: "8/3−2=2/3."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₀¹ (1−x)dx =",
            answers: [
              "1/2",
              "1",
              "0",
              "2"
            ],
            correct: 0,
            explanation: "1−1/2=1/2."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₁² x² dx =",
            answers: [
              "7/3",
              "3",
              "1",
              "8/3"
            ],
            correct: 0,
            explanation: "8/3−1/3=7/3."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₀¹ (x²+x)dx =",
            answers: [
              "5/6",
              "1",
              "2/3",
              "1/2"
            ],
            correct: 0,
            explanation: "1/3+1/2=5/6."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₀¹ (3x²+2x)dx =",
            answers: [
              "2",
              "1",
              "3",
              "5/2"
            ],
            correct: 0,
            explanation: "1+1=2."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🔗",
            question: "∫₀⁴ f = ∫₀² f + ?",
            answers: [
              "∫₂⁴ f",
              "∫₋₂⁴ f",
              "∫₀⁶ f",
              "0"
            ],
            correct: 0,
            explanation: "Chasles."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "∫₂⁵ f − ∫₂³ f =",
            answers: [
              "∫₃⁵ f",
              "∫₀⁵ f",
              "0",
              "∫₅³ f"
            ],
            correct: 0,
            explanation: "Découpage."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "∫₀³ 2x dx =",
            answers: [
              "9",
              "6",
              "3",
              "18"
            ],
            correct: 0,
            explanation: "9."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "∫₀¹ (x²+1)dx =",
            answers: [
              "4/3",
              "1",
              "1/3",
              "2"
            ],
            correct: 0,
            explanation: "1/3+1."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "∫₀^(π/2) sin(x)dx =",
            answers: [
              "1",
              "0",
              "2",
              "π/2"
            ],
            correct: 0,
            explanation: "1."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "∫₀² eˣ dx =",
            answers: [
              "e²−1",
              "e²",
              "e",
              "1"
            ],
            correct: 0,
            explanation: "e²−1."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "∫₁² ln(x)' dx =",
            answers: [
              "ln2",
              "1",
              "0",
              "2"
            ],
            correct: 0,
            explanation: "ln2."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "∫₀¹ 4x³ dx =",
            answers: [
              "1",
              "4",
              "0",
              "1/4"
            ],
            correct: 0,
            explanation: "1."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "∫₀¹ x·2 dx =",
            answers: [
              "1",
              "2",
              "1/2",
              "0"
            ],
            correct: 0,
            explanation: "1."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "∫₀¹ (x³−x)dx =",
            answers: [
              "−1/4",
              "0",
              "1/4",
              "1/2"
            ],
            correct: 0,
            explanation: "1/4−1/2=−1/4."
          }
        ],
        [
          {
            type: "mcq",
            visual: "💡",
            question: "∫₀¹ x eˣ dx =",
            answers: [
              "1",
              "e−1",
              "e",
              "2"
            ],
            correct: 0,
            explanation: "[(x−1)eˣ]₀¹=1."
          },
          {
            type: "mcq",
            visual: "💡",
            question: "∫₀¹ (x²+1)2x dx =",
            answers: [
              "2",
              "1",
              "3",
              "4"
            ],
            correct: 0,
            explanation: "[ (x²+1)²/2 ]₀¹=2."
          },
          {
            type: "mcq",
            visual: "💡",
            question: "∫₀¹ 2x/(1+x²) dx =",
            answers: [
              "ln2",
              "1",
              "0",
              "2"
            ],
            correct: 0,
            explanation: "ln2."
          },
          {
            type: "mcq",
            visual: "💡",
            question: "∫₀¹ e^(x²)·2x dx =",
            answers: [
              "e−1",
              "1",
              "e",
              "2"
            ],
            correct: 0,
            explanation: "e−1."
          },
          {
            type: "mcq",
            visual: "💡",
            question: "∫₀^(π/4) 1/(1+x²) dx =",
            answers: [
              "arctan(π/4)",
              "π/4",
              "1",
              "π/2"
            ],
            correct: 1,
            explanation: "arctan(π/4)=π/4."
          },
          {
            type: "mcq",
            visual: "💡",
            question: "∫₁² 2/x dx =",
            answers: [
              "2ln2",
              "ln2",
              "2",
              "1"
            ],
            correct: 0,
            explanation: "2ln2."
          },
          {
            type: "mcq",
            visual: "💡",
            question: "∫₀¹ 3x²e^(x³) dx =",
            answers: [
              "e−1",
              "1",
              "e",
              "3"
            ],
            correct: 0,
            explanation: "e−1."
          },
          {
            type: "mcq",
            visual: "💡",
            question: "∫₀¹ cos(2x) dx =",
            answers: [
              "sin(2)/2",
              "1",
              "0",
              "2"
            ],
            correct: 0,
            explanation: "sin(2)/2."
          },
          {
            type: "mcq",
            visual: "💡",
            question: "∫₀¹ 1/(2x+1) dx =",
            answers: [
              "(1/2)ln3",
              "ln3",
              "1",
              "3"
            ],
            correct: 0,
            explanation: "(1/2)ln3."
          },
          {
            type: "mcq",
            visual: "💡",
            question: "∫₀¹ 4x³/(x⁴+1) dx =",
            answers: [
              "ln2",
              "1",
              "0",
              "2"
            ],
            correct: 0,
            explanation: "ln2."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🏆",
            question: "∫₁ᵉ ln(x) dx =",
            answers: [
              "1",
              "e−1",
              "e",
              "e+1"
            ],
            correct: 0,
            explanation: "1."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "∫₀¹ x ln(x) dx =",
            answers: [
              "−1/4",
              "0",
              "1/4",
              "−1/2"
            ],
            correct: 0,
            explanation: "−1/4."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "∫₀¹ x²eˣ dx =",
            answers: [
              "e−2",
              "1",
              "e",
              "2"
            ],
            correct: 0,
            explanation: "[ (x²−2x+2)eˣ ]₀¹=e−2."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "∫₀^(π/2) x cos(x) dx =",
            answers: [
              "π/2−1",
              "1",
              "0",
              "π/2"
            ],
            correct: 0,
            explanation: "Intégration par parties."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "∫₀¹ (ln(x))' dx =",
            answers: [
              "0",
              "1",
              "−1",
              "ln1"
            ],
            correct: 0,
            explanation: "ln1−ln1=0."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "∫₀¹ 1/(x+1) dx =",
            answers: [
              "ln2",
              "1",
              "0",
              "2"
            ],
            correct: 0,
            explanation: "ln2."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "∫₀¹ 6x/(3x²+1) dx =",
            answers: [
              "ln4",
              "2",
              "1",
              "ln2"
            ],
            correct: 3,
            explanation: "ln2."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "∫₀¹ sin(x) dx =",
            answers: [
              "1−cos1",
              "1",
              "0",
              "sin1"
            ],
            correct: 0,
            explanation: "1−cos1."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "∫₀¹ e^(2x) dx =",
            answers: [
              "(e²−1)/2",
              "e²−1",
              "e²",
              "1"
            ],
            correct: 0,
            explanation: "Chaîne."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "∫₀¹ 1/(1+x)² dx =",
            answers: [
              "1/2",
              "1",
              "0",
              "2"
            ],
            correct: 0,
            explanation: "[−1/(1+x)]₀¹=1/2."
          }
        ]
      ]
    },
    {
      id: "aires",
      label: "Aires et valeur moyenne",
      icon: "📊",
      lesson: {
        formula: "Aire = ∫ₐᵇ |f(x)|dx   |   Valeur moy. = (1/(b−a))∫ₐᵇ f",
        text: "Si f ≥ 0, l'intégrale donne l'aire sous la courbe. La valeur moyenne généralise la notion de moyenne à une infinité de valeurs.",
        example: "Aire sous f(x)=x sur [0,4] : [x²/2]₀⁴ = 8 u.a."
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Aire sous la courbe",
          text: "Si f(x) ≥ 0 sur [a,b], l'aire entre la courbe Cf, l'axe des abscisses et les droites x=a et x=b est ∫ₐᵇ f(x)dx. Cette aire est exprimée en unités d'aire (u.a.)."
        },
        {
          type: "demo",
          title: "🔬 Justification géométrique",
          text: "L'intégrale est la limite des sommes de Riemann : on découpe [a,b] en petits intervalles de largeur Δx et on approxime l'aire par Σ f(xᵢ)Δx. Quand Δx→0, cette somme tend vers ∫ₐᵇ f(x)dx. Si f ≥ 0, chaque terme est positif : on obtient exactement l'aire."
        },
        {
          type: "warning",
          title: "⚠️ Si f change de signe",
          text: "L'intégrale calcule une aire algébrique : les zones sous l'axe comptent négativement. Pour obtenir l'aire totale réelle, il faut repérer les zéros de f et calculer ∫ |f(x)|dx en découpant l'intervalle."
        },
        {
          type: "formula",
          title: "🔑 Aire entre deux courbes",
          formula: "Aire(f,g) = ∫ₐᵇ |f(x) − g(x)| dx",
          text: "On intègre la valeur absolue de la différence verticale entre les deux courbes. Si f(x) ≥ g(x) sur [a,b], alors Aire = ∫ₐᵇ (f(x) − g(x))dx."
        },
        {
          type: "demo",
          title: "🔬 Pourquoi la valeur absolue ?",
          text: "La distance verticale entre deux courbes est |f(x)−g(x)|. Sans valeur absolue, les zones où f<g seraient comptées négativement. L'aire géométrique doit toujours être positive."
        },
        {
          type: "formula",
          title: "🔑 Valeur moyenne",
          formula: "f̄ = (1/(b−a)) ∫ₐᵇ f(x)dx",
          text: "La valeur moyenne de f sur [a,b] est le nombre f̄ tel que le rectangle de base (b−a) et de hauteur f̄ ait la même aire que la région sous la courbe."
        },
        {
          type: "demo",
          title: "🔬 Justification analytique",
          text: "La moyenne discrète est (1<br>)Σ f(xᵢ). En écrivant Σ f(xᵢ) = (n/(b−a)) Σ f(xᵢ)Δx et en passant à la limite quand n→∞, on obtient (1/(b−a))∫ₐᵇ f(x)dx. La valeur moyenne continue est donc la limite naturelle de la moyenne arithmétique."
        },
        {
          type: "formula",
          title: "🔑 Cas symétrique",
          formula: "Si f paire : ∫₋ₐᵃ f(x)dx = 2∫₀ᵃ f(x)dx",
          text: "Si f est paire, la courbe est symétrique par rapport à l'axe des ordonnées. L'aire totale sur [−a,a] est donc le double de l'aire sur [0,a]."
        },
        {
          type: "warning",
          title: "⚠️ Interprétation physique",
          text: "Si f représente une vitesse, ∫ₐᵇ f(x)dx donne un déplacement (signé). La valeur moyenne correspond à la vitesse constante qui produirait le même déplacement sur la même durée."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            visual: "📊",
            question: "Aire sous f(x)=x sur [0,2] :",
            answers: [
              "2",
              "4",
              "1",
              "3"
            ],
            correct: 0,
            explanation: "[x²/2]₀² = 2."
          },
          {
            type: "mcq",
            visual: "📊",
            question: "Aire sous f(x)=3 sur [0,4] :",
            answers: [
              "12",
              "7",
              "3",
              "4"
            ],
            correct: 0,
            explanation: "3×4 = 12."
          },
          {
            type: "mcq",
            visual: "📊",
            question: "∫₀¹ x dx =",
            answers: [
              "1/2",
              "1",
              "2",
              "1/3"
            ],
            correct: 0,
            explanation: "[x²/2]₀¹ = 1/2."
          },
          {
            type: "mcq",
            visual: "📊",
            question: "∫₀² 2x dx =",
            answers: [
              "4",
              "2",
              "6",
              "8"
            ],
            correct: 0,
            explanation: "[x²]₀² = 4."
          },
          {
            type: "mcq",
            visual: "📊",
            question: "∫₀¹ 4x dx =",
            answers: [
              "2",
              "4",
              "1",
              "3"
            ],
            correct: 0,
            explanation: "[2x²]₀¹ = 2."
          },
          {
            type: "mcq",
            visual: "📊",
            question: "Aire sous f(x)=x² sur [0,1] :",
            answers: [
              "1/3",
              "1/2",
              "1",
              "2/3"
            ],
            correct: 0,
            explanation: "[x³/3]₀¹ = 1/3."
          },
          {
            type: "mcq",
            visual: "📊",
            question: "∫₀³ 1 dx =",
            answers: [
              "3",
              "1",
              "0",
              "9"
            ],
            correct: 0,
            explanation: "1×3 = 3."
          },
          {
            type: "mcq",
            visual: "📊",
            question: "∫₀² x² dx =",
            answers: [
              "8/3",
              "4",
              "2",
              "2/3"
            ],
            correct: 0,
            explanation: "[x³/3]₀² = 8/3."
          },
          {
            type: "mcq",
            visual: "📊",
            question: "∫₀¹ 2 dx =",
            answers: [
              "2",
              "1",
              "0",
              "3"
            ],
            correct: 0,
            explanation: "2×1 = 2."
          },
          {
            type: "mcq",
            visual: "📊",
            question: "Aire sous f(x)=5 sur [0,2] :",
            answers: [
              "10",
              "5",
              "2",
              "7"
            ],
            correct: 0,
            explanation: "5×2 = 10."
          }
        ],
        [
          {
            type: "input",
            visual: "🎯",
            question: "Valeur moyenne de f(x)=x sur [0,2]",
            correct: "1",
            explanation: "(1/2)·2 = 1."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Valeur moyenne de x² sur [0,3]",
            correct: "3",
            explanation: "(1/3)·9 = 3."
          },
          {
            type: "input",
            visual: "🎯",
            question: "∫₀π sin(x)dx =",
            correct: "2",
            explanation: "[−cos(x)]₀π = 2."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Valeur moyenne de 4 sur [0,5]",
            correct: "4",
            explanation: "Fonction constante."
          },
          {
            type: "input",
            visual: "🎯",
            question: "∫₀¹ eˣ dx =",
            correct: "e−1",
            explanation: "[eˣ]₀¹ = e−1."
          },
          {
            type: "input",
            visual: "🎯",
            question: "∫₀² x³ dx =",
            correct: "4",
            explanation: "[x⁴/4]₀² = 4."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Valeur moyenne de 2x sur [0,4]",
            correct: "4",
            explanation: "(1/4)[x²]₀⁴ = 4."
          },
          {
            type: "input",
            visual: "🎯",
            question: "∫₋₁¹ x dx =",
            correct: "0",
            explanation: "Fonction impaire."
          },
          {
            type: "input",
            visual: "🎯",
            question: "∫₀² (x+1) dx =",
            correct: "4",
            explanation: "[x²/2+x]₀² = 4."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Valeur moyenne de x sur [0,4]",
            correct: "2",
            explanation: "(1/4)·8 = 2."
          }
        ],
        [
          {
            type: "mcq",
            visual: "📐",
            question: "Aire entre x et x² sur [0,1] :",
            answers: [
              "1/6",
              "1/3",
              "1/2",
              "1/4"
            ],
            correct: 0,
            explanation: "∫₀¹(x−x²)dx = 1/6."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₀^(π/2) cos(x)dx =",
            answers: [
              "1",
              "0",
              "π/2",
              "2"
            ],
            correct: 0,
            explanation: "[sin(x)]₀^(π/2)=1."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₀π cos(x)dx =",
            answers: [
              "0",
              "2",
              "−2",
              "π"
            ],
            correct: 0,
            explanation: "[sin(x)]₀π=0."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Aire sous |x| sur [−1,1] :",
            answers: [
              "1",
              "0",
              "2",
              "1/2"
            ],
            correct: 0,
            explanation: "2×1/2=1."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Valeur moyenne de sin(x) sur [0,π] :",
            answers: [
              "2/π",
              "1",
              "0",
              "π"
            ],
            correct: 0,
            explanation: "(1/π)·2=2/π."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₁ᵉ (1/x)dx =",
            answers: [
              "1",
              "e",
              "0",
              "ln(e)"
            ],
            correct: 0,
            explanation: "[ln x]₁ᵉ=1."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₀¹ (1−x)dx =",
            answers: [
              "1/2",
              "1",
              "0",
              "2"
            ],
            correct: 0,
            explanation: "1/2."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₀² (4−x²)dx =",
            answers: [
              "16/3",
              "8",
              "4",
              "12"
            ],
            correct: 0,
            explanation: "[4x−x³/3]₀²=16/3."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₀¹ x·eˣ dx =",
            answers: [
              "1",
              "e",
              "e−1",
              "0"
            ],
            correct: 0,
            explanation: "IPP → 1."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₋₂² x³ dx =",
            answers: [
              "0",
              "4",
              "8",
              "16"
            ],
            correct: 0,
            explanation: "Impaire."
          }
        ],
        [
          {
            type: "input",
            visual: "🌊",
            question: "Aire entre y=2x et y=x² sur [0,2]",
            correct: "4/3",
            explanation: "∫₀²(2x−x²)dx=4/3."
          },
          {
            type: "input",
            visual: "🌊",
            question: "Valeur moyenne de eˣ sur [0,1]",
            correct: "e−1",
            explanation: "∫₀¹ eˣ dx=e−1."
          },
          {
            type: "input",
            visual: "🌊",
            question: "∫₀^(π/4) tan(x)dx =",
            correct: "−ln(√2/2)",
            explanation: "[−ln|cos(x)|]₀^(π/4)."
          },
          {
            type: "input",
            visual: "🌊",
            question: "∫₀¹ ln(x+1)dx =",
            correct: "2ln2−1",
            explanation: "Primitive (x+1)ln(x+1)−x."
          },
          {
            type: "input",
            visual: "🌊",
            question: "Aire sous eˣ sur [0,1]",
            correct: "e−1",
            explanation: "∫₀¹ eˣ dx."
          },
          {
            type: "input",
            visual: "🌊",
            question: "∫₀² x√x dx =",
            correct: "8/5",
            explanation: "x^(3/2) primitive 2/5 x^(5/2)."
          },
          {
            type: "input",
            visual: "🌊",
            question: "∫₁⁴ (1/√x)dx =",
            correct: "2",
            explanation: "[2√x]₁⁴=2."
          },
          {
            type: "input",
            visual: "🌊",
            question: "∫₀¹ (x²+2x)dx =",
            correct: "4/3",
            explanation: "[x³/3+x²]₀¹."
          },
          {
            type: "input",
            visual: "🌊",
            question: "∫₀^(π/2) sin(x)dx =",
            correct: "1",
            explanation: "[−cos(x)]₀^(π/2)."
          },
          {
            type: "input",
            visual: "🌊",
            question: "∫₋₁¹ x² dx =",
            correct: "2/3",
            explanation: "2∫₀¹ x² dx."
          }
        ],
        [
          {
            type: "mcq",
            visual: "💡",
            question: "Aire entre eˣ et 1 sur [0,1] :",
            answers: [
              "e−2",
              "e−1",
              "1",
              "e"
            ],
            correct: 0,
            explanation: "∫₀¹(eˣ−1)dx."
          },
          {
            type: "mcq",
            visual: "💡",
            question: "Valeur moyenne de x³ sur [0,2] :",
            answers: [
              "2",
              "4",
              "1",
              "3"
            ],
            correct: 0,
            explanation: "(1/2)[x⁴/4]₀²=2."
          },
          {
            type: "mcq",
            visual: "💡",
            question: "∫₀¹ (1/(1+x²))dx =",
            answers: [
              "π/4",
              "π/2",
              "1",
              "0"
            ],
            correct: 0,
            explanation: "[arctan(x)]₀¹."
          },
          {
            type: "mcq",
            visual: "💡",
            question: "∫₀² |x−1|dx =",
            answers: [
              "1",
              "2",
              "0",
              "1/2"
            ],
            correct: 0,
            explanation: "Symétrie."
          },
          {
            type: "mcq",
            visual: "💡",
            question: "∫₀^(π/2) sin²(x)dx =",
            answers: [
              "π/4",
              "π/2",
              "1",
              "0"
            ],
            correct: 0,
            explanation: "Identité trig."
          },
          {
            type: "mcq",
            visual: "💡",
            question: "∫₁² ln(x)dx =",
            answers: [
              "2ln2−1",
              "1",
              "ln2",
              "0"
            ],
            correct: 0,
            explanation: "IPP."
          },
          {
            type: "mcq",
            visual: "💡",
            question: "∫₀¹ x/(1+x²)dx =",
            answers: [
              "(1/2)ln2",
              "ln2",
              "1",
              "0"
            ],
            correct: 0,
            explanation: "Substitution."
          },
          {
            type: "mcq",
            visual: "💡",
            question: "∫₀¹ e^(2x)dx =",
            answers: [
              "(e²−1)/2",
              "e²−1",
              "1",
              "2"
            ],
            correct: 0,
            explanation: "Primitive e^(2x)/2."
          },
          {
            type: "mcq",
            visual: "💡",
            question: "∫₀¹ (1−x²)dx =",
            answers: [
              "2/3",
              "1",
              "1/3",
              "0"
            ],
            correct: 0,
            explanation: "2/3."
          },
          {
            type: "mcq",
            visual: "💡",
            question: "Valeur moyenne de cos(x) sur [0,π] :",
            answers: [
              "0",
              "1",
              "2/π",
              "π"
            ],
            correct: 0,
            explanation: "∫₀π cos(x)=0."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🏆",
            question: "∫₀¹ arctan(x)dx =",
            answers: [
              "π/4−(1/2)ln2",
              "π/4",
              "ln2",
              "1"
            ],
            correct: 0,
            explanation: "IPP."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "∫₀¹ ln(1+x)/x dx =",
            answers: [
              "π²/12",
              "π²/6",
              "1",
              "0"
            ],
            correct: 0,
            explanation: "Développement série."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "∫₀^(π/2) x sin(x)dx =",
            answers: [
              "1",
              "π/2",
              "0",
              "2"
            ],
            correct: 0,
            explanation: "IPP."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "∫₀¹ √(1−x²)dx =",
            answers: [
              "π/4",
              "π/2",
              "1",
              "2"
            ],
            correct: 0,
            explanation: "Quart de disque unité."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "∫₀¹ (ln x)dx =",
            answers: [
              "−1",
              "0",
              "1",
              "ln1"
            ],
            correct: 0,
            explanation: "[x ln x−x]₀¹."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "∫₀¹ x ln(x)dx =",
            answers: [
              "−1/4",
              "1/4",
              "0",
              "−1/2"
            ],
            correct: 0,
            explanation: "IPP."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "∫₀¹ (1/(1+x))dx =",
            answers: [
              "ln2",
              "1",
              "0",
              "2"
            ],
            correct: 0,
            explanation: "[ln(1+x)]₀¹."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "∫₀¹ x² eˣ dx =",
            answers: [
              "e−2",
              "e",
              "1",
              "2"
            ],
            correct: 0,
            explanation: "IPP double."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "∫₀^(π/2) cos²(x)dx =",
            answers: [
              "π/4",
              "π/2",
              "1",
              "0"
            ],
            correct: 0,
            explanation: "Identité trig."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "Valeur moyenne de 1/x sur [1,2] :",
            answers: [
              "ln2",
              "1/2",
              "1",
              "2"
            ],
            correct: 0,
            explanation: "(1/1)ln2."
          }
        ]
      ]
    },
    {
      id: "ipr",
      label: "Intégration par parties",
      icon: "⇌",
      lesson: {
        formula: "∫ₐᵇ u·v' = [u·v]ₐᵇ − ∫ₐᵇ u'·v",
        text: "La règle du produit renversée. Règle LIATE pour choisir u : Logarithme > Inverse trig > Algébrique > Trigonométrique > Exponentielle.",
        example: "∫ x·eˣ dx : u=x, v'=eˣ → (x−1)eˣ + C"
      },
      fullBlocks: [
        {
          type: "formula",
          title: "🔑 Formule IPP",
          formula: "∫ u(x)v'(x)dx = u(x)v(x) − ∫ u'(x)v(x)dx",
          text: "On dérive u et on intègre v'. Le but est de rendre l'intégrale restante plus simple que l'originale."
        },
        {
          type: "demo",
          title: "🔬 Preuve rigoureuse",
          text: "Règle du produit : (uv)' = u'v + uv'. En intégrant : ∫(uv)' = ∫u'v + ∫uv'. Donc uv = ∫u'v + ∫uv'. En isolant ∫uv' on obtient la formule IPP."
        },
        {
          type: "example",
          title: "📌 Stratégie LIATE",
          text: "Priorité pour choisir u : Logarithme > Inverse trig > Algébrique > Trigonométrique > Exponentielle. On choisit u comme le terme qui se simplifie en le dérivant."
        },
        {
          type: "example",
          title: "✅ Exemple simple",
          text: "∫ x·eˣ dx → u=x, v'=eˣ. On obtient xeˣ − ∫eˣ dx = (x−1)eˣ + C."
        },
        {
          type: "example",
          title: "✅ Double IPP",
          text: "∫ x²eˣ dx → IPP deux fois : x²eˣ−2xeˣ+2eˣ+C = (x²−2x+2)eˣ+C."
        },
        {
          type: "example",
          title: "✅ Équation en I",
          text: "Pour I = ∫ eˣcos(x)dx, après deux IPP on obtient 2I = eˣ(cos x + sin x). Donc I = eˣ(cos x + sin x)/2 + C."
        },
        {
          type: "warning",
          title: "⚠️ Mauvais choix de u",
          text: "Si dériver u complique l'expression (ex: u=eˣ face à x), la méthode devient plus difficile. Toujours vérifier que u' simplifie."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            visual: "∫",
            question: "Pour ∫ x·eˣ dx, on choisit :",
            answers: [
              "u=eˣ, v'=x",
              "u=x, v'=eˣ",
              "u=x², v'=eˣ",
              "u=1, v'=x·eˣ"
            ],
            correct: 1,
            explanation: "Algébrique avant exponentielle (LIATE)."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "Pour ∫ ln(x) dx, u =",
            answers: [
              "1",
              "ln(x)",
              "x",
              "1/x"
            ],
            correct: 1,
            explanation: "Logarithme prioritaire."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "∫ x·eˣ dx =",
            answers: [
              "xeˣ+C",
              "(x−1)eˣ+C",
              "x²eˣ/2+C",
              "eˣ/x+C"
            ],
            correct: 1,
            explanation: "[xeˣ]−∫eˣdx."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "∫ x·sin(x)dx =",
            answers: [
              "−xcos(x)+sin(x)+C",
              "xcos(x)+C",
              "sin(x)+C",
              "x²sin(x)+C"
            ],
            correct: 0,
            explanation: "IPP directe."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "∫ x·cos(x)dx =",
            answers: [
              "xsin(x)+cos(x)+C",
              "xsin(x)−cos(x)+C",
              "cos(x)+C",
              "x²cos(x)+C"
            ],
            correct: 0,
            explanation: "[xsin(x)]−∫sin(x)."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "∫ ln(x)dx =",
            answers: [
              "xln(x)−x+C",
              "ln(x)²+C",
              "1/x+C",
              "x+C"
            ],
            correct: 0,
            explanation: "u=ln(x), v'=1."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "Pour ∫ x²eˣ dx, u =",
            answers: [
              "eˣ",
              "x²",
              "x",
              "1"
            ],
            correct: 1,
            explanation: "Polynôme → dérivations successives."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "∫ xe^(−x)dx =",
            answers: [
              "−(x+1)e^(−x)+C",
              "(x−1)e^(−x)+C",
              "e^(−x)+C",
              "x²e^(−x)+C"
            ],
            correct: 0,
            explanation: "Attention au signe."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "∫ x ln(x)dx =",
            answers: [
              "x²ln(x)/2−x²/4+C",
              "x²ln(x)+C",
              "ln(x)²+C",
              "x²/2+C"
            ],
            correct: 0,
            explanation: "IPP puis simplification."
          },
          {
            type: "mcq",
            visual: "∫",
            question: "∫ x·e^(2x)dx =",
            answers: [
              "(2x−1)e^(2x)/4+C",
              "(x−1)e^(2x)+C",
              "xe^(2x)+C",
              "e^(2x)+C"
            ],
            correct: 0,
            explanation: "Facteur 2 pris en compte."
          }
        ],
        [
          {
            type: "mcq",
            visual: "📐",
            question: "∫₀¹ x·eˣ dx =",
            answers: [
              "1",
              "e−1",
              "e",
              "2e−1"
            ],
            correct: 0,
            explanation: "[(x−1)eˣ]₀¹."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₀^(π/2) x·cos(x)dx =",
            answers: [
              "π/2−1",
              "1",
              "π/2",
              "0"
            ],
            correct: 0,
            explanation: "Évaluation exacte."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₀¹ ln(x)dx =",
            answers: [
              "−1",
              "0",
              "1",
              "−1/2"
            ],
            correct: 0,
            explanation: "[xln(x)−x]₀¹."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₀¹ x ln(x)dx =",
            answers: [
              "−1/4",
              "1/4",
              "0",
              "−1/2"
            ],
            correct: 0,
            explanation: "IPP puis calcul exact."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₀^(π) x·sin(x)dx =",
            answers: [
              "π",
              "2",
              "0",
              "π−2"
            ],
            correct: 0,
            explanation: "Résultat π."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₀¹ x²eˣ dx =",
            answers: [
              "e−2",
              "2e−2",
              "e−1",
              "1"
            ],
            correct: 0,
            explanation: "Double IPP."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₁ᵉ ln(x)/x dx =",
            answers: [
              "1/2",
              "1",
              "0",
              "e"
            ],
            correct: 0,
            explanation: "Primitive ln(x)²/2."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₀^(π/2) x·sin(x)dx =",
            answers: [
              "π/2−1",
              "1",
              "0",
              "π/2"
            ],
            correct: 0,
            explanation: "Calcul exact."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₀¹ xe^(2x)dx =",
            answers: [
              "(e²−1)/4",
              "(e²−1)/2",
              "1/2",
              "e²/2"
            ],
            correct: 0,
            explanation: "IPP + bornes."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₀¹ x²ln(x)dx =",
            answers: [
              "−1/9",
              "1/9",
              "−1/3",
              "0"
            ],
            correct: 0,
            explanation: "Résultat exact −1/9."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🏆",
            question: "∫ x²eˣ dx =",
            answers: [
              "(x²−2x+2)eˣ+C",
              "(x²+2x+2)eˣ+C",
              "x²eˣ+C",
              "(x−1)²eˣ+C"
            ],
            correct: 0,
            explanation: "Deux IPP successives."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "∫ x³eˣ dx =",
            answers: [
              "(x³−3x²+6x−6)eˣ+C",
              "x³eˣ+C",
              "(x³+3x²)eˣ+C",
              "(x³−3x)eˣ+C"
            ],
            correct: 0,
            explanation: "IPP répétée."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "∫ x²sin(x)dx =",
            answers: [
              "−x²cos(x)+2xsin(x)+2cos(x)+C",
              "x²sin(x)+C",
              "2xcos(x)+C",
              "sin(x)+C"
            ],
            correct: 0,
            explanation: "Double IPP."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "∫ x²cos(x)dx =",
            answers: [
              "x²sin(x)+2xcos(x)−2sin(x)+C",
              "x²cos(x)+C",
              "sin(x)+C",
              "2xsin(x)+C"
            ],
            correct: 0,
            explanation: "Double IPP."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "∫ ln(x)²dx =",
            answers: [
              "xln(x)²−2xln(x)+2x+C",
              "ln(x)³+C",
              "xln(x)+C",
              "1/x+C"
            ],
            correct: 0,
            explanation: "IPP répétée."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "∫ x³ln(x)dx =",
            answers: [
              "x⁴ln(x)/4−x⁴/16+C",
              "x⁴ln(x)+C",
              "ln(x)²+C",
              "x⁴/4+C"
            ],
            correct: 0,
            explanation: "IPP."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "∫ x²e^(2x)dx =",
            answers: [
              "(x²−x+1/2)e^(2x)/2+C",
              "x²e^(2x)+C",
              "e^(2x)+C",
              "(x²−2x)e^(2x)+C"
            ],
            correct: 0,
            explanation: "Facteur 2 géré."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "∫ x arctan(x)dx =",
            answers: [
              "(x²/2)arctan(x)−x/2+ C",
              "arctan(x)²+C",
              "xarctan(x)+C",
              "ln(1+x²)+C"
            ],
            correct: 0,
            explanation: "IPP puis simplification."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "∫ x² arctan(x)dx =",
            answers: [
              "x³arctan(x)/3−x²/6+ln(1+x²)/6+C",
              "x²arctan(x)+C",
              "ln(1+x²)+C",
              "x³/3+C"
            ],
            correct: 0,
            explanation: "IPP."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "∫ x²e^(−x)dx =",
            answers: [
              "−(x²+2x+2)e^(−x)+C",
              "x²e^(−x)+C",
              "e^(−x)+C",
              "(x²−2x)e^(−x)+C"
            ],
            correct: 0,
            explanation: "Signe négatif propagé."
          }
        ],
        [
          {
            type: "mcq",
            visual: "♻️",
            question: "I=∫eˣcos(x)dx =",
            answers: [
              "eˣ(cos+sin)/2+C",
              "eˣcos(x)+C",
              "eˣsin(x)+C",
              "eˣ(cos−sin)/2+C"
            ],
            correct: 0,
            explanation: "2I = eˣ(cos+sin)."
          },
          {
            type: "mcq",
            visual: "♻️",
            question: "∫ eˣsin(x)dx =",
            answers: [
              "eˣ(sin−cos)/2+C",
              "eˣ(sin+cos)/2+C",
              "eˣsin(x)+C",
              "eˣcos(x)+C"
            ],
            correct: 1,
            explanation: "Même méthode."
          },
          {
            type: "mcq",
            visual: "♻️",
            question: "∫ e^(2x)cos(x)dx =",
            answers: [
              "e^(2x)(2cos+sin)/5+C",
              "e^(2x)cos(x)+C",
              "e^(2x)sin(x)+C",
              "e^(2x)(cos+2sin)/5+C"
            ],
            correct: 0,
            explanation: "Équation en I."
          },
          {
            type: "mcq",
            visual: "♻️",
            question: "∫ e^(2x)sin(x)dx =",
            answers: [
              "e^(2x)(2sin−cos)/5+C",
              "e^(2x)sin(x)+C",
              "e^(2x)cos(x)+C",
              "e^(2x)(sin+2cos)/5+C"
            ],
            correct: 0,
            explanation: "Résolution algébrique."
          },
          {
            type: "mcq",
            visual: "♻️",
            question: "∫ cos(x)e^(−x)dx =",
            answers: [
              "e^(−x)(−cos+sin)/2+C",
              "e^(−x)(cos+sin)/2+C",
              "e^(−x)cos(x)+C",
              "e^(−x)sin(x)+C"
            ],
            correct: 0,
            explanation: "Méthode identique."
          },
          {
            type: "mcq",
            visual: "♻️",
            question: "∫ sin(x)e^(−x)dx =",
            answers: [
              "e^(−x)(−sin−cos)/2+C",
              "e^(−x)sin(x)+C",
              "e^(−x)cos(x)+C",
              "e^(−x)(sin−cos)/2+C"
            ],
            correct: 0,
            explanation: "Équation en I."
          },
          {
            type: "mcq",
            visual: "♻️",
            question: "∫ e^(3x)cos(x)dx =",
            answers: [
              "e^(3x)(3cos+sin)/10+C",
              "e^(3x)cos(x)+C",
              "e^(3x)sin(x)+C",
              "e^(3x)(cos+3sin)/10+C"
            ],
            correct: 0,
            explanation: "Coefficient 3 pris en compte."
          },
          {
            type: "mcq",
            visual: "♻️",
            question: "∫ e^(3x)sin(x)dx =",
            answers: [
              "e^(3x)(3sin−cos)/10+C",
              "e^(3x)sin(x)+C",
              "e^(3x)cos(x)+C",
              "e^(3x)(sin+3cos)/10+C"
            ],
            correct: 0,
            explanation: "Même technique."
          },
          {
            type: "mcq",
            visual: "♻️",
            question: "∫ eˣcos(2x)dx =",
            answers: [
              "eˣ(cos2x+2sin2x)/5+C",
              "eˣcos(2x)+C",
              "eˣsin(2x)+C",
              "eˣ(2cos2x+sin2x)/5+C"
            ],
            correct: 0,
            explanation: "Résolution algébrique."
          },
          {
            type: "mcq",
            visual: "♻️",
            question: "∫ eˣsin(2x)dx =",
            answers: [
              "eˣ(sin2x−2cos2x)/5+C",
              "eˣsin(2x)+C",
              "eˣcos(2x)+C",
              "eˣ(2sin2x−cos2x)/5+C"
            ],
            correct: 0,
            explanation: "Équation en I."
          }
        ],
        [
          {
            type: "mcq",
            visual: "👑",
            question: "∫ sinⁿ(x)dx utilise :",
            answers: [
              "Formule de réduction",
              "IPP simple",
              "Substitution affine",
              "Changement variable"
            ],
            correct: 0,
            explanation: "Technique du roi."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "∫₀^(π/2) sin²(x)dx =",
            answers: [
              "π/4",
              "π/2",
              "1",
              "0"
            ],
            correct: 0,
            explanation: "Formule réduction."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "∫₀^(π/2) sin⁴(x)dx =",
            answers: [
              "3π/16",
              "π/4",
              "π/8",
              "π/16"
            ],
            correct: 0,
            explanation: "Réduction répétée."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "∫₀^(π/2) cos²(x)dx =",
            answers: [
              "π/4",
              "π/2",
              "1",
              "0"
            ],
            correct: 0,
            explanation: "Symétrie."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "∫₀^(π/2) sin³(x)dx =",
            answers: [
              "2/3",
              "1",
              "π/4",
              "π/8"
            ],
            correct: 0,
            explanation: "Réduction impair."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "∫₀^(π/2) sin⁵(x)dx =",
            answers: [
              "8/15",
              "4/5",
              "π/4",
              "16/15"
            ],
            correct: 0,
            explanation: "Récurrence."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "∫₀^(π/2) sin(x)cos(x)dx =",
            answers: [
              "1/2",
              "1",
              "0",
              "π/4"
            ],
            correct: 0,
            explanation: "Substitution u=sin(x)."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "∫₀^(π/2) sin²(x)cos²(x)dx =",
            answers: [
              "π/16",
              "π/8",
              "1/4",
              "π/4"
            ],
            correct: 0,
            explanation: "Identité trig."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "∫₀^(π/2) sin⁶(x)dx =",
            answers: [
              "5π/32",
              "3π/16",
              "π/4",
              "π/8"
            ],
            correct: 0,
            explanation: "Formule réduction."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "∫₀^(π/2) cos⁴(x)dx =",
            answers: [
              "3π/16",
              "π/4",
              "π/8",
              "π/16"
            ],
            correct: 0,
            explanation: "Même valeur que sin⁴."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🔥",
            question: "∫₀¹ x²ln(x)dx =",
            answers: [
              "−1/9",
              "1/9",
              "−1/3",
              "0"
            ],
            correct: 0,
            explanation: "IPP."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "∫₀^(π/2) xsin(x)dx =",
            answers: [
              "π/2−1",
              "1",
              "0",
              "π/2"
            ],
            correct: 0,
            explanation: "IPP."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "∫₀¹ x³eˣ dx =",
            answers: [
              "6−2e",
              "2e−6",
              "e−6",
              "6−e"
            ],
            correct: 0,
            explanation: "Triple IPP."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "∫₀^(π/2) sin⁴(x)cos²(x)dx =",
            answers: [
              "π/32",
              "π/16",
              "π/8",
              "π/4"
            ],
            correct: 0,
            explanation: "Réduction multiple."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "∫ eˣcos(3x)dx =",
            answers: [
              "eˣ(cos3x+3sin3x)/10+C",
              "eˣcos(3x)+C",
              "eˣsin(3x)+C",
              "eˣ(3cos3x+sin3x)/10+C"
            ],
            correct: 0,
            explanation: "Équation en I."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "∫₀¹ ln(x)²dx =",
            answers: [
              "2",
              "1",
              "−2",
              "1/2"
            ],
            correct: 0,
            explanation: "Résultat exact 2."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "∫₀^(π/2) sin⁷(x)dx =",
            answers: [
              "16/35",
              "8/35",
              "π/4",
              "32/35"
            ],
            correct: 0,
            explanation: "Formule réduction."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "∫₀¹ x²e^(2x)dx =",
            answers: [
              "(e²−1)/4",
              "(e²−1)/2",
              "1/4",
              "e²/4"
            ],
            correct: 0,
            explanation: "Double IPP."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "∫ x³sin(x)dx =",
            answers: [
              "−x³cos(x)+3x²sin(x)+6xcos(x)−6sin(x)+C",
              "x³sin(x)+C",
              "sin(x)+C",
              "x³cos(x)+C"
            ],
            correct: 0,
            explanation: "IPP répétée."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "∫₀^(π/2) cos⁶(x)dx =",
            answers: [
              "5π/32",
              "3π/16",
              "π/4",
              "π/8"
            ],
            correct: 0,
            explanation: "Réduction."
          }
        ]
      ]
    },
    {
      id: "changement-variable",
      label: "Changement de variable",
      icon: "🔄",
      lesson: {
        formula: "∫ₐᵇ f(g(x))·g'(x)dx = ∫_{g(a)}^{g(b)} f(u)du",
        text: "On pose u=g(x), du=g'(x)dx. Changer aussi les bornes ! Technique du Roi : ∫₀ᵃ f(x)dx = ∫₀ᵃ f(a−x)dx.",
        example: "I = ∫₀^(π/2) sin/(sin+cos). Roi → 2I=π/2 → I=π/4"
      },
      fullBlocks: [
        {
          type: "formula",
          title: "🔑 Méthode complète",
          formula: "u = g(x)  →  du = g'(x)dx<br>Bornes : x=a → u=g(a)<br>        x=b → u=g(b)",
          text: "Une substitution réussie supprime entièrement la variable x."
        },
        {
          type: "demo",
          title: "🔬 Pourquoi ça marche ?",
          text: "Par règle de la chaîne : d/dx[F(g(x))] = F'(g(x))·g'(x) = f(g(x))·g'(x).<br>En intégrant : F(g(b)) − F(g(a)) = ∫_{g(a)}^{g(b)} f(u)du."
        },
        {
          type: "technique",
          title: "👑 Technique du Roi — Idée clé",
          text: "Poser u = a−x inverse l’intervalle.<br>Souvent f(x)+f(a−x) devient constante.<br>On transforme une intégrale compliquée en intégrale simple."
        },
        {
          type: "example",
          title: "✅ Exemple polynomial",
          text: "∫₀¹ 2x(x²+1)³ dx<br>u=x²+1 → du=2x dx<br>Bornes : 1→2<br>= ∫₁² u³ du = [u⁴/4]₁² = 16/4 − 1/4 = 15/4."
        },
        {
          type: "example",
          title: "✅ Exemple trigonométrique",
          text: "∫ √(1−x²) dx sur [0,1]<br>Poser x=sin(t)<br>Devient ∫₀^(π/2) cos²(t)dt = π/4."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            visual: "🔄",
            question: "Pour ∫ 3x²(x³+1)⁵ dx, poser :",
            answers: [
              "u=x³+1",
              "u=3x²",
              "u=x²",
              "u=x³"
            ],
            correct: 0,
            explanation: "du=3x²dx."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "∫ 2x(x²+1)³ dx =",
            answers: [
              "(x²+1)⁴/4+C",
              "(x²+1)³+C",
              "x²+1+C",
              "(x²+1)⁴+C"
            ],
            correct: 0,
            explanation: "u=x²+1."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "∫ e^(3x) dx =",
            answers: [
              "e^(3x)/3+C",
              "e^(3x)+C",
              "3e^(3x)+C",
              "ln(3x)+C"
            ],
            correct: 0,
            explanation: "u=3x."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "∫ cos(5x)dx =",
            answers: [
              "sin(5x)/5+C",
              "5sin(5x)+C",
              "cos(5x)/5+C",
              "−sin(5x)+C"
            ],
            correct: 0,
            explanation: "u=5x."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "∫ sin(x)cos(x)dx =",
            answers: [
              "sin²(x)/2+C",
              "cos²(x)/2+C",
              "−cos²(x)/2+C",
              "sin(x)cos(x)+C"
            ],
            correct: 0,
            explanation: "u=sin(x)."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "∫ e^sin(x)cos(x)dx =",
            answers: [
              "e^sin(x)+C",
              "sin(x)e^sin(x)+C",
              "cos(x)e^sin(x)+C",
              "e^x+C"
            ],
            correct: 0,
            explanation: "u=sin(x)."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "∫ dx/(1+x²) =",
            answers: [
              "arctan(x)+C",
              "ln(1+x²)+C",
              "1/(1+x²)+C",
              "x/(1+x²)+C"
            ],
            correct: 0,
            explanation: "Primitive connue."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "∫ x/(1+x²)dx =",
            answers: [
              "ln(1+x²)/2+C",
              "arctan(x)+C",
              "1/(1+x²)+C",
              "x²+C"
            ],
            correct: 0,
            explanation: "u=1+x²."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "∫ √x dx =",
            answers: [
              "2x^(3/2)/3+C",
              "x^(3/2)+C",
              "√x+C",
              "3x^(1/2)+C"
            ],
            correct: 0,
            explanation: "Puissance."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "∫ 1/(2x+1)dx =",
            answers: [
              "ln(2x+1)/2+C",
              "ln(2x+1)+C",
              "1/(2x+1)+C",
              "x/(2x+1)+C"
            ],
            correct: 0,
            explanation: "u=2x+1."
          }
        ],
        [
          {
            type: "mcq",
            visual: "📐",
            question: "∫₀¹ 2x(x²+1)dx =",
            answers: [
              "3/2",
              "1/2",
              "3",
              "4"
            ],
            correct: 0,
            explanation: "u=x²+1."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₀¹ e^(2x)dx =",
            answers: [
              "(e²−1)/2",
              "e²−1",
              "1",
              "e²/2"
            ],
            correct: 0,
            explanation: "u=2x."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₀^(π) sin(x)dx =",
            answers: [
              "2",
              "0",
              "π",
              "1"
            ],
            correct: 0,
            explanation: "Primitive −cos."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₀^(π/2) cos(x)dx =",
            answers: [
              "1",
              "0",
              "π/2",
              "2"
            ],
            correct: 0,
            explanation: "sin(x)."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₀¹ x/(1+x²)dx =",
            answers: [
              "ln(2)/2",
              "ln(2)",
              "1/2",
              "1"
            ],
            correct: 0,
            explanation: "u=1+x²."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₀¹ dx/(1+x²) =",
            answers: [
              "π/4",
              "π/2",
              "1",
              "1/2"
            ],
            correct: 0,
            explanation: "arctan."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₀¹ √x dx =",
            answers: [
              "2/3",
              "1/2",
              "1",
              "3/2"
            ],
            correct: 0,
            explanation: "Puissance."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₀^(π/2) sin²(x)dx =",
            answers: [
              "π/4",
              "π/2",
              "1",
              "0"
            ],
            correct: 0,
            explanation: "Identité trig."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₀¹ 3x² dx =",
            answers: [
              "1",
              "3",
              "1/3",
              "2"
            ],
            correct: 0,
            explanation: "Primitive x³."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "∫₁² dx/x =",
            answers: [
              "ln(2)",
              "1",
              "ln(4)",
              "2"
            ],
            correct: 0,
            explanation: "ln(b)−ln(a)."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🔄",
            question: "∫ √(1−x²) dx sur [0,1] =",
            answers: [
              "π/4",
              "π/2",
              "1",
              "2/3"
            ],
            correct: 0,
            explanation: "x=sin(t) → ∫ cos²(t)dt."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "∫₀¹ dx/√(1−x²) =",
            answers: [
              "π/2",
              "π/4",
              "1",
              "2"
            ],
            correct: 0,
            explanation: "Primitive arcsin(x)."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "∫ x/√(1−x²) dx =",
            answers: [
              "−√(1−x²)+C",
              "√(1−x²)+C",
              "arcsin(x)+C",
              "x²+C"
            ],
            correct: 0,
            explanation: "u=1−x²."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "∫ dx/(√(1+x²)) =",
            answers: [
              "ln(x+√(1+x²))+C",
              "arctan(x)+C",
              "√(1+x²)+C",
              "1/(1+x²)+C"
            ],
            correct: 0,
            explanation: "Substitution hyperbolique ou primitive connue."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "∫₀¹ dx/(1+x²) =",
            answers: [
              "π/4",
              "π/2",
              "1",
              "1/2"
            ],
            correct: 0,
            explanation: "arctan(1)=π/4."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "∫ x²/√(1−x²) dx =",
            answers: [
              "arcsin(x)−x√(1−x²)+C",
              "√(1−x²)+C",
              "x³+C",
              "1/√(1−x²)+C"
            ],
            correct: 0,
            explanation: "Décomposer x²=1−(1−x²)."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "∫ dx/(1+sin(x)) =",
            answers: [
              "tan(x/2)+C",
              "ln(1+sin(x))+C",
              "1/(1+sin(x))+C",
              "x+C"
            ],
            correct: 0,
            explanation: "Multiplier num/den par (1−sin)."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "∫ sin(x)/(1+cos(x))dx =",
            answers: [
              "−ln(1+cos(x))+C",
              "ln(1+cos(x))+C",
              "tan(x)+C",
              "cos(x)+C"
            ],
            correct: 0,
            explanation: "u=1+cos(x)."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "∫₀^(π/2) √(sin(x))·cos(x)dx =",
            answers: [
              "2/3",
              "1",
              "π/4",
              "1/2"
            ],
            correct: 0,
            explanation: "u=sin(x)."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "∫₀¹ x/√(1+x²)dx =",
            answers: [
              "√2−1",
              "1",
              "ln(2)",
              "π/4"
            ],
            correct: 0,
            explanation: "u=1+x²."
          }
        ],
        [
          {
            type: "mcq",
            visual: "👑",
            question: "I=∫₀¹ x/(x+1)dx =",
            answers: [
              "1−ln(2)",
              "ln(2)",
              "1/2",
              "0"
            ],
            correct: 0,
            explanation: "Roi : f(x)+f(1−x)=1."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "I=∫₀¹ dx/(1+x²) + ∫₀¹ dx/(1+(1−x)²) =",
            answers: [
              "π/2",
              "π/4",
              "1",
              "2"
            ],
            correct: 0,
            explanation: "Symétrie."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "I=∫₀^(π/2) sin(x)/(sin+cos)dx =",
            answers: [
              "π/4",
              "π/2",
              "1",
              "0"
            ],
            correct: 0,
            explanation: "Classique Roi."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "∫₀¹ ln(x+1)dx =",
            answers: [
              "2ln(2)−1",
              "ln(2)",
              "1",
              "1/2"
            ],
            correct: 0,
            explanation: "Substitution u=1−x."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "I=∫₀¹ x²/(x²+(1−x)²)dx =",
            answers: [
              "1/2",
              "1",
              "1/3",
              "2/3"
            ],
            correct: 0,
            explanation: "Roi : I = 1−I."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "∫₀¹ dx/(x²+(1−x)²) =",
            answers: [
              "π/2",
              "π/4",
              "1",
              "2"
            ],
            correct: 0,
            explanation: "Compléter le carré."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "I=∫₀¹ x³/(1+x⁴)dx =",
            answers: [
              "ln(2)/4",
              "ln(2)",
              "1/4",
              "1"
            ],
            correct: 0,
            explanation: "u=1+x⁴."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "I=∫₀¹ dx/(1+x) + ∫₀¹ dx/(2−x) =",
            answers: [
              "2ln(2)",
              "ln(2)",
              "1",
              "0"
            ],
            correct: 0,
            explanation: "Roi."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "I=∫₀¹ x/(1+x²)dx =",
            answers: [
              "ln(2)/2",
              "ln(2)",
              "1/2",
              "1"
            ],
            correct: 0,
            explanation: "u=1+x²."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "I=∫₀¹ xⁿ/(1+xⁿ)dx (n>0) =",
            answers: [
              "1/2",
              "1",
              "1<br>",
              "ln(2)"
            ],
            correct: 0,
            explanation: "Roi : I=1−I."
          }
        ],
        [
          {
            type: "mcq",
            visual: "👑",
            question: "∫₀^(π) x sin(x)dx =",
            answers: [
              "π",
              "2",
              "0",
              "π/2"
            ],
            correct: 0,
            explanation: "Symétrie π−x."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "∫₀^(π) x cos(x)dx =",
            answers: [
              "0",
              "π",
              "1",
              "−π"
            ],
            correct: 0,
            explanation: "Fonction impaire autour π/2."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "I=∫₀¹ ln(x)/(1−x)dx =",
            answers: [
              "−π²/6",
              "π²/6",
              "−1",
              "0"
            ],
            correct: 0,
            explanation: "Résultat classique."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "∫₀¹ ln(x)dx =",
            answers: [
              "−1",
              "0",
              "1",
              "−1/2"
            ],
            correct: 0,
            explanation: "Primitive xln(x)−x."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "∫₀¹ ln(1−x)dx =",
            answers: [
              "−1",
              "0",
              "1",
              "−1/2"
            ],
            correct: 0,
            explanation: "Roi."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "I=∫₀¹ ln(x)/(1+x)dx =",
            answers: [
              "−π²/12",
              "π²/12",
              "−1",
              "0"
            ],
            correct: 0,
            explanation: "Résultat exact."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "∫₀^(π/2) x dx =",
            answers: [
              "π²/8",
              "π/2",
              "1",
              "π²/4"
            ],
            correct: 0,
            explanation: "Primitive x²/2."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "∫₀^(π/2) (π/2−x)dx =",
            answers: [
              "π²/8",
              "π/4",
              "π/2",
              "1"
            ],
            correct: 0,
            explanation: "Même valeur."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "I=∫₀¹ x^a(1−x)^a dx (a=0) =",
            answers: [
              "1",
              "0",
              "1/2",
              "π"
            ],
            correct: 0,
            explanation: "Cas trivial."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "∫₀¹ dx/(1+x³) + ∫₀¹ x²/(1+x³)dx =",
            answers: [
              "1",
              "ln(2)",
              "1/2",
              "2"
            ],
            correct: 0,
            explanation: "Roi."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🔥",
            question: "∫₀¹ ln(x)/(1−x²)dx =",
            answers: [
              "−π²/12",
              "π²/12",
              "−1",
              "0"
            ],
            correct: 0,
            explanation: "Décomposition + résultat connu."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "∫₀^(π/2) ln(sin(x))dx =",
            answers: [
              "−(π/2)ln(2)",
              "πln(2)",
              "−πln(2)",
              "0"
            ],
            correct: 0,
            explanation: "Résultat classique."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "∫₀^(π/2) ln(cos(x))dx =",
            answers: [
              "−(π/2)ln(2)",
              "πln(2)",
              "−πln(2)",
              "0"
            ],
            correct: 0,
            explanation: "Même valeur."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "∫₀¹ dx/(1+x⁴) =",
            answers: [
              "π/(2√2)",
              "π/4",
              "π/2",
              "1"
            ],
            correct: 0,
            explanation: "Substitution trig avancée."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "∫₀¹ x²/(1+x⁴)dx =",
            answers: [
              "π/(2√2)−1/2",
              "1/2",
              "π/4",
              "0"
            ],
            correct: 0,
            explanation: "Complémentarité."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "∫₀^(π/2) sin⁴(x)dx =",
            answers: [
              "3π/16",
              "π/4",
              "π/8",
              "π/2"
            ],
            correct: 0,
            explanation: "Réduction."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "∫₀^(π/2) sin⁶(x)dx =",
            answers: [
              "5π/32",
              "3π/16",
              "π/4",
              "π/8"
            ],
            correct: 0,
            explanation: "Réduction."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "∫₀¹ ln(x)²dx =",
            answers: [
              "2",
              "1",
              "−2",
              "1/2"
            ],
            correct: 0,
            explanation: "Résultat exact."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "∫₀¹ x ln(x)dx =",
            answers: [
              "−1/4",
              "1/4",
              "0",
              "−1/2"
            ],
            correct: 0,
            explanation: "IPP."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "∫₀¹ ln(1+x)dx =",
            answers: [
              "2ln(2)−1",
              "ln(2)",
              "1",
              "1/2"
            ],
            correct: 0,
            explanation: "Substitution."
          }
        ]
      ]
    },
    {
      id: "elements-simples",
      label: "Éléments simples",
      icon: "🧩",
      lesson: {
        formula: "1/(x²−1) = A/(x−1)+B/(x+1)",
        text: "On décompose les fractions rationnelles avant d’intégrer.",
        example: "∫ dx/(x²−1) = (1/2)ln|(x−1)/(x+1)| + C"
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Objectif",
          text: "On cherche à intégrer une fraction rationnelle P(x)/Q(x).<br>              • Si deg(P) ≥ deg(Q), on commence par une division euclidienne.<br>              • Si deg(P) < deg(Q), on décompose directement en éléments simples."
        },
        {
          type: "technique",
          title: "🧠 Étape 1 — Comparer les degrés",
          text: "Si deg(P) ≥ deg(Q) :<br>              On effectue la division euclidienne :<br>              P(x)/Q(x) = S(x) + R(x)/Q(x) avec deg(R) < deg(Q).<br>              On intègre ensuite S(x) puis la fraction restante.<br><br>              Si deg(P) < deg(Q) :<br>              On passe directement à la décomposition."
        },
        {
          type: "technique",
          title: "🧠 Étape 2 — Factoriser le dénominateur",
          text: "On factorise complètement Q(x).<br>              Trois types de facteurs possibles :<br>              • (x − a) racine simple<br>              • (x − a)^n racine multiple<br>              • x² + bx + c irréductible (Δ < 0)"
        },
        {
          type: "formula",
          title: "🔑 Cas 1 — Racines simples",
          formula: "Si Q(x)=(x−a)(x−b) alors P/Q = A/(x−a) + B/(x−b)",
          text: "Chaque racine simple donne un terme simple.<br>              Primitive : A ln|x−a| + B ln|x−b| + C."
        },
        {
          type: "formula",
          title: "🔑 Cas 2 — Racine multiple",
          formula: "Si Q(x)=(x−a)^n alors P/Q = A1/(x−a)+A2/(x−a)^2+...+An/(x−a)^n",
          text: "On écrit autant de termes que la multiplicité.<br>              Chaque puissance donne un terme distinct."
        },
        {
          type: "formula",
          title: "🔑 Cas 3 — Facteur quadratique irréductible",
          formula: "Si Q(x) contient x²+1 alors terme associé : (Ax+B)/(x²+1)",
          text: "Le numérateur doit être de degré 1.<br>              On intègre ensuite avec la forme logarithme + arctan."
        },
        {
          type: "formula",
          title: "⭐ Formule fondamentale",
          formula: "1/(x²−a²) = 1/(2a)[1/(x−a) − 1/(x+a)]",
          text: "Formule très utile quand le dénominateur est une différence de carrés."
        },
        {
          type: "example",
          title: "✅ Exemple classique",
          text: "∫ dx/(x²−1)<br>              x²−1 = (x−1)(x+1)<br>              Décomposition : 1/2[1/(x−1) − 1/(x+1)]<br>              Primitive : (1/2) ln|(x−1)/(x+1)| + C."
        },
        {
          type: "example",
          title: "✅ Exemple racine double",
          text: "Si 1/(x−1)²<br>              Décomposition : A/(x−1) + B/(x−1)²<br>              Primitive : A ln|x−1| − B/(x−1) + C."
        },
        {
          type: "example",
          title: "✅ Exemple irréductible",
          text: "∫ dx/(x²+4)<br>              On reconnaît la forme arctan.<br>              Primitive : 1/2 arctan(x/2) + C."
        },
        {
          type: "warning",
          title: "⚠️ Erreurs classiques",
          text: "• Oublier la division euclidienne si deg(P) ≥ deg(Q).<br>              • Oublier les puissances des facteurs multiples.<br>              • Mettre un numérateur constant au lieu de Ax+B pour un facteur quadratique.<br>              • Oublier les valeurs absolues dans les logarithmes.<br>              • Ne pas vérifier la décomposition en remultipliant."
        },
        {
          type: "technique",
          title: "🎯 Astuce pour trouver les coefficients",
          text: "1) Multiplier par le dénominateur pour supprimer les fractions.<br>              2) Remplacer x par les racines quand c’est possible.<br>              3) Sinon comparer les coefficients des puissances de x."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            visual: "🧩",
            question: "1/(x²−1)=",
            answers: [
              "1/2(1/(x−1)−1/(x+1))",
              "1/(x−1)+1/(x+1)",
              "1/(x−1)−1/(x+1)",
              "A/x+B/x²"
            ],
            correct: 0,
            explanation: "Différence carrés."
          },
          {
            type: "mcq",
            visual: "🧩",
            question: "∫ dx/(x−2)=",
            answers: [
              "ln|x−2|+C",
              "1/(x−2)+C",
              "x−2+C",
              "−ln|x−2|+C"
            ],
            correct: 0,
            explanation: "Primitive 1/u."
          },
          {
            type: "mcq",
            visual: "🧩",
            question: "∫ dx/(x²+1)=",
            answers: [
              "arctan(x)+C",
              "ln|x|+C",
              "1/x+C",
              "x+C"
            ],
            correct: 0,
            explanation: "Formule connue."
          },
          {
            type: "mcq",
            visual: "🧩",
            question: "1/(x²−4)=",
            answers: [
              "1/4(1/(x−2)−1/(x+2))",
              "1/2(1/(x−2)−1/(x+2))",
              "1/(x−2)+1/(x+2)",
              "1/(x²−4)"
            ],
            correct: 0,
            explanation: "a=2."
          },
          {
            type: "mcq",
            visual: "🧩",
            question: "Primitive 1/(x+3)=",
            answers: [
              "ln|x+3|+C",
              "1/(x+3)+C",
              "x+3+C",
              "−ln|x+3|+C"
            ],
            correct: 0,
            explanation: "Log."
          },
          {
            type: "mcq",
            visual: "🧩",
            question: "∫ 2x/(x²+1)=",
            answers: [
              "ln(x²+1)+C",
              "arctan(x)+C",
              "1/(x²+1)+C",
              "2arctan(x)+C"
            ],
            correct: 0,
            explanation: "u=x²+1."
          },
          {
            type: "mcq",
            visual: "🧩",
            question: "Toujours commencer par :",
            answers: [
              "Factoriser",
              "IPP",
              "Roi",
              "Trig"
            ],
            correct: 0,
            explanation: "Toujours."
          },
          {
            type: "mcq",
            visual: "🧩",
            question: "Résultat final contient souvent :",
            answers: [
              "Logarithmes",
              "Sinus",
              "Exponentielles",
              "Polynômes"
            ],
            correct: 0,
            explanation: "Oui."
          },
          {
            type: "mcq",
            visual: "🧩",
            question: "Si deg(P)=deg(Q) →",
            answers: [
              "Division",
              "Factoriser",
              "Roi",
              "Trig"
            ],
            correct: 0,
            explanation: "Division euclidienne."
          },
          {
            type: "mcq",
            visual: "🧩",
            question: "∫ dx/(x²−9)=",
            answers: [
              "(1/6)ln|(x−3)/(x+3)|+C",
              "(1/3)ln|(x−3)/(x+3)|+C",
              "ln|x²−9|+C",
              "arctan(x/3)+C"
            ],
            correct: 0,
            explanation: "a=3."
          }
        ],
        [
          {
            type: "input",
            visual: "🎯",
            question: "1/(x²−16)=1/(k)(1/(x−4)−1/(x+4)), k=?",
            correct: "8",
            explanation: "2a=8."
          },
          {
            type: "mcq",
            visual: "🧩",
            question: "Forme pour (x²+1) :",
            answers: [
              "(Ax+B)/(x²+1)",
              "A/(x²+1)",
              "A/x+B/x²",
              "1/(x²+1)"
            ],
            correct: 0,
            explanation: "Irréductible."
          },
          {
            type: "mcq",
            visual: "🧩",
            question: "1/(x−1)² nécessite :",
            answers: [
              "Deux termes",
              "Un terme",
              "Trois",
              "Trig"
            ],
            correct: 0,
            explanation: "Multiplicité 2."
          },
          {
            type: "mcq",
            visual: "🧩",
            question: "∫ dx/(x−1)²=",
            answers: [
              "−1/(x−1)+C",
              "ln|x−1|+C",
              "1/(x−1)+C",
              "x/(x−1)+C"
            ],
            correct: 0,
            explanation: "Puissance."
          },
          {
            type: "mcq",
            visual: "🧩",
            question: "Comparer coefficients sert à :",
            answers: [
              "Trouver A,B",
              "Tracer",
              "Limiter",
              "Factoriser"
            ],
            correct: 0,
            explanation: "Oui."
          },
          {
            type: "mcq",
            visual: "🧩",
            question: "∫ x/(x²+1)=",
            answers: [
              "ln(x²+1)/2+C",
              "arctan(x)+C",
              "1/(x²+1)+C",
              "x+C"
            ],
            correct: 0,
            explanation: "u=x²+1."
          },
          {
            type: "mcq",
            visual: "🧩",
            question: "∫ dx/(x²+4)=",
            answers: [
              "1/2 arctan(x/2)+C",
              "arctan(x)+C",
              "ln|x²+4|+C",
              "1/(x²+4)+C"
            ],
            correct: 0,
            explanation: "Formule."
          },
          {
            type: "mcq",
            visual: "🧩",
            question: "Toujours vérifier par :",
            answers: [
              "Dérivation",
              "Graphique",
              "Limite",
              "Division"
            ],
            correct: 0,
            explanation: "Contrôle."
          },
          {
            type: "mcq",
            visual: "🧩",
            question: "Si Q non factorisable réel :",
            answers: [
              "Forme Ax+B",
              "Log",
              "Roi",
              "IPP"
            ],
            correct: 0,
            explanation: "Quadratique."
          },
          {
            type: "mcq",
            visual: "🧩",
            question: "Cas x²−a² donne :",
            answers: [
              "Log",
              "Arctan",
              "Poly",
              "Exp"
            ],
            correct: 0,
            explanation: "Toujours log."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🔥",
            question: "1/(x−1)³ nécessite :",
            answers: [
              "Trois termes",
              "Un",
              "Deux",
              "Trig"
            ],
            correct: 0,
            explanation: "Puissance 3."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Primitive 1/(x−a)^n=",
            answers: [
              "−1/(n−1)(x−a)^(n−1)",
              "ln",
              "Arctan",
              "Poly"
            ],
            correct: 0,
            explanation: "Formule."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "∫ dx/(x²−1)² commence par :",
            answers: [
              "Décomposition",
              "IPP",
              "Roi",
              "Trig"
            ],
            correct: 0,
            explanation: "Toujours."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Racine double donne primitive :",
            answers: [
              "Log + rationnel",
              "Seulement log",
              "Seulement poly",
              "Trig"
            ],
            correct: 0,
            explanation: "Mélange."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Méthode clé :",
            answers: [
              "Comparer coefficients",
              "Deviner",
              "Tracer",
              "Limite"
            ],
            correct: 0,
            explanation: "Identification."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Après décomposition :",
            answers: [
              "Intégrer terme à terme",
              "Factoriser",
              "Tracer",
              "Limiter"
            ],
            correct: 0,
            explanation: "Toujours."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Nombre de termes =",
            answers: [
              "Multiplicité",
              "Degré",
              "1",
              "2"
            ],
            correct: 0,
            explanation: "Oui."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Contrôle final :",
            answers: [
              "Dériver",
              "Tracer",
              "Limiter",
              "Factoriser"
            ],
            correct: 0,
            explanation: "Toujours."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Niveau requis :",
            answers: [
              "Prépa",
              "Seconde",
              "Collège",
              "CP"
            ],
            correct: 0,
            explanation: "Oui 😄"
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Erreur fréquente :",
            answers: [
              "Oublier puissances",
              "Mettre sin",
              "Mettre exp",
              "Tracer"
            ],
            correct: 0,
            explanation: "Classique."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🚀",
            question: "1/(x²+1)² nécessite :",
            answers: [
              "(Ax+B)/(x²+1)+(Cx+D)/(x²+1)²",
              "A/(x²+1)",
              "Log",
              "Trig"
            ],
            correct: 0,
            explanation: "Puissance 2."
          },
          {
            type: "mcq",
            visual: "🚀",
            question: "Primitive type contient :",
            answers: [
              "Arctan + rationnel",
              "Seulement log",
              "Poly",
              "Exp"
            ],
            correct: 0,
            explanation: "Oui."
          },
          {
            type: "mcq",
            visual: "🚀",
            question: "∫ dx/(x²+1)² contient :",
            answers: [
              "x/(2(x²+1))+arctan(x)/2",
              "Seulement arctan",
              "Log",
              "Poly"
            ],
            correct: 0,
            explanation: "Formule connue."
          },
          {
            type: "mcq",
            visual: "🚀",
            question: "Quadratique irréductible →",
            answers: [
              "Ax+B",
              "A",
              "B",
              "0"
            ],
            correct: 0,
            explanation: "Toujours."
          },
          {
            type: "mcq",
            visual: "🚀",
            question: "Toujours commencer par :",
            answers: [
              "Factoriser",
              "IPP",
              "Roi",
              "Trig"
            ],
            correct: 0,
            explanation: "Encore."
          },
          {
            type: "mcq",
            visual: "🚀",
            question: "Intégrale définie →",
            answers: [
              "Changer bornes après décomposition",
              "Jamais",
              "Roi",
              "Trig"
            ],
            correct: 0,
            explanation: "Oui."
          },
          {
            type: "mcq",
            visual: "🚀",
            question: "Résultat final mélange :",
            answers: [
              "Log + Arctan",
              "Seulement log",
              "Seulement arctan",
              "Exp"
            ],
            correct: 0,
            explanation: "Souvent."
          },
          {
            type: "mcq",
            visual: "🚀",
            question: "Comparaison coefficients se fait :",
            answers: [
              "Après multiplication",
              "Avant",
              "Jamais",
              "Graphique"
            ],
            correct: 0,
            explanation: "Oui."
          },
          {
            type: "mcq",
            visual: "🚀",
            question: "Objectif :",
            answers: [
              "Simplifier intégration",
              "Tracer",
              "Limiter",
              "Factoriser"
            ],
            correct: 0,
            explanation: "But."
          },
          {
            type: "mcq",
            visual: "🚀",
            question: "Niveau :",
            answers: [
              "Prépa MP",
              "Seconde",
              "Collège",
              "CP"
            ],
            correct: 0,
            explanation: "Oui."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🏆",
            question: "∫₁² dx/(x²−1) converge ?",
            answers: [
              "Oui",
              "Non",
              "Toujours non",
              "Impossible"
            ],
            correct: 0,
            explanation: "Pas de singularité dans [1,2] ouverte."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "Singularité interne →",
            answers: [
              "Impropre",
              "Propre",
              "Trig",
              "IPP"
            ],
            correct: 0,
            explanation: "Oui."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "Primitive log nécessite :",
            answers: [
              "Valeur absolue",
              "Rien",
              "Trig",
              "Exp"
            ],
            correct: 0,
            explanation: "Toujours."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "Limite infinie →",
            answers: [
              "Étudier convergence",
              "Ignorer",
              "Tracer",
              "Factoriser"
            ],
            correct: 0,
            explanation: "Oui."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "∫₀^∞ dx/(x²+1)=",
            answers: [
              "π/2",
              "π",
              "1",
              "0"
            ],
            correct: 0,
            explanation: "Classique."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "Technique principale :",
            answers: [
              "Décomposition",
              "Roi",
              "IPP",
              "Trig"
            ],
            correct: 0,
            explanation: "Oui."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "Après primitive →",
            answers: [
              "Appliquer bornes",
              "Stop",
              "Tracer",
              "Factoriser"
            ],
            correct: 0,
            explanation: "Toujours."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "Résultat exact exigé :",
            answers: [
              "Oui",
              "Non",
              "Decimal",
              "Graphique"
            ],
            correct: 0,
            explanation: "Toujours."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "Erreur classique :",
            answers: [
              "Oublier singularité",
              "Mettre sin",
              "Mettre exp",
              "Tracer"
            ],
            correct: 0,
            explanation: "Concours."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "Niveau :",
            answers: [
              "Concours",
              "Seconde",
              "Collège",
              "CP"
            ],
            correct: 0,
            explanation: "Oui."
          }
        ],
        [
          {
            type: "mcq",
            visual: "👑",
            question: "Si numérateur dérivée du dénominateur →",
            answers: [
              "Substitution directe",
              "Roi",
              "IPP",
              "Trig"
            ],
            correct: 0,
            explanation: "Plus rapide."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "Combiner décomposition + substitution ?",
            answers: [
              "Oui",
              "Non",
              "Jamais",
              "Rarement"
            ],
            correct: 0,
            explanation: "Expert."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "But final :",
            answers: [
              "Réduire à formes connues",
              "Tracer",
              "Factoriser",
              "Limiter"
            ],
            correct: 0,
            explanation: "Toujours."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "Prépa attend :",
            answers: [
              "Rigueur",
              "Approximation",
              "Graphique",
              "Intuition seule"
            ],
            correct: 0,
            explanation: "Exact."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "Contrôle ultime :",
            answers: [
              "Dérivation",
              "Tracer",
              "Limiter",
              "Graphique"
            ],
            correct: 0,
            explanation: "Toujours."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "Objectif expert :",
            answers: [
              "Maîtrise totale",
              "Survie",
              "Chance",
              "Mémoire seule"
            ],
            correct: 0,
            explanation: "Oui 😄"
          },
          {
            type: "mcq",
            visual: "👑",
            question: "Méthode universelle ?",
            answers: [
              "Non",
              "Oui",
              "Toujours IPP",
              "Toujours trig"
            ],
            correct: 0,
            explanation: "Adapter."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "Toujours analyser :",
            answers: [
              "Structure du dénominateur",
              "Graphique",
              "Limite seule",
              "Hasard"
            ],
            correct: 0,
            explanation: "Clé."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "Niveau atteint :",
            answers: [
              "Prépa solide",
              "Seconde",
              "Collège",
              "CP"
            ],
            correct: 0,
            explanation: "Bravo."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "Maîtrise validée si :",
            answers: [
              "Tu peux enseigner",
              "Tu récites",
              "Tu devines",
              "Tu traces"
            ],
            correct: 0,
            explanation: "Expert 😎"
          }
        ]
      ]
    },
    {
      id: "integrales-trigo-avancees",
      label: "Intégrales trigonométriques",
      icon: "🔺",
      lesson: {
        formula: "Identités : sin²x = (1−cos2x)/2   |   cos²x = (1+cos2x)/2",
        text: "On simplifie avec les identités trigonométriques ou par changement de variable.",
        example: "∫₀^(π/2) cos²(x)dx = π/4"
      },
      fullBlocks: [
        {
          type: "formula",
          title: "🔑 Identités fondamentales",
          formula: "sin²x = (1−cos2x)/2<br>              cos²x = (1+cos2x)/2<br>              1+tan²x = sec²x<br>              1+cot²x = csc²x",
          text: "Toujours simplifier avant d’intégrer."
        },
        {
          type: "method",
          title: "🧠 Stratégie générale",
          text: "• Puissance impaire de sin → garder 1 sin, transformer cos².<br>              • Puissance impaire de cos → garder 1 cos, transformer sin².<br>              • Puissances paires → utiliser formules demi-angle.<br>              • tan/sec ensemble → substitution sec² ou tan.<br>              • Intégrales définies → exploiter symétries."
        },
        {
          type: "formula",
          title: "⭐ Formules utiles concours",
          formula: "∫₀^(π/2) sin^n(x)dx = ∫₀^(π/2) cos^n(x)dx<br>              ∫₀^(π/2) sin^n(x)cos^m(x)dx → réduction progressive",
          text: "Symétrie très importante."
        },
        {
          type: "example",
          title: "✅ Exemple cos²",
          text: "∫₀^(π/2) cos²(x)dx<br>              = ∫₀^(π/2) (1+cos2x)/2 dx<br>              = π/4"
        },
        {
          type: "example",
          title: "✅ Exemple puissance impaire",
          text: "∫ cos³(x)sin(x)dx<br>              u=cos(x)<br>              = −cos⁴(x)/4 + C"
        },
        {
          type: "warning",
          title: "⚠️ Erreurs classiques",
          text: "• Oublier les identités demi-angle.<br>              • Mauvais choix de substitution.<br>              • Oublier les bornes en intégrale définie.<br>              • Oublier les valeurs absolues dans les logs."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            visual: "🔺",
            question: "∫₀^(π/2) cos²(x)dx =",
            answers: [
              "π/4",
              "π/2",
              "1",
              "2"
            ],
            correct: 0,
            explanation: "Demi-angle."
          },
          {
            type: "mcq",
            visual: "🔺",
            question: "∫₀^(π/2) sin²(x)dx =",
            answers: [
              "π/4",
              "π/2",
              "1",
              "0"
            ],
            correct: 0,
            explanation: "Même valeur."
          },
          {
            type: "mcq",
            visual: "🔺",
            question: "∫ sin(x)cos(x)dx =",
            answers: [
              "sin²(x)/2+C",
              "cos²(x)/2+C",
              "−cos²(x)/2+C",
              "sin(x)+C"
            ],
            correct: 0,
            explanation: "u=sin."
          },
          {
            type: "mcq",
            visual: "🔺",
            question: "∫ tan(x)dx =",
            answers: [
              "−ln|cos(x)|+C",
              "ln|cos(x)|+C",
              "tan²(x)+C",
              "arctan(x)+C"
            ],
            correct: 0,
            explanation: "tan=sin/cos."
          },
          {
            type: "mcq",
            visual: "🔺",
            question: "∫ sec²(x)dx =",
            answers: [
              "tan(x)+C",
              "sec(x)+C",
              "−tan(x)+C",
              "arctan(x)+C"
            ],
            correct: 0,
            explanation: "Primitive."
          },
          {
            type: "mcq",
            visual: "🔺",
            question: "sin²x devient :",
            answers: [
              "(1−cos2x)/2",
              "(1+cos2x)/2",
              "1−cosx",
              "cos²x"
            ],
            correct: 0,
            explanation: "Identité."
          },
          {
            type: "mcq",
            visual: "🔺",
            question: "cos²x devient :",
            answers: [
              "(1+cos2x)/2",
              "(1−cos2x)/2",
              "1−sinx",
              "sin²x"
            ],
            correct: 0,
            explanation: "Identité."
          },
          {
            type: "mcq",
            visual: "🔺",
            question: "∫₀^(π/2) sin(x)dx =",
            answers: [
              "1",
              "2",
              "0",
              "π"
            ],
            correct: 0,
            explanation: "[−cos]."
          },
          {
            type: "mcq",
            visual: "🔺",
            question: "∫ cos(x)dx =",
            answers: [
              "sin(x)+C",
              "−sin(x)+C",
              "cos²(x)+C",
              "tan(x)+C"
            ],
            correct: 0,
            explanation: "Primitive."
          },
          {
            type: "mcq",
            visual: "🔺",
            question: "Toujours commencer par :",
            answers: [
              "Simplifier",
              "IPP",
              "Tracer",
              "Limiter"
            ],
            correct: 0,
            explanation: "Toujours."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🔥",
            question: "∫ cos³(x)sin(x)dx =",
            answers: [
              "−cos⁴(x)/4+C",
              "cos⁴(x)/4+C",
              "sin⁴(x)/4+C",
              "cos²(x)+C"
            ],
            correct: 0,
            explanation: "u=cos."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "∫ sin³(x)cos(x)dx =",
            answers: [
              "sin⁴(x)/4+C",
              "cos⁴(x)/4+C",
              "−sin⁴(x)/4+C",
              "sin²(x)+C"
            ],
            correct: 0,
            explanation: "u=sin."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Méthode puissance impaire :",
            answers: [
              "Garder 1 facteur",
              "Demi-angle",
              "IPP",
              "Tracer"
            ],
            correct: 0,
            explanation: "Oui."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "cos³ =",
            answers: [
              "cos·(1−sin²)",
              "cos²",
              "1−sin²",
              "sin³"
            ],
            correct: 0,
            explanation: "Identité."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "sin³ =",
            answers: [
              "sin·(1−cos²)",
              "sin²",
              "1−cos²",
              "cos³"
            ],
            correct: 0,
            explanation: "Oui."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Substitution fréquente :",
            answers: [
              "u=sin ou cos",
              "u=tan",
              "IPP",
              "Limite"
            ],
            correct: 0,
            explanation: "Classique."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "∫ tan(x)sec²(x)dx =",
            answers: [
              "tan²(x)/2+C",
              "sec²(x)/2+C",
              "tan(x)+C",
              "arctan(x)+C"
            ],
            correct: 0,
            explanation: "u=tan."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "∫ sin(x)dx =",
            answers: [
              "−cos(x)+C",
              "cos(x)+C",
              "sin²(x)+C",
              "tan(x)+C"
            ],
            correct: 0,
            explanation: "Primitive."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Erreur fréquente :",
            answers: [
              "Oublier facteur",
              "Mettre log",
              "Tracer",
              "Limiter"
            ],
            correct: 0,
            explanation: "Oui."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Objectif :",
            answers: [
              "Réduire puissance",
              "Tracer",
              "Limiter",
              "Graphique"
            ],
            correct: 0,
            explanation: "Toujours."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🚀",
            question: "∫ sin²(x)dx utilise :",
            answers: [
              "Demi-angle",
              "Sub directe",
              "IPP",
              "Limite"
            ],
            correct: 0,
            explanation: "Oui."
          },
          {
            type: "mcq",
            visual: "🚀",
            question: "∫ cos⁴(x)dx commence par :",
            answers: [
              "Réduction cos²",
              "IPP",
              "Tracer",
              "Limite"
            ],
            correct: 0,
            explanation: "cos²²."
          },
          {
            type: "mcq",
            visual: "🚀",
            question: "∫₀^(π/2) sin²(x)cos²(x)dx =",
            answers: [
              "π/16",
              "π/4",
              "1",
              "2"
            ],
            correct: 0,
            explanation: "Identités."
          },
          {
            type: "mcq",
            visual: "🚀",
            question: "sin²cos² devient :",
            answers: [
              "(1−cos4x)/8",
              "(1+cos4x)/4",
              "sin4x",
              "cos4x"
            ],
            correct: 0,
            explanation: "Formule produit."
          },
          {
            type: "mcq",
            visual: "🚀",
            question: "Toujours transformer :",
            answers: [
              "Avant intégrer",
              "Après",
              "Jamais",
              "Rarement"
            ],
            correct: 0,
            explanation: "Toujours."
          },
          {
            type: "mcq",
            visual: "🚀",
            question: "∫₀^(π/2) cos⁴(x)dx =",
            answers: [
              "3π/16",
              "π/4",
              "π/8",
              "1"
            ],
            correct: 0,
            explanation: "Formule réduction."
          },
          {
            type: "mcq",
            visual: "🚀",
            question: "Symétrie sin/cos sur [0,π/2] :",
            answers: [
              "Égalité",
              "Opposé",
              "0",
              "Diverge"
            ],
            correct: 0,
            explanation: "Oui."
          },
          {
            type: "mcq",
            visual: "🚀",
            question: "Formule clé :",
            answers: [
              "sin²=(1−cos2x)/2",
              "tan²",
              "sec²",
              "cot²"
            ],
            correct: 0,
            explanation: "Base."
          },
          {
            type: "mcq",
            visual: "🚀",
            question: "But réduction :",
            answers: [
              "Descendre puissance",
              "Tracer",
              "Limiter",
              "Graphique"
            ],
            correct: 0,
            explanation: "Oui."
          },
          {
            type: "mcq",
            visual: "🚀",
            question: "Niveau :",
            answers: [
              "Prépa",
              "Seconde",
              "CP",
              "Collège"
            ],
            correct: 0,
            explanation: "Oui."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🏆",
            question: "∫ sin(x)cos(2x)dx commence par :",
            answers: [
              "Identité produit",
              "IPP",
              "Tracer",
              "Limite"
            ],
            correct: 0,
            explanation: "Produit→somme."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "sin a cos b =",
            answers: [
              "(sin(a+b)+sin(a−b))/2",
              "cos(a+b)",
              "sin(a+b)",
              "cos(a−b)"
            ],
            correct: 0,
            explanation: "Formule."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "Produit→somme sert à :",
            answers: [
              "Simplifier",
              "Complexifier",
              "Tracer",
              "Limiter"
            ],
            correct: 0,
            explanation: "Toujours."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "∫₀^(π/2) sin(x)cos(x)dx =",
            answers: [
              "1/2",
              "1",
              "π/4",
              "0"
            ],
            correct: 0,
            explanation: "Calcul direct."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "Réduction multiple nécessite :",
            answers: [
              "Patience",
              "Hasard",
              "Graphique",
              "Limite"
            ],
            correct: 0,
            explanation: "Oui 😄"
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "Identité double angle utile :",
            answers: [
              "cos2x=cos²−sin²",
              "tan2x",
              "sec2x",
              "cot2x"
            ],
            correct: 0,
            explanation: "Oui."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "Toujours vérifier :",
            answers: [
              "Structure",
              "Graphique",
              "Limite",
              "Hasard"
            ],
            correct: 0,
            explanation: "Clé."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "∫ tan²(x)dx devient :",
            answers: [
              "tan−x+C",
              "tan²/2",
              "ln",
              "arctan"
            ],
            correct: 0,
            explanation: "1+tan²."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "tan² =",
            answers: [
              "sec²−1",
              "1−sec²",
              "cos²",
              "sin²"
            ],
            correct: 0,
            explanation: "Identité."
          },
          {
            type: "mcq",
            visual: "🏆",
            question: "Niveau :",
            answers: [
              "Concours",
              "Seconde",
              "CP",
              "Collège"
            ],
            correct: 0,
            explanation: "Oui."
          }
        ],
        [
          {
            type: "mcq",
            visual: "👑",
            question: "∫₀^(π/2) sin³(x)dx =",
            answers: [
              "2/3",
              "1",
              "π/4",
              "1/3"
            ],
            correct: 0,
            explanation: "Réduction."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "∫₀^(π/2) cos³(x)dx =",
            answers: [
              "2/3",
              "1",
              "π/4",
              "1/3"
            ],
            correct: 0,
            explanation: "Symétrie."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "∫₀^(π/2) sin⁴(x)dx =",
            answers: [
              "3π/16",
              "π/4",
              "π/8",
              "1"
            ],
            correct: 0,
            explanation: "Réduction."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "Toujours exploiter :",
            answers: [
              "Symétrie",
              "Hasard",
              "Graphique",
              "Limite"
            ],
            correct: 0,
            explanation: "Oui."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "Résultat exact exigé :",
            answers: [
              "Oui",
              "Non",
              "Decimal",
              "Graphique"
            ],
            correct: 0,
            explanation: "Toujours."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "Bornes doivent être :",
            answers: [
              "Appliquées à la fin",
              "Ignorées",
              "Changées au hasard",
              "Supprimées"
            ],
            correct: 0,
            explanation: "Oui."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "sin/cos même puissance sur [0,π/2] :",
            answers: [
              "Égales",
              "Opposées",
              "0",
              "Divergent"
            ],
            correct: 0,
            explanation: "Oui."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "But final :",
            answers: [
              "Réduction totale",
              "Tracer",
              "Limiter",
              "Graphique"
            ],
            correct: 0,
            explanation: "Toujours."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "Niveau atteint :",
            answers: [
              "Prépa solide",
              "Seconde",
              "CP",
              "Collège"
            ],
            correct: 0,
            explanation: "Bravo."
          },
          {
            type: "mcq",
            visual: "👑",
            question: "Maîtrise si :",
            answers: [
              "Tu peux tout réduire",
              "Tu traces",
              "Tu limites",
              "Tu devines"
            ],
            correct: 0,
            explanation: "Expert 😎"
          }
        ],
        [
          {
            type: "mcq",
            visual: "🏅",
            question: "Stratégie universelle ?",
            answers: [
              "Analyser parité",
              "Toujours IPP",
              "Toujours trig",
              "Toujours substitution"
            ],
            correct: 0,
            explanation: "Analyser structure."
          },
          {
            type: "mcq",
            visual: "🏅",
            question: "Si n,m grands →",
            answers: [
              "Réduction successive",
              "Tracer",
              "Limiter",
              "Hasard"
            ],
            correct: 0,
            explanation: "Oui."
          },
          {
            type: "mcq",
            visual: "🏅",
            question: "Produit compliqué →",
            answers: [
              "Formules produit→somme",
              "IPP",
              "Tracer",
              "Limite"
            ],
            correct: 0,
            explanation: "Clé."
          },
          {
            type: "mcq",
            visual: "🏅",
            question: "Toujours viser :",
            answers: [
              "Formes connues",
              "Graphique",
              "Limite",
              "Approximation"
            ],
            correct: 0,
            explanation: "Exact."
          },
          {
            type: "mcq",
            visual: "🏅",
            question: "Contrôle ultime :",
            answers: [
              "Dérivation",
              "Tracer",
              "Limiter",
              "Graphique"
            ],
            correct: 0,
            explanation: "Toujours."
          },
          {
            type: "mcq",
            visual: "🏅",
            question: "Intégrales trig avancées demandent :",
            answers: [
              "Structure",
              "Chance",
              "Mémoire seule",
              "Graphique"
            ],
            correct: 0,
            explanation: "Structure."
          },
          {
            type: "mcq",
            visual: "🏅",
            question: "Niveau :",
            answers: [
              "Concours top",
              "Seconde",
              "CP",
              "Collège"
            ],
            correct: 0,
            explanation: "Oui."
          },
          {
            type: "mcq",
            visual: "🏅",
            question: "Objectif final :",
            answers: [
              "Maîtrise complète",
              "Survie",
              "Chance",
              "Approximation"
            ],
            correct: 0,
            explanation: "Oui 😄"
          },
          {
            type: "mcq",
            visual: "🏅",
            question: "Toujours transformer avant :",
            answers: [
              "Intégrer",
              "Tracer",
              "Limiter",
              "Graphique"
            ],
            correct: 0,
            explanation: "Règle d’or."
          },
          {
            type: "mcq",
            visual: "🏅",
            question: "Validé si :",
            answers: [
              "Tu peux enseigner",
              "Tu récites",
              "Tu devines",
              "Tu traces"
            ],
            correct: 0,
            explanation: "Expert total."
          }
        ]
      ]
    },
    {
      id: "valeur-absolue-inegalites",
      label: "Inégalités intégrales",
      icon: "⚖️",
      lesson: {
        formula: "f ≤ g sur [a,b]  ⟹  ∫ₐᵇf ≤ ∫ₐᵇg",
        text: "Monotonie de l'intégrale. Inégalité triangulaire : |∫ₐᵇ f| ≤ ∫ₐᵇ |f|.",
        example: "sin(x)≤x pour x≥0 → 1−cos(s)≤s²/2."
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Monotonie de l’intégrale",
          text: "Si f(x) ≤ g(x) sur [a,b], alors ∫ₐᵇ f(x)dx ≤ ∫ₐᵇ g(x)dx. L’intégrale conserve l’ordre des fonctions."
        },
        {
          type: "formula",
          title: "🔑 Encadrement par bornes",
          formula: "m ≤ f(x) ≤ M  ⟹  m(b−a) ≤ ∫ₐᵇ f(x)dx ≤ M(b−a)",
          text: "Très puissant pour majorer/minorer rapidement une intégrale."
        },
        {
          type: "formula",
          title: "🔑 Inégalité triangulaire",
          formula: "|∫ₐᵇ f(x)dx| ≤ ∫ₐᵇ |f(x)|dx",
          text: "Version intégrale de |a+b| ≤ |a|+|b|."
        },
        {
          type: "demo",
          title: "🔬 Idée de preuve",
          text: "Si f ≤ g alors g−f ≥ 0. L’intégrale d’une fonction positive est positive. Donc ∫(g−f) ≥ 0 ⟹ ∫f ≤ ∫g."
        },
        {
          type: "example",
          title: "✅ Encadrement classique",
          text: "Sur [0,1] : e^(−1) ≤ e^(−x²) ≤ 1 ⟹ e⁻¹ ≤ ∫₀¹ e^(−x²)dx ≤ 1."
        },
        {
          type: "example",
          title: "✅ Inégalité trigonométrique",
          text: "Sur [0,π/2] : (2/π)x ≤ sin(x) ≤ x ⟹ 1 ≤ ∫₀^(π/2) sin(x)/x dx ≤ π/2."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            question: "Si 0≤f≤3 sur [0,2], alors ∫₀² f :",
            answers: [
              "entre 0 et 6",
              "≥6",
              "≤3",
              "=2"
            ],
            correct: 0,
            explanation: "0·2 ≤ ∫ ≤ 3·2."
          },
          {
            type: "mcq",
            question: "Si f≥0 sur [a,b] alors ∫ f :",
            answers: [
              "≥0",
              "≤0",
              "=0",
              "?"
            ],
            correct: 0,
            explanation: "Fonction positive."
          },
          {
            type: "mcq",
            question: "Si 2≤f≤5 sur [0,1], ∫₀¹f :",
            answers: [
              "entre 2 et 5",
              "entre 0 et 5",
              "≥5",
              "≤2"
            ],
            correct: 0,
            explanation: "2·1 ≤ ∫ ≤ 5·1."
          },
          {
            type: "mcq",
            question: "Si f≤0 alors ∫ f :",
            answers: [
              "≤0",
              "≥0",
              "=0",
              "?"
            ],
            correct: 0,
            explanation: "Fonction négative."
          },
          {
            type: "mcq",
            question: "Si 0≤f≤1 sur [0,10], ∫ :",
            answers: [
              "≤10",
              "≤1",
              "=1",
              "≥10"
            ],
            correct: 0,
            explanation: "1·10."
          },
          {
            type: "mcq",
            question: "Si f=g alors ∫f ?",
            answers: [
              "=∫g",
              "≤∫g",
              "≥∫g",
              "?"
            ],
            correct: 0,
            explanation: "Égalité."
          },
          {
            type: "mcq",
            question: "Si 1≤f≤2 sur [0,3], ∫ :",
            answers: [
              "entre 3 et 6",
              "≤3",
              "≥6",
              "=3"
            ],
            correct: 0,
            explanation: "1·3 ≤ ∫ ≤2·3."
          },
          {
            type: "mcq",
            question: "Si f≥2 sur [0,4], ∫ :",
            answers: [
              "≥8",
              "≤8",
              "=8",
              "≤2"
            ],
            correct: 0,
            explanation: "2·4."
          },
          {
            type: "mcq",
            question: "Si 0≤f≤M sur [a,b], ∫ :",
            answers: [
              "≤M(b−a)",
              "≥M(b−a)",
              "=M",
              "?"
            ],
            correct: 0,
            explanation: "Formule."
          },
          {
            type: "mcq",
            question: "Si f≤g alors :",
            answers: [
              "∫f≤∫g",
              "∫f≥∫g",
              "∫f=∫g",
              "?"
            ],
            correct: 0,
            explanation: "Monotonie."
          }
        ],
        [
          {
            type: "mcq",
            question: "|∫₀¹ sin(x)dx| ≤",
            answers: [
              "1",
              "π",
              "0",
              "2"
            ],
            correct: 0,
            explanation: "≤∫₀¹1."
          },
          {
            type: "mcq",
            question: "∫₀¹ x dx est entre :",
            answers: [
              "0 et 1",
              "0 et 2",
              "1 et 2",
              "≥2"
            ],
            correct: 0,
            explanation: "0≤x≤1."
          },
          {
            type: "mcq",
            question: "Sur [1,2], 1≤x≤2 ⟹ ∫₁²x :",
            answers: [
              "entre1 et2",
              "entre2 et4",
              "=3",
              "≥4"
            ],
            correct: 0,
            explanation: "1·1 ≤ ∫ ≤2·1."
          },
          {
            type: "mcq",
            question: "|∫₀π cos(x)dx| =",
            answers: [
              "0",
              "1",
              "π",
              "2"
            ],
            correct: 0,
            explanation: "sin(π)-sin(0)=0."
          },
          {
            type: "mcq",
            question: "∫₀¹ eˣ dx ≥",
            answers: [
              "1",
              "e",
              "0",
              "e−1"
            ],
            correct: 0,
            explanation: "eˣ≥1."
          },
          {
            type: "mcq",
            question: "∫₀¹ eˣ dx ≤",
            answers: [
              "e",
              "1",
              "0",
              "e−1"
            ],
            correct: 0,
            explanation: "eˣ≤e."
          },
          {
            type: "mcq",
            question: "|∫ f| ≤ ?",
            answers: [
              "∫|f|",
              "∫f",
              "|f|",
              "0"
            ],
            correct: 0,
            explanation: "Triangulaire."
          },
          {
            type: "mcq",
            question: "Si f≥1 sur [0,1], ∫ ≥",
            answers: [
              "1",
              "0",
              "2",
              "?"
            ],
            correct: 0,
            explanation: "1·1."
          },
          {
            type: "mcq",
            question: "Si 0≤f≤2 sur [0,1], ∫ ≤",
            answers: [
              "2",
              "1",
              "0",
              "3"
            ],
            correct: 0,
            explanation: "2·1."
          },
          {
            type: "mcq",
            question: "Monotonie vient de :",
            answers: [
              "g−f≥0",
              "IPP",
              "Roi",
              "Trig"
            ],
            correct: 0,
            explanation: "Preuve classique."
          }
        ],
        [
          {
            type: "mcq",
            question: "0≤1/(1+x²)≤1 ⟹ ∫₀¹ ≤",
            answers: [
              "1",
              "π",
              "1/2",
              "2"
            ],
            correct: 0,
            explanation: "Majorant 1."
          },
          {
            type: "mcq",
            question: "Sur [0,1], x²≤x ⟹ ∫x² ≤",
            answers: [
              "1/2",
              "1",
              "1/3",
              "2"
            ],
            correct: 0,
            explanation: "≤∫x=1/2."
          },
          {
            type: "mcq",
            question: "e^(−x)≥e^(−1) sur[0,1] ⟹ ∫≥",
            answers: [
              "e⁻¹",
              "1",
              "0",
              "e"
            ],
            correct: 0,
            explanation: "e⁻¹·1."
          },
          {
            type: "mcq",
            question: "|∫₋₁¹ x³ dx|=",
            answers: [
              "0",
              "1",
              "2",
              "1/2"
            ],
            correct: 0,
            explanation: "Impaire."
          },
          {
            type: "mcq",
            question: "sin(x)≤x ⟹ ∫₀¹ sin ≤",
            answers: [
              "1/2",
              "1",
              "0",
              "2"
            ],
            correct: 0,
            explanation: "≤∫₀¹x=1/2."
          },
          {
            type: "mcq",
            question: "0≤√x≤1 ⟹ ∫₀¹ √x ≤",
            answers: [
              "1",
              "1/2",
              "2",
              "1/3"
            ],
            correct: 0,
            explanation: "≤1·1."
          },
          {
            type: "mcq",
            question: "|∫₀² (x−1)dx| ≤",
            answers: [
              "2",
              "1",
              "0",
              "4"
            ],
            correct: 0,
            explanation: "≤∫₀²1."
          },
          {
            type: "mcq",
            question: "0≤sin≤1 ⟹ ∫₀π sin ≤",
            answers: [
              "π",
              "2",
              "1",
              "0"
            ],
            correct: 0,
            explanation: "≤π."
          },
          {
            type: "mcq",
            question: "x≥0 ⟹ ∫₀¹ x³ ≥",
            answers: [
              "0",
              "1",
              "1/4",
              "2"
            ],
            correct: 0,
            explanation: "Positive."
          },
          {
            type: "mcq",
            question: "Si f≤2 sur[0,3], ∫ ≤",
            answers: [
              "6",
              "3",
              "2",
              "1"
            ],
            correct: 0,
            explanation: "2·3."
          }
        ],
        [
          {
            type: "mcq",
            question: "|∫₋π^π sin(x) dx| =",
            answers: [
              "0",
              "2",
              "π",
              "1"
            ],
            correct: 0,
            explanation: "Fonction impaire sur intervalle symétrique."
          },
          {
            type: "mcq",
            question: "Sur [0,1], x² ≤ x ⟹ ∫₀¹ x² dx ≤",
            answers: [
              "1/2",
              "1",
              "1/3",
              "2"
            ],
            correct: 0,
            explanation: "≤ ∫₀¹ x dx = 1/2."
          },
          {
            type: "mcq",
            question: "Sur [0,1], e^(−x²) ≥ e^(−x) ⟹ ∫₀¹ e^(−x²) dx ≥",
            answers: [
              "1−e⁻¹",
              "e⁻¹",
              "1",
              "0"
            ],
            correct: 0,
            explanation: "x² ≤ x ⟹ e^(−x²) ≥ e^(−x)."
          },
          {
            type: "mcq",
            question: "|∫₀² (x−1) dx| ≤",
            answers: [
              "2",
              "1",
              "0",
              "4"
            ],
            correct: 0,
            explanation: "≤ ∫₀² |x−1| ≤ 2."
          },
          {
            type: "mcq",
            question: "0 ≤ 1/(1+x²) ≤ 1 sur [0,2] ⟹ ∫₀² ≤",
            answers: [
              "2",
              "π",
              "1",
              "4"
            ],
            correct: 0,
            explanation: "≤ 1×2."
          },
          {
            type: "mcq",
            question: "Sur [0,π], sin(x) ≥ 0 ⟹ ∫₀π sin(x) dx ≥",
            answers: [
              "0",
              "2",
              "π",
              "1"
            ],
            correct: 0,
            explanation: "Fonction positive."
          },
          {
            type: "mcq",
            question: "Si |f| ≤ 3 sur [0,2], alors |∫f| ≤",
            answers: [
              "6",
              "3",
              "2",
              "9"
            ],
            correct: 0,
            explanation: "≤ 3×2."
          },
          {
            type: "mcq",
            question: "Sur [0,1], 1 ≤ 1+x ≤ 2 ⟹ ∫₀¹(1+x) dx est entre",
            answers: [
              "1 et 2",
              "0 et 2",
              "2 et 3",
              "0 et 1"
            ],
            correct: 0,
            explanation: "Encadrement direct."
          },
          {
            type: "mcq",
            question: "|∫₀¹ cos(x) dx| ≤",
            answers: [
              "1",
              "π",
              "0",
              "2"
            ],
            correct: 0,
            explanation: "≤ ∫₀¹1."
          },
          {
            type: "mcq",
            question: "Si f ≥ 2 sur [1,3], ∫₁³ f ≥",
            answers: [
              "4",
              "2",
              "3",
              "6"
            ],
            correct: 0,
            explanation: "2×2."
          }
        ],
        [
          {
            type: "mcq",
            question: "Sur [0,1], sin(x) ≤ x ⟹ ∫₀¹ sin(x)/x dx ≤",
            answers: [
              "1",
              "π/2",
              "1/2",
              "2"
            ],
            correct: 0,
            explanation: "sin(x)/x ≤ 1."
          },
          {
            type: "mcq",
            question: "Sur [0,π/2], sin(x) ≥ (2/π)x ⟹ ∫₀^(π/2) sin(x)/x dx ≥",
            answers: [
              "1",
              "2/π",
              "π/2",
              "1/2"
            ],
            correct: 0,
            explanation: "≥ (2/π)x/x."
          },
          {
            type: "mcq",
            question: "0 ≤ x ≤ 1 ⟹ e^(−x) ≥ 1−x ⟹ ∫₀¹ e^(−x) dx ≥",
            answers: [
              "1/2",
              "1",
              "0",
              "e⁻¹"
            ],
            correct: 0,
            explanation: "∫₀¹ (1−x)=1/2."
          },
          {
            type: "mcq",
            question: "Sur [0,1], √(1+x) ≤ √2 ⟹ ∫₀¹ ≤",
            answers: [
              "√2",
              "2",
              "1",
              "1/2"
            ],
            correct: 0,
            explanation: "≤ √2×1."
          },
          {
            type: "mcq",
            question: "Si f impaire sur [−a,a], ∫ =",
            answers: [
              "0",
              "≥0",
              "≤0",
              "a"
            ],
            correct: 0,
            explanation: "Symétrie."
          },
          {
            type: "mcq",
            question: "Si f paire sur [−a,a], ∫ =",
            answers: [
              "2∫₀ᵃ f",
              "0",
              "∫₀ᵃ f",
              "a"
            ],
            correct: 0,
            explanation: "Propriété paire."
          },
          {
            type: "mcq",
            question: "|∫₀² x²−2x dx| ≤",
            answers: [
              "4",
              "2",
              "0",
              "8"
            ],
            correct: 0,
            explanation: "≤ ∫₀² 2."
          },
          {
            type: "mcq",
            question: "0≤1/(1+x)≤1 ⟹ ∫₀¹ ≤",
            answers: [
              "1",
              "2",
              "1/2",
              "ln2"
            ],
            correct: 0,
            explanation: "Majorant 1."
          },
          {
            type: "mcq",
            question: "Encadrement optimal de ∫₀¹ x dx",
            answers: [
              "1/2",
              "1",
              "0",
              "2"
            ],
            correct: 0,
            explanation: "Valeur exacte."
          },
          {
            type: "mcq",
            question: "|∫f| ≤ ∫|f| provient de",
            answers: [
              "f≤|f| et −f≤|f|",
              "IPP",
              "Chasles",
              "Trig"
            ],
            correct: 0,
            explanation: "Double inégalité."
          }
        ],
        [
          {
            type: "mcq",
            question: "Sur [0,1], x² ≤ x ≤ √x ⟹ ∫₀¹ x dx est entre",
            answers: [
              "1/3 et 2/3",
              "1/2 et 1",
              "0 et 1",
              "1/4 et 3/4"
            ],
            correct: 0,
            explanation: "∫x²=1/3 et ∫√x=2/3."
          },
          {
            type: "mcq",
            question: "Sur [0,π/2], 2/π ≤ sin(x)/x ≤ 1 ⟹ ∫ est entre",
            answers: [
              "1 et π/2",
              "0 et 1",
              "π/4 et 1",
              "2/π et 1"
            ],
            correct: 0,
            explanation: "Encadrement intégré."
          },
          {
            type: "mcq",
            question: "Sur [0,1], ln(1+x) ≤ x ⟹ ∫₀¹ ln(1+x) dx ≤",
            answers: [
              "1/2",
              "1",
              "0",
              "2"
            ],
            correct: 0,
            explanation: "≤ ∫₀¹ x."
          },
          {
            type: "mcq",
            question: "e^x ≥ 1+x ⟹ ∫₀¹ e^x dx ≥",
            answers: [
              "3/2",
              "1",
              "e−1",
              "2"
            ],
            correct: 0,
            explanation: "∫₀¹(1+x)=3/2."
          },
          {
            type: "mcq",
            question: "Sur [0,1], 1/(1+x²) ≥ 1/2 ⟹ ∫₀¹ ≥",
            answers: [
              "1/2",
              "1",
              "π/4",
              "0"
            ],
            correct: 0,
            explanation: "1/2×1."
          },
          {
            type: "mcq",
            question: "|∫₋₁¹ x² dx| =",
            answers: [
              "2/3",
              "1/3",
              "0",
              "1"
            ],
            correct: 0,
            explanation: "Fonction paire."
          },
          {
            type: "mcq",
            question: "Sur [0,1], x³ ≤ x² ⟹ ∫₀¹ x³ dx ≤",
            answers: [
              "1/3",
              "1/4",
              "1/2",
              "1"
            ],
            correct: 0,
            explanation: "≤ ∫x²=1/3."
          },
          {
            type: "mcq",
            question: "Comparaison fine : sin(x) ≥ x − x³/6 ⟹ ∫₀¹ sin(x) dx ≥",
            answers: [
              "1/2 − 1/24",
              "1/2",
              "1/3",
              "0"
            ],
            correct: 0,
            explanation: "Intégration polynomiale."
          },
          {
            type: "mcq",
            question: "Si |f| ≤ g alors",
            answers: [
              "|∫f| ≤ ∫g",
              "∫f ≤ ∫g",
              "∫f ≥ ∫g",
              "="
            ],
            correct: 0,
            explanation: "Comparaison via triangulaire."
          },
          {
            type: "mcq",
            question: "Encadrement le plus précis pour ∫₀¹ e^(−x²) dx",
            answers: [
              "entre 1−1/3 et 1",
              "entre 0 et 1",
              "entre e⁻¹ et 1",
              "≥1"
            ],
            correct: 0,
            explanation: "e^(−x²) ≥ 1−x²."
          }
        ]
      ]
    }
  ],
  l1Bonus: {
    notions: [
      {
        id: "riemann",
        label: "Intégrale de Riemann",
        icon: "∞",
        lesson: {
          formula: "∫ₐᵇ f = lim[n→∞] Σᵢ f(xᵢ)·Δx",
          text: "Construite comme limite de sommes de rectangles. On subdivise [a,b] en n intervalles de largeur Δx = (b−a)<br>.",
          example: "∫₀¹ x dx = lim (1<br>)·Σᵢ (i<br>) = 1/2"
        },
        fullBlocks: [
          {
            type: "definition",
            title: "📌 Construction",
            text: "On découpe [a,b] en n sous-intervalles de largeur Δx = (b−a)<br>. La somme de Riemann est Sₙ = Σᵢ f(xᵢ)·Δx."
          },
          {
            type: "formula",
            title: "🔑 Définition formelle",
            formula: "∫ₐᵇ f(x)dx = lim[n→∞] (b−a)<br> · Σᵢ₌₁ⁿ f(a + i·(b−a)<br>)",
            text: "La limite des sommes de Riemann quand la subdivision devient infiniment fine."
          },
          {
            type: "demo",
            title: "🔬 Démonstration — ∫₀¹ x dx = 1/2",
            text: "Sₙ = (1<br>)·Σᵢ₌₁ⁿ (i<br>) = (1<br>²)·n(n+1)/2 = (n+1)/(2n). Quand n→∞ : (n+1)/(2n) → 1/2. ✓"
          }
        ],
        levels: [
          [
            {
              type: "mcq",
              visual: "∞",
              question: "Somme de Riemann de ∫₀¹ x dx, n=4 rectangles (point gauche) :",
              answers: [
                "3/8",
                "1/2",
                "5/8",
                "1/4"
              ],
              correct: 0,
              explanation: "Points : 0, 1/4, 1/2, 3/4. Somme = (1/4)(0+1/4+1/2+3/4) = 3/8"
            }
          ],
          [
            {
              type: "mcq",
              visual: "∞",
              question: "Avec n=4 rectangles à droite, ∫₀¹ x dx ≈ ?",
              answers: [
                "3/8",
                "5/8",
                "1/2",
                "1"
              ],
              correct: 1,
              explanation: "Points droits: 1/4, 1/2, 3/4, 1. Somme = (1/4)(1/4+1/2+3/4+1) = 5/8"
            }
          ],
          [
            {
              type: "mcq",
              visual: "∞",
              question: "Sₙ = (1<br>²)·Σᵢ₌₁ⁿ i. La limite quand n→∞ est :",
              answers: [
                "1/2",
                "1",
                "0",
                "∞"
              ],
              correct: 0,
              explanation: "Σᵢ = n(n+1)/2, donc Sₙ = (n+1)/(2n) → 1/2."
            }
          ],
          [
            {
              type: "mcq",
              visual: "∞",
              question: "∫₀² x² dx par Riemann : lim Σ (i·2<br>)²·(2<br>) vaut :",
              answers: [
                "8/3",
                "4/3",
                "2",
                "1"
              ],
              correct: 0,
              explanation: "Σᵢ²  = n(n+1)(2n+1)/6. Après calcul : 8/3."
            }
          ],
          [
            {
              type: "input",
              visual: "∫",
              question: "∫₀¹ 1 dx calculé par Riemann (n rectangles). La limite est ?",
              correct: "1",
              explanation: "Sₙ = n × (1<br>) × 1 = 1 pour tout n."
            }
          ],
          [
            {
              type: "mcq",
              visual: "🔬",
              question: "Pourquoi la somme de Riemann converge-t-elle pour f continue ?",
              answers: [
                "Car f est bornée",
                "Rectangles se touchent",
                "Continuité uniforme → oscillations → 0",
                "Par le TFA"
              ],
              correct: 2,
              explanation: "La continuité uniforme garantit que les oscillations sur chaque sous-intervalle tendent vers 0."
            }
          ]
        ]
      },
      {
        id: "impropres",
        label: "Intégrales impropres",
        icon: "⟶",
        lesson: {
          formula: "∫₁⁺∞ (1/xᵅ)dx converge ⟺ α > 1",
          text: "Définie par une limite : on remplace la borne infinie par b → +∞.",
          example: "∫₁⁺∞ (1/x²)dx = lim [−1/x]₁ᵇ = 1. Converge !"
        },
        fullBlocks: [
          {
            type: "definition",
            title: "📌 Définition",
            text: "∫₁⁺∞ f(x)dx = lim[b→∞] ∫₁ᵇ f(x)dx. L'intégrale converge si cette limite est finie."
          },
          {
            type: "formula",
            title: "🔑 Critère de Riemann",
            formula: "∫₁⁺∞ (1/xᵅ)dx converge ⟺ α > 1",
            text: "Fondamental pour étudier la convergence des intégrales de Bertrand."
          },
          {
            type: "demo",
            title: "🔬 Démonstration",
            text: "∫₁ᵇ x⁻ᵅ dx = [x^(1−α)/(1−α)]₁ᵇ. Si α>1 : b^(1−α)→0 quand b→∞ → converge vers 1/(α−1). Si α≤1 : diverge vers +∞."
          },
          {
            type: "warning",
            title: "⚠️ Intégrale de Gauss",
            text: "∫₋∞⁺∞ e^(−x²)dx = √π. Ce résultat se démontre en passant en coordonnées polaires."
          }
        ],
        levels: [
          [
            {
              type: "mcq",
              visual: "∞",
              question: "∫₁⁺∞ (1/x)dx est :",
              answers: [
                "Convergente = 1",
                "Divergente",
                "Convergente = e",
                "= ln 2"
              ],
              correct: 1,
              explanation: "[ln x]₁⁺∞ = +∞. Diverge (il faut α > 1)."
            }
          ],
          [
            {
              type: "mcq",
              visual: "🎯",
              question: "∫₁⁺∞ (1/x³)dx vaut :",
              answers: [
                "1/2",
                "1",
                "2",
                "1/3"
              ],
              correct: 0,
              explanation: "[−1/(2x²)]₁⁺∞ = 0 − (−1/2) = 1/2"
            }
          ],
          [
            {
              type: "mcq",
              visual: "∞",
              question: "∫₁⁺∞ (1/x^(1/2))dx :",
              answers: [
                "Converge = 2",
                "Diverge",
                "Converge = 1",
                "Converge = 1/2"
              ],
              correct: 1,
              explanation: "α = 1/2 < 1 → diverge."
            }
          ],
          [
            {
              type: "input",
              visual: "∫",
              question: "∫₂⁺∞ (1/x²)dx vaut ? (entrez ex: 1/2)",
              correct: "1/2",
              explanation: "[−1/x]₂⁺∞ = 0−(−1/2) = 1/2"
            }
          ],
          [
            {
              type: "mcq",
              visual: "🔬",
              question: "∫₀¹ (1/√x)dx (borne singulière en 0) :",
              answers: [
                "Diverge",
                "Converge = 1",
                "Converge = 2",
                "Converge = √2"
              ],
              correct: 2,
              explanation: "∫ₑ¹ x^(-1/2)dx = [2√x]ₑ¹ = 2−2√ε → 2 quand ε→0."
            }
          ],
          [
            {
              type: "mcq",
              visual: "💡",
              question: "∫₀⁺∞ e^(−x)dx vaut :",
              answers: [
                "0",
                "1",
                "∞",
                "e"
              ],
              correct: 1,
              explanation: "[−e^(−x)]₀⁺∞ = 0−(−1) = 1."
            }
          ]
        ]
      },
      {
        id: "thm-fondamental",
        label: "Théorème fondamental",
        icon: "∂",
        lesson: {
          formula: "F(x) = ∫ₐˣ f(t)dt  ⟹  F'(x) = f(x)",
          text: "Lien profond entre dérivation et intégration : la dérivée de l'intégrale à borne variable redonne la fonction.",
          example: "F(x) = ∫₀ˣ t²dt = x³/3 → F'(x) = x² ✓"
        },
        fullBlocks: [
          {
            type: "formula",
            title: "🔑 Théorème fondamental (TFA)",
            formula: "d/dx[∫ₐˣ f(t)dt] = f(x)",
            text: "Si f est continue sur [a,b], alors F(x)=∫ₐˣ f(t)dt est une primitive de f."
          },
          {
            type: "demo",
            title: "🔬 Idée de la preuve",
            text: "F(x+h)−F(x) = ∫ₓˣ⁺ʰ f(t)dt ≈ h·f(x) par continuité de f. Donc [F(x+h)−F(x)]/h → f(x) quand h→0. Formellement : théorème des accroissements finis appliqué à l'intégrale."
          },
          {
            type: "example",
            title: "✅ Application chain rule",
            text: "Si G(x) = ∫₀^(x²) sin(t)dt, par règle de la chaîne : G'(x) = sin(x²)·2x."
          }
        ],
        levels: [
          [
            {
              type: "mcq",
              visual: "∂",
              question: "F(x) = ∫₀ˣ e^(t²)dt → F'(x) =",
              answers: [
                "e^(x²)",
                "2x·e^(x²)",
                "e^(x²)/2x",
                "x·e^(x²)"
              ],
              correct: 0,
              explanation: "TFA direct : F'(x) = e^(x²)"
            }
          ],
          [
            {
              type: "mcq",
              visual: "∂",
              question: "G(x) = ∫₁ˣ ln(t)dt → G'(x) =",
              answers: [
                "ln(x)",
                "1/x",
                "x·ln(x)",
                "ln(x)/x"
              ],
              correct: 0,
              explanation: "TFA : G'(x) = ln(x)."
            }
          ],
          [
            {
              type: "mcq",
              visual: "🔬",
              question: "H(x) = ∫₀^(x²) sin(t)dt → H'(x) =",
              answers: [
                "sin(x²)",
                "2x·sin(x²)",
                "cos(x²)",
                "2x·cos(x²)"
              ],
              correct: 1,
              explanation: "Règle de la chaîne + TFA : H'(x) = sin(x²)·2x."
            }
          ],
          [
            {
              type: "input",
              visual: "∂",
              question: "F(x) = ∫₀ˣ t dt → F'(3) = ?",
              correct: "3",
              explanation: "F'(x) = x, donc F'(3) = 3."
            }
          ],
          [
            {
              type: "mcq",
              visual: "🎯",
              question: "K(x) = ∫ₓ¹ cos(t²)dt → K'(x) =",
              answers: [
                "cos(x²)",
                "-cos(x²)",
                "cos(x)",
                "−cos(x)"
              ],
              correct: 1,
              explanation: "K(x) = −∫₁ˣ cos(t²)dt → K'(x) = −cos(x²)."
            }
          ],
          [
            {
              type: "mcq",
              visual: "💡",
              question: "Si F(x)=∫₀ˣ f(t)dt et F''(x)=0, que vaut f ?",
              answers: [
                "f est nulle",
                "f est constante",
                "f'=0 seulement",
                "f est affine"
              ],
              correct: 1,
              explanation: "F''=f'=0 ⟹ f est constante."
            }
          ]
        ]
      }
    ]
  }
};
