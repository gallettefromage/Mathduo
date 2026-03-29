export default {
  id: "fonction",
  title: "Fonction",
  description: "page d'homonymie de Wikimédia",
  icon: "𝑓",
  xpMax: 150,
  notions: [
    {
      id: "domaine-et-image",
      label: "Domaine et image",
      lesson: {
        formula: "f: D → E, Dom(f)={x∈D | f(x) existe}",
        text: "Domaine et image est une notion fondamentale en mathématiques de niveau Terminale–L1. Elle se caractérise par f: D → E, Dom(f)={x∈D | f(x) existe}. Sa maîtrise requiert de comprendre à la fois son expression algébrique formelle et son interprétation géométrique intuitive.",
        example: "Exemple concret : appliquons la définition de Domaine et image. En vérifiant les hypothèses une par une, on obtient le résultat attendu. Vérification par calcul direct : conforme à la définition ✓"
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Définition de Domaine et image",
          text: "Domaine et image désigne, dans le cadre du programme Terminale–L1, f: D → E, Dom(f)={x∈D | f(x) existe}. Cette notion s'inscrit dans la construction algébrique et géométrique des mathématiques modernes. Deux objets de type Domaine et image peuvent différer tout en satisfaisant la même définition générale."
        },
        {
          type: "formula",
          title: "🔑 Formule principale",
          formula: "f: D → E, Dom(f)={x∈D | f(x) existe}",
          text: "Cette expression formelle est la clé pour toute manipulation rigoureuse de Domaine et image. Elle relie les grandeurs fondamentales et permet le calcul explicite dans les cas concrets. Avant toute application, vérifier que toutes les conditions d'existence sont satisfaites."
        },
        {
          type: "example",
          title: "✅ Exemple concret",
          text: "Cas particulier : prenons l'exemple le plus simple de Domaine et image. On vérifie directement que la définition est satisfaite. Le calcul explicite confirme la cohérence avec la formule générale. Interprétation géométrique : on peut visualiser Domaine et image comme une transformation du plan ou une propriété de courbe."
        },
        {
          type: "demo",
          title: "🔬 Démonstration",
          text: "Preuve rigoureuse : pour établir les propriétés fondamentales de Domaine et image, on part de la définition formelle. Étape 1 : vérifier les hypothèses. Étape 2 : appliquer les propriétés des structures algébriques sous-jacentes. Étape 3 : conclure par un argument logique direct. L'unicité, si elle existe, se démontre en supposant deux objets vérifiant la définition et en montrant qu'ils sont nécessairement égaux."
        },
        {
          type: "warning",
          title: "⚠️ Erreurs classiques à éviter",
          text: "1) Ne jamais appliquer Domaine et image sans vérifier les hypothèses d'existence.\n2) Ne pas confondre Domaine et image avec des notions voisines similaires en apparence.\n3) Toujours vérifier le résultat obtenu en le réinjectant dans la définition.\n4) La généralisation abusive depuis des cas particuliers est source d'erreurs graves."
        },
        {
          type: "technique",
          title: "🛠️ Méthode opératoire",
          text: "Démarche systématique : (1) Identifier le cadre (nature des objets, espace ambiant). (2) Énoncer précisément les hypothèses. (3) Appliquer la définition de Domaine et image. (4) Calculer ou démontrer étape par étape. (5) Vérifier la cohérence du résultat. (6) Interpréter géométriquement si possible."
        },
        {
          type: "graph",
          title: "📊 Représentation graphique",
          svgContent: "<svg viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"300\" height=\"200\" fill=\"#0f172a\"/>\n      <line x1=\"20\" y1=\"100\" x2=\"280\" y2=\"100\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n      <line x1=\"150\" y1=\"20\" x2=\"150\" y2=\"180\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n      <path d=\"M30,160 Q90,30 150,100 Q210,170 270,40\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>\n      <text x=\"10\" y=\"195\" fill=\"#94a3b8\" font-size=\"10\" font-family=\"monospace\">Représentation graphique</text>\n    </svg>",
          caption: "Visualisation de Domaine et image",
          text: "La représentation graphique de Domaine et image permet d'établir le lien essentiel entre l'algèbre et la géométrie. Les points remarquables correspondent aux valeurs critiques. La forme de la courbe traduit les propriétés analytiques de Domaine et image."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            question: "Une primitive de f(x) = 2x est :",
            answers: [
              "x² + C",
              "x + C",
              "2 + C",
              "x²"
            ],
            correct: 0,
            explanation: "Par la règle de puissance : ∫2x dx = 2·x²/2 + C = x² + C. Vérification : (x²)' = 2x ✓"
          },
          {
            type: "mcq",
            question: "Une primitive de f(x) = eˣ est :",
            answers: [
              "eˣ + C",
              "xeˣ + C",
              "eˣ/x + C",
              "e²ˣ + C"
            ],
            correct: 0,
            explanation: "La fonction exponentielle est sa propre primitive : (eˣ)' = eˣ ✓"
          },
          {
            type: "mcq",
            question: "Une primitive de f(x) = cos(x) est :",
            answers: [
              "sin(x) + C",
              "−sin(x) + C",
              "cos(x) + C",
              "−cos(x) + C"
            ],
            correct: 0,
            explanation: "(sin x)' = cos x donc sin(x) + C est bien une primitive de cos(x) ✓"
          },
          {
            type: "input",
            visual: "∫",
            question: "Calculer ∫ 1 dx = ?",
            correct: "x + C",
            explanation: "La primitive de la constante 1 est x + C car (x)' = 1. La constante C est indispensable."
          },
          {
            type: "mcq",
            question: "Une primitive de f(x) = x³ est :",
            answers: [
              "x⁴/4 + C",
              "x⁴ + C",
              "3x² + C",
              "x³/3 + C"
            ],
            correct: 0,
            explanation: "Règle ∫xⁿ dx = xⁿ⁺¹/(n+1) + C. Ici n=3 : ∫x³ dx = x⁴/4 + C. Vérif : (x⁴/4)' = x³ ✓"
          }
        ],
        [
          {
            type: "mcq",
            question: "∫(3x² + 2x) dx vaut :",
            answers: [
              "x³ + x² + C",
              "3x³ + 2x + C",
              "x² + x + C",
              "3x²/2 + x² + C"
            ],
            correct: 0,
            explanation: "Par linéarité : ∫3x²dx + ∫2x dx = x³ + x² + C."
          },
          {
            type: "mcq",
            question: "∫ 1/x dx vaut (x > 0) :",
            answers: [
              "ln(x) + C",
              "−1/x² + C",
              "1/x + C",
              "log(x) + C"
            ],
            correct: 0,
            explanation: "C'est le cas exceptionnel de la règle puissance (n = −1) : ∫x⁻¹ dx = ln|x| + C."
          },
          {
            type: "mcq",
            question: "∫ sin(x) dx vaut :",
            answers: [
              "−cos(x) + C",
              "cos(x) + C",
              "sin(x) + C",
              "−sin(x) + C"
            ],
            correct: 0,
            explanation: "(−cos x)' = sin x donc la primitive de sin(x) est −cos(x) + C ✓"
          },
          {
            type: "input",
            visual: "∫",
            question: "∫ 5eˣ dx = ?",
            correct: "5eˣ + C",
            explanation: "Par linéarité : 5 sort de l'intégrale. ∫5eˣ dx = 5∫eˣ dx = 5eˣ + C."
          },
          {
            type: "mcq",
            question: "Si F'(x) = f(x) et G'(x) = f(x), alors F − G est :",
            answers: [
              "une constante",
              "nulle",
              "égale à f",
              "indéfinie"
            ],
            correct: 0,
            explanation: "(F−G)' = f − f = 0. Toute fonction de dérivée nulle sur un intervalle est constante."
          }
        ],
        [
          {
            type: "mcq",
            question: "∫ x^(1/2) dx vaut :",
            answers: [
              "(2/3)x^(3/2) + C",
              "(1/2)x^(−1/2) + C",
              "x^(3/2) + C",
              "2x^(3/2) + C"
            ],
            correct: 0,
            explanation: "n = 1/2 : ∫x^(1/2) dx = x^(3/2)/(3/2) + C = (2/3)x^(3/2) + C. Vérif : [(2/3)x^(3/2)]' = x^(1/2) ✓"
          },
          {
            type: "mcq",
            question: "∫ (2x+1)³ dx. La bonne approche est :",
            answers: [
              "Développer puis intégrer terme à terme",
              "Intégrer directement comme ∫uⁿdu",
              "Utiliser IPP",
              "Impossible"
            ],
            correct: 0,
            explanation: "Sans changement de variable apparent ici (u'≠1), le plus sûr est de développer (2x+1)³ puis d'intégrer chaque terme par la règle de puissance."
          },
          {
            type: "input",
            visual: "∫",
            question: "∫ (4x³ − 3x²) dx = ?",
            correct: "x⁴ − x³ + C",
            explanation: "Par linéarité : ∫4x³ dx − ∫3x² dx = x⁴ − x³ + C. Vérif : (x⁴−x³)' = 4x³−3x² ✓"
          },
          {
            type: "mcq",
            question: "La primitive de 1/(1+x²) est :",
            answers: [
              "arctan(x) + C",
              "arcsin(x) + C",
              "ln(1+x²) + C",
              "−1/(1+x²)² + C"
            ],
            correct: 0,
            explanation: "(arctan x)' = 1/(1+x²). C'est une primitive fondamentale à connaître absolument."
          },
          {
            type: "mcq",
            question: "∫ 1/√x dx (x > 0) vaut :",
            answers: [
              "2√x + C",
              "√x + C",
              "−1/(2x^(3/2)) + C",
              "ln(√x) + C"
            ],
            correct: 0,
            explanation: "∫x^(−1/2) dx = x^(1/2)/(1/2) + C = 2√x + C. Vérif : (2√x)' = 1/√x ✓"
          }
        ],
        [
          {
            type: "mcq",
            question: "∫ 2x·e^(x²) dx. On pose u = x², alors :",
            answers: [
              "e^(x²) + C",
              "2e^(x²) + C",
              "x²e^(x²) + C",
              "e^(x²)/2 + C"
            ],
            correct: 0,
            explanation: "u=x², du=2x dx. L'intégrale devient ∫eᵘ du = eᵘ + C = e^(x²) + C. Reconnaissance de la dérivée cachée u'·eᵘ."
          },
          {
            type: "mcq",
            question: "∫ cos(x)·e^(sin x) dx vaut :",
            answers: [
              "e^(sin x) + C",
              "sin(x)e^(cos x) + C",
              "e^(cos x) + C",
              "cos(x)e^(sin x) + C"
            ],
            correct: 0,
            explanation: "On reconnaît la forme ∫u'eᵘ avec u=sin(x), u'=cos(x). Résultat : e^(sin x) + C ✓"
          },
          {
            type: "input",
            visual: "∫",
            question: "∫ x/(1+x²) dx = ?",
            correct: "(1/2)ln(1+x²) + C",
            explanation: "On reconnaît ∫u'/u avec u=1+x², u'=2x. Il faut écrire x/(1+x²) = (1/2)·2x/(1+x²). Résultat : (1/2)ln(1+x²) + C."
          },
          {
            type: "mcq",
            question: "∫ sin(x)cos(x) dx. La méthode la plus rapide :",
            answers: [
              "u=sin(x), résultat sin²(x)/2+C",
              "IPP obligatoire",
              "Développer en sin(2x)/2",
              "Impossible"
            ],
            correct: 0,
            explanation: "u=sin(x), u'=cos(x). ∫u·u'dx = u²/2 + C = sin²(x)/2 + C. Également valide : −cos²(x)/2+C (même famille)."
          },
          {
            type: "mcq",
            question: "∫ (ln x)/x dx vaut :",
            answers: [
              "(ln x)²/2 + C",
              "ln(ln x) + C",
              "1/x + C",
              "−1/(x ln x) + C"
            ],
            correct: 0,
            explanation: "u=ln(x), u'=1/x. ∫u·u' dx = u²/2 + C = (ln x)²/2 + C. Vérification immédiate par dérivation."
          }
        ],
        [
          {
            type: "mcq",
            question: "∫ x·eˣ dx (intégration par parties) vaut :",
            answers: [
              "eˣ(x−1) + C",
              "xeˣ + C",
              "eˣ(x+1) + C",
              "x²eˣ/2 + C"
            ],
            correct: 0,
            explanation: "IPP : u=x, v'=eˣ ⟹ u'=1, v=eˣ. ∫xeˣ dx = xeˣ − ∫eˣ dx = xeˣ − eˣ + C = eˣ(x−1) + C ✓"
          },
          {
            type: "mcq",
            question: "∫ x·sin(x) dx vaut :",
            answers: [
              "sin(x)−x·cos(x) + C",
              "−x·cos(x) + C",
              "x·sin(x) + C",
              "−sin(x)−x·cos(x) + C"
            ],
            correct: 0,
            explanation: "IPP : u=x, v'=sin(x). u'=1, v=−cos(x). ∫x sin(x)dx = −x cos(x)+∫cos(x)dx = sin(x)−x cos(x)+C."
          },
          {
            type: "input",
            visual: "∫",
            question: "∫ ln(x) dx = ? (IPP avec u=ln x, v'=1)",
            correct: "x·ln(x) − x + C",
            explanation: "u=ln(x)⟹u'=1/x ; v'=1⟹v=x. IPP : x ln(x)−∫x·(1/x)dx = x ln(x)−∫1 dx = x ln(x)−x+C ✓"
          },
          {
            type: "mcq",
            question: "∫ x²·eˣ dx nécessite :",
            answers: [
              "2 intégrations par parties",
              "1 intégration par parties",
              "un changement de variable",
              "une décomposition en éléments simples"
            ],
            correct: 0,
            explanation: "Chaque IPP réduit le degré du polynôme de 1. Degré 2 ⟹ 2 IPP nécessaires. Résultat : eˣ(x²−2x+2)+C."
          },
          {
            type: "mcq",
            question: "∫ eˣ·cos(x) dx. En posant I=∫eˣcos(x)dx :",
            answers: [
              "I = eˣ(cos x+sin x)/2 + C",
              "I = eˣcos(x) + C",
              "I = eˣsin(x) + C",
              "L'intégrale diverge"
            ],
            correct: 0,
            explanation: "Deux IPP ramènent à I = eˣcos(x)+eˣsin(x)−I, soit 2I = eˣ(cos x+sin x), d'où I = eˣ(cos x+sin x)/2 + C."
          }
        ],
        [
          {
            type: "mcq",
            question: "∫ 1/(x²−1) dx. La décomposition en éléments simples donne :",
            answers: [
              "1/2·ln|x−1| − 1/2·ln|x+1| + C",
              "ln|x²−1| + C",
              "arctan(x) + C",
              "1/2·arctan(x) + C"
            ],
            correct: 0,
            explanation: "1/(x²−1) = 1/2·[1/(x−1) − 1/(x+1)]. Integration terme à terme : 1/2·ln|x−1|−1/2·ln|x+1|+C = (1/2)ln|(x−1)/(x+1)|+C."
          },
          {
            type: "mcq",
            question: "∫₀^(π/2) sin(x)dx vaut :",
            answers: [
              "1",
              "0",
              "2",
              "π/2"
            ],
            correct: 0,
            explanation: "[−cos(x)]₀^(π/2) = −cos(π/2)−(−cos(0)) = 0+1 = 1. ✓"
          },
          {
            type: "input",
            visual: "∫",
            question: "∫₀¹ xeˣ dx = ? (résultat exact)",
            correct: "1",
            explanation: "IPP : [xeˣ−eˣ]₀¹ = (e−e)−(0−1) = 0+1 = 1. ✓"
          },
          {
            type: "mcq",
            question: "∫ √(1−x²) dx sur [−1,1] vaut :",
            answers: [
              "π/2",
              "π",
              "1",
              "π/4"
            ],
            correct: 0,
            explanation: "∫₋₁¹ √(1−x²) dx est l'aire d'un demi-disque de rayon 1 = π·1²/2 = π/2. Géométriquement immédiat !"
          },
          {
            type: "mcq",
            question: "La valeur moyenne de sin(x) sur [0,π] est :",
            answers: [
              "2/π",
              "0",
              "1/2",
              "1/π"
            ],
            correct: 0,
            explanation: "Valeur moyenne = (1/π)∫₀^π sin(x)dx = (1/π)[−cos x]₀^π = (1/π)(1+1) = 2/π ✓"
          }
        ]
      ]
    },
    {
      id: "parite-et-periodicite",
      label: "Parité et périodicité",
      lesson: {
        formula: "f paire: f(−x)=f(x) ; f impaire: f(−x)=−f(x)",
        text: "Parité et périodicité est une notion fondamentale en mathématiques de niveau Terminale–L1. Elle se caractérise par f paire: f(−x)=f(x) ; f impaire: f(−x)=−f(x). Sa maîtrise requiert de comprendre à la fois son expression algébrique formelle et son interprétation géométrique intuitive.",
        example: "Exemple concret : appliquons la définition de Parité et périodicité. En vérifiant les hypothèses une par une, on obtient le résultat attendu. Vérification par calcul direct : conforme à la définition ✓"
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Définition de Parité et périodicité",
          text: "Parité et périodicité désigne, dans le cadre du programme Terminale–L1, f paire: f(−x)=f(x) ; f impaire: f(−x)=−f(x). Cette notion s'inscrit dans la construction algébrique et géométrique des mathématiques modernes. Deux objets de type Parité et périodicité peuvent différer tout en satisfaisant la même définition générale."
        },
        {
          type: "formula",
          title: "🔑 Formule principale",
          formula: "f paire: f(−x)=f(x) ; f impaire: f(−x)=−f(x)",
          text: "Cette expression formelle est la clé pour toute manipulation rigoureuse de Parité et périodicité. Elle relie les grandeurs fondamentales et permet le calcul explicite dans les cas concrets. Avant toute application, vérifier que toutes les conditions d'existence sont satisfaites."
        },
        {
          type: "example",
          title: "✅ Exemple concret",
          text: "Cas particulier : prenons l'exemple le plus simple de Parité et périodicité. On vérifie directement que la définition est satisfaite. Le calcul explicite confirme la cohérence avec la formule générale. Interprétation géométrique : on peut visualiser Parité et périodicité comme une transformation du plan ou une propriété de courbe."
        },
        {
          type: "demo",
          title: "🔬 Démonstration",
          text: "Preuve rigoureuse : pour établir les propriétés fondamentales de Parité et périodicité, on part de la définition formelle. Étape 1 : vérifier les hypothèses. Étape 2 : appliquer les propriétés des structures algébriques sous-jacentes. Étape 3 : conclure par un argument logique direct. L'unicité, si elle existe, se démontre en supposant deux objets vérifiant la définition et en montrant qu'ils sont nécessairement égaux."
        },
        {
          type: "warning",
          title: "⚠️ Erreurs classiques à éviter",
          text: "1) Ne jamais appliquer Parité et périodicité sans vérifier les hypothèses d'existence.\n2) Ne pas confondre Parité et périodicité avec des notions voisines similaires en apparence.\n3) Toujours vérifier le résultat obtenu en le réinjectant dans la définition.\n4) La généralisation abusive depuis des cas particuliers est source d'erreurs graves."
        },
        {
          type: "technique",
          title: "🛠️ Méthode opératoire",
          text: "Démarche systématique : (1) Identifier le cadre (nature des objets, espace ambiant). (2) Énoncer précisément les hypothèses. (3) Appliquer la définition de Parité et périodicité. (4) Calculer ou démontrer étape par étape. (5) Vérifier la cohérence du résultat. (6) Interpréter géométriquement si possible."
        },
        {
          type: "graph",
          title: "📊 Représentation graphique",
          svgContent: "<svg viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"300\" height=\"200\" fill=\"#0f172a\"/>\n      <line x1=\"20\" y1=\"100\" x2=\"280\" y2=\"100\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n      <line x1=\"150\" y1=\"20\" x2=\"150\" y2=\"180\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n      <path d=\"M30,160 Q90,30 150,100 Q210,170 270,40\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>\n      <text x=\"10\" y=\"195\" fill=\"#94a3b8\" font-size=\"10\" font-family=\"monospace\">Représentation graphique</text>\n    </svg>",
          caption: "Visualisation de Parité et périodicité",
          text: "La représentation graphique de Parité et périodicité permet d'établir le lien essentiel entre l'algèbre et la géométrie. Les points remarquables correspondent aux valeurs critiques. La forme de la courbe traduit les propriétés analytiques de Parité et périodicité."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            question: "∫₀¹ 1 dx vaut :",
            answers: [
              "1",
              "0",
              "1/2",
              "2"
            ],
            correct: 0,
            explanation: "∫₀¹ 1 dx = [x]₀¹ = 1−0 = 1. C'est la mesure de l'intervalle [0,1]."
          },
          {
            type: "mcq",
            question: "∫₀¹ x dx vaut :",
            answers: [
              "1/2",
              "1",
              "2",
              "1/4"
            ],
            correct: 0,
            explanation: "[x²/2]₀¹ = 1/2−0 = 1/2. Géométriquement : aire du triangle de base 1 et hauteur 1."
          },
          {
            type: "mcq",
            question: "La propriété de Chasles donne ∫ₐᶜ f = ∫ₐᵇ f + ∫ᵦᶜ f. Si ∫₀² f=3 et ∫₂⁵ f=4, alors ∫₀⁵ f =",
            answers: [
              "7",
              "1",
              "12",
              "3/4"
            ],
            correct: 0,
            explanation: "Directement par Chasles : ∫₀⁵ f = ∫₀² f + ∫₂⁵ f = 3+4 = 7."
          },
          {
            type: "input",
            visual: "∫",
            question: "∫₀² 3 dx = ?",
            correct: "6",
            explanation: "∫₀² 3 dx = 3·[x]₀² = 3·(2−0) = 6. La primitive de 3 est 3x."
          },
          {
            type: "mcq",
            question: "∫ₐᵃ f(x)dx vaut toujours :",
            answers: [
              "0",
              "f(a)",
              "2f(a)",
              "indéfini"
            ],
            correct: 0,
            explanation: "Quand les bornes sont égales, l'intégrale est nulle : pas d'intervalle à parcourir, donc l'aire est 0."
          }
        ],
        [
          {
            type: "mcq",
            question: "∫₀² x² dx vaut :",
            answers: [
              "8/3",
              "4",
              "2",
              "4/3"
            ],
            correct: 0,
            explanation: "[x³/3]₀² = 8/3−0 = 8/3 ≈ 2,67."
          },
          {
            type: "mcq",
            question: "∫₀^π cos(x)dx vaut :",
            answers: [
              "0",
              "2",
              "−2",
              "1"
            ],
            correct: 0,
            explanation: "[sin(x)]₀^π = sin(π)−sin(0) = 0−0 = 0. Les aires positives et négatives se compensent."
          },
          {
            type: "mcq",
            question: "Si f est positive sur [a,b], alors ∫ₐᵇ f est :",
            answers: [
              "≥ 0",
              "= 0",
              "≤ 0",
              "quelconque"
            ],
            correct: 0,
            explanation: "Si f(x)≥0 sur [a,b], l'intégrale représente une aire positive ou nulle. ∫ₐᵇ f ≥ 0."
          },
          {
            type: "input",
            visual: "∫",
            question: "∫₁ᵉ (1/x) dx = ?",
            correct: "1",
            explanation: "[ln|x|]₁ᵉ = ln(e)−ln(1) = 1−0 = 1. Fondamental !"
          },
          {
            type: "mcq",
            question: "∫₀² eˣ dx vaut :",
            answers: [
              "e²−1",
              "e²",
              "2e",
              "e−1"
            ],
            correct: 0,
            explanation: "[eˣ]₀² = e²−e⁰ = e²−1 ≈ 6,39."
          }
        ],
        [
          {
            type: "mcq",
            question: "Valeur moyenne de f sur [a,b] :",
            answers: [
              "1/(b−a)·∫ₐᵇ f(x)dx",
              "∫ₐᵇ f(x)dx",
              "f((a+b)/2)",
              "(f(a)+f(b))/2"
            ],
            correct: 0,
            explanation: "La valeur moyenne est définie par μ = 1/(b−a)·∫ₐᵇ f(x)dx. Ce n'est généralement pas f au milieu."
          },
          {
            type: "mcq",
            question: "∫₀¹ √x dx vaut :",
            answers: [
              "2/3",
              "1/2",
              "1",
              "1/3"
            ],
            correct: 0,
            explanation: "∫₀¹ x^(1/2) dx = [x^(3/2)/(3/2)]₀¹ = 2/3·1 − 0 = 2/3 ✓"
          },
          {
            type: "input",
            visual: "∫",
            question: "∫₀^(π/2) sin(x) dx = ?",
            correct: "1",
            explanation: "[−cos(x)]₀^(π/2) = −cos(π/2)+cos(0) = 0+1 = 1. ✓"
          },
          {
            type: "mcq",
            question: "Si |f(x)| ≤ M sur [a,b], alors |∫ₐᵇ f| ≤ :",
            answers: [
              "M(b−a)",
              "M",
              "Mb",
              "(b−a)/M"
            ],
            correct: 0,
            explanation: "Inégalité triangulaire intégrale : |∫ₐᵇ f| ≤ ∫ₐᵇ|f| ≤ M(b−a). Fondamentale pour les majorations."
          },
          {
            type: "mcq",
            question: "∫₋₁¹ x³ dx vaut :",
            answers: [
              "0",
              "1/2",
              "−1/2",
              "2"
            ],
            correct: 0,
            explanation: "x³ est impaire et [−1,1] est symétrique ⟹ ∫₋₁¹ x³ dx = 0. Toujours vérifier la parité !"
          }
        ],
        [
          {
            type: "mcq",
            question: "L'aire entre les courbes y=x² et y=x sur [0,1] vaut :",
            answers: [
              "1/6",
              "1/2",
              "1/3",
              "1/4"
            ],
            correct: 0,
            explanation: "x≥x² sur [0,1] (vérifier en 1/2 : 1/4<1/2). Aire = ∫₀¹(x−x²)dx = [x²/2−x³/3]₀¹ = 1/2−1/3 = 1/6."
          },
          {
            type: "mcq",
            question: "∫₀¹ x·√(1−x²) dx. On pose u=1−x² :",
            answers: [
              "1/3",
              "1/2",
              "2/3",
              "1/6"
            ],
            correct: 0,
            explanation: "u=1−x², du=−2x dx. ∫₀¹ x√(1−x²)dx = −(1/2)∫₁⁰ √u du = (1/2)∫₀¹ u^(1/2)du = (1/2)·[2u^(3/2)/3]₀¹ = 1/3."
          },
          {
            type: "input",
            visual: "∫",
            question: "∫₀² (2x−x²)dx = ? (aire d'une parabole)",
            correct: "4/3",
            explanation: "[x²−x³/3]₀² = (4−8/3)−0 = 12/3−8/3 = 4/3. C'est l'aire entre la parabole y=2x−x² et l'axe des x."
          },
          {
            type: "mcq",
            question: "Si f est décroissante sur [a,b], l'encadrement correct de ∫ₐᵇ f est :",
            answers: [
              "f(b)(b−a) ≤ ∫ₐᵇ f ≤ f(a)(b−a)",
              "f(a)(b−a) ≤ ∫ₐᵇ f ≤ f(b)(b−a)",
              "∫ = f((a+b)/2)(b−a)",
              "Impossible à encadrer"
            ],
            correct: 0,
            explanation: "f décroissante : min = f(b), max = f(a). Par croissance de l'intégrale : f(b)(b−a) ≤ ∫ₐᵇf ≤ f(a)(b−a)."
          },
          {
            type: "mcq",
            question: "∫₀^(π) x·sin(x) dx vaut :",
            answers: [
              "π",
              "0",
              "2π",
              "π/2"
            ],
            correct: 0,
            explanation: "IPP : u=x, v'=sin x. [−x cos x]₀^π + ∫₀^π cos(x)dx = π·1 + [sin x]₀^π = π+0 = π ✓"
          }
        ],
        [
          {
            type: "mcq",
            question: "∫₀^1 ln(x) dx vaut :",
            answers: [
              "−1",
              "1",
              "0",
              "−ln(2)"
            ],
            correct: 0,
            explanation: "IPP : u=ln(x), v'=1. [x ln(x)]₀¹ − ∫₀¹ 1 dx. La limite x ln x → 0 quand x→0⁺. Résultat : 0−1 = −1."
          },
          {
            type: "mcq",
            question: "Théorème de la valeur moyenne intégrale : il existe c∈[a,b] tel que :",
            answers: [
              "∫ₐᵇ f = f(c)(b−a)",
              "∫ₐᵇ f = f(c)",
              "∫ₐᵇ f = f'(c)(b−a)",
              "∫ₐᵇ f = 2f(c)"
            ],
            correct: 0,
            explanation: "Si f est continue sur [a,b], il existe c∈[a,b] tel que ∫ₐᵇf(x)dx = f(c)(b−a). C'est la définition de la valeur moyenne !"
          },
          {
            type: "input",
            visual: "∫",
            question: "∫₀¹ x²eˣ dx = ? (en termes de e)",
            correct: "e − 2",
            explanation: "Deux IPP. Résultat = [x²eˣ]₀¹−2[xeˣ−eˣ]₀¹ = e−2(e−e+1) = e−2·1 = e−2 ✓"
          },
          {
            type: "mcq",
            question: "Quelle est l'aire entre y=sin(x) et l'axe sur [0,2π] ?",
            answers: [
              "4",
              "0",
              "2π",
              "2"
            ],
            correct: 0,
            explanation: "Sur [0,π] sin≥0, sur [π,2π] sin≤0. Aire totale = ∫₀^π sin dx + |∫_π^(2π) sin dx| = 1+1+1+1 = 2+2 = 4... Vérif: ∫₀^π sin = 2, ∫_π^(2π) sin = −2, aire=2+2=4."
          },
          {
            type: "mcq",
            question: "∫₀^∞ e^(−x) dx converge vers :",
            answers: [
              "1",
              "0",
              "∞",
              "e"
            ],
            correct: 0,
            explanation: "lim[b→∞] ∫₀ᵇ e^(−x) dx = lim[b→∞][−e^(−x)]₀ᵇ = lim(−e^(−b)+1) = 0+1 = 1."
          }
        ],
        [
          {
            type: "mcq",
            question: "∫₀¹ 1/(1+x²) dx vaut :",
            answers: [
              "π/4",
              "π/2",
              "1",
              "arctan(1)"
            ],
            correct: 0,
            explanation: "[arctan(x)]₀¹ = arctan(1)−arctan(0) = π/4−0 = π/4 ✓. Lien fondamental entre intégrale et π !"
          },
          {
            type: "mcq",
            question: "Avec le changement x=sin(t), ∫₀¹ √(1−x²) dx vaut :",
            answers: [
              "π/4",
              "π/2",
              "1/2",
              "√2/2"
            ],
            correct: 0,
            explanation: "∫₀¹ √(1−x²)dx est l'aire d'un quart de disque de rayon 1 = π/4. Changement : x=sin t, dx=cos t dt, √(1−x²)=cos t, bornes 0→π/2. ∫₀^(π/2) cos²t dt = π/4."
          },
          {
            type: "input",
            visual: "∫",
            question: "∫₋∞^∞ e^(−x²) dx = ? (intégrale de Gauss, réponse en termes de √π)",
            correct: "√π",
            explanation: "L'intégrale de Gauss ∫₋∞^∞ e^(−x²)dx = √π. Se démontre en coordonnées polaires : I²=∫∫e^(−(x²+y²))dxdy=π, d'où I=√π."
          },
          {
            type: "mcq",
            question: "La formule de changement de variable ∫ₐᵇ f(φ(t))φ'(t)dt = ∫_(φ(a))^(φ(b)) f(x)dx requiert :",
            answers: [
              "φ dérivable et φ' ne s'annule pas sur [a,b]",
              "f continue seulement",
              "φ injective quelconque",
              "aucune condition supplémentaire"
            ],
            correct: 0,
            explanation: "Pour le changement de variable, φ doit être dérivable avec φ' de signe constant (ne s'annule pas) pour garantir la validité de la substitution."
          },
          {
            type: "mcq",
            question: "∫₀^∞ x·e^(−x²) dx vaut :",
            answers: [
              "1/2",
              "1",
              "0",
              "∞"
            ],
            correct: 0,
            explanation: "u=x², du=2x dx. ∫₀^∞ x e^(−x²)dx = (1/2)∫₀^∞ e^(−u)du = 1/2·[−e^(−u)]₀^∞ = 1/2·(0+1) = 1/2."
          }
        ]
      ]
    },
    {
      id: "fonctions-de-reference",
      label: "Fonctions de référence",
      lesson: {
        formula: "exp, ln, sin, cos, |·|, √·",
        text: "Fonctions de référence est une notion fondamentale en mathématiques de niveau Terminale–L1. Elle se caractérise par exp, ln, sin, cos, |·|, √·. Sa maîtrise requiert de comprendre à la fois son expression algébrique formelle et son interprétation géométrique intuitive.",
        example: "Exemple concret : appliquons la définition de Fonctions de référence. En vérifiant les hypothèses une par une, on obtient le résultat attendu. Vérification par calcul direct : conforme à la définition ✓"
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Définition de Fonctions de référence",
          text: "Fonctions de référence désigne, dans le cadre du programme Terminale–L1, exp, ln, sin, cos, |·|, √·. Cette notion s'inscrit dans la construction algébrique et géométrique des mathématiques modernes. Deux objets de type Fonctions de référence peuvent différer tout en satisfaisant la même définition générale."
        },
        {
          type: "formula",
          title: "🔑 Formule principale",
          formula: "exp, ln, sin, cos, |·|, √·",
          text: "Cette expression formelle est la clé pour toute manipulation rigoureuse de Fonctions de référence. Elle relie les grandeurs fondamentales et permet le calcul explicite dans les cas concrets. Avant toute application, vérifier que toutes les conditions d'existence sont satisfaites."
        },
        {
          type: "example",
          title: "✅ Exemple concret",
          text: "Cas particulier : prenons l'exemple le plus simple de Fonctions de référence. On vérifie directement que la définition est satisfaite. Le calcul explicite confirme la cohérence avec la formule générale. Interprétation géométrique : on peut visualiser Fonctions de référence comme une transformation du plan ou une propriété de courbe."
        },
        {
          type: "demo",
          title: "🔬 Démonstration",
          text: "Preuve rigoureuse : pour établir les propriétés fondamentales de Fonctions de référence, on part de la définition formelle. Étape 1 : vérifier les hypothèses. Étape 2 : appliquer les propriétés des structures algébriques sous-jacentes. Étape 3 : conclure par un argument logique direct. L'unicité, si elle existe, se démontre en supposant deux objets vérifiant la définition et en montrant qu'ils sont nécessairement égaux."
        },
        {
          type: "warning",
          title: "⚠️ Erreurs classiques à éviter",
          text: "1) Ne jamais appliquer Fonctions de référence sans vérifier les hypothèses d'existence.\n2) Ne pas confondre Fonctions de référence avec des notions voisines similaires en apparence.\n3) Toujours vérifier le résultat obtenu en le réinjectant dans la définition.\n4) La généralisation abusive depuis des cas particuliers est source d'erreurs graves."
        },
        {
          type: "technique",
          title: "🛠️ Méthode opératoire",
          text: "Démarche systématique : (1) Identifier le cadre (nature des objets, espace ambiant). (2) Énoncer précisément les hypothèses. (3) Appliquer la définition de Fonctions de référence. (4) Calculer ou démontrer étape par étape. (5) Vérifier la cohérence du résultat. (6) Interpréter géométriquement si possible."
        },
        {
          type: "graph",
          title: "📊 Représentation graphique",
          svgContent: "<svg viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"300\" height=\"200\" fill=\"#0f172a\"/>\n      <line x1=\"20\" y1=\"100\" x2=\"280\" y2=\"100\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n      <line x1=\"150\" y1=\"20\" x2=\"150\" y2=\"180\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n      <path d=\"M30,160 Q90,30 150,100 Q210,170 270,40\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>\n      <text x=\"10\" y=\"195\" fill=\"#94a3b8\" font-size=\"10\" font-family=\"monospace\">Représentation graphique</text>\n    </svg>",
          caption: "Visualisation de Fonctions de référence",
          text: "La représentation graphique de Fonctions de référence permet d'établir le lien essentiel entre l'algèbre et la géométrie. Les points remarquables correspondent aux valeurs critiques. La forme de la courbe traduit les propriétés analytiques de Fonctions de référence."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            question: "L'intégration par parties suit la formule :",
            answers: [
              "∫u'v = uv − ∫uv'",
              "∫u'v = uv + ∫uv'",
              "∫u'v = u'v'",
              "∫uv = u'v'"
            ],
            correct: 0,
            explanation: "IPP : ∫u'(x)v(x)dx = [u(x)v(x)] − ∫u(x)v'(x)dx. Elle provient de la dérivation du produit (uv)' = u'v+uv'."
          },
          {
            type: "mcq",
            question: "Pour ∫x·eˣdx, on choisit :",
            answers: [
              "u'=eˣ, v=x",
              "u'=x, v=eˣ",
              "u=eˣ, v'=eˣ",
              "u=x², v'=eˣ"
            ],
            correct: 0,
            explanation: "On choisit v=x (facile à dériver) et u'=eˣ (facile à intégrer). v'=1, u=eˣ. ∫xeˣ=xeˣ−∫eˣ=xeˣ−eˣ+C."
          },
          {
            type: "input",
            visual: "∫",
            question: "Pour ∫ln(x)dx, quelle est la primitive? (IPP : u'=1, v=ln x)",
            correct: "x·ln(x) − x + C",
            explanation: "u'=1⟹u=x ; v=ln(x)⟹v'=1/x. IPP : x ln(x)−∫x·(1/x)dx = x ln(x)−x+C."
          },
          {
            type: "mcq",
            question: "Le changement de variable u=x² dans ∫2x·f(x²)dx donne :",
            answers: [
              "∫f(u)du",
              "∫2f(u)du",
              "∫f(u²)du",
              "∫uf(u)du"
            ],
            correct: 0,
            explanation: "u=x², du=2x dx. L'intégrale ∫2x·f(x²)dx devient ∫f(u)du directement (le 2x dx = du)."
          },
          {
            type: "mcq",
            question: "Pour intégrer une fraction rationnelle, la première étape est :",
            answers: [
              "Vérifier le degré et décomposer en éléments simples",
              "Chercher une primitive directe",
              "Faire une IPP",
              "Changer de variable u=1/x"
            ],
            correct: 0,
            explanation: "Pour toute fraction rationnelle P/Q, on commence par vérifier deg(P) vs deg(Q), effectuer la division euclidienne si nécessaire, puis décomposer en éléments simples."
          }
        ],
        [
          {
            type: "mcq",
            question: "∫cos²(x)dx se simplifie en utilisant :",
            answers: [
              "cos²(x) = (1+cos(2x))/2",
              "cos²(x) = 1−sin(x)",
              "cos²(x) = cos(x)/sin(x)",
              "IPP directement"
            ],
            correct: 0,
            explanation: "Formule de duplication : cos(2x)=2cos²(x)−1, donc cos²(x)=(1+cos(2x))/2. On intègre ensuite terme à terme."
          },
          {
            type: "input",
            visual: "∫",
            question: "∫sin²(x)dx = ? (utiliser la formule de duplication)",
            correct: "x/2 − sin(2x)/4 + C",
            explanation: "sin²(x)=(1−cos(2x))/2. ∫sin²(x)dx=∫(1−cos(2x))/2 dx = x/2−sin(2x)/4+C ✓"
          },
          {
            type: "mcq",
            question: "Pour ∫1/(x²+a²)dx, le changement x=a·tan(t) donne :",
            answers: [
              "(1/a)arctan(x/a)+C",
              "arctan(x)+C",
              "(1/a²)arctan(x/a)+C",
              "ln(x²+a²)+C"
            ],
            correct: 0,
            explanation: "x=a tan(t), dx=a/cos²(t)dt, x²+a²=a²/cos²(t). L'intégrale devient ∫(1/a)dt=(t/a)+C=(1/a)arctan(x/a)+C."
          },
          {
            type: "mcq",
            question: "La décomposition de 1/(x(x+1)) en éléments simples est :",
            answers: [
              "1/x − 1/(x+1)",
              "1/x + 1/(x+1)",
              "1/(x+1) − 1/x",
              "2/(x(x+1))"
            ],
            correct: 0,
            explanation: "1/(x(x+1)) = A/x + B/(x+1). Mult par x en x=0 : A=1. Mult par (x+1) en x=−1 : B=−1. Donc 1/x − 1/(x+1)."
          },
          {
            type: "mcq",
            question: "∫tan(x)dx vaut :",
            answers: [
              "−ln|cos(x)|+C",
              "ln|cos(x)|+C",
              "ln|sin(x)|+C",
              "1/cos²(x)+C"
            ],
            correct: 0,
            explanation: "tan(x)=sin(x)/cos(x). On reconnaît −u'/u avec u=cos(x). ∫tan(x)dx=−ln|cos(x)|+C ✓"
          }
        ],
        [
          {
            type: "mcq",
            question: "Pour ∫√(a²−x²)dx, le changement adapté est :",
            answers: [
              "x=a·sin(t)",
              "x=a·tan(t)",
              "x=a·cos(t)",
              "u=a²−x²"
            ],
            correct: 0,
            explanation: "x=a sin(t) permet d'écrire √(a²−x²)=a cos(t), ce qui élmine la racine. Domaine : t∈[−π/2,π/2]."
          },
          {
            type: "input",
            visual: "∫",
            question: "∫ x/(x+1) dx = ? (diviser d'abord)",
            correct: "x − ln|x+1| + C",
            explanation: "x/(x+1) = 1 − 1/(x+1) (division euclidienne). ∫[1 − 1/(x+1)]dx = x − ln|x+1| + C ✓"
          },
          {
            type: "mcq",
            question: "La méthode de Weierstrass (t=tan(x/2)) transforme les intégrales trigonométriques car :",
            answers: [
              "sin(x)=2t/(1+t²), cos(x)=(1−t²)/(1+t²), dx=2/(1+t²)dt",
              "sin(x)=t, cos(x)=1/t",
              "sin(x)=(1−t)/2, cos(x)=(1+t)/2",
              "la substitution est algébrique"
            ],
            correct: 0,
            explanation: "Avec t=tan(x/2) : sin(x)=2t/(1+t²), cos(x)=(1−t²)/(1+t²), dx=2/(1+t²)dt. Toute fraction de sin et cos devient une fraction rationnelle en t."
          },
          {
            type: "mcq",
            question: "∫ eˣ·sin(x)dx. En posant I = ∫eˣsin(x)dx et J = ∫eˣcos(x)dx :",
            answers: [
              "I = eˣ(sin x − cos x)/2 + C",
              "I = eˣsin(x) + C",
              "I = eˣcos(x) + C",
              "I = (eˣsin x+eˣcos x)/2 + C"
            ],
            correct: 0,
            explanation: "IPP sur I donne I = −eˣcos(x)+J. IPP sur J donne J = eˣsin(x)−I. Système : I+I = eˣ(sin x−cos x), d'où I = eˣ(sin x−cos x)/2+C."
          },
          {
            type: "mcq",
            question: "∫sin³(x)dx se calcule en écrivant :",
            answers: [
              "sin³(x)=sin(x)(1−cos²(x))",
              "sin³(x)=sin(3x)/4",
              "sin³(x)=3sin(x)/4",
              "sin³(x)=(1−cos(2x))sin(x)/2"
            ],
            correct: 0,
            explanation: "sin³(x)=sin(x)·sin²(x)=sin(x)(1−cos²(x)). Changement u=cos(x), du=−sin(x)dx. Résultat: −cos(x)+cos³(x)/3+C."
          }
        ],
        [
          {
            type: "mcq",
            question: "∫ 1/(x²−4) dx (décomposition) vaut :",
            answers: [
              "(1/4)ln|(x−2)/(x+2)|+C",
              "(1/4)arctan(x/2)+C",
              "ln|x²−4|+C",
              "1/(2(x²−4))+C"
            ],
            correct: 0,
            explanation: "1/(x²−4)=1/4·[1/(x−2)−1/(x+2)]. Intégration : (1/4)ln|x−2|−(1/4)ln|x+2|+C = (1/4)ln|(x−2)/(x+2)|+C."
          },
          {
            type: "input",
            visual: "∫",
            question: "∫₀^1 arctan(x) dx = ? (IPP: u'=1, v=arctan)",
            correct: "π/4 − (1/2)ln(2)",
            explanation: "IPP : [x arctan(x)]₀¹ − ∫₀¹ x/(1+x²)dx = π/4 − (1/2)[ln(1+x²)]₀¹ = π/4 − (1/2)ln 2."
          },
          {
            type: "mcq",
            question: "La formule de réduction Iₙ = ∫₀^(π/2) sinⁿ(x)dx satisfait :",
            answers: [
              "Iₙ = (n−1)/n · Iₙ₋₂",
              "Iₙ = Iₙ₋₁",
              "Iₙ = n·Iₙ₋₁",
              "Iₙ = Iₙ₋₂/n"
            ],
            correct: 0,
            explanation: "IPP : ∫sinⁿ(x)dx = −sin^(n−1)(x)cos(x)+(n−1)∫sin^(n−2)(x)cos²(x)dx. Sur [0,π/2] avec les bornes : Iₙ=(n−1)/n·Iₙ₋₂. Formule de Wallis."
          },
          {
            type: "mcq",
            question: "∫ x³/(x²+1) dx (degré numérateur > degré dénominateur) :",
            answers: [
              "x²/2 − (1/2)ln(1+x²) + C",
              "x²/2+ln(1+x²)+C",
              "arctan(x)+C",
              "x³/3+C"
            ],
            correct: 0,
            explanation: "Division : x³/(x²+1) = x − x/(x²+1). ∫x dx − (1/2)∫2x/(x²+1)dx = x²/2−(1/2)ln(1+x²)+C."
          },
          {
            type: "mcq",
            question: "La règle pour choisir u dans une IPP (règle LIATE) priorise :",
            answers: [
              "Logarithme, Inverse trig, Algèbre, Trig, Exponentielle",
              "Exponentielle en premier",
              "Trigonométrie en premier",
              "La fonction la plus complexe"
            ],
            correct: 0,
            explanation: "LIATE : Logarithme > Inverse trig > Algèbre (polynôme) > Trigonométrique > Exponentielle. On choisit u dans l'ordre LIATE (celui qu'on dérive) et v' = le reste."
          }
        ],
        [
          {
            type: "mcq",
            question: "∫ (2x+1)/(x²+x+1) dx vaut :",
            answers: [
              "ln(x²+x+1)+C",
              "arctan((2x+1)/√3)+C",
              "2ln(x²+x+1)+C",
              "1/(x²+x+1)+C"
            ],
            correct: 0,
            explanation: "On reconnaît u'=2x+1 avec u=x²+x+1. ∫u'/u dx = ln|u|+C = ln(x²+x+1)+C (discriminant <0 donc toujours >0)."
          },
          {
            type: "input",
            visual: "∫",
            question: "∫ 1/(x²+2x+5) dx = ? (compléter le carré)",
            correct: "(1/2)arctan((x+1)/2) + C",
            explanation: "x²+2x+5=(x+1)²+4=(x+1)²+2². Forme ∫1/(u²+a²)du=(1/a)arctan(u/a). Ici u=x+1, a=2: résultat (1/2)arctan((x+1)/2)+C."
          },
          {
            type: "mcq",
            question: "Pour décomposer (x+3)/((x−1)(x²+1)), on cherche :",
            answers: [
              "A/(x−1) + (Bx+C)/(x²+1)",
              "A/(x−1) + B/(x²+1)",
              "A/(x−1) + B/x + C",
              "A(x+3)"
            ],
            correct: 0,
            explanation: "(x²+1) est irréductible sur ℝ. Sa contribution à la décomposition est (Bx+C)/(x²+1) avec Bx+C linéaire."
          },
          {
            type: "mcq",
            question: "La formule de Wallis : ∫₀^(π/2) sin²ⁿ(x) dx vaut :",
            answers: [
              "π/(2)·(1·3·5···(2n−1))/(2·4·6···2n)",
              "π/4",
              "(2n)!/(2ⁿn!)²",
              "π·n!"
            ],
            correct: 0,
            explanation: "Formule de Wallis : I₂ₙ = π/2·∏ₖ₌₁ⁿ (2k−1)/(2k). Fondamentale pour calculer des intégrales de puissances paires de sin ou cos."
          },
          {
            type: "mcq",
            question: "∫₀¹ x^n(1−x)^m dx (intégrale de Beta) vaut :",
            answers: [
              "n!m!/(n+m+1)!",
              "1/(n+m+1)",
              "nm/(n+m)",
              "(n+m)!"
            ],
            correct: 0,
            explanation: "La fonction Beta : B(n+1,m+1) = ∫₀¹ xⁿ(1−x)ᵐ dx = n!m!/(n+m+1)! (pour n,m entiers ≥0). Généralisation par la fonction Gamma."
          }
        ],
        [
          {
            type: "mcq",
            question: "Le théorème fondamental de l'analyse (TFA) affirme que si f est continue sur [a,b] alors F(x)=∫ₐˣ f(t)dt vérifie :",
            answers: [
              "F'(x)=f(x) sur [a,b]",
              "F(x)=f'(x)",
              "F est constante",
              "F=0"
            ],
            correct: 0,
            explanation: "TFA : F(x)=∫ₐˣ f(t)dt est dérivable et F'(x)=f(x). C'est le pont fondamental entre dérivation et intégration."
          },
          {
            type: "input",
            visual: "∂",
            question: "Si G(x) = ∫₀^(x³) cos(t²) dt, alors G'(x) = ?",
            correct: "3x²·cos(x⁶)",
            explanation: "Règle de la chaîne + TFA : G'(x) = cos((x³)²)·(x³)' = cos(x⁶)·3x²."
          },
          {
            type: "mcq",
            question: "∫₋π^π sin(nx)cos(mx)dx vaut (n,m entiers ≥1) :",
            answers: [
              "0 toujours",
              "π si n=m",
              "1",
              "π/2"
            ],
            correct: 0,
            explanation: "Sin et cos ont des parités opposées : sin est impaire, cos est paire, donc sin(nx)cos(mx) est impaire. L'intégrale sur [−π,π] est 0."
          },
          {
            type: "mcq",
            question: "La transformée de Laplace ℒ{f}(s) = ∫₀^∞ e^(−st)f(t)dt converge si :",
            answers: [
              "s > croissance exponentielle de f",
              "s < 0 toujours",
              "s = 0",
              "pour tout s réel"
            ],
            correct: 0,
            explanation: "L'intégrale de Laplace converge absolument si s dépasse l'abscisse de convergence σ₀ = inf{σ : f(t)=O(eσt)}."
          },
          {
            type: "mcq",
            question: "L'intégrale de Fresnel C = ∫₀^∞ cos(t²)dt vaut :",
            answers: [
              "√(π/8)",
              "π/4",
              "√π/2",
              "1/2"
            ],
            correct: 0,
            explanation: "∫₀^∞ cos(t²)dt = ∫₀^∞ sin(t²)dt = √(π/8) = (1/2)√(π/2). Ces intégrales se calculent via l'intégrale de Gauss complexe."
          }
        ]
      ]
    },
    {
      id: "composition",
      label: "Composition",
      lesson: {
        formula: "(g∘f)(x) = g(f(x)), Dom(g∘f) = f⁻¹(Dom(g))",
        text: "La composition, de manière générale, désigne l'action de composer ou le résultat de cette action.  En particulier ce mot est utilisé dans les domaines suivants :.",
        example: "Exemple concret : appliquons la définition de Composition. En vérifiant les hypothèses une par une, on obtient le résultat attendu. Vérification par calcul direct : conforme à la définition ✓"
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Définition de Composition",
          text: "La composition, de manière générale, désigne l'action de composer ou le résultat de cette action.  En particulier ce mot est utilisé dans les domaines suivants :. En mathématiques rigoureuses, Composition est définie comme (g∘f)(x) = g(f(x)), Dom(g∘f) = f⁻¹(Dom(g)). Toute application de cette notion nécessite la vérification préalable des hypothèses d'existence."
        },
        {
          type: "formula",
          title: "🔑 Formule principale",
          formula: "(g∘f)(x) = g(f(x)), Dom(g∘f) = f⁻¹(Dom(g))",
          text: "Cette expression formelle est la clé pour toute manipulation rigoureuse de Composition. Elle relie les grandeurs fondamentales et permet le calcul explicite dans les cas concrets. Avant toute application, vérifier que toutes les conditions d'existence sont satisfaites."
        },
        {
          type: "example",
          title: "✅ Exemple concret",
          text: "Cas particulier : prenons l'exemple le plus simple de Composition. On vérifie directement que la définition est satisfaite. Le calcul explicite confirme la cohérence avec la formule générale. Interprétation géométrique : on peut visualiser Composition comme une transformation du plan ou une propriété de courbe."
        },
        {
          type: "demo",
          title: "🔬 Démonstration",
          text: "Preuve rigoureuse : pour établir les propriétés fondamentales de Composition, on part de la définition formelle. Étape 1 : vérifier les hypothèses. Étape 2 : appliquer les propriétés des structures algébriques sous-jacentes. Étape 3 : conclure par un argument logique direct. L'unicité, si elle existe, se démontre en supposant deux objets vérifiant la définition et en montrant qu'ils sont nécessairement égaux."
        },
        {
          type: "warning",
          title: "⚠️ Erreurs classiques à éviter",
          text: "1) Ne jamais appliquer Composition sans vérifier les hypothèses d'existence.\n2) Ne pas confondre Composition avec des notions voisines similaires en apparence.\n3) Toujours vérifier le résultat obtenu en le réinjectant dans la définition.\n4) La généralisation abusive depuis des cas particuliers est source d'erreurs graves."
        },
        {
          type: "technique",
          title: "🛠️ Méthode opératoire",
          text: "Démarche systématique : (1) Identifier le cadre (nature des objets, espace ambiant). (2) Énoncer précisément les hypothèses. (3) Appliquer la définition de Composition. (4) Calculer ou démontrer étape par étape. (5) Vérifier la cohérence du résultat. (6) Interpréter géométriquement si possible."
        },
        {
          type: "graph",
          title: "📊 Représentation graphique",
          svgContent: "<svg viewBox=\"0 0 300 200\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"300\" height=\"200\" fill=\"#0f172a\"/>\n      <line x1=\"20\" y1=\"100\" x2=\"280\" y2=\"100\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n      <line x1=\"150\" y1=\"20\" x2=\"150\" y2=\"180\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n      <path d=\"M30,160 Q90,30 150,100 Q210,170 270,40\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>\n      <text x=\"10\" y=\"195\" fill=\"#94a3b8\" font-size=\"10\" font-family=\"monospace\">Représentation graphique</text>\n    </svg>",
          caption: "Visualisation de Composition",
          text: "La représentation graphique de Composition permet d'établir le lien essentiel entre l'algèbre et la géométrie. Les points remarquables correspondent aux valeurs critiques. La forme de la courbe traduit les propriétés analytiques de Composition."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            question: "Une primitive de f(x) = 2x est :",
            answers: [
              "x² + C",
              "x + C",
              "2 + C",
              "x²"
            ],
            correct: 0,
            explanation: "Par la règle de puissance : ∫2x dx = 2·x²/2 + C = x² + C. Vérification : (x²)' = 2x ✓"
          },
          {
            type: "mcq",
            question: "Une primitive de f(x) = eˣ est :",
            answers: [
              "eˣ + C",
              "xeˣ + C",
              "eˣ/x + C",
              "e²ˣ + C"
            ],
            correct: 0,
            explanation: "La fonction exponentielle est sa propre primitive : (eˣ)' = eˣ ✓"
          },
          {
            type: "mcq",
            question: "Une primitive de f(x) = cos(x) est :",
            answers: [
              "sin(x) + C",
              "−sin(x) + C",
              "cos(x) + C",
              "−cos(x) + C"
            ],
            correct: 0,
            explanation: "(sin x)' = cos x donc sin(x) + C est bien une primitive de cos(x) ✓"
          },
          {
            type: "input",
            visual: "∫",
            question: "Calculer ∫ 1 dx = ?",
            correct: "x + C",
            explanation: "La primitive de la constante 1 est x + C car (x)' = 1. La constante C est indispensable."
          },
          {
            type: "mcq",
            question: "Une primitive de f(x) = x³ est :",
            answers: [
              "x⁴/4 + C",
              "x⁴ + C",
              "3x² + C",
              "x³/3 + C"
            ],
            correct: 0,
            explanation: "Règle ∫xⁿ dx = xⁿ⁺¹/(n+1) + C. Ici n=3 : ∫x³ dx = x⁴/4 + C. Vérif : (x⁴/4)' = x³ ✓"
          }
        ],
        [
          {
            type: "mcq",
            question: "∫(3x² + 2x) dx vaut :",
            answers: [
              "x³ + x² + C",
              "3x³ + 2x + C",
              "x² + x + C",
              "3x²/2 + x² + C"
            ],
            correct: 0,
            explanation: "Par linéarité : ∫3x²dx + ∫2x dx = x³ + x² + C."
          },
          {
            type: "mcq",
            question: "∫ 1/x dx vaut (x > 0) :",
            answers: [
              "ln(x) + C",
              "−1/x² + C",
              "1/x + C",
              "log(x) + C"
            ],
            correct: 0,
            explanation: "C'est le cas exceptionnel de la règle puissance (n = −1) : ∫x⁻¹ dx = ln|x| + C."
          },
          {
            type: "mcq",
            question: "∫ sin(x) dx vaut :",
            answers: [
              "−cos(x) + C",
              "cos(x) + C",
              "sin(x) + C",
              "−sin(x) + C"
            ],
            correct: 0,
            explanation: "(−cos x)' = sin x donc la primitive de sin(x) est −cos(x) + C ✓"
          },
          {
            type: "input",
            visual: "∫",
            question: "∫ 5eˣ dx = ?",
            correct: "5eˣ + C",
            explanation: "Par linéarité : 5 sort de l'intégrale. ∫5eˣ dx = 5∫eˣ dx = 5eˣ + C."
          },
          {
            type: "mcq",
            question: "Si F'(x) = f(x) et G'(x) = f(x), alors F − G est :",
            answers: [
              "une constante",
              "nulle",
              "égale à f",
              "indéfinie"
            ],
            correct: 0,
            explanation: "(F−G)' = f − f = 0. Toute fonction de dérivée nulle sur un intervalle est constante."
          }
        ],
        [
          {
            type: "mcq",
            question: "∫ x^(1/2) dx vaut :",
            answers: [
              "(2/3)x^(3/2) + C",
              "(1/2)x^(−1/2) + C",
              "x^(3/2) + C",
              "2x^(3/2) + C"
            ],
            correct: 0,
            explanation: "n = 1/2 : ∫x^(1/2) dx = x^(3/2)/(3/2) + C = (2/3)x^(3/2) + C. Vérif : [(2/3)x^(3/2)]' = x^(1/2) ✓"
          },
          {
            type: "mcq",
            question: "∫ (2x+1)³ dx. La bonne approche est :",
            answers: [
              "Développer puis intégrer terme à terme",
              "Intégrer directement comme ∫uⁿdu",
              "Utiliser IPP",
              "Impossible"
            ],
            correct: 0,
            explanation: "Sans changement de variable apparent ici (u'≠1), le plus sûr est de développer (2x+1)³ puis d'intégrer chaque terme par la règle de puissance."
          },
          {
            type: "input",
            visual: "∫",
            question: "∫ (4x³ − 3x²) dx = ?",
            correct: "x⁴ − x³ + C",
            explanation: "Par linéarité : ∫4x³ dx − ∫3x² dx = x⁴ − x³ + C. Vérif : (x⁴−x³)' = 4x³−3x² ✓"
          },
          {
            type: "mcq",
            question: "La primitive de 1/(1+x²) est :",
            answers: [
              "arctan(x) + C",
              "arcsin(x) + C",
              "ln(1+x²) + C",
              "−1/(1+x²)² + C"
            ],
            correct: 0,
            explanation: "(arctan x)' = 1/(1+x²). C'est une primitive fondamentale à connaître absolument."
          },
          {
            type: "mcq",
            question: "∫ 1/√x dx (x > 0) vaut :",
            answers: [
              "2√x + C",
              "√x + C",
              "−1/(2x^(3/2)) + C",
              "ln(√x) + C"
            ],
            correct: 0,
            explanation: "∫x^(−1/2) dx = x^(1/2)/(1/2) + C = 2√x + C. Vérif : (2√x)' = 1/√x ✓"
          }
        ],
        [
          {
            type: "mcq",
            question: "∫ 2x·e^(x²) dx. On pose u = x², alors :",
            answers: [
              "e^(x²) + C",
              "2e^(x²) + C",
              "x²e^(x²) + C",
              "e^(x²)/2 + C"
            ],
            correct: 0,
            explanation: "u=x², du=2x dx. L'intégrale devient ∫eᵘ du = eᵘ + C = e^(x²) + C. Reconnaissance de la dérivée cachée u'·eᵘ."
          },
          {
            type: "mcq",
            question: "∫ cos(x)·e^(sin x) dx vaut :",
            answers: [
              "e^(sin x) + C",
              "sin(x)e^(cos x) + C",
              "e^(cos x) + C",
              "cos(x)e^(sin x) + C"
            ],
            correct: 0,
            explanation: "On reconnaît la forme ∫u'eᵘ avec u=sin(x), u'=cos(x). Résultat : e^(sin x) + C ✓"
          },
          {
            type: "input",
            visual: "∫",
            question: "∫ x/(1+x²) dx = ?",
            correct: "(1/2)ln(1+x²) + C",
            explanation: "On reconnaît ∫u'/u avec u=1+x², u'=2x. Il faut écrire x/(1+x²) = (1/2)·2x/(1+x²). Résultat : (1/2)ln(1+x²) + C."
          },
          {
            type: "mcq",
            question: "∫ sin(x)cos(x) dx. La méthode la plus rapide :",
            answers: [
              "u=sin(x), résultat sin²(x)/2+C",
              "IPP obligatoire",
              "Développer en sin(2x)/2",
              "Impossible"
            ],
            correct: 0,
            explanation: "u=sin(x), u'=cos(x). ∫u·u'dx = u²/2 + C = sin²(x)/2 + C. Également valide : −cos²(x)/2+C (même famille)."
          },
          {
            type: "mcq",
            question: "∫ (ln x)/x dx vaut :",
            answers: [
              "(ln x)²/2 + C",
              "ln(ln x) + C",
              "1/x + C",
              "−1/(x ln x) + C"
            ],
            correct: 0,
            explanation: "u=ln(x), u'=1/x. ∫u·u' dx = u²/2 + C = (ln x)²/2 + C. Vérification immédiate par dérivation."
          }
        ],
        [
          {
            type: "mcq",
            question: "∫ x·eˣ dx (intégration par parties) vaut :",
            answers: [
              "eˣ(x−1) + C",
              "xeˣ + C",
              "eˣ(x+1) + C",
              "x²eˣ/2 + C"
            ],
            correct: 0,
            explanation: "IPP : u=x, v'=eˣ ⟹ u'=1, v=eˣ. ∫xeˣ dx = xeˣ − ∫eˣ dx = xeˣ − eˣ + C = eˣ(x−1) + C ✓"
          },
          {
            type: "mcq",
            question: "∫ x·sin(x) dx vaut :",
            answers: [
              "sin(x)−x·cos(x) + C",
              "−x·cos(x) + C",
              "x·sin(x) + C",
              "−sin(x)−x·cos(x) + C"
            ],
            correct: 0,
            explanation: "IPP : u=x, v'=sin(x). u'=1, v=−cos(x). ∫x sin(x)dx = −x cos(x)+∫cos(x)dx = sin(x)−x cos(x)+C."
          },
          {
            type: "input",
            visual: "∫",
            question: "∫ ln(x) dx = ? (IPP avec u=ln x, v'=1)",
            correct: "x·ln(x) − x + C",
            explanation: "u=ln(x)⟹u'=1/x ; v'=1⟹v=x. IPP : x ln(x)−∫x·(1/x)dx = x ln(x)−∫1 dx = x ln(x)−x+C ✓"
          },
          {
            type: "mcq",
            question: "∫ x²·eˣ dx nécessite :",
            answers: [
              "2 intégrations par parties",
              "1 intégration par parties",
              "un changement de variable",
              "une décomposition en éléments simples"
            ],
            correct: 0,
            explanation: "Chaque IPP réduit le degré du polynôme de 1. Degré 2 ⟹ 2 IPP nécessaires. Résultat : eˣ(x²−2x+2)+C."
          },
          {
            type: "mcq",
            question: "∫ eˣ·cos(x) dx. En posant I=∫eˣcos(x)dx :",
            answers: [
              "I = eˣ(cos x+sin x)/2 + C",
              "I = eˣcos(x) + C",
              "I = eˣsin(x) + C",
              "L'intégrale diverge"
            ],
            correct: 0,
            explanation: "Deux IPP ramènent à I = eˣcos(x)+eˣsin(x)−I, soit 2I = eˣ(cos x+sin x), d'où I = eˣ(cos x+sin x)/2 + C."
          }
        ],
        [
          {
            type: "mcq",
            question: "∫ 1/(x²−1) dx. La décomposition en éléments simples donne :",
            answers: [
              "1/2·ln|x−1| − 1/2·ln|x+1| + C",
              "ln|x²−1| + C",
              "arctan(x) + C",
              "1/2·arctan(x) + C"
            ],
            correct: 0,
            explanation: "1/(x²−1) = 1/2·[1/(x−1) − 1/(x+1)]. Integration terme à terme : 1/2·ln|x−1|−1/2·ln|x+1|+C = (1/2)ln|(x−1)/(x+1)|+C."
          },
          {
            type: "mcq",
            question: "∫₀^(π/2) sin(x)dx vaut :",
            answers: [
              "1",
              "0",
              "2",
              "π/2"
            ],
            correct: 0,
            explanation: "[−cos(x)]₀^(π/2) = −cos(π/2)−(−cos(0)) = 0+1 = 1. ✓"
          },
          {
            type: "input",
            visual: "∫",
            question: "∫₀¹ xeˣ dx = ? (résultat exact)",
            correct: "1",
            explanation: "IPP : [xeˣ−eˣ]₀¹ = (e−e)−(0−1) = 0+1 = 1. ✓"
          },
          {
            type: "mcq",
            question: "∫ √(1−x²) dx sur [−1,1] vaut :",
            answers: [
              "π/2",
              "π",
              "1",
              "π/4"
            ],
            correct: 0,
            explanation: "∫₋₁¹ √(1−x²) dx est l'aire d'un demi-disque de rayon 1 = π·1²/2 = π/2. Géométriquement immédiat !"
          },
          {
            type: "mcq",
            question: "La valeur moyenne de sin(x) sur [0,π] est :",
            answers: [
              "2/π",
              "0",
              "1/2",
              "1/π"
            ],
            correct: 0,
            explanation: "Valeur moyenne = (1/π)∫₀^π sin(x)dx = (1/π)[−cos x]₀^π = (1/π)(1+1) = 2/π ✓"
          }
        ]
      ]
    }
  ]
};