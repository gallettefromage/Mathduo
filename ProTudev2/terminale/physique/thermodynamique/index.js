// Chapitre: Thermodynamique
// terminale > physique-chimie
// Généré le 18/03/2026
// 8 notion(s) + 5 L1

export default {
  id: "thermodynamique",
  title: "Thermodynamique",
  description: "Systèmes, énergie interne, transformations, travail, chaleur, gaz parfait, second principe",
  icon: "🔥",
  xpMax: 440,
  notions: [
    // ─────────────────────────────────────────────────────────────────
    // NOTION 1 — Introduction
    // ─────────────────────────────────────────────────────────────────
    {
      id: "introduction",
      label: "Introduction",
      icon: "🧭",
      lesson: {
        formula: "Système = portion de l'univers étudiée",
        text: "La thermodynamique étudie les échanges d'énergie (chaleur et travail) entre un système et son milieu extérieur. Tout commence par bien définir ce qu'on étudie.",
        example: "Un gaz dans une bouteille = système fermé. Une centrale à vapeur = système ouvert."
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Système thermodynamique",
          text: "Un système thermodynamique est la portion de l'univers que l'on choisit d'étudier. Tout ce qui est en dehors constitue le milieu extérieur. La frontière peut être réelle (paroi d'un récipient) ou imaginaire (surface autour d'un moteur). <strong>Bien choisir son système est la première étape — une mauvaise frontière rend le problème insoluble.</strong>"
        },
        {
          type: "definition",
          title: "📋 Les trois types de systèmes",
          text: "Selon les échanges possibles avec le milieu extérieur :<br>• <strong>Ouvert</strong> : échange de matière ET d'énergie. Ex : moteur à combustion, être humain, bouilloire ouverte, centrale à vapeur.<br>• <strong>Fermé</strong> : échange d'énergie seulement, pas de matière. Ex : gaz dans un piston, eau dans une casserole couverte.<br>• <strong>Isolé</strong> : aucun échange (idéal théorique). Ex : thermos parfait, univers entier."
        },
        {
          type: "graph",
          title: "📊 Les trois types de systèmes",
          svgContent: `<svg viewBox="0 0 460 180" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <!-- Système OUVERT -->
  <rect x="10" y="30" width="120" height="100" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2.5"/>
  <text x="70" y="60" text-anchor="middle" font-size="12" fill="#92400e" font-weight="bold">OUVERT</text>
  <text x="70" y="78" text-anchor="middle" font-size="10" fill="#92400e">Ex: moteur</text>
  <!-- flèches matière + énergie -->
  <line x1="28" y1="95" x2="10" y2="95" stroke="#f59e0b" stroke-width="2" marker-end="url(#yo)"/>
  <line x1="112" y1="95" x2="130" y2="95" stroke="#f59e0b" stroke-width="2" marker-end="url(#yo)"/>
  <text x="70" y="148" text-anchor="middle" font-size="9" fill="#92400e">matière + énergie</text>
  <!-- Système FERME -->
  <rect x="170" y="30" width="120" height="100" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5"/>
  <text x="230" y="60" text-anchor="middle" font-size="12" fill="#1e40af" font-weight="bold">FERMÉ</text>
  <text x="230" y="78" text-anchor="middle" font-size="10" fill="#1e40af">Ex: piston+gaz</text>
  <!-- flèche énergie seulement (trait plein) -->
  <line x1="188" y1="95" x2="170" y2="95" stroke="#2563eb" stroke-width="2" marker-end="url(#yb)"/>
  <line x1="272" y1="95" x2="290" y2="95" stroke="#2563eb" stroke-width="2" marker-end="url(#yb)"/>
  <text x="230" y="148" text-anchor="middle" font-size="9" fill="#1e40af">énergie seule (Q, W)</text>
  <!-- Système ISOLE -->
  <rect x="330" y="30" width="120" height="100" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.5" stroke-dasharray="6,3"/>
  <text x="390" y="60" text-anchor="middle" font-size="12" fill="#15803d" font-weight="bold">ISOLÉ</text>
  <text x="390" y="78" text-anchor="middle" font-size="10" fill="#15803d">Ex: thermos idéal</text>
  <text x="390" y="148" text-anchor="middle" font-size="9" fill="#15803d">aucun échange</text>
  <defs>
    <marker id="yo" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f59e0b"/></marker>
    <marker id="yb" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#2563eb"/></marker>
  </defs>
  <text x="230" y="172" text-anchor="middle" font-size="10" fill="#9ca3af">Les échanges possibles définissent le type de système</text>
</svg>`,
          caption: "Ouvert : matière + énergie. Fermé : énergie seulement. Isolé : rien."
        },
        {
          type: "formula",
          title: "🔑 Variables d'état — l'état macroscopique",
          formula: "État = (T, P, V, n)",
          text: "Un état d'équilibre est entièrement décrit par quelques grandeurs macroscopiques appelées variables d'état. Pour un gaz parfait : T (Kelvin), P (Pascal), V (m³), n (moles). Ces quatre grandeurs sont liées par PV = nRT, donc seulement 3 sont indépendantes (2 si n est fixé). Elles n'ont de sens qu'à l'<strong>équilibre thermodynamique</strong> : quand T, P, V sont uniformes dans tout le système."
        },
        {
          type: "example",
          title: "✅ Exemples concrets de systèmes et leurs variables",
          text: "• <strong>Seringue médicale</strong> (piston + air) : système fermé. Variables : P, V, T. Quand on pousse le piston : V diminue, P augmente (Boyle-Mariotte).<br>• <strong>Ballon de baudruche</strong> : système fermé isobare (P ≈ P_atm). Quand on chauffe : V augmente (loi de Charles).<br>• <strong>Cocotte-minute</strong> : système fermé isochore. Quand on chauffe : P augmente (loi de Gay-Lussac).<br>• <strong>Humain au repos</strong> : système ouvert. Échange O₂, CO₂ (matière) et chaleur (énergie) avec l'air."
        },
        {
          type: "technique",
          title: "🛠️ Méthode : identifier et délimiter un système",
          text: "1) <strong>Lire l'énoncé</strong> et repérer l'objet étudié.<br>2) <strong>Tracer la frontière</strong> sur un schéma (paroi réelle ou surface imaginaire).<br>3) <strong>Lister les échanges</strong> qui traversent cette frontière : matière ? chaleur ? travail ?<br>4) <strong>Conclure</strong> : ouvert / fermé / isolé.<br>⚠️ Astuce : si le système peut varier de masse (gaz qui s'échappe, liquide qui s'évapore) → ouvert."
        },
        {
          type: "definition",
          title: "🌡️ État d'équilibre et transformation",
          text: "Un système est en <strong>équilibre thermodynamique</strong> quand T, P, V sont uniformes dans tout le système et stables dans le temps. C'est uniquement dans cet état que les variables d'état ont un sens précis.<br>Une <strong>transformation</strong> est le passage d'un état d'équilibre (A) à un autre (B) via des échanges d'énergie. Entre A et B, le système peut être hors équilibre."
        },
        {
          type: "warning",
          title: "⚠️ Pièges fréquents",
          text: "• <strong>Fermé ≠ isolé</strong> : un système fermé peut échanger de la chaleur avec l'extérieur (une casserole fermée chauffe quand même).<br>• Les variables d'état (T, P, V) <strong>n'ont de sens qu'à l'équilibre</strong> : pendant une explosion rapide, T et P ne sont pas uniformes → pas de valeur unique possible.<br>• T doit toujours être en <strong>Kelvin</strong> dans les formules : T(K) = T(°C) + 273,15."
        },
        {
          type: "demo",
          title: "🔬 Pourquoi l'échelle Kelvin est indispensable",
          text: "Imaginez doubler la température d'un gaz. En Celsius : 20°C → 40°C. Le gaz s'est-il vraiment réchauffé deux fois plus ? Non ! En Kelvin : 293 K → 313 K, soit seulement ×1,07. Doubler vraiment T (J'énergie cinétique × 2) signifie passer de 293 K à 586 K = 313°C. C'est pourquoi toutes les lois (PV=nRT, ΔU=nCvΔT…) exigent T en Kelvin : c'est l'échelle <strong>absolue</strong>, proportionnelle à l'agitation réelle des molécules."
        },
        {
          type: "definition",
          title: "📌 Transformation quasi-statique et adiabatique",
          text: "• <strong>Quasi-statique</strong> : transformation si lente qu'elle passe par une infinité d'états d'équilibre. Les variables d'état restent bien définies tout au long → condition de réversibilité. Exemple : comprimer un piston très lentement.<br>• <strong>Adiabatique</strong> : sans échange de chaleur (Q = 0). Peut être réversible (PV^γ = const) ou irréversible (compression brutale). ⚠️ Adiabatique ≠ isotherme : T change dans une adiabatique (sauf pour un gaz parfait en détente dans le vide)."
        },
        {
          type: "formula",
          title: "🔑 Unités de pression essentielles",
          formula: "P₀ = 101 325 Pa = 1 atm ≈ 1,013 bar ≈ 10⁵ Pa<br>1 bar = 10⁵ Pa  |  1 Pa = 1 N/m²  |  1 atm = 760 mmHg",
          text: "La pression atmosphérique standard P₀ ≈ 10⁵ Pa est la référence. Dans PV=nRT et W=−PΔV : P en Pascal, V en m³ → résultats en Joules. Le bar ≈ atm est très utilisé en pratique. Exemples : pneu de voiture ≈ 2,5 bar, plongée à 10 m : P ≈ 2 atm."
        },
        {
          type: "definition",
          title: "📌 Variables intensives et extensives",
          text: "• <strong>Intensives</strong> : indépendantes de la quantité de matière. Exemples : T, P, densité ρ, concentration c. Si on coupe le système en deux : chaque moitié a la même température.<br>• <strong>Extensives</strong> : proportionnelles à n. Exemples : V, n, U, masse m. Couper en deux divise par deux.<br>Règle pratique : si doubler n double la grandeur → elle est extensive. La grandeur molaire d'une extensive est intensive : V_m = V/n."
        },
        {
          type: "formula",
          title: "🔑 Règle des phases de Gibbs",
          formula: "v = c − φ + 2",
          text: "v = nombre de degrés de liberté (variables indépendantes). c = composants, φ = phases. Exemples pratiques :<br>• Eau pure (c=1) phase gaz seule (φ=1) : v=2, T et P librement choisissables.<br>• Eau liquide + vapeur (φ=2) : v=1, fixer T fixe P (courbe de saturation).<br>• Point triple (φ=3) : v=0, un seul état possible : T=273,16 K, P=611,7 Pa."
        }

      ],
      levels: [
        // Niveau 1
        [
          {
            type: "mcq",
            visual: "🧭",
            question: "Un système thermodynamique, c'est :",
            answers: [
              "La portion de l'univers étudiée",
              "L'ensemble de l'univers",
              "Le milieu extérieur uniquement",
              "Un gaz idéal"
            ],
            correct: 0,
            explanation: "Par définition, le système = portion de l'univers que l'on étudie."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Un système isolé :",
            answers: [
              "N'échange ni matière ni énergie",
              "N'échange que de la chaleur",
              "Échange matière et énergie",
              "Échange de la matière seulement"
            ],
            correct: 0,
            explanation: "Isolé = aucun échange avec le milieu extérieur."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Un système fermé échange :",
            answers: [
              "De l'énergie mais pas de matière",
              "De la matière mais pas d'énergie",
              "Ni matière ni énergie",
              "Matière et énergie"
            ],
            correct: 0,
            explanation: "Fermé = pas de transfert de matière, mais transfert d'énergie possible."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Quelle grandeur doit être en Kelvin dans les formules ?",
            answers: [
              "La température T",
              "La pression P",
              "Le volume V",
              "La masse m"
            ],
            correct: 0,
            explanation: "T en Kelvin est obligatoire dans toutes les formules thermodynamiques."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Les variables d'état sont :",
            answers: [
              "T, P, V",
              "m, g, h",
              "F, a, v",
              "I, U, R"
            ],
            correct: 0,
            explanation: "Température, Pression, Volume : les trois grandeurs macroscopiques principales."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Un moteur de voiture est un système :",
            answers: [
              "Ouvert",
              "Fermé",
              "Isolé",
              "Adiabatique"
            ],
            correct: 0,
            explanation: "Il échange matière (carburant, gaz d'échappement) et énergie : système ouvert."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "0°C en Kelvin vaut :",
            answers: [
              "273,15 K",
              "0 K",
              "373,15 K",
              "100 K"
            ],
            correct: 0,
            explanation: "T(K) = T(°C) + 273,15."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Un gaz dans un piston sans fuite est un système :",
            answers: [
              "Fermé",
              "Ouvert",
              "Isolé",
              "Indéfini"
            ],
            correct: 0,
            explanation: "Pas de transfert de matière, mais échange d'énergie (chaleur, travail) possible."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Le milieu extérieur désigne :",
            answers: [
              "Tout ce qui n'est pas le système",
              "L'atmosphère uniquement",
              "Le sol",
              "L'espace vide"
            ],
            correct: 0,
            explanation: "Milieu extérieur = tout le reste de l'univers en dehors du système choisi."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Les variables d'état ont un sens précis uniquement :",
            answers: [
              "À l'équilibre thermodynamique",
              "Pendant une transformation rapide",
              "Hors équilibre",
              "À 0 K seulement"
            ],
            correct: 0,
            explanation: "Hors équilibre, T et P ne sont pas uniformes : on ne peut pas leur donner une valeur unique."
          }
        ],
        // Niveau 2
        [
          {
            type: "mcq",
            visual: "🧭",
            question: "Une bouteille thermos parfaite est un exemple de :",
            answers: [
              "Système isolé",
              "Système fermé",
              "Système ouvert",
              "Système adiabatique non isolé"
            ],
            correct: 0,
            explanation: "Pas d'échange de matière ni d'énergie : isolé (idéal)."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Laquelle de ces grandeurs N'EST PAS une variable d'état ?",
            answers: [
              "La vitesse d'écoulement",
              "La température T",
              "La pression P",
              "Le volume V"
            ],
            correct: 0,
            explanation: "La vitesse d'écoulement décrit le mouvement macroscopique, pas l'état thermodynamique."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "25°C converti en Kelvin donne :",
            answers: [
              "298,15 K",
              "25 K",
              "248,15 K",
              "373 K"
            ],
            correct: 0,
            explanation: "25 + 273,15 = 298,15 K."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Dans un système ouvert, on peut avoir :",
            answers: [
              "Des échanges de matière et d'énergie",
              "Des échanges d'énergie seulement",
              "Aucun échange",
              "Des échanges de matière seulement"
            ],
            correct: 0,
            explanation: "Ouvert = échanges possibles de matière ET d'énergie."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "La frontière d'un système thermodynamique est :",
            answers: [
              "Choisie par le physicien",
              "Toujours une paroi réelle",
              "Imposée par la nature",
              "Toujours imaginaire"
            ],
            correct: 0,
            explanation: "C'est le physicien qui délimite le système selon ce qu'il veut étudier."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Un système fermé peut-il échanger de la chaleur ?",
            answers: [
              "Oui",
              "Non, jamais",
              "Seulement si T = 0",
              "Seulement avec un système isolé"
            ],
            correct: 0,
            explanation: "Fermé signifie pas de matière échangée, mais Q et W peuvent traverser la frontière."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Quel type de système est l'univers entier ?",
            answers: [
              "Isolé",
              "Fermé",
              "Ouvert",
              "Adiabatique"
            ],
            correct: 0,
            explanation: "Par définition, rien n'est extérieur à l'univers → aucun échange possible."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "À l'équilibre thermodynamique, les variables d'état :",
            answers: [
              "Sont uniformes et constantes",
              "Varient lentement",
              "Sont nulles",
              "Dépendent du chemin suivi"
            ],
            correct: 0,
            explanation: "À l'équilibre : T, P, V sont homogènes dans tout le système et stables dans le temps."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Quel est le zéro absolu de température ?",
            answers: [
              "0 K = −273,15 °C",
              "0°C",
              "−100°C",
              "273 K"
            ],
            correct: 0,
            explanation: "Le zéro absolu (0 K) correspond à −273,15°C, état théorique d'agitation minimale."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Un système adiabatique est un système :",
            answers: [
              "Sans échange de chaleur (Q = 0)",
              "Sans échange de travail",
              "Isolé",
              "À température constante"
            ],
            correct: 0,
            explanation: "Adiabatique ne veut pas dire isolé : le travail W peut encore être échangé."
          }
        ],
        // Niveau 3
        [
          {
            type: "mcq",
            visual: "🧭",
            question: "Un piston qui comprime un gaz sans échange de chaleur : le gaz est un système :",
            answers: [
              "Fermé et adiabatique",
              "Ouvert et adiabatique",
              "Isolé",
              "Fermé et isotherme"
            ],
            correct: 0,
            explanation: "Pas de matière échangée (fermé) et Q=0 (adiabatique)."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Lequel n'est PAS un exemple de système ouvert ?",
            answers: [
              "Gaz enfermé dans un ballon soudé",
              "Centrale à vapeur",
              "Corps humain",
              "Moteur à réaction"
            ],
            correct: 0,
            explanation: "Un ballon soudé sans fuite : pas d'échange de matière → fermé."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "La pression atmosphérique standard vaut :",
            answers: [
              "1,013 × 10⁵ Pa",
              "1 Pa",
              "10³ Pa",
              "9,81 Pa"
            ],
            correct: 0,
            explanation: "P₀ = 101 325 Pa ≈ 1,013 × 10⁵ Pa = 1 atm."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Deux variables d'état suffisent à décrire un gaz parfait. Lesquelles peuvent suffire si n est fixé ?",
            answers: [
              "T et V (P en découle via PV = nRT)",
              "T et la couleur",
              "P et la masse molaire",
              "V et la masse"
            ],
            correct: 0,
            explanation: "Pour un gaz parfait de quantité fixée, connaître T et V (ou T et P, ou P et V) suffit."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Pour un système ouvert en régime permanent :",
            answers: [
              "Les variables d'état sont constantes malgré les flux",
              "Le système est en déséquilibre permanent",
              "Aucun échange n'a lieu",
              "T = 0 obligatoirement"
            ],
            correct: 0,
            explanation: "Régime permanent = état stationnaire : les grandeurs ne changent pas dans le temps."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Un ballon de baudruche gonflé qui refroidit lentement : T et P changent. Quelle grandeur reste imposée de l'extérieur ?",
            answers: [
              "La pression P (= pression atmosphérique)",
              "La température T",
              "Le volume V",
              "La quantité de matière n"
            ],
            correct: 0,
            explanation: "Le ballon s'adapte à la pression atmosphérique : P ≈ P_atm est imposée."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Quelle affirmation sur le zéro absolu est correcte ?",
            answers: [
              "Il est théoriquement inaccessible",
              "Il a déjà été atteint en laboratoire",
              "Il correspond à 0°C",
              "À 0 K, les molécules sont immobiles classiquement mais l'énergie de point zéro subsiste en mécanique quantique"
            ],
            correct: 3,
            explanation: "Classiquement inaccessible, et en quantique, l'énergie de point zéro (ℏω/2) est non nulle."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Si on double la quantité de matière dans un récipient rigide à T constante, la pression :",
            answers: [
              "Double",
              "Est divisée par 2",
              "Ne change pas",
              "Augmente de 50%"
            ],
            correct: 0,
            explanation: "PV = nRT → à T et V constants, P ∝ n : doubler n double P."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "En thermodynamique, une transformation est :",
            answers: [
              "Le passage d'un état d'équilibre à un autre",
              "Un échange de matière uniquement",
              "Un changement de variables d'état impossible",
              "Synonyme d'équilibre"
            ],
            correct: 0,
            explanation: "Une transformation relie deux états d'équilibre via des échanges d'énergie."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "L'unité SI de la pression est :",
            answers: [
              "Le Pascal (Pa = N/m²)",
              "Le bar",
              "L'atmosphère (atm)",
              "Le Newton (N)"
            ],
            correct: 0,
            explanation: "Le Pascal est l'unité SI : 1 Pa = 1 N/m². Le bar et l'atm sont des unités pratiques."
          }
        ],
        // Niveau 4
        [
          {
            type: "mcq",
            visual: "🧭",
            question: "Une transformation est dite quasi-statique si :",
            answers: [
              "Elle se déroule infiniment lentement par états d'équilibre successifs",
              "Elle est très rapide",
              "Elle ne change pas le volume",
              "Q = 0 à chaque instant"
            ],
            correct: 0,
            explanation: "Quasi-statique = succession d'équilibres infiniment proches → variables d'état bien définies tout au long."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Quel système approxime le mieux un système isolé en pratique ?",
            answers: [
              "Un calorimètre bien isolé",
              "Un moteur de voiture",
              "Une bouilloire branchée",
              "Un ballon de baudruche"
            ],
            correct: 0,
            explanation: "Le calorimètre minimise les échanges thermiques et est fermé → proche d'un isolé."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Un gaz parfait est décrit par P, V, T, n. Combien de ces grandeurs sont indépendantes (pour n fixé) ?",
            answers: [
              "2",
              "1",
              "3",
              "4"
            ],
            correct: 0,
            explanation: "PV = nRT lie les trois : connaître 2 parmi T, P, V détermine la troisième."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Dans une transformation irréversible, les variables d'état :",
            answers: [
              "Ne sont bien définies que dans les états initial et final",
              "Sont définies à chaque instant",
              "Sont nulles",
              "Suivent toujours PV = nRT"
            ],
            correct: 0,
            explanation: "Hors équilibre, P et T ne sont pas uniformes : on ne peut les définir que pour les états limites."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Un système perd de la matière mais pas d'énergie. C'est :",
            answers: [
              "Théoriquement impossible (tout échange de matière implique un échange d'énergie)",
              "Un système fermé",
              "Un système isolé",
              "Un système courant en pratique"
            ],
            correct: 0,
            explanation: "Toute matière transportée porte de l'énergie (interne, cinétique…) → les deux sont liés."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "L'état d'un gaz parfait monoatomique de n=1 mol est entièrement caractérisé par :",
            answers: [
              "T et V (ou toute paire parmi T, P, V)",
              "T seul",
              "P seul",
              "Les positions de toutes les molécules"
            ],
            correct: 0,
            explanation: "Pour un gaz parfait, 2 variables d'état suffisent (la 3e se déduit de PV=nRT)."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Pourquoi le concept de système isolé est-il idéal ?",
            answers: [
              "Car toute paroi réelle laisse passer un peu de chaleur",
              "Car l'énergie peut disparaître",
              "Car la matière ne peut pas être confinée",
              "Car T = 0 est inaccessible"
            ],
            correct: 0,
            explanation: "Aucune paroi n'est parfaitement adiabatique et imperméable : l'isolement total est une idéalisation."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Un système thermostaté est maintenu à T constante par contact avec un thermostat. Il est :",
            answers: [
              "Fermé et isotherme",
              "Isolé",
              "Adiabatique",
              "Nécessairement à l'équilibre"
            ],
            correct: 0,
            explanation: "Un thermostat impose T = constante via échange de chaleur : le système est fermé et isotherme."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Lors d'une explosion rapide de gaz, les variables d'état :",
            answers: [
              "Ne sont pas définies pendant l'explosion (hors équilibre)",
              "Suivent PV = nRT à chaque instant",
              "Sont constantes",
              "Sont définies seulement à T = 0"
            ],
            correct: 0,
            explanation: "Une explosion est irréversible et hors équilibre : T et P ne sont pas uniformes."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Classer par ordre croissant d'échanges : isolé, fermé, ouvert.",
            answers: [
              "Isolé < Fermé < Ouvert",
              "Ouvert < Fermé < Isolé",
              "Fermé < Isolé < Ouvert",
              "Tous équivalents"
            ],
            correct: 0,
            explanation: "Isolé (aucun échange) < Fermé (énergie seulement) < Ouvert (énergie + matière)."
          }
        ],
        // Niveau 5
        [
          {
            type: "mcq",
            visual: "🧭",
            question: "Quel théorème relie les variables d'état pour un gaz réel de Van der Waals ?",
            answers: [
              "(P + a·n²/V²)(V − nb) = nRT",
              "PV = nRT",
              "P = ρgT",
              "PV² = nRT"
            ],
            correct: 0,
            explanation: "Van der Waals corrige le gaz parfait avec a (interactions) et b (volume propre des molécules)."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Un piston laisse passer les petites molécules mais retient les grosses. C'est un exemple de :",
            answers: [
              "Membrane semi-perméable (système semi-ouvert)",
              "Système isolé",
              "Système adiabatique",
              "Système fermé classique"
            ],
            correct: 0,
            explanation: "Une membrane semi-perméable crée un système intermédiaire : certaines espèces traversent, d'autres non."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "En mécanique statistique, les variables d'état macroscopiques émergent :",
            answers: [
              "Des moyennes sur les états microscopiques de toutes les particules",
              "Des trajectoires individuelles des molécules",
              "De la loi de Newton uniquement",
              "De la seule pression"
            ],
            correct: 0,
            explanation: "T, P, V sont des grandeurs statistiques : moyennes sur ~10²³ particules."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Un système à deux phases (liquide + vapeur) en équilibre. Combien de variables d'état indépendantes a-t-il (règle de Gibbs, composant pur) ?",
            answers: [
              "1 (T impose P via la courbe de coexistence)",
              "2",
              "3",
              "0"
            ],
            correct: 0,
            explanation: "Règle de Gibbs : v = c − φ + 2 = 1 − 2 + 2 = 1 degré de liberté : T seule suffit."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Un récipient adiabatique rigide contient un gaz. On agite avec une hélice motorisée depuis l'extérieur. Le système (gaz seul) est :",
            answers: [
              "Fermé, non adiabatique du point de vue du travail",
              "Isolé",
              "Ouvert",
              "Adiabatique et isolé"
            ],
            correct: 0,
            explanation: "Le gaz est fermé (pas de matière) mais reçoit du travail via l'hélice (W ≠ 0) ; Q = 0 → adiabatique, mais pas isolé !"
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "La pression dans un gaz en équilibre est reliée à l'agitation moléculaire. Quel est le lien microscopique ?",
            answers: [
              "P = (1/3)ρ⟨v²⟩ (théorie cinétique)",
              "P = nT",
              "P = mv²",
              "P = E_c × V"
            ],
            correct: 0,
            explanation: "La pression cinétique est P = nmv²/3 en moyenne sur les directions et les vitesses."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Pour un solide, le volume V est quasi-constant. L'état thermodynamique est décrit principalement par :",
            answers: [
              "T et P (V ≈ const)",
              "V et P uniquement",
              "T seul",
              "n et V"
            ],
            correct: 0,
            explanation: "Pour un solide incompressible, V est fixé : seules T et P varient significativement."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Quelle est la différence entre un état macroétat et un microétat en thermodynamique statistique ?",
            answers: [
              "Macroétat = valeurs de T, P, V ; microétat = configuration de toutes les particules",
              "Ce sont des synonymes",
              "Microétat = variables d'état classiques",
              "Macroétat = positions des atomes"
            ],
            correct: 0,
            explanation: "Un macroétat correspond à un très grand nombre de microétas compatibles (base de l'entropie statistique)."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Dans quel cas la notion de température locale est-elle valide ?",
            answers: [
              "Quand l'équilibre local est atteint (libre parcours moyen ≪ taille du système)",
              "Uniquement pour les gaz parfaits",
              "Jamais hors d'un équilibre global",
              "Toujours, même dans un plasma"
            ],
            correct: 0,
            explanation: "L'équilibre thermodynamique local permet de définir T(r,t) à chaque point, condition de l'hydrodynamique."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Un système possède une énergie interne U et est fermé. Son énergie totale inclut aussi :",
            answers: [
              "L'énergie cinétique macroscopique et l'énergie potentielle de pesanteur",
              "Uniquement U",
              "L'énergie des photons environnants",
              "L'énergie du milieu extérieur"
            ],
            correct: 0,
            explanation: "L'énergie totale = U (microscopique) + Ec (mouvement global) + Ep (gravité) + ... En thermo on se place souvent au repos."
          }
        ],
        // Niveau 6
        [
          {
            type: "mcq",
            visual: "🧭",
            question: "La règle des phases de Gibbs est v = c − φ + 2. Pour l'eau pure (c=1) au point triple (φ=3) :",
            answers: [
              "v = 0 : aucun degré de liberté, T et P fixés",
              "v = 1",
              "v = 2",
              "v = 3"
            ],
            correct: 0,
            explanation: "v = 1−3+2 = 0 : le point triple est unique, T = 273,16 K et P = 611,7 Pa."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "En thermodynamique des processus irréversibles, la production d'entropie locale σ est :",
            answers: [
              "Toujours ≥ 0 (2e principe local)",
              "Peut être négative",
              "Nulle pour tout écoulement",
              "Indéfinie hors équilibre"
            ],
            correct: 0,
            explanation: "Le second principe local impose σ ≥ 0 en tout point, égal à 0 seulement pour un processus réversible."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Pour un gaz de Van der Waals, la pression critique est P_c = :",
            answers: [
              "a / (27b²)",
              "a / b",
              "RT_c / V_c",
              "nRT / V"
            ],
            correct: 0,
            explanation: "Au point critique : P_c = a/(27b²), T_c = 8a/(27Rb), V_c = 3nb — résultats classiques."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "L'équipartition de l'énergie énonce que chaque degré de liberté quadratique possède en moyenne :",
            answers: [
              "k_B T / 2",
              "k_B T",
              "3 k_B T / 2",
              "R T / 2"
            ],
            correct: 0,
            explanation: "Théorème d'équipartition : ½ k_B T par degré de liberté quadratique (translation, rotation)."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Pourquoi le concept de variable d'état 'intensive' est-il important ?",
            answers: [
              "Car T et P ne dépendent pas de la taille du système, contrairement à V et U",
              "Car elles sont toujours nulles",
              "Car elles ne peuvent pas être mesurées",
              "Car elles valent la même chose pour tous les systèmes"
            ],
            correct: 0,
            explanation: "Intensive (T, P, densité) = indépendante de la quantité de matière. Extensive (V, U, n) = proportionnelle à n."
          },
          {
            type: "mcq",
            visual: "🧭",
            question: "Quelle est la condition thermodynamique d'équilibre mécanique entre deux compartiments ?",
            answers: [
              "P₁ = P₂",
              "T₁ = T₂",
              "V₁ = V₂",
              "U₁ = U₂"
            ],
            correct: 0,
            explanation: "Équilibre mécanique : égalité des pressions de part et d'autre de la paroi mobile."
          }
        ]
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // NOTION 2 — Température et énergie interne
    // ─────────────────────────────────────────────────────────────────
    {
      id: "energie-interne",
      label: "Énergie interne",
      icon: "🌡️",
      lesson: {
        formula: "ΔU = n C_v ΔT  (gaz parfait)",
        text: "L'énergie interne U est la somme de toutes les énergies microscopiques des particules du système (cinétiques + potentielles d'interaction). Pour un gaz parfait, elle ne dépend que de la température.",
        example: "1 mol de gaz monoatomique : C_v = 3R/2 ≈ 12,5 J·mol⁻¹·K⁻¹. Si ΔT = 10 K, ΔU = 1 × 12,5 × 10 = 125 J."
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Énergie interne U — l'énergie cachée",
          text: "L'énergie interne U est l'énergie <strong>microscopique totale</strong> du système : somme de l'énergie cinétique de toutes les molécules (translation, rotation, vibration) + leur énergie potentielle d'interaction. Elle ne compte pas l'énergie cinétique macroscopique (mouvement du récipient) ni la gravité. Un verre d'eau chaud a une U plus grande qu'un verre froid, même si les deux sont immobiles sur la table."
        },
        {
          type: "definition",
          title: "🌡️ Température et agitation moléculaire",
          text: "La température T est la mesure macroscopique de l'agitation microscopique. Pour un gaz parfait monoatomique, l'énergie cinétique moyenne de translation d'une molécule vaut : ½m⟨v²⟩ = (3/2)k_B T. À 300 K, les molécules d'azote se déplacent à ≈ 500 m/s. À 1200 K, elles vont deux fois plus vite. <strong>La température ne mesure pas l'énergie totale mais l'agitation par particule.</strong>"
        },
        {
          type: "formula",
          title: "🔑 ΔU = n C_v ΔT pour un gaz parfait (loi de Joule)",
          formula: "ΔU = n C_v ΔT",
          text: "Pour un gaz parfait, U dépend <strong>uniquement de T</strong> (pas de P ni de V). C'est la loi de Joule. C_v = capacité thermique molaire à volume constant (J·mol⁻¹·K⁻¹). <strong>Important</strong> : cette formule est valable pour tout type de transformation (isotherme, isobare, adiabatique…), pas seulement isochore !"
        },
        {
          type: "formula",
          title: "🔑 Valeurs de C_v et degrés de liberté",
          formula: "Monoatomique (He, Ar) : C_v = 3R/2 ≈ 12,5 J·mol⁻¹·K⁻¹<br>Diatomique (N₂, O₂, H₂) : C_v = 5R/2 ≈ 20,8 J·mol⁻¹·K⁻¹<br>R = 8,314 J·mol⁻¹·K⁻¹",
          text: "Chaque degré de liberté quadratique contribue R/2 à C_v (théorème d'équipartition). Monoatomique : 3 translations uniquement. Diatomique à T modérée : 3 translations + 2 rotations = 5. À très haute T, les vibrations s'activent : C_v → 7R/2."
        },
        {
          type: "graph",
          title: "📊 Degrés de liberté des molécules",
          svgContent: `<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <!-- Monoatomique -->
  <circle cx="100" cy="80" r="28" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5"/>
  <text x="100" y="85" text-anchor="middle" font-size="13" fill="#1e40af" font-weight="bold">He</text>
  <!-- Flèches 3 translations -->
  <line x1="100" y1="52" x2="100" y2="30" stroke="#dc2626" stroke-width="2" marker-end="url(#ra)"/>
  <line x1="128" y1="80" x2="150" y2="80" stroke="#dc2626" stroke-width="2" marker-end="url(#ra)"/>
  <line x1="100" y1="108" x2="100" y2="130" stroke="#dc2626" stroke-width="2" marker-end="url(#ra)"/>
  <text x="100" y="155" text-anchor="middle" font-size="11" fill="#1e40af" font-weight="bold">3 translations</text>
  <text x="100" y="168" text-anchor="middle" font-size="10" fill="#1e40af">C_v = 3R/2</text>
  <!-- Diatomique -->
  <ellipse cx="300" cy="80" rx="45" ry="18" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
  <circle cx="275" cy="80" r="14" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
  <circle cx="325" cy="80" r="14" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
  <text x="300" y="85" text-anchor="middle" font-size="11" fill="#15803d" font-weight="bold">N₂</text>
  <!-- 3 translations -->
  <line x1="300" y1="62" x2="300" y2="42" stroke="#dc2626" stroke-width="2" marker-end="url(#ra)"/>
  <line x1="345" y1="80" x2="365" y2="80" stroke="#dc2626" stroke-width="2" marker-end="url(#ra)"/>
  <!-- 2 rotations (arcs) -->
  <path d="M 255 65 A 30 30 0 0 1 345 65" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#ga)"/>
  <path d="M 260 98 A 30 20 0 0 0 340 98" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#ga)"/>
  <text x="300" y="155" text-anchor="middle" font-size="11" fill="#15803d" font-weight="bold">3 trans + 2 rot</text>
  <text x="300" y="168" text-anchor="middle" font-size="10" fill="#15803d">C_v = 5R/2</text>
  <defs>
    <marker id="ra" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#dc2626"/></marker>
    <marker id="ga" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f59e0b"/></marker>
  </defs>
  <text x="220" y="190" text-anchor="middle" font-size="10" fill="#9ca3af">Rouge = translations, Orange = rotations</text>
</svg>`,
          caption: "Monoatomique : 3 degrés de liberté (C_v=3R/2). Diatomique : 5 (C_v=5R/2)."
        },
        {
          type: "example",
          title: "✅ Exemples de calcul de ΔU",
          text: "<strong>Ex 1 — Argon monoatomique :</strong> 2 mol d'argon passent de 300 K à 500 K (quelle que soit la transformation).<br>ΔU = n C_v ΔT = 2 × (3×8,314/2) × 200 = 2 × 12,47 × 200 ≈ <strong>4988 J ≈ 5 kJ</strong>.<br><br><strong>Ex 2 — Diazote diatomique :</strong> 3 mol de N₂ de 27°C (300K) à 127°C (400K).<br>ΔU = 3 × (5×8,314/2) × 100 = 3 × 20,79 × 100 ≈ <strong>6237 J ≈ 6,2 kJ</strong>.<br><br><strong>Ex 3 — Gaz parfait isotherme :</strong> quelle que soit la transformation, si ΔT = 0 → <strong>ΔU = 0</strong>."
        },
        {
          type: "technique",
          title: "🛠️ Méthode — Calculer ΔU étape par étape",
          text: "1) <strong>Identifier le gaz</strong> : monoatomique (He, Ar, Ne) ou diatomique (N₂, O₂, H₂, air) ?<br>2) <strong>Choisir C_v</strong> : 3R/2 (mono) ou 5R/2 (di, T modérée).<br>3) <strong>Calculer ΔT = T_f − T_i</strong> en Kelvin (signe crucial !).<br>4) <strong>Appliquer</strong> : ΔU = n C_v ΔT.<br>5) <strong>Vérifier le signe</strong> : ΔT > 0 → ΔU > 0 (gain d'énergie). ΔT < 0 → ΔU < 0 (perte).<br>⚠️ Cette formule marche pour TOUS les types de transformation d'un gaz parfait."
        },
        {
          type: "warning",
          title: "⚠️ Pièges courants",
          text: "• Ne pas oublier que ΔU = nC_vΔT s'applique même en transformation <strong>isobare</strong> ou <strong>adiabatique</strong> — pas seulement isochore.<br>• ΔU = 0 <strong>ne signifie pas</strong> Q = 0 ni W = 0 (isotherme d'un gaz parfait : ΔU=0 mais Q = −W ≠ 0 en général).<br>• U est <strong>extensive</strong> (∝ n) : doubler n double U. Mais T est intensive.<br>• Pour un gaz réel ou un liquide, U dépend aussi de V : ΔU ≠ nC_vΔT."
        },
        {
          type: "demo",
          title: "🔬 Expérience de Joule : U dépend de T seulement",
          text: "Joule (1843) a réalisé l'expérience suivante : un gaz parfait s'étend librement dans le vide (W=0 car P_ext=0, Q=0 car parois adiabatiques). Résultat : T ne change pas ! Donc ΔU = W + Q = 0, et ΔU = nC_vΔT = 0 ✓. Conclusion : pour un gaz parfait, U ne dépend que de T, pas de V. Pour un gaz réel (Van der Waals), l'expansion libre provoque un léger refroidissement car les molécules doivent 'vaincre' leurs attractions mutuelles → U augmente légèrement (l'énergie cinétique diminue = T baisse)."
        },
        {
          type: "formula",
          title: "🔑 Relation de Mayer : C_p = C_v + R",
          formula: "C_p = C_v + R  (gaz parfait)<br>Monoatomique : C_p = 5R/2 ≈ 20,8 J·mol⁻¹·K⁻¹<br>Diatomique (T mod.) : C_p = 7R/2 ≈ 29,1 J·mol⁻¹·K⁻¹",
          text: "À pression constante, le gaz se dilate : W = −nRΔT. La chaleur isobare Q_p = ΔU + |W| = nC_vΔT + nRΔT = n(C_v+R)ΔT = nC_pΔT. Donc C_p = C_v + R. <strong>Intuition</strong> : à P=cst, l'énergie fournie sert à la fois à chauffer le gaz (C_v) et à faire du travail de dilatation (R)."
        },
        {
          type: "definition",
          title: "📌 Chaleur latente L lors d'un changement de phase",
          text: "Lors d'une fusion ou vaporisation à T et P constants, T reste constante mais U augmente : l'énergie brise les liaisons intermoléculaires. On appelle ça la chaleur latente.<br>• Fusion glace : L_f ≈ 334 kJ/kg (beaucoup d'énergie pour peu de T)<br>• Vaporisation eau : L_v ≈ 2260 kJ/kg (énorme !)<br>Q = m × L. ⚠️ ΔU = nC_vΔT n'est pas applicable : T est constante mais U varie."
        },
        {
          type: "example",
          title: "✅ Exemple — Chaleur totale pour bouillir de l'eau",
          text: "On chauffe 1 kg d'eau de 20°C à 100°C puis on la vaporise entièrement.<br><strong>Phase 1 (chauffage)</strong> : Q₁ = mc ΔT = 1 × 4186 × 80 = 334 880 J ≈ 335 kJ.<br><strong>Phase 2 (vaporisation)</strong> : Q₂ = m × L_v = 1 × 2260 kJ = 2260 kJ.<br><strong>Total</strong> : Q = 335 + 2260 = <strong>2595 kJ</strong>. La vaporisation consomme 7× plus que le chauffage !"
        },
        {
          type: "formula",
          title: "🔑 Loi de Dulong-Petit (solides cristallins)",
          formula: "C_v ≈ 3R ≈ 24,9 J·mol⁻¹·K⁻¹  (solide monoatomique, T ≳ T_ambiante)",
          text: "Pour un solide cristallin à T suffisante, chaque atome oscille en 3D : 3 degrés cinétiques + 3 degrés potentiels = 6 degrés quadratiques. Équipartition : C_v = 6×R/2 = 3R. Vérifié : Al ≈ 24,3, Fe ≈ 25,1, Cu ≈ 24,4 J·mol⁻¹·K⁻¹. À T faible, les vibrations se quantifient → C_v → 0."
        },
        {
          type: "formula",
          title: "🔑 Capacité thermique massique c (solides et liquides)",
          formula: "Q = m c ΔT  (à V ≈ const)<br>Eau : c ≈ 4186 | Al ≈ 900 | Fer ≈ 450 | Cuivre ≈ 385 J·kg⁻¹·K⁻¹",
          text: "Pour les solides et liquides, tout l'apport thermique modifie U (volume quasi-constant → W ≈ 0). c est la chaleur massique (J·kg⁻¹·K⁻¹). L'eau a une chaleur massique exceptionnellement élevée, ce qui en fait un excellent fluide caloporteur. Un radiateur contenant 10 L d'eau (10 kg) stocke Q = 10 × 4186 × 30 ≈ 1,26 MJ pour un écart de 30°C."
        }

      ],
      levels: [
        // Niveau 1
        [
          {
            type: "mcq",
            visual: "🌡️",
            question: "L'énergie interne U représente :",
            answers: [
              "L'énergie microscopique totale du système",
              "L'énergie cinétique macroscopique",
              "La chaleur reçue",
              "La pression × le volume"
            ],
            correct: 0,
            explanation: "U = somme de toutes les énergies microscopiques des particules."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "Pour un gaz parfait, ΔU dépend de :",
            answers: [
              "La variation de température ΔT uniquement",
              "La variation de pression ΔP",
              "La variation de volume ΔV",
              "La chaleur Q uniquement"
            ],
            correct: 0,
            explanation: "Loi de Joule : U ne dépend que de T pour un gaz parfait."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "La formule ΔU pour un gaz parfait est :",
            answers: [
              "ΔU = n C_v ΔT",
              "ΔU = n C_p ΔT",
              "ΔU = P ΔV",
              "ΔU = Q − W"
            ],
            correct: 0,
            explanation: "ΔU = nC_vΔT est la formule de la loi de Joule pour un gaz parfait."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "La température mesure :",
            answers: [
              "L'agitation thermique des particules",
              "L'énergie totale du système",
              "La pression exercée",
              "Le volume occupé"
            ],
            correct: 0,
            explanation: "T est une mesure macroscopique de l'agitation microscopique des molécules."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "ΔU = U_f − U_i. Si ΔU > 0, le système :",
            answers: [
              "A gagné de l'énergie interne",
              "A perdu de l'énergie interne",
              "N'a pas changé",
              "A refroidi"
            ],
            correct: 0,
            explanation: "ΔU > 0 signifie que l'énergie interne finale est supérieure à l'initiale."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "C_v pour un gaz monoatomique parfait vaut :",
            answers: [
              "3R/2",
              "5R/2",
              "R",
              "7R/2"
            ],
            correct: 0,
            explanation: "3 degrés de liberté de translation × R/2 = 3R/2 ≈ 12,5 J·mol⁻¹·K⁻¹."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "La constante R des gaz parfaits vaut :",
            answers: [
              "8,314 J·mol⁻¹·K⁻¹",
              "6,02 × 10²³ J·mol⁻¹",
              "1,38 × 10⁻²³ J·K⁻¹",
              "9,81 J·mol⁻¹·K⁻¹"
            ],
            correct: 0,
            explanation: "R = 8,314 J·mol⁻¹·K⁻¹ est la constante molaire des gaz parfaits."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "1 mol de gaz parfait monoatomique, ΔT = 10 K. ΔU = ?",
            answers: [
              "≈ 125 J",
              "≈ 83 J",
              "≈ 208 J",
              "≈ 10 J"
            ],
            correct: 0,
            explanation: "ΔU = 1 × (3×8,314/2) × 10 = 12,47 × 10 ≈ 125 J."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "U est une fonction d'état. Cela signifie :",
            answers: [
              "ΔU ne dépend que des états initial et final",
              "U dépend du chemin suivi",
              "U est toujours positive",
              "U ne varie jamais"
            ],
            correct: 0,
            explanation: "Fonction d'état = ΔU est indépendant du chemin : seuls les états limites comptent."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "L'énergie interne est une grandeur :",
            answers: [
              "Extensive (∝ n)",
              "Intensive",
              "Toujours nulle",
              "Égale à T"
            ],
            correct: 0,
            explanation: "U est extensive : doubler la quantité de matière double U (à T constante)."
          }
        ],
        // Niveau 2
        [
          {
            type: "mcq",
            visual: "🌡️",
            question: "C_v pour un gaz diatomique parfait (T modérée) vaut :",
            answers: [
              "5R/2",
              "3R/2",
              "7R/2",
              "R"
            ],
            correct: 0,
            explanation: "5 degrés de liberté (3 trans + 2 rot) × R/2 = 5R/2 ≈ 20,8 J·mol⁻¹·K⁻¹."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "2 mol de gaz parfait monoatomique, ΔT = 20 K. ΔU = ?",
            answers: [
              "≈ 499 J",
              "≈ 250 J",
              "≈ 831 J",
              "≈ 166 J"
            ],
            correct: 0,
            explanation: "ΔU = 2 × (3R/2) × 20 = 2 × 12,47 × 20 ≈ 499 J."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "Pour un gaz parfait, si T ne varie pas, alors ΔU = ?",
            answers: [
              "0",
              "nC_v",
              "PΔV",
              "Q"
            ],
            correct: 0,
            explanation: "Loi de Joule : ΔU = nC_vΔT = 0 si ΔT = 0."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "La constante de Boltzmann k_B est reliée à R par :",
            answers: [
              "R = N_A × k_B",
              "R = k_B / N_A",
              "R = k_B²",
              "R = k_B + N_A"
            ],
            correct: 0,
            explanation: "R = N_A × k_B, avec N_A = 6,022×10²³ mol⁻¹."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "Énergie cinétique moyenne de translation d'une molécule de gaz parfait :",
            answers: [
              "(3/2) k_B T",
              "(1/2) k_B T",
              "k_B T",
              "(3/2) RT"
            ],
            correct: 0,
            explanation: "E_c = (3/2) k_B T (3 degrés de liberté de translation)."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "Si ΔU = −500 J, le système a :",
            answers: [
              "Perdu 500 J d'énergie interne",
              "Reçu 500 J de chaleur",
              "Effectué 500 J de travail",
              "Doublé sa température"
            ],
            correct: 0,
            explanation: "ΔU < 0 → l'énergie interne a diminué de 500 J."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "1 mol d'argon (monoatomique) de 0°C à 100°C : ΔU ≈ ?",
            answers: [
              "≈ 1247 J",
              "≈ 2079 J",
              "≈ 831 J",
              "≈ 4157 J"
            ],
            correct: 0,
            explanation: "ΔU = 1 × 3R/2 × 100 = 12,47 × 100 ≈ 1247 J."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "Pour un gaz parfait, ΔU = nC_vΔT est valable :",
            answers: [
              "Pour tout type de transformation",
              "Seulement en transformation isochore",
              "Seulement si Q = 0",
              "Seulement si W = 0"
            ],
            correct: 0,
            explanation: "La loi de Joule s'applique à tout processus pour un gaz parfait, quel que soit le chemin."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "Si la quantité de matière double à T constante, U :",
            answers: [
              "Double",
              "Reste constante",
              "Est divisée par 2",
              "Quadruple"
            ],
            correct: 0,
            explanation: "U est extensive : U ∝ n, à T constante."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "Quelle affirmation est vraie pour un gaz RÉEL (vs parfait) ?",
            answers: [
              "U dépend de T et de V (interactions entre molécules)",
              "U dépend uniquement de T",
              "U = 0 toujours",
              "U ne dépend que de P"
            ],
            correct: 0,
            explanation: "Pour un gaz réel, les interactions moléculaires font dépendre U de la distance entre molécules, donc de V."
          }
        ],
        // Niveau 3
        [
          {
            type: "mcq",
            visual: "🌡️",
            question: "3 mol de N₂ (diatomique) passent de 27°C à 127°C. ΔU = ?",
            answers: [
              "≈ 6237 J",
              "≈ 3742 J",
              "≈ 8729 J",
              "≈ 2494 J"
            ],
            correct: 0,
            explanation: "ΔU = 3 × (5R/2) × 100 = 3 × 20,79 × 100 ≈ 6237 J."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "Un gaz parfait est comprimé isotherme. Son énergie interne :",
            answers: [
              "Ne change pas (ΔU = 0)",
              "Augmente",
              "Diminue",
              "Double"
            ],
            correct: 0,
            explanation: "Isotherme → ΔT = 0 → ΔU = nC_vΔT = 0 pour un gaz parfait."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "L'expérience de Joule (expansion dans le vide) montre que pour un gaz parfait :",
            answers: [
              "T ne change pas → U ne dépend pas de V",
              "T diminue",
              "P augmente",
              "U augmente"
            ],
            correct: 0,
            explanation: "Dans le vide : W=0, Q=0 → ΔU=0 → ΔT=0 : loi de Joule."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "Pour calculer ΔU d'un gaz parfait, quelle information est INDISPENSABLE ?",
            answers: [
              "La variation de température ΔT et la quantité n",
              "Uniquement la pression",
              "Uniquement le volume",
              "La chaleur Q"
            ],
            correct: 0,
            explanation: "ΔU = nC_vΔT : on a besoin de n, C_v (propriété du gaz) et ΔT."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "Quel est le signe de ΔU lors du refroidissement d'un gaz ?",
            answers: [
              "ΔU < 0",
              "ΔU > 0",
              "ΔU = 0",
              "Le signe dépend de W"
            ],
            correct: 0,
            explanation: "Refroidissement → ΔT < 0 → ΔU = nC_vΔT < 0."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "Pour 2 mol de gaz monoatomique, ΔU = 3000 J. Quel est ΔT ?",
            answers: [
              "≈ 120,3 K",
              "≈ 240,6 K",
              "≈ 60,1 K",
              "≈ 30 K"
            ],
            correct: 0,
            explanation: "ΔT = ΔU / (nC_v) = 3000 / (2 × 12,47) ≈ 120,3 K."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "Quelle énergie microscopique contribue à U mais PAS à T dans un solide cristallin ?",
            answers: [
              "L'énergie potentielle des liaisons interatomiques",
              "L'énergie cinétique de translation",
              "L'énergie de rotation",
              "L'énergie radiative"
            ],
            correct: 0,
            explanation: "Dans un solide, T mesure surtout l'énergie cinétique de vibration, mais l'énergie potentielle des liaisons contribue aussi à U."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "Pour un corps de masse m, chaleur massique c_v, ΔT = 5°C. Q = ?",
            answers: [
              "Q = m c_v × 5 (J si m en kg, c_v en J·kg⁻¹·K⁻¹)",
              "Q = 5 / (mc_v)",
              "Q = m / (c_v × 5)",
              "Q = c_v / m"
            ],
            correct: 0,
            explanation: "Pour un liquide ou solide à V constant : ΔU = Q = mc_vΔT."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "L'énergie interne d'un système isolé :",
            answers: [
              "Se conserve (ΔU = 0)",
              "Augmente toujours",
              "Diminue toujours",
              "Dépend de T extérieure"
            ],
            correct: 0,
            explanation: "Système isolé : W=0, Q=0 → ΔU = W + Q = 0."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "La chaleur massique de l'eau est c ≈ 4186 J·kg⁻¹·K⁻¹. Pour chauffer 1 kg de 1°C, il faut :",
            answers: [
              "4186 J ≈ 1 kcal",
              "1 J",
              "418,6 J",
              "41860 J"
            ],
            correct: 0,
            explanation: "Q = mcΔT = 1 × 4186 × 1 = 4186 J. C'est la définition historique de la calorie."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "Pourquoi C_v est-il noté 'à volume constant' ?",
            answers: [
              "Car à V constant, tout l'apport de chaleur va dans ΔU (pas de travail)",
              "Car le volume change toujours",
              "Car la pression est fixée",
              "Par convention arbitraire"
            ],
            correct: 0,
            explanation: "À V=const, W=0 → ΔU = Q, donc Q = nC_vΔT mesure directement la variation d'énergie interne."
          }
        ],
        // Niveau 4
        [
          {
            type: "mcq",
            visual: "🌡️",
            question: "Un gaz parfait subit une transformation quelconque (T_i=300 K → T_f=500 K). ΔU dépend-il du chemin suivi ?",
            answers: [
              "Non, ΔU est une fonction d'état",
              "Oui, si la pression varie",
              "Oui, si W ≠ 0",
              "Non seulement si la transformation est quasi-statique"
            ],
            correct: 0,
            explanation: "U est une fonction d'état : ΔU = nC_vΔT ne dépend que de T_i et T_f."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "Pour n mol de gaz parfait diatomique, C_v = 5R/2 à T modérée. À très haute température, C_v devient :",
            answers: [
              "7R/2 (vibrations activées)",
              "3R/2",
              "5R/2 (inchangé)",
              "R"
            ],
            correct: 0,
            explanation: "À haute T, les modes vibratoires (2 degrés) s'activent : C_v → 7R/2."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "Pour l'argon à T=300 K, l'énergie interne molaire U_m ≈ ?",
            answers: [
              "≈ 3739 J/mol",
              "≈ 6232 J/mol",
              "≈ 2494 J/mol",
              "≈ 8314 J/mol"
            ],
            correct: 0,
            explanation: "U_m = (3/2)RT = 1,5 × 8,314 × 300 ≈ 3741 J/mol."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "Pour un gaz réel de Van der Waals, (∂U/∂V)_T = ?",
            answers: [
              "a n²/V² (terme d'interaction attractif)",
              "0",
              "P",
              "nRT/V"
            ],
            correct: 0,
            explanation: "Pour Van der Waals : (∂U/∂V)_T = an²/V² représente l'énergie potentielle d'attraction entre molécules."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "La capacité thermique à pression constante C_p est liée à C_v par :",
            answers: [
              "C_p = C_v + R (gaz parfait)",
              "C_p = C_v",
              "C_p = C_v − R",
              "C_p = γ C_v"
            ],
            correct: 0,
            explanation: "Relation de Mayer : C_p − C_v = R pour un gaz parfait. C_p > C_v car à P=const, le gaz fait du travail en se dilatant."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "La relation de Mayer C_p − C_v = R pour un gaz parfait vient de :",
            answers: [
              "PΔV = nRΔT à pression constante",
              "La loi de Joule",
              "Le second principe",
              "La définition de l'entropie"
            ],
            correct: 0,
            explanation: "À P=const : Q_p = ΔU + PΔV = nC_vΔT + nRΔT = n(C_v+R)ΔT → C_p = C_v + R."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "Lors d'un changement de phase (fusion), T reste constante mais U :",
            answers: [
              "Augmente (énergie de liaison absorbée)",
              "Reste constante",
              "Diminue",
              "Devient nulle"
          ],
            correct: 0,
            explanation: "La chaleur latente augmente U sans changer T : l'énergie brise les liaisons intermoléculaires."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "Un gaz monoatomique parfait a U = (3/2)nRT. Sa pression vaut P = nRT/V. Alors U/P = ?",
            answers: [
              "3V/2",
              "V",
              "T",
              "nR"
            ],
            correct: 0,
            explanation: "U/P = (3nRT/2) / (nRT/V) = 3V/2."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "Pour calculer ΔU lors d'une compression adiabatique d'un gaz parfait, on utilise :",
            answers: [
              "ΔU = nC_vΔT (valable toujours pour gaz parfait)",
              "ΔU = −PΔV",
              "ΔU = Q car W = 0",
              "ΔU = 0"
            ],
            correct: 0,
            explanation: "Même pour une compression adiabatique, ΔU = nC_vΔT reste la bonne formule."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "Quel est le lien entre k_B et R pour un gaz monoatomique : U_particule = ?",
            answers: [
              "(3/2) k_B T",
              "(3/2) RT",
              "k_B T",
              "(5/2) k_B T"
            ],
            correct: 0,
            explanation: "Par particule : U = (3/2)k_BT. Par mol : U_m = (3/2)N_Ak_BT = (3/2)RT."
          }
        ],
        // Niveau 5
        [
          {
            type: "mcq",
            visual: "🌡️",
            question: "Le théorème d'équipartition prédit que chaque degré de liberté quadratique contribue ½k_BT. Combien de degrés a un gaz diatomique (translation + rotation + vibration) ?",
            answers: [
              "7 (3 trans + 2 rot + 2 vib)",
              "5",
              "3",
              "6"
            ],
            correct: 0,
            explanation: "À T très élevée : 3 translations + 2 rotations + 2 (cinétique + potentielle) de vibration = 7."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "La capacité thermique du solide de Dulong-Petit prédit C_v ≈ ?",
            answers: [
              "3R ≈ 24,9 J·mol⁻¹·K⁻¹",
              "R",
              "5R/2",
              "2R"
            ],
            correct: 0,
            explanation: "Chaque atome d'un solide a 3 degrés de vibration × 2 (cinétique + potentielle) × k_B/2 = 3k_B → C_v = 3R."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "La fonction de partition Z d'un gaz parfait monoatomique donne U = ?",
            answers: [
              "(3/2) Nk_BT",
              "Nk_BT",
              "(1/2) Nk_BT",
              "3Nk_BT"
            ],
            correct: 0,
            explanation: "U = k_BT² (∂lnZ/∂T)_V = (3/2)Nk_BT pour un gaz parfait monoatomique."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "Pour un gaz de Van der Waals, comment évolue U lors d'une expansion isotherme ?",
            answers: [
              "U augmente (les molécules s'éloignent contre leur attraction)",
              "U reste constante",
              "U diminue",
              "ΔU = nRΔT"
            ],
            correct: 0,
            explanation: "Pour Van der Waals : ΔU = an²(1/V_i − 1/V_f) > 0 lors d'une expansion (V_f > V_i)."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "Le coefficient de Joule-Thomson μ_JT = (∂T/∂P)_H est nul pour :",
            answers: [
              "Un gaz parfait",
              "Un gaz réel à haute pression",
              "Tout gaz à T élevée",
              "L'eau liquide"
            ],
            correct: 0,
            explanation: "Pour un gaz parfait, U ne dépend pas de P → μ_JT = 0. Pour les gaz réels, μ_JT ≠ 0."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "Pour un gaz parfait, (∂U/∂V)_T = 0 implique que :",
            answers: [
              "Les molécules n'ont pas d'énergie d'interaction",
              "Le volume est constant",
              "T est constante",
              "P est constante"
            ],
            correct: 0,
            explanation: "Pas d'interactions → pas d'énergie potentielle entre molécules → U indépendant de V."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "La chaleur molaire d'un gaz monoatomique parfait à P constante est C_p = ?",
            answers: [
              "5R/2",
              "3R/2",
              "7R/2",
              "R"
            ],
            correct: 0,
            explanation: "C_p = C_v + R = 3R/2 + R = 5R/2 (relation de Mayer)."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "Lors d'une transition de phase du 1er ordre, quelle grandeur est discontinue ?",
            answers: [
              "L'énergie interne U (ou l'entropie S)",
              "La pression P",
              "La température T",
              "Le potentiel chimique μ"
          ],
            correct: 0,
            explanation: "Transition 1er ordre : discontinuité de U et S (chaleur latente). La température et le potentiel chimique sont continus."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "Pour un oscillateur harmonique classique (1D), l'énergie moyenne est :",
            answers: [
              "k_BT (½k_BT cinétique + ½k_BT potentielle)",
              "½k_BT",
              "3k_BT/2",
              "2k_BT"
            ],
            correct: 0,
            explanation: "Équipartition : ½k_BT pour chaque terme quadratique → k_BT total pour un oscillateur harmonique."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "Dans la modélisation d'Einstein du solide (1907), les N atomes sont traités comme :",
            answers: [
              "3N oscillateurs harmoniques quantiques de même fréquence ω_E",
              "N particules libres",
              "Des gaz parfaits",
              "Des dipôles magnétiques"
            ],
            correct: 0,
            explanation: "Einstein : 3N oscillateurs quantiques → U = 3Nℏω/(exp(ℏω/k_BT)−1) → résout le problème à basse T."
          }
        ],
        // Niveau 6
        [
          {
            type: "mcq",
            visual: "🌡️",
            question: "Le modèle de Debye améliore celui d'Einstein en prenant en compte :",
            answers: [
              "Un spectre continu de fréquences phonons jusqu'à ω_D",
              "Les interactions électroniques",
              "Un oscillateur unique",
              "Les transitions quantiques électroniques"
            ],
            correct: 0,
            explanation: "Debye : distribution des phonons en ω² jusqu'à la fréquence de Debye → C_v ∝ T³ à basse T (loi de Debye)."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "La loi de Dulong-Petit (C_v=3R) est récupérée dans le modèle de Debye :",
            answers: [
              "À haute température (T ≫ T_D)",
              "À basse température",
              "À T = 0 K",
              "Seulement pour les métaux"
            ],
            correct: 0,
            explanation: "Pour T≫T_D, tous les modes sont excités classiquement → équipartition → C_v=3R."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "Pour un gaz d'électrons libres (Fermi), la chaleur spécifique électronique à basse T est :",
            answers: [
              "Proportionnelle à T (C_él ∝ γT)",
              "Constante",
              "Proportionnelle à T³",
              "Nulle"
            ],
            correct: 0,
            explanation: "Les électrons suivent la statistique de Fermi-Dirac → C_él = γT avec γ = π²Nk_B²/(2E_F)."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "La relation thermodynamique exacte pour (∂U/∂V)_T est :",
            answers: [
              "T(∂P/∂T)_V − P",
              "P",
              "T·S",
              "−P + T(∂S/∂V)_T"
            ],
            correct: 0,
            explanation: "Relation de Maxwell : (∂U/∂V)_T = T(∂P/∂T)_V − P. Pour un gaz parfait : nR/V × T − P = P − P = 0 ✓"
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "L'énergie interne d'un rayonnement de corps noir (photons) dans un volume V à T vaut :",
            answers: [
              "U = aVT⁴ (loi de Stefan-Boltzmann volumique)",
              "U = nRT",
              "U = 3nk_BT/2",
              "U = 0"
            ],
            correct: 0,
            explanation: "Pour le rayonnement électromagnétique : U = σ_V V T⁴ avec σ_V = 4σ/c (constante de Stefan)."
          },
          {
            type: "mcq",
            visual: "🌡️",
            question: "En mécanique quantique, pourquoi les modes de vibration sont-ils 'gelés' à basse T ?",
            answers: [
              "Car ℏω ≫ k_BT : l'énergie thermique est insuffisante pour exciter ces modes",
              "Car le volume est trop petit",
              "Car les interactions s'annulent",
              "Car P → 0"
            ],
            correct: 0,
            explanation: "Quantification : un mode de fréquence ω nécessite ℏω pour être excité. Si k_BT ≪ ℏω, le mode ne contribue pas à C_v → déviations du théorème classique d'équipartition."
          }
        ]
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // NOTION 3 — Premier principe
    // ─────────────────────────────────────────────────────────────────
    {
      id: "premier-principe",
      label: "1er principe",
      icon: "⚡",
      lesson: {
        formula: "ΔU = W + Q",
        text: "Le premier principe est la loi de conservation de l'énergie appliquée à la thermodynamique. L'énergie interne d'un système varie uniquement par échange de travail W et de chaleur Q avec le milieu extérieur.",
        example: "Un gaz reçoit Q=200 J de chaleur et le milieu extérieur effectue W=50 J sur lui. ΔU = 50+200 = 250 J."
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Le premier principe — conservation de l'énergie",
          text: "Le premier principe est la loi universelle de conservation de l'énergie appliquée à la thermodynamique : pour un système fermé, <strong>ΔU = W + Q</strong>. L'énergie interne ne peut varier que par deux canaux : le travail W (échanges mécaniques via le mouvement des parois) et la chaleur Q (échanges thermiques via les gradients de température). Aucune autre voie n'existe pour un système fermé."
        },
        {
          type: "formula",
          title: "🔑 ΔU = W + Q — la formule fondamentale",
          formula: "ΔU = W + Q",
          text: "<strong>Convention IUPAC (physico-chimie)</strong> — tout compté du point de vue du système :<br>• W > 0 : le système reçoit du travail (on le comprime)<br>• W < 0 : le système fournit du travail (il se dilate)<br>• Q > 0 : le système reçoit de la chaleur (on le chauffe)<br>• Q < 0 : le système cède de la chaleur (il se refroidit)<br>⚠️ Certains manuels utilisent ΔU = Q − W (convention W fourni) : vérifier la convention avant de calculer !"
        },
        {
          type: "formula",
          title: "🔑 Travail des forces de pression W = −P_ext ΔV",
          formula: "W = −P_ext ΔV = −P_ext (V_f − V_i)",
          text: "Quand un gaz change de volume contre une pression extérieure P_ext constante : W = −P_ext × ΔV. Mnémotechnique : le signe moins vient de la convention — si le gaz <strong>se dilate</strong> (ΔV > 0), il <strong>fournit</strong> du travail → W < 0. Si le gaz est <strong>comprimé</strong> (ΔV < 0), il <strong>reçoit</strong> du travail → W > 0."
        },
        {
          type: "graph",
          title: "📊 Convention des signes W et Q",
          svgContent: `<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <!-- Système central -->
  <rect x="145" y="55" width="130" height="90" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
  <text x="210" y="95" text-anchor="middle" font-size="14" fill="#15803d" font-weight="bold">SYSTÈME</text>
  <text x="210" y="113" text-anchor="middle" font-size="12" fill="#166534">ΔU = W + Q</text>
  <!-- W reçu (compression) -->
  <line x1="85" y1="100" x2="143" y2="100" stroke="#2563eb" stroke-width="3" marker-end="url(#bw2)"/>
  <text x="113" y="87" text-anchor="middle" font-size="11" fill="#2563eb" font-weight="bold">W &gt; 0</text>
  <text x="113" y="120" text-anchor="middle" font-size="9" fill="#2563eb">reçu (compression)</text>
  <!-- W fourni (détente) -->
  <line x1="277" y1="100" x2="335" y2="100" stroke="#9333ea" stroke-width="3" marker-end="url(#pw2)"/>
  <text x="306" y="87" text-anchor="middle" font-size="11" fill="#9333ea" font-weight="bold">W &lt; 0</text>
  <text x="306" y="120" text-anchor="middle" font-size="9" fill="#9333ea">fourni (détente)</text>
  <!-- Q reçu (chauffage) -->
  <line x1="210" y1="175" x2="210" y2="147" stroke="#dc2626" stroke-width="3" marker-end="url(#rq2)"/>
  <text x="255" y="172" text-anchor="middle" font-size="11" fill="#dc2626" font-weight="bold">Q &gt; 0</text>
  <text x="255" y="185" text-anchor="middle" font-size="9" fill="#dc2626">reçu (chauffage)</text>
  <!-- Q cédé (refroidissement) -->
  <line x1="210" y1="53" x2="210" y2="25" stroke="#0891b2" stroke-width="3" marker-end="url(#cq2)"/>
  <text x="255" y="43" text-anchor="middle" font-size="11" fill="#0891b2" font-weight="bold">Q &lt; 0</text>
  <text x="255" y="15" text-anchor="middle" font-size="9" fill="#0891b2">cédé (refroidissement)</text>
  <defs>
    <marker id="bw2" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#2563eb"/></marker>
    <marker id="pw2" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#9333ea"/></marker>
    <marker id="rq2" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#dc2626"/></marker>
    <marker id="cq2" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#0891b2"/></marker>
  </defs>
</svg>`,
          caption: "Tout positif = reçu par le système. Tout négatif = fourni par le système."
        },
        {
          type: "example",
          title: "✅ Exemple fil rouge — Application complète du 1er principe",
          text: "<strong>Situation</strong> : 2 mol de gaz parfait monoatomique (C_v = 3R/2) à T_i=300K est comprimé de manière isobare (P=2×10⁵ Pa) de V_i=25L à V_f=15L. Calculer W, Q et ΔT.<br><br><strong>Étape 1 — Travail :</strong> W = −P_ext ΔV = −2×10⁵ × (15−25)×10⁻³ = −2×10⁵ × (−10⁻²) = <strong>+2000 J</strong>.<br><br><strong>Étape 2 — ΔT via PV=nRT :</strong> ΔV = nRΔT/P → ΔT = PΔV/(nR) = 2×10⁵×(−10⁻²)/(2×8,314) = <strong>−120,2 K</strong>.<br><br><strong>Étape 3 — ΔU :</strong> ΔU = nC_vΔT = 2×12,47×(−120,2) ≈ <strong>−2997 J</strong>.<br><br><strong>Étape 4 — Q :</strong> Q = ΔU − W = −2997 − 2000 = <strong>−4997 J</strong> (le gaz cède de la chaleur)."
        },
        {
          type: "technique",
          title: "🛠️ Méthode systématique — 5 étapes",
          text: "1) <strong>Identifier le gaz</strong> (mono/di) et son état (T_i, P_i, V_i, n).<br>2) <strong>Calculer W</strong> : isochore → W=0 ; isobare → W=−PΔV ; adiabatique → Q=0.<br>3) <strong>Calculer ΔU</strong> = nC_vΔT (toujours valable pour gaz parfait).<br>4) <strong>Déduire Q</strong> = ΔU − W.<br>5) <strong>Vérifier le signe de Q</strong> : positif = chaleur reçue (chauffage), négatif = chaleur cédée."
        },
        {
          type: "definition",
          title: "📌 Cas particuliers selon le type de transformation",
          text: "• <strong>Isochore (V=const)</strong> : W=0 → ΔU = Q. Toute la chaleur reçue augmente U.<br>• <strong>Adiabatique (Q=0)</strong> : ΔU = W. Toute variation d'U vient du travail mécanique.<br>• <strong>Isotherme gaz parfait (ΔT=0)</strong> : ΔU=0 → W = −Q. Le travail est intégralement converti en chaleur (ou inversement).<br>• <strong>Cycle (retour état initial)</strong> : ΔU_cycle = 0 → W_net = −Q_net."
        },
        {
          type: "warning",
          title: "⚠️ Ce que le 1er principe ne dit PAS",
          text: "Le 1er principe dit que l'énergie se conserve, mais pas dans <strong>quel sens</strong> une transformation se déroule. Il est parfaitement compatible avec un café qui se refroidit ET avec un café qui se réchaufferait spontanément dans une pièce froide. La réalité interdit ce second cas — c'est le rôle du <strong>second principe</strong> (notion 8) de fixer le sens spontané des transformations."
        },
        {
          type: "demo",
          title: "🔬 Expérience de Joule (1843) — équivalent mécanique de la chaleur",
          text: "Joule a agité de l'eau avec des palettes actionnées par des masses en chute libre. Résultat expérimental : <strong>1 calorie = 4,186 J</strong>. Cela a définitivement prouvé que chaleur et travail sont deux formes d'échange d'énergie (et non deux substances différentes : finis le 'calorique' !). La même expérience montre que W = −PextΔV et Q partagent la même unité, le Joule."
        },
        {
          type: "formula",
          title: "🔑 Enthalpie H = U + PV",
          formula: "H = U + PV<br>Isobare : Q_p = ΔH = nC_pΔT  (gaz parfait)<br>ΔH = ΔU + nRΔT  (gaz parfait)",
          text: "L'enthalpie H est le potentiel thermodynamique adapté aux transformations isobares (les plus fréquentes en chimie, à pression atmosphérique). À P=const : Q_p = ΔH. Pour un gaz parfait : ΔH = ΔU + Δ(PV) = nC_vΔT + nRΔT = nC_pΔT. ΔH < 0 = réaction exothermique. ΔH > 0 = endothermique."
        },
        {
          type: "example",
          title: "✅ Exemple — Isobare : différence entre ΔU et ΔH",
          text: "3 mol de N₂ (di, C_v=5R/2, C_p=7R/2) chauffés à P=cst de 300K à 500K.<br>ΔU = nC_vΔT = 3×20,79×200 ≈ <strong>12 474 J</strong>.<br>W = −nRΔT = −3×8,314×200 ≈ <strong>−4988 J</strong> (gaz se dilate, fournit du travail).<br>Q = ΔU − W = 12 474 + 4988 ≈ <strong>17 462 J</strong>.<br>Vérification : ΔH = nC_pΔT = 3×29,1×200 ≈ 17 460 J ✓. La différence ΔH−ΔU = 4988 J est exactement le travail de dilatation."
        },
        {
          type: "definition",
          title: "📌 Effet Joule-Thomson : ΔH = 0",
          text: "Un gaz forcé à travers un étrangleur (vanne, milieu poreux) sans échange de chaleur ni travail utile : ΔH = 0. Pour un gaz parfait : H = nC_pT → ΔT = 0. Pour un gaz réel (interactions moléculaires), μ_JT = (∂T/∂P)_H ≠ 0 : quand P chute, T peut diminuer → refroidissement. <strong>Application</strong> : liquéfaction des gaz (azote liquide, réfrigérateurs)."
        },
        {
          type: "formula",
          title: "🔑 Enthalpie libre G = H − TS et énergie libre F = U − TS",
          formula: "G = H − TS  (critère : dG ≤ 0 à T,P=const)<br>ΔG = ΔH − TΔS",
          text: "G (Gibbs) est le potentiel thermodynamique des conditions habituelles en chimie (T,P=const). Processus spontané si dG < 0. Équilibre si dG = 0 → loi d'action des masses. ΔG = ΔH − TΔS : une réaction peut être spontanée si elle est exothermique (ΔH < 0) et/ou gagne de l'entropie (TΔS > 0). ΔG° = −RT ln K_eq."
        },
        {
          type: "formula",
          title: "🔑 Loi de Hess (thermochimie)",
          formula: "ΔH_réaction = Σ ΔH_f°(produits) − Σ ΔH_f°(réactifs)",
          text: "H est une fonction d'état → ΔH ne dépend pas du chemin réactionnel. On additionne des réactions élémentaires connues. ΔH_f° = enthalpie standard de formation (kJ/mol à 298K, 1 bar). Exemple : combustion CH₄ + 2O₂ → CO₂ + 2H₂O. ΔH = ΔH_f°(CO₂) + 2×ΔH_f°(H₂O) − ΔH_f°(CH₄) = −393,5 + 2×(−285,8) − (−74,8) = −890,3 kJ/mol."
        }

      ],
      levels: [
        // Niveau 1
        [
          {
            type: "mcq",
            visual: "⚡",
            question: "Le premier principe s'écrit :",
            answers: [
              "ΔU = W + Q",
              "ΔU = Q − W",
              "ΔU = W × Q",
              "ΔU = W / Q"
            ],
            correct: 0,
            explanation: "Convention IUPAC : ΔU = W + Q, W et Q comptés positivement quand reçus."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Q > 0 signifie que le système :",
            answers: [
              "Reçoit de la chaleur",
              "Perd de la chaleur",
              "Effectue un travail",
              "Se refroidit"
            ],
            correct: 0,
            explanation: "Par convention : Q > 0 = chaleur reçue par le système."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "W < 0 signifie que le système :",
            answers: [
              "Fournit du travail au milieu extérieur",
              "Reçoit du travail",
              "Ne change pas",
              "Perd de la chaleur"
            ],
            correct: 0,
            explanation: "W < 0 = travail fourni par le système (ex : détente du gaz)."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Un gaz reçoit Q=500 J et W=200 J. ΔU = ?",
            answers: [
              "700 J",
              "300 J",
              "−300 J",
              "100 J"
            ],
            correct: 0,
            explanation: "ΔU = W + Q = 200 + 500 = 700 J."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Pour un système adiabatique (Q=0) : ΔU = ?",
            answers: [
              "ΔU = W",
              "ΔU = Q",
              "ΔU = 0",
              "ΔU = −W"
            ],
            correct: 0,
            explanation: "Q=0 → ΔU = W + 0 = W."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Le 1er principe est une loi de :",
            answers: [
              "Conservation de l'énergie",
              "Augmentation de l'entropie",
              "Conservation de la masse",
              "Newton"
            ],
            correct: 0,
            explanation: "Le 1er principe = conservation de l'énergie appliquée à la thermodynamique."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Pour un système isolé (W=0, Q=0) : ΔU = ?",
            answers: [
              "0",
              "W",
              "Q",
              "Positive"
            ],
            correct: 0,
            explanation: "ΔU = W + Q = 0 + 0 = 0 : l'énergie interne est conservée."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Le travail W = −P_ext ΔV. Si ΔV < 0 (compression) :",
            answers: [
              "W > 0 (travail reçu)",
              "W < 0",
              "W = 0",
              "W dépend de Q"
            ],
            correct: 0,
            explanation: "W = −P_ext × (négatif) = positif : le milieu fournit du travail au gaz lors de la compression."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "ΔU = 0 implique :",
            answers: [
              "W + Q = 0 (ce que le système reçoit = ce qu'il cède)",
              "Q = 0",
              "W = 0",
              "T constante"
            ],
            correct: 0,
            explanation: "ΔU = 0 → W = −Q : toute chaleur reçue est convertie en travail fourni."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "ΔU = −300 J, W = 100 J. Quelle est la valeur de Q ?",
            answers: [
              "−400 J",
              "−200 J",
              "400 J",
              "200 J"
            ],
            correct: 0,
            explanation: "Q = ΔU − W = −300 − 100 = −400 J (le système a cédé 400 J de chaleur)."
          }
        ],
        // Niveau 2
        [
          {
            type: "mcq",
            visual: "⚡",
            question: "Un gaz est comprimé à P_ext=10⁵ Pa, ΔV=−2L. W=?",
            answers: [
              "200 J",
              "−200 J",
              "2000 J",
              "−2000 J"
            ],
            correct: 0,
            explanation: "W = −P_ext ΔV = −10⁵ × (−2×10⁻³) = 200 J."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Un gaz se dilate à P_ext=2×10⁵ Pa, ΔV=+5L. Quel est le signe de W ?",
            answers: [
              "W < 0 (le gaz fournit du travail)",
              "W > 0",
              "W = 0",
              "W dépend de T"
            ],
            correct: 0,
            explanation: "W = −2×10⁵ × 5×10⁻³ = −1000 J < 0 : le gaz fournit du travail au milieu."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Pour une transformation isochore (V=const) : W = ?",
            answers: [
              "0",
              "PΔV",
              "Q",
              "nC_vΔT"
            ],
            correct: 0,
            explanation: "ΔV = 0 → W = −P_extΔV = 0."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Lors d'une isochore : ΔU = ?",
            answers: [
              "Q",
              "W",
              "0",
              "Q + W"
            ],
            correct: 0,
            explanation: "W=0 pour une isochore → ΔU = W + Q = Q."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "P_ext = 3×10⁵ Pa, V_i=10L, V_f=7L. W = ?",
            answers: [
              "900 J",
              "−900 J",
              "300 J",
              "−300 J"
            ],
            correct: 0,
            explanation: "ΔV = −3×10⁻³ m³ ; W = −3×10⁵ × (−3×10⁻³) = 900 J."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "On a ΔU=600 J et Q=−200 J. W = ?",
            answers: [
              "800 J",
              "400 J",
              "−800 J",
              "200 J"
            ],
            correct: 0,
            explanation: "W = ΔU − Q = 600 − (−200) = 800 J."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Pour une transformation adiabatique, ΔU = W. Si W = −500 J (travail fourni), ΔT est :",
            answers: [
              "Négatif (le gaz se refroidit)",
              "Positif",
              "Nul",
              "Indéterminé"
            ],
            correct: 0,
            explanation: "ΔU = W = −500 J < 0 → nC_vΔT < 0 → ΔT < 0 : le gaz se refroidit."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Le premier principe est valable :",
            answers: [
              "Pour tout système fermé",
              "Seulement pour les gaz parfaits",
              "Seulement en transformation réversible",
              "Seulement à T constante"
            ],
            correct: 0,
            explanation: "Le 1er principe est universel : il s'applique à tout système fermé, quel que soit le chemin."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "L'équivalent mécanique de la chaleur (Joule) vaut :",
            answers: [
              "1 cal = 4,186 J",
              "1 cal = 1 J",
              "1 cal = 4186 kJ",
              "1 J = 4,186 cal"
            ],
            correct: 0,
            explanation: "1 calorie = 4,186 joules (déterminé expérimentalement par Joule en 1843)."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Lors d'une transformation isobare, le travail W = ?",
            answers: [
              "−P(V_f − V_i)",
              "0",
              "nC_vΔT",
              "Q"
            ],
            correct: 0,
            explanation: "P est constante : W = −PΔV = −P(V_f − V_i)."
          }
        ],
        // Niveau 3
        [
          {
            type: "mcq",
            visual: "⚡",
            question: "Un gaz parfait subit une compression isotherme. ΔU=0, W=500J. Q=?",
            answers: [
              "−500 J",
              "500 J",
              "0 J",
              "1000 J"
            ],
            correct: 0,
            explanation: "ΔU = 0 → Q = −W = −500 J : le gaz rejette 500 J de chaleur."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "3 mol de gaz parfait monoatomique, T passe de 300K à 400K, à P=10⁵ Pa. Calculer ΔU.",
            answers: [
              "≈ 3742 J",
              "≈ 6236 J",
              "≈ 2494 J",
              "≈ 1247 J"
            ],
            correct: 0,
            explanation: "ΔU = nC_vΔT = 3 × (3R/2) × 100 = 3 × 12,47 × 100 ≈ 3742 J."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Pour le même gaz (3 mol, mono, 300→400K, isobare P=10⁵ Pa), calculer W (utiliser PV=nRT pour ΔV).",
            answers: [
              "≈ −2494 J",
              "≈ +2494 J",
              "≈ −3742 J",
              "0"
            ],
            correct: 0,
            explanation: "ΔV = nRΔT/P = 3×8,314×100/10⁵ = 0,02494 m³ ; W = −PΔV = −10⁵ × 0,02494 ≈ −2494 J."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Suite : Q = ΔU − W = ?",
            answers: [
              "≈ 6236 J",
              "≈ 1248 J",
              "≈ 3742 J",
              "≈ 4989 J"
            ],
            correct: 0,
            explanation: "Q = ΔU − W = 3742 − (−2494) = 6236 J. (On retrouve Q = nC_pΔT = 3×5R/2×100 ≈ 6236 J.)"
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Pour une transformation adiabatique d'un gaz parfait : ΔT et W ont :",
            answers: [
              "Même signe (W>0 ↔ ΔT>0 : compression → chauffage)",
              "Signes opposés",
              "W = ΔT toujours",
              "Aucun lien"
            ],
            correct: 0,
            explanation: "Adiabatique : ΔU=W → nC_vΔT=W. Même signe : compression (W>0) → T monte."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Un cycle thermodynamique se termine à l'état initial. ΔU_cycle = ?",
            answers: [
              "0",
              "W_net",
              "Q_net",
              "Indéterminé"
            ],
            correct: 0,
            explanation: "U est une fonction d'état : en revenant à l'état initial, ΔU = 0."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Pour un cycle : ΔU=0 → W_net + Q_net = 0, donc :",
            answers: [
              "W_net = −Q_net (le travail net fourni = chaleur nette absorbée)",
              "W_net = Q_net",
              "W_net = 0",
              "Q_net = 0"
            ],
            correct: 0,
            explanation: "Pour un cycle moteur, le travail fourni par le gaz est égal à la chaleur nette absorbée."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Un système reçoit W=1000 J et cède Q=600 J. ΔU = ?",
            answers: [
              "400 J",
              "1600 J",
              "−1600 J",
              "−400 J"
            ],
            correct: 0,
            explanation: "Cède Q = −600 J : ΔU = W + Q = 1000 + (−600) = 400 J."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Lors d'une ébullition à P constante (eau → vapeur), W = −PΔV. ΔV est :",
            answers: [
              "Très grand positif (vapeur ~1700× plus volumineuse)",
              "Négatif",
              "Nul",
              "Négatif"
            ],
            correct: 0,
            explanation: "La vapeur occupe ~1700 fois le volume du liquide → ΔV ≫ 0 → W = −PΔV ≪ 0."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Une machine reçoit Q=1000 J et fournit |W|=400 J. ΔU = ?",
            answers: [
              "600 J",
              "1400 J",
              "−600 J",
              "400 J"
            ],
            correct: 0,
            explanation: "W fourni = −400 J reçu. ΔU = (−400) + 1000 = 600 J."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Le premier principe peut-il être violé (machine à énergie perpétuelle de 1ère espèce) ?",
            answers: [
              "Non, jamais observé expérimentalement",
              "Oui, dans certaines conditions quantiques",
              "Oui à très basse température",
              "Oui pour les gaz réels"
            ],
            correct: 0,
            explanation: "Le 1er principe n'a jamais été mis en défaut : aucune machine ne crée de l'énergie de rien."
          }
        ],
        // Niveau 4
        [
          {
            type: "mcq",
            visual: "⚡",
            question: "L'enthalpie H = U + PV. Pour une isobare : ΔH = ?",
            answers: [
              "Q_p (chaleur échangée à P constante)",
              "W",
              "ΔU",
              "0"
            ],
            correct: 0,
            explanation: "ΔH = ΔU + PΔV = (W + Q) + PΔV = (−PΔV) + Q + PΔV = Q. Donc ΔH = Q_p."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Pour un gaz parfait, ΔH = ?",
            answers: [
              "n C_p ΔT",
              "n C_v ΔT",
              "nRΔT",
              "PΔV"
            ],
            correct: 0,
            explanation: "ΔH = ΔU + Δ(PV) = nC_vΔT + nRΔT = n(C_v+R)ΔT = nC_pΔT."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "L'enthalpie est particulièrement utile en chimie car :",
            answers: [
              "Les réactions se font souvent à P=cst atmosphérique",
              "ΔH = ΔU toujours",
              "Elle ne dépend pas de T",
              "H = 0 pour les corps purs"
            ],
            correct: 0,
            explanation: "À pression atmosphérique constante, la chaleur de réaction = ΔH_r."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Un gaz parfait monoatomique (2 mol) subit une compression adiabatique : T passe de 300 K à 450 K. W = ?",
            answers: [
              "≈ 3742 J",
              "≈ 6236 J",
              "≈ −3742 J",
              "0"
            ],
            correct: 0,
            explanation: "Adiabatique : ΔU = W = nC_vΔT = 2 × 12,47 × 150 ≈ 3742 J."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Quelle est la différence entre Q et ΔU ?",
            answers: [
              "Q est un transfert (dépend du chemin), ΔU est une variation d'état (fonction d'état)",
              "Q = ΔU toujours",
              "ΔU dépend du chemin",
              "Q est une fonction d'état"
            ],
            correct: 0,
            explanation: "Q et W dépendent du chemin suivi (ce ne sont pas des fonctions d'état), mais leur somme ΔU est une fonction d'état."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Pour un gaz parfait en compression isotherme : ΔU=0. Alors W = ?",
            answers: [
              "W = −Q",
              "W = 0",
              "W = ΔU",
              "W = nC_pΔT"
            ],
            correct: 0,
            explanation: "ΔU = W + Q = 0 → W = −Q."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Lors d'une transformation isobare : ΔH = Q_p et ΔU = Q_p − PΔV. Quelle est la relation entre ΔH et ΔU ?",
            answers: [
              "ΔH = ΔU + PΔV",
              "ΔH = ΔU − PΔV",
              "ΔH = ΔU",
              "ΔH = ΔU × P"
            ],
            correct: 0,
            explanation: "Par définition de H = U + PV : ΔH = ΔU + Δ(PV) = ΔU + PΔV (P constante)."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "La chaleur de combustion du méthane est ΔH°_comb = −890 kJ/mol. Le signe négatif signifie :",
            answers: [
              "La réaction est exothermique (chaleur cédée au milieu)",
              "La réaction est endothermique",
              "ΔU = 0",
              "Aucun travail effectué"
            ],
            correct: 0,
            explanation: "ΔH < 0 → le système perd de l'enthalpie → cède de la chaleur au milieu extérieur (exothermique)."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Pour une isochore d'un gaz parfait : W=0, donc Q = ?",
            answers: [
              "Q = ΔU = nC_vΔT",
              "Q = nC_pΔT",
              "Q = 0",
              "Q = −ΔU"
            ],
            correct: 0,
            explanation: "W=0 → ΔU = Q = nC_vΔT."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "On mélange deux masses d'eau à T₁=20°C et T₂=80°C (masses égales). T_finale ≈ ?",
            answers: [
              "50°C (conservation de l'énergie)",
              "60°C",
              "80°C",
              "30°C"
            ],
            correct: 0,
            explanation: "Énergie conservée : m·c·(T_f−T₁) = −m·c·(T_f−T₂) → T_f = (T₁+T₂)/2 = 50°C."
          }
        ],
        // Niveau 5
        [
          {
            type: "mcq",
            visual: "⚡",
            question: "En forme différentielle, le 1er principe s'écrit dU = δQ + δW. Le symbole δ indique que :",
            answers: [
              "Q et W ne sont pas des fonctions d'état (pas de différentielle exacte)",
              "Leurs variations sont infinitésimales",
              "Ils dépendent de T",
              "Ils sont nuls en dehors de l'équilibre"
            ],
            correct: 0,
            explanation: "δ (vs d) signifie que Q et W dépendent du chemin : ce ne sont pas des différentielles exactes."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Pour un processus réversible : δW_rev = −PdV. Pour un processus irréversible à même ΔV : |W_irrev| < |W_rev| lors d'une détente. Pourquoi ?",
            answers: [
              "Car P_ext < P_gaz lors d'une détente irréversible",
              "Car Q=0",
              "Car ΔU=0",
              "Car P augmente"
            ],
            correct: 0,
            explanation: "En détente irréversible, le gaz pousse contre P_ext < P : moins de travail récupérable."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "L'énergie libre de Helmholtz est F = U − TS. À T et V constants : dF = ?",
            answers: [
              "δW_rev (travail maximum récupérable)",
              "δQ_rev",
              "dU",
              "−PdV"
            ],
            correct: 0,
            explanation: "À T,V constants : ΔF = W_rev = travail maximum que peut fournir le système."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "L'enthalpie libre G = H − TS. À T et P constants : dG = ?",
            answers: [
              "Travail autre que PdV (travail utile maximum)",
              "δQ_rev",
              "−PdV",
              "dU"
            ],
            correct: 0,
            explanation: "G est le potentiel de Gibbs : à T,P constants, −dG = travail utile maximum disponible."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Pour un gaz parfait subissant une détente de Joule-Thomson (ΔH=0) :",
            answers: [
              "T reste constante car H = U + PV = nC_pT (dépend seulement de T)",
              "T augmente",
              "T diminue",
              "ΔU = 0"
            ],
            correct: 0,
            explanation: "Pour un gaz parfait : H = nC_pT ne dépend que de T. ΔH=0 → ΔT=0."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Pour un gaz réel (μ_JT > 0), la détente de Joule-Thomson :",
            answers: [
              "Refroidit le gaz (T diminue)",
              "Réchauffe le gaz",
              "Conserve T",
              "Conserve U"
            ],
            correct: 0,
            explanation: "μ_JT = (∂T/∂P)_H > 0 : quand P diminue, T diminue → refroidissement (base des réfrigérateurs)."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Le travail de surface (tension de surface γ) s'ajoute au 1er principe comme :",
            answers: [
              "δW_surface = γ dA (A = aire de la surface)",
              "γ dV",
              "P dA",
              "−γ dV"
            ],
            correct: 0,
            explanation: "Pour les systèmes avec interfaces, le travail de création de surface γdA s'ajoute à −PdV."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "La loi de Hess (thermochimie) est une conséquence directe du fait que :",
            answers: [
              "ΔH est une fonction d'état (indépendant du chemin réactionnel)",
              "H = 0 pour les éléments",
              "Q dépend du chemin",
              "P est constant"
            ],
            correct: 0,
            explanation: "H est une fonction d'état → on peut additionner les ΔH de réactions élémentaires pour obtenir ΔH total."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Pour un système ouvert en régime stationnaire, le 1er principe généralisé inclut :",
            answers: [
              "Les termes d'enthalpie massique des flux entrants/sortants",
              "Uniquement Q et W",
              "Seulement ΔU",
              "L'entropie"
            ],
            correct: 0,
            explanation: "Pour un système ouvert : dU/dt = Q̇ + Ẇ + Σṁ_in·h_in − Σṁ_out·h_out (h = enthalpie spécifique)."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Le rendement d'une machine thermique est η = |W_net|/Q_chaud. Le 1er principe impose :",
            answers: [
              "η ≤ 1 (on ne peut pas fournir plus de travail que la chaleur absorbée)",
              "η ≥ 1",
              "η = 1 toujours",
              "η = 0 toujours"
            ],
            correct: 0,
            explanation: "Conservation de l'énergie : W_net = Q_chaud − Q_froid ≤ Q_chaud → η ≤ 1."
          }
        ],
        // Niveau 6
        [
          {
            type: "mcq",
            visual: "⚡",
            question: "Les relations de Maxwell sont dérivées des potentiels thermodynamiques. Laquelle vient de G=H−TS ?",
            answers: [
              "(∂S/∂P)_T = −(∂V/∂T)_P",
              "(∂S/∂V)_T = (∂P/∂T)_V",
              "(∂T/∂V)_S = −(∂P/∂S)_V",
              "(∂T/∂P)_S = (∂V/∂S)_P"
            ],
            correct: 0,
            explanation: "De dG = −SdT + VdP : (∂S/∂P)_T = −(∂²G/∂P∂T) = −(∂V/∂T)_P."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "L'énergie interne d'un rayonnement de corps noir suit U = aVT⁴. La pression de radiation est :",
            answers: [
              "P_rad = U/(3V) = aT⁴/3",
              "P_rad = U/V",
              "P_rad = aT⁴",
              "P_rad = 0"
            ],
            correct: 0,
            explanation: "Pour un gaz de photons : P = U/(3V) (analogue à la pression cinétique des gaz avec v=c)."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "En thermodynamique chimique, le potentiel chimique μ_i = (∂G/∂n_i)_T,P représente :",
            answers: [
              "L'énergie libre molaire partielle de l'espèce i",
              "La chaleur de formation",
              "Le travail d'expansion molaire",
              "La pression partielle"
            ],
            correct: 0,
            explanation: "μ_i est l'enthalpie libre molaire partielle : l'énergie requise pour ajouter une mole de i au système."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Pour un gaz parfait, μ(T,P) = μ°(T) + RT ln(P/P°). La condition d'équilibre chimique est :",
            answers: [
              "Σ ν_i μ_i = 0 (ν_i : coefficients stœchiométriques)",
              "ΔG = ΔH",
              "μ = 0",
              "ΔU = 0"
            ],
            correct: 0,
            explanation: "L'équilibre chimique correspond à dG = 0 → Σν_iμ_i = 0 → loi d'action des masses."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "La machine de Carnot (réversible) a le rendement maximal η_Carnot = 1 − T_f/T_c. Cela découle du :",
            answers: [
              "1er + 2e principe combinés",
              "1er principe seul",
              "2e principe seul",
              "Équation de Van der Waals"
            ],
            correct: 0,
            explanation: "η_Carnot combine conservation de l'énergie (1er) et maximum d'entropie (2e) pour un cycle réversible."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "En relativité restreinte, le 1er principe thermo doit être généralisé. L'énergie totale inclut :",
            answers: [
              "E = mc² + énergie thermique (masse inertielle dépend de T)",
              "Seulement mc²",
              "Aucun terme thermique",
              "E = kT seulement"
            ],
            correct: 0,
            explanation: "En relativité, l'énergie interne thermique contribue à la masse inertielle via E=mc²."
          }
        ]
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // NOTION 4 — Transformations thermodynamiques
    // ─────────────────────────────────────────────────────────────────
    {
      id: "transformations",
      label: "Transformations",
      icon: "🔄",
      lesson: {
        formula: "Iso: T, P, V const. | Adiab: Q=0",
        text: "Les transformations thermodynamiques se classifient selon la grandeur qui reste constante. Chaque type a des propriétés spécifiques qui simplifient les calculs.",
        example: "Isochore : ΔU = Q. Adiabatique : ΔU = W. Isotherme gaz parfait : ΔU = 0."
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Les 4 transformations de base",
          text: "Les transformations thermodynamiques se classifient selon la grandeur qui reste constante :<br>• <strong>Isotherme</strong> : T = cst (gaz en contact avec un thermostat)<br>• <strong>Isobare</strong> : P = cst (piston libre en contact avec l'atmosphère)<br>• <strong>Isochore</strong> : V = cst (récipient rigide)<br>• <strong>Adiabatique</strong> : Q = 0 (parois thermiquement isolantes)<br>Ces quatre cas idéaux couvrent la majorité des problèmes de thermodynamique."
        },
        {
          type: "formula",
          title: "🔑 Tableau récapitulatif des 4 transformations",
          formula: "Isotherme (GP) : ΔU=0, Q=−W=nRT ln(V_f/V_i)<br>Isobare : W=−PΔV=−nRΔT, Q=nC_pΔT<br>Isochore : W=0, ΔU=Q=nC_vΔT<br>Adiabatique : Q=0, ΔU=W=nC_vΔT",
          text: "Ces résultats combinent ΔU = W + Q avec les contraintes spécifiques. À retenir absolument : pour toutes ces transformations, ΔU = nC_vΔT reste valable pour un gaz parfait. Le tableau permet de retrouver immédiatement n'importe quelle grandeur."
        },
        {
          type: "example",
          title: "✅ Comparaison chiffrée des 4 transformations",
          text: "Pour <strong>1 mol de gaz monoatomique</strong> (C_v=3R/2, C_p=5R/2, γ=5/3) passant de T_i=300 K à T_f=400 K (ΔT=+100K) :<br>• <strong>Isochore</strong> : W=0, ΔU=Q = 1×12,47×100 = <strong>1247 J</strong>.<br>• <strong>Isobare</strong> : ΔU=1247J, W=−nRΔT=−831J, Q=nC_pΔT = <strong>2079 J</strong>.<br>• <strong>Adiabatique</strong> : Q=0, ΔU=W = <strong>1247 J</strong> (même ΔU !).<br>• <strong>Isotherme</strong> (ΔT=0) : ΔU=0, Q=−W (montant inconnu sans V_i et V_f)."
        },
        {
          type: "formula",
          title: "🔑 Travail isotherme réversible d'un gaz parfait",
          formula: "W_iso = −nRT ln(V_f/V_i) = nRT ln(V_i/V_f)",
          text: "Pour une isotherme réversible, P = nRT/V varie → on intègre : W = ∫−PdV = −nRT∫dV/V = −nRT ln(V_f/V_i). Intuition : en se dilatant (V_f > V_i), le gaz fournit du travail → W < 0. Si V_f > V_i : ln positif → W négatif ✓."
        },
        {
          type: "formula",
          title: "🔑 Loi de Laplace — adiabatique réversible",
          formula: "PV^γ = const  |  TV^(γ−1) = const  |  T^γ P^(1−γ) = const<br>γ = C_p/C_v  (5/3 mono, 7/5 = 1,4 di)",
          text: "Pour une adiabatique réversible d'un gaz parfait, la loi de Laplace PV^γ = const relie les variables d'état. γ est le coefficient adiabatique. À retenir : l'adiabatique est plus raide que l'isotherme dans le plan P-V (car γ > 1 = la pression chute plus vite)."
        },
        {
          type: "graph",
          title: "📊 Les 4 transformations dans le plan P-V",
          svgContent: `<svg viewBox="0 0 440 280" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <line x1="45" y1="240" x2="420" y2="240" stroke="#374151" stroke-width="2"/>
  <line x1="45" y1="240" x2="45" y2="20" stroke="#374151" stroke-width="2"/>
  <text x="428" y="244" font-size="13" fill="#374151" font-weight="bold">V</text>
  <text x="33" y="16" font-size="13" fill="#374151" font-weight="bold">P</text>
  <!-- Point A -->
  <circle cx="145" cy="65" r="5" fill="#374151"/>
  <text x="128" y="60" font-size="12" fill="#374151" font-weight="bold">A</text>
  <!-- Isochore (vertical, bleu) -->
  <line x1="145" y1="65" x2="145" y2="195" stroke="#2563eb" stroke-width="2.5"/>
  <text x="60" y="58" font-size="11" fill="#2563eb" font-weight="bold">Isochore</text>
  <text x="60" y="71" font-size="10" fill="#2563eb">V=cst, W=0</text>
  <!-- Point C (bas isochore) -->
  <circle cx="145" cy="195" r="4" fill="#2563eb"/>
  <!-- Isobare (horizontal, vert) -->
  <line x1="145" y1="195" x2="360" y2="195" stroke="#16a34a" stroke-width="2.5"/>
  <text x="355" y="215" font-size="11" fill="#16a34a" font-weight="bold">Isobare</text>
  <text x="340" y="228" font-size="10" fill="#16a34a">P=cst, W=−PΔV</text>
  <!-- Point B (droite isobare) -->
  <circle cx="360" cy="195" r="4" fill="#16a34a"/>
  <!-- Aire isobare (travail) -->
  <rect x="145" y="195" width="215" height="45" fill="#bbf7d0" opacity="0.4"/>
  <text x="252" y="226" text-anchor="middle" font-size="9" fill="#15803d">|W_isobare|</text>
  <!-- Isotherme (hyperbole, orange pointillé) -->
  <path d="M 145 65 C 185 90 245 125 295 158 S 345 188 360 195" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="8,3"/>
  <text x="270" y="115" font-size="11" fill="#d97706" font-weight="bold">Isotherme</text>
  <text x="263" y="128" font-size="9" fill="#d97706">PV=nRT=cst</text>
  <!-- Adiabatique (plus courbée, rouge pointillé) -->
  <path d="M 145 65 C 175 100 215 148 258 180 S 320 210 360 225" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4,4"/>
  <text x="300" y="250" font-size="11" fill="#dc2626" font-weight="bold">Adiabatique</text>
  <text x="295" y="263" font-size="9" fill="#dc2626">PV^γ=cst, Q=0</text>
  <!-- Légende slopes -->
  <text x="48" y="270" font-size="9" fill="#6b7280">Pente adiab = γ × pente isotherme (plus raide car γ &gt; 1)</text>
</svg>`,
          caption: "Les 4 transformations dans le plan P-V. L'adiabatique est toujours plus raide que l'isotherme."
        },
        {
          type: "technique",
          title: "🛠️ Reconnaître et traiter une transformation",
          text: "1) <strong>Identifier</strong> : T, P ou V constant ? Q=0 ?<br>2) <strong>Simplifications immédiates</strong> :<br>   • Isochore → W = 0 → ΔU = Q<br>   • Adiabatique → Q = 0 → ΔU = W<br>   • Isotherme gaz parfait → ΔU = 0<br>3) <strong>Calculer W</strong> : −PΔV (isobare) ou −nRT ln(V_f/V_i) (isotherme réversible).<br>4) <strong>Déduire Q</strong> = ΔU − W ou vérifier avec nC_pΔT (isobare)."
        },
        {
          type: "warning",
          title: "⚠️ Les 4 erreurs les plus fréquentes",
          text: "• <strong>Q=0 ≠ ΔU=0</strong> : dans une adiabatique, Q=0 mais ΔU = W ≠ 0 (T change !).<br>• <strong>ΔU=0 ≠ Q=0</strong> : isotherme gaz parfait → ΔU=0 mais Q = −W ≠ 0.<br>• <strong>W = −PΔV</strong> n'est valable que si P est constante. Pour une isotherme réversible, P varie → il faut intégrer.<br>• ΔU = nC_vΔT s'applique <strong>toujours</strong> pour un gaz parfait, même isobare !"
        },
        {
          type: "demo",
          title: "🔬 Démonstration : loi de Laplace TV^(γ-1) = const",
          text: "Partir de dU = δW (adiabatique) : nC_v dT = −P dV. Gaz parfait : P = nRT/V. Donc nC_v dT = −nRT/V × dV. Séparation des variables : dT/T = −(R/C_v) × dV/V. Intégration des deux membres : ln(T_f/T_i) = −(R/C_v) × ln(V_f/V_i). Exponentielle : T × V^(R/C_v) = const. Or R/C_v = γ−1. D'où <strong>TV^(γ-1) = const</strong> ✓."
        },
        {
          type: "formula",
          title: "🔑 Cycle de Carnot — le rendement maximum",
          formula: "η_Carnot = W_net/Q_c = 1 − T_f/T_c  (T en Kelvin)",
          text: "Le cycle de Carnot (2 isothermes + 2 adiabatiques réversibles) a le rendement maximal entre deux sources T_c (chaude) et T_f (froide). <strong>Théorème de Carnot</strong> : aucun cycle réel ne peut dépasser η_Carnot. Exemple : centrale thermique (T_c=600K, T_f=300K) → η_max = 50%. En pratique, les irréversibilités donnent η ≈ 30−40%."
        },
        {
          type: "example",
          title: "✅ Exemple — Calcul de rendement Carnot",
          text: "<strong>Centrale nucléaire :</strong> vapeur à T_c = 580K, condenseur à T_f = 300K.<br>η_Carnot = 1 − 300/580 ≈ <strong>48,3%</strong>.<br><br><strong>Moteur de voiture (Otto) :</strong> rapport volumétrique r=8, γ=1,4.<br>η_Otto = 1 − 8^(1−1,4) = 1 − 8^(−0,4) ≈ <strong>56,5%</strong> (théorique). En pratique : ≈ 25−35% à cause des pertes thermiques et frottements.<br><br><strong>Réfrigérateur :</strong> T_f=255K (−18°C), T_c=295K (22°C). COP_max = 255/(295−255) = <strong>6,4</strong> : pompe 6,4 J de froid pour 1 J d'électricité."
        },
        {
          type: "formula",
          title: "🔑 Cycles Otto, Brayton, Stirling et leurs rendements",
          formula: "η_Otto = 1 − r^(1−γ)  (r = V_max/V_min)<br>η_Brayton = 1 − r_p^((1−γ)/γ)  (r_p = P_max/P_min)",
          text: "• <strong>Otto</strong> (moteur essence) : 2 adiab + 2 isochores. Pour r=8, γ=1,4 : η ≈ 56,5%.<br>• <strong>Brayton</strong> (turbine à gaz, réacteur) : 2 adiab + 2 isobares. Pour r_p=10 : η ≈ 48%.<br>• <strong>Stirling</strong> : 2 isothermes + 2 isochores. Avec régénérateur parfait : η = η_Carnot !"
        },
        {
          type: "formula",
          title: "🔑 Réfrigérateur et Coefficient de Performance (COP)",
          formula: "COP_réfrig = Q_f/W = T_f/(T_c−T_f)  (Carnot inverse)<br>COP_PAC = Q_c/W = T_c/(T_c−T_f)<br>Conservation : Q_c = Q_f + W",
          text: "Un réfrigérateur est un moteur Carnot inversé. Le COP peut être bien supérieur à 1 : une pompe à chaleur peut pomper 5 kW de chaleur avec seulement 1 kW électrique (COP=5). Exemple : T_f=255K, T_c=300K → COP_réfrig = 255/45 ≈ 5,7."
        },
        {
          type: "formula",
          title: "🔑 Transformation polytropique PV^n = const",
          formula: "n=0 : isobare  |  n=1 : isotherme  |  n=γ : adiab  |  n=∞ : isochore<br>W = (P_f V_f − P_i V_i)/(1−n) = nR(T_f−T_i)/(1−n)  (n≠1)",
          text: "La polytropique généralise les 4 transformations. La chaleur molaire associée : C_n = C_v(γ−n)/(1−n). Pour n=γ : C_n=0 → Q=0 ✓. Pour n=0 : C_n=C_p ✓. Pour n=1 : W = −nRT ln(V_f/V_i) ✓."
        },
        {
          type: "formula",
          title: "🔑 Inégalité de Clausius et entropie créée",
          formula: "∮ δQ/T ≤ 0  (= 0 si cycle réversible)<br>ΔS = Q/T_ext + S_créée  avec S_créée ≥ 0",
          text: "La variation d'entropie = entropie échangée Q/T_ext ± entropie créée S_créée. S_créée ≥ 0 toujours (= 0 si réversible). Les irréversibilités (frottements, gradients de T, détentes libres) créent de l'entropie → S_créée > 0."
        },
        {
          type: "formula",
          title: "🔑 Relation fondamentale dU = TdS − PdV et critère dG ≤ 0",
          formula: "dU = T dS − P dV  (entre tous états d'équilibre)<br>T,P=const : dG = dH − TdS ≤ 0",
          text: "La relation fondamentale est valable entre tous états d'équilibre (fonctions d'état). À T,P=const : évolution spontanée si dG < 0, équilibre si dG = 0 (→ K_eq = exp(−ΔG°/RT)). ΔG = ΔH − TΔS : spontané si exothermique (ΔH<0) et/ou gain d'entropie (ΔS>0)."
        }

      ],
      levels: [
        // Niveau 1
        [
          {
            type: "mcq",
            visual: "🔄",
            question: "Transformation à T constante :",
            answers: [
              "Isotherme",
              "Isobare",
              "Isochore",
              "Adiabatique"
            ],
            correct: 0,
            explanation: "Iso-therme = même température."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Transformation à P constante :",
            answers: [
              "Isobare",
              "Isotherme",
              "Isochore",
              "Adiabatique"
            ],
            correct: 0,
            explanation: "Iso-bare = même pression."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Transformation à V constant :",
            answers: [
              "Isochore",
              "Isotherme",
              "Isobare",
              "Adiabatique"
            ],
            correct: 0,
            explanation: "Iso-chore = même volume (χωρος = espace en grec)."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Transformation sans échange de chaleur :",
            answers: [
              "Adiabatique",
              "Isochore",
              "Isotherme",
              "Isobare"
            ],
            correct: 0,
            explanation: "Adiabatique : Q = 0."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Pour une isochore : W = ?",
            answers: [
              "0",
              "PΔV",
              "Q",
              "nC_vΔT"
            ],
            correct: 0,
            explanation: "ΔV = 0 → W = −P_extΔV = 0."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Pour une adiabatique : Q = ?",
            answers: [
              "0",
              "ΔU",
              "W",
              "nC_vΔT"
            ],
            correct: 0,
            explanation: "Adiabatique = pas d'échange de chaleur : Q = 0 par définition."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Pour un gaz parfait isotherme : ΔU = ?",
            answers: [
              "0",
              "Q",
              "W",
              "nC_vΔT"
            ],
            correct: 0,
            explanation: "Isotherme → ΔT = 0 → ΔU = nC_vΔT = 0 (gaz parfait)."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Lors d'une isochore : ΔU = ?",
            answers: [
              "Q",
              "0",
              "W",
              "P·V"
            ],
            correct: 0,
            explanation: "W=0 → ΔU = W + Q = Q."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Lors d'une adiabatique : ΔU = ?",
            answers: [
              "W",
              "Q",
              "0",
              "P·ΔV"
            ],
            correct: 0,
            explanation: "Q=0 → ΔU = W + Q = W."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "γ = C_p / C_v pour un gaz monoatomique parfait vaut :",
            answers: [
              "5/3 ≈ 1,67",
              "7/5 = 1,4",
              "1",
              "2"
            ],
            correct: 0,
            explanation: "Mono : C_p=5R/2, C_v=3R/2 → γ = (5R/2)/(3R/2) = 5/3."
          }
        ],
        // Niveau 2
        [
          {
            type: "mcq",
            visual: "🔄",
            question: "Une casserole d'eau bout à pression atmosphérique. C'est une transformation :",
            answers: [
              "Isobare",
              "Isochore",
              "Adiabatique",
              "Isotherme"
            ],
            correct: 0,
            explanation: "À P atmosphérique constante → isobare."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Un gaz dans un récipient rigide est chauffé. C'est une transformation :",
            answers: [
              "Isochore",
              "Isobare",
              "Isotherme",
              "Adiabatique"
            ],
            correct: 0,
            explanation: "Récipient rigide → V = const → isochore."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Pour une adiabatique de gaz parfait, si le gaz est comprimé : T :",
            answers: [
              "Augmente",
              "Diminue",
              "Reste constante",
              "Devient nulle"
            ],
            correct: 0,
            explanation: "Compression adiabatique : W > 0 → ΔU > 0 → ΔT > 0 : chauffage."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "γ pour un gaz diatomique (T modérée) vaut :",
            answers: [
              "7/5 = 1,4",
              "5/3 ≈ 1,67",
              "1",
              "2"
            ],
            correct: 0,
            explanation: "Di : C_v=5R/2, C_p=7R/2 → γ = 7/5 = 1,4."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Pour une isobare : Q = ?",
            answers: [
              "nC_pΔT",
              "nC_vΔT",
              "0",
              "−PΔV"
            ],
            correct: 0,
            explanation: "Isobare : ΔH = Q_p = nC_pΔT."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "La loi de Laplace PV^γ = const s'applique à :",
            answers: [
              "Une adiabatique réversible de gaz parfait",
              "Toute transformation de gaz parfait",
              "Une isotherme de gaz parfait",
              "Tout système"
            ],
            correct: 0,
            explanation: "PV^γ=const caractérise spécifiquement l'adiabatique réversible de gaz parfait."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Pour une isotherme réversible de gaz parfait : W = ?",
            answers: [
              "−nRT ln(V_f/V_i)",
              "−PΔV",
              "0",
              "nC_vΔT"
            ],
            correct: 0,
            explanation: "W = −nRT ln(V_f/V_i) (intégration de −PdV = −nRTdV/V)."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Lors d'une détente adiabatique réversible d'un gaz parfait, T :",
            answers: [
              "Diminue",
              "Augmente",
              "Reste constante",
              "Devient nulle"
            ],
            correct: 0,
            explanation: "Détente : W < 0 → ΔU < 0 → ΔT < 0 : refroidissement."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Dans un diagramme P-V, l'aire sous la courbe représente :",
            answers: [
              "|W| (valeur absolue du travail de pression)",
              "Q",
              "ΔU",
              "ΔH"
            ],
            correct: 0,
            explanation: "W = ∫−PdV → |W| = aire sous la courbe P=f(V) entre V_i et V_f."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Pour une isochore : ΔU = Q = nC_vΔT. Si ΔU=500J et n=2 mol (mono) : ΔT = ?",
            answers: [
              "≈ 20 K",
              "≈ 10 K",
              "≈ 40 K",
              "≈ 5 K"
            ],
            correct: 0,
            explanation: "ΔT = ΔU/(nC_v) = 500/(2×12,47) ≈ 20 K."
          }
        ],
        // Niveau 3
        [
          {
            type: "mcq",
            visual: "🔄",
            question: "1 mol de gaz parfait diatomique, isotherme T=300K, V_i=10L, V_f=20L. W=?",
            answers: [
              "≈ −1729 J",
              "≈ +1729 J",
              "0",
              "≈ −831 J"
            ],
            correct: 0,
            explanation: "W = −nRT ln(V_f/V_i) = −1×8,314×300×ln(2) ≈ −1729 J."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Pour l'isotherme précédente : Q = ?",
            answers: [
              "≈ +1729 J",
              "≈ −1729 J",
              "0",
              "≈ +3742 J"
            ],
            correct: 0,
            explanation: "ΔU=0 → Q = −W ≈ +1729 J (le gaz absorbe de la chaleur en se dilatant)."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Lors d'une adiabatique, comparer la courbe P-V à l'isotherme passant par le même point : l'adiabatique est :",
            answers: [
              "Plus raide (pente plus négative)",
              "Moins raide",
              "Identique",
              "Horizontale"
            ],
            correct: 0,
            explanation: "PV^γ=const avec γ>1 donne une courbe plus courbée que PV=const (isotherme)."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Pour un cycle thermodynamique dans un diagramme P-V : W_cycle = ?",
            answers: [
              "Aire de la surface délimitée par le cycle (positif si parcouru dans le sens horaire)",
              "0",
              "ΔU_cycle",
              "Q_total"
            ],
            correct: 0,
            explanation: "Le travail net d'un cycle = aire enfermée. Sens direct (horaire) = travail positif fourni au milieu."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Pour une adiabatique réversible : T_i V_i^(γ-1) = T_f V_f^(γ-1). Si V double (γ=5/3) : T_f/T_i = ?",
            answers: [
              "2^(−2/3) ≈ 0,63",
              "2^(2/3) ≈ 1,59",
              "1/2",
              "2"
            ],
            correct: 0,
            explanation: "T_f = T_i (V_i/V_f)^(γ-1) = T_i × (1/2)^(2/3) ≈ 0,63 T_i : refroidissement."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Pour une isobare, W = −PΔV = −nRΔT. Q = nC_pΔT. Donc Q/W = ?",
            answers: [
              "−C_p/R = −γ/(γ−1)",
              "−C_v/R",
              "γ",
              "1"
            ],
            correct: 0,
            explanation: "Q/W = nC_pΔT / (−nRΔT) = −C_p/R. Et C_p/R = C_p/(C_p−C_v) = γ/(γ−1)."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Un gaz subit un cycle ABCDA avec AB isotherme, BC isochore, CD isobare, DA adiabatique. L'ordre des transformations le plus courant dans un moteur est :",
            answers: [
              "Admission → compression → combustion → détente → échappement",
              "Détente → compression → admission → combustion",
              "Isotherme → adiabatique seules",
              "Isobare → isochore seules"
            ],
            correct: 0,
            explanation: "Un moteur à combustion interne suit un cycle de transformations enchaînées."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Quelle transformation d'un gaz parfait absorbe le plus de chaleur à ΔT égal : isochore ou isobare ?",
            answers: [
              "Isobare (Q = nC_pΔT > nC_vΔT)",
              "Isochore",
              "Égaux",
              "Cela dépend de P"
            ],
            correct: 0,
            explanation: "C_p > C_v (relation de Mayer) → isobare absorbe plus de chaleur pour le même ΔT."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Si P_i = 2×10⁵ Pa, V_i = 5L, P_f·V_f^γ = P_i·V_i^γ (adiabatique réversible, γ=5/3) et V_f=10L : P_f = ?",
            answers: [
              "≈ 6,3×10⁴ Pa",
              "≈ 10⁵ Pa",
              "≈ 4×10⁵ Pa",
              "≈ 2×10⁵ Pa"
            ],
            correct: 0,
            explanation: "P_f = P_i(V_i/V_f)^γ = 2×10⁵ × (1/2)^(5/3) ≈ 2×10⁵ × 0,315 ≈ 6,3×10⁴ Pa."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Lors d'une isotherme d'un gaz parfait, si V triple : P est :",
            answers: [
              "Divisée par 3 (Boyle-Mariotte)",
              "Multipliée par 3",
              "Constante",
              "Nulle"
            ],
            correct: 0,
            explanation: "Isotherme gaz parfait : PV=cst → si V×3, alors P÷3."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Calculer W_isochore, W_isobare, W_isotherme entre les mêmes états (V_i=5L, V_f=10L, P=10⁵ Pa, T=300K). Lequel est le plus grand ?",
            answers: [
              "W_isobare (= −PΔV = −500J) < W_isotherme (= −nRT ln2 ≈ −347J) < W_isochore (=0)",
              "W_isochore",
              "W_isotherme",
              "Tous égaux"
            ],
            correct: 0,
            explanation: "L'isochore ne fait aucun travail. L'isobare fournit plus de travail que l'isotherme car P reste plus haute."
          }
        ],
        // Niveau 4
        [
          {
            type: "mcq",
            visual: "🔄",
            question: "Le cycle de Carnot se compose de :",
            answers: [
              "2 isothermes + 2 adiabatiques réversibles",
              "2 isobares + 2 isochores",
              "4 isothermes",
              "2 isobares + 2 adiabatiques"
            ],
            correct: 0,
            explanation: "Le cycle de Carnot : isotherme à T_c (absorption Q_c) + adiabatique + isotherme à T_f (rejet Q_f) + adiabatique."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Pour le cycle de Carnot d'un gaz parfait, le rendement η = ?",
            answers: [
              "1 − T_f/T_c",
              "T_f/T_c",
              "1 − Q_f/Q_c",
              "W_net/Q_total"
            ],
            correct: 0,
            explanation: "η_Carnot = 1 − T_f/T_c (T en Kelvin). C'est le rendement maximal possible."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Un cycle de Carnot fonctionne entre 500K et 300K. η = ?",
            answers: [
              "40%",
              "60%",
              "67%",
              "33%"
            ],
            correct: 0,
            explanation: "η = 1 − 300/500 = 1 − 0,6 = 0,4 = 40%."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Le cycle de Stirling (2 isothermes + 2 isochores) est un cycle :",
            answers: [
              "Réversible si régénératif (η = η_Carnot)",
              "Moins efficace que Carnot",
              "Irréversible toujours",
              "Sans échange thermique"
            ],
            correct: 0,
            explanation: "Avec régénérateur parfait, le cycle de Stirling récupère toute la chaleur isochore → même rendement que Carnot."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Le cycle Otto (moteur essence) comprend :",
            answers: [
              "2 adiabatiques + 2 isochores",
              "2 adiabatiques + 2 isobares",
              "2 isothermes + 2 isochores",
              "4 adiabatiques"
            ],
            correct: 0,
            explanation: "Cycle Otto : compression adiabatique → combustion isochore → détente adiabatique → refroidissement isochore."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Dans le cycle Otto, le rendement est η_Otto = 1 − r^(1−γ) où r est le rapport volumétrique de compression. Si r=8, γ=1,4 : η ≈ ?",
            answers: [
              "≈ 56,5%",
              "≈ 40%",
              "≈ 70%",
              "≈ 25%"
            ],
            correct: 0,
            explanation: "η = 1 − 8^(1−1,4) = 1 − 8^(−0,4) = 1 − 1/8^0,4 ≈ 1 − 0,435 ≈ 56,5%."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "La transformation quasi-statique est :",
            answers: [
              "Une suite d'états d'équilibre infiniment proches → réversible",
              "Une transformation très rapide",
              "Synonyme d'adiabatique",
              "Une transformation irréversible"
            ],
            correct: 0,
            explanation: "Quasi-statique = infiniment lente → réversible. En pratique, c'est une idéalisation."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Lors d'une compression adiabatique irréversible à P_ext = P_f : W_irrev vs W_rev (même ΔV) ?",
            answers: [
              "|W_irrev| > |W_rev| (plus de travail fourni)",
              "|W_irrev| < |W_rev|",
              "|W_irrev| = |W_rev|",
              "Dépend de γ"
            ],
            correct: 0,
            explanation: "En compression irréversible, P_ext = P_f > P instantanée → plus de travail à fournir que pour une réversible."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Pour une détente adiabatique irréversible (dans le vide, P_ext=0) : W = ?",
            answers: [
              "0 (donc ΔU=0 et ΔT=0 pour gaz parfait)",
              "−nRT ln(V_f/V_i)",
              "nC_vΔT",
              "ΔU"
            ],
            correct: 0,
            explanation: "Détente dans le vide (P_ext=0) : W = −P_ext·ΔV = 0. Pour gaz parfait : ΔU=W=0 → ΔT=0 (expérience de Joule)."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Pour une adiabatique réversible : PV^γ = const. Calculer T_f si T_i=300K, V_i=1L, V_f=8L, γ=5/3.",
            answers: [
              "≈ 75 K",
              "≈ 150 K",
              "≈ 600 K",
              "≈ 300 K"
            ],
            correct: 0,
            explanation: "TV^(γ-1)=const → T_f = 300×(1/8)^(2/3) = 300×(1/4) = 75 K."
          }
        ],
        // Niveau 5
        [
          {
            type: "mcq",
            visual: "🔄",
            question: "Le cycle de Brayton (turbine à gaz) comprend :",
            answers: [
              "2 isobares + 2 adiabatiques",
              "2 isothermes + 2 adiabatiques",
              "2 isochores + 2 adiabatiques",
              "4 isobares"
            ],
            correct: 0,
            explanation: "Brayton : compression adiabatique → combustion isobare → détente adiabatique → refroidissement isobare."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Pour le cycle de Brayton, η = 1 − r_p^((1−γ)/γ) où r_p est le rapport de pression. Si r_p=10, γ=1,4 : η ≈ ?",
            answers: [
              "≈ 48%",
              "≈ 60%",
              "≈ 30%",
              "≈ 70%"
            ],
            correct: 0,
            explanation: "η = 1 − 10^(−0,4/1,4) = 1 − 10^(−0,286) ≈ 1 − 0,518 ≈ 48%."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "L'entropie S créée lors d'une transformation irréversible est :",
            answers: [
              "S_créée > 0 (toujours)",
              "S_créée < 0",
              "S_créée = 0",
              "Indépendante de la température"
            ],
            correct: 0,
            explanation: "Second principe : S_créée ≥ 0, égal à 0 uniquement pour une transformation réversible."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Pour une adiabatique irréversible : ΔS = ?",
            answers: [
              "> 0 (production d'entropie)",
              "= 0",
              "< 0",
              "= Q/T"
            ],
            correct: 0,
            explanation: "Adiabatique irréversible : Q=0 mais S_créée > 0 → ΔS > 0."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Une transformation polytropique suit PV^n = const. Quel n correspond à l'isotherme d'un gaz parfait ?",
            answers: [
              "n = 1",
              "n = 0",
              "n = γ",
              "n = ∞"
            ],
            correct: 0,
            explanation: "Isotherme : PV=cst (n=1). Adiabatique : n=γ. Isobare : n=0. Isochore : n=∞."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Pour une transformation polytropique PV^n=const : C_poly = C_v(γ−n)/(1−n). Pour n=γ (adiabatique), C_poly = ?",
            answers: [
              "0 (cohérent : Q=0 donc dQ=C_poly·dT=0)",
              "∞",
              "C_v",
              "C_p"
            ],
            correct: 0,
            explanation: "C_poly(n=γ) = C_v(γ−γ)/(1−γ) = 0 : aucune chaleur échangée, cohérent avec adiabatique."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Le travail d'une transformation polytropique (PV^n=const, n≠1) est W = ?",
            answers: [
              "(P_f V_f − P_i V_i) / (1−n) = nR(T_f−T_i)/(1−n)",
              "−PΔV",
              "−nRT ln(V_f/V_i)",
              "0"
            ],
            correct: 0,
            explanation: "W = ∫−PdV = ∫−(P_i V_i^n / V^n)dV → intégration → (P_f V_f − P_i V_i)/(1−n)."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Dans le cycle de Carnot réversible, l'entropie du système :",
            answers: [
              "Revient à sa valeur initiale (ΔS_cycle = 0)",
              "Augmente",
              "Diminue",
              "Dépend de γ"
          ],
            correct: 0,
            explanation: "Cycle réversible : ΔS = 0 pour chaque transformation réversible → ΔS_cycle = 0."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Un réfrigérateur est un cycle de Carnot inversé. Il absorbe Q_f au froid et reçoit W. Son COP (coefficient de performance) est :",
            answers: [
              "COP = Q_f / W = T_f / (T_c − T_f)",
              "COP = W / Q_f",
              "COP = η_Carnot",
              "COP = 1 − T_f/T_c"
            ],
            correct: 0,
            explanation: "COP_réfrig = Q_f / W. Pour Carnot inverse : Q_f/W = T_f/(T_c−T_f)."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Quelle relation donne la pente d'une adiabatique dans le plan lnP vs lnV ?",
            answers: [
              "Pente = −γ",
              "Pente = −1",
              "Pente = γ",
              "Pente = 0"
            ],
            correct: 0,
            explanation: "lnP + γlnV = const → d(lnP)/d(lnV) = −γ."
          }
        ],
        // Niveau 6
        [
          {
            type: "mcq",
            visual: "🔄",
            question: "L'inégalité de Clausius ∮ δQ/T ≤ 0 est vérifiée avec l'égalité uniquement pour :",
            answers: [
              "Un cycle réversible",
              "Tout cycle",
              "Un cycle adiabatique",
              "Le cycle d'Otto"
            ],
            correct: 0,
            explanation: "∮δQ/T = 0 uniquement si chaque transformation est réversible → cycle réversible."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Le théorème de Carnot énonce que parmi tous les cycles opérant entre T_c et T_f :",
            answers: [
              "Le cycle réversible (Carnot) a le rendement maximum η = 1 − T_f/T_c",
              "Tous les cycles ont le même rendement",
              "Les cycles irréversibles ont le meilleur rendement",
              "Le cycle Otto est optimal"
            ],
            correct: 0,
            explanation: "Théorème de Carnot (conséquence du 2e principe) : η_irrev < η_rev = η_Carnot."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "La relation de Gibbs dU = T dS − P dV est valable :",
            answers: [
              "Pour tout état d'équilibre (pas seulement les transformations réversibles)",
              "Seulement pour les transformations réversibles",
              "Seulement pour les gaz parfaits",
              "Seulement à P=const"
            ],
            correct: 0,
            explanation: "Bien que dérivée de transformations réversibles, dU=TdS−PdV est une relation entre fonctions d'état → valable entre tous états d'équilibre."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Le critère d'évolution spontanée à T et P constants est :",
            answers: [
              "dG ≤ 0 (G diminue spontanément)",
              "dG ≥ 0",
              "dU ≤ 0",
              "dS ≤ 0"
          ],
            correct: 0,
            explanation: "À T,P=const : une transformation est spontanée si dG < 0, à l'équilibre si dG = 0."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "Pour un gaz de Van der Waals en adiabatique réversible, PV^γ = const est-elle encore valable ?",
            answers: [
              "Non, la relation est modifiée par les termes a et b",
              "Oui, exactement",
              "Oui si P est élevée",
              "Oui si T est élevée"
            ],
            correct: 0,
            explanation: "Pour Van der Waals, les capacités thermiques sont différentes et dépendent de V → la relation adiabatique est plus complexe."
          },
          {
            type: "mcq",
            visual: "🔄",
            question: "La longueur de Debye-Hückel en électrolytes est reliée à la thermodynamique statistique. Dans quel contexte utilise-t-on des cycles thermodynamiques pour les systèmes électrochimiques ?",
            answers: [
              "L'équation de Nernst : ΔG = −nFE (lien entre potentiel électrique et énergie libre)",
              "La loi d'Ohm",
              "Les cycles de Carnot uniquement",
              "La loi de Faraday sur l'induction"
            ],
            correct: 0,
            explanation: "En électrochimie : ΔG = −nFE lie l'enthalpie libre à la f.e.m. E. Thermodynamique → potentiel électrochimique."
          }
        ]
      ],
    },

    // ─────────────────────────────────────────────────────────────────
    // NOTION 5 — Travail et chaleur
    // ─────────────────────────────────────────────────────────────────
    {
      id: "travail-chaleur",
      label: "Travail et chaleur",
      icon: "💨",
      lesson: {
        formula: "W = −∫P dV   |   Q = m c ΔT",
        text: "Le travail W et la chaleur Q sont les deux modes de transfert d'énergie entre un système et son milieu extérieur. W est lié au mouvement des frontières (forces de pression), Q est lié à un gradient de température.",
        example: "1 kg d'eau chauffé de 20°C à 100°C : Q = 1 × 4186 × 80 ≈ 334 880 J ≈ 335 kJ."
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Travail W et chaleur Q — les deux transferts d'énergie",
          text: "W et Q sont les <strong>deux seules façons</strong> pour un système fermé d'échanger de l'énergie avec le milieu extérieur. Ce ne sont pas des formes d'énergie stockées dans le système — ce sont des <strong>processus de transfert</strong>. On ne peut pas dire 'le gaz contient de la chaleur' : on dit 'le gaz a reçu une chaleur Q'."
        },
        {
          type: "formula",
          title: "🔑 Travail W = −∫P dV",
          formula: "W = −∫P dV  (général)<br>Isobare : W = −PΔV<br>Isotherme réversible : W = −nRT ln(V_f/V_i)<br>Irréversible (P_ext=cst) : W = −P_ext ΔV",
          text: "Le travail est lié au mouvement de la frontière (piston). Mnémotechnique du signe : <strong>compression</strong> (ΔV < 0) → W > 0 (reçu). <strong>Détente</strong> (ΔV > 0) → W < 0 (fourni). La formule intégrale W = −∫PdV suppose que P est celle du système (réversible). Pour un processus irréversible, utiliser P_ext."
        },
        {
          type: "graph",
          title: "📊 Signe de W : compression vs détente",
          svgContent: `<svg viewBox="0 0 440 190" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <!-- Compression -->
  <rect x="15" y="45" width="150" height="90" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <rect x="140" y="55" width="18" height="70" rx="4" fill="#1d4ed8"/>
  <!-- Flèche compression -->
  <line x1="165" y1="90" x2="185" y2="90" stroke="#dc2626" stroke-width="3" marker-end="url(#rc)"/>
  <text x="175" y="79" text-anchor="middle" font-size="10" fill="#dc2626" font-weight="bold">F</text>
  <text x="80" y="82" text-anchor="middle" font-size="14" fill="#1e40af" font-weight="bold">GAZ</text>
  <text x="80" y="98" text-anchor="middle" font-size="11" fill="#2563eb">ΔV &lt; 0</text>
  <text x="80" y="155" text-anchor="middle" font-size="12" fill="#2563eb" font-weight="bold">Compression</text>
  <text x="80" y="172" text-anchor="middle" font-size="13" fill="#16a34a" font-weight="bold">W &gt; 0 ✓</text>
  <!-- Détente -->
  <rect x="270" y="45" width="150" height="90" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <rect x="278" y="55" width="18" height="70" rx="4" fill="#15803d"/>
  <!-- Flèche détente -->
  <line x1="258" y1="90" x2="240" y2="90" stroke="#2563eb" stroke-width="3" marker-end="url(#lc)"/>
  <text x="249" y="79" text-anchor="middle" font-size="10" fill="#2563eb" font-weight="bold">F</text>
  <text x="360" y="82" text-anchor="middle" font-size="14" fill="#15803d" font-weight="bold">GAZ</text>
  <text x="360" y="98" text-anchor="middle" font-size="11" fill="#16a34a">ΔV &gt; 0</text>
  <text x="360" y="155" text-anchor="middle" font-size="12" fill="#16a34a" font-weight="bold">Détente</text>
  <text x="360" y="172" text-anchor="middle" font-size="13" fill="#dc2626" font-weight="bold">W &lt; 0</text>
  <text x="220" y="20" text-anchor="middle" font-size="12" fill="#6b7280">W = −P_ext ΔV  (positif si reçu par le système)</text>
  <defs>
    <marker id="rc" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#dc2626"/></marker>
    <marker id="lc" markerWidth="7" markerHeight="7" refX="1" refY="3.5" orient="auto"><path d="M7,0 L0,3.5 L7,7 Z" fill="#2563eb"/></marker>
  </defs>
</svg>`,
          caption: "W > 0 si compression (reçu), W < 0 si détente (fourni)."
        },
        {
          type: "formula",
          title: "🔑 Chaleur Q = m c ΔT",
          formula: "Q = m c ΔT  (solide/liquide)<br>Q = n C_v ΔT  (isochore, gaz parfait)<br>Q = n C_p ΔT  (isobare, gaz parfait)<br>Q = m L  (changement de phase)",
          text: "La chaleur est le transfert d'énergie dû à une différence de température. Elle passe spontanément du chaud vers le froid. Q > 0 : le système reçoit de la chaleur. Q < 0 : il en cède. Pour un changement de phase (fusion, vaporisation) : T constante mais Q = m×L (chaleur latente)."
        },
        {
          type: "example",
          title: "✅ Tableau des chaleurs massiques c",
          text: "Valeurs courantes (J·kg⁻¹·K⁻¹) :<br>• Eau liquide : <strong>4186</strong> (record parmi les liquides courants)<br>• Vapeur d'eau : 2010<br>• Glace : 2090<br>• Aluminium : 900<br>• Fer/acier : 450<br>• Cuivre : 385<br>• Plomb : 128<br><br><strong>Application</strong> : pourquoi la casserole en cuivre chauffe-t-elle plus vite que l'eau ? Parce que c_cuivre (385) ≪ c_eau (4186) → pour le même apport de chaleur, le cuivre monte bien plus vite en température."
        },
        {
          type: "demo",
          title: "🔬 W et Q dépendent du chemin — même états A et B, résultats différents",
          text: "Allons de A (P=2×10⁵Pa, V=5L, T=300K) à B (P=1×10⁵Pa, V=10L, T=300K) pour 1 mol de gaz parfait.<br><strong>Chemin 1 — isotherme réversible :</strong> W₁ = −nRT ln(2) ≈ −1729 J. Q₁ = +1729 J.<br><strong>Chemin 2 — isobare P=10⁵Pa puis isochore :</strong> W₂ = −10⁵×5×10⁻³ = −500 J. ΔU=0 → Q₂ = +500 J.<br>Dans les deux cas : ΔU = 0 (même A et B, T identiques). Mais W₁ ≠ W₂ et Q₁ ≠ Q₂ → W et Q dépendent du chemin !"
        },
        {
          type: "warning",
          title: "⚠️ Pièges avec W et Q",
          text: "• W = −PΔV seulement si P est <strong>constante</strong>. Pour une isotherme réversible : P varie, il faut intégrer.<br>• La chaleur latente s'applique pendant un changement de phase : <strong>T ne change pas</strong> mais Q = mL ≠ 0.<br>• Ne pas confondre chaleur massique c (J·kg⁻¹·K⁻¹) et chaleur molaire C (J·mol⁻¹·K⁻¹) : C = c × M (M = masse molaire).<br>• W et Q sont des transferts dépendant du chemin. Seul ΔU = W + Q est une <strong>fonction d'état</strong>."
        },
        {
          type: "formula",
          title: "🔑 Trois modes de transfert thermique",
          formula: "Conduction (Fourier) : j_Q = −λ∇T  (λ en W·m⁻¹·K⁻¹)<br>Convection : P = h S ΔT  (h en W·m⁻²·K⁻¹)<br>Rayonnement (Stefan) : P = ε σ S T⁴  (σ = 5,67×10⁻⁸ W·m⁻²·K⁻⁴)",
          text: "La chaleur se propage par trois mécanismes :<br>• <strong>Conduction</strong> : par contact, sans mouvement de matière. Loi de Fourier.<br>• <strong>Convection</strong> : par mouvement du fluide (naturelle ou forcée).<br>• <strong>Rayonnement</strong> : par ondes électromagnétiques, sans milieu. Loi de Stefan-Boltzmann.<br>Ces mécanismes peuvent se combiner : une paroi subit de la conduction + du rayonnement."
        },
        {
          type: "example",
          title: "✅ Exemple — Rayonnement d'un corps humain",
          text: "Le corps humain (T≈310K, surface≈1,7m², ε≈0,98) rayonne :<br>P = ε σ S T⁴ = 0,98 × 5,67×10⁻⁸ × 1,7 × 310⁴ ≈ <strong>559 W</strong>.<br>Dans une pièce à 20°C (293K) : puissance nette émise = εσS(T⁴−T_pièce⁴) ≈ 559 − 497 = <strong>62 W</strong>.<br>C'est la raison pour laquelle une pièce surpeuplée se réchauffe vite : chaque personne est comme un radiateur de 70-80 W (rayonnement + convection + conduction)."
        },
        {
          type: "formula",
          title: "🔑 Résistance thermique R_th et puissance thermique",
          formula: "R_th = e/(λS)  (paroi plane)  |  P_th = ΔT/R_th<br>Analogie : ΔT ↔ ΔV, P_th ↔ I, R_th ↔ R",
          text: "La résistance thermique R_th (K/W) quantifie l'isolement d'une paroi. Parois en série : R_tot = ΣR_i. <strong>Analogie électrique</strong> : ΔT = R_th × P_th (comme ΔV = R × I). Un mur bien isolé a une grande R_th → faible perte de chaleur."
        },
        {
          type: "formula",
          title: "🔑 Calorimétrie — température finale d'un mélange",
          formula: "Σ m_i c_i (T_f − T_i) = 0  (calorimètre isolé)<br>T_f = Σ(m_i c_i T_i) / Σ(m_i c_i)",
          text: "Dans un calorimètre parfait (isolé) : énergie perdue par les corps chauds = énergie gagnée par les corps froids. T_f est la moyenne pondérée par les capacités thermiques. <strong>Exemple</strong> : 0,5 kg d'eau à 80°C mélangé à 1 kg d'eau à 20°C. T_f = (0,5×4186×80 + 1×4186×20)/(0,5×4186 + 1×4186) = (167440+83720)/(2093+4186) = 251160/6279 ≈ <strong>40°C</strong>."
        }

      ],
      levels: [
        // Niveau 1
        [
          {
            type: "mcq",
            visual: "💨",
            question: "Lors d'une dilatation du gaz (ΔV > 0), le travail W est :",
            answers: ["W < 0 (le gaz fournit du travail)", "W > 0", "W = 0", "W dépend de T"],
            correct: 0,
            explanation: "W = −∫P dV. ΔV > 0 → W < 0 : le gaz fournit du travail au milieu."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Lors d'une compression du gaz (ΔV < 0), W est :",
            answers: ["W > 0 (le milieu fournit du travail au gaz)", "W < 0", "W = 0", "W = P"],
            correct: 0,
            explanation: "W = −P·(ΔV<0) > 0 : travail reçu par le gaz."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "La formule de la chaleur pour un corps de masse m est :",
            answers: ["Q = m c ΔT", "Q = n R T", "Q = P V", "Q = W + ΔU"],
            correct: 0,
            explanation: "Q = m c ΔT : m en kg, c en J·kg⁻¹·K⁻¹, ΔT en K."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "La capacité thermique massique de l'eau vaut environ :",
            answers: ["4186 J·kg⁻¹·K⁻¹", "1 J·kg⁻¹·K⁻¹", "386 J·kg⁻¹·K⁻¹", "8314 J·kg⁻¹·K⁻¹"],
            correct: 0,
            explanation: "c_eau ≈ 4186 J·kg⁻¹·K⁻¹ — l'une des plus élevées parmi les liquides courants."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Chauffer 2 kg d'eau de 10°C : Q ≈ ?",
            answers: ["83 720 J", "41 860 J", "4 186 J", "167 440 J"],
            correct: 0,
            explanation: "Q = 2 × 4186 × 10 = 83 720 J."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "W et Q sont-ils des fonctions d'état ?",
            answers: ["Non, ils dépendent du chemin suivi", "Oui", "Seulement Q", "Seulement W"],
            correct: 0,
            explanation: "W et Q dépendent du chemin ; seul ΔU = W + Q est une fonction d'état."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Pour une transformation isochore : W = ?",
            answers: ["0", "PΔV", "nRΔT", "Q"],
            correct: 0,
            explanation: "ΔV = 0 → W = −PΔV = 0."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "La chaleur latente de vaporisation de l'eau est L ≈ 2260 kJ/kg. Pour vaporiser 0,5 kg d'eau : Q = ?",
            answers: ["1130 kJ", "2260 kJ", "4520 kJ", "565 kJ"],
            correct: 0,
            explanation: "Q = L × m = 2260 × 0,5 = 1130 kJ."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Q > 0 signifie que :",
            answers: ["Le système reçoit de la chaleur", "Le système en cède", "W > 0", "T augmente forcément"],
            correct: 0,
            explanation: "Convention : Q positif = chaleur reçue par le système."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Pour une isobare (P = 10⁵ Pa), ΔV = 3 L. W = ?",
            answers: ["−300 J", "+300 J", "0", "−3000 J"],
            correct: 0,
            explanation: "W = −PΔV = −10⁵ × 3×10⁻³ = −300 J (gaz se dilate, fournit du travail)."
          }
        ],
        // Niveau 2
        [
          {
            type: "mcq",
            visual: "💨",
            question: "P_ext = 2×10⁵ Pa, compression de V_i=10 L à V_f=4 L. W = ?",
            answers: ["+1200 J", "−1200 J", "+600 J", "0"],
            correct: 0,
            explanation: "W = −P_ext ΔV = −2×10⁵×(−6×10⁻³) = +1200 J."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "0,5 kg de cuivre (c=385 J·kg⁻¹·K⁻¹) est chauffé de 20°C à 120°C. Q = ?",
            answers: ["19 250 J", "9 625 J", "38 500 J", "1 925 J"],
            correct: 0,
            explanation: "Q = 0,5 × 385 × 100 = 19 250 J."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Un gaz reçoit W=800 J et Q=−500 J. ΔU = ?",
            answers: ["300 J", "1300 J", "−300 J", "500 J"],
            correct: 0,
            explanation: "ΔU = W + Q = 800 + (−500) = 300 J."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Pour une transformation adiabatique (Q=0) et W = +600 J : ΔT pour 1 mol de gaz monoatomique ?",
            answers: ["≈ 48 K", "≈ 24 K", "≈ 96 K", "0 K"],
            correct: 0,
            explanation: "ΔU = W = 600 J = nC_vΔT = 1×12,47×ΔT → ΔT ≈ 48 K."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "La chaleur latente de fusion de la glace est L_f ≈ 334 kJ/kg. Lors de la fusion, ΔT = ?",
            answers: ["0°C (T constante pendant la fusion)", "100°C", "−100°C", "Indéterminé"],
            correct: 0,
            explanation: "Lors d'un changement de phase à pression constante, la température reste constante."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "1 mol de gaz parfait (T=300K) se dilate isotherme réversible de V_i=5 L à V_f=10 L. W = ?",
            answers: ["≈ −1729 J", "≈ +1729 J", "0", "≈ −831 J"],
            correct: 0,
            explanation: "W = −nRT ln(V_f/V_i) = −1×8,314×300×ln(2) ≈ −1729 J."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Pour l'isotherme précédente (gaz parfait) : Q = ?",
            answers: ["≈ +1729 J", "≈ −1729 J", "0", "≈ +600 J"],
            correct: 0,
            explanation: "ΔU=0 (isotherme GP) → Q = −W ≈ +1729 J."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Quelle est l'unité SI du travail et de la chaleur ?",
            answers: ["Le Joule (J)", "Le Watt (W)", "Le Pascal (Pa)", "La Calorie"],
            correct: 0,
            explanation: "W et Q s'expriment en joules (J). Le Watt est une puissance (J/s)."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Chauffer 3 kg de fer (c=450 J·kg⁻¹·K⁻¹) de 0°C à 200°C : Q = ?",
            answers: ["270 000 J", "135 000 J", "90 000 J", "540 000 J"],
            correct: 0,
            explanation: "Q = 3 × 450 × 200 = 270 000 J = 270 kJ."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Deux chemins entre mêmes états A et B. ΔU_1 vs ΔU_2 ?",
            answers: ["ΔU_1 = ΔU_2 (fonction d'état)", "ΔU_1 > ΔU_2", "ΔU_1 < ΔU_2", "Dépend du chemin"],
            correct: 0,
            explanation: "U est une fonction d'état : ΔU ne dépend que des états A et B, quel que soit le chemin."
          }
        ],
        // Niveau 3
        [
          {
            type: "mcq",
            visual: "💨",
            question: "Un gaz (3 mol, diatomique, C_v=5R/2) est chauffé à V=const de 300K à 500K. W et Q = ?",
            answers: [
              "W=0, Q=ΔU=nC_vΔT≈17 454 J",
              "W=nRΔT, Q=0",
              "W=0, Q=nC_pΔT",
              "W=−PΔV, Q=nC_vΔT"
            ],
            correct: 0,
            explanation: "Isochore : W=0 → Q=ΔU = 3×(5×8,314/2)×200 = 3×20,79×200 ≈ 12 474 J. Recalc : 3×20,785×200=12 471 J."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Même gaz (3 mol, di) chauffé à P=const de 300K à 500K. W = ?",
            answers: [
              "W = −nRΔT = −3×8,314×200 ≈ −4988 J",
              "W = 0",
              "W = nC_vΔT",
              "W = +4988 J"
            ],
            correct: 0,
            explanation: "Isobare : W = −PΔV = −nRΔT = −3×8,314×200 ≈ −4988 J (gaz se dilate)."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Pour le même gaz isobare : Q = ?",
            answers: [
              "Q = nC_pΔT = 3×(7R/2)×200 ≈ 17 461 J",
              "Q = nC_vΔT ≈ 12 471 J",
              "Q = 0",
              "Q = W"
            ],
            correct: 0,
            explanation: "Isobare : Q = nC_pΔT = 3×(7×8,314/2)×200 ≈ 17 459 J. (C_p=7R/2 pour di)"
          },
          {
            type: "mcq",
            visual: "💨",
            question: "On fond 2 kg de glace à 0°C (L_f=334 kJ/kg) puis on chauffe l'eau jusqu'à 100°C. Q_total = ?",
            answers: [
              "668 + 837,2 = 1505,2 kJ",
              "668 kJ seulement",
              "837,2 kJ seulement",
              "1170 kJ"
            ],
            correct: 0,
            explanation: "Q_fusion = 2×334=668 kJ. Q_chauffe = 2×4186×100=837 200 J≈837,2 kJ. Total ≈ 1505,2 kJ."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Un bloc de métal inconnu (m=1 kg) absorbe Q=9000 J et ΔT=20°C. Quelle est sa chaleur massique ?",
            answers: [
              "c = 450 J·kg⁻¹·K⁻¹ (probable : fer ou acier)",
              "c = 4186 J·kg⁻¹·K⁻¹",
              "c = 900 J·kg⁻¹·K⁻¹",
              "c = 385 J·kg⁻¹·K⁻¹"
            ],
            correct: 0,
            explanation: "c = Q/(mΔT) = 9000/(1×20) = 450 J·kg⁻¹·K⁻¹ → typique du fer."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Pour une détente isotherme réversible (GP, n=2 mol, T=400K) : si V double, Q = ?",
            answers: [
              "≈ +4607 J",
              "≈ −4607 J",
              "0",
              "≈ +2308 J"
            ],
            correct: 0,
            explanation: "W = −2×8,314×400×ln(2) ≈ −4607 J ; ΔU=0 → Q = −W ≈ +4607 J."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Dans un calorimètre, deux corps à T₁=60°C (m=0,5 kg, c=4186) et T₂=20°C (m=1 kg, c=900) se mélangent. T_équilibre ≈ ?",
            answers: [
              "≈ 36,4°C",
              "40°C",
              "50°C",
              "30°C"
            ],
            correct: 0,
            explanation: "m₁c₁(T_f−T₁)+m₂c₂(T_f−T₂)=0 → T_f = (m₁c₁T₁+m₂c₂T₂)/(m₁c₁+m₂c₂) = (2093×60+900×20)/(2093+900) ≈ 36,4°C."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Quelle est la puissance thermique nécessaire pour chauffer 10 kg d'eau de 20°C à 100°C en 10 minutes ?",
            answers: [
              "≈ 5581 W",
              "≈ 3349 W",
              "≈ 11 163 W",
              "≈ 1000 W"
            ],
            correct: 0,
            explanation: "Q = 10×4186×80 = 3 348 800 J. P = Q/t = 3 348 800/600 ≈ 5581 W."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Lors d'une transformation, W₁=−500J et Q₁=800J par chemin 1 ; W₂=−200J par chemin 2. Q₂ = ?",
            answers: [
              "Q₂ = ΔU − W₂ = 300 − (−200) = 500 J",
              "Q₂ = 800 J",
              "Q₂ = 300 J",
              "Q₂ = 0"
            ],
            correct: 0,
            explanation: "ΔU = W₁+Q₁ = −500+800 = 300 J (fonction d'état). Q₂ = ΔU−W₂ = 300−(−200) = 500 J."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Un corps perd Q = −2000 J de chaleur et effectue W_fourni = 500 J de travail. ΔU = ?",
            answers: [
              "ΔU = W_reçu + Q = (−500) + (−2000) = −2500 J",
              "−1500 J",
              "+2500 J",
              "+1500 J"
            ],
            correct: 0,
            explanation: "W reçu = −500 J (il fournit). Q = −2000 J. ΔU = −500 + (−2000) = −2500 J."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "La chaleur molaire à pression constante C_p d'un gaz monoatomique parfait est :",
            answers: [
              "5R/2 ≈ 20,8 J·mol⁻¹·K⁻¹",
              "3R/2",
              "7R/2",
              "R"
            ],
            correct: 0,
            explanation: "Relation de Mayer : C_p = C_v + R = 3R/2 + R = 5R/2."
          }
        ],
        // Niveau 4
        [
          {
            type: "mcq",
            visual: "💨",
            question: "Pour une transformation polytropique PV^n=const, la chaleur échangée par mol est : δQ = C_n dT avec C_n = C_v(γ−n)/(1−n). Pour n=0 (isobare) : C_n = ?",
            answers: [
              "C_p = C_v γ/(γ−1) × (γ−0)/(1−0)... Recalc : C_n = C_v(γ−0)/(1−0) = C_v·γ = C_p ✓",
              "C_v",
              "0",
              "∞"
            ],
            correct: 0,
            explanation: "C_n(n=0) = C_v·γ = C_v × C_p/C_v = C_p. Cohérent : isobare → Q = nC_pΔT."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Pour une compression irréversible (P_ext=P_f) et une compression réversible (même ΔV) : lequel coûte plus de travail ?",
            answers: [
              "L'irréversible (|W_irrev| > |W_rev|)",
              "Le réversible",
              "Ils sont égaux",
              "Cela dépend de γ"
            ],
            correct: 0,
            explanation: "En compression irréversible à P_ext=P_f (max), on pousse contre une pression supérieure à la pression instantanée du gaz → plus de travail fourni."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Le flux de chaleur conductif (loi de Fourier) vaut : j_Q = ?",
            answers: [
              "j_Q = −λ grad(T)  (λ : conductivité thermique)",
              "j_Q = mc dT",
              "j_Q = σT⁴",
              "j_Q = hΔT"
            ],
            correct: 0,
            explanation: "Loi de Fourier : la densité de flux thermique est proportionnelle au gradient de température, sens opposé."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "La résistance thermique R_th d'une paroi plane est R_th = e/(λS). Pour une résistance de 0,5 K/W et ΔT=20°C : P_dissipée = ?",
            answers: [
              "40 W",
              "10 W",
              "0,025 W",
              "20 W"
            ],
            correct: 0,
            explanation: "P = ΔT/R_th = 20/0,5 = 40 W."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Le travail maximum récupérable lors d'une détente isotherme d'un gaz parfait entre V_i et V_f correspond à :",
            answers: [
              "La détente réversible : W_max = −nRT ln(V_f/V_i)",
              "La détente irréversible",
              "W = 0",
              "W = −P_f ΔV"
            ],
            correct: 0,
            explanation: "La transformation réversible maximise le travail fourni lors d'une détente."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Lors d'un échauffement par frottement (W_diss), le travail de frottement est compté dans ΔU comme :",
            answers: [
              "Une augmentation de U (W_frottement > 0 dans le bilan)",
              "Une diminution de U",
              "Nul (il disparaît)",
              "Égal à Q"
            ],
            correct: 0,
            explanation: "Les frottements convertissent l'énergie mécanique en énergie interne : W_frottement > 0 → ΔU augmente."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "La chaleur rayonnée par un corps noir : P = σST⁴. Pour un cube de 10 cm de côté à T=1000K (σ=5,67×10⁻⁸) : P ≈ ?",
            answers: [
              "≈ 340 W",
              "≈ 57 W",
              "≈ 5670 W",
              "≈ 3400 W"
            ],
            correct: 0,
            explanation: "S = 6×(0,1)² = 0,06 m². P = 5,67×10⁻⁸×0,06×10¹² = 5,67×0,06×10⁴ ≈ 340 W."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Quel est le lien entre chaleur et entropie lors d'une transformation réversible ?",
            answers: [
              "δQ_rev = T dS",
              "δQ_rev = dU",
              "δQ_rev = dH",
              "δQ_rev = 0"
            ],
            correct: 0,
            explanation: "Définition de l'entropie : dS = δQ_rev/T → δQ_rev = T dS."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Si on réalise la même transformation par deux chemins irréversible et réversible : ΔS est-il le même ?",
            answers: [
              "Oui (ΔS est une fonction d'état)",
              "Non, S dépend du chemin",
              "Oui seulement si Q=0",
              "Non, S_irrev < S_rev"
            ],
            correct: 0,
            explanation: "S est une fonction d'état : ΔS ne dépend que des états initial et final."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Un moteur reçoit Q_chaud=5000 J et fournit |W|=2000 J. Quelle chaleur rejette-t-il (1er principe) ?",
            answers: [
              "Q_froid = −3000 J (rejet de 3000 J)",
              "Q_froid = −5000 J",
              "Q_froid = −2000 J",
              "Q_froid = 0"
            ],
            correct: 0,
            explanation: "ΔU_cycle=0 → W_net + Q_net = 0 → (−2000) + Q_chaud + Q_froid = 0 → Q_froid = −3000 J."
          }
        ],
        // Niveau 5
        [
          {
            type: "mcq",
            visual: "💨",
            question: "Le travail irréversible lors d'une compression à P_ext=const peut être relié au travail réversible par : W_irrev − W_rev = ?",
            answers: [
              "T × ΔS_irrev > 0 (travail supplémentaire perdu)",
              "0",
              "−T ΔS",
              "Q_irrev − Q_rev"
            ],
            correct: 0,
            explanation: "L'excès de travail en compression irréversible correspond à la dissipation : T×S_créé ≥ 0."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "La convection naturelle est caractérisée par le nombre de Rayleigh Ra. Pour Ra > Ra_c :",
            answers: [
              "La convection s'installe (transfert thermique convectif dominant)",
              "La chaleur est nulle",
              "La conduction est maximale",
              "La convection s'arrête"
            ],
            correct: 0,
            explanation: "Au-delà du nombre de Rayleigh critique, l'instabilité convective de Rayleigh-Bénard se déclenche."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "L'efficacité exergétique d'un échangeur de chaleur compare :",
            answers: [
              "L'exergie réellement transférée à l'exergie maximale théorique",
              "W à Q",
              "ΔU à Q",
              "ΔS à ΔH"
            ],
            correct: 0,
            explanation: "L'exergie mesure la part d'énergie convertible en travail. L'efficacité exergétique < 1 indique des irréversibilités."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Pour une transformation réversible : δQ_rev = T dS. Donc pour une isotherme réversible : Q = ?",
            answers: [
              "Q = T ΔS",
              "Q = ΔS",
              "Q = T",
              "Q = 0"
            ],
            correct: 0,
            explanation: "T constant : Q = ∫T dS = T ΔS. (Pour GP : ΔS = nR ln(V_f/V_i), cohérent avec Q = nRT ln(V_f/V_i) = T×ΔS ✓)"
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Le théorème de Clausius-Clapeyron dP/dT = L/(TΔv) relie :",
            answers: [
              "La pente de la courbe d'équilibre liquide-vapeur à la chaleur latente L",
              "Q à W",
              "ΔU à ΔV",
              "La capacité thermique à la pression"
            ],
            correct: 0,
            explanation: "dP/dT = L/(T·Δv) : connaître L et Δv permet de déterminer comment P d'équilibre varie avec T."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Un moteur Carnot entre 500K et 300K absorbe Q_c=10 kJ. Calculer W_net et Q_f rejeté.",
            answers: [
              "W_net=4 kJ, Q_f=−6 kJ",
              "W_net=6 kJ, Q_f=−4 kJ",
              "W_net=10 kJ, Q_f=0",
              "W_net=2 kJ, Q_f=−8 kJ"
            ],
            correct: 0,
            explanation: "η=1−300/500=0,4 → W=4 kJ. Conservation : Q_f = W−Q_c = 4−10 = −6 kJ."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "La puissance rayonnée nette d'un corps à T=300K dans un environnement à T_0=200K (σ=5,67×10⁻⁸, S=1 m²) :",
            answers: [
              "P = σS(T⁴−T₀⁴) = 5,67×10⁻⁸×(300⁴−200⁴) ≈ 373 W",
              "P = σST⁴ ≈ 459 W",
              "P = σS(T−T₀)⁴",
              "P = 0"
            ],
            correct: 0,
            explanation: "P_nette = σS(T⁴−T₀⁴) = 5,67×10⁻⁸×(8,1×10⁹−1,6×10⁹) ≈ 5,67×10⁻⁸×6,5×10⁹ ≈ 369 W."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Le travail technique W_t dans un système ouvert en régime permanent est :",
            answers: [
              "W_t = −∫V dP (différent de W_pression = −∫P dV)",
              "W_t = −∫P dV",
              "W_t = ΔU",
              "W_t = Q"
            ],
            correct: 0,
            explanation: "En thermodynamique des systèmes ouverts, le travail utile est W_t = −∫V dP (travail de pompage)."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Relation de Mayer généralisée pour un gaz réel de Van der Waals : C_p − C_v = ?",
            answers: [
              "R + corrections en a/V² (> R pour gaz réel)",
              "R exactement",
              "R − a/V²",
              "C_v"
            ],
            correct: 0,
            explanation: "Pour Van der Waals : C_p−C_v = R × [1 − 2an(V−nb)²/(nRTV³)]⁻¹ > R (interactions attractives)."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Dans un cycle frigorifique à compression, le travail compresseur W est fourni pour :",
            answers: [
              "Pomper la chaleur du froid vers le chaud (impossible sans apport de travail par le 2e principe)",
              "Créer de la chaleur",
              "Refroidir le compresseur",
              "Augmenter la pression à ΔU=0"
            ],
            correct: 0,
            explanation: "2e principe : la chaleur ne va pas spontanément du froid vers le chaud → le compresseur fournit l'énergie pour inverser le sens."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "La chaleur de réaction à volume constant ΔU_r et à pression constante ΔH_r sont liées par :",
            answers: [
              "ΔH_r = ΔU_r + Δ(PV) = ΔU_r + Δn_gaz × RT",
              "ΔH_r = ΔU_r",
              "ΔH_r = ΔU_r − RT",
              "ΔH_r = ΔU_r × γ"
            ],
            correct: 0,
            explanation: "ΔH = ΔU + PΔV ≈ ΔU + Δn_gaz RT (gaz parfait, Δn_gaz = variation du nombre de moles gazeuses)."
          }
        ],
        // Niveau 6
        [
          {
            type: "mcq",
            visual: "💨",
            question: "La relation de Kirchhoff en thermochimie ∂ΔH_r/∂T = ΔC_p vient de :",
            answers: [
              "H est une fonction d'état et (∂H/∂T)_P = C_p",
              "La loi de Hess",
              "Le 2e principe",
              "PV = nRT"
            ],
            correct: 0,
            explanation: "∂ΔH_r/∂T = Σν_i(∂H_i/∂T)_P = Σν_i C_p,i = ΔC_p."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "En thermodynamique des processus irréversibles (TPI), le terme de dissipation visqueuse dans le bilan d'énergie est :",
            answers: [
              "Φ = σ:ε̇ ≥ 0 (tenseur des contraintes × taux de déformation)",
              "Φ = μ ΔT",
              "Φ = 0 toujours",
              "Φ = −∫P dV"
            ],
            correct: 0,
            explanation: "La dissipation visqueuse Φ = Σ σ_ij ε̇_ij ≥ 0 représente la conversion irréversible d'énergie mécanique en chaleur."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "L'équation de l'énergie en mécanique des fluides (Navier-Stokes thermique) donne ρ c_p DT/Dt = ?",
            answers: [
              "div(λ grad T) + Φ + DP/Dt (conduction + dissipation + compression)",
              "div(λ grad T) seulement",
              "Φ seulement",
              "ρ c_v DT/Dt"
            ],
            correct: 0,
            explanation: "L'équation complète inclut la conduction, la dissipation visqueuse et le terme de compressibilité DP/Dt."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "En calorimétrie de solution, la correction de Washburn pour les calorimètres à bombe adiabatique convertit ΔU_combustion en ΔH via :",
            answers: [
              "ΔH = ΔU + Δn_gaz RT (correction des moles gazeuses formées/consommées)",
              "ΔH = ΔU",
              "ΔH = ΔU × γ",
              "ΔH = ΔU − RT"
            ],
            correct: 0,
            explanation: "La bombe calorimétrique mesure ΔU (volume constant). Pour obtenir ΔH (pression constante) : ΔH = ΔU + Δn_gaz RT."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Le travail osmotique pour transférer dn mol de solvant pur à travers une membrane semi-perméable contre une pression osmotique π est :",
            answers: [
              "δW_osm = π V_m dn (V_m : volume molaire du solvant)",
              "δW_osm = RT dn",
              "δW_osm = 0",
              "δW_osm = −P dV"
            ],
            correct: 0,
            explanation: "La pression osmotique π = cRT (van 't Hoff) crée un travail de transfert π V_m dn."
          },
          {
            type: "mcq",
            visual: "💨",
            question: "Le premier et second principe combinés donnent dU = TdS − PdV. La stabilité thermodynamique exige :",
            answers: [
              "(∂²U/∂S²)_V > 0 et (∂²U/∂V²)_S > 0 → C_v > 0 et compressibilité positive",
              "dU = 0",
              "S = const",
              "T = 0"
            ],
            correct: 0,
            explanation: "Les conditions de stabilité imposent des dérivées secondes positives de U → C_v > 0 (stabilité thermique) et κ_S > 0 (stabilité mécanique)."
          }
        ]
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // NOTION 6 — Diagramme de Clapeyron
    // ─────────────────────────────────────────────────────────────────
    {
      id: "diagramme-clapeyron",
      label: "Diagramme de Clapeyron",
      icon: "📈",
      lesson: {
        formula: "W = −∫P dV = −(aire sous la courbe P-V)",
        text: "Le diagramme de Clapeyron représente l'état d'un gaz dans le plan (P, V) ou (P, V_m). Chaque transformation y est une courbe. L'aire sous la courbe donne le travail échangé. Les cycles y apparaissent comme des surfaces fermées.",
        example: "Une isotherme d'hyperbole PV=cst, une adiabatique plus courbée, une isobare horizontale, une isochore verticale."
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Le diagramme de Clapeyron P = f(V)",
          text: "Le diagramme de Clapeyron (ou diagramme P-V) représente graphiquement la pression en fonction du volume d'un système. Chaque <strong>point</strong> est un état d'équilibre. Chaque <strong>courbe</strong> est une transformation. L'<strong>aire sous la courbe</strong> donne le travail échangé. Les cycles apparaissent comme des surfaces fermées."
        },
        {
          type: "formula",
          title: "🔑 Travail = aire sous la courbe P-V",
          formula: "W = −∫P dV = −(aire algébrique sous P = f(V))",
          text: "L'aire sous la courbe P=f(V) entre V_i et V_f donne |W|. Le signe dépend du sens : V_f > V_i (détente) → W < 0. V_f < V_i (compression) → W > 0. Pour un cycle parcouru dans le sens horaire : W_cycle = −(aire enfermée) < 0, le gaz fournit du travail net → <strong>moteur</strong>."
        },
        {
          type: "definition",
          title: "📌 Allure des 4 transformations dans le plan P-V",
          text: "• <strong>Isochore</strong> : droite verticale (V=const, ΔV=0, W=0).<br>• <strong>Isobare</strong> : droite horizontale (P=const, W=−PΔV = aire rectangle).<br>• <strong>Isotherme</strong> (gaz parfait) : hyperbole PV=nRT=const. Plus T est élevée, plus l'hyperbole est haute.<br>• <strong>Adiabatique réversible</strong> (gaz parfait) : hyperbole PV^γ=const, <strong>plus courbée</strong> que l'isotherme car γ > 1."
        },
        {
          type: "graph",
          title: "📊 Les 4 transformations dans le plan P-V",
          svgContent: `<svg viewBox="0 0 450 285" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <line x1="48" y1="245" x2="430" y2="245" stroke="#374151" stroke-width="2"/>
  <line x1="48" y1="245" x2="48" y2="18" stroke="#374151" stroke-width="2"/>
  <text x="438" y="249" font-size="13" fill="#374151" font-weight="bold">V</text>
  <text x="36" y="14" font-size="13" fill="#374151" font-weight="bold">P</text>
  <!-- Point A -->
  <circle cx="148" cy="65" r="5" fill="#111827"/>
  <text x="130" y="61" font-size="12" fill="#111827" font-weight="bold">A</text>
  <!-- Isochore bleu -->
  <line x1="148" y1="65" x2="148" y2="200" stroke="#2563eb" stroke-width="2.5"/>
  <text x="58" y="57" font-size="11" fill="#2563eb" font-weight="bold">Isochore</text>
  <text x="62" y="70" font-size="10" fill="#2563eb">V=cst, W=0</text>
  <!-- Isobare vert -->
  <line x1="148" y1="200" x2="365" y2="200" stroke="#16a34a" stroke-width="2.5"/>
  <text x="365" y="218" font-size="11" fill="#16a34a" font-weight="bold">Isobare</text>
  <text x="348" y="230" font-size="10" fill="#16a34a">P=cst</text>
  <!-- Aire isobare -->
  <rect x="148" y="200" width="217" height="45" fill="#bbf7d0" opacity="0.45"/>
  <text x="257" y="230" text-anchor="middle" font-size="9" fill="#15803d">Aire = |W_isobare|</text>
  <!-- Point B (isobare) -->
  <circle cx="365" cy="200" r="4" fill="#16a34a"/>
  <text x="368" y="197" font-size="11" fill="#16a34a" font-weight="bold">B</text>
  <!-- Isotherme orange -->
  <path d="M 148 65 C 190 85 248 120 298 155 S 348 188 365 200" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="8,3"/>
  <text x="265" y="110" font-size="11" fill="#d97706" font-weight="bold">Isotherme</text>
  <text x="258" y="123" font-size="9" fill="#d97706">PV=cst</text>
  <!-- Adiabatique rouge -->
  <path d="M 148 65 C 178 100 218 148 260 182 S 323 213 365 228" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4,4"/>
  <text x="305" y="250" font-size="11" fill="#dc2626" font-weight="bold">Adiabatique</text>
  <text x="298" y="263" font-size="9" fill="#dc2626">PV^γ=cst, Q=0</text>
  <!-- Note pente -->
  <text x="48" y="276" font-size="9" fill="#6b7280">Pente adiabatique = γ × pente isotherme → adiabatique toujours plus raide</text>
</svg>`,
          caption: "Les 4 transformations dans le plan P-V. L'aire sous une courbe = |W|."
        },
        {
          type: "definition",
          title: "📌 Cycles moteurs et récepteurs dans le plan P-V",
          text: "Un cycle est un chemin fermé dans le diagramme P-V. L'<strong>aire intérieure</strong> = |W_net| échangé.<br>• <strong>Sens horaire</strong> (∮dV > 0 globalement) : le gaz fournit du travail net → <strong>moteur</strong>.<br>• <strong>Sens antihoraire</strong> : on fournit du travail au gaz → <strong>réfrigérateur ou pompe à chaleur</strong>.<br>Moyen mnémotechnique : <em>Horaire = le gaz travaille</em>."
        },
        {
          type: "graph",
          title: "📊 Cycle moteur et sens horaire",
          svgContent: `<svg viewBox="0 0 390 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <line x1="40" y1="230" x2="360" y2="230" stroke="#374151" stroke-width="2"/>
  <line x1="40" y1="230" x2="40" y2="20" stroke="#374151" stroke-width="2"/>
  <text x="368" y="234" font-size="13" fill="#374151" font-weight="bold">V</text>
  <text x="28" y="16" font-size="13" fill="#374151" font-weight="bold">P</text>
  <!-- Courbe haute A→B (détente, isotherme haute) -->
  <path d="M 90 60 C 140 72 220 112 300 180" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#ac2)"/>
  <text x="195" y="108" font-size="10" fill="#2563eb">Détente (W&lt;0)</text>
  <!-- Courbe basse B→A (compression, isotherme basse) -->
  <path d="M 300 180 C 258 200 178 200 90 190" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#bc2)"/>
  <text x="195" y="215" font-size="10" fill="#dc2626">Compression (W&gt;0)</text>
  <!-- Isochore fermeture -->
  <line x1="90" y1="190" x2="90" y2="62" stroke="#16a34a" stroke-width="2.5" marker-end="url(#cc2)"/>
  <!-- Aire intérieure -->
  <path d="M 90 60 C 140 72 220 112 300 180 C 258 200 178 200 90 190 Z" fill="#dbeafe" opacity="0.4"/>
  <text x="195" y="145" text-anchor="middle" font-size="13" fill="#1d4ed8" font-weight="bold">W_net &lt; 0</text>
  <text x="195" y="162" text-anchor="middle" font-size="11" fill="#1d4ed8">(gaz fournit du travail)</text>
  <!-- Points -->
  <text x="74" y="52" font-size="12" fill="#374151" font-weight="bold">A</text>
  <text x="304" y="178" font-size="12" fill="#374151" font-weight="bold">B</text>
  <!-- Flèche sens horaire -->
  <text x="310" y="75" font-size="12" fill="#6b7280">↻ Sens horaire</text>
  <text x="308" y="90" font-size="11" fill="#16a34a" font-weight="bold">→ Moteur</text>
  <defs>
    <marker id="ac2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#2563eb"/></marker>
    <marker id="bc2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#dc2626"/></marker>
    <marker id="cc2" markerWidth="6" markerHeight="6" refX="3" refY="0" orient="auto"><path d="M0,6 L3,0 L6,6 Z" fill="#16a34a"/></marker>
  </defs>
  <text x="40" y="250" font-size="9" fill="#9ca3af">Aire du cycle = |W_net|. Sens horaire → le gaz fournit du travail net.</text>
</svg>`,
          caption: "Cycle moteur dans le sens horaire : la détente (courbe haute) fournit plus que la compression (courbe basse) ne coûte."
        },
        {
          type: "technique",
          title: "🛠️ Lire un diagramme P-V — méthode",
          text: "1) <strong>Identifier les états</strong> : chaque point = (V, P).<br>2) <strong>Reconnaître les courbes</strong> : verticale=isochore, horizontale=isobare, hyperbole douce=isotherme, hyperbole raide=adiabatique.<br>3) <strong>Calculer W</strong> = −(aire sous la courbe). Compression → W > 0. Détente → W < 0.<br>4) Pour un cycle : W_net = ±(aire enfermée). Sens horaire → W_net < 0 (moteur)."
        },
        {
          type: "warning",
          title: "⚠️ Pièges du diagramme P-V",
          text: "• L'aire donne |W| mais le signe dépend du sens de parcours.<br>• Le diagramme P-V ne montre pas directement Q : il faut ΔU et W pour le trouver.<br>• L'adiabatique et l'isotherme partant du même point ne se croisent pas (gamme P-V différente).<br>• Une transformation irréversible rapide <strong>ne peut pas</strong> être représentée par une courbe continue (P n'est pas uniforme hors équilibre)."
        },
        {
          type: "demo",
          title: "🔬 Pourquoi l'adiabatique est plus raide que l'isotherme ?",
          text: "Isotherme : P = nRT/V → |dP/dV|_isoth = P/V.<br>Adiabatique : P = cte/V^γ → |dP/dV|_adiab = γP/V = γ × |dP/dV|_isoth.<br>Donc la pente adiabatique = γ fois la pente isotherme. Comme γ > 1, l'adiabatique est plus raide. Physiquement : lors d'une détente adiabatique, T diminue (ce que l'isotherme évite en absorbant de la chaleur) → la pression chute plus vite."
        },
        {
          type: "graph",
          title: "📊 Diagramme T-S (Température-Entropie)",
          svgContent: `<svg viewBox="0 0 385 235" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <line x1="40" y1="205" x2="355" y2="205" stroke="#374151" stroke-width="2"/>
  <line x1="40" y1="205" x2="40" y2="18" stroke="#374151" stroke-width="2"/>
  <text x="363" y="209" font-size="13" fill="#374151" font-weight="bold">S</text>
  <text x="28" y="14" font-size="13" fill="#374151" font-weight="bold">T</text>
  <!-- Rectangle Carnot -->
  <rect x="88" y="55" width="205" height="115" fill="#dbeafe" stroke="#2563eb" stroke-width="2" opacity="0.5"/>
  <!-- Isotherme chaude -->
  <line x1="88" y1="55" x2="293" y2="55" stroke="#dc2626" stroke-width="2.5"/>
  <text x="298" y="52" font-size="10" fill="#dc2626" font-weight="bold">T_c (chaude)</text>
  <!-- Isotherme froide -->
  <line x1="88" y1="170" x2="293" y2="170" stroke="#2563eb" stroke-width="2.5"/>
  <text x="298" y="173" font-size="10" fill="#2563eb" font-weight="bold">T_f (froide)</text>
  <!-- Adiabatiques (isentropiques) -->
  <line x1="88" y1="55" x2="88" y2="170" stroke="#16a34a" stroke-width="2.5"/>
  <text x="50" y="115" font-size="9" fill="#16a34a">S=cst</text>
  <line x1="293" y1="55" x2="293" y2="170" stroke="#16a34a" stroke-width="2.5"/>
  <text x="297" y="115" font-size="9" fill="#16a34a">S=cst</text>
  <!-- Aire = W_net -->
  <text x="190" y="108" text-anchor="middle" font-size="12" fill="#1d4ed8" font-weight="bold">Aire = W_net</text>
  <text x="190" y="125" text-anchor="middle" font-size="11" fill="#1d4ed8">= (T_c − T_f)(S₂ − S₁)</text>
  <text x="40" y="220" font-size="10" fill="#9ca3af">Aire = Q échangée (δQ_rev = T dS). Carnot = rectangle.</text>
</svg>`,
          caption: "Dans le plan T-S, l'aire sous une courbe = chaleur échangée. Le cycle de Carnot est un rectangle."
        },
        {
          type: "definition",
          title: "📌 Gaz réel (Van der Waals) dans le plan P-V",
          text: "Dans le plan P-V d'un gaz de Van der Waals :<br>• Au-dessus de T_c (critique) : isotherme décroissante continue.<br>• En dessous de T_c : oscillation instable → règle de Maxwell → <strong>palier horizontal</strong> de coexistence liquide-vapeur.<br>• La courbe en cloche (<em>binodale</em>) délimite la zone diphasée. Son sommet = point critique.<br>• Entre binodale et spinodale : zone métastable (surchauffe, surfusion)."
        },
        {
          type: "formula",
          title: "🔑 Travail technique W_t = −∫V dP (systèmes ouverts)",
          formula: "W_t = −∫V dP  (turbine, compresseur, pompe)<br>W_t = W + Δ(PV)",
          text: "Pour les systèmes ouverts en régime permanent, le travail utile est W_t = −∫V dP. Dans le plan P-V, c'est l'aire entre la courbe et l'axe des pressions (intégration horizontale). Le diagramme de Mollier (H-S) est très utilisé en ingénierie : une détente isentropique est une droite verticale, et la chute ΔH est directement le travail de la turbine."
        }

      ],
      levels: [
        // Niveau 1
        [
          {
            type: "mcq",
            visual: "📈",
            question: "Dans le diagramme de Clapeyron, les axes sont :",
            answers: ["P en ordonnée, V en abscisse", "T en ordonnée, V en abscisse", "P en abscisse, V en ordonnée", "V en ordonnée, T en abscisse"],
            correct: 0,
            explanation: "Diagramme de Clapeyron : P = f(V), P en ordonnée et V en abscisse."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Une isochore dans le diagramme P-V est représentée par :",
            answers: ["Une droite verticale", "Une droite horizontale", "Une hyperbole", "Une courbe courbée"],
            correct: 0,
            explanation: "Isochore : V = constante → segment vertical."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Une isobare dans le diagramme P-V est représentée par :",
            answers: ["Une droite horizontale", "Une droite verticale", "Une hyperbole", "Une courbe exponentielle"],
            correct: 0,
            explanation: "Isobare : P = constante → segment horizontal."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Une isotherme d'un gaz parfait dans le plan P-V est :",
            answers: ["Une hyperbole (PV=cst)", "Une droite verticale", "Une droite horizontale", "Une courbe PV^γ=cst"],
            correct: 0,
            explanation: "PV = nRT = constante → hyperbole équilatère."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "L'aire sous la courbe P=f(V) dans un diagramme de Clapeyron représente :",
            answers: ["Le travail échangé |W|", "La chaleur Q", "L'énergie interne U", "L'enthalpie H"],
            correct: 0,
            explanation: "W = −∫P dV → |W| = aire sous la courbe P-V."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Un cycle parcouru dans le sens horaire dans le plan P-V correspond à un :",
            answers: ["Moteur (W_net fourni par le gaz)", "Réfrigérateur", "Système isolé", "Transformation isochore"],
            correct: 0,
            explanation: "Sens horaire : la détente (courbe supérieure) fournit plus de travail que la compression (courbe inférieure) → W_net < 0 (convention W fourni)."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Quelle courbe est la plus courbée dans le plan P-V : isotherme ou adiabatique (même point de départ) ?",
            answers: ["Adiabatique (γ > 1)", "Isotherme", "Elles sont identiques", "Cela dépend de T"],
            correct: 0,
            explanation: "La pente adiabatique = γ × pente isotherme, avec γ > 1 → plus raide."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Pour une isobare entre V_i=5L et V_f=15L à P=2×10⁵ Pa : W = ?",
            answers: ["−2000 J", "+2000 J", "0", "−20 000 J"],
            correct: 0,
            explanation: "W = −PΔV = −2×10⁵×(10×10⁻³) = −2000 J."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Un état dans le diagramme P-V est représenté par :",
            answers: ["Un point (V, P)", "Une courbe", "Une surface", "Un axe"],
            correct: 0,
            explanation: "Un état d'équilibre = un couple de valeurs (V, P) = un point dans le plan."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Le diagramme de Clapeyron s'appelle aussi :",
            answers: ["Diagramme P-V", "Diagramme T-S", "Diagramme H-S", "Diagramme T-V"],
            correct: 0,
            explanation: "Diagramme de Clapeyron = diagramme P-V (ou indicateur de pression-volume)."
          }
        ],
        // Niveau 2
        [
          {
            type: "mcq",
            visual: "📈",
            question: "Dans le plan P-V, l'adiabatique réversible est représentée par :",
            answers: ["PV^γ = cst (hyperbole plus courbée que l'isotherme)", "PV = cst", "Une droite verticale", "Une droite horizontale"],
            correct: 0,
            explanation: "Adiabatique réversible : PV^γ = constante avec γ > 1."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Pour un cycle parcouru dans le sens antihoraire : le système est :",
            answers: ["Un réfrigérateur ou pompe à chaleur (on fournit du travail)", "Un moteur", "Un système isolé", "En équilibre"],
            correct: 0,
            explanation: "Sens antihoraire : la compression est plus haute que la détente → on fournit du travail net."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Le travail d'un cycle est égal à :",
            answers: ["L'aire délimitée par la courbe fermée", "L'aire totale sous la courbe", "ΔU du cycle", "Q total"],
            correct: 0,
            explanation: "W_net_cycle = aire enfermée dans la courbe fermée (avec signe selon le sens)."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Dans le diagramme P-V, deux isothermes différentes (T₁ < T₂) sont telles que :",
            answers: ["L'isotherme T₂ est au-dessus de T₁ (même V → P plus haute)", "T₁ est au-dessus", "Elles se croisent", "Elles sont parallèles"],
            correct: 0,
            explanation: "P = nRT/V : à V fixé, P est proportionnelle à T → T₂ > T₁ implique P₂ > P₁."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Pour lire le travail d'une isotherme sur un graphe P-V, il faut calculer :",
            answers: ["L'aire sous la courbe hyperbole entre V_i et V_f", "La hauteur de la courbe", "Le périmètre de la courbe", "La tangente en un point"],
            correct: 0,
            explanation: "W = −∫P dV = aire sous la courbe (changée de signe). Pour une hyperbole : calcul analytique ou graphique."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Pourquoi ne peut-on pas représenter une transformation irréversible rapide par une courbe continue dans le plan P-V ?",
            answers: ["Car P et T ne sont pas uniformes hors équilibre → pas d'état d'équilibre défini", "Car le volume change trop vite", "Car Q ≠ 0", "Car γ = 1"],
            correct: 0,
            explanation: "Une courbe P-V nécessite des états d'équilibre en chaque point. Hors équilibre, P n'est pas uniforme."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Le cycle de Carnot dans le plan P-V est constitué de :",
            answers: ["2 hyperboles (isothermes) + 2 adiabatiques", "2 droites horizontales + 2 droites verticales", "4 hyperboles", "1 ellipse"],
            correct: 0,
            explanation: "Carnot : 2 isothermes (hyperboles PV=cst) + 2 adiabatiques réversibles (PV^γ=cst)."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Dans le diagramme P-V du cycle Otto : les 2 isochores sont des :",
            answers: ["Droites verticales", "Droites horizontales", "Hyperboles", "Courbes exponentielles"],
            correct: 0,
            explanation: "Isochore = V=const → ligne verticale dans le plan P-V."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Quelle est l'allure de la courbe d'un gaz parfait subissant une isobare dans le plan P-V ?",
            answers: ["Segment horizontal (P=cst, V varie)", "Segment vertical", "Hyperbole", "Courbe exponentielle"],
            correct: 0,
            explanation: "P = constante → courbe horizontale dans le plan (V, P)."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Pour deux transformations (isotherme et adiabatique) reliant les mêmes états A et B dans le plan P-V : laquelle a l'aire sous la courbe la plus grande ?",
            answers: ["L'isotherme (courbe moins courbée, reste plus haute)", "L'adiabatique", "Elles sont égales", "Cela dépend de γ"],
            correct: 0,
            explanation: "L'isotherme reste au-dessus de l'adiabatique entre A et B (car γ>1 → adiabatique descend plus vite) → aire isotherme > aire adiabatique."
          }
        ],
        // Niveau 3
        [
          {
            type: "mcq",
            visual: "📈",
            question: "Estimer graphiquement W pour une isobare entre (V=5L, P=3×10⁵Pa) et (V=15L, P=3×10⁵Pa).",
            answers: ["W = −3×10⁵ × 10×10⁻³ = −3000 J", "W = +3000 J", "W = 0", "W = −1500 J"],
            correct: 0,
            explanation: "Rectangle d'aire P×ΔV = 3×10⁵ × 0,01 = 3000 J. W = −(aire) = −3000 J (dilatation)."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Un cycle ABC dans le plan P-V : AB isobare (P=10⁵Pa, V_A=2L→V_B=8L), BC isochore, CA isotherme. W_net = ?",
            answers: [
              "W_net = W_AB + W_BC + W_CA = −600 + 0 + W_CA",
              "W_net = W_AB seulement",
              "W_net = 0",
              "W_net = Q_total"
            ],
            correct: 0,
            explanation: "W_AB = −P·ΔV = −10⁵×6×10⁻³ = −600 J. W_BC = 0 (isochore). W_CA = −nRT·ln(V_A/V_B) > 0 car compression."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Dans le plan P-V, deux adiabatiques réversibles peuvent-elles se croiser ?",
            answers: [
              "Non (elles correspondent à des entropies différentes et ne se croisent pas)",
              "Oui, en un point",
              "Oui, en plusieurs points",
              "Cela dépend de γ"
            ],
            correct: 0,
            explanation: "Chaque adiabatique réversible correspond à une valeur fixe de l'entropie S. Deux valeurs d'entropie différentes → courbes distinctes qui ne se croisent pas."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Un cycle de Carnot entre T_H=400K et T_C=300K opère avec V_A=1L, V_B=2L (détente isotherme chaude). Pour 1 mol de gaz parfait monoatomique : Q_H = ?",
            answers: ["≈ +2306 J", "≈ −2306 J", "0", "≈ +1153 J"],
            correct: 0,
            explanation: "Q_H = nRT_H ln(V_B/V_A) = 1×8,314×400×ln(2) ≈ 2306 J."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Pour le même cycle : W_net = η × Q_H ≈ ?",
            answers: ["≈ 577 J", "≈ 1729 J", "≈ 2306 J", "≈ 1153 J"],
            correct: 0,
            explanation: "η = 1−300/400 = 0,25 → W_net = 0,25 × 2306 ≈ 577 J."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Dans le diagramme P-V du cycle de Carnot, l'aire du cycle vaut W_net. Quelle relation avec Q_H et Q_C ?",
            answers: ["W_net = Q_H + Q_C = Q_H − |Q_C|", "W_net = Q_H", "W_net = Q_C", "W_net = 0"],
            correct: 0,
            explanation: "ΔU_cycle = 0 → W_net + Q_H + Q_C = 0 → W_net = −(Q_H + Q_C) = Q_H − |Q_C|."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Comment varie l'isotherme d'un gaz parfait si on augmente la quantité de matière n (à T constant) ?",
            answers: ["L'hyperbole se décale vers les hautes pressions (PV = nRT augmente)", "Aucun changement", "La courbe s'aplatit", "La courbe devient verticale"],
            correct: 0,
            explanation: "PV = nRT : plus n est grand, plus PV est grand → hyperbole plus haute dans le plan P-V."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Pour un cycle ABC (sens horaire) : A(P=4×10⁵, V=2L), B(P=4×10⁵, V=6L), C(P=1×10⁵, V=6L), puis CA isochore. Estimer W_net.",
            answers: [
              "W_AB = −1200 J, W_BC = 0, W_CA = +1500 J → W_net ≈ +300 J (attention au sens !)",
              "W_net = 0",
              "W_net = −1200 J",
              "W_net = −900 J"
            ],
            correct: 0,
            explanation: "W_AB(isobare)=−4×10⁵×4×10⁻³=−1600 J; W_BC(isochore)=0; W_CA(isobare P=10⁵Pa, ΔV=−4L)=+400 J. W_net=−1200 J. Aire cycle = (4−1)×10⁵×(6−2)×10⁻³=1200 J."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Le diagramme T-S (température-entropie) est complémentaire du P-V. Dans le plan T-S, l'aire sous la courbe représente :",
            answers: ["Q (chaleur échangée)", "W (travail)", "ΔU", "ΔH"],
            correct: 0,
            explanation: "δQ_rev = T dS → Q = ∫T dS = aire sous la courbe dans le plan T-S."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Dans le plan T-S, le cycle de Carnot est représenté par :",
            answers: ["Un rectangle (2 isothermes horizontales + 2 adiabatiques verticales)", "Une hyperbole", "Un triangle", "Une ellipse"],
            correct: 0,
            explanation: "Isothermes → T=cst → horizontales. Adiabatiques réversibles → S=cst → verticales. Ensemble = rectangle."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Un gaz parfait monoatomique (n=1 mol) à T=300K subit une détente isotherme de V=2L à V=8L. Calculer l'aire sous la courbe P-V (= |W|).",
            answers: ["≈ 3458 J", "≈ 1729 J", "≈ 6916 J", "0"],
            correct: 0,
            explanation: "|W| = nRT ln(V_f/V_i) = 1×8,314×300×ln(4) ≈ 2494×1,386 ≈ 3458 J."
          }
        ],
        // Niveau 4
        [
          {
            type: "mcq",
            visual: "📈",
            question: "Le rendement du cycle de Brayton (turbine à gaz, 2 adiabatiques + 2 isobares) est lié à l'aire du cycle. Pour r_p=10, γ=1,4 : η ≈ 48%. Si l'aire cycle = 5000 J et Q_absorbé = 9615 J : vérification.",
            answers: ["η = 5000/9615 ≈ 52% (légère différence due à l'arrondi)", "η = 100%", "η = 0%", "η = 48% exactement"],
            correct: 0,
            explanation: "η = W_net/Q_absorbé. L'approximation dépend des conditions exactes du cycle."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Dans le plan P-V d'un gaz réel (Van der Waals), la courbe d'Andrews montre :",
            answers: ["Un palier horizontal dans la région diphasée (liquide-vapeur coexistants)", "Une hyperbole continue", "Aucune différence avec le gaz parfait", "Un pic de pression"],
            correct: 0,
            explanation: "En dessous de la température critique, les isothermes de Van der Waals présentent un palier horizontal (règle de Maxwell) correspondant à la coexistence liquide-vapeur."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "La règle de Maxwell dans le diagramme P-V des gaz réels stipule que :",
            answers: ["Le palier horizontal est tracé de sorte que les deux aires (au-dessus et en-dessous) soient égales", "P_sat = P_critique", "Le volume est constant", "ΔU = 0"],
            correct: 0,
            explanation: "La règle de Maxwell découpe l'isothermale de Van der Waals oscillante par une horizontale d'égales aires → pression de saturation."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Le point critique d'un gaz dans le plan P-V est le point où :",
            answers: ["La distinction liquide-vapeur disparaît (∂P/∂V)_T = 0 et (∂²P/∂V²)_T = 0", "P = 0", "V = 0", "T est minimale"],
            correct: 0,
            explanation: "Au point critique, l'isotherme a un point d'inflexion horizontal → les deux conditions sur les dérivées."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Dans le diagramme P-V, la région sous la courbe en cloche (binodale) correspond à :",
            answers: ["La coexistence des phases liquide et vapeur (zone diphasée)", "L'état supercritique", "Le gaz parfait", "L'état solide"],
            correct: 0,
            explanation: "Sous la courbe binodale dans le plan P-V : mélange liquide + vapeur en équilibre. À droite : gaz. À gauche : liquide."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Le diagramme de Mollier (H-S) est utilisé en ingénierie des turbines. Il est préféré au P-V car :",
            answers: ["L'aire sous les courbes y représente directement le travail des turbines (isentropique = verticale)", "Il est plus facile à tracer", "Il remplace P-V pour les gaz parfaits", "ΔH = 0 toujours"],
            correct: 0,
            explanation: "Dans le plan H-S, une détente isentropique (S=const) est verticale, et la chute d'enthalpie = travail de la turbine."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "En lisant un diagramme P-V, comment distinguer visuellement une isotherme d'un gaz parfait d'une adiabatique partant du même point ?",
            answers: [
              "L'adiabatique descend plus vite (pente plus négative) : |dP/dV|_adiab = γ|dP/dV|_isoth",
              "L'isotherme descend plus vite",
              "Elles sont identiques",
              "L'adiabatique est horizontale"
            ],
            correct: 0,
            explanation: "Au même point, la pente adiabatique est γ fois plus grande en valeur absolue que l'isotherme."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Pour un cycle de Stirling (2 isothermes + 2 isochores) avec régénérateur parfait : le diagramme P-V ressemble à :",
            answers: ["Un rectangle curviligne (isochores verticaux, isothermes hyperboliques)", "Un rectangle (4 droites)", "Une ellipse", "Un triangle"],
            correct: 0,
            explanation: "Isochores = verticaux, isothermes = hyperboles → rectangle 'déformé' avec côtés verticaux et courbes."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Dans un compresseur centrifuge (système ouvert), le travail technique est W_t = −∫V dP. Dans un diagramme P-V, cette aire correspond à :",
            answers: ["L'aire entre la courbe et l'axe P (intégration horizontale)", "L'aire entre la courbe et l'axe V", "La même que W = −∫P dV", "0"],
            correct: 0,
            explanation: "−∫V dP est l'intégration selon P (aire horizontale), différente de −∫P dV (aire verticale). Les deux sont reliées par : −∫V dP = −∫P dV + Δ(PV)."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Quel est l'avantage du diagramme P-v massique (v = V/m en m³/kg) par rapport au P-V ?",
            answers: [
              "Les courbes sont indépendantes de la masse du système → universelles pour un corps pur",
              "L'aire représente la chaleur",
              "Les isochores disparaissent",
              "On peut représenter plus de transformations"
            ],
            correct: 0,
            explanation: "Le diagramme P-v (volume spécifique) est intrinsèque au fluide, indépendant de n ou m → utilisé dans les tables thermodynamiques."
          }
        ],
        // Niveau 5
        [
          {
            type: "mcq",
            visual: "📈",
            question: "La construction de Maxwell dans le plan P-V pour un gaz de Van der Waals permet de trouver P_sat(T) en imposant :",
            answers: ["∮V dP = 0 (ou équivalent : aires égales)", "∮P dV = 0", "ΔG = 0 uniquement", "ΔU = 0"],
            correct: 0,
            explanation: "La règle de Maxwell = ∮V dP = 0 sur l'isotherme ↔ égalité du potentiel chimique des deux phases (ΔG=0)."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Sur un diagramme P-v d'un fluide réel, la zone métastable (surchauffe / surfusion) se situe :",
            answers: ["Entre la spinodale et la binodale", "À l'extérieur de la binodale", "Au point critique", "Sur l'axe P"],
            correct: 0,
            explanation: "La spinodale (∂P/∂V)_T=0 délimite la zone instable. Entre binodale et spinodale : métastabilité."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Pour un gaz de Van der Waals, la pente de l'isotherme au point critique est :",
            answers: ["(∂P/∂V)_T = 0 et (∂²P/∂V²)_T = 0 (point d'inflexion horizontal)", "(∂P/∂V)_T = −∞", "(∂P/∂V)_T = 1", "Positive"],
            correct: 0,
            explanation: "Le point critique est défini par ces deux conditions → 2 équations pour déterminer T_c et V_c."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Dans le plan P-V réduit (π=P/P_c, φ=V/V_c, τ=T/T_c), la loi des états correspondants de Van der Waals est :",
            answers: ["(π + 3/φ²)(3φ − 1) = 8τ (universelle !)", "πφ = τ", "(π+1)(φ−1) = τ", "π = τ/φ"],
            correct: 0,
            explanation: "En variables réduites, l'équation de Van der Waals devient universelle : même forme pour tous les gaz."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Le diagramme de Mollier H-S est préféré au P-V pour les machines à vapeur car :",
            answers: ["Une détente isentropique est une droite verticale et la chute ΔH est directement le travail", "Il est plus facile à lire", "L'entropie est constante", "P est toujours constante"],
            correct: 0,
            explanation: "Dans le plan H-S, S=const = vertical. La chute d'enthalpie ΔH pour une turbine (travail utile) se lit directement."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Sur un diagramme P-V logarithmique (log P vs log V), une adiabatique réversible PV^γ=cst apparaît comme :",
            answers: ["Une droite de pente −γ", "Une courbe exponentielle", "Une droite de pente −1", "Une courbe horizontale"],
            correct: 0,
            explanation: "ln P + γ ln V = const → droite de pente −γ dans le plan (ln V, ln P)."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Le cycle de Lenoir (moteur à explosion) dans le plan P-V comprend :",
            answers: ["Isochore (combustion) + adiabatique (détente) + isobare (admission/échappement)", "2 isothermes + 2 adiabatiques", "2 isochores + 2 isobares", "4 adiabatiques"],
            correct: 0,
            explanation: "Le cycle de Lenoir : B→C isochore (combustion), C→A adiabatique (détente), A→B isobare (échappement et admission)."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Dans un diagramme P-v pour une turbine à vapeur, le titre x (fraction vapeur) est défini comme :",
            answers: ["x = (v − v_l)/(v_v − v_l) dans la zone diphasée", "x = P/P_sat", "x = T/T_sat", "x = ΔH/L"],
            correct: 0,
            explanation: "Dans la zone diphasée, v = (1−x)v_l + x·v_v → x = (v−v_l)/(v_v−v_l). x=0 : tout liquide ; x=1 : tout vapeur."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Pourquoi le cycle de Carnot est-il difficile à réaliser en pratique ?",
            answers: [
              "Les transformations réversibles requièrent des processus infiniment lents → puissance nulle",
              "Car Q = 0 toujours",
              "Car γ = 1",
              "Car W = 0"
            ],
            correct: 0,
            explanation: "Un processus réversible est infiniment lent → la puissance (travail/temps) tend vers 0. En pratique, on cherche un compromis rendement/puissance."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Le cycle de puissance maximale (endoreversible de Curzon-Ahlborn) donne un rendement optimal :",
            answers: ["η_CA = 1 − √(T_C/T_H)", "η_Carnot = 1 − T_C/T_H", "η = 0,5", "η = 1"],
            correct: 0,
            explanation: "Curzon-Ahlborn (1975) : en optimisant la puissance avec des résistances thermiques aux échangeurs, η_opt = 1 − √(T_C/T_H)."
          }
        ],
        // Niveau 6
        [
          {
            type: "mcq",
            visual: "📈",
            question: "L'équation de Clausius-Clapeyron dP/dT = ΔS_transition / ΔV_transition peut être lue dans le diagramme P-T. Que représente-t-elle géométriquement ?",
            answers: ["La pente de la courbe de coexistence entre deux phases dans le plan P-T", "L'aire sous la courbe P-V", "Le travail d'une isotherme", "La dérivée de l'entropie"],
            correct: 0,
            explanation: "dP/dT sur la courbe de coexistence = ΔS/ΔV = L/(TΔV) : elle donne la pente de la ligne de transition dans le diagramme de phases."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Dans le plan P-V d'un gaz à effet collectif (plasma de quarks-gluons), une transition de phase du 1er ordre apparaît comme :",
            answers: ["Un palier horizontal similaire à la transition liquide-vapeur (coexistence de phases)", "Une hyperbole continue", "Un point", "Une droite verticale"],
            correct: 0,
            explanation: "La transition hadrons→QGP est une transition de phase → peut présenter un palier dans le diagramme d'état (sujet actuel de la physique des hautes énergies)."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "La topologie du diagramme de phases dans le plan P-T d'une substance pure comporte 3 régions (S, L, G) séparées par des courbes. Le point triple est le point où :",
            answers: ["Les 3 phases coexistent (S, L, G) et il est unique par la règle de Gibbs (v=0)", "Seule la vapeur existe", "P = P_critique", "Les courbes se croisent en 2 points"],
            correct: 0,
            explanation: "Point triple : 3 phases en équilibre → règle de Gibbs v = 1−3+2 = 0 degré de liberté : point unique."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Dans un diagramme P-V généralisé incluant des gaz quantiques (Bose-Einstein), la condensation de Bose-Einstein apparaît comme :",
            answers: ["Un palier dans la courbe P(V) à T < T_c (analogue à la condensation vapeur)", "Un pic de pression", "Une isotherme plate", "Une divergence de P"],
            correct: 0,
            explanation: "La condensation de Bose-Einstein est une transition de phase quantique avec coexistence de la phase condensée et des excitations → palier dans le diagramme P-V."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Le diagramme de Hugoniot (P vs V spécifique) décrit :",
            answers: ["Les états accessibles par onde de choc (locus des états finaux pour différentes intensités de choc)", "Les cycles thermodynamiques", "Les états d'équilibre seulement", "La condensation"],
            correct: 0,
            explanation: "La courbe de Hugoniot dans le plan P-v représente les états finaux accessibles par une onde de choc se propageant dans un matériau."
          },
          {
            type: "mcq",
            visual: "📈",
            question: "Quelle est la relation entre le diagramme P-V et le diagramme P-S d'un gaz parfait ?",
            answers: [
              "S = nC_v ln(T) + nR ln(V) + cst → les deux sont liés via T=PV/(nR)",
              "Ce sont les mêmes",
              "P-S n'existe pas",
              "S = P × V"
            ],
            correct: 0,
            explanation: "L'entropie d'un gaz parfait : S = nC_v ln T + nR ln V + cst = nC_v ln(PV/nR) + nR ln V + cst → lien analytique entre (P,V) et (P,S)."
          }
        ]
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // NOTION 7 — Gaz parfait
    // ─────────────────────────────────────────────────────────────────
    {
      id: "gaz-parfait",
      label: "Gaz parfait",
      icon: "🔁",
      lesson: {
        formula: "P V = n R T   (R = 8,314 J·mol⁻¹·K⁻¹)",
        text: "L'équation d'état des gaz parfaits relie pression, volume, quantité de matière et température. Un gaz parfait est un modèle idéal : molécules ponctuelles sans interactions. Il décrit bien les gaz réels à basse pression et haute température.",
        example: "1 mol de gaz parfait à T=300K, P=10⁵ Pa : V = nRT/P = 1×8,314×300/10⁵ ≈ 24,9 L."
      },
      fullBlocks: [
        {
          type: "formula",
          title: "🔑 Équation d'état des gaz parfaits",
          formula: "PV = nRT",
          text: "L'équation d'état des gaz parfaits relie les quatre variables d'état : P (Pa), V (m³), n (mol), T (K). R = 8,314 J·mol⁻¹·K⁻¹. Cette équation combine trois lois expérimentales : Boyle-Mariotte (T=cst → PV=cst), Charles (P=cst → V/T=cst) et Gay-Lussac (V=cst → P/T=cst)."
        },
        {
          type: "formula",
          title: "🔑 Les 3 lois particulières",
          formula: "Boyle-Mariotte (T=cst) : P₁V₁ = P₂V₂<br>Charles (P=cst) : V₁/T₁ = V₂/T₂<br>Gay-Lussac (V=cst) : P₁/T₁ = P₂/T₂",
          text: "Ces lois sont des cas particuliers de PV=nRT (n fixé). Intuition physique : à T=cst, comprimer le gaz → les molécules se percutent plus souvent → P augmente. À P=cst, chauffer → molécules plus rapides → occupent plus de volume."
        },
        {
          type: "example",
          title: "✅ Applications concrètes des lois des gaz",
          text: "<strong>Boyle-Mariotte (plongée)</strong> : À 10 m de profondeur (P=2 atm), une bouteille contient 12 L d'air. En remontant à la surface (P=1 atm) : V₂ = P₁V₁/P₂ = 2×12/1 = <strong>24 L</strong>. Si le plongeur retient sa respiration : les poumons éclatent !<br><br><strong>Gay-Lussac (pneu)</strong> : Pneu de voiture à froid (T₁=283K, P₁=2,2 bar). Après un trajet (T₂=323K) : P₂ = P₁T₂/T₁ = 2,2×323/283 ≈ <strong>2,5 bar</strong>. C'est pourquoi il faut vérifier les pneus à froid !"
        },
        {
          type: "formula",
          title: "🔑 Autres formes de PV = nRT",
          formula: "PV = NkT  (N = nb molécules, k_B = 1,38×10⁻²³ J·K⁻¹)<br>P = ρRT/M  (ρ : masse volumique, M : masse molaire)<br>Pv_m = RT  (v_m = V/n : volume molaire)",
          text: "k_B = R/N_A = 1,38×10⁻²³ J·K⁻¹ (constante de Boltzmann). La forme P=ρRT/M est utile pour l'atmosphère. Exemple : masse volumique de l'air à T=293K, P=10⁵ Pa, M=29g/mol → ρ = PM/(RT) = 10⁵×0,029/(8,314×293) ≈ 1,19 kg/m³."
        },
        {
          type: "technique",
          title: "🛠️ Méthode de résolution — Gaz parfait",
          text: "1) <strong>Identifier la(les) variable(s) constante(s)</strong> : T, P ou V .<br>2) <strong>Choisir la bonne loi</strong> : P₁V₁=P₂V₂ (T=cst) ou V₁/T₁=V₂/T₂ (P=cst) ou P₁/T₁=P₂/T₂ (V=cst).<br>3) <strong>Cas général</strong> : P₁V₁/T₁ = P₂V₂/T₂ = nR.<br>4) ⚠️ T toujours en Kelvin !<br>5) P en Pa et V en m³ si on veut des Joules."
        },
        {
          type: "definition",
          title: "📌 Le modèle du gaz parfait",
          text: "Un gaz est 'parfait' quand :<br>• Les molécules sont <strong>ponctuelles</strong> (volume propre négligeable).<br>• <strong>Pas d'interactions</strong> intermoléculaires (sauf lors des chocs élastiques).<br>Ces hypothèses valent à <strong>faible pression</strong> (molécules éloignées) et <strong>haute température</strong> (énergie cinétique >> interactions). L'air à pression atmosphérique et T ambiante est un très bon gaz parfait (écart < 0,1%). À haute pression (réservoirs HP, gaz liquéfié), utiliser Van der Waals."
        },
        {
          type: "demo",
          title: "🔬 Volume molaire à conditions normales",
          text: "À CNTP (T=273,15K, P=10⁵ Pa = 1 bar) : V_m = RT/P = 8,314×273,15/10⁵ ≈ <strong>22,71 L/mol</strong>.<br>À T=298K (25°C), P=10⁵ Pa : V_m ≈ <strong>24,79 L/mol</strong>.<br>Intuition : 1 mol de gaz parfait à CNTP occupe environ 22 L, soit un cube d'environ 28 cm de côté. Cela correspond à 6×10²³ molécules dans ce volume ! L'ancien CNTP (T=273K, P=1 atm) donnait 22,41 L/mol."
        },
        {
          type: "formula",
          title: "🔑 Loi de Dalton — pressions partielles",
          formula: "P_total = Σ P_i  (loi de Dalton)<br>P_i = x_i × P_total  (x_i = n_i/n_total : fraction molaire)",
          text: "Dans un mélange de gaz parfaits, chaque composant se comporte indépendamment. Exemple : air (N₂ ≈ 78%, O₂ ≈ 21%, Ar ≈ 1%) à P₀=10⁵ Pa → P(N₂) ≈ 78 000 Pa, P(O₂) ≈ 21 000 Pa. Application : calcul du taux d'O₂ dans une caissons hyperbare."
        },
        {
          type: "formula",
          title: "🔑 Vitesses caractéristiques des molécules (Maxwell-Boltzmann)",
          formula: "v_mp = √(2RT/M)  |  v̄ = √(8RT/πM)  |  v_rms = √(3RT/M)<br>Ordre : v_mp < v̄ < v_rms",
          text: "La distribution de Maxwell-Boltzmann donne la répartition des vitesses. Exemple pour N₂ (M=0,028 kg/mol) à T=300K : v_mp ≈ 422 m/s, v̄ ≈ 476 m/s, v_rms ≈ 517 m/s. Pour He (M=0,004) : 4× plus élevées ! Plus les molécules sont légères, plus elles sont rapides."
        },
        {
          type: "graph",
          title: "📊 Distribution de Maxwell-Boltzmann des vitesses",
          svgContent: `<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <line x1="40" y1="190" x2="400" y2="190" stroke="#374151" stroke-width="2"/>
  <line x1="40" y1="190" x2="40" y2="20" stroke="#374151" stroke-width="2"/>
  <text x="408" y="194" font-size="12" fill="#374151" font-weight="bold">v</text>
  <text x="28" y="16" font-size="12" fill="#374151" font-weight="bold">f(v)</text>
  <!-- Courbe T1 = 300K (plus haute, pic vers gauche) -->
  <path d="M 40 190 C 60 185 90 130 130 70 C 155 35 175 22 200 25 C 230 30 265 60 295 110 C 320 148 345 175 390 188" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <text x="195" y="19" text-anchor="middle" font-size="10" fill="#2563eb" font-weight="bold">T₁ = 300 K</text>
  <!-- Courbe T2 = 600K (moins haute, pic vers droite) -->
  <path d="M 40 190 C 70 188 110 170 160 130 C 200 100 235 78 270 68 C 305 60 340 70 380 100 C 395 112 400 120 400 125" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <text x="285" y="60" text-anchor="middle" font-size="10" fill="#dc2626" font-weight="bold">T₂ = 600 K</text>
  <!-- Lignes verticales v_mp, v_rms pour T1 -->
  <line x1="192" y1="190" x2="192" y2="22" stroke="#2563eb" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="192" y="205" text-anchor="middle" font-size="9" fill="#2563eb">v_mp</text>
  <line x1="225" y1="190" x2="225" y2="45" stroke="#2563eb" stroke-width="1" stroke-dasharray="4,3" opacity="0.7"/>
  <text x="225" y="205" text-anchor="middle" font-size="9" fill="#2563eb">v_rms</text>
  <!-- Lignes verticales pour T2 -->
  <line x1="268" y1="190" x2="268" y2="68" stroke="#dc2626" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="268" y="205" text-anchor="middle" font-size="9" fill="#dc2626">v_mp'</text>
  <text x="220" y="215" text-anchor="middle" font-size="9" fill="#9ca3af">Quand T double : v_mp × √2 ≈ 1,41. Distribution plus aplatie, déplacée vers la droite.</text>
</svg>`,
          caption: "Distribution de Maxwell-Boltzmann. À T plus haute : pic plus à droite, distribution plus étalée."
        },
        {
          type: "formula",
          title: "🔑 Loi barométrique (atmosphère isotherme)",
          formula: "P(z) = P₀ exp(−Mgz/RT)<br>H = RT/(Mg) ≈ 8,5 km  (air à 293 K)",
          text: "La pression décroît exponentiellement avec l'altitude z. H ≈ 8,5 km est la hauteur caractéristique. À z=H : P ≈ P₀/e ≈ 0,37 P₀. À z=5,5 km : P ≈ P₀/2 (Everest : 8849 m → P ≈ 0,30 P₀ !). Dérivation : équilibre hydrostatique dP = −ρg dz + gaz parfait P = ρRT/M."
        },
        {
          type: "definition",
          title: "📌 Gaz réel : équation de Van der Waals",
          text: "(P + an²/V²)(V − nb) = nRT.<br>• <strong>an²/V²</strong> : correction des attractions intermoléculaires → la pression réelle est plus faible qu'un GP.<br>• <strong>nb</strong> : volume propre des molécules → volume libre = V−nb.<br>À P faible et T élevée : les corrections → 0, retrouve PV=nRT. Facteur de compressibilité Z = PV/(nRT) → 1 pour un GP. Z < 1 → attractions dominent. Z > 1 → répulsions."
        },
        {
          type: "warning",
          title: "⚠️ Erreurs fréquentes avec PV = nRT",
          text: "• T <strong>toujours en Kelvin</strong> : T(K) = T(°C) + 273,15.<br>• n en <strong>moles</strong> : n = masse (g) / masse molaire (g/mol).<br>• P en Pascal et V en m³ → résultat en Joules.<br>• N (nb de molécules) ≠ n (nb de moles) : N = n × N_A = n × 6,022×10²³.<br>• Le gaz parfait est un <strong>modèle</strong> : valide à basse P et haute T. Ne pas l'appliquer près de la condensation."
        }

      ],
      levels: [
        // Niveau 1
        [
          {
            type: "mcq",
            visual: "🔁",
            question: "L'équation d'état des gaz parfaits est :",
            answers: ["PV = nRT", "PV = nR/T", "P = nRT/V²", "PV = RT"],
            correct: 0,
            explanation: "PV = nRT est l'équation fondamentale des gaz parfaits."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "La constante des gaz parfaits R vaut :",
            answers: ["8,314 J·mol⁻¹·K⁻¹", "6,022×10²³", "1,38×10⁻²³ J·K⁻¹", "9,81 J·mol⁻¹"],
            correct: 0,
            explanation: "R = 8,314 J·mol⁻¹·K⁻¹ (parfois arrondi à 8,31)."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "La loi de Boyle-Mariotte (T=cst) donne :",
            answers: ["PV = constante", "V/T = constante", "P/T = constante", "PV/T = constante"],
            correct: 0,
            explanation: "À T constant : PV = nRT = cst."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "La loi de Charles (P=cst) donne :",
            answers: ["V/T = constante", "PV = constante", "P/T = constante", "PT = constante"],
            correct: 0,
            explanation: "À P constant : V/T = nR/P = cst."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "La loi de Gay-Lussac (V=cst) donne :",
            answers: ["P/T = constante", "PV = constante", "V/T = constante", "PT = constante"],
            correct: 0,
            explanation: "À V constant : P/T = nR/V = cst."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "1 mol de gaz parfait à 300K et 10⁵ Pa : V ≈ ?",
            answers: ["≈ 24,9 L", "≈ 22,4 L", "≈ 1 L", "≈ 8,3 L"],
            correct: 0,
            explanation: "V = nRT/P = 1×8,314×300/10⁵ ≈ 24,9×10⁻³ m³ = 24,9 L."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "Si on double la pression à T constant (Boyle-Mariotte), le volume :",
            answers: ["Est divisé par 2", "Est multiplié par 2", "Ne change pas", "Est multiplié par 4"],
            correct: 0,
            explanation: "PV = cst → P×2 implique V÷2."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "Pourquoi faut-il T en Kelvin dans PV = nRT ?",
            answers: ["Car T doit être l'échelle absolue (T>0 toujours)", "Par convention arbitraire", "Car P est en Pascal", "Car n est en mol"],
            correct: 0,
            explanation: "T = 0 K = absence totale d'agitation → le volume tendrait vers 0. L'échelle Celsius peut être négative, ce qui est physiquement incohérent."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "La constante de Boltzmann k_B est liée à R par :",
            answers: ["k_B = R / N_A", "k_B = R × N_A", "k_B = R²", "k_B = R + N_A"],
            correct: 0,
            explanation: "R = N_A × k_B → k_B = R/N_A = 8,314/6,022×10²³ ≈ 1,38×10⁻²³ J·K⁻¹."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "Un gaz parfait a n=2 mol, T=300K, V=50L. P = ?",
            answers: ["≈ 9,98×10⁴ Pa ≈ 10⁵ Pa", "≈ 2×10⁵ Pa", "≈ 5×10⁴ Pa", "≈ 1,66×10⁵ Pa"],
            correct: 0,
            explanation: "P = nRT/V = 2×8,314×300/(50×10⁻³) ≈ 99 768 Pa ≈ 10⁵ Pa."
          }
        ],
        // Niveau 2
        [
          {
            type: "mcq",
            visual: "🔁",
            question: "Un gaz à P₁=2×10⁵ Pa, V₁=10 L, T₁=300 K est chauffé à P constante jusqu'à T₂=450 K. V₂ = ?",
            answers: ["15 L", "20 L", "7,5 L", "30 L"],
            correct: 0,
            explanation: "V₂ = V₁×T₂/T₁ = 10×450/300 = 15 L."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "Un gaz à P₁=10⁵ Pa, T₁=300 K est chauffé à V=const jusqu'à T₂=600 K. P₂ = ?",
            answers: ["2×10⁵ Pa", "10⁵ Pa", "4×10⁵ Pa", "5×10⁴ Pa"],
            correct: 0,
            explanation: "P₂ = P₁×T₂/T₁ = 10⁵×600/300 = 2×10⁵ Pa."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "Calculer n pour un gaz à P=1,5×10⁵ Pa, V=20 L, T=400 K.",
            answers: ["≈ 0,90 mol", "≈ 1,80 mol", "≈ 0,45 mol", "≈ 3,60 mol"],
            correct: 0,
            explanation: "n = PV/(RT) = 1,5×10⁵×20×10⁻³/(8,314×400) ≈ 3000/3325,6 ≈ 0,90 mol."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "Un ballon de 10 L à 20°C (T=293K) est plongé dans de l'azote liquide (T=77K), P=cst. V_final ≈ ?",
            answers: ["≈ 2,6 L", "≈ 5 L", "≈ 7,7 L", "≈ 1 L"],
            correct: 0,
            explanation: "V₂ = V₁×T₂/T₁ = 10×77/293 ≈ 2,63 L."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "Une bouteille de plongée (12 L) à P=200 bars, T=293 K contient n ≈ ?",
            answers: ["≈ 987 mol", "≈ 82 mol", "≈ 2400 mol", "≈ 120 mol"],
            correct: 0,
            explanation: "n = PV/(RT) = 200×10⁵×12×10⁻³/(8,314×293) ≈ 24 000/2436 ≈ 985 mol."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "Pour un gaz parfait, si P triple et T double, V devient :",
            answers: ["V × (2/3)", "V × (3/2)", "V × 6", "V × (1/6)"],
            correct: 0,
            explanation: "PV/T = cst → V₂ = V₁×T₂/T₁×P₁/P₂ = V₁×2/3."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "Un gaz parfait à T=300 K a une masse volumique ρ=1,2 kg/m³. Sa pression est P=10⁵ Pa. Quelle est sa masse molaire M ?",
            answers: ["≈ 29,9 g/mol (proche de l'air)", "≈ 2 g/mol", "≈ 44 g/mol", "≈ 18 g/mol"],
            correct: 0,
            explanation: "M = ρRT/P = 1,2×8,314×300/10⁵ ≈ 29,9×10⁻³ kg/mol = 29,9 g/mol."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "Loi de Dalton pour un mélange de gaz parfaits : P_totale = ?",
            answers: ["Σ P_i (somme des pressions partielles)", "Π P_i", "P_i / n", "max(P_i)"],
            correct: 0,
            explanation: "Loi de Dalton : la pression totale est la somme des pressions partielles de chaque composant."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "La pression partielle d'un gaz i dans un mélange est P_i = ?",
            answers: ["x_i × P_totale (x_i : fraction molaire)", "n_i × P_totale", "P_totale / n_i", "n_i / V"],
            correct: 0,
            explanation: "P_i = n_i RT/V = (n_i/n_tot)×P_tot = x_i×P_tot."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "À CNTP (T=273,15K, P=10⁵ Pa), le volume molaire d'un gaz parfait est :",
            answers: ["≈ 22,71 L/mol", "≈ 22,4 L/mol", "≈ 24,9 L/mol", "≈ 1 L/mol"],
            correct: 0,
            explanation: "V_m = RT/P = 8,314×273,15/10⁵ ≈ 22,71 L/mol. (22,4 L/mol correspond à l'ancien CNTP avec P=1 atm)."
          }
        ],
        // Niveau 3
        [
          {
            type: "mcq",
            visual: "🔁",
            question: "Un récipient de 50 L contient N₂ (M=28 g/mol) à P=2×10⁵ Pa et T=400 K. Masse de N₂ = ?",
            answers: ["≈ 84,5 g", "≈ 42,2 g", "≈ 169 g", "≈ 28 g"],
            correct: 0,
            explanation: "n = PV/(RT) = 2×10⁵×0,05/(8,314×400) ≈ 3,01 mol. m = nM = 3,01×28 ≈ 84,3 g."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "Un mélange : 3 mol N₂ + 2 mol O₂ à T=300K, V=50L. P_totale et P(N₂) = ?",
            answers: [
              "P_tot = nRT/V ≈ 2,49×10⁵ Pa ; P(N₂) = (3/5)×P_tot ≈ 1,49×10⁵ Pa",
              "P_tot = 10⁵ Pa ; P(N₂) = 3×10⁵/5",
              "P_tot = 5RT/V ; P(N₂) = P_tot",
              "P(N₂) = 2×10⁵ Pa"
            ],
            correct: 0,
            explanation: "n_tot=5 mol. P_tot=5×8,314×300/(0,05)≈2,49×10⁵ Pa. P(N₂)=3/5×2,49×10⁵≈1,49×10⁵ Pa."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "L'équation de Van der Waals corrige le gaz parfait avec :",
            answers: [
              "(P + an²/V²)(V − nb) = nRT (a : interactions, b : volume propre)",
              "PV = nRT + a",
              "PV = nRT/(1+b)",
              "P(V+nb) = nRT"
            ],
            correct: 0,
            explanation: "Van der Waals : a corrige la pression (attractions → pression réduite) ; b corrige le volume (volume propre des molécules)."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "Pour quelle condition physique le modèle du gaz parfait est-il le plus valide ?",
            answers: ["Basse pression et haute température", "Haute pression et basse température", "Près du point de condensation", "Pression = P_critique"],
            correct: 0,
            explanation: "Basse P : molécules éloignées → interactions négligeables. Haute T : énergie cinétique >> interactions → hypothèses du gaz parfait vérifiées."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "Calculer W pour une compression isotherme réversible d'un gaz parfait (n=1 mol, T=500K) de V=40L à V=10L.",
            answers: ["≈ +5763 J", "≈ −5763 J", "0", "≈ +2882 J"],
            correct: 0,
            explanation: "W = −nRT ln(V_f/V_i) = −1×8,314×500×ln(10/40) = −4157×(−1,386) ≈ +5763 J."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "La vitesse quadratique moyenne des molécules d'un gaz parfait est v_rms = √(3RT/M). Pour O₂ (M=32g/mol) à 300K : v_rms ≈ ?",
            answers: ["≈ 483 m/s", "≈ 300 m/s", "≈ 968 m/s", "≈ 150 m/s"],
            correct: 0,
            explanation: "v_rms = √(3×8,314×300/0,032) = √(233 806) ≈ 483 m/s."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "Pour un gaz parfait, l'énergie interne U = (f/2)nRT (f : degrés de liberté). Pour l'hélium (f=3, n=1 mol, T=400K) : U = ?",
            answers: ["≈ 4988 J", "≈ 3325 J", "≈ 6648 J", "≈ 1662 J"],
            correct: 0,
            explanation: "U = (3/2)×1×8,314×400 ≈ 4988 J."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "L'air (M≈29 g/mol) à T=293K, P=10⁵ Pa. Masse volumique ρ = ?",
            answers: ["≈ 1,19 kg/m³", "≈ 1,29 kg/m³", "≈ 0,99 kg/m³", "≈ 2,89 kg/m³"],
            correct: 0,
            explanation: "ρ = PM/(RT) = 10⁵×0,029/(8,314×293) ≈ 1,19 kg/m³."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "Lors d'une compression adiabatique réversible de gaz parfait (γ=7/5) : si P double, T est multipliée par :",
            answers: [
              "2^((γ-1)/γ) = 2^(2/7) ≈ 1,22",
              "2",
              "2^(γ) = 2^1,4",
              "√2"
            ],
            correct: 0,
            explanation: "T^γ P^(1−γ) = cst → T₂/T₁ = (P₂/P₁)^((γ-1)/γ) = 2^(2/7) ≈ 1,22."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "Pour 4 mol de gaz parfait (γ=5/3) à T=300K, V=100L : calculer P, U et W pour une détente adiabatique réversible jusqu'à V=200L.",
            answers: [
              "P_i≈9975Pa; ΔU=W=nC_vΔT=-1247×ΔT; calcul complet nécessite T_f=T_i×(V_i/V_f)^(γ-1)=300×(1/2)^(2/3)≈189K",
              "ΔU=0",
              "W=0",
              "T_f=300K"
            ],
            correct: 0,
            explanation: "T_f = 300×(100/200)^(2/3) ≈ 189K. ΔU = 4×(3R/2)×(189-300) ≈ -5548 J = W."
          }
        ],
        // Niveau 4
        [
          {
            type: "mcq",
            visual: "🔁",
            question: "Le facteur de compressibilité Z = PV/(nRT) d'un gaz réel est : Z=1 pour un gaz parfait. Z < 1 indique :",
            answers: ["Des attractions dominantes (le gaz est plus compressible que prévu)", "Des répulsions dominantes", "Un gaz parfait", "T = 0"],
            correct: 0,
            explanation: "Z < 1 : les attractions intermoléculaires réduisent la pression effective → le volume est plus petit qu'attendu → Z < 1."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "La température de Boyle T_B = a/(Rb) d'un gaz de Van der Waals est la température à laquelle :",
            answers: ["Z ≈ 1 sur une large gamme de pression (compensation des termes a et b)", "Z = 0", "a = 0", "b = 0"],
            correct: 0,
            explanation: "À T_Boyle, les effets des attractions (a) et du volume propre (b) se compensent → comportement quasi-parfait."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "Le coefficient du viriel B(T) dans P = ρRT(1 + Bρ + Cρ² + …) est négatif si :",
            answers: ["Les attractions dominent (T < T_Boyle)", "Les répulsions dominent", "T est très élevée", "P est très élevée"],
            correct: 0,
            explanation: "B(T) < 0 : les paires de molécules tendent à se rapprocher → effet attractif → Z < 1."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "Pour un mélange de gaz parfaits, l'énergie interne est :",
            answers: ["U = Σ U_i = Σ n_i C_v,i T (somme des U individuels)", "U = n_total C_v T", "U = 0", "U = PV"],
            correct: 0,
            explanation: "Pas d'interactions entre molécules dans un mélange de gaz parfaits → U totale = somme des U individuels."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "Pour un gaz parfait, la pression osmotique π d'une solution diluée (loi de Van 't Hoff) est analogue à :",
            answers: ["PV = nRT avec n = nombre de moles de soluté : π V = n_s RT", "π = ρgV", "π = kT/V", "π = 0"],
            correct: 0,
            explanation: "La loi de Van 't Hoff (π = cRT) est formellement identique à PV=nRT pour les solutions diluées ideales."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "L'atmosphère standard à z=0 : P₀=101 325 Pa. Loi barométrique pour une isotherme : P(z) = ?",
            answers: [
              "P₀ exp(−Mgz/RT) (M=masse molaire air, R, T=cst)",
              "P₀ − ρgz",
              "P₀ × z",
              "P₀/z"
            ],
            correct: 0,
            explanation: "En isotherme : P(z) = P₀ e^(−Mgz/RT). Pour l'air (M=0,029 kg/mol) à T=293K : P diminue de moitié tous les ~5,5 km."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "Pour un gaz parfait diatomique à haute T (C_v=7R/2), γ = ?",
            answers: ["9/7 ≈ 1,29", "7/5 = 1,4", "5/3 ≈ 1,67", "1"],
            correct: 0,
            explanation: "C_v=7R/2, C_p=9R/2 → γ = 9/7 ≈ 1,286 (vibrations activées à haute T)."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "Calculer la température d'un piston-cylindre adiabatique : gaz parfait (n=2 mol, γ=5/3), T_i=300K, V_i=10L, comprimé irréversiblement à P_ext=5×10⁵ Pa jusqu'à équilibre. P_f = P_ext, V_f = ?",
            answers: [
              "nRT_f = P_f V_f et ΔU = nC_v(T_f−T_i) = W = −P_ext(V_f−V_i) → résolution système",
              "V_f = V_i/2",
              "T_f = T_i",
              "V_f = nRT_i/P_ext"
            ],
            correct: 0,
            explanation: "Système : nC_v(T_f−T_i) = −P_f(V_f−V_i) et P_fV_f = nRT_f → 2 équations, 2 inconnues (T_f, V_f)."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "Pour un gaz parfait en détente de Joule-Thomson (ΔH=0), ΔT = ?",
            answers: ["0 (car H=nC_pT ne dépend que de T pour un GP)", "ΔT > 0", "ΔT < 0", "ΔT = ΔP/R"],
            correct: 0,
            explanation: "ΔH = 0 et H = nC_pT → ΔT = 0. Pour les gaz réels, μ_JT ≠ 0."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "Dans un mélange de gaz parfaits, la capacité thermique molaire à pression constante du mélange est :",
            answers: [
              "C_p,méla = Σ x_i C_p,i (moyenne pondérée par les fractions molaires)",
              "C_p,méla = max(C_p,i)",
              "C_p,méla = min(C_p,i)",
              "C_p,méla = Σ C_p,i"
            ],
            correct: 0,
            explanation: "Pas d'interactions → C_p du mélange = somme pondérée des C_p individuels par les fractions molaires."
          }
        ],
        // Niveau 5
        [
          {
            type: "mcq",
            visual: "🔁",
            question: "La dérivation microscopique de PV=NkT depuis la théorie cinétique utilise :",
            answers: ["La quantité de mouvement transférée par les chocs élastiques sur les parois", "La loi de Coulomb", "La gravité", "L'énergie potentielle des molécules"],
            correct: 0,
            explanation: "P = force/surface = (taux de transfert de quantité de mouvement des molécules sur la paroi) → P = Nmv²/(3V) = Nk_BT/V."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "La distribution de Maxwell-Boltzmann des vitesses f(v) ∝ v² exp(−mv²/2k_BT). La vitesse la plus probable v_p est :",
            answers: ["v_p = √(2k_BT/m) = √(2RT/M)", "v_p = √(3RT/M)", "v_p = √(8RT/πM)", "v_p = √(RT/M)"],
            correct: 0,
            explanation: "df/dv = 0 → 2v e^(−mv²/2k_BT) − v²(mv/k_BT) e^(−mv²/2k_BT) = 0 → v_p = √(2k_BT/m)."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "Le nombre de chocs par unité de temps et de surface sur une paroi est ν = n⟨v⟩/4. Pour l'air à P=10⁵ Pa, T=300K : ν ≈ ?",
            answers: ["≈ 3×10²⁷ chocs·m⁻²·s⁻¹", "≈ 10²³", "≈ 10¹⁰", "≈ 10³"],
            correct: 0,
            explanation: "n ≈ 2,4×10²⁵ m⁻³. ⟨v⟩ ≈ 475 m/s. ν = n⟨v⟩/4 ≈ 2,4×10²⁵×475/4 ≈ 2,85×10²⁷ chocs·m⁻²·s⁻¹."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "La viscosité dynamique d'un gaz parfait μ = nmv_therm λ/3 est indépendante de la pression car :",
            answers: ["Plus de molécules mais libre parcours moyen plus court → compensation exacte", "P n'intervient pas", "Les chocs disparaissent", "λ augmente avec P"],
            correct: 0,
            explanation: "n ∝ P et λ ∝ 1/n → nλ = const → μ indépendant de P. Prédit par Maxwell (1866), vérifié expérimentalement."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "La conductivité thermique d'un gaz parfait κ = nk_B⟨v⟩λ·f/6 est aussi indépendante de P. À T fixé, κ ∝ ?",
            answers: ["κ ∝ T^(1/2) (via ⟨v⟩ ∝ T^(1/2))", "κ ∝ T", "κ ∝ T²", "κ = cst"],
            correct: 0,
            explanation: "⟨v⟩ ∝ √T et λ ≈ cst (indép. de T) → κ ∝ √T pour un gaz parfait."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "Le nombre de Knudsen Kn = λ/L distingue :",
            answers: ["Kn ≪ 1 (régime continu), Kn ≫ 1 (régime moléculaire)", "Kn ≪ 1 (moléculaire)", "Kn = 1 toujours", "Kn est sans dimension mais pas utile"],
            correct: 0,
            explanation: "Kn = λ/L. Si Kn ≪ 1 : nombreux chocs entre molécules → régime continu (Navier-Stokes valide). Si Kn ≫ 1 : les molécules traversent sans collisions → régime moléculaire."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "Pour un plasma (gaz totalement ionisé), l'équation d'état est P = n_e k_B T + n_i k_B T ≈ 2nk_BT. Cela signifie :",
            answers: ["Électrons et ions contribuent séparément à la pression (Dalton)", "P double par magie", "k_B double", "n double automatiquement"],
            correct: 0,
            explanation: "Dans un plasma totalement ionisé (Z=1) : n_e = n_i = n → P = 2nk_BT. Chaque espèce (e⁻ et ion) contribue indépendamment."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "La distribution de Fermi-Dirac pour les électrons d'un métal diffère du gaz parfait car :",
            answers: ["Le principe d'exclusion de Pauli interdit deux électrons dans le même état quantique", "Les électrons n'ont pas de masse", "T = 0 seulement", "L'énergie est nulle"],
            correct: 0,
            explanation: "Fermi-Dirac vs Maxwell-Boltzmann : les électrons (fermions) suivent le principe d'exclusion → distribution très différente à basse T."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "Pour un gaz de photons (corps noir), P = U/(3V). En utilisant U = aVT⁴ : P = ?",
            answers: ["P = aT⁴/3 (pression de radiation)", "P = nRT", "P = 0", "P = aT³"],
            correct: 0,
            explanation: "P_radiation = aT⁴/3 où a = 4σ/c est la constante de radiation. Importante en astrophysique (étoiles)."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "La condensation de Bose-Einstein se produit pour des bosons à T < T_c = (ℏ²/mk_B)(n/2,612)^(2/3). Le gaz parfait de bosons se comporte différemment car :",
            answers: ["Plusieurs bosons peuvent occuper le même état quantique → condensation macroscopique dans l'état fondamental", "Les bosons n'obéissent pas à la statistique", "k_B change", "n → 0"],
            correct: 0,
            explanation: "Les bosons (photons, He-4, etc.) peuvent s'accumuler dans l'état d'énergie minimale → condensation de Bose-Einstein en dessous de T_c."
          }
        ],
        // Niveau 6
        [
          {
            type: "mcq",
            visual: "🔁",
            question: "Le théorème du viriel de Clausius ⟨E_c⟩ = −(1/2)⟨Σ r_i·F_i⟩ donne pour un gaz parfait (F_i = force des parois seulement) :",
            answers: ["(3/2)Nk_BT = (1/2)PV×6 → PV = Nk_BT ✓", "PV = 0", "E_c = PV²", "PV = 3Nk_BT"],
            correct: 0,
            explanation: "Pour un gaz parfait, les seules forces sont les parois → viriel des parois = 3PV/2 = (3/2)Nk_BT → PV = Nk_BT."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "La fonction de partition d'un gaz parfait monoatomique (N particules) est Z_N = (V/λ³)^N / N! où λ = h/√(2πmk_BT) est la longueur de De Broglie thermique. De Z_N on dérive P = ?",
            answers: ["P = k_BT (∂ ln Z_N/∂V)_T = Nk_BT/V ✓", "P = k_BT/V", "P = N²k_BT/V", "P = ℏω/V"],
            correct: 0,
            explanation: "P = k_BT(∂lnZ/∂V)_T = k_BT × N/V = Nk_BT/V → PV=Nk_BT ✓ Dérivation rigoureuse de la mécanique statistique."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "Le facteur 1/N! dans Z_N est introduit pour :",
            answers: ["Corriger l'indiscernabilité des particules identiques (paradoxe de Gibbs)", "Normaliser la distribution", "Imposer T constante", "Tenir compte du spin"],
            correct: 0,
            explanation: "Sans 1/N!, l'entropie du mélange de gaz identiques n'est pas extensive (paradoxe de Gibbs) → 1/N! corrige l'overcounting des états identiques."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "La longueur de De Broglie thermique λ = h/√(2πmk_BT) donne la condition de validité du gaz parfait classique :",
            answers: ["nλ³ ≪ 1 (les paquets d'onde quantiques ne se recouvrent pas)", "nλ³ ≫ 1", "λ = 0", "λ = v_rms"],
            correct: 0,
            explanation: "Si nλ³ ≪ 1 : les effets quantiques sont négligeables → statistique classique de Maxwell-Boltzmann valide."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "En relativité générale, l'équation d'état d'un gaz parfait ultrarelativiste (v≈c) devient :",
            answers: ["P = u/3 (u = densité d'énergie, même forme que les photons)", "PV = nRT", "P = ρc²", "P = 0"],
            correct: 0,
            explanation: "Pour des particules ultrarelativistes (E ≈ pc), P = u/3 comme pour les photons — important en cosmologie (ère de radiation)."
          },
          {
            type: "mcq",
            visual: "🔁",
            question: "L'équation d'état d'un neutron dégénéré dans une étoile à neutrons (gaz de Fermi dégénéré non relativiste) est P ∝ ?",
            answers: ["P ∝ ρ^(5/3) (pression de dégénérescence de Fermi)", "P ∝ ρ", "P ∝ ρ^(4/3)", "P = ρk_BT/m"],
            correct: 0,
            explanation: "Gaz de Fermi dégénéré non relativiste : P = K ρ^(5/3) (pression de dégénérescence — indépendante de T)."
          }
        ]
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // NOTION 8 — Second principe (introduction)
    // ─────────────────────────────────────────────────────────────────
    {
      id: "second-principe",
      label: "2nd principe",
      icon: "🔥",
      lesson: {
        formula: "ΔS_univers ≥ 0",
        text: "Le second principe introduit une asymétrie temporelle : les processus spontanés vont dans un sens précis. L'entropie S mesure le 'désordre' du système : elle ne peut qu'augmenter pour un système isolé.",
        example: "Un café chaud refroidit spontanément (ΔS_univers > 0). Il ne se réchauffe jamais spontanément, même si c'est compatible avec le 1er principe."
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 L'idée du second principe",
          text: "Le premier principe dit que l'énergie se conserve — mais il n'explique pas pourquoi un café refroidit et ne se réchauffe jamais spontanément. Le second principe introduit une asymétrie fondamentale du temps : les processus spontanés vont toujours dans un sens précis — celui qui <strong>augmente le désordre total</strong>. L'entropie est la grandeur qui mesure ce désordre."
        },
        {
          type: "definition",
          title: "📌 Entropie S — mesure du désordre",
          text: "L'entropie S (J·K⁻¹) est une fonction d'état extensive qui mesure le nombre de façons microscopiques de réaliser un état macroscopique. <strong>Formule de Boltzmann</strong> : S = k_B ln Ω (Ω = nombre de microétats). Plus Ω est grand (= plus de désordre), plus S est grande. Exemples : cristal parfait à 0K → S=0 (un seul microétat). Gaz dilué à haute T → S très grande."
        },
        {
          type: "formula",
          title: "🔑 Énoncé du second principe",
          formula: "ΔS_univers = ΔS_système + ΔS_milieu ≥ 0",
          text: "L'entropie totale de l'univers (système + milieu) ne peut qu'augmenter ou rester constante. L'égalité correspond à une <strong>transformation réversible</strong> (idéale). L'inégalité correspond à une <strong>transformation irréversible</strong> (réelle). Aucun processus ne peut diminuer ΔS_univers — c'est la 'flèche du temps'."
        },
        {
          type: "graph",
          title: "📊 La flèche du temps thermodynamique",
          svgContent: `<svg viewBox="0 0 430 190" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <!-- Flèche du temps -->
  <line x1="30" y1="95" x2="395" y2="95" stroke="#374151" stroke-width="3" marker-end="url(#tarr)"/>
  <text x="210" y="80" text-anchor="middle" font-size="13" fill="#374151" font-weight="bold">Sens spontané (ΔS_univers &gt; 0)</text>
  <!-- Côté gauche ordre -->
  <rect x="30" y="105" width="80" height="60" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="70" y="128" text-anchor="middle" font-size="10" fill="#1e40af" font-weight="bold">Ordre</text>
  <text x="70" y="143" text-anchor="middle" font-size="9" fill="#1e40af">S faible</text>
  <text x="70" y="155" text-anchor="middle" font-size="8" fill="#6b7280">Cristal 0K</text>
  <!-- Centre -->
  <rect x="170" y="108" width="90" height="55" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
  <text x="215" y="130" text-anchor="middle" font-size="9" fill="#15803d" font-weight="bold">Température</text>
  <text x="215" y="143" text-anchor="middle" font-size="9" fill="#15803d">ambiante</text>
  <text x="215" y="155" text-anchor="middle" font-size="8" fill="#6b7280">Gaz normal</text>
  <!-- Côté droit désordre -->
  <rect x="320" y="105" width="80" height="60" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="360" y="128" text-anchor="middle" font-size="10" fill="#92400e" font-weight="bold">Désordre</text>
  <text x="360" y="143" text-anchor="middle" font-size="9" fill="#92400e">S grande</text>
  <text x="360" y="155" text-anchor="middle" font-size="8" fill="#6b7280">Plasma</text>
  <!-- Exemples spontanés -->
  <text x="210" y="178" text-anchor="middle" font-size="9" fill="#9ca3af">Ex : café chaud → froid ✓ | café froid → chaud spontanément ✗</text>
  <defs>
    <marker id="tarr" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#374151"/></marker>
  </defs>
</svg>`,
          caption: "ΔS_univers ≥ 0 : les processus spontanés vont vers plus de désordre."
        },
        {
          type: "formula",
          title: "🔑 Entropie et chaleur — lien quantitatif",
          formula: "dS = δQ_rev / T  (transformation réversible)<br>ΔS ≥ Q / T_ext  (inégalité de Clausius, cas général)",
          text: "Pour une transformation réversible, la variation d'entropie est dS = δQ_rev/T. Pour une transformation irréversible, ΔS > Q/T_ext : il y a création d'entropie supplémentaire. Pour calculer ΔS d'une transformation irréversible, on utilise un chemin réversible entre les mêmes états (S est une fonction d'état)."
        },
        {
          type: "formula",
          title: "🔑 Variation d'entropie d'un gaz parfait",
          formula: "ΔS = nC_v ln(T_f/T_i) + nR ln(V_f/V_i)<br>     = nC_p ln(T_f/T_i) − nR ln(P_f/P_i)",
          text: "Ces formules s'appliquent à tout processus sur un gaz parfait (S est une fonction d'état).<br>• Isotherme (T=cst) : ΔS = nR ln(V_f/V_i)<br>• Isochore (V=cst) : ΔS = nC_v ln(T_f/T_i)<br>• Isobare (P=cst) : ΔS = nC_p ln(T_f/T_i)<br>• Adiabatique réversible : ΔS = 0 ✓ (les deux termes s'annulent)."
        },
        {
          type: "example",
          title: "✅ Exemples de calcul de ΔS",
          text: "<strong>Ex 1 — Isotherme réversible :</strong> 1 mol de gaz parfait, T=300K, V double (V_f=2V_i).<br>ΔS = nR ln(V_f/V_i) = 1×8,314×ln(2) ≈ <strong>+5,76 J·K⁻¹</strong>. Positif car désordre augmente (volume plus grand).<br><br><strong>Ex 2 — Refroidissement :</strong> 1 mol de gaz parfait monoatomique de 600K à 300K à V=cst.<br>ΔS_sys = nC_v ln(T_f/T_i) = 1×12,47×ln(0,5) ≈ <strong>−8,64 J·K⁻¹</strong>. Le système perd de l'entropie (il se refroidit).<br><br><strong>Ex 3 — Détente libre dans le vide :</strong> Q=0, W=0, ΔU=0 (T=cst). ΔS_sys = nR ln(V_f/V_i) > 0 mais ΔS_milieu = 0 → ΔS_univers > 0 : <strong>irréversible</strong> !"
        },
        {
          type: "technique",
          title: "🛠️ Calculer ΔS_univers pour vérifier la réversibilité",
          text: "1) <strong>Calculer ΔS_système</strong> = nC_v ln(T_f/T_i) + nR ln(V_f/V_i) (gaz parfait).<br>2) <strong>Calculer ΔS_milieu</strong> = −Q_système / T_ext (chaleur reçue par le milieu = −Q_système).<br>3) <strong>ΔS_univers</strong> = ΔS_sys + ΔS_milieu.<br>4) Si ΔS_univers = 0 → réversible. Si > 0 → irréversible. Si < 0 → impossible !"
        },
        {
          type: "formula",
          title: "🔑 Bilan d'entropie : S_échangée + S_créée",
          formula: "ΔS_système = S_échangée + S_créée<br>S_échangée = Q/T_ext  |  S_créée ≥ 0",
          text: "La variation d'entropie d'un système fermé se décompose en entropie échangée (Q/T_ext, peut être ±) et entropie créée (toujours ≥ 0). Les irréversibilités génèrent S_créée > 0. Une transformation est réversible si et seulement si S_créée = 0."
        },
        {
          type: "warning",
          title: "⚠️ Ce que le 2e principe ne dit PAS",
          text: "• <strong>ΔS_système peut être négatif</strong> : un réfrigérateur diminue l'entropie du gaz froid, mais augmente encore plus celle du milieu chaud → ΔS_univers > 0 ✓.<br>• <strong>Le 2e principe ne dit pas</strong> que 'l'entropie augmente toujours' — il dit que <em>l'entropie de l'univers</em> ne peut que croître.<br>• La vie, les cristaux, les organismes créent localement de l'ordre (ΔS < 0) en rejetant plus d'entropie vers l'environnement."
        },
        {
          type: "demo",
          title: "🔬 Paradoxe de Maxwell et limite de la chaleur en travail",
          text: "Maxwell imagina un 'démon' qui trie les molécules rapides/lentes entre deux compartiments, semblant diminuer S sans travail. Résolution de Landauer (1961) : effacer 1 bit d'information dissipe k_BT ln2 ≈ 2,8×10⁻²¹ J → le démon doit effacer sa mémoire → produit de l'entropie. Le 2e principe est sauvé ! Conséquence pratique : un moteur ne peut jamais convertir 100% d'une chaleur Q en travail (η_Carnot < 1)."
        },
        {
          type: "formula",
          title: "🔑 Entropie de mélange",
          formula: "ΔS_mél = −nR Σ x_i ln x_i ≥ 0<br>Mélange 50/50 (x₁=x₂=1/2) : ΔS_mél = nR ln 2",
          text: "Mélanger deux gaz parfaits distincts à T, P identiques crée de l'entropie. ΔS_mél > 0 car x_i < 1 → ln x_i < 0. Le mélange est un processus spontané et irréversible. Mélanger des gaz identiques : ΔS = 0 (indiscernabilité quantique — paradoxe de Gibbs)."
        },
        {
          type: "definition",
          title: "📌 Trois énoncés équivalents du 2e principe et 3e principe",
          text: "<strong>Trois formulations équivalentes :</strong><br>• <strong>Clausius</strong> : la chaleur ne passe pas spontanément d'un corps froid vers un corps chaud.<br>• <strong>Kelvin-Planck</strong> : impossible de construire un cycle dont le seul effet est de prélever de la chaleur à une source unique et de la convertir entièrement en travail (pas de 'moteur parfait').<br>• <strong>Entropique</strong> : ΔS_univers ≥ 0 pour tout processus réel.<br><strong>3e principe (Nernst)</strong> : S → 0 quand T → 0 K pour un cristal parfait."
        }

      ],
      levels: [
        // Niveau 1
        [
          {
            type: "mcq",
            visual: "🔥",
            question: "Le second principe de la thermodynamique introduit :",
            answers: ["Le sens des transformations spontanées", "La conservation de l'énergie", "L'équation PV=nRT", "La définition de la chaleur"],
            correct: 0,
            explanation: "Le 1er principe = conservation de l'énergie. Le 2nd principe = sens des transformations (flèche du temps)."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "L'entropie mesure :",
            answers: ["Le désordre microscopique du système", "L'énergie interne", "La chaleur reçue", "La pression"],
            correct: 0,
            explanation: "S mesure le 'désordre' ou le nombre de microétats compatibles avec l'état macroscopique."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Pour un système isolé, l'entropie :",
            answers: ["Ne peut qu'augmenter ou rester constante (ΔS ≥ 0)", "Diminue toujours", "Reste constante", "Peut être négative"],
            correct: 0,
            explanation: "ΔS_univers ≥ 0 : pour un système isolé (= univers), S ne peut qu'augmenter."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Une transformation réversible est caractérisée par :",
            answers: ["ΔS_univers = 0", "ΔS_univers > 0", "ΔS_univers < 0", "ΔU = 0"],
            correct: 0,
            explanation: "Réversible ↔ ΔS_univers = 0 : c'est la limite idéale sans production d'entropie."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Une transformation irréversible est caractérisée par :",
            answers: ["ΔS_univers > 0", "ΔS_univers = 0", "ΔS_univers < 0", "ΔU > 0"],
            correct: 0,
            explanation: "Irréversible ↔ ΔS_univers > 0 : il y a création d'entropie."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "La formule de Boltzmann pour l'entropie est :",
            answers: ["S = k_B ln Ω", "S = Q/T", "S = nC_v ln T", "S = ΔU/T"],
            correct: 0,
            explanation: "S = k_B ln Ω relie l'entropie macroscopique au nombre Ω de microétats accessibles."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Un café chaud refroidit spontanément. ΔS_univers est :",
            answers: ["> 0 (processus irréversible)", "= 0", "< 0", "Indéterminé"],
            correct: 0,
            explanation: "Tout processus spontané crée de l'entropie → ΔS_univers > 0."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "L'unité de l'entropie est :",
            answers: ["J·K⁻¹", "J", "K", "J·K"],
            correct: 0,
            explanation: "S en J·K⁻¹ (Joule par Kelvin), car dS = δQ_rev/T."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Pour une transformation réversible, dS = ?",
            answers: ["δQ_rev / T", "δQ_irrev / T", "0", "dU / T"],
            correct: 0,
            explanation: "Définition de l'entropie via la chaleur réversible : dS = δQ_rev / T."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Le second principe est compatible avec ΔS_système < 0 si :",
            answers: ["ΔS_milieu > |ΔS_système| (compensation par le milieu)", "ΔU > 0", "T = 0", "Q = 0"],
            correct: 0,
            explanation: "Ce qui compte : ΔS_univers = ΔS_sys + ΔS_milieu ≥ 0. ΔS_sys peut être négatif si le milieu gagne encore plus d'entropie."
          }
        ],
        // Niveau 2
        [
          {
            type: "mcq",
            visual: "🔥",
            question: "Lors de la fusion de la glace (Q_fusion = 334 kJ/kg) à T=273K : ΔS = ?",
            answers: ["ΔS = Q/T = 334 000/273 ≈ 1223 J·K⁻¹·kg⁻¹", "ΔS = 0", "ΔS < 0", "ΔS = 334 J·K⁻¹"],
            correct: 0,
            explanation: "ΔS = Q_rev/T = 334 000/273 ≈ 1223 J·K⁻¹ par kg (entropie augmente lors de la fusion)."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Pour une adiabatique réversible d'un gaz parfait : ΔS = ?",
            answers: ["0 (δQ_rev = 0 → dS = 0)", "> 0", "< 0", "nR ln(V_f/V_i)"],
            correct: 0,
            explanation: "Réversible + Q=0 → dS = 0. L'adiabatique réversible est isentropique."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Pour une isotherme réversible de gaz parfait (n=1 mol, T=300K), V_i=5L, V_f=15L : ΔS = ?",
            answers: ["≈ +9,13 J·K⁻¹", "≈ −9,13 J·K⁻¹", "0", "≈ +1,10 J·K⁻¹"],
            correct: 0,
            explanation: "ΔS = Q_rev/T = nRT ln(V_f/V_i)/T = nR ln(3) = 1×8,314×1,099 ≈ 9,13 J·K⁻¹."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Pour une isochore (V=cst) d'un gaz parfait monoatomique (n=1 mol, T_i=300K, T_f=600K) : ΔS = ?",
            answers: ["≈ +8,64 J·K⁻¹", "≈ −8,64 J·K⁻¹", "0", "≈ +12,47 J·K⁻¹"],
            correct: 0,
            explanation: "ΔS = nC_v ln(T_f/T_i) = 1×(3R/2)×ln(2) = 12,47×0,693 ≈ 8,64 J·K⁻¹."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "L'entropie de l'univers lors d'un transfert de chaleur Q d'un corps chaud T_c vers un corps froid T_f vaut ΔS_univ = ?",
            answers: ["Q(1/T_f − 1/T_c) > 0 (car T_f < T_c)", "Q/T_c", "Q/T_f", "0"],
            correct: 0,
            explanation: "ΔS_sys_froid = +Q/T_f (reçoit). ΔS_sys_chaud = −Q/T_c (perd). ΔS_univ = Q(1/T_f − 1/T_c) > 0 car T_f < T_c."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Un gaz parfait se détend librement dans le vide (W=0, Q=0). ΔS = ?",
            answers: ["ΔS = nR ln(V_f/V_i) > 0 (irréversible !)", "0", "< 0", "nC_v ln(T_f/T_i)"],
            correct: 0,
            explanation: "Détente libre : W=Q=0 → ΔU=0 → T constante. Mais ΔS = nR ln(V_f/V_i) > 0 : processus irréversible."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Le 3e principe de la thermodynamique (Nernst-Planck) énonce que :",
            answers: ["S → 0 quand T → 0 K (cristal parfait)", "S → ∞ quand T → 0", "S = cst à T=0", "S = k_B à T=0"],
            correct: 0,
            explanation: "À T=0K, un cristal parfait a un seul microétat accessible → S = k_B ln(1) = 0."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Pour un mélange idéal de gaz parfaits (n₁ mol gaz 1, n₂ mol gaz 2), l'entropie de mélange est :",
            answers: ["ΔS_mél = −nR(x₁ ln x₁ + x₂ ln x₂) > 0", "ΔS_mél = 0", "ΔS_mél < 0", "ΔS_mél = nR ln 2"],
            correct: 0,
            explanation: "L'entropie de mélange est toujours positive : mélanger augmente le désordre."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Pour un cycle de Carnot réversible : ΔS_cycle = ?",
            answers: ["0 (cycle réversible : retour à l'état initial)", "> 0", "< 0", "= W_net/T"],
            correct: 0,
            explanation: "S est une fonction d'état : en revenant à l'état initial, ΔS_cycle = 0 pour un cycle réversible."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "L'inégalité de Clausius ∮ δQ/T ≤ 0 : l'égalité correspond à :",
            answers: ["Un cycle réversible", "Un cycle quelconque", "Un cycle irréversible", "Un cycle adiabatique"],
            correct: 0,
            explanation: "L'égalité dans ∮δQ/T ≤ 0 est atteinte uniquement si chaque transformation du cycle est réversible."
          }
        ],
        // Niveau 3
        [
          {
            type: "mcq",
            visual: "🔥",
            question: "Pour une isobare (n=2 mol, C_p=5R/2, T_i=300K, T_f=500K) : ΔS = ?",
            answers: ["≈ +21,3 J·K⁻¹", "≈ −21,3 J·K⁻¹", "0", "≈ +12,8 J·K⁻¹"],
            correct: 0,
            explanation: "ΔS = nC_p ln(T_f/T_i) = 2×(5×8,314/2)×ln(500/300) = 2×20,79×0,511 ≈ 21,2 J·K⁻¹."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Pour une détente libre de gaz parfait (n=1 mol, T=400K, V_i=5L, V_f=20L) : ΔS_sys et ΔS_milieu = ?",
            answers: [
              "ΔS_sys = nR ln(4) ≈ 11,5 J·K⁻¹ ; ΔS_milieu = 0 (Q=0) → ΔS_univ = 11,5 > 0",
              "ΔS_sys = 0 ; ΔS_milieu > 0",
              "ΔS_sys = 0 ; ΔS_milieu = 0",
              "ΔS_sys < 0"
            ],
            correct: 0,
            explanation: "Q=0 → ΔS_milieu=0. ΔS_sys = nR ln(V_f/V_i) = R ln(4) ≈ 11,5 J·K⁻¹ > 0 → irréversible."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Lors d'une combustion spontanée (ΔG < 0 à T,P=const), l'entropie du système peut diminuer si :",
            answers: ["ΔH < 0 (réaction exothermique) compensant le terme −TΔS_sys", "ΔG > 0", "ΔU = 0", "Q = 0"],
            correct: 0,
            explanation: "ΔG = ΔH − TΔS. Une réaction spontanée (ΔG<0) peut avoir ΔS_sys<0 si ΔH est suffisamment négatif."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Pour le moteur de Carnot (T_c=600K, T_f=300K, Q_c=4000J) : ΔS_gaz et ΔS_milieu sur un cycle complet = ?",
            answers: [
              "ΔS_gaz = 0 (cycle). ΔS_milieu = −Q_c/T_c + Q_f/T_f = −4000/600 + 2000/300 = 0 → réversible !",
              "ΔS_milieu > 0",
              "ΔS_gaz = Q/T",
              "ΔS_milieu = −Q_c/T_c"
            ],
            correct: 0,
            explanation: "Cycle réversible : ΔS_univ = 0. Q_f = Q_c × T_f/T_c = 4000×(300/600) = 2000J. Vérification : −4000/600 + 2000/300 = −6,67+6,67 = 0 ✓"
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Pour la même formule ΔS = nC_v ln(T_f/T_i) + nR ln(V_f/V_i) d'un gaz parfait, vérifier que ΔS=0 pour une adiabatique réversible (TV^(γ-1)=cst).",
            answers: [
              "ΔS = nC_v ln(T_f/T_i) + nR ln(V_f/V_i). Avec T_f V_f^(γ-1) = T_i V_i^(γ-1) : ln(T_f/T_i) = −(γ-1)ln(V_f/V_i) = −(R/C_v)ln(V_f/V_i) → ΔS = −nR ln(V_f/V_i) + nR ln(V_f/V_i) = 0 ✓",
              "ΔS ≠ 0",
              "ΔS = nR",
              "ΔS = nC_v"
            ],
            correct: 0,
            explanation: "La démonstration montre que les deux termes s'annulent exactement pour une adiabatique réversible."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Mettre en contact deux corps à T₁=500K et T₂=300K, masses égales, chaleur massique c. ΔS_univ = ?",
            answers: [
              "ΔS_univ = mc[ln(T_f/T₁) + ln(T_f/T₂)] > 0 avec T_f = 400K",
              "ΔS_univ = 0",
              "ΔS_univ < 0",
              "ΔS_univ = Q(1/T₁ − 1/T₂)"
            ],
            correct: 0,
            explanation: "T_f=(500+300)/2=400K. ΔS₁=mc·ln(400/500)<0. ΔS₂=mc·ln(400/300)>0. ΔS_univ=mc(ln(400/500)+ln(400/300))=mc·ln(400²/(500×300))=mc·ln(16/15)>0 ✓"
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Le paradoxe de Maxwell (démon de Maxwell) pose le problème :",
            answers: ["Un démon qui trie les molécules rapides/lentes pourrait réduire S sans travail — résolution : le tri exige un effort d'information (erasure)", "L'entropie peut diminuer", "Le 2e principe est faux", "Les molécules n'existent pas"],
            correct: 0,
            explanation: "Résolution de Landauer (1961) : effacer 1 bit d'information dissipe k_BT ln2 d'énergie → le démon doit effacer sa mémoire → ΔS_univ ≥ 0 sauvegardé."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Pour une réaction chimique à T,P constantes : le critère de spontanéité est :",
            answers: ["ΔG = ΔH − TΔS < 0", "ΔS_sys > 0", "ΔH < 0 uniquement", "ΔU < 0"],
            correct: 0,
            explanation: "ΔG < 0 à T,P constants est équivalent à ΔS_univers > 0 → critère de spontanéité."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Une machine frigorifique irréversible entre T_f=250K et T_c=300K consomme W=500J pour pomper Q_f=1000J. ΔS_univ = ?",
            answers: [
              "ΔS_univ = Q_c/T_c − Q_f/T_f = 1500/300 − 1000/250 = 5 − 4 = +1 J·K⁻¹ > 0 ✓",
              "ΔS_univ = 0",
              "ΔS_univ < 0",
              "ΔS_univ = W/T"
            ],
            correct: 0,
            explanation: "Q_c = Q_f + W = 1500J. ΔS_milieu_chaud = +Q_c/T_c = +5 J·K⁻¹. ΔS_milieu_froid = −Q_f/T_f = −4 J·K⁻¹. ΔS_univ = +1 > 0 ✓"
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Le deuxième principe interdit quelle machine impossible ?",
            answers: ["La machine à chaleur de Kelvin-Planck : impossible de convertir entièrement Q_c en travail sans rejeter de chaleur au froid", "La machine de Carnot", "Le réfrigérateur", "Le moteur Diesel"],
            correct: 0,
            explanation: "Énoncé de Kelvin-Planck : il est impossible de réaliser un cycle dont le seul effet est de prélever de la chaleur à une source et de la convertir entièrement en travail."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "L'entropie de vaporisation de l'eau à 100°C (L=2260kJ/kg, M=18g/mol) en J·mol⁻¹·K⁻¹ vaut :",
            answers: ["≈ 109 J·mol⁻¹·K⁻¹ (règle de Trouton !)", "≈ 6,1 J·mol⁻¹·K⁻¹", "≈ 334 J·mol⁻¹·K⁻¹", "≈ 40 J·mol⁻¹·K⁻¹"],
            correct: 0,
            explanation: "ΔS_vap = L×M/T = 2260×10³×0,018/373 ≈ 109 J·mol⁻¹·K⁻¹. La règle de Trouton prédit ΔS_vap ≈ 88 J·mol⁻¹·K⁻¹ pour la plupart des liquides."
          }
        ],
        // Niveau 4
        [
          {
            type: "mcq",
            visual: "🔥",
            question: "La relation de Gibbs-Helmholtz (∂(G/T)/∂T)_P = −H/T² est utile pour :",
            answers: ["Calculer la variation de ΔG avec T (van 't Hoff)", "Calculer ΔS directement", "Trouver W", "Calculer ΔU"],
            correct: 0,
            explanation: "La relation de Gibbs-Helmholtz relie ΔG à ΔH à différentes températures → indispensable pour l'étude des équilibres chimiques."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Le diagramme T-S du cycle de Carnot est un rectangle car :",
            answers: ["2 isothermes (T=cst) et 2 adiabatiques réversibles (S=cst) → 4 segments droits", "Les courbes sont hyperboliques", "T et S sont indépendants", "S = T toujours"],
            correct: 0,
            explanation: "Dans le plan T-S : isotherme → horizontal (T=cst), adiabatique réversible → vertical (S=cst) → rectangle."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "L'entropie créée lors d'un frottement irréversible (dissipation P_diss pendant Δt à T) est :",
            answers: ["S_créée = P_diss × Δt / T ≥ 0", "S_créée = 0", "S_créée = −P_diss/T", "S_créée = P_diss/T²"],
            correct: 0,
            explanation: "Toute dissipation Q_diss = P_diss·Δt à température T crée S_créée = Q_diss/T ≥ 0."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "La relation ΔG° = −RT ln K_eq (K_eq : constante d'équilibre chimique) est une conséquence du :",
            answers: ["2e principe (à l'équilibre, ΔG = 0)", "1er principe", "Équation PV=nRT", "Loi de Hess"],
            correct: 0,
            explanation: "À l'équilibre chimique : ΔG = 0 → ΔG° = −RT ln K_eq (lien entre thermodynamique et équilibre chimique)."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Le rendement maximal d'une pile à combustible H₂/O₂ est limité par :",
            answers: ["η_max = ΔG/ΔH (rapport enthalpie libre / enthalpie de réaction)", "η = 100% sans limite", "η = η_Carnot uniquement", "η = 1 − T_f/T_c"],
            correct: 0,
            explanation: "Pour une pile : W_max = −ΔG. η_max = ΔG/ΔH = (ΔH−TΔS)/ΔH. Pour H₂/O₂ à 298K : η_max ≈ 83%."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "L'entropie d'un gaz parfait monoatomique (formule de Sackur-Tetrode) est :",
            answers: ["S = nk_B[ln(V/(Nλ³)) + 5/2] (λ : longueur de De Broglie)", "S = nR ln T", "S = nR ln V", "S = k_B ln N"],
            correct: 0,
            explanation: "La formule de Sackur-Tetrode (1912) est l'expression exacte de l'entropie d'un gaz parfait monoatomique en mécanique statistique."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Le principe de Landauer établit que l'effacement d'un bit d'information dissipe au minimum :",
            answers: ["k_B T ln 2 ≈ 2,9 × 10⁻²¹ J à 300K", "k_B T", "R T", "ℏω"],
            correct: 0,
            explanation: "Landauer (1961) : effacer 1 bit = augmenter S_univers d'au moins k_B ln 2 → dissipation minimale k_BT ln 2."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Lors d'une transformation de Joule-Thomson (ΔH=0, gaz réel, μ_JT>0) : ΔS est :",
            answers: ["> 0 (processus irréversible : détente libre)", "= 0", "< 0", "= Q/T"],
            correct: 0,
            explanation: "La détente de Joule-Thomson est irréversible (vanne, gradient de P) → S_créée > 0 → ΔS > 0."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Le potentiel chimique μ = (∂G/∂n)_T,P intervient dans l'équilibre des phases. La condition d'équilibre entre phase α et β est :",
            answers: ["μ_α = μ_β (égalité des potentiels chimiques)", "P_α = P_β", "T_α = T_β uniquement", "S_α = S_β"],
            correct: 0,
            explanation: "À l'équilibre : μ_α = μ_β (ET T_α = T_β pour équilibre thermique, ET P_α = P_β pour équilibre mécanique)."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "L'entropie d'un système peut-elle diminuer localement (ΔS_sys < 0) en accord avec le 2e principe ?",
            answers: ["Oui, si ΔS_milieu > |ΔS_sys| → ΔS_univers ≥ 0 (ex : réfrigérateur, cristallisation)", "Non, jamais", "Seulement à T=0K", "Seulement pour les gaz parfaits"],
            correct: 0,
            explanation: "La vie elle-même maintient un ordre local (ΔS_organisme < 0) en rejetant plus d'entropie vers l'environnement."
          }
        ],
        // Niveau 5
        [
          {
            type: "mcq",
            visual: "🔥",
            question: "L'entropie de mélange de N gaz identiques est nulle (paradoxe de Gibbs résolu). Cela vient de :",
            answers: ["L'indiscernabilité quantique des particules identiques (facteur 1/N! dans Z_N)", "Le 1er principe", "La loi de Dalton", "T = 0 K"],
            correct: 0,
            explanation: "Des molécules identiques sont indiscernables : échanger deux molécules identiques ne crée pas de nouvel état → ΔS_mélange = 0."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "La production d'entropie volumique σ en thermodynamique des processus irréversibles est toujours ≥ 0 et vaut :",
            answers: ["σ = J_Q · grad(1/T) + J_D : grad(−μ/T) + ... ≥ 0 (produits force thermodynamique × flux)", "σ = ΔS/ΔT", "σ = 0 partout", "σ = k_BT"],
            correct: 0,
            explanation: "En TPI (Prigogine), σ = Σ J_i X_i ≥ 0 où J_i sont des flux et X_i des forces thermodynamiques (gradients de T, μ, v...)."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Le théorème de Prigogine des états stationnaires loin de l'équilibre stipule que :",
            answers: ["Près de l'équilibre, l'état stationnaire minimise la production d'entropie σ", "σ est maximisée", "σ = 0 toujours", "σ dépend de T uniquement"],
            correct: 0,
            explanation: "Principe du minimum d'entropie (Prigogine) : les états stationnaires proches de l'équilibre minimisent la production d'entropie."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Le théorème de fluctuation de Jarzynski (1997) relie le travail irréversible W à la différence d'énergie libre ΔF :",
            answers: ["⟨e^(−W/k_BT)⟩ = e^(−ΔF/k_BT) (exacte pour toute transformation irréversible !)", "W = ΔF toujours", "⟨W⟩ = ΔF", "W ≥ ΔF seulement"],
            correct: 0,
            explanation: "La relation de Jarzynski permet de calculer ΔF depuis des mesures de W hors équilibre → révolution dans la thermodynamique des petits systèmes."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "L'entropie de Shannon H = −Σ p_i ln p_i en théorie de l'information est analogue à l'entropie de Boltzmann car :",
            answers: ["Les deux mesurent l'incertitude / le nombre de microétats équiprobables (Jaynes : MaxEnt)", "Elles sont identiques en valeur numérique", "L'information est une forme d'énergie", "Shannon n'avait pas connaissance de Boltzmann"],
            correct: 0,
            explanation: "Jaynes (1957) a montré que l'entropie thermodynamique peut être vue comme l'entropie de Shannon du macroétat : lien profond information-thermodynamique."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "La flèche du temps en thermodynamique est liée à l'asymétrie initiale de l'univers. Boltzmann a proposé que :",
            answers: ["L'univers est parti d'un état de très basse entropie (Big Bang) et évolue vers le maximum", "L'entropie est constante depuis le Big Bang", "Le temps est symétrique", "Le 2e principe est une loi statistique locale"],
            correct: 0,
            explanation: "La faible entropie initiale du Big Bang (hypothèse de Penrose) est la source cosmologique de la flèche du temps thermodynamique."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Les structures dissipatives (Prigogine) sont des systèmes maintenus loin de l'équilibre qui créent localement de l'ordre. Elles nécessitent :",
            answers: ["Un flux permanent d'énergie/matière entretenant un état structuré (ΔS_local < 0 compensé par ΔS_milieu)", "ΔS_univers < 0", "Un état d'équilibre", "T = 0 K"],
            correct: 0,
            explanation: "Les structures dissipatives (cyclones, cellules vivantes, réaction de Belousov-Zhabotinsky) maintiennent un ordre local grâce à la dissipation d'énergie."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Le théorème de fluctuation de Crooks (1999) donne le rapport entre probabilité d'un processus irréversible F→R et de l'inverse R→F :",
            answers: ["P_F(W)/P_R(−W) = exp((W−ΔF)/k_BT)", "P_F = P_R", "P_F/P_R = 1", "P_F = exp(ΔF/k_BT)"],
            correct: 0,
            explanation: "Le théorème de Crooks quantifie l'asymétrie irréversible à l'échelle nanométrique → testé expérimentalement sur l'ADN (Lab. de Bustamante)."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "L'entropie de trou noir (Bekenstein-Hawking) est S_BH = A k_B c³/(4Gℏ). Elle est proportionnelle à :",
            answers: ["L'aire A de l'horizon (et non au volume) — principe holographique", "Le volume du trou noir", "La masse uniquement", "La température de Hawking"],
            correct: 0,
            explanation: "S_BH ∝ A est à l'origine du principe holographique : l'entropie maximale d'une région est proportionnelle à sa surface, pas son volume."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "La mécanique quantique introduit une entropie de von Neumann S_vN = −k_B Tr(ρ ln ρ). Pour un état pur : S_vN = ?",
            answers: ["0 (un état pur = connaissance maximale → désordre nul)", "k_B ln 2", "∞", "k_B"],
            correct: 0,
            explanation: "Pour un état pur ρ = |ψ⟩⟨ψ| : ρ² = ρ → valeurs propres = 0 ou 1 → S_vN = 0. L'intrication augmente S_vN."
          }
        ],
        // Niveau 6
        [
          {
            type: "mcq",
            visual: "🔥",
            question: "L'entropie de Von Neumann S_vN = −Tr(ρ ln ρ) d'un système bipartite intriqué peut être plus grande que S de chaque sous-système. Cela illustre :",
            answers: ["La non-séparabilité quantique : S(ρ_AB) < S(ρ_A) + S(ρ_B) pour un état intriqué", "S est additif classiquement", "L'intrication réduit S", "S = 0 toujours pour les états intriqués"],
            correct: 0,
            explanation: "Pour un état intriqué, les entropies de sous-systèmes peuvent dépasser l'entropie totale → propriété purement quantique sans analogue classique."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "La conjecture de Bekenstein borne l'entropie d'un système de taille R et énergie E par :",
            answers: ["S ≤ 2πREk_B/(ℏc) (borne de Bekenstein)", "S ≤ k_B A / 4l_P²", "S ≤ Nk_B", "S est non bornée"],
            correct: 0,
            explanation: "La borne de Bekenstein S ≤ 2πRE/ℏc est la limite d'entropie pour un système de taille finie — reliée au principe holographique."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "En cosmologie, la thermodynamique du Big Bang prédit que l'entropie de l'univers observable est dominée par :",
            answers: ["Les trous noirs supermassifs (S_BH ≫ S_photons, S_matière)", "Les photons du fond cosmologique", "La matière baryonique", "L'énergie sombre"],
            correct: 0,
            explanation: "Penrose a montré que les trous noirs supermassifs (≥10⁹ M_☉) contiennent l'immense majorité de l'entropie de l'univers observable."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "Le paradoxe de l'information du trou noir (Hawking) pose la question :",
            answers: ["L'évaporation d'un trou noir par rayonnement de Hawking préserve-t-elle l'information quantique (unitarité) ?", "L'entropie peut-elle être négative ?", "Les trous noirs respectent-ils PV=nRT ?", "La température de Hawking est-elle mesurable ?"],
            correct: 0,
            explanation: "Le paradoxe d'information : la mécanique quantique est unitaire (info préservée) mais Hawking suggère que les trous noirs évaporent en radiation thermique (info perdue) — question ouverte reliée à la gravité quantique."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "La thermodynamique quantique à un qubit (système à 2 niveaux) peut extraire du travail W_max = ?",
            answers: ["W_max = k_BT ln 2 × (1 − S_vN/k_B ln 2) (travail d'effacement lié à l'information)", "W_max = k_BT", "W_max = ℏω", "W_max = 0"],
            correct: 0,
            explanation: "Pour un qubit à température T, le travail maximal extractible = k_BT ln2 × (1 − S_vN/(k_B ln 2)) : lien direct information-travail."
          },
          {
            type: "mcq",
            visual: "🔥",
            question: "La deuxième loi quantique (approche de Popescu, Short, Winter) émerge de :",
            answers: ["L'intrication du système avec son environnement : les sous-systèmes convergent vers l'état thermique sans postulat supplémentaire", "La non-commutativité des opérateurs", "L'équation de Schrödinger seule", "Le principe d'incertitude"],
            correct: 0,
            explanation: "La thermalisation quantique émerge naturellement de l'intrication : un sous-système bien intriqué avec un grand environnement converge vers l'état de Gibbs ρ ∝ e^(−H/k_BT)."
          }
        ]
      ]
    }

  ],

  // ── Prolongements L1 ──
  l1Bonus:{notions : [
    {
      id: "gaz-parfait-micro",
      label: "Gaz parfait — vision microscopique (L1)",
      icon: "🔬",
      lesson: {
        formula: "P = (1/3) ρ ⟨v²⟩",
        text: "À L1, on derive l'équation d'état PV=nRT depuis la mécanique statistique des gaz parfaits, et on introduit la distribution de Maxwell-Boltzmann des vitesses moléculaires.",
        example: "Vitesse quadratique moyenne : v_rms = √(3RT/M). Pour N₂ à 300K : v_rms ≈ 517 m/s."
      },
      fullBlocks: [
        {
          type: "demo",
          title: "🔬 Dérivation de PV = nRT depuis la théorie cinétique",
          text: "On considère N molécules de masse m dans un cube de côté L. La force exercée par une molécule de vitesse v_x sur la paroi : F = 2mv_x / (2L/v_x) = mv_x²/L. Pression : P = NF/L² = Nm⟨v_x²⟩/V. Isotropie : ⟨v_x²⟩=⟨v²⟩/3. Donc P = Nm⟨v²⟩/(3V). Or l'énergie cinétique moyenne ½m⟨v²⟩ = (3/2)k_BT. On obtient : PV = Nk_BT = nRT ✓"
        },
        {
          type: "formula",
          title: "🔑 Distribution de Maxwell-Boltzmann",
          formula: "f(v) = 4π n (m/2πk_BT)^(3/2) v² exp(−mv²/2k_BT)",
          text: "La distribution de Maxwell-Boltzmann donne la probabilité de trouver une molécule ayant une vitesse entre v et v+dv. Les vitesses caractéristiques : v_mp = √(2RT/M) (la plus probable), v̄ = √(8RT/πM) (moyenne), v_rms = √(3RT/M) (quadratique)."
        },
        {
          type: "definition",
          title: "📌 Degrés de liberté et énergie",
          text: "Le théorème d'équipartition : chaque degré de liberté quadratique contribue ½k_BT à l'énergie moyenne. Monoatomique : 3 translations → U = (3/2)Nk_BT. Diatomique (T modérée) : +2 rotations → U = (5/2)Nk_BT. À haute T : +2 vibrations → U = (7/2)Nk_BT. Ce framework explique les valeurs de C_v observées."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            visual: "🔬",
            question: "La pression d'un gaz selon la théorie cinétique vient :",
            answers: [
              "Des chocs des molécules sur les parois",
              "De la pesanteur",
              "Des liaisons chimiques",
              "De la chaleur uniquement"
            ],
            correct: 0,
            explanation: "P = transfert de quantité de mouvement des molécules sur les parois par unité de temps et de surface."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🔬",
            question: "La vitesse quadratique moyenne v_rms de N₂ (M=28g/mol) à 300K ≈ ?",
            answers: [
              "≈ 517 m/s",
              "≈ 300 m/s",
              "≈ 1000 m/s",
              "≈ 100 m/s"
            ],
            correct: 0,
            explanation: "v_rms = √(3RT/M) = √(3×8,314×300/0,028) ≈ 517 m/s."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🔬",
            question: "Dans la distribution de Maxwell, si T double, v_rms :",
            answers: [
              "Augmente d'un facteur √2",
              "Double",
              "Quadruple",
              "Ne change pas"
            ],
            correct: 0,
            explanation: "v_rms ∝ √T → doubler T multiplie v_rms par √2."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🔬",
            question: "Pour un gaz diatomique à T=1000K, les modes vibratoires sont-ils activés ?",
            answers: [
              "Partiellement (dépend de la fréquence vibratoire, ~2000-4000K pour activation complète)",
              "Jamais",
              "Toujours",
              "Seulement sous pression"
            ],
            correct: 0,
            explanation: "L'activation vibratoire nécessite k_BT ≥ ℏω. Pour N₂ : T_vib ≈ 3374K, donc à 1000K, partielle."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🔬",
            question: "Le libre parcours moyen d'une molécule est λ = 1/(n√2 σ) où σ est la section efficace. À haute pression (n grand), λ :",
            answers: [
              "Diminue (plus de chocs)",
              "Augmente",
              "Ne change pas",
              "Est nul"
            ],
            correct: 0,
            explanation: "λ ∝ 1/n = V/N : plus le gaz est dense, plus les chocs sont fréquents, plus λ est court."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🔬",
            question: "La fonction de distribution de Maxwell-Boltzmann passe par un maximum en v = v_mp. La condition dF/dv = 0 donne :",
            answers: [
              "v_mp = √(2k_BT/m) = √(2RT/M)",
              "v_mp = √(3k_BT/m)",
              "v_mp = √(k_BT/m)",
              "v_mp = √(8k_BT/πm)"
            ],
            correct: 0,
            explanation: "dF/dv = 0 → d(v²e^(−mv²/2k_BT))/dv = 0 → v_mp = √(2k_BT/m)."
          }
        ]
      ]
    },
    {
      id: "premier-principe-l1",
      label: "1er principe — Approfondissement L1",
      icon: "🎓",
      lesson: {
        formula: "δW = −P dV  (réversible)  |  W = ∫ −P dV",
        text: "À L1, le travail est défini via l'intégrale de −P dV. On distingue rigoureusement travail et chaleur comme des transferts dépendant du chemin, et on introduit les notions de transformation quasi-statique et réversible.",
        example: "Pour une isotherme réversible : W = −nRT ln(V_f/V_i). Cette formule nécessite P = nRT/V et l'intégration de −PdV."
      },
      fullBlocks: [
        {
          type: "formula",
          title: "🔑 Travail en forme intégrale",
          formula: "W = ∫(V_i→V_f) −P dV",
          text: "En L1, on généralise le travail à toute transformation quasi-statique. P doit être exprimée en fonction de V (via l'équation d'état) avant d'intégrer. Le signe dépend du sens : détente (V augmente) → W < 0."
        },
        {
          type: "definition",
          title: "📌 Transformation quasi-statique vs réversible",
          text: "Quasi-statique : le système passe par des états d'équilibre successifs (lente). Réversible : quasi-statique ET sans dissipation (frottements nuls, etc.). En pratique, tout processus quasi-statique sans dissipation est réversible. La réversibilité maximise le travail récupérable (détente) ou minimise le travail à fournir (compression)."
        },
        {
          type: "demo",
          title: "🔬 Calcul du travail isotherme réversible",
          text: "Gaz parfait, T=const, V_i → V_f :<br>P = nRT/V (variable !)<br>W = ∫(V_i→V_f) −P dV = ∫(V_i→V_f) −nRT/V dV<br>W = −nRT [ln V](V_i→V_f)<br>W = −nRT (ln V_f − ln V_i)<br>W = −nRT ln(V_f/V_i)<br>Si V_f > V_i (détente) : ln(V_f/V_i) > 0 → W < 0 ✓"
        },
        {
          type: "warning",
          title: "⚠️ Q et W ne sont pas des fonctions d'état",
          text: "δQ et δW sont des différentielles inexactes : leur valeur dépend du chemin suivi, pas seulement des états initial et final. Notation : δ (pas d). Seule leur somme dU = δQ + δW est une différentielle exacte (fonction d'état). C'est une distinction fondamentale à L1."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            visual: "🎓",
            question: "Pourquoi W = −∫P dV et non simplement W = −P ΔV en général ?",
            answers: [
              "Car P peut varier pendant la transformation",
              "Car V est constant",
              "Car P = 0 toujours",
              "Par convention"
            ],
            correct: 0,
            explanation: "Si P varie (ex : isotherme), il faut intégrer. W = −PΔV n'est valable que si P est constante."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🎓",
            question: "Calculer W pour 1 mol de gaz parfait à T=400K, compression isotherme de V=20L à V=5L.",
            answers: [
              "≈ +4615 J",
              "≈ −4615 J",
              "0",
              "≈ +2308 J"
            ],
            correct: 0,
            explanation: "W = −nRT ln(5/20) = −1×8,314×400×ln(0,25) = −3326×(−1,386) ≈ +4615 J."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🎓",
            question: "Pour la même compression, si elle est réalisée irréversiblement à P_ext = P_f = nRT/V_f ≈ 6,64×10⁵ Pa : W_irrev = ?",
            answers: [
              "≈ +9960 J > W_rev = 4615 J",
              "≈ +4615 J",
              "≈ +2308 J",
              "0"
            ],
            correct: 0,
            explanation: "W_irrev = −P_f ΔV = −6,64×10⁵×(5−20)×10⁻³ = +9960 J. La compression irréversible coûte plus."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🎓",
            question: "Pourquoi Q dépend-elle du chemin suivi ? Exemple : même état initial et final, mais isotherme vs isochore+isobare.",
            answers: [
              "Car Q = ΔU − W, et W dépend du chemin → Q aussi",
              "Car T change",
              "Car ΔU change",
              "Par définition de Q"
            ],
            correct: 0,
            explanation: "ΔU est fixé (même états). Mais W diffère selon le chemin → Q = ΔU − W diffère aussi."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🎓",
            question: "Pour une transformation quasi-statique adiabatique : δQ = 0 et dU = −PdV. En utilisant dU = nC_vdT, on peut montrer que :",
            answers: [
              "nC_v dT = −PdV → mène à TV^(γ-1) = const",
              "nC_p dT = −PdV",
              "dU = 0",
              "P = const"
            ],
            correct: 0,
            explanation: "C'est exactement la démonstration de la loi de Laplace : nC_v dT = −PdV → intégration → TV^(γ-1) = const."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🎓",
            question: "Pourquoi dit-on que la réversibilité est une idéalisation ?",
            answers: [
              "Car en pratique, toute transformation implique des irréversibilités (frottements, gradients finis de T ou P)",
              "Car Q = 0 toujours",
              "Car W < 0 obligatoirement",
              "Car P n'est jamais uniforme"
            ],
            correct: 0,
            explanation: "Les processus réels ont toujours des gradients de T, P, frottements, réactions spontanées irréversibles → ils produisent de l'entropie."
          }
        ]
      ]
    },
    {
      id: "travail-chaleur-l1",
      label: "Travail & chaleur — Prolongement L1",
      icon: "🎓",
      lesson: {
        formula: "W = ∫ −P dV  |  δQ et δW : différentielles inexactes",
        text: "À L1, on distingue rigoureusement travail et chaleur comme des quantités dépendant du chemin (différentielles inexactes δ), et on définit le travail via l'intégrale de −PdV pour toute transformation quasi-statique.",
        example: "Isotherme réversible : W = −nRT ln(V_f/V_i). Irréversible à P_ext=cst : W_irrev = −P_ext ΔV ≠ W_rev."
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Différentielles exactes vs inexactes",
          text: "dU est une différentielle exacte (fonction d'état) : ΔU ne dépend que des états initial et final. δW et δQ sont des différentielles inexactes : leurs valeurs dépendent du chemin suivi. Notation : d pour les fonctions d'état (U, H, S, G), δ pour les formes différentielles dépendant du chemin (W, Q)."
        },
        {
          type: "demo",
          title: "🔬 Travail maximum en détente réversible",
          text: "Pour aller de A(P_i, V_i) à B(P_f, V_f) :<br>Détente réversible (P varie continuellement) : W_rev = −∫P_gaz dV<br>Détente irréversible (P_ext = P_f) : W_irrev = −P_f (V_f − V_i)<br>On peut montrer que |W_rev| > |W_irrev| (détente) : la détente réversible fournit plus de travail. Géométriquement : l'aire sous la courbe continue > aire sous le palier horizontal."
        },
        {
          type: "formula",
          title: "🔑 Dépendance au chemin : exemple",
          formula: "Chemin 1 (isochore + isobare) : W₁ = −P_f ΔV<br>Chemin 2 (isotherme réversible) : W₂ = −nRT ln(V_f/V_i)<br>W₁ ≠ W₂ en général",
          text: "Pour les mêmes états A et B, les deux chemins donnent des W différents. Puisque ΔU est le même (fonction d'état), Q₁ ≠ Q₂ aussi. C'est la nature fondamentale du 1er principe."
        },
        {
          type: "warning",
          title: "⚠️ Terminologie rigoureuse",
          text: "On ne parle PAS de 'chaleur contenue dans un corps' ou de 'travail d'un état'. Ces mots n'ont de sens que pour un processus (un transfert). Un corps a une énergie interne U, pas une 'chaleur U'. La chaleur Q et le travail W ne sont que des flux d'énergie lors d'une transformation."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            visual: "🎓",
            question: "Pourquoi note-t-on δQ et δW (et non dQ, dW) ?",
            answers: ["Car Q et W dépendent du chemin (pas des fonctions d'état)", "Par habitude", "Car ils sont nuls", "Car T est variable"],
            correct: 0,
            explanation: "La notation δ signale que Q et W sont des formes différentielles non exactes : leur intégration dépend du chemin."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🎓",
            question: "Pour une détente, quelle transformation fournit le plus de travail au milieu extérieur : réversible ou irréversible ?",
            answers: ["Réversible (W_rev > W_irrev en valeur absolue)", "Irréversible", "Elles donnent le même travail", "Cela dépend de T"],
            correct: 0,
            explanation: "En détente réversible, P_gaz > P_ext à chaque instant → plus de travail fourni. C'est pourquoi la réversibilité maximise le travail."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🎓",
            question: "Pour une compression, quelle transformation coûte moins de travail à fournir : réversible ou irréversible ?",
            answers: ["Réversible (|W_rev| < |W_irrev| en compression)", "Irréversible", "Elles sont égales", "Adiabatique"],
            correct: 0,
            explanation: "En compression réversible, P_ext suit P_gaz → moins de surpression → moins de travail à fournir."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🎓",
            question: "Calculer W pour une compression isotherme irréversible (n=1 mol, T=300K, P_ext=4×10⁵Pa, V_i=20L, V_f=5L). Comparer à W_rev.",
            answers: [
              "W_irrev = −P_ext ΔV = +6000 J. W_rev = −nRT ln(V_f/V_i) = +nRT ln 4 ≈ +3457 J. W_irrev > W_rev (coûte plus)",
              "W_irrev = W_rev",
              "W_irrev < W_rev",
              "W_irrev = 0"
            ],
            correct: 0,
            explanation: "La compression irréversible à P_ext constant coûte plus de travail que la réversible."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🎓",
            question: "La différence W_irrev − W_rev lors d'une compression (> 0) représente :",
            answers: ["Le travail gaspillé en irréversibilités = T × S_créée", "La chaleur perdue", "ΔU supplémentaire", "Un gain d'énergie"],
            correct: 0,
            explanation: "W_irrev − W_rev = T × ΔS_irrev ≥ 0 (théorème d'égalité de Gouy-Stodola) : l'excès de travail = dissipation thermodynamique."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🎓",
            question: "Pourquoi un moteur réel a-t-il un rendement inférieur à η_Carnot ?",
            answers: [
              "Car ses transformations sont irréversibles (frottements, gradients de T, détentes rapides) → S_créée > 0 → travail utile diminué",
              "Car PV ≠ nRT",
              "Car ΔU ≠ 0",
              "Car le cycle n'est pas fermé"
            ],
            correct: 0,
            explanation: "Les irréversibilités créent de l'entropie → convertissent du travail potentiel en chaleur non récupérable → η < η_Carnot."
          }
        ]
      ]
    },
    {
      id: "second-principe-l1",
      label: "2nd principe — Approfondissement L1",
      icon: "🎓",
      lesson: {
        formula: "ΔS ≥ Q/T  |  S = k_B ln Ω  |  ΔS_univ ≥ 0",
        text: "À L1, on introduit rigoureusement l'entropie comme fonction d'état, l'inégalité de Clausius, et le lien microscopique de Boltzmann. On calcule ΔS pour les transformations de base et les cycles.",
        example: "ΔS(gaz parfait) = nC_v ln(T_f/T_i) + nR ln(V_f/V_i). Vérification : adiabatique réversible → ΔS = 0."
      },
      fullBlocks: [
        {
          type: "formula",
          title: "🔑 Entropie comme fonction d'état",
          formula: "ΔS = ∫(A→B, rév.) δQ_rev / T",
          text: "Pour calculer ΔS entre deux états A et B, on doit utiliser un chemin réversible (même si la transformation réelle est irréversible). ΔS est une fonction d'état : elle ne dépend que de A et B, pas du chemin. Le résultat obtenu sur le chemin réversible s'applique à n'importe quel chemin réel."
        },
        {
          type: "formula",
          title: "🔑 ΔS d'un gaz parfait",
          formula: "ΔS = nC_v ln(T_f/T_i) + nR ln(V_f/V_i)<br>= nC_p ln(T_f/T_i) − nR ln(P_f/P_i)",
          text: "Ces deux formes sont équivalentes (utiliser PV=nRT pour passer de l'une à l'autre). La première utilise (T,V), la seconde (T,P). À mémoriser pour calculer ΔS de tout processus de gaz parfait."
        },
        {
          type: "definition",
          title: "📌 Entropie créée S_créée",
          text: "On peut toujours décomposer la variation d'entropie : ΔS = S_échangée + S_créée. S_échangée = Q/T_ext (échange avec le milieu). S_créée = ΔS − Q/T_ext ≥ 0 (toujours positive, créée par les irréversibilités). Une transformation est réversible si et seulement si S_créée = 0."
        },
        {
          type: "demo",
          title: "🔬 Calcul de ΔS pour une détente libre",
          text: "Détente libre (W=Q=0, T=cst pour GP) : les états A(T, V_i) et B(T, V_f) sont bien définis.<br>ΔS = ΔS calculé sur l'isotherme réversible A→B = nR ln(V_f/V_i) > 0.<br>S_échangée = Q/T = 0 (Q=0). S_créée = nR ln(V_f/V_i) > 0. Cohérent : processus irréversible."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            visual: "🎓",
            question: "Pour calculer ΔS d'une transformation irréversible, on utilise :",
            answers: ["Un chemin réversible quelconque entre les mêmes états (S est une fonction d'état)", "Le chemin irréversible lui-même", "Q_irrev/T", "On ne peut pas calculer ΔS"],
            correct: 0,
            explanation: "ΔS est une fonction d'état → calculer ΔS sur un chemin réversible entre A et B donne le même résultat que sur tout autre chemin."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🎓",
            question: "Pour une isochore irréversible (Q=500J, T_moy=400K) d'un gaz parfait passant de T_i=350K à T_f=450K : ΔS = ?",
            answers: [
              "ΔS = nC_v ln(T_f/T_i) (fonction d'état, indépendant du fait que c'est irréversible)",
              "ΔS = Q/T_moy = 500/400",
              "ΔS = 0",
              "ΔS = Q/T_f"
            ],
            correct: 0,
            explanation: "ΔS se calcule toujours via la formule fonction d'état, même si la transformation est irréversible."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🎓",
            question: "Calculer ΔS pour 2 mol de gaz parfait diatomique (C_v=5R/2) passant de (T=300K, V=10L) à (T=600K, V=20L).",
            answers: [
              "ΔS = 2×(5R/2)×ln(2) + 2R×ln(2) = 2R×ln(2)×(5/2+1) = 7R×ln(2) ≈ 40,2 J·K⁻¹",
              "ΔS = 0",
              "ΔS = 2R ln(2)",
              "ΔS = 5R ln(2)"
            ],
            correct: 0,
            explanation: "ΔS = nC_v ln(T_f/T_i)+nR ln(V_f/V_i)=2×(5R/2)×ln(2)+2R×ln(2)=2R×ln(2)×(5/2+1)=2R×ln(2)×7/2=7R×ln(2)≈40,2 J·K⁻¹."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🎓",
            question: "Une compression irréversible (n=1 mol, T=300K, W=+2000J, Q=−1000J) : S_créée = ?",
            answers: [
              "S_créée = ΔS − Q/T_ext = nR ln(V_f/V_i) − Q/T. Ici ΔU=W+Q=1000J=nC_vΔT → ΔT=... → calcul nécessaire",
              "S_créée = 0",
              "S_créée = Q/T",
              "S_créée = W/T"
            ],
            correct: 0,
            explanation: "S_créée = ΔS_sys − Q/T_ext ≥ 0. On calcule ΔS_sys avec la formule GP puis soustrait Q/T_ext."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🎓",
            question: "Pourquoi une adiabatique irréversible (compression dans le vide inversée: détente dans le vide) a-t-elle ΔS > 0 même si Q=0 ?",
            answers: [
              "Car S_créée > 0 (irréversibilité) et S_échangée = Q/T = 0 → ΔS = S_créée > 0",
              "Car Q ≠ 0 en réalité",
              "Car T change",
              "Car V ne change pas"
            ],
            correct: 0,
            explanation: "Q=0 → S_échangée=0. Mais l'irréversibilité crée S_créée > 0 → ΔS = S_créée > 0."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🎓",
            question: "L'égalité de Clausius-Clapeyron dP/dT = ΔS/ΔV est dérivée du :",
            answers: ["2e principe (ΔG=0 à l'équilibre de phases) + relation de Maxwell", "1er principe seul", "PV=nRT", "ΔU=Q"],
            correct: 0,
            explanation: "dP/dT sur la courbe de coexistence = L/(TΔV) = ΔS/ΔV. Résulte de μ_liq=μ_vap (2e principe = minimisation de G)."
          }
        ]
      ]
    },
    {
      id: "gaz-parfait-l1",
      label: "Gaz parfait — théorie cinétique (L1)",
      icon: "🔬",
      lesson: {
        formula: "PV = NkT  ←  P = Nm⟨v²⟩/3V",
        text: "À L1, on dérive PV=NkT depuis la mécanique statistique, et on introduit la distribution de Maxwell-Boltzmann des vitesses. Ces résultats microscopiques justifient les lois macroscopiques.",
        example: "v_rms = √(3RT/M) ≈ 517 m/s pour N₂ à 300K. v_mp = √(2RT/M) ≈ 422 m/s."
      },
      fullBlocks: [
        {
          type: "demo",
          title: "🔬 Dérivation de PV = NkT",
          text: "N molécules de masse m dans un cube de côté L. Force exercée sur la paroi par une molécule de vitesse v_x : F = 2mv_x / (2L/v_x) = mv_x²/L. Pression d'un côté : P = N⟨mv_x²⟩/V. Isotropie : ⟨v_x²⟩ = ⟨v²⟩/3. Énergie cinétique : ½m⟨v²⟩ = (3/2)k_BT. Donc : P = N×(2/3)×(3/2)k_BT/V = Nk_BT/V → PV = Nk_BT = nRT ✓"
        },
        {
          type: "formula",
          title: "🔑 Distribution de Maxwell-Boltzmann",
          formula: "f(v) = 4π(m/2πk_BT)^(3/2) v² exp(−mv²/2k_BT)",
          text: "Vitesses caractéristiques :<br>v_mp = √(2k_BT/m) (plus probable, maximum de f)<br>v̄ = √(8k_BT/πm) (moyenne)<br>v_rms = √(3k_BT/m) (quadratique)<br>Ordre : v_mp < v̄ < v_rms"
        },
        {
          type: "example",
          title: "✅ Applications numériques",
          text: "Pour N₂ (M=28 g/mol) à T=300 K :<br>v_rms = √(3RT/M) = √(3×8,314×300/0,028) ≈ 517 m/s<br>v̄ = √(8RT/πM) ≈ 476 m/s<br>v_mp = √(2RT/M) ≈ 422 m/s<br>Le son dans l'air ≈ 343 m/s : les molécules vont bien plus vite en moyenne !"
        },
        {
          type: "definition",
          title: "📌 Degrés de liberté et équipartition",
          text: "Théorème d'équipartition : chaque degré de liberté quadratique (cinétique ou potentiel) contribue ½k_BT à l'énergie moyenne. Conséquences : C_v = (f/2)R par mol, avec f = degrés de liberté. f=3 (mono), f=5 (di, T modérée), f=7 (di, haute T, vibration activée)."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            visual: "🔬",
            question: "D'où vient la pression d'un gaz sur sa paroi ?",
            answers: ["Des chocs des molécules sur la paroi (transfert de quantité de mouvement)", "De la gravité", "Des liaisons chimiques", "De la chaleur rayonnée"],
            correct: 0,
            explanation: "Chaque choc transfère 2mv_x de quantité de mouvement à la paroi → force macroscopique = pression."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🔬",
            question: "Pour He (M=4 g/mol) à T=300K : v_rms ≈ ?",
            answers: ["≈ 1367 m/s", "≈ 517 m/s", "≈ 300 m/s", "≈ 683 m/s"],
            correct: 0,
            explanation: "v_rms = √(3RT/M) = √(3×8,314×300/0,004) ≈ √(1869 150) ≈ 1367 m/s."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🔬",
            question: "L'ordre des vitesses caractéristiques dans la distribution de Maxwell est :",
            answers: ["v_mp < v̄ < v_rms", "v_rms < v̄ < v_mp", "v̄ < v_mp < v_rms", "Toutes égales"],
            correct: 0,
            explanation: "v_mp = √(2kT/m), v̄ = √(8kT/πm), v_rms = √(3kT/m). Numériquement : v_mp:v̄:v_rms ≈ 1:1,128:1,225."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🔬",
            question: "Si T est quadruplée, v_rms est multipliée par :",
            answers: ["2 (car v_rms ∝ √T)", "4", "√2", "16"],
            correct: 0,
            explanation: "v_rms ∝ √T → T×4 → v_rms × √4 = 2."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🔬",
            question: "Pour un gaz diatomique (ex : N₂), à T=1000K (modes vibratoires partiellement activés), C_v se situe entre :",
            answers: ["5R/2 et 7R/2 (activation partielle des vibrations)", "Exactement 5R/2", "Exactement 7R/2", "3R/2"],
            correct: 0,
            explanation: "La quantification des vibrations rend leur activation progressive (Einstein) : C_v croît de 5R/2 vers 7R/2 quand T augmente."
          }
        ],
        [
          {
            type: "mcq",
            visual: "🔬",
            question: "La relation entre la conductivité thermique κ et la viscosité η d'un gaz parfait (nombre de Prandtl Pr = η C_p / (ρ κ)) vaut pour un gaz monoatomique :",
            answers: ["Pr ≈ 2/3 (résultat de la théorie cinétique)", "Pr = 1", "Pr = γ", "Pr = 0"],
            correct: 0,
            explanation: "Théorie cinétique des gaz parfaits monoatomiques : Pr = η C_p / ρκ = 5k_B/(2m) × (5m/3k_B) = 2/3."
          }
        ]
      ]
    }
  ]}
};