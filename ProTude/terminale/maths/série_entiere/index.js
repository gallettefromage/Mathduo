export default {
  id: "serie-entiere",
  title: "Série entière",
  description: "Chapitre sur Série entière — 8 notions, 240 questions.",
  icon: "📚",
  xpMax: 300,
  notions: [
    {
      id: "definition-et-convergence-d-une-serie-entiere",
      label: "Définition et convergence d'une série entière",
      lesson: {
        formula: "S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0",
        text: "Une série entière est une série de fonctions définie par une somme infinie de termes de la forme a_n (x - c)^n, où a_n sont des coefficients et c le centre de la série. La convergence d'une série entière est déterminée par son rayon de convergence R. Les séries entières sont fondamentales en analyse complexe et en physique mathématique pour représenter des fonctions analytiques.",
        example: "Considérons la série entière S(x) = Σ_{n=0}^∞ (x - 1)^n / n!. Pour x = 2, S(2) = Σ_{n=0}^∞ (2 - 1)^n / n! = Σ_{n=0}^∞ 1 / n! ≈ 2.71828 (e)."
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Définition d'une série entière",
          text: "Une série entière est une série de fonctions de la forme S(x) = Σ_{n=0}^∞ a_n (x - c)^n, où a_n sont des coefficients réels ou complexes, et c est un point fixe appelé centre de la série. La série est définie pour les valeurs de x telles que la série converge."
        },
        {
          type: "formula",
          title: "🔑 Rayon de convergence",
          formula: "R = 1 / limsup_{n→∞} |a_n|^{1/n}",
          text: "Le rayon de convergence R d'une série entière est donné par la formule ci-dessus. Il détermine l'intervalle de convergence de la série autour du centre c. Si R est fini, la série converge absolument pour |x - c| < R et diverge pour |x - c| > R."
        },
        {
          type: "graph",
          title: "📊 Intervalle de convergence",
          text: "Le graphique montre l'intervalle de convergence d'une série entière centrée en c. La série converge absolument pour les valeurs de x dans l'intervalle (c - R, c + R) et peut converger ou diverger aux points frontières x = c - R et x = c + R.",
          svgContent: "<svg viewBox=\"0 0 340 220\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"340\" height=\"220\" fill=\"#0f172a\" rx=\"6\"/><path d=\"M 50 110 L 290 110\" stroke=\"#38bdf8\" stroke-width=\"2\"/><path d=\"M 150 10 L 150 210\" stroke=\"#38bdf8\" stroke-width=\"2\"/><circle cx=\"150\" cy=\"110\" r=\"5\" fill=\"#34d399\"/><text x=\"150\" y=\"90\" font-family=\"monospace\" font-size=\"12\" fill=\"#e2e8f0\" text-anchor=\"middle\">c</text><text x=\"150\" y=\"130\" font-family=\"monospace\" font-size=\"12\" fill=\"#e2e8f0\" text-anchor=\"middle\">R</text><text x=\"200\" y=\"130\" font-family=\"monospace\" font-size=\"12\" fill=\"#e2e8f0\" text-anchor=\"middle\">x</text><text x=\"100\" y=\"130\" font-family=\"monospace\" font-size=\"12\" fill=\"#e2e8f0\" text-anchor=\"middle\">c - R</text></svg>",
          caption: "Intervalle de convergence d'une série entière centrée en c avec rayon R"
        },
        {
          type: "example",
          title: "✅ Exemple de convergence",
          text: "Considérons la série entière S(x) = Σ_{n=0}^∞ x^n / n!. \nDonnées : a_n = 1 / n!, c = 0. \n① Calcul du rayon de convergence : R = 1 / limsup_{n→∞} |1 / n!|^{1/n} = ∞. \n② La série converge donc pour tout x ∈ ℝ. \n③ Pour x = 1, S(1) = Σ_{n=0}^∞ 1 / n! ≈ 2.71828 (e)."
        },
        {
          type: "example",
          title: "✅ Exemple de divergence",
          text: "Considérons la série entière S(x) = Σ_{n=0}^∞ n! x^n. \nDonnées : a_n = n!, c = 0. \n① Calcul du rayon de convergence : R = 1 / limsup_{n→∞} |n!|^{1/n} = 0. \n② La série converge donc uniquement en x = 0. \n③ Pour x = 0.5, la série diverge car |0.5| > R = 0."
        },
        {
          type: "demo",
          title: "🔬 Preuve de la convergence absolue",
          text: "① Soit S(x) = Σ_{n=0}^∞ a_n (x - c)^n avec rayon de convergence R > 0. \n② Pour |x - c| < R, la série converge absolument car la série numérique Σ_{n=0}^∞ |a_n (x - c)^n| converge par le critère de comparaison avec une série géométrique. \n③ Conclusion : La convergence absolue implique la convergence de la série entière dans l'intervalle de convergence."
        },
        {
          type: "warning",
          title: "⚠️ Pièges courants",
          text: "① Erreur : Confondre le rayon de convergence avec l'intervalle de convergence. — Pourquoi faux : Le rayon de convergence détermine l'intervalle de convergence, mais la convergence aux points frontières doit être vérifiée séparément. — Comment éviter : Toujours vérifier la convergence aux points x = c ± R. \n② Erreur : Supposer que la série converge pour tout x. — Pourquoi faux : Seules les séries entières avec un rayon de convergence infini convergent pour tout x. — Comment éviter : Calculer toujours le rayon de convergence."
        },
        {
          type: "technique",
          title: "🛠️ Méthode pour déterminer le rayon de convergence",
          text: "① Utiliser le théorème de D'Alembert (ratio test) : R = lim_{n→∞} |a_n / a_{n+1}|. \n② Utiliser le théorème de Cauchy (root test) : R = 1 / limsup_{n→∞} |a_n|^{1/n}. \n③ Vérifier la convergence aux points frontières x = c ± R en utilisant des critères de convergence comme la série géométrique, la série alternée, etc."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            question: "La formule de Définition et convergence d'une série entière est :",
            answers: [
              "S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0",
              "S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0",
              "2·(S(x) = Σ_{n=0}^∞ a_n (x - c)^n)",
              "(S(x) = Σ_{n=0}^∞ a_n (x - c)^n)²"
            ],
            correct: 0,
            explanation: "Définition et convergence d'une série entière : S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0"
          },
          {
            type: "input",
            question: "Écrire la formule/expression de Définition et convergence d'une série entière",
            correct: "S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0",
            explanation: "Définition et convergence d'une série entière : S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0"
          },
          {
            type: "mcq",
            question: "Définition et convergence d'une série entière est défini par :",
            answers: [
              "S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0",
              "Inverse de S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0",
              "2·(S(x) = Σ_{n=0}^∞ a_n (x - c)^n)",
              "1/(S(x) = Σ_{n=0}^∞ a_n (x -)"
            ],
            correct: 0,
            explanation: "Définition : S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0"
          },
          {
            type: "mcq",
            question: "Parmi ces expressions, laquelle correspond à Définition et convergence d'une série entière ?",
            answers: [
              "S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0",
              "S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0",
              "(S(x) = Σ_{n=0}^∞ a_n (x - c)^n)²",
              "1/(S(x) = Σ_{n=0}^∞ a_n (x -)"
            ],
            correct: 0,
            explanation: "Définition et convergence d'une série entière : S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0"
          },
          {
            type: "input",
            question: "Notation standard de Définition et convergence d'une série entière ?",
            correct: "S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0",
            explanation: "Définition et convergence d'une série entière se note : S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0"
          }
        ],
        [
          {
            type: "mcq",
            question: "Application directe de Définition et convergence d'une série entière — S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0 — on obtient :",
            answers: [
              "Le résultat en appliquant S(x) = Σ_{n=0}^∞ a_n (x - c)^n",
              "Toujours 0",
              "Toujours 1",
              "Indéfini"
            ],
            correct: 0,
            explanation: "On applique directement : S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0"
          },
          {
            type: "mcq",
            question: "Condition nécessaire pour appliquer Définition et convergence d'une série entière ?",
            answers: [
              "Hypothèses de Définition et convergence d'une série entière satisfaites",
              "Aucune condition",
              "Le résultat est positif",
              "Données numériques seules"
            ],
            correct: 0,
            explanation: "Définition et convergence d'une série entière requiert ses hypothèses de définition."
          },
          {
            type: "mcq",
            question: "Calculer avec Définition et convergence d'une série entière nécessite de :",
            answers: [
              "Appliquer S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0",
              "Mémoriser sans calcul",
              "Approximer",
              "Ignorer les conditions"
            ],
            correct: 0,
            explanation: "Application directe de S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0"
          },
          {
            type: "mcq",
            question: "Pour appliquer Définition et convergence d'une série entière numériquement, on :",
            answers: [
              "Substitue les valeurs dans S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0",
              "Mémorise sans calcul",
              "Approxime",
              "Utilise une autre formule"
            ],
            correct: 0,
            explanation: "Application numérique : substitution dans S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0."
          },
          {
            type: "mcq",
            question: "La valeur obtenue par Définition et convergence d'une série entière dépend de :",
            answers: [
              "Les variables de S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0",
              "Une constante universelle",
              "Rien",
              "La méthode de calcul uniquement"
            ],
            correct: 0,
            explanation: "Définition et convergence d'une série entière dépend des variables de S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0"
          }
        ],
        [
          {
            type: "mcq",
            question: "Avant d'appliquer Définition et convergence d'une série entière (formule : S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0), on vérifie :",
            answers: [
              "Les hypothèses de définition de Définition et convergence d'une série entière",
              "Que le résultat est positif",
              "Rien de particulier",
              "La mémoire de l'élève"
            ],
            correct: 0,
            explanation: "Toujours vérifier les conditions de S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0"
          },
          {
            type: "mcq",
            question: "Domaine de définition de Définition et convergence d'une série entière (S(x) = Σ_{n=0}^∞ a_n (x - c)^n) ?",
            answers: [
              "Valeurs pour lesquelles S(x) = Σ_{n=0}^∞ a_n (x - c)^n est défini",
              "Tous les réels",
              "Aucun réel",
              "Entiers seulement"
            ],
            correct: 0,
            explanation: "Définition et convergence d'une série entière n'est défini que sur son domaine."
          },
          {
            type: "mcq",
            question: "Définition et convergence d'une série entière ne s'applique pas quand :",
            answers: [
              "Les hypothèses ne sont pas satisfaites",
              "Le résultat est non nul",
              "On utilise la formule correcte",
              "n est pair"
            ],
            correct: 0,
            explanation: "S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0 requiert des conditions précises"
          },
          {
            type: "mcq",
            question: "Comment interpréter le signe du résultat de Définition et convergence d'une série entière ?",
            answers: [
              "Selon les conditions de S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0",
              "Toujours positif",
              "Ignorer le signe",
              "Valeur absolue uniquement"
            ],
            correct: 0,
            explanation: "Le signe s'interprète selon les conditions de Définition et convergence d'une série entière."
          },
          {
            type: "mcq",
            question: "Vérification du résultat obtenu par Définition et convergence d'une série entière :",
            answers: [
              "Réinjecter dans S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0 et vérifier",
              "Prendre la valeur absolue",
              "Diviser par 2",
              "Ignorer les unités"
            ],
            correct: 0,
            explanation: "La vérification passe par S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0"
          }
        ],
        [
          {
            type: "mcq",
            question: "Stratégie pour résoudre un exercice sur Définition et convergence d'une série entière :",
            answers: [
              "Identifier → vérifier hypothèses → appliquer S(x) = Σ_{n=0}^∞ a_n (x - c)^n → interpréter",
              "Appliquer sans analyse",
              "Tâtonner",
              "Ignorer les conditions"
            ],
            correct: 0,
            explanation: "Méthode : identification → conditions → S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0 → interprétation"
          },
          {
            type: "mcq",
            question: "Calculer Définition et convergence d'une série entière pour des valeurs spécifiques : méthode ?",
            answers: [
              "Substituer dans S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0",
              "Lire dans un tableau",
              "Approximer",
              "Utiliser une calculatrice sans formule"
            ],
            correct: 0,
            explanation: "Calcul direct : substitution dans S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0."
          },
          {
            type: "mcq",
            question: "Comment justifier formellement Définition et convergence d'une série entière ?",
            answers: [
              "Citer la définition et la propriété S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0",
              "Admettre",
              "Intuition",
              "Exemple seul"
            ],
            correct: 0,
            explanation: "Justification par S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0"
          },
          {
            type: "mcq",
            question: "Pour résoudre une équation avec Définition et convergence d'une série entière (S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R >), on :",
            answers: [
              "Isole l'inconnue dans S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R >",
              "Utilise une approximation",
              "Mémorise le résultat sans calcul",
              "Remplace par une formule voisine"
            ],
            correct: 0,
            explanation: "Résolution : isoler l'inconnue dans S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0."
          },
          {
            type: "mcq",
            question: "Définition et convergence d'une série entière s'utilise en combinaison avec :",
            answers: [
              "D'autres propriétés du même domaine",
              "Uniquement seul",
              "N'importe quelle formule",
              "Des outils non mathématiques"
            ],
            correct: 0,
            explanation: "Définition et convergence d'une série entière s'intègre dans un raisonnement plus large"
          }
        ],
        [
          {
            type: "mcq",
            question: "Quel contre-exemple montre les limites de Définition et convergence d'une série entière ?",
            answers: [
              "Cas où les hypothèses de S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0 ne sont pas satisfaites",
              "Cas où f=0",
              "Cas où n=0",
              "Cas général"
            ],
            correct: 0,
            explanation: "Définition et convergence d'une série entière échoue quand ses conditions ne tiennent pas"
          },
          {
            type: "mcq",
            question: "Dans quel cas Définition et convergence d'une série entière ne s'applique-t-il pas ?",
            answers: [
              "Quand les hypothèses de S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > ne sont pas satisfaites",
              "Jamais, il s'applique toujours",
              "Quand le résultat est nul",
              "Quand n est pair"
            ],
            correct: 0,
            explanation: "Définition et convergence d'une série entière échoue si ses conditions ne tiennent pas."
          },
          {
            type: "mcq",
            question: "Définition et convergence d'une série entière se distingue d'une notion voisine par :",
            answers: [
              "La formule exacte S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0",
              "Le domaine d'utilisation uniquement",
              "Le nom",
              "Aucune différence"
            ],
            correct: 0,
            explanation: "La différence est dans la définition précise : S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0"
          },
          {
            type: "mcq",
            question: "Généralisation de Définition et convergence d'une série entière :",
            answers: [
              "Extension conservant S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0",
              "Abandon de toute formule",
              "Approximation",
              "Cas particulier uniquement"
            ],
            correct: 0,
            explanation: "Généraliser Définition et convergence d'une série entière : conserver la structure de S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0"
          },
          {
            type: "mcq",
            question: "Formule de Définition et convergence d'une série entière dans un cas limite :",
            answers: [
              "S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0",
              "2·(S(x) = Σ_{n=0}^∞ a_n (x - c)^n)",
              "1/(S(x) = Σ_{n=0}^∞ a_n (x -)",
              "Indéfini"
            ],
            correct: 0,
            explanation: "Cas limite : S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0."
          }
        ],
        [
          {
            type: "mcq",
            question: "Démonstration d'une propriété de Définition et convergence d'une série entière — point de départ ?",
            answers: [
              "La définition S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0",
              "Un exemple numérique",
              "Une intuition géométrique",
              "Une approximation"
            ],
            correct: 0,
            explanation: "Toute preuve commence par la définition : S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0."
          },
          {
            type: "mcq",
            question: "Définition et convergence d'une série entière dans un contexte multi-notions :",
            answers: [
              "Articulation de S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0 avec d'autres résultats",
              "Utilisation seule de la formule",
              "Ignorance des interactions",
              "Simplification abusive"
            ],
            correct: 0,
            explanation: "Définition et convergence d'une série entière s'intègre dans un réseau de résultats"
          },
          {
            type: "mcq",
            question: "Généralisation de Définition et convergence d'une série entière :",
            answers: [
              "Extension conservant la structure de S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0",
              "Abandon de la formule",
              "Cas particulier seulement",
              "Approximation"
            ],
            correct: 0,
            explanation: "Définition et convergence d'une série entière se généralise en conservant ses propriétés essentielles."
          },
          {
            type: "mcq",
            question: "Preuve de Définition et convergence d'une série entière : point de départ ?",
            answers: [
              "La définition S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0",
              "Un exemple",
              "Une intuition",
              "Une approximation"
            ],
            correct: 0,
            explanation: "Toute preuve commence par la définition : S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0"
          },
          {
            type: "mcq",
            question: "Expression de Définition et convergence d'une série entière dans un cadre plus général :",
            answers: [
              "S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0",
              "Forme approchée de S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R >",
              "Cas dégénéré",
              "Formulation circulaire"
            ],
            correct: 0,
            explanation: "Généralisation : S(x) = Σ_{n=0}^∞ a_n (x - c)^n, R > 0."
          }
        ]
      ],
      isManipulation: false,
      _mistralLesson: true
    },
    {
      id: "rayon-de-convergence",
      label: "Rayon de convergence",
      lesson: {
        formula: "R = limsup_{n→∞} |a_n|^{1/n}",
        text: "Le rayon de convergence d'une série entière est la distance à l'origine à partir de laquelle la série converge. Il détermine le domaine de validité de la représentation en série d'une fonction. Dans le chapitre sur les séries entières, il joue un rôle crucial pour étudier les propriétés analytiques des fonctions représentées par ces séries.",
        example: "Considérons la série entière Σ (n! x^n) / (10^n). Le rayon de convergence est R = 10, car limsup_{n→∞} |n!|^{1/n} / 10 = 10."
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Définition du rayon de convergence",
          text: "Le rayon de convergence R d'une série entière Σ a_n (x - c)^n est le plus grand rayon pour lequel la série converge pour tout x dans l'intervalle |x - c| < R. Il est donné par la formule R = 1 / limsup_{n→∞} |a_n|^{1/n} si la limite existe, sinon R = 0."
        },
        {
          type: "formula",
          title: "🔑 Formule du rayon de convergence",
          formula: "R = limsup_{n→∞} |a_n|^{1/n}",
          text: "Cette formule donne le rayon de convergence R en fonction des coefficients a_n de la série entière. Le limsup est utilisé pour prendre en compte les cas où la limite n'existe pas. Si la limite existe, R est simplement l'inverse de cette limite."
        },
        {
          type: "graph",
          title: "📊 Représentation graphique du rayon de convergence",
          text: "Ce graphique montre le rayon de convergence R autour du centre c de la série entière. Les points c et c + R sont marqués pour illustrer l'intervalle de convergence.",
          svgContent: "<svg viewBox=\"0 0 340 220\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"340\" height=\"220\" fill=\"#0f172a\" rx=\"6\"/>\n  <path d=\"M 40 180 L 300 180\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n  <path d=\"M 40 180 L 40 40\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n  <circle cx=\"100\" cy=\"180\" r=\"5\" fill=\"#34d399\"/>\n  <circle cx=\"200\" cy=\"180\" r=\"5\" fill=\"#34d399\"/>\n  <text x=\"100\" y=\"170\" font-family=\"monospace\" font-size=\"12\" fill=\"#e2e8f0\">c</text>\n  <text x=\"200\" y=\"170\" font-family=\"monospace\" font-size=\"12\" fill=\"#e2e8f0\">c + R</text>\n  <text x=\"140\" y=\"20\" font-family=\"monospace\" font-size=\"12\" fill=\"#e2e8f0\">Rayon de convergence R</text>\n</svg>",
          caption: "Représentation du rayon de convergence R autour du centre c"
        },
        {
          type: "example",
          title: "✅ Exemple 1 : Série entière avec rayon de convergence fini",
          text: "Contexte :\nConsidérons la série entière Σ (n! x^n) / (10^n).\nDonnées : a_n = n! / 10^n\n① Calcul de limsup_{n→∞} |a_n|^{1/n} :\n   |a_n|^{1/n} = (n! / 10^n)^{1/n} = n^{1/n} / 10\n   lim_{n→∞} n^{1/n} = 1\n   Donc limsup_{n→∞} |a_n|^{1/n} = 1 / 10\n② Calcul du rayon de convergence :\n   R = 1 / (1 / 10) = 10\n③ Résultat : Le rayon de convergence est R = 10."
        },
        {
          type: "example",
          title: "✅ Exemple 2 : Série entière avec rayon de convergence infini",
          text: "Contexte :\nConsidérons la série entière Σ (x^n) / n!.\nDonnées : a_n = 1 / n!\n① Calcul de limsup_{n→∞} |a_n|^{1/n} :\n   |a_n|^{1/n} = (1 / n!)^{1/n} = 1 / n^{1/n}\n   lim_{n→∞} n^{1/n} = 1\n   Donc limsup_{n→∞} |a_n|^{1/n} = 1 / 1 = 1\n② Calcul du rayon de convergence :\n   R = 1 / 1 = 1\n③ Résultat : Le rayon de convergence est R = 1."
        },
        {
          type: "demo",
          title: "🔬 Démonstration du rayon de convergence",
          text: "① Soit une série entière Σ a_n (x - c)^n.\n② Le rayon de convergence R est défini comme le plus grand rayon pour lequel la série converge pour tout x dans l'intervalle |x - c| < R.\n③ Pour montrer que R = 1 / limsup_{n→∞} |a_n|^{1/n}, on utilise le critère de Cauchy pour les séries.\n④ En appliquant le critère de Cauchy, on obtient que la série converge si et seulement si limsup_{n→∞} |a_n (x - c)^n|^{1/n} < 1.\n⑤ En simplifiant, on trouve que R = 1 / limsup_{n→∞} |a_n|^{1/n}.\n⑥ Conclusion : La formule du rayon de convergence est justifiée par le critère de Cauchy."
        },
        {
          type: "warning",
          title: "⚠️ Erreurs courantes",
          text: "① Erreur : Confondre le rayon de convergence avec le domaine de convergence.\n   — Pourquoi faux : Le rayon de convergence détermine le domaine de convergence, mais il ne prend pas en compte les points de frontière.\n   — Comment éviter : Toujours vérifier les points de frontière séparément.\n② Erreur : Utiliser la formule du rayon de convergence sans vérifier la convergence des séries.\n   — Pourquoi faux : La formule donne une estimation, mais il faut vérifier la convergence des séries pour être sûr.\n   — Comment éviter : Toujours vérifier la convergence des séries en utilisant des critères de convergence appropriés.\n③ Erreur : Oublier que le rayon de convergence peut être infini.\n   — Pourquoi faux : Certaines séries entières convergent pour tout x, ce qui signifie que leur rayon de convergence est infini.\n   — Comment éviter : Toujours considérer la possibilité d'un rayon de convergence infini."
        },
        {
          type: "technique",
          title: "🛠️ Méthode pour calculer le rayon de convergence",
          text: "① Identifier les coefficients a_n de la série entière.\n② Calculer limsup_{n→∞} |a_n|^{1/n}.\n③ Si la limite existe, calculer R = 1 / limsup_{n→∞} |a_n|^{1/n}.\n④ Si la limite n'existe pas, utiliser d'autres critères de convergence pour estimer R.\n⑤ Vérifier la convergence des séries aux points de frontière |x - c| = R.\n⑥ Conclusion : Le rayon de convergence R est déterminé et le domaine de convergence est |x - c| < R."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            question: "La formule de Rayon de convergence est :",
            answers: [
              "R = limsup_{n→∞} |a_n|^{1/n}",
              "R = limsup_{n→∞} |a_n|^{1/n}",
              "2·(R = limsup_{n→∞} |a_n|^{1/n})",
              "(R = limsup_{n→∞} |a_n|^{1/n})²"
            ],
            correct: 0,
            explanation: "Rayon de convergence : R = limsup_{n→∞} |a_n|^{1/n}"
          },
          {
            type: "input",
            question: "Écrire la formule/expression de Rayon de convergence",
            correct: "R = limsup_{n→∞} |a_n|^{1/n}",
            explanation: "Rayon de convergence : R = limsup_{n→∞} |a_n|^{1/n}"
          },
          {
            type: "mcq",
            question: "Rayon de convergence est défini par :",
            answers: [
              "R = limsup_{n→∞} |a_n|^{1/n}",
              "Inverse de R = limsup_{n→∞} |a_n|^{1/n}",
              "2·(R = limsup_{n→∞} |a_n|^{1/n})",
              "1/(R = limsup_{n→∞} |a_n|^{1)"
            ],
            correct: 0,
            explanation: "Définition : R = limsup_{n→∞} |a_n|^{1/n}"
          },
          {
            type: "mcq",
            question: "Parmi ces expressions, laquelle correspond à Rayon de convergence ?",
            answers: [
              "R = limsup_{n→∞} |a_n|^{1/n}",
              "R = limsup_{n→∞} |a_n|^{1/n}",
              "(R = limsup_{n→∞} |a_n|^{1/n})²",
              "1/(R = limsup_{n→∞} |a_n|^{1)"
            ],
            correct: 0,
            explanation: "Rayon de convergence : R = limsup_{n→∞} |a_n|^{1/n}"
          },
          {
            type: "input",
            question: "Notation standard de Rayon de convergence ?",
            correct: "R = limsup_{n→∞} |a_n|^{1/n}",
            explanation: "Rayon de convergence se note : R = limsup_{n→∞} |a_n|^{1/n}"
          }
        ],
        [
          {
            type: "mcq",
            question: "Application directe de Rayon de convergence — R = limsup_{n→∞} |a_n|^{1/n} — on obtient :",
            answers: [
              "Le résultat en appliquant R = limsup_{n→∞} |a_n|^{1/n}",
              "Toujours 0",
              "Toujours 1",
              "Indéfini"
            ],
            correct: 0,
            explanation: "On applique directement : R = limsup_{n→∞} |a_n|^{1/n}"
          },
          {
            type: "mcq",
            question: "Condition nécessaire pour appliquer Rayon de convergence ?",
            answers: [
              "Hypothèses de Rayon de convergence satisfaites",
              "Aucune condition",
              "Le résultat est positif",
              "Données numériques seules"
            ],
            correct: 0,
            explanation: "Rayon de convergence requiert ses hypothèses de définition."
          },
          {
            type: "mcq",
            question: "Calculer avec Rayon de convergence nécessite de :",
            answers: [
              "Appliquer R = limsup_{n→∞} |a_n|^{1/n}",
              "Mémoriser sans calcul",
              "Approximer",
              "Ignorer les conditions"
            ],
            correct: 0,
            explanation: "Application directe de R = limsup_{n→∞} |a_n|^{1/n}"
          },
          {
            type: "mcq",
            question: "Pour appliquer Rayon de convergence numériquement, on :",
            answers: [
              "Substitue les valeurs dans R = limsup_{n→∞} |a_n|^{1/n}",
              "Mémorise sans calcul",
              "Approxime",
              "Utilise une autre formule"
            ],
            correct: 0,
            explanation: "Application numérique : substitution dans R = limsup_{n→∞} |a_n|^{1/n}."
          },
          {
            type: "mcq",
            question: "La valeur obtenue par Rayon de convergence dépend de :",
            answers: [
              "Les variables de R = limsup_{n→∞} |a_n|^{1/n}",
              "Une constante universelle",
              "Rien",
              "La méthode de calcul uniquement"
            ],
            correct: 0,
            explanation: "Rayon de convergence dépend des variables de R = limsup_{n→∞} |a_n|^{1/n}"
          }
        ],
        [
          {
            type: "mcq",
            question: "Avant d'appliquer Rayon de convergence (formule : R = limsup_{n→∞} |a_n|^{1/n}), on vérifie :",
            answers: [
              "Les hypothèses de définition de Rayon de convergence",
              "Que le résultat est positif",
              "Rien de particulier",
              "La mémoire de l'élève"
            ],
            correct: 0,
            explanation: "Toujours vérifier les conditions de R = limsup_{n→∞} |a_n|^{1/n}"
          },
          {
            type: "mcq",
            question: "Domaine de définition de Rayon de convergence (R = limsup_{n→∞} |a_n|^{1/n}) ?",
            answers: [
              "Valeurs pour lesquelles R = limsup_{n→∞} |a_n|^{1/n} est défini",
              "Tous les réels",
              "Aucun réel",
              "Entiers seulement"
            ],
            correct: 0,
            explanation: "Rayon de convergence n'est défini que sur son domaine."
          },
          {
            type: "mcq",
            question: "Rayon de convergence ne s'applique pas quand :",
            answers: [
              "Les hypothèses ne sont pas satisfaites",
              "Le résultat est non nul",
              "On utilise la formule correcte",
              "n est pair"
            ],
            correct: 0,
            explanation: "R = limsup_{n→∞} |a_n|^{1/n} requiert des conditions précises"
          },
          {
            type: "mcq",
            question: "Comment interpréter le signe du résultat de Rayon de convergence ?",
            answers: [
              "Selon les conditions de R = limsup_{n→∞} |a_n|^{1/n}",
              "Toujours positif",
              "Ignorer le signe",
              "Valeur absolue uniquement"
            ],
            correct: 0,
            explanation: "Le signe s'interprète selon les conditions de Rayon de convergence."
          },
          {
            type: "mcq",
            question: "Vérification du résultat obtenu par Rayon de convergence :",
            answers: [
              "Réinjecter dans R = limsup_{n→∞} |a_n|^{1/n} et vérifier",
              "Prendre la valeur absolue",
              "Diviser par 2",
              "Ignorer les unités"
            ],
            correct: 0,
            explanation: "La vérification passe par R = limsup_{n→∞} |a_n|^{1/n}"
          }
        ],
        [
          {
            type: "mcq",
            question: "Stratégie pour résoudre un exercice sur Rayon de convergence :",
            answers: [
              "Identifier → vérifier hypothèses → appliquer R = limsup_{n→∞} |a_n|^{1/n} → interpréter",
              "Appliquer sans analyse",
              "Tâtonner",
              "Ignorer les conditions"
            ],
            correct: 0,
            explanation: "Méthode : identification → conditions → R = limsup_{n→∞} |a_n|^{1/n} → interprétation"
          },
          {
            type: "mcq",
            question: "Calculer Rayon de convergence pour des valeurs spécifiques : méthode ?",
            answers: [
              "Substituer dans R = limsup_{n→∞} |a_n|^{1/n}",
              "Lire dans un tableau",
              "Approximer",
              "Utiliser une calculatrice sans formule"
            ],
            correct: 0,
            explanation: "Calcul direct : substitution dans R = limsup_{n→∞} |a_n|^{1/n}."
          },
          {
            type: "mcq",
            question: "Comment justifier formellement Rayon de convergence ?",
            answers: [
              "Citer la définition et la propriété R = limsup_{n→∞} |a_n|^{1/n}",
              "Admettre",
              "Intuition",
              "Exemple seul"
            ],
            correct: 0,
            explanation: "Justification par R = limsup_{n→∞} |a_n|^{1/n}"
          },
          {
            type: "mcq",
            question: "Pour résoudre une équation avec Rayon de convergence (R = limsup_{n→∞} |a_n|^{1/n}), on :",
            answers: [
              "Isole l'inconnue dans R = limsup_{n→∞} |a_n|^{1/n}",
              "Utilise une approximation",
              "Mémorise le résultat sans calcul",
              "Remplace par une formule voisine"
            ],
            correct: 0,
            explanation: "Résolution : isoler l'inconnue dans R = limsup_{n→∞} |a_n|^{1/n}."
          },
          {
            type: "mcq",
            question: "Rayon de convergence s'utilise en combinaison avec :",
            answers: [
              "D'autres propriétés du même domaine",
              "Uniquement seul",
              "N'importe quelle formule",
              "Des outils non mathématiques"
            ],
            correct: 0,
            explanation: "Rayon de convergence s'intègre dans un raisonnement plus large"
          }
        ],
        [
          {
            type: "mcq",
            question: "Quel contre-exemple montre les limites de Rayon de convergence ?",
            answers: [
              "Cas où les hypothèses de R = limsup_{n→∞} |a_n|^{1/n} ne sont pas satisfaites",
              "Cas où f=0",
              "Cas où n=0",
              "Cas général"
            ],
            correct: 0,
            explanation: "Rayon de convergence échoue quand ses conditions ne tiennent pas"
          },
          {
            type: "mcq",
            question: "Dans quel cas Rayon de convergence ne s'applique-t-il pas ?",
            answers: [
              "Quand les hypothèses de R = limsup_{n→∞} |a_n|^{1/n} ne sont pas satisfaites",
              "Jamais, il s'applique toujours",
              "Quand le résultat est nul",
              "Quand n est pair"
            ],
            correct: 0,
            explanation: "Rayon de convergence échoue si ses conditions ne tiennent pas."
          },
          {
            type: "mcq",
            question: "Rayon de convergence se distingue d'une notion voisine par :",
            answers: [
              "La formule exacte R = limsup_{n→∞} |a_n|^{1/n}",
              "Le domaine d'utilisation uniquement",
              "Le nom",
              "Aucune différence"
            ],
            correct: 0,
            explanation: "La différence est dans la définition précise : R = limsup_{n→∞} |a_n|^{1/n}"
          },
          {
            type: "mcq",
            question: "Généralisation de Rayon de convergence :",
            answers: [
              "Extension conservant R = limsup_{n→∞} |a_n|^{1/n}",
              "Abandon de toute formule",
              "Approximation",
              "Cas particulier uniquement"
            ],
            correct: 0,
            explanation: "Généraliser Rayon de convergence : conserver la structure de R = limsup_{n→∞} |a_n|^{1/n}"
          },
          {
            type: "mcq",
            question: "Formule de Rayon de convergence dans un cas limite :",
            answers: [
              "R = limsup_{n→∞} |a_n|^{1/n}",
              "2·(R = limsup_{n→∞} |a_n|^{1/n})",
              "1/(R = limsup_{n→∞} |a_n|^{1)",
              "Indéfini"
            ],
            correct: 0,
            explanation: "Cas limite : R = limsup_{n→∞} |a_n|^{1/n}."
          }
        ],
        [
          {
            type: "mcq",
            question: "Démonstration d'une propriété de Rayon de convergence — point de départ ?",
            answers: [
              "La définition R = limsup_{n→∞} |a_n|^{1/n}",
              "Un exemple numérique",
              "Une intuition géométrique",
              "Une approximation"
            ],
            correct: 0,
            explanation: "Toute preuve commence par la définition : R = limsup_{n→∞} |a_n|^{1/n}."
          },
          {
            type: "mcq",
            question: "Rayon de convergence dans un contexte multi-notions :",
            answers: [
              "Articulation de R = limsup_{n→∞} |a_n|^{1/n} avec d'autres résultats",
              "Utilisation seule de la formule",
              "Ignorance des interactions",
              "Simplification abusive"
            ],
            correct: 0,
            explanation: "Rayon de convergence s'intègre dans un réseau de résultats"
          },
          {
            type: "mcq",
            question: "Généralisation de Rayon de convergence :",
            answers: [
              "Extension conservant la structure de R = limsup_{n→∞} |a_n|^{1/n}",
              "Abandon de la formule",
              "Cas particulier seulement",
              "Approximation"
            ],
            correct: 0,
            explanation: "Rayon de convergence se généralise en conservant ses propriétés essentielles."
          },
          {
            type: "mcq",
            question: "Preuve de Rayon de convergence : point de départ ?",
            answers: [
              "La définition R = limsup_{n→∞} |a_n|^{1/n}",
              "Un exemple",
              "Une intuition",
              "Une approximation"
            ],
            correct: 0,
            explanation: "Toute preuve commence par la définition : R = limsup_{n→∞} |a_n|^{1/n}"
          },
          {
            type: "mcq",
            question: "Expression de Rayon de convergence dans un cadre plus général :",
            answers: [
              "R = limsup_{n→∞} |a_n|^{1/n}",
              "Forme approchée de R = limsup_{n→∞} |a_n|^{1/n}",
              "Cas dégénéré",
              "Formulation circulaire"
            ],
            correct: 0,
            explanation: "Généralisation : R = limsup_{n→∞} |a_n|^{1/n}."
          }
        ]
      ],
      isManipulation: false,
      _mistralLesson: true
    },
    {
      id: "fonctions-analytiques-et-series-entieres",
      label: "Fonctions analytiques et séries entières",
      lesson: {
        formula: "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
        text: "Une série entière est une série de fonctions analytiques qui converge absolument et uniformément sur son disque de convergence. Elle permet de représenter des fonctions analytiques sous forme de série infinie, facilitant leur étude et leur manipulation. Les séries entières sont fondamentales en analyse complexe et en physique mathématique.",
        example: "Exemple : Calcul de la série entière pour f(x) = eˣ autour de x₀ = 0.\nDonnées : f(x) = eˣ, x₀ = 0.\n① Étape 1 : Calcul des dérivées en 0 : f⁽ⁿ⁾(0) = 1 pour tout n.\n② Étape 2 : Application de la formule de Taylor : f(x) = Σ (f⁽ⁿ⁾(0)/n!) xⁿ = Σ (xⁿ/n!).\n③ Résultat : f(x) = Σ (xⁿ/n!) pour tout x ∈ ℝ."
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Définition d'une série entière",
          text: "Une série entière est une série de la forme Σ (aₙ (x−x₀)ⁿ) où (aₙ) est une suite de coefficients complexes et x₀ est un point de convergence. Elle converge absolument et uniformément sur son disque de convergence, défini par R = 1/limsup √|aₙ|."
        },
        {
          type: "formula",
          title: "🔑 Formule de la série entière",
          formula: "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
          text: "La formule représente une fonction f(x) comme une série infinie de puissances de (x−x₀). Les coefficients aₙ sont déterminés par les dérivées de f en x₀ : aₙ = f⁽ⁿ⁾(x₀)/n!. Le rayon de convergence R est donné par R = 1/limsup √|aₙ|."
        },
        {
          type: "graph",
          title: "📊 Représentation graphique d'une série entière",
          text: "Le graphique montre la convergence de la série entière vers la fonction f(x) autour du point x₀. Les points verts représentent les termes de la série pour différents n.",
          svgContent: "<svg viewBox=\"0 0 340 220\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"340\" height=\"220\" fill=\"#0f172a\" rx=\"6\"/>\n<path d=\"M 40 180 L 300 180\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n<path d=\"M 40 180 L 40 40\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n<text x=\"30\" y=\"190\" fill=\"#e2e8f0\" font-family=\"monospace\" font-size=\"12\">x</text>\n<text x=\"30\" y=\"50\" fill=\"#e2e8f0\" font-family=\"monospace\" font-size=\"12\">f(x)</text>\n<circle cx=\"100\" cy=\"120\" r=\"2\" fill=\"#34d399\"/>\n<circle cx=\"140\" cy=\"100\" r=\"2\" fill=\"#34d399\"/>\n<circle cx=\"180\" cy=\"80\" r=\"2\" fill=\"#34d399\"/>\n<circle cx=\"220\" cy=\"60\" r=\"2\" fill=\"#34d399\"/>\n<text x=\"100\" y=\"150\" fill=\"#fbbf24\" font-family=\"monospace\" font-size=\"10\">x₀</text>\n<text x=\"250\" y=\"30\" fill=\"#fbbf24\" font-family=\"monospace\" font-size=\"10\">f(x₀ + aₙ(x−x₀)ⁿ)</text>\n</svg>",
          caption: "Représentation graphique d'une série entière autour de x₀"
        },
        {
          type: "example",
          title: "✅ Exemple 1 : Série entière pour sin(x)",
          text: "Contexte : Calcul de la série entière pour f(x) = sin(x) autour de x₀ = 0.\nDonnées : f(x) = sin(x), x₀ = 0.\n① Étape 1 : Calcul des dérivées en 0 : f(0) = 0, f'(0) = 1, f''(0) = 0, f'''(0) = -1, etc.\n② Étape 2 : Application de la formule de Taylor : f(x) = Σ (f⁽ⁿ⁾(0)/n!) xⁿ = x - x³/3! + x⁵/5! - ...\n③ Résultat : f(x) = Σ ((-1)ⁿ x²ⁿ⁺¹)/(2n+1)! pour tout x ∈ ℝ."
        },
        {
          type: "example",
          title: "✅ Exemple 2 : Série entière pour cos(x)",
          text: "Contexte : Calcul de la série entière pour f(x) = cos(x) autour de x₀ = 0.\nDonnées : f(x) = cos(x), x₀ = 0.\n① Étape 1 : Calcul des dérivées en 0 : f(0) = 1, f'(0) = 0, f''(0) = -1, f'''(0) = 0, etc.\n② Étape 2 : Application de la formule de Taylor : f(x) = Σ (f⁽ⁿ⁾(0)/n!) xⁿ = 1 - x²/2! + x⁴/4! - ...\n③ Résultat : f(x) = Σ ((-1)ⁿ x²ⁿ)/(2n)! pour tout x ∈ ℝ."
        },
        {
          type: "demo",
          title: "🔬 Démonstration de la convergence d'une série entière",
          text: "① La série entière Σ (aₙ (x−x₀)ⁿ) converge absolument et uniformément sur le disque de convergence |x−x₀| < R, où R = 1/limsup √|aₙ|.\n② Pour montrer cela, on utilise le critère de Cauchy : pour tout x tel que |x−x₀| < R, la série converge car les termes aₙ (x−x₀)ⁿ sont dominés par Rⁿ.\n③ Conclusion : La convergence est assurée par le théorème de Cauchy-Hadamard, qui garantit la convergence absolue et uniforme sur le disque de convergence."
        },
        {
          type: "warning",
          title: "⚠️ Pièges et erreurs fréquentes",
          text: "① Erreur : Confondre le rayon de convergence R avec le domaine de définition de la fonction. — Pourquoi faux : Le rayon de convergence peut être plus petit que le domaine de définition, comme pour la fonction 1/(1+x²). — Comment éviter : Calculer R en utilisant la formule R = 1/limsup √|aₙ|.\n② Erreur : Penser que toutes les séries entières convergent pour tout x. — Pourquoi faux : La convergence est limitée au disque de convergence |x−x₀| < R. — Comment éviter : Toujours vérifier le rayon de convergence avant d'appliquer la série.\n③ Erreur : Négliger les conditions de régularité de la fonction. — Pourquoi faux : La fonction doit être analytique pour être représentée par une série entière. — Comment éviter : Vérifier que la fonction est analytique sur le domaine considéré."
        },
        {
          type: "technique",
          title: "🛠️ Méthode pour calculer une série entière",
          text: "① Choisir le point de développement x₀.\n② Calculer les dérivées de la fonction en x₀ : f⁽ⁿ⁾(x₀).\n③ Déterminer les coefficients aₙ = f⁽ⁿ⁾(x₀)/n!.\n④ Calculer le rayon de convergence R = 1/limsup √|aₙ|.\n⑤ Écrire la série entière f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            question: "La formule de Fonctions analytiques et séries entières est :",
            answers: [
              "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "2·(f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−)",
              "(f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−)²"
            ],
            correct: 0,
            explanation: "Fonctions analytiques et séries entières : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "input",
            question: "Écrire la formule/expression de Fonctions analytiques et séries entières",
            correct: "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
            explanation: "Fonctions analytiques et séries entières : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Fonctions analytiques et séries entières est défini par :",
            answers: [
              "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Inverse de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "2·(f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−)",
              "1/(f(x) = Σ (aₙ (x−x₀)ⁿ) pou)"
            ],
            correct: 0,
            explanation: "Définition : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Parmi ces expressions, laquelle correspond à Fonctions analytiques et séries entières ?",
            answers: [
              "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "(f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−)²",
              "1/(f(x) = Σ (aₙ (x−x₀)ⁿ) pou)"
            ],
            correct: 0,
            explanation: "Fonctions analytiques et séries entières : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "input",
            question: "Notation standard de Fonctions analytiques et séries entières ?",
            correct: "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
            explanation: "Fonctions analytiques et séries entières se note : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          }
        ],
        [
          {
            type: "mcq",
            question: "Application directe de Fonctions analytiques et séries entières — f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R — on obtient :",
            answers: [
              "Le résultat en appliquant f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−",
              "Toujours 0",
              "Toujours 1",
              "Indéfini"
            ],
            correct: 0,
            explanation: "On applique directement : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Condition nécessaire pour appliquer Fonctions analytiques et séries entières ?",
            answers: [
              "Hypothèses de Fonctions analytiques et séries entières satisfaites",
              "Aucune condition",
              "Le résultat est positif",
              "Données numériques seules"
            ],
            correct: 0,
            explanation: "Fonctions analytiques et séries entières requiert ses hypothèses de définition."
          },
          {
            type: "mcq",
            question: "Calculer avec Fonctions analytiques et séries entières nécessite de :",
            answers: [
              "Appliquer f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Mémoriser sans calcul",
              "Approximer",
              "Ignorer les conditions"
            ],
            correct: 0,
            explanation: "Application directe de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Pour appliquer Fonctions analytiques et séries entières numériquement, on :",
            answers: [
              "Substitue les valeurs dans f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Mémorise sans calcul",
              "Approxime",
              "Utilise une autre formule"
            ],
            correct: 0,
            explanation: "Application numérique : substitution dans f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R."
          },
          {
            type: "mcq",
            question: "La valeur obtenue par Fonctions analytiques et séries entières dépend de :",
            answers: [
              "Les variables de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Une constante universelle",
              "Rien",
              "La méthode de calcul uniquement"
            ],
            correct: 0,
            explanation: "Fonctions analytiques et séries entières dépend des variables de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          }
        ],
        [
          {
            type: "mcq",
            question: "Avant d'appliquer Fonctions analytiques et séries entières (formule : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R), on vérifie :",
            answers: [
              "Les hypothèses de définition de Fonctions analytiques et séries entières",
              "Que le résultat est positif",
              "Rien de particulier",
              "La mémoire de l'élève"
            ],
            correct: 0,
            explanation: "Toujours vérifier les conditions de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Domaine de définition de Fonctions analytiques et séries entières (f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−) ?",
            answers: [
              "Valeurs pour lesquelles f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x− est défini",
              "Tous les réels",
              "Aucun réel",
              "Entiers seulement"
            ],
            correct: 0,
            explanation: "Fonctions analytiques et séries entières n'est défini que sur son domaine."
          },
          {
            type: "mcq",
            question: "Fonctions analytiques et séries entières ne s'applique pas quand :",
            answers: [
              "Les hypothèses ne sont pas satisfaites",
              "Le résultat est non nul",
              "On utilise la formule correcte",
              "n est pair"
            ],
            correct: 0,
            explanation: "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R requiert des conditions précises"
          },
          {
            type: "mcq",
            question: "Comment interpréter le signe du résultat de Fonctions analytiques et séries entières ?",
            answers: [
              "Selon les conditions de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Toujours positif",
              "Ignorer le signe",
              "Valeur absolue uniquement"
            ],
            correct: 0,
            explanation: "Le signe s'interprète selon les conditions de Fonctions analytiques et séries entières."
          },
          {
            type: "mcq",
            question: "Vérification du résultat obtenu par Fonctions analytiques et séries entières :",
            answers: [
              "Réinjecter dans f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R et vérifier",
              "Prendre la valeur absolue",
              "Diviser par 2",
              "Ignorer les unités"
            ],
            correct: 0,
            explanation: "La vérification passe par f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          }
        ],
        [
          {
            type: "mcq",
            question: "Stratégie pour résoudre un exercice sur Fonctions analytiques et séries entières :",
            answers: [
              "Identifier → vérifier hypothèses → appliquer f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x− → interpréter",
              "Appliquer sans analyse",
              "Tâtonner",
              "Ignorer les conditions"
            ],
            correct: 0,
            explanation: "Méthode : identification → conditions → f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R → interprétation"
          },
          {
            type: "mcq",
            question: "Calculer Fonctions analytiques et séries entières pour des valeurs spécifiques : méthode ?",
            answers: [
              "Substituer dans f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Lire dans un tableau",
              "Approximer",
              "Utiliser une calculatrice sans formule"
            ],
            correct: 0,
            explanation: "Calcul direct : substitution dans f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R."
          },
          {
            type: "mcq",
            question: "Comment justifier formellement Fonctions analytiques et séries entières ?",
            answers: [
              "Citer la définition et la propriété f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Admettre",
              "Intuition",
              "Exemple seul"
            ],
            correct: 0,
            explanation: "Justification par f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Pour résoudre une équation avec Fonctions analytiques et séries entières (f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| <), on :",
            answers: [
              "Isole l'inconnue dans f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| <",
              "Utilise une approximation",
              "Mémorise le résultat sans calcul",
              "Remplace par une formule voisine"
            ],
            correct: 0,
            explanation: "Résolution : isoler l'inconnue dans f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R."
          },
          {
            type: "mcq",
            question: "Fonctions analytiques et séries entières s'utilise en combinaison avec :",
            answers: [
              "D'autres propriétés du même domaine",
              "Uniquement seul",
              "N'importe quelle formule",
              "Des outils non mathématiques"
            ],
            correct: 0,
            explanation: "Fonctions analytiques et séries entières s'intègre dans un raisonnement plus large"
          }
        ],
        [
          {
            type: "mcq",
            question: "Quel contre-exemple montre les limites de Fonctions analytiques et séries entières ?",
            answers: [
              "Cas où les hypothèses de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R ne sont pas satisfaites",
              "Cas où f=0",
              "Cas où n=0",
              "Cas général"
            ],
            correct: 0,
            explanation: "Fonctions analytiques et séries entières échoue quand ses conditions ne tiennent pas"
          },
          {
            type: "mcq",
            question: "Dans quel cas Fonctions analytiques et séries entières ne s'applique-t-il pas ?",
            answers: [
              "Quand les hypothèses de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < ne sont pas satisfaites",
              "Jamais, il s'applique toujours",
              "Quand le résultat est nul",
              "Quand n est pair"
            ],
            correct: 0,
            explanation: "Fonctions analytiques et séries entières échoue si ses conditions ne tiennent pas."
          },
          {
            type: "mcq",
            question: "Fonctions analytiques et séries entières se distingue d'une notion voisine par :",
            answers: [
              "La formule exacte f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Le domaine d'utilisation uniquement",
              "Le nom",
              "Aucune différence"
            ],
            correct: 0,
            explanation: "La différence est dans la définition précise : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Généralisation de Fonctions analytiques et séries entières :",
            answers: [
              "Extension conservant f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Abandon de toute formule",
              "Approximation",
              "Cas particulier uniquement"
            ],
            correct: 0,
            explanation: "Généraliser Fonctions analytiques et séries entières : conserver la structure de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Formule de Fonctions analytiques et séries entières dans un cas limite :",
            answers: [
              "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "2·(f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−)",
              "1/(f(x) = Σ (aₙ (x−x₀)ⁿ) pou)",
              "Indéfini"
            ],
            correct: 0,
            explanation: "Cas limite : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R."
          }
        ],
        [
          {
            type: "mcq",
            question: "Démonstration d'une propriété de Fonctions analytiques et séries entières — point de départ ?",
            answers: [
              "La définition f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Un exemple numérique",
              "Une intuition géométrique",
              "Une approximation"
            ],
            correct: 0,
            explanation: "Toute preuve commence par la définition : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R."
          },
          {
            type: "mcq",
            question: "Fonctions analytiques et séries entières dans un contexte multi-notions :",
            answers: [
              "Articulation de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R avec d'autres résultats",
              "Utilisation seule de la formule",
              "Ignorance des interactions",
              "Simplification abusive"
            ],
            correct: 0,
            explanation: "Fonctions analytiques et séries entières s'intègre dans un réseau de résultats"
          },
          {
            type: "mcq",
            question: "Généralisation de Fonctions analytiques et séries entières :",
            answers: [
              "Extension conservant la structure de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Abandon de la formule",
              "Cas particulier seulement",
              "Approximation"
            ],
            correct: 0,
            explanation: "Fonctions analytiques et séries entières se généralise en conservant ses propriétés essentielles."
          },
          {
            type: "mcq",
            question: "Preuve de Fonctions analytiques et séries entières : point de départ ?",
            answers: [
              "La définition f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Un exemple",
              "Une intuition",
              "Une approximation"
            ],
            correct: 0,
            explanation: "Toute preuve commence par la définition : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Expression de Fonctions analytiques et séries entières dans un cadre plus général :",
            answers: [
              "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Forme approchée de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| <",
              "Cas dégénéré",
              "Formulation circulaire"
            ],
            correct: 0,
            explanation: "Généralisation : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R."
          }
        ]
      ],
      isManipulation: false,
      _mistralLesson: true
    },
    {
      id: "series-entieres-et-equations-differentielles",
      label: "Séries entières et équations différentielles",
      lesson: {
        formula: "f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R",
        text: "Une série entière est une série de fonctions dont les termes sont des polynômes. Elle converge absolument et uniformément sur tout intervalle fermé contenu dans son disque de convergence. Les séries entières sont fondamentales en analyse pour résoudre des équations différentielles linéaires et étudier les fonctions analytiques.",
        example: "Résolution de l'équation différentielle y'' + y = 0 avec conditions initiales y(0) = 1 et y'(0) = 0. La solution est y(x) = cos(x)."
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Définition d'une série entière",
          text: "Une série entière est une série de la forme ∑(aₙ(x−x₀)ⁿ) où (aₙ) est une suite de coefficients et x₀ est le centre de la série. Le rayon de convergence R est défini comme R = 1/limsup√|aₙ|. La série converge absolument et uniformément pour |x−x₀| < R."
        },
        {
          type: "formula",
          title: "🔑 Formule de la série entière",
          formula: "f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R",
          text: "La formule représente une série entière centrée en x₀ avec un rayon de convergence R. Les coefficients aₙ déterminent le comportement de la série. Le rayon de convergence R est crucial pour déterminer l'intervalle de convergence de la série."
        },
        {
          type: "graph",
          title: "📊 Graphique de convergence d'une série entière",
          text: "Le graphique montre le disque de convergence d'une série entière centrée en x₀ avec un rayon de convergence R. La série converge absolument et uniformément à l'intérieur du disque et diverge à l'extérieur.",
          svgContent: "<svg viewBox=\"0 0 340 220\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"340\" height=\"220\" fill=\"#0f172a\" rx=\"6\"/><path d=\"M 50 110 L 290 110\" stroke=\"#38bdf8\" stroke-width=\"2\"/><path d=\"M 50 110 L 50 90\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"50\" y=\"80\" fill=\"#e2e8f0\" font-family=\"monospace\" font-size=\"12\">x₀</text><text x=\"170\" y=\"125\" fill=\"#e2e8f0\" font-family=\"monospace\" font-size=\"12\">R</text><circle cx=\"170\" cy=\"110\" r=\"5\" fill=\"#34d399\"/><text x=\"170\" y=\"135\" fill=\"#e2e8f0\" font-family=\"monospace\" font-size=\"12\">|x−x₀| = R</text></svg>",
          caption: "Disque de convergence d'une série entière"
        },
        {
          type: "example",
          title: "✅ Exemple 1 : Série entière pour la fonction exponentielle",
          text: "Contexte :\nLa fonction exponentielle eˣ peut être exprimée comme une série entière.\nDonnées :\nLa série entière pour eˣ est ∑(xⁿ/n!) pour n=0 à ∞.\n① Étape 1 : Identifier les coefficients aₙ.\nLes coefficients aₙ sont donnés par aₙ = 1/n!.\n② Étape 2 : Calculer le rayon de convergence R.\nLe rayon de convergence est R = ∞ car limsup√|aₙ| = 0.\n③ Résultat :\nLa série converge pour tout x ∈ ℝ et représente la fonction exponentielle eˣ."
        },
        {
          type: "example",
          title: "✅ Exemple 2 : Série entière pour la fonction cosinus",
          text: "Contexte :\nLa fonction cosinus peut être exprimée comme une série entière.\nDonnées :\nLa série entière pour cos(x) est ∑((−1)ⁿx²ⁿ/(2ⁿn!)) pour n=0 à ∞.\n① Étape 1 : Identifier les coefficients aₙ.\nLes coefficients aₙ sont donnés par aₙ = ((−1)ⁿ)/(2ⁿn!).\n② Étape 2 : Calculer le rayon de convergence R.\nLe rayon de convergence est R = ∞ car limsup√|aₙ| = 0.\n③ Résultat :\nLa série converge pour tout x ∈ ℝ et représente la fonction cosinus cos(x)."
        },
        {
          type: "demo",
          title: "🔬 Démonstration de la convergence d'une série entière",
          text: "① La convergence d'une série entière est déterminée par le rayon de convergence R.\nLe rayon de convergence est calculé à l'aide de la formule R = 1/limsup√|aₙ|.\n② La série converge absolument et uniformément à l'intérieur du disque de convergence |x−x₀| < R.\nCela signifie que la série peut être dérivée terme à terme et intégrée terme à terme à l'intérieur du disque de convergence.\n③ Conclusion :\nLes séries entières sont des outils puissants pour représenter des fonctions analytiques et résoudre des équations différentielles."
        },
        {
          type: "warning",
          title: "⚠️ Pièges et erreurs fréquentes",
          text: "① Erreur : Confondre le rayon de convergence avec l'intervalle de convergence.\nPourquoi faux : Le rayon de convergence détermine le disque de convergence, mais l'intervalle de convergence peut être plus petit en raison de points de divergence sur le cercle de convergence.\nComment éviter : Vérifier toujours la convergence sur le cercle de convergence.\n② Erreur : Supposer que toutes les séries entières convergent pour tout x.\nPourquoi faux : Certaines séries entières ont un rayon de convergence fini et ne convergent pas pour toutes les valeurs de x.\nComment éviter : Calculer toujours le rayon de convergence avant d'utiliser la série.\n③ Erreur : Oublier que les séries entières peuvent être dérivées et intégrées terme à terme.\nPourquoi faux : La dérivabilité et l'intégrabilité terme à terme sont des propriétés importantes des séries entières.\nComment éviter : Utiliser ces propriétés pour simplifier les calculs et résoudre les équations différentielles."
        },
        {
          type: "technique",
          title: "🛠️ Méthode pour résoudre une équation différentielle avec des séries entières",
          text: "① Écrire l'équation différentielle sous forme standard.\nPar exemple, y'' + p(x)y' + q(x)y = f(x).\n② Supposer une solution sous forme de série entière y(x) = ∑(aₙ(x−x₀)ⁿ).\n③ Dériver la série terme à terme pour obtenir y' et y''.\n④ Substituer y, y' et y'' dans l'équation différentielle.\n⑤ Identifier les coefficients aₙ en comparant les puissances de (x−x₀).\n⑥ Résoudre le système d'équations pour les coefficients aₙ.\n⑦ Vérifier la convergence de la série obtenue."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            question: "La formule de Séries entières et équations différentielles est :",
            answers: [
              "f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R",
              "f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R",
              "2·(f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀)",
              "(f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀)²"
            ],
            correct: 0,
            explanation: "Séries entières et équations différentielles : f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "input",
            question: "Écrire la formule/expression de Séries entières et équations différentielles",
            correct: "f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R",
            explanation: "Séries entières et équations différentielles : f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Séries entières et équations différentielles est défini par :",
            answers: [
              "f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R",
              "Inverse de f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R",
              "2·(f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀)",
              "1/(f(x) = ∑(aₙ(x−x₀)ⁿ) pour )"
            ],
            correct: 0,
            explanation: "Définition : f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Parmi ces expressions, laquelle correspond à Séries entières et équations différentielles ?",
            answers: [
              "f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R",
              "f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R",
              "(f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀)²",
              "1/(f(x) = ∑(aₙ(x−x₀)ⁿ) pour )"
            ],
            correct: 0,
            explanation: "Séries entières et équations différentielles : f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "input",
            question: "Notation standard de Séries entières et équations différentielles ?",
            correct: "f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R",
            explanation: "Séries entières et équations différentielles se note : f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R"
          }
        ],
        [
          {
            type: "mcq",
            question: "Application directe de Séries entières et équations différentielles — f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R — on obtient :",
            answers: [
              "Le résultat en appliquant f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀",
              "Toujours 0",
              "Toujours 1",
              "Indéfini"
            ],
            correct: 0,
            explanation: "On applique directement : f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Condition nécessaire pour appliquer Séries entières et équations différentielles ?",
            answers: [
              "Hypothèses de Séries entières et équations différentielles satisfaites",
              "Aucune condition",
              "Le résultat est positif",
              "Données numériques seules"
            ],
            correct: 0,
            explanation: "Séries entières et équations différentielles requiert ses hypothèses de définition."
          },
          {
            type: "mcq",
            question: "Calculer avec Séries entières et équations différentielles nécessite de :",
            answers: [
              "Appliquer f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R",
              "Mémoriser sans calcul",
              "Approximer",
              "Ignorer les conditions"
            ],
            correct: 0,
            explanation: "Application directe de f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Pour appliquer Séries entières et équations différentielles numériquement, on :",
            answers: [
              "Substitue les valeurs dans f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R",
              "Mémorise sans calcul",
              "Approxime",
              "Utilise une autre formule"
            ],
            correct: 0,
            explanation: "Application numérique : substitution dans f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R."
          },
          {
            type: "mcq",
            question: "La valeur obtenue par Séries entières et équations différentielles dépend de :",
            answers: [
              "Les variables de f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R",
              "Une constante universelle",
              "Rien",
              "La méthode de calcul uniquement"
            ],
            correct: 0,
            explanation: "Séries entières et équations différentielles dépend des variables de f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R"
          }
        ],
        [
          {
            type: "mcq",
            question: "Avant d'appliquer Séries entières et équations différentielles (formule : f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R), on vérifie :",
            answers: [
              "Les hypothèses de définition de Séries entières et équations différentielles",
              "Que le résultat est positif",
              "Rien de particulier",
              "La mémoire de l'élève"
            ],
            correct: 0,
            explanation: "Toujours vérifier les conditions de f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Domaine de définition de Séries entières et équations différentielles (f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀) ?",
            answers: [
              "Valeurs pour lesquelles f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀ est défini",
              "Tous les réels",
              "Aucun réel",
              "Entiers seulement"
            ],
            correct: 0,
            explanation: "Séries entières et équations différentielles n'est défini que sur son domaine."
          },
          {
            type: "mcq",
            question: "Séries entières et équations différentielles ne s'applique pas quand :",
            answers: [
              "Les hypothèses ne sont pas satisfaites",
              "Le résultat est non nul",
              "On utilise la formule correcte",
              "n est pair"
            ],
            correct: 0,
            explanation: "f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R requiert des conditions précises"
          },
          {
            type: "mcq",
            question: "Comment interpréter le signe du résultat de Séries entières et équations différentielles ?",
            answers: [
              "Selon les conditions de f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R",
              "Toujours positif",
              "Ignorer le signe",
              "Valeur absolue uniquement"
            ],
            correct: 0,
            explanation: "Le signe s'interprète selon les conditions de Séries entières et équations différentielles."
          },
          {
            type: "mcq",
            question: "Vérification du résultat obtenu par Séries entières et équations différentielles :",
            answers: [
              "Réinjecter dans f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R et vérifier",
              "Prendre la valeur absolue",
              "Diviser par 2",
              "Ignorer les unités"
            ],
            correct: 0,
            explanation: "La vérification passe par f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R"
          }
        ],
        [
          {
            type: "mcq",
            question: "Stratégie pour résoudre un exercice sur Séries entières et équations différentielles :",
            answers: [
              "Identifier → vérifier hypothèses → appliquer f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀ → interpréter",
              "Appliquer sans analyse",
              "Tâtonner",
              "Ignorer les conditions"
            ],
            correct: 0,
            explanation: "Méthode : identification → conditions → f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R → interprétation"
          },
          {
            type: "mcq",
            question: "Calculer Séries entières et équations différentielles pour des valeurs spécifiques : méthode ?",
            answers: [
              "Substituer dans f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R",
              "Lire dans un tableau",
              "Approximer",
              "Utiliser une calculatrice sans formule"
            ],
            correct: 0,
            explanation: "Calcul direct : substitution dans f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R."
          },
          {
            type: "mcq",
            question: "Comment justifier formellement Séries entières et équations différentielles ?",
            answers: [
              "Citer la définition et la propriété f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R",
              "Admettre",
              "Intuition",
              "Exemple seul"
            ],
            correct: 0,
            explanation: "Justification par f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Pour résoudre une équation avec Séries entières et équations différentielles (f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R), on :",
            answers: [
              "Isole l'inconnue dans f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R",
              "Utilise une approximation",
              "Mémorise le résultat sans calcul",
              "Remplace par une formule voisine"
            ],
            correct: 0,
            explanation: "Résolution : isoler l'inconnue dans f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R."
          },
          {
            type: "mcq",
            question: "Séries entières et équations différentielles s'utilise en combinaison avec :",
            answers: [
              "D'autres propriétés du même domaine",
              "Uniquement seul",
              "N'importe quelle formule",
              "Des outils non mathématiques"
            ],
            correct: 0,
            explanation: "Séries entières et équations différentielles s'intègre dans un raisonnement plus large"
          }
        ],
        [
          {
            type: "mcq",
            question: "Quel contre-exemple montre les limites de Séries entières et équations différentielles ?",
            answers: [
              "Cas où les hypothèses de f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R ne sont pas satisfaites",
              "Cas où f=0",
              "Cas où n=0",
              "Cas général"
            ],
            correct: 0,
            explanation: "Séries entières et équations différentielles échoue quand ses conditions ne tiennent pas"
          },
          {
            type: "mcq",
            question: "Dans quel cas Séries entières et équations différentielles ne s'applique-t-il pas ?",
            answers: [
              "Quand les hypothèses de f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R ne sont pas satisfaites",
              "Jamais, il s'applique toujours",
              "Quand le résultat est nul",
              "Quand n est pair"
            ],
            correct: 0,
            explanation: "Séries entières et équations différentielles échoue si ses conditions ne tiennent pas."
          },
          {
            type: "mcq",
            question: "Séries entières et équations différentielles se distingue d'une notion voisine par :",
            answers: [
              "La formule exacte f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R",
              "Le domaine d'utilisation uniquement",
              "Le nom",
              "Aucune différence"
            ],
            correct: 0,
            explanation: "La différence est dans la définition précise : f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Généralisation de Séries entières et équations différentielles :",
            answers: [
              "Extension conservant f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R",
              "Abandon de toute formule",
              "Approximation",
              "Cas particulier uniquement"
            ],
            correct: 0,
            explanation: "Généraliser Séries entières et équations différentielles : conserver la structure de f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Formule de Séries entières et équations différentielles dans un cas limite :",
            answers: [
              "f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R",
              "2·(f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀)",
              "1/(f(x) = ∑(aₙ(x−x₀)ⁿ) pour )",
              "Indéfini"
            ],
            correct: 0,
            explanation: "Cas limite : f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R."
          }
        ],
        [
          {
            type: "mcq",
            question: "Démonstration d'une propriété de Séries entières et équations différentielles — point de départ ?",
            answers: [
              "La définition f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R",
              "Un exemple numérique",
              "Une intuition géométrique",
              "Une approximation"
            ],
            correct: 0,
            explanation: "Toute preuve commence par la définition : f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R."
          },
          {
            type: "mcq",
            question: "Séries entières et équations différentielles dans un contexte multi-notions :",
            answers: [
              "Articulation de f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R avec d'autres résultats",
              "Utilisation seule de la formule",
              "Ignorance des interactions",
              "Simplification abusive"
            ],
            correct: 0,
            explanation: "Séries entières et équations différentielles s'intègre dans un réseau de résultats"
          },
          {
            type: "mcq",
            question: "Généralisation de Séries entières et équations différentielles :",
            answers: [
              "Extension conservant la structure de f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R",
              "Abandon de la formule",
              "Cas particulier seulement",
              "Approximation"
            ],
            correct: 0,
            explanation: "Séries entières et équations différentielles se généralise en conservant ses propriétés essentielles."
          },
          {
            type: "mcq",
            question: "Preuve de Séries entières et équations différentielles : point de départ ?",
            answers: [
              "La définition f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R",
              "Un exemple",
              "Une intuition",
              "Une approximation"
            ],
            correct: 0,
            explanation: "Toute preuve commence par la définition : f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Expression de Séries entières et équations différentielles dans un cadre plus général :",
            answers: [
              "f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R",
              "Forme approchée de f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R",
              "Cas dégénéré",
              "Formulation circulaire"
            ],
            correct: 0,
            explanation: "Généralisation : f(x) = ∑(aₙ(x−x₀)ⁿ) pour |x−x₀| < R."
          }
        ]
      ],
      isManipulation: false,
      _mistralLesson: true
    },
    {
      id: "produit-de-cauchy-de-series-entieres",
      label: "Produit de Cauchy de séries entières",
      lesson: {
        formula: "∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ)",
        text: "Le produit de Cauchy de séries entières permet de multiplier deux séries entières en générant une nouvelle série entière. Cette opération est fondamentale en analyse complexe et en théorie des fonctions analytiques. Elle permet de combiner des développements en série pour obtenir de nouvelles fonctions analytiques. Le produit de Cauchy est également utilisé dans la théorie des équations différentielles et dans l'étude des singularités.",
        example: "Considérons les séries entières f(x) = ∑(n=0 à ∞)(xⁿ/2ⁿ) et g(x) = ∑(n=0 à ∞)(xⁿ/3ⁿ). Calculons le produit de Cauchy pour x = 0.5.\n① f(0.5) = ∑(n=0 à ∞)(0.5ⁿ/2ⁿ) = ∑(n=0 à ∞)(0.25)ⁿ = 1/(1-0.25) = 4/3 ≈ 1.333\n② g(0.5) = ∑(n=0 à ∞)(0.5ⁿ/3ⁿ) = ∑(n=0 à ∞)(1/6)ⁿ = 1/(1-1/6) = 6/5 = 1.2\n③ Le produit de Cauchy h(x) = f(x)*g(x) = (4/3)*(6/5) = 24/15 = 1.6"
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Définition du produit de Cauchy de séries entières",
          text: "Le produit de Cauchy de deux séries entières ∑(aₙxⁿ) et ∑(bₙxⁿ) est une nouvelle série entière ∑(cₙxⁿ) où les coefficients cₙ sont définis par la convolution des coefficients aₙ et bₙ. Plus précisément, cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ). Cette opération est bien définie si les séries convergent absolument dans un certain rayon de convergence."
        },
        {
          type: "formula",
          title: "🔑 Formule du produit de Cauchy",
          formula: "∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ)",
          text: "La formule du produit de Cauchy montre comment multiplier deux séries entières en utilisant la convolution des coefficients. Chaque coefficient cₙ de la série résultante est la somme des produits des coefficients aₖ et bₙ₋ₖ pour k allant de 0 à n. Cette opération est similaire à la multiplication des polynômes."
        },
        {
          type: "graph",
          title: "📊 Représentation graphique du produit de Cauchy",
          text: "Ce graphique illustre le processus de multiplication de deux séries entières en utilisant le produit de Cauchy. Les points bleus représentent les coefficients des séries originales, tandis que les points jaunes montrent les coefficients résultants de la convolution. Les lignes vertes indiquent les paires de coefficients qui contribuent à chaque coefficient résultant.",
          svgContent: "<svg viewBox=\"0 0 340 220\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"340\" height=\"220\" fill=\"#0f172a\" rx=\"6\"/>\n  <g fill=\"#e2e8f0\">\n    <text x=\"20\" y=\"30\" font-family=\"monospace\" font-size=\"12\">Série f(x) = ∑(xⁿ/2ⁿ)</text>\n    <text x=\"20\" y=\"60\" font-family=\"monospace\" font-size=\"12\">Série g(x) = ∑(xⁿ/3ⁿ)</text>\n    <text x=\"20\" y=\"90\" font-family=\"monospace\" font-size=\"12\">Produit h(x) = f(x)*g(x)</text>\n  </g>\n  <g fill=\"#38bdf8\">\n    <path d=\"M 50,150 L 100,100 L 150,150\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n    <path d=\"M 150,150 L 200,100 L 250,150\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n    <path d=\"M 250,150 L 300,100\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n  </g>\n  <g fill=\"#fbbf24\">\n    <circle cx=\"50\" cy=\"150\" r=\"3\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n    <circle cx=\"100\" cy=\"100\" r=\"3\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n    <circle cx=\"150\" cy=\"150\" r=\"3\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n    <circle cx=\"200\" cy=\"100\" r=\"3\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n    <circle cx=\"250\" cy=\"150\" r=\"3\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n    <circle cx=\"300\" cy=\"100\" r=\"3\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n  </g>\n  <g fill=\"#34d399\">\n    <text x=\"50\" y=\"140\" font-family=\"monospace\" font-size=\"10\">a₀</text>\n    <text x=\"100\" y=\"90\" font-family=\"monospace\" font-size=\"10\">a₁</text>\n    <text x=\"150\" y=\"140\" font-family=\"monospace\" font-size=\"10\">a₂</text>\n    <text x=\"200\" y=\"90\" font-family=\"monospace\" font-size=\"10\">a₃</text>\n    <text x=\"250\" y=\"140\" font-family=\"monospace\" font-size=\"10\">a₄</text>\n    <text x=\"300\" y=\"90\" font-family=\"monospace\" font-size=\"10\">a₅</text>\n  </g>\n</svg>",
          caption: "Représentation schématique du produit de Cauchy de deux séries entières"
        },
        {
          type: "example",
          title: "✅ Exemple 1 : Produit de Cauchy de deux séries géométriques",
          text: "Considérons les séries entières f(x) = ∑(n=0 à ∞)(xⁿ/2ⁿ) et g(x) = ∑(n=0 à ∞)(xⁿ/3ⁿ). Calculons le produit de Cauchy pour x = 0.5.\nContexte :\nNous voulons calculer le produit de Cauchy des séries f(x) et g(x) évaluées en x = 0.5.\nDonnées :\nf(x) = ∑(n=0 à ∞)(xⁿ/2ⁿ) = ∑(n=0 à ∞)(0.5ⁿ/2ⁿ) = ∑(n=0 à ∞)(0.25)ⁿ = 1/(1-0.25) = 4/3 ≈ 1.333\ng(x) = ∑(n=0 à ∞)(xⁿ/3ⁿ) = ∑(n=0 à ∞)(0.5ⁿ/3ⁿ) = ∑(n=0 à ∞)(1/6)ⁿ = 1/(1-1/6) = 6/5 = 1.2\n① Étape 1 : Calculons les coefficients cₙ pour n = 0 à 2.\nc₀ = a₀b₀ = 1*1 = 1\nc₁ = a₀b₁ + a₁b₀ = 1*1/3 + 1/2*1 = 1/3 + 1/2 = 5/6 ≈ 0.833\nc₂ = a₀b₂ + a₁b₁ + a₂b₀ = 1*1/9 + 1/2*1/3 + 1/4*1 = 1/9 + 1/6 + 1/4 = 13/36 ≈ 0.361\n② Étape 2 : Calculons la série résultante h(x) = ∑(n=0 à ∞)(cₙxⁿ).\nh(0.5) = c₀ + c₁*0.5 + c₂*0.25 = 1 + 0.833*0.5 + 0.361*0.25 ≈ 1 + 0.4165 + 0.09025 ≈ 1.50675\n③ Résultat :\nLe produit de Cauchy h(x) évalué en x = 0.5 est approximativement 1.50675."
        },
        {
          type: "example",
          title: "✅ Exemple 2 : Produit de Cauchy de séries exponentielles",
          text: "Considérons les séries entières f(x) = ∑(n=0 à ∞)(xⁿ/n!) et g(x) = ∑(n=0 à ∞)(xⁿ/n!). Calculons le produit de Cauchy pour x = 1.\nContexte :\nNous voulons calculer le produit de Cauchy des séries f(x) et g(x) évaluées en x = 1.\nDonnées :\nf(x) = ∑(n=0 à ∞)(xⁿ/n!) = e^x\ng(x) = ∑(n=0 à ∞)(xⁿ/n!) = e^x\n① Étape 1 : Calculons les coefficients cₙ pour n = 0 à 2.\nc₀ = a₀b₀ = 1*1 = 1\nc₁ = a₀b₁ + a₁b₀ = 1*1 + 1*1 = 2\nc₂ = a₀b₂ + a₁b₁ + a₂b₀ = 1*1/2 + 1*1 + 1/2*1 = 1/2 + 1 + 1/2 = 2\n② Étape 2 : Calculons la série résultante h(x) = ∑(n=0 à ∞)(cₙxⁿ).\nh(1) = c₀ + c₁*1 + c₂*1 = 1 + 2*1 + 2*1 = 1 + 2 + 2 = 5\n③ Résultat :\nLe produit de Cauchy h(x) évalué en x = 1 est 5."
        },
        {
          type: "demo",
          title: "🔬 Démonstration de la convergence du produit de Cauchy",
          text: "① Pour démontrer la convergence du produit de Cauchy, nous devons montrer que la série résultante ∑(cₙxⁿ) converge absolument dans un certain rayon de convergence.\n② Supposons que les séries originales ∑(aₙxⁿ) et ∑(bₙxⁿ) convergent absolument pour |x| < R. Cela signifie que les séries ∑|aₙxⁿ| et ∑|bₙxⁿ| convergent pour |x| < R.\n③ En utilisant le théorème de Cauchy sur les séries, nous pouvons montrer que la série ∑(cₙxⁿ) converge absolument pour |x| < R. En effet, pour |x| < R, nous avons |cₙxⁿ| ≤ ∑(k=0 à n)(|aₖxⁿ| |bₙ₋ₖxⁿ|) = ∑(k=0 à n)(|aₖxⁿ| |bₙ₋ₖxⁿ|).\n④ En utilisant le théorème de comparaison, nous pouvons conclure que la série ∑(cₙxⁿ) converge absolument pour |x| < R."
        },
        {
          type: "warning",
          title: "⚠️ Erreurs courantes dans l'application du produit de Cauchy",
          text: "① Erreur : Supposer que le produit de Cauchy est toujours commutatif sans vérifier la convergence.\n— Pourquoi faux : La commutativité du produit de Cauchy dépend de la convergence absolue des séries originales. Si les séries ne convergent pas absolument, le produit peut ne pas être commutatif.\n— Comment éviter : Vérifier toujours la convergence absolue des séries originales avant d'appliquer le produit de Cauchy.\n② Erreur : Ignorer le rayon de convergence du produit de Cauchy.\n— Pourquoi faux : Le rayon de convergence du produit de Cauchy peut être plus petit que le minimum des rayons de convergence des séries originales.\n— Comment éviter : Calculer le rayon de convergence du produit de Cauchy en utilisant le théorème de Cauchy-Hadamard.\n③ Erreur : Utiliser le produit de Cauchy pour des séries qui ne sont pas absolument convergentes.\n— Pourquoi faux : Le produit de Cauchy n'est pas bien défini pour des séries qui ne convergent pas absolument.\n— Comment éviter : Vérifier toujours la convergence absolue des séries avant d'appliquer le produit de Cauchy."
        },
        {
          type: "technique",
          title: "🛠️ Méthode pour calculer le produit de Cauchy de deux séries entières",
          text: "① Étape 1 : Vérifiez la convergence absolue des séries originales.\n— Assurez-vous que les séries ∑(aₙxⁿ) et ∑(bₙxⁿ) convergent absolument pour |x| < R.\n② Étape 2 : Calculez les coefficients cₙ.\n— Utilisez la formule cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ) pour calculer les coefficients de la série résultante.\n③ Étape 3 : Déterminez le rayon de convergence du produit de Cauchy.\n— Utilisez le théorème de Cauchy-Hadamard pour calculer le rayon de convergence de la série résultante.\n④ Étape 4 : Évaluez la série résultante.\n— Utilisez la série résultante ∑(cₙxⁿ) pour évaluer la fonction résultante dans le domaine de convergence."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            question: "La formule de Produit de Cauchy de séries entières est :",
            answers: [
              "∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ)",
              "∑(aₙxⁿ) + ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(a",
              "2·(∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) av)",
              "(∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) av)²"
            ],
            correct: 0,
            explanation: "Produit de Cauchy de séries entières : ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ)"
          },
          {
            type: "input",
            question: "Écrire la formule/expression de Produit de Cauchy de séries entières",
            correct: "∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ)",
            explanation: "Produit de Cauchy de séries entières : ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ)"
          },
          {
            type: "mcq",
            question: "Produit de Cauchy de séries entières est défini par :",
            answers: [
              "∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ)",
              "Inverse de ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(",
              "2·(∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) av)",
              "1/(∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙx)"
            ],
            correct: 0,
            explanation: "Définition : ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ)"
          },
          {
            type: "mcq",
            question: "Parmi ces expressions, laquelle correspond à Produit de Cauchy de séries entières ?",
            answers: [
              "∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ)",
              "∑(aₙxⁿ) + ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(a",
              "(∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) av)²",
              "1/(∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙx)"
            ],
            correct: 0,
            explanation: "Produit de Cauchy de séries entières : ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ)"
          },
          {
            type: "input",
            question: "Notation standard de Produit de Cauchy de séries entières ?",
            correct: "∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ)",
            explanation: "Produit de Cauchy de séries entières se note : ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ)"
          }
        ],
        [
          {
            type: "mcq",
            question: "Application directe de Produit de Cauchy de séries entières — ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑( — on obtient :",
            answers: [
              "Le résultat en appliquant ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) av",
              "Toujours 0",
              "Toujours 1",
              "Indéfini"
            ],
            correct: 0,
            explanation: "On applique directement : ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ)"
          },
          {
            type: "mcq",
            question: "Condition nécessaire pour appliquer Produit de Cauchy de séries entières ?",
            answers: [
              "Hypothèses de Produit de Cauchy de séries entières satisfaites",
              "Aucune condition",
              "Le résultat est positif",
              "Données numériques seules"
            ],
            correct: 0,
            explanation: "Produit de Cauchy de séries entières requiert ses hypothèses de définition."
          },
          {
            type: "mcq",
            question: "Calculer avec Produit de Cauchy de séries entières nécessite de :",
            answers: [
              "Appliquer ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(",
              "Mémoriser sans calcul",
              "Approximer",
              "Ignorer les conditions"
            ],
            correct: 0,
            explanation: "Application directe de ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ)"
          },
          {
            type: "mcq",
            question: "Pour appliquer Produit de Cauchy de séries entières numériquement, on :",
            answers: [
              "Substitue les valeurs dans ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(",
              "Mémorise sans calcul",
              "Approxime",
              "Utilise une autre formule"
            ],
            correct: 0,
            explanation: "Application numérique : substitution dans ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ)."
          },
          {
            type: "mcq",
            question: "La valeur obtenue par Produit de Cauchy de séries entières dépend de :",
            answers: [
              "Les variables de ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(",
              "Une constante universelle",
              "Rien",
              "La méthode de calcul uniquement"
            ],
            correct: 0,
            explanation: "Produit de Cauchy de séries entières dépend des variables de ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ)"
          }
        ],
        [
          {
            type: "mcq",
            question: "Avant d'appliquer Produit de Cauchy de séries entières (formule : ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(), on vérifie :",
            answers: [
              "Les hypothèses de définition de Produit de Cauchy de séries entières",
              "Que le résultat est positif",
              "Rien de particulier",
              "La mémoire de l'élève"
            ],
            correct: 0,
            explanation: "Toujours vérifier les conditions de ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ)"
          },
          {
            type: "mcq",
            question: "Domaine de définition de Produit de Cauchy de séries entières (∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) av) ?",
            answers: [
              "Valeurs pour lesquelles ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) av est défini",
              "Tous les réels",
              "Aucun réel",
              "Entiers seulement"
            ],
            correct: 0,
            explanation: "Produit de Cauchy de séries entières n'est défini que sur son domaine."
          },
          {
            type: "mcq",
            question: "Produit de Cauchy de séries entières ne s'applique pas quand :",
            answers: [
              "Les hypothèses ne sont pas satisfaites",
              "Le résultat est non nul",
              "On utilise la formule correcte",
              "n est pair"
            ],
            correct: 0,
            explanation: "∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ) requiert des conditions précises"
          },
          {
            type: "mcq",
            question: "Comment interpréter le signe du résultat de Produit de Cauchy de séries entières ?",
            answers: [
              "Selon les conditions de ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(",
              "Toujours positif",
              "Ignorer le signe",
              "Valeur absolue uniquement"
            ],
            correct: 0,
            explanation: "Le signe s'interprète selon les conditions de Produit de Cauchy de séries entières."
          },
          {
            type: "mcq",
            question: "Vérification du résultat obtenu par Produit de Cauchy de séries entières :",
            answers: [
              "Réinjecter dans ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑( et vérifier",
              "Prendre la valeur absolue",
              "Diviser par 2",
              "Ignorer les unités"
            ],
            correct: 0,
            explanation: "La vérification passe par ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ)"
          }
        ],
        [
          {
            type: "mcq",
            question: "Stratégie pour résoudre un exercice sur Produit de Cauchy de séries entières :",
            answers: [
              "Identifier → vérifier hypothèses → appliquer ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) av → interpréter",
              "Appliquer sans analyse",
              "Tâtonner",
              "Ignorer les conditions"
            ],
            correct: 0,
            explanation: "Méthode : identification → conditions → ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ) → interprétation"
          },
          {
            type: "mcq",
            question: "Calculer Produit de Cauchy de séries entières pour des valeurs spécifiques : méthode ?",
            answers: [
              "Substituer dans ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(",
              "Lire dans un tableau",
              "Approximer",
              "Utiliser une calculatrice sans formule"
            ],
            correct: 0,
            explanation: "Calcul direct : substitution dans ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ)."
          },
          {
            type: "mcq",
            question: "Comment justifier formellement Produit de Cauchy de séries entières ?",
            answers: [
              "Citer la définition et la propriété ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(",
              "Admettre",
              "Intuition",
              "Exemple seul"
            ],
            correct: 0,
            explanation: "Justification par ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ)"
          },
          {
            type: "mcq",
            question: "Pour résoudre une équation avec Produit de Cauchy de séries entières (∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ), on :",
            answers: [
              "Isole l'inconnue dans ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ",
              "Utilise une approximation",
              "Mémorise le résultat sans calcul",
              "Remplace par une formule voisine"
            ],
            correct: 0,
            explanation: "Résolution : isoler l'inconnue dans ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ)."
          },
          {
            type: "mcq",
            question: "Produit de Cauchy de séries entières s'utilise en combinaison avec :",
            answers: [
              "D'autres propriétés du même domaine",
              "Uniquement seul",
              "N'importe quelle formule",
              "Des outils non mathématiques"
            ],
            correct: 0,
            explanation: "Produit de Cauchy de séries entières s'intègre dans un raisonnement plus large"
          }
        ],
        [
          {
            type: "mcq",
            question: "Quel contre-exemple montre les limites de Produit de Cauchy de séries entières ?",
            answers: [
              "Cas où les hypothèses de ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑( ne sont pas satisfaites",
              "Cas où f=0",
              "Cas où n=0",
              "Cas général"
            ],
            correct: 0,
            explanation: "Produit de Cauchy de séries entières échoue quand ses conditions ne tiennent pas"
          },
          {
            type: "mcq",
            question: "Dans quel cas Produit de Cauchy de séries entières ne s'applique-t-il pas ?",
            answers: [
              "Quand les hypothèses de ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ ne sont pas satisfaites",
              "Jamais, il s'applique toujours",
              "Quand le résultat est nul",
              "Quand n est pair"
            ],
            correct: 0,
            explanation: "Produit de Cauchy de séries entières échoue si ses conditions ne tiennent pas."
          },
          {
            type: "mcq",
            question: "Produit de Cauchy de séries entières se distingue d'une notion voisine par :",
            answers: [
              "La formule exacte ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(a",
              "Le domaine d'utilisation uniquement",
              "Le nom",
              "Aucune différence"
            ],
            correct: 0,
            explanation: "La différence est dans la définition précise : ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ)"
          },
          {
            type: "mcq",
            question: "Généralisation de Produit de Cauchy de séries entières :",
            answers: [
              "Extension conservant ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(",
              "Abandon de toute formule",
              "Approximation",
              "Cas particulier uniquement"
            ],
            correct: 0,
            explanation: "Généraliser Produit de Cauchy de séries entières : conserver la structure de ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ)"
          },
          {
            type: "mcq",
            question: "Formule de Produit de Cauchy de séries entières dans un cas limite :",
            answers: [
              "∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ)",
              "2·(∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) av)",
              "1/(∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙx)",
              "Indéfini"
            ],
            correct: 0,
            explanation: "Cas limite : ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ)."
          }
        ],
        [
          {
            type: "mcq",
            question: "Démonstration d'une propriété de Produit de Cauchy de séries entières — point de départ ?",
            answers: [
              "La définition ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ",
              "Un exemple numérique",
              "Une intuition géométrique",
              "Une approximation"
            ],
            correct: 0,
            explanation: "Toute preuve commence par la définition : ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ)."
          },
          {
            type: "mcq",
            question: "Produit de Cauchy de séries entières dans un contexte multi-notions :",
            answers: [
              "Articulation de ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑( avec d'autres résultats",
              "Utilisation seule de la formule",
              "Ignorance des interactions",
              "Simplification abusive"
            ],
            correct: 0,
            explanation: "Produit de Cauchy de séries entières s'intègre dans un réseau de résultats"
          },
          {
            type: "mcq",
            question: "Généralisation de Produit de Cauchy de séries entières :",
            answers: [
              "Extension conservant la structure de ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(",
              "Abandon de la formule",
              "Cas particulier seulement",
              "Approximation"
            ],
            correct: 0,
            explanation: "Produit de Cauchy de séries entières se généralise en conservant ses propriétés essentielles."
          },
          {
            type: "mcq",
            question: "Preuve de Produit de Cauchy de séries entières : point de départ ?",
            answers: [
              "La définition ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(a",
              "Un exemple",
              "Une intuition",
              "Une approximation"
            ],
            correct: 0,
            explanation: "Toute preuve commence par la définition : ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ)"
          },
          {
            type: "mcq",
            question: "Expression de Produit de Cauchy de séries entières dans un cadre plus général :",
            answers: [
              "∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ)",
              "Forme approchée de ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ",
              "Cas dégénéré",
              "Formulation circulaire"
            ],
            correct: 0,
            explanation: "Généralisation : ∑(aₙxⁿ) * ∑(bₙxⁿ) = ∑(cₙxⁿ) avec cₙ = ∑(k=0 à n)(aₖbₙ₋ₖ)."
          }
        ]
      ],
      isManipulation: false,
      _mistralLesson: true
    },
    {
      id: "series-entieres-et-integrales",
      label: "Séries entières et intégrales",
      lesson: {
        formula: "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
        text: "Une série entière est une série de fonctions dont les termes sont des polynômes. Elle converge absolument et uniformément dans son disque de convergence. Les séries entières sont fondamentales en analyse complexe et en physique mathématique pour représenter des fonctions analytiques. Elles permettent de résoudre des équations différentielles et d'étudier des phénomènes oscillatoires.",
        example: "Exemple : Calcul de la série entière de la fonction exponentielle f(x) = eˣ autour de x₀ = 0.\nDonnées : f(x) = eˣ, x₀ = 0\n① Étape 1 : Développons eˣ en série entière : eˣ = Σ (xⁿ/n!) pour n=0 à ∞\n② Étape 2 : Calculons les coefficients aₙ : aₙ = 1/n!\n③ Résultat : eˣ = Σ (xⁿ/n!) pour |x| < ∞"
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Définition d'une série entière",
          text: "Une série entière est une série de la forme f(x) = Σ (aₙ (x−x₀)ⁿ), où (aₙ) est une suite de coefficients réels ou complexes, et x₀ est un point de convergence. Le rayon de convergence R est défini comme R = 1/limsup √|aₙ|. La série converge absolument et uniformément dans le disque de convergence |x−x₀| < R."
        },
        {
          type: "formula",
          title: "🔑 Formule du rayon de convergence",
          formula: "R = 1/limsup √|aₙ|",
          text: "Le rayon de convergence R d'une série entière est donné par la formule R = 1/limsup √|aₙ|. Cette formule permet de déterminer le domaine de convergence de la série entière. Le rayon de convergence est un concept clé en analyse complexe, car il détermine la région dans laquelle la série entière représente une fonction analytique."
        },
        {
          type: "graph",
          title: "📊 Représentation graphique d'une série entière",
          text: "Le graphique représente le disque de convergence d'une série entière autour du point x₀. La courbe en pointillé montre la frontière du disque de convergence, et les points marqués indiquent les limites du domaine de convergence. Ce graphique illustre comment la série entière converge dans un certain intervalle autour de x₀.",
          svgContent: "<svg viewBox=\"0 0 340 220\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"340\" height=\"220\" fill=\"#0f172a\" rx=\"6\"/><path d=\"M 50,110 L 290,110\" stroke=\"#38bdf8\" stroke-width=\"2\"/><path d=\"M 50,110 L 50,90\" stroke=\"#38bdf8\" stroke-width=\"2\"/><path d=\"M 50,110 L 50,130\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"50\" y=\"80\" font-family=\"monospace\" font-size=\"12\" fill=\"#e2e8f0\">x₀</text><text x=\"50\" y=\"140\" font-family=\"monospace\" font-size=\"12\" fill=\"#e2e8f0\">x₀ + R</text><circle cx=\"50\" cy=\"110\" r=\"3\" fill=\"#34d399\"/><circle cx=\"290\" cy=\"110\" r=\"3\" fill=\"#34d399\"/><path d=\"M 50,110 Q 120,50 190,110 Q 260,170 290,110\" stroke=\"#fbbf24\" stroke-width=\"2\" fill=\"none\"/><text x=\"170\" y=\"190\" font-family=\"monospace\" font-size=\"12\" fill=\"#e2e8f0\">Disque de convergence</text></svg>",
          caption: "Disque de convergence d'une série entière"
        },
        {
          type: "example",
          title: "✅ Exemple de calcul du rayon de convergence",
          text: "Contexte : Calculons le rayon de convergence de la série entière f(x) = Σ (n! xⁿ) pour n=0 à ∞.\nDonnées : aₙ = n!\n① Étape 1 : Calculons limsup √|aₙ| = limsup √(n!) = ∞\n② Étape 2 : Le rayon de convergence R est donné par R = 1/limsup √|aₙ| = 0\n③ Résultat : La série converge uniquement en x = 0, c'est-à-dire R = 0."
        },
        {
          type: "example",
          title: "✅ Exemple de série entière convergente",
          text: "Contexte : Calculons le rayon de convergence de la série entière f(x) = Σ (xⁿ/n!) pour n=0 à ∞.\nDonnées : aₙ = 1/n!\n① Étape 1 : Calculons limsup √|aₙ| = limsup √(1/n!) = 0\n② Étape 2 : Le rayon de convergence R est donné par R = 1/limsup √|aₙ| = ∞\n③ Résultat : La série converge pour tout x réel, c'est-à-dire R = ∞."
        },
        {
          type: "demo",
          title: "🔬 Démonstration de la convergence absolue",
          text: "① Soit f(x) = Σ (aₙ (x−x₀)ⁿ) une série entière.\n② Par définition, une série entière converge absolument dans le disque de convergence |x−x₀| < R.\n③ Conclusion : La convergence absolue est une propriété fondamentale des séries entières, car elle garantit que la série représente une fonction analytique dans son disque de convergence."
        },
        {
          type: "warning",
          title: "⚠️ Pièges courants",
          text: "① Erreur : Confondre le rayon de convergence avec le domaine de définition — Pourquoi faux : Le rayon de convergence détermine le disque de convergence, pas nécessairement le domaine de définition de la fonction représentée — Comment éviter : Utiliser la formule R = 1/limsup √|aₙ| pour calculer le rayon de convergence.\n② Erreur : Supposer que toutes les séries entières convergent pour tout x — Pourquoi faux : Certaines séries entières ont un rayon de convergence fini — Comment éviter : Calculer toujours le rayon de convergence avant de conclure sur le domaine de convergence.\n③ Erreur : Négliger la convergence uniforme — Pourquoi faux : La convergence uniforme est cruciale pour les propriétés des séries entières — Comment éviter : Vérifier la convergence uniforme dans le disque de convergence."
        },
        {
          type: "technique",
          title: "🛠️ Méthode de calcul du rayon de convergence",
          text: "① Calculer les coefficients aₙ de la série entière.\n② Déterminer limsup √|aₙ|.\n③ Appliquer la formule R = 1/limsup √|aₙ| pour trouver le rayon de convergence.\n④ Vérifier la convergence absolue et uniforme dans le disque de convergence |x−x₀| < R."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            question: "La formule de Séries entières et intégrales est :",
            answers: [
              "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "2·(f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−)",
              "(f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−)²"
            ],
            correct: 0,
            explanation: "Séries entières et intégrales : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "input",
            question: "Écrire la formule/expression de Séries entières et intégrales",
            correct: "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
            explanation: "Séries entières et intégrales : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Séries entières et intégrales est défini par :",
            answers: [
              "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Inverse de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "2·(f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−)",
              "1/(f(x) = Σ (aₙ (x−x₀)ⁿ) pou)"
            ],
            correct: 0,
            explanation: "Définition : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Parmi ces expressions, laquelle correspond à Séries entières et intégrales ?",
            answers: [
              "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "(f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−)²",
              "1/(f(x) = Σ (aₙ (x−x₀)ⁿ) pou)"
            ],
            correct: 0,
            explanation: "Séries entières et intégrales : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "input",
            question: "Notation standard de Séries entières et intégrales ?",
            correct: "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
            explanation: "Séries entières et intégrales se note : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          }
        ],
        [
          {
            type: "mcq",
            question: "Application directe de Séries entières et intégrales — f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R — on obtient :",
            answers: [
              "Le résultat en appliquant f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−",
              "Toujours 0",
              "Toujours 1",
              "Indéfini"
            ],
            correct: 0,
            explanation: "On applique directement : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Condition nécessaire pour appliquer Séries entières et intégrales ?",
            answers: [
              "Hypothèses de Séries entières et intégrales satisfaites",
              "Aucune condition",
              "Le résultat est positif",
              "Données numériques seules"
            ],
            correct: 0,
            explanation: "Séries entières et intégrales requiert ses hypothèses de définition."
          },
          {
            type: "mcq",
            question: "Calculer avec Séries entières et intégrales nécessite de :",
            answers: [
              "Appliquer f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Mémoriser sans calcul",
              "Approximer",
              "Ignorer les conditions"
            ],
            correct: 0,
            explanation: "Application directe de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Pour appliquer Séries entières et intégrales numériquement, on :",
            answers: [
              "Substitue les valeurs dans f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Mémorise sans calcul",
              "Approxime",
              "Utilise une autre formule"
            ],
            correct: 0,
            explanation: "Application numérique : substitution dans f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R."
          },
          {
            type: "mcq",
            question: "La valeur obtenue par Séries entières et intégrales dépend de :",
            answers: [
              "Les variables de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Une constante universelle",
              "Rien",
              "La méthode de calcul uniquement"
            ],
            correct: 0,
            explanation: "Séries entières et intégrales dépend des variables de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          }
        ],
        [
          {
            type: "mcq",
            question: "Avant d'appliquer Séries entières et intégrales (formule : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R), on vérifie :",
            answers: [
              "Les hypothèses de définition de Séries entières et intégrales",
              "Que le résultat est positif",
              "Rien de particulier",
              "La mémoire de l'élève"
            ],
            correct: 0,
            explanation: "Toujours vérifier les conditions de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Domaine de définition de Séries entières et intégrales (f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−) ?",
            answers: [
              "Valeurs pour lesquelles f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x− est défini",
              "Tous les réels",
              "Aucun réel",
              "Entiers seulement"
            ],
            correct: 0,
            explanation: "Séries entières et intégrales n'est défini que sur son domaine."
          },
          {
            type: "mcq",
            question: "Séries entières et intégrales ne s'applique pas quand :",
            answers: [
              "Les hypothèses ne sont pas satisfaites",
              "Le résultat est non nul",
              "On utilise la formule correcte",
              "n est pair"
            ],
            correct: 0,
            explanation: "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R requiert des conditions précises"
          },
          {
            type: "mcq",
            question: "Comment interpréter le signe du résultat de Séries entières et intégrales ?",
            answers: [
              "Selon les conditions de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Toujours positif",
              "Ignorer le signe",
              "Valeur absolue uniquement"
            ],
            correct: 0,
            explanation: "Le signe s'interprète selon les conditions de Séries entières et intégrales."
          },
          {
            type: "mcq",
            question: "Vérification du résultat obtenu par Séries entières et intégrales :",
            answers: [
              "Réinjecter dans f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R et vérifier",
              "Prendre la valeur absolue",
              "Diviser par 2",
              "Ignorer les unités"
            ],
            correct: 0,
            explanation: "La vérification passe par f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          }
        ],
        [
          {
            type: "mcq",
            question: "Stratégie pour résoudre un exercice sur Séries entières et intégrales :",
            answers: [
              "Identifier → vérifier hypothèses → appliquer f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x− → interpréter",
              "Appliquer sans analyse",
              "Tâtonner",
              "Ignorer les conditions"
            ],
            correct: 0,
            explanation: "Méthode : identification → conditions → f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R → interprétation"
          },
          {
            type: "mcq",
            question: "Calculer Séries entières et intégrales pour des valeurs spécifiques : méthode ?",
            answers: [
              "Substituer dans f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Lire dans un tableau",
              "Approximer",
              "Utiliser une calculatrice sans formule"
            ],
            correct: 0,
            explanation: "Calcul direct : substitution dans f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R."
          },
          {
            type: "mcq",
            question: "Comment justifier formellement Séries entières et intégrales ?",
            answers: [
              "Citer la définition et la propriété f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Admettre",
              "Intuition",
              "Exemple seul"
            ],
            correct: 0,
            explanation: "Justification par f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Pour résoudre une équation avec Séries entières et intégrales (f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| <), on :",
            answers: [
              "Isole l'inconnue dans f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| <",
              "Utilise une approximation",
              "Mémorise le résultat sans calcul",
              "Remplace par une formule voisine"
            ],
            correct: 0,
            explanation: "Résolution : isoler l'inconnue dans f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R."
          },
          {
            type: "mcq",
            question: "Séries entières et intégrales s'utilise en combinaison avec :",
            answers: [
              "D'autres propriétés du même domaine",
              "Uniquement seul",
              "N'importe quelle formule",
              "Des outils non mathématiques"
            ],
            correct: 0,
            explanation: "Séries entières et intégrales s'intègre dans un raisonnement plus large"
          }
        ],
        [
          {
            type: "mcq",
            question: "Quel contre-exemple montre les limites de Séries entières et intégrales ?",
            answers: [
              "Cas où les hypothèses de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R ne sont pas satisfaites",
              "Cas où f=0",
              "Cas où n=0",
              "Cas général"
            ],
            correct: 0,
            explanation: "Séries entières et intégrales échoue quand ses conditions ne tiennent pas"
          },
          {
            type: "mcq",
            question: "Dans quel cas Séries entières et intégrales ne s'applique-t-il pas ?",
            answers: [
              "Quand les hypothèses de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < ne sont pas satisfaites",
              "Jamais, il s'applique toujours",
              "Quand le résultat est nul",
              "Quand n est pair"
            ],
            correct: 0,
            explanation: "Séries entières et intégrales échoue si ses conditions ne tiennent pas."
          },
          {
            type: "mcq",
            question: "Séries entières et intégrales se distingue d'une notion voisine par :",
            answers: [
              "La formule exacte f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Le domaine d'utilisation uniquement",
              "Le nom",
              "Aucune différence"
            ],
            correct: 0,
            explanation: "La différence est dans la définition précise : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Généralisation de Séries entières et intégrales :",
            answers: [
              "Extension conservant f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Abandon de toute formule",
              "Approximation",
              "Cas particulier uniquement"
            ],
            correct: 0,
            explanation: "Généraliser Séries entières et intégrales : conserver la structure de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Formule de Séries entières et intégrales dans un cas limite :",
            answers: [
              "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "2·(f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−)",
              "1/(f(x) = Σ (aₙ (x−x₀)ⁿ) pou)",
              "Indéfini"
            ],
            correct: 0,
            explanation: "Cas limite : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R."
          }
        ],
        [
          {
            type: "mcq",
            question: "Démonstration d'une propriété de Séries entières et intégrales — point de départ ?",
            answers: [
              "La définition f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Un exemple numérique",
              "Une intuition géométrique",
              "Une approximation"
            ],
            correct: 0,
            explanation: "Toute preuve commence par la définition : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R."
          },
          {
            type: "mcq",
            question: "Séries entières et intégrales dans un contexte multi-notions :",
            answers: [
              "Articulation de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R avec d'autres résultats",
              "Utilisation seule de la formule",
              "Ignorance des interactions",
              "Simplification abusive"
            ],
            correct: 0,
            explanation: "Séries entières et intégrales s'intègre dans un réseau de résultats"
          },
          {
            type: "mcq",
            question: "Généralisation de Séries entières et intégrales :",
            answers: [
              "Extension conservant la structure de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Abandon de la formule",
              "Cas particulier seulement",
              "Approximation"
            ],
            correct: 0,
            explanation: "Séries entières et intégrales se généralise en conservant ses propriétés essentielles."
          },
          {
            type: "mcq",
            question: "Preuve de Séries entières et intégrales : point de départ ?",
            answers: [
              "La définition f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Un exemple",
              "Une intuition",
              "Une approximation"
            ],
            correct: 0,
            explanation: "Toute preuve commence par la définition : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Expression de Séries entières et intégrales dans un cadre plus général :",
            answers: [
              "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Forme approchée de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| <",
              "Cas dégénéré",
              "Formulation circulaire"
            ],
            correct: 0,
            explanation: "Généralisation : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R."
          }
        ]
      ],
      isManipulation: false,
      _mistralLesson: true
    },
    {
      id: "series-entieres-et-transformations",
      label: "Séries entières et transformations",
      lesson: {
        formula: "f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0",
        text: "Une série entière est une série de fonctions dont les termes sont des puissances entières d'une variable. Elle converge absolument et uniformément sur tout disque fermé de rayon inférieur à son rayon de convergence R. Les transformations de séries entières permettent d'étendre leur domaine de convergence et d'analyser leur comportement asymptotique.",
        example: "Considérons la série entière f(x) = ∑(n=0 to ∞) (xⁿ)/n! avec c = 0. Pour x = 1, f(1) = e ≈ 2.71828. Pour x = 2, f(2) = e² ≈ 7.38906."
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Définition d'une série entière",
          text: "Une série entière est une série de la forme f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ, où aₙ sont les coefficients de la série, c est le centre de la série, et x est la variable. Le rayon de convergence R est le plus grand rayon pour lequel la série converge absolument pour tout |x - c| < R."
        },
        {
          type: "formula",
          title: "🔑 Formule du rayon de convergence",
          formula: "R = 1 / limsup(√|aₙ|)",
          text: "Le rayon de convergence R d'une série entière est donné par la formule ci-dessus, où limsup désigne la limite supérieure. Cette formule permet de déterminer le domaine de convergence de la série entière."
        },
        {
          type: "graph",
          title: "📊 Graphique de convergence d'une série entière",
          text: "Ce graphique montre le domaine de convergence d'une série entière centrée en c. La série converge absolument et uniformément à l'intérieur du disque de rayon R centré en c.",
          svgContent: "<svg viewBox=\"0 0 340 220\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"340\" height=\"220\" fill=\"#0f172a\" rx=\"6\"/><path d=\"M 50 100 L 290 100\" stroke=\"#38bdf8\" stroke-width=\"2\"/><path d=\"M 50 100 L 50 150\" stroke=\"#38bdf8\" stroke-width=\"2\"/><text x=\"50\" y=\"150\" font-family=\"monospace\" font-size=\"12\" fill=\"#e2e8f0\">c</text><text x=\"150\" y=\"90\" font-family=\"monospace\" font-size=\"12\" fill=\"#e2e8f0\">R</text><circle cx=\"100\" cy=\"100\" r=\"50\" stroke=\"#fbbf24\" stroke-width=\"2\" fill=\"none\"/><text x=\"100\" y=\"100\" font-family=\"monospace\" font-size=\"12\" fill=\"#34d399\">x</text></svg>",
          caption: "Domaine de convergence d'une série entière centrée en c avec rayon R"
        },
        {
          type: "example",
          title: "✅ Exemple de calcul du rayon de convergence",
          text: "Considérons la série entière f(x) = ∑(n=0 to ∞) (xⁿ)/n! avec c = 0. \nDonnées : aₙ = 1/n! \n① Calcul de limsup(√|aₙ|) : limsup(√(1/n!)) = 0 \n② Application de la formule du rayon de convergence : R = 1 / 0 = ∞ \n③ Résultat : La série converge pour tout x ∈ ℝ."
        },
        {
          type: "example",
          title: "✅ Exemple de transformation de série entière",
          text: "Considérons la série entière f(x) = ∑(n=0 to ∞) (xⁿ)/n! avec c = 0. \nDonnées : f(x) = eˣ \n① Transformation : f(x) = eˣ = ∑(n=0 to ∞) (xⁿ)/n! \n② Application de la transformation : f(x + 1) = eˣ⁺¹ = ∑(n=0 to ∞) (x + 1)ⁿ/n! \n③ Résultat : La transformation permet d'étendre le domaine de convergence de la série entière."
        },
        {
          type: "demo",
          title: "🔬 Démonstration de la convergence absolue",
          text: "① Soit f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ une série entière avec rayon de convergence R. \n② Pour tout x tel que |x - c| < R, la série converge absolument. \n③ Conclusion : La convergence absolue garantit que la série entière peut être dérivée terme à terme à l'intérieur de son disque de convergence."
        },
        {
          type: "warning",
          title: "⚠️ Pièges courants",
          text: "① Erreur : Confondre le rayon de convergence avec le domaine de définition. — Pourquoi faux : Le rayon de convergence détermine le domaine de convergence, pas le domaine de définition. — Comment éviter : Utiliser la formule du rayon de convergence pour déterminer le domaine de convergence. \n② Erreur : Penser que toutes les séries entières convergent pour tout x ∈ ℝ. — Pourquoi faux : Le rayon de convergence peut être fini. — Comment éviter : Calculer le rayon de convergence avant d'appliquer la série entière."
        },
        {
          type: "technique",
          title: "🛠️ Méthode de calcul du rayon de convergence",
          text: "① Identifier les coefficients aₙ de la série entière. \n② Calculer limsup(√|aₙ|). \n③ Appliquer la formule R = 1 / limsup(√|aₙ|). \n④ Déterminer le domaine de convergence en fonction de R."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            question: "La formule de Séries entières et transformations est :",
            answers: [
              "f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0",
              "f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0",
              "2·(f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ)",
              "(f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ)²"
            ],
            correct: 0,
            explanation: "Séries entières et transformations : f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0"
          },
          {
            type: "input",
            question: "Écrire la formule/expression de Séries entières et transformations",
            correct: "f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0",
            explanation: "Séries entières et transformations : f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0"
          },
          {
            type: "mcq",
            question: "Séries entières et transformations est défini par :",
            answers: [
              "f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0",
              "Inverse de f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > ",
              "2·(f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ)",
              "1/(f(x) = ∑(n=0 to ∞) aₙ (x )"
            ],
            correct: 0,
            explanation: "Définition : f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0"
          },
          {
            type: "mcq",
            question: "Parmi ces expressions, laquelle correspond à Séries entières et transformations ?",
            answers: [
              "f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0",
              "f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0",
              "(f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ)²",
              "1/(f(x) = ∑(n=0 to ∞) aₙ (x )"
            ],
            correct: 0,
            explanation: "Séries entières et transformations : f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0"
          },
          {
            type: "input",
            question: "Notation standard de Séries entières et transformations ?",
            correct: "f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0",
            explanation: "Séries entières et transformations se note : f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0"
          }
        ],
        [
          {
            type: "mcq",
            question: "Application directe de Séries entières et transformations — f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R >  — on obtient :",
            answers: [
              "Le résultat en appliquant f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ",
              "Toujours 0",
              "Toujours 1",
              "Indéfini"
            ],
            correct: 0,
            explanation: "On applique directement : f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0"
          },
          {
            type: "mcq",
            question: "Condition nécessaire pour appliquer Séries entières et transformations ?",
            answers: [
              "Hypothèses de Séries entières et transformations satisfaites",
              "Aucune condition",
              "Le résultat est positif",
              "Données numériques seules"
            ],
            correct: 0,
            explanation: "Séries entières et transformations requiert ses hypothèses de définition."
          },
          {
            type: "mcq",
            question: "Calculer avec Séries entières et transformations nécessite de :",
            answers: [
              "Appliquer f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > ",
              "Mémoriser sans calcul",
              "Approximer",
              "Ignorer les conditions"
            ],
            correct: 0,
            explanation: "Application directe de f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0"
          },
          {
            type: "mcq",
            question: "Pour appliquer Séries entières et transformations numériquement, on :",
            answers: [
              "Substitue les valeurs dans f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > ",
              "Mémorise sans calcul",
              "Approxime",
              "Utilise une autre formule"
            ],
            correct: 0,
            explanation: "Application numérique : substitution dans f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0."
          },
          {
            type: "mcq",
            question: "La valeur obtenue par Séries entières et transformations dépend de :",
            answers: [
              "Les variables de f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > ",
              "Une constante universelle",
              "Rien",
              "La méthode de calcul uniquement"
            ],
            correct: 0,
            explanation: "Séries entières et transformations dépend des variables de f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0"
          }
        ],
        [
          {
            type: "mcq",
            question: "Avant d'appliquer Séries entières et transformations (formule : f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > ), on vérifie :",
            answers: [
              "Les hypothèses de définition de Séries entières et transformations",
              "Que le résultat est positif",
              "Rien de particulier",
              "La mémoire de l'élève"
            ],
            correct: 0,
            explanation: "Toujours vérifier les conditions de f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0"
          },
          {
            type: "mcq",
            question: "Domaine de définition de Séries entières et transformations (f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ) ?",
            answers: [
              "Valeurs pour lesquelles f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ est défini",
              "Tous les réels",
              "Aucun réel",
              "Entiers seulement"
            ],
            correct: 0,
            explanation: "Séries entières et transformations n'est défini que sur son domaine."
          },
          {
            type: "mcq",
            question: "Séries entières et transformations ne s'applique pas quand :",
            answers: [
              "Les hypothèses ne sont pas satisfaites",
              "Le résultat est non nul",
              "On utilise la formule correcte",
              "n est pair"
            ],
            correct: 0,
            explanation: "f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0 requiert des conditions précises"
          },
          {
            type: "mcq",
            question: "Comment interpréter le signe du résultat de Séries entières et transformations ?",
            answers: [
              "Selon les conditions de f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > ",
              "Toujours positif",
              "Ignorer le signe",
              "Valeur absolue uniquement"
            ],
            correct: 0,
            explanation: "Le signe s'interprète selon les conditions de Séries entières et transformations."
          },
          {
            type: "mcq",
            question: "Vérification du résultat obtenu par Séries entières et transformations :",
            answers: [
              "Réinjecter dans f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R >  et vérifier",
              "Prendre la valeur absolue",
              "Diviser par 2",
              "Ignorer les unités"
            ],
            correct: 0,
            explanation: "La vérification passe par f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0"
          }
        ],
        [
          {
            type: "mcq",
            question: "Stratégie pour résoudre un exercice sur Séries entières et transformations :",
            answers: [
              "Identifier → vérifier hypothèses → appliquer f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ → interpréter",
              "Appliquer sans analyse",
              "Tâtonner",
              "Ignorer les conditions"
            ],
            correct: 0,
            explanation: "Méthode : identification → conditions → f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0 → interprétation"
          },
          {
            type: "mcq",
            question: "Calculer Séries entières et transformations pour des valeurs spécifiques : méthode ?",
            answers: [
              "Substituer dans f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > ",
              "Lire dans un tableau",
              "Approximer",
              "Utiliser une calculatrice sans formule"
            ],
            correct: 0,
            explanation: "Calcul direct : substitution dans f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0."
          },
          {
            type: "mcq",
            question: "Comment justifier formellement Séries entières et transformations ?",
            answers: [
              "Citer la définition et la propriété f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > ",
              "Admettre",
              "Intuition",
              "Exemple seul"
            ],
            correct: 0,
            explanation: "Justification par f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0"
          },
          {
            type: "mcq",
            question: "Pour résoudre une équation avec Séries entières et transformations (f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec), on :",
            answers: [
              "Isole l'inconnue dans f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec",
              "Utilise une approximation",
              "Mémorise le résultat sans calcul",
              "Remplace par une formule voisine"
            ],
            correct: 0,
            explanation: "Résolution : isoler l'inconnue dans f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0."
          },
          {
            type: "mcq",
            question: "Séries entières et transformations s'utilise en combinaison avec :",
            answers: [
              "D'autres propriétés du même domaine",
              "Uniquement seul",
              "N'importe quelle formule",
              "Des outils non mathématiques"
            ],
            correct: 0,
            explanation: "Séries entières et transformations s'intègre dans un raisonnement plus large"
          }
        ],
        [
          {
            type: "mcq",
            question: "Quel contre-exemple montre les limites de Séries entières et transformations ?",
            answers: [
              "Cas où les hypothèses de f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R >  ne sont pas satisfaites",
              "Cas où f=0",
              "Cas où n=0",
              "Cas général"
            ],
            correct: 0,
            explanation: "Séries entières et transformations échoue quand ses conditions ne tiennent pas"
          },
          {
            type: "mcq",
            question: "Dans quel cas Séries entières et transformations ne s'applique-t-il pas ?",
            answers: [
              "Quand les hypothèses de f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec ne sont pas satisfaites",
              "Jamais, il s'applique toujours",
              "Quand le résultat est nul",
              "Quand n est pair"
            ],
            correct: 0,
            explanation: "Séries entières et transformations échoue si ses conditions ne tiennent pas."
          },
          {
            type: "mcq",
            question: "Séries entières et transformations se distingue d'une notion voisine par :",
            answers: [
              "La formule exacte f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0",
              "Le domaine d'utilisation uniquement",
              "Le nom",
              "Aucune différence"
            ],
            correct: 0,
            explanation: "La différence est dans la définition précise : f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0"
          },
          {
            type: "mcq",
            question: "Généralisation de Séries entières et transformations :",
            answers: [
              "Extension conservant f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > ",
              "Abandon de toute formule",
              "Approximation",
              "Cas particulier uniquement"
            ],
            correct: 0,
            explanation: "Généraliser Séries entières et transformations : conserver la structure de f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0"
          },
          {
            type: "mcq",
            question: "Formule de Séries entières et transformations dans un cas limite :",
            answers: [
              "f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0",
              "2·(f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ)",
              "1/(f(x) = ∑(n=0 to ∞) aₙ (x )",
              "Indéfini"
            ],
            correct: 0,
            explanation: "Cas limite : f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0."
          }
        ],
        [
          {
            type: "mcq",
            question: "Démonstration d'une propriété de Séries entières et transformations — point de départ ?",
            answers: [
              "La définition f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0",
              "Un exemple numérique",
              "Une intuition géométrique",
              "Une approximation"
            ],
            correct: 0,
            explanation: "Toute preuve commence par la définition : f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0."
          },
          {
            type: "mcq",
            question: "Séries entières et transformations dans un contexte multi-notions :",
            answers: [
              "Articulation de f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R >  avec d'autres résultats",
              "Utilisation seule de la formule",
              "Ignorance des interactions",
              "Simplification abusive"
            ],
            correct: 0,
            explanation: "Séries entières et transformations s'intègre dans un réseau de résultats"
          },
          {
            type: "mcq",
            question: "Généralisation de Séries entières et transformations :",
            answers: [
              "Extension conservant la structure de f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > ",
              "Abandon de la formule",
              "Cas particulier seulement",
              "Approximation"
            ],
            correct: 0,
            explanation: "Séries entières et transformations se généralise en conservant ses propriétés essentielles."
          },
          {
            type: "mcq",
            question: "Preuve de Séries entières et transformations : point de départ ?",
            answers: [
              "La définition f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0",
              "Un exemple",
              "Une intuition",
              "Une approximation"
            ],
            correct: 0,
            explanation: "Toute preuve commence par la définition : f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0"
          },
          {
            type: "mcq",
            question: "Expression de Séries entières et transformations dans un cadre plus général :",
            answers: [
              "f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0",
              "Forme approchée de f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec",
              "Cas dégénéré",
              "Formulation circulaire"
            ],
            correct: 0,
            explanation: "Généralisation : f(x) = ∑(n=0 to ∞) aₙ (x - c)ⁿ avec R > 0."
          }
        ]
      ],
      isManipulation: false,
      _mistralLesson: true
    },
    {
      id: "series-entieres-et-applications-en-physique",
      label: "Séries entières et applications en physique",
      lesson: {
        formula: "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
        text: "Une série entière est une série de fonctions dont les termes sont des polynômes. Elle converge absolument et uniformément dans son disque de convergence. En physique, elle permet de modéliser des phénomènes complexes comme les oscillations ou les ondes. Son importance réside dans sa capacité à représenter des fonctions analytiques et à simplifier des calculs différentiels.",
        example: "Contexte : Déterminer le développement en série entière de f(x) = eˣ autour de x₀ = 0.\nDonnées : f(x) = eˣ, x₀ = 0\n① Étape 1 : Calcul des dérivées successives en 0 : f(0) = 1, f'(0) = 1, f''(0) = 1, etc.\n② Étape 2 : Application de la formule de Taylor : eˣ = Σ (xⁿ/n!) pour |x| < ∞\n③ Résultat : eˣ = 1 + x + x²/2! + x³/3! + ..."
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Définition d'une série entière",
          text: "Une série entière est une série de la forme Σ (aₙ (x−x₀)ⁿ) où (aₙ) est une suite de coefficients réels ou complexes, x₀ est le centre de la série, et n est un entier naturel. Elle converge pour |x−x₀| < R, où R est le rayon de convergence."
        },
        {
          type: "formula",
          title: "🔑 Formule de la série entière",
          formula: "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
          text: "La formule représente une fonction f(x) développée en série entière autour du point x₀. Les coefficients aₙ sont déterminés par les dérivées successives de f en x₀. Le rayon de convergence R détermine l'intervalle de validité de la série."
        },
        {
          type: "graph",
          title: "📊 Représentation graphique d'une série entière",
          text: "Le graphique montre la convergence de la série entière de eˣ autour de x₀ = 0. La courbe bleue représente la fonction eˣ, et la zone ombrée indique le disque de convergence où la série est valide.",
          svgContent: "<svg viewBox=\"0 0 340 220\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"340\" height=\"220\" fill=\"#0f172a\" rx=\"6\"/>\n<path d=\"M 40 180 L 300 180\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n<path d=\"M 40 180 Q 100 100 160 180 T 220 40 T 280 180\" stroke=\"#38bdf8\" stroke-width=\"2\" fill=\"none\"/>\n<text x=\"40\" y=\"190\" fill=\"#e2e8f0\" font-family=\"monospace\" font-size=\"12\">x</text>\n<text x=\"300\" y=\"190\" fill=\"#e2e8f0\" font-family=\"monospace\" font-size=\"12\">x₀ + R</text>\n<text x=\"160\" y=\"160\" fill=\"#fbbf24\" font-family=\"monospace\" font-size=\"12\">f(x)</text>\n</svg>",
          caption: "Représentation graphique de la série entière de eˣ autour de x₀ = 0"
        },
        {
          type: "example",
          title: "✅ Exemple 1 : Développement en série entière de sin(x)",
          text: "Contexte : Déterminer le développement en série entière de f(x) = sin(x) autour de x₀ = 0.\nDonnées : f(x) = sin(x), x₀ = 0\n① Étape 1 : Calcul des dérivées successives en 0 : f(0) = 0, f'(0) = 1, f''(0) = 0, f'''(0) = -1, etc.\n② Étape 2 : Application de la formule de Taylor : sin(x) = Σ ((-1)ⁿ x²ⁿ+1/(2n+1)!) pour |x| < ∞\n③ Résultat : sin(x) = x - x³/3! + x⁵/5! - x⁷/7! + ..."
        },
        {
          type: "example",
          title: "✅ Exemple 2 : Développement en série entière de cos(x)",
          text: "Contexte : Déterminer le développement en série entière de f(x) = cos(x) autour de x₀ = 0.\nDonnées : f(x) = cos(x), x₀ = 0\n① Étape 1 : Calcul des dérivées successives en 0 : f(0) = 1, f'(0) = 0, f''(0) = -1, f'''(0) = 0, etc.\n② Étape 2 : Application de la formule de Taylor : cos(x) = Σ ((-1)ⁿ x²ⁿ/(2n)!) pour |x| < ∞\n③ Résultat : cos(x) = 1 - x²/2! + x⁴/4! - x⁶/6! + ..."
        },
        {
          type: "demo",
          title: "🔬 Démonstration de la convergence d'une série entière",
          text: "① La série entière converge absolument et uniformément dans son disque de convergence |x−x₀| < R.\n② Le rayon de convergence R est donné par la formule R = 1/lim sup √|aₙ|.\n③ Conclusion : La convergence est assurée par le théorème de Cauchy-Hadamard, qui garantit que la série converge pour tout x dans le disque de convergence."
        },
        {
          type: "warning",
          title: "⚠️ Pièges et erreurs fréquentes",
          text: "① Erreur : Confondre le rayon de convergence avec le domaine de définition.\n   Pourquoi faux : Le rayon de convergence détermine l'intervalle de convergence, pas nécessairement le domaine de définition de la fonction.\n   Comment éviter : Utiliser le théorème de Cauchy-Hadamard pour calculer précisément le rayon de convergence.\n② Erreur : Oublier de vérifier la convergence aux points frontières.\n   Pourquoi faux : La série peut converger ou diverger aux points x₀ ± R.\n   Comment éviter : Appliquer le test de la série géométrique pour vérifier la convergence aux points frontières.\n③ Erreur : Utiliser des coefficients incorrects dans le développement en série.\n   Pourquoi faux : Les coefficients aₙ doivent être calculés à partir des dérivées successives de la fonction.\n   Comment éviter : Calculer rigoureusement les dérivées successives et appliquer la formule de Taylor."
        },
        {
          type: "technique",
          title: "🛠️ Méthode de développement en série entière",
          text: "① Calculer les dérivées successives de la fonction en x₀.\n② Déterminer les coefficients aₙ à partir des dérivées : aₙ = f⁽ⁿ⁾(x₀)/n!.\n③ Écrire la série entière en utilisant les coefficients calculés : f(x) = Σ (aₙ (x−x₀)ⁿ).\n④ Déterminer le rayon de convergence R en utilisant le théorème de Cauchy-Hadamard.\n⑤ Vérifier la convergence aux points frontières si nécessaire."
        }
      ],
      levels: [
        [
          {
            type: "mcq",
            question: "La formule de Séries entières et applications en physique est :",
            answers: [
              "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "2·(f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−)",
              "(f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−)²"
            ],
            correct: 0,
            explanation: "Séries entières et applications en physique : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "input",
            question: "Écrire la formule/expression de Séries entières et applications en physique",
            correct: "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
            explanation: "Séries entières et applications en physique : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Séries entières et applications en physique est défini par :",
            answers: [
              "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Inverse de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "2·(f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−)",
              "1/(f(x) = Σ (aₙ (x−x₀)ⁿ) pou)"
            ],
            correct: 0,
            explanation: "Définition : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Parmi ces expressions, laquelle correspond à Séries entières et applications en physique ?",
            answers: [
              "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "(f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−)²",
              "1/(f(x) = Σ (aₙ (x−x₀)ⁿ) pou)"
            ],
            correct: 0,
            explanation: "Séries entières et applications en physique : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "input",
            question: "Notation standard de Séries entières et applications en physique ?",
            correct: "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
            explanation: "Séries entières et applications en physique se note : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          }
        ],
        [
          {
            type: "mcq",
            question: "Application directe de Séries entières et applications en physique — f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R — on obtient :",
            answers: [
              "Le résultat en appliquant f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−",
              "Toujours 0",
              "Toujours 1",
              "Indéfini"
            ],
            correct: 0,
            explanation: "On applique directement : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Condition nécessaire pour appliquer Séries entières et applications en physique ?",
            answers: [
              "Hypothèses de Séries entières et applications en physique satisfaites",
              "Aucune condition",
              "Le résultat est positif",
              "Données numériques seules"
            ],
            correct: 0,
            explanation: "Séries entières et applications en physique requiert ses hypothèses de définition."
          },
          {
            type: "mcq",
            question: "Calculer avec Séries entières et applications en physique nécessite de :",
            answers: [
              "Appliquer f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Mémoriser sans calcul",
              "Approximer",
              "Ignorer les conditions"
            ],
            correct: 0,
            explanation: "Application directe de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Pour appliquer Séries entières et applications en physique numériquement, on :",
            answers: [
              "Substitue les valeurs dans f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Mémorise sans calcul",
              "Approxime",
              "Utilise une autre formule"
            ],
            correct: 0,
            explanation: "Application numérique : substitution dans f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R."
          },
          {
            type: "mcq",
            question: "La valeur obtenue par Séries entières et applications en physique dépend de :",
            answers: [
              "Les variables de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Une constante universelle",
              "Rien",
              "La méthode de calcul uniquement"
            ],
            correct: 0,
            explanation: "Séries entières et applications en physique dépend des variables de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          }
        ],
        [
          {
            type: "mcq",
            question: "Avant d'appliquer Séries entières et applications en physique (formule : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R), on vérifie :",
            answers: [
              "Les hypothèses de définition de Séries entières et applications en physique",
              "Que le résultat est positif",
              "Rien de particulier",
              "La mémoire de l'élève"
            ],
            correct: 0,
            explanation: "Toujours vérifier les conditions de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Domaine de définition de Séries entières et applications en physique (f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−) ?",
            answers: [
              "Valeurs pour lesquelles f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x− est défini",
              "Tous les réels",
              "Aucun réel",
              "Entiers seulement"
            ],
            correct: 0,
            explanation: "Séries entières et applications en physique n'est défini que sur son domaine."
          },
          {
            type: "mcq",
            question: "Séries entières et applications en physique ne s'applique pas quand :",
            answers: [
              "Les hypothèses ne sont pas satisfaites",
              "Le résultat est non nul",
              "On utilise la formule correcte",
              "n est pair"
            ],
            correct: 0,
            explanation: "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R requiert des conditions précises"
          },
          {
            type: "mcq",
            question: "Comment interpréter le signe du résultat de Séries entières et applications en physique ?",
            answers: [
              "Selon les conditions de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Toujours positif",
              "Ignorer le signe",
              "Valeur absolue uniquement"
            ],
            correct: 0,
            explanation: "Le signe s'interprète selon les conditions de Séries entières et applications en physique."
          },
          {
            type: "mcq",
            question: "Vérification du résultat obtenu par Séries entières et applications en physique :",
            answers: [
              "Réinjecter dans f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R et vérifier",
              "Prendre la valeur absolue",
              "Diviser par 2",
              "Ignorer les unités"
            ],
            correct: 0,
            explanation: "La vérification passe par f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          }
        ],
        [
          {
            type: "mcq",
            question: "Stratégie pour résoudre un exercice sur Séries entières et applications en physique :",
            answers: [
              "Identifier → vérifier hypothèses → appliquer f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x− → interpréter",
              "Appliquer sans analyse",
              "Tâtonner",
              "Ignorer les conditions"
            ],
            correct: 0,
            explanation: "Méthode : identification → conditions → f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R → interprétation"
          },
          {
            type: "mcq",
            question: "Calculer Séries entières et applications en physique pour des valeurs spécifiques : méthode ?",
            answers: [
              "Substituer dans f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Lire dans un tableau",
              "Approximer",
              "Utiliser une calculatrice sans formule"
            ],
            correct: 0,
            explanation: "Calcul direct : substitution dans f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R."
          },
          {
            type: "mcq",
            question: "Comment justifier formellement Séries entières et applications en physique ?",
            answers: [
              "Citer la définition et la propriété f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Admettre",
              "Intuition",
              "Exemple seul"
            ],
            correct: 0,
            explanation: "Justification par f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Pour résoudre une équation avec Séries entières et applications en physique (f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| <), on :",
            answers: [
              "Isole l'inconnue dans f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| <",
              "Utilise une approximation",
              "Mémorise le résultat sans calcul",
              "Remplace par une formule voisine"
            ],
            correct: 0,
            explanation: "Résolution : isoler l'inconnue dans f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R."
          },
          {
            type: "mcq",
            question: "Séries entières et applications en physique s'utilise en combinaison avec :",
            answers: [
              "D'autres propriétés du même domaine",
              "Uniquement seul",
              "N'importe quelle formule",
              "Des outils non mathématiques"
            ],
            correct: 0,
            explanation: "Séries entières et applications en physique s'intègre dans un raisonnement plus large"
          }
        ],
        [
          {
            type: "mcq",
            question: "Quel contre-exemple montre les limites de Séries entières et applications en physique ?",
            answers: [
              "Cas où les hypothèses de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R ne sont pas satisfaites",
              "Cas où f=0",
              "Cas où n=0",
              "Cas général"
            ],
            correct: 0,
            explanation: "Séries entières et applications en physique échoue quand ses conditions ne tiennent pas"
          },
          {
            type: "mcq",
            question: "Dans quel cas Séries entières et applications en physique ne s'applique-t-il pas ?",
            answers: [
              "Quand les hypothèses de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < ne sont pas satisfaites",
              "Jamais, il s'applique toujours",
              "Quand le résultat est nul",
              "Quand n est pair"
            ],
            correct: 0,
            explanation: "Séries entières et applications en physique échoue si ses conditions ne tiennent pas."
          },
          {
            type: "mcq",
            question: "Séries entières et applications en physique se distingue d'une notion voisine par :",
            answers: [
              "La formule exacte f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Le domaine d'utilisation uniquement",
              "Le nom",
              "Aucune différence"
            ],
            correct: 0,
            explanation: "La différence est dans la définition précise : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Généralisation de Séries entières et applications en physique :",
            answers: [
              "Extension conservant f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Abandon de toute formule",
              "Approximation",
              "Cas particulier uniquement"
            ],
            correct: 0,
            explanation: "Généraliser Séries entières et applications en physique : conserver la structure de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Formule de Séries entières et applications en physique dans un cas limite :",
            answers: [
              "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "2·(f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−)",
              "1/(f(x) = Σ (aₙ (x−x₀)ⁿ) pou)",
              "Indéfini"
            ],
            correct: 0,
            explanation: "Cas limite : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R."
          }
        ],
        [
          {
            type: "mcq",
            question: "Démonstration d'une propriété de Séries entières et applications en physique — point de départ ?",
            answers: [
              "La définition f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Un exemple numérique",
              "Une intuition géométrique",
              "Une approximation"
            ],
            correct: 0,
            explanation: "Toute preuve commence par la définition : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R."
          },
          {
            type: "mcq",
            question: "Séries entières et applications en physique dans un contexte multi-notions :",
            answers: [
              "Articulation de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R avec d'autres résultats",
              "Utilisation seule de la formule",
              "Ignorance des interactions",
              "Simplification abusive"
            ],
            correct: 0,
            explanation: "Séries entières et applications en physique s'intègre dans un réseau de résultats"
          },
          {
            type: "mcq",
            question: "Généralisation de Séries entières et applications en physique :",
            answers: [
              "Extension conservant la structure de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Abandon de la formule",
              "Cas particulier seulement",
              "Approximation"
            ],
            correct: 0,
            explanation: "Séries entières et applications en physique se généralise en conservant ses propriétés essentielles."
          },
          {
            type: "mcq",
            question: "Preuve de Séries entières et applications en physique : point de départ ?",
            answers: [
              "La définition f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Un exemple",
              "Une intuition",
              "Une approximation"
            ],
            correct: 0,
            explanation: "Toute preuve commence par la définition : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R"
          },
          {
            type: "mcq",
            question: "Expression de Séries entières et applications en physique dans un cadre plus général :",
            answers: [
              "f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R",
              "Forme approchée de f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| <",
              "Cas dégénéré",
              "Formulation circulaire"
            ],
            correct: 0,
            explanation: "Généralisation : f(x) = Σ (aₙ (x−x₀)ⁿ) pour |x−x₀| < R."
          }
        ]
      ],
      isManipulation: false,
      _mistralLesson: true
    }
  ],
  schoolCat: {
    catId: "superieur_maths",
    label: "Supérieur — Maths",
    icon: "🎓",
    emoji: "🎓",
    color: "#f59e0b",
    matches: [
      "topologie",
      "mesure",
      "algèbre abstraite",
      "groupe",
      "anneau",
      "corps",
      "espace vectoriel",
      "application linéaire",
      "déterminant",
      "valeur propre",
      "suite de cauchy",
      "complétude",
      "compacité",
      "connexité",
      "série entière",
      "équation aux dérivées partielles",
      "théorème de stokes",
      "forme différentielle",
      "variété",
      "isomorphisme",
      "homomorphisme",
      "conjecture",
      "démonstration"
    ],
    aiHint: "Niveau universitaire (bac+1 à bac+5). Utilise le formalisme mathématique complet avec définitions rigoureuses, théorèmes, démonstrations esquissées. Suppose un socle lycée acquis.",
    questionStyle: "Questions sur les définitions formelles, les conditions d'application, les contre-exemples. Fausses réponses = erreurs subtiles de raisonnement."
  },
  mistralCount: 8,
  manipulations: []
};