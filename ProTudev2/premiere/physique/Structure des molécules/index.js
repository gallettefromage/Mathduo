// Chapitre: Électrochimie et Électronégativité
// Spécialité: Physique-Chimie (Première/Terminale)
// Généré le 29/03/2026
// 6 notion(s) + 3 L1

export default {
  id: "electrochimie-electronegativite",
  title: "Électrochimie & Électronégativité",
  description: "Structure des entités, liaisons chimiques, polarité et réactivité",
  icon: "⚡",
  xpMax: 220,
  notions: [
    {
      id: "regle-duet-octet",
      label: "Règle du duet et de l'octet",
      icon: "⚛️",
      lesson: {
        formula: "Duet : 2 e⁻ sur couche externe | Octet : 8 e⁻ sur couche externe",
        text: "Les atomes établissent des liaisons covalentes pour acquérir une structure électronique stable, identique à celle des gaz nobles.",
        example: "H (1e⁻) forme 1 liaison pour atteindre 2e⁻ (duet) | O (6e⁻) forme 2 liaisons pour atteindre 8e⁻ (octet)"
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Stabilité des gaz nobles",
          text: "Les gaz nobles (He, Ne, Ar, Kr, Xe, Rn) possèdent leur couche électronique externe complète : 2 électrons pour l'hélium (règle du duet), 8 électrons pour les autres (règle de l'octet). Cette configuration est chimiquement stable : ils ne forment pas de liaisons."
        },
        {
          type: "formula",
          title: "🔑 Règle du duet (Z ≤ 4)",
          formula: "L'atome d'hydrogène (Z=1) et l'hélium (Z=2) suivent la règle du duet : couche K complète avec 2 électrons.",
          text: "Tout atome qui forme une liaison covalente cherche à acquérir 2 électrons sur sa couche externe s'il n'a que la couche K."
        },
        {
          type: "formula",
          title: "🔑 Règle de l'octet (Z ≥ 5)",
          formula: "Pour les atomes de la 2ème période et plus, la stabilité est atteinte avec 8 électrons sur la couche externe (configuration ns²np⁶).",
          text: "Le carbone (4e⁻ externes) forme 4 liaisons, l'oxygène (6e⁻) forme 2 liaisons, l'azote (5e⁻) forme 3 liaisons."
        },
        {
          type: "example",
          title: "✅ Application aux molécules simples",
          text: "• H₂O : O (6e⁻) forme 2 liaisons avec 2 H → 8e⁻ autour de O. Chaque H a 2e⁻.\n• CH₄ : C (4e⁻) forme 4 liaisons avec 4 H → 8e⁻ autour de C.\n• NH₃ : N (5e⁻) forme 3 liaisons avec 3 H → 8e⁻ autour de N."
        },
        {
          type: "technique",
          title: "🎯 Déterminer le nombre de liaisons",
          formula: "n_liaisons = 8 - n_e⁻_externes (pour octet) ou 2 - n_e⁻_externes (pour duet)",
          text: "Le nombre de liaisons covalentes qu'un atome peut former est égal au nombre d'électrons qui lui manquent pour atteindre la structure stable."
        },
        {
          type: "graph",
          title: "📊 Nombre de liaisons par atome",
          svgContent: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#f8f9fa"/>
            <text x="200" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#333">Nombre de liaisons covalentes</text>
            <rect x="40" y="80" width="60" height="180" fill="#4285f4" opacity="0.8">
              <animate attributeName="height" from="0" to="180" dur="1s" fill="freeze"/>
              <animate attributeName="y" from="260" to="80" dur="1s" fill="freeze"/>
            </rect>
            <text x="70" y="275" text-anchor="middle" font-size="14" fill="#333">H</text>
            <text x="70" y="70" text-anchor="middle" font-size="12" fill="#4285f4">1</text>
            
            <rect x="130" y="140" width="60" height="120" fill="#ea4335" opacity="0.8">
              <animate attributeName="height" from="0" to="120" dur="1s" fill="freeze"/>
              <animate attributeName="y" from="260" to="140" dur="1s" fill="freeze"/>
            </rect>
            <text x="160" y="275" text-anchor="middle" font-size="14" fill="#333">O</text>
            <text x="160" y="130" text-anchor="middle" font-size="12" fill="#ea4335">2</text>
            
            <rect x="220" y="100" width="60" height="160" fill="#fbbc04" opacity="0.8">
              <animate attributeName="height" from="0" to="160" dur="1s" fill="freeze"/>
              <animate attributeName="y" from="260" to="100" dur="1s" fill="freeze"/>
            </rect>
            <text x="250" y="275" text-anchor="middle" font-size="14" fill="#333">N</text>
            <text x="250" y="90" text-anchor="middle" font-size="12" fill="#fbbc04">3</text>
            
            <rect x="310" y="60" width="60" height="200" fill="#34a853" opacity="0.8">
              <animate attributeName="height" from="0" to="200" dur="1s" fill="freeze"/>
              <animate attributeName="y" from="260" to="60" dur="1s" fill="freeze"/>
            </rect>
            <text x="340" y="275" text-anchor="middle" font-size="14" fill="#333">C</text>
            <text x="340" y="50" text-anchor="middle" font-size="12" fill="#34a853">4</text>
          </svg>`,
          caption: "Nombre de liaisons covalentes standards pour H, O, N, C",
          text: "Le carbone peut former jusqu'à 4 liaisons, l'azote 3, l'oxygène 2, l'hydrogène 1."
        },
        {
          type: "demo",
          title: "🔬 Pourquoi l'octet est-il stable ?",
          text: "La configuration électronique ns²np⁶ correspond à une couche de valence complète, offrant une énergie minimale. Les électrons sont appariés, ce qui maximise la stabilité quantique. C'est la configuration des gaz nobles, chimiquement inertes."
        },
        {
          type: "warning",
          title: "⚠️ Exceptions à la règle",
          text: "• Le bore (Z=5) peut former des composés avec seulement 6 électrons (ex: BF₃).\n• Le soufre et le phosphore peuvent dépasser l'octet (ex: SF₆, PCl₅) en utilisant leurs orbitales d vacantes.\n• Les radicaux libres possèdent un électron non apparié (ex: •CH₃)."
        }
      ],
      levels: [
        // Niveau 1 - Questions simples sur la règle du duet/octet
        [
          {
            type: "mcq",
            visual: "⚛️",
            question: "Combien d'électrons l'atome d'hydrogène doit-il acquérir pour satisfaire la règle du duet ?",
            answers: ["1", "2", "3", "0"],
            correct: 0,
            explanation: "H a 1 électron, il lui en faut 1 de plus pour atteindre 2 (duet)."
          },
          {
            type: "mcq",
            visual: "⚛️",
            question: "L'oxygène (Z=8) a combien d'électrons sur sa couche externe ?",
            answers: ["8", "6", "2", "4"],
            correct: 1,
            explanation: "Configuration 1s² 2s² 2p⁴ → 6 électrons externes."
          },
          {
            type: "mcq",
            visual: "⚛️",
            question: "Combien de liaisons covalentes l'oxygène peut-il former ?",
            answers: ["1", "2", "3", "4"],
            correct: 1,
            explanation: "Il lui manque 2 électrons pour atteindre l'octet → 2 liaisons."
          },
          {
            type: "mcq",
            visual: "⚛️",
            question: "Le carbone (Z=6) suit quelle règle de stabilité ?",
            answers: ["Duet", "Octet", "Triplet", "Doublet"],
            correct: 1,
            explanation: "Le carbone est en 2ème période, il cherche à avoir 8 électrons externes (octet)."
          },
          {
            type: "mcq",
            visual: "⚛️",
            question: "Combien de liaisons l'azote peut-il former ?",
            answers: ["1", "2", "3", "4"],
            correct: 2,
            explanation: "N a 5 électrons externes, il lui en manque 3 pour l'octet → 3 liaisons."
          },
          {
            type: "mcq",
            visual: "⚛️",
            question: "Quel atome suit la règle du duet ?",
            answers: ["Carbone", "Oxygène", "Hydrogène", "Azote"],
            correct: 2,
            explanation: "L'hydrogène n'a que la couche K, il doit avoir 2 électrons (duet)."
          },
          {
            type: "mcq",
            visual: "⚛️",
            question: "La configuration électronique 1s² correspond à quel gaz noble ?",
            answers: ["Néon", "Argon", "Hélium", "Krypton"],
            correct: 2,
            explanation: "L'hélium a 2 électrons sur sa couche K (1s²)."
          },
          {
            type: "mcq",
            visual: "⚛️",
            question: "Pourquoi les gaz nobles sont-ils inertes ?",
            answers: ["Ils n'ont pas de noyau", "Leur couche externe est complète", "Ils sont radioactifs", "Ils sont trop légers"],
            correct: 1,
            explanation: "Leur configuration électronique stable (duet ou octet) les rend chimiquement inertes."
          },
          {
            type: "mcq",
            visual: "⚛️",
            question: "Quelle est la configuration électronique de l'argon (Z=18) ?",
            answers: ["1s²2s²2p⁶", "1s²2s²2p⁶3s²3p⁶", "1s²2s²2p⁶3s²3p⁵", "1s²2s²2p⁶3s²"],
            correct: 1,
            explanation: "Ar : 1s² 2s² 2p⁶ 3s² 3p⁶, couche externe complète."
          },
          {
            type: "mcq",
            visual: "⚛️",
            question: "Le fluor (Z=9) a combien d'électrons sur sa couche externe ?",
            answers: ["9", "7", "8", "6"],
            correct: 1,
            explanation: "Configuration 1s² 2s² 2p⁵ → 7 électrons externes."
          }
        ],
        // Niveau 2 - Application aux molécules
        [
          {
            type: "mcq",
            visual: "⚛️",
            question: "Dans la molécule CH₄, combien d'électrons le carbone possède-t-il autour de lui ?",
            answers: ["4", "6", "8", "10"],
            correct: 2,
            explanation: "Le carbone partage 4 liaisons avec H, soit 8 électrons autour de lui (octet)."
          },
          {
            type: "mcq",
            visual: "⚛️",
            question: "Dans NH₃, l'azote possède combien de doublets non liants ?",
            answers: ["0", "1", "2", "3"],
            correct: 1,
            explanation: "N a 3 liaisons et 1 doublet non liant (soit 8 électrons)."
          },
          {
            type: "mcq",
            visual: "⚛️",
            question: "Quelle molécule respecte la règle de l'octet ?",
            answers: ["BF₃", "BeH₂", "CH₄", "SF₆"],
            correct: 2,
            explanation: "CH₄ : C a 8 électrons, H a 2 électrons chacun."
          },
          {
            type: "mcq",
            visual: "⚛️",
            question: "L'atome de chlore (Z=17) forme combien de liaisons ?",
            answers: ["1", "2", "3", "4"],
            correct: 0,
            explanation: "Cl a 7 électrons externes, il lui manque 1 électron pour l'octet → 1 liaison."
          },
          {
            type: "mcq",
            visual: "⚛️",
            question: "Dans H₂O, combien de doublets non liants l'oxygène possède-t-il ?",
            answers: ["0", "1", "2", "3"],
            correct: 2,
            explanation: "O a 2 liaisons et 2 doublets non liants (4+4=8 électrons)."
          },
          {
            type: "mcq",
            visual: "⚛️",
            question: "Le bore (Z=5) dans BF₃ respecte-t-il l'octet ?",
            answers: ["Oui", "Non, il a 6 électrons", "Non, il a 4 électrons", "Oui, il a 8 électrons"],
            correct: 1,
            explanation: "B a 3 liaisons, soit 6 électrons autour de lui (exception)."
          },
          {
            type: "mcq",
            visual: "⚛️",
            question: "Combien d'électrons le phosphore a-t-il dans PCl₅ ?",
            answers: ["8", "10", "12", "5"],
            correct: 1,
            explanation: "P a 5 liaisons, soit 10 électrons (expansion d'octet)."
          },
          {
            type: "mcq",
            visual: "⚛️",
            question: "La molécule CO₂ respecte la règle de l'octet pour le carbone ?",
            answers: ["Oui, 8 électrons", "Non, 6 électrons", "Non, 4 électrons", "Oui, 10 électrons"],
            correct: 0,
            explanation: "C forme 2 doubles liaisons, soit 8 électrons autour de lui."
          },
          {
            type: "mcq",
            visual: "⚛️",
            question: "Dans BeH₂, le béryllium respecte-t-il l'octet ?",
            answers: ["Oui", "Non, il a 4 électrons", "Non, il a 6 électrons", "Non, il a 2 électrons"],
            correct: 1,
            explanation: "Be a 2 liaisons, soit 4 électrons (exception, pas d'octet)."
          },
          {
            type: "mcq",
            visual: "⚛️",
            question: "Le soufre dans SF₆ possède combien d'électrons autour de lui ?",
            answers: ["8", "10", "12", "14"],
            correct: 2,
            explanation: "S forme 6 liaisons, soit 12 électrons (expansion d'octet)."
          }
        ],
        // Niveau 3 - Calculs et configurations électroniques
        [
          {
            type: "input",
            visual: "🎯",
            question: "Configuration électronique de l'oxygène (Z=8) :",
            correct: "1s²2s²2p⁴",
            explanation: "O : 1s² 2s² 2p⁴"
          },
          {
            type: "input",
            visual: "🎯",
            question: "Combien de liaisons l'atome de soufre (Z=16) forme-t-il typiquement ?",
            correct: "2",
            explanation: "S a 6 électrons externes, il lui manque 2 électrons pour l'octet."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Configuration électronique de l'azote (Z=7) :",
            correct: "1s²2s²2p³",
            explanation: "N : 1s² 2s² 2p³"
          },
          {
            type: "input",
            visual: "🎯",
            question: "Écrire la formule brute de la molécule formée par 1 C et 4 H :",
            correct: "CH₄",
            explanation: "Méthane"
          },
          {
            type: "input",
            visual: "🎯",
            question: "Combien d'électrons externes a l'atome de fluor (Z=9) ?",
            correct: "7",
            explanation: "Configuration 1s² 2s² 2p⁵ → 7 e⁻ externes"
          },
          {
            type: "input",
            visual: "🎯",
            question: "Configuration électronique du magnésium (Z=12) :",
            correct: "1s²2s²2p⁶3s²",
            explanation: "Mg : [Ne] 3s²"
          },
          {
            type: "input",
            visual: "🎯",
            question: "Nombre de liaisons covalentes du carbone :",
            correct: "4",
            explanation: "Il lui manque 4 électrons pour l'octet."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Nombre d'électrons externes du chlore (Z=17) :",
            correct: "7",
            explanation: "Cl : 1s²2s²2p⁶3s²3p⁵ → 7 e⁻"
          },
          {
            type: "input",
            visual: "🎯",
            question: "Combien d'électrons l'hélium a-t-il sur sa couche externe ?",
            correct: "2",
            explanation: "Règle du duet"
          },
          {
            type: "input",
            visual: "🎯",
            question: "Écrire la formule brute de l'ammoniac :",
            correct: "NH₃",
            explanation: "1 atome d'azote + 3 atomes d'hydrogène"
          }
        ],
        // Niveau 4 - Représentation de Lewis
        [
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans la représentation de Lewis de NH₃, combien de doublets non liants ?",
            answers: ["0", "1", "2", "3"],
            correct: 1,
            explanation: "N a 3 liaisons et 1 doublet non liant."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Représentation de Lewis de H₂O : combien de doublets non liants sur O ?",
            answers: ["0", "1", "2", "3"],
            correct: 2,
            explanation: "O a 2 liaisons et 2 doublets non liants."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans CO₂, le carbone est lié par :",
            answers: ["1 liaison simple", "1 double liaison", "2 doubles liaisons", "1 triple liaison"],
            correct: 2,
            explanation: "C=O et C=O, soit 2 doubles liaisons."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Combien de doublets liants dans CH₄ ?",
            answers: ["2", "3", "4", "5"],
            correct: 2,
            explanation: "4 liaisons C-H → 4 doublets liants."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Représentation de Lewis de Cl₂ : combien de doublets non liants par atome ?",
            answers: ["1", "2", "3", "4"],
            correct: 2,
            explanation: "Chaque Cl a 1 liaison et 3 doublets non liants."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans la molécule N₂, la liaison est :",
            answers: ["Simple", "Double", "Triple", "Ionique"],
            correct: 2,
            explanation: "N≡N, triple liaison."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Combien d'électrons partagés dans une liaison covalente simple ?",
            answers: ["1", "2", "3", "4"],
            correct: 1,
            explanation: "2 électrons (un doublet liant)."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans H₂O, l'atome d'oxygène a combien d'électrons au total autour de lui ?",
            answers: ["6", "8", "10", "4"],
            correct: 1,
            explanation: "2 liaisons (4 e⁻) + 2 doublets non liants (4 e⁻) = 8 e⁻."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans CH₄, l'atome de carbone a combien d'électrons ?",
            answers: ["4", "6", "8", "10"],
            correct: 2,
            explanation: "4 liaisons C-H → 8 électrons partagés."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Le doublet non liant est :",
            answers: ["Partagé entre 2 atomes", "Propre à un atome", "Une liaison covalente", "Un électron célibataire"],
            correct: 1,
            explanation: "C'est un doublet d'électrons qui n'est pas impliqué dans une liaison."
          }
        ],
        // Niveau 5 - Géométrie des molécules (modèle VSEPR/Gillespie)
        [
          {
            type: "mcq",
            visual: "📐",
            question: "Quelle est la géométrie de CH₄ ?",
            answers: ["Linéaire", "Tétraédrique", "Pyramidale", "Coudée"],
            correct: 1,
            explanation: "4 doublets liants → tétraèdre, angle 109°."
          },
          {
            type: "graph",
            title: "📐 Géométries selon VSEPR",
            svgContent: `<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
              <rect width="500" height="400" fill="#f8f9fa"/>
              <text x="250" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#333">Modèle VSEPR - Gillespie</text>
              
              <!-- Tétraédrique -->
              <text x="70" y="80" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Tétraédrique</text>
              <text x="70" y="95" text-anchor="middle" font-size="10" fill="#666">CH₄ (109°)</text>
              <polygon points="70,140 90,180 50,180" fill="none" stroke="#4285f4" stroke-width="2"/>
              <line x1="70" y1="140" x2="70" y2="110" stroke="#4285f4" stroke-width="2"/>
              <circle cx="70" cy="140" r="4" fill="#ea4335"/>
              <circle cx="70" cy="110" r="3" fill="#34a853"/>
              <circle cx="90" cy="180" r="3" fill="#34a853"/>
              <circle cx="50" cy="180" r="3" fill="#34a853"/>
              <text x="70" y="195" text-anchor="middle" font-size="9" fill="#666">4 doublets liants</text>
              
              <!-- Pyramidale -->
              <text x="250" y="80" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Pyramidale</text>
              <text x="250" y="95" text-anchor="middle" font-size="10" fill="#666">NH₃ (107°)</text>
              <line x1="250" y1="120" x2="250" y2="160" stroke="#ea4335" stroke-width="2"/>
              <line x1="250" y1="160" x2="230" y2="200" stroke="#4285f4" stroke-width="2"/>
              <line x1="250" y1="160" x2="270" y2="200" stroke="#4285f4" stroke-width="2"/>
              <line x1="250" y1="160" x2="250" y2="200" stroke="#4285f4" stroke-width="2"/>
              <circle cx="250" cy="120" r="4" fill="#ea4335"/>
              <circle cx="250" cy="200" r="3" fill="#34a853"/>
              <circle cx="230" cy="200" r="3" fill="#34a853"/>
              <circle cx="270" cy="200" r="3" fill="#34a853"/>
              <text x="250" y="215" text-anchor="middle" font-size="9" fill="#666">3 liants + 1 non liant</text>
              
              <!-- Coudée -->
              <text x="430" y="80" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Coudée</text>
              <text x="430" y="95" text-anchor="middle" font-size="10" fill="#666">H₂O (105°)</text>
              <line x1="430" y1="130" x2="410" y2="170" stroke="#4285f4" stroke-width="2"/>
              <line x1="430" y1="130" x2="450" y2="170" stroke="#4285f4" stroke-width="2"/>
              <circle cx="430" cy="130" r="4" fill="#ea4335"/>
              <circle cx="410" cy="170" r="3" fill="#34a853"/>
              <circle cx="450" cy="170" r="3" fill="#34a853"/>
              <text x="430" y="190" text-anchor="middle" font-size="9" fill="#666">2 liants + 2 non liants</text>
              
              <!-- Légende -->
              <circle cx="70" cy="250" r="3" fill="#ea4335"/>
              <text x="80" y="253" font-size="10" fill="#333">Atome central</text>
              <circle cx="200" cy="250" r="3" fill="#34a853"/>
              <text x="210" y="253" font-size="10" fill="#333">Atome lié</text>
              <circle cx="330" cy="250" r="3" fill="#4285f4"/>
              <text x="340" y="253" font-size="10" fill="#333">Liaison covalente</text>
            </svg>`,
            caption: "Géométries moléculaires selon le modèle VSEPR",
            text: "Les doublets d'électrons (liants ou non liants) se repoussent et s'écartent au maximum."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Angle HNH dans NH₃ ?",
            answers: ["109°", "107°", "105°", "120°"],
            correct: 1,
            explanation: "La présence d'un doublet non liant réduit légèrement l'angle."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Angle HOH dans H₂O ?",
            answers: ["109°", "107°", "105°", "120°"],
            correct: 2,
            explanation: "2 doublets non liants compriment davantage l'angle."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Géométrie de CO₂ ?",
            answers: ["Linéaire", "Tétraédrique", "Coudée", "Pyramidale"],
            correct: 0,
            explanation: "2 doublets liants → linéaire, angle 180°."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Pourquoi NH₃ n'est-il pas tétraédrique ?",
            answers: ["Trop d'atomes", "Présence d'un doublet non liant", "Liaisons trop courtes", "Carbone absent"],
            correct: 1,
            explanation: "Le doublet non liant repousse les liaisons, réduisant l'angle."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Quelle molécule a une géométrie coudée ?",
            answers: ["CO₂", "CH₄", "H₂O", "NH₃"],
            correct: 2,
            explanation: "H₂O : 2 liaisons + 2 doublets non liants → forme coudée."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Angle de liaison dans CH₄ ?",
            answers: ["90°", "109°", "107°", "105°"],
            correct: 1,
            explanation: "Tétraèdre parfait : angle de 109.5°."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Géométrie de BeCl₂ (Be a 2 liaisons, 0 doublet non liant) ?",
            answers: ["Linéaire", "Coudée", "Tétraédrique", "Pyramidale"],
            correct: 0,
            explanation: "2 doublets liants → linéaire, angle 180°."
          }
        ],
        // Niveau 6 - Électronégativité et polarité
        [
          {
            type: "mcq",
            visual: "⚡",
            question: "Qu'est-ce que l'électronégativité ?",
            answers: ["Capacité à perdre des électrons", "Capacité à attirer des électrons", "Nombre d'électrons externes", "Taille de l'atome"],
            correct: 1,
            explanation: "L'électronégativité traduit l'aptitude d'un atome à attirer le doublet d'électrons partagé."
          },
          {
            type: "graph",
            title: "⚡ Échelle d'électronégativité de Pauling",
            svgContent: `<svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
              <rect width="500" height="350" fill="#f8f9fa"/>
              <text x="250" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#333">Électronégativité (échelle de Pauling)</text>
              
              <!-- Tableau périodique simplifié -->
              <rect x="10" y="60" width="60" height="40" fill="#e8f0fe" stroke="#4285f4" stroke-width="1"/>
              <text x="40" y="85" text-anchor="middle" font-size="12" font-weight="bold" fill="#4285f4">H</text>
              <text x="40" y="95" text-anchor="middle" font-size="9" fill="#666">2.20</text>
              
              <rect x="80" y="60" width="60" height="40" fill="#fce8e6" stroke="#ea4335" stroke-width="1"/>
              <text x="110" y="85" text-anchor="middle" font-size="12" font-weight="bold" fill="#ea4335">He</text>
              <text x="110" y="95" text-anchor="middle" font-size="9" fill="#666">-</text>
              
              <rect x="10" y="110" width="60" height="40" fill="#e8f0fe" stroke="#4285f4" stroke-width="1"/>
              <text x="40" y="135" text-anchor="middle" font-size="12" font-weight="bold" fill="#4285f4">Li</text>
              <text x="40" y="145" text-anchor="middle" font-size="9" fill="#666">0.98</text>
              
              <rect x="80" y="110" width="60" height="40" fill="#e8f0fe" stroke="#4285f4" stroke-width="1"/>
              <text x="110" y="135" text-anchor="middle" font-size="12" font-weight="bold" fill="#4285f4">Be</text>
              <text x="110" y="145" text-anchor="middle" font-size="9" fill="#666">1.57</text>
              
              <rect x="150" y="110" width="60" height="40" fill="#fef7e0" stroke="#fbbc04" stroke-width="1"/>
              <text x="180" y="135" text-anchor="middle" font-size="12" font-weight="bold" fill="#fbbc04">B</text>
              <text x="180" y="145" text-anchor="middle" font-size="9" fill="#666">2.04</text>
              
              <rect x="220" y="110" width="60" height="40" fill="#e6f4ea" stroke="#34a853" stroke-width="1"/>
              <text x="250" y="135" text-anchor="middle" font-size="12" font-weight="bold" fill="#34a853">C</text>
              <text x="250" y="145" text-anchor="middle" font-size="9" fill="#666">2.55</text>
              
              <rect x="290" y="110" width="60" height="40" fill="#e6f4ea" stroke="#34a853" stroke-width="1"/>
              <text x="320" y="135" text-anchor="middle" font-size="12" font-weight="bold" fill="#34a853">N</text>
              <text x="320" y="145" text-anchor="middle" font-size="9" fill="#666">3.04</text>
              
              <rect x="360" y="110" width="60" height="40" fill="#e6f4ea" stroke="#34a853" stroke-width="1"/>
              <text x="390" y="135" text-anchor="middle" font-size="12" font-weight="bold" fill="#34a853">O</text>
              <text x="390" y="145" text-anchor="middle" font-size="9" fill="#666">3.44</text>
              
              <rect x="430" y="110" width="60" height="40" fill="#e6f4ea" stroke="#34a853" stroke-width="1"/>
              <text x="460" y="135" text-anchor="middle" font-size="12" font-weight="bold" fill="#34a853">F</text>
              <text x="460" y="145" text-anchor="middle" font-size="9" fill="#666">3.98</text>
              
              <text x="250" y="190" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Évolution dans le tableau périodique</text>
              
              <!-- Flèche vers la droite -->
              <line x1="80" y1="220" x2="420" y2="220" stroke="#ea4335" stroke-width="3" marker-end="url(#arrowRight)"/>
              <text x="250" y="215" text-anchor="middle" font-size="11" fill="#ea4335">↗ L'électronégativité augmente →</text>
              
              <!-- Flèche vers le haut -->
              <line x1="250" y1="240" x2="250" y2="300" stroke="#ea4335" stroke-width="3" marker-end="url(#arrowDown)"/>
              <text x="255" y="275" text-anchor="start" font-size="11" fill="#ea4335">↑ L'électronégativité augmente</text>
              
              <defs>
                <marker id="arrowRight" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#ea4335"/>
                </marker>
                <marker id="arrowDown" markerWidth="7" markerHeight="10" refX="3.5" refY="10" orient="auto">
                  <polygon points="0 0, 7 0, 3.5 10" fill="#ea4335"/>
                </marker>
              </defs>
              
              <rect x="30" y="310" width="440" height="30" rx="5" fill="#e8f0fe" stroke="#4285f4" stroke-width="1"/>
              <text x="250" y="330" text-anchor="middle" font-size="11" fill="#333">L'élément le plus électronégatif : le Fluor (F) avec 3.98</text>
            </svg>`,
            caption: "Évolution de l'électronégativité dans le tableau périodique",
            text: "L'électronégativité augmente de gauche à droite et de bas en haut."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Quel est l'élément le plus électronégatif ?",
            answers: ["Oxygène", "Chlore", "Fluor", "Azote"],
            correct: 2,
            explanation: "Le fluor (F) a l'électronégativité la plus élevée : 3.98."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Dans une liaison H-Cl, où se trouve le doublet liant ?",
            answers: ["Vers H", "Vers Cl", "Au milieu", "Autour de H"],
            correct: 1,
            explanation: "Cl est plus électronégatif (3.16) que H (2.20) → attire le doublet."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Une liaison est polarisée si la différence d'électronégativité est :",
            answers: ["Nulle", "Faible (<0.4)", "Significative (0.4-1.7)", "Très grande (>2.0)"],
            correct: 2,
            explanation: "Une différence significative crée un dipôle et une liaison polarisée."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "La molécule CO₂ est-elle polaire ?",
            answers: ["Oui", "Non", "Parfois", "Dépend de la température"],
            correct: 1,
            explanation: "Géométrie linéaire symétrique → moments dipolaires s'annulent."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "La molécule H₂O est polaire car :",
            answers: ["Géométrie linéaire", "Géométrie coudée et O plus électronégatif", "Liaisons apolaires", "Atomes identiques"],
            correct: 1,
            explanation: "O plus électronégatif que H, et géométrie coudée → dipôle résultant non nul."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Électronégativité de l'oxygène (O) ?",
            answers: ["2.20", "2.55", "3.04", "3.44"],
            correct: 3,
            explanation: "O : 3.44 (Pauling)."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "L'électronégativité augmente quand on se déplace :",
            answers: ["Vers la gauche et le bas", "Vers la droite et le haut", "Vers la gauche et le haut", "Vers la droite et le bas"],
            correct: 1,
            explanation: "Elle augmente de gauche à droite et de bas en haut."
          }
        ]
      ]
    },
    {
      id: "liaisons-covalentes",
      label: "Liaisons covalentes",
      icon: "🔗",
      lesson: {
        formula: "Liaison simple : 1 doublet liant | Double : 2 doublets | Triple : 3 doublets",
        text: "Une liaison covalente correspond à une mise en commun de deux électrons (un doublet) entre deux atomes.",
        example: "H₂ : H-H (simple) | O₂ : O=O (double) | N₂ : N≡N (triple)"
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Définition",
          text: "Une liaison covalente est une liaison chimique dans laquelle deux atomes mettent en commun un ou plusieurs doublets d'électrons. Chaque atome apporte un électron par liaison simple."
        },
        {
          type: "formula",
          title: "🔑 Types de liaisons covalentes",
          formula: "• Simple : 1 doublet (ex: H-H, C-H)\n• Double : 2 doublets (ex: C=O, O=O)\n• Triple : 3 doublets (ex: N≡N, C≡C)",
          text: "Plus le nombre de doublets partagés est élevé, plus la liaison est courte et forte."
        },
        {
          type: "example",
          title: "✅ Exemples",
          text: "• H₂O : liaisons simples O-H\n• CO₂ : doubles liaisons O=C=O\n• N₂ : triple liaison N≡N (très stable)\n• C₂H₂ (éthyne) : triple liaison C≡C"
        },
        {
          type: "graph",
          title: "🔗 Représentation des liaisons",
          svgContent: `<svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg">
            <rect width="500" height="250" fill="#f8f9fa"/>
            <text x="250" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#333">Types de liaisons covalentes</text>
            
            <!-- Liaison simple -->
            <text x="85" y="70" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Liaison simple</text>
            <line x1="40" y1="100" x2="130" y2="100" stroke="#4285f4" stroke-width="3"/>
            <circle cx="40" cy="100" r="15" fill="none" stroke="#ea4335" stroke-width="2"/>
            <circle cx="130" cy="100" r="15" fill="none" stroke="#ea4335" stroke-width="2"/>
            <text x="40" y="105" text-anchor="middle" font-size="12" fill="#ea4335">H</text>
            <text x="130" y="105" text-anchor="middle" font-size="12" fill="#ea4335">H</text>
            <text x="85" y="125" text-anchor="middle" font-size="10" fill="#666">H-H</text>
            
            <!-- Liaison double -->
            <text x="250" y="70" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Liaison double</text>
            <line x1="200" y1="95" x2="300" y2="95" stroke="#34a853" stroke-width="3"/>
            <line x1="200" y1="105" x2="300" y2="105" stroke="#34a853" stroke-width="3"/>
            <circle cx="200" cy="100" r="15" fill="none" stroke="#ea4335" stroke-width="2"/>
            <circle cx="300" cy="100" r="15" fill="none" stroke="#ea4335" stroke-width="2"/>
            <text x="200" y="105" text-anchor="middle" font-size="12" fill="#ea4335">O</text>
            <text x="300" y="105" text-anchor="middle" font-size="12" fill="#ea4335">O</text>
            <text x="250" y="125" text-anchor="middle" font-size="10" fill="#666">O=O</text>
            
            <!-- Liaison triple -->
            <text x="415" y="70" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Liaison triple</text>
            <line x1="360" y1="90" x2="470" y2="90" stroke="#fbbc04" stroke-width="3"/>
            <line x1="360" y1="100" x2="470" y2="100" stroke="#fbbc04" stroke-width="3"/>
            <line x1="360" y1="110" x2="470" y2="110" stroke="#fbbc04" stroke-width="3"/>
            <circle cx="360" cy="100" r="15" fill="none" stroke="#ea4335" stroke-width="2"/>
            <circle cx="470" cy="100" r="15" fill="none" stroke="#ea4335" stroke-width="2"/>
            <text x="360" y="105" text-anchor="middle" font-size="12" fill="#ea4335">N</text>
            <text x="470" y="105" text-anchor="middle" font-size="12" fill="#ea4335">N</text>
            <text x="415" y="125" text-anchor="middle" font-size="10" fill="#666">N≡N</text>
          </svg>`,
          caption: "Représentation des liaisons simples, doubles et triples",
          text: "Le nombre de traits entre les symboles des atomes indique le nombre de doublets partagés."
        },
        {
          type: "demo",
          title: "🔬 Formation de la liaison H₂",
          text: "Deux atomes d'hydrogène (1s¹) s'approchent. Chaque électron est attiré par les deux noyaux. La mise en commun des deux électrons crée un doublet liant, stabilisant l'ensemble. L'énergie du système diminue."
        },
        {
          type: "technique",
          title: "🎯 Ordre de liaison",
          formula: "Ordre = (nombre d'électrons liants - nombre d'électrons antiliants)/2",
          text: "Plus l'ordre est élevé, plus la liaison est forte et courte. Ordre 1 = simple, 2 = double, 3 = triple."
        },
        {
          type: "warning",
          title: "⚠️ Pièges à éviter",
          text: "• Une liaison covalente n'est pas une 'colle' mais un partage d'électrons.\n• Les électrons ne sont pas statiques : ils sont en mouvement autour des noyaux.\n• Ne pas confondre liaison simple (1 doublet) et double liaison (2 doublets)."
        }
      ],
      levels: [
        // Niveau 1 - Bases des liaisons covalentes
        [
          {
            type: "mcq",
            visual: "🔗",
            question: "Une liaison covalente simple correspond à la mise en commun de :",
            answers: ["1 électron", "2 électrons", "3 électrons", "4 électrons"],
            correct: 1,
            explanation: "2 électrons forment un doublet liant."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Dans la molécule O₂, la liaison est :",
            answers: ["Simple", "Double", "Triple", "Ionique"],
            correct: 1,
            explanation: "O=O : double liaison."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "La molécule N₂ contient :",
            answers: ["1 liaison simple", "1 double liaison", "1 triple liaison", "Pas de liaison"],
            correct: 2,
            explanation: "N≡N : triple liaison, très stable."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Combien d'électrons sont partagés dans une double liaison ?",
            answers: ["2", "3", "4", "6"],
            correct: 2,
            explanation: "2 doublets = 4 électrons."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "La molécule H₂O contient :",
            answers: ["2 liaisons simples", "1 double liaison", "2 doubles liaisons", "3 liaisons simples"],
            correct: 0,
            explanation: "H-O-H : deux liaisons simples."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Quelle molécule contient une triple liaison ?",
            answers: ["O₂", "N₂", "H₂O", "CH₄"],
            correct: 1,
            explanation: "N≡N : triple liaison."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Dans une liaison covalente, chaque atome apporte :",
            answers: ["1 électron par liaison simple", "2 électrons", "Autant qu'il veut", "0 électron"],
            correct: 0,
            explanation: "Chaque atome apporte un électron pour former le doublet liant."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Quelle liaison est la plus forte ?",
            answers: ["Simple", "Double", "Triple", "Elles sont toutes égales"],
            correct: 2,
            explanation: "La triple liaison a l'ordre de liaison le plus élevé."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Dans CH₄, combien de liaisons covalentes ?",
            answers: ["2", "3", "4", "5"],
            correct: 2,
            explanation: "4 liaisons C-H."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "La liaison la plus courte est :",
            answers: ["Simple", "Double", "Triple", "Même longueur"],
            correct: 2,
            explanation: "Plus l'ordre est élevé, plus la liaison est courte."
          }
        ],
        // Niveau 2 - Représentation et décompte
        [
          {
            type: "mcq",
            visual: "🔗",
            question: "Formule développée de l'éthane C₂H₆ : combien de liaisons C-H ?",
            answers: ["3", "4", "5", "6"],
            correct: 3,
            explanation: "Chaque C a 3 H, donc 6 liaisons C-H."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Dans la formule développée, une liaison est représentée par :",
            answers: ["Un point", "Un tiret", "Un cercle", "Une flèche"],
            correct: 1,
            explanation: "Le tiret entre les symboles des atomes."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Combien de liaisons dans la molécule C₂H₄ (éthène) ?",
            answers: ["4", "5", "6", "7"],
            correct: 1,
            explanation: "4 C-H + 1 C=C (double) = 5 liaisons."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Dans C₂H₂ (éthyne), la liaison C≡C est :",
            answers: ["Simple", "Double", "Triple", "Ionique"],
            correct: 2,
            explanation: "Triple liaison entre les deux carbones."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Nombre total de liaisons dans NH₃ ?",
            answers: ["2", "3", "4", "5"],
            correct: 1,
            explanation: "3 liaisons N-H."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Dans CO₂, combien de liaisons ?",
            answers: ["1", "2", "3", "4"],
            correct: 1,
            explanation: "2 doubles liaisons C=O."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Représentation de Lewis de HCl : combien de doublets non liants sur Cl ?",
            answers: ["1", "2", "3", "4"],
            correct: 2,
            explanation: "Cl a 3 doublets non liants (6 e⁻) + 1 doublet liant (2 e⁻) = 8 e⁻."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Dans F₂, la liaison est :",
            answers: ["Ionique", "Covalente simple", "Covalente double", "Métallique"],
            correct: 1,
            explanation: "F-F : liaison simple."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Formule semi-développée de C₃H₈ (propane) :",
            answers: ["CH₃-CH₂-CH₃", "CH₃-CH₃", "C₃H₈", "CH₃-C≡C-H"],
            correct: 0,
            explanation: "Propane : chaîne de 3 carbones."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Dans la formule semi-développée, on ne représente pas les liaisons :",
            answers: ["C-C", "C=C", "C-H", "C≡C"],
            correct: 2,
            explanation: "Les liaisons avec H sont implicites."
          }
        ],
        // Niveau 3 - Calculs et configurations
        [
          {
            type: "input",
            visual: "🎯",
            question: "Nombre d'électrons partagés dans N₂ :",
            correct: "6",
            explanation: "Triple liaison = 3 doublets = 6 électrons."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Formule brute de l'éthène :",
            correct: "C₂H₄",
            explanation: "2 atomes de C, 4 atomes de H."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Nombre de liaisons dans H₂O :",
            correct: "2",
            explanation: "2 liaisons O-H."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Formule de l'éthyne :",
            correct: "C₂H₂",
            explanation: "2 C, 2 H, triple liaison C≡C."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Combien de doublets liants dans CO₂ ?",
            correct: "4",
            explanation: "2 doubles liaisons = 4 doublets liants."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Formule brute du méthane :",
            correct: "CH₄",
            explanation: "1 C, 4 H."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Nombre d'électrons partagés dans une liaison simple :",
            correct: "2",
            explanation: "1 doublet = 2 électrons."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Formule brute de l'ammoniac :",
            correct: "NH₃",
            explanation: "1 N, 3 H."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Ordre de liaison de N₂ :",
            correct: "3",
            explanation: "Triple liaison = ordre 3."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Formule brute du dioxyde de carbone :",
            correct: "CO₂",
            explanation: "1 C, 2 O."
          }
        ],
        // Niveau 4 - Reconnaissance de structures
        [
          {
            type: "mcq",
            visual: "🔗",
            question: "Quelle molécule contient une liaison double ?",
            answers: ["CH₄", "NH₃", "CO₂", "HCl"],
            correct: 2,
            explanation: "CO₂ : O=C=O."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Dans quelle molécule la liaison C-O est-elle double ?",
            answers: ["CH₃OH", "CO₂", "H₂O", "CH₄"],
            correct: 1,
            explanation: "CO₂ : C=O."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Quelle molécule ne contient que des liaisons simples ?",
            answers: ["CO₂", "C₂H₄", "CH₄", "N₂"],
            correct: 2,
            explanation: "CH₄ : 4 liaisons simples C-H."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "La liaison la plus longue est :",
            answers: ["C≡C", "C=C", "C-C", "C-H"],
            correct: 2,
            explanation: "La simple liaison est la plus longue."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Quelle molécule a une structure linéaire ?",
            answers: ["H₂O", "NH₃", "CO₂", "CH₄"],
            correct: 2,
            explanation: "CO₂ : O=C=O, linéaire."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Dans C₂H₄, la liaison C=C est :",
            answers: ["Simple", "Double", "Triple", "Ionique"],
            correct: 1,
            explanation: "Éthène : double liaison."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Quelle molécule a la plus grande énergie de liaison ?",
            answers: ["H₂", "O₂", "N₂", "F₂"],
            correct: 2,
            explanation: "N₂ : triple liaison très forte."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Dans quelle molécule y a-t-il une liaison C≡C ?",
            answers: ["C₂H₄", "C₂H₆", "C₂H₂", "CH₄"],
            correct: 2,
            explanation: "Éthyne : H-C≡C-H."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "La molécule O₃ (ozone) contient :",
            answers: ["2 liaisons simples", "1 double + 1 simple", "2 doubles", "3 simples"],
            correct: 1,
            explanation: "Ozone : structure mésomère avec liaison double et simple."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Dans HCl, la liaison est :",
            answers: ["Ionique", "Covalente polaire", "Covalente apolaire", "Métallique"],
            correct: 1,
            explanation: "Différence d'électronégativité → polaire."
          }
        ],
        // Niveau 5 - Approfondissement
        [
          {
            type: "mcq",
            visual: "🔗",
            question: "L'ordre de liaison dans l'ion O₂⁺ est :",
            answers: ["1", "1.5", "2", "2.5"],
            correct: 3,
            explanation: "O₂⁺ a un électron de moins que O₂ → ordre 2.5."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "La liaison la plus forte dans CO est :",
            answers: ["Simple", "Double", "Triple", "Quadruple"],
            correct: 2,
            explanation: "C≡O : triple liaison."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Dans le benzène C₆H₆, les liaisons C-C sont :",
            answers: ["Toutes simples", "Toutes doubles", "Alternées simples/doubles", "Délocalisées (ordre 1.5)"],
            correct: 3,
            explanation: "Structure mésomère : ordre de liaison 1.5."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Longueur de liaison la plus courte :",
            answers: ["C-C", "C=C", "C≡C", "C-H"],
            correct: 2,
            explanation: "C≡C est la plus courte."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Energie de liaison la plus élevée :",
            answers: ["C-C", "C=C", "C≡C", "C-H"],
            correct: 2,
            explanation: "C≡C : ~839 kJ/mol."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Dans NO, l'ordre de liaison est :",
            answers: ["1", "2", "2.5", "3"],
            correct: 2,
            explanation: "NO a 11 électrons de valence → ordre 2.5."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "La molécule la plus stable est :",
            answers: ["O₂", "N₂", "F₂", "H₂"],
            correct: 1,
            explanation: "N₂ : triple liaison, très stable."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Dans H₂⁺ (ion moléculaire), l'ordre de liaison est :",
            answers: ["0", "0.5", "1", "1.5"],
            correct: 1,
            explanation: "H₂⁺ : 1 électron liant → ordre 0.5."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Quelle espèce n'existe pas ?",
            answers: ["He₂", "H₂", "N₂", "O₂"],
            correct: 0,
            explanation: "He₂ aurait ordre 0 → instable."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Dans Li₂, la liaison est :",
            answers: ["Covalente simple", "Ionique", "Métallique", "Van der Waals"],
            correct: 0,
            explanation: "Li₂ : molécule diatomique avec liaison simple."
          }
        ],
        // Niveau 6 - Expert
        [
          {
            type: "mcq",
            visual: "🔗",
            question: "Théorie de l'orbitale moléculaire : dans O₂, combien d'électrons sont dans des orbitales π* ?",
            answers: ["0", "1", "2", "3"],
            correct: 2,
            explanation: "O₂ a 2 électrons dans les orbitales π* (paramagnétique)."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Le paramagnétisme de O₂ s'explique par :",
            answers: ["Liaison double", "Électrons célibataires", "Géométrie linéaire", "Atomes identiques"],
            correct: 1,
            explanation: "O₂ a 2 électrons célibataires dans les orbitales π*."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Ordre de liaison de C₂²⁻ (ion acétylénure) :",
            answers: ["2", "2.5", "3", "3.5"],
            correct: 2,
            explanation: "C₂²⁻ a 10 électrons de valence → ordre 3."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "La liaison dans B₂ est :",
            answers: ["Simple", "Double", "Triple", "Paramagnétique"],
            correct: 3,
            explanation: "B₂ a 2 électrons célibataires."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Configuration électronique de N₂⁺ :",
            answers: ["σ²σ*²π⁴σ²", "σ²σ*²π⁴σ¹", "σ²σ*²π⁴σ⁰", "σ²σ*²π³σ²"],
            correct: 1,
            explanation: "N₂⁺ a perdu 1 électron σ."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Ordre de liaison de N₂⁺ :",
            answers: ["2", "2.5", "3", "3.5"],
            correct: 1,
            explanation: "N₂⁺ : (10-1)/2 = 4.5? Non, calcul correct : 2.5."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Dans F₂, l'ordre de liaison est :",
            answers: ["0", "0.5", "1", "1.5"],
            correct: 2,
            explanation: "F₂ : ordre 1."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Quelle molécule a l'ordre de liaison le plus élevé ?",
            answers: ["N₂", "N₂⁺", "N₂⁻", "N₂²⁻"],
            correct: 0,
            explanation: "N₂ neutre : ordre 3."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Dans la théorie OM, une liaison σ est :",
            answers: ["Axiale", "Latérale", "Périphérique", "Centrale"],
            correct: 0,
            explanation: "σ : recouvrement axial."
          },
          {
            type: "mcq",
            visual: "🔗",
            question: "Une liaison π est formée par :",
            answers: ["Recouvrement axial", "Recouvrement latéral", "Recouvrement frontal", "Aucun recouvrement"],
            correct: 1,
            explanation: "π : recouvrement latéral des orbitales p."
          }
        ]
      ]
    },
    {
      id: "representation-lewis",
      label: "Représentation de Lewis",
      icon: "🎨",
      lesson: {
        formula: "Doublets liants = traits | Doublets non liants = points ou traits autour de l'atome",
        text: "La représentation de Lewis montre tous les électrons de valence, qu'ils soient liants ou non liants.",
        example: "NH₃ : H-N-H avec un doublet non liant sur N"
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Définition",
          text: "La structure de Lewis d'une molécule représente la disposition des atomes, des liaisons covalentes (doublets liants) et des doublets non liants (électrons libres)."
        },
        {
          type: "technique",
          title: "🎯 Méthode en 6 étapes",
          formula: "1. Écrire la formule brute\n2. Configurations électroniques\n3. Nombre d'électrons externes\n4. Nombre de liaisons nécessaires\n5. Nombre total de doublets\n6. Répartition liants/non liants",
          text: "Cette méthode systématique permet de construire n'importe quelle structure de Lewis."
        },
        {
          type: "example",
          title: "✅ Exemple : CO₂",
          text: "C : 4 e⁻, O : 6 e⁻. Total = 4+12=16 e⁻ → 8 doublets.\nLiaisons : C doit 4 liaisons, O doit 2 liaisons chacun.\nStructure : O=C=O, avec 2 doublets non liants par O."
        },
        {
          type: "graph",
          title: "🎨 Structures de Lewis",
          svgContent: `<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="500" height="300" fill="#f8f9fa"/>
            <text x="250" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#333">Représentations de Lewis</text>
            
            <!-- NH₃ -->
            <text x="85" y="65" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Ammoniac NH₃</text>
            <line x1="85" y1="90" x2="60" y2="120" stroke="#4285f4" stroke-width="2"/>
            <line x1="85" y1="90" x2="110" y2="120" stroke="#4285f4" stroke-width="2"/>
            <line x1="85" y1="90" x2="85" y2="120" stroke="#4285f4" stroke-width="2"/>
            <circle cx="85" cy="90" r="15" fill="none" stroke="#ea4335" stroke-width="2"/>
            <circle cx="60" cy="120" r="12" fill="none" stroke="#34a853" stroke-width="2"/>
            <circle cx="110" cy="120" r="12" fill="none" stroke="#34a853" stroke-width="2"/>
            <circle cx="85" cy="120" r="12" fill="none" stroke="#34a853" stroke-width="2"/>
            <text x="85" y="95" text-anchor="middle" font-size="12" fill="#ea4335">N</text>
            <text x="60" y="125" text-anchor="middle" font-size="10" fill="#34a853">H</text>
            <text x="110" y="125" text-anchor="middle" font-size="10" fill="#34a853">H</text>
            <text x="85" y="125" text-anchor="middle" font-size="10" fill="#34a853">H</text>
            <!-- Doublet non liant sur N -->
            <circle cx="85" cy="65" r="2" fill="#ea4335"/>
            <circle cx="75" cy="70" r="2" fill="#ea4335"/>
            <text x="85" y="145" text-anchor="middle" font-size="9" fill="#666">1 doublet non liant</text>
            
            <!-- H₂O -->
            <text x="250" y="65" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Eau H₂O</text>
            <line x1="250" y1="90" x2="225" y2="120" stroke="#4285f4" stroke-width="2"/>
            <line x1="250" y1="90" x2="275" y2="120" stroke="#4285f4" stroke-width="2"/>
            <circle cx="250" cy="90" r="15" fill="none" stroke="#ea4335" stroke-width="2"/>
            <circle cx="225" cy="120" r="12" fill="none" stroke="#34a853" stroke-width="2"/>
            <circle cx="275" cy="120" r="12" fill="none" stroke="#34a853" stroke-width="2"/>
            <text x="250" y="95" text-anchor="middle" font-size="12" fill="#ea4335">O</text>
            <text x="225" y="125" text-anchor="middle" font-size="10" fill="#34a853">H</text>
            <text x="275" y="125" text-anchor="middle" font-size="10" fill="#34a853">H</text>
            <!-- Doublets non liants sur O -->
            <circle cx="240" cy="70" r="2" fill="#ea4335"/>
            <circle cx="260" cy="70" r="2" fill="#ea4335"/>
            <circle cx="240" cy="80" r="2" fill="#ea4335"/>
            <circle cx="260" cy="80" r="2" fill="#ea4335"/>
            <text x="250" y="145" text-anchor="middle" font-size="9" fill="#666">2 doublets non liants</text>
            
            <!-- CO₂ -->
            <text x="415" y="65" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Dioxyde de carbone CO₂</text>
            <line x1="400" y1="95" x2="430" y2="95" stroke="#4285f4" stroke-width="3"/>
            <line x1="400" y1="105" x2="430" y2="105" stroke="#4285f4" stroke-width="3"/>
            <line x1="430" y1="95" x2="460" y2="95" stroke="#4285f4" stroke-width="3"/>
            <line x1="430" y1="105" x2="460" y2="105" stroke="#4285f4" stroke-width="3"/>
            <circle cx="400" cy="100" r="15" fill="none" stroke="#34a853" stroke-width="2"/>
            <circle cx="430" cy="100" r="15" fill="none" stroke="#ea4335" stroke-width="2"/>
            <circle cx="460" cy="100" r="15" fill="none" stroke="#34a853" stroke-width="2"/>
            <text x="400" y="105" text-anchor="middle" font-size="12" fill="#34a853">O</text>
            <text x="430" y="105" text-anchor="middle" font-size="12" fill="#ea4335">C</text>
            <text x="460" y="105" text-anchor="middle" font-size="12" fill="#34a853">O</text>
            <!-- Doublets non liants -->
            <circle cx="385" cy="90" r="2" fill="#34a853"/>
            <circle cx="385" cy="80" r="2" fill="#34a853"/>
            <circle cx="475" cy="90" r="2" fill="#34a853"/>
            <circle cx="475" cy="80" r="2" fill="#34a853"/>
            <text x="430" y="145" text-anchor="middle" font-size="9" fill="#666">2 doublets non liants par O</text>
          </svg>`,
          caption: "Structures de Lewis de NH₃, H₂O et CO₂",
          text: "Les doublets liants (traits) et non liants (points) sont représentés."
        },
        {
          type: "demo",
          title: "🔬 Construction de la structure de CH₄",
          text: "C : 4 e⁻ externes, H : 1 e⁻ chacun. Total = 4+4=8 e⁻ → 4 doublets.\nC doit 4 liaisons, H 1 liaison chacun.\nStructure : tétraèdre, toutes liaisons simples."
        },
        {
          type: "warning",
          title: "⚠️ Pièges fréquents",
          text: "• Oublier les doublets non liants\n• Mauvais comptage des électrons\n• Ne pas vérifier la règle de l'octet/duet\n• Placer trop ou pas assez de liaisons"
        }
      ],
      levels: [
        // Niveau 1 - Bases de la représentation
        [
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans une structure de Lewis, un doublet liant est représenté par :",
            answers: ["Un point", "Un trait", "Un cercle", "Une flèche"],
            correct: 1,
            explanation: "Le trait entre les symboles des atomes."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Un doublet non liant est représenté par :",
            answers: ["Un trait", "Deux points", "Un cercle", "Une flèche"],
            correct: 1,
            explanation: "Deux points (ou un trait) à côté de l'atome."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans NH₃, combien de doublets non liants ?",
            answers: ["0", "1", "2", "3"],
            correct: 1,
            explanation: "N a 1 doublet non liant."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans H₂O, combien de doublets non liants sur O ?",
            answers: ["0", "1", "2", "3"],
            correct: 2,
            explanation: "O a 2 doublets non liants."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans CH₄, combien de doublets non liants sur C ?",
            answers: ["0", "1", "2", "3"],
            correct: 0,
            explanation: "C utilise tous ses électrons pour les liaisons."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans CO₂, chaque atome d'oxygène a combien de doublets non liants ?",
            answers: ["1", "2", "3", "4"],
            correct: 1,
            explanation: "Chaque O a 2 doublets non liants."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Représentation de Lewis de HCl : combien de doublets non liants sur Cl ?",
            answers: ["1", "2", "3", "4"],
            correct: 2,
            explanation: "Cl a 3 doublets non liants."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans F₂, chaque atome de F a combien de doublets non liants ?",
            answers: ["1", "2", "3", "4"],
            correct: 2,
            explanation: "F a 3 doublets non liants."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Le nombre total de doublets dans H₂O est :",
            answers: ["2", "3", "4", "5"],
            correct: 2,
            explanation: "2 doublets liants + 2 doublets non liants = 4."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans une structure de Lewis, les électrons sont représentés par :",
            answers: ["Des points", "Des croix", "Des cercles", "Des traits ou points"],
            correct: 3,
            explanation: "Traits pour les liaisons, points pour les non liants."
          }
        ],
        // Niveau 2 - Application
        [
          {
            type: "mcq",
            visual: "🎨",
            question: "Structure de Lewis correcte pour CH₄ ?",
            answers: ["C avec 4 H et 2 doublets non liants", "C avec 4 H et 0 doublet non liant", "C avec 3 H et 1 doublet non liant", "C avec 2 H et 2 doublets non liants"],
            correct: 1,
            explanation: "C utilise 4 électrons pour 4 liaisons, pas de doublet non liant."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Pour NH₃, l'azote a combien d'électrons autour de lui ?",
            answers: ["6", "7", "8", "10"],
            correct: 2,
            explanation: "3 liaisons (6 e⁻) + 1 doublet non liant (2 e⁻) = 8 e⁻."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Pour H₂O, l'oxygène a combien d'électrons autour de lui ?",
            answers: ["6", "7", "8", "10"],
            correct: 2,
            explanation: "2 liaisons (4 e⁻) + 2 doublets non liants (4 e⁻) = 8 e⁻."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Quelle est la structure de Lewis de CO₂ ?",
            answers: ["O-C-O", "O=C=O", "O≡C≡O", "C-O-O"],
            correct: 1,
            explanation: "Double liaison C=O pour respecter l'octet."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans la molécule O₂, la structure de Lewis est :",
            answers: ["O-O", "O=O", "O≡O", "O-O avec 2 doublets non liants"],
            correct: 1,
            explanation: "O=O, chaque O a 2 doublets non liants."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans N₂, la structure de Lewis est :",
            answers: ["N-N", "N=N", "N≡N", "N-N avec 3 doublets non liants"],
            correct: 2,
            explanation: "N≡N, chaque N a 1 doublet non liant."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Pour HCl, la structure de Lewis montre :",
            answers: ["H-Cl avec 3 doublets non liants sur Cl", "H=Cl", "H-Cl avec 2 doublets non liants", "H+ Cl-"],
            correct: 0,
            explanation: "Cl a 7 e⁻ externes, 1 liaison + 3 doublets non liants."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans BeCl₂, le béryllium a combien d'électrons ?",
            answers: ["2", "4", "6", "8"],
            correct: 1,
            explanation: "Be a 2 liaisons, soit 4 électrons (exception)."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "La structure de Lewis de BF₃ montre que B a :",
            answers: ["8 électrons", "6 électrons", "4 électrons", "2 électrons"],
            correct: 1,
            explanation: "B a 3 liaisons, soit 6 électrons (octet incomplet)."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Pour SO₂, une structure de Lewis possible est :",
            answers: ["O-S-O", "O=S=O", "O=S-O avec un doublet non liant sur S", "S-O-O"],
            correct: 2,
            explanation: "SO₂ a une structure avec une double liaison et une simple."
          }
        ],
        // Niveau 3 - Calculs pour Lewis
        [
          {
            type: "input",
            visual: "🎯",
            question: "Nombre d'électrons de valence dans CO₂ :",
            correct: "16",
            explanation: "C:4 + 2×O:6 = 16."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Nombre de doublets dans CH₄ :",
            correct: "4",
            explanation: "8 e⁻ → 4 doublets."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Nombre d'électrons de valence dans NH₃ :",
            correct: "8",
            explanation: "N:5 + 3×H:1 = 8."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Nombre de doublets non liants dans NH₃ :",
            correct: "1",
            explanation: "4 doublets totaux - 3 doublets liants = 1."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Nombre d'électrons de valence dans H₂O :",
            correct: "8",
            explanation: "O:6 + 2×H:1 = 8."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Nombre de doublets non liants dans H₂O :",
            correct: "2",
            explanation: "4 doublets totaux - 2 doublets liants = 2."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Nombre d'électrons de valence dans N₂ :",
            correct: "10",
            explanation: "2×N:5 = 10."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Nombre de doublets liants dans N₂ :",
            correct: "3",
            explanation: "Triple liaison = 3 doublets liants."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Nombre d'électrons de valence dans O₂ :",
            correct: "12",
            explanation: "2×O:6 = 12."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Nombre de doublets non liants par O dans O₂ :",
            correct: "2",
            explanation: "Chaque O a 2 doublets non liants."
          }
        ],
        // Niveau 4 - Reconnaissance
        [
          {
            type: "mcq",
            visual: "🎨",
            question: "Quelle molécule a une structure de Lewis avec 2 doublets non liants sur l'atome central ?",
            answers: ["CH₄", "NH₃", "H₂O", "CO₂"],
            correct: 2,
            explanation: "H₂O : O central a 2 doublets non liants."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Quelle molécule a une structure de Lewis avec 1 doublet non liant sur l'atome central ?",
            answers: ["CH₄", "NH₃", "H₂O", "CO₂"],
            correct: 1,
            explanation: "NH₃ : N central a 1 doublet non liant."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Quelle molécule n'a pas de doublet non liant sur l'atome central ?",
            answers: ["H₂O", "NH₃", "CH₄", "SO₂"],
            correct: 2,
            explanation: "CH₄ : C a 4 liaisons, pas de doublet non liant."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans SO₃, l'atome central S a combien de doublets non liants ?",
            answers: ["0", "1", "2", "3"],
            correct: 0,
            explanation: "S forme 3 doubles liaisons avec O."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans PCl₅, le phosphore a combien d'électrons ?",
            answers: ["8", "10", "12", "14"],
            correct: 1,
            explanation: "5 liaisons = 10 électrons (expansion d'octet)."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Quelle molécule a une structure de Lewis avec une liaison triple ?",
            answers: ["CO₂", "N₂", "O₂", "CH₄"],
            correct: 1,
            explanation: "N≡N : triple liaison."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans HCN, la structure de Lewis est :",
            answers: ["H-C≡N", "H=C=N", "H-C=N", "H=N=C"],
            correct: 0,
            explanation: "C triple liaison avec N, H simple avec C."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans C₂H₂, la structure de Lewis est :",
            answers: ["H-C=C-H", "H-C≡C-H", "H=C=C=H", "H-C-C-H"],
            correct: 1,
            explanation: "Éthyne : H-C≡C-H."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans NO₃⁻, l'azote a combien d'électrons ?",
            answers: ["8", "10", "12", "14"],
            correct: 0,
            explanation: "N a 4 liaisons (une double, deux simples) → octet."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "La charge formelle sur O dans CO₂ est :",
            answers: ["0", "+1", "-1", "+2"],
            correct: 0,
            explanation: "O a 6 e⁻ de valence, 2 liaisons + 2 doublets non liants → charge 0."
          }
        ],
        // Niveau 5 - Structures avancées
        [
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans SO₄²⁻, le soufre a combien d'électrons ?",
            answers: ["8", "10", "12", "14"],
            correct: 2,
            explanation: "S a 4 liaisons (2 doubles, 2 simples) → 12 électrons."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Quelle est la structure de Lewis de CO ?",
            answers: ["C-O", "C=O", "C≡O", "C-O avec 2 doublets non liants"],
            correct: 2,
            explanation: "C≡O : triple liaison, chaque atome a 1 doublet non liant."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans NO₂, l'azote a combien d'électrons ?",
            answers: ["7", "8", "9", "10"],
            correct: 0,
            explanation: "NO₂ a 17 e⁻ de valence, N a 7 e⁻ (radical)."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "La molécule O₃ a une structure :",
            answers: ["Linéaire", "Coudée avec mésomérie", "Tétraédrique", "Triangulaire"],
            correct: 1,
            explanation: "Ozone : structure coudée avec deux formes mésomères."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans ClO₃⁻, le chlore a combien d'électrons ?",
            answers: ["8", "10", "12", "14"],
            correct: 2,
            explanation: "Cl a 3 liaisons + 1 doublet non liant = 10 e⁻."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "La structure de Lewis de XeF₄ montre :",
            answers: ["4 liaisons, 2 doublets non liants", "4 liaisons, 0 doublet non liant", "4 liaisons, 4 doublets non liants", "2 liaisons, 6 doublets non liants"],
            correct: 0,
            explanation: "Xe a 8 e⁻ externes + 4 de F = 12 e⁻ autour de Xe."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans SF₆, le soufre a combien d'électrons ?",
            answers: ["8", "10", "12", "14"],
            correct: 2,
            explanation: "S a 6 liaisons = 12 électrons."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Quelle molécule a une structure de Lewis avec 2 liaisons doubles ?",
            answers: ["SO₂", "CO₂", "NO₂", "O₃"],
            correct: 1,
            explanation: "CO₂ : O=C=O."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans ClF₃, le chlore a combien d'électrons ?",
            answers: ["8", "10", "12", "14"],
            correct: 1,
            explanation: "Cl a 3 liaisons + 2 doublets non liants = 10 e⁻."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "La structure de Lewis de I₃⁻ montre :",
            answers: ["I-I-I linéaire", "I-I-I coudée", "I≡I-I", "I-I=I"],
            correct: 0,
            explanation: "I₃⁻ : linéaire, deux liaisons simples."
          }
        ],
        // Niveau 6 - Expert
        [
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans l'ion carbonate CO₃²⁻, les liaisons C-O sont :",
            answers: ["Toutes simples", "Toutes doubles", "Délocalisées (ordre 1.33)", "Alternées simples/doubles"],
            correct: 2,
            explanation: "Mésomérie : ordre de liaison 1.33."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "La charge formelle sur l'oxygène dans OH⁻ est :",
            answers: ["0", "+1", "-1", "-2"],
            correct: 2,
            explanation: "O a 6 e⁻ de valence, 1 liaison + 3 doublets non liants = 7 e⁻ → charge -1."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans l'ion ammonium NH₄⁺, l'azote a combien d'électrons ?",
            answers: ["8", "10", "12", "14"],
            correct: 0,
            explanation: "N a 4 liaisons, charge +1, mais 8 e⁻ autour de N."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "La meilleure structure de Lewis pour SO₂ est celle avec :",
            answers: ["2 liaisons simples", "2 doubles liaisons", "1 double, 1 simple, 1 doublet non liant sur S", "1 triple, 1 simple"],
            correct: 2,
            explanation: "S a 10 e⁻, structure avec une double et une simple liaison."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans NO₂⁺, l'azote a combien d'électrons ?",
            answers: ["6", "8", "10", "12"],
            correct: 1,
            explanation: "NO₂⁺ : 2 doubles liaisons, N a 8 e⁻."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans ClO₂⁻, le chlore a combien d'électrons ?",
            answers: ["8", "10", "12", "14"],
            correct: 1,
            explanation: "Cl a 2 liaisons + 2 doublets non liants = 10 e⁻."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "La structure de Lewis de BrF₅ montre que Br a :",
            answers: ["8 électrons", "10 électrons", "12 électrons", "14 électrons"],
            correct: 2,
            explanation: "5 liaisons + 1 doublet non liant = 12 e⁻."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans N₂O, la structure la plus plausible est :",
            answers: ["N≡N-O", "N=N=O", "N-N≡O", "N≡N=O"],
            correct: 0,
            explanation: "N≡N-O avec charges formelles minimisées."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "La molécule B₂H₆ (diborane) a des liaisons :",
            answers: ["Simples covalentes", "Ioniques", "Hydrogène ponté (3 centres-2 électrons)", "Métalliques"],
            correct: 2,
            explanation: "Diborane : liaisons B-H-B à 3 centres."
          },
          {
            type: "mcq",
            visual: "🎨",
            question: "Dans C₆H₆ (benzène), les liaisons C-C sont :",
            answers: ["Toutes simples", "Toutes doubles", "Alternées", "Délocalisées (ordre 1.5)"],
            correct: 3,
            explanation: "Mésomérie : électrons π délocalisés."
          }
        ]
      ]
    },
    {
      id: "geometrie-vsepr",
      label: "Géométrie VSEPR",
      icon: "📐",
      lesson: {
        formula: "Géométrie = f(nombre de doublets liants et non liants)",
        text: "Le modèle VSEPR (Valence Shell Electron Pair Repulsion) prédit la géométrie des molécules : les doublets d'électrons se repoussent et s'écartent au maximum.",
        example: "4 doublets → tétraèdre (CH₄) | 3 liants + 1 non liant → pyramide (NH₃) | 2 liants + 2 non liants → coudée (H₂O)"
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Modèle VSEPR (Gillespie)",
          text: "Les doublets d'électrons (liants ou non liants) de la couche de valence d'un atome se repoussent mutuellement. La molécule adopte la géométrie qui minimise ces répulsions."
        },
        {
          type: "formula",
          title: "🔑 Géométries fondamentales",
          formula: "• 2 doublets : linéaire (180°)\n• 3 doublets : trigonale plane (120°)\n• 4 doublets : tétraédrique (109.5°)\n• 5 doublets : bipyramide trigonale\n• 6 doublets : octaédrique",
          text: "La présence de doublets non liants modifie les angles et la forme observée."
        },
        {
          type: "graph",
          title: "📐 Tableau VSEPR complet",
          svgContent: `<svg viewBox="0 0 600 450" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="450" fill="#f8f9fa"/>
            <text x="300" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#333">Modèle VSEPR - Géométries moléculaires</text>
            
            <text x="60" y="65" text-anchor="middle" font-size="11" font-weight="bold" fill="#333">Doublets</text>
            <text x="180" y="65" text-anchor="middle" font-size="11" font-weight="bold" fill="#333">Géométrie</text>
            <text x="340" y="65" text-anchor="middle" font-size="11" font-weight="bold" fill="#333">Exemple</text>
            <text x="500" y="65" text-anchor="middle" font-size="11" font-weight="bold" fill="#333">Angle</text>
            
            <!-- Ligne 1 : 2 doublets -->
            <line x1="30" y1="85" x2="570" y2="85" stroke="#ddd" stroke-width="1"/>
            <text x="60" y="110" text-anchor="middle" font-size="12" fill="#333">2</text>
            <text x="180" y="110" text-anchor="middle" font-size="12" fill="#4285f4">Linéaire</text>
            <line x1="340" y1="100" x2="340" y2="120" stroke="#4285f4" stroke-width="2"/>
            <circle cx="320" cy="110" r="10" fill="none" stroke="#ea4335" stroke-width="2"/>
            <circle cx="360" cy="110" r="10" fill="none" stroke="#ea4335" stroke-width="2"/>
            <text x="340" y="115" text-anchor="middle" font-size="9" fill="#ea4335">A</text>
            <text x="500" y="110" text-anchor="middle" font-size="12" fill="#333">180°</text>
            
            <!-- Ligne 2 : 3 doublets -->
            <line x1="30" y1="135" x2="570" y2="135" stroke="#ddd" stroke-width="1"/>
            <text x="60" y="160" text-anchor="middle" font-size="12" fill="#333">3</text>
            <text x="180" y="160" text-anchor="middle" font-size="12" fill="#4285f4">Trigonale plane</text>
            <polygon points="340,150 320,170 360,170" fill="none" stroke="#34a853" stroke-width="2"/>
            <circle cx="340" cy="150" r="8" fill="none" stroke="#ea4335" stroke-width="2"/>
            <text x="340" y="155" text-anchor="middle" font-size="8" fill="#ea4335">A</text>
            <text x="500" y="160" text-anchor="middle" font-size="12" fill="#333">120°</text>
            
            <!-- Ligne 3 : 4 doublets liants -->
            <line x1="30" y1="185" x2="570" y2="185" stroke="#ddd" stroke-width="1"/>
            <text x="60" y="210" text-anchor="middle" font-size="12" fill="#333">4</text>
            <text x="180" y="210" text-anchor="middle" font-size="12" fill="#4285f4">Tétraédrique</text>
            <polygon points="340,200 320,220 360,220" fill="none" stroke="#fbbc04" stroke-width="2"/>
            <line x1="340" y1="200" x2="340" y2="190" stroke="#fbbc04" stroke-width="2"/>
            <circle cx="340" cy="200" r="8" fill="none" stroke="#ea4335" stroke-width="2"/>
            <text x="340" y="205" text-anchor="middle" font-size="8" fill="#ea4335">A</text>
            <text x="500" y="210" text-anchor="middle" font-size="12" fill="#333">109.5°</text>
            
            <!-- Ligne 4 : 3 liants + 1 non liant -->
            <line x1="30" y1="235" x2="570" y2="235" stroke="#ddd" stroke-width="1"/>
            <text x="60" y="260" text-anchor="middle" font-size="12" fill="#333">3+1</text>
            <text x="180" y="260" text-anchor="middle" font-size="12" fill="#4285f4">Pyramidale</text>
            <line x1="340" y1="250" x2="320" y2="275" stroke="#ea4335" stroke-width="2"/>
            <line x1="340" y1="250" x2="360" y2="275" stroke="#ea4335" stroke-width="2"/>
            <line x1="340" y1="250" x2="340" y2="275" stroke="#ea4335" stroke-width="2"/>
            <circle cx="340" cy="250" r="8" fill="none" stroke="#ea4335" stroke-width="2"/>
            <text x="340" y="255" text-anchor="middle" font-size="8" fill="#ea4335">A</text>
            <text x="500" y="260" text-anchor="middle" font-size="12" fill="#333">107°</text>
            
            <!-- Ligne 5 : 2 liants + 2 non liants -->
            <line x1="30" y1="285" x2="570" y2="285" stroke="#ddd" stroke-width="1"/>
            <text x="60" y="310" text-anchor="middle" font-size="12" fill="#333">2+2</text>
            <text x="180" y="310" text-anchor="middle" font-size="12" fill="#4285f4">Coudée</text>
            <line x1="340" y1="300" x2="320" y2="325" stroke="#ea4335" stroke-width="2"/>
            <line x1="340" y1="300" x2="360" y2="325" stroke="#ea4335" stroke-width="2"/>
            <circle cx="340" cy="300" r="8" fill="none" stroke="#ea4335" stroke-width="2"/>
            <text x="340" y="305" text-anchor="middle" font-size="8" fill="#ea4335">A</text>
            <text x="500" y="310" text-anchor="middle" font-size="12" fill="#333">104.5°</text>
            
            <!-- Ligne 6 : 5 doublets -->
            <line x1="30" y1="335" x2="570" y2="335" stroke="#ddd" stroke-width="1"/>
            <text x="60" y="360" text-anchor="middle" font-size="12" fill="#333">5</text>
            <text x="180" y="360" text-anchor="middle" font-size="12" fill="#4285f4">Bipyramide trigonale</text>
            <line x1="340" y1="350" x2="340" y2="340" stroke="#34a853" stroke-width="2"/>
            <line x1="340" y1="350" x2="340" y2="370" stroke="#34a853" stroke-width="2"/>
            <polygon points="340,350 320,360 360,360" fill="none" stroke="#34a853" stroke-width="2"/>
            <circle cx="340" cy="350" r="8" fill="none" stroke="#ea4335" stroke-width="2"/>
            <text x="340" y="355" text-anchor="middle" font-size="8" fill="#ea4335">A</text>
            <text x="500" y="360" text-anchor="middle" font-size="12" fill="#333">90°, 120°</text>
            
            <!-- Ligne 7 : 6 doublets -->
            <line x1="30" y1="385" x2="570" y2="385" stroke="#ddd" stroke-width="1"/>
            <text x="60" y="410" text-anchor="middle" font-size="12" fill="#333">6</text>
            <text x="180" y="410" text-anchor="middle" font-size="12" fill="#4285f4">Octaédrique</text>
            <polygon points="340,400 320,410 340,420 360,410" fill="none" stroke="#fbbc04" stroke-width="2"/>
            <line x1="340" y1="400" x2="340" y2="390" stroke="#fbbc04" stroke-width="2"/>
            <line x1="340" y1="420" x2="340" y2="430" stroke="#fbbc04" stroke-width="2"/>
            <circle cx="340" cy="410" r="8" fill="none" stroke="#ea4335" stroke-width="2"/>
            <text x="500" y="410" text-anchor="middle" font-size="12" fill="#333">90°</text>
          </svg>`,
          caption: "Géométries VSEPR selon le nombre de doublets liants et non liants",
          text: "Les doublets non liants occupent plus d'espace et compriment les angles de liaison."
        },
        {
          type: "demo",
          title: "🔬 Pourquoi l'angle HOH est-il de 104.5° ?",
          text: "O a 2 liaisons et 2 doublets non liants. Ces 4 doublets devraient être à 109.5° (tétraèdre). Mais les doublets non liants sont plus proches du noyau et se repoussent plus fortement, comprimant l'angle HOH à 104.5°."
        },
        {
          type: "technique",
          title: "🎯 Prédire la géométrie",
          formula: "1. Compter les doublets autour de l'atome central (liants + non liants)\n2. Déterminer la géométrie de base\n3. Ajuster pour les doublets non liants",
          text: "Exemple : NH₃ a 4 doublets (3 liants + 1 non liant) → base tétraédrique → géométrie pyramidale."
        },
        {
          type: "warning",
          title: "⚠️ Cas particuliers",
          text: "• Les doublets non liants ne sont pas visibles dans la géométrie observée.\n• Les liaisons multiples comptent comme un seul doublet pour la géométrie.\n• Pour les atomes avec expansion d'octet, des géométries comme bipyramide trigonale (PCl₅) ou octaédrique (SF₆) existent."
        }
      ],
      levels: [
        // Niveau 1 - Bases VSEPR
        [
          {
            type: "mcq",
            visual: "📐",
            question: "Quelle est la géométrie de CH₄ ?",
            answers: ["Linéaire", "Tétraédrique", "Pyramidale", "Coudée"],
            correct: 1,
            explanation: "4 doublets liants → tétraèdre."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Quelle est la géométrie de NH₃ ?",
            answers: ["Tétraédrique", "Pyramidale", "Coudée", "Linéaire"],
            correct: 1,
            explanation: "3 liants + 1 non liant → pyramide."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Quelle est la géométrie de H₂O ?",
            answers: ["Tétraédrique", "Pyramidale", "Coudée", "Linéaire"],
            correct: 2,
            explanation: "2 liants + 2 non liants → coudée."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Angle HCH dans CH₄ ?",
            answers: ["90°", "109.5°", "107°", "104.5°"],
            correct: 1,
            explanation: "Tétraèdre parfait : 109.5°."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Angle HNH dans NH₃ ?",
            answers: ["109.5°", "107°", "104.5°", "120°"],
            correct: 1,
            explanation: "1 doublet non liant réduit l'angle à 107°."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Angle HOH dans H₂O ?",
            answers: ["109.5°", "107°", "104.5°", "120°"],
            correct: 2,
            explanation: "2 doublets non liants réduisent l'angle à 104.5°."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Géométrie de CO₂ ?",
            answers: ["Linéaire", "Coudée", "Tétraédrique", "Pyramidale"],
            correct: 0,
            explanation: "2 doublets liants → linéaire."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Angle OCO dans CO₂ ?",
            answers: ["180°", "120°", "109.5°", "90°"],
            correct: 0,
            explanation: "Molécule linéaire : 180°."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Géométrie de BeCl₂ ?",
            answers: ["Linéaire", "Coudée", "Tétraédrique", "Pyramidale"],
            correct: 0,
            explanation: "2 doublets liants → linéaire."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Géométrie de BF₃ ?",
            answers: ["Linéaire", "Trigonale plane", "Tétraédrique", "Pyramidale"],
            correct: 1,
            explanation: "3 doublets liants → trigonale plane, 120°."
          }
        ],
        // Niveau 2 - Application
        [
          {
            type: "mcq",
            visual: "📐",
            question: "Géométrie de SO₂ ?",
            answers: ["Linéaire", "Trigonale plane", "Coudée", "Tétraédrique"],
            correct: 2,
            explanation: "S a 2 liaisons + 1 doublet non liant → coudée."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Géométrie de PCl₅ ?",
            answers: ["Tétraédrique", "Bipyramide trigonale", "Octaédrique", "Plane carrée"],
            correct: 1,
            explanation: "5 doublets liants → bipyramide trigonale."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Géométrie de SF₆ ?",
            answers: ["Tétraédrique", "Bipyramide trigonale", "Octaédrique", "Plane carrée"],
            correct: 2,
            explanation: "6 doublets liants → octaédrique."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Géométrie de ClF₃ ?",
            answers: ["Tétraédrique", "Bipyramide trigonale (forme T)", "Octaédrique", "Linéaire"],
            correct: 1,
            explanation: "3 liants + 2 non liants → forme en T."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Géométrie de XeF₄ ?",
            answers: ["Tétraédrique", "Bipyramide trigonale", "Octaédrique (plane carrée)", "Linéaire"],
            correct: 2,
            explanation: "4 liants + 2 non liants → plane carrée."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Géométrie de NO₂⁻ ?",
            answers: ["Linéaire", "Coudée", "Trigonale plane", "Tétraédrique"],
            correct: 1,
            explanation: "2 liaisons + 1 doublet non liant → coudée."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Géométrie de SO₃ ?",
            answers: ["Linéaire", "Trigonale plane", "Coudée", "Tétraédrique"],
            correct: 1,
            explanation: "3 doubles liaisons → trigonale plane."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Géométrie de NO₂⁺ ?",
            answers: ["Linéaire", "Coudée", "Trigonale plane", "Tétraédrique"],
            correct: 0,
            explanation: "2 doubles liaisons → linéaire."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Géométrie de ClO₂⁻ ?",
            answers: ["Linéaire", "Coudée", "Trigonale plane", "Tétraédrique"],
            correct: 1,
            explanation: "2 liaisons + 2 doublets non liants → coudée."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Géométrie de BrF₅ ?",
            answers: ["Tétraédrique", "Bipyramide trigonale", "Octaédrique (pyramide carrée)", "Plane carrée"],
            correct: 2,
            explanation: "5 liants + 1 non liant → pyramide carrée."
          }
        ],
        // Niveau 3 - Angles et prédictions
        [
          {
            type: "input",
            visual: "🎯",
            question: "Angle de liaison dans CO₂ :",
            correct: "180",
            explanation: "Molécule linéaire."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Angle HNH dans NH₃ (en degrés) :",
            correct: "107",
            explanation: "1 doublet non liant → 107°."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Angle HOH dans H₂O (en degrés) :",
            correct: "104.5",
            explanation: "2 doublets non liants → 104.5°."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Angle HCH dans CH₄ (en degrés) :",
            correct: "109.5",
            explanation: "Tétraèdre parfait."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Angle FBF dans BF₃ (en degrés) :",
            correct: "120",
            explanation: "Trigonale plane."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Nombre de doublets autour de C dans CH₄ :",
            correct: "4",
            explanation: "4 doublets liants."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Nombre de doublets autour de N dans NH₃ :",
            correct: "4",
            explanation: "3 liants + 1 non liant."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Nombre de doublets autour de O dans H₂O :",
            correct: "4",
            explanation: "2 liants + 2 non liants."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Géométrie de PCl₅ (un mot) :",
            correct: "bipyramide trigonale",
            explanation: "5 doublets liants."
          },
          {
            type: "input",
            visual: "🎯",
            question: "Géométrie de SF₆ (un mot) :",
            correct: "octaédrique",
            explanation: "6 doublets liants."
          }
        ],
        // Niveau 4 - Comparaison des angles
        [
          {
            type: "mcq",
            visual: "📐",
            question: "Quelle molécule a l'angle le plus grand ?",
            answers: ["CH₄", "NH₃", "H₂O", "CO₂"],
            correct: 3,
            explanation: "CO₂ : 180°."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Quelle molécule a l'angle le plus petit ?",
            answers: ["CH₄", "NH₃", "H₂O", "BF₃"],
            correct: 2,
            explanation: "H₂O : 104.5°."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Pourquoi H₂O a-t-il un angle plus petit que NH₃ ?",
            answers: ["O est plus petit que N", "O a 2 doublets non liants", "O est plus électronégatif", "O a plus de liaisons"],
            correct: 1,
            explanation: "2 doublets non liants compriment plus que 1."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Pourquoi NH₃ a-t-il un angle plus petit que CH₄ ?",
            answers: ["N est plus petit que C", "N a un doublet non liant", "N est plus électronégatif", "N a moins de liaisons"],
            correct: 1,
            explanation: "Le doublet non liant repousse les liaisons."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Dans SO₂, l'angle OSO est d'environ :",
            answers: ["180°", "120°", "109.5°", "119°"],
            correct: 3,
            explanation: "Près de 120° mais légèrement moins à cause du doublet non liant."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Dans NO₂⁻, l'angle ONO est d'environ :",
            answers: ["180°", "120°", "115°", "109.5°"],
            correct: 2,
            explanation: "Coudée, angle ~115°."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Dans O₃, l'angle OOO est d'environ :",
            answers: ["180°", "120°", "117°", "109.5°"],
            correct: 2,
            explanation: "Ozone : coudée, angle ~117°."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Géométrie de XeF₂ ?",
            answers: ["Linéaire", "Coudée", "Tétraédrique", "Octaédrique"],
            correct: 0,
            explanation: "2 liants + 3 non liants → linéaire."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Géométrie de IF₅ ?",
            answers: ["Tétraédrique", "Bipyramide trigonale", "Pyramide carrée", "Octaédrique"],
            correct: 2,
            explanation: "5 liants + 1 non liant → pyramide carrée."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Géométrie de I₃⁻ ?",
            answers: ["Linéaire", "Coudée", "Tétraédrique", "Bipyramide trigonale"],
            correct: 0,
            explanation: "2 liants + 3 non liants → linéaire."
          }
        ],
        // Niveau 5 - Prédictions avancées
        [
          {
            type: "mcq",
            visual: "📐",
            question: "Prédire la géométrie de TeCl₄ ?",
            answers: ["Tétraédrique", "Bipyramide trigonale (balançoire)", "Octaédrique", "Plane carrée"],
            correct: 1,
            explanation: "4 liants + 1 non liant → balançoire."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Prédire la géométrie de BrF₃ ?",
            answers: ["Tétraédrique", "Bipyramide trigonale (forme T)", "Octaédrique", "Plane carrée"],
            correct: 1,
            explanation: "3 liants + 2 non liants → forme en T."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Prédire la géométrie de ClF₅ ?",
            answers: ["Tétraédrique", "Bipyramide trigonale", "Pyramide carrée", "Octaédrique"],
            correct: 2,
            explanation: "5 liants + 1 non liant → pyramide carrée."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Prédire la géométrie de XeO₄ ?",
            answers: ["Tétraédrique", "Plane carrée", "Octaédrique", "Linéaire"],
            correct: 0,
            explanation: "4 doubles liaisons → tétraédrique."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Prédire la géométrie de XeO₃ ?",
            answers: ["Tétraédrique", "Pyramidale", "Trigonale plane", "Coudée"],
            correct: 1,
            explanation: "3 liaisons + 1 non liant → pyramidale."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Prédire la géométrie de XeF₆ ?",
            answers: ["Octaédrique", "Bipyramide trigonale", "Octaédrique déformée", "Tétraédrique"],
            correct: 2,
            explanation: "6 liants + 1 non liant → octaédrique déformée."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Prédire la géométrie de SOF₄ ?",
            answers: ["Tétraédrique", "Bipyramide trigonale", "Octaédrique", "Pyramide carrée"],
            correct: 1,
            explanation: "5 doublets autour de S → bipyramide trigonale."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Prédire la géométrie de SeF₄ ?",
            answers: ["Tétraédrique", "Bipyramide trigonale (balançoire)", "Octaédrique", "Plane carrée"],
            correct: 1,
            explanation: "4 liants + 1 non liant → balançoire."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Prédire la géométrie de IO₆⁵⁻ ?",
            answers: ["Tétraédrique", "Bipyramide trigonale", "Octaédrique", "Coudée"],
            correct: 2,
            explanation: "6 liaisons → octaédrique."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Prédire la géométrie de ClO₃⁻ ?",
            answers: ["Tétraédrique", "Pyramidale", "Trigonale plane", "Coudée"],
            correct: 1,
            explanation: "3 liaisons + 1 non liant → pyramidale."
          }
        ],
        // Niveau 6 - Expert
        [
          {
            type: "mcq",
            visual: "📐",
            question: "Dans PCl₅, les angles Cl-P-Cl sont :",
            answers: ["90° et 180°", "90° et 120°", "120° et 180°", "Tous 90°"],
            correct: 1,
            explanation: "Bipyramide trigonale : 90° et 120°."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Dans SF₄, quelle est la géométrie ?",
            answers: ["Tétraédrique", "Bipyramide trigonale (balançoire)", "Octaédrique", "Pyramide carrée"],
            correct: 1,
            explanation: "4 liants + 1 non liant → balançoire."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Dans IF₇, la géométrie est :",
            answers: ["Octaédrique", "Bipyramide pentagonale", "Tétraédrique", "Linéaire"],
            correct: 1,
            explanation: "7 doublets → bipyramide pentagonale."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "La théorie VSEPR est basée sur :",
            answers: ["Attraction nucléaire", "Répulsion des doublets", "Électronégativité", "Spin des électrons"],
            correct: 1,
            explanation: "Répulsion électrostatique entre doublets."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Un doublet non liant occupe :",
            answers: ["Moins d'espace qu'un liant", "Plus d'espace qu'un liant", "Autant d'espace", "Dépend de l'atome"],
            correct: 1,
            explanation: "Plus proche du noyau, donc répulsion plus forte."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "L'angle HPH dans PH₃ est d'environ :",
            answers: ["109.5°", "107°", "93°", "104.5°"],
            correct: 2,
            explanation: "PH₃ : angle ~93° (doublets moins comprimés)."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Pourquoi PH₃ a-t-il un angle plus petit que NH₃ ?",
            answers: ["P est plus gros", "P est moins électronégatif", "Les doublets sont plus diffus", "Toutes ces raisons"],
            correct: 3,
            explanation: "L'électronégativité et la taille influencent."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Dans Cl₂O, l'angle Cl-O-Cl est d'environ :",
            answers: ["180°", "120°", "111°", "90°"],
            correct: 2,
            explanation: "Coudée, angle ~111°."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "Dans NCl₃, l'angle Cl-N-Cl est d'environ :",
            answers: ["109.5°", "107°", "111°", "100°"],
            correct: 1,
            explanation: "Pyramidale, angle ~107°."
          },
          {
            type: "mcq",
            visual: "📐",
            question: "La géométrie de Re₂Cl₈²⁻ (ion) montre :",
            answers: ["Liaison quadruple", "Liaison triple", "Liaison simple", "Pas de liaison Re-Re"],
            correct: 0,
            explanation: "Liaison quadruple Re≡Re."
          }
        ]
      ]
    },
    {
      id: "electronegativite-polarite",
      label: "Électronégativité et polarité",
      icon: "⚡",
      lesson: {
        formula: "Δχ = |χ_A - χ_B| > 0.4 → liaison polarisée",
        text: "L'électronégativité mesure la capacité d'un atome à attirer les électrons d'une liaison. La différence crée un dipôle électrique.",
        example: "H-Cl : Δχ=0.96 → liaison polaire | Cl₂ : Δχ=0 → apolaire"
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Définition",
          text: "L'électronégativité (χ) est une grandeur qui traduit l'aptitude d'un atome à attirer à lui le doublet d'électrons qu'il partage dans une liaison covalente."
        },
        {
          type: "formula",
          title: "🔑 Échelle de Pauling",
          formula: "Fluor (F) : 3.98 | Oxygène (O) : 3.44 | Chlore (Cl) : 3.16 | Azote (N) : 3.04 | Carbone (C) : 2.55 | Hydrogène (H) : 2.20",
          text: "Plus la valeur est élevée, plus l'atome attire les électrons. Le fluor est l'élément le plus électronégatif."
        },
        {
          type: "graph",
          title: "⚡ Électronégativités des éléments courants",
          svgContent: `<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="500" height="300" fill="#f8f9fa"/>
            <text x="250" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#333">Échelle d'électronégativité (Pauling)</text>
            
            <!-- Barres horizontales -->
            <rect x="50" y="60" width="350" height="25" rx="3" fill="#e8f0fe" stroke="#4285f4" stroke-width="1"/>
            <rect x="50" y="60" width="280" height="25" rx="3" fill="#4285f4" opacity="0.7">
              <animate attributeName="width" from="0" to="280" dur="1s" fill="freeze"/>
            </rect>
            <text x="420" y="78" text-anchor="start" font-size="12" font-weight="bold" fill="#4285f4">F 4.0</text>
            
            <rect x="50" y="95" width="350" height="25" rx="3" fill="#e8f0fe" stroke="#34a853" stroke-width="1"/>
            <rect x="50" y="95" width="240" height="25" rx="3" fill="#34a853" opacity="0.7">
              <animate attributeName="width" from="0" to="240" dur="1s" fill="freeze"/>
            </rect>
            <text x="420" y="113" text-anchor="start" font-size="12" font-weight="bold" fill="#34a853">O 3.44</text>
            
            <rect x="50" y="130" width="350" height="25" rx="3" fill="#e8f0fe" stroke="#ea4335" stroke-width="1"/>
            <rect x="50" y="130" width="220" height="25" rx="3" fill="#ea4335" opacity="0.7">
              <animate attributeName="width" from="0" to="220" dur="1s" fill="freeze"/>
            </rect>
            <text x="420" y="148" text-anchor="start" font-size="12" font-weight="bold" fill="#ea4335">Cl 3.16</text>
            
            <rect x="50" y="165" width="350" height="25" rx="3" fill="#e8f0fe" stroke="#fbbc04" stroke-width="1"/>
            <rect x="50" y="165" width="210" height="25" rx="3" fill="#fbbc04" opacity="0.7">
              <animate attributeName="width" from="0" to="210" dur="1s" fill="freeze"/>
            </rect>
            <text x="420" y="183" text-anchor="start" font-size="12" font-weight="bold" fill="#fbbc04">N 3.04</text>
            
            <rect x="50" y="200" width="350" height="25" rx="3" fill="#e8f0fe" stroke="#34a853" stroke-width="1"/>
            <rect x="50" y="200" width="178" height="25" rx="3" fill="#34a853" opacity="0.7">
              <animate attributeName="width" from="0" to="178" dur="1s" fill="freeze"/>
            </rect>
            <text x="420" y="218" text-anchor="start" font-size="12" font-weight="bold" fill="#34a853">C 2.55</text>
            
            <rect x="50" y="235" width="350" height="25" rx="3" fill="#e8f0fe" stroke="#ea4335" stroke-width="1"/>
            <rect x="50" y="235" width="154" height="25" rx="3" fill="#ea4335" opacity="0.7">
              <animate attributeName="width" from="0" to="154" dur="1s" fill="freeze"/>
            </rect>
            <text x="420" y="253" text-anchor="start" font-size="12" font-weight="bold" fill="#ea4335">H 2.20</text>
            
            <text x="50" y="285" text-anchor="start" font-size="10" fill="#666">0</text>
            <text x="250" y="285" text-anchor="middle" font-size="10" fill="#666">2</text>
            <text x="400" y="285" text-anchor="middle" font-size="10" fill="#666">4</text>
          </svg>`,
          caption: "Électronégativités selon Pauling",
          text: "Le fluor est le plus électronégatif (3.98). L'hydrogène est à 2.20."
        },
        {
          type: "formula",
          title: "🔑 Liaison polaire vs apolaire",
          formula: "• Δχ = 0 → liaison apolaire (ex: H₂, Cl₂, O₂)\n• 0 < Δχ < 0.4 → liaison faiblement polaire\n• 0.4 ≤ Δχ < 1.7 → liaison polaire\n• Δχ ≥ 1.7 → liaison ionique",
          text: "La différence d'électronégativité détermine le caractère de la liaison."
        },
        {
          type: "graph",
          title: "⚡ Polarité des molécules",
          svgContent: `<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="500" height="300" fill="#f8f9fa"/>
            <text x="250" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="#333">Polarité moléculaire</text>
            
            <!-- H₂O polaire -->
            <text x="85" y="65" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Eau H₂O (polaire)</text>
            <line x1="85" y1="90" x2="60" y2="120" stroke="#4285f4" stroke-width="2"/>
            <line x1="85" y1="90" x2="110" y2="120" stroke="#4285f4" stroke-width="2"/>
            <circle cx="85" cy="90" r="15" fill="none" stroke="#ea4335" stroke-width="2"/>
            <text x="85" y="95" text-anchor="middle" font-size="12" fill="#ea4335">O</text>
            <text x="60" y="125" text-anchor="middle" font-size="10" fill="#34a853">H</text>
            <text x="110" y="125" text-anchor="middle" font-size="10" fill="#34a853">H</text>
            <!-- Vecteur dipolaire -->
            <line x1="85" y1="90" x2="85" y2="145" stroke="#ea4335" stroke-width="2" stroke-dasharray="4"/>
            <polygon points="85,145 80,135 90,135" fill="#ea4335"/>
            <text x="95" y="150" text-anchor="start" font-size="10" fill="#ea4335">δ⁺</text>
            <text x="95" y="110" text-anchor="start" font-size="10" fill="#34a853">δ⁻</text>
            
            <!-- CO₂ apolaire -->
            <text x="250" y="65" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">CO₂ (apolaire)</text>
            <line x1="220" y1="100" x2="280" y2="100" stroke="#4285f4" stroke-width="3"/>
            <line x1="220" y1="110" x2="280" y2="110" stroke="#4285f4" stroke-width="3"/>
            <circle cx="220" cy="105" r="15" fill="none" stroke="#34a853" stroke-width="2"/>
            <circle cx="280" cy="105" r="15" fill="none" stroke="#34a853" stroke-width="2"/>
            <circle cx="250" cy="105" r="15" fill="none" stroke="#ea4335" stroke-width="2"/>
            <text x="220" y="110" text-anchor="middle" font-size="12" fill="#34a853">O</text>
            <text x="250" y="110" text-anchor="middle" font-size="12" fill="#ea4335">C</text>
            <text x="280" y="110" text-anchor="middle" font-size="12" fill="#34a853">O</text>
            <text x="250" y="135" text-anchor="middle" font-size="10" fill="#666">Moments dipolaires s'annulent</text>
            
            <!-- CH₄ apolaire -->
            <text x="415" y="65" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">CH₄ (apolaire)</text>
            <polygon points="415,120 395,155 435,155" fill="none" stroke="#4285f4" stroke-width="2"/>
            <line x1="415" y1="120" x2="415" y2="100" stroke="#4285f4" stroke-width="2"/>
            <circle cx="415" cy="120" r="12" fill="none" stroke="#ea4335" stroke-width="2"/>
            <text x="415" y="125" text-anchor="middle" font-size="10" fill="#ea4335">C</text>
            <text x="415" y="100" text-anchor="middle" font-size="10" fill="#34a853">H</text>
            <text x="395" y="160" text-anchor="middle" font-size="10" fill="#34a853">H</text>
            <text x="435" y="160" text-anchor="middle" font-size="10" fill="#34a853">H</text>
            <text x="415" y="180" text-anchor="middle" font-size="10" fill="#666">Symétrie tétraédrique</text>
          </svg>`,
          caption: "Molécules polaires et apolaires",
          text: "Une molécule est polaire si la somme vectorielle des moments dipolaires n'est pas nulle."
        },
        {
          type: "demo",
          title: "🔬 Pourquoi CO₂ est apolaire alors que C=O est polaire ?",
          text: "Chaque liaison C=O est polaire (O plus électronégatif). Mais la molécule est linéaire et symétrique : les deux vecteurs dipolaires sont opposés et s'annulent. Le moment dipolaire résultant est nul."
        },
        {
          type: "technique",
          title: "🎯 Déterminer la polarité",
          formula: "1. Identifier les liaisons polaires (Δχ > 0.4)\n2. Déterminer la géométrie de la molécule\n3. Faire la somme vectorielle des moments dipolaires\n4. Si somme nulle → apolaire, sinon polaire",
          text: "La symétrie est cruciale : une molécule symétrique peut être apolaire même avec des liaisons polaires."
        },
        {
          type: "warning",
          title: "⚠️ Erreurs fréquentes",
          text: "• Confondre polarité de liaison et polarité moléculaire\n• Oublier la géométrie (ex: CO₂ apolaire malgré liaisons polaires)\n• Croire que toute molécule avec des liaisons polaires est polaire"
        }
      ],
      levels: [
        // Niveau 1 - Bases de l'électronégativité
        [
          {
            type: "mcq",
            visual: "⚡",
            question: "L'élément le plus électronégatif est :",
            answers: ["Oxygène", "Fluor", "Chlore", "Azote"],
            correct: 1,
            explanation: "Fluor : 3.98."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "L'électronégativité de l'hydrogène est :",
            answers: ["2.20", "3.44", "2.55", "3.98"],
            correct: 0,
            explanation: "H : 2.20."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "L'électronégativité de l'oxygène est :",
            answers: ["2.20", "3.44", "2.55", "3.98"],
            correct: 1,
            explanation: "O : 3.44."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Une liaison est polaire si Δχ :",
            answers: ["= 0", "> 0.4", "< 0.4", "> 2"],
            correct: 1,
            explanation: "Δχ > 0.4 → liaison polaire."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Une liaison est apolaire si Δχ :",
            answers: ["= 0", "> 0.4", "< 0.4", "> 2"],
            correct: 0,
            explanation: "Δχ = 0 → liaison parfaitement apolaire."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Dans H-Cl, le doublet liant est déplacé vers :",
            answers: ["H", "Cl", "Le milieu", "Alternativement"],
            correct: 1,
            explanation: "Cl est plus électronégatif (3.16 > 2.20)."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "La molécule Cl₂ est :",
            answers: ["Polaire", "Apolaire", "Ionique", "Métallique"],
            correct: 1,
            explanation: "Atomes identiques → Δχ=0 → apolaire."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "La liaison C-H est :",
            answers: ["Très polaire", "Faiblement polaire", "Ionique", "Métallique"],
            correct: 1,
            explanation: "Δχ = 2.55-2.20 = 0.35 < 0.4 → faiblement polaire."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "L'électronégativité augmente quand on se déplace :",
            answers: ["Vers la gauche", "Vers la droite", "Vers le bas", "Vers le haut et la droite"],
            correct: 3,
            explanation: "Augmente de gauche à droite et de bas en haut."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Le césium (Cs) a une électronégativité :",
            answers: ["Élevée", "Faible", "Nulle", "Maximale"],
            correct: 1,
            explanation: "Métaux alcalins : très faible électronégativité."
          }
        ],
        // Niveau 2 - Polarité des liaisons
        [
          {
            type: "mcq",
            visual: "⚡",
            question: "Quelle liaison est la plus polaire ?",
            answers: ["H-F", "H-Cl", "H-Br", "H-I"],
            correct: 0,
            explanation: "Δχ maximal pour H-F."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Quelle liaison est apolaire ?",
            answers: ["H-O", "C-H", "O=O", "C=O"],
            correct: 2,
            explanation: "O=O : atomes identiques."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Dans H₂O, la liaison O-H est :",
            answers: ["Apolaire", "Polaire (O δ⁻, H δ⁺)", "Polaire (O δ⁺, H δ⁻)", "Ionique"],
            correct: 1,
            explanation: "O plus électronégatif attire les électrons."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Dans NH₃, la liaison N-H est :",
            answers: ["Apolaire", "Polaire (N δ⁻, H δ⁺)", "Polaire (N δ⁺, H δ⁻)", "Ionique"],
            correct: 1,
            explanation: "N plus électronégatif que H."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "La liaison C=O est :",
            answers: ["Apolaire", "Polaire (C δ⁺, O δ⁻)", "Polaire (C δ⁻, O δ⁺)", "Ionique"],
            correct: 1,
            explanation: "O plus électronégatif (3.44 > 2.55)."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "La liaison la plus polaire parmi celles-ci :",
            answers: ["C-O", "C-N", "C-F", "C-Cl"],
            correct: 2,
            explanation: "C-F : Δχ = 3.98-2.55 = 1.43."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "La liaison N-O est polaire vers :",
            answers: ["N", "O", "Milieu", "Aucun"],
            correct: 1,
            explanation: "O plus électronégatif (3.44 > 3.04)."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "La liaison Si-H est polaire vers :",
            answers: ["Si", "H", "Milieu", "Aucun"],
            correct: 0,
            explanation: "Si : 1.90, H : 2.20 → H plus électronégatif, donc Si δ⁺."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "La liaison Li-H est :",
            answers: ["Covalente apolaire", "Covalente polaire", "Ionique", "Métallique"],
            correct: 2,
            explanation: "Δχ très grand (~2.0) → ionique."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "La liaison F-F est :",
            answers: ["Polaire", "Apolaire", "Ionique", "Van der Waals"],
            correct: 1,
            explanation: "Atomes identiques → apolaire."
          }
        ],
        // Niveau 3 - Polarité moléculaire
        [
          {
            type: "mcq",
            visual: "⚡",
            question: "La molécule H₂O est :",
            answers: ["Polaire", "Apolaire", "Ionique", "Métallique"],
            correct: 0,
            explanation: "Géométrie coudée, moments dipolaires ne s'annulent pas."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "La molécule CO₂ est :",
            answers: ["Polaire", "Apolaire", "Ionique", "Métallique"],
            correct: 1,
            explanation: "Linéaire symétrique → moments s'annulent."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "La molécule CH₄ est :",
            answers: ["Polaire", "Apolaire", "Ionique", "Métallique"],
            correct: 1,
            explanation: "Tétraèdre symétrique → apolaire."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "La molécule NH₃ est :",
            answers: ["Polaire", "Apolaire", "Ionique", "Métallique"],
            correct: 0,
            explanation: "Pyramidale asymétrique → polaire."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "La molécule CCl₄ est :",
            answers: ["Polaire", "Apolaire", "Ionique", "Métallique"],
            correct: 1,
            explanation: "Tétraèdre symétrique → apolaire."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "La molécule SO₂ est :",
            answers: ["Polaire", "Apolaire", "Ionique", "Métallique"],
            correct: 0,
            explanation: "Géométrie coudée → polaire."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "La molécule BF₃ est :",
            answers: ["Polaire", "Apolaire", "Ionique", "Métallique"],
            correct: 1,
            explanation: "Trigonale plane symétrique → apolaire."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "La molécule CHCl₃ est :",
            answers: ["Polaire", "Apolaire", "Ionique", "Métallique"],
            correct: 0,
            explanation: "Tétraèdre non symétrique → polaire."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "La molécule BeCl₂ est :",
            answers: ["Polaire", "Apolaire", "Ionique", "Métallique"],
            correct: 1,
            explanation: "Linéaire symétrique → apolaire."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "La molécule SO₃ est :",
            answers: ["Polaire", "Apolaire", "Ionique", "Métallique"],
            correct: 1,
            explanation: "Trigonale plane symétrique → apolaire."
          }
        ],
        // Niveau 4 - Applications
        [
          {
            type: "mcq",
            visual: "⚡",
            question: "Parmi ces molécules, laquelle est polaire ?",
            answers: ["CO₂", "CCl₄", "CHCl₃", "BF₃"],
            correct: 2,
            explanation: "CHCl₃ : tétraèdre non symétrique."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Parmi ces molécules, laquelle est apolaire ?",
            answers: ["H₂O", "NH₃", "CH₄", "HCl"],
            correct: 2,
            explanation: "CH₄ : tétraèdre symétrique."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Le moment dipolaire de CO₂ est :",
            answers: ["Nul", "Non nul", "Variable", "Maximal"],
            correct: 0,
            explanation: "Symétrie linéaire."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Le moment dipolaire de H₂O est :",
            answers: ["Nul", "Non nul (1.85 D)", "Variable", "Maximal"],
            correct: 1,
            explanation: "Eau : moment dipolaire 1.85 Debye."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Pourquoi CCl₄ est apolaire ?",
            answers: ["Liaisons apolaires", "Symétrie tétraédrique", "C n'est pas électronégatif", "Cl tous identiques"],
            correct: 1,
            explanation: "Les 4 moments s'annulent par symétrie."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Pourquoi H₂O est polaire ?",
            answers: ["Liaisons polaires et géométrie coudée", "O est très petit", "H est très électronégatif", "Symétrie linéaire"],
            correct: 0,
            explanation: "Géométrie coudée → somme vectorielle non nulle."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "La molécule la plus polaire parmi :",
            answers: ["H₂O", "NH₃", "HF", "HCl"],
            correct: 2,
            explanation: "HF : moment dipolaire 1.91 D (le plus élevé)."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Le moment dipolaire de NH₃ est :",
            answers: ["0 D", "1.47 D", "1.85 D", "1.91 D"],
            correct: 1,
            explanation: "Ammoniac : 1.47 D."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Le moment dipolaire de HCl est :",
            answers: ["0 D", "1.08 D", "1.85 D", "1.91 D"],
            correct: 1,
            explanation: "HCl : 1.08 D."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Une molécule symétrique avec liaisons polaires est :",
            answers: ["Toujours polaire", "Toujours apolaire", "Parfois polaire", "Jamais polaire"],
            correct: 1,
            explanation: "Symétrie → annulation des moments."
          }
        ],
        // Niveau 5 - Prédictions avancées
        [
          {
            type: "mcq",
            visual: "⚡",
            question: "Prédire la polarité de PCl₅ :",
            answers: ["Polaire", "Apolaire", "Ionique", "Métallique"],
            correct: 1,
            explanation: "Bipyramide trigonale symétrique → apolaire."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Prédire la polarité de SF₆ :",
            answers: ["Polaire", "Apolaire", "Ionique", "Métallique"],
            correct: 1,
            explanation: "Octaèdre symétrique → apolaire."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Prédire la polarité de SO₂Cl₂ :",
            answers: ["Polaire", "Apolaire", "Ionique", "Métallique"],
            correct: 0,
            explanation: "Géométrie tétraédrique non symétrique."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Prédire la polarité de XeF₄ :",
            answers: ["Polaire", "Apolaire", "Ionique", "Métallique"],
            correct: 1,
            explanation: "Plane carrée symétrique → apolaire."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Prédire la polarité de ClF₃ :",
            answers: ["Polaire", "Apolaire", "Ionique", "Métallique"],
            correct: 0,
            explanation: "Forme en T asymétrique → polaire."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Prédire la polarité de BrF₅ :",
            answers: ["Polaire", "Apolaire", "Ionique", "Métallique"],
            correct: 0,
            explanation: "Pyramide carrée asymétrique → polaire."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Prédire la polarité de XeO₃ :",
            answers: ["Polaire", "Apolaire", "Ionique", "Métallique"],
            correct: 0,
            explanation: "Pyramidale → polaire."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Prédire la polarité de TeCl₄ :",
            answers: ["Polaire", "Apolaire", "Ionique", "Métallique"],
            correct: 0,
            explanation: "Balançoire asymétrique → polaire."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Prédire la polarité de cis-dichloroéthène (C₂H₂Cl₂) :",
            answers: ["Polaire", "Apolaire", "Ionique", "Métallique"],
            correct: 0,
            explanation: "Isomère cis : moments s'ajoutent."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Prédire la polarité de trans-dichloroéthène (C₂H₂Cl₂) :",
            answers: ["Polaire", "Apolaire", "Ionique", "Métallique"],
            correct: 1,
            explanation: "Isomère trans : moments s'annulent."
          }
        ],
        // Niveau 6 - Expert
        [
          {
            type: "mcq",
            visual: "⚡",
            question: "L'unité de mesure du moment dipolaire est :",
            answers: ["Coulomb", "Volt", "Debye", "Tesla"],
            correct: 2,
            explanation: "Debye (D)."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "1 Debye = ? C·m",
            answers: ["3.336×10⁻³⁰", "1.602×10⁻¹⁹", "6.022×10²³", "8.854×10⁻¹²"],
            correct: 0,
            explanation: "1 D = 3.336×10⁻³⁰ C·m."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "La polarisabilité d'une molécule mesure :",
            answers: ["Son moment dipolaire permanent", "Sa capacité à former des liaisons", "Sa déformation sous un champ électrique", "Son électronégativité"],
            correct: 2,
            explanation: "Polarisabilité : facilité à déformer le nuage électronique."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Les forces de London sont dues à :",
            answers: ["Moments dipolaires permanents", "Moments dipolaires induits", "Liaisons hydrogène", "Interactions ioniques"],
            correct: 1,
            explanation: "Dipôles temporaires par fluctuations électroniques."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "La liaison hydrogène se forme entre :",
            answers: ["H et tout atome", "H lié à N, O, F et un autre N, O, F", "Deux atomes d'hydrogène", "H et un métal"],
            correct: 1,
            explanation: "Liaison H : interaction forte avec N, O, F."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "L'eau a un point d'ébullition élevé à cause :",
            answers: ["Sa masse molaire", "Des liaisons hydrogène", "De sa polarité", "De sa géométrie"],
            correct: 1,
            explanation: "Liaisons H intermoléculaires."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Quelle molécule a la plus forte constante diélectrique ?",
            answers: ["CH₄", "CCl₄", "H₂O", "CO₂"],
            correct: 2,
            explanation: "Eau : εᵣ ≈ 80."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "Une molécule polaire est soluble dans :",
            answers: ["Un solvant apolaire", "Un solvant polaire", "Tous les solvants", "Aucun solvant"],
            correct: 1,
            explanation: "Principe 'polaire dissout polaire'."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "L'effet hydrophobe est dû à :",
            answers: ["Liaisons H", "Forces de London", "Répulsion entre molécules polaires et apolaires", "Ionisation"],
            correct: 2,
            explanation: "Les molécules apolaires s'agrègent dans l'eau."
          },
          {
            type: "mcq",
            visual: "⚡",
            question: "La chromatographie en phase inverse utilise :",
            answers: ["Stationnaire polaire", "Stationnaire apolaire", "Phase mobile polaire", "Gaz"],
            correct: 1,
            explanation: "Stationnaire apolaire pour séparer composés non polaires."
          }
        ]
      ]
    }
  ],
}