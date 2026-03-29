export default {
  id: 'fonctions-elliptiques',
  title: 'Fonctions elliptiques',
  description: 'fonctions doublement périodiques, réseau de périodes, Weierstrass, Jacobi, courbes elliptiques',
  icon: '🔷',
  xpMax: 130,
  notions: [

    // ================================================================
    // NOTION 1 : Intégrales elliptiques
    // ================================================================
    {
      id: 'integrales-elliptiques',
      label: 'Intégrales elliptiques',
      lesson: {
        formula: 'K(k) = ∫₀^(π/2) dθ / √(1 − k²sin²θ)',
        text: "Les intégrales elliptiques apparaissent dans le calcul de la longueur d'arc d'une ellipse. Elles ne se calculent pas avec des fonctions élémentaires. Les fonctions elliptiques sont définies comme leurs inverses. Le module k ∈ (0,1) contrôle la « non-circularité ».",
        example: "Longueur d'un quart d'ellipse d'axes a≥b : L = a·E(e) avec e=√(1−b²/a²) et E(k)=∫₀^(π/2)√(1−k²sin²θ)dθ."
      },
      fullBlocks: [
        {
          type: 'definition',
          title: 'Intégrale elliptique de première espèce',
          text: "F(φ,k) = ∫₀^φ dθ/√(1−k²sin²θ), k∈(0,1), φ∈[0,π/2]. La forme complète est K(k)=F(π/2,k). C'est la demi-période des fonctions de Jacobi : sn(K(k),k)=1."
        },
        {
          type: 'definition',
          title: 'Intégrale elliptique de deuxième espèce',
          text: "E(φ,k) = ∫₀^φ √(1−k²sin²θ) dθ. Forme complète : E(k)=E(π/2,k). Elle donne la longueur d'un quart d'ellipse d'excentricité k. On a E(0)=K(0)=π/2."
        },
        {
          type: 'formula',
          title: 'Forme algébrique de Legendre',
          formula: 'F(x,k) = ∫₀^x dt / √((1−t²)(1−k²t²))',
          text: "En posant t=sinθ dans F(φ,k), on obtient la forme algébrique. Ce changement de variable est fondamental : il relie les intégrales trigonométriques à celles portant sur la racine d'un polynôme de degré 4."
        },
        {
          type: 'demo',
          title: "Arc d'ellipse et intégrale elliptique",
          text: "Ellipse : x=a·cos t, y=b·sin t. Longueur ds=√(a²sin²t+b²cos²t)dt=a√(1−e²cos²t)dt avec e=√(1−b²/a²). Sur [0,π/2] : L/4 = a·E(e). Le changement θ=π/2−t donne la forme standard. Si b=a (cercle), e=0 et E(0)=π/2 → L=2πa. Pour b<a, l'intégrale est transcendante : aucune primitive élémentaire."
        },
        {
          type: 'graph',
          title: 'K(k) en fonction du module k',
          svgContent: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#f8f9fa"/><line x1="40" y1="170" x2="275" y2="170" stroke="#333" stroke-width="2"/><line x1="40" y1="170" x2="40" y2="15" stroke="#333" stroke-width="2"/><text x="278" y="174" font-size="11" fill="#333">k</text><text x="28" y="12" font-size="11" fill="#333">K</text><text x="40" y="184" font-size="9" fill="#555">0</text><text x="228" y="184" font-size="9" fill="#555">1</text><text x="5" y="115" font-size="9" fill="#555">π/2</text><line x1="40" y1="110" x2="275" y2="110" stroke="#ccc" stroke-width="1" stroke-dasharray="4"/><path d="M40,110 C80,109 130,107 170,100 C200,94 220,82 240,65 C255,50 263,35 268,18" stroke="#3b82f6" stroke-width="2.5" fill="none"/><circle cx="40" cy="110" r="4" fill="#3b82f6"/><text x="42" y="106" font-size="9" fill="#3b82f6">K(0)=π/2</text></svg>',
          caption: 'K(k) est croissante sur (0,1), vaut π/2 en k=0 et diverge vers +∞ quand k→1⁻.',
          text: "La divergence de K(k) en k→1 correspond géométriquement à l'ellipse qui dégénère en segment : la période des fonctions elliptiques tend vers l'infini."
        },
        {
          type: 'warning',
          title: 'Convention k vs m=k²',
          text: "Attention : certains logiciels (Mathematica, Matlab) utilisent le paramètre m=k² plutôt que le module k. EllipticK[m] dans Mathematica correspond à K(√m) ici. Vérifiez toujours la convention utilisée avant de comparer des valeurs numériques."
        },
        {
          type: 'example',
          title: 'Période du pendule simple',
          text: "La période d'un pendule de longueur L avec amplitude θ₀ est T=4√(L/g)·K(sin(θ₀/2)). Pour θ₀ petit, sin(θ₀/2)≈θ₀/2≈0 et K(0)=π/2, donc T≈2π√(L/g) (formule linéaire). Pour θ₀=π/2, T=4√(L/g)·K(1/√2)≈4√(L/g)·1.854 (correction de ~18%)."
        },
        {
          type: 'technique',
          title: "Calcul rapide via l'AGM",
          text: "Gauss montre : K(k)=π/(2·agm(1,k')) où k'=√(1−k²) et agm désigne la moyenne arithmético-géométrique. Algorithme : a₀=1, b₀=k', aₙ₊₁=(aₙ+bₙ)/2, bₙ₊₁=√(aₙbₙ). La suite converge quadratiquement vers agm(1,k') en ≈10 étapes pour 15 décimales."
        }
      ],
      levels: [
        // Niveau 1
        [
          {
            type: 'mcq',
            question: "Une intégrale elliptique implique la racine carrée d'un polynôme de degré :",
            answers: ['3 ou 4', '1 ou 2', '5 ou 6', 'pair uniquement'],
            correct: 0,
            explanation: "Par définition, une intégrale elliptique est de la forme ∫R(t,√P(t))dt où P est un polynôme de degré 3 ou 4 sans racine double. Les degrés 1 et 2 donnent des fonctions élémentaires (arcsin, log)."
          },
          {
            type: 'mcq',
            question: 'K(0) vaut :',
            answers: ['π/2', '0', '1', 'π'],
            correct: 0,
            explanation: "En k=0, l'intégrande devient 1. K(0)=∫₀^(π/2) dθ = π/2 ≈ 1.5708."
          },
          {
            type: 'mcq',
            question: 'Que vaut K(k) quand k → 1⁻ ?',
            answers: ['+∞', '0', 'π/2', '1'],
            correct: 0,
            explanation: "Quand k→1, le terme √(1−k²sin²θ)→|cosθ| s'annule en θ=π/2. L'intégrande diverge et K(k)→+∞. C'est le signe que les fonctions elliptiques perdent leur période réelle."
          },
          {
            type: 'mcq',
            question: "L'intégrale E(k) = ∫₀^(π/2) √(1−k²sin²θ) dθ est appelée :",
            answers: ['Intégrale elliptique complète de deuxième espèce', 'Intégrale de Gauss', 'Intégrale elliptique de première espèce', 'Transformée de Fourier'],
            correct: 0,
            explanation: "E(k) est l'intégrale elliptique du second type. Elle donne la longueur d'un quart d'ellipse d'excentricité k. Pour k=0 : E(0)=π/2, pour k=1 : E(1)=1."
          },
          {
            type: 'mcq',
            question: "La longueur d'un quart d'ellipse d'axes a≥b, d'excentricité e=√(1−b²/a²), vaut :",
            answers: ['a·E(e)', 'a·K(e)', 'π·a·b', 'a+b'],
            correct: 0,
            explanation: "Le calcul d'arc ds=a√(1−e²cos²t)dt intégré sur [0,π/2] donne a·E(e). La formule πab est l'aire, non la longueur."
          },
          {
            type: 'input',
            visual: 'K(0)',
            question: "Calculez exactement K(0) = ∫₀^(π/2) dθ. Entrez votre réponse sous forme π/n :",
            correct: 'π/2',
            explanation: "K(0) = ∫₀^(π/2) 1·dθ = [θ]₀^(π/2) = π/2. C'est la valeur minimale de K(k) sur (0,1)."
          },
          {
            type: 'mcq',
            question: "Pourquoi les intégrales elliptiques ne s'expriment-elles pas avec des fonctions élémentaires ?",
            answers: ['Liouville l\'a prouvé en 1833 : aucune primitive élémentaire n\'existe', 'On n\'a pas encore trouvé la méthode', 'Elles s\'expriment en fait avec arcsin', 'Ce n\'est vrai que pour k≥1/2'],
            correct: 0,
            explanation: "Liouville (1833) a démontré rigoureusement, par sa théorie de l'intégration en termes finis, qu'aucune combinaison de fonctions élémentaires ne peut exprimer ces primitives."
          },
          {
            type: 'mcq',
            question: "Le module elliptique k est contraint à :",
            answers: ['k ∈ (0,1)', 'k ∈ ℝ⁺', 'k ∈ ℕ', 'k > 1'],
            correct: 0,
            explanation: "Pour que l'intégrande soit réel et l'intégrale convergente sur [0,π/2], on impose k∈(0,1). Les cas limites k=0 (cercle) et k→1 (segment) sont dégénérés."
          },
          {
            type: 'mcq',
            question: "La forme algébrique F(x,k) = ∫₀^x dt/√((1−t²)(1−k²t²)) s'obtient par :",
            answers: ['t = sin θ', 't = tan θ', 't = cos θ', 't = θ²'],
            correct: 0,
            explanation: "En posant t=sinθ, dt=cosθ dθ et √(1−t²)=cosθ. L'expression dθ/√(1−k²sin²θ) devient alors dt/√((1−t²)(1−k²t²))."
          },
          {
            type: 'mcq',
            question: "La période T d'un pendule simple de longueur L et d'amplitude θ₀ s'exprime :",
            answers: ['T = 4√(L/g)·K(sin(θ₀/2))', 'T = 2π√(L/g) exactement', 'T = K(θ₀)', 'T = 4K(k)/g'],
            correct: 0,
            explanation: "La période exacte est T=4√(L/g)·K(k) avec k=sin(θ₀/2). Pour θ₀ petit, K(0)=π/2 donne l'approximation linéaire T≈2π√(L/g)."
          }
        ],
        // Niveau 2
        [
          {
            type: 'mcq',
            question: "La substitution t=sinθ dans F(x,k) transforme l'intégrale en :",
            answers: ['∫₀^(arcsin x) dθ/√(1−k²sin²θ)', '∫₀^x sinθ dθ', '∫₀^x dθ/cosθ', '∫₀^x tan θ dθ'],
            correct: 0,
            explanation: "t=sinθ → dt=cosθ dθ, √(1−t²)=cosθ, borne x→arcsinx. Donc dt/√((1−t²)(1−k²t²)) = cosθ dθ/(cosθ·√(1−k²sin²θ)) = dθ/√(1−k²sin²θ)."
          },
          {
            type: 'mcq',
            question: "La dérivée dK/dk vaut :",
            answers: ['(E(k)−k\'²K(k))/(k·k\'²)', 'K(k)/k', 'E(k)/k', '0'],
            correct: 0,
            explanation: "En dérivant K(k)=∫₀^(π/2) dθ/√(1−k²sin²θ) sous le signe intégral et en simplifiant, on obtient dK/dk=(E(k)−k\'²K(k))/(k·k\'²) avec k\'=√(1−k²)."
          },
          {
            type: 'mcq',
            question: "La relation de Legendre entre K, K', E, E' est :",
            answers: ["E·K' + E'·K − K·K' = π/2", "E·K = π/2", "E + K = π", "E·E' = K·K'"],
            correct: 0,
            explanation: "La relation de Legendre E(k)K'(k)+E'(k)K(k)−K(k)K'(k)=π/2 est fondamentale. Ici K'=K(k'), E'=E(k') avec k'=√(1−k²). Elle garantit la non-dégénérescence du réseau de périodes."
          },
          {
            type: 'mcq',
            question: "Le module complémentaire k' est défini par :",
            answers: ["k' = √(1−k²)", "k' = 1−k", "k' = 1/k", "k' = k²"],
            correct: 0,
            explanation: "k'=√(1−k²) est le module complémentaire : k²+k'²=1. Il joue un rôle symétrique à k dans la théorie : K'=K(k') est la seconde demi-période imaginaire des fonctions de Jacobi."
          },
          {
            type: 'input',
            visual: 'E(0)',
            question: "Calculez E(0) = ∫₀^(π/2) √(1−0) dθ. Résultat exact (sous forme π/n) :",
            correct: 'π/2',
            explanation: "En k=0, l'intégrande est 1. E(0)=∫₀^(π/2) dθ=π/2. Comme K(0)=π/2 aussi, le cas k=0 correspond au cercle où les deux types d'intégrales coïncident."
          },
          {
            type: 'mcq',
            question: "La série de Taylor de K(k) autour de k=0 commence par :",
            answers: ['(π/2)(1 + k²/4 + 9k⁴/64 + …)', '(π/2)(1 + k + k² + …)', 'π(1 + k²/2 + …)', '1 + k²/4 + …'],
            correct: 0,
            explanation: "En développant (1−k²sin²θ)^(−1/2) = Σ (2n choose n)²k²ⁿsin²ⁿθ/4ⁿ et intégrant, on utilise ∫₀^(π/2)sin²ⁿθ dθ = π(2n)!/(4ⁿ(n!)²)/2. On obtient K(k)=(π/2)Σ[(2n)!/(2ⁿn!)²]²k²ⁿ."
          },
          {
            type: 'mcq',
            question: "L'AGM (moyenne arithmético-géométrique) de 1 et k' donne :",
            answers: ['K(k) = π / (2·agm(1,k′))', 'K(k) = agm(1,k′)', 'K(k) = π·agm(1,k′)', 'K(k) = 2/agm(1,k′)'],
            correct: 0,
            explanation: "Gauss démontre K(k)=π/(2·agm(1,k')) par un changement de variable sur la transformation de Landen. L'AGM converge quadratiquement (doublement du nombre de décimales correctes à chaque étape)."
          },
          {
            type: 'mcq',
            question: "E(1) vaut :",
            answers: ['1', 'π/2', '0', '∞'],
            correct: 0,
            explanation: "E(1)=∫₀^(π/2)√(1−sin²θ)dθ=∫₀^(π/2)cosθ dθ=[sinθ]₀^(π/2)=1. La longueur d'un quart de cercle de rayon 1 est bien π/2, mais ici l'ellipse dégénère en segment de longueur 1."
          },
          {
            type: 'mcq',
            question: "La constante de la lemniscate ω est :",
            answers: ['ω = 2∫₀¹ dt/√(1−t⁴) ≈ 2.622', 'ω = π', 'ω = 2K(1)', 'ω = 1'],
            correct: 0,
            explanation: "La lemniscate r²=cos(2θ) a demi-longueur ω/2=∫₀¹ dt/√(1−t⁴)≈1.311. C'est la première constante transcendante non élémentaire reconnue (Fagnano, 1718), précurseur des fonctions elliptiques."
          },
          {
            type: 'mcq',
            question: "La transformation de Gauss-Landen (montante) remplace k par k₁ = 2√k/(1+k). Elle multiplie K par :",
            answers: ['(1+k)', '2', '1/2', '√k'],
            correct: 0,
            explanation: "La transformation de Landen montante : k₁=2√k/(1+k) et K(k₁)=(1+k)K(k). C'est la base de l'algorithme AGM : en appliquant la transformation descendante répétée, on converge vers agm(1,k')."
          }
        ],
        // Niveau 3
        [
          {
            type: 'mcq',
            question: "La réduction de Hermite affirme que toute intégrale elliptique ∫R(t,√P(t))dt se ramène à :",
            answers: ['Une combinaison linéaire de F, E et Π', 'Une intégrale gaussienne', 'Une série de Fourier', 'Un résidu de Cauchy'],
            correct: 0,
            explanation: "Le théorème de réduction de Hermite prouve que toute intégrale elliptique s'écrit aF+bE+cΠ+R(t,√P(t)) avec R rationnelle. Les trois types F, E, Π forment une base de l'espace des intégrales elliptiques."
          },
          {
            type: 'mcq',
            question: "L'intégrale de troisième espèce Π(n,k) est :",
            answers: ['∫₀^(π/2) dθ/((1−n·sin²θ)√(1−k²sin²θ))', '∫₀^(π/2)(1−n)dθ', '∫₀^(π/2) sin²θ dθ', 'K(k)·E(k)'],
            correct: 0,
            explanation: "Π(n,k)=∫₀^(π/2) dθ/((1−n sin²θ)√(1−k²sin²θ)) est le troisième type. Pour n=0, Π(0,k)=K(k). Il apparaît dans le calcul de l'angle de rotation d'un corps solide (équations d'Euler)."
          },
          {
            type: 'mcq',
            question: "La substitution de Weierstrass t=℘(u) transforme ∫dt/√(4t³−g₂t−g₃) en :",
            answers: ['du', 'dt/t', '℘(u)du', '1/℘(u)du'],
            correct: 0,
            explanation: "Puisque (℘')²=4℘³−g₂℘−g₃, on a ℘'du=dt et dt/√(4t³−g₂t−g₃)=℘'du/℘'=du. L'intégrale elliptique devient l'identité : c'est la définition de ℘ comme inverse."
          },
          {
            type: 'mcq',
            question: "La valeur K(1/√2) s'exprime via la constante de Gauss β = Γ(1/4) par :",
            answers: ['K(1/√2) = Γ(1/4)²/(4√π)', 'K(1/√2) = π', 'K(1/√2) = √2·K(0)', 'K(1/√2) = Γ(1/2)'],
            correct: 0,
            explanation: "La valeur K(1/√2)=Γ(1/4)²/(4√π)≈1.8541 est l'un des cas spéciaux remarquables. Elle utilise la valeur de la fonction Gamma en 1/4, liée à l'AGM de (1,1/√2)."
          },
          {
            type: 'mcq',
            question: "La transformation de Gauss (descendante) : k→k₁=(1−k')/(1+k') vérifie :",
            answers: ['K(k) = (1+k₁)K(k₁)', 'K(k) = K(k₁)/2', 'K(k) = K(k₁)', 'K(k) = 2K(k₁)'],
            correct: 0,
            explanation: "La transformation descendante k₁=(1−k')/(1+k')<k donne K(k)=(1+k₁)K(k₁). En itérant, k_n→0 et (1+k₁)(1+k₂)…→2K(k)/π, ce qui est l'AGM."
          },
          {
            type: 'input',
            visual: 'E(1)',
            question: "Calculez E(1)=∫₀^(π/2) |cosθ| dθ. Résultat entier :",
            correct: '1',
            explanation: "E(1)=∫₀^(π/2) cosθ dθ=[sinθ]₀^(π/2)=1. C'est la longueur d'un quart de la courbe dégénérée (segment), valant 1."
          },
          {
            type: 'mcq',
            question: "La relation de récurrence entre K et E est :",
            answers: ['2(k²−1)dK/dk = 2E/k − k·(K − E/(1−k²))/k', 'dK/dk = E(k)', 'K(k) = E(k) + k', 'dE/dk = (E−K)/k'],
            correct: 3,
            explanation: "La relation correcte est dE/dk = (E(k)−K(k))/k. Elle se prouve en dérivant sous le signe intégral et en utilisant une intégration par parties. C'est fondamental pour les équations satisfaites par K et E."
          },
          {
            type: 'mcq',
            question: "L'identité de Legendre E(k)K'(k)+E'(k)K(k)−K(k)K'(k)=π/2 implique que K(k)K'(k) :",
            answers: ['Reste borné même quand k→0 ou k→1', 'Tend vers 0 en k=0', 'Tend vers ∞', 'Vaut toujours π/4'],
            correct: 0,
            explanation: "Quand k→0 : K→π/2, K'→∞ mais E'→1 et E·K'+(E'−K)K=π/2 contraint K·K'≈(π/2)log(4/k). L'identité garantit que la combinaison reste bien définie, malgré les divergences individuelles."
          },
          {
            type: 'mcq',
            question: "Dans la formule de Gauss K(k)=π/(2·agm(1,k')), si k=√3/2, alors k'=",
            answers: ['1/2', '√3/2', '1', '√2/2'],
            correct: 0,
            explanation: "k'=√(1−k²)=√(1−3/4)=√(1/4)=1/2. Donc K(√3/2)=π/(2·agm(1,1/2)). L'AGM(1,1/2)≈0.7265, donnant K(√3/2)≈2.156."
          },
          {
            type: 'mcq',
            question: "La série ∑ₙ [(2n)!/(4ⁿ(n!)²)]² k²ⁿ converge pour :",
            answers: ['|k| < 1', '|k| < 2', 'k ∈ ℕ', '|k| < π'],
            correct: 0,
            explanation: "Cette série (développement de K(k)·2/π) a un rayon de convergence |k|=1. La convergence pour |k|<1 est assurée par le critère de d'Alembert : le rapport de termes consécutifs tend vers k²."
          }
        ],
        // Niveau 4
        [
          {
            type: 'mcq',
            question: "La transformation quadratique de Gauss-Landen sur E donne :",
            answers: ['2E(k₁) = (1+k)E(k) + (1−k)K(k)', 'E(k₁) = E(k)', '2E(k₁) = E(k) + K(k)', 'E(k₁) = (1+k)E(k)'],
            correct: 0,
            explanation: "La transformation de Landen sur E : 2E(k₁)=(1+k)E(k)+(1−k)K(k) avec k₁=2√k/(1+k). Elle permet de construire un algorithme pour E analogue à l'AGM pour K."
          },
          {
            type: 'mcq',
            question: "La relation de Picard-Fuchs satisfaite par K(k) est :",
            answers: ['k(1−k²)K\'\'+(1−3k²)K\'−kK=0', 'K\'\'=0', 'K\'\'+k²K=0', 'k²K\'\'=K'],
            correct: 0,
            explanation: "K(k) satisfait l'équation hypergéométrique de Gauss k(1−k²)d²K/dk²+(1−3k²)dK/dk−kK=0. C'est une équation différentielle du second ordre dont K et K' forment une base de solutions."
          },
          {
            type: 'mcq',
            question: "La représentation hypergéométrique de K(k) est :",
            answers: ['K(k) = (π/2)·₂F₁(1/2,1/2;1;k²)', 'K(k) = ₂F₁(1,1;1;k)', 'K(k) = π·₂F₁(1/2;1;k²)', 'K(k) = ₂F₁(1/2,1;3/2;k)'],
            correct: 0,
            explanation: "On développe (1−k²sin²θ)^(−1/2) en série et on intègre terme à terme : K(k)=(π/2)∑ₙ [(1/2)ₙ]²k²ⁿ/(n!)² = (π/2)·₂F₁(1/2,1/2;1;k²) où (a)ₙ est le symbole de Pochhammer."
          },
          {
            type: 'mcq',
            question: "Le nombre τ = iK'/K est dans le demi-plan supérieur. Sa valeur pour k=1/√2 est :",
            answers: ['τ = i (demi-plan modulaire, point fixe de τ→−1/τ)', 'τ = 0', 'τ = π', 'τ = 1+i'],
            correct: 0,
            explanation: "Pour k=1/√2, la symétrie k=k' implique K=K', donc τ=iK'/K=i. C'est le point fixe de la transformation S:τ→−1/τ du groupe modulaire, correspondant à un réseau carré."
          },
          {
            type: 'mcq',
            question: "L'intégrale ∫₀^(π/2) dθ/(1−k²sin²θ)^(3/2) s'exprime par :",
            answers: ["E(k)/(k'²)", 'K(k)', 'K(k)+E(k)', "K(k)/k'²"],
            correct: 0,
            explanation: "Par dérivation de −(1/k)(d/dk)[K/k] ou par intégration par parties : ∫₀^(π/2)dθ/(1−k²sin²θ)^(3/2) = E(k)/(k'²) avec k'=√(1−k²). Utile dans les calculs d'énergie de l'oscillateur."
          },
          {
            type: 'input',
            visual: 'K(k)+K\'(k)',
            question: "Pour k=k' (i.e. k=1/√2), K=K'. Que vaut K(1/√2)/K'(1/√2) ?",
            correct: '1',
            explanation: "Si k=k'=1/√2, alors k²+k'²=1/2+1/2=1 ✓. K et K' sont calculées avec le même module, donc K(1/√2)=K'(1/√2) et leur rapport est 1. Cela correspond à τ=i."
          },
          {
            type: 'mcq',
            question: "La transformée de Fourier de sn(u,k) fait intervenir des puissances de :",
            answers: ['q = e^(−πK′/K) (nome elliptique)', 'e^(−π)', 'e^(−k)', 'q = e^(πτ)'],
            correct: 0,
            explanation: "Le nome q=e^(−πK'/K) est le paramètre fondamental des développements en séries de Fourier des fonctions de Jacobi. Par exemple sn(u,k)=(2π/kK)∑ qⁿ⁺^(1/2) sin((2n+1)πu/(2K))."
          },
          {
            type: 'mcq',
            question: "L'intégrale ∫₁^∞ dt/√(t(t−1)(t−k'²)) se ramène à :",
            answers: ['K(k)/a pour un certain a', 'E(k)', 'Π(k,k)', 'Une intégrale divergente'],
            correct: 0,
            explanation: "Par un changement de variable rationnel, cette intégrale (portant sur une courbe elliptique) se ramène à un multiple de K(k). C'est l'essence de la théorie : les intégrales sur courbes elliptiques se réduisent à F, E, Π."
          },
          {
            type: 'mcq',
            question: "La valeur spéciale K(sin(π/12)) s'exprime via Γ(1/6) et Γ(1/3) par :",
            answers: ['K(sin π/12) = √π·Γ(7/6)/(2Γ(5/3)) × constante', 'K(sin π/12) = π/3', 'K(sin π/12) = K(0)', 'K(sin π/12) = K(1/2)/2'],
            correct: 0,
            explanation: "Certaines valeurs spéciales de K(k) s'expriment en termes de la fonction Gamma en points rationnels. Ces formules de multiplication utilisent la théorie de la multiplication complexe des courbes elliptiques."
          },
          {
            type: 'mcq',
            question: "Le discriminant de l'équation (℘')²=4t³−g₂t−g₃ vu comme polynôme en t est :",
            answers: ['Δ = g₂³−27g₃²', 'Δ = g₂²−g₃', 'Δ = 4g₂−g₃', 'Δ = g₂·g₃'],
            correct: 0,
            explanation: "Le polynôme 4t³−g₂t−g₃ a discriminant Δ=16(g₂³−27g₃²). Le réseau est non-dégénéré si et seulement si Δ≠0, c'est-à-dire si les trois racines eᵢ=℘(ωᵢ/2) sont distinctes."
          }
        ],
        // Niveau 5
        [
          {
            type: 'mcq',
            question: "La transformation modulaire τ→τ+1 correspond sur le module k à :",
            answers: ['k→k₁ tel que k₁²+k\'₁²=1 avec remplacement de τ', 'k→k+1', 'k→k²', 'k→1/k'],
            correct: 0,
            explanation: "La transformation T:τ→τ+1 du groupe modulaire SL₂(ℤ) agit sur k via la théorie des fonctions thêta. La relation k(τ+1) s'exprime par k₁²=k²/(k²−1) (dans une convention). C'est la théorie des transformations modulaires."
          },
          {
            type: 'mcq',
            question: "L'équation hypergéométrique de Gauss admet comme solutions indépendantes autour de k=0 :",
            answers: ['K(k) et K\'(k) (ou une combinaison log)', 'K(k) et E(k)', 'sin(k) et cos(k)', 'K(k) et kK(k)'],
            correct: 0,
            explanation: "L'équation de Picard-Fuchs a deux solutions : K(k) (régulière en 0) et K'(k)=K(√(1−k²)) (contient un log). La monodromie autour de k²=0 génère le groupe modulaire."
          },
          {
            type: 'mcq',
            question: "Le groupe de monodromie de l'équation de Picard-Fuchs sur ℙ¹∖{0,1,∞} est :",
            answers: ['SL₂(ℤ) (ou un sous-groupe de congruence)', 'ℤ/2ℤ', 'SL₂(ℝ)', 'Le groupe trivial'],
            correct: 0,
            explanation: "La monodromie de l'équation hypergéométrique ₂F₁(1/2,1/2;1;k²) autour des singularités k²=0,1,∞ engendre SL₂(ℤ). C'est la connexion profonde entre intégrales elliptiques et formes modulaires."
          },
          {
            type: 'mcq',
            question: "La série thêta θ₃(0,q) = 1+2∑ₙ₌₁^∞ qⁿ² satisfait K(k) = :",
            answers: ['K(k) = (π/2)·θ₃(0,q)²', 'K(k) = θ₃(0,q)', 'K(k) = π·θ₃(0,q)', 'K(k) = θ₃(0,q)/2'],
            correct: 0,
            explanation: "Jacobi établit K(k)=(π/2)θ₃²(0,q) avec q=e^(−πK'/K) le nome. Cette formule relie les intégrales elliptiques aux fonctions thêta et est au cœur de la théorie analytique."
          },
          {
            type: 'mcq',
            question: "La formule de Gauss pour la multiplication de Γ donne Γ(1/4)·Γ(3/4) = :",
            answers: ['π√2', 'π', '√π', '2π'],
            correct: 0,
            explanation: "Par la formule de réflexion de Gamma : Γ(1/4)Γ(3/4)=π/sin(π/4)=π/(√2/2)=π√2. C'est la valeur utilisée dans K(1/√2)=Γ(1/4)²/(4√π)."
          },
          {
            type: 'mcq',
            question: "La valeur K(1/√2) = Γ(1/4)²/(4√π) s'obtient via l'AGM(1, 1/√2). Cet AGM vaut :",
            answers: ['√π·2/Γ(1/4)² × (π/2) = π/(2K)', 'π/4', '√2−1', '1/√π'],
            correct: 0,
            explanation: "agm(1,1/√2)=π√2/(2Γ(1/4)²)×√π... Précisément K(1/√2)=π/(2·agm(1,1/√2)) et K(1/√2)=Γ(1/4)²/(4√π)≈1.8541. Ces formules relient AGM, Gamma et intégrales elliptiques."
          },
          {
            type: 'input',
            visual: 'τ',
            question: "Pour la courbe elliptique y²=x(x−1)(x−k²) de paramètre modulaire τ=iK'(k)/K(k), quelle est l'exigence sur Im(τ) ?",
            correct: 'Im(τ) > 0',
            explanation: "τ=iK'/K avec K,K'>0 implique Im(τ)=K'/K>0. Le demi-plan supérieur ℍ={τ: Im(τ)>0} est le domaine naturel du paramètre modulaire. La courbe est non-dégénérée si et seulement si τ∈ℍ."
          },
          {
            type: 'mcq',
            question: "La fonction j(τ) = 1728·g₂³/Δ est invariante sous :",
            answers: ['SL₂(ℤ)', 'ℤ', 'GL₂(ℝ)', 'Le groupe trivial'],
            correct: 0,
            explanation: "L'invariant j(τ) est modulaire de poids 0 pour SL₂(ℤ) : j((aτ+b)/(cτ+d))=j(τ). Il classifie les courbes elliptiques sur ℂ à isomorphisme près. C'est l'un des objets centraux de la théorie des nombres."
          },
          {
            type: 'mcq',
            question: "La formule de Cauchy pour K(k) en tant qu'intégrale sur un chemin complexe contourne :",
            answers: ['Les coupures [−∞,0] et [1,+∞] du plan complexe', 'Le cercle unité', 'L\'axe imaginaire', 'Les pôles de ℘'],
            correct: 0,
            explanation: "Vu comme fonction analytique de k², K(k) a des coupures sur (−∞,0) et (1,+∞). La prolongation analytique via ces coupures génère le groupe de monodromie SL₂(ℤ) par les matrices T et S."
          },
          {
            type: 'mcq',
            question: "Les intégrales de périodes d'une courbe elliptique y²=P(x) définissent une structure appelée :",
            answers: ['Structure de Hodge mixte / réseau de périodes', 'Groupe de Galois', 'Variété de Shimura', 'Représentation de Weil'],
            correct: 0,
            explanation: "Les deux intégrales ∮γᵢ dx/y (sur les deux cycles γ₁,γ₂ de la courbe) définissent la matrice des périodes (ω₁,ω₂). Cette structure de Hodge code la géométrie complexe de la courbe elliptique."
          }
        ],
        // =======================
        // ===== Niveau L1 =======
        // =======================
        [
          {
            type: 'mcq',
            question: "La catégorie des intégrales elliptiques comme objets de la théorie de Hodge : elles sont les périodes d'une variation de structure de Hodge de type :",
            answers: ['(1,0)+(0,1) (poids 1)', '(2,0)+(0,2) (poids 2)', '(1,1) pur', 'Tate ℤ(1)'],
            correct: 0,
            explanation: "Une courbe elliptique E est une variété kählérienne compacte de dimension 1. Sa cohomologie H¹(E,ℤ) porte une structure de Hodge de poids 1 : H¹(E,ℂ)=H^(1,0)⊕H^(0,1), chaque espace étant de dimension 1. Les périodes ω₁, ω₂ sont des éléments du dual de H₁(E,ℤ)."
          },
          {
            type: 'mcq',
            question: "Le théorème de comparaison de Grothendieck-de Rham affirme que les périodes d'une courbe elliptique sur ℚ sont des éléments de :",
            answers: ['ℂ transcendants (en général) liés à Γ(1/4), π', 'ℚ', 'ℝ∖ℚ algébriques', 'ℤ'],
            correct: 0,
            explanation: "Les périodes ω₁, ω₂ sont génériquement transcendantes. Pour les courbes à multiplication complexe, elles s'expriment en termes de valeurs de la fonction Gamma en rationnels (conjectures de Chowla-Selberg, prouvées dans ce cas)."
          },
          {
            type: 'mcq',
            question: "La conjecture de Kontsevich-Zagier classe les périodes comme :",
            answers: ['Sous-anneau de ℂ contenant toutes les intégrales convergentes de fractions rationnelles sur domaines semialg.', 'Nombres algébriques', 'Valeurs de fonctions L', 'Nombres réels quelconques'],
            correct: 0,
            explanation: "La conjecture de Kontsevich-Zagier (2001) prédit que l'anneau des périodes, défini comme {∫_σ f(x)dx : f∈ℚ(x₁,...,xₙ), σ semialg.}, est bien défini à deux règles de calcul près (changement de variable et Stokes). Les intégrales elliptiques en sont des exemples fondamentaux."
          },
          {
            type: 'mcq',
            question: "La cohomologie de de Rham algébrique H¹_dR(E/ℚ) pour une courbe elliptique E est un ℚ-espace vectoriel de dimension :",
            answers: ['2', '1', '4', '0'],
            correct: 0,
            explanation: "H¹_dR(E/ℚ) est de dimension 2 sur ℚ, engendré par la forme holomorphe ω=dx/y et la forme quasi-holomorphe η=xdx/y. La matrice des périodes ∫_{γᵢ} ωⱼ est une matrice 2×2 à coefficients dans ℂ."
          },
          {
            type: 'mcq',
            question: "Le théorème d'Abel-Jacobi établit un isomorphisme entre une courbe elliptique E et :",
            answers: ['ℂ/Λ où Λ est le réseau de périodes', 'ℂ', 'S¹×S¹ (tore réel seulement)', 'ℙ¹(ℂ)'],
            correct: 0,
            explanation: "Abel-Jacobi : l'application u→∫_P₀^P dx/y induit un isomorphisme analytique E(ℂ)≅ℂ/Λ. C'est le lien fondamental entre les intégrales de première espèce et la structure de groupe de la courbe elliptique."
          },
          {
            type: 'mcq',
            question: "La variation de structure de Hodge associée à la famille y²=x(x−1)(x−t) dégénère (Λ→réseau dégénéré) quand :",
            answers: ['t→0, 1 ou ∞', 't→i', 't = 1/2', 't∈ℍ'],
            correct: 0,
            explanation: "La courbe y²=x(x−1)(x−t) est une courbe elliptique si et seulement si t∉{0,1,∞}. En t=0,1,∞, la courbe acquiert un nœud (singularité ordinaire) et la période K(√t)→0 ou ∞ : la structure de Hodge dégénère."
          },
          {
            type: 'mcq',
            question: "L'équation de Picard-Fuchs k(1−k²)K''+(1−3k²)K'−kK=0 est une équation :",
            answers: ['Hypergéométrique de Gauss ₂F₁(1/2,1/2;1;k²)', 'De Bessel', 'De Legendre d\'ordre 2', 'De Schrödinger'],
            correct: 0,
            explanation: "En posant z=k², cette équation se transforme exactement en z(1−z)f''+(1−2z)f'−(1/4)f=0, qui est l'équation de Gauss pour ₂F₁(1/2,1/2;1;z). Les solutions K(k) et K'(k) sont les deux déterminations analytiques."
          },
          {
            type: 'mcq',
            question: "Dans la théorie de Dwork, la cohomologie rigide de la courbe elliptique en caractéristique p est liée à :",
            answers: ["La réduction de l'équation de Picard-Fuchs modulo p (Frobenius)", 'La cohomologie de Betti', 'La cohomologie de Dolbeault', 'La K-théorie'],
            correct: 0,
            explanation: "Dwork (1962) montre que la fonction zêta de la courbe elliptique mod p s'obtient en étudiant le Frobenius sur la cohomologie p-adique, elle-même liée à la réduction mod p de l'équation de Picard-Fuchs. Cela préfigure la théorie des cristaux de Berthelot-Ogus."
          },
          {
            type: 'mcq',
            question: "Le régulateur de Beilinson pour une courbe elliptique E/ℚ s'exprime en termes de :",
            answers: ['K₂(E) et de la valeur de la fonction L en s=2', 'K(k)', "L'invariant j", 'E(k)·K(k)'],
            correct: 0,
            explanation: "La conjecture de Beilinson relie le groupe K₂(E) (K-théorie algébrique de niveau 2) à L(E,2) via un régulateur défini par des symboles de Milnor. Les périodes elliptiques interviennent dans la définition du régulateur."
          },
          {
            type: 'mcq',
            question: "La théorie de Katz des connexions de Gauss-Manin généralise l'équation de Picard-Fuchs à :",
            answers: ["Des familles de variétés algébriques de dimension quelconque (modules de Dwork, F-cristaux)", 'Des courbes seulement', 'Des variétés abéliennes de dimension 1', 'Des surfaces K3 uniquement'],
            correct: 0,
            explanation: "La connexion de Gauss-Manin sur R¹f*ℚ_E (pour une famille f:E→S de courbes elliptiques) est une connexion intégrable dont les sections horizontales sont les périodes. Katz l'étend aux p-divisible groups et F-cristaux, reliant géométrie algébrique et cohomologie p-adique."
          }
        ]
      ]
    },

    // ================================================================
    // NOTION 2 : Définition d'une fonction elliptique
    // ================================================================
    {
      id: 'definition-fonction-elliptique',
      label: 'Définition d\'une fonction elliptique',
      lesson: {
        formula: 'f(z+ω₁) = f(z+ω₂) = f(z), ω₁/ω₂ ∉ ℝ',
        text: "Une fonction elliptique est une fonction méromorphe f: ℂ→ℂ∪{∞} admettant deux périodes ω₁, ω₂ ∈ ℂ* avec ω₁/ω₂ ∉ ℝ. Elle est entièrement déterminée par ses valeurs sur le parallélogramme fondamental de côtés ω₁ et ω₂.",
        example: "℘(z) de Weierstrass est elliptique de périodes ω₁,ω₂ avec un pôle d'ordre 2 en 0. sn(u,k) de Jacobi est elliptique de périodes 4K et 2iK'."
      },
      fullBlocks: [
        {
          type: 'definition',
          title: 'Fonction méromorphe',
          text: "Une fonction f:ℂ→ℂ∪{∞} est méromorphe sur ℂ si elle est holomorphe sur ℂ sauf en un ensemble discret de pôles isolés. En chaque pôle, elle peut s'écrire f(z)=g(z)/(z−a)ⁿ avec g holomorphe, g(a)≠0 ; n est l'ordre du pôle."
        },
        {
          type: 'definition',
          title: 'Doublement périodique',
          text: "f est doublement périodique s'il existe ω₁,ω₂∈ℂ* avec ω₁/ω₂∉ℝ (non colinéaires) tels que f(z+ω₁)=f(z) et f(z+ω₂)=f(z) pour tout z. L'ensemble de toutes les périodes forme le réseau Λ=ℤω₁+ℤω₂."
        },
        {
          type: 'demo',
          title: "Une fonction entière doublement périodique est constante",
          text: "Théorème de Liouville elliptique : Si f est holomorphe (sans pôles) ET doublement périodique, alors f est constante. Preuve : f est continue sur le parallélogramme fondamental ℱ (compact), donc bornée. Étant doublement périodique, f est bornée sur ℂ entier. Par le théorème de Liouville classique, f est constante."
        },
        {
          type: 'demo',
          title: "La somme des résidus est nulle",
          text: "Toute fonction elliptique f a la même somme de résidus sur le parallélogramme fondamental : ∑Res(f,aᵢ)=0. Preuve : ∑Res = (1/2πi)∮_{∂ℱ} f(z)dz. Les côtés opposés de ∂ℱ se parcourent en sens contraire et f est périodique, donc les contributions s'annulent : intégrale = 0."
        },
        {
          type: 'formula',
          title: 'Ordre d\'une fonction elliptique',
          formula: 'ord(f) = ∑_{z∈ℱ} ord_z(f) (somme des ordres des pôles)',
          text: "L'ordre d'une fonction elliptique non-constante est ≥2. Il est égal au nombre de zéros (comptés avec multiplicité) dans ℱ, égal au nombre de pôles. Il n'existe pas de fonction elliptique d'ordre 1 (elle aurait un seul pôle simple → résidu ≠0, contradiction)."
        },
        {
          type: 'graph',
          title: 'Parallélogramme fondamental',
          svgContent: '<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="220" fill="#f8f9fa"/><polygon points="60,160 180,160 230,60 110,60" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><text x="55" y="178" font-size="11" fill="#1e3a8a">0</text><text x="178" y="178" font-size="11" fill="#1e3a8a">ω₁</text><text x="98" y="52" font-size="11" fill="#1e3a8a">ω₂</text><text x="228" y="52" font-size="11" fill="#1e3a8a">ω₁+ω₂</text><circle cx="140" cy="110" r="5" fill="#ef4444"/><text x="148" y="114" font-size="10" fill="#ef4444">pôle</text><text x="90" y="135" font-size="10" fill="#1d4ed8">ℱ (domaine fondamental)</text><line x1="60" y1="160" x2="200" y2="160" stroke="#555" stroke-width="1" stroke-dasharray="3"/><text x="200" y="170" font-size="9" fill="#555">→ axe réel</text></svg>',
          caption: 'Le parallélogramme fondamental ℱ contient exactement un représentant de chaque classe z+Λ.',
          text: "Toute valeur prise par une fonction elliptique est prise le même nombre de fois (l'ordre) dans ℱ. Les côtés opposés s'identifient : ℂ/Λ est un tore complexe."
        },
        {
          type: 'example',
          title: 'Exemple : parité et symétries',
          text: "℘(z) est paire : ℘(−z)=℘(z). Ses pôles sont exactement les points du réseau Λ. Dans ℱ, il y a un seul pôle d'ordre 2 en z=0 → ord(℘)=2. La fonction ℘' est impaire d'ordre 3 (pôle d'ordre 3 en 0, trois zéros : les demi-périodes ω₁/2, ω₂/2, (ω₁+ω₂)/2)."
        },
        {
          type: 'warning',
          title: 'Attention : pas de fonction elliptique d\'ordre 1',
          text: "Il n'existe pas de fonction elliptique avec un seul pôle simple dans ℱ : ce pôle aurait un résidu non nul, mais la somme des résidus doit être 0. L'ordre minimal est 2. ℘ est donc le prototype minimal."
        }
      ],
      levels: [
        // Niveau 1
        [
          {
            type: 'mcq',
            question: "Une fonction elliptique est par définition :",
            answers: ['Méromorphe et doublement périodique', 'Holomorphe et périodique', 'Trigonométrique et réelle', 'Entière et bornée'],
            correct: 0,
            explanation: "Une fonction elliptique doit être : (1) méromorphe sur ℂ (holomorphe sauf en des pôles isolés), et (2) doublement périodique (deux périodes ω₁, ω₂ non colinéaires). La condition méromorphe permet l'existence de pôles."
          },
          {
            type: 'mcq',
            question: "Deux périodes ω₁ et ω₂ sont admissibles si :",
            answers: ['ω₁/ω₂ ∉ ℝ', 'ω₁ = ω₂', 'ω₁/ω₂ ∈ ℤ', 'ω₁ et ω₂ sont réels'],
            correct: 0,
            explanation: "Il faut ω₁/ω₂∉ℝ pour que ω₁ et ω₂ soient non colinéaires sur ℂ≅ℝ². Si ω₁/ω₂∈ℝ, les périodes seraient colinéaires et le réseau dégénèrerait en un réseau unidimensionnel."
          },
          {
            type: 'mcq',
            question: "Si f est holomorphe ET doublement périodique sur ℂ, alors f est :",
            answers: ['Constante', 'Nulle', 'Un polynôme', 'Injective'],
            correct: 0,
            explanation: "Théorème de Liouville elliptique : f holomorphe et périodique est bornée sur ℂ (car bornée sur le parallélogramme fondamental compact), donc constante par Liouville classique."
          },
          {
            type: 'mcq',
            question: "L'ordre minimal d'une fonction elliptique non-constante est :",
            answers: ['2', '0', '1', '3'],
            correct: 0,
            explanation: "L'ordre 1 est impossible : un seul pôle simple donnerait un résidu non nul, contredisant ∑Res=0. L'ordre 0 correspond aux constantes. Donc ord≥2, et ℘ est d'ordre exactement 2."
          },
          {
            type: 'mcq',
            question: "Le parallélogramme fondamental ℱ est défini par :",
            answers: ['{aω₁+bω₂ : a,b ∈ [0,1)}', '{aω₁+bω₂ : a,b ∈ ℤ}', 'Le cercle unité', '{z : |z|<1}'],
            correct: 0,
            explanation: "ℱ = {aω₁+bω₂ : a,b∈[0,1)} est le parallélogramme fondamental. Il contient exactement un représentant de chaque classe de ℂ/Λ. Les côtés opposés sont identifiés."
          },
          {
            type: 'mcq',
            question: "La somme des résidus d'une fonction elliptique dans ℱ vaut :",
            answers: ['0', '1', 'ω₁+ω₂', '2πi'],
            correct: 0,
            explanation: "∑Res(f,aᵢ) = (1/2πi)∮_{∂ℱ}f(z)dz = 0 car les côtés opposés de ∂ℱ se compensent (la périodicité). C'est pourquoi l'ordre 1 est impossible (un résidu isolé ne peut être nul)."
          },
          {
            type: 'mcq',
            question: "Une fonction méromorphe est holomorphe sauf en :",
            answers: ['Un ensemble discret de pôles', 'Partout sauf sur ℝ', 'Un ensemble dense', 'Un intervalle'],
            correct: 0,
            explanation: "Méromorphe = holomorphe sauf en des pôles isolés (ensemble discret). En chaque pôle z=a d'ordre n, f(z)(z−a)ⁿ est holomorphe et non nulle en a."
          },
          {
            type: 'mcq',
            question: "Le tore complexe ℂ/Λ est homéomorphe à :",
            answers: ['S¹ × S¹ (tore réel)', 'S²', 'ℝ²', 'S¹'],
            correct: 0,
            explanation: "ℂ/Λ est obtenu en identifiant les côtés opposés du parallélogramme. Topologiquement : deux côtés parallèles forment un cylindre S¹×[0,1], puis les deux bords forment S¹×S¹. C'est le tore réel T²."
          },
          {
            type: 'input',
            visual: 'ord(℘)',
            question: "La fonction ℘ de Weierstrass a un pôle d'ordre 2 en z=0 et aucun autre pôle dans ℱ. Quel est son ordre ?",
            correct: '2',
            explanation: "L'ordre d'une fonction elliptique = nombre de pôles (comptés avec multiplicité) dans ℱ. ℘ a un seul pôle de multiplicité 2 en 0, donc ord(℘)=2."
          },
          {
            type: 'mcq',
            question: "Le nombre de zéros d'une fonction elliptique dans ℱ (comptés avec multiplicité) est :",
            answers: ["Égal à l'ordre de f", 'Toujours 0', 'Toujours 1', 'Infini'],
            correct: 0,
            explanation: "Le nombre de zéros dans ℱ = nombre de pôles dans ℱ = ord(f). C'est la conséquence du théorème des zéros et pôles : ∑(ord zéros − ord pôles) = 0 dans ℱ."
          }
        ],
        // Niveau 2
        [
          {
            type: 'mcq',
            question: "Si f est elliptique d'ordre n, l'équation f(z)=c (c∈ℂ) a combien de solutions dans ℱ ?",
            answers: ['Exactement n (comptées avec multiplicité)', '1', 'n ou n−1', '∞'],
            correct: 0,
            explanation: "Pour tout c∈ℂ∪{∞}, f−c est elliptique d'ordre n et a exactement n zéros dans ℱ (comptés avec multiplicité). C'est l'analogue du théorème fondamental pour les fonctions rationnelles."
          },
          {
            type: 'mcq',
            question: "Toute fonction elliptique s'exprime rationnellement en :",
            answers: ['℘(z) et ℘\'(z)', '℘(z) seul', 'sin(z) et cos(z)', 'ez et e−z'],
            correct: 0,
            explanation: "Théorème de structure : si f est elliptique associée au réseau Λ, alors f = R(℘,℘') pour une fraction rationnelle R. Ceci car {℘,℘'} engendre le corps des fonctions elliptiques de Λ."
          },
          {
            type: 'mcq',
            question: "Le corps des fonctions elliptiques de réseau Λ est isomorphe à :",
            answers: ['ℂ(℘)[℘\']/(℘\'²−4℘³+g₂℘+g₃)', 'ℂ(z)', 'ℂ[℘]', 'ℂ(sn,cn)'],
            correct: 0,
            explanation: "Le corps K(Λ)=ℂ(℘,℘') est le corps des fonctions rationnelles en ℘ et ℘', avec la relation (℘')²=4℘³−g₂℘−g₃. C'est une extension de degré 2 de ℂ(℘) via ℘'."
          },
          {
            type: 'mcq',
            question: "Une fonction elliptique paire s'exprime comme fonction de :",
            answers: ['℘(z) seul (fraction rationnelle en ℘)', '℘\'(z) seul', 'sin(z/ω₁)', '℘(z)·℘\'(z)'],
            correct: 0,
            explanation: "Si f est paire et elliptique, f(z)=R(℘(z)) pour une fraction rationnelle R. Ceci car ℘ est paire et engendre le sous-corps des fonctions paires de K(Λ)."
          },
          {
            type: 'mcq',
            question: "Les demi-périodes ω₁/2, ω₂/2, (ω₁+ω₂)/2 sont les zéros de :",
            answers: ["℘'(z)", '℘(z)', '℘(z)−℘(ω₁/2)', 'σ(z)'],
            correct: 0,
            explanation: "℘' est impaire d'ordre 3. Ses zéros dans ℱ sont les trois demi-périodes e₁=ω₁/2, e₂=ω₂/2, e₃=(ω₁+ω₂)/2 (points d'ordre 2 du tore ℂ/Λ). On a eᵢ=℘(ωᵢ/2)∈ℝ si le réseau est réel."
          },
          {
            type: 'mcq',
            question: "Si f est elliptique d'ordre 2 avec un seul pôle d'ordre 2 en a∈ℱ, alors :",
            answers: ['f(z) = c·℘(z−a) + d pour des constantes c,d', 'f(z) = ℘\'(z)', 'f(z) = c/z²', 'f(z) = ℘(z)²'],
            correct: 0,
            explanation: "Une elliptique d'ordre 2 avec seul pôle double en a diffère de ℘(z−a) par une constante (d) et un facteur (c). Par unicité de la partie singulière : f(z)=c·℘(z−a)+d."
          },
          {
            type: 'mcq',
            question: "Le théorème d'addition pour ℘ affirme que ℘(z+w) s'exprime par :",
            answers: ['Une fraction rationnelle en ℘(z), ℘(w), ℘\'(z), ℘\'(w)', 'ℌ(z)+℘(w)', '℘(z)℘(w)', 'ℌ(z+w) = 2℘(z)'],
            correct: 0,
            explanation: "Le théorème d'addition : ℘(z+w) = (1/4)[(℘'(z)−℘'(w))/(℘(z)−℘(w))]²−℘(z)−℘(w). C'est l'expression analytique de la loi de groupe sur la courbe elliptique y²=4x³−g₂x−g₃."
          },
          {
            type: 'mcq',
            question: "La fonction σ de Weierstrass est liée à ℘ par :",
            answers: ["℘(z) = −(d²/dz²)log σ(z)", 'σ\'(z)/σ(z) = ℘(z)', '℘(z) = σ(z)²', '℘(z) = σ\'(z)'],
            correct: 0,
            explanation: "La fonction sigma de Weierstrass est entière avec zéros simples en Λ. On a ζ(z)=σ'(z)/σ(z)=−∫℘(z)dz (quasi-période), et ℘(z)=−ζ'(z)=−(d/dz)(σ'/σ)=−d²log σ/dz²."
          },
          {
            type: 'mcq',
            question: "La fonction ζ de Weierstrass (pas Riemann) est :",
            answers: ['ζ(z) = −∫℘(z)dz, quasi-périodique : ζ(z+ωᵢ)=ζ(z)+ηᵢ', 'La fonction zêta de Riemann', 'ζ(z) = ℘(z)/z', 'Une fonction entière'],
            correct: 0,
            explanation: "La ζ de Weierstrass vérifie ζ'(z)=−℘(z). Elle n'est pas périodique mais quasi-périodique : ζ(z+ωᵢ)=ζ(z)+ηᵢ où les quasi-périodes ηᵢ=2ζ(ωᵢ/2) vérifient η₁ω₂−η₂ω₁=2πi (Legendre)."
          },
          {
            type: 'mcq',
            question: "Le nombre de pôles distincts d'une fonction elliptique d'ordre 2 dans ℱ peut être :",
            answers: ['1 (pôle double) ou 2 (deux pôles simples)', '2 uniquement', '1 uniquement', '3'],
            correct: 0,
            explanation: "Ordre 2 = somme des ordres des pôles = 2. Donc soit un seul pôle d'ordre 2 (comme ℘), soit deux pôles simples (comme sn a deux pôles simples dans son parallélogramme)."
          }
        ],
        // Niveau 3
        [
          {
            type: 'mcq',
            question: "Le théorème de Liouville elliptique (version forte) : le nombre de zéros de f dans ℱ :",
            answers: ['Égale le nombre de pôles et tous deux égalent ord(f)', 'Peut être différent du nombre de pôles', 'Est toujours pair', 'Vaut toujours 2'],
            correct: 0,
            explanation: "En appliquant le théorème de l'argument à ∮_{∂ℱ} f'/f dz = 2πi(N−P)=0 (car f'/f est aussi elliptique), on obtient N=P=ord(f). Zéros et pôles s'équilibrent exactement."
          },
          {
            type: 'mcq',
            question: "La relation entre les zéros aᵢ et pôles bⱼ d'une fonction elliptique dans ℱ est :",
            answers: ['∑aᵢ ≡ ∑bⱼ (mod Λ)', '∑aᵢ = ∑bⱼ exactement', '∑aᵢ − ∑bⱼ = 0 dans ℂ', '∑aᵢ + ∑bⱼ = 0'],
            correct: 0,
            explanation: "Abel-Jacobi pour les fonctions elliptiques : ∑aᵢ−∑bⱼ∈Λ. Ce n'est pas l'égalité exacte dans ℂ mais la congruence modulo le réseau. C'est une condition nécessaire et suffisante pour qu'une telle fonction elliptique existe."
          },
          {
            type: 'mcq',
            question: "La structure du corps K(Λ) = ℂ(℘,℘') est :",
            answers: ['Extension algébrique de degré 2 de ℂ(℘)', 'Corps de fonctions de genre 0', 'Extension transcendante pure', 'Corps de nombres'],
            correct: 0,
            explanation: "℘' satisfait (℘')²=4℘³−g₂℘−g₃, donc ℘' est algébrique de degré 2 sur ℂ(℘). Le corps K(Λ)=ℂ(℘,℘') est une extension de degré 2 de ℂ(℘)≅ℂ(t) (corps de fonctions rationnelles)."
          },
          {
            type: 'mcq',
            question: "L'automorphisme τ:z→−z du tore ℂ/Λ agit sur ℘ et ℘' par :",
            answers: ['℘(−z)=℘(z) (paire) et ℘\'(−z)=−℘\'(z) (impaire)', '℘(−z)=−℘(z) et ℘\'(−z)=℘\'(z)', '℘(−z)=1/℘(z)', '℘(−z)=℘(z)+ω₁'],
            correct: 0,
            explanation: "℘ est paire : ℘(−z)=℘(z) (se vérifie sur la série de Laurent ou la définition). ℘' est sa dérivée, donc impaire : ℘'(−z)=−℘'(z). Ces parités sont fondamentales dans la théorie."
          },
          {
            type: 'mcq',
            question: "La fonction ℘ prend chaque valeur c exactement deux fois dans ℱ (pour c≠eᵢ). Les deux préimages z₁,z₂ satisfont :",
            answers: ['z₁ + z₂ ≡ 0 (mod Λ)', 'z₁ = z₂', 'z₁ − z₂ = ω₁', 'z₁ = −z₂ + ω₁'],
            correct: 0,
            explanation: "Puisque ℘ est paire, si ℘(z₁)=c, alors ℘(−z₁)=c aussi. Les deux solutions sont z₁ et −z₁, qui vérifient z₁+(−z₁)=0≡0 (mod Λ). Pour les valeurs eᵢ=℘(ωᵢ/2), z₁=ωᵢ/2=−ωᵢ/2 (mod Λ), donc multiplicité 2."
          },
          {
            type: 'mcq',
            question: "La formule de factorisation de ℘(z)−eᵢ (où eᵢ=℘(ωᵢ/2)) est :",
            answers: ['℘(z)−eᵢ = (σ(z−ωᵢ/2)/σ(ωᵢ/2)·σ(z))² × const', '℘(z)−eᵢ = (z−ωᵢ/2)²·g(z)', '℘(z)−eᵢ = σ(z)/σ(ωᵢ/2)', '℘(z)−eᵢ = 0 pour tout z'],
            correct: 0,
            explanation: "℘(z)−eᵢ a un zéro double en ωᵢ/2 (point d'ordre 2 du tore). On peut l'écrire en termes de la fonction sigma. La formule exacte utilise σ(z−ωᵢ/2)²/σ(z)² × une constante."
          },
          {
            type: 'mcq',
            question: "La relation de quasi-période de ζ : ζ(z+ω₁)=ζ(z)+η₁. L'identité de Legendre η₁ω₂−η₂ω₁ vaut :",
            answers: ['2πi', 'π', 'ω₁ω₂', '0'],
            correct: 0,
            explanation: "L'identité de Legendre : η₁ω₂−η₂ω₁=2πi. Elle se démontre en intégrant ζ sur ∂ℱ et en utilisant le théorème des résidus (ζ a un résidu 1 en 0). C'est l'analogue elliptique de la formule de Cauchy."
          },
          {
            type: 'mcq',
            question: "Une fonction elliptique impaire d'ordre 3 s'écrit :",
            answers: ["c·℘'(z) + fonctions d'ordre ≤3 impaires", 'c·℘(z)', 'c·℘(z)·℘\'(z)', 'c/℘(z)'],
            correct: 0,
            explanation: "℘'(z) est impaire d'ordre 3 (pôle triple en 0). Toute elliptique impaire d'ordre 3 est un multiple scalaire de ℘'(z) : f(z)=c·℘'(z). Les fonctions elliptiques impaires d'ordre ≤2 sont nulles."
          },
          {
            type: 'mcq',
            question: "Le développement de Laurent de ℘ en z=0 commence par :",
            answers: ['℘(z) = 1/z² + (g₂/20)z² + (g₃/28)z⁴ + …', '℘(z) = 1/z + g₂z + …', '℘(z) = z² + g₂ + …', '℘(z) = 1/z² + 1'],
            correct: 0,
            explanation: "Le développement de Laurent de ℘ en 0 : ℘(z)=1/z²+∑_{k≥1}(2k+1)G_{2k+2}z^{2k} = 1/z²+(g₂/20)z²+(g₃/28)z⁴+… où Gₙ=∑_{ω∈Λ*} ω^{−n} sont les séries d'Eisenstein."
          },
          {
            type: 'mcq',
            question: "Deux réseaux Λ et Λ' donnent des tores isomorphes si et seulement si :",
            answers: ["Λ' = α·Λ pour un certain α∈ℂ* (homothétie)", "Λ' = Λ+z₀ (translation)", "Λ et Λ' ont la même aire", "Λ' = Λ"],
            correct: 0,
            explanation: "ℂ/Λ et ℂ/Λ' sont isomorphes comme tores complexes ⟺ ∃α∈ℂ* tel que Λ'=αΛ. C'est pourquoi on normalise τ=ω₂/ω₁ dans le demi-plan supérieur ℍ et on quotiente par SL₂(ℤ)."
          }
        ],
        // Niveau 4
        [
          {
            type: 'mcq',
            question: "Le théorème de structure complète : le corps K(Λ) des fonctions elliptiques est isomorphe au corps des fonctions :",
            answers: ["ℂ(E) = corps de fonctions de la courbe elliptique E : y²=4x³−g₂x−g₃", 'ℂ(ℙ¹) = corps des fonctions rationnelles', 'ℂ(z) avec z transcendant', 'Corps des fractions de ℂ[x,y]/(y²−x³)'],
            correct: 0,
            explanation: "L'application ℘:ℂ/Λ→E (courbe elliptique) est un isomorphisme de groupes analytiques. Elle induit un isomorphisme de corps K(Λ)≅ℂ(E). C'est le pont entre fonctions elliptiques et courbes elliptiques."
          },
          {
            type: 'mcq',
            question: "La multiplication complexe : un réseau Λ admet une multiplication complexe si :",
            answers: ['∃α∈ℂ∖ℤ tel que αΛ⊂Λ (endomorphisme non-entier)', 'ω₁/ω₂∈ℝ', 'g₂=g₃=0', 'Λ=ℤ+ℤi'],
            correct: 0,
            explanation: "Λ admet une multiplication complexe (CM) si son anneau des endomorphismes End(ℂ/Λ)={α∈ℂ: αΛ⊂Λ} est strictement plus grand que ℤ. Cela se produit exactement quand τ=ω₂/ω₁ est quadratique imaginaire sur ℚ."
          },
          {
            type: 'mcq',
            question: "L'espace des modules des tores complexes M₁,₁ est :",
            answers: ['ℍ/SL₂(ℤ) (domaine fondamental modulaire)', 'ℍ', 'ℙ¹(ℂ)', 'ℂ/Λ'],
            correct: 0,
            explanation: "Deux tores ℂ/Λ et ℂ/Λ' sont isomorphes ⟺ leurs paramètres τ=ω₂/ω₁ et τ' sont liés par une transformation de Möbius entière τ'=(aτ+b)/(cτ+d), [a,b;c,d]∈SL₂(ℤ). L'espace des modules est donc ℍ/SL₂(ℤ)."
          },
          {
            type: 'mcq',
            question: "La courbe modulaire X(1) = ℍ*/PSL₂(ℤ) est isomorphe en tant que surface de Riemann à :",
            answers: ['ℙ¹(ℂ) (sphère de Riemann)', 'Tore T²', 'Surface de genre 2', 'ℂ'],
            correct: 0,
            explanation: "X(1)=ℍ*/PSL₂(ℤ) est compacte (on ajoute la pointe ∞), de genre 0, et l'invariant j fournit un isomorphisme j:X(1)→ℙ¹(ℂ). C'est pourquoi j prend toutes les valeurs dans ℂ (y compris ∞ en τ=i∞)."
          },
          {
            type: 'mcq',
            question: "Le développement de Fourier de j(τ) = 1/q + 744 + 196884q + … (q=e^(2πiτ)) montre que ses coefficients sont :",
            answers: ['Liés aux dimensions des représentations du monstre (moonshine)', 'Des entiers quelconques', 'Des puissances de 2', 'Des valeurs de ℘'],
            correct: 0,
            explanation: "Moonshine de McKay-Thompson (1978) : les coefficients du j-invariant (196884=196883+1, etc.) sont des sommes de dimensions de représentations irréductibles du groupe Monstre. Prouvé par Borcherds (1992, médaille Fields)."
          },
          {
            type: 'mcq',
            question: "Le discriminant modulaire Δ(τ) = g₂(τ)³−27g₃(τ)² est une forme modulaire de poids :",
            answers: ['12', '2', '6', '0'],
            correct: 0,
            explanation: "Δ(τ) est une forme modulaire de poids 12 pour SL₂(ℤ) : Δ((aτ+b)/(cτ+d))=(cτ+d)¹²Δ(τ). Son développement q=e^(2πiτ) : Δ=q∏(1−qⁿ)²⁴=∑τ(n)qⁿ où τ est la fonction de Ramanujan."
          },
          {
            type: 'mcq',
            question: "La forme modulaire G₄(τ) (série d'Eisenstein de poids 4) vaut en τ=i (réseau carré) :",
            answers: ['G₄(i) ≠ 0 (g₂(i) ≠ 0, g₃(i) = 0 par symétrie)', 'G₄(i) = 0', 'G₄(i) = π', 'G₄(i) = 1'],
            correct: 0,
            explanation: "Le réseau carré Λ=ℤ+ℤi a symétrie d'ordre 4 (multiplication par i). L'invariant g₃ est de poids 6, impair sous z→iz, donc g₃=0. En revanche g₂≠0. Pour le réseau Eisenstein (j=0), g₂=0 et g₃≠0."
          },
          {
            type: 'mcq',
            question: "La fonction thêta θ₁(z,τ) = 2∑(-1)ⁿ q^((n+1/2)²) sin((2n+1)πz) est liée à σ par :",
            answers: ["σ(z) = θ₁(z/ω₁, τ) × facteur exponentiel", 'σ(z) = θ₁(z,τ)', 'σ(z) = θ₁\'(0,τ)·z', 'σ(z) = ∫θ₁ dz'],
            correct: 0,
            explanation: "La relation entre sigma de Weierstrass et thêta de Jacobi est σ(z)=θ₁(z/ω₁,τ)/(θ₁'(0,τ)·(2πi/ω₁))×exp(η₁z²/(2ω₁)). Cela relie les deux approches (Weierstrass et Jacobi) de la théorie."
          },
          {
            type: 'mcq',
            question: "Le groupe des automorphismes d'un tore générique ℂ/Λ est :",
            answers: ['ℤ/2ℤ = {±1} (involution z→−z)', 'Trivial', 'ℤ/4ℤ (pour τ=i)', 'S₃'],
            correct: 0,
            explanation: "Pour un tore générique, Aut(ℂ/Λ)={±1}≅ℤ/2ℤ. Pour le réseau carré τ=i : Aut=ℤ/4ℤ (multiplication par i). Pour le réseau triangulaire τ=e^(2πi/3) : Aut=ℤ/6ℤ (multiplication par ζ₃)."
          },
          {
            type: 'mcq',
            question: "La caractéristique d'Euler du tore ℂ/Λ vaut :",
            answers: ['χ(T²) = 0', '2', '1', '−2'],
            correct: 0,
            explanation: "χ(T²) = χ(S¹)² = 0² = 0. Par la formule de Riemann-Hurwitz, cela implique que toute fonction elliptique f:T²→ℙ¹ de degré d satisfait 2−2·0 = d(2−0)−R où R est la ramification totale. Donc R=2d−2+2=2d, ce qui s'accorde avec le fait que chaque valeur est prise d fois."
          }
        ],
        // Niveau 5
        [
          {
            type: 'mcq',
            question: "La cohomologie H¹(ℂ/Λ,ℤ) est isomorphe à :",
            answers: ['ℤ² (engendré par les deux cycles du tore)', 'ℤ', '0', 'ℤ/2ℤ'],
            correct: 0,
            explanation: "H¹(T²,ℤ)=ℤ² car T²=S¹×S¹ et H¹(S¹)=ℤ (par la formule de Künneth). Les deux générateurs correspondent aux cycles γ₁ et γ₂ issus de ω₁ et ω₂, le long desquels on intègre les formes différentielles."
          },
          {
            type: 'mcq',
            question: "La forme holomorphe différentielle sur ℂ/Λ correspond à :",
            answers: ['dz (trivialement : Ω¹(T²) ≅ ℂ)', '℘(z)dz', 'd℘(z)', '℘\'(z)dz/℘(z)'],
            correct: 0,
            explanation: "Sur ℂ/Λ, la forme dz est invariante par translations et descend à une forme holomorphe non nulle. H^(1,0)(ℂ/Λ)=ℂ·dz est de dimension 1. C'est la propriété qui caractérise les tores comme variétés de Calabi-Yau de dimension 1."
          },
          {
            type: 'mcq',
            question: "La dualité de Serre sur ℂ/Λ donne H⁰(Ω¹)⊗H⁰(Ω¹) → H⁰(Ω²). Or Ω² = K_T² est :",
            answers: ['Trivial (K_T²≅𝒪)', 'Ample', 'Non-trivial', 'De degré −2'],
            correct: 0,
            explanation: "Le fibré canonique K_T²=Ω² d'un tore complexe T² est trivial (c²₁=0, χ=0). C'est pourquoi T² est une variété de Calabi-Yau (fibré canonique trivial). Cela implique H⁰(K)=ℂ (monodifférentielles holomorphes)."
          },
          {
            type: 'mcq',
            question: "Le rang du groupe de Mordell-Weil E(ℚ) pour une courbe elliptique E/ℚ est :",
            answers: ['Un entier r≥0 (théorème de Mordell-Weil)', 'Toujours 0', 'Toujours 1', 'Infini'],
            correct: 0,
            explanation: "Le théorème de Mordell-Weil (1922, généralisé par Weil 1929) : E(ℚ)≅ℤʳ⊕E(ℚ)_tors pour un entier r≥0 (le rang). Le rang peut être 0 (nombre fini de points rationnels) ou positif. La conjecture BSD prédit r=ord_{s=1} L(E,s)."
          },
          {
            type: 'mcq',
            question: "La caractérisation analytique des fonctions doublement périodiques via la théorie de Nevanlinna : le nombre de fois que f prend la valeur c (Nevanlinna, comptage) croît comme :",
            answers: ['n(r,c) ~ n·log r (ordre 1 au sens de Nevanlinna)', 'n(r,c) ~ r²', 'n(r,c) ~ eʳ', 'n(r,c) → constante'],
            correct: 0,
            explanation: "Une fonction méromorphe doublement périodique est d'ordre 1 au sens de la théorie de Nevanlinna : T(r,f)~C·r pour r→∞. C'est cohérent avec le fait qu'elle prend chaque valeur exactement ord(f) fois par période."
          },
          {
            type: 'mcq',
            question: "Le théorème d'uniformisation de Koebe-Poincaré appliqué au tore ℂ/Λ donne :",
            answers: ['Le revêtement universel est ℂ (plan complexe, non sphère ni disque)', 'Le revêtement est ℙ¹', 'Le revêtement est le disque unité 𝔻', 'ℂ/Λ est simplement connexe'],
            correct: 0,
            explanation: "Par Koebe-Poincaré, toute surface de Riemann compacte de genre g a revêtement universel : ℙ¹ si g=0, ℂ si g=1 (tore), 𝔻 si g≥2. Le tore ℂ/Λ a genre 1 → revêtement ℂ, et π₁=ℤ²=Λ."
          },
          {
            type: 'mcq',
            question: "La connexion de Gauss-Manin sur la famille f:E→S des tores complexes est :",
            answers: ['Une connexion intégrable sur R¹f_*ℤ⊗𝒪_S permettant de dériver les périodes', "L'équation de Picard-Fuchs est sa représentation locale", 'Les deux réponses précédentes sont correctes', 'Une connexion sur le fibré tangent'],
            correct: 2,
            explanation: "La connexion de Gauss-Manin est une connexion intégrable sur R¹f_*ℤ⊗𝒪_S dont les sections horizontales sont les classes de cohomologie constantes. L'équation de Picard-Fuchs est exactement la représentation locale de cette connexion en coordonnées."
          },
          {
            type: 'mcq',
            question: "Le théorème d'Abel pour les tores : une diviseur D=∑nᵢ[Pᵢ] est le diviseur d'une fonction méromorphe si et seulement si :",
            answers: ['∑nᵢ=0 et ∑nᵢ[Pᵢ]=0 dans Jac(E)=E', '∑nᵢ=0 seulement', 'D est effectif', '∑nᵢ Pᵢ = 0 dans ℂ'],
            correct: 0,
            explanation: "Sur E (courbe elliptique), D est principal ⟺ deg(D)=∑nᵢ=0 ET ∑nᵢPᵢ=O dans le groupe E (loi de groupe). C'est le théorème d'Abel-Jacobi pour les courbes elliptiques. Pour les zéros et pôles de f : ∑aᵢ−∑bⱼ=O."
          },
          {
            type: 'mcq',
            question: "La représentation ℓ-adique T_ℓ(E) = lim_{←} E[ℓⁿ] est un ℤ_ℓ-module libre de rang :",
            answers: ['2 (sur ℤ_ℓ)', '1', 'ℓ', '2ℓ'],
            correct: 0,
            explanation: "Le module de Tate T_ℓ(E)=lim E[ℓⁿ] est libre de rang 2 sur ℤ_ℓ car E[ℓⁿ]≅(ℤ/ℓⁿ)² (pour char≠ℓ). La représentation ρ_ℓ:Gal(ℚ̄/ℚ)→GL₂(ℤ_ℓ) est au cœur du programme de Langlands."
          },
          {
            type: 'mcq',
            question: "Le théorème de Faltings (conjecture de Mordell) implique pour les courbes de genre ≥2 :",
            answers: ['Un nombre fini de points rationnels', 'Un nombre infini', 'Aucun point rationnel', 'Un rang non borné'],
            correct: 0,
            explanation: "Faltings (1983) prouve que toute courbe algébrique de genre g≥2 sur ℚ n'a qu'un nombre fini de points rationnels. Ceci contraste avec les courbes elliptiques (genre 1) qui peuvent avoir un groupe infini E(ℚ)≅ℤʳ⊕torsion."
          }
        ],
        // =======================
        // ===== Niveau L1 =======
        // =======================
        [
          {
            type: 'mcq',
            question: "La catégorie des courbes elliptiques sur ℂ est équivalente à la catégorie :",
            answers: ['Des réseaux Λ⊂ℂ (à homothétie près : tores complexes)', 'Des groupes abéliens', 'Des surfaces de Riemann de genre 2', 'Des corps finis'],
            correct: 0,
            explanation: "Le foncteur E↦(ℂ/Λ) établit une équivalence de catégories entre {courbes elliptiques/ℂ, isogénies} et {réseaux Λ⊂ℂ, homomorphismes α:Λ→Λ' avec αΛ⊂Λ'}. C'est le théorème d'uniformisation analytique des courbes elliptiques."
          },
          {
            type: 'mcq',
            question: "La cohomologie de Betti H¹(E(ℂ),ℚ) vs cohomologie de de Rham H¹_dR(E/ℚ) sont reliées par :",
            answers: ['La comparaison de Grothendieck : H¹_dR⊗ℂ ≅ H¹_B⊗ℂ', "Elles sont isomorphes sur ℚ directement", 'H¹_dR⊗ℚ ≅ H¹_B⊗ℚ sans extension', 'Elles sont sans rapport'],
            correct: 0,
            explanation: "Le théorème de comparaison de Grothendieck affirme H¹_dR(E/ℚ)⊗_ℚ ℂ ≅ H¹(E(ℂ),ℚ)⊗_ℚ ℂ. Ce n'est pas un isomorphisme sur ℚ : le passage à ℂ est nécessaire, et c'est précisément dans cet isomorphisme que vivent les périodes elliptiques."
          },
          {
            type: 'mcq',
            question: "Le groupe de Galois absolu Gal(ℚ̄/ℚ) agit sur T_ℓ(E). Pour une courbe CM par K, cette action se factorise par :",
            answers: ['Un groupe abélien (via la théorie du corps de classes de K)', 'GL₂(ℤ_ℓ) entier', 'Un groupe trivial', 'SL₂(ℤ_ℓ)'],
            correct: 0,
            explanation: "Pour une courbe elliptique à multiplication complexe par K, la représentation ρ_ℓ est abélienne et se factorise par Gal(K^ab/K) via la théorie du corps de classes. C'est le théorème de CM : ρ_ℓ est un caractère de Hecke, pas une représentation GL₂ générique."
          },
          {
            type: 'mcq',
            question: "La conjecture de Birch et Swinnerton-Dyer (BSD) prédit que le rang de E(ℚ) est égal à :",
            answers: ['L\'ordre d\'annulation de L(E,s) en s=1', 'Le degré du corps de définition', 'Le nombre de points de torsion', 'La dimension de H¹(E)'],
            correct: 0,
            explanation: "La conjecture BSD affirme : rang(E(ℚ)) = ord_{s=1} L(E,s). C'est l'un des sept problèmes du millénaire. Un million de dollars est promis pour sa démonstration. Les travaux de Wiles et autres l'ont confirmée dans des cas partiels."
          },
          {
            type: 'mcq',
            question: "Le théorème de Siegel sur les points entiers d'une courbe elliptique affirme :",
            answers: ['E(ℤ) est fini (nombre fini de points entiers)', 'E(ℤ) est infini', 'E(ℤ) = E(ℚ)', 'E(ℤ) est vide'],
            correct: 0,
            explanation: "Le théorème de Siegel (1929) : une courbe elliptique E/ℚ n'a qu'un nombre fini de points entiers dans ℤ². Cela contraste avec E(ℚ) qui peut être infini (rang ≥1). La preuve utilise les approximations diophantiques et le théorème de Thue-Siegel-Roth."
          },
          {
            type: 'mcq',
            question: "La hauteur de Néron-Tate ĥ: E(ℚ)→ℝ est une forme quadratique telle que ĥ(P)=0 si et seulement si :",
            answers: ['P est un point de torsion', 'P est l\'infini', 'P = (0,0)', 'ĥ ne s\'annule jamais'],
            correct: 0,
            explanation: "La hauteur de Néron-Tate ĥ est une forme quadratique définie positive sur E(ℚ)/E(ℚ)_tors. Elle s'annule exactement sur la torsion. Elle donne une structure euclidienne sur le groupe de Mordell-Weil permettant de calculer le régulateur."
          },
          {
            type: 'mcq',
            question: "La formule du conducteur d'une courbe elliptique E/ℚ (conducteur N) intervient dans la théorie des formes modulaires via :",
            answers: ['Le théorème de Taniyama-Shimura-Wiles : E est associée à une forme de poids 2 et niveau N', 'La formule de Weil explicite', 'La formule d\'Euler L(E,s)', 'La théorie d\'Iwasawa'],
            correct: 0,
            explanation: "Taniyama-Shimura (prouvé par Wiles, Taylor-Wiles 1995) : toute courbe elliptique E/ℚ de conducteur N est modulaire, i.e., L(E,s) = L(f,s) pour une forme modulaire f ∈ S₂(Γ₀(N)). C'est le théorème central qui a permis de démontrer le Grand Théorème de Fermat."
          },
          {
            type: 'mcq',
            question: "Une isogénie φ: E₁→E₂ entre courbes elliptiques est :",
            answers: ['Un morphisme de groupes qui est aussi un morphisme de courbes algébriques', 'Un isomorphisme de corps', 'Une application entre points rationnels uniquement', 'Un automorphisme de E₁'],
            correct: 0,
            explanation: "Une isogénie est un morphisme de variétés algébriques φ:E₁→E₂ non constant, envoyant O₁ sur O₂. Elle est automatiquement un morphisme de groupes et son noyau est un sous-groupe fini. Le degré de l'isogénie est l'ordre de ker(φ)."
          },
          {
            type: 'mcq',
            question: "La transformée de Fourier sur E(ℂ)=ℂ/Λ correspond à l'expansion en série de Laurent de ℘(z) :",
            answers: ['℘(z) = 1/z² + Σ_{n≥1} (2n+1)G_{2n+2} z^{2n}', '℘(z) = Σ e^{2πinz}', '℘(z) = Σ 1/(z−n)²', '℘(z) = sin(z)/z'],
            correct: 0,
            explanation: "Le développement de Laurent de ℘ en 0 est ℘(z)=1/z²+Σ_{k≥1}(2k+1)G_{2k+2}z^{2k} où G_{2k}=Σ_{ω∈Λ*}ω^{-2k} sont les séries d'Eisenstein. Ce développement montre que ℘ est déterminée par les invariants G₄, G₆ du réseau."
          },
          {
            type: 'mcq',
            question: "Le j-invariant d'une courbe elliptique E: y²=x³+ax+b est j(E) = :",
            answers: ['1728·(4a³)/(4a³+27b²)', '1728·a/b', 'a³/b²', '4a³/(4a³+27b²)'],
            correct: 0,
            explanation: "j(E) = 1728·4a³/(4a³+27b²). Le facteur 1728 assure j=0 quand a=0 (type CM par ℤ[ζ₃]) et j=1728 quand b=0 (CM par ℤ[i]). j(E) détermine E à isomorphisme (sur ℂ̄) près, et j=j(τ)=q⁻¹+744+196884q+… est la fonction modulaire par excellence."
          },
          {
            type: 'mcq',
            question: "La dualité de Weil e_N: E[N]×E[N]→μ_N est :",
            answers: ['Un accouplement symplectique (alternant, non dégénéré)', 'Un accouplement symétrique', 'Un accouplement trivial', 'Une forme bilinéaire sur ℝ'],
            correct: 0,
            explanation: "L'accouplement de Weil e_N(P,Q)∈μ_N est alternant : e_N(P,P)=1 et antisymétrique e_N(Q,P)=e_N(P,Q)⁻¹. Il est non dégénéré. Sur T_ℓ(E), il donne det(ρ_ℓ)=χ_ℓ le caractère cyclotomique. Fondamental pour la cryptographie sur courbes elliptiques (appariements de Weil-Tate)."
          }
        ]
      ]
    },

    // ============================================================
    // NOTION 3 : Réseau de périodes
    // ============================================================
    {
      id: 'reseau-periodes',
      label: 'Réseau de périodes',
      lesson: {
        formula: 'Λ = ℤω₁ ⊕ ℤω₂, Im(ω₂/ω₁) > 0',
        text: 'Les périodes d\'une fonction elliptique forment un réseau Λ dans ℂ, engendré par deux périodes ω₁ et ω₂ dont le rapport est non réel. Toute la structure analytique de la fonction se lit sur ce réseau.',
        example: 'Pour τ = i (module carré), Λ = ℤ + ℤi est le réseau carré. Pour τ = e^{iπ/3}, Λ = ℤ + ℤe^{iπ/3} est le réseau hexagonal.'
      },
      fullBlocks: [
        {
          type: 'definition',
          title: 'Réseau complexe',
          text: 'Un réseau Λ ⊂ ℂ est un sous-groupe discret de rang 2 : Λ = ℤω₁ ⊕ ℤω₂ avec ω₁, ω₂ ∈ ℂ linéairement indépendants sur ℝ (i.e., Im(ω₂/ω₁) ≠ 0). Par convention, on choisit Im(ω₂/ω₁) > 0.'
        },
        {
          type: 'definition',
          title: 'Domaine fondamental',
          text: 'Le domaine fondamental (ou parallélogramme des périodes) est l\'ensemble 𝒟 = {t₁ω₁ + t₂ω₂ : 0 ≤ t₁,t₂ < 1}. Chaque classe de ℂ/Λ possède un unique représentant dans 𝒟. Le tore complexe ℂ/Λ est compact de volume |Im(ω̄₁ω₂)|.'
        },
        {
          type: 'formula',
          title: 'Module τ et demi-plan de Poincaré',
          formula: 'τ = ω₂/ω₁ ∈ ℍ = {z ∈ ℂ : Im(z) > 0}',
          text: 'Deux réseaux Λ et Λ\' définissent des tores isomorphes si et seulement si leurs modules τ et τ\' sont reliés par une transformation de Möbius γ : τ\' = (aτ+b)/(cτ+d) avec γ ∈ SL₂(ℤ). L\'espace des modules des tores est ℍ/SL₂(ℤ).'
        },
        {
          type: 'graph',
          title: 'Réseau carré et réseau hexagonal',
          svgContent: '<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="180" fill="#f8f9fa"/><text x="60" y="15" font-size="11" font-weight="bold">Réseau carré (τ=i)</text><line x1="20" y1="160" x2="150" y2="160" stroke="#333" stroke-width="1.5"/><line x1="20" y1="160" x2="20" y2="40" stroke="#333" stroke-width="1.5"/><circle cx="20" cy="160" r="3" fill="#3b82f6"/><circle cx="70" cy="160" r="3" fill="#3b82f6"/><circle cx="120" cy="160" r="3" fill="#3b82f6"/><circle cx="20" cy="110" r="3" fill="#3b82f6"/><circle cx="70" cy="110" r="3" fill="#3b82f6"/><circle cx="120" cy="110" r="3" fill="#3b82f6"/><circle cx="20" cy="60" r="3" fill="#3b82f6"/><circle cx="70" cy="60" r="3" fill="#3b82f6"/><circle cx="120" cy="60" r="3" fill="#3b82f6"/><rect x="20" y="110" width="50" height="50" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" stroke-width="1.5"/><text x="30" y="175" font-size="9">ω₁</text><text x="5" y="112" font-size="9">ω₂=iω₁</text><text x="175" y="15" font-size="11" font-weight="bold">Réseau hexagonal (τ=e^{iπ/3})</text><line x1="170" y1="160" x2="300" y2="160" stroke="#333" stroke-width="1.5"/><line x1="170" y1="160" x2="170" y2="40" stroke="#333" stroke-width="1.5"/><circle cx="170" cy="160" r="3" fill="#ef4444"/><circle cx="220" cy="160" r="3" fill="#ef4444"/><circle cx="270" cy="160" r="3" fill="#ef4444"/><circle cx="195" cy="117" r="3" fill="#ef4444"/><circle cx="245" cy="117" r="3" fill="#ef4444"/><circle cx="170" cy="74" r="3" fill="#ef4444"/><circle cx="220" cy="74" r="3" fill="#ef4444"/><polygon points="170,160 220,160 195,117" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="1.5"/><text x="180" y="175" font-size="9">ω₁</text><text x="148" y="118" font-size="9">ω₂</text></svg>',
          caption: 'À gauche : réseau carré Λ=ℤ+ℤi. À droite : réseau hexagonal Λ=ℤ+ℤe^{iπ/3}.',
          text: 'Ces deux réseaux sont les plus symétriques : le réseau carré a un groupe d\'automorphismes d\'ordre 4 (rotations de π/2), le réseau hexagonal d\'ordre 6 (rotations de π/3). Tous les autres réseaux n\'ont que ±1 comme automorphismes.'
        },
        {
          type: 'demo',
          title: 'Le groupe SL₂(ℤ) agit sur ℍ',
          text: 'Si on remplace (ω₁,ω₂) par une autre base du même réseau via (ω₁\',ω₂\') = (aω₁+bω₂, cω₁+dω₂) avec [[a,b],[c,d]] ∈ SL₂(ℤ) (i.e. ad−bc=1), alors τ\' = (aτ+b)/(cτ+d). La condition Im(τ\')>0 est assurée par ad−bc=1>0 : Im(τ\')=Im(τ)/|cτ+d|²>0. Deux modules τ, τ\' donnent des tores isomorphes si et seulement si ils sont dans la même orbite de SL₂(ℤ).'
        },
        {
          type: 'example',
          title: 'Domaine fondamental de SL₂(ℤ)',
          text: 'Le domaine fondamental standard de l\'action de SL₂(ℤ) sur ℍ est ℱ = {τ ∈ ℍ : |τ|≥1, |Re(τ)|≤1/2}. Tout τ ∈ ℍ est équivalent à un unique τ₀ ∈ ℱ (modulo les identifications sur le bord). Les points spéciaux : τ=i (fixé par S:τ↦−1/τ) et τ=e^{iπ/3} (fixé par ST).'
        },
        {
          type: 'warning',
          title: 'Attention : réseau ≠ ensemble de tous les points réels',
          text: 'Un réseau Λ = ℤω₁+ℤω₂ est dénombrable et discret dans ℂ. Il ne couvre pas le plan — la densité est 0. Ce qui est important c\'est que ℂ/Λ (le quotient, le tore) est compact et bien défini géométriquement.'
        }
      ],
      levels: [
        // Niveau 1
        [
          {
            type: 'mcq',
            question: "Un réseau Λ ⊂ ℂ est de la forme :",
            answers: ['Λ = ℤω₁ ⊕ ℤω₂ avec ω₁,ω₂ ℝ-linéairement indépendants', 'Λ = ℝω₁ ⊕ ℝω₂', 'Λ = ℤ (entiers)', 'Λ = ℂ entier'],
            correct: 0,
            explanation: "Un réseau est un sous-groupe additif discret de rang 2 de ℂ. Les coefficients doivent être entiers (pas réels), et ω₁, ω₂ ne doivent pas être colinéaires sur ℝ (sinon on obtiendrait une droite, pas un réseau du plan)."
          },
          {
            type: 'mcq',
            question: "La condition Im(ω₂/ω₁) > 0 assure que :",
            answers: ['ω₁ et ω₂ sont ℝ-linéairement indépendants et forment un réseau', 'ω₂ est réel', 'Le réseau est carré', 'Les périodes sont purement imaginaires'],
            correct: 0,
            explanation: "Im(ω₂/ω₁) ≠ 0 est équivalent à ω₁ et ω₂ non colinéaires sur ℝ. La convention Im > 0 (plutôt que ≠ 0) choisit une orientation : le parallélogramme (O, ω₁, ω₁+ω₂, ω₂) est parcouru dans le sens direct."
          },
          {
            type: 'mcq',
            question: "Le domaine fondamental d'un réseau Λ = ℤω₁ + ℤω₂ est :",
            answers: ['{t₁ω₁ + t₂ω₂ : 0 ≤ t₁,t₂ < 1} (parallélogramme des périodes)', '{z ∈ ℂ : |z| ≤ 1}', 'ℂ tout entier', '{z ∈ ℂ : Re(z) ≥ 0}'],
            correct: 0,
            explanation: "Le domaine fondamental est le parallélogramme de sommets 0, ω₁, ω₂, ω₁+ω₂ (bords opposés identifiés). Chaque classe de ℂ/Λ y a un unique représentant. C'est la cellule élémentaire du réseau."
          },
          {
            type: 'mcq',
            question: "Le tore complexe ℂ/Λ est topologiquement homéomorphe à :",
            answers: ['S¹ × S¹ (tore)', 'S² (sphère)', 'ℝ²', 'Un disque'],
            correct: 0,
            explanation: "ℂ/Λ est le quotient de ℂ par le groupe discret Λ. Topologiquement, en identifiant les côtés opposés d'un parallélogramme, on obtient un tore T²=S¹×S¹. C'est une surface compacte de genre 1."
          },
          {
            type: 'mcq',
            question: "Le module τ d'un réseau est défini par :",
            answers: ['τ = ω₂/ω₁ ∈ ℍ (demi-plan supérieur)', 'τ = ω₁/ω₂', 'τ = ω₁ + ω₂', 'τ = |ω₁|/|ω₂|'],
            correct: 0,
            explanation: "Par convention, τ = ω₂/ω₁ avec Im(τ) > 0. Ce module τ ∈ ℍ = {z : Im(z)>0} encode la forme du tore (rapport de forme). Deux tores sont isomorphes si et seulement si leurs modules sont dans la même orbite de SL₂(ℤ)."
          },
          {
            type: 'input',
            visual: 'Λ',
            question: "Pour ω₁ = 1 et ω₂ = i, le module τ = ω₂/ω₁ vaut ?",
            correct: 'i',
            explanation: "τ = i/1 = i. Ce réseau carré standard Λ = ℤ + ℤi a Im(τ) = 1 > 0. Il est le plus symétrique (groupe d'automorphismes d'ordre 4 engendré par z ↦ iz, rotation d'angle π/2)."
          },
          {
            type: 'mcq',
            question: "Une base (ω₁, ω₂) et une autre base (ω₁', ω₂') engendrent le même réseau si et seulement si la matrice de changement de base est dans :",
            answers: ['SL₂(ℤ) (matrices entières de déterminant 1)', 'GL₂(ℝ)', 'GL₂(ℂ)', 'SL₂(ℝ)'],
            correct: 0,
            explanation: "Le changement de base d'un réseau préserve l'orientation et l'arithmétique : la matrice [[a,b],[c,d]] doit avoir des coefficients entiers (pour rester dans Λ) et déterminant ±1 (pour que l'inverse soit aussi entière). On choisit det=1 pour l'orientation."
          },
          {
            type: 'mcq',
            question: "La transformation S : τ ↦ −1/τ de SL₂(ℤ) correspond à :",
            answers: ['La matrice [[0,−1],[1,0]] ∈ SL₂(ℤ)', 'La matrice [[1,1],[0,1]]', 'La translation τ ↦ τ+1', 'La réflexion τ ↦ τ̄'],
            correct: 0,
            explanation: "S = [[0,−1],[1,0]] donne (aτ+b)/(cτ+d) = (0·τ+(−1))/(1·τ+0) = −1/τ. Géométriquement, S est une inversion par rapport au cercle unité suivie d'une réflexion. S² = −I (identité sur ℍ)."
          },
          {
            type: 'mcq',
            question: "L'aire du domaine fondamental du réseau Λ = ℤω₁ + ℤω₂ est :",
            answers: ['|Im(ω̄₁ω₂)| = |ω₁||ω₂||sin θ|', '|ω₁| + |ω₂|', '|ω₁|·|ω₂|', '|ω₁ + ω₂|²'],
            correct: 0,
            explanation: "L'aire du parallélogramme formé par ω₁ et ω₂ est |Im(ω̄₁ω₂)| = |ω₁||ω₂|sin(angle entre eux). C'est aussi la mesure de Haar du tore ℂ/Λ, qui apparaît dans les formules de résidu et de sommation."
          },
          {
            type: 'mcq',
            question: "Le réseau hexagonal Λ = ℤ + ℤe^{iπ/3} a pour module τ =",
            answers: ['e^{iπ/3} = 1/2 + i√3/2', 'i', '1 + i', 'e^{iπ/4}'],
            correct: 0,
            explanation: "τ = ω₂/ω₁ = e^{iπ/3}/1 = e^{iπ/3} = cos(60°) + i·sin(60°) = 1/2 + i√3/2. Ce réseau est hexagonal (symétrie d'ordre 6), et c'est le réseau de plus haute densité dans ℝ² (problème de l'empilement de sphères en dimension 2)."
          }
        ],
        // Niveau 2
        [
          {
            type: 'mcq',
            question: "La transformation T : τ ↦ τ+1 génère quel sous-groupe de SL₂(ℤ) ?",
            answers: ['Le sous-groupe des translations {T^n : n ∈ ℤ} ≅ ℤ', 'SL₂(ℤ) entier', 'Un groupe trivial', 'Le groupe des rotations'],
            correct: 0,
            explanation: "T = [[1,1],[0,1]] et T^n = [[1,n],[0,1]] (translation de n). Le sous-groupe engendré par T est infini cyclique ≅ ℤ. Avec S, T et S engendrent SL₂(ℤ) (le groupe est engendré par ces deux éléments avec la relation S⁴=I, (ST)³=I)."
          },
          {
            type: 'mcq',
            question: "Le domaine fondamental standard ℱ de SL₂(ℤ) agissant sur ℍ est :",
            answers: ['{τ ∈ ℍ : |Re τ| ≤ 1/2, |τ| ≥ 1}', '{τ ∈ ℍ : |τ| ≤ 1}', '{τ ∈ ℍ : 0 ≤ Re τ ≤ 1}', 'ℍ entier'],
            correct: 0,
            explanation: "Le domaine fondamental de Gauss est ℱ = {τ ∈ ℍ : −1/2 ≤ Re(τ) ≤ 1/2, |τ| ≥ 1}. Tout τ ∈ ℍ est SL₂(ℤ)-équivalent à un unique point de ℱ (avec identification des bords). Ce domaine a un point de pointe en τ→i∞."
          },
          {
            type: 'mcq',
            question: "Deux réseaux Λ et Λ' = λΛ (λ ∈ ℂ*) sont dits :",
            answers: ['Homothétiques, ils définissent des tores isomorphes', 'Identiques', 'Duaux', 'Conjugués'],
            correct: 0,
            explanation: "Deux réseaux homothétiques Λ' = λΛ définissent des tores ℂ/Λ et ℂ/Λ' isomorphes (via z ↦ λz). Donc seul le rapport τ = ω₂/ω₁ importe, pas les périodes individuelles. On normalise souvent en prenant ω₁ = 1 (réseau normalisé Λτ = ℤ + ℤτ)."
          },
          {
            type: 'mcq',
            question: "Le réseau dual Λ* d'un réseau Λ est défini par :",
            answers: ['Λ* = {z ∈ ℂ : Im(z·ω̄) ∈ ℤ pour tout ω ∈ Λ}', 'Λ* = −Λ', 'Λ* = ℂ/Λ', 'Λ* = Λ lui-même toujours'],
            correct: 0,
            explanation: "Le réseau dual Λ* intervient dans la théorie des formes modulaires et en physique (T-dualité). Pour Λ = ℤ+ℤτ, le dual est Λ* = (i/Im τ)(ℤ+ℤτ̄). Il apparaît dans la formule de Poisson pour les theta-séries."
          },
          {
            type: 'input',
            visual: 'τ',
            question: "Pour le réseau Λ = ℤ·2 + ℤ·(1+i), le module normalisé τ (avec Im τ > 0) après division par ω₁=2 vaut ?",
            correct: '(1+i)/2',
            explanation: "On divise par ω₁=2 : τ = ω₂/ω₁ = (1+i)/2. Im(τ) = 1/2 > 0. Ce réseau est rectangulaire (ce n'est pas un carré car |ω₁|=2 ≠ |ω₂|=√2). Le module τ=(1+i)/2 encode la forme du parallélogramme fondamental."
          },
          {
            type: 'mcq',
            question: "La somme de Gauss G_{2k}(Λ) = Σ_{ω∈Λ\\{0}} ω^{-2k} converge pour :",
            answers: ['k ≥ 2 (convergence absolue)', 'k ≥ 1', 'Tout k ∈ ℤ', 'k ≥ 0'],
            correct: 0,
            explanation: "Σ_{ω∈Λ\\{0}} |ω|^{-2k} converge si et seulement si 2k > 2, i.e., k ≥ 2. Pour k=1, on obtient G₂ qui est quasi-modulaire (transforme avec un terme non homogène). Pour k≥2, G_{2k} est une forme modulaire de poids 2k."
          },
          {
            type: 'mcq',
            question: "Le théorème de la structure des sous-groupes discrets de ℂ dit qu'un sous-groupe discret de ℂ est de rang :",
            answers: ['0, 1 (sous-groupe cyclique) ou 2 (réseau)', '0, 1, 2 ou 3', 'Toujours 2', 'Quelconque'],
            correct: 0,
            explanation: "Un sous-groupe additif discret (fermé et discret) de ℂ ≅ ℝ² est : {0} (rang 0), ℤω (rang 1, sous-groupe discret d'une droite) ou ℤω₁+ℤω₂ (rang 2, réseau si non colinéaires). Il n'y a pas d'autres possibilités dans ℝ²."
          },
          {
            type: 'mcq',
            question: "La condition pour que Λ et Λ' soient des réseaux isomorphes (tores conformément équivalents) est :",
            answers: ['τ\' = (aτ+b)/(cτ+d) avec [[a,b],[c,d]] ∈ SL₂(ℤ)', 'τ\' = τ + n pour n ∈ ℤ uniquement', 'τ\' = −τ̄', 'τ\' = 2τ'],
            correct: 0,
            explanation: "L'isomorphisme conforme (biholomomorphisme) ℂ/Λ → ℂ/Λ' existe si et seulement si les modules sont dans la même orbite de SL₂(ℤ) : τ' = γ(τ) = (aτ+b)/(cτ+d), γ ∈ SL₂(ℤ). L'espace des modules ℳ₁ = ℍ/SL₂(ℤ) ≅ ℂ (via j)."
          },
          {
            type: 'mcq',
            question: "Le groupe SL₂(ℤ) est engendré par les matrices S et T vérifiant :",
            answers: ['S² = (ST)³ = −I (ou S⁴ = (ST)⁶ = I dans PSL₂(ℤ))', 'S² = I et T⁶ = I', 'ST = TS', 'S³ = I et T² = I'],
            correct: 0,
            explanation: "SL₂(ℤ) ≅ ℤ/4 *_{ℤ/2} ℤ/6 (produit amalgamé). Dans PSL₂(ℤ) = SL₂(ℤ)/{±I}, les générateurs S et T vérifient S²=(ST)³=I, ce qui donne PSL₂(ℤ) ≅ ℤ/2 * ℤ/3 (produit libre)."
          },
          {
            type: 'mcq',
            question: "Le nombre de réseaux Λ ⊂ ℂ d'indice N dans Λ (i.e. [Λ:Λ'] = N) est :",
            answers: ['σ₁(N) = Σ_{d|N} d (somme des diviseurs)', 'N²', 'φ(N) (Euler)', 'N+1'],
            correct: 0,
            explanation: "Le nombre de sous-réseaux d'indice N dans ℤ+ℤτ est σ₁(N) = Σ_{d|N} d. Par exemple pour N=2 : 3 sous-réseaux. Ce compte intervient dans la théorie des correspondances de Hecke T(N) sur les formes modulaires."
          }
        ],
        // Niveau 3
        [
          {
            type: 'mcq',
            question: "L'opérateur de Hecke T(p) (p premier) agit sur les réseaux par :",
            answers: ['T(p)·Λ = Σ_{Λ\'⊂Λ, [Λ:Λ\']=p} Λ\' (somme des sous-réseaux d\'indice p)', 'T(p)·Λ = pΛ', 'T(p)·Λ = Λ/p', 'T(p)·Λ = Λ∪pΛ'],
            correct: 0,
            explanation: "T(p) somme sur tous les sous-réseaux d'indice p. Pour Λ=ℤ+ℤτ, il y a p+1 tels sous-réseaux : pℤ+ℤ(τ+j) pour j=0,…,p−1, et ℤ+ℤpτ. L'opérateur T(p) est hermitien pour le produit scalaire de Petersson et ses valeurs propres sont les coefficients des formes modulaires."
          },
          {
            type: 'mcq',
            question: "La fonction theta de Jacobi θ(z,τ) = Σ_{n∈ℤ} e^{iπn²τ+2πinz} est :",
            answers: ['Quasi-périodique par rapport au réseau Λ = ℤ+ℤτ (elle transforme avec un facteur)', 'Doublement périodique', 'Périodique de période 1 seulement', 'Non périodique'],
            correct: 0,
            explanation: "θ(z+1,τ) = θ(z,τ) (périodique en z de période 1), mais θ(z+τ,τ) = e^{−iπτ−2πiz}θ(z,τ) (quasi-périodique). Ces fonctions theta sont les 'briques élémentaires' des fonctions elliptiques : tout fonction elliptique s'exprime en quotients de fonctions theta."
          },
          {
            type: 'mcq',
            question: "La formule de transformation de θ(z,τ) sous τ ↦ −1/τ est :",
            answers: ['θ(z/τ,−1/τ) = √(−iτ) e^{iπz²/τ} θ(z,τ)', 'θ(z,−1/τ) = θ(z,τ)', 'θ(z,−1/τ) = −θ(z,τ)', 'θ(z/τ,−1/τ) = θ(z,τ)/τ'],
            correct: 0,
            explanation: "La transformation modulaire de θ est θ(z/τ,−1/τ) = √(−iτ)·e^{iπz²/τ}·θ(z,τ). C'est la formule fondamentale qui relie les réseaux duaux et constitue la base de la formule de Poisson sur les réseaux."
          },
          {
            type: 'mcq',
            question: "Les quatre fonctions theta de Jacobi θ₁, θ₂, θ₃, θ₄ sont caractérisées par leurs :",
            answers: ['Caractéristiques (demi-entières) [a,b] définissant leur quasi-périodicité', 'Modules k différents', 'Parités différentes (paires/impaires)', 'Ordres des pôles'],
            correct: 0,
            explanation: "Les quatre fonctions theta correspondent aux quatre caractéristiques [a,b] ∈ {0,1/2}² : θ₁ est impaire (caractéristique [1/2,1/2]), θ₂,θ₃,θ₄ paires. Elles vérifient θ₂⁴+θ₄⁴=θ₃⁴ (identité de Jacobi, analogue elliptique de sin²+cos²=1)."
          },
          {
            type: 'input',
            visual: 'vol(ℂ/Λ)',
            question: "Pour Λ = ℤ + ℤi, calculez l'aire du domaine fondamental : |Im(ω̄₁ω₂)| avec ω₁=1, ω₂=i.",
            correct: '1',
            explanation: "ω̄₁ω₂ = 1̄·i = 1·i = i. Im(i) = 1. L'aire est 1. Ce réseau est de covolume 1, ce qui simplifie les formules de sommation et la normalisation des fonctions theta."
          },
          {
            type: 'mcq',
            question: "Le discriminant d'un réseau Λ est lié aux invariants g₂, g₃ par :",
            answers: ['Δ = g₂³ − 27g₃² (discriminant de la courbe elliptique associée)', 'Δ = g₂ + g₃', 'Δ = g₂²g₃', 'Δ = (g₂g₃)²'],
            correct: 0,
            explanation: "Δ(Λ) = g₂(Λ)³ − 27g₃(Λ)². C'est le discriminant de 4X³−g₂X−g₃. La courbe est elliptique (non singulière) si et seulement si Δ ≠ 0. La fonction Δ(τ) = (2π)¹²η(τ)²⁴ est la forme de poids 12 canonique (fonction de Ramanujan)."
          },
          {
            type: 'mcq',
            question: "La notion de réseau de Bravais en cristallographie est :",
            answers: ['La même notion mathématique : un sous-groupe discret de ℝ³ de rang 3', 'Une approximation des réseaux mathématiques', 'Un réseau fini', 'Une structure différente sans rapport'],
            correct: 0,
            explanation: "Les réseaux de Bravais (14 types en dimension 3) sont exactement des sous-groupes discrets de ℝ³ de rang 3 (réseaux au sens mathématique). La classification par SL₃(ℤ) est l'analogue 3D de la classification des réseaux complexes par SL₂(ℤ)."
          },
          {
            type: 'mcq',
            question: "La formule de Poisson pour un réseau Λ donne : Σ_{ω∈Λ} f(ω) = ",
            answers: ['(1/vol Λ)·Σ_{λ∈Λ*} f̂(λ) où f̂ est la transformée de Fourier de f', 'Σ_{ω∈Λ} f̂(ω)', '|Λ|·f(0)', 'Σ_{ω∈Λ} f(ω+1)'],
            correct: 0,
            explanation: "La formule de Poisson sur les réseaux : Σ_{ω∈Λ} f(ω) = (1/vol Λ) Σ_{λ∈Λ*} f̂(λ). Pour Λ=ℤ, c'est la formule de Poisson classique. Elle est à la base de la preuve fonctionnelle de la fonction ζ de Riemann."
          },
          {
            type: 'mcq',
            question: "Un réseau Λ admet de la multiplication complexe (CM) par α ∈ ℂ si :",
            answers: ['αΛ ⊂ Λ avec α ∉ ℝ (α est une racine d\'un polynôme quadratique irréductible sur ℚ)', 'αΛ = Λ', 'α ∈ Λ', 'α est réel'],
            correct: 0,
            explanation: "Un réseau Λ a une CM par α si αΛ ⊂ Λ avec α ∉ ℝ. Alors α est dans un corps quadratique imaginaire K=ℚ(√−d). Les réseaux CM sont rares (ensemble de mesure nulle) mais arithmétiquement très riches (théorie du corps de classes)."
          },
          {
            type: 'mcq',
            question: "L'espace de Teichmüller T₁ des tores est :",
            answers: ['ℍ (demi-plan supérieur, avant quotient par SL₂(ℤ))', 'ℂ', 'ℍ/SL₂(ℤ)', 'ℝ'],
            correct: 0,
            explanation: "L'espace de Teichmüller T₁ = ℍ paramètre les tores marqués (avec un choix de base du π₁). L'espace des modules M₁ = ℍ/SL₂(ℤ) ≅ ℂ (via j) oublie le marquage. La distinction Teichmüller vs modules est fondamentale en géométrie des surfaces."
          }
        ],
        // Niveau 4
        [
          {
            type: 'mcq',
            question: "L'invariant j d'un tore ℂ/Λ est défini par :",
            answers: ['j(τ) = 1728·g₂(Λ)³/Δ(Λ) = q⁻¹+744+196884q+… avec q=e^{2πiτ}', 'j(τ) = g₂/g₃', 'j(τ) = e^{2πiτ}', 'j(τ) = G₄(τ)/G₆(τ)'],
            correct: 0,
            explanation: "j(τ) = 1728g₂³/Δ est un isomorphisme ℍ/SL₂(ℤ)→ℂ (bijectif). Le développement de Fourier j(τ) = q⁻¹+744+196884q+21493760q²+… (q=e^{2πiτ}) a des coefficients entiers reliés aux représentations du Monster (Moonshine de Conway-Norton)."
          },
          {
            type: 'mcq',
            question: "Le théorème de Kronecker-Weber appliqué aux valeurs spéciales de j : si τ=√−d (d>0 entier), alors j(τ) est :",
            answers: ['Un entier algébrique, générateur du corps de classe de ℚ(√−d)', 'Un nombre transcendant', 'Un nombre rationnel', 'Un complexe non algébrique'],
            correct: 0,
            explanation: "Le théorème de multiplication complexe (CM) de Kronecker : si τ est dans un corps quadratique imaginaire K, j(τ) est un entier algébrique dont les conjugués sur K engendrent le corps de classes de Hilbert de K. Exemple : j(i)=1728, j(e^{iπ/3})=0."
          },
          {
            type: 'mcq',
            question: "Les formes modulaires de niveau 1 et poids 2k forment un espace vectoriel de dimension :",
            answers: ['⌊k/6⌋ + correction (formule de Riemann-Roch sur ℍ/SL₂(ℤ))', 'k', '2k', '1'],
            correct: 0,
            explanation: "Par Riemann-Roch sur la courbe modulaire X(1), dim M_{2k}(SL₂(ℤ)) = ⌊k/6⌋ si k ≡ 1 mod 6, = ⌊k/6⌋+1 sinon (pour k ≥ 2). Exemple : M₄=ℂ·G₄, M₆=ℂ·G₆, M₈=ℂ·G₄², M₁₀=ℂ·G₄G₆, M₁₂=ℂ·G₄³⊕ℂ·Δ."
          },
          {
            type: 'mcq',
            question: "L'expansion q de la forme Δ(τ) est : Δ = (2π)¹²Σ_{n≥1} τ(n)qⁿ. Les coefficients τ(n) (fonction de Ramanujan) vérifient la conjecture de Ramanujan (prouvée par Deligne) :",
            answers: ['|τ(p)| ≤ 2p^{11/2} pour p premier', '|τ(p)| ≤ p¹¹', 'τ(p) = p¹¹', 'τ(p) ∈ ℤ seulement'],
            correct: 0,
            explanation: "Deligne (1974, médaille Fields) a prouvé |τ(p)| ≤ 2p^{11/2}, conjecturé par Ramanujan en 1916. La preuve utilise la théorie des motifs et les conjectures de Weil, via la cohomologie ℓ-adique des variétés sur 𝔽_p."
          },
          {
            type: 'input',
            visual: 'j(i)',
            question: "Le j-invariant du réseau carré (τ=i) vaut j(i) = ?",
            correct: '1728',
            explanation: "Pour τ=i : g₂(ℤ+ℤi)≠0, g₃(ℤ+ℤi)=0 (symétrie d'ordre 4). Donc j(i) = 1728·g₂³/Δ = 1728·g₂³/(g₂³−27·0) = 1728. C'est un entier (CM par ℤ[i]), et c'est pourquoi le facteur 1728 est choisi dans la définition de j."
          },
          {
            type: 'mcq',
            question: "Le groupe des automorphismes Aut(ℂ/Λ) pour un réseau générique Λ est :",
            answers: ['{±1} (ordre 2)', '{±1, ±i} (ordre 4) pour tout Λ', 'Trivial', '{1}'],
            correct: 0,
            explanation: "Pour un réseau générique (τ≠i, τ≠e^{iπ/3}), Aut(ℂ/Λ) = {±1} (inversion z↦−z). Pour τ=i : Aut = {±1,±i} (ordre 4, CM par ℤ[i]). Pour τ=e^{iπ/3} : Aut = {±1,±ω,±ω²} (ordre 6, CM par ℤ[ω], ω=e^{2iπ/3})."
          },
          {
            type: 'mcq',
            question: "La série d'Eisenstein normalisée E_{2k}(τ) = 1 − (4k/B_{2k})·Σ σ_{2k−1}(n)qⁿ. Pour k=2 :",
            answers: ['E₄(τ) = 1 + 240Σσ₃(n)qⁿ', 'E₄(τ) = 1 − 240Σσ₃(n)qⁿ', 'E₄(τ) = 1 + 24Σσ₁(n)qⁿ', 'E₄ = G₄'],
            correct: 0,
            explanation: "E₄(τ) = 1 + 240Σ_{n≥1}σ₃(n)qⁿ où σ₃(n)=Σ_{d|n}d³. Le coefficient 240 vient de −4k/B_{2k} = −8/B₄ = −8/(−1/30) = 240. E₄ est une forme modulaire de poids 4, normalisée avec E₄(i∞)=1."
          },
          {
            type: 'mcq',
            question: "La notion de réseau optimalement dense est liée au problème d'empilement de sphères. En dimension 2 :",
            answers: ['Le réseau hexagonal (type A₂) est le plus dense (densité π/√12)', 'Le réseau carré est le plus dense', 'Tous les réseaux ont la même densité', 'Il n\'existe pas de maximum'],
            correct: 0,
            explanation: "En dimension 2, le réseau hexagonal A₂ (ou réseau triangulaire) est le plus dense pour l'empilement de cercles : densité π/√12 ≈ 0.9069. C'est le théorème de Thue (1910), prouvé rigoureusement par Fejes Tóth (1940)."
          },
          {
            type: 'mcq',
            question: "La fonction de Weierstrass σ(z,Λ) = z·Π_{ω∈Λ\\{0}} (1−z/ω)e^{z/ω+z²/2ω²} vérifie :",
            answers: ['σ(z+ω,Λ) = e^{η(ω)(z+ω/2)} σ(z,Λ) (quasi-périodicité avec multiplicateur)', 'σ(z+ω,Λ) = σ(z,Λ) (périodique)', 'σ(z+ω,Λ) = 0', 'σ(z+ω,Λ) = σ(z+ω)'],
            correct: 0,
            explanation: "La fonction sigma est quasi-périodique : σ(z+ωⱼ) = −e^{ηⱼ(z+ωⱼ/2)} σ(z) où ηⱼ = ζ(ωⱼ/2) est le quasi-période associé. Le log de σ est la fonction ζ de Weierstrass, et (log σ)'' = −℘."
          },
          {
            type: 'mcq',
            question: "La relation de Legendre sur les quasi-périodes est :",
            answers: ['η₁ω₂ − η₂ω₁ = 2πi', 'η₁ω₁ + η₂ω₂ = 0', 'η₁ + η₂ = π', 'η₁ω₁ = η₂ω₂'],
            correct: 0,
            explanation: "La relation de Legendre : η₁ω₂ − η₂ω₁ = 2πi, où ηⱼ = 2ζ(ωⱼ/2). C'est l'analogue elliptique de la formule 2πi pour le résidu de 1/z en 0. Elle est fondamentale dans la théorie des périodes et des nombres de Chern."
          }
        ],
        // Niveau 5
        [
          {
            type: 'mcq',
            question: "La compactification de l'espace des modules M₁ = ℍ/SL₂(ℤ) donne la courbe modulaire :",
            answers: ['X(1) = (ℍ ∪ ℚ ∪ {i∞})/SL₂(ℤ) ≅ ℙ¹(ℂ)', 'Un tore', 'Une courbe de genre 2', 'ℍ/SL₂(ℤ) est déjà compact'],
            correct: 0,
            explanation: "En ajoutant les cusps ℚ∪{i∞} (points à l'infini), on compactifie : X(1) = ℍ*/SL₂(ℤ) est une courbe de Riemann compacte. Comme j est un isomorphisme X(1)→ℙ¹, X(1) a genre 0. Il n'y a qu'un seul cusp (point i∞)."
          },
          {
            type: 'mcq',
            question: "La correspondance de Langlands pour GL₂/ℚ relie :",
            answers: ['Formes modulaires de poids 2 ↔ représentations galoisennes 2-dimensionnelles', 'Réseaux ↔ corps de nombres', 'Formes automorphes ↔ algèbres', 'Courbes elliptiques ↔ espaces de modules'],
            correct: 0,
            explanation: "Le programme de Langlands associe à toute forme modulaire f ∈ S₂(Γ₀(N)) une représentation ρ_f : Gal(ℚ̄/ℚ) → GL₂(ℤ_ℓ). Réciproquement, les représentations galoisiennes 'motiviques' proviennent de formes modulaires. Wiles a utilisé cette correspondance pour prouver Fermat."
          },
          {
            type: 'mcq',
            question: "La formule de Riemann-Roch sur X(1) donne la dimension de M_{2k} via :",
            answers: ['Le calcul du degré du diviseur canonique de X(1) et des points elliptiques', 'La formule de Gauss-Bonnet seulement', 'La formule de Lefschetz', 'Le théorème d\'Abel'],
            correct: 0,
            explanation: "X(1) a genre 0, deux points elliptiques (i de stabilisateur d'ordre 2 dans PSL₂(ℤ), et ρ=e^{2iπ/3} d'ordre 3) et un cusp. Riemann-Roch donne dim M_{2k} en comptant les sections du fibré en droites 𝒪(k[i∞]) avec conditions aux points elliptiques."
          },
          {
            type: 'mcq',
            question: "Le théorème de Torelli affirme que pour les courbes elliptiques :",
            answers: ['E est déterminée par sa jacobienne J(E) = E elle-même', 'Toutes les courbes elliptiques sont isomorphes', 'J(E) détermine E seulement à isogénie près', 'La jacobienne d\'une courbe elliptique est triviale'],
            correct: 0,
            explanation: "Pour une courbe elliptique E, J(E) = E (la jacobienne est la courbe elle-même). Le théorème de Torelli dit qu'une courbe est déterminée par sa jacobienne polarisée. En genre 1, cela signifie que j(E) = j(J(E)) détermine E à isomorphisme près."
          },
          {
            type: 'mcq',
            question: "La catégorie des isogénies entre courbes elliptiques sur ℂ est équivalente à la catégorie des :",
            answers: ['Homomorphismes de réseaux Λ→Λ\' (c.-à-d. α∈ℂ avec αΛ⊂Λ\')', 'Morphismes de groupes abéliens quelconques', 'Applications holomorphes quelconques', 'Matrices entières'],
            correct: 0,
            explanation: "Une isogénie E=ℂ/Λ → E\'=ℂ/Λ\' correspond à α∈ℂ* avec αΛ⊂Λ\'. Le degré est [Λ\':αΛ]. Les isogénies de degré N correspondent aux homomorphismes de réseaux α avec |α|²=[Λ:αΛ]=N (pour les réseaux CM), ou α∈Hom(Λ,Λ\') en général."
          },
          {
            type: 'mcq',
            question: "La théorie d\'Iwasawa pour les courbes elliptiques étudie :",
            answers: ['Les groupes de Selmer sur la ℤ_p-extension cyclotomique de ℚ', 'Les valeurs de j(τ) en τ rationnel', 'Les points entiers uniquement', 'La structure de SL₂(ℤ)'],
            correct: 0,
            explanation: "La théorie d\'Iwasawa pour E/ℚ étudie la croissance du groupe de Selmer Sel_{p^∞}(E/ℚ_n) dans la tour cyclotomique ℚ_n = ℚ(ζ_{p^n}). Le module d\'Iwasawa X∞ = lim Sel devrait être de type fini sur Λ=ℤ_p[[T]], confirmant la conjecture principale d\'Iwasawa (prouvée dans des cas partiels par Kato)."
          },
          {
            type: 'mcq',
            question: "Le théorème des périodes de Chudnovsky-Chudnovsky implique que pour τ ∈ ℍ algébrique sur ℚ, au moins l'un des nombres :",
            answers: ['π, ω₁(Λ_τ), η₁(Λ_τ) est transcendant (en fait les trois le sont)', 'ω₁(Λ_τ) est algébrique', 'Seul π est transcendant', 'η₁ est rationnel'],
            correct: 0,
            explanation: "Le théorème de Chudnovsky : si τ est dans un corps quadratique imaginaire, alors π, ω₁(τ) et η₁(τ) sont algébriquement indépendants sur ℚ (modulo les relations connues). En particulier, ω₁ = 2K(k) est transcendant, généralisant Lindemann-Weierstrass."
          },
          {
            type: 'mcq',
            question: "La dégénérescence d'une famille de tores ℂ/Λ_t quand t→0 (cusp) correspond à :",
            answers: ['Une courbe nodale (pincement d\'un cycle) : le tore dégénère en sphère avec un point double', 'Une courbe lisse de genre 2', 'La disparition du tore', 'Un réseau plus petit'],
            correct: 0,
            explanation: "Dans la compactification de Deligne-Mumford, le bord de M̄₁ correspond aux courbes rationnelles nodales (genre 0 avec un nœud). Géométriquement, quand Im(τ)→∞, un cycle du tore se pinche. La courbe stable limite est ℙ¹/{0~∞} ≅ ellipse dégénérée."
          },
          {
            type: 'mcq',
            question: "La torsion de Mazur : le groupe de torsion E(ℚ)_tors d'une courbe elliptique sur ℚ est :",
            answers: ['L\'un des 15 groupes de la liste de Mazur : ℤ/Nℤ (N≤10 ou N=12) ou ℤ/2×ℤ/2N (N≤4)', 'N\'importe quel groupe fini abélien', 'Toujours ℤ/2ℤ', 'Toujours trivial'],
            correct: 0,
            explanation: "Le théorème de Mazur (1977) : E(ℚ)_tors est isomorphe à l\'un des 15 groupes suivants : ℤ/Nℤ pour N=1,…,10,12, ou ℤ/2×ℤ/2N pour N=1,2,3,4. C'est un résultat profond qui a demandé des techniques de courbes modulaires (X₁(N))."
          },
          {
            type: 'mcq',
            question: "La formule du produit infini pour j(τ) (développement de Fourier à coefficients entiers) est liée au Moonshine de :",
            answers: ['Conway-Norton : les coefficients de j−744 sont des dimensions de représentations du groupe Monster', 'Ramanujan uniquement', 'Euler (partitions)', 'Gauss (sommes quadratiques)'],
            correct: 0,
            explanation: "Le Moonshine de Conway-Norton (1979) : les coefficients 1, 196884, 21493760,… de j(τ)−744 = q⁻¹+Σ c(n)qⁿ sont des dimensions de représentations irréductibles du groupe Monster (le plus grand groupe sporadique). Borcherds (1998, médaille Fields) a prouvé cette conjecture."
          }
        ],
        // =======================
        // ===== Niveau L1 =======
        // =======================
        [
          {
            type: 'mcq',
            question: "La cohomologie de Dolbeault H^{0,1}(ℂ/Λ) classifie :",
            answers: ['Les structures de tore complexe infinitésimalement proches (espace tangent à M₁ en τ)', 'Les fonctions holomorphes', 'Les résidus', 'Les formes de type (1,0)'],
            correct: 0,
            explanation: "H^{0,1}(ℂ/Λ) ≅ ℂ (de dimension 1) représente l'espace de déformation (espace de Kodaira-Spencer) du tore. Une déformation infinitésimale est un μ ∈ H^{0,1}(T^{1,0}) ≅ ℂ. Cela correspond aux vecteurs tangents à l'espace de Teichmüller T₁=ℍ."
          },
          {
            type: 'mcq',
            question: "La métrique de Weil-Petersson sur l'espace de Teichmüller T₁ = ℍ coïncide avec :",
            answers: ['La métrique hyperbolique ds² = |dτ|²/Im(τ)² (de courbure −1)', 'La métrique plate euclidienne', 'La métrique de Fubini-Study', 'Une métrique de courbure +1'],
            correct: 0,
            explanation: "Sur T₁=ℍ, la métrique de Weil-Petersson est proportionnelle à la métrique hyperbolique de Poincaré ds²=|dτ|²/Im(τ)². SL₂(ℝ) agit par isométries hyperboliques. L'espace des modules M₁=ℍ/SL₂(ℤ) a alors volume fini π/3."
          },
          {
            type: 'mcq',
            question: "La théorie des corps de classes montre que pour Λ_τ avec τ ∈ K=ℚ(√−d), le corps K(j(τ)) est :",
            answers: ['Le corps de classes de Hilbert H_K (l\'extension abélienne maximale non ramifiée de K)', 'K lui-même', 'ℚ', 'K(√−1)'],
            correct: 0,
            explanation: "Kronecker's Jugendtraum : j(τ) engendre le corps de classes de Hilbert H_K sur K. C'est la version elliptique du théorème de Kronecker-Weber (qui génère les extensions abéliennes de ℚ par les racines de l'unité). L'analogue pour les corps quadratiques imaginaires utilise les valeurs de j."
          },
          {
            type: 'mcq',
            question: "Le fibré de Hodge ω sur la courbe modulaire compactifiée X̄(1) a pour degré :",
            answers: ['1/12 (degré fractionnaire, sens des orbifolds)', '1', '0', '12'],
            correct: 0,
            explanation: "Sur X̄(1) vue comme orbifold, deg(ω) = 1/12. Cela résulte de la formule de Gauss-Bonnet : χ(X(1)) = −1/6 (orbifold) et l'Euler-Poincaré. Ce degré est à la base de la formule dim M_{2k} et de la formule de Noether pour les surfaces modulaires."
          },
          {
            type: 'mcq',
            question: "Le complexe de de Rham d'un tore ℂ/Λ donne la suite exacte courte de Hodge :",
            answers: ['0 → H^{1,0} → H¹_dR → H^{0,1} → 0 (filtration de Hodge)', '0 → ℤ → ℂ → ℂ* → 0', 'H¹_dR = 0', 'H¹_dR ≅ ℂ⁴'],
            correct: 0,
            explanation: "La filtration de Hodge sur H¹_dR(ℂ/Λ) ≅ ℂ² est 0 ⊂ F¹H¹ = H^{1,0} ≅ ℂ·ω ⊂ H¹_dR ≅ ℂ². La suite exacte 0→H^{1,0}→H¹_dR→H^{0,1}→0 ne se scinde pas canoniquement sur ℚ (c'est là que vivent les périodes)."
          },
          {
            type: 'mcq',
            question: "Le module de Tate de la courbe elliptique CM ℂ/(ℤ+ℤi) comme ℤ[i]-module est :",
            answers: ['T_p(E) ≅ ℤ[i]⊗ℤ ℤ_p = ℤ[i]_p (module libre de rang 1 sur ℤ[i]_p)', 'T_p(E) ≅ ℤ_p²', 'T_p(E) ≅ ℤ/pℤ', 'T_p(E) = 0'],
            correct: 0,
            explanation: "Pour une courbe CM par 𝒪_K = ℤ[i], le module de Tate T_p(E) est libre de rang 1 sur 𝒪_K⊗ℤ_p = ℤ[i]_p (si p ne se ramifie pas dans K). Cela reflète la CM : l'action de 𝒪_K sur E induit une action sur T_p(E), le rendant libre de rang 1 sur 𝒪_K."
          },
          {
            type: 'mcq',
            question: "La conjecture de Stark-Heegner sur les points de Heegner prédit que :",
            answers: ['Les points de Heegner engendrent E(K) sur des corps quadratiques imaginaires K quand le rang est 1', 'E(K) est toujours fini', 'Il n\'y a pas de points spéciaux', 'E(K) ≅ ℤ toujours'],
            correct: 0,
            explanation: "Un point de Heegner P_K ∈ E(K) est construit via la théorie CM : P_K = image d'un point CM dans X₀(N) via la paramétrisation modulaire. La conjecture de Birch et Swinnerton-Dyer prédit que P_K est d'ordre infini (rang=1) si et seulement si L'(E/K,1)≠0."
          },
          {
            type: 'mcq',
            question: "La décomposition de Hecke de J₀(N) (jacobienne de X₀(N)) en variétés abéliennes simples correspond à :",
            answers: ['La décomposition J₀(N) ~ Π A_f (produit sur les classes de formes propres de Hecke)', 'J₀(N) ≅ E^N', 'J₀(N) est irréductible', 'J₀(N) ≅ ℂ^g'],
            correct: 0,
            explanation: "Par la théorie de Shimura, J₀(N) = Π_{f} A_f où f parcourt les nouvelles formes propres normalisées de S₂(Γ₀(N)) et A_f est la variété abélienne simple de dimension [ℚ(a_n(f)):ℚ] associée à f. Pour f de degré 1 (coefficients dans ℚ), A_f est une courbe elliptique."
          },
          {
            type: 'mcq',
            question: "Le théorème de Gross-Zagier relie la dérivée L'(E,1) au :",
            answers: ['Hauteur de Néron-Tate du point de Heegner : L\'(E_K,1) = c · ĥ(P_K)', 'Nombre de points de torsion', 'Discriminant de E', 'Rang de E sur ℚ'],
            correct: 0,
            explanation: "Gross-Zagier (1986) : si L(E,1)=0 (i.e., rang ≥ 1 conjecture BSD), alors L'(E_K,1) = (8π²/(√|D|·||f||²)) · ĥ(P_K). Cela prouve que si L'(E_K,1)≠0, alors P_K est d'ordre infini et E(K) a rang ≥ 1. Combiné avec les travaux de Kolyvagin, cela confirme BSD pour rang 1."
          },
          {
            type: 'mcq',
            question: "Le problème des nombres congruents est équivalent à l'existence d'un point rationnel non-torsion sur :",
            answers: ['La courbe elliptique E_n : y²=x³−n²x', 'Une courbe de genre 2', 'Un tore', 'Une droite projective'],
            correct: 0,
            explanation: "Un entier n est congruent (aire d'un triangle rectangle pythagoricien rationnel) si et seulement si E_n : y²=x³−n²x a rang ≥ 1 sur ℚ. Tunnell (1983) a lié ceci à des formes modulaires, et BSD permettrait une décision algorithmique complète. Exemple : 5 est congruent (triangle 3/2, 20/3, 41/6)."
          }
        ]
      ]
    },

    // ============================================================
    // NOTION 4 : Fonction elliptique de Weierstrass
    // ============================================================
    {
      id: 'weierstrass',
      label: 'Fonction ℘ de Weierstrass',
      lesson: {
        formula: '℘(z) = 1/z² + Σ_{ω∈Λ\\{0}} [1/(z−ω)² − 1/ω²]',
        text: 'La fonction ℘ de Weierstrass est la fonction elliptique la plus fondamentale. Elle est doublement périodique, méromorphe avec un double pôle en chaque point du réseau Λ, et paire. Elle génère le corps de toutes les fonctions elliptiques pour un réseau donné.',
        example: 'Pour Λ = ℤ + ℤi (réseau carré), g₂ = 4G₄ et g₃ = 0. La courbe elliptique associée est y² = 4x³ − g₂x (forme lemniscatique).'
      },
      fullBlocks: [
        {
          type: 'definition',
          title: 'Définition de ℘ de Weierstrass',
          text: 'Pour un réseau Λ = ℤω₁+ℤω₂, la fonction de Weierstrass est : ℘(z,Λ) = 1/z² + Σ_{ω∈Λ\\{0}} [1/(z−ω)² − 1/ω²]. La soustraction du terme 1/ω² assure la convergence absolue de la série (sans cette correction, la série divergerait).'
        },
        {
          type: 'formula',
          title: 'Propriétés fondamentales de ℘',
          formula: '℘(z+ω) = ℘(z) ∀ω ∈ Λ,  ℘(−z) = ℘(z)',
          text: '℘ est doublement périodique de réseau de périodes Λ. Elle est paire. Son seul pôle (modulo Λ) est en z=0, d\'ordre 2 (pôle double). Tout corps de fonctions elliptiques pour Λ est engendré par ℘ et ℘\'.'
        },
        {
          type: 'formula',
          title: 'Développement de Laurent de ℘',
          formula: '℘(z) = z⁻² + Σ_{k≥1} (2k+1)G_{2k+2} z^{2k}',
          text: 'Les coefficients sont les séries d\'Eisenstein G_{2k} = Σ_{ω∈Λ\\{0}} ω^{−2k}. En particulier : g₂ = 60G₄ et g₃ = 140G₆. Ce développement est fondamental pour établir l\'équation différentielle de ℘.'
        },
        {
          type: 'demo',
          title: 'Convergence de la série définissant ℘',
          text: 'La série Σ_{ω≠0} |ω|^{−3} converge (car les points de Λ à distance R sont O(R²), et Σ_{R≤|ω|<R+1} |ω|^{−3} = O(R⁻¹)→0). Donc Σ [1/(z−ω)²−1/ω²] converge absolument et uniformément sur tout compact ne contenant pas de points du réseau, car 1/(z−ω)²−1/ω² = O(|z||ω|^{−3}).'
        },
        {
          type: 'graph',
          title: 'Module |℘(z)| sur le domaine fondamental',
          svgContent: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="peak" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ef4444"/><stop offset="30%" stop-color="#f97316"/><stop offset="60%" stop-color="#eab308"/><stop offset="100%" stop-color="#22c55e"/></radialGradient><radialGradient id="peak2" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ef4444"/><stop offset="40%" stop-color="#f97316"/><stop offset="70%" stop-color="#eab308"/><stop offset="100%" stop-color="#22c55e"/></radialGradient></defs><rect width="300" height="250" fill="#1e3a5f"/><rect x="50" y="30" width="200" height="190" fill="#22c55e" opacity="0.3"/><circle cx="50" cy="30" r="30" fill="url(#peak)" opacity="0.9"/><circle cx="250" cy="30" r="30" fill="url(#peak2)" opacity="0.9"/><circle cx="50" cy="220" r="30" fill="url(#peak2)" opacity="0.9"/><circle cx="250" cy="220" r="30" fill="url(#peak)" opacity="0.9"/><text x="130" y="130" text-anchor="middle" fill="white" font-size="12">|℘| petit</text><text x="50" y="30" text-anchor="middle" fill="white" font-size="9">∞</text><text x="250" y="30" text-anchor="middle" fill="white" font-size="9">∞</text><line x1="50" y1="30" x2="250" y2="30" stroke="white" stroke-width="1" stroke-dasharray="4"/><line x1="50" y1="30" x2="50" y2="220" stroke="white" stroke-width="1" stroke-dasharray="4"/><line x1="50" y1="220" x2="250" y2="220" stroke="white" stroke-width="1" stroke-dasharray="4"/><line x1="250" y1="30" x2="250" y2="220" stroke="white" stroke-width="1" stroke-dasharray="4"/><text x="150" y="245" text-anchor="middle" fill="white" font-size="10">Domaine fondamental ℂ/Λ</text><text x="5" y="130" fill="white" font-size="9">ω₂</text><text x="265" y="240" fill="white" font-size="9">ω₁</text></svg>',
          caption: '|℘(z)| est très grande près des points du réseau (pôles doubles) et petite au centre du domaine fondamental.',
          text: '℘ prend chaque valeur exactement 2 fois sur ℂ/Λ (comptées avec multiplicité), ce qui est minimal pour une fonction elliptique non constante (d\'après le théorème des fonctions elliptiques).'
        },
        {
          type: 'example',
          title: 'Calcul explicite pour le réseau carré',
          text: 'Pour Λ = ℤ+ℤi : G₄ = 2(1+1+2^{−4}+…) = 2ζ(4)/(produit sur ℤ[i]). On a g₂ = 60G₄ ≈ 189.07... et g₃ = 0 (car le réseau est invariant par z↦iz, donc g₃ est de poids 6 : g₃↦i⁻⁶g₃ = −g₃, donc g₃=0). La courbe est y²=4x³−g₂x.'
        },
        {
          type: 'warning',
          title: '℘ n\'est pas holomorphe',
          text: 'Attention : ℘ est méromorphe, pas holomorphe. Elle a des pôles doubles en chaque point de Λ. Elle ne peut pas être holomorphe sur ℂ/Λ : par le théorème de Liouville elliptique, une fonction holomorphe doublement périodique est constante.'
        },
        {
          type: 'technique',
          title: 'Exprimer une fonction elliptique en termes de ℘ et ℘\'',
          text: 'Toute fonction elliptique f pour Λ s\'écrit f = R(℘, ℘\') pour une fraction rationnelle R(X,Y). Plus précisément : - Si f est paire : f = R(℘) (fraction rationnelle en ℘ seul). - Si f est impaire : f = ℘\'·R(℘). - En général : f = f_pair + f_impair, décomposition unique.'
        }
      ],
      levels: [
        // Niveau 1
        [
          {
            type: 'mcq',
            question: "La fonction ℘ de Weierstrass est définie par une série dont le terme général est :",
            answers: ['1/(z−ω)² − 1/ω² pour chaque ω ∈ Λ\\{0}', '1/(z−ω)', 'e^{2πiω}', '|z−ω|²'],
            correct: 0,
            explanation: "La définition est ℘(z) = 1/z² + Σ_{ω≠0}[1/(z−ω)²−1/ω²]. Le terme de correction −1/ω² est essentiel pour la convergence : sans lui, Σ1/(z−ω)² divergerait. C'est une modification analogue au produit de Weierstrass pour les fonctions entières."
          },
          {
            type: 'mcq',
            question: "℘(z) a ses pôles en :",
            answers: ['Tous les points ω ∈ Λ (pôles doubles)', 'Seulement en z=0', 'Pas de pôle (holomorphe)', 'En 1/2 et τ/2 seulement'],
            correct: 0,
            explanation: "Par double périodicité, si ℘ a un pôle en 0, elle en a un en chaque ω ∈ Λ. Ces pôles sont d'ordre 2 (doubles), car ℘(z) ∼ 1/z² au voisinage de 0."
          },
          {
            type: 'mcq',
            question: "℘ est une fonction :",
            answers: ['Paire : ℘(−z) = ℘(z)', 'Impaire : ℘(−z) = −℘(z)', 'Ni paire ni impaire', 'Périodique mais pas paire'],
            correct: 0,
            explanation: "Dans la série définissant ℘, les termes 1/(z−ω)² et 1/(−z−ω)² = 1/(z+ω)² se correspondent quand ω parcourt Λ (stable par z↦−z). Donc ℘(−z) = ℘(z) : c'est une fonction paire."
          },
          {
            type: 'mcq',
            question: "La dérivée ℘'(z) est :",
            answers: ['−2Σ_{ω∈Λ} 1/(z−ω)³ (impaire, doublement périodique)', '2Σ 1/(z−ω)³', 'Σ 1/(z−ω)²', '0'],
            correct: 0,
            explanation: "En dérivant terme à terme : ℘'(z) = −2/z³ + Σ_{ω≠0} −2/(z−ω)³ = −2Σ_{ω∈Λ} 1/(z−ω)³. C'est une fonction impaire (℘'(−z)=−℘'(z)) et doublement périodique."
          },
          {
            type: 'mcq',
            question: "℘'(z) a des pôles d'ordre :",
            answers: ['3 (pôles triples) en chaque ω ∈ Λ', '2 (doubles)', '1 (simples)', 'Pas de pôle'],
            correct: 0,
            explanation: "℘(z) ∼ 1/z² près de 0, donc ℘'(z) ∼ −2/z³ : pôle d'ordre 3. Par périodicité, ℘' a des pôles d'ordre 3 en chaque ω ∈ Λ."
          },
          {
            type: 'input',
            visual: 'ordre de ℘',
            question: "Quel est l'ordre de la fonction elliptique ℘ (nombre de pôles par période, comptés avec multiplicité) ?",
            correct: '2',
            explanation: "℘ a un unique pôle modulo Λ, en z=0, d'ordre 2. L'ordre d'une fonction elliptique est le nombre de pôles (comptés avec multiplicité) dans un domaine fondamental. Ici ord(℘) = 2."
          },
          {
            type: 'mcq',
            question: "Les valeurs g₂ et g₃ dans l'équation de ℘ sont :",
            answers: ['g₂ = 60G₄(Λ) et g₃ = 140G₆(Λ) (séries d\'Eisenstein)', 'g₂ = G₂ et g₃ = G₃', 'g₂ = ω₁ et g₃ = ω₂', 'Des constantes arbitraires'],
            correct: 0,
            explanation: "Les invariants g₂ et g₃ sont définis par g₂ = 60Σ_{ω≠0}ω^{−4} = 60G₄ et g₃ = 140Σ_{ω≠0}ω^{−6} = 140G₆. Ces séries d'Eisenstein convergent absolument pour k≥2."
          },
          {
            type: 'mcq',
            question: "Le corps de toutes les fonctions elliptiques pour Λ est engendré par :",
            answers: ['℘ et ℘\' (avec la relation algébrique (℘\')² = 4℘³−g₂℘−g₃)', 'Seulement ℘', '℘ et ℘²', 'Les fonctions theta'],
            correct: 0,
            explanation: "Le théorème de structure dit : tout corps de fonctions elliptiques est ℂ(℘,℘') ≅ ℂ(x,y)/(y²−4x³+g₂x+g₃). C'est une extension de degré 2 de ℂ(℘). Toute f elliptique paire est une fraction rationnelle en ℘ seul."
          },
          {
            type: 'mcq',
            question: "Le nombre de zéros de ℘(z)−c (pour c ∈ ℂ générique) dans un domaine fondamental est :",
            answers: ['2 (℘ est d\'ordre 2)', '1', '4', 'Infini'],
            correct: 0,
            explanation: "Par le théorème des fonctions elliptiques, #zéros = #pôles = ord(℘) = 2. Donc ℘−c a exactement 2 zéros (comptés avec multiplicité) par période, pour tout c ∉ {valeurs critiques}."
          },
          {
            type: 'mcq',
            question: "La somme des zéros de ℘(z)−c modulo Λ est :",
            answers: ['0 (les deux zéros sont opposés : z₀ et −z₀)', 'ω₁+ω₂', 'ω₁/2', 'Impossible à déterminer'],
            correct: 0,
            explanation: "Puisque ℘ est paire, si z₀ est un zéro de ℘−c, alors −z₀ l'est aussi. De plus, la somme des zéros moins la somme des pôles est dans Λ (théorème d'Abel). Les deux pôles sont en 0 (double), donc somme zéros ≡ 0 mod Λ, i.e., z₀+(−z₀)=0 ✓."
          }
        ],
        // Niveau 2
        [
          {
            type: 'mcq',
            question: "Les demi-périodes e₁, e₂, e₃ sont les valeurs de ℘ aux points :",
            answers: ['e₁=℘(ω₁/2), e₂=℘(ω₂/2), e₃=℘((ω₁+ω₂)/2) — les demi-périodes', 'e₁=℘(0), e₂=℘(ω₁), e₃=℘(ω₂)', 'e₁=0, e₂=1, e₃=−1', 'Les valeurs de g₂ et g₃'],
            correct: 0,
            explanation: "Les trois points de 2-torsion de ℂ/Λ sont ω₁/2, ω₂/2, (ω₁+ω₂)/2. Leurs images par ℘ sont e₁,e₂,e₃. Ce sont les racines du polynôme 4t³−g₂t−g₃ = 4(t−e₁)(t−e₂)(t−e₃)."
          },
          {
            type: 'mcq',
            question: "La relation entre e₁, e₂, e₃ et les invariants est :",
            answers: ['e₁+e₂+e₃=0, e₁e₂+e₁e₃+e₂e₃=−g₂/4, e₁e₂e₃=g₃/4', 'e₁e₂e₃ = g₂', 'e₁+e₂+e₃ = g₂', 'e₁=e₂=e₃'],
            correct: 0,
            explanation: "4t³−g₂t−g₃ = 4(t−e₁)(t−e₂)(t−e₃). Par identification : coefficient de t² : e₁+e₂+e₃=0 ; coefficient de t : e₁e₂+e₁e₃+e₂e₃=−g₂/4 ; terme constant : e₁e₂e₃=g₃/4."
          },
          {
            type: 'mcq',
            question: "℘'(ωⱼ/2) = 0 pour j=1,2. Ceci montre que ωⱼ/2 est :",
            answers: ['Un zéro double de ℘\' (point critique d\'ordre 1 de ℘)', 'Un pôle de ℘\'', 'Un zéro simple', 'Un point où ℘ est indéfinie'],
            correct: 0,
            explanation: "℘' est impaire et doublement périodique. En ω₁/2 : ℘'(ω₁/2) = ℘'(ω₁/2−ω₁) = ℘'(−ω₁/2) = −℘'(ω₁/2) (impair). Donc 2℘'(ω₁/2)=0, i.e., ℘'(ω₁/2)=0. Ce sont les points critiques de ℘, d'où les 3 zéros de ℘' par période."
          },
          {
            type: 'mcq',
            question: "L'application z ↦ (℘(z):℘'(z):1) envoie ℂ/Λ dans ℙ²(ℂ) sur la courbe :",
            answers: ['C: Y²Z = 4X³−g₂XZ²−g₃Z³ (cubique projective)', 'C: Y = X²', 'C: X²+Y²=1', 'Une droite projective'],
            correct: 0,
            explanation: "En coordonnées homogènes (X:Y:Z) = (℘:℘':1), l'équation (℘')²=4℘³−g₂℘−g₃ devient Y²=4X³−g₂X−g₃ (en affine). Projectivement : Y²Z=4X³−g₂XZ²−g₃Z³. Le point z=0 (pôle de ℘) envoie sur le point à l'infini (0:1:0)."
          },
          {
            type: 'input',
            visual: 'g₃',
            question: "Pour le réseau carré Λ=ℤ+ℤi (invariant par z↦iz), g₃=140G₆ vaut ?",
            correct: '0',
            explanation: "Le réseau ℤ+ℤi est stable par multiplication par i (rotation de π/2). G₆ est de poids 6 : G₆(iΛ) = i⁻⁶G₆(Λ) = −G₆(Λ). Mais iΛ=Λ, donc G₆=−G₆, i.e., G₆=0, donc g₃=140·0=0."
          },
          {
            type: 'mcq',
            question: "La relation entre ℘ et la fonction sigma de Weierstrass σ est :",
            answers: ['℘(z) = −(d/dz)² log σ(z)', '℘(z) = log σ(z)', '℘(z) = σ(z)²', '℘(z) = σ\'(z)/σ(z)'],
            correct: 0,
            explanation: "En posant ζ_W(z) = σ'(z)/σ(z) (fonction zêta de Weierstrass, à ne pas confondre avec ζ de Riemann), on a ℘(z) = −ζ_W'(z) = −(log σ)''(z). Ainsi σ est un analogue du sinus pour les fonctions elliptiques."
          },
          {
            type: 'mcq',
            question: "℘(z₁+z₂) s'exprime (pour z₁≠±z₂ mod Λ) via la formule d'addition :",
            answers: ['℘(z₁+z₂) = −℘(z₁)−℘(z₂) + (1/4)·[(℘\'(z₁)−℘\'(z₂))/(℘(z₁)−℘(z₂))]²', '℘(z₁+z₂) = ℘(z₁)+℘(z₂)', '℘(z₁+z₂) = ℘(z₁)·℘(z₂)', '℘(z₁+z₂) = 1/(℘(z₁)+℘(z₂))'],
            correct: 0,
            explanation: "La formule d'addition de ℘ est : ℘(z₁+z₂) = −℘(z₁)−℘(z₂)+[(℘'(z₁)−℘'(z₂))/(2(℘(z₁)−℘(z₂)))]². C'est l'analogue elliptique de la formule tan(a+b) = (tan a + tan b)/(1−tan a·tan b)."
          },
          {
            type: 'mcq',
            question: "Le doublement z ↦ 2z via ℘ donne ℘(2z) = :",
            answers: ['−2℘(z) + (1/4)·[(℘\'\'(z))/(℘\'(z))]² (formule de duplication)', '2℘(z)', '℘(z)²', '℘(z)/2'],
            correct: 0,
            explanation: "La formule de duplication s'obtient en faisant tendre z₂→z₁ dans la formule d'addition. On obtient ℘(2z) = −2℘(z)+(6℘(z)²−g₂/2)²/(4(4℘(z)³−g₂℘(z)−g₃)). Cette formule est clé dans les algorithmes de calcul sur courbes elliptiques (doublement de point)."
          },
          {
            type: 'mcq',
            question: "℘ réalise une bijection méromorphe (isomorphisme de surfaces de Riemann) :",
            answers: ['ℂ/Λ → ℙ¹ de degré 2 (℘ est un revêtement double de ℙ¹)', 'ℂ/Λ → ℂ/Λ (isomorphisme)', 'ℂ → ℂ/Λ', 'ℂ/Λ → ℂ (biholomorphisme)'],
            correct: 0,
            explanation: "℘ : ℂ/Λ → ℙ¹(ℂ) est un revêtement ramifié de degré 2. Les points de ramification sont les 4 points de 2-torsion (dont 0). La formule de Riemann-Hurwitz donne 2−2·1 = 2(2−2·0)−4, i.e., 0=0−4+4 ✓."
          },
          {
            type: 'mcq',
            question: "La formule de résidu pour ℘ en z=0 donne :",
            answers: ['Res(℘, 0) = 0 (le terme 1/z² a résidu 0, c\'est un pôle d\'ordre 2)', 'Res(℘, 0) = 1', 'Res(℘, 0) = 2πi', 'Res(℘, 0) = g₂'],
            correct: 0,
            explanation: "℘(z) = z⁻² + 0·z⁻¹ + c₀ + c₂z² + … (pas de terme en z⁻¹). Le résidu en 0 est le coefficient de z⁻¹, qui est 0. Cela est cohérent avec la somme des résidus = 0 pour une fonction doublement périodique."
          }
        ],
        // Niveau 3
        [
          {
            type: 'mcq',
            question: "Le facteur de Weierstrass σ(z,Λ) = z·Π_{ω≠0}(1−z/ω)e^{z/ω+z²/2ω²} est une fonction :",
            answers: ['Entière d\'ordre 2, avec zéros simples en chaque ω ∈ Λ', 'Méromorphe avec pôles en Λ', 'Doublement périodique', 'Polynomiale'],
            correct: 0,
            explanation: "σ est une fonction entière (holomorphe sur ℂ entier) d'ordre 2 (croissance ≤ e^{C|z|²}). Elle s'annule exactement aux points du réseau Λ, avec des zéros simples. Elle n'est pas doublement périodique mais quasi-périodique."
          },
          {
            type: 'mcq',
            question: "La relation entre les fonctions sigma et les fonctions theta est :",
            answers: ['σ(z,Λ) est proportionnelle à θ₁(z/ω₁, ω₂/ω₁)/θ₁\'(0,τ) (via les fonctions theta de Jacobi)', 'σ = θ₃', 'σ = e^z·θ₂', 'Aucune relation'],
            correct: 0,
            explanation: "La fonction sigma de Weierstrass est essentiellement la fonction theta θ₁ : σ(z) ∝ θ₁(πz/ω₁,τ) (à un facteur exponentiel gaussien e^{ηz²/2ω₁} près). Cette identification permet d'utiliser les propriétés modulaires des fonctions theta pour étudier σ."
          },
          {
            type: 'mcq',
            question: "La fonction zêta de Weierstrass ζ_W(z) = σ'(z)/σ(z) vérifie :",
            answers: ['ζ_W(z) = 1/z + Σ_{ω≠0}[1/(z−ω)+1/ω+z/ω²] (quasi-périodique, pas elliptique)', 'ζ_W(z) = ℘(z)', 'ζ_W est doublement périodique', 'ζ_W a des pôles doubles'],
            correct: 0,
            explanation: "ζ_W(z) = 1/z + Σ_{ω≠0}[1/(z−ω)+1/ω+z/ω²]. C'est la primitive de −℘ : ζ_W'(z) = −℘(z). ζ_W est quasi-périodique : ζ_W(z+ωⱼ) = ζ_W(z)+ηⱼ où ηⱼ = 2ζ_W(ωⱼ/2) sont les quasi-périodes."
          },
          {
            type: 'mcq',
            question: "℘(z;g₂,g₃) peut être exprimé en termes des fonctions de Jacobi sn,cn,dn par :",
            answers: ['℘(z) = e₃ + (e₁−e₃)/sn²(z√(e₁−e₃), k) avec k²=(e₂−e₃)/(e₁−e₃)', '℘(z) = sn(z,k)', '℘(z) = cn(z,k)/dn(z,k)', '℘(z) = (e₁+e₂+e₃)/3'],
            correct: 0,
            explanation: "La relation entre Weierstrass et Jacobi est : en posant u=z√(e₁−e₃) et k²=(e₂−e₃)/(e₁−e₃), on a ℘(z)=e₃+(e₁−e₃)/sn²(u,k). Cela donne le dictionnaire complet entre les deux formalismes."
          },
          {
            type: 'input',
            visual: 'e₁+e₂+e₃',
            question: "Sachant que 4t³−g₂t−g₃=4(t−e₁)(t−e₂)(t−e₃), quelle est la valeur de e₁+e₂+e₃ ?",
            correct: '0',
            explanation: "En développant 4(t−e₁)(t−e₂)(t−e₃) = 4t³−4(e₁+e₂+e₃)t²+…, et en comparant avec 4t³+0·t²−g₂t−g₃, le coefficient de t² est nul : 4(e₁+e₂+e₃)=0, donc e₁+e₂+e₃=0."
          },
          {
            type: 'mcq',
            question: "La représentation de la courbe elliptique E: y²=4x³−g₂x−g₃ comme quotient ℂ/Λ est bijective car :",
            answers: ['L\'application z↦(℘(z),℘\'(z)) est un isomorphisme de groupes analytiques ℂ/Λ→E', 'E est un corps', 'Les équations ont des solutions uniques', 'E est simplement connexe'],
            correct: 0,
            explanation: "z↦(℘(z):℘'(z):1) est holomorphe, doublement périodique, et injective (℘(z₁)=℘(z₂) et ℘'(z₁)=℘'(z₂) implique z₁≡z₂ mod Λ). C'est donc un biholomorphisme ℂ/Λ→E (courbe lisse). De plus, c'est un isomorphisme de groupes."
          },
          {
            type: 'mcq',
            question: "La formule de multiplication [n] pour ℘ : ℘(nz) s'exprime rationnellement en ℘(z) via :",
            answers: ['Les polynômes de division ψₙ(℘(z)) : ℘(nz)=φₙ(℘)/ψₙ²(℘)', '℘(nz) = n²℘(z)', '℘(nz) = n℘(z)+g₂', '℘(nz) = ℘(z)ⁿ'],
            correct: 0,
            explanation: "Les polynômes de division ψₙ(x,y) (où y²=4x³−g₂x−g₃) donnent la formule de multiplication : [n](P)=(φₙ/ψₙ², ψ_{2n}/(4ψₙ³)) en coordonnées (x,y). Ces polynômes ont des coefficients dans ℤ[g₂,g₃] et sont fondamentaux en cryptographie (vérification des isogénies)."
          },
          {
            type: 'mcq',
            question: "Le développement de ℘ en q=e^{2πiτ} (développement de Fourier/q-expansion) est :",
            answers: ['℘(z,τ) = (2π)²[−1/12 + Σ_{n≥1}(Σ_{d|n}d)qⁿ + … ]', '℘(z,τ) = Σ qⁿ·e^{2πinz}', '℘(z,τ) = q⁻¹+1+q+q²+…', '℘ n\'a pas d\'expansion en q'],
            correct: 0,
            explanation: "Le développement en q de ℘ fait intervenir les fonctions de Weierstrass ℘(z,τ) = (2π/ω₁)²[Σ_{n∈ℤ} 1/(u−qⁿ)² − G₂(τ)/3] avec u=e^{2πiz/ω₁}. C'est lié aux q-expansions des séries d'Eisenstein G_{2k}(τ) = 2ζ(2k)+2(2πi)^{2k}/(2k−1)!·Σσ_{2k−1}(n)qⁿ."
          },
          {
            type: 'mcq',
            question: "L'isomorphisme E ≅ ℂ/Λ permet de calculer #E(𝔽_p) (nombre de points modulo p) via :",
            answers: ['La trace de Frobenius : #E(𝔽_p) = p+1−a_p avec a_p=p+1−#E(𝔽_p)∈[−2√p, 2√p]', '#E(𝔽_p) = p (toujours)', '#E(𝔽_p) = |Λ|', '#E(𝔽_p) = p²'],
            correct: 0,
            explanation: "La borne de Hasse (analogue de Riemann pour les courbes) : |#E(𝔽_p)−(p+1)| ≤ 2√p. La déviation a_p = p+1−#E(𝔽_p) est la trace de Frobenius. Sa connaissance est centrale en cryptographie et dans la preuve de la conjecture de Weil."
          },
          {
            type: 'mcq',
            question: "La restriction de ℘ à la droite réelle ℝ (pour Λ réel, g₂,g₃∈ℝ) est :",
            answers: ['Une fonction réelle, avec singularités en ω ∈ Λ∩ℝ, dont le graphe est une courbe de genre 1', 'Toujours positive', 'Constante', 'Sans singularité'],
            correct: 0,
            explanation: "℘ restreint à ℝ est une fonction réelle périodique (période ω₁∈ℝ) avec pôles doubles en les entiers multiples de ω₁. Son graphe est une courbe de genre 1 dans le plan réel. La paramétrisation (℘(t),℘'(t)) trace la courbe réelle y²=4x³−g₂x−g₃."
          }
        ],
        // Niveau 4
        [
          {
            type: 'mcq',
            question: "La série d'Eisenstein G₄(τ) = Σ_{(m,n)≠(0,0)} (mτ+n)^{−4} est une forme modulaire de :",
            answers: ['Poids 4, niveau 1 : G₄(γτ) = (cτ+d)⁴ G₄(τ) pour γ ∈ SL₂(ℤ)', 'Poids 2', 'Poids 4 mais niveau 2', 'Ce n\'est pas une forme modulaire'],
            correct: 0,
            explanation: "G₄(γτ) = Σ(m(aτ+b)/(cτ+d)+n)^{-4} = (cτ+d)⁴ Σ((ma+nc)τ+(mb+nd))^{-4} = (cτ+d)⁴G₄(τ) car (ma+nc, mb+nd) parcourt ℤ²\\{0} quand (m,n) le fait (det γ=1). C'est la définition d'une forme modulaire de poids 4."
          },
          {
            type: 'mcq',
            question: "Le discriminant modulaire Δ(τ) = g₂(τ)³−27g₃(τ)² a un développement en q = e^{2πiτ} :",
            answers: ['Δ(τ) = (2π)¹² q·Π_{n≥1}(1−qⁿ)²⁴ (produit infini convergent)', 'Δ(τ) = q⁻¹+744', 'Δ(τ) = G₄³', 'Δ(τ) = Σ τ(n)qⁿ seulement pour n≥0'],
            correct: 0,
            explanation: "Δ(τ) = (2π)¹²η(τ)²⁴ = (2π)¹²q Π(1−qⁿ)²⁴ où η(τ)=q^{1/24}Π(1−qⁿ) est la fonction d'Euler-Dedekind. Le coefficient de qⁿ (n≥1) est (2π)¹²τ(n), la fonction de Ramanujan. Δ ne s'annule jamais sur ℍ (le discriminant elliptique est non nul)."
          },
          {
            type: 'mcq',
            question: "℘(z,Λ) vue comme section d'un fibré en droites sur ℂ/Λ est une section de :",
            answers: ['𝒪(2[O]) : le fibré des fonctions à pôle d\'ordre ≤ 2 en O=[0]', '𝒪([O])', '𝒪 (fibré trivial)', '𝒪(−[O])'],
            correct: 0,
            explanation: "℘ a un pôle d'ordre 2 en [O]=[0]∈ℂ/Λ et est holomorphe ailleurs. Elle est donc une section méromorphe du fibré 𝒪(2[O]). Par Riemann-Roch : dim H⁰(ℂ/Λ,𝒪(2[O]))=2, engendré par {1, ℘}."
          },
          {
            type: 'mcq',
            question: "La monodromie du revêtement ℘: ℂ/Λ→ℙ¹ est engendrée par :",
            answers: ['L\'involution z↦−z (de ℂ/Λ), qui est l\'unique automorphisme d\'ordre 2 non trivial', 'Une rotation d\'ordre 4', 'Une translation', 'Le groupe SL₂(ℤ)'],
            correct: 0,
            explanation: "Le revêtement ℘: ℂ/Λ→ℙ¹ est de degré 2, donc son groupe de Galois (monodromie) est ℤ/2, engendré par l'involution de Weierstrass ι: z↦−z. Les points de ramification sont les 4 points fixes de ι : 0, ω₁/2, ω₂/2, (ω₁+ω₂)/2."
          },
          {
            type: 'input',
            visual: 'Δ',
            question: "Pour le réseau Λ=ℤ+ℤi (g₂≠0, g₃=0), le discriminant Δ=g₂³−27g₃² vaut (en fonction de g₂) ?",
            correct: 'g₂³',
            explanation: "Δ = g₂³ − 27g₃² = g₂³ − 27·0² = g₂³. Puisque Λ≠0 (réseau non dégénéré), g₂≠0 donc Δ=g₂³≠0 : la courbe y²=4x³−g₂x est bien lisse (discriminant non nul). C'est la courbe lemniscatique de Bernoulli."
          },
          {
            type: 'mcq',
            question: "L'algèbre de Hecke agit sur ℂ[g₂,g₃] (polynômes en les invariants) via :",
            answers: ['T(p)·F(g₂,g₃) = Σ_{Λ\' sous-réseau indice p} F(g₂(Λ\'),g₃(Λ\'))', 'T(p)·g₂ = p·g₂', 'T(p)·g₂ = g₂/p', 'T(p) agit trivialement'],
            correct: 0,
            explanation: "L'opérateur de Hecke T(p) agit sur les fonctions F de réseaux en faisant la moyenne sur les sous-réseaux d'indice p : T(p)F(Λ) = p^{k−1}Σ_{[Λ:Λ\']=p} F(Λ\'). Sur les formes de poids k, c'est l'opérateur qui diagonalise le spectre de l'algèbre de Hecke."
          },
          {
            type: 'mcq',
            question: "La paramétrisation uniformisante ℂ/Λ ≅ E via z↦(℘(z),℘'(z)) envoie les points de n-torsion E[n] sur :",
            answers: ['Les points (1/n)Λ/Λ = {aω₁/n+bω₂/n : 0≤a,b<n} ≅ (ℤ/nℤ)²', 'Λ/nΛ', 'ℤ/nℤ seulement', 'Les points de ℙ¹[n]'],
            correct: 0,
            explanation: "E[n] = ker([n]: E→E) correspond via l'uniformisation aux points z∈ℂ/Λ avec nz≡0 mod Λ, i.e., z∈(1/n)Λ/Λ. Ce groupe est isomorphe à (ℤ/nℤ)² (pour char≠n), engendré par ω₁/n et ω₂/n."
          },
          {
            type: 'mcq',
            question: "La valeur de ℘(z) aux points de 2-torsion z=ω₁/2 est e₁, qui est une racine de :",
            answers: ['4t³−g₂t−g₃ = 0 (polynôme de degré 3)', 't²+g₂=0', 't+g₃=0', 't⁴−g₂²=0'],
            correct: 0,
            explanation: "e₁=℘(ω₁/2) est une racine de 4t³−g₂t−g₃=0 car (℘')²=4℘³−g₂℘−g₃ et ℘'(ω₁/2)=0 (point critique). Les trois racines sont e₁,e₂,e₃ qui sont distinctes si et seulement si Δ≠0 (courbe non singulière)."
          },
          {
            type: 'mcq',
            question: "La théorie de Galois de la division de ℘ : le corps K(E[n]) (engendré par les coordonnées des points de n-torsion) est une extension galoisienne de K avec groupe de Galois dans :",
            answers: ['GL₂(ℤ/nℤ) (matrices inversibles 2×2 sur ℤ/nℤ)', 'ℤ/nℤ', 'SL₂(ℤ)', 'Un groupe trivial'],
            correct: 0,
            explanation: "Gal(K(E[n])/K) ↪ GL₂(ℤ/nℤ) car Gal agit sur E[n]≅(ℤ/nℤ)² par des automorphismes de groupe. Pour p premier et E/ℚ sans CM, Serre (1972) prouve que l'image est GL₂(ℤ/pℤ) entier pour presque tout p (théorème de Serre)."
          },
          {
            type: 'mcq',
            question: "La correspondance modulaire T_N (correspondance de Hecke) est une correspondance algébrique sur E×E dont le graphe est :",
            answers: ['{(P,Q) ∈ E×E : Q est dans l\'image d\'une isogénie de degré N depuis P}', '{(P,P) : P ∈ E} (diagonale)', '{(P,NP) : P ∈ E}', 'Vide'],
            correct: 0,
            explanation: "La correspondance T_N sur E×E est la fermeture de Zariski de {(P,Q) : ∃ isogénie φ:E→E de degré N avec φ(P)=Q}. C'est la version géométrique des opérateurs de Hecke. Ces correspondances commutent et sont le fondement de la théorie des formes de Hecke."
          }
        ],
        // Niveau 5
        [
          {
            type: 'mcq',
            question: "Le théorème d'Abel-Jacobi pour E : l'application z↦[z]−[O] ∈ Pic⁰(E) ≅ E est :",
            answers: ['Un isomorphisme de groupes (E est sa propre jacobienne)', 'Un morphisme non surjectif', 'Défini seulement pour z ∉ Λ', 'Trivial'],
            correct: 0,
            explanation: "Pour E, la jacobienne J(E)=Pic⁰(E) est isomorphe à E lui-même via P↦[P]−[O]. L'isomorphisme Abel-Jacobi ℂ/Λ→E est z↦(℘(z),℘'(z)). C'est la version la plus simple de la théorie d'Abel-Jacobi, qui se généralise aux courbes de genre supérieur."
          },
          {
            type: 'mcq',
            question: "La connexion de Gauss-Manin sur la famille universelle E→ℍ (avec E_τ=ℂ/(ℤ+ℤτ)) a pour équation de Picard-Fuchs :",
            answers: ['θ(θ−1/6)(θ−5/6)f = z(θ+1/4)(θ+3/4)f (équation hypergéométrique)', 'f\'\'=0', 'f\'+f=0', 'f\'\' + τf\' + f = 0'],
            correct: 0,
            explanation: "L'équation de Picard-Fuchs de la famille universelle de courbes elliptiques est une équation hypergéométrique de Gauss ²F₁(1/12, 5/12; 1; z) où z est le paramètre de la famille. Elle encode la variation des périodes ω₁,ω₂ en fonction du module τ."
          },
          {
            type: 'mcq',
            question: "La représentation de Weil de ℘ dans la théorie des représentations automorphes est :",
            answers: ['ρ_℘ : Gal(ℚ̄/ℚ)→GL₂(ℤ_ℓ) la représentation ℓ-adique associée à la courbe elliptique', 'Une représentation unitaire', 'Une représentation de SL₂(ℝ)', 'La représentation standard de GL₂'],
            correct: 0,
            explanation: "À la courbe elliptique E/ℚ paramétrée par ℘, on associe la représentation ℓ-adique ρ_ℓ : Gal(ℚ̄/ℚ)→GL₂(ℤ_ℓ) agissant sur T_ℓ(E). Par Taniyama-Shimura-Wiles, ρ_ℓ provient d'une forme modulaire de poids 2, reliant les fonctions automorphes et la géométrie arithmétique."
          },
          {
            type: 'mcq',
            question: "La factorisation de Weierstrass de sin πz comme analogue réel de σ(z) donne :",
            answers: ['sin πz = πz·Π_{n≥1}(1−z²/n²) — analogie avec σ(z) = z·Π_{ω≠0}(1−z/ω)e^{z/ω+z²/2ω²}', 'sin πz = e^{πiz}−e^{−πiz}', 'sin πz = Σ (−1)ⁿz^{2n+1}/(2n+1)! uniquement', 'Les deux n\'ont aucun rapport'],
            correct: 0,
            explanation: "L'analogie fondamentale : sin πz/π = z·Π_{n∈ℤ\\{0}}(1−z/n) est le cas dégénéré (réseau ℤ⊂ℝ) de la fonction sigma. De même, π/sin(πz) = Σ_{n}(−1)ⁿ/(z−n) est l'analogue de ζ_W, et (π cot πz)' = −(π/sin πz)² est l'analogue de −℘."
          },
          {
            type: 'input',
            visual: 'Genus(E)',
            question: "Quel est le genre de la courbe elliptique E: y²=4x³−g₂x−g₃ (comme surface de Riemann compacte) ?",
            correct: '1',
            explanation: "E est une courbe algébrique non singulière de degré 3 dans ℙ². Par la formule de genre pour les courbes planes lisses : g=(d−1)(d−2)/2=(3−1)(3−2)/2=1. Topologiquement, E(ℂ)≅T²=S¹×S¹, confirme genre=1."
          },
          {
            type: 'mcq',
            question: "La fonction ℘ de Weierstrass pour le réseau triangulaire Λ=ℤ+ℤe^{iπ/3} satisfait :",
            answers: ['g₂(Λ)=0 (car Λ est invariant par multiplication par e^{iπ/3})', 'g₃(Λ)=0', 'g₂=g₃', 'g₂=g₃=0 (Λ dégénère)'],
            correct: 0,
            explanation: "Λ est stable par z↦ωz avec ω=e^{2iπ/3} (rotation d'ordre 3). G₄ est de poids 4 : G₄(ωΛ)=ω^{-4}G₄(Λ)=ω^{-4}G₄(Λ). Mais ωΛ=Λ donc G₄=ω^{-4}G₄. Or ω³=1 donc ω^{-4}=ω^{-1}=ω²≠1 (car ω≠1), donc G₄=0, g₂=60G₄=0."
          },
          {
            type: 'mcq',
            question: "La conjecture de Swinnerton-Dyer (partie faible) pour une courbe CM est confirmée via :",
            answers: ['Le travail de Coates-Wiles (1977) utilisant la théorie des unités d\'Iwasawa pour les corps CM', 'Le théorème de Wiles uniquement', 'La conjecture BSD reste ouverte pour CM', 'La théorie des formes modulaires p-adiques'],
            correct: 0,
            explanation: "Coates-Wiles (1977) ont prouvé : si E/ℚ a CM par un corps quadratique imaginaire K et L(E,1)≠0, alors E(ℚ) est fini (rang=0). C'est la première confirmation partielle de BSD. La preuve utilise les unités circulaires et elliptiques, l'interpolation p-adique de L(E,s)."
          },
          {
            type: 'mcq',
            question: "Le module formel de Lubin-Tate sur ℤ_p est l'analogue p-adique de :",
            answers: ['La loi de groupe formelle de ℂ/Λ (qui est additive : x+y)', 'La loi multiplicative x+y+xy', 'La loi de ℘ directement', 'La loi d\'un groupe fini'],
            correct: 0,
            explanation: "Le groupe formel de Lubin-Tate F_π(X,Y) ∈ 𝒪_K[[X,Y]] (pour π uniformisante de K) est l'analogue p-adique des groupes formels des courbes elliptiques. Pour K=ℚ_p et π=p, F_p donne les extensions abéliennes de ℚ_p exactement comme les racines de l'unité pour Kronecker-Weber."
          },
          {
            type: 'mcq',
            question: "La courbe de Fermat F₄: X⁴+Y⁴=Z⁴ est liée aux fonctions elliptiques de Weierstrass via :",
            answers: ['F₄ est birationnellement équivalente à la courbe elliptique y²=x³−x (lemniscatique)', 'F₄ est une courbe de genre 2 sans lien avec ℘', 'F₄ est de genre 0', 'F₄=E×E'],
            correct: 0,
            explanation: "La courbe de Fermat x⁴+y⁴=1 est de genre 3. Mais x⁴+y⁴=(x²+y²)²−2x²y²=(x²+y²−√2 xy)(x²+y²+√2 xy). Sa jacobienne contient la courbe elliptique y²=x³−x (lemniscate), paramétrée par (℘(z), ℘'(z)) pour g₂=4, g₃=0. C'est pourquoi les preuves de Fermat pour n=4 utilisent implicitement la lemniscate."
          },
          {
            type: 'mcq',
            question: "La norme d'une isogénie φ: E→E\' (son degré) satisfait Norme(φ)=deg(φ)=",
            answers: ['[E\'(ℂ):φ(E(ℂ))] = |ker φ| pour une isogénie séparable', '|E(ℚ)|/|E\'(ℚ)|', 'deg(φ)=1 toujours', 'deg(φ)=0 pour toute isogénie non triviale'],
            correct: 0,
            explanation: "Pour une isogénie séparable φ:E→E\', deg(φ)=|ker φ| (nombre de points dans le noyau). Exemple : [n]:E→E a degré n². La multiplication par p (p premier) a ker=[p]:E→E avec ker≅(ℤ/pℤ)² (si char≠p), donc deg([p])=p²."
          }
        ],
        // =======================
        // ===== Niveau L1 =======
        // =======================
        [
          {
            type: 'mcq',
            question: "Le théorème de Néron-Ogg-Shafarevich : E/ℚ a bonne réduction en p si et seulement si :",
            answers: ['La représentation ℓ-adique ρ_ℓ est non ramifiée en p (pour ℓ≠p)', 'p | Δ', 'E[p](ℚ) est trivial', 'p est premier au conducteur N'],
            correct: 0,
            explanation: "Néron-Ogg-Shafarevich : E a bonne réduction en p ⟺ ρ_ℓ|_{I_p} = 1 (action triviale de l'inertie en p), pour tout ℓ≠p. Donc la bonne réduction se lit sur la représentation galoisienne. Mauvaise réduction ⟺ p|Δ ⟺ p|N (conducteur)."
          },
          {
            type: 'mcq',
            question: "Le modèle de Néron d'une courbe elliptique E/ℚ_p est :",
            answers: ['Un schéma en groupes lisse ℰ sur ℤ_p avec ℰ_η=E (fibré lisse minimal au-dessus de ℤ_p)', 'La réduction E mod p', 'Une variété abélienne de dimension 2', 'Un schéma fini'],
            correct: 0,
            explanation: "Le modèle de Néron ℰ/ℤ_p est le modèle lisse et séparé minimal de E/ℚ_p. Il satisfait la propriété universelle de Néron : tout morphisme de schéma lisse vers E se factorise par ℰ. La fibre spéciale ℰ_s/𝔽_p est le groupe de composantes connexes de la réduction."
          },
          {
            type: 'mcq',
            question: "La formule du produit pour L(E,s) = Π_p L_p(E,s) converge absolument pour :",
            answers: ['Re(s) > 3/2 (puis se prolonge analytiquement à tout ℂ par modularité)', 'Re(s) > 1', 'Re(s) > 2', 's ∈ ℕ uniquement'],
            correct: 0,
            explanation: "Le produit eulérien L(E,s) = Π_p (1−a_p p^{-s}+p^{1−2s})^{−1} (pour p bonne réduction) converge absolument pour Re(s)>3/2 (par la borne de Hasse |a_p|≤2√p). Par Taniyama-Wiles, L(E,s)=L(f,s) se prolonge à tout ℂ et satisfait une équation fonctionnelle reliant L(E,s) et L(E,2−s)."
          },
          {
            type: 'mcq',
            question: "Le groupe formel Ê(𝔪) associé à E/ℚ_p (𝔪=idéal maximal de ℤ_p) est :",
            answers: ['Le noyau de la réduction E(ℚ_p)→Ẽ(𝔽_p) (groupe formel de hauteur 1 ou 2)', 'E(ℚ_p) lui-même', 'Un groupe fini', 'Le groupe de Tate'],
            correct: 0,
            explanation: "Ê(𝔪) = ker(E(ℚ_p)→Ẽ(𝔽_p)) est le groupe formel de Weierstrass, isomorphe comme groupe topologique à ℤ_p (si bonne réduction ordinaire) ou à un groupe formel de hauteur 2 (si supersingulière). C'est un sous-groupe ouvert d'indice fini de E(ℚ_p)."
          },
          {
            type: 'mcq',
            question: "La cohomologie cristalline H¹_cris(E/ℤ_p) est liée à la cohomologie de de Rham H¹_dR(E/ℚ_p) par :",
            answers: ['Un isomorphisme via la théorie de Berthelot-Ogus : H¹_cris⊗ℚ_p ≅ H¹_dR(E/ℚ_p)', 'Elles sont sans rapport', 'H¹_cris = H¹_dR toujours', 'H¹_cris = 0 pour bonne réduction'],
            correct: 0,
            explanation: "La comparaison de Berthelot-Ogus : H¹_cris(E_s/W)⊗_{W}ℚ_p ≅ H¹_dR(E/ℚ_p) (W=vecteurs de Witt). La cohomologie cristalline est le bon analogue p-adique de la cohomologie de Betti. L'action du Frobenius cristallin correspond à la trace a_p de Frobenius arithmétique."
          },
          {
            type: 'mcq',
            question: "Dans la théorie de Iwasawa pour ℓ=p, le groupe de Selmer Sel_{p∞}(E/ℚ_∞) sur la ℤ_p-extension ℚ_∞/ℚ est :",
            answers: ['Un module de type fini sur Λ=ℤ_p[[T]] (algèbre d\'Iwasawa), prédit être de rang r=rang de E(ℚ)', 'Toujours fini', 'Trivial', 'Non défini'],
            correct: 0,
            explanation: "La conjecture principale d\'Iwasawa pour E/ℚ : le module de Selmer X_∞ = lim_{←} Sel_{p^n}(E/ℚ_n) est de type fini sur Λ=ℤ_p[[T]] et sa caractéristique (dans Λ) est associée à la fonction L p-adique de Mazur-Swinnerton-Dyer. Kato (2004) a prouvé l'une des inclusions via les systèmes d'Euler."
          },
          {
            type: 'mcq',
            question: "L'accouplement de Cassels-Tate sur le groupe de Tate-Shafarevich Ш(E/ℚ) est :",
            answers: ['Un accouplement alterné parfait (si Ш est fini) : Ш×Ш→ℚ/ℤ antisymétrique', 'Un accouplement trivial', 'Un accouplement symétrique défini positif', 'Défini seulement sur E(ℚ)'],
            correct: 0,
            explanation: "Cassels (1962) a construit un accouplement bilinéaire Ш×Ш→ℚ/ℤ qui est alterné (antisymétrique). Si Ш est fini, il est parfait, ce qui implique que |Ш| est un carré parfait. Cette structure est cruciale pour la formule de BSD : |Ш| apparaît dans le terme principal de L(E,s) en s=1."
          },
          {
            type: 'mcq',
            question: "La théorie des systèmes d\'Euler de Kolyvagin pour E donne :",
            answers: ['Si L(E,1)≠0, alors rang(E(ℚ))=0 et Ш(E/ℚ) est fini', 'rang(E(ℚ))=1 toujours', 'E(ℚ) est infini', 'Ш est trivial'],
            correct: 0,
            explanation: "Kolyvagin (1989) : si L(E,1)≠0 (ou si un point de Heegner est non-torsion), alors E(ℚ) est fini (rang=0) et Ш(E/ℚ) est fini. La preuve utilise les systèmes d'Euler (famille de classes de cohomologie galoisienne cohérentes) pour annuler Ш. C'est la preuve partielle la plus forte de BSD."
          },
          {
            type: 'mcq',
            question: "La représentation p-adique de Galois T_p(E) est cristalline en p si et seulement si :",
            answers: ['E a bonne réduction en p (théorème de Fontaine)', 'p est impair', 'E est définie sur ℤ_p', 'E a réduction multiplicative'],
            correct: 0,
            explanation: "Par le théorème de Fontaine (et Berger-Li-Zhu pour le cas p=2), T_p(E) est une représentation cristalline (au sens de la théorie (φ,Γ)-modules ou de Fontaine) si et seulement si E a bonne réduction en p. La représentation est semi-stable pour réduction semi-stable, et de Hodge-Tate en général."
          },
          {
            type: 'mcq',
            question: "Le conducteur de Swan en p d'une courbe elliptique E/ℚ_p mesure :",
            answers: ['La ramification sauvage de la représentation ρ_ℓ en p (contribution de l\'inertie supérieure)', 'Le rang de E sur ℚ_p', 'Le nombre de points sur 𝔽_p', 'Le degré du modèle de Néron'],
            correct: 0,
            explanation: "Le conducteur de Swan Sw_p(E) = Σ_{i≥1} (1/[I_p:I_p^i]) dim(T_p/T_p^{I_p^i}) mesure la ramification sauvage de ρ_ℓ. Pour p>3 avec mauvaise réduction additive potentiellement bonne, Sw_p=0. Le conducteur artinien est Art_p=dim(T_p/T_p^{I_p})+Sw_p."
          }
        ]
      ]
    },

    // ============================================================
    // NOTION 5 : Équation différentielle de ℘
    // ============================================================
    {
      id: 'equation-differentielle-weierstrass',
      label: 'Équation différentielle de ℘',
      lesson: {
        formula: "(℘')² = 4℘³ − g₂℘ − g₃",
        text: "La fonction ℘ de Weierstrass satisfait l'équation différentielle (℘')² = 4℘³ − g₂℘ − g₃. Cette équation est fondamentale : elle montre que ℘ paramétrise une courbe elliptique et relie l'analyse complexe à la géométrie algébrique.",
        example: "Pour le réseau carré (g₂ = 189.07..., g₃ = 0) : (℘')² = 4℘³ − g₂℘. La courbe associée y² = 4x³−g₂x est la courbe lemniscatique."
      },
      fullBlocks: [
        {
          type: 'formula',
          title: "L'équation différentielle fondamentale",
          formula: "(℘'(z))² = 4℘(z)³ − g₂℘(z) − g₃",
          text: "Cette équation relie la dérivée de ℘ à une expression polynomiale en ℘. Elle montre que la paire (℘(z), ℘'(z)) se déplace sur la courbe cubique y² = 4x³ − g₂x − g₃ dans ℝ² (ou ℂ²)."
        },
        {
          type: 'demo',
          title: "Preuve de l'équation différentielle",
          text: "On part du développement de Laurent : ℘(z) = z⁻² + c₂z² + c₄z⁴ + … (seules puissances paires par parité). Donc ℘'(z) = −2z⁻³ + 2c₂z + 4c₄z³ + … et (℘')² = 4z⁻⁶ − 8c₂z⁻² − 16c₄ + O(z²). D'autre part, 4℘³ = 4z⁻⁶ + 12c₂z⁻² + 12c₄ + O(z²). Donc (℘')² − 4℘³ = −8c₂z⁻² − 16c₄ − 12c₂z⁻² − 12c₄ + O(z²) = −20c₂z⁻² − 28c₄ + O(z²). Or c₂ = 3G₄ = g₂/20 et c₄ = 5G₆ = g₃/28. Donc (℘')² − 4℘³ = −g₂z⁻² − g₃ + O(z²)... mais cette différence est une fonction elliptique holomorphe en 0 (les pôles s'annulent !), donc constante par Liouville. La constante vaut (−g₂·℘ − g₃) en développant plus soigneusement : (℘')² = 4℘³ − g₂℘ − g₃."
        },
        {
          type: 'example',
          title: "Interprétation géométrique",
          text: "L'équation (℘')² = 4℘³ − g₂℘ − g₃ dit que le point (x,y) = (℘(z), ℘'(z)) décrit la courbe algébrique y² = 4x³−g₂x−g₃ quand z varie. C'est la paramétrisation de la courbe elliptique par les fonctions elliptiques. La 'vitesse' ℘' est algébriquement liée à la 'position' ℘."
        },
        {
          type: 'graph',
          title: "Courbe réelle y² = 4x³ − g₂x − g₃",
          svgContent: '<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="#f8f9fa"/><line x1="20" y1="100" x2="280" y2="100" stroke="#333" stroke-width="1.5"/><line x1="100" y1="10" x2="100" y2="190" stroke="#333" stroke-width="1.5"/><text x="285" y="104" font-size="11">x</text><text x="103" y="8" font-size="11">y</text><path d="M110,100 Q130,60 160,50 Q200,40 250,38" stroke="#3b82f6" stroke-width="2.5" fill="none"/><path d="M110,100 Q130,140 160,150 Q200,160 250,162" stroke="#3b82f6" stroke-width="2.5" fill="none"/><circle cx="110" cy="100" r="4" fill="#ef4444"/><text x="112" y="95" font-size="9" fill="#ef4444">e₁</text><circle cx="55" cy="100" r="4" fill="#22c55e"/><text x="35" y="95" font-size="9" fill="#22c55e">e₂</text><path d="M25,100 Q35,70 50,55 Q60,48 55,100" stroke="#22c55e" stroke-width="2.5" fill="none"/><path d="M25,100 Q35,130 50,145 Q60,152 55,100" stroke="#22c55e" stroke-width="2.5" fill="none"/><text x="130" y="190" font-size="9" text-anchor="middle">Composante non bornée (e₁) et ovale (e₂&lt;e₁)</text></svg>',
          caption: "Pour g₂,g₃ réels avec discriminant Δ>0, la courbe réelle a deux composantes : un ovale borné et une composante non bornée.",
          text: "La composante non bornée correspond à z ∈ [0,ω₁] (période réelle) et l'ovale correspond à z ∈ [ω₂/2, ω₁+ω₂/2] (période imaginaire)."
        },
        {
          type: 'technique',
          title: "Utilisation pour calculer des intégrales",
          text: "L'équation différentielle permet de calculer : ∫ dt/√(4t³−g₂t−g₃) = z si t=℘(z). Autrement dit, l'inverse de ℘ est une intégrale elliptique ! C'est le pont fondamental : ℘ = inverse de l'intégrale elliptique de première espèce."
        },
        {
          type: 'warning',
          title: "Ne pas confondre avec l'EDO de Riccati",
          text: "L'équation (℘')² = P(℘) (degré 3 en ℘) est une équation de type Weierstrass. Elle est différente de l'EDO de Ricatti (f' = af²+bf+c) qui est linéarisable. L'équation de Weierstrass requiert les fonctions elliptiques pour sa résolution générale — c'est précisément pourquoi ces fonctions existent."
        }
      ],
      levels: [
        // Niveau 1
        [
          {
            type: 'mcq',
            question: "L'équation différentielle satisfaite par ℘ est :",
            answers: ["(℘')² = 4℘³ − g₂℘ − g₃", "℘'' = 6℘²", "(℘')² = ℘² − 1", "℘' = ℘²"],
            correct: 0,
            explanation: "L'équation fondamentale est (℘')² = 4℘³ − g₂℘ − g₃. Le membre de droite est un polynôme de degré 3 en ℘, ce qui fait de (℘, ℘') un point d'une courbe elliptique."
          },
          {
            type: 'mcq',
            question: "En dérivant (℘')² = 4℘³−g₂℘−g₃ par rapport à z, on obtient :",
            answers: ["℘'' = 6℘² − g₂/2", "℘'' = 12℘²−g₂", "℘'' = 4℘³", "℘'' = −g₂℘"],
            correct: 0,
            explanation: "En dérivant : 2℘'·℘'' = (12℘²−g₂)·℘'. En divisant par 2℘' (si ℘'≠0) : ℘'' = (12℘²−g₂)/2 = 6℘²−g₂/2."
          },
          {
            type: 'mcq',
            question: "La courbe algébrique y² = 4x³−g₂x−g₃ est appelée :",
            answers: ['Une courbe elliptique (en forme de Weierstrass)', 'Une parabole', 'Une ellipse', 'Un hyperbole'],
            correct: 0,
            explanation: "y²=4x³−g₂x−g₃ est la forme de Weierstrass d'une courbe elliptique. Malgré le nom 'elliptique', ce n'est pas une ellipse ! Le nom vient des intégrales elliptiques qui lui sont liées."
          },
          {
            type: 'mcq',
            question: "Le membre de droite 4℘³−g₂℘−g₃ est un polynôme de degré __ en ℘ :",
            answers: ['3 (cubique)', '2', '4', '1'],
            correct: 0,
            explanation: "4x³−g₂x−g₃ est un polynôme de degré 3 (cubique) en x=℘. C'est précisément ce degré 3 qui caractérise les courbes elliptiques (courbes de genre 1 en forme de Weierstrass). Degree 2 donnerait des coniques (genre 0)."
          },
          {
            type: 'mcq',
            question: "Le discriminant Δ = g₂³−27g₃² est non nul si et seulement si :",
            answers: ['La courbe y²=4x³−g₂x−g₃ est non singulière (lisse)', 'g₂≠0', 'g₃≠0', 'La courbe a des points réels'],
            correct: 0,
            explanation: "Δ≠0 ⟺ 4x³−g₂x−g₃ a trois racines distinctes (eᵢ toutes différentes) ⟺ la courbe est lisse (pas de point double). Si Δ=0, la courbe a un nœud (si g₂³=27g₃²) ou une pointe (cas dégénéré)."
          },
          {
            type: 'input',
            visual: '℘\'\'',
            question: "En utilisant ℘'' = 6℘² − g₂/2, calculez ℘''(z) en z=0 sachant que ℘(z)∼1/z² → +∞. Quel type de singularité a ℘'' en 0 ?",
            correct: 'pôle d\'ordre 4',
            explanation: "℘(z) ∼ 1/z² donc ℘²(z) ∼ 1/z⁴. Alors ℘''(z) ∼ 6/z⁴ : pôle d'ordre 4 en z=0. Cohérent avec le développement de Laurent : ℘(z)=z⁻²+c₂z²+… donc ℘'(z)=−2z⁻³+… et ℘''(z)=6z⁻⁴+…"
          },
          {
            type: 'mcq',
            question: "L'équation (℘')² = 4℘³−g₂℘−g₃ peut s'écrire, en posant y=℘' et x=℘ :",
            answers: ['y² = 4x³−g₂x−g₃ (courbe cubique dans le plan (x,y))', 'y = 4x³−g₂x−g₃', 'y² = x³−x', 'y³ = 4x²−g₂'],
            correct: 0,
            explanation: "En posant x=℘(z) et y=℘'(z), la relation (℘')²=4℘³−g₂℘−g₃ devient exactement y²=4x³−g₂x−g₃. Quand z varie dans ℂ/Λ, le point (x,y) trace cette courbe algébrique."
          },
          {
            type: 'mcq',
            question: "Le fait que ℘' = dy/dz et ℘ = x signifie que la courbe elliptique est :",
            answers: ['Paramétrée par les fonctions elliptiques (℘, ℘\')', 'Non paramétrée (genre > 0)', 'Paramétrée polynomialement', 'Paramétrée par sin et cos'],
            correct: 0,
            explanation: "z↦(℘(z),℘'(z)) est la paramétrisation unifromisante de la courbe elliptique par le tore ℂ/Λ. Les fonctions ℘ et ℘' jouent le rôle de cos et sin pour les cercles, mais pour une courbe de genre 1."
          },
          {
            type: 'mcq',
            question: "L'intégrale ∫ dt/√(4t³−g₂t−g₃) est égale à :",
            answers: ['z tel que ℘(z)=t (intégrale elliptique de première espèce)', 'arctan(t)', 'log(t)', '√t'],
            correct: 0,
            explanation: "Puisque dt/dz=℘'(z) et ℘'(z)=±√(4℘(z)³−g₂℘(z)−g₃), on a dz=dt/√(4t³−g₂t−g₃). Donc z=∫dt/√(4t³−g₂t−g₃) : l'inverse de ℘ est une intégrale elliptique."
          },
          {
            type: 'mcq',
            question: "Le polynôme 4x³−g₂x−g₃ a ses racines en :",
            answers: ['e₁=℘(ω₁/2), e₂=℘(ω₂/2), e₃=℘((ω₁+ω₂)/2)', '0, 1, −1', 'g₂/4, −g₃/4, 0', 'ω₁, ω₂, ω₁+ω₂'],
            correct: 0,
            explanation: "Les racines de 4x³−g₂x−g₃ sont e₁,e₂,e₃ (valeurs de ℘ aux demi-périodes). Ce sont les valeurs critiques de ℘, i.e., les points où ℘'=0. On vérifie : 4eⱼ³−g₂eⱼ−g₃=(℘'(ωⱼ/2))²=0."
          }
        ],
        // Niveau 2
        [
          {
            type: 'mcq',
            question: "La formule d'addition de ℘ découle de l'équation différentielle. Si P₁=(x₁,y₁) et P₂=(x₂,y₂) sur E: y²=4x³−g₂x−g₃, la droite y=λx+μ intersecte E en un troisième point P₃ d'abscisse :",
            answers: ['x₃ = λ²/4 − x₁ − x₂ (avec λ=(y₂−y₁)/(x₂−x₁))', 'x₃ = x₁+x₂', 'x₃ = (x₁x₂)^{1/2}', 'x₃ = λx₁x₂'],
            correct: 0,
            explanation: "La droite y=λx+μ intersecte y²=4x³−g₂x−g₃ en substituant : (λx+μ)²=4x³−g₂x−g₃. Le coefficient de x² dans le développement est λ²=4(x₁+x₂+x₃), donc x₃=λ²/4−x₁−x₂. Puis y₃=−(λx₃+μ) par la règle de groupe."
          },
          {
            type: 'mcq',
            question: "Pour doubler un point P=(x,y) sur E, la pente de la tangente en P est :",
            answers: ['λ = (12x²−g₂)/(2y)', 'λ = (y₂−y₁)/(x₂−x₁)', 'λ = 2y/x', 'λ = x²/y'],
            correct: 0,
            explanation: "En différentiant implicitement y²=4x³−g₂x−g₃ : 2yy'=12x²−g₂, donc y'=(12x²−g₂)/(2y). La pente de la tangente en (x,y) est λ=(12x²−g₂)/(2y). Pour y=0 (point de 2-torsion), la tangente est verticale."
          },
          {
            type: 'mcq',
            question: "L'équation ℘'' = 6℘²−g₂/2 est une EDO :",
            answers: ['Non-linéaire du second ordre (équation de Weierstrass généralisée)', 'Linéaire du premier ordre', 'Linéaire du second ordre', 'A variables séparables'],
            correct: 0,
            explanation: "℘''=6℘²−g₂/2 est non-linéaire (℘² est quadratique en la fonction inconnue ℘). C'est une équation de type Emden-Fowler ou de Weierstrass. Sa solution générale nécessite les fonctions elliptiques ℘(z−z₀)."
          },
          {
            type: 'mcq',
            question: "L'équation différentielle du pendule simple θ'' = −sin θ ≈ −θ pour grandes amplitudes se résout exactement avec :",
            answers: ['Les fonctions de Jacobi sn(t,k) (fonctions elliptiques)', 'Les fonctions trigonométriques sin(t)', 'Les fonctions de Bessel', 'Les fonctions hypergéométriques'],
            correct: 0,
            explanation: "Pour grandes amplitudes, θ''=−sin θ se ramène (après intégration première) à (θ')²=2(cos θ−cos θ₀). En substituant k=sin(θ₀/2) et sin(θ/2)=k·sn(t,k), l'équation devient l'équation de Jacobi. La période exacte est T=4K(k)√(L/g)."
          },
          {
            type: 'input',
            visual: 'Δ',
            question: "Pour la courbe y²=4x³−4x (g₂=4, g₃=0), calculez le discriminant Δ=g₂³−27g₃².",
            correct: '64',
            explanation: "Δ = g₂³−27g₃² = 4³−27·0² = 64−0 = 64. Δ≠0 donc la courbe est lisse (non singulière). Les racines de 4x³−4x = 4x(x²−1) sont 0, 1, −1, toutes distinctes : confirme Δ≠0."
          },
          {
            type: 'mcq',
            question: "La courbe y²=4x³ (g₂=g₃=0) est :",
            answers: ['Singulière avec une pointe en (0,0) (Δ=0)', 'Lisse (elliptique)', 'Une parabole', 'Un cercle'],
            correct: 0,
            explanation: "Δ=0³−27·0²=0. La courbe y²=4x³ a Δ=0 : c'est une cubique singulière, avec une pointe (cuspidale singularité) en (0,0). Paramétriquement : x=t², y=2t³. Ce n'est PAS une courbe elliptique (genre 0 après résolution de la singularité)."
          },
          {
            type: 'mcq',
            question: "La forme de Weierstrass courte y²=x³+ax+b (sans le facteur 4) correspond à g₂=−4a et g₃=−4b. Alors Δ =",
            answers: ['−16(4a³+27b²)', 'a³−27b²', '4a³+27b²', '−4a³−27b²'],
            correct: 0,
            explanation: "Avec y²=x³+ax+b (forme courte), Δ=−16(4a³+27b²). C'est la convention usuelle en cryptographie. Pour la forme longue y²=4x³−g₂x−g₃ : Δ=g₂³−27g₃². Les deux discriminants sont proportionnels."
          },
          {
            type: 'mcq',
            question: "L'ordre de l'EDO (℘')²=4℘³−g₂℘−g₃ est :",
            answers: ["1 (c'est une relation entre ℘ et sa dérivée première ℘\)", '2', '0', '3'],
            correct: 0,
            explanation: "(℘')² = P(℘) est une relation entre ℘' = d℘/dz et ℘ : c'est une EDO du premier ordre, mais non linéaire (℘' apparaît au carré). En prenant la racine carrée : ℘' = ±√(4℘³−g₂℘−g₃), c'est une EDO séparable."
          },
          {
            type: 'mcq',
            question: "La séparation des variables ∫ dt/√(4t³−g₂t−g₃) = z donne la solution :",
            answers: ['t = ℘(z+C) pour une constante C (choix de point initial)', 't = g₂/4−z²', 't = sin(z)', 't = e^z'],
            correct: 0,
            explanation: "En posant t=℘(u) et en intégrant dt/√(4t³−g₂t−g₃)=du, on obtient z = u+C, donc u=z−C et t=℘(z−C). La constante C correspond au choix du point initial sur la courbe elliptique."
          },
          {
            type: 'mcq',
            question: "L'équation du top de Euler (corps rigide) se résout avec ℘. La condition de Euler-Lagrange pour le mouvement libre donne une relation entre Ω (vitesse angulaire) et le temps t de la forme :",
            answers: ['(dΩ/dt)² = polynôme cubique en Ω (équation de Weierstrass)', '(dΩ/dt)² = Ω² (EDO harmonique)', 'dΩ/dt = Ω³', 'Ω = constante'],
            correct: 0,
            explanation: "Les équations d'Euler du corps rigide libre s'intègrent en : (Ω₁')² = −(I₂−I₃)/I₂I₃ · (Ω₁²−A)(Ω₁²−B) = polynôme de degré 4 en Ω₁ (après changement de variable : degré 3 elliptique). La solution est en termes de fonctions elliptiques de Jacobi sn."
          }
        ],
        // Niveau 3
        [
          {
            type: 'mcq',
            question: "La théorie des équations de Painlevé classe les EDO du premier ordre F(y',y,z)=0 avec singularités mobiles essentielles. L'équation (℘')²=P₃(℘) appartient à :",
            answers: ['La classe des équations à singularités mobiles polaires uniquement (pas essentielles) — hors Painlevé', 'Painlevé I', 'Painlevé VI', 'Une classe non classifiée'],
            correct: 0,
            explanation: "(℘')²=4℘³−g₂℘−g₃ a des singularités mobiles qui sont des pôles (doubles) — pas des singularités essentielles. Les équations de Painlevé I-VI ont des pôles mobiles mais leur classification est différente. L'équation de Weierstrass est 'intégrable' au sens classique (pas de singularité essentielle)."
          },
          {
            type: 'mcq',
            question: "La substitution x = ℘(z), y = ℘'(z)/2 transforme la courbe y² = x³+ax+b en :",
            answers: ['(℘\'/2)² = ℘³+a℘+b, i.e., (℘\')² = 4℘³+4a℘+4b (forme de Weierstrass avec g₂=−4a, g₃=−4b)', '℘\'² = ℘³', '(℘\')² = x³+ax+b directement', 'y = x³'],
            correct: 0,
            explanation: "Si y²=x³+ax+b et on pose x=℘, y=℘'/2, alors (℘')²/4=℘³+a℘+b, donc (℘')²=4℘³+4a℘+4b. Cela correspond à g₂=−4a et g₃=−4b dans la forme standard de Weierstrass (℘')²=4℘³−g₂℘−g₃."
          },
          {
            type: 'mcq',
            question: "L'équation de KdV (Korteweg-de Vries) u_t − 6uu_x + u_{xxx} = 0 admet des solutions solitons elliptiques :",
            answers: ['u(x,t) = 2℘(x−ct) (onde elliptique de Weierstrass)', 'u(x,t) = sin(x−ct)', 'u(x,t) = e^{x−ct}', 'u(x,t) = 1/(x−ct)²'],
            correct: 0,
            explanation: "En cherchant des solutions ondes u(x,t)=f(x−ct) pour KdV, on obtient −cf'+6ff'−f'''=0 qui s'intègre en −cf+3f²−f''=C₁, puis (f')²=2f³−cf²−2C₁f+C₂ (si C₁=0 : f=2℘). La solution u=2℘(x−ct) est une onde elliptique périodique de KdV."
          },
          {
            type: 'mcq',
            question: "La relation (℘')² = 4(℘−e₁)(℘−e₂)(℘−e₃) montre que ℘' s'annule exactement en :",
            answers: ['3 points par domaine fondamental : ω₁/2, ω₂/2, (ω₁+ω₂)/2', '2 points', '1 point (en 0 seulement)', '4 points'],
            correct: 0,
            explanation: "℘'(z)=0 ⟺ ℘(z) ∈ {e₁,e₂,e₃}. Chacune des équations ℘(z)=eⱼ a deux solutions ±z₀ mod Λ, mais comme eⱼ=℘(ωⱼ/2) et −ωⱼ/2 ≡ ωⱼ/2 mod Λ, ce sont les mêmes solutions. Donc exactement 3 zéros de ℘' par domaine fondamental."
          },
          {
            type: 'input',
            visual: '#zéros ℘\'',
            question: "Combien de zéros (comptés avec multiplicité) a ℘'(z) dans un domaine fondamental ?",
            correct: '3',
            explanation: "℘' est une fonction elliptique d'ordre 3 (pôles d'ordre 3 en chaque ω ∈ Λ). Par le théorème, #zéros = #pôles = 3. Les zéros sont ω₁/2, ω₂/2, (ω₁+ω₂)/2 (les trois points de 2-torsion non nuls)."
          },
          {
            type: 'mcq',
            question: "La forme de Legendre (forme réduite) y²=(1−x²)(1−k²x²) est reliée à la forme de Weierstrass via :",
            answers: ["Un changement de variable affine x=a℘+b, y=c℘'+d (transformation birationnelle)", 'Elles ne sont pas reliées', 'x=℘ directement', 'Une transformation quadratique'],
            correct: 0,
            explanation: "Les deux formes sont birationnellement équivalentes (même genre 1). Le changement de variable x=(℘−e₃)/((e₁−e₃)¹/²), y=℘'/(2(e₁−e₃)³/²) transforme y²=(℘')²/(4(e₁−e₃)³) = (℘−e₁)(℘−e₂)(℘−e₃)/(e₁−e₃)³ en la forme de Legendre avec k²=(e₂−e₃)/(e₁−e₃)."
          },
          {
            type: 'mcq',
            question: "L'invariant j de la courbe y²=4x³−g₂x−g₃ s'écrit en termes du discriminant Δ par :",
            answers: ['j = 1728·g₂³/Δ', 'j = g₂/g₃', 'j = Δ/g₂', 'j = 12³·g₃²/Δ'],
            correct: 0,
            explanation: "j = 1728·g₂³/Δ = 1728·g₂³/(g₂³−27g₃²). Si g₃=0 (Δ=g₂³), j=1728. Si g₂=0 (Δ=−27g₃², pour la courbe CM hexagonale), j=0. Le j-invariant classe les courbes elliptiques à isomorphisme près sur ℂ̄."
          },
          {
            type: 'mcq',
            question: "L'équation de la courbe modulaire X₁(4) : y²=x³−x paramétrée par les fonctions de Weierstrass correspond à :",
            answers: ['g₂=4, g₃=0 → e₁=1, e₂=0, e₃=−1 et k²=(e₂−e₃)/(e₁−e₃)=1/2', 'g₂=0, g₃=4', 'g₂=g₃=1', 'g₂=4, g₃=4'],
            correct: 0,
            explanation: "Pour y²=x³−x = x(x−1)(x+1), en forme de Weierstrass avec facteur 4 : 4x³−4x, donc g₂=4, g₃=0. Les racines eᵢ sont 1, 0, −1. k²=(e₂−e₃)/(e₁−e₃)=(0−(−1))/(1−(−1))=1/2. Le module k=1/√2, K(k)=K(1/√2)≈1.854."
          },
          {
            type: 'mcq',
            question: "La substitution de Joukowski z=ζ+1/ζ dans l'hydrodynamique est analogue à :",
            answers: ['La substitution t=℘(u) qui uniformise y²=P₃(t) par passage au tore', 'Une transformation de Möbius', 'Une transformation logarithmique', 'Une intégration de Riemann'],
            correct: 0,
            explanation: "La transformation z=ζ+1/ζ uniformise le cercle |ζ|=1 en segment [−2,2] : analogue 1D de l'uniformisation d'une courbe elliptique par ℂ/Λ. Dans les deux cas, on passe d'un espace 'non-uniformisé' (courbe algébrique ou profil aérodynamique) à un espace 'simple' (tore ou cercle)."
          },
          {
            type: 'mcq',
            question: "Le théorème de Picard-Fuchs : si E_λ: y²=x(x−1)(x−λ) est une famille de courbes elliptiques, la période ω₁(λ) satisfait :",
            answers: ['L\'équation hypergéométrique de Gauss : λ(1−λ)ω\'\'+(1−2λ)ω\'−ω/4=0', 'ω\'\'=0', 'ω\'=ω', 'λ²ω\'\'=ω'],
            correct: 0,
            explanation: "La période ω₁(λ)=∫₀¹ dx/√(x(1−x)(1−λx)) = π·₂F₁(1/2,1/2;1;λ) satisfait l'équation hypergéométrique de Gauss. C'est l'équation de Picard-Fuchs de la famille de Legendre. Elle encode la variation des périodes avec le module."
          }
        ],
        // Niveau 4
        [
          {
            type: 'mcq',
            question: "L'équation de Painlevé VI peut se ramener à l'équation de Weierstrass quand :",
            answers: ['Les 4 paramètres de Painlevé VI sont dans une configuration dégénérée spéciale (solutions algébriques)', 'Toujours', 'Jamais (les équations sont indépendantes)', 'Seulement pour PVI avec α=β=γ=δ=0'],
            correct: 0,
            explanation: "Painlevé VI avec paramètres spéciaux admet des solutions algébriques (Hitchin, Dubrovin). Dans certains cas limites, PVI se réduit à l'équation de Weierstrass (℘')²=4℘³−g₂℘−g₃. C'est une dégénérescence dans la classification des équations isomonodromiques."
          },
          {
            type: 'mcq',
            question: "La connexion entre l'équation (℘')²=4℘³−g₂℘−g₃ et les fonctions theta est :",
            answers: ['℘(z)=−(d/dz)² log θ₁(z,τ) + const (ou = −∂²_z log θ₁ + E₂(τ)/3)', '℘(z)=θ₁(z,τ)', '℘(z)=θ₃²/θ₄²', '℘(z)=1/θ₁(z,τ)'],
            correct: 0,
            explanation: "℘(z,τ) = −∂²_z log θ₁(z|τ) − π²E₂(τ)/3 (relation de Jacobi). Cela exprime ℘ en termes de la fonction theta θ₁ et de la série d'Eisenstein quasi-modulaire E₂. Cette relation est fondamentale pour le développement en q de ℘."
          },
          {
            type: 'mcq',
            question: "Le problème de Dirichlet sur un tore ℂ/Λ : la fonction de Green G(z,w) vérifie ΔG = δ_{w}−1/Vol(ℂ/Λ) et s'exprime comme :",
            answers: ['G(z,w) = log|σ(z−w)| − Re((z−w)ηw̄/2) + constante', 'G(z,w) = log|z−w|', 'G(z,w) = ℘(z−w)', 'G(z,w) = |z−w|²'],
            correct: 0,
            explanation: "La fonction de Green du laplacien sur le tore ℂ/Λ est G(z,w)=(2/Area)·Re[...log|σ(z−w)|+quadratique]. La singularité logarithmique log|σ(z−w)| ∼ log|z−w| reflète le pôle en z=w. Cette formule apparaît dans la théorie des cordes et les amplitudes de Veneziano."
          },
          {
            type: 'mcq',
            question: "La forme bilinéaire de Rosenhain-Göpel pour les fonctions theta de caractéristique permet d'exprimer ℘ et ℘' comme :",
            answers: ['Quotients de produits de fonctions theta : ℘(z)−eⱼ = (θₐ(0)/θ_b(0))²·(θ_c(z)/θ_d(z))²', 'Sommes de theta', 'Dérivées de theta uniquement', 'Produits infinis'],
            correct: 0,
            explanation: "Les formules de Rosenhain expriment les eⱼ et ℘(z)−eⱼ comme quotients de fonctions theta au carré. Par exemple : ℘(z)−e₁ = (π·θ₃(0)θ₄(0)θ₂(z)/θ₁(z))². Ces formules sont fondamentales dans le calcul numérique des fonctions elliptiques."
          },
          {
            type: 'input',
            visual: 'j(τ=i)',
            question: "Pour la courbe lemniscatique y²=4x³−g₂x (g₃=0), j = 1728·g₂³/g₂³ = ?",
            correct: '1728',
            explanation: "Avec g₃=0 : Δ=g₂³−27·0=g₂³≠0. Donc j=1728·g₂³/g₂³=1728. C'est le j-invariant du réseau carré (τ=i). Le facteur 1728=12³ est choisi précisément pour normaliser j(i)=1728."
          },
          {
            type: 'mcq',
            question: "L'intégrale elliptique hyperelliptique ∫ dt/√(P(t)) pour P de degré 5 ou 6 est liée à :",
            answers: ['Les fonctions abéliennes (généralisation à genre 2 : courbes de genre 2 et variétés abéliennes 2D)', 'Encore les fonctions elliptiques de Weierstrass', 'Les fonctions de Bessel', 'Les fonctions gamma'],
            correct: 0,
            explanation: "Pour P de degré 3 ou 4 : intégrales elliptiques → fonctions elliptiques (genre 1). Pour P de degré 5 ou 6 : intégrales hyperelliptiques → fonctions theta de genre 2 sur une variété abélienne de dimension 2. Cette généralisation est la théorie des courbes hyperelliptiques."
          },
          {
            type: 'mcq',
            question: "Le théorème de Liouville sur les intégrales elliptiques dit que ∫dx/√(4x³−g₂x−g₃) :",
            answers: ['Ne peut pas s\'exprimer par des fonctions élémentaires (fonctions algébriques, exp, log, constantes)', 'S\'exprime avec log', 'S\'exprime avec arcsin', 'Vaut π/2 toujours'],
            correct: 0,
            explanation: "Liouville (1833) prouve que les intégrales elliptiques ne sont pas élémentaires. La démonstration : supposer une primitive élémentaire F(x)=Σ cᵢ log(fᵢ)+algebraic et dériver pour obtenir une contradiction par analyse du corps de fonctions différentielles. C'est la naissance de la théorie de Galois différentielle."
          },
            {
            type: 'mcq',
            question: "La théorie de Galois différentielle de Picard-Vessiot pour l'équation de Lamé y''=6℘(z)y donne un groupe de Galois différentiel :",
            answers: ["Sous-groupe de SL₂(ℂ) (générique : SL₂(ℂ) entier)", 'GL₂(ℂ) toujours', 'Trivial (solutions algébriques)', 'Un groupe fini cyclique'],
            correct: 0,
            explanation: "L'équation y''=(n(n+1)℘(z)+B)y a son wronskien W=cst, donc groupe ⊂ SL₂(ℂ). Pour n entier et B non exceptionnel, le groupe est SL₂(ℂ) lui-même : aucune intégrale première élémentaire. Pour B exceptionnel (valeur propre de Lamé), le groupe se réduit à un groupe triangulaire ou fini."
          },
          {
            type: 'mcq',
            question: "La fonction ζ de Weierstrass (primitive de −℘) satisfait la quasi-périodicité :",
            answers: ['ζ(z+ωⱼ) = ζ(z) + ηⱼ avec ηⱼ = 2ζ(ωⱼ/2)', 'ζ(z+ωⱼ) = ζ(z)', 'ζ(z+ωⱼ) = ζ(z)·e^(ηⱼ)', 'ζ(z+ωⱼ) = ζ(z) + ωⱼ'],
            correct: 0,
            explanation: "ζ\'(z) = −℘(z), donc ζ n'est pas périodique. La quasi-période ηⱼ = 2ζ(ωⱼ/2) mesure le défaut de périodicité. La relation de Legendre η₁ω₂ − η₂ω₁ = 2πi relie les quasi-périodes aux périodes et est l'analogue elliptique du résidu."
          },
          {
            type: 'input',
            visual: 'ordre ℘',
            question: "La fonction ℘ de Weierstrass a un pôle d'ordre 2 en z=0. Quel est l'ordre (= nombre de pôles dans un domaine fondamental, avec multiplicité) de ℘ ?",
            correct: '2',
            explanation: "℘ a un unique pôle dans le domaine fondamental, en z=0, et c'est un pôle d'ordre 2. Donc l'ordre de ℘ est 2. Par le théorème de Liouville généralisé, toute fonction elliptique d'ordre n a exactement n pôles (avec multiplicité) et n zéros dans un domaine fondamental."
          }
        ],
        // Niveau 5
        [
          {
            type: 'mcq',
            question: "Les zéros de la dérivée ℘'(z) sont situés en :",
            answers: ['z = ω₁/2, ω₂/2, (ω₁+ω₂)/2 (les trois demi-périodes)', 'z = 0 seulement', 'z = ω₁, ω₂', 'z = ω₁/3, 2ω₁/3'],
            correct: 0,
            explanation: "℘'(z) est impaire et elliptique d'ordre 3. Elle a 3 zéros dans le domaine fondamental. Comme ℘' est impaire et les demi-périodes ω₁/2, ω₂/2, (ω₁+ω₂)/2 sont des points fixes de z→−z mod Λ, on a ℘'(ωⱼ/2)=0. Ces points correspondent aux valeurs eⱼ = ℘(ωⱼ/2)."
          },
          {
            type: 'mcq',
            question: "Les valeurs eⱼ = ℘(ωⱼ/2) satisfont :",
            answers: ['e₁+e₂+e₃=0 et 4(e₁e₂+e₂e₃+e₃e₁)=−g₂/4 … soit e₁+e₂+e₃=0, e₁e₂+e₁e₃+e₂e₃=−g₂/4, e₁e₂e₃=g₃/4', 'eⱼ = 0 pour tout j', 'e₁=e₂=e₃', 'eⱼ = j·π'],
            correct: 0,
            explanation: "4x³−g₂x−g₃ = 4(x−e₁)(x−e₂)(x−e₃). En développant : somme des racines = 0 (terme en x² absent), somme des produits deux à deux = −g₂/4, produit = g₃/4. Ces relations d'Alembert-Newton sont fondamentales dans la théorie des fonctions modulaires."
          },
          {
            type: 'mcq',
            question: "Le discriminant de l'équation (℘')²=4℘³−g₂℘−g₃ est Δ = g₂³−27g₃². Que signifie Δ≠0 ?",
            answers: ['Les trois racines eⱼ sont distinctes, i.e. la courbe elliptique est lisse (non singulière)', 'La courbe a un point double', 'g₂=0 ou g₃=0', 'La période est réelle'],
            correct: 0,
            explanation: "Δ = 16(e₁−e₂)²(e₂−e₃)²(e₁−e₃)² (à un facteur près). Δ≠0 ⟺ les eⱼ sont distincts ⟺ la cubique y²=4x³−g₂x−g₃ est non singulière, i.e. définit une vraie courbe elliptique (de genre 1). Si Δ=0, la courbe est nodale (un point double) ou cuspide."
          },
          {
            type: 'mcq',
            question: "Le développement en série de Laurent de ℘(z) autour de z=0 commence par :",
            answers: ['℘(z) = 1/z² + g₂z²/20 + g₃z⁴/28 + O(z⁶)', '℘(z) = 1/z + g₂z/4 + …', '℘(z) = z² + g₂/20 + …', '℘(z) = 1/z² + 1/z + g₂/20 + …'],
            correct: 0,
            explanation: "℘(z) = z⁻² + Σₙ≥₁ (2n+1)G₂ₙ₊₂ z²ⁿ. Les premiers termes : ℘(z) = 1/z² + (G₄)z² + (G₆)z⁴ + … avec G₄ = g₂/20 et G₆ = g₃/28. Ces coefficients sont les séries d'Eisenstein G₄ et G₆ du réseau Λ."
          },
          {
            type: 'mcq',
            question: "La relation entre ℘ et les fonctions de Jacobi sn est :",
            answers: ['℘(z) = e₃ + (e₁−e₃)/sn²(√(e₁−e₃)·z, k) avec k²=(e₂−e₃)/(e₁−e₃)', '℘(z) = sn(z)', '℘(z) = 1/sn(z)', '℘(z) = cn(z)/sn(z)'],
            correct: 0,
            explanation: "Le changement de variable w = √(e₁−e₃)·z transforme l'équation de Weierstrass en forme de Jacobi. On obtient sn²(w,k) = (e₁−e₃)/(℘(z)−e₃) avec k² = (e₂−e₃)/(e₁−e₃). Cela relie les deux paramétrisations des courbes elliptiques."
          },
          {
            type: 'mcq',
            question: "Le théorème d'addition de ℘ : ℘(u+v) s'exprime en fonction de ℘(u), ℘(v), ℘'(u), ℘'(v) par :",
            answers: ['℘(u+v) = −℘(u)−℘(v) + (1/4)·((℘\'(u)−℘\'(v))/(℘(u)−℘(v)))²', '℘(u+v) = ℘(u)+℘(v)', '℘(u+v) = ℘(u)·℘(v)', '℘(u+v) = ℘(u)−℘(v)'],
            correct: 0,
            explanation: "La loi d'addition de ℘ : ℘(u+v) = (1/4)[(℘'(u)−℘'(v))/(℘(u)−℘(v))]² − ℘(u) − ℘(v). Cette formule est l'expression analytique de la loi de groupe sur la courbe elliptique. Elle permet de calculer nP pour un point P en répétant l'addition."
          },
          {
            type: 'mcq',
            question: "La fonction sigma σ(z) de Weierstrass est l'analogue elliptique de :",
            answers: ['La fonction sin(πz)/π (produit infini de Hadamard)', 'exp(z)', 'z²', 'La fonction Gamma'],
            correct: 0,
            explanation: "σ(z) = z·∏_{ω∈Λ\\{0}} (1−z/ω)·exp(z/ω + z²/(2ω²)). C'est l'analogue de sin(πz)/π = z·∏_{n≠0}(1−z/n)e^(z/n). Les deux sont des fonctions entières à zéros simples aux points du réseau (ou entiers). σ est la 'primitive exponentielle' de ζ : σ'/σ = ζ."
          },
          {
            type: 'mcq',
            question: "L'identité fondamentale liant ℘, ℘' et la courbe elliptique y²=4x³−g₂x−g₃ signifie que :",
            answers: ['Le morphisme z ↦ (℘(z):℘\'(z):1) est une uniformisation de la courbe elliptique par ℂ/Λ', '℘ est solution d\'une EDO ordinaire sans lien géométrique', 'La courbe est paramétrée par des polynômes', 'ℂ/Λ est homéomorphe à ℝ²'],
            correct: 0,
            explanation: "Le morphisme analytique φ: ℂ/Λ → E(ℂ), z ↦ (℘(z), ℘'(z)) (et 0 ↦ point à l'infini) est un isomorphisme de groupes analytiques. C'est le théorème d'uniformisation des courbes elliptiques : tout tore complexe ℂ/Λ est isomorphe à une courbe elliptique projective."
          },
          {
            type: 'mcq',
            question: "Le développement en q de g₂(τ) pour q=e^(2πiτ), τ dans le demi-plan supérieur, est :",
            answers: ['g₂ = (4π⁴/3)(1 + 240·Σₙ≥₁ σ₃(n)qⁿ) = (4π⁴/3)·E₄(τ)', 'g₂ = q + q² + q³ + …', 'g₂ = π²·E₂(τ)', 'g₂ = Σ 1/n⁴'],
            correct: 0,
            explanation: "g₂ = 60G₄ = 60·(2ζ(4) + 2·(2πi)⁴Σσ₃(n)qⁿ/(4!)) = (4π⁴/3)·E₄(τ) où E₄=1+240Σσ₃(n)qⁿ est la série d'Eisenstein de poids 4. Cette formule est le pont entre les fonctions elliptiques et la théorie des formes modulaires."
          },
          {
            type: 'input',
            visual: 'g₃(τ=i)',
            question: "Pour le réseau carré Λ=ℤ+iℤ (τ=i), montrez que g₃=0. Quel est le signe de g₃ pour ce réseau ?",
            correct: '0',
            explanation: "Pour τ=i, le réseau est invariant par rotation de π/2 (multiplication par i). La série g₃=140G₆=140Σ_{ω∈Λ*} ω⁻⁶. Sous ω→iω : G₆→i⁻⁶G₆=−G₆. Donc G₆=−G₆, soit G₆=0, et g₃=0. La courbe associée est y²=4x³−g₂x (lemniscatique)."
          }
        ],
        // =======================
        // ===== Niveau L1 =======
        // =======================
        [
          {
            type: 'mcq',
            question: "L'équation (℘')²=4℘³−g₂℘−g₃ peut se réécrire, en posant ℘=x et ℘'=y, comme y²=4x³−g₂x−g₃. Cette courbe est :",
            answers: ["Une courbe elliptique de genre 1 dans le plan projectif ℙ²(ℂ) (forme de Weierstrass)", 'Un cercle de rayon √g₂', 'Une parabole', 'Une cubique singuliaire (genre 0)'],
            correct: 0,
            explanation: "y²=4x³−g₂x−g₃ avec Δ=g₂³−27g₃²≠0 est une cubique plane lisse dans ℙ²(ℂ). Son genre topologique est g=1 (tore). C'est la définition d'une courbe elliptique en géométrie algébrique. Elle admet un groupe de Picard de degré 0 isomorphe à la courbe elle-même."
          },
          {
            type: 'mcq',
            question: "La série de Laurent ℘(z)=z⁻²+Σₙ≥₁ cₙz²ⁿ montre que ℘ est une fonction :",
            answers: ['Paire (℘(−z)=℘(z)) avec un pôle double en 0', 'Impaire', 'Sans pôle', 'Avec un pôle simple en 0'],
            correct: 0,
            explanation: "Le développement ℘(z)=z⁻²+c₁z²+c₂z⁴+… ne contient que des puissances paires. Donc ℘(−z)=℘(z) : ℘ est une fonction paire. Cela se voit aussi directement : ℘(z)=Σ_{ω} [(z−ω)⁻²−ω⁻²] est invariant sous z→−z car la somme est sur −Λ=Λ."
          },
          {
            type: 'mcq',
            question: "La substitution z→z+ω₁ dans l'EDO (℘')²=4℘³−g₂℘−g₃ montre que :",
            answers: ['L\'équation est compatible avec la périodicité : ℘(z+ω₁) satisfait la même équation que ℘(z)', 'L\'équation change de forme', 'g₂ et g₃ changent', 'La solution double'],
            correct: 0,
            explanation: "℘(z+ω₁)=℘(z) par périodicité, donc (℘'(z+ω₁))²=(℘'(z))²=4℘(z)³−g₂℘(z)−g₃. L'équation différentielle est automatiquement compatible avec la structure périodique. C'est une vérification de cohérence fondamentale."
          },
          {
            type: 'mcq',
            question: "Le nombre de solutions de ℘(z)=c dans un domaine fondamental est :",
            answers: ['2 (comptées avec multiplicité) sauf si c=eⱼ (1 solution double)', '1 toujours', '3 toujours', '0 si c∉ℝ'],
            correct: 0,
            explanation: "℘ est d'ordre 2, donc par le théorème fondamental des fonctions elliptiques, l'équation ℘(z)=c a exactement 2 solutions (avec multiplicité) dans le domaine fondamental pour tout c∈ℂ∪{∞}. Les valeurs c=eⱼ sont les seuls cas où la solution est double (℘'=0)."
          },
          {
            type: 'mcq',
            question: "L'équation différentielle (℘')²=4℘³−g₂℘−g₃ est d'ordre :",
            answers: ['1 (seule la dérivée première intervient)', '2', '3', '0 (c\'est une relation algébrique entre ℘ et ℘\')'],
            correct: 0,
            explanation: "L'équation (℘')²=4℘³−g₂℘−g₃ est d'ordre 1 : elle ne fait intervenir que ℘ et ℘'=d℘/dz (la dérivée première). C'est une équation du type F(z,y,y')=0 avec (y')²=4y³−g₂y−g₃. Elle est analogue à (sin')²=1−sin² mais pour une cubique au lieu d'une quadratique."
          },
          {
            type: 'mcq',
            question: "Le résidu de ℘ en z=0 est :",
            answers: ['0 (car ℘ a un pôle double, le résidu d\'un pôle double est le coefficient de 1/z, ici absent)', '1', '2πi', 'g₂/4'],
            correct: 0,
            explanation: "℘(z) = 1/z² + 0/z + (termes réguliers). Le résidu en z=0 est le coefficient de 1/z dans le développement de Laurent, qui est 0. Cela est cohérent avec le fait que ∫_C ℘(z)dz=0 sur tout contour C entourant 0 dans un domaine fondamental."
          },
          {
            type: 'mcq',
            question: "La somme des résidus de ℘' dans un domaine fondamental vaut :",
            answers: ['0 (℘\' est elliptique, donc la somme de ses résidus est nulle)', '2πi', 'g₂', 'g₃'],
            correct: 0,
            explanation: "Toute fonction elliptique a une somme de résidus nulle dans un domaine fondamental. En effet, ∮_∂D f(z)dz = 0 (le contour se referme modulo Λ) = 2πi·Σrés. Donc Σrés = 0. Pour ℘', on peut vérifier : ℘' a des pôles triples en Λ avec résidu 0."
          },
          {
            type: 'mcq',
            question: "La relation ℘'(z)² = 4(℘(z)−e₁)(℘(z)−e₂)(℘(z)−e₃) permet de montrer que :",
            answers: ['℘ prend les valeurs eⱼ exactement aux demi-périodes ωⱼ/2 (avec multiplicité 2)', '℘ ne prend jamais les valeurs eⱼ', '℘(0) = e₁', '℘ est constante'],
            correct: 0,
            explanation: "℘'(z)=0 ⟺ ℘(z)=eⱼ pour j=1,2 ou 3. Les zéros de ℘' sont aux demi-périodes : ℘'(ω₁/2)=0. Comme ℘ est d'ordre 2, chaque valeur eⱼ est atteinte exactement deux fois (ici en ωⱼ/2 et −ωⱼ/2 = ωⱼ/2 mod Λ : une fois avec multiplicité 2)."
          },
          {
            type: 'mcq',
            question: "Le discriminant Δ=g₂³−27g₃² de la courbe de Weierstrass est relié au j-invariant par j=",
            answers: ['j = 1728·g₂³/Δ', 'j = g₂/g₃', 'j = Δ/(g₂g₃)', 'j = 12·g₂²/Δ'],
            correct: 0,
            explanation: "j = 1728·g₂³/(g₂³−27g₃²) = 1728·g₂³/Δ. Le facteur 1728=12³ est choisi pour que j(i)=1728 (réseau carré) et j(e^(2πi/3))=0 (réseau hexagonal). Le j-invariant classifie les courbes elliptiques sur ℂ à isomorphisme près."
          },
          {
            type: 'input',
            visual: '℘(z) pôle',
            question: "En quel ordre ℘(z) a-t-il un pôle en z=0 ? (répondre par l'entier)",
            correct: '2',
            explanation: "Le développement de Laurent de ℘(z) au voisinage de z=0 est ℘(z) = 1/z² + (termes réguliers). Le terme dominant est z⁻², ce qui correspond à un pôle d'ordre exactement 2. Cela se voit directement dans la définition : ℘(z) = 1/z² + Σ_{ω≠0}[(z−ω)⁻²−ω⁻²]."
          }
        ]
      ]
    },

    // ============================================================
    // NOTION 6 : Fonctions elliptiques de Jacobi
    // ============================================================
    {
      id: 'fonctions-jacobi',
      label: 'Fonctions elliptiques de Jacobi',
      lesson: {
        formula: 'sn²(u,k) + cn²(u,k) = 1 ; dn²(u,k) = 1 − k²sn²(u,k)',
        text: "Les fonctions de Jacobi sn, cn, dn généralisent les fonctions trigonométriques en remplaçant le cercle unitaire x²+y²=1 par une courbe elliptique. Elles sont doublement périodiques et vérifient des identités de Pythagore elliptiques. sn est l'inverse de l'intégrale F(x,k).",
        example: "Pour k=0 : sn(u,0)=sin(u), cn(u,0)=cos(u), dn(u,0)=1. Pour k→1 : sn(u,1)=tanh(u), cn(u,1)=sech(u), dn(u,1)=sech(u). L'interpolation continue entre trigonométrique et hyperbolique."
      },
      fullBlocks: [
        {
          type: 'definition',
          title: 'Définition de sn par inversion',
          text: "On définit u = F(x,k) = ∫₀^x dt/√((1−t²)(1−k²t²)). La fonction sn est l'inverse : x = sn(u,k). Autrement dit, si u = ∫₀^φ dθ/√(1−k²sin²θ), alors sn(u,k) = sin(φ)."
        },
        {
          type: 'definition',
          title: 'Fonctions cn et dn',
          text: "On pose cn(u,k) = cos(φ) = √(1−sn²(u,k)) et dn(u,k) = √(1−k²sn²(u,k)). Ces trois fonctions satisfont les identités fondamentales : sn²+cn²=1 (analogue de sin²+cos²=1) et dn²+k²sn²=1 (identité spécifiquement elliptique)."
        },
        {
          type: 'formula',
          title: 'Périodicité de sn, cn, dn',
          formula: 'sn(u+4K,k)=sn(u) ; cn(u+4K,k)=cn(u) ; dn(u+2K,k)=dn(u)',
          text: "sn et cn ont la même période réelle 4K(k). dn a la période réelle 2K(k). Les périodes complexes : sn a aussi la période 2iK'(k), cn la période 4iK', dn la période 2K+2iK'. Ici K'=K(k') avec k'=√(1−k²)."
        },
        {
          type: 'demo',
          title: 'Dérivées des fonctions de Jacobi',
          text: "En dérivant x=sn(u,k) par rapport à u en utilisant u=F(x,k)=(du/dx)=1/√((1−x²)(1−k²x²)), on obtient : d/du[sn(u)] = cn(u)·dn(u). De même : d/du[cn(u)] = −sn(u)·dn(u) et d/du[dn(u)] = −k²·sn(u)·cn(u). Ces formules généralisent d/du[sin(u)] = cos(u) et d/du[cos(u)] = −sin(u)."
        },
        {
          type: 'graph',
          title: 'Graphes de sn, cn, dn pour k=0.7',
          svgContent: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="200" fill="#f8f9fa"/><line x1="30" y1="100" x2="300" y2="100" stroke="#333" stroke-width="1.5"/><line x1="30" y1="20" x2="30" y2="185" stroke="#333" stroke-width="1.5"/><text x="302" y="104" font-size="10">u</text><text x="18" y="14" font-size="10">y</text><text x="28" y="195" font-size="9">0</text><text x="270" y="195" font-size="9">4K</text><line x1="30" y1="50" x2="300" y2="50" stroke="#ddd" stroke-width="1" stroke-dasharray="3"/><line x1="30" y1="150" x2="300" y2="150" stroke="#ddd" stroke-width="1" stroke-dasharray="3"/><text x="2" y="53" font-size="9" fill="#555">1</text><text x="2" y="153" font-size="9" fill="#555">−1</text><path d="M30,100 C55,100 65,50 80,50 C95,50 105,100 120,100 C135,100 145,150 160,150 C175,150 185,100 200,100 C215,100 225,50 240,50 C255,50 265,100 280,100" stroke="#3b82f6" stroke-width="2" fill="none"/><path d="M30,50 C45,50 60,75 80,100 C100,125 115,150 160,150 C185,150 200,125 220,100 C240,75 255,50 280,50" stroke="#ef4444" stroke-width="2" fill="none"/><path d="M30,65 C70,65 100,80 130,90 C160,98 190,80 220,65 C250,50 270,60 280,65" stroke="#22c55e" stroke-width="2" fill="none"/><text x="240" y="44" font-size="9" fill="#3b82f6">sn</text><text x="170" y="165" font-size="9" fill="#ef4444">cn</text><text x="140" y="85" font-size="9" fill="#22c55e">dn</text></svg>',
          caption: 'sn (bleu) oscille entre −1 et 1 comme sin ; cn (rouge) comme cos mais décalé ; dn (vert) reste dans (k\',1).',
          text: "Pour k=0, on retrouve sin et cos. Pour k proche de 1, sn ressemble à tanh (kink solitonique) et dn à sech."
        },
        {
          type: 'example',
          title: 'Application au pendule simple',
          text: "L'angle θ(t) d'un pendule simple de longueur l et amplitude θ₀ vérifie θ(t) = 2·arcsin(k·sn(ωt,k)) avec k=sin(θ₀/2) et ω=√(g/l). La période est T=4K(k)/ω = 4K(k)√(l/g). Pour θ₀→0, k→0, sn(ωt,0)=sin(ωt) et T→2π√(l/g) : on retrouve la période habituelle."
        },
        {
          type: 'warning',
          title: 'Convention des modules : k vs m',
          text: "ATTENTION : Mathematica et MATLAB utilisent m=k² comme paramètre (JacobiSN[u,m]). La convention de ce cours est JacobiSN[u,k²] avec k le module. Vérifiez toujours la convention avant tout calcul numérique."
        }
      ],
      levels: [
        // Niveau 1
        [
          {
            type: 'mcq',
            question: "sn(u,k) est définie comme :",
            answers: ['L\'inverse de F(x,k) : si u=∫₀^x dt/√((1−t²)(1−k²t²)) alors sn(u,k)=x', 'sin(u)', 'sin(u)/cos(u)', '∫₀^u sin(t) dt'],
            correct: 0,
            explanation: "sn est définie par inversion de l'intégrale elliptique F : u = F(sn(u),k). C'est l'analogue exact de la définition arcsin(x)=∫₀^x dt/√(1−t²), dont l'inverse est sin. La lettre 'sn' vient de 'sine amplitude'."
          },
          {
            type: 'mcq',
            question: "L'identité fondamentale de Jacobi analogue à sin²+cos²=1 est :",
            answers: ['sn²(u,k) + cn²(u,k) = 1', 'sn²(u,k) + dn²(u,k) = 1', 'cn²(u,k) + dn²(u,k) = 1', 'sn(u)·cn(u)·dn(u) = 1'],
            correct: 0,
            explanation: "sn²+cn²=1 est l'identité fondamentale, directe conséquence de cn=√(1−sn²). L'autre identité est k²sn²+dn²=1 (ou dn²+k²sn²=1). Ces deux identités permettent d'exprimer tout en termes de sn seul."
          },
          {
            type: 'mcq',
            question: "Pour k=0, les fonctions de Jacobi vérifient :",
            answers: ['sn(u,0)=sin(u), cn(u,0)=cos(u), dn(u,0)=1', 'sn(u,0)=tan(u), cn(u,0)=1, dn(u,0)=0', 'sn(u,0)=u, cn(u,0)=1, dn(u,0)=u', 'sn(u,0)=0'],
            correct: 0,
            explanation: "Pour k=0 : F(x,0)=∫₀^x dt/√(1−t²)=arcsin(x). Donc sn(u,0)=sin(u). Puis cn(u,0)=√(1−sin²u)=cos(u) et dn(u,0)=√(1−0)=1. On retrouve exactement les fonctions trigonométriques circulaires."
          },
          {
            type: 'mcq',
            question: "La dérivée de sn(u,k) par rapport à u est :",
            answers: ['cn(u,k)·dn(u,k)', 'cos(u)', '−sn(u,k)', 'dn(u,k)/cn(u,k)'],
            correct: 0,
            explanation: "d/du[sn] = cn·dn. C'est l'analogue de d/du[sin]=cos, mais avec un facteur supplémentaire dn qui tient compte de la structure elliptique. Cette formule se démontre en dérivant u=F(sn(u),k) par rapport à u."
          },
          {
            type: 'mcq',
            question: "La période réelle de sn(u,k) est :",
            answers: ['4K(k)', '2K(k)', 'K(k)', '2π'],
            correct: 0,
            explanation: "sn(u+4K,k)=sn(u). La demi-période est 2K : sn(u+2K)=−sn(u) (comme sin(u+π)=−sin(u)). La période fondamentale est 4K car sn revient à la même valeur après 4K. Pour k=0 : 4K(0)=4·π/2=2π, cohérent avec la période de sin."
          },
          {
            type: 'mcq',
            question: "sn(0,k) vaut :",
            answers: ['0', '1', 'k', 'K(k)'],
            correct: 0,
            explanation: "sn(0,k)=0 car sn est l'inverse de F et F(0)=∫₀^0=0. Comme sin(0)=0, sn(0)=0 est cohérent. On a aussi cn(0)=1 et dn(0)=1, analogues à cos(0)=1."
          },
          {
            type: 'mcq',
            question: "sn(K(k),k) vaut :",
            answers: ['1', '0', 'k', 'K(k)'],
            correct: 0,
            explanation: "K(k) = F(1,k) = ∫₀^1 dt/√((1−t²)(1−k²t²)). Donc sn(K(k),k) = 1. Analogie : sin(π/2)=1, et K joue le rôle de π/2. On a aussi cn(K)=0 et dn(K)=k'=√(1−k²)."
          },
          {
            type: 'mcq',
            question: "Pour k→1, les fonctions de Jacobi dégénèrent vers :",
            answers: ['sn(u,1)=tanh(u), cn(u,1)=sech(u), dn(u,1)=sech(u)', 'sn(u,1)=sin(u), cn(u,1)=cos(u)', 'sn(u,1)=1, cn(u,1)=0', 'sn(u,1)=u'],
            correct: 0,
            explanation: "Quand k→1 : K(k)→∞, la période réelle 4K→∞ et les fonctions dégénèrent en fonctions hyperboliques. sn→tanh, cn→sech, dn→sech. Ce cas correspond au soliton (onde solitaire) en physique des fluides non-linéaires."
          },
          {
            type: 'input',
            visual: 'cn(0,k)',
            question: "Quelle est la valeur de cn(0,k) pour tout k∈(0,1) ?",
            correct: '1',
            explanation: "cn(u,k) = √(1−sn²(u,k)). En u=0 : sn(0,k)=0, donc cn(0,k)=√(1−0)=1. C'est l'analogue de cos(0)=1."
          },
          {
            type: 'mcq',
            question: "La seconde identité elliptique de Pythagore est :",
            answers: ['dn²(u,k) + k²·sn²(u,k) = 1', 'dn²(u,k) + cn²(u,k) = 1', 'dn(u,k) = sn(u,k)/cn(u,k)', 'dn(u,k)² = 1 − k²'],
            correct: 0,
            explanation: "dn(u,k)=√(1−k²sn²(u,k)) par définition, donc dn²+k²sn²=1. C'est la deuxième identité fondamentale. Pour k=0 : dn=1 et 1+0=1 ✓. Pour k=1 : dn²+sn²=1, i.e. sech²+tanh²=1 ✓ (identité hyperbolique)."
          }
        ],
        // Niveau 2
        [
          {
            type: 'mcq',
            question: "La dérivée d/du[cn(u,k)] vaut :",
            answers: ['−sn(u,k)·dn(u,k)', 'sn(u,k)·dn(u,k)', '−cn(u,k)', 'dn(u,k)'],
            correct: 0,
            explanation: "d/du[cn] = −sn·dn. C'est l'analogue de d/du[cos]=−sin, avec le facteur dn supplémentaire. On obtient cette formule en dérivant l'identité sn²+cn²=1 : 2sn·cn·dn + 2cn·(d/du[cn]) = 0, soit d/du[cn] = −sn·dn."
          },
          {
            type: 'mcq',
            question: "La dérivée d/du[dn(u,k)] vaut :",
            answers: ['−k²·sn(u,k)·cn(u,k)', '−k·sn(u,k)', 'k²·cn(u,k)', '−sn(u,k)·cn(u,k)'],
            correct: 0,
            explanation: "En dérivant dn²+k²sn²=1 : 2dn·(d/du[dn]) + 2k²sn·cn·dn = 0, soit d/du[dn] = −k²sn·cn. Pour k=0 : d/du[dn]=d/du[1]=0=−0·sn·cn ✓. Pour k=1 : d/du[tanh^(−1)...] = −sech·tanh = −dn·sn ✓."
          },
          {
            type: 'mcq',
            question: "L'équation différentielle vérifiée par y=sn(u,k) est :",
            answers: ['(y\')²=(1−y²)(1−k²y²)', '(y\')+y=0', '(y\'\')=−y', '(y\')²=1−y²'],
            correct: 0,
            explanation: "d/du[sn]=cn·dn, donc (sn')²=cn²·dn²=(1−sn²)(1−k²sn²). Avec y=sn : (y')²=(1−y²)(1−k²y²). C'est exactement la forme algébrique de l'intégrale elliptique de première espèce. Pour k=0 : (y')²=1−y², i.e. l'EDO du sinus ✓."
          },
          {
            type: 'mcq',
            question: "La seconde période (imaginaire) de sn(u,k) est :",
            answers: ['2iK\'(k) où K\'=K(√(1−k²))', 'πi', '2πi/k', '4iK(k)'],
            correct: 0,
            explanation: "sn(u+2iK') = sn(u). La période imaginaire est 2iK' avec K'=K(k'), k'=√(1−k²). La double périodicité de sn est caractérisée par les périodes (4K, 2iK'). Pour k=1/√2 : K=K'≈1.854 et le réseau des périodes est carré (à facteur 2 près)."
          },
          {
            type: 'mcq',
            question: "La formule d'addition de sn(u+v) est :",
            answers: ['sn(u+v) = (sn u·cn v·dn v + sn v·cn u·dn u)/(1−k²sn²u·sn²v)', 'sn(u+v) = sn(u)+sn(v)', 'sn(u+v) = sn(u)·cn(v)+cn(u)·sn(v)', 'sn(u+v) = sn(u+v)'],
            correct: 0,
            explanation: "La loi d'addition elliptique pour sn : sn(u+v)=(snu·cnv·dnv + snv·cnu·dnu)/(1−k²sn²u·sn²v). Pour k=0 : sn=sin, dn=1, dénominateur=1−0=1, et on retrouve sin(u+v)=sinucosvdnv+sinvcosu·1=sinucosv+cosusinv ✓."
          },
          {
            type: 'mcq',
            question: "Le pôle de sn(u,k) dans le domaine fondamental est situé en :",
            answers: ['u = iK\' (et ses translatés par le réseau)', 'u = K', 'u = 0', 'u = 2K+iK\''],
            correct: 0,
            explanation: "sn(u,k) a des pôles simples en u=iK' et u=2K+iK' (dans le domaine fondamental {u : 0≤Re(u)<4K, 0≤Im(u)<2K'}). En u=iK', sn(iK')=∞. Pour k→0 : K'→∞ et le pôle s'éloigne à l'infini, cohérent avec sin qui n'a pas de pôle fini."
          },
          {
            type: 'mcq',
            question: "La relation entre sn et la fonction ℘ de Weierstrass est :",
            answers: ['℘(z)=e₃+(e₁−e₃)/sn²(√(e₁−e₃)z, k) avec k²=(e₂−e₃)/(e₁−e₃)', 'sn(z)=℘(z)', '℘(z)=sn²(z)', 'sn(z)=1/℘(z)'],
            correct: 0,
            explanation: "Le changement de variable w=√(e₁−e₃)·z transforme l'équation de Weierstrass (℘')²=4(℘−e₁)(℘−e₂)(℘−e₃) en la forme de Jacobi (sn')²=(1−sn²)(1−k²sn²) avec k²=(e₂−e₃)/(e₁−e₃). Les deux formes sont équivalentes mais couvrent des besoins différents."
          },
          {
            type: 'mcq',
            question: "sn(u+K,k) vaut :",
            answers: ['cn(u,k)/dn(u,k)', '−sn(u,k)', 'cn(u,k)', '1/sn(u,k)'],
            correct: 0,
            explanation: "La translation de demi-période donne : sn(u+K)=cnu/dnu. Analogie avec sin(u+π/2)=cos(u). Pour k=0 : sn(u+π/2,0)=sin(u+π/2)=cos(u) et cnu/dnu=cosu/1=cosu ✓."
          },
          {
            type: 'mcq',
            question: "Les fonctions ns(u), cs(u), ds(u) désignent :",
            answers: ['1/sn, cn/sn, dn/sn (les réciproques et quotients de sn,cn,dn)', 'Les dérivées de sn,cn,dn', 'sn(−u), cn(−u), dn(−u)', 'Des fonctions non-standard'],
            correct: 0,
            explanation: "Les 12 fonctions de Jacobi comprennent sn, cn, dn et leurs 9 quotients/inverses. ns=1/sn (pôle là où sn=0), cs=cn/sn, ds=dn/sn, nc=1/cn, sc=sn/cn, dc=dn/cn, nd=1/dn, sd=sn/dn, cd=cn/dn."
          },
          {
            type: 'input',
            visual: 'dn(K,k)',
            question: "dn(K(k),k) = ? Rappel : sn(K)=1 et dn²+k²sn²=1. Exprimer en fonction de k.",
            correct: "k'",
            explanation: "dn(K,k)=√(1−k²sn²(K,k))=√(1−k²·1²)=√(1−k²)=k'. On note k'=√(1−k²) le module complémentaire. Ainsi dn(K)=k'. Vérification : pour k=0, dn(K(0),0)=dn(π/2,0)=1=k'=√1 ✓."
          }
        ],
        // Niveau 3
        [
          {
            type: 'mcq',
            question: "La transformation de Jacobi (descente du module) est :",
            answers: ['sn(u,k)=(1+k\')sn(u/(1+k\'),k₁)/(1+k\'sn²(u/(1+k\'),k₁)) où k₁=(1−k\')/(1+k\')', 'sn(u,k)=sn(u/2, k²)', 'sn(u,k)=2sn(u,k/2)cn(u,k/2)', 'sn(u,k)=sn(u,1−k)'],
            correct: 0,
            explanation: "La transformation de Landen descendante réduit le module : k₁=(1−k')/(1+k') < k. Elle permet de calculer sn, cn, dn pour n'importe quel k en itérant jusqu'à k≈0 (cas trigonométrique). C'est l'algorithme le plus efficace pour évaluer numériquement les fonctions de Jacobi."
          },
          {
            type: 'mcq',
            question: "Le développement en série de Fourier de sn(u,k) est (q=e^(−πK'/K)) :",
            answers: ['sn(u,k) = (2π/(kK))·Σₙ≥₀ qⁿ⁺¹/²sin((2n+1)πu/(2K))/(1−q^(2n+1))', 'sn(u,k) = Σ sin(nu)', 'sn(u,k) = u − u³/6 + …', 'sn(u,k) = Σ qⁿ cos(nπu/K)'],
            correct: 0,
            explanation: "Le développement de Fourier de sn fait intervenir le nome q=e^(−πK'/K). Pour q petit (k petit), la série converge rapidement. Ce développement est la base des formules de Jacobi reliant fonctions elliptiques et fonctions theta : sn=θ₁/θ₄ (à des facteurs près)."
          },
          {
            type: 'mcq',
            question: "Le lien sn=θ₁/θ₄ en termes de fonctions theta signifie :",
            answers: ['sn(u,k)=√(θ₃(0)/θ₂(0))·θ₁(πu/2K,q)/θ₄(πu/2K,q)', 'sn=θ₁/θ₂', 'sn=θ₃/θ₄', 'sn=θ₁·θ₂'],
            correct: 0,
            explanation: "Les fonctions theta de Jacobi θ₁,θ₂,θ₃,θ₄ (dépendant du nome q) donnent les fonctions de Jacobi par quotients. Par exemple sn(u)=√(θ₃(0)/θ₂(0))·θ₁(v)/θ₄(v) où v=πu/(2K). Ces représentations sont fondamentales pour les applications en théorie analytique des nombres."
          },
          {
            type: 'mcq',
            question: "L'intégrale ∫₀^u dn(t,k)dt vaut :",
            answers: ['am(u,k) (amplitude de Jacobi) tel que sin(am(u))=sn(u)', 'K(k)', 'sn(u,k)/cn(u,k)', 'arctan(sn(u)/dn(u))'],
            correct: 0,
            explanation: "am(u,k) = ∫₀^u dn(t,k)dt = arcsin(sn(u,k)) est l'amplitude de Jacobi. C'est l'angle φ tel que u=F(sinφ,k). On a sin(am(u))=sn(u), cos(am(u))=cn(u). Pour k=0 : am(u,0)=u (angle = arc)."
          },
          {
            type: 'mcq',
            question: "Le théorème de Liouville pour les fonctions de Jacobi dit que sn a exactement __ pôles dans un domaine fondamental :",
            answers: ['2 (d\'ordre 1)', '1 (d\'ordre 2)', '4 (d\'ordre 1)', '0'],
            correct: 0,
            explanation: "sn est une fonction elliptique d'ordre 2 (comme ℘), donc elle a exactement 2 pôles (comptés avec multiplicité) dans le domaine fondamental. Les pôles de sn sont simples et situés en iK' et 2K+iK'. Comme ℘ est d'ordre 2 avec un pôle double, sn est d'ordre 2 avec deux pôles simples."
          },
          {
            type: 'mcq',
            question: "La formule d'addition cn(u+v) est :",
            answers: ['cn(u+v)=(cn u·cn v − sn u·sn v·dn u·dn v)/(1−k²sn²u·sn²v)', 'cn(u+v)=cnu·cnv−snu·snv', 'cn(u+v)=cnu+cnv', 'cn(u+v)=cnu·dnv−snv·dnu'],
            correct: 0,
            explanation: "La loi d'addition pour cn est cn(u+v)=(cnu·cnv−snu·snv·dnu·dnv)/(1−k²sn²u·sn²v). Pour k=0 : (cosuCosv−sinusinv)/(1−0)=cos(u+v) ✓. Le dénominateur 1−k²sn²u·sn²v est spécifiquement elliptique et vaut 1 dans le cas trigonométrique."
          },
          {
            type: 'input',
            visual: 'sn(2K,k)',
            question: "En utilisant sn(u+K)=cnu/dnu et cn(K)=0, calculez sn(2K,k).",
            correct: '0',
            explanation: "sn(2K)=sn(K+K)=cn(K)/dn(K)=0/k'=0. Alternativement, sn(2K)=sn(0+2K). On peut vérifier : sn est 4K-périodique, sn(2K+u)=−sn(u) (demi-période change le signe), donc sn(2K)=sn(2K+0)=−sn(0)=0. Cohérent avec sin(π)=0."
          },
          {
            type: 'mcq',
            question: "L'équation dn(u+v) = ?",
            answers: ['dn(u+v)=(dn u·dn v − k²·sn u·sn v·cn u·cn v)/(1−k²sn²u·sn²v)', 'dn(u+v)=dnu+dnv', 'dn(u+v)=dnu·dnv', 'dn(u+v)=dnu·cnv−k²snu·snv'],
            correct: 0,
            explanation: "La formule d'addition pour dn : dn(u+v)=(dnu·dnv−k²snusnvcnucnv)/(1−k²sn²usn²v). Pour k=0 : (1·1−0)/1=1=dn(u+v,0) ✓. La structure du dénominateur 1−k²sn²usn²v est universelle pour les trois fonctions de Jacobi."
          },
          {
            type: 'mcq',
            question: "La solution générale de l'équation du pendule θ''=−sin(θ) avec θ(0)=θ₀, θ'(0)=0 est :",
            answers: ['θ(t) = 2·arcsin(k·sn(√(g/l)·t, k)) avec k=sin(θ₀/2)', 'θ(t) = θ₀·cos(√(g/l)·t)', 'θ(t) = θ₀·sn(t,0)', 'θ(t) = θ₀·dn(t,sin(θ₀/2))'],
            correct: 0,
            explanation: "En posant x=sin(θ/2), l'équation θ''+sin θ=0 devient x''=−x(1−x²)·(g/l). La substitution x=k·sn(u,k) avec u=√(g/l)·t donne l'identité exacte. La solution θ(t)=2arcsin(k·sn(√(g/l)t,k)) est exacte pour toute amplitude θ₀=2arcsin(k)."
          },
          {
            type: 'mcq',
            question: "Pour les fonctions de Jacobi, la 'formule de Gauss' de duplication sn(2u) est :",
            answers: ['sn(2u) = 2sn(u)cn(u)dn(u)/(1−k²sn⁴(u))', 'sn(2u) = 2sn(u)cn(u)', 'sn(2u) = sn(u)²', 'sn(2u) = 2sn(u)/dn(u)'],
            correct: 0,
            explanation: "La formule de duplication découle de la formule d'addition en posant u=v : sn(2u)=(snu·cnu·dnu+snu·cnu·dnu)/(1−k²sn⁴u) = 2snucnudnu/(1−k²sn⁴u). Pour k=0 : 2sinucosu/(1−0)=sin(2u) ✓."
          }
        ],
        // Niveau 4
        [
          {
            type: 'mcq',
            question: "Les 12 fonctions de Jacobi forment un système complet. La fonction sc(u,k) est définie par :",
            answers: ['sc(u,k) = sn(u,k)/cn(u,k) (analogue de tan)', 'sc(u,k) = cn(u,k)/sn(u,k)', 'sc(u,k) = sn(u,k)·cn(u,k)', 'sc(u,k) = 1/sn(u,k)'],
            correct: 0,
            explanation: "sc = sn/cn est l'analogue elliptique de tan = sin/cos. Ses pôles sont aux zéros de cn, i.e. en u=K+2nK+2imK'. La notation des 12 fonctions suit le schéma pq = p/q pour p,q ∈ {s,c,d,n} avec sn=s/n, cn=c/n, dn=d/n, et les autres obtenus par inversion."
          },
          {
            type: 'mcq',
            question: "La transformation imaginaire sn(iu,k) = ?",
            answers: ['i·sn(u,k\')/cn(u,k\') où k\'=√(1−k²)', 'i·sn(u,k)', '−sn(u,k)', 'i·cn(u,k)'],
            correct: 0,
            explanation: "La transformation imaginaire (Jacobi) donne sn(iu,k)=i·sn(u,k')/cn(u,k'). Cela relie les fonctions de Jacobi de module k à celles de module complémentaire k'. Pour k=0 : sn(iu,0)=i·sn(u,1)/cn(u,1)=i·tanh(u)/sech(u)=i·sinh(u)=i·sin(iu)/i ✓ car sin(iu)=i·sinh(u)."
          },
          {
            type: 'mcq',
            question: "Les équations de l'ellipsoïde de révolution et le mouvement du corps rigide (toupie de Euler) font intervenir :",
            answers: ['Les fonctions de Jacobi sn, cn, dn (mouvement d\'Euler exprimé par des fonctions elliptiques)', 'Des exponentielles simples', 'Des polynômes', 'Des fonctions de Bessel'],
            correct: 0,
            explanation: "Les équations d'Euler du corps rigide libre : dΩ₁/dt=AΩ₂Ω₃, etc., ont des solutions exactes en termes de sn, cn, dn. Spécifiquement, les composantes de la vitesse angulaire s'expriment par sn, cn, dn. C'est l'une des premières applications physiques (XIXe siècle)."
          },
          {
            type: 'mcq',
            question: "L'intégrale elliptique E(u,k) = ∫₀^u dn²(t,k) dt satisfait :",
            answers: ['E(u+2K) = E(u) + 2E(k) où E(k)=∫₀^K dn² dt est l\'intégrale complète', 'E(u+2K) = E(u)', 'E(u) = dn(u)', 'E(u+K) = E(u)'],
            correct: 0,
            explanation: "E(u,k)=∫₀^u dn²(t)dt est l'intégrale elliptique de seconde espèce incomplète. Elle est quasi-périodique : E(u+2K)=E(u)+2E(k). Le terme 2E(k) mesure l'accroissement sur une période, analogue à la quasi-périodicité de la fonction zêta de Weierstrass."
          },
          {
            type: 'mcq',
            question: "La solution de l'équation de Korteweg-de Vries (KdV) u_t+6uu_x+u_xxx=0 en termes de fonctions de Jacobi est :",
            answers: ['u(x,t) = −2k²sn²(x−ct, k) + const (onde cnoïdale)', 'u(x,t) = sin(x−ct)', 'u(x,t) = exp(−(x−ct)²)', 'u(x,t) = tanh(x−ct)'],
            correct: 0,
            explanation: "Les 'ondes cnoïdales' u=A·cn²(B(x−ct),k)+D sont des solutions exactes périodiques de KdV. Pour k→1 : cn→sech, et la solution dégénère en soliton u=−2sech²(x−4t). Pour k→0 : cn→cos et la solution tend vers une onde sinusoïdale linéaire."
          },
          {
            type: 'mcq',
            question: "La récurrence de Landen permet de calculer sn(u,k) avec précision machine en :",
            answers: ['O(log(1/ε)) opérations AGM (convergence quadratique)', 'O(1/ε) opérations', 'O(ε) opérations', 'O(exp(1/ε)) opérations'],
            correct: 0,
            explanation: "L'algorithme AGM de Gauss-Landen pour sn : à chaque étape, on remplace (k,u) par (k₁,u/(1+k₁)) avec k₁=(1−k')/(1+k'), convergeant vers k=0. Après O(log(1/ε)) étapes (convergence quadratique), on se ramène au cas sn(v,0)=sin(v). C'est l'algorithme numérique standard."
          },
          {
            type: 'mcq',
            question: "Les fonctions theta de Jacobi θ₁,θ₂,θ₃,θ₄ sont définies par des séries de q. Laquelle vérifie θ₁(0,q)=0 ?",
            answers: ['θ₁ uniquement (par construction, c\'est la fonction theta impaire)', 'θ₂', 'θ₃', 'θ₄'],
            correct: 0,
            explanation: "θ₁(v,q)=2Σₙ≥₀(−1)ⁿq^((n+1/2)²)sin((2n+1)v) est impaire et θ₁(0)=0. Les trois autres θ₂,θ₃,θ₄ sont paires et non nulles en 0. C'est θ₁ qui sert à construire sn et dont les zéros engendrent le réseau Λ."
          },
          {
            type: 'mcq',
            question: "La formule sn²(u)+cn²(u)=1 et k²sn²(u)+dn²(u)=1 implique que le point (sn(u),cn(u),dn(u)) se déplace sur :",
            answers: ['L\'intersection des deux quadriques x²+y²=1 et k²x²+z²=1 dans ℝ³', 'Un cercle unité', 'Une sphère', 'Une droite'],
            correct: 0,
            explanation: "Le triplet (sn,cn,dn) satisfait deux équations simultanées : x²+y²=1 (cylindre) et k²x²+z²=1 (ellipsoïde). L'intersection est une courbe gauche dans ℝ³. C'est la vision géométrique tridimensionnelle des fonctions de Jacobi, complémentaire à la vision plane (courbe elliptique)."
          },
          {
            type: 'input',
            visual: 'sn(iK\',k)',
            question: "Sachant que sn a un pôle simple en u=iK', quelle est la valeur |sn(iK',k)| ?",
            correct: '∞',
            explanation: "sn(iK',k)=∞ car iK' est exactement un pôle de sn. Le résidu de sn en u=iK' vaut 1/k (résidu simple). On peut vérifier avec la transformation imaginaire : sn(iK',k)=i·sn(K',k')/cn(K',k')=i·1/cn(K',k')=i/0=∞ car cn(K')=0."
          },
          {
            type: 'mcq',
            question: "La solution de l'équation des géodésiques sur un ellipsoïde fait intervenir :",
            answers: ['Les fonctions de Jacobi (théorème de Jacobi 1839 sur les géodésiques d\'ellipsoïdes)', 'Des exponentielles', 'Des polynômes de Legendre', 'Des fonctions de Bessel'],
            correct: 0,
            explanation: "Jacobi (1839) a montré que les géodésiques sur un ellipsoïde triaxial a>b>c s'expriment par des quadratures elliptiques, soit en termes de fonctions de Jacobi. Cette résolution élégante était une démonstration magistrale de la puissance des fonctions elliptiques en géométrie différentielle."
          }
        ],
        // Niveau 5
        [
          {
            type: 'mcq',
            question: "La transformation de Gauss (montée du module) multiplie la période par (1+k) et donne :",
            answers: ['sn((1+k)u, k₁) = (1+k)sn(u,k)/(1+k·sn²(u,k)) avec k₁=2√k/(1+k)', 'sn(2u,k)=2sn(u)cn(u)', 'sn(u/2, k/2)', 'sn((1+k)u,k)=(1+k)sn(u)'],
            correct: 0,
            explanation: "La transformation de Landen montante de Gauss double la période en augmentant k vers k₁=2√k/(1+k). Elle est l'inverse de la descente. Les deux transformations forment la base de l'algorithme AGM bidirectionnel pour calculer K(k) et les fonctions elliptiques."
          },
          {
            type: 'mcq',
            question: "La connexion entre les fonctions theta et la chaleur : θ₃(v,q) satisfait :",
            answers: ['4π·∂θ₃/∂(log q) = ∂²θ₃/∂v² (équation de la chaleur dans le temps logarithmique)', '∂θ₃/∂q = θ₃·q', 'Δθ₃ = 0 (équation de Laplace)', '∂θ₃/∂v = θ₃'],
            correct: 0,
            explanation: "Avec τ=log(q)/(iπ), θ₃ satisfait l'équation de Jacobi-Fourier ∂θ₃/∂τ = (1/4πi)∂²θ₃/∂v², analogue de l'équation de la chaleur. C'est pourquoi les fonctions theta apparaissent naturellement dans les noyaux de la chaleur sur les tores. Voir : noyau de Poisson et K-théorie."
          },
          {
            type: 'mcq',
            question: "La transformée de Fourier discrète appliquée à la suite a(n)=qⁿ² (q=e^(πiτ)) donne :",
            answers: ['θ₃(v,τ) = Σ qⁿ² e^(2πinv), liée à sa transformée par θ₃(v,τ) = (−iτ)^(−1/2)·e^(πiv²/τ)·θ₃(v/τ,−1/τ)', 'Une suite constante', 'Une suite de Dirac', 'La transformée de Laplace'],
            correct: 0,
            explanation: "La formule de Poisson appliquée à f(x)=e^(−πtx²) donne la formule modulaire θ₃(0,τ)=(−iτ)^(−1/2)θ₃(0,−1/τ). C'est la transformation modulaire fondamentale de θ₃, qui encode la symétrie τ→−1/τ du groupe modulaire SL₂(ℤ)."
          },
          {
            type: 'mcq',
            question: "Dans la théorie de Ramanujan, la 'q-serie' pour sn(u,k) exprime que :",
            answers: ['Tous les coefficients de Fourier de sn font intervenir σ₁(n) (somme des diviseurs), via le nome q', 'sn est un polynôme en q', 'Les coefficients sont tous égaux à 1', 'sn n\'a pas de développement en q'],
            correct: 0,
            explanation: "Les coefficients de Fourier de sn(u) impliquent Σd|n d = σ₁(n). Cela relie les fonctions elliptiques à la théorie analytique des nombres. Ramanujan a exploité ces connexions pour des identités remarquables impliquant partitions et formes modulaires."
          },
          {
            type: 'mcq',
            question: "La supersymétrie quantique (mécanique quantique supersymétrique) fait intervenir les fonctions de Jacobi car :",
            answers: ['Le potentiel de Pöschl-Teller V=k²sn²(x) a des solutions exactes en termes de sn, cn, dn', 'Elles sont probabilistes', 'Elles sont des formes différentielles', 'Le groupe de Lie SL₂ utilise sn'],
            correct: 0,
            explanation: "L'équation de Schrödinger −ψ''+k²(k²sn²(x)−1)ψ=Eψ (potentiel de Lamé/Jacobi) a des solutions bande dont les fonctions propres sont des polynomiales de Lamé (combinant sn,cn,dn). C'est un problème exactement soluble crucial en physique de la matière condensée et théorie des solitons."
          },
          {
            type: 'mcq',
            question: "La formule de multiplication de sn par un entier n (formule de n-plication) est :",
            answers: ['sn(nu) est une fonction rationnelle en sn(u), cn(u), dn(u) (résultant de n applications de la formule d\'addition)', 'sn(nu)=n·sn(u)', 'sn(nu) = sn(u)ⁿ', 'sn(nu) = sn(u+n)'],
            correct: 0,
            explanation: "En appliquant la formule d'addition n fois, sn(nu) est une fraction rationnelle en sn(u),cn(u),dn(u). Par exemple sn(2u)=2snucnudnu/(1−k²sn⁴u). Ces formules sont l'analogue elliptique des formules de Tchebychev pour les multiples d'angles trigonométriques."
          },
          {
            type: 'mcq',
            question: "Les fonctions d'onde de Bloch sur un potentiel périodique k²sn²(x,k) ont une structure de bande car :",
            answers: ['L\'équation de Hill-Lamé y\'\'=(n(n+1)k²sn²−B)y admet des solutions de Floquet ψ=e^(ipx)·f(x) périodiques', 'La période est infinie', 'Les solutions sont toutes polynomiales', 'Le spectre est discret'],
            correct: 0,
            explanation: "L'équation de Lamé avec potentiel sn² est un opérateur de Hill périodique. Son spectre forme des bandes d'énergie séparées par des gaps. Pour n entier, il y a exactement n gaps finis et les fonctions d'onde sont des polynomiales de Lamé. C'est le modèle exactement résoluble du solide cristallin."
          },
          {
            type: 'mcq',
            question: "La relation entre les fonctions de Jacobi et le groupe de Lie SU(2) est :",
            answers: ['Les éléments de SU(2) peuvent être paramétrés par sn, cn, dn via la représentation d\'Euler elliptique', 'SU(2) n\'utilise que sin et cos', 'dn paramètre SU(2) seul', 'Il n\'y a aucune relation'],
            correct: 0,
            explanation: "La paramétrisation elliptique d'Euler de SU(2) généralise les angles d'Euler trigonométriques en remplaçant sin→sn, cos→cn,dn. Elle apparaît dans la solution de la toupie de Lagrange (corps rigide à un point fixe sous gravité) et dans la théorie des représentations des groupes quantiques à q-déformation."
          },
          {
            type: 'input',
            visual: 'sn(0,k)',
            question: "Vérifiez à partir de la définition que sn(0,k)=0 pour tout k. Réponse numérique.",
            correct: '0',
            explanation: "Par définition, sn est l'inverse de F(x,k)=∫₀^x dt/√((1−t²)(1−k²t²)). F(0,k)=∫₀^0(...)dt=0. Donc sn(0,k)=0 pour tout k∈(0,1). C'est l'analogue de sin(0)=0, qui se démontre de même par la définition arcsin(0)=0."
          },
          {
            type: 'mcq',
            question: "La constante de Catalan G = Σ(−1)ⁿ/(2n+1)² = K(1/√2)²/4π est reliée aux fonctions de Jacobi car :",
            answers: ['K(1/√2) = Γ(1/4)²/(4√π) et la demi-période des fonctions sn de module 1/√2 est la constante lemniscatique', 'G est une valeur de sn', 'G = sn(1,1/2)', 'G = K(0)'],
            correct: 0,
            explanation: "K(1/√2)=Γ(1/4)²/(4√π) est la constante lemniscatique ω₀/2. Elle est la demi-période des fonctions de Jacobi de module k=1/√2 (réseau carré). La constante de Catalan G=β(2)=Im(Li₂(i)) est reliée à K(1/√2) par G=K(1/√2)·K(1/√2)/2."
          }
        ],
        // =======================
        // ===== Niveau L1 =======
        // =======================
        [
          {
            type: 'mcq',
            question: "Le triplet (sn, cn, dn) paramètre la courbe y²=(1−x²)(1−k²x²) exactement comme (sin,cos) paramètre le cercle x²+y²=1. Cette analogie signifie que sn est :",
            answers: ['Une généralisation non-élémentaire du sinus, définie par inversion d\'une intégrale transcendante', 'Un polynôme de sin', 'Une fraction rationnelle', 'Une série de Fourier finie'],
            correct: 0,
            explanation: "L'analogie complète est : sin = inverse de ∫dt/√(1−t²) → sn = inverse de ∫dt/√((1−t²)(1−k²t²)). Le passage de la quadratique 1−t² à la quartique (1−t²)(1−k²t²) est précisément ce qui rend les fonctions elliptiques transcendantes non-élémentaires."
          },
          {
            type: 'mcq',
            question: "La double périodicité de sn(u,k) implique que sn est définie sur :",
            answers: ['Le tore ℂ/(4Kℤ + 2iK\'ℤ), un tore complexe de module τ=iK\'/(2K)', 'La droite réelle ℝ seulement', 'Le disque unité', 'ℂ entier (sans périodicité)'],
            correct: 0,
            explanation: "sn(u+4K)=sn(u) et sn(u+2iK')=sn(u), donc sn se factorise en une fonction bien définie sur ℂ/(4Kℤ+2iK'ℤ). Ce tore complexe est homéomorphe à un tore T²=S¹×S¹. Topologiquement, le domaine naturel de sn est ce tore, de même que sin est naturellement sur le cercle S¹=ℝ/2πℤ."
          },
          {
            type: 'mcq',
            question: "Dans la limite k→0 de sn(u,k), le tore complexe ℂ/(4Kℤ+2iK'ℤ) dégénère vers :",
            answers: ['ℂ/(2πℤ+i∞ℤ) = ℂ/2πℤ = cylindre, cohérent avec sin(u) défini sur ℝ/2πℤ', 'Un autre tore', 'Un disque', 'ℂ entier'],
            correct: 0,
            explanation: "Quand k→0 : K→π/2 et K'→∞. Le réseau des périodes (4K, 2iK')→(2π, ∞). La direction imaginaire disparaît et le tore dégénère en cylindre ℂ/(2πℤ), domaine naturel de sin et cos. C'est la limite trigonométrique de la théorie elliptique."
          },
          {
            type: 'mcq',
            question: "L'équation différentielle (sn')²=(1−sn²)(1−k²sn²) est de type :",
            answers: ['Bernoulli-Jacobi (équation séparable du premier ordre pour sn)', 'Équation de Riccati', 'Équation de Bessel', 'Équation de Laplace'],
            correct: 0,
            explanation: "(y')²=(1−y²)(1−k²y²) est séparable : du=dy/√((1−y²)(1−k²y²)). C'est exactement l'intégrale elliptique de première espèce. Elle se résout par la substitution y=sn(u,k), qui est la définition même de la fonction de Jacobi. L'EDO est d'ordre 1 (seule y' intervient)."
          },
          {
            type: 'mcq',
            question: "cn(u,k) = √(1−sn²(u,k)). Pourquoi prend-on la racine positive ?",
            answers: ['Par convention initiale cn(0)=+1 et continuité ; cn est positif sur [0,K] puis change de signe', 'Car cn est toujours positif', 'Par définition arbitraire', 'Parce que cn = cos est toujours positif'],
            correct: 0,
            explanation: "On définit cn(0)=+1 par analogie avec cos(0)=1. Puis cn est défini par continuité comme la branche de √(1−sn²) commençant en +1. Sur [0,K], sn va de 0 à 1, cn de 1 à 0 (positif). Sur [K,2K], cn devient négatif. C'est exactement l'analogue de cos qui est positif sur [0,π/2] et négatif sur [π/2,3π/2]."
          },
          {
            type: 'mcq',
            question: "La formule de réduction sn(u+2K)=−sn(u) montre que la 'demi-période' 2K est analogiquement équivalente à :",
            answers: ['π (la demi-période de sin, avec sin(u+π)=−sin(u))', '2π', 'π/2', 'K lui-même'],
            correct: 0,
            explanation: "sn(u+2K)=−sn(u) est l'exact analogue de sin(u+π)=−sin(u). La période fondamentale de sin est 2π (comme 4K pour sn), et la demi-période π donne le changement de signe. Le rôle de π est joué par 2K dans la théorie elliptique."
          },
          {
            type: 'mcq',
            question: "Les fonctions de Jacobi sn et cn satisfont l'identité sn²+cn²=1. Cette identité définit géométriquement :",
            answers: ['Un cercle unitaire dans le plan (sn,cn) — mais parcouru à vitesse non constante (vitesse cn·dn)', 'Une droite', 'Une ellipse de module k', 'Une parabole'],
            correct: 0,
            explanation: "sn²+cn²=1 signifie que le point (sn(u),cn(u)) est toujours sur le cercle unitaire. Mais la vitesse est d/du(sn,cn)=(cn·dn, −sn·dn) = dn·(cn,−sn). Donc la vitesse angulaire est dn(u) ≠ 1 (sauf pour k=0). La courbe est le cercle mais parcourue à vitesse variable."
          },
          {
            type: 'mcq',
            question: "La série de Taylor de sn(u,k) à l'origine commence par :",
            answers: ['sn(u,k) = u − (1+k²)u³/6 + (1+14k²+k⁴)u⁵/120 + …', 'sn(u,k) = u − u³/6 + u⁵/120 + … (= sin(u) quelque soit k)', 'sn(u,k) = 1 − u²/2 + …', 'sn(u,k) = u − k²u³/6 + …'],
            correct: 0,
            explanation: "Le développement de sn(u,k) autour de u=0 : sn = u − (1+k²)u³/3! + (1+14k²+k⁴)u⁵/5! − … Pour k=0 : sn = u − u³/6 + u⁵/120 − … = sin(u) ✓. Pour k=1 : sn = u − 2u³/6 + 16u⁵/120 − … = tanh(u) (vérifiable)."
          },
          {
            type: 'mcq',
            question: "Le rôle de la lettre 'n' dans la notation sn, cn, dn est :",
            answers: ['n désigne la valeur ∞ (point à l\'infini) : sn = sin/∞ (code de la fonction par ses zéros et pôles)', 'n pour normal', 'n pour nombre', 'n pour Newton'],
            correct: 0,
            explanation: "La notation de Glaisher : chaque fonction de Jacobi pq est définie par ses zéros en p et ses pôles en q, où s=0, c=K, d=K+iK', n=iK' (les points de 2-torsion et pôles). sn=sin amplitude : zéros en 0 (=s) et pôles en iK' (=n). La lettre n code le pôle à iK'."
          },
          {
            type: 'input',
            visual: 'dn(0,k)',
            question: "Calculez dn(0,k) à partir de dn²(u)+k²sn²(u)=1 et sn(0)=0.",
            correct: '1',
            explanation: "En u=0 : dn(0,k)²+k²sn(0,k)²=1 → dn(0,k)²+k²·0²=1 → dn(0,k)²=1 → dn(0,k)=1 (positive par convention). C'est l'analogue de la valeur initiale dn(0)=1 (comme 'dérivée de l'angle' initialement égale à 1)."
          }
        ]
      ]
    },

    // ============================================================
    // NOTION 7 : Structure algébrique des courbes elliptiques
    // ============================================================
    {
      id: 'structure-algebrique',
      label: 'Structure algébrique',
      lesson: {
        formula: 'E: y² = x³ + ax + b (forme de Weierstrass courte), Δ = −16(4a³+27b²) ≠ 0',
        text: "Une courbe elliptique est une cubique projective lisse de genre 1 munie d'un point base. Elle est définie par y²=x³+ax+b (forme de Weierstrass courte) sur un corps k. Le discriminant Δ≠0 garantit la lissité. Toute courbe elliptique est isomorphe à une courbe de ce type.",
        example: "E: y²=x³−x est une courbe elliptique (Δ=64≠0). Ses points rationnels : (0,0), (1,0), (−1,0), (2,±√6 non rationnels). Le groupe E(ℚ) est isomorphe à ℤ/2ℤ × ℤ/2ℤ (groupe fini ici)."
      },
      fullBlocks: [
        {
          type: 'definition',
          title: 'Courbe elliptique : définition algébrique',
          text: "Une courbe elliptique sur un corps k est une courbe projective lisse de genre 1 définie sur k, munie d'un point rationnel O (point base, souvent le point à l'infini). Toute courbe elliptique sur k est isomorphe (sur k) à une courbe de Weierstrass y²+a₁xy+a₃y = x³+a₂x²+a₄x+a₆."
        },
        {
          type: 'formula',
          title: 'Forme de Weierstrass courte',
          formula: 'y² = x³ + ax + b, avec Δ = −16(4a³+27b²) ≠ 0',
          text: "En caractéristique ≠ 2,3, tout modèle de Weierstrass se simplifie en y²=x³+ax+b. Le discriminant Δ=−16(4a³+27b²) est non nul si et seulement si la cubique droite x³+ax+b n'a pas de racine double, i.e. la courbe est lisse (non singulière)."
        },
        {
          type: 'demo',
          title: 'Genre d\'une courbe elliptique',
          text: "Par la formule de Riemann-Hurwitz, la projection (x,y)→x est un revêtement double de ℙ¹ ramifié en 3 points (racines de x³+ax+b) et au point à l'infini (total: 4 points de ramification). Genre g = 1−2+4/2 = 1. Donc une courbe elliptique est de genre 1 et homéomorphe à un tore T² = S¹×S¹."
        },
        {
          type: 'graph',
          title: 'Formes de courbes elliptiques réelles',
          svgContent: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="200" fill="#f8f9fa"/><line x1="20" y1="100" x2="150" y2="100" stroke="#333" stroke-width="1"/><line x1="85" y1="20" x2="85" y2="180" stroke="#333" stroke-width="1"/><path d="M50,100 Q60,60 85,40 Q110,60 115,100 Q110,140 85,160 Q60,140 50,100" stroke="#3b82f6" stroke-width="2" fill="none"/><path d="M130,90 C140,95 145,100 145,100 C145,100 140,105 130,110" stroke="#3b82f6" stroke-width="2" fill="none"/><text x="30" y="190" font-size="9" fill="#3b82f6">y²=x³−x (2 composantes)</text><line x1="175" y1="100" x2="305" y2="100" stroke="#333" stroke-width="1"/><line x1="240" y1="20" x2="240" y2="180" stroke="#333" stroke-width="1"/><path d="M200,100 Q215,40 240,30 Q265,40 275,80 Q280,100 275,120 Q265,160 240,170 Q215,160 200,100" stroke="#ef4444" stroke-width="2" fill="none"/><text x="185" y="190" font-size="9" fill="#ef4444">y²=x³+x+1 (1 composante)</text></svg>',
          caption: 'Cas 1: y²=x³−x a deux composantes réelles (une bornée, une non bornée). Cas 2: y²=x³+x+1 a une seule composante.',
          text: "Sur ℝ, une courbe elliptique peut avoir 1 ou 2 composantes connexes selon le signe du discriminant. Sur ℂ, elle a toujours la topologie d'un tore."
        },
        {
          type: 'example',
          title: 'j-invariant et classification',
          text: "Le j-invariant j(E) = 1728·4a³/(4a³+27b²) (pour y²=x³+ax+b) classifie les courbes elliptiques à isomorphisme près sur ℂ̄. Deux courbes E, E' sur ℂ sont isomorphes ⟺ j(E)=j(E'). Exemples : y²=x³−x → a=−1,b=0 → j=1728. y²=x³−1 → a=0,b=−1 → j=0."
        },
        {
          type: 'warning',
          title: 'Courbe elliptique ≠ ellipse',
          text: "ATTENTION : une courbe elliptique n'est PAS une ellipse ! Une ellipse est une conique (genre 0). Une courbe elliptique est une cubique (genre 1). La confusion vient du fait que les courbes elliptiques sont liées aux fonctions elliptiques, elles-mêmes nommées d'après les intégrales de longueur d'arc d'ellipses."
        }
      ],
      levels: [
        // Niveau 1
        [
          {
            type: 'mcq',
            question: "Une courbe elliptique est définie comme :",
            answers: ['Une cubique projective lisse de genre 1 munie d\'un point base', 'Une ellipse', 'Une parabole', 'Un cercle de rayon 1'],
            correct: 0,
            explanation: "Une courbe elliptique est une cubique (équation de degré 3) projective lisse (sans singularité) de genre topologique 1. La condition de lissité est équivalente à Δ≠0. Elle n'a aucun rapport avec les ellipses (coniques, genre 0)."
          },
          {
            type: 'mcq',
            question: "La forme de Weierstrass courte d'une courbe elliptique est :",
            answers: ['y² = x³ + ax + b', 'y = x² + ax + b', 'y² = x² + ax + b', 'y³ = x³ + ax + b'],
            correct: 0,
            explanation: "y²=x³+ax+b est la forme standard dite de Weierstrass courte (en caractéristique ≠2,3). C'est une cubique en x, quadratique en y. Toute courbe elliptique en caractéristique ≠2,3 peut être mise sous cette forme par un changement de variables affine."
          },
          {
            type: 'mcq',
            question: "Le discriminant d'une courbe elliptique y²=x³+ax+b est :",
            answers: ['Δ = −16(4a³+27b²)', 'Δ = a²−4b', 'Δ = 4a³+27b²', 'Δ = b²−4a'],
            correct: 0,
            explanation: "Δ = −16(4a³+27b²). La condition Δ≠0 ⟺ 4a³+27b²≠0 ⟺ le polynôme cubique x³+ax+b n'a pas de racine double ⟺ la courbe est lisse. Le facteur −16 est une convention normalisatrice."
          },
          {
            type: 'mcq',
            question: "Une courbe y²=x³+ax+b est singulière (non elliptique) si et seulement si :",
            answers: ['4a³+27b²=0 (le discriminant Δ=0)', '4a³+27b²≠0', 'a=0', 'b=0'],
            correct: 0,
            explanation: "Δ=0 ⟺ la cubique x³+ax+b a une racine double ⟺ la courbe présente un point singulier (nœud ou cusp). Dans ce cas ce n'est plus une courbe elliptique. Exemple : y²=x³ a un cusp en (0,0), Δ=0."
          },
          {
            type: 'mcq',
            question: "Le genre d'une courbe elliptique est :",
            answers: ['1 (topologiquement un tore)', '0 (sphère)', '2 (surface de genre 2)', '∞'],
            correct: 0,
            explanation: "Une courbe elliptique est de genre 1 : sur ℂ, c'est homéomorphe à un tore T²=S¹×S¹. Les courbes de genre 0 sont les coniques (cercle, ellipse, parabole, hyperbole). Les courbes de genre g≥2 sont les courbes hyperelliptiques."
          },
          {
            type: 'mcq',
            question: "y²=x³−x est-elle une courbe elliptique ? (a=−1, b=0)",
            answers: ['Oui : Δ=−16(4(−1)³+27·0)=−16·(−4)=64≠0', 'Non : b=0 empêche la lissité', 'Non : la courbe est singulière en (0,0)', 'Impossible à déterminer sans plus d\'info'],
            correct: 0,
            explanation: "Δ=−16(4(−1)³+27·0²)=−16·(−4)=64≠0. La courbe est donc lisse (non singulière) et c'est bien une courbe elliptique. On peut vérifier : x³−x=x(x−1)(x+1), trois racines distinctes 0, 1, −1 ✓."
          },
          {
            type: 'mcq',
            question: "y²=x³ est-elle une courbe elliptique ?",
            answers: ['Non : la courbe a un cusp en (0,0), Δ=0 (a=b=0)', 'Oui : c\'est une cubique', 'Oui car elle est de genre 1', 'Non car y² est au membre gauche'],
            correct: 0,
            explanation: "Pour y²=x³ : a=0, b=0. Δ=−16(0+0)=0. La courbe est singulière (cusp) en (0,0) : les dérivées ∂F/∂x=−3x²=0 et ∂F/∂y=2y=0 s'annulent simultanément en (0,0). Ce n'est pas une courbe elliptique (genre 0 en fait)."
          },
          {
            type: 'input',
            visual: 'j(E)',
            question: "Pour y²=x³−x (a=−1, b=0), calculez j = 1728·4a³/(4a³+27b²).",
            correct: '1728',
            explanation: "j = 1728·4(−1)³/(4(−1)³+27·0) = 1728·(−4)/(−4) = 1728·1 = 1728. Ce j-invariant correspond au réseau carré (τ=i dans le demi-plan supérieur). C'est pourquoi le facteur 1728 est choisi précisément : j(i)=1728."
          },
          {
            type: 'mcq',
            question: "Deux courbes elliptiques sur ℂ sont isomorphes si et seulement si :",
            answers: ['Elles ont le même j-invariant', 'Elles ont les mêmes coefficients a et b', 'Elles ont le même discriminant', 'Elles ont le même nombre de points rationnels'],
            correct: 0,
            explanation: "Sur ℂ (corps algébriquement clos), l'isomorphisme de courbes elliptiques est complètement caractérisé par le j-invariant. j(E)=j(E') ⟺ E≅E' (sur ℂ̄). Sur ℚ, deux courbes peuvent avoir le même j mais ne pas être isomorphes (twists)."
          },
          {
            type: 'mcq',
            question: "Quelle est la valeur de j pour la courbe y²=x³+1 (a=0, b=1) ?",
            answers: ['j = 0 (car a=0 → numérateur 4a³=0)', 'j = 1728', 'j = 1', 'j = ∞'],
            correct: 0,
            explanation: "j = 1728·4a³/(4a³+27b²) = 1728·0/(0+27) = 0. Le j-invariant 0 correspond au réseau hexagonal (τ=e^(2πi/3)). La courbe y²=x³+1 a une symétrie de rotation d'ordre 3 (multiplication par les racines cubiques de l'unité), caractéristique du réseau hexagonal."
          }
        ],
        // Niveau 2
        [
          {
            type: 'mcq',
            question: "Un isomorphisme de courbes elliptiques (Weierstrass) est un changement de variable de la forme :",
            answers: ['(x,y) → (u²x+r, u³y+su²x+t) pour u≠0, r,s,t ∈ k', '(x,y) → (x+1, y+1)', '(x,y) → (λx, λy)', '(x,y) → (x/y, 1/y)'],
            correct: 0,
            explanation: "Les isomorphismes entre modèles de Weierstrass sont exactement les substitutions (x,y)→(u²x+r, u³y+su²x+t). Pour les formes courtes y²=x³+ax+b, les isomorphismes se réduisent à (x,y)→(u²x, u³y), transformant (a,b)→(u⁴a, u⁶b)."
          },
          {
            type: 'mcq',
            question: "La transformation (a,b) → (u⁴a, u⁶b) par l'isomorphisme (x,y)→(u²x,u³y) montre que j est :",
            answers: ['Invariant sous cette transformation : j(u⁴a, u⁶b) = j(a,b)', 'Multiplié par u', 'Divisé par u⁴', 'Multiplié par u⁶'],
            correct: 0,
            explanation: "j=1728·4a³/(4a³+27b²). Sous a→u⁴a, b→u⁶b : numérateur = 4(u⁴a)³ = u¹²·4a³, dénominateur = 4(u⁴a)³+27(u⁶b)² = u¹²(4a³+27b²). Donc j(u⁴a,u⁶b) = 1728·u¹²·4a³/(u¹²(4a³+27b²)) = j(a,b). Le j-invariant est bien invariant."
          },
          {
            type: 'mcq',
            question: "Le j-invariant est une fonction continue de τ sur le demi-plan de Poincaré ℍ={τ : Im(τ)>0}. Sa valeur en τ=i∞ est :",
            answers: ['j(i∞) = ∞ (le pointe de l\'espace de modules est à l\'infini)', 'j(i∞) = 0', 'j(i∞) = 1728', 'j(i∞) = 1'],
            correct: 0,
            explanation: "j(τ) = 1/q + 744 + 196884q + … avec q=e^(2πiτ). Quand Im(τ)→∞ : q→0 et j→∞ (pôle en q=0). La compactification de l'espace de modules des tores ajoute ce point à l'infini. L'espace de modules des courbes elliptiques sur ℂ est ℙ¹(ℂ) ≅ sphère de Riemann."
          },
          {
            type: 'mcq',
            question: "L'invariant j=1728 correspond à la courbe elliptique ayant :",
            answers: ['Une automorphisme d\'ordre 4 (multiplication par i), réseau carré Λ=ℤ+iℤ', 'Un automorphisme d\'ordre 6', 'Aucun automorphisme non-trivial', 'Un automorphisme d\'ordre 3'],
            correct: 0,
            explanation: "j=1728 ↔ τ=i ↔ réseau carré ℤ+iℤ. La multiplication par i est un automorphisme de ce réseau : iΛ=Λ. Cela donne un automorphisme d'ordre 4 de la courbe. Génériquement (j≠0,1728), la seule courbe elliptique a Aut={±1} d'ordre 2."
          },
          {
            type: 'mcq',
            question: "Une courbe elliptique y²=x³+ax+b sur ℚ peut avoir un nombre fini ou infini de points rationnels E(ℚ). Le théorème de Mordell-Weil dit que :",
            answers: ['E(ℚ) est un groupe abélien de type fini : E(ℚ) ≅ ℤʳ ⊕ T où T est fini (torsion) et r le rang', 'E(ℚ) est toujours fini', 'E(ℚ) est toujours infini', 'E(ℚ) n\'est pas un groupe'],
            correct: 0,
            explanation: "Le théorème de Mordell-Weil (1922) : E(ℚ) est un groupe abélien de type fini. Il se décompose en E(ℚ) ≅ ℤʳ ⊕ T où r≥0 est le rang (entier de Mordell-Weil) et T est le sous-groupe de torsion (fini). Le rang r peut être arbitrairement grand (conjecturalement)."
          },
          {
            type: 'mcq',
            question: "Le sous-groupe de torsion T de E(ℚ) est borné par le théorème de :",
            answers: ['Mazur (1977) : T est l\'un des 15 groupes possibles, en particulier |T| ≤ 16', 'Fermat : |T| ≤ 7', 'Faltings : T est infini', 'Wiles : T = ℤ/2ℤ toujours'],
            correct: 0,
            explanation: "Le théorème de Mazur (1977) classifie complètement la torsion des courbes elliptiques sur ℚ : T est isomorphe à l'un des 15 groupes suivants: ℤ/nℤ pour n=1,2,…,10,12 ou ℤ/2ℤ×ℤ/2nℤ pour n=1,2,3,4. En particulier |T| ≤ 16."
          },
          {
            type: 'mcq',
            question: "La courbe elliptique y²=x³−x a exactement __ points de 2-torsion (points P tels que 2P=O) dans E(ℚ) :",
            answers: ['3 (les points (0,0), (1,0), (−1,0)) plus O, total 4 points de 2-torsion', '2', '1', '0'],
            correct: 0,
            explanation: "Les points de 2-torsion (distincts de O) sont les points (x,0), i.e. y=0. Ils correspondent aux racines de x³−x=x(x−1)(x+1)=0 : x=0, x=1, x=−1. Ce sont les 3 racines réelles. Avec O, le sous-groupe E[2]={O,(0,0),(1,0),(−1,0)} ≅ ℤ/2ℤ×ℤ/2ℤ est d'ordre 4."
          },
          {
            type: 'mcq',
            question: "L'application de réduction modulo p transforme E(ℚ) en :",
            answers: ['E(𝔽ₚ), la courbe elliptique mod p (bonne réduction si p∤Δ)', 'Un groupe infini', 'Un corps', 'Un corps résiduel'],
            correct: 0,
            explanation: "Si p ∤ Δ (bonne réduction), la courbe y²≡x³+ax+b (mod p) est encore une courbe elliptique sur 𝔽ₚ. Si p | Δ (mauvaise réduction), on obtient une cubique singulière. L'étude des #E(𝔽ₚ) pour différents premiers p est au cœur de la conjecture de Birch et Swinnerton-Dyer."
          },
          {
            type: 'mcq',
            question: "Le nombre de points #E(𝔽ₚ) satisfait la borne de Hasse :",
            answers: ['|#E(𝔽ₚ) − (p+1)| ≤ 2√p (théorème de Hasse, 1934)', '#E(𝔽ₚ) = p+1 toujours', '#E(𝔽ₚ) ≤ p', '#E(𝔽ₚ) = p²'],
            correct: 0,
            explanation: "Le théorème de Hasse (1934) : |#E(𝔽ₚ)−(p+1)| ≤ 2√p. La valeur p+1 est la valeur 'naturelle' (courbe sur ℙ¹(𝔽ₚ) avec p+1 points plus O). L'erreur 2√p est analogues à l'hypothèse de Riemann pour les courbes (Weil l'a prouvé plus généralement)."
          },
          {
            type: 'input',
            visual: '#E(𝔽₅)',
            question: "Pour y²=x³−x sur 𝔽₅, comptez les points affines (x,y) avec x,y∈{0,1,2,3,4} satisfaisant y²≡x³−x (mod 5), puis ajoutez O.",
            correct: '5',
            explanation: "Calcul : x=0: x³−x=0, y²≡0, y=0 → 1 point (0,0). x=1: 1−1=0, y=0 → 1 point. x=2: 8−2=6≡1, y²=1, y=±1≡1,4 → 2 points. x=3: 27−3=24≡4, y²=4, y=2,3 → 2 points. x=4: 64−4=60≡0, y=0 → 1 point. Total affine: 1+1+2+2+1=7. Avec O : 8 points. Vérification Hasse : |8−6|=2≤2√5≈4.47 ✓."
          }
        ],
        // Niveau 3
        [
          {
            type: 'mcq',
            question: "Le modèle de Néron d'une courbe elliptique sur ℚ est :",
            answers: ['Un schéma en groupes lisse sur ℤ dont la fibre générique est E, minimisant la mauvaise réduction', 'Un autre nom pour la forme de Weierstrass', 'Un réseau complexe', 'Le modèle à coordonnées entières de E'],
            correct: 0,
            explanation: "Le modèle de Néron (1964) est l'extension canonique de E de Spec(ℚ) vers Spec(ℤ), unique comme schéma en groupes lisse vérifiant la propriété universelle de Néron. Ses fibres spéciales aux premiers p|Δ peuvent être singulières, mais le modèle lui-même est lisse."
          },
          {
            type: 'mcq',
            question: "La conjecture de Birch et Swinnerton-Dyer (BSD) relie le rang r de E(ℚ) à :",
            answers: ['L\'ordre d\'annulation de L(E,s) en s=1 : ords=1 L(E,s) = r', 'La valeur L(E,1)', 'Le discriminant Δ', 'Le j-invariant'],
            correct: 0,
            explanation: "La conjecture BSD (1960s) : ords=1 L(E,s) = rang(E(ℚ)) = r. Autrement dit, E(ℚ) est infini (r≥1) si et seulement si L(E,1)=0. C'est l'un des 7 problèmes du Millénaire (prix Clay de 1 million $). La partie 'si' est partiellement connue (Kolyvagin, Gross-Zagier) pour r=0,1."
          },
          {
            type: 'mcq',
            question: "La fonction L d'une courbe elliptique est définie par le produit eulérien :",
            answers: ['L(E,s) = ∏_p∤Δ (1−aₚp^(−s)+p^(1−2s))^(−1) × (facteurs de mauvaise réduction)', 'L(E,s) = Σ aₙ/nˢ seulement', 'L(E,s) = ζ(s)', 'L(E,s) = Σ #E(𝔽ₙ)/nˢ'],
            correct: 0,
            explanation: "Pour les premiers p de bonne réduction (p∤Δ), le facteur local est (1−aₚp^{−s}+p^{1−2s})⁻¹ avec aₚ=p+1−#E(𝔽ₚ). Ces facteurs s'assemblent en L(E,s)=Σaₙn^{−s} grâce au théorème de Wiles (modularité). La série converge pour Re(s)>3/2."
          },
          {
            type: 'mcq',
            question: "Le théorème de modularité (Wiles-Taylor, 1995) affirme que pour toute courbe elliptique E/ℚ :",
            answers: ['E est modulaire : L(E,s) = L(f,s) pour une forme modulaire de poids 2 f∈S₂(Γ₀(N))', 'E est toujours définie sur ℤ', 'E/ℚ a toujours rang 0', 'j(E) est toujours rationnel'],
            correct: 0,
            explanation: "Le théorème de modularité (anciennement conjecture de Taniyama-Shimura-Weil) : toute courbe elliptique sur ℚ est associée à une forme modulaire de poids 2. C'est le cœur de la preuve du grand théorème de Fermat par Wiles : si xⁿ+yⁿ=zⁿ avait une solution, la courbe de Frey serait non-modulaire, contredisant ce théorème."
          },
          {
            type: 'mcq',
            question: "Le grand théorème de Fermat (Wiles, 1995) a été prouvé en utilisant les courbes elliptiques via :",
            answers: ['La courbe de Frey y²=x(x−aⁿ)(x+bⁿ) associée à aⁿ+bⁿ=cⁿ serait non-modulaire par Ribet, contredisant le théorème de Wiles', 'Une application directe de la théorie de Weierstrass', 'L\'uniformisation par les fonctions de Jacobi', 'La conjecture BSD'],
            correct: 0,
            explanation: "Si aⁿ+bⁿ=cⁿ (n≥3, abc≠0), Frey (1986) construit E_Frey: y²=x(x−aⁿ)(x+bⁿ). Ribet (1990) prouve que E_Frey serait non-modulaire. Or Wiles (1995) prouve que toute courbe elliptique sur ℚ est modulaire. Contradiction → Fermat est prouvé."
          },
          {
            type: 'mcq',
            question: "La hauteur de Néron-Tate h: E(ℚ) → ℝ est une forme quadratique définie positive sur E(ℚ)/E(ℚ)_tors. Elle est :",
            answers: ['Définie par ĥ(P) = lim_{n→∞} h(nP)/n² où h est la hauteur de Weil naïve', 'Définie par h(P) = log|x(P)|', 'Infinie pour tout P', 'Nulle seulement pour P=O'],
            correct: 0,
            explanation: "La hauteur canonique ĥ(P)=lim h(2ⁿP)/4ⁿ (Tate) est la correction de la hauteur naïve h(P)=log max(|p|,|q|) pour P=(p/q²,r/q³). Elle vérifie ĥ(nP)=n²ĥ(P) et ĥ(P)=0 ⟺ P est de torsion. Le régulateur det(ĥ(Pᵢ,Pⱼ)) apparaît dans la formule BSD."
          },
          {
            type: 'mcq',
            question: "La loi d'addition P+Q sur une courbe elliptique est définie géométriquement. Pour P≠Q, P+Q est :",
            answers: ['Le troisième point d\'intersection de la droite PQ avec E, puis réfléchi par rapport à l\'axe x', 'Le milieu du segment PQ', 'La somme des coordonnées', 'Le point diagonalement opposé'],
            correct: 0,
            explanation: "La droite passant par P et Q coupe la cubique E en un troisième point R (compté avec multiplicité). Alors P+Q est le réfléchi de R par rapport à l'axe des x, i.e. si R=(x,y) alors P+Q=(x,−y). Cette construction géométrique donne au groupe E un sens très visuel."
          },
          {
            type: 'mcq',
            question: "Le doublement 2P d'un point P=(x₀,y₀) sur E: y²=x³+ax+b est :",
            answers: ['2P = ((x₀⁴−8ax₀²−8bx₀−a²)/(4y₀²) , −(...)/8y₀³) via la pente de la tangente λ=(3x₀²+a)/(2y₀)', '2P = (2x₀, 2y₀)', '2P = (x₀², y₀²)', '2P = O (toujours)'],
            correct: 0,
            explanation: "La tangente en P=(x₀,y₀) a pente λ=(3x₀²+a)/(2y₀). Elle coupe E en P et en un autre point R. 2P=−R. Explicitement : x(2P)=λ²−2x₀ et y(2P)=λ(x₀−x(2P))−y₀. Ces formules sont la base de la multiplication scalaire efficace en cryptographie."
          },
          {
            type: 'input',
            visual: 'P+P=O?',
            question: "Pour P=(0,0) sur y²=x³−x, calculez 2P. La tangente en (0,0) a pente λ=(3·0+(-1))/(2·0) = division par 0. Que vaut 2P ?",
            correct: 'O',
            explanation: "En P=(0,0) : y₀=0. La tangente est verticale (y₀=0 et P n'est pas un point d'inflexion). Une tangente verticale ne coupe pas E en un troisième point affine : elle va à l'infini. Donc 2P=O. Cela confirme que (0,0) est un point de 2-torsion (ordre 2 dans E(ℚ))."
          },
          {
            type: 'mcq',
            question: "La complexité de la multiplication scalaire nP en cryptographie sur courbes elliptiques est :",
            answers: ['O(log n) opérations de groupe (via l\'algorithme double-and-add)', 'O(n) opérations', 'O(n²)', 'O(n log n)'],
            correct: 0,
            explanation: "L'algorithme 'double-and-add' calcule nP en O(log n) opérations (doublements et additions). Pour n≈2²⁵⁶ (clé de 256 bits), log₂n=256 opérations suffisent. C'est l'analogue de l'exponentiation rapide pour les groupes multiplicatifs, mais sur une courbe elliptique."
          }
        ],
        // Niveau 4 (les 4 premiers sont complétés, on génère les 10)
        [
          {
            type: 'mcq',
            question: "La variété de Jacobi J(C) d'une courbe algébrique lisse C de genre g est :",
            answers: ['La variété abélienne de dimension g classifiant les diviseurs de degré 0 de C à équivalence linéaire près (Jac(C)=Pic⁰(C))', 'La courbe C elle-même', 'Un espace vectoriel de dimension g²', 'La courbe duale de C'],
            correct: 0,
            explanation: "Jac(C) = Pic⁰(C) = groupe des classes de diviseurs de degré 0. Pour g=1 (courbe elliptique E), Jac(E) ≅ E : la courbe elliptique est sa propre jacobienne. Pour g=2, Jac(C) est une variété abélienne de dimension 2 (surface abelienne) contenant C comme diviseur thêta."
          },
          {
            type: 'mcq',
            question: "Le théorème d'Abel-Jacobi pour une courbe elliptique E ≅ ℂ/Λ affirme que :",
            answers: ['E(ℂ) ≅ ℂ/Λ comme groupes complexes, et le morphisme d\'Abel-Jacobi z ↦ [z−O] est l\'isomorphisme canonique', 'E n\'est pas isomorphe à un tore', 'L\'isomorphisme est défini sur ℚ', 'Jac(E) ≅ ℂ²/Λ²'],
            correct: 0,
            explanation: "Le morphisme d'Abel-Jacobi φ: E→Jac(E)=E, P↦[P−O] est un isomorphisme de groupes analytiques. En termes concrets, le paramètre z de ℂ/Λ qui correspond à P=(x,y) est z=∫_O^P ω avec ω=dx/(2y) la forme différentielle holomorphe canonique."
          },
          {
            type: 'mcq',
            question: "La courbe modulaire X₀(N) paramètre :",
            answers: ['Les paires (E, C) où E est une courbe elliptique et C⊂E[N] un sous-groupe cyclique d\'ordre N', 'Les courbes elliptiques à j=N', 'Les formes quadratiques de discriminant N', 'Les corps de nombres de degré N'],
            correct: 0,
            explanation: "X₀(N) = Γ₀(N)\\ℍ* est la courbe modulaire de niveau N. Elle paramètre les classes d'isomorphismes de paires (E,C) où E est une courbe elliptique et C est un sous-groupe cyclique d'ordre N de E. Pour N=1 : X₀(1)=ℙ¹, la droite de module paramétrisée par j."
          },
          {
            type: 'mcq',
            question: "Le revêtement modulaire X₁(N) paramètre quant à lui :",
            answers: ['Les paires (E, P) où P∈E est un point d\'ordre N (structure de niveau de type Γ₁(N))', 'Les isogenies de degré N', 'Les extensions de corps de degré N', 'Les invariants j de niveau N'],
            correct: 0,
            explanation: "X₁(N) = Γ₁(N)\\ℍ* paramètre les classes d'isomorphismes de paires (E,P) où P est un point rationnel d'ordre exactement N. X₁(N) est un revêtement de X₀(N) de degré φ(N)/2. Ces courbes modulaires sont centrales dans la théorie des formes modulaires et la preuve du théorème de modularité."
          },
          {
            type: 'mcq',
            question: "La fonction L d'une courbe elliptique E/ℚ est en réalité :",
            answers: ['La fonction L de la représentation de Galois ℓ-adique de E sur le module de Tate T_ℓ(E) = lim← E[ℓⁿ]', 'La transformée de Mellin de sa forme modulaire associée', 'Les deux à la fois (c\'est le théorème de modularité)', 'La fonction zêta de Hasse-Weil uniquement'],
            correct: 0,
            explanation: "L(E,s) peut être définie via : (1) le module de Tate T_ℓ(E)=ℤ_ℓ²-module avec action de Gal(ℚ̄/ℚ) ; (2) la forme modulaire f_E via Wiles. Les deux définitions coïncident (c'est le contenu du théorème de modularité). La définition (1) est plus algébrique, (2) plus analytique."
          },
          {
            type: 'mcq',
            question: "L'image de la représentation de Galois ρ_{ℓ}: Gal(ℚ̄/ℚ) → GL₂(ℤ_ℓ) associée à une courbe elliptique E est :",
            answers: ['Un sous-groupe ouvert de GL₂(ℤ_ℓ) (égal à GL₂(ℤ_ℓ) pour presque tout ℓ, théorème de Serre)', 'Toujours tout GL₂(ℤ_ℓ)', 'Trivial', 'Un groupe fini'],
            correct: 0,
            explanation: "Serre (1972) prouve que pour E sans multiplication complexe (CM) sur ℚ, ρ_ℓ est surjectif pour presque tout premier ℓ. Pour les finiment nombreux ℓ exceptionnels (premiers de décomposition ou de CM), l'image est un sous-groupe propre. Pour les courbes CM, l'image est toujours dans un sous-groupe Cartan."
          },
          {
            type: 'mcq',
            question: "Les n-torsions E[n] = {P∈E(ℂ̄): nP=O} forment :",
            answers: ['E[n] ≅ (ℤ/nℤ)² comme groupes abéliens', 'E[n] ≅ ℤ/nℤ', 'E[n] est trivial', 'E[n] ≅ ℤ/n²ℤ'],
            correct: 0,
            explanation: "Via l'uniformisation ℂ/Λ : E[n] = Λ/nΛ ≅ (ℤ/nℤ)² (les points 1/n·Λ dans Λ/nΛ). Sur ℂ, c'est un groupe abélien de type (ℤ/nℤ)². Sur ℚ, seulement un sous-groupe peut être rationnel : E(ℚ)[n]⊂E[n]. Le module de Tate T_ℓ(E)=lim← E[ℓⁿ] ≅ ℤ_ℓ²."
          },
          {
            type: 'mcq',
            question: "L'accouplement de Weil e_n: E[n]×E[n] → μₙ est :",
            answers: ['Une forme bilinéaire alternée non-dégénérée à valeurs dans les racines n-ièmes de l\'unité, Galois-équivariante', 'Un produit scalaire réel', 'Une forme quadratique', 'Une application triviale'],
            correct: 0,
            explanation: "L'accouplement de Weil e_n est antisymétrique (e_n(P,P)=1), non-dégénéré et Galois-équivariant : e_n(σP,σQ)=σ(e_n(P,Q)) pour σ∈Gal(ℚ̄/ℚ). Il implique det(ρ_{ℓ})=χ_ℓ (caractère cyclotomique), ce qui est fondamental pour la théorie des représentations galoisiennes."
          },
          {
            type: 'mcq',
            question: "Une courbe elliptique à multiplication complexe (CM) par ℤ[i] satisfait :",
            answers: ['Il existe un endomorphisme [i]: E→E correspondant à la multiplication par i, avec [i]²=−1 (comme i²=−1)', 'Elle a j=0', 'Elle a rang 2 sur ℚ', 'Δ=0'],
            correct: 0,
            explanation: "La courbe y²=x³−x a CM par ℤ[i] : l'automorphisme (x,y)↦(−x,iy) est un endomorphisme d'ordre 4 (i⁴=1). Comme i²=−1, [i]∘[i]=[−1] (inversion). Son j-invariant est j=1728. En général, E a CM par l'ordre R d'un corps quadratique imaginaire K si End(E)≅R⊃ℤ."
          },
          {
            type: 'input',
            visual: 'Δ(y²=x³−1)',
            question: "Calculez le discriminant Δ = −16(4a³+27b²) pour la courbe y²=x³−1 (a=0, b=−1).",
            correct: '-432',
            explanation: "Δ = −16(4·0³+27·(−1)²) = −16(0+27) = −16·27 = −432. Comme Δ=−432≠0, la courbe est lisse et c'est bien une courbe elliptique. On peut vérifier : x³−1=(x−1)(x²+x+1) a une racine réelle x=1 et deux racines complexes conjuguées → toutes distinctes → Δ≠0 ✓."
          }
        ],
        // Niveau 5
        [
          {
            type: 'mcq',
            question: "La théorie d'Iwasawa pour les courbes elliptiques étudie E sur la ℤ_p-extension cyclotomique ℚ(ζ_{p∞})/ℚ. Le module de Selmer Sel_{p∞}(E/ℚ) est :",
            answers: ['Un module sur l\'algèbre d\'Iwasawa Λ=ℤ_p[[T]], conjecturalement de type fini (conjecture principale d\'Iwasawa)', 'Un espace vectoriel sur ℚ', 'Le groupe E(ℚ)', 'Un groupe fini'],
            correct: 0,
            explanation: "La théorie d'Iwasawa organise les groupes de Selmer de E sur les corps cyclotomiques en un module sur Λ=ℤ_p[[Gal(ℚ(ζ_{p∞})/ℚ)]]≅ℤ_p[[T]]. La conjecture principale d'Iwasawa (prouvée dans certains cas par Kato) relie ce module à la fonction L p-adique de E."
          },
          {
            type: 'mcq',
            question: "Les systèmes d'Euler (Kolyvagin, Kato) permettent de prouver la conjecture BSD pour rang ≤1 en construisant :",
            answers: ['Des éléments cohérents dans H¹(ℚₙ,T_ℓ(E)) pour tous les corps de la tour cyclotomique, bornant les groupes de Selmer', 'Des fonctions L', 'Des courbes modulaires', 'Des automorphismes de E'],
            correct: 0,
            explanation: "Kolyvagin (1988) construit des points de Heegner cohérents pour prouver que si L(E,1)≠0 alors E(ℚ) est fini (rang 0). Kato (2004) construit des éléments de Beilinson-Kato dans la K-théorie pour borner le groupe de Selmer. Ces deux approches prouvent BSD pour r=0,1."
          },
          {
            type: 'mcq',
            question: "La formule de Gross-Zagier relie :",
            answers: ['La hauteur du point de Heegner P_K∈E(K) à L\'(E,1)·L(E⊗χ_K,1) (dérivée de la fonction L)', 'Le rang de E à j(E)', 'Le discriminant à #E(𝔽_p)', 'BSD directement'],
            correct: 0,
            explanation: "Gross-Zagier (1986) : ĥ(P_K) = (degrés)·L'(E,1)·L(E⊗χ_K,1), où P_K est le point de Heegner et ĥ la hauteur canonique. Si L(E,1)=0 et L'(E,1)≠0, cela implique P_K non trivial → rang ≥ 1. Combined avec Kolyvagin : rang exactement 1 si L(E,1)=0, L'(E,1)≠0."
          },
          {
            type: 'mcq',
            question: "La conjecture de Goldfeld, maintenant un théorème de Bhargava-Shankar, dit que :",
            answers: ['La densité des courbes elliptiques (ordonnées par hauteur) avec rang 0 est positive, et rang moyen ≤ 3/2', 'Toutes les courbes ont rang 0', 'Le rang moyen est infini', 'La densité de rang 0 est 0'],
            correct: 0,
            explanation: "Bhargava-Shankar (2013-2015) prouvent : 66.48%+ des courbes elliptiques ont rang 0, et le rang moyen est ≤ 1.17. Plus fort: >20% ont rang 0 avec #E(ℚ)_tors=1. Ces résultats utilisent des comptages géométriques d'orbites de groupes algébriques (géométrie des nombres)."
          },
          {
            type: 'mcq',
            question: "La correspondance de Langlands géométrique pour les courbes elliptiques relie :",
            answers: ['Les représentations galoisiennes de rang 2 de Gal(ℚ̄/ℚ) aux formes automorphes de GL₂(𝔸) via la modularité', 'Les points rationnels aux représentations linéaires', 'Les courbes elliptiques aux équations différentielles', 'Les tores complexes aux corps de nombres'],
            correct: 0,
            explanation: "La correspondance de Langlands pour GL₂ (partie du programme de Langlands général) prédit une bijection entre représentations galoisiennes 2-dimensionnelles de Gal(ℚ̄/ℚ) et représentations automorphes cuspidales de GL₂(𝔸). Pour les courbes elliptiques, c'est précisément le théorème de modularité de Wiles."
          },
          {
            type: 'mcq',
            question: "En géométrie arithmétique, la hauteur de Faltings h_Fal(E) d'une courbe elliptique E/ℚ est :",
            answers: ['La norme L² de la forme différentielle canonique ω = dx/(2y+a₁x+a₃) sur le modèle de Néron, liée à la théorie d\'Arakelov', 'log|Δ|', 'log|j(E)|', 'La hauteur de Néron-Tate d\'un point'],
            correct: 0,
            explanation: "La hauteur de Faltings h_Fal(E) = −(1/2)log∫_E ω∧ω̄ (normalisée) est une version arithmétique du volume de la métrique de Hodge. Elle apparaît dans les inégalités de Szpiro, dans la théorie d'Arakelov des surfaces arithmétiques, et est conjecturalement reliée à j et Δ par la conjecture de Szpiro : h_Fal(E) ~ log|Δ|/12."
          },
          {
            type: 'mcq',
            question: "La conjecture abc implique la conjecture de Szpiro, qui dit que pour tout ε>0, le conducteur N et le discriminant minimal Δ vérifient :",
            answers: ['|Δ_min| ≤ C(ε)·N^(6+ε) pour une constante dépendant de ε', '|Δ| = N⁶ exactement', '|Δ| ≤ N² toujours', 'N = Δ toujours'],
            correct: 0,
            explanation: "Conjecture de Szpiro : |Δ_min(E)| ≤ C(ε)·N(E)^(6+ε). Cela bornerait la mauvaise réduction. La conjecture abc (si vraie) implique Szpiro via la formule Δ=produit de puissances de premiers de mauvaise réduction. Mochizuki (2012) a proposé une preuve via la géométrie inter-universelle de Teichmüller, mais son statut reste controversé."
          },
          {
            type: 'mcq',
            question: "Les motifs h¹(E) associés aux courbes elliptiques sont des objets de la catégorie des motifs de Chow satisfaisant :",
            answers: ['h(E) = h⁰(E) ⊕ h¹(E) ⊕ h²(E) avec h¹(E) de rang 2 sur ℚ, réalisant les représentations de Galois, de Hodge et de Betti de E', 'h¹(E) est un motif trivial', 'h¹(E) est une courbe', 'h¹(E)=h⁰(E)'],
            correct: 0,
            explanation: "La décomposition motivique h(E)=1⊕h¹(E)⊕L (où L est le motif de Lefschetz) est l'expression motivique de H*(E). h¹(E) capture toute l'arithmétique de E : sa réalisation ℓ-adique est T_ℓ(E), sa réalisation de Hodge est H¹_dR(E), et sa réalisation de Betti est H¹_B(E,ℤ)≅Λ le réseau de périodes."
          },
          {
            type: 'mcq',
            question: "L'équation de Weierstrass 'universelle' sur le schéma modulaire M_{1,1} est :",
            answers: ['Le schéma en courbes de Weierstrass y²+xy=x³−36/(j−1728)·x−1/(j−1728) paramétrisé par j sur ℙ¹\\{0,1728,∞}', 'y²=x³+x+j', 'y²=x³−jx', 'y²=x³+j'],
            correct: 0,
            explanation: "Sur l'espace de modules grossier M_{1,1}≅𝔸¹ paramétrisé par j, il existe une famille universelle (dans le sens orbifolde) de courbes elliptiques. Une équation explicite est y²+xy=x³−36/(j−1728)x−1/(j−1728) qui a j-invariant j. Elle dégénère en j=1728 et j=∞."
          },
          {
            type: 'input',
            visual: 'rank E',
            question: "Pour y²=x³−x sur ℚ, les seuls points rationnels sont O, (0,0), (1,0), (−1,0). Quel est le rang de E(ℚ) ?",
            correct: '0',
            explanation: "E(ℚ) = {O, (0,0), (1,0), (−1,0)} ≅ ℤ/2ℤ × ℤ/2ℤ. C'est un groupe fini d'ordre 4. Donc la partie libre de E(ℚ) est triviale : rang = 0. On peut vérifier via BSD : L(E,1) ≠ 0 pour y²=x³−x (valeur numérique ≈ 1.31 · (formule de périodes) ≠ 0)."
          }
        ],
        // =======================
        // ===== Niveau L1 =======
        // =======================
        [
          {
            type: 'mcq',
            question: "Une courbe elliptique est de genre 1 car la formule de Riemann-Hurwitz donne g = 1 − 2 + 4/2. Que représente le 4 ici ?",
            answers: ['Le nombre de points de ramification du revêtement double (x,y)→x : les 3 racines de x³+ax+b plus le point à l\'infini', 'Le degré de la courbe', 'Le nombre de points rationnels', 'Le discriminant normalisé'],
            correct: 0,
            explanation: "Le morphisme π: E → ℙ¹, (x,y)↦x est de degré 2 (deux valeurs de y pour chaque x générique). Il est ramifié en les points (x,0) avec x³+ax+b=0 (3 racines) et au point à l'infini. Riemann-Hurwitz: 2g_E−2 = 2(2g_{ℙ¹}−2) + 4 → 2g_E−2 = −4+4=0 → g_E=1."
          },
          {
            type: 'mcq',
            question: "Le point O à l'infini d'une courbe elliptique projective y²z = x³+axz²+bz³ est :",
            answers: ['O = [0:1:0], le point d\'inflexion de la courbe, neutre du groupe', '[1:0:0]', '[0:0:1]', '[1:1:1]'],
            correct: 0,
            explanation: "En coordonnées projectives [X:Y:Z] avec x=X/Z, y=Y/Z, l'équation est Y²Z=X³+aXZ²+bZ³. En Z=0 : 0=X³, donc X=0. Le seul point à l'infini est [0:1:0]=O. C'est l'élément neutre du groupe : O+P=P pour tout point P de la courbe."
          },
          {
            type: 'mcq',
            question: "La loi de groupe sur une courbe elliptique est :",
            answers: ['Commutative (P+Q=Q+P), associative, avec élément neutre O et inverse de P=(x,y) égal à −P=(x,−y) (en forme courte)', 'Non commutative', 'Non associative', 'Sans élément neutre'],
            correct: 0,
            explanation: "E(k) est un groupe abélien. La commutativité P+Q=Q+P vient de la symétrie de la construction (la droite PQ=droite QP). L'associativité est moins évidente géométriquement mais se prouve algébriquement. L'inverse de (x,y) est (x,−y) pour y²=x³+ax+b (car y+(−y)=0 et (x,y)+(x,−y)=O)."
          },
          {
            type: 'mcq',
            question: "En caractéristique p=2 ou p=3, la forme courte y²=x³+ax+b n'est plus valable. Quelle est la forme générale de Weierstrass ?",
            answers: ['y²+a₁xy+a₃y = x³+a₂x²+a₄x+a₆ (modèle de Weierstrass général)', 'y²=x³+ax+b encore', 'y = x³', 'y² = x⁴+ax+b'],
            correct: 0,
            explanation: "La forme générale de Weierstrass y²+a₁xy+a₃y=x³+a₂x²+a₄x+a₆ est valable en toute caractéristique. En caractéristique ≠2,3, on peut simplifier par complétion du carré en y et du cube en x. En car. 2 : y²+xy=x³+a₂x²+a₆ (type ordinaire) ou y²+a₃y=x³+a₄x+a₆ (type supersingulier)."
          },
          {
            type: 'mcq',
            question: "La droite 'à l\'infini' coupant une courbe elliptique projective en :",
            answers: ['Un seul point O=[0:1:0] (avec multiplicité 3)', 'Deux points', 'Aucun point', 'Trois points distincts'],
            correct: 0,
            explanation: "La droite Z=0 (droite à l'infini) coupe Y²Z=X³+aXZ²+bZ³ en Z=0: 0=X³, soit X=0 de multiplicité 3. Il y a donc un seul point à l'infini O=[0:1:0], avec multiplicité 3. Cela signifie que O est un point d'inflexion (tangente d'ordre 3)."
          },
          {
            type: 'mcq',
            question: "Si P et Q ont la même abscisse x mais des ordonnées opposées P=(x,y) et Q=(x,−y), alors P+Q = ?",
            answers: ['O (car la droite PQ est verticale et coupe E en un seul autre point à l\'infini O)', '(0,0)', '(x,0)', '2P'],
            correct: 0,
            explanation: "La droite passant par P=(x,y) et Q=(x,−y) est verticale. Elle coupe la cubique en O=[0:1:0] (le point à l'infini). Par définition P+Q = −(troisième point) = −O = O. Donc P et Q sont inverses l'un de l'autre dans le groupe : Q=−P."
          },
          {
            type: 'mcq',
            question: "Pour compter les points d'une courbe elliptique E sur 𝔽ₚ, l'algorithme de Schoof a une complexité :",
            answers: ['O((log p)⁵) polynomiale en log p (algorithme polynomial en la taille de p)', 'O(p)', 'O(√p)', 'O(p²)'],
            correct: 0,
            explanation: "L'algorithme de Schoof (1985) : pour calculer aₚ = p+1−#E(𝔽ₚ), on calcule aₚ mod ℓ pour de petits premiers ℓ (via les polynômes de division de E), puis on reconstitue aₚ par CRT. Chaque étape coûte O((log p)²) et on a besoin de O(log p) premiers ℓ, donnant O((log p)⁵) au total."
          },
          {
            type: 'mcq',
            question: "L'isogénie entre deux courbes elliptiques E₁ et E₂ est :",
            answers: ['Un morphisme de groupes φ: E₁→E₂ défini sur k, de degré d (noyau de cardinal d) — préservant l\'élément neutre', 'Un isomorphisme de corps', 'Une application non-holomorphe', 'Un endomorphisme de E₁'],
            correct: 0,
            explanation: "Une isogénie φ: E₁→E₂ est un morphisme de variétés algébriques non-constant qui envoie O sur O. Automatiquement, φ est un morphisme de groupes. Son degré est le cardinal du noyau (sur ℂ̄). L'isogénie duale φ̂: E₂→E₁ satisfait φ̂∘φ=[deg φ] (multiplication par le degré)."
          },
          {
            type: 'mcq',
            question: "La courbe de Tate sur ℚₚ (pour |q|_p<1) est paramétrée par :",
            answers: ['E_q: y²+xy=x³+a₄(q)x+a₆(q) avec aₙ(q) séries en q = e^(2πiτ), analogue p-adique du tore complexe ℂ*/qℤ', 'Une courbe de Legendre', 'Une courbe supersingulière', 'La courbe y²=x³+1'],
            correct: 0,
            explanation: "Sur ℚₚ, si |j(E)|_p > 1 (réduction multiplicative), la courbe E est isomorphe (sur une extension de degré ≤2 de ℚₚ) à la courbe de Tate E_q ≅ (ℚₚ^alg)*/q^ℤ pour un unique q avec |q|_p<1. C'est l'analogue p-adique de ℂ*/e^(2πiτ)^ℤ ≅ ℂ/Λ."
          },
          {
            type: 'input',
            visual: 'j(y²=x³+x)',
            question: "Pour y²=x³+x (a=1, b=0), calculez j = 1728·4a³/(4a³+27b²).",
            correct: '1728',
            explanation: "j = 1728·4·1³/(4·1³+27·0²) = 1728·4/4 = 1728. Cette courbe (comme y²=x³−x!) a j=1728. Ces deux courbes ont le même j-invariant mais sont non-isomorphes sur ℚ (elles sont des 'twists' l'une de l'autre, liées par la substitution x→−x qui change a→−a)."
          }
        ]
      ]
    },

    // ============================================================
    // NOTION 8 : Groupe des points d'une courbe elliptique
    // ============================================================
    {
      id: 'groupe-points-courbe-elliptique',
      label: 'Groupe des points d\'une courbe elliptique',
      lesson: {
        formula: 'P + Q = R : droite PQ ∩ E = {P, Q, R\'}, puis R = réflexion de R\'',
        text: "Les points d'une courbe elliptique E forment un groupe abélien pour la loi géométrique suivante : pour P, Q ∈ E, on trace la droite PQ, qui rencontre E en un troisième point R', et on définit P+Q comme le symétrique de R' par rapport à l'axe des abscisses. Le point à l'infini O est l'élément neutre.",
        example: "Sur y²=x³−1 sur ℚ : P=(1,0) est de 2-torsion (2P=O). Le point (0,−1) est également rationnel. La droite joignant (1,0) et (0,−1) coupe la cubique en un troisième point, donnant la loi d'addition."
      },
      fullBlocks: [
        {
          type: 'definition',
          title: 'Loi d\'addition géométrique',
          text: "Soient P, Q deux points distincts de E (ni l'un ni l'autre n'est O). La droite passant par P et Q coupe la cubique E en exactement un troisième point R' (algèbre de Bézout: 3 intersections, 2 connues). On définit P+Q comme le réfléchi de R' par rapport à l'axe des abscisses (i.e. on change le signe de y). Si P=Q, on prend la tangente en P."
        },
        {
          type: 'formula',
          title: 'Formules explicites d\'addition',
          formula: 'λ = (y₂−y₁)/(x₂−x₁), x₃ = λ²−x₁−x₂, y₃ = λ(x₁−x₃)−y₁',
          text: "Pour P=(x₁,y₁) et Q=(x₂,y₂) distincts (x₁≠x₂), la pente de PQ est λ=(y₂−y₁)/(x₂−x₁). Le point P+Q=(x₃,y₃) est donné par les formules ci-dessus. Pour P=Q (doublement), on utilise λ=(3x₁²+a)/(2y₁)."
        },
        {
          type: 'demo',
          title: 'Vérification algébrique de la loi d\'addition',
          text: "Soit la droite y=λx+μ passant par P=(x₁,y₁) et Q=(x₂,y₂). En substituant dans y²=x³+ax+b : (λx+μ)²=x³+ax+b → x³−λ²x²+…=0. Cette cubique a pour racines x₁, x₂, et x₃ (abscisse de R'). Par la formule de Viète : x₁+x₂+x₃=λ², donc x₃=λ²−x₁−x₂. Puis y₃'=λx₃+μ et y₃=−y₃' (réflexion)."
        },
        {
          type: 'graph',
          title: 'Construction géométrique de P+Q',
          svgContent: '<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="220" fill="#f8f9fa"/><line x1="20" y1="110" x2="280" y2="110" stroke="#333" stroke-width="1.5"/><line x1="150" y1="10" x2="150" y2="210" stroke="#999" stroke-width="1" stroke-dasharray="4"/><path d="M50,110 Q70,30 120,20 Q160,15 190,30 Q220,50 235,80 Q245,100 248,110 Q245,120 235,140 Q220,170 190,190 Q160,205 120,200 Q70,190 50,110" stroke="#3b82f6" stroke-width="2" fill="none"/><circle cx="85" cy="55" r="4" fill="#ef4444"/><text x="88" y="52" font-size="10" fill="#ef4444">P</text><circle cx="200" cy="65" r="4" fill="#ef4444"/><text x="203" y="62" font-size="10" fill="#ef4444">Q</text><line x1="65" y1="30" x2="240" y2="120" stroke="#f97316" stroke-width="1.5"/><circle cx="220" cy="178" r="4" fill="#22c55e"/><text x="223" y="175" font-size="10" fill="#22c55e">R\'</text><circle cx="220" cy="42" r="4" fill="#7c3aed"/><text x="223" y="52" font-size="10" fill="#7c3aed">P+Q</text><line x1="220" y1="178" x2="220" y2="42" stroke="#7c3aed" stroke-width="1" stroke-dasharray="3"/></svg>',
          caption: 'La droite PQ coupe E en R\'. P+Q est le symétrique de R\' par rapport à l\'axe des x.',
          text: "Géométriquement : on 'rebondit' sur l'axe. Si R\'=(x,y), alors P+Q=(x,−y). Le groupe est l'abstraction de cette construction."
        },
        {
          type: 'example',
          title: 'Addition de points sur y²=x³−x',
          text: "Soit P=(2,√6) (irrationnel sur ℚ mais rationnel sur ℚ(√6)). λ=(3·4−1)/(2√6)=11/(2√6). x(2P)=121/24−4=25/24. y(2P)=11/(2√6)·(2−25/24)−√6=… Même si les calculs intermédiaires impliquent √6, le point 2P peut être rationnel si E a des points de torsion particuliers."
        },
        {
          type: 'warning',
          title: 'Cas dégénéré : x₁=x₂',
          text: "Si P=(x,y) et Q=(x,−y) (même abscisse, ordonnées opposées), la droite est verticale et ne coupe pas E en un troisième point affine : on convient que P+Q=O. Si P=(x,0) (point de 2-torsion), la tangente est verticale et 2P=O. Ces cas doivent être traités séparément dans les algorithmes."
        }
      ],
      levels: [
        // Niveau 1
        [
          {
            type: 'mcq',
            question: "L'élément neutre du groupe des points d'une courbe elliptique est :",
            answers: ['O, le point à l\'infini [0:1:0]', '(0,0)', 'L\'origine des coordonnées', 'Tout point de la courbe'],
            correct: 0,
            explanation: "O=[0:1:0] est le point à l'infini, élément neutre : O+P=P pour tout point P. Pour toute droite passant par P et O (droite verticale dans le plan affine), le troisième point d'intersection est le symétrique de P, puis en prenant son symétrique on retrouve P. Donc O est bien le neutre."
          },
          {
            type: 'mcq',
            question: "Pour P=(x₁,y₁) sur y²=x³+ax+b, l'inverse −P est :",
            answers: ['−P = (x₁, −y₁)', '−P = (−x₁, y₁)', '−P = (−x₁, −y₁)', '−P = O'],
            correct: 0,
            explanation: "L'inverse de P=(x₁,y₁) est son symétrique par rapport à l'axe des x, soit −P=(x₁,−y₁). En effet, la droite passant par P et −P est verticale et coupe E en O. Donc P+(−P)=O ✓. Pour une forme générale y²+a₁xy+a₃y=… : −P=(x₁, −y₁−a₁x₁−a₃)."
          },
          {
            type: 'mcq',
            question: "P est un point de 2-torsion (2P=O) si et seulement si :",
            answers: ['y₁=0 (la tangente en P est verticale)', 'x₁=0', 'P=O', 'y₁=1'],
            correct: 0,
            explanation: "2P=O signifie P=−P, i.e. (x₁,y₁)=(x₁,−y₁), soit y₁=−y₁, soit 2y₁=0, soit y₁=0 (en caractéristique ≠2). Les points de 2-torsion sont exactement les points (x,0) de la courbe, i.e. les racines de x³+ax+b=0."
          },
          {
            type: 'mcq',
            question: "La pente de la tangente en P=(x₁,y₁) sur y²=x³+ax+b est :",
            answers: ['λ = (3x₁²+a)/(2y₁)', 'λ = y₁/x₁', 'λ = 2y₁/(3x₁²+a)', 'λ = x₁²+a'],
            correct: 0,
            explanation: "En différenciant implicitement y²=x³+ax+b : 2y·(dy/dx)=3x²+a. Donc dy/dx = (3x²+a)/(2y). En P=(x₁,y₁) : λ=(3x₁²+a)/(2y₁). Cette pente est utilisée pour le doublement 2P = P+P."
          },
          {
            type: 'mcq',
            question: "Le groupe E(k) des points k-rationnels d'une courbe elliptique est :",
            answers: ['Un groupe abélien (commutatif)', 'Un groupe non-commutatif', 'Un corps', 'Un espace vectoriel'],
            correct: 0,
            explanation: "E(k) est un groupe abélien (commutatif) : P+Q=Q+P car la construction de P+Q est symétrique (droite PQ = droite QP). L'associativité se vérifie algébriquement (calcul fastidieux) ou géométriquement (argument de Riemann-Roch)."
          },
          {
            type: 'mcq',
            question: "Pour P=(x₁,y₁) et Q=(x₂,y₂) avec x₁≠x₂, l'abscisse de P+Q est :",
            answers: ['x₃ = λ²−x₁−x₂ où λ=(y₂−y₁)/(x₂−x₁)', 'x₃ = (x₁+x₂)/2', 'x₃ = x₁·x₂', 'x₃ = λ²+x₁+x₂'],
            correct: 0,
            explanation: "La droite y=λx+μ coupant la cubique donne (par Viète) x₁+x₂+x₃=λ² (coefficient de x² nul dans y²=x³+…). Donc x₃=λ²−x₁−x₂. Pour y₃ : on calcule y₃'=λx₃+μ=λ(x₃−x₁)+y₁, puis y₃=−y₃' (réflexion)."
          },
          {
            type: 'mcq',
            question: "Calculez P+Q pour P=(0,0) et Q=(1,0) sur y²=x³−x. La pente λ=(0−0)/(1−0)=0. Donc x₃=0²−0−1=−1. Et y₃=−(0·(−1−0)+0)=0. Donc P+Q=",
            answers: ['(−1, 0)', '(1, 0)', '(0, 1)', 'O'],
            correct: 0,
            explanation: "λ=0 (droite horizontale y=0). Elle coupe y²=x³−x en y=0, i.e. x³−x=0=x(x−1)(x+1). Trois racines: 0, 1, −1. Le troisième point est R'=(−1,0). Le réfléchi est −R'=(−1,−0)=(−1,0). Donc (0,0)+(1,0)=(−1,0). Vérification : les trois points (0,0),(1,0),(−1,0) sont alignés sur y=0 ✓."
          },
          {
            type: 'mcq',
            question: "La droite verticale x=c coupe une courbe elliptique y²=x³+ax+b en :",
            answers: ['Exactement 2 points affines (x,±y) si c³+ac+b≠0, et 1 point (x,0) si c³+ac+b=0', 'Exactement 1 point', '3 points toujours', '0 points sur ℝ si pas de solution réelle'],
            correct: 0,
            explanation: "x=c → y²=c³+ac+b. Si c³+ac+b>0 (sur ℝ) ou non nul (sur ℂ) : deux solutions y=±√(c³+ac+b). Si c³+ac+b=0 : un seul point (c,0), point de 2-torsion. Sur ℂ, il y a toujours 2 solutions (comptées avec multiplicité) pour y."
          },
          {
            type: 'mcq',
            question: "Un point P est d'ordre n si nP=O et kP≠O pour 1≤k<n. L'ordre de P=(0,0) sur y²=x³−x est :",
            answers: ['2 (car 2P=O, i.e. la tangente en (0,0) est verticale)', '3', '1', '∞'],
            correct: 0,
            explanation: "La tangente en (0,0) : λ=(3·0+a)/(2·0)=(−1)/0 → verticale. Donc 2P=O, et P≠O, donc ordre(P)=2. C'est cohérent avec (0,0)∈E[2] (point de 2-torsion). On peut vérifier : la tangente y=(−1)/0 · x = 'x=0' est la droite verticale x=0 qui coupe E en (0,0) (double) et O."
          },
          {
            type: 'input',
            visual: 'P+O',
            question: "Sur toute courbe elliptique, P+O=? (O est le neutre)",
            correct: 'P',
            explanation: "Par définition, O est l'élément neutre du groupe. Donc P+O=O+P=P pour tout point P. Géométriquement : la droite passant par P et O=[0:1:0] est la droite verticale x=x_P (en coordonnées affines). Elle coupe E en P et son symétrique −P. Puis P+O = −(−P) = P ✓."
          }
        ],
        // Niveau 2
        [
          {
            type: 'mcq',
            question: "Sur y²=x³+x sur ℤ/5ℤ, calculez 2·(2,0) sur 𝔽₅. La tangente en (2,0) a pente λ=(3·4+1)/(2·0) → verticale. Donc 2·(2,0) =",
            answers: ['O (le point à l\'infini)', '(2,0)', '(0,0)', '(1,1)'],
            correct: 0,
            explanation: "La tangente en (2,0) est verticale (y₁=0 → 2-torsion). Donc 2·(2,0)=O. C'est la définition même d'un point de 2-torsion : sa tangente est verticale et le doublement donne O."
          },
          {
            type: 'mcq',
            question: "Sur y²=x³+x+1 sur ℚ, la somme P=(0,1) + Q=(0,1) = 2P est calculée avec λ=(3·0+1)/(2·1)=1/2. Alors x(2P)=",
            answers: ['x(2P) = (1/2)² − 0 − 0 = 1/4', '0', '1', '−1/4'],
            correct: 0,
            explanation: "λ=(3x₁²+a)/(2y₁)=(3·0+1)/(2·1)=1/2. x(2P)=λ²−2x₁=(1/4)−0=1/4. y(2P)=λ(x₁−x(2P))−y₁=(1/2)(0−1/4)−1=−1/8−1=−9/8. Donc 2(0,1)=(1/4, −9/8). Vérification : (−9/8)²=(81/64) et (1/4)³+(1/4)+1=1/64+1/4+1=81/64 ✓."
          },
          {
            type: 'mcq',
            question: "L'algorithme 'double-and-add' pour calculer 11P utilise la décomposition binaire 11=1011₂ et effectue :",
            answers: ['3 doublements et 3 additions (pour les bits 1 dans 1011)', '11 additions', '10 doublements', '22 opérations'],
            correct: 0,
            explanation: "11 = 8+2+1 = 2³+2¹+2⁰. Algorithme : P → 2P → 4P → 8P (3 doublements). Puis : 8P+2P=10P (addition pour bit 1 en position 1), puis 10P+P=11P (addition pour bit 0 en position 0). Total : 3 doublements + 3 additions = 6 opérations, bien mieux que 10 additions naïves."
          },
          {
            type: 'mcq',
            question: "Le groupe E(𝔽ₚ) d'une courbe elliptique sur 𝔽ₚ est isomorphe (par le théorème de classification) à :",
            answers: ['ℤ/dℤ ou ℤ/d₁ℤ×ℤ/d₂ℤ avec d₁|d₂ et d₁|p−1 (groupe abélien de type fini d\'un corps fini)', 'ℤ/pℤ toujours', 'ℤ toujours', '𝔽_p'],
            correct: 0,
            explanation: "Tout groupe abélien fini est produit de groupes cycliques. Pour E(𝔽ₚ), on a E(𝔽ₚ) ≅ ℤ/n₁ℤ×ℤ/n₂ℤ avec n₁|n₂ et n₁|(p−1). La condition n₁|(p−1) vient de ce que les points de n₁-torsion doivent être définis sur 𝔽ₚ, donc les racines n₁-ièmes de l'unité aussi."
          },
          {
            type: 'mcq',
            question: "Le problème du logarithme discret sur les courbes elliptiques (ECDLP) : étant donnés P et Q=nP, trouver n. Sa difficulté est :",
            answers: ['Exponentielle en la taille du corps (le meilleur algorithme connu est en O(√p) via Baby-step Giant-step)', 'Polynomiale en log p', 'Résoluble en O(log p)', 'Equivalent au logarithme discret dans 𝔽_p (même difficulté)'],
            correct: 0,
            explanation: "Le meilleur algorithme général pour ECDLP est en O(√#E(𝔽ₚ)) ≈ O(√p) opérations (algorithme de Pollard ρ). Comparaison : le logarithme discret dans 𝔽_p* est sous-exponentiel en O(exp(c(log p)^{1/2})) via index calculus. ECDLP est donc beaucoup plus difficile, permettant des clés plus courtes en cryptographie."
          },
          {
            type: 'mcq',
            question: "L'échange de clés Diffie-Hellman sur courbe elliptique (ECDH) : Alice choisit a, envoie aP ; Bob choisit b, envoie bP ; le secret partagé est :",
            answers: ['abP (Alice calcule a·(bP), Bob calcule b·(aP), ils obtiennent le même point)', 'a+b', 'P', 'a·b mod p'],
            correct: 0,
            explanation: "Alice reçoit bP de Bob et calcule a·(bP)=abP. Bob reçoit aP d'Alice et calcule b·(aP)=baP=abP. Ils partagent le secret abP sans l'avoir communiqué. La sécurité repose sur l'impossibilité de calculer abP en connaissant seulement aP et bP (problème CDH, lié au ECDLP)."
          },
          {
            type: 'mcq',
            question: "Le rang d'une courbe elliptique sur ℚ est le nombre minimum de générateurs de la partie libre de E(ℚ). Une courbe peut-elle avoir rang 0 ?",
            answers: ['Oui : y²=x³−x a rang 0 (E(ℚ) fini ≅ ℤ/2ℤ×ℤ/2ℤ)', 'Non : le rang est toujours ≥1', 'Non : E(ℚ) est toujours infini', 'Oui mais seulement si j=0'],
            correct: 0,
            explanation: "Le rang 0 signifie que E(ℚ) est un groupe fini (ne contient que la torsion). Exemple : y²=x³−x a E(ℚ)={O,(0,0),(1,0),(−1,0)} ≅ ℤ/2ℤ×ℤ/2ℤ, fini de rang 0. En fait, la plupart des courbes elliptiques (statistiquement, >50%) ont rang 0."
          },
          {
            type: 'mcq',
            question: "Le sous-groupe de n-torsion E[n] = ker([n]: E→E) satisfait pour n premier ℓ :",
            answers: ['E[ℓ] ≅ (ℤ/ℓℤ)² sur ℂ (ou sur un corps algébriquement clos de caractéristique ≠ℓ)', 'E[ℓ] ≅ ℤ/ℓℤ', 'E[ℓ] est trivial', 'E[ℓ] ≅ ℤ/ℓ²ℤ'],
            correct: 0,
            explanation: "Via ℂ/Λ : E[ℓ] = (1/ℓ)Λ/Λ ≅ (ℤ/ℓℤ)² (les ℓ²-points de ℓ-torsion). Sur un corps algébriquement clos de car.≠ℓ, il en est de même. Mais sur ℚ, seulement une partie peut être ℚ-rationnelle. Le module de Tate T_ℓ(E)=lim← E[ℓⁿ] ≅ ℤ_ℓ² capte toute l'information ℓ-adique."
          },
          {
            type: 'mcq',
            question: "L'associativité de la loi de groupe sur E se prouve le plus élégamment via :",
            answers: ['Le théorème de Riemann-Roch : l\'équivalence linéaire des diviseurs de degré 0 est associative par définition', 'Un calcul algébrique direct (développement de (P+Q)+R = P+(Q+R))', 'Le théorème de Bézout uniquement', 'La théorie des corps de classes'],
            correct: 0,
            explanation: "La preuve via Riemann-Roch : la loi de groupe sur E vient de l'isomorphisme Pic⁰(E) ≅ E, où Pic⁰ est le groupe des classes de diviseurs de degré 0. Ce groupe est associatif par définition (les classes d'équivalence forment un groupe). C'est plus élégant que les 300 lignes de calcul algébrique direct."
          },
          {
            type: 'mcq',
            question: "Pour un point P d'ordre infini sur E(ℚ) (rang ≥1), la suite nP pour n=1,2,3,… génère :",
            answers: ['Un sous-groupe isomorphe à ℤ (infiniment de points rationnels distincts)', 'Un cycle fini', 'E(ℚ) tout entier', 'Un ensemble dense dans E(ℝ)'],
            correct: 0,
            explanation: "Si P est d'ordre infini, le sous-groupe ⟨P⟩={nP: n∈ℤ} ≅ ℤ est infini : tous les nP sont distincts. La hauteur ĥ(nP)=n²ĥ(P) croît quadratiquement, donc les points nP sont des points rationnels de hauteur arbitrairement grande, distincts. Si rang(E(ℚ))=r, on a r générateurs indépendants."
          }
        ],
        // Niveau 3
        [
          {
            type: 'mcq',
            question: "Le problème de descente infinie de Fermat, adapté aux courbes elliptiques, est la méthode de :",
            answers: ['Descent de 2-Selmer : Φ: E(ℚ)/2E(ℚ) → S⁽²⁾(E/ℚ) ⊃ Ш(E/ℚ)[2] pour borner le rang', 'Descente ordinaire de Fermat sur les entiers', 'Calcul de la torsion uniquement', 'Théorème de Hasse'],
            correct: 0,
            explanation: "La 2-descente de Mordell : l'injection Φ: E(ℚ)/2E(ℚ) → S⁽²⁾(E/ℚ) dans le 2-groupe de Selmer donne rang ≤ dim S⁽²⁾ − dim Ш[2]. Le groupe de Tate-Shafarevich Ш mesure l'obstruction locale-globale (Hasse principle). C'est l'outil computationnel standard pour déterminer le rang."
          },
          {
            type: 'mcq',
            question: "Le groupe de Tate-Shafarevich Ш(E/ℚ) est défini par la suite exacte :",
            answers: ['0 → E(ℚ)→ ∏ E(ℚᵥ)→ H¹(ℚ,E)→Ш(E/ℚ)→0 (il mesure l\'obstruction à la localisation)', 'Ш=H¹(ℚ,E)', 'Ш=E(ℚ)', 'Ш=∏E(ℚ_p)'],
            correct: 0,
            explanation: "Ш(E/ℚ) = ker(H¹(ℚ,E) → ∏_v H¹(ℚᵥ,E)) : les classes de cohomologie localement triviales (i.e. qui ont un point local partout) mais pas nécessairement globalement triviales. Conjecturalement Ш est fini. Sa finitude (inconnue en général) est reliée à BSD via la formule analytique de BSD."
          },
          {
            type: 'mcq',
            question: "L'algorithme de Miller-Rabin pour les signatures ECDSA utilise le doublement répété de points. La complexité pour un groupe d'ordre n sur 𝔽ₚ est :",
            answers: ['O((log p)³) pour une opération de groupe (addition de points en coordonnées projectives de Jacobi)', 'O(p)', 'O(√p)', 'O(log p)'],
            correct: 0,
            explanation: "En coordonnées projectives de Jacobi [X:Y:Z] avec x=X/Z², y=Y/Z³, une addition coûte 3S+2M (S=carré, M=mult), et un doublement 1S+3M ≈ 4M dans 𝔽ₚ. Chaque multiplication dans 𝔽ₚ coûte O((log p)²) opérations bit. Total pour nP : O(log n)·O((log p)²)·O(1) ≈ O((log p)³)."
          },
          {
            type: 'mcq',
            question: "Les courbes de Koblitz (courbes elliptiques avec CM par ℤ[i] ou ℤ[ω], ω=e^(2πi/3)) permettent :",
            answers: ['Des multiplications scalaires accélérées via l\'endomorphisme de Frobenius remplaçant les doublements par des applications de Frobenius plus rapides', 'Seulement une signature', 'Un groupe de points trivial', 'Une résistance au quantum améliorée'],
            correct: 0,
            explanation: "Sur une courbe de Koblitz sur 𝔽_{2ᵐ}, l'endomorphisme de Frobenius φ: (x,y)↦(x²,y²) satisfait φ²+φ=[2] (ou une variante). On peut remplacer les doublements coûteux par des applications de Frobenius (quasi-gratuites en caractéristique 2), accélérant la multiplication scalaire d'un facteur ~3."
          },
           {
            type: 'mcq',
            question: "L'accouplement de Tate-Weil e_n: E[n]×E[n] → μₙ (racines n-ièmes de l'unité) est :",
            answers: ['Bilinéaire, alterné (e_n(P,P)=1), non-dégénéré et compatible avec la structure de Galois', 'Symétrique', 'Toujours trivial sur 𝔽ₚ', 'Uniquement défini sur ℂ'],
            correct: 0,
            explanation: "L'accouplement de Weil e_n: E[n]×E[n] → μₙ est bilinéaire (e_n(P+Q,R)=e_n(P,R)e_n(Q,R)), alterné (e_n(P,P)=1, donc antisymétrique : e_n(P,Q)=e_n(Q,P)⁻¹), et non-dégénéré. Sa compatibilité Galoisienne (σ(e_n(P,Q))=e_n(σP,σQ)) est cruciale pour le MOV attack en cryptographie."
          },
          {
            type: 'mcq',
            question: "Le théorème de structure de E(𝔽ₚ) (groupe des points sur corps fini) affirme :",
            answers: ['E(𝔽ₚ) ≅ ℤ/d₁ℤ × ℤ/d₂ℤ avec d₁|d₂ et d₁|(p−1)', 'E(𝔽ₚ) ≅ ℤ/nℤ toujours cyclique', 'E(𝔽ₚ) est toujours trivial', 'E(𝔽ₚ) ≅ ℝ²'],
            correct: 0,
            explanation: "E(𝔽ₚ) est un groupe abélien fini, donc isomorphe à ℤ/d₁ℤ × ℤ/d₂ℤ avec d₁|d₂. La condition d₁|(p−1) vient de l'existence des racines de l'unité nécessaires. Si d₁=1, le groupe est cyclique. L'ordre total #E(𝔽ₚ) = d₁·d₂ vérifie le théorème de Hasse."
          },
          {
            type: 'mcq',
            question: "La borne de Hasse stipule que #E(𝔽ₚ) vérifie :",
            answers: ['|#E(𝔽ₚ) − (p+1)| ≤ 2√p', '#E(𝔽ₚ) = p', '#E(𝔽ₚ) ≤ p', '#E(𝔽ₚ) ≥ p'],
            correct: 0,
            explanation: "Le théorème de Hasse (1933) : #E(𝔽ₚ) = p+1−t avec |t| ≤ 2√p (t est la trace du Frobenius). Géométriquement : le nombre de points est proche de p+1 (le nombre de points d'une courbe de genre 0 plus le point à l'infini). La preuve rigoureuse utilise la théorie des fonctions L."
          },
          {
            type: 'input',
            visual: 'Hasse',
            question: "Si p=7, donnez l'intervalle de Hasse pour #E(𝔽₇) : [p+1−2√p, p+1+2√p] arrondi aux entiers.",
            correct: '[3,13]',
            explanation: "2√7 ≈ 5.29, donc p+1−2√7 ≈ 2.71 → 3 et p+1+2√7 ≈ 13.29 → 13. L'intervalle est [3,13]. En pratique, on peut vérifier que y²=x³−x sur 𝔽₇ donne #E(𝔽₇)=8 qui est bien dans [3,13]."
          },
          {
            type: 'mcq',
            question: "L'algorithme de Schoof (1985) calcule #E(𝔽ₚ) en temps :",
            answers: ['Polynomial en log p : O((log p)⁸)', 'Exponentiel : O(p)', 'O(√p) par baby-step giant-step', 'O(p²)'],
            correct: 0,
            explanation: "L'algorithme de Schoof calcule la trace de Frobenius t = p+1−#E(𝔽ₚ) modulo de petits premiers ℓ via les polynômes de division, puis utilise le théorème CRT. Complexité O((log p)⁸). Les améliorations SEA (Schoof-Elkies-Atkin) le réduisent à O((log p)⁵ ou 6) et sont utilisées en pratique."
          }
        ],
        // Niveau 4
        [
          {
            type: 'mcq',
            question: "La loi de groupe sur E(K) est définie par la règle de la corde et de la tangente. L'élément neutre est :",
            answers: ['Le point à l\'infini O (point projectif [0:1:0])', 'L\'origine (0,0)', 'Le point d\'inflexion', 'Le sommet de la courbe'],
            correct: 0,
            explanation: "En coordonnées projectives, la courbe elliptique contient un unique point à l'infini O = [0:1:0] qui est le point neutre. Toute droite verticale x=a rencontre E en deux points (x,y) et (x,−y) dont la somme doit être O, ce qui est cohérent avec la règle : P + (−P) = O."
          },
          {
            type: 'mcq',
            question: "Pour P = (x₁,y₁) et Q = (x₂,y₂) avec x₁ ≠ x₂ sur E: y²=x³+ax+b, la pente λ de la droite PQ est :",
            answers: ['λ = (y₂−y₁)/(x₂−x₁)', 'λ = (x₂−x₁)/(y₂−y₁)', 'λ = y₁/x₁', 'λ = 2y₁/(3x₁²+a)'],
            correct: 0,
            explanation: "La pente de la corde entre P et Q est λ = (y₂−y₁)/(x₂−x₁) (formule standard). Le troisième point d'intersection de la droite avec E est R' = (x₃, y₃') et P+Q = (x₃, −y₃'). La formule λ = 2y₁/(3x₁²+a) est celle de la tangente (pour P=Q)."
          },
          {
            type: 'mcq',
            question: "La formule explicite de x₃ = x(P+Q) lorsque x₁ ≠ x₂ est :",
            answers: ['x₃ = λ² − x₁ − x₂', 'x₃ = λ² + x₁ + x₂', 'x₃ = λ(x₁−x₂) − y₁', 'x₃ = x₁ + x₂'],
            correct: 0,
            explanation: "La droite y = λx+μ rencontre y²=x³+ax+b en trois points dont les abscisses vérifient λ²x²+...= x³+ax+b, soit x³−λ²x²+...=0. Par les relations de Viète, x₁+x₂+x₃ = λ², donc x₃ = λ²−x₁−x₂. Puis y₃ = λ(x₁−x₃)−y₁ (en prenant le symétrique)."
          },
          {
            type: 'mcq',
            question: "Le doublement d'un point P=(x₁,y₁) sur y²=x³+ax+b donne la pente de tangente :",
            answers: ['λ = (3x₁²+a)/(2y₁)', 'λ = (y₁²+x₁)/(2x₁)', 'λ = 3x₁/(2y₁)', 'λ = (x₁²+a)/(y₁)'],
            correct: 0,
            explanation: "La tangente en P se calcule par dérivation implicite : 2y·dy/dx = 3x²+a, donc dy/dx = (3x²+a)/(2y). En P=(x₁,y₁) : λ = (3x₁²+a)/(2y₁). Le doublement [2]P utilise cette pente avec x₃ = λ²−2x₁."
          },
          {
            type: 'mcq',
            question: "L'opposé d'un point P=(x,y) sur E est :",
            answers: ['−P = (x,−y)', '−P = (−x,y)', '−P = (−x,−y)', '−P = (y,x)'],
            correct: 0,
            explanation: "L'équation y²=x³+ax+b est invariante sous (x,y)↦(x,−y). La droite verticale x=c coupe E en (c,y₀) et (c,−y₀). La règle de la corde donne (c,y₀)+(c,−y₀)=O, donc −(x,y)=(x,−y). En caractéristique 2 il faut adapter."
          },
          {
            type: 'input',
            visual: '[2]P',
            question: "Sur E: y²=x³−x sur ℚ, P=(0,0). Calculez [2]P. Rappel: λ=(3x²+a)/(2y). Que vaut [2]P ?",
            correct: 'O',
            explanation: "En P=(0,0) : y₁=0, donc la tangente est verticale (λ=a/(2·0) diverge). Quand y=0, le point est son propre opposé : P = −P, donc P+P = O. En effet, [2](0,0) = O sur cette courbe. P est un point de 2-torsion."
          },
          {
            type: 'mcq',
            question: "Le groupe de torsion E(ℚ)_tors est borné par le théorème de :",
            answers: ['Mazur : E(ℚ)_tors est isomorphe à ℤ/nℤ (n≤10 ou n=12) ou ℤ/2ℤ×ℤ/2nℤ (n≤4)', 'Hasse : |E_tors| ≤ 2√p', 'Mordell : E_tors est infini', 'Weil : E_tors ≅ ℤ²'],
            correct: 0,
            explanation: "Le théorème de Mazur (1977) est l'un des plus beaux résultats de la géométrie arithmétique : E(ℚ)_tors appartient exactement à 15 types possibles : ℤ/nℤ pour n∈{1,...,10,12} ou ℤ/2ℤ×ℤ/2nℤ pour n∈{1,2,3,4}. Toutes ces structures existent effectivement."
          },
          {
            type: 'mcq',
            question: "La multiplication scalaire [n]: E→E est un homomorphisme de groupe. Son noyau E[n] sur ℂ est :",
            answers: ['E[n] ≅ ℤ/nℤ × ℤ/nℤ (groupe à n² éléments)', 'E[n] ≅ ℤ/nℤ', 'E[n] = {O}', 'E[n] est infini'],
            correct: 0,
            explanation: "Sur ℂ, E = ℂ/Λ donc E[n] = {z∈ℂ/Λ : nz∈Λ} = (1/n)Λ/Λ ≅ ℤ/nℤ × ℤ/nℤ. C'est un groupe à n² éléments. Sur 𝔽ₚ, si p∤n alors E[n](𝔽̄ₚ) ≅ ℤ/nℤ × ℤ/nℤ aussi, mais les points peuvent ne pas être définis sur 𝔽ₚ lui-même."
          },
          {
            type: 'mcq',
            question: "L'endomorphisme de Frobenius φ_p: (x,y)↦(xᵖ,yᵖ) sur E/𝔽ₚ satisfait :",
            answers: ['φ_p²−t·φ_p+p = 0 dans End(E) où t = p+1−#E(𝔽ₚ) (équation caractéristique)', 'φ_p = identité', 'φ_p = [p]', 'φ_p a ordre fini p'],
            correct: 0,
            explanation: "Le Frobenius φ_p est un endomorphisme de E/𝔽̄ₚ satisfaisant l'équation caractéristique φ_p²−tφ_p+p=0 (analogue du polynôme caractéristique d'une matrice). Ici t est la trace de Frobenius. Sur 𝔽ₚ, φ_p = id, donc #E(𝔽ₚ) = ker(φ_p−1) = deg(φ_p−1) = p+1−t."
          },
          {
            type: 'mcq',
            question: "La conjecture (théorème) de Weil pour les courbes prouve que les valeurs propres α,β du Frobenius vérifient :",
            answers: ['|α| = |β| = √p (hypothèse de Riemann pour les courbes)', '|α| = p, |β| = 1', 'α = β = p', 'α, β ∈ ℝ'],
            correct: 0,
            explanation: "Les conjectures de Weil pour les courbes elliptiques (prouvées par Weil lui-même) : le polynôme L est L(T) = 1−tT+pT², et les racines inverses α,β = (t±√(t²−4p))/2 vérifient |α|=|β|=√p. C'est l'analogue de l'hypothèse de Riemann pour les courbes sur corps finis."
          }
        ],
        // Niveau 5
        [
          {
            type: 'mcq',
            question: "Le module de Tate T_ℓ(E) = lim←E[ℓⁿ] (limite projective) est un ℤ_ℓ-module libre de rang :",
            answers: ['2 (si ℓ ≠ car(K))', '1', 'g (genre)', 'infini'],
            correct: 0,
            explanation: "T_ℓ(E) = lim←_n E[ℓⁿ] ≅ ℤ_ℓ² est libre de rang 2 sur ℤ_ℓ (entiers ℓ-adiques), car E[ℓⁿ] ≅ (ℤ/ℓⁿℤ)² pour ℓ ≠ car(K). La représentation galoisienne ρ_ℓ: Gal(K̄/K) → GL₂(ℤ_ℓ) encodée par l'action sur T_ℓ(E) est fondamentale en théorie des nombres."
          },
          {
            type: 'mcq',
            question: "La représentation de Galois ρ_ℓ: Gal(ℚ̄/ℚ) → GL₂(ℤ_ℓ) associée à E est irréductible si et seulement si :",
            answers: ['E n\'a pas de multiplication complexe et ℓ est assez grand (théorème de Serre)', 'E est supersingulière', 'ℓ = 2', 'E a bonne réduction en ℓ'],
            correct: 0,
            explanation: "Serre (1972) a démontré que si E/ℚ est sans CM, alors ρ_ℓ est surjective (donc a fortiori irréductible) pour tout ℓ assez grand. L'ensemble des ℓ exceptionnels est fini mais sa détermination explicite est difficile. Pour E avec CM, ρ_ℓ est réductible (se restreint au corps CM)."
          },
          {
            type: 'mcq',
            question: "La conjecture de Birch et Swinnerton-Dyer (BSD) relie le rang de E(ℚ) à :",
            answers: ['L\'ordre d\'annulation de L(E,s) en s=1 : rang(E(ℚ)) = ords=1 L(E,s)', 'Le discriminant de E', 'Le nombre de points de torsion', 'La hauteur du générateur'],
            correct: 0,
            explanation: "BSD conjecture : ords=1 L(E,s) = rang(E(ℚ)). La partie faible : L(E,1)=0 ⟺ rang>0. La partie forte donne en plus la valeur de L(E,1)/L(E,1)_alg en termes de #Ш, #E_tors², Ω, R (régulateur), cp. C'est un des 7 problèmes du millénaire (Clay Institute, 1 million $)."
          },
          {
            type: 'mcq',
            question: "L'isogénie φ: E₁→E₂ est un morphisme de courbes elliptiques qui :",
            answers: ['Est un homomorphisme de groupes envoyant O₁ sur O₂, de noyau fini', 'N\'est pas un homomorphisme de groupes', 'A toujours noyau trivial', 'Est toujours un isomorphisme'],
            correct: 0,
            explanation: "Une isogénie φ: E₁→E₂ est un morphisme de variétés envoyant O₁ sur O₂ (donc automatiquement un homomorphisme de groupes par la théorie des courbes elliptiques). Son noyau ker(φ) est un sous-groupe fini de E₁. Le degré de φ = #ker(φ) pour les isogénies séparables."
          },
          {
            type: 'input',
            visual: 'End(E)',
            question: "Sur ℂ, End(E) contient toujours ℤ (via [n]). Si End(E) ⊋ ℤ, on dit que E a multiplication complexe par quel type d'anneau ?",
            correct: 'ordre dans un corps quadratique imaginaire',
            explanation: "Si End(E) ⊋ ℤ sur ℂ, alors End(E)⊗ℚ est un corps quadratique imaginaire K=ℚ(√−d) (d>0). Plus précisément End(E) est un ordre dans K, c'est-à-dire un sous-anneau de rang 2 sur ℤ dans K. La multiplication complexe (CM) est une structure très rigide qui donne des propriétés arithmétiques profondes."
          },
          {
            type: 'mcq',
            question: "L'anneau End(E) pour E sans CM sur ℂ est :",
            answers: ['ℤ uniquement', 'Un corps de nombres', 'Une algèbre de quaternions', 'ℤ[i]'],
            correct: 0,
            explanation: "Pour une courbe elliptique générique (sans CM) sur ℂ, End(E) = ℤ : les seuls endomorphismes sont les multiplications entières [n]. La raison géométrique : E = ℂ/Λ, et un endomorphisme φ doit satisfaire φ(Λ) ⊂ Λ, ce qui force φ ∈ ℤ sauf si Λ a des symétries supplémentaires (cas CM)."
          },
          {
            type: 'mcq',
            question: "Le théorème de Mordell-Weil stipule que E(K) pour K corps de nombres est :",
            answers: ['Un groupe abélien de type fini : E(K) ≅ ℤʳ ⊕ E(K)_tors', 'Toujours fini', 'Toujours infini', 'Isomorphe à ℝ²'],
            correct: 0,
            explanation: "Mordell (1922, pour K=ℚ), Weil (1928, général) : E(K) est de type fini, c'est-à-dire isomorphe à ℤʳ ⊕ T où r = rang(E(K)) ≥ 0 et T = E(K)_tors est fini. La preuve utilise une descente (2-descente ou ℓ-descente) et la théorie de la hauteur de Néron-Tate."
          },
          {
            type: 'mcq',
            question: "La hauteur de Néron-Tate ĥ: E(ℚ)→ℝ≥0 est caractérisée par :",
            answers: ['ĥ(P) = lim_{n→∞} h([2ⁿ]P)/4ⁿ et ĥ est une forme quadratique sur E(ℚ)⊗ℝ', 'ĥ(P) = |x(P)|', 'ĥ(P) = log(#E_tors)', 'ĥ(P) = rang(E)'],
            correct: 0,
            explanation: "La hauteur canonique de Néron-Tate est ĥ(P) = lim_{n→∞} h([2ⁿ]P)/4ⁿ où h est la hauteur naïve h(x/z) = max(log|x|,log|z|). Elle vérifie ĥ([n]P) = n²ĥ(P) et induit une forme bilinéaire ⟨P,Q⟩ = (ĥ(P+Q)−ĥ(P)−ĥ(Q))/2. Le régulateur R = det(⟨Pᵢ,Pⱼ⟩) apparaît dans BSD."
          },
          {
            type: 'mcq',
            question: "L'algorithme de Miller pour le calcul du couplage de Weil a une complexité de :",
            answers: ['O((log n)·M(p)) où M(p) est le coût d\'une multiplication dans 𝔽ₚ', 'O(n)', 'O(p²)', 'O(√p·log p)'],
            correct: 0,
            explanation: "L'algorithme de Miller (1986) calcule e_n(P,Q) par la méthode du double-and-add sur les fonctions rationnelles de Miller. Chaque étape coûte O(M(p)), et il y a O(log n) étapes, donc complexité totale O((log n)·M(p)) = O((log p)³) bits. C'est polynomial, permettant les applications cryptographiques."
          },
          {
            type: 'mcq',
            question: "La condition de supersingularité d'une courbe elliptique E/𝔽ₚ est équivalente à :",
            answers: ['t ≡ 0 (mod p) où t est la trace du Frobenius, et E[p] = {O} sur 𝔽̄ₚ', 't = 2√p', 'E(𝔽ₚ) = {O}', 'E est une droite'],
            correct: 0,
            explanation: "E est supersingulière ⟺ t ≡ 0 (mod p) ⟺ E[p](𝔽̄ₚ) = {O} (pas de p-torsion). Cela se produit pour environ 1/2 des courbes en moyenne. Les courbes supersingulières ont End(E)⊗ℚ = algèbre de quaternions. Elles sont importantes en post-quantum cryptographie (SIDH/SIKE, bien que SIKE ait été cassé en 2022)."
          }
        ],
        // =======================
        // ===== Niveau L1 =======
        // =======================
        [
          {
            type: 'mcq',
            question: "La loi formelle de groupe sur E est définie sur ℤ[a,b] par des formules polynomiales. La hauteur logarithmique du polynôme définissant x(P+Q) est :",
            answers: ['O(log p) bits pour des points sur 𝔽ₚ, permettant une arithmétique efficace', 'O(p) bits', 'O(1) toujours', 'Infinie sur ℚ'],
            correct: 0,
            explanation: "Les formules d'addition (x₃ = λ²−x₁−x₂, y₃ = λ(x₁−x₃)−y₁) impliquent des opérations dans 𝔽ₚ : additions, multiplications, inversions. Chaque élément de 𝔽ₚ a taille O(log p) bits. Les coordonnées projectives évitent les inversions coûteuses (en cryptographie, une inversion ≈ 10-30 multiplications)."
          },
          {
            type: 'mcq',
            question: "La géométrie des courbes elliptiques sur ℂ montre que la loi de groupe s'interprète via le théorème d'Abel-Jacobi comme :",
            answers: ['P+Q+R=O ⟺ P,Q,R sont les trois intersections d\'une droite avec E (comptées avec multiplicité), via Div⁰(E) ≅ E', 'P+Q = (P+Q)_coordonnées', 'Une simple addition vectorielle', 'La composition des transformations de Möbius'],
            correct: 0,
            explanation: "Le théorème d'Abel-Jacobi : l'application E → Pic⁰(E) = Div⁰(E)/div(f), P ↦ [P−O] est un isomorphisme de groupes. La loi P+Q = R signifie [P]+[Q]−[R]−[O] est un diviseur principal (div d'une fonction rationnelle). Cela rend la loi associative, commutatif et définit rigoureusement le groupe."
          },
          {
            type: 'mcq',
            question: "Dans la théorie des fonctions L, L(E,s) = ∏_p L_p(E,s)⁻¹ (produit eulérien). Pour p de bonne réduction, le facteur local est :",
            answers: ['L_p(E,s)⁻¹ = 1 − aₚp⁻ˢ + p¹⁻²ˢ où aₚ = p+1−#E(𝔽ₚ)', 'L_p(E,s)⁻¹ = 1/(1−p⁻ˢ)', 'L_p(E,s)⁻¹ = 1−p⁻ˢ', 'L_p(E,s)⁻¹ = (1−p⁻ˢ)²'],
            correct: 0,
            explanation: "Le facteur local en p de bonne réduction est (1−aₚp⁻ˢ+p¹⁻²ˢ)⁻¹ où aₚ = p+1−#E(𝔽ₚ). Cette forme vient du fait que le Frobenius φ_p a valeurs propres α,β avec α+β=aₚ et αβ=p. Donc L_p⁻¹ = (1−αp⁻ˢ)(1−βp⁻ˢ) = 1−aₚp⁻ˢ+pˡ⁻²ˢ."
          },
          {
            type: 'mcq',
            question: "Le théorème de Wiles (1995) prouvant le grand théorème de Fermat passe par :",
            answers: ['La correspondance de Shimura-Taniyama : toute courbe elliptique sur ℚ est modulaire (associée à une forme modulaire)', 'La descente infinie directe sur Fermat', 'La théorie des corps de classes', 'L\'algorithme de factorisation'],
            correct: 0,
            explanation: "La stratégie de Frey-Ribet-Wiles : si xⁿ+yⁿ=zⁿ (n≥3), la courbe de Frey E: y²=x(x−xⁿ)(x+yⁿ) serait elliptique avec des propriétés modulaires impossibles. Ribet (1990) prouve que la conjecture d'epsilon implique le Grand Théorème de Fermat. Wiles (1995) prouve la conjecture de Shimura-Taniyama (semi-stable), complété par Taylor-Wiles."
          },
          {
            type: 'mcq',
            question: "Les courbes de Shimura X₀(N) sont des courbes modulaires paramétrant :",
            answers: ['Les classes d\'isomorphisme de couples (E, C) où E est une courbe elliptique et C un sous-groupe cyclique d\'ordre N', 'Les courbes elliptiques de conducteur N', 'Les points de N-torsion uniquement', 'Les isogénies de degré N entre E et elle-même'],
            correct: 0,
            explanation: "X₀(N) = Γ₀(N)\\ℍ* est la courbe modulaire dont les points complexes paramètrent les couples (E,C) avec C⊂E[N] cyclique d'ordre N. Les points CM de X₀(N) correspondent aux courbes elliptiques avec CM. La théorie de la multiplication complexe décrit les points algébriques de X₀(N)."
          },
          {
            type: 'mcq',
            question: "La correspondance de Langlands pour GL₂ relie les représentations automorphes de GL₂(𝔸_ℚ) aux :",
            answers: ['Représentations galoisiennes ρ: Gal(ℚ̄/ℚ) → GL₂(ℚ_ℓ) (théorème de modularité = cas particulier)', 'Courbes de genre quelconque', 'Fonctions L de Riemann', 'Algèbres de Hecke uniquement'],
            correct: 0,
            explanation: "Le programme de Langlands (1967) prédit une correspondance profonde entre représentations automorphes de GL_n et représentations galoisiennes de dimension n. Pour n=2, le théorème de modularité (Wiles, Taylor-Wiles, Breuil-Conrad-Diamond-Taylor 2001) en est le cas le plus célèbre : toute ρ_ℓ(E) vient d'une forme modulaire."
          },
          {
            type: 'mcq',
            question: "Le rang analytique de E est défini comme ords=1 L(E,s). La parité de ce rang est contrôlée par :",
            answers: ['Le signe ε(E) = ±1 de l\'équation fonctionnelle de L(E,s) : si ε(E)=−1, le rang analytique est impair', 'La torsion de E', 'Le discriminant modulo 4', 'La trace de Frobenius en p=2'],
            correct: 0,
            explanation: "L'équation fonctionnelle L(E,2−s) = ε(E)·N^(s−1)·L(E,s) avec ε(E) = ±1. Si ε(E) = −1, alors L(E,1) = 0 forcément (car L(E,1) = −ε(E)·L(E,1)), donc le rang analytique est ≥ 1 (et impair). La parité de rang conjecture : rang(E(ℚ)) ≡ ords=1 L(E,s) (mod 2), prouvée dans de nombreux cas par Nekovář, Kim."
          },
          {
            type: 'mcq',
            question: "La théorie d'Iwasawa pour les courbes elliptiques étudie E(ℚ_∞) où ℚ_∞ = ℚ(μ_{p^∞}). La structure de E(ℚ_∞)⊗ℤ_p est :",
            answers: ['Un Λ-module de torsion (conjecturalement) où Λ = ℤ_p[[T]] est l\'algèbre d\'Iwasawa', 'Un ℤ_p-module libre de rang infini', 'Triviale', 'Isomorphe à ℤ_p^r'],
            correct: 0,
            explanation: "La conjecture principale d\'Iwasawa pour E relie la fonction L p-adique de E à la caractéristique du Λ-module de Selmer p-adique. Mazur conjectured (1972) que le groupe de Selmer Sel_{p^∞}(E/ℚ_∞) est un Λ-module cofiniment généré. Skinner-Urban (2014) ont prouvé une direction importante de la conjecture principale sous des hypothèses techniques."
          },
          {
            type: 'mcq',
            question: "Pour les applications en post-quantum cryptography, quelle structure est prometteuse après la rupture de SIDH/SIKE ?",
            answers: ['Les isogénies entre courbes ordinaires (CSIDH) et les protocoles basés sur les groupes de classes de corps quadratiques imaginaires', 'Les courbes supersingulières uniquement (SIDH)', 'Les réseaux euclidiens sans courbes elliptiques', 'Les polynômes de Legendre classiques'],
            correct: 0,
            explanation: "Après la rupture de SIKE en 2022 (par Castryck-Decru via isogénies spéciales), la recherche s'est tournée vers CSIDH (Castryck-Lange-Martindale-Panny-Renes 2018) basé sur l'action du groupe de classes cl(𝒪) sur les courbes ordinaires. CSIDH est conjecturalement résistant aux attaques quantiques sous l'hypothèse que le DLP dans cl(𝒪) est difficile."
          },
          {
            type: 'mcq',
            question: "La preuve du théorème de Fermat-Wiles utilise la déformation de représentations galoisiennes. Le résultat clé de Wiles est :",
            answers: ['R = T (l\'anneau de déformation universelle R est isomorphe à l\'algèbre de Hecke T), impliquant la modularité', 'La conjecture de Fermat directement', 'La finitude du groupe de Sha', 'Le théorème de Faltings uniquement'],
            correct: 0,
            explanation: "La stratégie de Wiles : construire un anneau de déformation R paramétrant les représentations galoisiennes et une algèbre de Hecke T agissant sur les formes modulaires. La magie est R=T (isomorphisme de critère numérique de Wiles-Taylor). Cela donne la modularité semi-stable. La preuve finale de la conjecture complète (Breuil-Conrad-Diamond-Taylor 2001) utilise des déformations potentielles."
          }
        ]
      ]
    },

    // ============================================================
    // NOTION 9 : Invariants modulaires
    // ============================================================
    {
      id: 'invariants-modulaires',
      label: 'Invariants modulaires',
      lesson: {
        formula: 'g₂ = 60·G₄(Λ), g₃ = 140·G₆(Λ), Δ = g₂³ − 27g₃²',
        text: 'Les invariants g₂ et g₃ d\'un réseau Λ caractérisent entièrement la courbe elliptique associée. Le discriminant Δ = g₂³ − 27g₃² est non-nul pour toute courbe non-dégénérée. L\'invariant j = 1728·g₂³/Δ classifie les courbes elliptiques à isomorphisme près.',
        example: 'Pour le réseau carré Λ = ℤ[i], g₃ = 0 et g₂ ≠ 0, donc j = 1728. Pour le réseau hexagonal Λ = ℤ[ω] (ω = e^(2πi/3)), g₂ = 0 et g₃ ≠ 0, donc j = 0.'
      },
      fullBlocks: [
        {
          type: 'definition',
          title: 'Séries d\'Eisenstein et invariants',
          text: 'Pour un réseau Λ = ω₁ℤ + ω₂ℤ, les séries d\'Eisenstein sont G_{2k}(Λ) = Σ_{(m,n)≠(0,0)} 1/(mω₁+nω₂)^{2k}. Les invariants de Weierstrass sont g₂ = 60·G₄ et g₃ = 140·G₆. Ils déterminent l\'équation y² = 4x³ − g₂x − g₃ de la courbe elliptique.'
        },
        {
          type: 'formula',
          title: 'Discriminant modulaire et invariant j',
          formula: 'Δ = g₂³ − 27g₃²,   j = 1728·g₂³/Δ',
          text: 'Le discriminant Δ mesure si la courbe est lisse : Δ ≠ 0 ⟺ la courbe est une vraie courbe elliptique (pas de singularité). L\'invariant j est l\'invariant classifiant : deux courbes elliptiques sur ℂ sont isomorphes si et seulement si elles ont même j-invariant.'
        },
        {
          type: 'demo',
          title: 'Propriété de modularité de Δ',
          text: 'La fonction Δ(τ) = (2π)¹²·η(τ)²⁴ où η est la fonction êta de Dedekind η(τ) = q^(1/24)∏(1−qⁿ) avec q=e^(2πiτ). Δ est une forme modulaire de poids 12 : Δ((aτ+b)/(cτ+d)) = (cτ+d)¹²·Δ(τ) pour (a b; c d) ∈ SL₂(ℤ). Elle n\'a pas de zéro dans ℍ et un zéro simple à l\'infini (q=0).'
        },
        {
          type: 'formula',
          title: 'Développement en q-série de j(τ)',
          formula: 'j(τ) = 1/q + 744 + 196884q + 21493760q² + …',
          text: 'Le j-invariant s\'exprime en série de Laurent en q = e^(2πiτ). Le coefficient 196884 est célèbre : McKay (1978) a remarqué que 196884 = 196883 + 1 où 196883 est la dimension de la représentation irréductible du plus petit degré du groupe Monstre M. C\'est l\'origine du "monstrous moonshine" (Conway-Norton, prouvé par Borcherds 1992).'
        },
        {
          type: 'graph',
          title: 'Domaine fondamental de SL₂(ℤ) dans ℍ',
          svgContent: '<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="250" fill="#f0f4ff"/><line x1="150" y1="10" x2="150" y2="240" stroke="#333" stroke-width="1.5" stroke-dasharray="4"/><line x1="10" y1="200" x2="290" y2="200" stroke="#333" stroke-width="2"/><text x="275" y="215" font-size="11">Re</text><text x="155" y="20" font-size="11">Im</text><path d="M100,200 A50,50 0 0,1 200,200" stroke="#3b82f6" stroke-width="2" fill="#dbeafe" fill-opacity="0.5"/><line x1="100" y1="10" x2="100" y2="200" stroke="#3b82f6" stroke-width="2"/><line x1="200" y1="10" x2="200" y2="200" stroke="#3b82f6" stroke-width="2"/><text x="140" y="130" font-size="12" fill="#1d4ed8">𝒟</text><text x="145" y="198" font-size="10" dy="15">0</text><text x="95" y="215" font-size="10">−1/2</text><text x="194" y="215" font-size="10">1/2</text><circle cx="150" cy="142" r="3" fill="#ef4444"/><text x="155" y="140" font-size="10" fill="#ef4444">i</text><circle cx="117" cy="171" r="3" fill="#10b981"/><text x="90" y="170" font-size="9" fill="#10b981">e^(2πi/3)</text></svg>',
          caption: 'Le domaine fondamental 𝒟 de SL₂(ℤ) : |τ|≥1 et |Re(τ)|≤1/2.',
          text: 'Chaque τ ∈ ℍ est équivalent sous SL₂(ℤ) à exactement un point de 𝒟 (sauf sur les bords). Les points spéciaux τ=i (j=1728) et τ=e^(2πi/3) (j=0) ont des stabilisateurs non-triviaux d\'ordre 2 et 3 respectivement.'
        },
        {
          type: 'example',
          title: 'Calcul pratique du j-invariant',
          text: 'Courbe E: y²=x³+x. Forme de Weierstrass y²=x³+ax+b avec a=1, b=0. Discriminant Δ = −16(4a³+27b²) = −16·4 = −64 ≠ 0 : courbe lisse. j = −1728·(4a)³/Δ = −1728·64/(−64) = 1728. Cohérent avec E ≅ ℂ/ℤ[i] (réseau carré).'
        },
        {
          type: 'warning',
          title: 'Conventions pour le discriminant',
          text: 'Attention : il existe deux conventions. La forme de Weierstrass courte y²=x³+ax+b donne Δ = −16(4a³+27b²). La forme longue donne un discriminant différent. Dans la convention avec ℘, l\'équation est y²=4x³−g₂x−g₃ et Δ = g₂³−27g₃². Les j-invariants coïncident : j = 1728·g₂³/Δ = −1728·(4a)³/Δ_courte.'
        }
      ],
      levels: [
        // Niveau 1
        [
          {
            type: 'mcq',
            question: "Le j-invariant d'une courbe elliptique est :",
            answers: ['Un nombre complexe qui classifie la courbe à isomorphisme près sur ℂ', 'L\'équation de la courbe', 'Le nombre de points sur 𝔽ₚ', 'Le genre de la courbe'],
            correct: 0,
            explanation: "Le j-invariant j ∈ ℂ est l'invariant classifiant fondamental : deux courbes elliptiques sur ℂ sont isomorphes (biholomorphes) si et seulement si elles ont le même j. Tout j ∈ ℂ est réalisé par une courbe elliptique. Sur un corps algébriquement clos de caractéristique ≠ 2,3, même résultat."
          },
          {
            type: 'mcq',
            question: "Pour une courbe y²=x³+ax+b, le discriminant est :",
            answers: ['Δ = −16(4a³+27b²)', 'Δ = a³−27b²', 'Δ = 4a³+27b²', 'Δ = a²−4b'],
            correct: 0,
            explanation: "Le discriminant de y²=x³+ax+b est Δ = −16(4a³+27b²). La courbe est lisse (elliptique) si et seulement si Δ ≠ 0. Si Δ=0, le polynôme x³+ax+b a une racine double, donnant un nœud ou une cuspide."
          },
          {
            type: 'mcq',
            question: "La courbe y²=x³+x a pour j-invariant :",
            answers: ['1728', '0', '−1728', '∞'],
            correct: 0,
            explanation: "Pour y²=x³+x : a=1, b=0. Δ = −16·4 = −64. j = −1728·(4·1)³/(−64) = −1728·64/(−64) = 1728. Ce j=1728 correspond à la courbe avec multiplication complexe par ℤ[i]."
          },
          {
            type: 'mcq',
            question: "La courbe y²=x³+1 a pour j-invariant :",
            answers: ['0', '1728', '−1728', '64'],
            correct: 0,
            explanation: "Pour y²=x³+1 : a=0, b=1. Δ = −16·27 = −432. j = −1728·0/Δ = 0. Ce j=0 correspond à la courbe avec multiplication complexe par ℤ[e^(2πi/3)] (anneau d\'Eisenstein)."
          },
          {
            type: 'input',
            visual: 'Δ',
            question: "Calculez le discriminant de y²=x³−1 (a=0, b=−1). Formule : Δ=−16(4a³+27b²).",
            correct: '−432',
            explanation: "Avec a=0, b=−1 : Δ = −16(4·0+27·1) = −16·27 = −432. Ce discriminant est non-nul, donc la courbe est lisse. Notez que j = −1728·0/Δ = 0, identique à y²=x³+1 (les deux courbes sont isomorphes sur ℂ car même j)."
          },
          {
            type: 'mcq',
            question: "Si Δ = 0, la courbe y²=x³+ax+b est :",
            answers: ['Singulière (possède un nœud ou une cuspide), pas une courbe elliptique', 'Une courbe elliptique dégénérée encore valide', 'Une droite', 'Un cercle'],
            correct: 0,
            explanation: "Δ=0 ⟺ le polynôme x³+ax+b a une racine multiple ⟺ la courbe a une singularité. Si la racine est double : nœud (deux tangentes distinctes). Si triple : cuspide (une seule tangente). Dans les deux cas, ce n\'est plus une courbe elliptique au sens propre (pas de structure de groupe lisse)."
          },
          {
            type: 'mcq',
            question: "La série de q-développement de j(τ) commence par :",
            answers: ['j(τ) = q⁻¹ + 744 + 196884q + …', 'j(τ) = q + 744 + …', 'j(τ) = 1728 + q⁻¹ + …', 'j(τ) = Σ qⁿ'],
            correct: 0,
            explanation: "Le j-invariant, vu comme fonction de τ ∈ ℍ via le réseau ℤ+τℤ, a le développement j(τ) = e^{−2πiτ} + 744 + 196884e^{2πiτ} + … = q⁻¹+744+196884q+… avec q=e^{2πiτ}. Le coefficient 744 provient de la normalisation. Le terme q⁻¹ montre que j a un pôle en τ=i∞."
          },
          {
            type: 'mcq',
            question: "Deux courbes elliptiques sur ℂ avec le même j-invariant sont :",
            answers: ['Isomorphes sur ℂ', 'Identiques (même équation)', 'Isogènes mais pas nécessairement isomorphes', 'Toujours définies sur ℚ'],
            correct: 0,
            explanation: "Sur ℂ (ou tout corps algébriquement clos de car≠2,3), j(E₁)=j(E₂) ⟺ E₁≅E₂. Sur ℚ, même j ne garantit pas l\'isomorphisme sur ℚ : des twists quadratiques E_d: dy²=x³+ax+b ont le même j mais peuvent être non-isomorphes sur ℚ."
          },
          {
            type: 'mcq',
            question: "L'invariant g₂ d'un réseau Λ est défini par :",
            answers: ['g₂ = 60·Σ_{ω∈Λ\\{0}} ω⁻⁴', 'g₂ = Σ ω⁻²', 'g₂ = 140·Σ ω⁻⁶', 'g₂ = ∫ dω'],
            correct: 0,
            explanation: "g₂(Λ) = 60·G₄(Λ) = 60·Σ_{ω∈Λ\\{0}} ω⁻⁴. C'est une série de Laurent convergente (absolument pour 2k>2, donc G₄ converge). De même g₃ = 140·G₆ = 140·Σ ω⁻⁶. Ces invariants déterminent l\'équation différentielle (℘')²=4℘³−g₂℘−g₃."
          },
          {
            type: 'mcq',
            question: "Le discriminant modulaire Δ(τ) en tant que forme modulaire a :",
            answers: ['Poids 12, aucun zéro dans ℍ, un zéro simple à i∞', 'Poids 6, un zéro en τ=i', 'Poids 12 avec des zéros dans ℍ', 'Poids 0 (fonction modulaire)'],
            correct: 0,
            explanation: "Δ(τ) est la forme modulaire parabolique de poids 12 et niveau 1. La formule du produit Δ = (2π)¹²q∏(1−qⁿ)²⁴ montre que Δ n\'a pas de zéro dans ℍ (les facteurs (1−qⁿ) ne s\'annulent pas pour |q|<1) et un zéro simple en q=0 (τ=i∞). C\'est la base de M₁₂(SL₂(ℤ))."
          }
        ],
        // Niveau 2
        [
          {
            type: 'mcq',
            question: "La fonction η de Dedekind est définie par η(τ) = q^(1/24)·∏_{n≥1}(1−qⁿ). Δ(τ) vaut :",
            answers: ['Δ(τ) = (2π)¹²·η(τ)²⁴', 'Δ(τ) = η(τ)¹²', 'Δ(τ) = η(τ)²⁴', 'Δ(τ) = (2πi)⁶·η(τ)¹²'],
            correct: 0,
            explanation: "La relation Δ(τ) = (2π)¹²·η(τ)²⁴ = (2π)¹²·q·∏(1−qⁿ)²⁴ est une identité fondamentale. Elle prouve que Δ est non-nul dans ℍ. La loi de transformation de η: η(τ+1)=e^(iπ/12)η(τ) et η(−1/τ)=√(−iτ)·η(τ) implique que Δ est modulaire de poids 12."
          },
          {
            type: 'mcq',
            question: "L'espace des formes modulaires M_k(SL₂(ℤ)) de poids k est de dimension :",
            answers: ['⌊k/12⌋ si k≡2 (mod 12), ⌊k/12⌋+1 sinon (pour k≥0 pair)', 'k/12', 'k', '∞'],
            correct: 0,
            explanation: "La dimension de M_k(SL₂(ℤ)) : dim M_k = ⌊k/12⌋ pour k≡2 (mod 12), et ⌊k/12⌋+1 sinon. Exemples : dim M₄=1 (engendré par G₄), dim M₆=1 (G₆), dim M₈=1 (G₄²), dim M₁₀=1, dim M₁₂=2 (G₄³ et G₆², avec Δ=base de l'espace cuspidal S₁₂)."
          },
          {
            type: 'mcq',
            question: "Le moonshine monstrueux de McKay-Conway-Norton observe que les coefficients de j(τ)−744 sont des dimensions de représentations du groupe :",
            answers: ['Le groupe Monstre M (le plus grand groupe simple sporadique, d\'ordre ≈ 8×10⁵³)', 'Le groupe symétrique S_n', 'GL₂(𝔽₂)', 'SL₂(ℤ)'],
            correct: 0,
            explanation: "McKay (1978) observe 196884 = 196883+1 où 196883 = dim de la plus petite représentation non-triviale du Monstre M. Conway-Norton formulent la conjecture du moonshine monstrueux (1979) : les coefficients cₙ de j−744 = Σcₙqⁿ sont des dimensions de représentations de M. Borcherds (1992) prouve cette conjecture via les algèbres de Lie vertex."
          },
          {
            type: 'mcq',
            question: "La transformation τ ↦ τ+1 agit sur j(τ) par :",
            answers: ['j(τ+1) = j(τ) (j est périodique de période 1)', 'j(τ+1) = j(τ)+1', 'j(τ+1) = e^(2πi)·j(τ)', 'j(τ+1) = j(τ)²'],
            correct: 0,
            explanation: "j est invariant sous SL₂(ℤ), donc j((aτ+b)/(cτ+d)) = j(τ). En particulier pour (a b; c d) = (1 1; 0 1): j(τ+1) = j(τ). La périodicité de j en τ est la raison pour laquelle j admet un développement en q = e^{2πiτ} (série de Fourier en τ)."
          },
          {
            type: 'mcq',
            question: "La transformation τ ↦ −1/τ agit sur j(τ) par :",
            answers: ['j(−1/τ) = j(τ)', 'j(−1/τ) = −j(τ)', 'j(−1/τ) = 1/j(τ)', 'j(−1/τ) = j(τ)+1728'],
            correct: 0,
            explanation: "La matrice (0 −1; 1 0) ∈ SL₂(ℤ) agit par τ ↦ −1/τ. Comme j est invariant sous SL₂(ℤ), j(−1/τ) = j(τ). Les deux transformations τ↦τ+1 et τ↦−1/τ engendrent SL₂(ℤ), donc il suffit de vérifier l\'invariance sur ces deux générateurs."
          },
          {
            type: 'input',
            visual: 'j(i)',
            question: "Que vaut j(i) ? Indice : le réseau ℤ+iℤ est carré, g₃=0, j=1728·g₂³/Δ.",
            correct: '1728',
            explanation: "Pour τ=i, le réseau Λ=ℤ+iℤ est le réseau carré. Par symétrie, G₆(Λ)=0 (la somme Σω⁻⁶ est nulle par symétrie ω↦iω d'ordre 4), donc g₃=0. Alors Δ=g₂³−0=g₂³ et j=1728·g₂³/g₂³=1728. La courbe correspondante est y²=x³−x avec multiplication complexe par ℤ[i]."
          },
          {
            type: 'mcq',
            question: "Les formes modulaires de poids k sont reliées aux courbes elliptiques par :",
            answers: ['Les formes de poids 2 étant les différentielles holomorphes de degré 1 sur X₀(N)', 'Les formes de poids 12 étant les coordonnées de E', 'Uniquement par le j-invariant', 'Les formes de poids 4 définissant les périodes'],
            correct: 0,
            explanation: "Les formes modulaires f(τ) de poids 2 sur Γ₀(N) correspondent aux formes différentielles holomorphes f(τ)dτ sur la courbe modulaire X₀(N). La dimension de S₂(Γ₀(N)) égale le genre de X₀(N). Les courbes elliptiques modulaires (théorème de Wiles) sont associées à des newforms de poids 2 et niveau N (le conducteur)."
          },
          {
            type: 'mcq',
            question: "Le théorème de la valence pour M_k(SL₂(ℤ)) stipule que Σ_P ord_P(f)/e_P = k/12, où la somme est sur :",
            answers: ['Les points du domaine fondamental avec ord_i multiplié par 1/2, ord_ρ par 1/3, et ord_∞ compté normalement', 'Tous les zéros de f dans ℍ', 'Les pôles de f uniquement', 'Les points de torsion'],
            correct: 0,
            explanation: "La formule de valence : ord_∞(f) + ord_i(f)/2 + ord_ρ(f)/3 + Σ_{P≠i,ρ,∞} ord_P(f) = k/12 (où ρ = e^{2πi/3}). Les facteurs 1/2 et 1/3 viennent des stabilisateurs d\'ordre 2 et 3 de i et ρ dans PSL₂(ℤ). Cette formule détermine les dimensions des espaces M_k."
          },
          {
            type: 'mcq',
            question: "Les séries d\'Eisenstein normalisées Eₖ(τ) = 1 − (2k/Bₖ)·Σ σ_{k-1}(n)qⁿ (Bₖ = nombre de Bernoulli) sont :",
            answers: ['Des formes modulaires de poids k sur SL₂(ℤ) pour k≥4 pair', 'Des formes paraboliques', 'Des fonctions sans interprétation géométrique', 'Des formes non-holomorphes'],
            correct: 0,
            explanation: "E₄(τ) = 1+240Σσ₃(n)qⁿ et E₆(τ) = 1−504Σσ₅(n)qⁿ sont les formes d\'Eisenstein normalisées, bases de M₄ et M₆. On a j(τ) = E₄(τ)³/Δ(τ). Les coefficients σₖ(n) = Σ_{d|n} dᵏ sont des fonctions arithmétiques (sommes de diviseurs), montrant le lien profond entre formes modulaires et théorie des nombres."
          },
          {
            type: 'mcq',
            question: "Le j-invariant d\'une courbe elliptique sur ℚ est :",
            answers: ['Un nombre rationnel (j ∈ ℚ)', 'Toujours entier', 'Toujours dans ℝ\\ℚ', 'Toujours dans ℤ'],
            correct: 0,
            explanation: "Si E est définie sur ℚ, alors j(E) ∈ ℚ. Exemple : y²=x³−x a j=1728 ∈ ℚ. Réciproquement, tout j ∈ ℚ est le j-invariant d\'une courbe définie sur ℚ (mais les twists peuvent avoir différentes propriétés arithmétiques). Si j ∈ ℤ, on parle de j-invariant entier, lié aux courbes CM ou à bonne réduction partout."
          }
        ],
        // Niveau 3
        [
          {
            type: 'mcq',
            question: "Le développement de Weierstrass de ℘ en q (nome q = e^{2πiτ}) est :",
            answers: ['℘(z,τ) = (2πi)²[1/12 + Σ_{n=1}^∞ σ(n)qⁿ + Σ... ] (formule de Fourier)', 'Un polynôme en z', '℘(z,τ) = sin(z)/z', '℘ ne s\'exprime pas en q'],
            correct: 0,
            explanation: "℘(z,τ) = (2πi)²[−1/12 + Σ_{n=−∞}^∞ (z+nτ)^{−2}/(2πi)²...] admet un développement en série de Fourier faisant intervenir les nomes qⁿ. Plus précisément : ℘(z) = (π/ω₁)²[1/(sin²(πz/ω₁)) − (1/3) + Σ...]. Ces développements sont essentiels pour les calculs numériques."
          },
          {
            type: 'mcq',
            question: "La relation de Chowla-Selberg exprime les périodes de courbes elliptiques à CM en termes de :",
            answers: ['Valeurs de la fonction Γ d\'Euler en points rationnels Γ(a/f) pour a,f entiers', 'Valeurs de ζ de Riemann', 'Intégrales gaussiennes seulement', 'Valeurs de sin et cos'],
            correct: 0,
            explanation: "La formule de Chowla-Selberg (1949) : si E a CM par ℤ[√−d], la période ω₁ de E est une combinaison de produits de Γ(a/f) pour f = conducteur du corps quadratique. Exemple : la lemniscate ω = 2K(1/√2) = Γ(1/4)²/(2√π) (identité due à Gauss). Ces formules sont fondamentales en théorie des périodes."
          },
          {
            type: 'mcq',
            question: "Le discriminant minimal d\'une courbe elliptique sur ℚ est :",
            answers: ['L\'unique modèle de Weierstrass minimal (|Δ_min| le plus petit possible) sur ℤ, lié au conducteur', 'Le même que Δ = g₂³−27g₃²', 'Toujours égal à 1', 'Le discriminant du corps de définition'],
            correct: 0,
            explanation: "Le modèle de Weierstrass minimal sur ℤ_p correspond à la réduction de E mod p avec |Δ|_p maximal. Le discriminant minimal Δ_min = ∏_p p^{f_p} (f_p = exposant en p) encode le type de réduction de E en chaque p. Ogg-Saito : log|Δ_min| = Σ_p f_p·log p avec f_p relié au conducteur et la représentation galoisienne."
          },
          {
            type: 'mcq',
            question: "Le conducteur N d\'une courbe elliptique E/ℚ est :",
            answers: ['N = ∏_p p^{fₚ} où fₚ = 0 si bonne réduction, 1 si mauvaise réduction multiplicative, ≥2 si additive', 'N = Δ', 'N = j(E)', 'N = #E_tors'],
            correct: 0,
            explanation: "Le conducteur mesure la mauvaise réduction. fₚ = 0 (bonne réduction), fₚ = 1 (réduction multiplicative déployée/non-déployée : nœud), fₚ ≥ 2 (réduction additive : cuspide, fₚ = 2+δₚ avec δₚ swan-conducteur). L\'équation fonctionnelle de L(E,s) fait intervenir N : L(E,2−s) = ε·N^{s−1}·L(E,s)."
          },
          {
            type: 'input',
            visual: 'j',
            question: "La courbe y²=x³ a un discriminant Δ=0. Est-ce une courbe elliptique ? (oui/non)",
            correct: 'non',
            explanation: "y²=x³ a Δ = −16(4·0+27·0) = 0 (avec a=b=0). Le discriminant est nul : le polynôme x³ a une racine triple en 0, donnant une cuspide en (0,0). Ce n\'est pas une courbe elliptique (pas lisse), mais une courbe rationnelle singulière. Son groupe de points non-singuliers est isomorphe à (ℂ,+)."
          },
          {
            type: 'mcq',
            question: "La notion de courbe de Tate sur ℚₚ (corps p-adique) avec |j|_p > 1 donne une uniformisation :",
            answers: ['E(ℚₚ) ≅ ℚₚ*/qℤ où q ∈ pℤₚ est le paramètre de Tate (j(q) = q⁻¹+744+…)', 'E(ℚₚ) ≅ ℤₚ²', 'E(ℚₚ) ≅ ℚₚ/ℤₚ', 'E(ℚₚ) est fini'],
            correct: 0,
            explanation: "La courbe de Tate (1959) : si |j(E)|_p > 1, il existe q ∈ ℚₚ* avec |q|_p < 1 tel que E(ℚₚ) ≅ ℚₚ*/q^ℤ (analogue p-adique de ℂ*/q^ℤ ≅ E(ℂ)). Le paramètre q vérifie j(q) = q⁻¹+744+… = j(E). Cette uniformisation est l\'analogue p-adique de l\'uniformisation complexe et est fondamentale dans la théorie des représentations galoisiennes."
          },
          {
            type: 'mcq',
            question: "La formule de masse de Brauer-Siegel pour les corps quadratiques imaginaires donne la taille asymptotique de cl(ℚ(√−d)) comme :",
            answers: ['h(-d) ≈ π√d/(3·w·log(d)) → ∞ quand d→∞ (h = nombre de classes, w = nb racines unité)', 'h(-d) = 1 toujours', 'h(-d) ≈ d', 'h(-d) ≤ 100'],
            correct: 0,
            explanation: "La formule analytique de Dirichlet : h(−d) = w√d·L(1,χ_{-d})/(2π) où χ_{-d} est le caractère de Kronecker. Par Siegel : L(1,χ_{-d}) ≫ d^{−ε} pour tout ε>0, donc h(−d) → ∞. Cela implique qu\'il n\'y a qu\'un nombre fini de d avec h(−d) = 1 (problème de Gauss, résolu par Stark et Baker 1967 via théorie des formes modulaires et logarithmes)."
          },
          {
            type: 'mcq',
            question: "La théorie de la multiplication complexe prédit que j(ℤ[√−d]) engendre :",
            answers: ['Le corps de classes de Hilbert de ℚ(√−d) : l\'extension abélienne maximale non-ramifiée', 'ℚ elle-même', 'Un corps de degré d', 'Une extension ramifiée'],
            correct: 0,
            explanation: "Kronecker, Weber, Hilbert, Takagi : si τ est un point CM de discriminant −d, alors j(τ) est un entier algébrique et ℚ(j(τ)) est le corps de classes de Hilbert H de K=ℚ(√−d). L\'extension H/K est abélienne de degré h(−d). C\'est la réalisation du 12ème problème de Hilbert pour les corps quadratiques imaginaires."
          },
          {
            type: 'mcq',
            question: "L\'identité g₂³ = Δ + 27g₃² (relation entre invariants) implique que Δ = 0 si et seulement si :",
            answers: ['g₂³ = 27g₃² (les invariants g₂,g₃ sont proportionnels d\'une façon précise)', 'g₂ = 0', 'g₃ = 0', 'g₂ = g₃'],
            correct: 0,
            explanation: "Δ = g₂³ − 27g₃², donc Δ=0 ⟺ g₂³ = 27g₃². Si g₂=0, Δ=−27g₃² qui est nul seulement si g₃=0. Si g₃=0, Δ=g₂³ nul seulement si g₂=0. La condition Δ=0 (avec (g₂,g₃)≠(0,0)) correspond à la courbe singulière. Le cas (g₂,g₃)=(0,0) correspond au réseau dégénéré."
          },
          {
            type: 'mcq',
            question: "L\'opérateur de Hecke Tₙ agit sur les formes modulaires de poids k par :",
            answers: ['(Tₙf)(τ) = n^{k−1}·Σ_{ad=n, 0≤b<d} d^{−k}·f((aτ+b)/d) (somme sur les matrices (a b; 0 d))', 'Tₙf = n·f', 'Tₙf = f(nτ)', 'Tₙf = Σf(τ+m)'],
            correct: 0,
            explanation: "L\'opérateur de Hecke Tₙ agit sur M_k via la moyenne sur les sous-réseaux d\'indice n. La normalisation donne que les newforms sont des vecteurs propres de tous les Tₙ. Pour une newform f = Σaₙqⁿ : Tₙf = aₙ·f. Les valeurs propres aₙ sont les coefficients de Fourier, encodant #E(𝔽ₙ) via aₚ = p+1−#E(𝔽ₚ)."
          }
        ],
        // Niveau 4
        [
          {
            type: 'mcq',
            question: "La forme modulaire Δ est une newform de niveau 1. Ses coefficients τ(n) (fonction de Ramanujan) vérifient :",
            answers: ['τ(mn) = τ(m)τ(n) si pgcd(m,n)=1 et |τ(p)| ≤ 2p^{11/2} (conjecture de Ramanujan, prouvée par Deligne)', 'τ(n) = n¹¹', 'τ(p) = p+1', 'τ(mn) = τ(m)+τ(n)'],
            correct: 0,
            explanation: "Δ(τ) = Σ_{n≥1} τ(n)qⁿ définit la fonction de Ramanujan. Elle est multiplicative (τ(mn)=τ(m)τ(n) si pgcd=1) et τ(pⁿ⁺¹) = τ(p)τ(pⁿ)−p¹¹τ(pⁿ⁻¹). La conjecture de Ramanujan |τ(p)| ≤ 2p^{11/2} a été prouvée par Deligne (1974) comme corollaire des conjectures de Weil pour les variétés algébriques."
          },
          {
            type: 'mcq',
            question: "L\'espace des formes cuspidales S₂(Γ₀(N)) et la courbe elliptique E/ℚ de conducteur N sont reliés par :",
            answers: ['E est associée à une newform f ∈ S₂(Γ₀(N)) avec aₚ(f) = p+1−#E(𝔽ₚ) pour tout p∤N', 'Aucun lien', 'S₂(Γ₀(N)) = E(ℚ)', 'dim S₂ = rang(E(ℚ))'],
            correct: 0,
            explanation: "C'est le théorème de modularité (Wiles + BCDT) : à toute E/ℚ de conducteur N correspond une newform f ∈ S₂(Γ₀(N)) normalisée avec aₚ(f) = aₚ(E) = p+1−#E(𝔽ₚ). La correspondance E ↔ f est une bijection entre classes d\'isogénie de courbes elliptiques sur ℚ et newforms de poids 2 à coefficients rationnels."
          },
          {
            type: 'mcq',
            question: "Le théorème de Gross-Zagier (1986) relie le rang de E/ℚ à :",
            answers: ['La dérivée L\'(E,1) ≠ 0 ⟺ le point de Heegner est d\'ordre infini dans E(K) pour K corps quadratique imaginaire approprié', 'Le discriminant de E', 'Les valeurs de j(E)', 'La torsion de E(ℚ)'],
            correct: 0,
            explanation: "Gross-Zagier : si E est modulaire de conducteur N et ords=1 L(E/K,s) = 1, alors la hauteur du point de Heegner yₖ ∈ E(K) est liée à L\'(E/K,1) ≠ 0. En particulier L\'(E,1)≠0 implique rang(E(ℚ)) ≥ 1 (via descente de Kolyvagin). Avec Kolyvagin, BSD est prouvée en rang 0 et 1."
          },
          {
            type: 'mcq',
            question: "La cohomologie de de Rham d\'une courbe elliptique E/ℂ donne H¹_DR(E) de dimension :",
            answers: ['2, avec une base formée de dz et dz̄ (ou ω = dx/y et η = x·dx/y)', '1', '4', 'g (genre)'],
            correct: 0,
            explanation: "Pour E de genre 1, H¹_DR(E) = H⁰(E,Ω¹) ⊕ H⁰(E,Ω̄¹) de dimension 2 sur ℂ. La base canonique est ω = dx/(2y) (forme différentielle holomorphe) et η = x·dx/(2y) (quasi-modulaire). Les périodes ∫_γ ω pour γ ∈ H₁(E,ℤ) donnent le réseau Λ. La structure de Hodge H¹_DR = F¹⊕F̄¹ est centrale en géométrie arithmétique."
          },
          {
            type: 'input',
            visual: 'dim',
            question: "Quelle est la dimension de l\'espace M₁₂(SL₂(ℤ)) des formes modulaires de poids 12 ? (Formule : dim = ⌊k/12⌋+1 si k≢2 mod 12)",
            correct: '2',
            explanation: "k=12 : 12 mod 12 = 0 ≠ 2, donc dim = ⌊12/12⌋+1 = 1+1 = 2. Base : {E₄³, E₆²} = {G₄³, G₆²} ou {E₁₂, Δ}. L\'espace cuspidal S₁₂ est de dimension 1, engendré par Δ. C\'est cohérent avec le fait que Δ est l\'unique forme parabolique de niveau 1 et poids 12 (à scalaire près)."
          },
          {
            type: 'mcq',
            question: "Le réseau de Néron (modèle de Néron) d\'une courbe elliptique E/ℤₚ est :",
            answers: ['Le schéma en groupe lisse sur Spec(ℤₚ) dont la fibre générique est E/ℚₚ, unique à isomorphisme unique près', 'Juste le groupe E(ℚₚ)', 'Le réseau Λ des périodes', 'Le modèle naïf y²=x³+ax+b sur ℤₚ'],
            correct: 0,
            explanation: "Le modèle de Néron (Néron 1964) est le schéma en groupe lisse ε/ℤₚ dont la fibre générique est E et qui satisfait la propriété universelle de Néron : tout morphisme d\'un schéma lisse vers E se factorise uniquement par ε. Sa fibre spéciale ε_𝔽ₚ peut être : E bonne réduction (lisse), ou groupe multiplicatif/additif si mauvaise réduction."
          },
          {
            type: 'mcq',
            question: "La hauteur de Faltings h_F(E) d\'une courbe elliptique est définie via :",
            answers: ['La norme L² de la forme différentielle dx/y sur le modèle de Néron, normalisée par log(2π)', 'La hauteur naïve des coefficients a,b', 'log|j(E)|', 'Le rang de E(ℚ)'],
            correct: 0,
            explanation: "La hauteur de Faltings h_F(E) = −(1/2)log‖ω‖² où ω = dx/(2y) et ‖ω‖² = i∫_E ω∧ω̄/(2π) = (Im τ)/π ·|ω₁|² pour E = ℂ/Λ. Elle satisfait h_F([n]E) = h_F(E) + (1/2)log(n²) et est semi-continue. La conjecture de Szpiro Δ_min ≪ N⁶ est équivalente à h_F(E) ≪ log N (lien avec l\'abc conjecture)."
          },
          {
            type: 'mcq',
            question: "Les représentations de Galois galoisiennes modulo ℓ ρ̄_ℓ: Gal(ℚ̄/ℚ)→GL₂(𝔽_ℓ) sont utiles pour :",
            answers: ['Détecter si E est modulaire (critère de Wiles : si ρ̄₃ ou ρ̄₅ est modulaire, E est modulaire)', 'Calculer #E(ℚ)', 'Trouver les zéros de L(E,s)', 'Calculer g₂,g₃'],
            correct: 0,
            explanation: "La stratégie de Wiles 3-5 trick : si ρ̄₃(E) est irréductible, il la relève à une représentation ρ₃ et prouve qu\'elle est modulaire en déformant. Si ρ̄₃ est réductible, il utilise ρ̄₅. L\'irréductibilité est vérifiable algorithmiquement. La modularité de ρ̄_ℓ pour un seul ℓ suffit (avec des conditions) pour déduire la modularité de E."
          },
          {
            type: 'mcq',
            question: "La conjecture de Szpiro (forme forte) affirme : pour tout ε>0, il existe C(ε) tel que :",
            answers: ['|Δ_min(E)| ≤ C(ε)·N(E)^{6+ε} pour toute courbe elliptique E/ℚ', '|Δ_min| ≤ N', 'Δ_min est borné', '|Δ_min| ≤ C·j(E)'],
            correct: 0,
            explanation: "La conjecture de Szpiro : Δ_min ≪_ε N^{6+ε}. Elle implique la conjecture abc de Masser-Oesterlé (et vice-versa via la courbe de Frey). Si a+b=c en entiers avec pgcd=1, abc implique max(|a|,|b|,|c|) ≤ C(ε)·rad(abc)^{1+ε}. Mochizuki (2012) affirme avoir prouvé abc via sa théorie IUT, mais la preuve reste controversée."
          },
          {
            type: 'mcq',
            question: "Le programme de Langlands géométrique (Frenkel-Ben-Zvi, Beilinson-Drinfeld) est la version géométrique qui relie :",
            answers: ['D-modules sur Bun_G (fibrés principaux sur une courbe) et représentations du groupe dual de Langlands Ĝ (Langlands géométrique)', 'Uniquement les courbes elliptiques', 'Les formes de Siegel seulement', 'La théorie des nœuds'],
            correct: 0,
            explanation: "Le programme de Langlands géométrique (Beilinson-Drinfeld, années 1990-2000) : la correspondance de Langlands s\'étend en une équivalence de catégories entre D-modules sur Bun_G(X) (fibrés G-principaux sur une courbe X/ℂ) et représentations du groupe de Langlands dual. C\'est l\'analogue géométrique du programme global. Ben-Zvi et Nadler ont recentré sur l\'aspect topologique."
          }
        ],
        // Niveau 5
        [
          {
            type: 'mcq',
            question: "La correspondance de Shimura-Taniyama-Weil (théorème de modularité complet) dit que pour toute E/ℚ de conducteur N :",
            answers: ['Il existe une surjection ϕ: X₀(N) → E (courbe modulaire vers E), de sorte que L(E,s) = L(f,s) pour f ∈ S₂(Γ₀(N)) newform', 'E est une courbe de genre 0', 'E(ℚ) est fini', 'E est isomorphe à une courbe de Fermat'],
            correct: 0,
            explanation: "Le théorème de modularité (Wiles 1995, complété par BCDT 2001) : toute E/ℚ est modulaire, i.e., il existe f = Σaₙqⁿ ∈ S₂(Γ₀(N)) newform avec aₚ = p+1−#E(𝔽ₚ). Équivalemment, il existe une surjection ϕ: X₀(N)→E, et les fonctions L coïncident : L(E,s) = L(f,s). La surjection ϕ est la paramétrisation modulaire."
          },
          {
            type: 'mcq',
            question: "La formule du produit pour Δ via les valeurs propres du Laplacien sur SL₂(ℤ)\\ℍ est reliée à :",
            answers: ['La fonction zêta de Selberg Z_Γ(s) = ∏_{p hyperbolic} ∏_{k≥0} (1−N(p)^{−s−k}) et la formule de trace de Selberg', 'La fonction ζ de Riemann uniquement', 'Les valeurs propres de l\'opérateur de Hecke Tₙ uniquement', 'Aucun lien avec le spectre'],
            correct: 0,
            explanation: "La fonction zêta de Selberg Z_Γ(s) est l\'analogue spectral de ζ(s). La formule de trace de Selberg relie la somme des valeurs propres du Laplacien hyperbolique Δ_hyp sur Γ\\ℍ aux longueurs des géodésiques fermées. Elle est l\'analogue de la formule explicite de Riemann. Les formes propres du Laplacien (formes de Maass) généralisent les formes modulaires holomorphes."
          },
          {
            type: 'mcq',
            question: "Le problème des 12ème de Hilbert demande de décrire les extensions abéliennes d\'un corps de nombres K via :",
            answers: ['Des valeurs spéciales de fonctions transcendantes (analogues du théorème de Kronecker-Weber qui décrit ℚ^ab via les racines de l\'unité e^{2πi/n})', 'Des équations polynomiales uniquement', 'Des formes quadratiques', 'La cohomologie de Galois'],
            correct: 0,
            explanation: "Le 12ème problème de Hilbert (Kronecker\'s Jugendtraum) : généraliser le théorème de Kronecker-Weber (ℚ^ab = ℚ(racines de l\'unité)) à tout corps de nombres. Solution pour K = ℚ(√−d) quadratique imaginaire : K^ab est engendré par les valeurs de j(τ) et de fonctions de torsion de courbes à CM par 𝒪_K. Problème ouvert pour K totalement réel ou général."
          },
          {
            type: 'mcq',
            question: "La fonction L de Hecke associée à un caractère de Grössencharakter ψ d\'un corps quadratique imaginaire K est :",
            answers: ['L(s,ψ) = Σ_{a⊂𝒪_K} ψ(a)·N(a)^{−s} (somme sur idéaux de 𝒪_K), et coïncide avec L(E,s) si E a CM par 𝒪_K', 'La même que ζ(s)', 'Une série de Dirichlet ordinaire', 'Un produit fini'],
            correct: 0,
            explanation: "Si E a CM par 𝒪_K, il existe un Grössencharakter ψ de K tel que L(E,s) = L(s,ψ)·L(s,ψ̄). Ce facteur est le carré de la fonction L de Hecke. Les propriétés analytiques de L(E,s) (continuation analytique, équation fonctionnelle) se déduisent alors de celles de L(s,ψ) via la théorie de Hecke des algèbres de Hecke et du principe de fonctorialité."
          },
          {
            type: 'input',
            visual: 'τ(2)',
            question: "Calculez τ(2) (fonction de Ramanujan). Δ = q − 24q² + … Que vaut τ(2) ?",
            correct: '−24',
            explanation: "Δ(τ) = Σ τ(n)qⁿ = q·∏(1−qⁿ)²⁴. En développant : Δ = q(1−q)²⁴(1−q²)²⁴... = q(1−24q+...)(1+...) = q − 24q² + ... Donc τ(1)=1, τ(2) = −24. La formule générale : τ(p) = ap(Δ) = (p+1−#?) n\'est pas une courbe elliptique mais τ(2)=−24 se lit directement sur le développement."
          },
          {
            type: 'mcq',
            question: "Le théorème de Faltings (ancienne conjecture de Mordell) affirme que toute courbe de genre g≥2 sur ℚ a :",
            answers: ['Un nombre fini de points rationnels', 'Infiniment de points rationnels', 'Pas de points rationnels du tout', 'Un nombre de points dépendant du genre'],
            correct: 0,
            explanation: "Faltings (1983) : si C/ℚ est une courbe lisse de genre g≥2, alors #C(ℚ) < ∞. La preuve utilise la théorie des hauteurs sur les variétés abéliennes. Pour les courbes elliptiques (genre 1), E(ℚ) peut être infini (rang>0). Pour la droite projective (genre 0), ℙ¹(ℚ) est infini. La courbe de Fermat xⁿ+yⁿ=zⁿ a genre (n−1)(n−2)/2 ≥ 2 pour n≥4, cohérent avec la finitude."
          },
          {
            type: 'mcq',
            question: "La période p-adique d\'une courbe elliptique (théorie de Fontaine) est un élément de :",
            answers: ['B_dR (anneau de de Rham de Fontaine), et la comparaison cristalline donne H¹_ét ⊗ B_crys ≅ H¹_crys ⊗ B_crys', 'ℚₚ seulement', 'ℤ_p', 'ℝ'],
            correct: 0,
            explanation: "La théorie p-adique de Hodge de Fontaine associe aux représentations de Gal(ℚ̄_p/ℚₚ) des modules filtrés. Pour E/ℚₚ, H¹_ét(E,ℚₚ) est une représentation de dimension 2, et elle est de de Rham : H¹_ét ⊗_{ℚₚ} B_dR ≅ D_dR(H¹_ét) ⊗_{ℚₚ} B_dR. La filtration de Hodge donne la décomposition Hodge : H¹_DR(E) = H^{0,1} ⊕ H^{1,0}."
          },
          {
            type: 'mcq',
            question: "La preuve de la conjecture de Sato-Tate (Taylor et al., 2006-2011) montre que pour E sans CM, la distribution des aₚ/2√p est :",
            answers: ['La mesure de Haar sur SU(2) : dμ = (2/π)sin²θ dθ pour aₚ = 2√p·cos θ', 'Uniforme sur [−1,1]', 'Concentrée en 0', 'Gaussienne'],
            correct: 0,
            explanation: "Sato-Tate : pour E/ℚ sans CM, si aₚ = 2√p·cos θₚ, alors les angles θₚ ∈ [0,π] s\'équidistribuent pour la mesure (2/π)sin²θ dθ (mesure de Haar de SU(2)). La preuve de Taylor (avec Clozel, Harris, Shepherd-Barron) utilise la symétrisation des représentations L-adiques et un théorème de type Tchebotarev pour GL_n."
          },
          {
            type: 'mcq',
            question: "La fonction L de Hasse-Weil L(E/K,s) pour E sur un corps de nombres K est :",
            answers: ['∏_v L_v(E,s)^{−1} (produit eulérien sur les places de K), avec équation fonctionnelle L(E/K,s)=ε·N^{2−s}L(E/K,2−s)', 'La même que L(E/ℚ,s) toujours', 'Un produit fini de polynômes', 'L(E/K,s) = ζ_K(s)·L(E/ℚ,s)'],
            correct: 0,
            explanation: "L(E/K,s) = ∏_v L_v(E/K,s) où le produit est sur toutes les places finies v de K (corps de nombres). Pour v de bonne réduction, L_v = det(1−N(v)^{−s}·Frob_v | T_ℓ(E))^{−1}. L\'équation fonctionnelle implique Λ(E/K,s) = ε·Λ(E/K,2−s) avec Λ = (N_{K/ℚ}(cond))^{s/2}·Γ_ℂ(s)^{[K:ℚ]}·L."
          },
          {
            type: 'mcq',
            question: "Le résultat de Kolyvagin (1988) utilisant les systèmes d\'Euler pour prouver :",
            answers: ['Si L(E,1)≠0 alors rang(E(ℚ))=0 et #Ш(E/ℚ) < ∞ (BSD prouvée en rang 0)', 'Que rang(E(ℚ)) peut être arbitrairement grand', 'La modularité de E', 'Que Ш est toujours trivial'],
            correct: 0,
            explanation: "Kolyvagin construit un système d\'Euler à partir des points de Heegner (sur les corps de classes du corps quadratique imaginaire K). Si L(E/K,1)≠0, le point de Heegner est de hauteur nulle → de torsion. Kolyvagin en déduit rang(E(ℚ))=0 et la finitude de Ш[p^∞] pour tout p. C\'est la seule preuve générale de BSD connue (en rang 0 et 1 via Gross-Zagier)."
          }
        ],
        // =======================
        // ===== Niveau L1 =======
        // =======================
        [
          {
            type: 'mcq',
            question: "La théorie d\'Arakelov pour les courbes elliptiques définit une géométrie sur Spec(ℤ) en compactifiant via :",
            answers: ['L\'ajout de la place archimedienne ∞ : on considère E comme objet sur Spec(ℤ)∪{∞}, avec métriques hermitiennes sur les fibrés de droites complexes', 'Uniquement les complétions p-adiques', 'La compactification de Bott-Samelson', 'Le topos étale'],
            correct: 0,
            explanation: "La géométrie d\'Arakelov (Arakelov 1974, Faltings 1984) : on équipe chaque fibré de droites ℒ sur un modèle arithmétique avec une métrique hermitienne ‖·‖_∞ à la place infinie. La hauteur d\'Arakelov d\'un point P ∈ E(K) est h_Ar(P) = Σ_v log‖s‖_v pour s une section de ℒ s\'annulant en P. Cela unifie les théories locales et globales des hauteurs."
          },
          {
            type: 'mcq',
            question: "L\'inégalité isopérimétrique de Bogomolov-Miyaoka-Yau pour les surfaces arithmétiques donne une borne sur :",
            answers: ['Les degrés des morphismes entre surfaces algébriques : c₁² ≤ 3c₂ (avec égalité pour les boules complexes)', 'Le nombre de points rationnels', 'Le rang du groupe de Néron-Severi', 'La hauteur de Faltings'],
            correct: 0,
            explanation: "Yau (1977) : pour une surface de type général sur ℂ, c₁² ≤ 3c₂. L\'égalité caractérise les quotients de la boule complexe B⁴ (variétés balliques). En géométrie arithmétique, Bogomolov et Miyaoka ont des analogues arithmétiques. Ces inégalités sont reliées à la conjecture abc et à la conjecture de Szpiro via la géométrie d\'Arakelov."
          },
          {
            type: 'mcq',
            question: "La conjecture de Bloch-Kato (Tamagawa number conjecture) relie #Ш à :",
            answers: ['Les valeurs spéciales L(E,1)/Ω et des termes locaux (nombres de Tamagawa cₚ), généralisant BSD', 'Le rang uniquement', 'j(E)', 'La hauteur de Néron-Tate'],
            correct: 0,
            explanation: "BSD partie forte : L(E,1)/Ω = #Ш · R · ∏cₚ / (#E_tors)² où Ω = période réelle, R = régulateur, cₚ = nombre de Tamagawa en p. La conjecture de Bloch-Kato (1990) généralise cela à tout motif M : L(M,0) = #H⁰_f(ℚ,M*)_tors · #H¹_f(ℚ,M)/[regulateur] /(#H⁰_f(ℚ,M)_tors)². Prouvée dans des cas spéciaux par Kato (2004) via systèmes de Beilinson-Kato."
          },
          {
            type: 'mcq',
            question: "Les formes automorphes pour GL₂ sur ℚ sont de deux types : formes holomorphes (Hecke) et :",
            answers: ['Formes de Maass (fonctions propres du Laplacien non-holomorphes, liées aux représentations de la série principale et complémentaire de GL₂(ℝ))', 'Formes de Siegel', 'Formes de Bianchi uniquement', 'Aucun autre type'],
            correct: 0,
            explanation: "Les représentations automorphes de GL₂(𝔸_ℚ) incluent : (1) les séries discrètes holomorphes (k≥1), dont les formes classiques de poids k ; (2) les formes de Maass u avec Δu = (1/4+r²)u (valeur propre 1/4+r², r∈ℝ ou iℝ), correspondant à la série principale ; (3) séries complémentaires. La conjecture de Ramanujan pour les formes de Maass (|r|∈ℝ, pas d\'exception de Ramanujan) est un problème ouvert majeur."
          },
          {
            type: 'mcq',
            question: "La correspondance de Jacquet-Langlands relie les représentations automorphes de GL₂ à celles de :",
            answers: ['D*_𝔸 où D est une algèbre de quaternions définie en un ensemble fini de places (via la fonctorialité de Langlands pour les changements d\'algèbre)', 'GL₁ uniquement', 'GL₃', 'Sp₄'],
            correct: 0,
            explanation: "Jacquet-Langlands (1970) : il y a une correspondance (lift) entre formes automorphes sur D*_𝔸 (unités d\'une algèbre de quaternions) et formes automorphes sur GL₂ qui sont nouvelles et ramifiées aux places où D est ramifiée. Cela permet de transférer des propriétés (modularité, BSD) entre les deux settings. C\'est un premier cas du principe de fonctorialité de Langlands."
          },
          {
            type: 'mcq',
            question: "Le programme modulaire étendu prédit que toute représentation galoisienne ρ: Gal(ℚ̄/ℚ)→GL_n(ℚ_ℓ) provenant d\'une variété algébrique est :",
            answers: ['Automorphe (associée à une représentation automorphe de GL_n(𝔸_ℚ)) — le cas n=2 et motifs de poids 1 (Artin representations) étant connu', 'Toujours irréductible', 'Une représentation de monodromie uniquement', 'Toujours localement algébrique'],
            correct: 0,
            explanation: "Le programme de Langlands global prédit pour n=2 : toute représentation de Galois ρ: Gal(ℚ̄/ℚ)→GL₂(ℤ_ℓ) venant d\'une courbe elliptique (théorème de modularité), d\'une forme de Hilbert, ou d\'une surface de Shimura est automorphe. Pour n=3 : les cas connus incluent les formes de Picard (GL₃(ℚ(i))). Le cas général reste ouvert et est le grand problème de la théorie des nombres."
          },
          {
            type: 'mcq',
            question: "La décomposition spectrale de L²(SL₂(ℤ)\\ℍ) (espace de Hilbert des fonctions automorphes) est :",
            answers: ['Spectre continu (séries d\'Eisenstein Eisenstein(s) pour s=1/2+it, t∈ℝ) + spectre discret (formes de Maass cuspidales + constantes)', 'Purement discret', 'Purement continu', 'Fini-dimensionnel'],
            correct: 0,
            explanation: "L\'espace L²(Γ\\ℍ) se décompose en : (1) constante 1 ; (2) spectre continu formé des séries d\'Eisenstein E(z,s) = Σ_{(c,d)=1} Im(γz)^s (paramétré par s=1/2+it) ; (3) spectre discret : formes cuspidales de Maass, vecteurs propres du Laplacien avec valeurs propres λ_n>0. La formule de Weyl N(T) = Vol(Γ\\ℍ)·T/4π + O(T) compte les valeurs propres."
          },
          {
            type: 'mcq',
            question: "L\'hypothèse de Riemann généralisée pour L(E,s) prédit que les zéros non-triviaux de L(E,s) se trouvent sur :",
            answers: ['La droite critique Re(s) = 1 (analogue de la droite Re(s)=1/2 pour ζ(s), décalée par la normalisation analytique)', 'La droite Re(s) = 1/2', 'Sur les entiers', 'Dans le demi-plan Re(s) < 0'],
            correct: 0,
            explanation: "L(E,s) est normalisée de sorte que l\'équation fonctionnelle relie s à 2−s. La droite critique est Re(s)=1 (point central). L\'hypothèse de Riemann généralisée (GRH) pour L(E,s) prédit que tous les zéros non-triviaux ont Re(s)=1. La BSD prédit l\'ordre d\'annulation en s=1 (zéros dus au rang), mais les zéros supplémentaires devraient être sur la droite critique."
          },
          {
            type: 'mcq',
            question: "La conjecture de Birch-Swinnerton-Dyer (BSD) sous forme analytique forte implique la formule :",
            answers: ['lim_{s→1} L(E,s)/(s−1)^r = C_BSD = Ω·R·∏cₚ·#Ш/(#E(ℚ)_tors)² (avec r=rang, termes algébriques et analytiques mêlés)', 'L(E,1) = 1 si rang=0', 'L(E,1) = #E(ℚ)', 'L(E,1) = Ω (période réelle)'],
            correct: 0,
            explanation: "BSD forte : le rang r = ords=1 L(E,s) et la constante L*(E,1) = lim(s−1)^{−r}L(E,s) vaut exactement Ω·R·∏_p cₚ·#Ш(E/ℚ)/(#E(ℚ)_tors)². Ici Ω = ∫_{E(ℝ)} |dx/y| (période réelle), R = det Hauteur-Néron-Tate (régulateur), cₚ = [E(ℚₚ):E₀(ℚₚ)] (nombre de Tamagawa). Cette formule n\'est prouvée que dans des cas très restreints."
          },
          {
            type: 'mcq',
            question: "Le programme d\'Iwasawa pour les courbes elliptiques relie L_p(E,s) p-adique à l\'annihilateur du :",
            answers: ['Groupe de Selmer p-adique Sel_{p^∞}(E/ℚ_cyc) vu comme Λ-module, via la conjecture principale d\'Iwasawa pour E (partiellement prouvée par Skinner-Urban, Wan)', 'Groupe de Mordell-Weil uniquement', 'Groupe de Tate-Shafarevich complexe', 'Discriminant minimal'],
            correct: 0,
            explanation: "La conjecture principale d\'Iwasawa (Mazur, 1972) : char_Λ(Sel(E/ℚ_∞)) = (L_p(E,T)) dans Λ = ℤ_p[[T]], où L_p est la fonction L p-adique interpolant L(E,χ,1)/Ω_p pour les caractères χ de conducteur p^n. Skinner-Urban (2014) prouvent une direction sous des hypothèses (E ordinaire en p, ρ̄_p irréductible, image de Galois assez grande). C\'est l\'analogue p-adique de BSD."
          }
        ]
      ]
    },

    // ============================================================
    // NOTION 10 : Applications modernes
    // ============================================================
    {
      id: 'applications-modernes',
      label: 'Applications modernes',
      lesson: {
        formula: 'ECDLP : étant donnés P, Q ∈ E(𝔽ₚ), trouver k tel que Q = [k]P',
        text: 'Les courbes elliptiques interviennent dans la cryptographie (ECDH, ECDSA), la factorisation des entiers (méthode de Lenstra), le grand théorème de Fermat (via la courbe de Frey), la théorie des formes modulaires et la géométrie algébrique. L\'ECDLP est supposé difficile, base de la sécurité ECDH.',
        example: 'La courbe secp256k1 (Bitcoin) est y²=x³+7 sur 𝔽ₚ (p ≈ 2²⁵⁶). Le groupe E(𝔽ₚ) a ordre premier n ≈ 2²⁵⁶. Pour 256 bits de sécurité, l\'ECDLP est actuellement infaisable en pratique.'
      },
      fullBlocks: [
        {
          type: 'definition',
          title: 'Problème du logarithme discret elliptique (ECDLP)',
          text: 'Le problème ECDLP est le suivant : étant donnés P, Q ∈ E(𝔽ₚ), trouver k ∈ ℤ tel que Q = [k]P = P+P+…+P (k fois). Le meilleur algorithme général (baby-step giant-step, Pollard ρ) est en O(√n) avec n = #E(𝔽ₚ), soit O(2^{128}) opérations pour une courbe de 256 bits — infaisable en pratique.'
        },
        {
          type: 'definition',
          title: 'Protocole ECDH (Diffie-Hellman elliptique)',
          text: 'Alice choisit un entier secret a et envoie A=[a]G à Bob. Bob choisit b secret et envoie B=[b]G. La clé partagée est K=[a]B=[b]A=[ab]G. Un espion voit G, A=aG, B=bG mais calculer abG à partir de ces seules données est le problème Diffie-Hellman elliptique (ECDHP), aussi difficile que ECDLP.'
        },
        {
          type: 'example',
          title: 'Courbe secp256k1 (Bitcoin)',
          text: 'Paramètres : p = 2²⁵⁶ − 2³² − 977, E: y²=x³+7 sur 𝔽ₚ, G = point générateur de coordonnées hexadécimales fixes, n = ordre de G (premier ≈ 2²⁵⁶). La clé privée est k ∈ [1,n−1], la clé publique est K=[k]G. La signature ECDSA produit (r,s) où r = x([k]G) mod n et s = k⁻¹(hash+r·privkey) mod n.'
        },
        {
          type: 'demo',
          title: 'Méthode de Lenstra (ECM) pour la factorisation',
          text: 'La méthode ECM (Elliptic Curve Method, Lenstra 1987) choisit une courbe elliptique aléatoire E/ℤ_N (N = nombre à factoriser) et calcule [B!]P pour un entier B "lisse". Si l\'ordre de P sur E(ℤ/pℤ) divise B! (p | N facteur cherché), la multiplication scalaire détecte p via un gcd. Complexité heuristique : L_p(1/2, √2) — sous-exponentielle en p mais exponentielle en N, optimal pour les facteurs moyens.'
        },
        {
          type: 'graph',
          title: 'Sécurité comparée : RSA vs ECDSA',
          svgContent: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="200" fill="#f8faff"/><text x="10" y="20" font-size="12" font-weight="bold">Bits sécurité</text><text x="160" y="20" font-size="12" font-weight="bold">RSA (bits)</text><text x="240" y="20" font-size="12" font-weight="bold">ECC (bits)</text><line x1="5" y1="25" x2="315" y2="25" stroke="#333" stroke-width="1"/><text x="10" y="45" font-size="11">80</text><text x="150" y="45" font-size="11">1024</text><text x="245" y="45" font-size="11">160</text><text x="10" y="65" font-size="11">112</text><text x="150" y="65" font-size="11">2048</text><text x="245" y="65" font-size="11">224</text><text x="10" y="85" font-size="11">128</text><text x="150" y="85" font-size="11">3072</text><text x="245" y="85" font-size="11">256</text><text x="10" y="105" font-size="11">192</text><text x="150" y="105" font-size="11">7680</text><text x="245" y="105" font-size="11">384</text><text x="10" y="125" font-size="11">256</text><text x="150" y="125" font-size="11">15360</text><text x="245" y="125" font-size="11">521</text><rect x="5" y="140" width="120" height="40" fill="#3b82f6" opacity="0.2" rx="4"/><text x="15" y="160" font-size="10" fill="#1d4ed8">ECC : clés plus courtes,</text><text x="15" y="175" font-size="10" fill="#1d4ed8">même sécurité</text></svg>',
          caption: 'Comparaison RSA vs ECC : à 128 bits de sécurité, ECC utilise des clés 12× plus courtes.',
          text: 'La compacité des clés ECC est cruciale pour les protocoles embarqués (IoT, cartes à puce, TLS 1.3).'
        },
        {
          type: 'technique',
          title: 'Test de primalité ECPP',
          text: 'L\'algorithme ECPP (Elliptic Curve Primality Proving, Goldwasser-Kilian, Atkin) prouve qu\'un entier N est premier en trouvant une courbe elliptique E sur ℤ/Nℤ dont le groupe de points a un ordre m avec un facteur premier q > N^{1/4}, et en exhibant un point P d\'ordre q. Si [m/q]P ≠ O mais [m]P = O, alors N est premier. Complexité probabiliste O((log N)⁵) — le meilleur test de primalité prouvé.'
        },
        {
          type: 'warning',
          title: 'Courbes vulnérables aux attaques',
          text: 'Certaines courbes sont à éviter : (1) courbes supersingulières (attaque MOV : réduction de ECDLP en DLP dans 𝔽_{p²}) ; (2) courbes anomales avec #E(𝔽ₚ)=p (attaque Smart-Satoh-Araki : ECDLP résolu en O(log p)) ; (3) courbes de Pohlig-Hellman (ordre avec petits facteurs). Les standards NIST/SEC vérifient ces critères de sécurité.'
        }
      ],
      levels: [
        // Niveau 1
        [
          {
            type: 'mcq',
            question: "ECDH signifie :",
            answers: ['Elliptic Curve Diffie-Hellman (protocole d\'échange de clés par courbes elliptiques)', 'Encryption Cipher with Discrete Hashing', 'Elliptic Curve Digital Hashing', 'Extended Cipher Diffie-Hellman'],
            correct: 0,
            explanation: "ECDH = Elliptic Curve Diffie-Hellman. C\'est l\'adaptation du protocole de Diffie-Hellman (1976) aux groupes de courbes elliptiques. La sécurité repose sur la difficulté de l\'ECDLP (Elliptic Curve Discrete Logarithm Problem)."
          },
          {
            type: 'mcq',
            question: "Dans ECDH, Alice envoie [a]G à Bob et Bob envoie [b]G à Alice. La clé partagée est :",
            answers: ['[ab]G (calculé par Alice comme [a]·([b]G) ou par Bob comme [b]·([a]G))', '[a+b]G', '[a·b]·G', 'G elle-même'],
            correct: 0,
            explanation: "Alice calcule [a]·([b]G) = [ab]G. Bob calcule [b]·([a]G) = [ab]G. Les deux arrivent au même point grâce à la bilinéarité de la multiplication scalaire. Un espion voit G, [a]G, [b]G mais ne peut pas calculer [ab]G (problème Diffie-Hellman elliptique, supposé difficile)."
          },
          {
            type: 'mcq',
            question: "Le grand avantage des courbes elliptiques en cryptographie par rapport à RSA est :",
            answers: ['Des clés beaucoup plus courtes pour le même niveau de sécurité (256 bits ECC ≈ 3072 bits RSA)', 'Un chiffrement plus facile à implémenter', 'Des clés infiniment longues', 'Une sécurité prouvée mathématiquement'],
            correct: 0,
            explanation: "À 128 bits de sécurité : RSA nécessite des clés de 3072 bits, ECC seulement 256 bits. Cette compacité est cruciale pour les systèmes embarqués (cartes à puce, IoT, TLS). La raison : l\'ECDLP résiste mieux que la factorisation aux algorithmes sous-exponentiels (crible algébrique)."
          },
          {
            type: 'mcq',
            question: "La courbe secp256k1 utilisée dans Bitcoin est définie par :",
            answers: ['y² = x³ + 7 sur 𝔽ₚ avec p = 2²⁵⁶ − 2³² − 977', 'y² = x³ + x', 'y² = x³ − x', 'y² = x³ + 3x + 7'],
            correct: 0,
            explanation: "secp256k1 : 'sec' = Standards for Efficient Cryptography, 'p256' = corps premier de 256 bits, 'k1' = Koblitz curve (coefficient a=0). L\'équation est y²=x³+7 (a=0, b=7). Le corps est 𝔽ₚ avec p = 2²⁵⁶ − 2³² − 2⁹ − 2⁸ − 2⁷ − 2⁶ − 2⁴ − 1 ≈ 1.16×10⁷⁷."
          },
          {
            type: 'mcq',
            question: "Le problème ECDLP consiste à :",
            answers: ['Trouver k tel que Q = [k]P, étant donnés P et Q sur E(𝔽ₚ)', 'Factoriser p', 'Calculer [2]P', 'Trouver l\'équation de la courbe'],
            correct: 0,
            explanation: "ECDLP : étant donnés un groupe (E(𝔽ₚ), +), un point générateur P et un point Q=[k]P, trouver l\'entier k. C\'est l\'analogue du logarithme discret dans 𝔽*_p, mais supposé beaucoup plus difficile (pas d\'algorithme sous-exponentiel connu pour ECDLP général)."
          },
          {
            type: 'input',
            visual: 'ECDLP',
            question: "Si E(𝔽ₚ) est un groupe cyclique d\'ordre n, combien de valeurs k ∈ [0,n−1] sont possibles comme logarithme discret d\'un point Q≠O ?",
            correct: 'n−1',
            explanation: "Pour Q ≠ O et P générateur d\'ordre n, il existe un unique k ∈ {1,...,n−1} tel que Q=[k]P (si Q∈⟨P⟩). Le problème ECDLP est de trouver ce k uniquement à partir de P et Q. Il y a n−1 valeurs non-nulles possibles."
          },
          {
            type: 'mcq',
            question: "L\'algorithme de Pollard ρ résout ECDLP sur un groupe d\'ordre n en :",
            answers: ['O(√n) opérations de groupe (Baby-step Giant-step similaire)', 'O(n) opérations', 'O(log n) opérations', 'O(n²) opérations'],
            correct: 0,
            explanation: "L\'algorithme de Pollard ρ (et Baby-step Giant-step) ont complexité O(√n) pour le logarithme discret dans tout groupe cyclique. Pour n ≈ 2²⁵⁶, √n ≈ 2¹²⁸, soit environ 3×10³⁸ opérations — infaisable même avec tous les ordinateurs du monde. C\'est pourquoi 256 bits ECC donne 128 bits de sécurité."
          },
          {
            type: 'mcq',
            question: "ECDSA (Elliptic Curve Digital Signature Algorithm) est utilisé pour :",
            answers: ['Signer numériquement des messages : prouver l\'authenticité et l\'intégrité sans révéler la clé privée', 'Chiffrer des messages', 'Générer des nombres aléatoires', 'Partager des clés uniquement'],
            correct: 0,
            explanation: "ECDSA permet à Alice (clé privée d) de signer un message m : elle calcule k aléatoire, r = x([k]G) mod n, s = k⁻¹(H(m)+d·r) mod n. La signature est (r,s). Bob vérifie avec la clé publique Q=[d]G en recalculant r et en vérifiant. La sécurité repose sur l\'ECDLP."
          },
          {
            type: 'mcq',
            question: "La méthode ECM de Lenstra (1987) utilise les courbes elliptiques pour :",
            answers: ['Factoriser des entiers en cherchant des facteurs p par des calculs sur E(ℤ/Nℤ) mod p', 'Tester la primalité de tout entier', 'Calculer des logarithmes discrets', 'Encoder des messages'],
            correct: 0,
            explanation: "ECM (Elliptic Curve Method) : choisir E aléatoire et P∈E(ℤ/Nℤ), calculer Q=[B!]P. Si l\'ordre de P dans E(𝔽_p) divise B!, alors [B!]P = O mod p, détectable par gcd. Heuristiquement optimal pour trouver des facteurs jusqu\'à 50-60 chiffres. Utilisé dans les implémentations GNFS et Cunningham."
          },
          {
            type: 'mcq',
            question: "La connexion entre le grand théorème de Fermat et les courbes elliptiques passe par :",
            answers: ['La courbe de Frey y²=x(x−aⁿ)(x+bⁿ) associée à une solution supposée aⁿ+bⁿ=cⁿ', 'Le groupe E(ℚ) ayant rang zéro', 'L\'invariant j de E', 'Le discriminant de E'],
            correct: 0,
            explanation: "Frey (1986) : si aⁿ+bⁿ=cⁿ (n≥3), la courbe E_a,b: y²=x(x−aⁿ)(x+bⁿ) aurait des propriétés modulaires impossibles. Ribet prouve que E_a,b ne peut pas être modulaire (si la conjecture d\'epsilon est vraie). Wiles prouve la modularité de toutes les courbes semi-stables, obtenant contradiction → pas de solution pour n≥3."
          }
        ],
        // Niveau 2
        [
          {
            type: 'mcq',
            question: "Le protocole TLS 1.3 (HTTPS) utilise principalement quelle courbe elliptique pour l\'échange de clés ?",
            answers: ['X25519 (courbe de Montgomery x²=x³+486662x²+x sur 𝔽_{2²⁵⁵−19}) ou P-256 (NIST)', 'secp256k1 (Bitcoin)', 'Ed25519 pour le chiffrement', 'Courbe de Fermat'],
            correct: 0,
            explanation: "TLS 1.3 supporte X25519 (Bernstein 2006, courbe de Bernstein y²=x³+486662x²+x sur 𝔽_p, p=2²⁵⁵−19) et X448. La forme de Montgomery permet une implémentation en temps constant (résistance aux attaques temporelles). P-256 (NIST) est aussi supporté mais X25519 est préféré pour les nouvelles implémentations."
          },
          {
            type: 'mcq',
            question: "L\'attaque MOV réduit l\'ECDLP sur les courbes supersingulières au :",
            answers: ['DLP dans 𝔽_{p^k} (corps fini d\'extension k small) via l\'accouplement de Weil ou Tate, rendant ECDLP sous-exponentiel', 'DLP dans 𝔽_p lui-même', 'Problème de factorisation', 'Problème de plus court chemin'],
            correct: 0,
            explanation: "MOV attack (Menezes-Okamoto-Vanstone 1993) : l\'accouplement de Weil e_n: E[n]×E[n]→μₙ ⊂ 𝔽*_{p^k} transporte le problème ECDLP dans E(𝔽_p) vers le DLP dans 𝔽*_{p^k}. Pour les courbes supersingulières, k=2 souvent, rendant le DLP faisable par crible. D\'où l\'interdiction des courbes supersingulières en cryptographie."
          },
          {
            type: 'mcq',
            question: "L\'attaque de Smart-Satoh-Araki résout ECDLP en O(log p) si :",
            answers: ['#E(𝔽ₚ) = p (courbe anomale, trace de Frobenius t=1)', '#E(𝔽ₚ) = p+1', '#E(𝔽ₚ) est premier', '#E est premier et ≈ p'],
            correct: 0,
            explanation: "Sur une courbe anomale (#E(𝔽ₚ)=p, trace t=1), l\'application de relèvement p-adique (lift de Hensel) permet de résoudre ECDLP via des divisions dans le groupe formel. La complexité est O(log p) — linéaire en la taille de p. C\'est une attaque dévastatrice, d\'où la vérification t≠1 dans tous les standards."
          },
          {
            type: 'mcq',
            question: "Le générateur de nombres pseudo-aléatoires Dual_EC_DRBG (NIST, 2006, retiré après 2013) était vulnérable car :",
            answers: ['La NSA pouvait avoir inséré une backdoor via le choix des points P,Q sur la courbe (ECDLP entre P et Q connu de la NSA seulement)', 'La courbe était supersingulière', 'Le modulus était trop petit', 'L\'algorithme était déterministe'],
            correct: 0,
            explanation: "Dual_EC_DRBG utilise deux points P,Q sur P-256. Si quelqu\'un connaît k tel que Q=[k]P (i.e., le logarithme discret), il peut prédire la sortie du générateur. Les révélations Snowden (2013) ont confirmé que la NSA avait probablement cette backdoor. NIST a retiré l\'algorithme en 2014. Cet épisode illustre l\'importance de la transparence dans les standards cryptographiques."
          },
          {
            type: 'mcq',
            question: "L\'algorithme ECPP pour la primalité prouve N premier en exhibant :",
            answers: ['Un point P ∈ E(ℤ/Nℤ) tel que [m]P = O et [m/q]P ≠ O avec q > √N premier (critère de Goldwasser-Kilian)', 'Un facteur de N', 'La courbe y²=x³ mod N', 'La représentation de N comme somme de deux carrés'],
            correct: 0,
            explanation: "Goldwasser-Kilian (1986) : choisir E sur ℤ/Nℤ, calculer m = #E. Si m = f·q (q premier > N^{1/2}) et si P ∈ E avec [m]P = O mais [m/q]P ≠ O, alors N est premier. La preuve utilise le théorème de Lagrange : si N était composé, le groupe E(ℤ/Nℤ) aurait des propriétés incompatibles avec ce point. ECPP produit un certificat de primalité vérifiable."
          },
          {
            type: 'input',
            visual: 'ECDSA',
            question: "Dans ECDSA, si un attaquant obtient deux messages signés avec le même k (nonce réutilisé), il peut récupérer quoi ?",
            correct: 'la clé privée',
            explanation: "Si (r,s₁) et (r,s₂) sont deux signatures (même k donc même r) de m₁ et m₂ : s₁−s₂ = k⁻¹(H(m₁)−H(m₂)), donc k = (H(m₁)−H(m₂))/(s₁−s₂) mod n. Puis la clé privée d = (s₁k−H(m₁))/r mod n. Cette attaque a compromis des wallets Bitcoin et la sécurité PS3 (Sony utilisait k=const)."
          },
          {
            type: 'mcq',
            question: "Les isogénies entre courbes elliptiques sont utilisées dans la cryptographie post-quantique via :",
            answers: ['CSIDH : action du groupe de classes de corps quadratique imaginaire sur les courbes ordinaires (résistant aux ordinateurs quantiques)', 'ECDH classique', 'Uniquement pour les courbes supersingulières (SIDH)', 'La méthode de Lenstra'],
            correct: 0,
            explanation: "CSIDH (Castryck-Lange-Martindale-Panny-Renes 2018) : le groupe de classes cl(𝒪) agit librement et transitivement sur les courbes ordinaires E/𝔽_p avec End(E) ≅ 𝒪. Un échange de clés type Diffie-Hellman s\'obtient en appliquant des idéaux aléatoires. Résistant aux algorithmes de Shor (qui casse RSA et ECC classique). SIDH a été cassé en 2022, mais CSIDH résiste."
          },
          {
            type: 'mcq',
            question: "Le protocole de partage de secret d\'identité IBE (Identity-Based Encryption) de Boneh-Franklin (2001) utilise :",
            answers: ['L\'accouplement de Weil/Tate sur des courbes supersingulières pour encoder l\'identité directement comme clé publique', 'RSA sur courbes elliptiques', 'ECDH classique', 'Courbes de Koblitz'],
            correct: 0,
            explanation: "IBE de Boneh-Franklin : la clé publique d\'Alice est simplement son identité (email) hash(ID). L\'autorité de confiance génère la clé privée s·P et donne s·H(ID) à Alice. Bob chiffre avec H(ID) et l\'accouplement e(H(ID),s·P). La sécurité repose sur la difficulté du problème Diffie-Hellman bilinéaire. Utilise des courbes BN (Barreto-Naehrig)."
          },
          {
            type: 'mcq',
            question: "La méthode NFS (Number Field Sieve) a une complexité pour factoriser N de :",
            answers: ['L_N(1/3, (64/9)^{1/3}) = exp((c+o(1))(log N)^{1/3}(log log N)^{2/3})', 'O(√N)', 'O((log N)³)', 'L_N(1/2, 1) (comme ECM)'],
            correct: 0,
            explanation: "NFS (Copersmith 1993) a complexité sous-exponentielle L_N(1/3, ≈1.92) pour la factorisation. ECM a complexité L_p(1/2, √2) pour facteurs p < N^{1/2}. Pour RSA-2048 (N de 617 chiffres), NFS est infaisable actuellement. Un ordinateur quantique de Shor factoriserait en O((log N)³), d\'où la nécessité des courbes post-quantiques."
          },
          {
            type: 'mcq',
            question: "Les courbes de Weil (courbes elliptiques sur 𝔽_{2^m}) sont utilisées pour l\'efficacité car :",
            answers: ['L\'arithmétique sur 𝔽_{2^m} (corps de caractéristique 2) utilise des XOR et des décalages, rapides en hardware', 'Elles ont toujours de grands groupes de points', 'Elles sont supersingulières', 'Le discriminant est toujours 1'],
            correct: 0,
            explanation: "Sur 𝔽_{2^m} (corps de Galois de caractéristique 2), l\'addition est un XOR bit à bit et la multiplication est réalisable par des registres à décalage (LFSR). Cela donne des implémentations matérielles très efficaces sur FPGA et circuits dédiés. Les courbes y²+xy=x³+ax²+b sur 𝔽_{2^m} (forme de Weierstrass binaire) sont standards (B-163, B-233, B-283)."
          },
          {
            type: 'mcq',
            question: "La cryptographie basée sur les réseaux euclidiens (NTRU, Kyber/CRYSTALS) est prometteuse post-quantique car :",
            answers: ['Le problème Learning With Errors (LWE) et SVP (Shortest Vector Problem) semblent résister à l\'algorithme de Shor et aux algorithmes quantiques connus', 'Les réseaux contiennent des courbes elliptiques', 'LWE est équivalent à ECDLP', 'Les réseaux euclidiens utilisent des courbes de genre 2'],
            correct: 0,
            explanation: "L\'algorithme de Shor casse RSA, DSA, ECDLP en temps polynomial sur ordinateur quantique. LWE et SVP résistent : le meilleur algorithme quantique pour SVP est en 2^{O(n)} (exponentiel en la dimension n). CRYSTALS-Kyber (Kyber) a été sélectionné par NIST en 2022 comme standard post-quantique pour le chiffrement/KEM."
          }
        ],
        // Niveau 3
        [
          {
            type: 'mcq',
            question: "L\'algorithme de Schoof-Elkies-Atkin (SEA) pour compter les points de E(𝔽ₚ) utilise :",
            answers: ['Les polynômes de division Ψ_ℓ et les polynômes modulaires Φ_ℓ pour calculer t mod ℓ (trace du Frobenius) pour de petits premiers ℓ, puis CRT', 'Uniquement les polynômes de Hecke', 'La factorisation de p', 'Les racines de Ψ₂'],
            correct: 0,
            explanation: "SEA : pour chaque petit premier ℓ, on calcule t mod ℓ en étudiant les valeurs propres du Frobenius modulo ℓ via les polynômes modulaires Φ_ℓ(j(E), j(E')) et les polynômes de division. L\'amélioration d\'Elkies : si ℓ est un premier d\'Elkies (ℓ divise N et il existe un facteur linéaire de Φ_ℓ(X,j(E))), le calcul est plus rapide. CRT final donne t ∈ [−2√p, 2√p]."
          },
          {
            type: 'mcq',
            question: "Les signatures EdDSA (Ed25519) utilisent la courbe de twisted Edwards :",
            answers: ['-x²+y² = 1 − (121665/121666)x²y² sur 𝔽_{2²⁵⁵−19} (birationnellement équivalente à Curve25519)', 'y² = x³+7', 'La courbe anomale y²=x³+x', 'P-256 de NIST'],
            correct: 0,
            explanation: "Ed25519 (Bernstein et al. 2011) utilise la courbe twisted Edwards −x²+y²=1+dx²y² (d = −121665/121666) sur 𝔽_p, p=2²⁵⁵−19. Elle est birationnellement équivalente à la courbe de Montgomery Curve25519. Les formules d\'addition sur courbes de Edwards sont complètes (pas de cas spéciaux), donnant une implémentation en temps constant. Ed25519 est utilisé dans SSH, TLS, Tor."
          },
          {
            type: 'mcq',
            question: "Les preuves à divulgation nulle de connaissance basées sur les courbes elliptiques (zk-SNARKs) utilisent :",
            answers: ['Les couplages sur courbes BN (Barreto-Naehrig) pour vérifier des équations polynomiales dans 𝔽_p via des pairings bilinéaires', 'Uniquement l\'ECDLP', 'Les intégrales elliptiques', 'La fonction ℘ de Weierstrass'],
            correct: 0,
            explanation: "zk-SNARKs (Groth16, PLONK, etc.) : une preuve π = (A,B,C) ∈ G₁²×G₂ (groupes de courbe BN254) vérifie des contraintes via des pairings e(A,B) = e(C,D). La sécurité repose sur l\'hypothèse q-SDH (q-Strong Diffie-Hellman). Utilisé dans ZCash, Ethereum (Ethereum 2.0 utilise BLS12-381 pour les agrégations de signatures)."
          },
          {
            type: 'mcq',
            question: "Les courbes BLS12-381 (Boneh-Lynn-Shacham) sont conçues pour :",
            answers: ['Les agrégations de signatures BLS : e(σ,G₂) = e(H(m),pk) vérifiable efficacement, et 128 bits de sécurité', 'Le chiffrement symétrique', 'Remplacer RSA pour les signatures classiques', 'Générer des nombres aléatoires'],
            correct: 0,
            explanation: "BLS12-381 est une courbe pairing-friendly de degré d\'embedding 12, à 381 bits. Elle permet la vérification de signatures BLS par l\'équation de pairing e(σ, G₂) = e(H(m), pk) où σ=[d]H(m). L\'agrégation est gratuite : e(Σσᵢ, G₂) = Π e(H(mᵢ),pkᵢ). Utilisé dans Ethereum Beacon Chain pour les attestations de validateurs."
          },
          {
            type: 'input',
            visual: 'k',
            question: "Sur y²=x³+7 sur 𝔽₁₁ (courbe simplifiée), si P=(3,6) est un point et Q=2P, trouvez x(2P). (λ=(3·9+0)/(2·6) mod 11 = 27/12 = 5/1 = 5 mod 11, x₃ = 25−6 = 8 mod 11)",
            correct: '8',
            explanation: "Doublement : λ = (3x²+a)/(2y) mod 11. Ici a=0, x=3, y=6. λ = (3·9)/(12) = 27/12 mod 11. 27 mod 11 = 5, 12 mod 11 = 1. Donc λ = 5. x(2P) = λ²−2x = 25−6 = 19 ≡ 8 (mod 11). y(2P) = λ(x−x₃)−y = 5(3−8)−6 = −25−6 = −31 ≡ 2 (mod 11). Donc 2P = (8,2)."
          },
          {
            type: 'mcq',
            question: "Le problème de l\'isomorphisme de graphes post-quantique (GI-based crypto) et les courbes elliptiques sont liés via :",
            answers: ['Les graphes d\'isogénies : les sommets sont des j-invariants et les arêtes sont des ℓ-isogénies, formant un graphe expander exploité par SIDH/CSIDH', 'Le groupe symétrique des automorphismes de E', 'La théorie des nœuds', 'Les réseaux de Cayley uniquement'],
            correct: 0,
            explanation: "Le graphe d\'isogénies ℓ-isogénies : les noeuds sont les classes d\'isomorphisme de courbes elliptiques sur 𝔽ₚ, et les arêtes relient E à ses ℓ-isogènes. Ce graphe est un expander de Ramanujan. SIDH marche sur le graphe de courbes supersingulières. CSIDH utilise le graphe de courbes ordinaires. La structure de graphe expander garantit la diffusion cryptographique."
          },
          {
            type: 'mcq',
            question: "La méthode de Cornacchia résout x²+dy²=p (représentation d\'un premier) en lien avec les courbes elliptiques sur 𝔽ₚ via :",
            answers: ['L\'algorithme d\'Euclide étendu mod p lié au calcul de #E(𝔽ₚ) pour E à CM par ℤ[√−d]', 'La factorisation de p dans ℤ[√−d]', 'Le crible quadratique', 'La méthode de Newton'],
            correct: 0,
            explanation: "Cornacchia : si p ≡ 1 (mod 4), on résout x²+y²=p par l\'algorithme PGCD euclidien partiel. Lien avec les courbes CM : si E a CM par ℤ[i] (d=1), alors #E(𝔽ₚ) = p+1−2a où p = a²+b². La valeur 2a = trace de Frobenius se calcule via Cornacchia. C\'est crucial dans SEA pour les courbes à CM (premiers d\'Elkies)."
          },
          {
            type: 'mcq',
            question: "Les SNARKs universels (PLONK, MARLIN) utilisent des engagements polynomiaux basés sur :",
            answers: ['KZG (Kate-Zaverucha-Goldberg) : engagement polynomial via pairing e([f(τ)]₁, G₂) = e([1]₁, [f(τ)]₂) utilisant un secret τ dans le trusted setup', 'Le logarithme discret sur 𝔽_p uniquement', 'ECDSA classique', 'Courbes de Koblitz'],
            correct: 0,
            explanation: "KZG polynomial commitment : on s\'engage sur f(X) en calculant C = [f(τ)]₁ = Σ aᵢ[τⁱ]₁ (combinaison linéaire de puissances du secret τ dans G₁). Pour prouver f(z)=y : on calcule π = [(f(X)−y)/(X−z)]₁ et on vérifie par pairing e(C−[y]₁, G₂) = e(π, [τ]₂−[z]₂). C\'est succinct (π = 1 point de courbe) et efficace."
          },
          {
            type: 'mcq',
            question: "Le théorème de Fermat (Wiles 1995) : la preuve complète utilise quelle combinaison de résultats sur les courbes elliptiques ?",
            answers: ['Frey+Ribet (conjecture ε : forme de niveau N/rad(N))+Wiles (modularité semi-stable)+contradiction avec les propriétés de E_{a,b}', 'Uniquement le discriminant de la courbe de Frey', 'L\'invariant j de E_{a,b}', 'La torsion de E_{a,b}(ℚ)'],
            correct: 0,
            explanation: "Chaîne de preuve : (1) Frey construit E_{a,b}: y²=x(x−aⁿ)(x+bⁿ) depuis une solution aⁿ+bⁿ=cⁿ. (2) Cette courbe est semi-stable de conducteur N|rad(2abc)²ⁿ. (3) Ribet (1990) prouve que sa représentation mod ℓ devrait provenir d\'une forme de niveau 2 — impossible car S₂(Γ₀(2))=0. (4) Wiles prouve la modularité semi-stable → contradiction → pas de solution."
          },
          {
            type: 'mcq',
            question: "Les multi-party computation (MPC) modernes utilisent des courbes elliptiques via :",
            answers: ['Le partage de secret de Shamir sur E(𝔽ₚ) et les protocoles ECDH multi-parties pour le calcul sécurisé de fonctions sans révéler les entrées privées', 'Le calcul d\'intégrales sur E', 'L\'uniformisation de Weierstrass uniquement', 'Le module de Tate'],
            correct: 0,
            explanation: "MPC-ECDSA : plusieurs parties détiennent des parts (dᵢ) de la clé privée d = Σdᵢ. Elles calculent collectivement la signature ECDSA sans reconstruire d. Les protocoles utilisent des engagements sur E(𝔽ₚ) et des preuves de connaissance zéro (Pedersen commitments). Utilisé dans les HSM multi-parties, les wallets distribués (Fireblocks, ZenGo)."
          }
        ],
        // Niveau 4
        [
          {
            type: 'mcq',
            question: "Le protocole ECVRF (Verifiable Random Function) basé sur les courbes elliptiques produit :",
            answers: ['Une sortie pseudo-aléatoire avec une preuve π vérifiable publiquement sans révéler la clé privée, basé sur ECDH', 'Un nombre purement aléatoire', 'Une signature déterministe', 'Un chiffrement symétrique'],
            correct: 0,
            explanation: "ECVRF : pour un input x, le prouver calcule Γ=[sk]H(x) (multiplication scalaire), la sortie β=Hash(Γ), et une preuve π=(c,s) de DLEQ (Discrete Log EQuality) montrant que log_G(pk)=log_{H(x)}(Γ). Quiconque peut vérifier β est l\'unique sortie pour (pk,x) sans apprendre sk. Utilisé pour la génération de nombres aléatoires vérifiables (Chainlink VRF, Algorand)."
          },
          {
            type: 'mcq',
            question: "Le protocole d\'authentification FIDO2/WebAuthn utilise ECDSA sur P-256 pour :",
            answers: ['L\'authentification sans mot de passe : le client signe un challenge du serveur avec sa clé privée stockée dans le TPM/sécurisé, vérification par la clé publique enregistrée', 'Le chiffrement des données biométriques', 'La génération du mot de passe', 'Le partage de clé Diffie-Hellman'],
            correct: 0,
            explanation: "FIDO2 : lors de l\'enregistrement, le dispositif génère une paire (privkey, pubkey) et envoie pubkey au serveur. À l\'authentification, le serveur envoie un challenge, le dispositif calcule une signature ECDSA avec privkey, et le serveur vérifie avec pubkey. Résistant au phishing (la clé est liée au domaine), aux bases de données volées (clé privée jamais transmise) et au replay (challenge aléatoire)."
          },
          {
            type: 'mcq',
            question: "Le protocole de vote électronique basé sur les courbes elliptiques utilise :",
            answers: ['Le chiffrement El-Gamal elliptique homomorphique : E(m₁)·E(m₂) = E(m₁+m₂) permettant le comptage sans déchiffrement individuel', 'ECDSA pour chaque vote', 'Un hash de la courbe elliptique', 'La méthode de Lenstra'],
            correct: 0,
            explanation: "El-Gamal elliptique homomorphique : Enc(m) = (rG, mG+r·pk). On a Enc(m₁)+Enc(m₂) = Enc(m₁+m₂) (addition point par point). L\'autorité déchiffre la somme ΣEnc(vᵢ) = Enc(Σvᵢ) pour obtenir le total Σvᵢ·G et résout le DLP pour Σvᵢ borné. Utilisé dans Helios (vote universitaire), BeleniosVS. La preuve de validité (vote ∈ {0,1}) utilise des preuves disjonctives de Schnorr."
          },
          {
            type: 'mcq',
            question: "La résistance quantique des courbes elliptiques classiques (ECDH/ECDSA) : l\'algorithme de Shor sur ordinateur quantique résout ECDLP en :",
            answers: ['O((log p)³) opérations quantiques (polynomial en log p)', 'O(2^{128}) opérations (le même niveau de sécurité)', 'O(√p) opérations quantiques', 'O((log p)!) (factorielle)'],
            correct: 0,
            explanation: "L\'algorithme de Shor (1994) résout le logarithme discret dans tout groupe abélien d\'ordre n en O((log n)³) opérations quantiques. Pour ECDLP sur un groupe d\'ordre ≈ 2²⁵⁶, Shor donne O(256³) ≈ 10⁷ opérations quantiques — cassant complètement ECDH/ECDSA. Il faut donc 2×plus de qubits logiques que de bits classiques pour implémenter le circuit quantique."
          },
          {
            type: 'mcq',
            question: "Les courbes BN254 (alt_bn128 dans Ethereum) permettent des pairings efficaces car :",
            answers: ['Le degré d\'embedding k=12 et la courbe de rang CM 0 sur 𝔽ₚ permettent e: G₁×G₂→G_T avec G₁⊂E(𝔽ₚ), G₂⊂E(𝔽_{p¹²}) optimisé par la tour d\'extensions', 'La courbe est supersingulière', 'p = 2²⁵⁴', 'La courbe a un nombre de points premier'],
            correct: 0,
            explanation: "BN254 (Barreto-Naehrig 2005) : p = 36u⁴+36u³+24u²+6u+1 pour u = -(2⁶²+2⁵⁵+1), r (ordre des groupes) = 36u⁴+36u³+18u²+6u+1, embedding degree k=12. La tour 𝔽_{p¹²} = 𝔽_{p²}[w]/(w⁶−v) avec 𝔽_{p²}=𝔽_p[u]/(u²+1) permet le calcul de Miller loop efficace (fp12 mul ≈ 54 fp mul). Utilisé dans Ethereum EVM precompiles."
          },
          {
            type: 'input',
            visual: 'secp',
            question: "Sur secp256k1, si la clé privée est k=2, la clé publique est K=[2]G. L\'opération est un doublement de point. Comment appelle-t-on cet algorithme d\'exponentiation scalaire optimal ?",
            correct: 'double-and-add',
            explanation: "L\'algorithme double-and-add (analogue du square-and-multiply pour les exponentiations entières) calcule [k]P en O(log k) doublement et additions. Pour k en binaire k=Σ bᵢ2ⁱ : on initialise R=O, et pour chaque bit bᵢ (du plus significatif) : R=[2]R, si bᵢ=1 alors R=R+P. Total : log₂(k) doublements et ≈ log₂(k)/2 additions en moyenne."
          },
          {
            type: 'mcq',
            question: "Le Decisional Diffie-Hellman Problem (DDH) sur E(𝔽ₚ) est :",
            answers: ['Distinguer (aG, bG, abG) de (aG, bG, cG) pour a,b,c aléatoires — difficile sans pairing', 'Calculer abG depuis (aG,bG)', 'Factoriser #E(𝔽ₚ)', 'Trouver G depuis aG'],
            correct: 0,
            explanation: "DDH : distinguer les triplets (aG, bG, abG) des triplets aléatoires (aG, bG, cG). Sur des groupes sans pairing efficace, DDH est supposé difficile. Mais sur des groupes pairing-friendly, DDH est facile : e(aG,bG) = e(G,G)^{ab} ≠ e(G,cG)^? permet de distinguer. D\'où l\'importance de distinguer les applications qui nécessitent DDH fort (sans pairing) de celles qui peuvent utiliser des pairings."
          },
          {
            type: 'mcq',
            question: "Le protocole de signatures de seuil (t,n)-ECDSA permet :",
            answers: ['À t parmi n parties de signer collectivement sans que l\'une quelconque d\'entre elles connaisse la clé privée complète', 'À 1 partie seule de signer pour toutes', 'Le partage du message uniquement', 'La vérification de signature uniquement'],
            correct: 0,
            explanation: "Signature de seuil (t,n) : la clé privée d est partagée en n parts dᵢ (Shamir) telles que t parts permettent de reconstruire d. Les protocoles modernes (GG18, GG20, DKLS) évitent la reconstruction explicite de d : les parties calculent collectivement la signature ECDSA via un protocole MPC-interactif. Crucial pour les cold wallets multi-sig et la garde institutionnelle de crypto-actifs."
          },
          {
            type: 'mcq',
            question: "Le protocole de preuve de connaissance de Schnorr sur E(𝔽ₚ) (preuve que l\'on connaît x tel que Y=[x]G) est :",
            answers: ['(1) Prouver envoie R=[k]G ; (2) Vérifieur envoie c aléatoire ; (3) Prouver envoie s=k+cx ; (4) Vérifieur check [s]G = R+cY', '(1) Envoyer x directement ; (2) Vérifier Y=[x]G', '(1) Envoyer hash(x) ; (2) Vérifier', '(1) Calculer Y ; (2) Publier x'],
            correct: 0,
            explanation: "Protocole de Schnorr (Σ-protocol) : (1) Commit : R=[k]G pour k aléatoire. (2) Challenge : c aléatoire du vérifieur. (3) Réponse : s=k+cx mod n. (4) Vérification : [s]G = [k+cx]G = [k]G+c[x]G = R+cY. ✓ si correct. Propriétés : complet, sound (falsifier nécessite DLog), zero-knowledge (la distribution (R,c,s) est simulable sans x). Non-interactif via Fiat-Shamir (hacher pour c)."
          },
          {
            type: 'mcq',
            question: "L\'hypothèse GAP-CDH (Gap Computational Diffie-Hellman) sur un groupe avec pairing est :",
            answers: ['Calculer abG depuis (G,aG,bG) est difficile même en ayant accès à un oracle DDH (qui distingue abG de cG)', 'DDH et CDH sont équivalents avec pairing', 'CDH est facile avec pairing', 'L\'hypothèse n\'existe pas'],
            correct: 0,
            explanation: "GAP-CDH : le problème CDH (calculer abG depuis aG,bG) reste difficile même si on peut répondre aux questions DDH (e.g., via le pairing). Cette hypothèse est nécessaire pour les preuves de sécurité de BLS signatures : σ=[sk]H(m) est une signature vérifiable par e(σ,G)=e(H(m),pk). La sécurité repose sur GAP-CDH dans le groupe G₁ avec le pairing disponible."
          }
        ],
        // Niveau 5
        [
          {
            type: 'mcq',
            question: "Le protocole FHE (Fully Homomorphic Encryption) basé sur les réseaux euclidiens (CKKS, BFV) est comparable aux courbes elliptiques en ce que :",
            answers: ['Les deux permettent le calcul sur données chiffrées (FHE) ou la vérification sans déchiffrement (ZKP sur ECC), mais FHE est beaucoup plus lent (×10⁶) et supporte plus d\'opérations', 'FHE et ECC sont équivalents', 'ECC permet le calcul homomorphe complet', 'Les deux nécessitent les mêmes structures algébriques'],
            correct: 0,
            explanation: "Comparaison FHE vs ECC : El-Gamal EC est partiellement homomorphe (additif uniquement). FHE (Gentry 2009, CKKS 2017) est pleinement homomorphe (additions et multiplications arbitraires sur données chiffrées), mais avec overhead ×10⁶ vs calcul en clair. Les deux domaines convergent dans les preuves ZK sur données chiffrées (FHE-friendly hash functions, TFHE+ZKP)."
          },
          {
            type: 'mcq',
            question: "La sécurité prouvable dans le modèle ROM (Random Oracle Model) pour ECDSA donne :",
            answers: ['Une réduction de sécurité au problème ECDLP avec une perte de sécurité O(q²_H/n) où q_H est le nombre de requêtes au hash', 'Une preuve inconditionnelle de sécurité', 'Aucune réduction connue', 'Une réduction au problème de factorisation'],
            correct: 0,
            explanation: "Dans le ROM, ECDSA est prouvablement sûr sous l\'hypothèse ECDLP (résultat de Brown 2003, Fersch-Kiltz-Poettering 2016 pour des modèles précis). La réduction perd un facteur q²/n (birthday bound sur les nonces). En pratique, la génération de nonces déterministes (RFC 6979, algorithme HMAC-DRBG pour k) élimine les vulnérabilités de réutilisation de nonce."
          },
          {
            type: 'mcq',
            question: "Le protocole FROST (Flexible Round-Optimized Schnorr Threshold signatures) améliore les signatures de seuil en :",
            answers: ['Réduisant à 2 rounds de communication (vs 3+ pour les protocoles précédents) tout en maintenant la sécurité sous DL dans le ROM', '1 seul round', 'Éliminant entièrement la communication', 'Utilisant uniquement des pairings'],
            correct: 0,
            explanation: "FROST (Komlo-Goldberg 2020) : signature de seuil (t,n)-Schnorr en 2 rounds. Round 1 : chaque partie génère des nonces (dᵢ,eᵢ) et publie les engagements (Dᵢ=[dᵢ]G, Eᵢ=[eᵢ]G). Round 2 : après réception de tous les engagements, chaque partie calcule sa part sᵢ. La signature agrégée (R, s=Σsᵢ) est une signature Schnorr valide. Prouvé sûr sous DL dans le ROM avec idéalisation du hash."
          }
        ],
        // =======================
        // ===== Niveau L1 =======
        // =======================
        [
          {
            type: 'mcq',
            question: "Le protocole de vote électronique basé sur El-Gamal elliptique est homomorphe car :",
            answers: ['Enc(m₁)+Enc(m₂) = Enc(m₁+m₂) permet de sommer les votes sans les déchiffrer individuellement', 'Les votes sont chiffrés avec AES', 'Le hash de chaque vote suffit', 'ECDSA garantit l\'homomorphisme'],
            correct: 0,
            explanation: "El-Gamal EC additif homomorphique : Enc(mᵢ) = (rᵢG, mᵢG+rᵢpk). La somme composante par composante donne Σ Enc(mᵢ) = Enc(Σmᵢ). L\'autorité déchiffre la somme et résout le DLP borné (Σmᵢ petit). Évite la révélation de chaque vote individuel tout en prouvant le résultat correct."
          },
          {
            type: 'mcq',
            question: "La résistance post-quantique de CSIDH face à SIDH brisé en 2022 tient à :",
            answers: ['CSIDH utilise l\'action du groupe de classes cl(𝒪) sur les courbes ordinaires, sans les informations auxiliaires (torsion) qui ont permis l\'attaque de Castryck-Decru sur SIDH', 'CSIDH utilise des courbes supersingulières', 'CSIDH repose sur RSA', 'CSIDH utilise des clés plus longues que SIDH'],
            correct: 0,
            explanation: "L'attaque de Castryck-Decru (2022) exploite les points de torsion d'ordre élevé transmis publiquement dans SIDH pour reconstruire l'isogénie secrète. CSIDH ne transmet pas ces informations auxiliaires : seule la courbe finale E/𝔽_p est publiée. L'action commutatrice du groupe de classes rend l'échange sécurisé sans révéler les endomorphismes intermédiaires."
          },
          {
            type: 'mcq',
            question: "La conjecture de Birch et Swinnerton-Dyer (BSD) prédit que le rang r de E(ℚ) est relié à :",
            answers: ['L\'ordre d\'annulation de L(E,s) en s=1 : ord_{s=1} L(E,s) = r (rang analytique = rang algébrique)', 'La valeur de L(E,1) directement', 'Le discriminant Δ de E', 'Le nombre de points de torsion'],
            correct: 0,
            explanation: "BSD (conjecture du millénaire, prix 1M$) : le rang r de E(ℚ) (dimension du groupe des points rationnels modulo torsion) égale l'ordre d'annulation de la fonction L(E,s) au point s=1. Si L(E,1)≠0, alors E(ℚ) est fini (rang 0). Si L'(E,1)≠0 (zéro simple), rang=1. La formule de Gross-Zagier et l'théorème de Kolyvagin prouvent BSD pour rang ≤1."
          },
          {
            type: 'mcq',
            question: "Les courbes elliptiques sur des corps de fonctions 𝔽_q(t) (analogues géométriques) interviennent dans :",
            answers: ['La conjecture de Weil (Deligne 1974) : le nombre de points de E/𝔽_q satisfait |#E(𝔽_{qⁿ}) − qⁿ − 1| ≤ 2g√(qⁿ) avec g=1 pour les courbes elliptiques', 'La théorie de Galois uniquement', 'Les intégrales p-adiques', 'La théorie des nœuds'],
            correct: 0,
            explanation: "La conjecture de Weil (prouvée par Deligne 1974, médaille Fields) : le zêta-fonction Z(E/𝔽_q, T) est une fraction rationnelle, et ses racines ont module q^{-1/2} (analogue de RH). Pour une courbe elliptique (genre 1), Z = (1−αT)(1−ᾱT)/((1−T)(1−qT)) avec |α|=√q. Cela donne |#E(𝔽_q) − q − 1| ≤ 2√q (borne de Hasse)."
          },
          {
            type: 'mcq',
            question: "Le programme de Langlands établit une correspondance entre :",
            answers: ['Les représentations galoisiennes attachées aux courbes elliptiques et les formes automorphes (formes modulaires), généralisant la preuve de Fermat', 'Les courbes elliptiques et les intégrales élémentaires', 'Les fonctions modulaires et les fonctions entières', 'Les réseaux et les variétés abéliennes uniquement'],
            correct: 0,
            explanation: "Programme de Langlands : la modularité (Wiles) dit que toute courbe elliptique sur ℚ est modulaire, i.e., correspond à une forme modulaire de poids 2. Plus généralement, Langlands prédit une bijection (correspondance) entre représentations du groupe de Galois Gal(Q̄/ℚ) et représentations automorphes de GL(n). C'est la grande unification des mathématiques modernes (arithmétique ↔ analyse harmonique)."
          },
          {
            type: 'input',
            visual: 'L(E,1)',
            question: "Pour une courbe elliptique de rang r=0, que vaut L(E,1) selon la conjecture BSD ? (zéro ou non-zéro, répondez : 'non-zéro')",
            correct: 'non-zéro',
            explanation: "BSD : rang r = ord_{s=1} L(E,s). Si r=0, L(E,s) n'a pas de zéro en s=1, donc L(E,1) ≠ 0. Exemple : E: y²=x³−x a rang 0 et L(E,1) = π/2·Ω où Ω est la période réelle. La valeur L(E,1) encode arithmétiquement la finitude de E(ℚ)."
          },
          {
            type: 'mcq',
            question: "Les fonctions L d'Artin attachées à une représentation galoisienne ρ: Gal(Q̄/ℚ)→GL_n(ℂ) sont définies par :",
            answers: ['L(ρ,s) = Π_p det(I − ρ(Frob_p)p^{−s})^{−1} (produit eulérien sur les premiers non-ramifiés)', 'L(ρ,s) = ∫₀^∞ ρ(t)t^s dt/t', 'L(ρ,s) = Σ_n ρ(n)n^{−s}', 'L(ρ,s) = Σ_p p^{−s·tr(ρ(p))}'],
            correct: 0,
            explanation: "L(ρ,s) = Π_p det(I−ρ(Frob_p)p^{−s})^{−1}. Pour une courbe elliptique E, ρ = ρ_{E,ℓ} est la représentation sur T_ℓ(E) (module de Tate) et Frob_p a trace aₚ = p+1−#E(𝔽_p). D'où le facteur eulérien (1−aₚp^{−s}+p^{1−2s})^{−1}. La modularité (Wiles) dit que cette L-fonction coïncide avec la L-fonction de la forme modulaire associée."
          },
          {
            type: 'mcq',
            question: "L'invariant j(E) d'une courbe elliptique est défini par :",
            answers: ['j(E) = 1728·4a³/(4a³+27b²) pour E: y²=x³+ax+b, et caractérise E à isomorphisme près sur ℂ', 'j(E) = discriminant de E', 'j(E) = nombre de points de E(𝔽_p)', 'j(E) = trace du Frobenius'],
            correct: 0,
            explanation: "j(E) = 1728·4a³/Δ avec Δ = −16(4a³+27b²). Deux courbes sur ℂ (ou sur un corps algébriquement clos) sont isomorphes si et seulement si elles ont le même j-invariant. j=0 correspond à y²=x³+1 (automorphismes d'ordre 6), j=1728 à y²=x³+x (automorphismes d'ordre 4). Le j-invariant est un point de la droite modulaire ℂ/j ≅ SL₂(ℤ)\\ℍ∪{∞}."
          }
        ]
      ]
    }

  ]
};
