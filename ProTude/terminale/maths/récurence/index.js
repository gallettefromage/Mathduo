/**
 * CHAPITRE : Récurence — Terminale
 *
 * ╔══════════════════════════════════════════════════════════╗
 * ║  STRUCTURE D'UNE NOTION                                  ║
 * ║  lesson     : { formula, text, example }                 ║
 * ║  fullBlocks : blocs du cours complet                     ║
 * ║               types: definition | formula | example |    ║
 * ║                       warning | technique | demo         ║
 * ║  levels     : tableau de 6 tableaux d'exercices          ║
 * ║               levels[0] = exercices du niveau 1, etc.    ║
 * ║               (fallback : exercises:[...] commun)        ║
 * ╚══════════════════════════════════════════════════════════╝
 */
export default {
  id: 'récurence',
  title: 'Récurence',
  description: 'Principe de récurrence, suites explicites et récurrentes, convergence et points fixes',
  icon: '🔁',
  xpMax: 240,
  // ════════════════════════════════════════════════════
  // BONUS L1
  // ════════════════════════════════════════════════════
  l1Bonus: {
    title: 'Approfondissement L1',
    description: '',
    notions: [
        {
            id:'suites-contractantes-l1',
            label:'Suites contractantes',
            icon:'🔁',

            lesson:{
            formula:"Si |f'(x)| ≤ k < 1 sur I alors toute suite définie par u_{n+1}=f(u_n) converge vers l’unique point fixe α tel que f(α)=α.",
            text:"Une fonction contractante rapproche les points. Cela garantit l’existence et l’unicité d’un point fixe attractif. C’est fondamental en analyse numérique et pour la méthode du point fixe.",
            example:"Si f(x)=0.5x+1 alors le point fixe vérifie x=0.5x+1 donc x=2. Toute suite u_{n+1}=0.5u_n+1 converge vers 2."
            },

            fullBlocks:[

            {type:'definition',
            title:'📌 Fonction contractante',
            text:"f est contractante sur un intervalle I si |f(x)-f(y)| ≤ k|x-y| avec 0<k<1."},

            {type:'definition',
            title:'📌 Point fixe',
            text:"Un point fixe α vérifie f(α)=α."},

            {type:'theorem',
            title:'📖 Théorème du point fixe',
            text:"Si f est contractante sur un intervalle stable I alors il existe un unique point fixe α dans I et toute suite u_{n+1}=f(u_n) converge vers α."},

            {type:'example',
            title:'✅ Exemple complet',
            text:"u_{n+1}=0.3u_n+4. Le point fixe vérifie x=0.3x+4 donc x=40/7. Comme |0.3|<1 la suite converge vers 40/7."},

            {type:'warning',
            title:'⚠️ Attention',
            text:"Si |f'(x)|>1 au point fixe alors il est répulsif (instable)."}
            ],

            levels:[

                /* ================= NIVEAU 1 ================= */

                [
                {type:'mcq',visual:'🔁',question:'Une fonction est contractante si :',answers:['|f\'(x)|<1','|f\'(x)|>1','f(x)=x','f est croissante'],correct:0},

                {type:'mcq',visual:'🔁',question:'Un point fixe vérifie :',answers:['f(α)=α','f(α)=0','α=0','f\'(α)=0'],correct:0},

                {type:'mcq',visual:'🔁',question:'Si |f\'|<1 alors le point fixe est :',answers:['attractif','répulsif','imaginaire','inexistant'],correct:0},

                {type:'mcq',visual:'🔁',question:'La suite u_{n+1}=0.2u_n converge ?',answers:['oui','non','on ne sait pas','jamais'],correct:0},

                {type:'mcq',visual:'🔁',question:'La constante k doit vérifier :',answers:['0<k<1','k>1','k=1','k<0'],correct:0},

                {type:'mcq',visual:'🔁',question:'Le théorème garantit :',answers:['unicité','plusieurs points fixes','divergence','oscillation'],correct:0},

                {type:'mcq',visual:'🔁',question:'Si f(x)=x alors :',answers:['tout point est fixe','aucun point fixe','1 seul','2'],correct:0},

                {type:'mcq',visual:'🔁',question:'|0.8|<1 donc :',answers:['convergence','divergence','explosion','cycle'],correct:0},

                {type:'mcq',visual:'🔁',question:'Si f est constante :',answers:['convergence immédiate','divergence','oscillation','aucune limite'],correct:0},

                {type:'mcq',visual:'🔁',question:'Une contraction rapproche :',answers:['les points','les dérivées','les intégrales','les racines'],correct:0}
                ],

                /* ================= NIVEAU 2 ================= */

                [
                {type:'mcq',visual:'🔁',question:'Point fixe de f(x)=0.5x+3 ?',answers:['6','3','1','0'],correct:0},

                {type:'mcq',visual:'🔁',question:'Point fixe de f(x)=0.25x+1 ?',answers:['4/3','1','0','4'],correct:0},

                {type:'mcq',visual:'🔁',question:'u_{n+1}=0.1u_n+2 converge vers ?',answers:['20/9','2','0','1'],correct:0},

                {type:'mcq',visual:'🔁',question:'Coefficient 0.9 donne convergence ?',answers:['oui','non','jamais','rare'],correct:0},

                {type:'mcq',visual:'🔁',question:'Coefficient 1.1 donne ?',answers:['divergence','convergence','stabilité','fixe'],correct:0},

                {type:'mcq',visual:'🔁',question:'Point fixe de f(x)=0.4x−2 ?',answers:['−10/3','-2','0','2'],correct:0},

                {type:'mcq',visual:'🔁',question:'Si u0=100 et f contractante alors :',answers:['converge','diverge','oscille','explose'],correct:0},

                {type:'mcq',visual:'🔁',question:'|−0.5|<1 donc :',answers:['attractif','répulsif','instable','neutre'],correct:0},

                {type:'mcq',visual:'🔁',question:'La vitesse dépend de :',answers:['k','u0','n','α'],correct:0},

                {type:'mcq',visual:'🔁',question:'Plus k est petit plus :',answers:['convergence rapide','lente','instable','divergente'],correct:0}
                ],

                /* ================= NIVEAU 3 ================= */

                [
                {type:'mcq',visual:'🔁',question:'Si f\'(α)=0 alors :',answers:['super stable','instable','répulsif','oscillant'],correct:0},

                {type:'mcq',visual:'🔁',question:'f(x)=x² sur [0,1] est contractante ?',answers:['non','oui','toujours','jamais'],correct:0},

                {type:'mcq',visual:'🔁',question:'f(x)=0.3x² sur [0,1] ?',answers:['oui','non','jamais','rare'],correct:0},

                {type:'mcq',visual:'🔁',question:'Itération numérique sert à :',answers:['approcher racine','intégrer','dériver','factoriser'],correct:0},

                {type:'mcq',visual:'🔁',question:'Méthode point fixe résout :',answers:['x=f(x)','f(x)=0','f\'=0','intégrale'],correct:0},

                {type:'mcq',visual:'🔁',question:'Stabilité dépend de :',answers:['|f\'(α)|','f(0)','u0','n'],correct:0},

                {type:'mcq',visual:'🔁',question:'Si |f\'(α)|>1 alors :',answers:['instable','stable','lent','nul'],correct:0},

                {type:'mcq',visual:'🔁',question:'Suite contractante est :',answers:['de Cauchy','divergente','oscillante','périodique'],correct:0},

                {type:'mcq',visual:'🔁',question:'Convergence locale signifie :',answers:['près du point fixe','partout','jamais','global'],correct:0},

                {type:'mcq',visual:'🔁',question:'Point fixe unique car :',answers:['contraction','continuité','hasard','limite'],correct:0}
                ],
                /* ================= NIVEAU 4 ================= */

                [
                {type:'mcq',visual:'🔁',question:'Soit f(x)=0.6x+2. Taux de contraction ?',answers:['0.6','2','1','0'],correct:0},

                {type:'mcq',visual:'🔁',question:'Erreur vérifie e_{n+1}=0.3e_n. Nature convergence ?',answers:['géométrique','linéaire','quadratique','nulle'],correct:0},

                {type:'mcq',visual:'🔁',question:'Si k=0.2 alors convergence est :',answers:['rapide','lente','impossible','instable'],correct:0},

                {type:'mcq',visual:'🔁',question:'f(x)=0.9x+1. Point fixe ?',answers:['10','1','0','9'],correct:0},

                {type:'mcq',visual:'🔁',question:'Suite u_{n+1}=0.9u_n+1 converge vers ?',answers:['10','1','9','0'],correct:0},

                {type:'mcq',visual:'🔁',question:'Si f\'(α)=−0.5 alors comportement :',answers:['convergence oscillante','divergence','monotone','explosion'],correct:0},

                {type:'mcq',visual:'🔁',question:'Si |f\'(α)|=0.05 alors vitesse :',answers:['très rapide','lente','nulle','instable'],correct:0},

                {type:'mcq',visual:'🔁',question:'Erreur après n étapes ≈ ?',answers:['k^n e0','ne0','e0/n','constante'],correct:0},

                {type:'mcq',visual:'🔁',question:'f(x)=1.2x+1 est :',answers:['répulsive','attractive','neutre','stable'],correct:0},

                {type:'mcq',visual:'🔁',question:'Stabilité dépend uniquement de :',answers:['|f\'(α)|','u0','n','α'],correct:0}
                ],

                /* ================= NIVEAU 5 ================= */

                [
                {type:'mcq',visual:'🔁',question:'f(x)=x−0.5(x²−2). Méthode associée ?',answers:['Newton','Euler','Simpson','Taylor'],correct:0},

                {type:'mcq',visual:'🔁',question:'Point fixe de f(x)=cos(x) approx ?',answers:['≈0.74','1','0','π'],correct:0},

                {type:'mcq',visual:'🔁',question:'Si f\'(α)=0 alors ordre convergence :',answers:['≥2','1','0','∞'],correct:0},

                {type:'mcq',visual:'🔁',question:'Convergence quadratique signifie :',answers:['erreur²','erreur×k','erreur+n','constante'],correct:0},

                {type:'mcq',visual:'🔁',question:'f(x)=2−x est contractante ?',answers:['non','oui','toujours','jamais'],correct:0},

                {type:'mcq',visual:'🔁',question:'f(x)=0.5cos(x) est contractante sur R ?',answers:['oui','non','jamais','rare'],correct:0},

                {type:'mcq',visual:'🔁',question:'Itération diverge si :',answers:['|f\'(α)|>1','|f\'(α)|<1','α=0','f continue'],correct:0},

                {type:'mcq',visual:'🔁',question:'Newton près racine simple est :',answers:['quadratique','linéaire','instable','lent'],correct:0},

                {type:'mcq',visual:'🔁',question:'Convergence locale signifie :',answers:['près solution','partout','jamais','aléatoire'],correct:0},

                {type:'mcq',visual:'🔁',question:'Point fixe multiple donne :',answers:['convergence plus lente','plus rapide','divergence','instabilité totale'],correct:0}
                ],

                /* ================= NIVEAU 6 ================= */

                [
                {type:'mcq',visual:'🔁',question:'f(x)=λx(1−x). Si λ=3.2 comportement ?',answers:['chaotique','stable unique','nul','linéaire'],correct:0},

                {type:'mcq',visual:'🔁',question:'Logistic map devient instable quand ?',answers:['|f\'(α)|>1','|f\'(α)|<1','α=0','λ=0'],correct:0},

                {type:'mcq',visual:'🔁',question:'Convergence globale nécessite :',answers:['intervalle stable','u0=α','n grand','α nul'],correct:0},

                {type:'mcq',visual:'🔁',question:'Suite peut converger sans contraction globale ?',answers:['oui','non','jamais','impossible'],correct:0},

                {type:'mcq',visual:'🔁',question:'Cycle attractif correspond à :',answers:['période >1','période 1','constante','nul'],correct:0},

                {type:'mcq',visual:'🔁',question:'Bifurcation apparaît quand :',answers:['paramètre varie','n augmente','u0 change','α fixe'],correct:0},

                {type:'mcq',visual:'🔁',question:'Chaos signifie :',answers:['sensibilité conditions initiales','convergence rapide','stabilité','linéarité'],correct:0},

                {type:'mcq',visual:'🔁',question:'f\'(α)=−1 donne :',answers:['cas limite','stable','explosif','quadratique'],correct:0},

                {type:'mcq',visual:'🔁',question:'Si k proche 1 alors convergence :',answers:['très lente','rapide','instantanée','chaotique'],correct:0},

                {type:'mcq',visual:'🔁',question:'Analyse dynamique étudie :',answers:['comportement long terme','valeur initiale','dérivée seule','intégrale'],correct:0}
                ]
            ]
        }
    ]
  },
  notions: [
    {
    id: 'principe-recurrence',
    label: 'Principe de récurrence',
    icon: '🔁',

    lesson: {
        formula: "Initialisation + Hérédité ⟹ P(n) vraie ∀ n ≥ n₀",
        text: "Le principe de récurrence permet de démontrer qu’une propriété P(n) est vraie pour tout entier à partir d’un rang initial n₀. On vérifie la propriété au rang initial (initialisation), puis on suppose la propriété vraie à un rang n et on démontre qu’elle est vraie au rang suivant (hérédité).",
        example: "Montrer que 1+2+…+n = n(n+1)/2. Initialisation : n=1 ✓. Hérédité : on ajoute (n+1) et on factorise."
    },

    fullBlocks: [

           {
            type: 'definition',
            title: '📌 Principe de récurrence (simple)',
            text: "Le principe de récurrence permet de prouver qu’une propriété P(n) est vraie pour tous les entiers n à partir d’un certain rang n₀. <br><br>Il repose sur deux étapes :<br>1) Initialisation : on vérifie que la propriété est vraie au premier rang n₀.<br>2) Hérédité : on suppose que la propriété est vraie pour un entier n ≥ n₀ (hypothèse de récurrence) et on démontre qu’elle est alors vraie au rang n+1.<br><br>Si ces deux étapes sont établies, alors P(n) est vraie pour tout entier n ≥ n₀."
            },

            {
            type: 'definition',
            title: '📌 Récurrence à partir d’un rang n₀',
            text: "La propriété ne commence pas forcément à n = 0 ou n = 1. Elle peut être étudiée à partir d’un rang quelconque n₀.<br><br>On vérifie alors la propriété au rang n₀ (initialisation), puis on démontre que si elle est vraie au rang n ≥ n₀, elle reste vraie au rang suivant.<br><br>La conclusion porte uniquement sur les entiers n ≥ n₀."
            },

            {
            type: 'definition',
            title: '📌 Récurrence forte',
            text: "Dans la récurrence forte, pour démontrer la propriété au rang n+1, on suppose qu’elle est vraie pour tous les entiers entre n₀ et n.<br><br>Cette méthode est utile lorsque le passage de n à n+1 dépend de plusieurs rangs précédents.<br><br>Elle est souvent utilisée dans les problèmes de divisibilité, d’inégalités ou pour certaines suites définies par récurrence."
            },

            {
            type: 'definition',
            title: '📌 Récurrence double',
            text: "La récurrence double consiste à démontrer simultanément deux propriétés liées P(n) et Q(n).<br><br>On vérifie les deux propriétés au rang initial, puis on suppose qu’elles sont vraies au rang n pour démontrer qu’elles le sont aussi au rang n+1.<br><br>Cette méthode est utile lorsque les deux propriétés se soutiennent mutuellement dans la démonstration."
            },

            {
            type: 'example',
            title: '✅ Exemple fondamental',
            text: "On veut montrer que 1 + 2 + … + n = n(n+1)/2.<br><br>Initialisation : pour n=1, on a 1 = 1×2/2, la propriété est vraie.<br><br>Hérédité : on suppose que la formule est vraie au rang n. On ajoute alors (n+1) au membre de gauche et on remplace la somme par sa forme donnée par l’hypothèse de récurrence. Après simplification et factorisation, on obtient (n+1)(n+2)/2.<br><br>La propriété est donc vraie au rang n+1, ce qui conclut la démonstration."
            },

            {
            type: 'technique',
            title: '🛠️ Méthode de rédaction parfaite',
            text: "1) Définir clairement la propriété P(n).<br>2) Rédiger soigneusement l’initialisation.<br>3) Énoncer explicitement l’hypothèse de récurrence.<br>4) Démontrer rigoureusement la propriété au rang n+1.<br>5) Conclure par une phrase formelle indiquant que la propriété est vraie pour tout n ≥ n₀."
            },

            {
            type: 'warning',
            title: '⚠️ Erreurs fréquentes',
            text: "Ne jamais oublier l’initialisation.<br>Toujours formuler clairement l’hypothèse de récurrence.<br>Ne jamais utiliser la propriété au rang n+1 avant de l’avoir démontrée.<br>La conclusion doit être explicitement rédigée."
            }
    ],

    levels: [

            // ───────────── LEVEL 1 ─────────────
            [
            { type:'mcq', visual:'🔁', question:'La récurrence nécessite :', answers:['Initialisation seulement','Hérédité seulement','Initialisation + hérédité','Calcul direct'], correct:2, explanation:'Les deux étapes sont indispensables.' },
            { type:'mcq', visual:'🔁', question:'L’hypothèse de récurrence consiste à :', answers:['Supposer P(n+1)','Supposer P(n)','Supposer P(n-1)','Ne rien supposer'], correct:1, explanation:'On suppose P(n) vraie.' },
            { type:'mcq', visual:'🔁', question:'L’initialisation vérifie :', answers:['Tous les n','Le rang initial','Le rang n+1','Une limite'], correct:1, explanation:'On vérifie le premier rang.' },
            { type:'mcq', visual:'🔁', question:'La conclusion correcte est :', answers:['P(n) vraie pour un n','P(n) vraie ∀ n ≥ n₀','P(n) vraie pour n₀ seulement','Rien'], correct:1, explanation:'Conclusion générale.' },
            { type:'mcq', visual:'🔁', question:'Si l’initialisation est fausse :', answers:['Preuve valide','Preuve invalide','On continue','Sans importance'], correct:1, explanation:'La base est indispensable.' },
            { type:'mcq', visual:'🔁', question:'On démontre P(n+1) en utilisant :', answers:['P(n)','P(n+2)','La conclusion','Une limite'], correct:0, explanation:'Hypothèse de récurrence.' },
            { type:'mcq', visual:'🔁', question:'Récurrence forte utilise :', answers:['Un seul rang','Tous les rangs précédents','Aucun','Une dérivée'], correct:1, explanation:'Tous les rangs ≤ n.' },
            { type:'mcq', visual:'🔁', question:'La récurrence s’applique aux :', answers:['Réels','Entiers','Fonctions continues','Matrices'], correct:1, explanation:'Sur ℕ.' },
            { type:'mcq', visual:'🔁', question:'On doit définir clairement :', answers:['La limite','La propriété P(n)','La dérivée','Une primitive'], correct:1, explanation:'Toujours définir P(n).' },
            { type:'mcq', visual:'🔁', question:'Sans hérédité la preuve est :', answers:['Complète','Incomplète','Valide','Forte'], correct:1, explanation:'Étape essentielle.' },
            ],

            // ───────────── LEVEL 2 ─────────────
            [
            { type:'mcq', visual:'📘', question:'1+2+…+n = ?', answers:['n²','n(n+1)/2','n(n-1)/2','2n'], correct:1, explanation:'Somme classique.' },
            { type:'mcq', visual:'📘', question:'2+4+…+2n = ?', answers:['n(n+1)','n²','2n(n+1)','n(n+1)/2'], correct:0, explanation:'2(1+...+n).' },
            { type:'mcq', visual:'📘', question:'1+3+…+(2n-1)= ?', answers:['n²','2n','n(n+1)','n²/2'], correct:0, explanation:'Somme impairs.' },
            { type:'mcq', visual:'📘', question:'Initialisation pour n₀=2 vérifie :', answers:['P(1)','P(2)','P(n)','P(n+1)'], correct:1, explanation:'Rang initial choisi.' },
            { type:'mcq', visual:'📘', question:'En hérédité on part de :', answers:['P(n+1)','P(n)','Conclusion','Limite'], correct:1, explanation:'Hypothèse.' },
            { type:'mcq', visual:'📘', question:'n³−n est divisible par :', answers:['2','3','6','5'], correct:2, explanation:'Toujours multiple de 6.' },
            { type:'mcq', visual:'📘', question:'2ⁿ ≥ n+1 pour n≥0 est démontrable par :', answers:['Limite','Récurrence','Intégrale','Dérivée'], correct:1, explanation:'Classique.' },
            { type:'mcq', visual:'📘', question:'La propriété doit être vraie pour :', answers:['Un seul n','Tous les n ≥ n₀','n pair','n impair'], correct:1, explanation:'Définition.' },
            { type:'mcq', visual:'📘', question:'Récurrence forte utile pour :', answers:['Divisibilité','Limites','Primitives','Intégrales'], correct:0, explanation:'Très fréquent.' },
            { type:'mcq', visual:'📘', question:'On conclut par :', answers:['Donc P(n) vraie ∀ n≥n₀','Donc P(n) vraie pour n','Donc faux','On ne conclut pas'], correct:0, explanation:'Formule standard.' },
            ],

            // ───────────── LEVEL 3 ─────────────
            [
            { type:'mcq', visual:'📐', question:'Bernoulli : (1+x)ⁿ ≥ 1+nx pour x≥−1 est démontré par :', answers:['Récurrence','IPP','Limite','Intégrale'], correct:0, explanation:'Inégalité classique.' },
            { type:'mcq', visual:'📐', question:'Montrer n! ≥ 2ⁿ⁻¹ pour n≥1 utilise :', answers:['Récurrence','Dérivée','Somme','Limite'], correct:0, explanation:'Produit croissant.' },
            { type:'mcq', visual:'📐', question:'Si P(n) ⇒ P(n+2) on parle de :', answers:['Récurrence simple','Double','Forte','Rien'], correct:1, explanation:'Deux pas.' },
            { type:'mcq', visual:'📐', question:'Pour divisibilité on écrit :', answers:['n=3k+r','Limite','Primitive','Intégrale'], correct:0, explanation:'Structure multiple.' },
            { type:'mcq', visual:'📐', question:'Somme géométrique 1+q+…+qⁿ = ?', answers:['(1−qⁿ⁺¹)/(1−q)','qⁿ','(1−qⁿ)/(1−q)','nq'], correct:0, explanation:'Formule connue.' },
            { type:'mcq', visual:'📐', question:'Une bonne hérédité doit :', answers:['Être détaillée','Être courte','Être implicite','Être intuitive'], correct:0, explanation:'Rigueur.' },
            { type:'mcq', visual:'📐', question:'Récurrence forte suppose vraie :', answers:['P(n)','Tous ≤ n','P(n+1)','P(n-1)'], correct:1, explanation:'Définition.' },
            { type:'mcq', visual:'📐', question:'Initialisation multiple signifie :', answers:['Plusieurs rangs de départ','Erreur','Forte','Double'], correct:0, explanation:'Parfois nécessaire.' },
            { type:'mcq', visual:'📐', question:'2ⁿ ≥ n² est vraie pour n≥ ?', answers:['4','1','2','0'], correct:0, explanation:'À partir de 4.' },
            { type:'mcq', visual:'📐', question:'On ne doit jamais :', answers:['Supposer la conclusion','Factoriser','Calculer','Simplifier'], correct:0, explanation:'Erreur logique.' },
            ],

            // ───────────── LEVEL 4 ─────────────
            [
            { type:'mcq', visual:'🔥', question:'Montrer qu’une suite est croissante par récurrence nécessite :', answers:['Comparer uₙ₊₁ et uₙ','Limite','Primitive','Intégrale'], correct:0, explanation:'Comparer deux termes.' },
            { type:'mcq', visual:'🔥', question:'Si uₙ₊₁ ≥ uₙ on montre :', answers:['Croissance','Décroissance','Bornée','Divergence'], correct:0, explanation:'Définition.' },
            { type:'mcq', visual:'🔥', question:'Récurrence double utile pour :', answers:['Suites couplées','Sommes simples','Limites','Logarithmes'], correct:0, explanation:'Deux propriétés liées.' },
            { type:'mcq', visual:'🔥', question:'Pour majorer une suite on montre :', answers:['uₙ ≤ M','uₙ ≥ M','uₙ=M','Limite'], correct:0, explanation:'Bornage supérieur.' },
            { type:'mcq', visual:'🔥', question:'Si P(n) vraie ∀n alors :', answers:['Démonstration valide','Faux','Limite','Indéterminé'], correct:0, explanation:'Conclusion logique.' },
            { type:'mcq', visual:'🔥', question:'Structure correcte :', answers:['Init → HR → Conclusion','HR → Init','Conclusion seule','Calcul direct'], correct:0, explanation:'Ordre fondamental.' },
            { type:'mcq', visual:'🔥', question:'Une suite définie par uₙ₊₁=f(uₙ) se traite par :', answers:['Récurrence','Intégrale','Limite seule','Dérivée'], correct:0, explanation:'Méthode standard.' },
            { type:'mcq', visual:'🔥', question:'Pour montrer positivité :', answers:['uₙ ≥ 0','uₙ ≤ 0','uₙ=0','uₙ<0'], correct:0, explanation:'Définition.' },
            { type:'mcq', visual:'🔥', question:'Une mauvaise rédaction enlève :', answers:['Des points','De la rigueur','La validité','Tout'], correct:1, explanation:'Mais peut invalider.' },
            { type:'mcq', visual:'🔥', question:'Conclusion formelle commence par :', answers:['Donc','Car','Mais','Si'], correct:0, explanation:'Formalisme mathématique.' },
            ],

            // ───────────── LEVEL 5 ─────────────
            [
            { type:'mcq', visual:'🏆', question:'Montrer que 3ⁿ ≥ 2n+1 pour n≥0 nécessite :', answers:['Récurrence','IPP','Limite','Somme'], correct:0, explanation:'Exponentielle vs linéaire.' },
            { type:'mcq', visual:'🏆', question:'Récurrence forte utile pour Fibonacci car :', answers:['Dépend de deux termes','Suite simple','Somme','Primitive'], correct:0, explanation:'Dépendance multiple.' },
            { type:'mcq', visual:'🏆', question:'Si P(0) et P(n)⇒P(n+1) alors :', answers:['P(n) vraie ∀n≥0','Rien','Seulement n=0','Faux'], correct:0, explanation:'Principe fondamental.' },
            { type:'mcq', visual:'🏆', question:'Une inégalité s’hérite en :', answers:['Majorant conservé','Limite','Primitive','Dérivée'], correct:0, explanation:'Comparer termes.' },
            { type:'mcq', visual:'🏆', question:'Divisibilité par 9 utilise :', answers:['Récurrence','Intégrale','Dérivée','Limite'], correct:0, explanation:'Preuve classique.' },
            { type:'mcq', visual:'🏆', question:'Si propriété vraie pour n₀ et hérédité alors :', answers:['∀ n≥n₀','Pour un n','Pour n pair','Rien'], correct:0, explanation:'Conclusion.' },
            { type:'mcq', visual:'🏆', question:'La clé d’une bonne hérédité est :', answers:['Factoriser','Deviner','Ignorer','Supposer conclusion'], correct:0, explanation:'Manipulation algébrique.' },
            { type:'mcq', visual:'🏆', question:'On doit écrire clairement :', answers:['Hypothèse de récurrence','Résultat final','Limite','Primitive'], correct:0, explanation:'Toujours explicitée.' },
            { type:'mcq', visual:'🏆', question:'Récurrence double implique :', answers:['Deux propriétés','Deux suites indépendantes','Deux limites','Deux dérivées'], correct:0, explanation:'Couplage.' },
            { type:'mcq', visual:'🏆', question:'La conclusion s’écrit :', answers:['P(n) vraie ∀n≥n₀','P(n) vraie pour n','Peut-être vraie','On verra'], correct:0, explanation:'Formalisme final.' },
            ],

            // ───────────── LEVEL 6 ─────────────
            [
            { type:'mcq', visual:'👑', question:'Récurrence appliquée aux matrices concerne :', answers:['Puissances de matrices','Limites simples','Primitives','Intégrales'], correct:0, explanation:'Applications avancées.' },
            { type:'mcq', visual:'👑', question:'Récurrence forte utile pour décomposition :', answers:['En facteurs','Limite','Primitive','Dérivée'], correct:0, explanation:'Divisibilité.' },
            { type:'mcq', visual:'👑', question:'Pour montrer convexité discrète :', answers:['Comparer uₙ₊₂−2uₙ₊₁+uₙ','Intégrale','Primitive','Limite'], correct:0, explanation:'Différences secondes.' },
            { type:'mcq', visual:'👑', question:'Si propriété dépend de deux rangs précédents :', answers:['Récurrence forte','Simple','Impossible','Limite'], correct:0, explanation:'Utiliser plusieurs rangs.' },
            { type:'mcq', visual:'👑', question:'Montrer croissance exponentielle nécessite :', answers:['Comparer termes','Primitive','Intégrale','Logarithme'], correct:0, explanation:'Comparaison directe.' },
            { type:'mcq', visual:'👑', question:'La structure logique repose sur :', answers:['Implication','Égalité','Limite','Approximation'], correct:0, explanation:'P(n) ⇒ P(n+1).' },
            { type:'mcq', visual:'👑', question:'Une preuve sans conclusion est :', answers:['Incomplète','Valide','Forte','Acceptable'], correct:0, explanation:'Conclusion indispensable.' },
            { type:'mcq', visual:'👑', question:'La récurrence formalise :', answers:['Infinité dénombrable','Continuité','Dérivation','Intégration'], correct:0, explanation:'Sur ℕ.' },
            { type:'mcq', visual:'👑', question:'Oublier l’hypothèse rend la preuve :', answers:['Illogique','Valide','Forte','Simple'], correct:0, explanation:'Erreur logique.' },
            { type:'mcq', visual:'👑', question:'Principe fondamental des entiers repose sur :', answers:['Récurrence','Limite','Dérivée','Primitive'], correct:0, explanation:'Équivalent logique.' },
            ]

    ]
    },
    {id: 'suites-explicites',
    label: 'Suites définies explicitement',
    icon: '📈',

    lesson: {
            formula: "u_n = u_0 + nr  |  u_n = u_0 × q^n  |  S_n(arith)= (n+1)(u_0+u_n)/2  |  S_n(geo)= u_0(1-q^{n+1})/(1-q)",
            text: "Une suite explicite permet de calculer directement u_n en fonction de n. Les suites arithmétiques ont une croissance linéaire, les suites géométriques une croissance exponentielle. Les sommes partielles permettent de calculer des totaux cumulés.",
            example: "Si u_n = 3×2^n alors u_4 = 48.  Somme des 5 premiers termes : 3(1−2^5)/(1−2)=93."
    },

    fullBlocks: [
        {
        type: 'definition',
        title: '📌 Principe de récurrence (simple)',
        text: "Le principe de récurrence permet de démontrer qu’une propriété P(n) est vraie pour tout entier n ≥ n₀.<br><br>Il repose sur deux étapes indispensables :<br><br>1) Initialisation : on vérifie que la propriété est vraie au rang n₀.<br>2) Hérédité : on suppose que la propriété est vraie pour un entier n ≥ n₀ (hypothèse de récurrence) et on démontre qu’elle est alors vraie au rang n+1.<br><br>Si ces deux étapes sont vérifiées, alors P(n) est vraie pour tout n ≥ n₀.<br><br>Schéma logique :<br>P(n₀) vraie<br>P(n) ⇒ P(n+1)<br>Donc ∀ n ≥ n₀, P(n) vraie.<br><br>Exemple de propriété :<br>P(n) : 2^n ≥ n+1."
        },

        {
        type: 'definition',
        title: '📌 Récurrence à partir d’un rang n₀',
        text: "La propriété ne commence pas forcément à n = 0 ou n = 1.<br><br>On peut vouloir démontrer une propriété pour tout n ≥ n₀.<br><br>On vérifie alors uniquement le rang n₀ (et pas les rangs précédents), puis on démontre l’hérédité à partir de ce rang.<br><br>Exemple :<br>P(n) : n² ≥ 2n pour tout n ≥ 2.<br>Initialisation au rang 2 : 4 ≥ 4 (vrai).<br>Puis on démontre que si n² ≥ 2n alors (n+1)² ≥ 2(n+1)."
        },

        {
        type: 'definition',
        title: '📌 Récurrence forte',
        text: "Dans la récurrence forte, pour démontrer la propriété au rang n+1, on suppose qu’elle est vraie pour tous les entiers k tels que n₀ ≤ k ≤ n.<br><br>Hypothèse : P(n₀), P(n₀+1), … , P(n) vraies.<br>But : démontrer P(n+1).<br><br>Cette méthode est utile lorsque le rang n+1 dépend de plusieurs rangs précédents.<br><br>Exemple :<br>Montrer que tout entier n ≥ 2 peut s’écrire comme produit de nombres premiers.<br>La démonstration utilise les décompositions aux rangs précédents."
        },

        {
        type: 'definition',
        title: '📌 Récurrence double',
        text: "La récurrence double consiste à démontrer simultanément deux propriétés liées P(n) et Q(n).<br><br>Initialisation : on vérifie P(n₀) et Q(n₀).<br>Hérédité : on suppose P(n) et Q(n) vraies et on démontre P(n+1) et Q(n+1).<br><br>Elle est utilisée lorsque les deux propriétés se démontrent ensemble.<br><br>Exemple :<br>P(n) : u_n ≥ 0<br>Q(n) : u_n ≤ 1<br>On montre que si 0 ≤ u_n ≤ 1 alors 0 ≤ u_{n+1} ≤ 1."
        },

        {
        type: 'example',
        title: '✅ Exemple fondamental',
        text: "Montrons que 1 + 2 + … + n = n(n+1)/2 pour tout n ≥ 1.<br><br>Définition de la propriété :<br>P(n) : 1 + 2 + … + n = n(n+1)/2.<br><br>Initialisation :<br>Pour n=1 : 1 = 1×2/2 donc vrai.<br><br>Hérédité :<br>On suppose que 1 + 2 + … + n = n(n+1)/2.<br>Alors au rang n+1 :<br>1 + 2 + … + n + (n+1)<br>= n(n+1)/2 + (n+1)<br>= (n+1)(n/2 + 1)<br>= (n+1)(n+2)/2.<br><br>Donc P(n+1) est vraie.<br>Conclusion : la formule est vraie pour tout n ≥ 1.<br><br>Autre exemple :<br>1 + 3 + 5 + … + (2n−1) = n²."
        },

        {
        type: 'technique',
        title: '🛠️ Méthode de rédaction parfaite',
        text: "1) Définir clairement la propriété P(n).<br>   Exemple : P(n) : 2^n ≥ n+1.<br><br>2) Rédiger l’initialisation avec calcul détaillé.<br><br>3) Énoncer explicitement :<br>   'Supposons P(n) vraie pour un entier n ≥ n₀.'<br><br>4) Partir de l’expression au rang n+1 et utiliser uniquement l’hypothèse de récurrence.<br><br>5) Conclure formellement :<br>   'Par le principe de récurrence, la propriété est vraie pour tout n ≥ n₀.'"
        },

        {
        type: 'warning',
        title: '⚠️ Erreurs fréquentes',
        text: "• Oublier l’initialisation.<br>• Ne pas définir clairement P(n).<br>• Utiliser la propriété au rang n+1 sans l’avoir démontrée.<br>• Oublier la phrase de conclusion.<br>• Faire une vérification numérique pour quelques valeurs au lieu d’une vraie démonstration.<br><br>La récurrence n’est pas une vérification expérimentale : c’est une preuve logique."
        }
    ],

    levels: [

        // ───────────────────────── LEVEL 1 ─────────────────────────
        [
            { type:'mcq', visual:'📈', question:'Suite arithmétique de raison 3 et u0=2. u1=?', answers:['5','6','3','2'], correct:0, explanation:'2+3=5.' },
            { type:'mcq', visual:'📈', question:'Suite géométrique q=2, u0=3. u1=?', answers:['6','5','3','9'], correct:0, explanation:'3×2=6.' },
            { type:'mcq', visual:'📈', question:'u_n=5+2n est :', answers:['arithmétique','géométrique','constante','quadratique'], correct:0, explanation:'Forme u0+nr.' },
            { type:'mcq', visual:'📈', question:'u_n=4×3^n est :', answers:['géométrique','arithmétique','linéaire','affine'], correct:0, explanation:'Forme u0 q^n.' },
            { type:'mcq', visual:'📈', question:'Suite arithmétique r=5. u2−u1=?', answers:['5','10','1','0'], correct:0, explanation:'Différence constante.' },
            { type:'mcq', visual:'📈', question:'Suite géométrique q=4. u2/u1=?', answers:['4','2','8','1'], correct:0, explanation:'Rapport constant.' },
            { type:'mcq', visual:'📈', question:'u_n=7 est :', answers:['constante','arithmétique','géométrique','exponentielle'], correct:0, explanation:'r=0.' },
            { type:'mcq', visual:'📈', question:'u_n=2n+1 est croissante ?', answers:['oui','non','constante','décroissante'], correct:0, explanation:'Coefficient positif.' },
            { type:'mcq', visual:'📈', question:'u_n=3×0.5^n est :', answers:['décroissante','croissante','constante','arithmétique'], correct:0, explanation:'q<1.' },
            { type:'mcq', visual:'📈', question:'Suite arithmétique r=0 est :', answers:['constante','géométrique','linéaire','nulle'], correct:0, explanation:'Pas de variation.' }
        ],

        // ───────────────────────── LEVEL 2 ─────────────────────────
        [
            { type:'input', visual:'🎯', question:'u_n=4+3n. u_5=?', correct:'19', explanation:'4+15=19.' },
            { type:'input', visual:'🎯', question:'u_n=2×3^n. u_3=?', correct:'54', explanation:'2×27.' },
            { type:'input', visual:'🎯', question:'Suite arithmétique u0=1,r=4. u_6=?', correct:'25', explanation:'1+24.' },
            { type:'input', visual:'🎯', question:'Suite géométrique u0=5,q=2. u_4=?', correct:'80', explanation:'5×16.' },
            { type:'input', visual:'🎯', question:'u_n=10−2n. u_3=?', correct:'4', explanation:'10−6.' },
            { type:'input', visual:'🎯', question:'u_n=3×5^n. u_2=?', correct:'75', explanation:'3×25.' },
            { type:'input', visual:'🎯', question:'Suite arithmétique u0=0,r=7. u_8=?', correct:'56', explanation:'7×8.' },
            { type:'input', visual:'🎯', question:'Suite géométrique u0=1,q=4. u_3=?', correct:'64', explanation:'4^3.' },
            { type:'input', visual:'🎯', question:'u_n=6+n. u_10=?', correct:'16', explanation:'6+10.' },
            { type:'input', visual:'🎯', question:'u_n=9×2^n. u_1=?', correct:'18', explanation:'9×2.' }
        ],

        // ───────────────────────── LEVEL 3 ─────────────────────────
        [
            { type:'input', visual:'📊', question:'Somme arithmétique u0=1,r=1,n=4 ?', correct:'15', explanation:'1+2+3+4+5=15.' },
            { type:'input', visual:'📊', question:'Somme géométrique u0=1,q=2,n=3 ?', correct:'15', explanation:'1+2+4+8.' },
            { type:'input', visual:'📊', question:'Somme arithmétique u0=3,r=3,n=3 ?', correct:'30', explanation:'3+6+9+12.' },
            { type:'input', visual:'📊', question:'Somme géométrique u0=2,q=3,n=2 ?', correct:'26', explanation:'2+6+18.' },
            { type:'input', visual:'📊', question:'Somme arithmétique u0=5,r=5,n=1 ?', correct:'15', explanation:'5+10.' },
            { type:'input', visual:'📊', question:'Somme géométrique u0=3,q=2,n=1 ?', correct:'9', explanation:'3+6.' },
            { type:'input', visual:'📊', question:'Somme arithmétique u0=2,r=4,n=2 ?', correct:'18', explanation:'2+6+10.' },
            { type:'input', visual:'📊', question:'Somme géométrique u0=1,q=3,n=2 ?', correct:'13', explanation:'1+3+9.' },
            { type:'input', visual:'📊', question:'Somme arithmétique u0=0,r=2,n=4 ?', correct:'20', explanation:'0+2+4+6+8.' },
            { type:'input', visual:'📊', question:'Somme géométrique u0=5,q=2,n=0 ?', correct:'5', explanation:'Un seul terme.' }
        ],

        // ───────────────────────── LEVEL 4 ─────────────────────────
        [
            { type:'mcq', visual:'📈', question:'Résoudre 2^n=8', answers:['3','2','4','1'], correct:0, explanation:'2^3=8.' },
            { type:'mcq', visual:'📈', question:'Résoudre 3^n=27', answers:['3','2','4','9'], correct:0, explanation:'3^3.' },
            { type:'mcq', visual:'📈', question:'2^n=16', answers:['4','3','5','2'], correct:0, explanation:'2^4.' },
            { type:'mcq', visual:'📈', question:'5^n=25', answers:['2','3','4','5'], correct:0, explanation:'5^2.' },
            { type:'mcq', visual:'📈', question:'Croissance la plus rapide ?', answers:['2^n','n^2','3n','100n'], correct:0, explanation:'Exponentielle.' },
            { type:'mcq', visual:'📈', question:'Si q>1 la suite géométrique est :', answers:['croissante','décroissante','constante','linéaire'], correct:0 },
            { type:'mcq', visual:'📈', question:'Si 0<q<1 elle est :', answers:['décroissante','croissante','constante','arithmétique'], correct:0 },
            { type:'mcq', visual:'📈', question:'Suite arithmétique r<0 est :', answers:['décroissante','croissante','constante','exponentielle'], correct:0 },
            { type:'mcq', visual:'📈', question:'u_n=2^n dépasse n^3 pour :', answers:['n grand','jamais','n=1','n=2'], correct:0 },
            { type:'mcq', visual:'📈', question:'u_n=5×1^n est :', answers:['constante','croissante','décroissante','linéaire'], correct:0 }
        ],

        // ───────────────────────── LEVEL 5 ─────────────────────────
        [
            { type:'input', visual:'🧠', question:'Résoudre 2^n=32', correct:'5', explanation:'2^5.' },
            { type:'input', visual:'🧠', question:'Résoudre 10×2^n=80', correct:'3', explanation:'2^n=8.' },
            { type:'input', visual:'🧠', question:'Résoudre 3×3^n=81', correct:'3', explanation:'3^(n+1)=81.' },
            { type:'input', visual:'🧠', question:'u_n=5+4n=25. n=?', correct:'5', explanation:'4n=20.' },
            { type:'input', visual:'🧠', question:'u_n=7×2^n=56. n=?', correct:'3', explanation:'2^n=8.' },
            { type:'input', visual:'🧠', question:'u_n=1+3n=16. n=?', correct:'5', explanation:'3n=15.' },
            { type:'input', visual:'🧠', question:'u_n=2×5^n=250. n=?', correct:'3', explanation:'5^n=125.' },
            { type:'input', visual:'🧠', question:'u_n=4+2n=18. n=?', correct:'7', explanation:'2n=14.' },
            { type:'input', visual:'🧠', question:'u_n=3×4^n=192. n=?', correct:'3', explanation:'4^n=64.' },
            { type:'input', visual:'🧠', question:'u_n=9+ n=20. n=?', correct:'11', explanation:'9+n=20.' }
        ],

        // ───────────────────────── LEVEL 6 ─────────────────────────
        [
            { type:'mcq', visual:'🏆', question:'La croissance dominante ?', answers:['exponentielle','linéaire','quadratique','logarithmique'], correct:0 },
            { type:'mcq', visual:'🏆', question:'2^n vs 3^n ?', answers:['3^n plus rapide','2^n plus rapide','égales','linéaires'], correct:0 },
            { type:'mcq', visual:'🏆', question:'Si q=1 ?', answers:['suite constante','croissante','décroissante','arithmétique'], correct:0 },
            { type:'mcq', visual:'🏆', question:'Somme géométrique converge si ?', answers:['|q|<1','q>1','q=2','toujours'], correct:0 },
            { type:'mcq', visual:'🏆', question:'Somme arithmétique est ?', answers:['quadratique en n','exponentielle','constante','logarithmique'], correct:0 },
            { type:'mcq', visual:'🏆', question:'2^n / n^3 → ?', answers:['+∞','0','1','−∞'], correct:0 },
            { type:'mcq', visual:'🏆', question:'Suite géométrique q<0 alterne ?', answers:['oui','non','jamais','toujours positive'], correct:0 },
            { type:'mcq', visual:'🏆', question:'Suite arithmétique est polynomiale ?', answers:['oui','non','exponentielle','logarithmique'], correct:0 },
            { type:'mcq', visual:'🏆', question:'10^n domine 2^n ?', answers:['oui','non','égales','linéaire'], correct:0 },
            { type:'mcq', visual:'🏆', question:'Croissance la plus lente ?', answers:['log(n)','n','n^2','2^n'], correct:0 }
        ]

    ]
    },
    {
    id: 'suites-recurrence',
    label: 'Suites définies par récurrence',
    icon: '🔁',
    lesson: {
        formula: 'u_{n+1} = f(u_n)',
        text: "On étudie la suite via la fonction associée f : monotonie, bornes et convergence.",
        example: "u_{n+1} = (u_n + 2)/3"
    },
    fullBlocks: [
        {
        type: 'formula',
        title: '🔑 Fonction associée',
        formula: 'u_{n+1} = f(u_n)',
        text: "On relie la suite à l’étude de la fonction f."
        },
        {
        type: 'method',
        title: '📈 Monotonie',
        text: "Étudier le signe de u_{n+1} − u_n en utilisant f(x) − x."
        },
        {
        type: 'method',
        title: '🧱 Bornes',
        text: "Montrer par récurrence que la suite reste dans un intervalle stable."
        },
        {
        type: 'method',
        title: '🎯 Convergence',
        text: "Si la suite est monotone et bornée, alors elle converge."
        },
        {
        type: 'formula',
        title: '📌 Point fixe',
        formula: 'f(ℓ) = ℓ',
        text: "La limite éventuelle vérifie l’équation du point fixe."
        },
        {
        type: 'method',
        title: '⚖️ Suites adjacentes',
        text: "Deux suites l’une croissante, l’autre décroissante, et convergeant vers la même limite."
        }
    ],
    levels: [
        // LEVEL 1
        [
        { type: 'mcq', visual: '🔁', question: 'Si u_{n+1} = u_n + 3, la suite est :', answers: ['croissante','décroissante','constante','bornée'], correct: 0, explanation: 'On ajoute 3 à chaque étape.' },
        { type: 'mcq', visual: '🔁', question: 'Pour étudier la monotonie on regarde :', answers: ['u_{n+1}-u_n','u_n²','f\'(x)','la limite'], correct: 0, explanation: 'On compare deux termes consécutifs.' },
        { type: 'mcq', visual: '🔁', question: 'Une suite croissante et majorée est :', answers: ['convergente','divergente','oscillante','constante'], correct: 0, explanation: 'Théorème fondamental.' },
        { type: 'mcq', visual: '🔁', question: 'Si f(ℓ)=ℓ alors ℓ est :', answers: ['un point fixe','une borne','un maximum','une dérivée'], correct: 0, explanation: 'Définition du point fixe.' },
        { type: 'mcq', visual: '🔁', question: 'Une suite bornée signifie :', answers: ['elle reste dans un intervalle','elle converge toujours','elle est constante','elle est périodique'], correct: 0, explanation: 'Encadrement.' },
        { type: 'mcq', visual: '🔁', question: 'Pour montrer qu’une suite est majorée, on utilise :', answers: ['une récurrence','une intégrale','une dérivée seconde','un logarithme'], correct: 0, explanation: 'Récurrence d’encadrement.' },
        { type: 'mcq', visual: '🔁', question: 'Si u_{n+1} − u_n ≥ 0 alors la suite est :', answers: ['croissante','décroissante','bornée','convergente'], correct: 0, explanation: 'Définition.' },
        { type: 'mcq', visual: '🔁', question: 'Une suite constante est :', answers: ['monotone','non bornée','divergente','oscillante'], correct: 0, explanation: 'Elle est à la fois croissante et décroissante.' },
        { type: 'mcq', visual: '🔁', question: 'Deux suites adjacentes ont :', answers: ['même limite','limites opposées','aucune limite','des oscillations'], correct: 0, explanation: 'Théorème des suites adjacentes.' },
        { type: 'mcq', visual: '🔁', question: 'La limite vérifie :', answers: ['f(ℓ)=ℓ','f\'(ℓ)=0','ℓ=0','u_0=ℓ'], correct: 0, explanation: 'Équation du point fixe.' }
        ],

        // LEVEL 2
        [
        { type: 'input', visual: '🎯', question: 'Si u_{n+1}=u_n/2 et u_0=4, u_1 = ?', correct: '2', explanation: '4/2=2.' },
        { type: 'mcq', visual: '🔁', question: 'u_{n+1}=u_n/2 est :', answers: ['décroissante','croissante','constante','non définie'], correct: 0, explanation: 'On divise par 2.' },
        { type: 'mcq', visual: '🔁', question: 'Elle est bornée par :', answers: ['0','∞','−∞','1'], correct: 0, explanation: 'Toujours positive.' },
        { type: 'mcq', visual: '🔁', question: 'Sa limite est :', answers: ['0','1','2','4'], correct: 0, explanation: 'Suite géométrique de raison 1/2.' },
        { type: 'mcq', visual: '🔁', question: 'Pour montrer 0 ≤ u_n ≤ 4 on fait :', answers: ['récurrence','primitive','logarithme','tableau'], correct: 0, explanation: 'Encadrement.' },
        { type: 'mcq', visual: '🔁', question: 'Si f est croissante et u_n ≤ ℓ alors :', answers: ['u_{n+1} ≤ f(ℓ)','u_{n+1} ≥ f(ℓ)','aucune relation','u_{n+1}=ℓ'], correct: 0, explanation: 'Croissance de f.' },
        { type: 'mcq', visual: '🔁', question: 'Un point fixe vérifie :', answers: ['f(x)=x','f\'(x)=1','f(x)=0','x=0'], correct: 0, explanation: 'Définition.' },
        { type: 'mcq', visual: '🔁', question: 'Si suite croissante non majorée alors :', answers: ['elle diverge','elle converge','elle est bornée','elle est constante'], correct: 0, explanation: 'Elle tend vers +∞.' },
        { type: 'mcq', visual: '🔁', question: 'Si u_{n+1}-u_n ≤ 0 alors :', answers: ['décroissante','croissante','convergente','oscillante'], correct: 0, explanation: 'Définition.' },
        { type: 'mcq', visual: '🔁', question: 'Bornée et décroissante ⇒', answers: ['convergente','divergente','périodique','nulle'], correct: 0, explanation: 'Théorème.' }
        ],
        // LEVEL 3
        [
        { type: 'mcq', visual: '🔁', question: 'Si u_{n+1}=√u_n et u_0≥1 alors la suite est :', answers: ['décroissante','croissante','non monotone','constante'], correct: 0, explanation: '√x ≤ x pour x ≥ 1.' },
        { type: 'mcq', visual: '🔁', question: 'Elle est minorée par :', answers: ['1','0','−1','2'], correct: 0, explanation: 'Si u_0≥1 alors u_n≥1.' },
        { type: 'mcq', visual: '🔁', question: 'Une suite décroissante et minorée est :', answers: ['convergente','divergente','oscillante','non bornée'], correct: 0, explanation: 'Théorème de convergence.' },
        { type: 'mcq', visual: '🔁', question: 'La limite ℓ vérifie :', answers: ['ℓ=√ℓ','ℓ=0','ℓ=1','ℓ²=0'], correct: 0, explanation: 'Équation du point fixe.' },
        { type: 'mcq', visual: '🔁', question: 'ℓ=√ℓ donne :', answers: ['ℓ=0 ou 1','ℓ=1 uniquement','ℓ=0 uniquement','ℓ=2'], correct: 0, explanation: 'Résolution ℓ²=ℓ.' },
        { type: 'mcq', visual: '🔁', question: 'Si u_0≥1 alors la limite est :', answers: ['1','0','2','∞'], correct: 0, explanation: 'Encadrement ≥1.' },
        { type: 'mcq', visual: '🔁', question: 'Étudier f(x)-x permet :', answers: ['monotonie','dérivée seconde','primitive','aire'], correct: 0, explanation: 'Comparer deux termes.' },
        { type: 'mcq', visual: '🔁', question: 'Si f est décroissante, la suite peut :', answers: ['ne pas être monotone','être toujours croissante','être constante','être géométrique'], correct: 0, explanation: 'Alternance possible.' },
        { type: 'mcq', visual: '🔁', question: 'Récurrence d’encadrement sert à :', answers: ['montrer stabilité intervalle','calculer dérivée','intégrer','factoriser'], correct: 0, explanation: 'Intervalle stable.' },
        { type: 'mcq', visual: '🔁', question: 'Intervalle stable signifie :', answers: ['f(I)⊂I','I⊂f(I)','f(I)=ℝ','I vide'], correct: 0, explanation: 'Stabilité par f.' }
        ],

        // LEVEL 4
        [
        { type: 'mcq', visual: '🔁', question: 'Si f est croissante et u_0≤ℓ alors :', answers: ['u_n≤ℓ','u_n≥ℓ','u_n=ℓ','aucune info'], correct: 0, explanation: 'Conservation ordre.' },
        { type: 'mcq', visual: '🔁', question: 'Suite définie par u_{n+1}=(u_n+3)/4 est :', answers: ['convergente','divergente','oscillante','non bornée'], correct: 0, explanation: 'Affinement vers point fixe.' },
        { type: 'input', visual: '🎯', question: 'Résoudre ℓ=(ℓ+3)/4 donne ℓ = ?', correct: '1', explanation: '4ℓ=ℓ+3.' },
        { type: 'mcq', visual: '🔁', question: 'Cette suite est :', answers: ['contractante','explosive','périodique','non définie'], correct: 0, explanation: 'Coefficient 1/4.' },
        { type: 'mcq', visual: '🔁', question: 'Si |f\'(ℓ)|<1 alors :', answers: ['convergence locale','divergence','oscillation infinie','instabilité'], correct: 0, explanation: 'Critère de stabilité.' },
        { type: 'mcq', visual: '🔁', question: 'Si |f\'(ℓ)|>1 alors :', answers: ['instable','stable','bornée','constante'], correct: 0, explanation: 'Répulsion locale.' },
        { type: 'mcq', visual: '🔁', question: 'Point fixe attractif signifie :', answers: ['|f\'(ℓ)|<1','|f\'(ℓ)|>1','f(ℓ)=0','f\'(ℓ)=0'], correct: 0, explanation: 'Condition stabilité.' },
        { type: 'mcq', visual: '🔁', question: 'Si suite croissante majorée par ℓ alors :', answers: ['limite ≤ℓ','limite=0','diverge','non bornée'], correct: 0, explanation: 'Encadrement limite.' },
        { type: 'mcq', visual: '🔁', question: 'Deux suites adjacentes sont :', answers: ['l’une croissante l’autre décroissante','deux croissantes','deux divergentes','oscillantes'], correct: 0, explanation: 'Définition.' },
        { type: 'mcq', visual: '🔁', question: 'Suites adjacentes ⇒', answers: ['même limite','limites opposées','pas de limite','périodiques'], correct: 0, explanation: 'Théorème classique.' }
        ],

        // LEVEL 5
        [
        { type: 'mcq', visual: '🏆', question: 'u_{n+1}=cos(u_n) sur [0,1] admet :', answers: ['un point fixe','aucun','deux','infini'], correct: 0, explanation: 'Intersection cos(x)=x.' },
        { type: 'mcq', visual: '🏆', question: 'Si f contractante sur I alors :', answers: ['suite converge','suite diverge','oscille','explose'], correct: 0, explanation: 'Théorème du point fixe.' },
        { type: 'mcq', visual: '🏆', question: 'Contractante signifie :', answers: ['|f\'|<1','|f\'|>1','f=0','f constante'], correct: 0, explanation: 'Définition locale.' },
        { type: 'mcq', visual: '🏆', question: 'Si f(x)-x change de signe alors :', answers: ['monotonie change','suite constante','suite divergente','pas d’effet'], correct: 0, explanation: 'Signe de différence.' },
        { type: 'mcq', visual: '🏆', question: 'Stabilité dépend de :', answers: ['f\'(ℓ)','f(0)','u_0','borne'], correct: 0, explanation: 'Dérivée au point fixe.' },
        { type: 'mcq', visual: '🏆', question: 'Si f croissante et I stable alors :', answers: ['suite reste dans I','suite diverge','suite négative','suite constante'], correct: 0, explanation: 'Récurrence.' },
        { type: 'mcq', visual: '🏆', question: 'Encadrement donne :', answers: ['bornitude','divergence','périodicité','dérivabilité'], correct: 0, explanation: 'But principal.' },
        { type: 'mcq', visual: '🏆', question: 'Une suite contractante converge vers :', answers: ['point fixe','0','∞','u_0'], correct: 0, explanation: 'Unique point fixe.' },
        { type: 'mcq', visual: '🏆', question: 'Point fixe unique si :', answers: ['f strictement contractante','f linéaire','f constante','f dérivable'], correct: 0, explanation: 'Théorème contraction.' },
        { type: 'mcq', visual: '🏆', question: 'Convergence globale nécessite :', answers: ['intervalle stable','valeur initiale nulle','dérivée seconde','logarithme'], correct: 0, explanation: 'Stabilité globale.' }
        ],

        // LEVEL 6
        [
        { type: 'mcq', visual: '🏆', question: 'u_{n+1}=2u_n(1-u_n) peut :', answers: ['osciller','être toujours constante','être linéaire','être monotone'], correct: 0, explanation: 'Comportement non monotone possible.' },
        { type: 'mcq', visual: '🏆', question: 'Si f décroissante alors :', answers: ['alternance possible','toujours croissante','constante','bornée'], correct: 0, explanation: 'Effet miroir.' },
        { type: 'mcq', visual: '🏆', question: 'Stabilité locale se lit sur :', answers: ['|f\'(ℓ)|','f(0)','u_0','borne sup'], correct: 0, explanation: 'Critère dérivée.' },
        { type: 'mcq', visual: '🏆', question: 'Si |f\'(ℓ)|=1 alors :', answers: ['cas limite','stable','diverge','constante'], correct: 0, explanation: 'Cas critique.' },
        { type: 'mcq', visual: '🏆', question: 'Suite adjacente permet de :', answers: ['prouver convergence','montrer divergence','intégrer','dériver'], correct: 0, explanation: 'Méthode encadrement.' },
        { type: 'mcq', visual: '🏆', question: 'Si f continue sur I fermé stable alors :', answers: ['limite existe','suite diverge','suite explose','suite périodique'], correct: 0, explanation: 'Théorème standard.' },
        { type: 'mcq', visual: '🏆', question: 'Convergence vers ℓ implique :', answers: ['u_{n+1}-u_n→0','u_n constant','u_n→∞','f\'=0'], correct: 0, explanation: 'Conséquence limite.' },
        { type: 'mcq', visual: '🏆', question: 'Encadrement croissant/décroissant donne :', answers: ['adjacence','divergence','oscillation','linéarité'], correct: 0, explanation: 'Méthode classique.' },
        { type: 'mcq', visual: '🏆', question: 'Suite monotone non bornée :', answers: ['diverge','converge','oscille','constante'], correct: 0, explanation: 'Tend vers ±∞.' },
        { type: 'mcq', visual: '🏆', question: 'Point fixe répulsif si :', answers: ['|f\'(ℓ)|>1','|f\'(ℓ)|<1','f(ℓ)=0','f\'(ℓ)=0'], correct: 0, explanation: 'Instabilité locale.' }
        ]
    ]
    },
    {
    id: 'convergence-suites',
    label: 'Convergence des suites',
    icon: '📈',
    lesson: {
        formula: 'lim u_n = ℓ',
        text: "Une suite converge vers ℓ si les termes se rapprochent arbitrairement de ℓ quand n → +∞.",
        example: "lim (1/n) = 0"
    },
    fullBlocks: [
        {
        type: 'formula',
        title: '🔑 Définition',
        formula: '∀ε>0, ∃N tel que n≥N ⇒ |u_n−ℓ|<ε',
        text: "Définition rigoureuse de la limite."
        },
        {
        type: 'method',
        title: '🧱 Théorème des gendarmes',
        text: "Si a_n ≤ u_n ≤ b_n et a_n, b_n → ℓ alors u_n → ℓ."
        },
        {
        type: 'method',
        title: '📈 Suites monotones',
        text: "Toute suite monotone et bornée est convergente."
        },
        {
        type: 'formula',
        title: '📐 Suites géométriques',
        formula: 'u_n = u_0 q^n',
        text: "Si |q|<1 alors u_n → 0."
        },
        {
        type: 'formula',
        title: '🌟 Limite remarquable',
        formula: '(1 + a/n)^n → e^a',
        text: "Limite fondamentale utilisée en analyse."
        }
    ],
    levels: [

        // LEVEL 1
        [
        { type: 'mcq', visual: '📈', question: 'lim (1/n) =', answers: ['0','1','∞','n'], correct: 0, explanation: 'Inverse tend vers 0.' },
        { type: 'mcq', visual: '📈', question: 'Une suite bornée signifie :', answers: ['elle reste dans un intervalle','elle converge toujours','elle est constante','elle diverge'], correct: 0, explanation: 'Encadrement.' },
        { type: 'mcq', visual: '📈', question: 'Si |q|<1 alors q^n →', answers: ['0','1','∞','q'], correct: 0, explanation: 'Puissance <1.' },
        { type: 'mcq', visual: '📈', question: 'Suite croissante majorée ⇒', answers: ['converge','diverge','oscille','nulle'], correct: 0, explanation: 'Théorème.' },
        { type: 'mcq', visual: '📈', question: 'Suite décroissante minorée ⇒', answers: ['converge','diverge','explose','oscille'], correct: 0, explanation: 'Théorème.' },
        { type: 'mcq', visual: '📈', question: 'lim 5 =', answers: ['5','0','∞','1'], correct: 0, explanation: 'Suite constante.' },
        { type: 'mcq', visual: '📈', question: 'Si q=2 alors 2^n →', answers: ['∞','0','1','2'], correct: 0, explanation: 'Croissance exponentielle.' },
        { type: 'mcq', visual: '📈', question: 'Si q=−1/2 alors q^n →', answers: ['0','1','−1','∞'], correct: 0, explanation: 'Valeur absolue <1.' },
        { type: 'mcq', visual: '📈', question: 'Théorème des gendarmes sert à :', answers: ['encadrer','dériver','intégrer','factoriser'], correct: 0, explanation: 'Encadrement limite.' },
        { type: 'mcq', visual: '📈', question: 'Une suite divergente ne possède pas :', answers: ['de limite finie','de borne','de terme','de définition'], correct: 0, explanation: 'Définition.' }
        ],

        // LEVEL 2
        [
        { type: 'mcq', visual: '📈', question: 'lim (2/n) =', answers: ['0','2','1','∞'], correct: 0, explanation: 'Même comportement que 1/n.' },
        { type: 'mcq', visual: '📈', question: 'lim (n/(n+1)) =', answers: ['1','0','∞','n'], correct: 0, explanation: 'Rapport même degré.' },
        { type: 'mcq', visual: '📈', question: 'Si u_n ≤ 3 et croissante alors :', answers: ['lim ≤3','lim=0','diverge','nulle'], correct: 0, explanation: 'Encadrement.' },
        { type: 'mcq', visual: '📈', question: 'lim (−1)^n =', answers: ['n’existe pas','0','1','−1'], correct: 0, explanation: 'Oscillation.' },
        { type: 'mcq', visual: '📈', question: 'lim (3n+1)/(n) =', answers: ['3','0','1','∞'], correct: 0, explanation: 'Terme dominant.' },
        { type: 'mcq', visual: '📈', question: 'Si q=1 alors q^n =', answers: ['1','0','∞','n'], correct: 0, explanation: 'Constante.' },
        { type: 'mcq', visual: '📈', question: 'Si q=−2 alors q^n', answers: ['diverge','0','1','−1'], correct: 0, explanation: '|q|>1.' },
        { type: 'mcq', visual: '📈', question: 'Suite constante est :', answers: ['convergente','divergente','oscillante','explosive'], correct: 0, explanation: 'Limite égale valeur.' },
        { type: 'mcq', visual: '📈', question: 'Si 0≤u_n≤1/n alors :', answers: ['u_n→0','u_n→1','diverge','oscille'], correct: 0, explanation: 'Gendarmes.' },
        { type: 'mcq', visual: '📈', question: '(1+1/n)^n →', answers: ['e','1','0','∞'], correct: 0, explanation: 'Limite remarquable.' }
        ],

        // LEVEL 3
        [
        { type: 'mcq', visual: '📈', question: '(1+2/n)^n →', answers: ['e²','e','2','1'], correct: 0, explanation: 'Formule générale.' },
        { type: 'mcq', visual: '📈', question: 'lim (n²+n)/(n²) =', answers: ['1','0','∞','2'], correct: 0, explanation: 'Même degré.' },
        { type: 'mcq', visual: '📈', question: 'Si u_n ≥0 décroissante alors :', answers: ['converge','diverge','explose','oscille'], correct: 0, explanation: 'Bornée par 0.' },
        { type: 'mcq', visual: '📈', question: 'lim (√n / n) =', answers: ['0','1','∞','n'], correct: 0, explanation: 'n domine.' },
        { type: 'mcq', visual: '📈', question: 'Si a_n≤u_n≤b_n et a_n,b_n→2 alors :', answers: ['u_n→2','u_n→0','diverge','oscille'], correct: 0, explanation: 'Gendarmes.' },
        { type: 'mcq', visual: '📈', question: 'lim (5n²+1)/(n²−1) =', answers: ['5','1','0','∞'], correct: 0, explanation: 'Dominant n².' },
        { type: 'mcq', visual: '📈', question: 'Suite géométrique q=0.5 converge vers :', answers: ['0','1','0.5','∞'], correct: 0, explanation: '|q|<1.' },
        { type: 'mcq', visual: '📈', question: 'Suite géométrique q=1.2', answers: ['diverge','converge','oscille','nulle'], correct: 0, explanation: '|q|>1.' },
        { type: 'mcq', visual: '📈', question: 'lim ln(n)/n =', answers: ['0','1','∞','ln'], correct: 0, explanation: 'n domine.' },
        { type: 'mcq', visual: '📈', question: 'Suite monotone non bornée :', answers: ['diverge','converge','oscille','constante'], correct: 0, explanation: 'Tend vers ±∞.' }
        ],

        // LEVEL 4
        [
        { type: 'mcq', visual: '📈', question: 'lim (n³ + 2n)/(n³ − 1) =', answers: ['1','0','∞','2'], correct: 0, explanation: 'Même degré 3.' },
        { type: 'mcq', visual: '📈', question: 'lim (√(n²+1)/n) =', answers: ['1','0','∞','n'], correct: 0, explanation: 'Factoriser n.' },
        { type: 'mcq', visual: '📈', question: 'lim (n e^{-n}) =', answers: ['0','1','∞','e'], correct: 0, explanation: 'Exponentielle domine.' },
        { type: 'mcq', visual: '📈', question: 'Si 0≤u_n≤1/n² alors :', answers: ['u_n→0','u_n→1','diverge','oscille'], correct: 0, explanation: 'Gendarmes.' },
        { type: 'mcq', visual: '📈', question: 'lim (1 + 1/n)^{2n} =', answers: ['e²','e','2','1'], correct: 0, explanation: 'Formule remarquable.' },
        { type: 'mcq', visual: '📈', question: 'lim (n/(n+2))^n =', answers: ['0','1','∞','e'], correct: 0, explanation: 'Base <1.' },
        { type: 'mcq', visual: '📈', question: 'lim (1 − 1/n)^n =', answers: ['1/e','e','0','1'], correct: 0, explanation: 'Cas a = −1.' },
        { type: 'mcq', visual: '📈', question: 'Si u_n = ln(n)/n² alors :', answers: ['u_n→0','u_n→∞','u_n→1','oscille'], correct: 0, explanation: 'n² domine.' },
        { type: 'mcq', visual: '📈', question: 'lim (sin(n)/n) =', answers: ['0','1','n’existe pas','∞'], correct: 0, explanation: 'Encadrement |sin(n)|≤1.' },
        { type: 'mcq', visual: '📈', question: 'Si u_n croissante et u_n≤5 alors :', answers: ['lim ≤5','diverge','lim=0','oscille'], correct: 0, explanation: 'Bornée.' }
        ],

        // LEVEL 5
        [
        { type: 'mcq', visual: '🏆', question: 'lim (n! / n^n) =', answers: ['0','1','∞','e'], correct: 0, explanation: 'Croissance comparée.' },
        { type: 'mcq', visual: '🏆', question: 'lim ( (n+1)^n / n^n ) =', answers: ['e','1','0','∞'], correct: 0, explanation: '(1+1/n)^n.' },
        { type: 'mcq', visual: '🏆', question: 'lim ( (1+3/n)^n ) =', answers: ['e³','e','3','1'], correct: 0, explanation: 'Formule générale.' },
        { type: 'mcq', visual: '🏆', question: 'Si u_n ≥ v_n ≥ 0 et u_n→0 alors :', answers: ['v_n→0','v_n→∞','v_n→1','aucune info'], correct: 0, explanation: 'Comparaison.' },
        { type: 'mcq', visual: '🏆', question: 'lim (√n / e^n) =', answers: ['0','1','∞','e'], correct: 0, explanation: 'Exponentielle domine.' },
        { type: 'mcq', visual: '🏆', question: 'lim (n^k / e^n) =', answers: ['0','∞','1','k'], correct: 0, explanation: 'Exponentielle domine tout polynôme.' },
        { type: 'mcq', visual: '🏆', question: 'lim ( (1 + a/n)^{bn} ) =', answers: ['e^{ab}','e^a','e^b','1'], correct: 0, explanation: 'Multiplier exposant.' },
        { type: 'mcq', visual: '🏆', question: 'Si u_n = 1 − 1/n alors :', answers: ['u_n→1','u_n→0','diverge','oscille'], correct: 0, explanation: 'Limite immédiate.' },
        { type: 'mcq', visual: '🏆', question: 'lim (n^n / n!) =', answers: ['∞','0','1','e'], correct: 0, explanation: 'Comparaison factoriale.' },
        { type: 'mcq', visual: '🏆', question: 'Suite bornée non monotone peut :', answers: ['ne pas converger','toujours converger','être constante','être géométrique'], correct: 0, explanation: 'Exemple (−1)^n.' }
        ],

        // LEVEL 6
        [
        { type: 'mcq', visual: '🏆', question: 'lim ( (n!)^{1/n} / n ) =', answers: ['1/e','e','1','0'], correct: 0, explanation: 'Formule de Stirling simplifiée.' },
        { type: 'mcq', visual: '🏆', question: 'lim ( ln(n!) / n ) =', answers: ['ln(n) - 1','0','∞','1'], correct: 0, explanation: 'Approximation ln(n!) ~ n ln n − n.' },
        { type: 'mcq', visual: '🏆', question: 'lim ( (1 + 1/n)^{n+1} ) =', answers: ['e','e²','1','0'], correct: 0, explanation: 'Même limite e.' },
        { type: 'mcq', visual: '🏆', question: 'lim ( n ( (1+1/n)^n − e ) ) =', answers: ['e/2','0','e','1'], correct: 0, explanation: 'Développement limité.' },
        { type: 'mcq', visual: '🏆', question: 'Si u_n ~ v_n et v_n→ℓ≠0 alors :', answers: ['u_n→ℓ','u_n→0','diverge','oscille'], correct: 0, explanation: 'Équivalence.' },
        { type: 'mcq', visual: '🏆', question: 'lim ( sin(1/n) / (1/n) ) =', answers: ['1','0','∞','n'], correct: 0, explanation: 'Limite fondamentale.' },
        { type: 'mcq', visual: '🏆', question: 'lim ( e^{1/n} − 1 ) / (1/n) =', answers: ['1','e','0','∞'], correct: 0, explanation: 'Dérivée en 0.' },
        { type: 'mcq', visual: '🏆', question: 'Si u_n ≤ v_n et v_n→−∞ alors :', answers: ['u_n→−∞','u_n→∞','u_n→0','aucune info'], correct: 0, explanation: 'Comparaison.' },
        { type: 'mcq', visual: '🏆', question: 'lim ( (n+1)! / n! ) =', answers: ['∞','1','0','e'], correct: 0, explanation: 'Égal à n+1.' },
        { type: 'mcq', visual: '🏆', question: 'Suite définie par u_n = (1+1/n)^n est :', answers: ['convergente','divergente','oscillante','linéaire'], correct: 0, explanation: 'Converge vers e.' }
        ]
    ]
    },
    {
    id: 'suites-et-fonctions',
    label: 'Suites et fonctions',
    icon: '🕸️',

    lesson: {
        formula: "u_{n+1}=f(u_n)  |  Point fixe : f(ℓ)=ℓ  |  Stabilité locale : |f'(ℓ)|<1 ⇒ attractif  |  |f'(ℓ)|>1 ⇒ répulsif",
        text: "On étudie les suites définies par itération d’une fonction : u_{n+1}=f(u_n). Le comportement de la suite dépend des propriétés de la fonction f. Les points fixes (solutions de f(x)=x) jouent un rôle central : la suite peut converger vers l’un d’eux. L’étude de la dérivée permet d’analyser la stabilité locale.",
        example: "Si u_{n+1}=0.5u_n+1, les points fixes vérifient ℓ=0.5ℓ+1 donc ℓ=2. La suite converge vers 2."
    },

    fullBlocks: [

    {
    type:'definition',
    title:'📌 Interprétation graphique',
    text:"On représente la fonction y=f(x) et la droite y=x.<br><br>Un point fixe ℓ est une intersection entre y=f(x) et y=x.<br><br>La suite u_{n+1}=f(u_n) peut être visualisée graphiquement : on part de u_0 sur l’axe des abscisses, on monte vers la courbe y=f(x), puis on projette sur la droite y=x.<br><br>Cela permet de comprendre visuellement la convergence ou la divergence."
    },

    {
    type:'technique',
    title:'🕸️ Méthode du diagramme en toile d’araignée',
    text:"1) Tracer y=f(x) et y=x.<br>2) Partir de u_0 sur l’axe horizontal.<br>3) Monter verticalement jusqu’à la courbe.<br>4) Aller horizontalement vers y=x.<br>5) Recommencer.<br><br>Si les segments se rapprochent d’un point fixe, la suite converge.<br>S’ils s’éloignent, le point fixe est instable."
    },

    {
    type:'definition',
    title:'📌 Étude via la dérivée',
    text:"Si ℓ est un point fixe (f(ℓ)=ℓ) :<br><br>• Si |f'(ℓ)|<1 alors ℓ est attractif (suite converge vers ℓ si u_0 est proche).<br>• Si |f'(ℓ)|>1 alors ℓ est répulsif.<br><br>Cette condition provient d’un développement limité local : f(x) ≈ ℓ + f'(ℓ)(x−ℓ)."
    },

    {
    type:'definition',
    title:'📌 Stabilité des points fixes',
    text:"Un point fixe est stable si les itérations restent proches et convergent vers lui.<br><br>Exemple : f(x)=0.5x+1.<br>f'(x)=0.5 donc |f'(ℓ)|=0.5<1.<br>Le point fixe ℓ=2 est attractif."
    },

    {
    type:'example',
    title:'✅ Exemple complet',
    text:"Soit u_{n+1}=cos(u_n).<br><br>Les points fixes vérifient cos(x)=x.<br>Il existe un unique point fixe réel ℓ≈0.739.<br><br>Comme |−sin(ℓ)|<1, le point fixe est attractif.<br>La suite converge si u_0 est choisi raisonnablement."
    },

    {
    type:'warning',
    title:'⚠️ Attention',
    text:"La condition |f'(ℓ)|<1 est locale : elle garantit la convergence seulement si u_0 est suffisamment proche de ℓ.<br><br>Une fonction peut avoir plusieurs points fixes avec des comportements différents."
    }

    ],

    levels: [

    [
    {type:'mcq',visual:'📊',question:'Un point fixe vérifie :',answers:['f(x)=x','f(x)=0','f(x)=1','f(x)=n'],correct:0},
    {type:'mcq',visual:'📊',question:'Si |f\'(ℓ)|<1 alors le point fixe est :',answers:['attractif','répulsif','nul','divergent'],correct:0},
    {type:'mcq',visual:'📊',question:'u_{n+1}=f(u_n) est une définition :',answers:['par récurrence','explicite','linéaire','constante'],correct:0},
    {type:'mcq',visual:'📊',question:'Intersection utile :',answers:['y=f(x) et y=x','y=0','x=0','axes'],correct:0},
    {type:'mcq',visual:'📊',question:'Si f\'(ℓ)=2 alors point fixe :',answers:['instable','stable','constant','nul'],correct:0},
    {type:'mcq',visual:'📊',question:'Diagramme utilisé :',answers:['toile d’araignée','histogramme','camembert','barres'],correct:0},
    {type:'mcq',visual:'📊',question:'Suite itérative dépend :',answers:['de f','de n uniquement','de 0','du hasard'],correct:0},
    {type:'mcq',visual:'📊',question:'Droite clé :',answers:['y=x','y=0','x=1','y=1'],correct:0},
    {type:'mcq',visual:'📊',question:'Si |f\'(ℓ)|>1 alors :',answers:['instable','stable','convergente','nulle'],correct:0},
    {type:'mcq',visual:'📊',question:'Étude qualitative signifie :',answers:['comportement global','calcul exact','résolution numérique','intégration'],correct:0}
    ],

    [
    {type:'input',visual:'📈',question:'Point fixe de f(x)=0.5x+1 ?',correct:'2'},
    {type:'input',visual:'📈',question:'f(x)=2x−3. Point fixe ?',correct:'3'},
    {type:'input',visual:'📈',question:'f(x)=x^2. Point fixe positif ?',correct:'1'},
    {type:'input',visual:'📈',question:'f(x)=x+1. Point fixe ?',correct:'aucun'},
    {type:'input',visual:'📈',question:'Si f\'(ℓ)=0.2 stable ?',correct:'oui'},
    {type:'input',visual:'📈',question:'Si f\'(ℓ)=1.5 stable ?',correct:'non'},
    {type:'input',visual:'📈',question:'f(x)=3x. Point fixe ?',correct:'0'},
    {type:'input',visual:'📈',question:'f(x)=x/2. Point fixe ?',correct:'0'},
    {type:'input',visual:'📈',question:'f(x)=1. Point fixe ?',correct:'1'},
    {type:'input',visual:'📈',question:'f(x)=x^3. Point fixe 1 stable ?',correct:'non'}
    ],

    [
    {type:'mcq',visual:'🧠',question:'Si f\'(ℓ)=0 alors :',answers:['très stable','instable','impossible','linéaire'],correct:0},
    {type:'mcq',visual:'🧠',question:'cos(x)=x a :',answers:['1 solution','2','0','∞'],correct:0},
    {type:'mcq',visual:'🧠',question:'Suite contractante si :',answers:['|f\'|<1','f\'=1','f\'=0','f\'>2'],correct:0},
    {type:'mcq',visual:'🧠',question:'Newton utilise :',answers:['itération','somme','intégrale','matrice'],correct:0},
    {type:'mcq',visual:'🧠',question:'Stabilité locale dépend de :',answers:['f\'','f','n','u0 seul'],correct:0},
    {type:'mcq',visual:'🧠',question:'Plus |f\'| petit :',answers:['plus convergence rapide','plus divergence','ne change rien','oscillation'],correct:0},
    {type:'mcq',visual:'🧠',question:'Itération =',answers:['composition répétée','somme','produit','intégrale'],correct:0},
    {type:'mcq',visual:'🧠',question:'f(x)=−0.5x stable ?',answers:['oui','non','jamais','toujours'],correct:0},
    {type:'mcq',visual:'🧠',question:'Graphiquement convergence visible si :',answers:['segments se rapprochent','s’éloignent','stagnent','coupent axe'],correct:0},
    {type:'mcq',visual:'🧠',question:'Point fixe répulsif si :',answers:['|f\'|>1','|f\'|<1','f\'=0','f=0'],correct:0}
    ],

    [
    {type:'input',visual:'🏆',question:'f(x)=0.2x+3. Point fixe ?',correct:'3.75'},
    {type:'input',visual:'🏆',question:'f(x)=4−x. Point fixe ?',correct:'2'},
    {type:'input',visual:'🏆',question:'f(x)=x^2−2x+2. Point fixe 1 stable ?',correct:'oui'},
    {type:'input',visual:'🏆',question:'|f\'(ℓ)|=0.8 convergence ?',correct:'oui'},
    {type:'input',visual:'🏆',question:'|f\'(ℓ)|=1.2 convergence ?',correct:'non'},
    {type:'input',visual:'🏆',question:'f(x)=0.9x. Point fixe ?',correct:'0'},
    {type:'input',visual:'🏆',question:'f(x)=1−0.5x. Point fixe ?',correct:'0.6667'},
    {type:'input',visual:'🏆',question:'f(x)=x^2−1. Point fixe positif ?',correct:'1.618'},
    {type:'input',visual:'🏆',question:'Suite contractante garantit ?',correct:'convergence'},
    {type:'input',visual:'🏆',question:'Méthode Newton approxime ?',correct:'racine'}
    ],

    [
    {type:'mcq',visual:'🎓',question:'Lien discret/continu ?',answers:['suite ↔ fonction','suite ↔ matrice','suite ↔ somme','suite ↔ produit'],correct:0},
    {type:'mcq',visual:'🎓',question:'Analyse qualitative étudie :',answers:['comportement','valeur exacte','primitive','aire'],correct:0},
    {type:'mcq',visual:'🎓',question:'Itération stable si :',answers:['|f\'|<1','|f\'|>1','f=0','x=0'],correct:0},
    {type:'mcq',visual:'🎓',question:'Point fixe unique si contractante ?',answers:['oui','non','parfois','jamais'],correct:0},
    {type:'mcq',visual:'🎓',question:'Newton converge vite si :',answers:['|f\'| petit','|f\'| grand','f linéaire','x=0'],correct:0},
    {type:'mcq',visual:'🎓',question:'Stabilité dépend du voisinage ?',answers:['oui','non','jamais','toujours'],correct:0},
    {type:'mcq',visual:'🎓',question:'Fonction monotone facilite :',answers:['analyse','intégrale','somme','probabilité'],correct:0},
    {type:'mcq',visual:'🎓',question:'Étude asymptotique =',answers:['n→∞','n=1','n=0','n fini'],correct:0},
    {type:'mcq',visual:'🎓',question:'Suite itérative est :',answers:['dynamique','statique','constante','linéaire'],correct:0},
    {type:'mcq',visual:'🎓',question:'Point fixe attractif attire :',answers:['voisinage','tout R','0','∞'],correct:0}
    ]

    ]
    },
],
};