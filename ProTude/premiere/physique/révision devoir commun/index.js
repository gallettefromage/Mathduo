// Chapitre: Révision Bac Physique-Chimie — Première
// premiere > physique
// 10 notions

export default {
  id: "bac-physique-premiere",
  title: "Devoir commun Physique — Première",
  description: "Mécanique, énergie, ondes, optique, électricité, thermodynamique, nucléaire, signaux, chimie, chimie organique",
  icon: "⚛️",
  xpMax: 440,
  notions: [

    // ─────────────────────────────────────────────────────────────────
    // NOTION 1 — Mécanique : mouvements et forces
    // ─────────────────────────────────────────────────────────────────
    {
      id: "mecanique",
      label: "Mécanique — Mouvements & Forces",
      icon: "🏎️",
      lesson: {
        formula: "ΣF⃗ = m·a⃗ | v = Δx/Δt | a = Δv/Δt | p⃗ = m·v⃗",
        text: "Un objet soumis à des forces dont la résultante est nulle est en équilibre ou en MRU (1re loi de Newton). Si la résultante est non nulle, l'objet accélère (2e loi : ΣF⃗ = m·a⃗). La quantité de mouvement p⃗ = m·v⃗ se conserve en l'absence de force extérieure.",
        example: "Voiture de 1000 kg accélérant de 0 à 20 m/s en 10 s : a = 2 m/s², F = 2000 N."
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Les trois lois de Newton",
          text: "• <strong>1re loi (inertie)</strong> : dans un référentiel galiléen, si ΣF⃗ = 0⃗, le mouvement est rectiligne uniforme ou le corps est au repos.<br>• <strong>2e loi</strong> : ΣF⃗ = m·a⃗. L'accélération est proportionnelle à la résultante et inversement proportionnelle à la masse.<br>• <strong>3e loi</strong> : si A exerce F⃗ sur B, B exerce −F⃗ sur A. Forces égales, opposées, colinéaires, sur des objets DIFFÉRENTS."
        },
        {
          type: "formula",
          title: "🔑 Formules de cinématique",
          formula: "v = Δx/Δt (m/s)<br>a = Δv/Δt (m/s²)<br>v(t) = v₀ + a·t (MRUA)<br>x(t) = x₀ + v₀·t + ½·a·t²<br>v² = v₀² + 2·a·Δx<br>p⃗ = m·v⃗ (kg·m/s)<br>F = G·m₁·m₂/r² (gravitation)",
          text: "MRUA = Mouvement Rectiligne Uniformément Accéléré. Toujours vérifier les unités SI."
        },
        {
          type: "technique",
          title: "🛠️ Méthode : résoudre un problème de mécanique",
          text: "1) Choisir le système (objet étudié) et le référentiel galiléen.<br>2) Inventaire des forces : poids P⃗ = m·g, normale N⃗, frottement f⃗, tension T⃗…<br>3) Appliquer ΣF⃗ = m·a⃗ en projetant sur les axes x et y.<br>4) Résoudre les équations scalaires.<br>5) Vérifier les unités et le sens physique."
        },
        {
          type: "warning",
          title: "⚠️ Pièges fréquents",
          text: "• Ne jamais oublier le poids P⃗ = m·g (g = 9,8 m/s² sur Terre).<br>• 3e loi : les deux forces s'appliquent sur des objets DIFFÉRENTS — ne pas les additionner.<br>• Plan incliné : N⃗ = m·g·cos(θ), composante tangentielle = m·g·sin(θ).<br>• Référentiel non galiléen : Newton ne s'applique pas directement."
        },
        {
          type: "example",
          title: "✅ Chute libre et plan incliné",
          text: "Chute libre : seul P⃗ agit → a = g = 9,8 m/s² vers le bas. y(t) = ½·g·t².<br><br>Plan incliné (θ = 30°, sans frottement) : a = g·sin(30°) = 4,9 m/s².<br><br>Projectile lancé à θ₀ : x = v₀cos(θ₀)·t (uniforme), y = v₀sin(θ₀)·t − ½gt² (MRUA). Portée max pour θ₀ = 45°."
        },
        {
          type: "definition",
          title: "📌 Types de mouvements",
          text: "• <strong>MRU</strong> : v = cste, a = 0, graphe x(t) linéaire.<br>• <strong>MRUA</strong> : a = cste, graphe v(t) linéaire, x(t) parabolique.<br>• <strong>Circulaire uniforme</strong> : |v| = cste, a centripète = v²/R vers le centre.<br>• <strong>Parabolique</strong> : horizontal (MRU) + vertical (MRUA)."
        }
      ],
      levels: [
        [
          { type: "mcq", visual: "🏎️", question: "L'unité SI de la force est :", answers: ["Newton (N)", "Joule (J)", "Pascal (Pa)", "Watt (W)"], correct: 0, explanation: "1 N = 1 kg·m/s². La force se mesure en Newtons." },
          { type: "mcq", visual: "🏎️", question: "En MRU, la résultante des forces est :", answers: ["Nulle", "Constante non nulle", "Dans le sens du mouvement", "Opposée au mouvement"], correct: 0, explanation: "MRU = vitesse constante = a = 0 → ΣF⃗ = 0. C'est la 1re loi de Newton." },
          { type: "mcq", visual: "🏎️", question: "La 2e loi de Newton s'écrit :", answers: ["ΣF⃗ = m·a⃗", "F = m·v", "a = F/v", "p = m·g"], correct: 0, explanation: "ΣF⃗ = m·a⃗ : la somme vectorielle des forces est égale à m fois l'accélération." },
          { type: "mcq", visual: "🏎️", question: "g sur Terre vaut approximativement :", answers: ["9,8 m/s²", "10 m/s", "9,8 m/s", "6,67×10⁻¹¹ N"], correct: 0, explanation: "g = 9,8 m/s², souvent arrondi à 10 m/s² pour les calculs rapides." },
          { type: "mcq", visual: "🏎️", question: "Le poids d'un objet de 5 kg vaut :", answers: ["49 N", "5 N", "5 kg", "49 J"], correct: 0, explanation: "P = m·g = 5 × 9,8 = 49 N. Le poids est une force, en Newtons." },
          { type: "mcq", visual: "🏎️", question: "La quantité de mouvement de 2 kg à 10 m/s est :", answers: ["20 kg·m/s", "5 kg·m/s", "20 J", "20 N"], correct: 0, explanation: "p = m·v = 2 × 10 = 20 kg·m/s." },
          { type: "mcq", visual: "🏎️", question: "En chute libre, l'accélération est :", answers: ["g vers le bas, indépendante de la masse", "Variable selon la masse", "g vers le haut", "Nulle"], correct: 0, explanation: "Chute libre : seul P = mg → a = g, indépendant de m. Galilée l'a vérifié." },
          { type: "mcq", visual: "🏎️", question: "Une voiture freine de 30 m/s à 0 en 6 s. Son accélération vaut :", answers: ["-5 m/s²", "5 m/s²", "-0,2 m/s²", "180 m/s²"], correct: 0, explanation: "a = Δv/Δt = (0−30)/6 = −5 m/s². Le signe − indique une décélération." },
          { type: "mcq", visual: "🏎️", question: "Dans la 3e loi de Newton, les deux forces sont :", answers: ["Égales, opposées, sur des objets différents", "Égales, opposées, sur le même objet", "De même sens", "La réaction est plus grande"], correct: 0, explanation: "3e loi : action-réaction. Les forces sont sur des objets DIFFÉRENTS → on ne les additionne pas." },
          { type: "mcq", visual: "🏎️", question: "Un référentiel galiléen est :", answers: ["Celui où la 1re loi de Newton est vérifiée", "Fixe par rapport à la Terre absolument", "En rotation uniforme", "En accélération constante"], correct: 0, explanation: "Référentiel galiléen (inertiel) : un objet libre y est en MRU ou au repos. Le laboratoire l'est approximativement pour de courtes durées." }
        ],
        [
          { type: "mcq", visual: "🏎️", question: "Un objet de 3 kg soumis à 15 N. Son accélération vaut :", answers: ["5 m/s²", "45 m/s²", "0,2 m/s²", "15 m/s²"], correct: 0, explanation: "a = F/m = 15/3 = 5 m/s²." },
          { type: "mcq", visual: "🏎️", question: "En MRUA, le graphe v(t) est :", answers: ["Une droite (linéaire)", "Une parabole", "Une exponentielle", "Une droite horizontale"], correct: 0, explanation: "v(t) = v₀ + a·t → droite de pente a. Si a = 0 : droite horizontale (MRU)." },
          { type: "mcq", visual: "🏎️", question: "Projectile lancé horizontalement : mouvement horizontal :", answers: ["Uniforme (MRU)", "Accéléré vers le bas", "Décéléré", "Identique au vertical"], correct: 0, explanation: "Horizontalement : pas de force → MRU. Verticalement : poids → MRUA vers le bas." },
          { type: "mcq", visual: "🏎️", question: "Plan incliné θ sans frottement : accélération = :", answers: ["g·sin(θ)", "g·cos(θ)", "g·tan(θ)", "g"], correct: 0, explanation: "Composante du poids le long du plan = m·g·sin(θ) → a = g·sin(θ)." },
          { type: "mcq", visual: "🏎️", question: "Distance en MRUA depuis le repos, a = 2 m/s², t = 4 s :", answers: ["16 m", "8 m", "32 m", "4 m"], correct: 0, explanation: "x = ½·a·t² = ½×2×16 = 16 m." },
          { type: "mcq", visual: "🏎️", question: "En mouvement circulaire uniforme, l'accélération est dirigée :", answers: ["Vers le centre du cercle", "Tangentiellement", "Vers l'extérieur", "Il n'y en a pas"], correct: 0, explanation: "Accélération centripète a = v²/R, dirigée vers le centre. La vitesse en norme est constante." },
          { type: "mcq", visual: "🏎️", question: "Conservation de p⃗ : s'applique quand :", answers: ["ΣF⃗_ext = 0", "La vitesse est constante", "Le système est en équilibre", "La force est constante"], correct: 0, explanation: "Σp⃗ = cste si ΣF⃗_ext = 0. Conservation de la quantité de mouvement." },
          { type: "mcq", visual: "🏎️", question: "1 kg à 10 m/s percute 1 kg au repos (fusion). Vitesse finale :", answers: ["5 m/s", "10 m/s", "0 m/s", "20 m/s"], correct: 0, explanation: "p = 1×10 = 2×v → v = 5 m/s." },
          { type: "mcq", visual: "🏎️", question: "La force de frottement cinétique s'oppose :", answers: ["Au mouvement (direction opposée à v⃗)", "À la normale", "Au poids", "À l'accélération"], correct: 0, explanation: "Frottement cinétique toujours opposé à la direction du mouvement." },
          { type: "mcq", visual: "🏎️", question: "Vitesse d'un objet partant de 5 m/s, a = 3 m/s², après 4 s :", answers: ["17 m/s", "12 m/s", "15 m/s", "20 m/s"], correct: 0, explanation: "v = v₀ + a·t = 5 + 12 = 17 m/s." }
        ],
        [
          { type: "mcq", visual: "🏎️", question: "2 kg lancé à 20 m/s, frottement f = 4 N. Accélération :", answers: ["-2 m/s²", "2 m/s²", "-4 m/s²", "-8 m/s²"], correct: 0, explanation: "a = -f/m = -4/2 = -2 m/s²." },
          { type: "mcq", visual: "🏎️", question: "Distance de freinage pour cet objet (v₀ = 20 m/s, a = -2 m/s²) :", answers: ["100 m", "200 m", "10 m", "50 m"], correct: 0, explanation: "v² = v₀² + 2aΔx → 0 = 400 - 4Δx → Δx = 100 m." },
          { type: "mcq", visual: "🏎️", question: "Sur la Lune (g_L = 1,6 m/s²), poids de 5 kg :", answers: ["8 N", "49 N", "5 N", "31 N"], correct: 0, explanation: "P = m·g_L = 5×1,6 = 8 N. La masse est invariante, le poids non." },
          { type: "mcq", visual: "🏎️", question: "Virage de rayon 50 m à 20 m/s. Accélération centripète :", answers: ["8 m/s²", "0,4 m/s²", "400 m/s²", "4 m/s²"], correct: 0, explanation: "a_c = v²/R = 400/50 = 8 m/s²." },
          { type: "mcq", visual: "🏎️", question: "Graphe x(t) en MRUA (a > 0, v₀ = 0) est :", answers: ["Parabole croissante (concave vers le haut)", "Droite croissante", "Parabole décroissante", "Droite horizontale"], correct: 0, explanation: "x = ½at² → parabole. Pour a > 0 et v₀ = 0 : croissante, concave vers le haut." },
          { type: "input", visual: "🏎️", question: "La loi fondamentale de la dynamique : ΣF⃗ = m × ___ (symbole, 1 caractère) :", correct: "a", explanation: "ΣF⃗ = m·a⃗. L'accélération a⃗ est la grandeur cinématique liée aux forces." },
          { type: "mcq", visual: "🏎️", question: "Bille de 0,1 kg tombant de 5 m. Vitesse à l'impact :", answers: ["~9,9 m/s", "~49 m/s", "~7 m/s", "~5 m/s"], correct: 0, explanation: "v² = 2gh = 98 → v ≈ 9,9 m/s. Indépendant de la masse." },
          { type: "mcq", visual: "🏎️", question: "Le théorème travail-énergie cinétique :", answers: ["ΔEc = W(ΣF⃗) — variation d'Ec = travail total des forces", "Ec = mgh", "W = F·d uniquement", "Ec est toujours conservée"], correct: 0, explanation: "ΔEc = ½mv² - ½mv₀² = W_total. Fondamental pour relier dynamique et énergie." },
          { type: "mcq", visual: "🏎️", question: "A (2 kg, 5 m/s) + B (3 kg, -2 m/s) → fusion. Vitesse finale :", answers: ["0,8 m/s", "3 m/s", "-0,4 m/s", "1,5 m/s"], correct: 0, explanation: "p = 10 - 6 = 5v → v = 0,8 m/s." },
          { type: "mcq", visual: "🏎️", question: "Portée maximale d'un projectile sans frottement pour un angle de :", answers: ["45°", "30°", "60°", "90°"], correct: 0, explanation: "R = v₀²·sin(2θ)/g → max pour sin(2θ) = 1 → θ = 45°." }
        ],
        [
          { type: "mcq", visual: "🏎️", question: "Projectile lancé à 30° avec v₀ = 20 m/s. Composante horizontale :", answers: ["20·cos(30°) ≈ 17,3 m/s", "20·sin(30°) = 10 m/s", "20 m/s", "20·tan(30°)"], correct: 0, explanation: "v₀x = v₀·cos(θ) = 20·cos(30°) ≈ 17,3 m/s." },
          { type: "mcq", visual: "🏎️", question: "Système isolé : A (4 kg) explose, B (2 kg) part à 6 m/s. Vitesse de A :", answers: ["-3 m/s", "3 m/s", "-12 m/s", "-6 m/s"], correct: 0, explanation: "0 = 2×6 + 4×vA → vA = -3 m/s." },
          { type: "mcq", visual: "🏎️", question: "Travail du poids sur une chute h :", answers: ["W = m·g·h > 0", "W = -m·g·h", "W = m·g/h", "W = 0"], correct: 0, explanation: "W_poids = m·g·h > 0 (force et déplacement dans le même sens)." },
          { type: "mcq", visual: "🏎️", question: "Puissance d'un moteur fournissant 60 000 J en 20 s :", answers: ["3 000 W", "1 200 000 W", "300 W", "6 000 W"], correct: 0, explanation: "P = W/t = 60000/20 = 3000 W = 3 kW." },
          { type: "mcq", visual: "🏎️", question: "Plan incliné 30°, m = 5 kg. Composante normale du poids :", answers: ["5×9,8×cos(30°) ≈ 42,4 N", "5×9,8×sin(30°) = 24,5 N", "49 N", "28,3 N"], correct: 0, explanation: "N = m·g·cos(θ) = 49×cos(30°) ≈ 42,4 N." },
          { type: "mcq", visual: "🏎️", question: "Impulsion F = 10 N pendant Δt = 0,5 s :", answers: ["5 N·s", "20 N·s", "0,05 N·s", "5 J"], correct: 0, explanation: "J = F·Δt = 10×0,5 = 5 N·s = Δp." },
          { type: "mcq", visual: "🏎️", question: "La relation impulsion-quantité de mouvement :", answers: ["F⃗·Δt = m·Δv⃗", "F⃗ = p⃗/t", "J = m·a", "J = W/t"], correct: 0, explanation: "Théorème de l'impulsion : F⃗·Δt = Δp⃗ = m·(v⃗_f − v⃗_i)." },
          { type: "mcq", visual: "🏎️", question: "Vitesse angulaire ω et vitesse linéaire v :", answers: ["v = ω·R", "v = ω/R", "v = ω²·R", "v = R/ω"], correct: 0, explanation: "v = ω·R (rad/s × m = m/s)." },
          { type: "mcq", visual: "🏎️", question: "Chute depuis H, durée de chute :", answers: ["t = √(2H/g)", "t = H/g", "t = 2H/g", "t = √(H/g)"], correct: 0, explanation: "H = ½gt² → t = √(2H/g)." },
          { type: "mcq", visual: "🏎️", question: "Loi de Newton de la gravitation universelle :", answers: ["F = G·m₁·m₂/r²", "F = G·m₁·m₂/r", "F = G·(m₁+m₂)/r²", "F = m·g"], correct: 0, explanation: "F = G·m₁·m₂/r² avec G = 6,67×10⁻¹¹ N·m²/kg²." }
        ],
        [
          { type: "mcq", visual: "🏎️", question: "Pendule simple L = 1 m, g = 9,8 m/s². Période :", answers: ["~2,0 s", "~1,0 s", "~3,1 s", "~0,5 s"], correct: 0, explanation: "T = 2π√(L/g) = 2π/√9,8 ≈ 2,0 s. Indépendant de la masse et de l'amplitude (petits angles)." },
          { type: "mcq", visual: "🏎️", question: "Hauteur max d'un objet lancé à v₀ (conservation d'énergie) :", answers: ["h = v₀²/(2g)", "h = v₀/g", "h = 2g/v₀²", "h = v₀·g/2"], correct: 0, explanation: "½mv₀² = mgh → h = v₀²/(2g)." },
          { type: "mcq", visual: "🏎️", question: "Vitesse d'un satellite en orbite circulaire de rayon r (masse Terre M) :", answers: ["v = √(G·M/r)", "v = √(G·M·r)", "v = G·M/r²", "v = r·√(G/M)"], correct: 0, explanation: "G·M·m/r² = m·v²/r → v = √(GM/r). Indépendant de la masse du satellite." },
          { type: "mcq", visual: "🏎️", question: "g à une altitude r du centre terrestre (R_T = 6400 km) :", answers: ["g(r) = G·M_T/r² (décroît avec r²)", "g = 9,8 m/s² partout", "g(r) = G·M_T·r²", "g(r) = G·M_T/r"], correct: 0, explanation: "g(r) = GM_T/r² : diminue avec le carré de la distance au centre." },
          { type: "mcq", visual: "🏎️", question: "3e loi de Kepler : T²/a³ = cste. Si T_B = 2T_A, alors a_B :", answers: ["a_A · 2^(2/3) ≈ 1,59·a_A", "2·a_A", "4·a_A", "a_A·√2"], correct: 0, explanation: "(2T)²/a_B³ = T²/a_A³ → a_B = 2^(2/3)·a_A ≈ 1,59·a_A." }
        ],
        [
          { type: "mcq", visual: "🏎️", question: "En ascenseur accélérant vers le haut (a), poids apparent :", answers: ["m·(g+a)", "m·(g-a)", "m·g", "0"], correct: 0, explanation: "N − mg = ma → N = m(g+a). Le poids apparent augmente." },
          { type: "mcq", visual: "🏎️", question: "Plan incliné θ = 45°, μ = 0,5. Accélération :", answers: ["g·(sin45° − μ·cos45°) ≈ 3,5 m/s²", "g·sin45° ≈ 6,9 m/s²", "g·cos45°", "0"], correct: 0, explanation: "a = g(sinθ − μcosθ) = 9,8×0,707×0,5 ≈ 3,5 m/s²." },
          { type: "mcq", visual: "🏎️", question: "Sauteur de 70 kg atterrit en 0,1 s à 8 m/s. Force moyenne :", answers: ["~6286 N", "560 N", "80 N", "686 N"], correct: 0, explanation: "F = mΔv/Δt = 70×8/0,1 = 5600 N + poids ≈ 6286 N. Grande force car Δt très court." },
          { type: "input", visual: "🏎️", question: "La quantité de mouvement d'un objet de masse m et de vitesse v s'écrit p = m × ___ (symbole, 1 lettre) :", correct: "v", explanation: "p⃗ = m·v⃗. Unité : kg·m/s." }
        ]
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // NOTION 2 — Énergie : travail, puissance, conservation
    // ─────────────────────────────────────────────────────────────────
    {
      id: "energie",
      label: "Énergie — Travail & Conservation",
      icon: "⚡",
      lesson: {
        formula: "Ec = ½mv² | Ep = mgh | Em = Ec + Ep | W = F·d·cos(θ) | P = W/t",
        text: "L'énergie cinétique Ec = ½mv² est l'énergie du mouvement. L'énergie potentielle de pesanteur Ep = mgh est liée à la position. Sans frottement, l'énergie mécanique Em = Ec + Ep est conservée. Le travail W = F·d·cos(θ) mesure l'énergie échangée par une force.",
        example: "Bille de 0,1 kg tombant de 2 m : Ep = 1,96 J → Ec finale = 1,96 J → v = 6,26 m/s."
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Formes d'énergie",
          text: "• <strong>Ec = ½mv²</strong> : énergie cinétique (J).<br>• <strong>Ep = mgh</strong> : énergie potentielle de pesanteur (J). h mesuré depuis un niveau de référence choisi.<br>• <strong>Em = Ec + Ep</strong> : énergie mécanique.<br>• <strong>Conservation</strong> : sans frottement, ΔEm = 0. Avec frottement : ΔEm = W_frot < 0 (chaleur dissipée)."
        },
        {
          type: "formula",
          title: "🔑 Formules clés",
          formula: "Ec = ½·m·v² (J)<br>Ep = m·g·h (J)<br>W = F·d·cos(θ) (J)<br>P = W/Δt = F·v (W)<br>Rendement η = W_utile/W_total<br>1 kWh = 3,6×10⁶ J<br>Ep_ressort = ½kx²",
          text: "θ = angle entre F⃗ et déplacement. W > 0 : force motrice. W < 0 : force résistante. La normale et la force centripète ont W = 0."
        },
        {
          type: "technique",
          title: "🛠️ Méthode : conservation de l'énergie",
          text: "1) Choisir le niveau de référence pour Ep (souvent le point le plus bas).<br>2) Identifier forces conservatives (poids → Ep) et non conservatives (frottements → dissipation).<br>3) Écrire Em_i = Em_f + |W_frot|.<br>4) Résoudre pour l'inconnue (vitesse, hauteur…).<br>5) Vérifier que Ec ≥ 0 toujours."
        },
        {
          type: "warning",
          title: "⚠️ Pièges fréquents",
          text: "• Ep = mgh : h mesuré depuis le niveau de référence choisi (ΔEp est indépendant du choix).<br>• Normale N⃗ et force centripète : W = 0 (perpendiculaires au déplacement).<br>• Rendement η < 1 toujours (pertes inévitables).<br>• 1 kWh = 3,6 MJ. Attention aux conversions d'unités."
        },
        {
          type: "example",
          title: "✅ Exemples variés",
          text: "Montagnes russes : h = 20 m, v = 2 m/s en haut. En bas (h = 0) sans frottement :<br>v_bas = √(v² + 2gh) = √(4+392) ≈ 19,9 m/s.<br><br>Voiture 1000 kg à 28 m/s (100 km/h) : Ec = ½×1000×784 = 392 kJ.<br><br>Ressort k = 500 N/m comprimé de 0,1 m : Ep = ½×500×0,01 = 2,5 J."
        },
        {
          type: "definition",
          title: "📌 Puissance et rendement",
          text: "Puissance P = W/Δt (W). P = F·v (puissance instantanée).<br>Rendement η = W_utile/W_fourni. Toujours 0 < η < 1.<br>Exemple : moteur 5 kW, η = 0,8 → P_utile = 4 kW, 1 kW dissipé en chaleur.<br>1er principe thermodynamique : l'énergie totale est conservée (η = 100% impossible car pertes thermiques)."
        }
      ],
      levels: [
        [
          { type: "mcq", visual: "⚡", question: "Énergie cinétique de 2 kg à 10 m/s :", answers: ["100 J", "20 J", "200 J", "10 J"], correct: 0, explanation: "Ec = ½mv² = ½×2×100 = 100 J." },
          { type: "mcq", visual: "⚡", question: "Énergie potentielle de 3 kg à 5 m (g = 9,8) :", answers: ["147 J", "15 J", "58,8 J", "29,4 J"], correct: 0, explanation: "Ep = mgh = 3×9,8×5 = 147 J." },
          { type: "mcq", visual: "⚡", question: "Sans frottement, l'énergie mécanique est :", answers: ["Conservée", "Toujours croissante", "Toujours nulle", "Convertie en chaleur"], correct: 0, explanation: "Sans forces non conservatives, Em = Ec + Ep = constante." },
          { type: "mcq", visual: "⚡", question: "Travail d'une force perpendiculaire au déplacement :", answers: ["Nul (W = 0)", "Maximum (W = F·d)", "Négatif", "F/d"], correct: 0, explanation: "W = F·d·cos(90°) = 0. La normale ne travaille pas." },
          { type: "mcq", visual: "⚡", question: "Unité du travail et de l'énergie :", answers: ["Joule (J)", "Watt (W)", "Newton (N)", "Pascal (Pa)"], correct: 0, explanation: "1 J = 1 N·m = 1 kg·m²/s²." },
          { type: "mcq", visual: "⚡", question: "Puissance d'un moteur fournissant 1000 J en 5 s :", answers: ["200 W", "5000 W", "0,005 W", "1000 W"], correct: 0, explanation: "P = W/t = 1000/5 = 200 W." },
          { type: "mcq", visual: "⚡", question: "1 kilowattheure (kWh) vaut :", answers: ["3,6×10⁶ J", "3600 J", "1000 J", "10⁶ J"], correct: 0, explanation: "1 kWh = 1000 W × 3600 s = 3,6×10⁶ J = 3,6 MJ." },
          { type: "mcq", visual: "⚡", question: "Travail du poids lors d'une montée de 3 m, m = 5 kg :", answers: ["-147 J (résistant)", "147 J", "0 J", "-49 J"], correct: 0, explanation: "Montée : déplacement opposé au poids → W = -mgh = -147 J." },
          { type: "mcq", visual: "⚡", question: "Si Em augmente, cela signifie :", answers: ["Des forces extérieures ont fourni de l'énergie (moteur, etc.)", "Pas de frottement", "La vitesse diminue", "L'énergie est créée"], correct: 0, explanation: "Em peut augmenter si une force motrice (non conservative) effectue un travail positif." },
          { type: "mcq", visual: "⚡", question: "Objet glissant depuis h = 10 m (v₀ = 0), sans frottement. Vitesse en bas :", answers: ["~14 m/s", "~10 m/s", "~98 m/s", "~7 m/s"], correct: 0, explanation: "v = √(2gh) = √196 ≈ 14 m/s." }
        ],
        [
          { type: "mcq", visual: "⚡", question: "Frottement f = 20 N sur d = 10 m. Énergie dissipée :", answers: ["200 J", "2 J", "0,5 J", "20 J"], correct: 0, explanation: "W_frot = f·d = 200 J dissipés en chaleur." },
          { type: "mcq", visual: "⚡", question: "Moteur consommant 1000 J, W_utile = 750 J. Rendement :", answers: ["75%", "133%", "25%", "100%"], correct: 0, explanation: "η = 750/1000 = 0,75 = 75%." },
          { type: "mcq", visual: "⚡", question: "Ec d'une voiture de 1200 kg à 30 m/s :", answers: ["540 000 J", "36 000 J", "18 000 J", "1 080 000 J"], correct: 0, explanation: "Ec = ½×1200×900 = 540 000 J." },
          { type: "mcq", visual: "⚡", question: "Si on double la vitesse, Ec est multipliée par :", answers: ["4", "2", "8", "√2"], correct: 0, explanation: "Ec ∝ v². (2v)² = 4v² → ×4." },
          { type: "mcq", visual: "⚡", question: "Travail de 50 N à 60° sur 10 m :", answers: ["250 J", "500 J", "433 J", "0 J"], correct: 0, explanation: "W = F·d·cos(60°) = 50×10×0,5 = 250 J." },
          { type: "mcq", visual: "⚡", question: "Lampe 100 W pendant 2 h. Énergie consommée :", answers: ["720 000 J = 0,2 kWh", "200 J", "18 kWh", "200 kWh"], correct: 0, explanation: "E = P·t = 100×7200 s = 720 000 J = 0,2 kWh." },
          { type: "mcq", visual: "⚡", question: "Em totale de 2 kg à h = 5 m avec v = 4 m/s :", answers: ["114 J", "16 J", "98 J", "130 J"], correct: 0, explanation: "Em = ½×2×16 + 2×9,8×5 = 16 + 98 = 114 J." },
          { type: "mcq", visual: "⚡", question: "Ressort k = 500 N/m comprimé de 0,1 m. Ep_ressort :", answers: ["2,5 J", "50 J", "5 J", "0,25 J"], correct: 0, explanation: "Ep = ½kx² = ½×500×0,01 = 2,5 J." },
          { type: "mcq", visual: "⚡", question: "Puissance instantanée P = F·v. Pour F = 60 kN et v = 20 m/s :", answers: ["1,2 MW", "3 kW", "80 kW", "30 kW"], correct: 0, explanation: "P = 60000×20 = 1 200 000 W = 1,2 MW." },
          { type: "mcq", visual: "⚡", question: "Freinage : m = 1000 kg, v₀ = 20 m/s, f = 5000 N. Distance :", answers: ["40 m", "200 m", "80 m", "4 m"], correct: 0, explanation: "ΔEc = -½mv₀² = -f·d → d = 200000/5000 = 40 m." }
        ],
        [
          { type: "mcq", visual: "⚡", question: "Objet oscillant sur ressort k = 100 N/m, m = 1 kg, A = 0,2 m. Vitesse maximale :", answers: ["2 m/s", "20 m/s", "0,02 m/s", "4 m/s"], correct: 0, explanation: "Au point d'équilibre : ½kA² = ½mv²_max → v_max = A√(k/m) = 0,2×10 = 2 m/s." },
          { type: "mcq", visual: "⚡", question: "La conservation de l'énergie TOTALE (1er principe) s'applique :", answers: ["Toujours (mécanique + thermique + électrique…)", "Uniquement sans frottements", "Seulement en mécanique", "Seulement en thermodynamique"], correct: 0, explanation: "L'énergie totale est toujours conservée. L'énergie mécanique seule l'est seulement sans frottements." },
          { type: "mcq", visual: "⚡", question: "Panneau solaire η = 20%, flux = 1000 W/m², surface 2 m², pendant 5 h. Énergie utile :", answers: ["7,2 MJ = 2 kWh", "36 MJ", "7200 J", "3,6 MJ"], correct: 0, explanation: "E_utile = 0,2×2000×18000 = 7 200 000 J = 7,2 MJ = 2 kWh." },
          { type: "input", visual: "⚡", question: "L'énergie cinétique s'écrit Ec = ½ × m × ___ (v au carré, 2 caractères) :", correct: "v²", explanation: "Ec = ½mv². L'énergie cinétique est proportionnelle au carré de la vitesse." },
          { type: "mcq", visual: "⚡", question: "Moteur voiture P = 100 kW. Force max à v = 40 m/s :", answers: ["2500 N", "4 000 000 N", "250 N", "40 000 N"], correct: 0, explanation: "P = F·v → F = 100000/40 = 2500 N." },
          { type: "mcq", visual: "⚡", question: "Relation Ec et quantité de mouvement p :", answers: ["Ec = p²/(2m)", "Ec = p·m", "Ec = 2m·p", "p = Ec·v"], correct: 0, explanation: "p = mv → Ec = ½mv² = p²/(2m). Utile en physique quantique." },
          { type: "mcq", visual: "⚡", question: "Ascenseur 600 kg monte 30 m en 20 s. Puissance minimale :", answers: ["8 820 W", "18 000 W", "294 000 W", "440 W"], correct: 0, explanation: "W = mgh = 176400 J. P = W/t = 8820 W ≈ 8,8 kW." },
          { type: "mcq", visual: "⚡", question: "Énergie d'un photon λ = 500 nm (f ≈ 6×10¹⁴ Hz, h = 6,63×10⁻³⁴ J·s) :", answers: ["~3,98×10⁻¹⁹ J ≈ 2,5 eV", "~6,63×10⁻³⁴ J", "~1,24 eV", "~6×10¹⁴ J"], correct: 0, explanation: "E = hf = 6,63×10⁻³⁴×6×10¹⁴ ≈ 3,98×10⁻¹⁹ J ≈ 2,5 eV." },
          { type: "mcq", visual: "⚡", question: "Lors d'un choc ÉLASTIQUE entre deux objets :", answers: ["Ec totale ET p⃗ totale sont conservées", "Seule p⃗ est conservée", "Seule Ec est conservée", "Rien n'est conservé"], correct: 0, explanation: "Choc élastique : Ec + p⃗ conservées. Choc inélastique (ou mou) : seulement p⃗ conservée." },
          { type: "mcq", visual: "⚡", question: "Diagramme Ec/Ep d'un pendule sans frottement : Em(t) est :", answers: ["Constante horizontale (Ec et Ep oscillent en opposition)", "Oscillante", "Croissante", "Décroissante"], correct: 0, explanation: "Em = Ec + Ep = constante. Ec et Ep s'échangent périodiquement (opposition de phase)." }
        ],
        [
          { type: "mcq", visual: "⚡", question: "Centrale hydraulique : h = 100 m, débit Q = 500 m³/s, ρ = 1000 kg/m³. Puissance :", answers: ["490 MW", "50 MW", "5 GW", "49 kW"], correct: 0, explanation: "P = ρQgh = 1000×500×9,8×100 = 4,9×10⁸ W = 490 MW." },
          { type: "mcq", visual: "⚡", question: "Voiture de 1500 kg : v₁ = 50 km/h (13,9 m/s) → v₂ = 100 km/h (27,8 m/s). ΔEc :", answers: ["~435 kJ", "~289 kJ", "~145 kJ", "~578 kJ"], correct: 0, explanation: "ΔEc = ½×1500×(27,8² − 13,9²) = ½×1500×580 ≈ 435 kJ." },
          { type: "mcq", visual: "⚡", question: "Un générateur photovoltaïque produit de l'électricité : quelle conversion d'énergie ?", answers: ["Énergie lumineuse → énergie électrique (effet photovoltaïque)", "Thermique → électrique", "Mécanique → électrique", "Chimique → électrique"], correct: 0, explanation: "Cellule PV : absorption de photons → création de paires électron-trou → courant électrique (effet photovoltaïque, Einstein 1905)." },
          { type: "mcq", visual: "⚡", question: "Différence fondamentale entre travail W et puissance P :", answers: ["W = énergie échangée (J), P = débit d'énergie (J/s = W)", "Ce sont des synonymes", "P est en J, W en W", "W dépend du temps, P non"], correct: 0, explanation: "W = énergie échangée (J) ; P = W/t = débit d'énergie (W). Un moteur puissant délivre beaucoup d'énergie par unité de temps." }
        ],
        [
          { type: "mcq", visual: "⚡", question: "Hauteur max atteinte par un objet lancé à v₀, énergie totale conservée. h_max :", answers: ["v₀²/(2g), indépendant de la direction", "v₀/g", "Dépend de l'angle", "v₀²/g"], correct: 0, explanation: "Em = ½mv₀² = mgh_max → h_max = v₀²/(2g). Scalaire → indépendant de la direction." },
          { type: "mcq", visual: "⚡", question: "Énergie au repos d'un proton (m = 1,67×10⁻²⁷ kg) E = mc² :", answers: ["~1,5×10⁻¹⁰ J ≈ 938 MeV", "~1,67×10⁻²⁷ J", "~9×10¹⁶ J", "~938 J"], correct: 0, explanation: "E₀ = mc² = 1,67×10⁻²⁷×(3×10⁸)² ≈ 1,5×10⁻¹⁰ J ≈ 938 MeV." },
          { type: "mcq", visual: "⚡", question: "Rendement maximal d'un moteur thermique entre T_c et T_f (Carnot) :", answers: ["η_max = 1 − T_f/T_c < 1", "η = 1 pour un moteur idéal", "η peut dépasser 1", "η dépend uniquement du combustible"], correct: 0, explanation: "Rendement de Carnot = limite théorique absolue. Aucun moteur thermique ne peut atteindre 100%." }
        ],
        [
          { type: "mcq", visual: "⚡", question: "Une force est dite conservative si :", answers: ["Son travail ne dépend que des positions initiale et finale (pas du chemin), ce qui permet de définir une Ep", "Son travail est toujours positif", "Elle est perpendiculaire au déplacement", "Elle est constante"], correct: 0, explanation: "Force conservative : W indépendant du chemin → on peut définir une énergie potentielle. Poids et force élastique sont conservatives. Frottement : non conservative." },
          { type: "mcq", visual: "⚡", question: "Énergie stockée dans un condensateur C chargé à U :", answers: ["Ec = ½CU²", "Ec = CU", "Ec = C²U", "Ec = U²/C"], correct: 0, explanation: "Ec = ½CU² (analogue à ½kx² pour le ressort). Énergie électrostatique stockée dans le champ électrique." },
          { type: "input", visual: "⚡", question: "La formule de l'énergie potentielle de pesanteur est Ep = m × g × ___ (hauteur, 1 lettre) :", correct: "h", explanation: "Ep = mgh. h est la hauteur mesurée depuis le niveau de référence choisi." }
        ]
      ]
    },
    // ─────────────────────────────────────────────────────────────────
    // NOTION 3 — Ondes mécaniques et sonores
    // ─────────────────────────────────────────────────────────────────
    {
      id: "ondes",
      label: "Ondes mécaniques & sonores",
      icon: "🌊",
      lesson: {
        formula: "v = λ·f | T = 1/f | d = v·t | L(dB) = 10·log(I/I₀)",
        text: "Une onde mécanique propage de l'énergie sans transport de matière. La relation fondamentale : v = λ·f (célérité, longueur d'onde, fréquence). Le son est une onde longitudinale de pression. L'intensité sonore se mesure en décibels : L = 10·log(I/I₀).",
        example: "Son de 440 Hz dans l'air (v = 340 m/s) : λ = v/f = 340/440 ≈ 0,77 m."
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Types d'ondes mécaniques",
          text: "• <strong>Transversale</strong> : perturbation ⊥ direction de propagation (corde, vague en surface).<br>• <strong>Longitudinale</strong> : perturbation ∥ direction de propagation (son, ressort comprimé).<br>• <strong>Progressive</strong> : se propage dans un sens, transporte de l'énergie, pas de matière.<br>• Célérités : v_son_air ≈ 340 m/s à 20°C ; v_son_eau ≈ 1500 m/s ; dans les solides : > 1500 m/s."
        },
        {
          type: "formula",
          title: "🔑 Formules des ondes",
          formula: "v = λ·f (m/s, m, Hz)<br>T = 1/f (s)<br>λ = v·T<br>d = v·t (distance parcourue)<br>Écho : d = v·Δt/2 (aller-retour)<br>L(dB) = 10·log(I/I₀), I₀ = 10⁻¹² W/m²<br>Déphasage : φ = 2π·d/λ (rad)",
          text: "Le retard Δt = d/v est fondamental pour les mesures de distance (sonar, échographie, GPS)."
        },
        {
          type: "technique",
          title: "🛠️ Lire un graphe d'onde",
          text: "• Graphe y(t) [signal en un point au cours du temps] → lire la période T → f = 1/T.<br>• Graphe y(x) [instantané spatial] → lire la longueur d'onde λ.<br>• Calculer v = λ·f.<br>• Écho : d = v·Δt/2 (diviser par 2 car aller-retour).<br>• Déphasage φ = 2πd/λ. Si d = λ : en phase. Si d = λ/2 : opposition de phase."
        },
        {
          type: "warning",
          title: "⚠️ Pièges fréquents",
          text: "• λ se lit sur y(x), T se lit sur y(t). Ne pas confondre.<br>• Pour un écho : d = v·Δt/2 (diviser par 2 !)<br>• v = λ·f : dans un milieu non dispersif, v ne dépend PAS de f.<br>• +10 dB = ×10 en intensité ; +3 dB ≈ ×2 en intensité.<br>• Le son ne se propage pas dans le vide (onde mécanique)."
        },
        {
          type: "example",
          title: "✅ Sonar, ultrasons et niveau sonore",
          text: "Écho sonar : Δt = 0,2 s (v = 340 m/s) → d = 340×0,1 = 34 m.<br><br>Ultrason médical f = 3 MHz, v = 1500 m/s → λ = 0,5 mm. Résolution fine.<br><br>Effet Doppler : source s'approchant → f_obs = f₀·v/(v−v_s) > f₀.<br><br>Éclair à Δt = 5 s : d = 340×5 = 1700 m ≈ 1,7 km."
        },
        {
          type: "definition",
          title: "📌 Niveau sonore et audition",
          text: "L = 10·log(I/I₀) en dB, I₀ = 10⁻¹² W/m² (seuil d'audition).<br>• 0 dB = seuil d'audition<br>• 60 dB = conversation normale<br>• 85 dB = risque si exposition prolongée<br>• 120 dB = seuil de douleur<br><br>Onde stationnaire = superposition de deux ondes de même f et A se propageant en sens opposés. Nœuds (A = 0) et ventres (A = max)."
        }
      ],
      levels: [
        [
          { type: "mcq", visual: "🌊", question: "Une onde mécanique transporte :", answers: ["De l'énergie sans matière", "De la matière sans énergie", "Ni énergie ni matière", "Matière et énergie"], correct: 0, explanation: "Onde mécanique : énergie propagée, matière oscillant sur place." },
          { type: "mcq", visual: "🌊", question: "Le son est une onde :", answers: ["Longitudinale de pression", "Transversale", "Électromagnétique", "Stationnaire"], correct: 0, explanation: "Son = onde longitudinale : les molécules oscillent dans la direction de propagation." },
          { type: "mcq", visual: "🌊", question: "Fréquence d'une onde de période T = 0,01 s :", answers: ["100 Hz", "0,01 Hz", "10 Hz", "1000 Hz"], correct: 0, explanation: "f = 1/T = 1/0,01 = 100 Hz." },
          { type: "mcq", visual: "🌊", question: "Relation fondamentale des ondes :", answers: ["v = λ·f", "v = λ/f", "v = f/λ", "λ = v²/f"], correct: 0, explanation: "v = λ·f. Célérité = longueur d'onde × fréquence." },
          { type: "mcq", visual: "🌊", question: "Célérité du son dans l'air (20°C) :", answers: ["340 m/s", "3×10⁸ m/s", "1500 m/s", "1000 m/s"], correct: 0, explanation: "v_son_air ≈ 340 m/s. La lumière est environ un million de fois plus rapide." },
          { type: "mcq", visual: "🌊", question: "Longueur d'onde de 340 Hz dans l'air (v = 340 m/s) :", answers: ["1 m", "0,1 m", "100 m", "3400 m"], correct: 0, explanation: "λ = v/f = 340/340 = 1 m." },
          { type: "mcq", visual: "🌊", question: "Écho revient après 0,5 s (v = 340 m/s). Distance de l'obstacle :", answers: ["85 m", "170 m", "0,85 m", "340 m"], correct: 0, explanation: "d = v·t/2 = 340×0,25 = 85 m. Diviser par 2 car aller-retour." },
          { type: "mcq", visual: "🌊", question: "Sur un graphe y(t) on peut lire :", answers: ["La période T", "La longueur d'onde λ", "La célérité v", "L'amplitude seule"], correct: 0, explanation: "y(t) : signal en un point au cours du temps → période T. λ se lit sur y(x) (spatial)." },
          { type: "mcq", visual: "🌊", question: "0 dB correspond à :", answers: ["Seuil d'audition (I₀ = 10⁻¹² W/m²)", "Silence absolu (I = 0)", "Seuil de douleur", "Son de 1 Hz"], correct: 0, explanation: "0 dB = 10·log(I₀/I₀) = 0. C'est le seuil d'audition, pas le silence absolu." },
          { type: "mcq", visual: "🌊", question: "Une onde transversale oscille :", answers: ["Perpendiculairement à la direction de propagation", "Parallèlement", "Dans toutes les directions", "Sans oscillation"], correct: 0, explanation: "Transversale : perturbation ⊥ propagation. Exemple : onde sur corde." }
        ],
        [
          { type: "mcq", visual: "🌊", question: "Ultrason 2 MHz dans les tissus (v = 1500 m/s). Longueur d'onde :", answers: ["0,75 mm", "7,5 mm", "0,075 mm", "7,5 m"], correct: 0, explanation: "λ = v/f = 1500/(2×10⁶) = 7,5×10⁻⁴ m = 0,75 mm." },
          { type: "mcq", visual: "🌊", question: "Intensité ×100 → niveau sonore :", answers: ["+20 dB", "×2 dB", "+2 dB", "+100 dB"], correct: 0, explanation: "ΔL = 10·log(100) = 20 dB." },
          { type: "mcq", visual: "🌊", question: "Effet Doppler : source s'approchant :", answers: ["Fréquence perçue plus élevée", "Fréquence perçue plus basse", "Aucun changement", "Célérité modifiée"], correct: 0, explanation: "Source s'approchant : fronts d'onde resserrés → f_obs > f_émise." },
          { type: "mcq", visual: "🌊", question: "Le son se propage-t-il dans le vide ?", answers: ["Non, il faut un milieu matériel", "Oui, comme la lumière", "Oui mais plus lentement", "Non, sauf les ultrasons"], correct: 0, explanation: "Son = onde mécanique : nécessite un milieu matériel. Dans le vide : pas de propagation." },
          { type: "mcq", visual: "🌊", question: "Sonar : aller-retour en 0,04 s (v_eau = 1500 m/s). Profondeur :", answers: ["30 m", "60 m", "3 m", "600 m"], correct: 0, explanation: "d = v·t/2 = 1500×0,02 = 30 m." },
          { type: "mcq", visual: "🌊", question: "Sur y(x), la distance crête à crête est :", answers: ["La longueur d'onde λ", "La période T", "La célérité v", "L'amplitude A"], correct: 0, explanation: "λ = distance entre deux points identiques successifs (crête à crête, creux à creux)." },
          { type: "mcq", visual: "🌊", question: "λ = v·T. En une période T, l'onde parcourt :", answers: ["Une longueur d'onde λ", "La distance totale", "La moitié de λ", "2λ"], correct: 0, explanation: "En une période T, l'onde avance exactement d'une longueur d'onde λ à la vitesse v." },
          { type: "mcq", visual: "🌊", question: "Le son se propage plus vite dans :", answers: ["Les solides > liquides > gaz", "Les gaz", "L'eau uniquement", "Le vide"], correct: 0, explanation: "Rigidité croissante : solides > liquides > gaz → célérité croissante." },
          { type: "mcq", visual: "🌊", question: "Signal émis et reçu après 0,003 s (v = 340 m/s). Distance :", answers: ["1,02 m", "0,51 m", "113 km", "3 m"], correct: 0, explanation: "d = v·t = 340×0,003 = 1,02 m. (Signal unidirectionnel, pas d'écho.)" },
          { type: "mcq", visual: "🌊", question: "L'amplitude d'une onde est liée à :", answers: ["L'énergie transportée (Énergie ∝ A²)", "La fréquence", "La célérité", "La longueur d'onde"], correct: 0, explanation: "Énergie ∝ A². Doubler l'amplitude → quadrupler l'énergie." }
        ],
        [
          { type: "mcq", visual: "🌊", question: "Deux ondes mêmes f et A. Interférence constructive si déphasage :", answers: ["0, 2π, 4π… (en phase)", "π, 3π… (opposition)", "π/2", "Quelconque"], correct: 0, explanation: "Constructive : déphasage = multiple pair de π (en phase). Destructive : multiple impair de π." },
          { type: "mcq", visual: "🌊", question: "L'échographie utilise des ultrasons car :", answers: ["λ petite → bonne résolution ; réflexion aux interfaces biologiques ; inoffensifs", "Ils traversent tout sans réflexion", "La fréquence audible donne une meilleure image", "Ils sont ionisants"], correct: 0, explanation: "Ultrasons MHz : λ ~ mm → résolution millimétrique. Réflexion aux interfaces → image. Non ionisants → inoffensifs." },
          { type: "mcq", visual: "🌊", question: "Formule Doppler (source vers observateur fixe) :", answers: ["f_obs = f₀·v/(v−v_s)", "f_obs = f₀·(v+v_s)/v", "f_obs = f₀·v_s/v", "f_obs = f₀"], correct: 0, explanation: "Source vers observateur : f_obs = f₀·v/(v−v_s). Quand v_s → v : f_obs → ∞ (mur du son)." },
          { type: "input", visual: "🌊", question: "La relation fondamentale des ondes : v = λ × ___ (symbole fréquence, 1 lettre) :", correct: "f", explanation: "v = λ·f. La célérité est le produit de la longueur d'onde et de la fréquence." },
          { type: "mcq", visual: "🌊", question: "Conversation à 60 dB. Intensité correspondante :", answers: ["10⁻⁶ W/m²", "10⁻¹² W/m²", "60 W/m²", "10⁻³ W/m²"], correct: 0, explanation: "60 = 10·log(I/10⁻¹²) → I = 10⁶×10⁻¹² = 10⁻⁶ W/m²." },
          { type: "mcq", visual: "🌊", question: "Diffraction notable quand :", answers: ["λ est du même ordre que l'obstacle ou l'ouverture", "λ >> obstacle", "λ << obstacle", "Célérité grande"], correct: 0, explanation: "Diffraction importante : λ ≈ taille de l'obstacle. Si λ << obstacle : peu de diffraction." },
          { type: "mcq", visual: "🌊", question: "Fréquence La = 440 Hz dans l'eau (v = 1500 m/s). Longueur d'onde :", answers: ["~3,4 m", "~0,77 m", "~0,34 m", "~15 m"], correct: 0, explanation: "λ = 1500/440 ≈ 3,4 m (4,4× plus grande que dans l'air)." },
          { type: "mcq", visual: "🌊", question: "GPS : la mesure de position repose sur :", answers: ["Mesure du temps de propagation des ondes EM depuis les satellites (d = c·t)", "Effet Doppler uniquement", "Triangulation sonore", "Intensité du signal"], correct: 0, explanation: "GPS : retard temporel de 4+ satellites (c = 3×10⁸ m/s) → position x, y, z, t." },
          { type: "mcq", visual: "🌊", question: "Éclair observé, tonnerre entendu 5 s après. Distance :", answers: ["~1700 m ≈ 1,7 km", "~340 m", "~850 m", "~5 km"], correct: 0, explanation: "Lumière quasi-instantanée. d = v_son×t = 340×5 = 1700 m." },
          { type: "mcq", visual: "🌊", question: "Déphasage entre deux points A et B séparés de d :", answers: ["φ = 2π·d/λ (rad)", "φ = d·f", "φ = d·v", "φ = λ/d"], correct: 0, explanation: "φ = 2πd/λ. d = λ → φ = 2π (en phase). d = λ/2 → φ = π (opposition)." }
        ],
        [
          { type: "mcq", visual: "🌊", question: "Résonance : se produit quand :", answers: ["Fréquence d'excitation = fréquence propre du système → amplitude maximale", "Deux ondes interfèrent", "Célérité maximale", "Amortissement nul uniquement"], correct: 0, explanation: "Résonance : f_excitation = f₀. Amplitude très grande. Applications : instruments de musique, ponts (risque)." },
          { type: "mcq", visual: "🌊", question: "Tuyau fermé d'un côté : fréquences de résonance :", answers: ["f_n = (2n−1)·v/(4L) pour n = 1,2,3… (harmoniques impairs)", "f_n = n·v/(2L)", "f_n = n·v/L", "f_n = 2n·v/(4L)"], correct: 0, explanation: "Tuyau fermé : nœud d'un côté, ventre de l'autre → L = (2n−1)λ/4 → seuls harmoniques impairs." },
          { type: "mcq", visual: "🌊", question: "Vitesse du son augmente avec T car :", answers: ["Molécules plus énergétiques → transmission plus rapide → v ∝ √T", "La densité augmente avec T", "La longueur d'onde augmente", "La fréquence change"], correct: 0, explanation: "v_son = √(γRT/M). À 0°C : ~331 m/s ; à 20°C : ~343 m/s." },
          { type: "mcq", visual: "🌊", question: "Principe de superposition des ondes :", answers: ["Déplacement résultant = somme algébrique des déplacements individuels", "Les ondes se traversent et disparaissent", "La plus grande absorbe la plus petite", "Les ondes ne peuvent pas se superposer"], correct: 0, explanation: "Superposition : y_total = y₁ + y₂. Les ondes se traversent sans se modifier (milieux linéaires)." }
        ],
        [
          { type: "mcq", visual: "🌊", question: "Onde stationnaire : formée par :", answers: ["Deux ondes identiques se propageant en sens opposés", "Une seule onde s'arrêtant", "Réflexion sur paroi absorbante", "Un son pur"], correct: 0, explanation: "Onde stationnaire = deux ondes progressives identiques en sens contraires. Nœuds fixes et ventres fixes." },
          { type: "mcq", visual: "🌊", question: "Radar Doppler : f₀ = 10 GHz, Δf = 10 kHz. Vitesse avion (v = c·Δf/(2f₀)) :", answers: ["~150 m/s ≈ 540 km/h", "~10 km/s", "~30 m/s", "~1500 m/s"], correct: 0, explanation: "v = 3×10⁸×10⁴/(2×10¹⁰) = 150 m/s ≈ 540 km/h." },
          { type: "mcq", visual: "🌊", question: "Atténuation d'une onde sphérique à distance r :", answers: ["I ∝ 1/r² (surface 4πr²)", "I ∝ 1/r", "I ∝ r²", "I reste constante"], correct: 0, explanation: "Loi en 1/r². Si r double : I divisée par 4 (−6 dB)." }
        ],
        [
          { type: "mcq", visual: "🌊", question: "La transformée de Fourier d'un signal sonore permet :", answers: ["Décomposer en somme de sinusoïdes (spectre fréquentiel)", "Amplifier le signal", "Mesurer la célérité", "Calculer la puissance"], correct: 0, explanation: "Transformée de Fourier = décomposition en harmoniques. Base de l'analyse spectrale et de la synthèse sonore." },
          { type: "mcq", visual: "🌊", question: "Longueur d'onde de De Broglie associée à une particule de quantité de mouvement p :", answers: ["λ = h/p", "λ = h·p", "λ = p/h", "λ = m·v/h"], correct: 0, explanation: "λ_De Broglie = h/p = h/(mv). Dualité onde-corpuscule. Pour un électron à 10⁶ m/s : λ ≈ 0,7 nm." },
          { type: "input", visual: "🌊", question: "La formule du niveau sonore en décibels est L = 10 × log(I/_₀). Compléter avec le symbole de l'intensité de référence (1 lettre) :", correct: "I", explanation: "L = 10·log(I/I₀) avec I₀ = 10⁻¹² W/m². I₀ est l'intensité de référence (seuil d'audition)." }
        ]
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // NOTION 4 — Lumière et optique géométrique
    // ─────────────────────────────────────────────────────────────────
    {
      id: "optique",
      label: "Lumière & Optique géométrique",
      icon: "🔬",
      lesson: {
        formula: "n = c/v | n₁sin(i₁) = n₂sin(i₂) | 1/OA' − 1/OA = 1/f' | G = OA'/OA",
        text: "La lumière se propage en ligne droite dans un milieu homogène. À l'interface de deux milieux d'indices n₁ et n₂, elle obéit à la loi de Snell-Descartes. Les lentilles minces convergentes forment des images décrites par la relation conjuguée.",
        example: "Rayon de l'eau (n=1,33) vers l'air (n=1) avec i₁=30° : sin(i₂) = 1,33×0,5 = 0,665 → i₂ ≈ 41,7°."
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Indice de réfraction et loi de Snell-Descartes",
          text: "L'<strong>indice de réfraction</strong> n = c/v (c = 3×10⁸ m/s). n ≥ 1 toujours. Plus n est grand, plus la lumière est ralentie.<br><br>Loi de <strong>Snell-Descartes</strong> (réfraction) : n₁·sin(i₁) = n₂·sin(i₂). Angles mesurés par rapport à la <strong>normale</strong> à la surface.<br><br><strong>Réflexion totale</strong> : si n₁ > n₂ et i₁ > i_c, où sin(i_c) = n₂/n₁. Utilisée dans les fibres optiques."
        },
        {
          type: "formula",
          title: "🔑 Lentilles minces et vergence",
          formula: "n = c/v (sans unité)<br>n₁·sin(i₁) = n₂·sin(i₂) (Snell-Descartes)<br>sin(i_c) = n₂/n₁ (angle critique)<br>1/OA' − 1/OA = 1/f' (relation conjuguée)<br>Vergence V = 1/f' (dioptries δ, f' en mètres)<br>Grandissement G = OA'/OA = A'B'/AB",
          text: "Convention : O au centre. OA < 0 (objet réel à gauche). OA' > 0 → image réelle (droite). G < 0 → image renversée."
        },
        {
          type: "technique",
          title: "🛠️ Construction d'images par une lentille convergente",
          text: "Trois rayons particuliers :<br>1) Par O (centre optique) → non dévié.<br>2) Parallèle à l'axe → passe par F' (foyer image).<br>3) Par F (foyer objet) → ressort parallèle à l'axe.<br><br>Image à l'intersection : réelle (rayons réels, côté opposé) ou virtuelle (prolongements, même côté que l'objet)."
        },
        {
          type: "warning",
          title: "⚠️ Pièges fréquents",
          text: "• Angles mesurés par rapport à la NORMALE, pas à la surface.<br>• Réflexion totale : uniquement de n₁ > n₂ vers n₂ < n₁ (dense → moins dense).<br>• Vergence V = 1/f' avec f' en MÈTRES pour obtenir des dioptries.<br>• Lentille divergente : f' < 0, V < 0, image d'un objet réel toujours virtuelle et réduite."
        },
        {
          type: "example",
          title: "✅ Lentille convergente et fibre optique",
          text: "Lentille f' = +20 cm, objet OA = −30 cm :<br>1/OA' = 1/0,2 − 1/0,3 = 5 − 3,33 = 1,67 → OA' = +60 cm. Image réelle.<br>G = 60/(−30) = −2 (renversée, agrandie ×2).<br><br>Fibre optique : n_cœur > n_gaine → réflexion totale → lumière guidée sur des km sans perte.<br>Angle critique verre (n=1,5) → air : sin(i_c) = 1/1,5 → i_c ≈ 41,8°."
        },
        {
          type: "definition",
          title: "📌 Dispersion et spectre",
          text: "La <strong>dispersion</strong> : n dépend de λ (n_violet > n_rouge). Un prisme décompose la lumière blanche : violet (λ ≈ 400 nm) → rouge (λ ≈ 700 nm).<br>Le violet est plus réfracté (plus dévié).<br><br>L'arc-en-ciel : dispersion dans les gouttes d'eau + réflexion interne. Rouge à l'extérieur (moins dévié), violet à l'intérieur."
        }
      ],
      levels: [
        [
          { type: "mcq", visual: "🔬", question: "Vitesse de la lumière dans le vide :", answers: ["c = 3×10⁸ m/s", "c = 3×10⁶ m/s", "c = 340 m/s", "c = 3×10⁵ km/s"], correct: 0, explanation: "c = 3×10⁸ m/s = 300 000 km/s. Vitesse maximale dans l'univers." },
          { type: "mcq", visual: "🔬", question: "n_eau = 1,33. Vitesse de la lumière dans l'eau :", answers: ["~2,26×10⁸ m/s", "~3×10⁸ m/s", "~4×10⁸ m/s", "~1,33×10⁸ m/s"], correct: 0, explanation: "v = c/n = 3×10⁸/1,33 ≈ 2,26×10⁸ m/s." },
          { type: "mcq", visual: "🔬", question: "Loi de Snell-Descartes :", answers: ["n₁·sin(i₁) = n₂·sin(i₂)", "n₁·i₁ = n₂·i₂", "sin(i₁)/sin(i₂) = n₁·n₂", "n₁·cos(i₁) = n₂·cos(i₂)"], correct: 0, explanation: "n₁·sin(i₁) = n₂·sin(i₂). Angles par rapport à la normale." },
          { type: "mcq", visual: "🔬", question: "L'angle de réfraction se mesure par rapport à :", answers: ["La normale à la surface", "La surface elle-même", "L'axe horizontal", "Le rayon incident"], correct: 0, explanation: "Toujours par rapport à la normale (perpendiculaire à la surface)." },
          { type: "mcq", visual: "🔬", question: "Lentille convergente f' = 10 cm. Vergence :", answers: ["+10 dioptries", "+0,1 δ", "-10 δ", "100 δ"], correct: 0, explanation: "V = 1/f' = 1/0,10 m = +10 δ. f' en mètres !" },
          { type: "mcq", visual: "🔬", question: "Objet très loin (à l'infini) → image d'une lentille convergente :", answers: ["Au foyer image F'", "Au foyer objet F", "Au centre O", "À l'infini"], correct: 0, explanation: "Rayons parallèles → lentille convergente → F' (foyer image)." },
          { type: "mcq", visual: "🔬", question: "Réflexion totale : seulement possible si :", answers: ["n₁ > n₂ et i₁ > i_c (dense → moins dense)", "n₁ < n₂", "n₁ = n₂", "i₁ = 0"], correct: 0, explanation: "Réflexion totale : du milieu plus dense vers moins dense, au-delà de l'angle critique." },
          { type: "mcq", visual: "🔬", question: "Le spectre visible va de :", answers: ["~400 nm (violet) à ~700 nm (rouge)", "1 nm à 100 nm", "100 nm à 400 nm", "700 nm à 1000 nm"], correct: 0, explanation: "Visible : violet 400 nm → rouge 700 nm. UV < 400 nm, IR > 700 nm." },
          { type: "mcq", visual: "🔬", question: "Un prisme décompose la lumière blanche car :", answers: ["n dépend de λ (dispersion) → chaque couleur réfractée différemment", "Il absorbe certaines couleurs", "La lumière n'est pas cohérente", "Réflexion totale pour certaines couleurs"], correct: 0, explanation: "Dispersion : n_violet > n_rouge → violet plus dévié que rouge." },
          { type: "mcq", visual: "🔬", question: "G = −2 signifie que l'image est :", answers: ["Renversée et agrandie ×2", "Droite et agrandie ×2", "Renversée et réduite", "Droite et réduite"], correct: 0, explanation: "G < 0 → renversée. |G| = 2 → agrandie deux fois. G = OA'/OA." }
        ],
        [
          { type: "mcq", visual: "🔬", question: "Rayon air (n=1) → verre (n=1,5), i₁ = 40°. Angle réfracté :", answers: ["~25,4°", "~40°", "~60°", "~15°"], correct: 0, explanation: "sin(i₂) = sin(40°)/1,5 = 0,428 → i₂ ≈ 25,4°. Rayon se rapproche de la normale." },
          { type: "mcq", visual: "🔬", question: "Angle critique verre→air (n_verre = 1,5) :", answers: ["~41,8°", "~30°", "~60°", "~56,4°"], correct: 0, explanation: "sin(i_c) = 1/1,5 = 0,667 → i_c ≈ 41,8°." },
          { type: "mcq", visual: "🔬", question: "Lentille f' = 20 cm, OA = −60 cm. Image à OA' :", answers: ["+30 cm (réelle)", "-30 cm", "+60 cm", "+20 cm"], correct: 0, explanation: "1/OA' = 1/0,2 − 1/0,6 = 5 − 1,67 = 3,33 → OA' ≈ +30 cm." },
          { type: "mcq", visual: "🔬", question: "Fibre optique : fonctionne grâce à :", answers: ["Réflexion totale interne (n_cœur > n_gaine)", "Réfraction à chaque interface", "Diffraction", "Absorption et réémission"], correct: 0, explanation: "Cœur (grand n) → angle > angle critique → réflexion totale → guidage sans perte." },
          { type: "mcq", visual: "🔬", question: "Objet entre F et la lentille convergente. Image :", answers: ["Virtuelle, droite, agrandie (côté objet) — loupe", "Réelle et renversée", "À l'infini", "Au foyer"], correct: 0, explanation: "Objet entre F et O : image virtuelle, droite, agrandie. C'est le principe de la loupe." },
          { type: "mcq", visual: "🔬", question: "Lentille divergente : image d'un objet réel est toujours :", answers: ["Virtuelle, droite, réduite", "Réelle et renversée", "Réelle et droite", "À l'infini"], correct: 0, explanation: "Lentille divergente (f' < 0) : image virtuelle, droite, réduite, entre F' et O." },
          { type: "mcq", visual: "🔬", question: "La myopie se corrige avec :", answers: ["Lentille divergente (V < 0)", "Lentille convergente (V > 0)", "Lentille plan (V = 0)", "Prisme"], correct: 0, explanation: "Myope : foyer en avant de la rétine. Correction : lentille divergente qui éloigne les images." },
          { type: "mcq", visual: "🔬", question: "Relation conjuguée d'une lentille mince :", answers: ["1/OA' − 1/OA = 1/f'", "1/OA' + 1/OA = 1/f'", "OA' − OA = f'", "OA/OA' = f'"], correct: 0, explanation: "1/OA' − 1/OA = 1/f'. Convention algébrique : distances comptées depuis O avec signe." },
          { type: "mcq", visual: "🔬", question: "Dans l'arc-en-ciel, le rouge est à l'extérieur car :", answers: ["n_violet > n_rouge → violet plus dévié → intérieur", "n_rouge > n_violet", "Réflexion totale pour le rouge", "λ rouge est plus petite"], correct: 0, explanation: "n_violet > n_rouge : violet plus dévié → intérieur de l'arc. Rouge moins dévié → extérieur." },
          { type: "mcq", visual: "🔬", question: "Lentille de 5 dioptries, distance focale :", answers: ["20 cm", "5 cm", "50 cm", "200 cm"], correct: 0, explanation: "f' = 1/V = 1/5 = 0,2 m = 20 cm." }
        ],
        [
          { type: "mcq", visual: "🔬", question: "Vitesse de la lumière dans le diamant (n = 2,4) :", answers: ["1,25×10⁸ m/s", "7,2×10⁸ m/s", "2,4×10⁸ m/s", "1×10⁸ m/s"], correct: 0, explanation: "v = c/n = 3×10⁸/2,4 = 1,25×10⁸ m/s." },
          { type: "mcq", visual: "🔬", question: "Formule du grandissement transversal :", answers: ["G = OA'/OA = A'B'/AB", "G = f'/OA", "G = OA/f'", "G = OA·OA'"], correct: 0, explanation: "G = OA'/OA = A'B'/AB. G < 0 : renversée. |G| > 1 : agrandie." },
          { type: "mcq", visual: "🔬", question: "Rayon traversant 3 milieux n₁ → n₂ → n₁. Angle final :", answers: ["Égal à l'angle initial (symétrie)", "Modifié par n₂", "Nul", "Égal à l'angle critique"], correct: 0, explanation: "n₁sin(i₁) = n₂sin(i₂) = n₁sin(i₃) → i₃ = i₁. Direction finale = initiale si milieux extrêmes identiques." },
          { type: "input", visual: "🔬", question: "L'indice de réfraction est n = c / ___ (vitesse dans le milieu, 1 lettre) :", correct: "v", explanation: "n = c/v. n ≥ 1 toujours. Plus n est grand, plus la lumière est ralentie." },
          { type: "mcq", visual: "🔬", question: "Microscope optique : objectif + oculaire :", answers: ["Objectif convergent (courte focale) forme image agrandie, oculaire (loupe) l'observe", "Deux lentilles divergentes", "Miroir concave + lentille", "Un seul élément optique"], correct: 0, explanation: "Microscope : objectif (focale mm) → image intermédiaire réelle agrandie → oculaire (loupe) l'observe à nouveau." },
          { type: "mcq", visual: "🔬", question: "Lunette astronomique (f'₁ objectif, f'₂ oculaire). Grossissement angulaire :", answers: ["G = −f'₁/f'₂ (renversée)", "G = f'₂/f'₁", "G = f'₁·f'₂", "G = 1"], correct: 0, explanation: "Lunette afocale : G = −f'₁/f'₂. Signe − : image renversée (deux convergentes)." },
          { type: "mcq", visual: "🔬", question: "Grossissement d'une loupe (V = 10 δ, D₀ = 25 cm) :", answers: ["×2,5", "×10", "×25", "×0,4"], correct: 0, explanation: "G = D₀/f' = 0,25/0,1 = 2,5." },
          { type: "mcq", visual: "🔬", question: "L'œil met au point grâce à :", answers: ["L'accommodation (modification courbure du cristallin)", "Déplacement du cristallin", "Variation d'indice", "Variation du diamètre de la pupille seule"], correct: 0, explanation: "Le cristallin se bombe pour voir de près (vergence augmente), s'aplatit pour voir loin." },
          { type: "mcq", visual: "🔬", question: "Profondeur de champ augmente quand :", answers: ["On ferme le diaphragme (grande f-stop)", "On ouvre le diaphragme", "On augmente la focale", "On rapproche l'objet"], correct: 0, explanation: "Diaphragme fermé → faisceau étroit → mise au point sur une plus grande plage → grande profondeur de champ." },
          { type: "mcq", visual: "🔬", question: "Limite de résolution du microscope optique (critère d'Abbe) :", answers: ["~λ/2 (environ 200 nm pour le visible)", "~1 nm", "~1 mm", "~λ"], correct: 0, explanation: "Résolution ≈ λ/(2·NA) ≈ λ/2. Pour λ = 400 nm : ~200 nm. Limite du microscope optique." }
        ],
        [
          { type: "mcq", visual: "🔬", question: "Principe de Fermat : la lumière prend le chemin qui :", answers: ["Minimise (ou est stationnaire pour) le temps de trajet optique", "Minimise la distance", "Maximise la célérité", "Est toujours la droite"], correct: 0, explanation: "Principe de Fermat (1657) : minimum de temps optique → déduction des lois de réflexion ET réfraction." },
          { type: "mcq", visual: "🔬", question: "Cohérence d'un laser permet :", answers: ["L'holographie (interférences stables sur grande différence de marche)", "Une lumière plus intense seulement", "La dispersion sans prisme", "La réflexion totale améliorée"], correct: 0, explanation: "Cohérence temporelle et spatiale du laser → interférences stables → holographie possible." },
          { type: "mcq", visual: "🔬", question: "Optique géométrique ≈ optique ondulatoire dans la limite :", answers: ["λ → 0 (on néglige diffraction et interférences)", "v → c", "n → 1", "f → 0"], correct: 0, explanation: "Optique géométrique = limite λ → 0 de l'optique ondulatoire. On néglige diffraction et interférences → rayons = lignes droites." }
        ],
        [
          { type: "mcq", visual: "🔬", question: "Condition de cohérence temporelle pour les interférences :", answers: ["Longueur de cohérence L_c = λ²/Δλ : plus monochromatique → plus grande L_c → interférences sur grande différence de marche", "Deux sources quelconques interfèrent toujours", "Seul le laser peut interférer", "L_c dépend de l'intensité"], correct: 0, explanation: "L_c = c·τ_c ≈ λ²/Δλ. Laser : L_c = km. Lumière blanche : L_c ≈ 1 µm (quelques longueurs d'onde)." },
          { type: "mcq", visual: "🔬", question: "Correction de l'astigmatisme nécessite :", answers: ["Lentille cylindrique (ou torique) corrigeant différemment selon les méridiens", "Lentille sphérique convergente seule", "Lentille divergente seule", "Un prisme"], correct: 0, explanation: "Astigmatisme : l'œil a deux focales différentes. Correction : lentille cylindrique qui compense l'asymétrie." },
          { type: "input", visual: "🔬", question: "La loi de Snell-Descartes : n₁·sin(i₁) = n₂·sin(_₂). Compléter (2 caractères) :", correct: "i₂", explanation: "n₁·sin(i₁) = n₂·sin(i₂). i₂ = angle de réfraction dans le second milieu, par rapport à la normale." }
        ],
        [
          { type: "mcq", visual: "🔬", question: "La lentille convergente réalise une transformée de Fourier spatiale :", answers: ["Le plan focal image réalise la TF du champ en plan focal objet (optique de Fourier)", "Elle fait une transformée de Laplace", "Seuls les miroirs réalisent des TF", "La TF n'a pas d'analogue optique"], correct: 0, explanation: "Optique de Fourier : la lentille convergente réalise une TF spatiale entre ses plans focaux. Base du traitement optique du signal." },
          { type: "mcq", visual: "🔬", question: "Effet photoélectrique (Einstein 1905) : un métal n'éjecte des électrons que si :", answers: ["hf > W (travail de sortie), indépendant de l'intensité", "L'intensité est suffisante", "λ > λ_seuil", "La température est élevée"], correct: 0, explanation: "E = hf. Si hf < W : aucun électron quelle que soit l'intensité. Si hf > W : Ec_max = hf − W." },
          { type: "mcq", visual: "🔬", question: "Dualité onde-corpuscule de la lumière : dans quel phénomène est-elle corpusculaire ?", answers: ["Effet photoélectrique (photons), tandis que les interférences/diffraction révèlent la nature ondulatoire", "Elle est toujours ondulatoire", "Elle est toujours corpusculaire", "Cela dépend de la couleur"], correct: 0, explanation: "La lumière est onde ET corpuscule (photon). Photoélectrique → corpuscule. Interférences, diffraction → onde. C'est la dualité onde-corpuscule." }
        ]
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // NOTION 5 — Électricité : circuits en courant continu
    // ─────────────────────────────────────────────────────────────────
    {
      id: "electricite",
      label: "Électricité — Circuits CC",
      icon: "🔋",
      lesson: {
        formula: "U = R·I | P = U·I = R·I² | Série: R_eq = ΣRᵢ | Parallèle: 1/R_eq = Σ1/Rᵢ",
        text: "La loi d'Ohm U = R·I relie tension U (V), résistance R (Ω) et intensité I (A). En série, les résistances s'additionnent. En parallèle, les inverses s'additionnent. La puissance dissipée P = U·I = R·I².",
        example: "10 Ω et 30 Ω en parallèle : 1/R_eq = 1/10 + 1/30 = 4/30 → R_eq = 7,5 Ω."
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Loi d'Ohm et composants",
          text: "• <strong>Résistance</strong> : U = R·I (Ohm). Dissipe l'énergie en chaleur (effet Joule).<br>• <strong>Générateur</strong> : fem ε et résistance interne r. U_bornes = ε − r·I.<br>• <strong>Condensateur</strong> : Q = C·U, énergie Ec = ½CU². En régime permanent DC : I = 0 (ouvert).<br>• <strong>Bobine</strong> : u_L = L·dI/dt, énergie Em = ½LI². En régime permanent DC : u_L = 0 (court-circuit)."
        },
        {
          type: "formula",
          title: "🔑 Lois de Kirchhoff",
          formula: "Loi des nœuds : ΣI_entrant = ΣI_sortant<br>Loi des mailles : ΣU_algébrique = 0<br>Série : R_eq = R₁ + R₂ + …<br>Parallèle : 1/R_eq = 1/R₁ + 1/R₂ + …<br>Diviseur tension : U₁ = U_total × R₁/(R₁+R₂)<br>Énergie : E = P·t = U·I·t (J)<br>Constante τ = R·C (RC) ou τ = L/R (RL)",
          text: "Les lois de Kirchhoff (conservation des charges et de l'énergie) sont les outils d'analyse de tout circuit électrique."
        },
        {
          type: "technique",
          title: "🛠️ Analyse d'un circuit",
          text: "1) Identifier les nœuds et les mailles.<br>2) Appliquer loi des nœuds à chaque nœud (sauf un).<br>3) Appliquer loi des mailles pour compléter le système.<br>4) Résoudre le système d'équations.<br>5) Vérifier : Σ(P_générateurs) = Σ(P_récepteurs)."
        },
        {
          type: "warning",
          title: "⚠️ Pièges fréquents",
          text: "• Convention récepteur : flèche tension opposée au sens du courant pour U = R·I > 0.<br>• Parallèle : R_eq < R_min toujours.<br>• U_bornes ≠ ε : U = ε − r·I (chute interne r·I).<br>• Condensateur en DC permanent : I = 0 (circuit ouvert). Bobine en DC permanent : u = 0 (fil)."
        },
        {
          type: "example",
          title: "✅ Diviseur de tension et puissance",
          text: "U = 12 V, R₁ = 4 Ω, R₂ = 8 Ω en série :<br>I = 12/12 = 1 A. U₁ = 4 V, U₂ = 8 V.<br><br>R = 100 Ω, I = 0,5 A → P = R·I² = 25 W. En 1 h : E = 90 000 J = 90 kJ.<br><br>Constante de temps RC : τ = R·C. En 5τ, condensateur considéré chargé à fond."
        },
        {
          type: "definition",
          title: "📌 Appareils de mesure et sécurité",
          text: "• <strong>Voltmètre</strong> : en parallèle. Résistance interne idéale = ∞.<br>• <strong>Ampèremètre</strong> : en série. Résistance interne idéale = 0.<br>• Courant dangereux : > 30 mA (cœur). Tension de sécurité : < 50 V AC.<br>• Fusible/disjoncteur : protection contre les surcharges (coupe si I > I_max)."
        }
      ],
      levels: [
        [
          { type: "mcq", visual: "🔋", question: "Loi d'Ohm :", answers: ["U = R·I", "R = U + I", "I = U·R", "U = R/I"], correct: 0, explanation: "U = R·I. U en volts, R en ohms, I en ampères." },
          { type: "mcq", visual: "🔋", question: "Unité de la résistance électrique :", answers: ["Ohm (Ω)", "Ampère (A)", "Volt (V)", "Siemens (S)"], correct: 0, explanation: "1 Ω = 1 V/A." },
          { type: "mcq", visual: "🔋", question: "Deux résistances de 6 Ω en série :", answers: ["12 Ω", "3 Ω", "36 Ω", "6 Ω"], correct: 0, explanation: "Série : R_eq = 6 + 6 = 12 Ω." },
          { type: "mcq", visual: "🔋", question: "Deux résistances de 6 Ω en parallèle :", answers: ["3 Ω", "12 Ω", "6 Ω", "1 Ω"], correct: 0, explanation: "1/R_eq = 2/6 → R_eq = 3 Ω." },
          { type: "mcq", visual: "🔋", question: "Puissance dissipée dans 10 Ω traversée par 2 A :", answers: ["40 W", "20 W", "4 W", "200 W"], correct: 0, explanation: "P = R·I² = 10×4 = 40 W." },
          { type: "mcq", visual: "🔋", question: "Un voltmètre se branche :", answers: ["En parallèle", "En série", "Entre masse et point", "N'importe où"], correct: 0, explanation: "Voltmètre en parallèle avec le dipôle. Résistance interne idéale : infinie." },
          { type: "mcq", visual: "🔋", question: "Loi des nœuds :", answers: ["ΣI_entrant = ΣI_sortant", "ΣU = 0", "Résistances s'additionnent", "Tension identique partout"], correct: 0, explanation: "Conservation des charges au nœud." },
          { type: "mcq", visual: "🔋", question: "Générateur ε = 12 V, r = 1 Ω, I = 2 A. Tension aux bornes :", answers: ["10 V", "12 V", "14 V", "6 V"], correct: 0, explanation: "U = ε − r·I = 12 − 2 = 10 V." },
          { type: "mcq", visual: "🔋", question: "Un ampèremètre idéal a une résistance interne de :", answers: ["0 Ω", "Infinie", "1 Ω", "1000 Ω"], correct: 0, explanation: "Ampèremètre idéal : R = 0 (court-circuit). Ne perturbe pas le circuit." },
          { type: "mcq", visual: "🔋", question: "L'effet Joule convertit l'énergie électrique en :", answers: ["Chaleur", "Lumière uniquement", "Énergie mécanique", "Énergie chimique"], correct: 0, explanation: "Effet Joule : P = R·I² → chaleur dissipée dans la résistance." }
        ],
        [
          { type: "mcq", visual: "🔋", question: "Circuit série R₁=4Ω, R₂=6Ω, U=20V. Intensité :", answers: ["2 A", "5 A", "0,5 A", "3,3 A"], correct: 0, explanation: "I = U/R_eq = 20/10 = 2 A." },
          { type: "mcq", visual: "🔋", question: "Dans ce circuit, tension aux bornes de R₂ = 6Ω :", answers: ["12 V", "8 V", "20 V", "6 V"], correct: 0, explanation: "U₂ = R₂·I = 6×2 = 12 V." },
          { type: "mcq", visual: "🔋", question: "Diviseur de tension R₁=3Ω, R₂=9Ω, U=12V. Tension sur R₂ :", answers: ["9 V", "3 V", "4 V", "12 V"], correct: 0, explanation: "U₂ = 12×9/12 = 9 V." },
          { type: "mcq", visual: "🔋", question: "20Ω et 30Ω en parallèle sous 60V. Courant total :", answers: ["5 A", "2 A", "3 A", "10 A"], correct: 0, explanation: "R_eq = 12 Ω. I = 60/12 = 5 A." },
          { type: "mcq", visual: "🔋", question: "Lampe 60W pendant 3 heures. Énergie consommée :", answers: ["648 000 J = 0,18 kWh", "180 J", "18 kWh", "64,8 J"], correct: 0, explanation: "E = P·t = 60×10800 = 648 000 J." },
          { type: "mcq", visual: "🔋", question: "Condensateur en régime permanent DC :", answers: ["I = 0 (circuit ouvert)", "Laisse passer le courant", "Court-circuite les R", "S'oppose à U"], correct: 0, explanation: "Condensateur totalement chargé en régime permanent : I = 0 → circuit ouvert." },
          { type: "mcq", visual: "🔋", question: "Résistance d'un fil : R = ρL/S. Doubler la longueur :", answers: ["Double R", "Divise R par 2", "R inchangée", "Quadruple R"], correct: 0, explanation: "R = ρL/S. R proportionnelle à L. Si L → 2L : R → 2R." },
          { type: "mcq", visual: "🔋", question: "Loi des mailles :", answers: ["ΣU_algébrique = 0 dans une maille fermée", "Courants s'additionnent", "Résistances s'inversent", "Tension identique partout"], correct: 0, explanation: "Loi des mailles = conservation de l'énergie dans une maille." },
          { type: "mcq", visual: "🔋", question: "Si on double la tension U sur une résistance, la puissance :", answers: ["×4 (P = U²/R)", "×2", "Inchangée", "×8"], correct: 0, explanation: "P = U²/R. U → 2U : P → 4U²/R = 4P." },
          { type: "mcq", visual: "🔋", question: "3 résistances identiques R en parallèle :", answers: ["R/3", "3R", "R", "3/R"], correct: 0, explanation: "1/R_eq = 3/R → R_eq = R/3." }
        ],
        [
          { type: "mcq", visual: "🔋", question: "Générateur ε=9V, r=0,5Ω, R=4Ω. Intensité :", answers: ["2 A", "1,8 A", "9 A", "22,5 A"], correct: 0, explanation: "I = ε/(R+r) = 9/4,5 = 2 A." },
          { type: "mcq", visual: "🔋", question: "Constante de temps d'un circuit RC :", answers: ["τ = R·C (s)", "τ = R/C", "τ = 1/(RC)", "τ = C/R"], correct: 0, explanation: "τ = R·C. En t = τ, condensateur chargé à ~63%. En 5τ, totalement chargé." },
          { type: "mcq", visual: "🔋", question: "Résistivité du cuivre ρ ≈ 1,7×10⁻⁸ Ω·m. Fil de 10m, S = 1mm². Résistance :", answers: ["0,17 Ω", "1,7 Ω", "0,017 Ω", "17 Ω"], correct: 0, explanation: "R = ρL/S = 1,7×10⁻⁸×10/10⁻⁶ = 0,17 Ω." },
          { type: "input", visual: "🔋", question: "La puissance électrique s'écrit P = U × ___ (symbole intensité, 1 lettre) :", correct: "I", explanation: "P = U·I. Puissance en W, tension en V, intensité en A." },
          { type: "mcq", visual: "🔋", question: "Puissance max transférée d'un générateur (ε,r) à R : condition :", answers: ["R = r (adaptation d'impédance)", "R → ∞", "R → 0", "R = 2r"], correct: 0, explanation: "P_max quand R = r. P_max = ε²/(4r). (Théorème de transfert maximal)" },
          { type: "mcq", visual: "🔋", question: "Maison : 10 kWh/jour pendant 30 jours à 0,20 €/kWh. Facture :", answers: ["60 €", "6 €", "600 €", "30 €"], correct: 0, explanation: "E = 300 kWh. Coût = 300×0,20 = 60 €." },
          { type: "mcq", visual: "🔋", question: "Force de Laplace sur un fil I=3A, B=0,5T, L=0,2m (angle 90°) :", answers: ["F = 0,3 N", "F = 0,033 N", "F = 3 N", "F = 0,1 N"], correct: 0, explanation: "F = BIL·sin(90°) = 0,5×3×0,2 = 0,3 N." },
          { type: "mcq", visual: "🔋", question: "Pont de Wheatstone équilibré : condition :", answers: ["R₁/R₂ = R₃/R₄", "R₁+R₂ = R₃+R₄", "R₁·R₂ = R₃·R₄", "Toutes égales"], correct: 0, explanation: "Équilibre : R₁/R₂ = R₃/R₄ → courant nul dans le galvanomètre." },
          { type: "mcq", visual: "🔋", question: "Circuit RL (charge de la bobine) : I(t) = :", answers: ["(ε/R)(1−e^(−t/τ)) avec τ=L/R", "(ε/R)·e^(−t/τ)", "ε·t/L", "Constante"], correct: 0, explanation: "Bobine : I monte exponentiellement vers ε/R avec τ = L/R." },
          { type: "mcq", visual: "🔋", question: "Loi de Faraday de l'induction : fem induite e = :", answers: ["−dΦ/dt", "B·I·L", "N·B·S", "e = B²·S/t"], correct: 0, explanation: "Loi de Faraday : e = −dΦ/dt (−N·dΦ/dt pour N spires). Le signe − = loi de Lenz." }
        ],
        [
          { type: "mcq", visual: "🔋", question: "Loi de Lenz (dans Faraday) : le courant induit :", answers: ["S'oppose à la variation de flux (conservation de l'énergie)", "Renforce la variation de flux", "Est indépendant du flux", "Est toujours dans le sens trigonométrique"], correct: 0, explanation: "Lenz : opposition à la cause → frein électromagnétique. Application : freinage TGV par induction." },
          { type: "mcq", visual: "🔋", question: "Résonance RLC série : fréquence de résonance :", answers: ["ω₀ = 1/√(LC) → Z minimale", "R = L·C", "L = C", "ω → ∞"], correct: 0, explanation: "Résonance : X_L = X_C → Z = R (minimum). ω₀ = 1/√(LC). Courant maximal." },
          { type: "mcq", visual: "🔋", question: "Théorème de Thévenin : tout circuit linéaire bipolaire ≡ :", answers: ["Source de tension V_th + résistance R_th en série", "Source de courant seule", "Deux sources en parallèle", "Résistance seule"], correct: 0, explanation: "Thévenin : circuit quelconque → V_th (tension à vide) + R_th (résistance interne)." },
          { type: "mcq", visual: "🔋", question: "Courant alternatif 230 V_eff en Europe. Valeur de crête :", answers: ["~325 V", "~230 V", "~163 V", "~460 V"], correct: 0, explanation: "U_max = U_eff × √2 = 230 × 1,414 ≈ 325 V." }
        ],
        [
          { type: "mcq", visual: "🔋", question: "Transport d'énergie électrique à haute tension : intérêt :", answers: ["Courant faible → pertes Joule P = R·I² faibles", "Sécurité accrue", "Coût des câbles réduit", "Vitesse de propagation accrue"], correct: 0, explanation: "Pour transporter P à haute tension U : I = P/U faible → P_Joule = R·I² très faible. D'où le réseau THT (400 kV)." },
          { type: "mcq", visual: "🔋", question: "La résistance d'un semi-conducteur quand T augmente :", answers: ["Diminue (porteurs libres créés thermiquement → ρ↓)", "Augmente comme les métaux", "Reste constante", "Est nulle"], correct: 0, explanation: "Semi-conducteur : T↑ → énergie thermique → passage valence → conduction → ρ↓. Inverse des métaux." },
          { type: "input", visual: "🔋", question: "La résistance équivalente de résistances en série est R_eq = R₁ ___ R₂ (opérateur, 1 signe) :", correct: "+", explanation: "En série : R_eq = R₁ + R₂ + … Les résistances s'additionnent." }
        ],
        [
          { type: "mcq", visual: "🔋", question: "Les équations de Maxwell décrivent le fait que :", answers: ["Champ E variable génère B variable, et B variable génère E variable → propagation de l'onde EM", "Seule la charge crée un champ E", "Le champ B ne peut être créé que par des aimants", "La lumière n'est pas une onde EM"], correct: 0, explanation: "Maxwell-Faraday + Maxwell-Ampère : symétrie E↔B → onde EM se propageant à c = 1/√(ε₀μ₀)." },
          { type: "mcq", visual: "🔋", question: "Supraconductivité : se caractérise par :", answers: ["ρ = 0 pour T < T_c + effet Meissner (expulsion du champ B)", "ρ = ∞ à basse T", "Conductivité parfaite uniquement", "Comportement semi-conducteur à froid"], correct: 0, explanation: "Supraconducteur : ρ = 0 (T < T_c) + effet Meissner (B = 0 à l'intérieur). Applications : IRM, lévitation magnétique." },
          { type: "mcq", visual: "🔋", question: "Dans un transformateur idéal (n₁ spires primaire, n₂ spires secondaire) :", answers: ["U₂/U₁ = n₂/n₁ (rapport de transformation) et P₁ = P₂ (conservation énergie)", "U₂ = U₁ toujours", "I₂ = I₁ toujours", "P₂ > P₁ possible"], correct: 0, explanation: "Transformateur idéal : U₂/U₁ = n₂/n₁ et I₁·n₁ = I₂·n₂. Conservation de la puissance P₁ = P₂." }
        ]
      ]
    },
    // ─────────────────────────────────────────────────────────────────
    // NOTION 6 — Thermodynamique et transferts thermiques
    // ─────────────────────────────────────────────────────────────────
    {
      id: "thermodynamique",
      label: "Thermodynamique & Transferts",
      icon: "🌡️",
      lesson: {
        formula: "Q = m·c·ΔT | Q = m·L | ΔU = Q + W | PV = nRT | η_Carnot = 1 − T_f/T_c",
        text: "La chaleur Q = mcΔT pour un changement de température, Q = mL pour un changement d'état. Le 1er principe ΔU = Q + W conserve l'énergie. Le gaz parfait obéit à PV = nRT. Le rendement maximal d'un moteur thermique est celui de Carnot : η = 1 − T_f/T_c.",
        example: "Chauffer 500 g d'eau de 20°C à 100°C : Q = 0,5×4180×80 = 167 200 J ≈ 167 kJ."
      },
      fullBlocks: [
        { type: "definition", title: "📌 Modes de transfert thermique", text: "• <strong>Conduction</strong> : dans un solide, sans déplacement de matière. φ = λ·S·ΔT/e (W).<br>• <strong>Convection</strong> : par déplacement de fluide (naturelle ou forcée).<br>• <strong>Rayonnement</strong> : ondes EM (IR). Corps noir : φ = σ·S·T⁴. Se propage dans le vide.<br>• Transfert spontané : du chaud vers le froid (2e principe)." },
        { type: "formula", title: "🔑 Formules de thermodynamique", formula: "Q = m·c·ΔT (J)<br>Q = m·L (chaleur latente, J)<br>ΔU = Q + W (1er principe)<br>PV = nRT (R = 8,314 J·mol⁻¹·K⁻¹, T en K)<br>η_Carnot = 1 − T_f/T_c (T en Kelvin)<br>φ = λ·S·ΔT/e (W)<br>R_th = e/(λ·S)", text: "T(K) = T(°C) + 273. Convention : Q > 0 si le système reçoit de la chaleur." },
        { type: "technique", title: "🛠️ Bilan thermique", text: "1) Définir le système.<br>2) Identifier tous les Q et W.<br>3) Appliquer ΔU = Q + W.<br>4) Système isolé : ΔU = 0. Adiabatique : Q = 0 → ΔU = W. Isotherme gaz parfait : ΔU = 0 → Q = −W." },
        { type: "warning", title: "⚠️ Pièges fréquents", text: "• T toujours en Kelvin pour PV = nRT et η_Carnot.<br>• Chaleur latente L : changement d'état à T constante.<br>• η_Carnot : limite théorique absolue. η_réel < η_Carnot toujours.<br>• Double vitrage : la lame d'air immobile est l'isolant (λ_air << λ_verre)." },
        { type: "example", title: "✅ Exemples", text: "Vaporisation 100g d'eau (L = 2,26×10⁶ J/kg) : Q = 226 kJ.<br>Carnot 500K/300K : η = 40%.<br>Mur béton λ=1, e=0,2m, S=10m², ΔT=20°C : φ = 1000 W.<br>Stefan : T double → φ×16." },
        { type: "definition", title: "📌 Gaz parfait et transformations", text: "PV = nRT (P en Pa, V en m³, T en K).<br>• Isotherme (T=cste) : PV = cste.<br>• Isobare (P=cste) : V/T = cste.<br>• Isochore (V=cste) : P/T = cste.<br>• Adiabatique : Q = 0 → ΔU = W.<br>Cycle de Carnot = 2 isothermes + 2 adiabatiques → rendement maximal." }
      ],
      levels: [
        [
          { type: "mcq", visual: "🌡️", question: "Chauffer 1 kg d'eau (c=4180 J/kg/K) de 10°C :", answers: ["41 800 J", "4180 J", "418 J", "418 000 J"], correct: 0, explanation: "Q = mcΔT = 1×4180×10 = 41 800 J." },
          { type: "mcq", visual: "🌡️", question: "20°C en Kelvin :", answers: ["293 K", "253 K", "273 K", "20 K"], correct: 0, explanation: "T(K) = T(°C) + 273 = 293 K." },
          { type: "mcq", visual: "🌡️", question: "Transfert thermique spontané : du :", answers: ["Chaud vers le froid (2e principe)", "Froid vers le chaud", "Dans les deux sens", "Dépend du milieu"], correct: 0, explanation: "2e principe : chaleur passe spontanément du corps chaud vers le corps froid." },
          { type: "mcq", visual: "🌡️", question: "Chaleur latente L = énergie pour :", answers: ["Changer d'état à T constante", "Chauffer de 1°C", "Vaporiser seulement", "Refroidir"], correct: 0, explanation: "Q = m·L : changement d'état (fusion, vaporisation) à température constante." },
          { type: "mcq", visual: "🌡️", question: "1er principe de la thermodynamique :", answers: ["ΔU = Q + W", "ΔS > 0", "PV = nRT", "Q = mcΔT"], correct: 0, explanation: "1er principe : conservation de l'énergie. ΔU = Q + W." },
          { type: "mcq", visual: "🌡️", question: "Mode ne nécessitant pas de milieu matériel :", answers: ["Rayonnement (ondes EM)", "Conduction", "Convection", "Diffusion"], correct: 0, explanation: "Rayonnement EM se propage dans le vide (énergie solaire parvient sur Terre)." },
          { type: "mcq", visual: "🌡️", question: "Équation d'état des gaz parfaits :", answers: ["PV = nRT", "PV = mRT", "P/V = nRT", "PV = nRΔT"], correct: 0, explanation: "PV = nRT. P(Pa), V(m³), n(mol), R=8,314 J/mol/K, T(K)." },
          { type: "mcq", visual: "🌡️", question: "Rendement Carnot entre 400K et 300K :", answers: ["25%", "75%", "33%", "133%"], correct: 0, explanation: "η = 1 − 300/400 = 0,25 = 25%." },
          { type: "mcq", visual: "🌡️", question: "Capacité thermique massique de l'eau :", answers: ["4180 J/(kg·K)", "1000 J/(kg·K)", "418 J/(kg·K)", "41 800 J/(kg·K)"], correct: 0, explanation: "c_eau = 4180 J/(kg·K). Valeur très élevée : l'eau stocke beaucoup d'énergie." },
          { type: "mcq", visual: "🌡️", question: "Loi de Stefan-Boltzmann : si T double, φ est multiplié par :", answers: ["16", "2", "4", "8"], correct: 0, explanation: "φ ∝ T⁴. (2T)⁴ = 16T⁴ → ×16." }
        ],
        [
          { type: "mcq", visual: "🌡️", question: "Vaporiser 200g d'eau (L = 2,26×10⁶ J/kg) :", answers: ["452 000 J", "45 200 J", "2 260 J", "226 000 J"], correct: 0, explanation: "Q = m·L = 0,2×2,26×10⁶ = 452 000 J." },
          { type: "mcq", visual: "🌡️", question: "Gaz comprimé de moitié à P constante (isobare). T₂ :", answers: ["T₁/2 (diminue de moitié)", "Reste T₁", "2T₁", "4T₁"], correct: 0, explanation: "Isobare : V/T = cste → T₂ = T₁×(V₂/V₁) = T₁/2." },
          { type: "mcq", visual: "🌡️", question: "Boyle-Mariotte (isotherme) : P double → V :", answers: ["Diminue de moitié", "Double", "Reste constant", "Quadruple"], correct: 0, explanation: "PV = cste. P double → V = cste/(2P)." },
          { type: "mcq", visual: "🌡️", question: "Résistance thermique R_th d'un mur :", answers: ["R_th = e/(λ·S)", "R_th = λ·S·e", "R_th = e·S/λ", "R_th = λ/(e·S)"], correct: 0, explanation: "R_th = e/(λ·S). Plus e est grand ou λ est petit → meilleur isolant." },
          { type: "mcq", visual: "🌡️", question: "Café chaud qui refroidit : Q pour le café :", answers: ["Q < 0 (cède de la chaleur)", "Q > 0", "Q = 0", "ΔU = 0"], correct: 0, explanation: "Convention : Q > 0 = reçoit. Le café cède de l'énergie → Q < 0." },
          { type: "mcq", visual: "🌡️", question: "Transformation adiabatique : :", answers: ["Q = 0 (aucun échange thermique)", "W = 0", "ΔT = 0", "ΔU = 0"], correct: 0, explanation: "Adiabatique : Q = 0 → ΔU = W uniquement." },
          { type: "mcq", visual: "🌡️", question: "Frigidaire : capte 800J (froid), consomme 200J. Q rejeté :", answers: ["1000 J", "600 J", "800 J", "200 J"], correct: 0, explanation: "1er principe : Q_rejeté = Q_absorbé + W = 800 + 200 = 1000 J." },
          { type: "mcq", visual: "🌡️", question: "Double vitrage : l'isolant efficace est :", answers: ["La lame d'air (λ_air << λ_verre)", "Le verre épais", "La convection amplifiée", "La réflexion IR"], correct: 0, explanation: "λ_air ≈ 0,026 W/(m·K) << λ_verre ≈ 1 W/(m·K). La lame d'air immobile est l'isolant." },
          { type: "mcq", visual: "🌡️", question: "Voiture : η = 30%, P_méca = 60 kW. Chaleur dissipée :", answers: ["140 kW", "42 kW", "60 kW", "200 kW"], correct: 0, explanation: "P_total = 60/0,3 = 200 kW. P_dissipée = 200 − 60 = 140 kW." },
          { type: "mcq", visual: "🌡️", question: "Gaz parfait monoatomique : ΔU = (3/2)nRΔT. Pour 1 mol, ΔT = 100K :", answers: ["~1247 J", "~831 J", "~2494 J", "~8314 J"], correct: 0, explanation: "ΔU = 1,5×1×8,314×100 ≈ 1247 J." }
        ],
        [
          { type: "mcq", visual: "🌡️", question: "Carnot 800K/400K : produit 2000J/cycle. Q_chaud absorbé :", answers: ["4000 J", "2000 J", "1000 J", "6000 J"], correct: 0, explanation: "η = 0,5. Q_c = W/η = 2000/0,5 = 4000 J." },
          { type: "mcq", visual: "🌡️", question: "Le 2e principe interdit :", answers: ["La chaleur de passer spontanément du froid vers le chaud", "La conversion de W en chaleur", "La conservation de l'énergie", "Les transformations adiabatiques"], correct: 0, explanation: "2e principe : chaleur ne va pas spontanément du froid vers le chaud → frigidaire = travail obligatoire." },
          { type: "mcq", visual: "🌡️", question: "Cycle de Carnot = :", answers: ["2 isothermes + 2 adiabatiques (rendement maximal)", "2 isobares + 2 adiabatiques", "4 isothermes", "2 isochores + 2 isobares"], correct: 0, explanation: "Cycle de Carnot : isotherme chaude → adiabatique → isotherme froide → adiabatique → η_max." },
          { type: "mcq", visual: "🌡️", question: "Transformation isochore (V = cste) : ΔU = :", answers: ["Q (W = 0)", "W", "0", "Q + W avec W ≠ 0"], correct: 0, explanation: "Isochore : W = −PΔV = 0 → ΔU = Q seule." },
          { type: "mcq", visual: "🌡️", question: "Effet de serre : les GES absorbent :", answers: ["Les IR émis par la Terre (grandes λ), laissent passer le visible solaire (petites λ)", "Uniquement le visible", "Tous les rayonnements", "Les UV uniquement"], correct: 0, explanation: "GES transparents aux courtes λ (visible solaire), absorbants aux grandes λ (IR terrestre) → chaleur retenue." },
          { type: "input", visual: "🌡️", question: "La chaleur échangée lors d'un changement d'état : Q = m × ___ (symbole chaleur latente, 1 lettre) :", correct: "L", explanation: "Q = m·L. L = chaleur latente de fusion ou vaporisation (J/kg)." },
          { type: "mcq", visual: "🌡️", question: "Entropie S (Boltzmann) : mesure de :", answers: ["Le désordre microscopique (S = kB·ln(Ω))", "L'énergie interne", "La température", "Le travail fourni"], correct: 0, explanation: "Boltzmann : S = kB·ln(Ω). Le 2e principe : S ne peut que croître dans un système isolé." },
          { type: "mcq", visual: "🌡️", question: "Énergie de Gibbs G : spontanéité à T et P constantes si :", answers: ["ΔG < 0", "ΔG > 0", "ΔG = 0 seulement", "ΔS > 0 uniquement"], correct: 0, explanation: "ΔG = ΔH − TΔS < 0 → transformation spontanée à T, P constants." },
          { type: "mcq", visual: "🌡️", question: "Machine à vapeur (cycle de Rankine) : séquence :", answers: ["Évaporation isobare → détente turbine → condensation → pompage", "Cycle Carnot", "4 isothermes", "Identique au moteur essence"], correct: 0, explanation: "Rankine : base des centrales (nucléaire, charbon). Eau → vapeur → turbine → condenseur → pompe." },
          { type: "mcq", visual: "🌡️", question: "Transformation isotherme gaz parfait : ΔU = 0. Donc :", answers: ["W = −Q", "Q = 0", "W = 0", "ΔU = Q"], correct: 0, explanation: "ΔU = 0 → Q + W = 0 → W = −Q. L'énergie reçue sous forme de travail est rejetée comme chaleur." }
        ],
        [
          { type: "mcq", visual: "🌡️", question: "Inégalité de Clausius : ∮dQ/T ≤ 0. Égalité si :", answers: ["Cycle réversible (Carnot)", "Cycle quelconque", "Adiabatique uniquement", "Isotherme uniquement"], correct: 0, explanation: "∮dQ/T = 0 pour réversible, < 0 pour irréversible. Formulation du 2e principe." },
          { type: "mcq", visual: "🌡️", question: "Exergie = :", answers: ["Fraction max de l'énergie convertible en travail utile", "Énergie totale", "Énergie dissipée", "Entropie"], correct: 0, explanation: "Exergie = travail maximal extractible. 1 kWh élec = 1 kWh d'exergie. 1 kWh thermique à basse T : exergie bien inférieure." },
          { type: "mcq", visual: "🌡️", question: "3e loi (Nernst) : S → 0 quand :", answers: ["T → 0 K pour un cristal parfait", "P → 0", "V → ∞", "n → 0"], correct: 0, explanation: "3e loi : entropie → 0 à 0 K. Conséquence : impossible d'atteindre 0 K en nombre fini d'étapes." },
          { type: "mcq", visual: "🌡️", question: "Cycle Otto (moteur essence) = :", answers: ["2 isochores + 2 adiabatiques", "2 isothermes + 2 adiabatiques", "4 isobares", "Identique à Rankine"], correct: 0, explanation: "Otto : admission → compression adiabatique → explosion isochore → détente → échappement." }
        ],
        [
          { type: "mcq", visual: "🌡️", question: "Distribution de Maxwell-Boltzmann : décrit :", answers: ["Les vitesses moléculaires à l'équilibre (f(v) ∝ v²·e^(−mv²/2kT))", "Les masses des molécules", "Les positions des molécules", "Les pressions"], correct: 0, explanation: "Maxwell-Boltzmann : distribution des vitesses. v_rms = √(3kT/m). Distribution asymétrique." },
          { type: "mcq", visual: "🌡️", question: "Chaleur latente de vaporisation de l'eau (2,26 MJ/kg) explique :", answers: ["Le rôle régulateur des océans (énorme énergie absorbée par évaporation sans variation T)", "La faible chaleur massique de l'eau", "La conductivité thermique élevée", "La haute densité de l'eau"], correct: 0, explanation: "Évaporation ~450 000 km³ d'eau/an → redistribution colossale d'énergie → régulation climatique majeure." },
          { type: "input", visual: "🌡️", question: "Le 1er principe de la thermodynamique : ΔU = Q ___ W (opérateur, 1 signe) :", correct: "+", explanation: "ΔU = Q + W. Variation d'énergie interne = chaleur reçue + travail reçu." }
        ],
        [
          { type: "mcq", visual: "🌡️", question: "Le paradoxe de Maxwell (démon) fut résolu par Landauer montrant que :", answers: ["Effacer 1 bit d'info dissipe kT·ln2 de chaleur → 2e principe préservé", "Le démon peut violer le 2e principe", "L'entropie peut décroître librement", "La thermo est incompatible avec la QM"], correct: 0, explanation: "Landauer (1961) : effacement irréversible d'information = dissipation d'énergie. Le démon doit effacer sa mémoire → 2e principe intact." },
          { type: "mcq", visual: "🌡️", question: "ΔG° = −RT·ln(K). Pour K = 10⁶, ΔG° à 298K :", answers: ["≈ −34 kJ/mol (réaction très spontanée)", "≈ +34 kJ/mol", "≈ 0", "≈ −6 kJ/mol"], correct: 0, explanation: "ΔG° = −8,314×298×ln(10⁶) = −8,314×298×13,8 ≈ −34 200 J/mol ≈ −34 kJ/mol." },
          { type: "mcq", visual: "🌡️", question: "La flèche du temps est liée thermodynamiquement à :", answers: ["L'augmentation irréversible de l'entropie de l'univers (passé = faible S, futur = grand S)", "La conservation de l'énergie", "La vitesse de la lumière", "La quantité de mouvement"], correct: 0, explanation: "Eddington : la flèche du temps = augmentation de l'entropie. Les lois mécaniques sont réversibles ; le 2e principe ne l'est pas." }
        ]
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // NOTION 7 — Radioactivité et physique nucléaire
    // ─────────────────────────────────────────────────────────────────
    {
      id: "nucleaire",
      label: "Atome, Radioactivité & Nucléaire",
      icon: "☢️",
      lesson: {
        formula: "N(t) = N₀·e^(−λt) | t₁/₂ = ln2/λ | A = λN | ΔE = Δm·c²",
        text: "Un noyau ᴬ_Z X contient Z protons et (A−Z) neutrons. La radioactivité est la désintégration spontanée de noyaux instables. La loi de décroissance N(t) = N₀·e^(−λt) est exponentielle. La relation masse-énergie ΔE = Δm·c² gouverne les réactions nucléaires.",
        example: "¹⁴C : t₁/₂ = 5730 ans. Après 11 460 ans (2 t₁/₂) : N = N₀/4."
      },
      fullBlocks: [
        { type: "definition", title: "📌 Structure nucléaire et notation", text: "• Notation ᴬ_Z X : A = nombre de masse, Z = protons, N = A−Z = neutrons.<br>• Isotopes : même Z, A différents.<br>• Défaut de masse : Δm = Z·m_p + N·m_n − m_noyau. Énergie de liaison E_l = Δm·c²." },
        { type: "formula", title: "🔑 Formules radioactivité", formula: "N(t) = N₀·e^(−λt)<br>A(t) = λN(t) = A₀·e^(−λt) (Bq)<br>t₁/₂ = ln2/λ ≈ 0,693/λ<br>Après n demi-vies : N = N₀/2ⁿ<br>ΔE = Δm·c² (1 MeV = 1,6×10⁻¹³ J)<br>Dose_éq (Sv) = Dose_abs (Gy) × ω_R", text: "ω_R = 1 pour γ/β ; ω_R = 20 pour α. 1 Bq = 1 désintégration/s." },
        { type: "technique", title: "🛠️ Équations de désintégration", text: "A et Z conservés.<br>• α : ᴬ_Z X → ᴬ⁻⁴_(Z−2)Y + ⁴₂He<br>• β⁻ : ᴬ_Z X → ᴬ_(Z+1)Y + e⁻ + ν̄_e<br>• β⁺ : ᴬ_Z X → ᴬ_(Z−1)Y + e⁺ + ν_e<br>• γ : désexcitation, A et Z inchangés.<br>Vérification : Σ_A gauche = droite, idem Σ_Z." },
        { type: "warning", title: "⚠️ Pièges fréquents", text: "• Vérifier conservation A et Z dans toute équation nucléaire.<br>• t₁/₂ = ln2/λ ≠ λ. Grand λ → courte t₁/₂.<br>• Activité en Bq (désintégrations/s).<br>• Dose absorbée (Gy = J/kg) ≠ dose équivalente (Sv = Gy × ω_R)." },
        { type: "example", title: "✅ Datation C-14 et énergie nucléaire", text: "Datation : A(t)/A₀ = 0,25 = (1/2)² → 2 t₁/₂ → t = 11 460 ans.<br>Fission ²³⁵U : ~200 MeV/noyau (vs ~4 eV en chimie → ×50 millions).<br>Fusion D+T→⁴He+n : 17,6 MeV. T > 10⁸ K nécessaire (ITER).<br>ΔE = mc² pour 1g = 9×10¹³ J = 90 TJ !" },
        { type: "definition", title: "📌 Rayonnements et protection", text: "• α : arrêté par feuille de papier. Très ionisant.<br>• β : arrêté par quelques mm d'aluminium.<br>• γ : pénétrant, nécessite plomb ou béton épais.<br>• Neutrons : très pénétrants, ralentis par l'eau.<br>Radioprotection : distance, temps d'exposition, écran (règle des 3D)." }
      ],
      levels: [
        [
          { type: "mcq", visual: "☢️", question: "Dans ᴬ_Z X, Z représente :", answers: ["Nombre de protons", "Nombre de masse", "Neutrons", "Moles"], correct: 0, explanation: "Z = protons (numéro atomique). A = Z + N." },
          { type: "mcq", visual: "☢️", question: "Le ¹⁴₆C contient :", answers: ["6 protons et 8 neutrons", "14 protons et 6 neutrons", "6 protons et 14 neutrons", "8 protons et 6 neutrons"], correct: 0, explanation: "Z = 6, N = A − Z = 14 − 6 = 8." },
          { type: "mcq", visual: "☢️", question: "Demi-vie : temps pour que :", answers: ["N₀ → N₀/2", "L'activité soit nulle", "Tout se désintègre", "N₀ → N₀/e"], correct: 0, explanation: "t₁/₂ : temps après lequel la moitié des noyaux s'est désintégrée." },
          { type: "mcq", visual: "☢️", question: "Particule α = :", answers: ["⁴₂He (2p + 2n)", "1p + 1n", "Électron rapide", "Proton seul"], correct: 0, explanation: "α = noyau d'hélium ⁴₂He." },
          { type: "mcq", visual: "☢️", question: "β⁻ émet :", answers: ["Un électron et un antineutrino", "Un positron et un neutrino", "Particule α", "Photon γ"], correct: 0, explanation: "β⁻ : n → p + e⁻ + ν̄_e." },
          { type: "mcq", visual: "☢️", question: "Unité de l'activité radioactive :", answers: ["Becquerel (1 Bq = 1 désint./s)", "Sievert (Sv)", "Gray (Gy)", "Curie uniquement"], correct: 0, explanation: "1 Bq = 1 désintégration par seconde." },
          { type: "mcq", visual: "☢️", question: "Après 3 demi-vies, fraction restante :", answers: ["1/8", "1/4", "1/6", "3/4"], correct: 0, explanation: "N = N₀/2³ = N₀/8." },
          { type: "mcq", visual: "☢️", question: "Loi de décroissance radioactive :", answers: ["N(t) = N₀·e^(−λt)", "N(t) = N₀ − λt", "N(t) = N₀·λ^t", "N(t) = N₀/(1+t)"], correct: 0, explanation: "Loi exponentielle universelle." },
          { type: "mcq", visual: "☢️", question: "Désintégration α de ²³⁸₉₂U. A du noyau fils :", answers: ["234", "242", "236", "238"], correct: 0, explanation: "A_fils = 238 − 4 = 234 (thorium-234, Z = 90)." },
          { type: "mcq", visual: "☢️", question: "Radioactivité γ : :", answers: ["Photons très énergétiques, A et Z inchangés", "Flux d'électrons", "Flux de protons", "Désintégration du neutron"], correct: 0, explanation: "γ = désexcitation nucléaire. A et Z ne changent pas." }
        ],
        [
          { type: "mcq", visual: "☢️", question: "⁶⁰Co (t₁/₂ = 5,27 ans). λ en an⁻¹ :", answers: ["≈ 0,131 an⁻¹ (ln2/5,27)", "≈ 7,6 an⁻¹", "≈ 0,19 an⁻¹", "5,27 an⁻¹"], correct: 0, explanation: "λ = ln2/t₁/₂ = 0,693/5,27 ≈ 0,131 an⁻¹." },
          { type: "mcq", visual: "☢️", question: "Après 20 ans, fraction de ⁶⁰Co (t₁/₂ = 5 ans) :", answers: ["1/16 ≈ 6,25%", "1/4 = 25%", "1/2", "1/8"], correct: 0, explanation: "n = 20/5 = 4 demi-vies. N/N₀ = (1/2)⁴ = 1/16." },
          { type: "mcq", visual: "☢️", question: "Fission de ²³⁵U libère environ :", answers: ["~200 MeV par noyau", "~1 MeV", "~1 GeV", "~1 eV"], correct: 0, explanation: "200 MeV/fission vs 4 eV en chimie → facteur 50 millions." },
          { type: "mcq", visual: "☢️", question: "ΔE = mc² pour Δm = 1 g :", answers: ["9×10¹³ J = 90 TJ", "9×10⁶ J", "3×10⁸ J", "1 J"], correct: 0, explanation: "ΔE = 10⁻³×(3×10⁸)² = 9×10¹³ J. Énorme pour 1 gramme !" },
          { type: "mcq", visual: "☢️", question: "Rayonnement le plus pénétrant :", answers: ["γ (puis neutrons rapides)", "α (feuille de papier)", "β (mm d'aluminium)", "IR"], correct: 0, explanation: "α << β << γ. γ nécessite plomb ou béton épais pour être arrêté." },
          { type: "mcq", visual: "☢️", question: "Datation ¹⁴C applicable jusqu'à :", answers: ["~50 000 ans (10 demi-vies)", "~5 000 ans", "~500 000 ans", "~5 millions d'années"], correct: 0, explanation: "Au-delà de ~10 t₁/₂, l'activité est trop faible pour être mesurée précisément." },
          { type: "mcq", visual: "☢️", question: "Fusion D + T → ⁴He + n libère :", answers: ["17,6 MeV", "200 MeV", "1 MeV", "1 GeV"], correct: 0, explanation: "D-T = réaction de fusion la plus accessible. ITER utilise ce couple." },
          { type: "mcq", visual: "☢️", question: "Dose équivalente (Sv) = dose absorbée (Gy) × :", answers: ["ω_R (facteur de qualité)", "Masse du tissu", "Surface irradiée", "Énergie du rayonnement"], correct: 0, explanation: "ω_R = 1 pour γ/β ; ω_R = 20 pour α. α 20× plus dangereux biologiquement." },
          { type: "mcq", visual: "☢️", question: "Réacteur PWR : rôle du modérateur (eau) :", answers: ["Ralentir les neutrons rapides → thermiques → fission ²³⁵U plus efficace", "Absorber tous les neutrons", "Refroidir uniquement", "Confinement du plasma"], correct: 0, explanation: "Neutrons thermalisés → grande section efficace pour fission ²³⁵U. L'eau joue aussi le rôle de caloporteur." },
          { type: "mcq", visual: "☢️", question: "Criticité k = 1 signifie :", answers: ["Réaction stable (puissance constante)", "Explosion (k > 1)", "Extinction (k < 1)", "Fusion nucléaire"], correct: 0, explanation: "k = 1 : chaque fission produit exactement 1 neutron utile → puissance stable." }
        ],
        [
          { type: "mcq", visual: "☢️", question: "Courbe d'Aston : énergie de liaison/nucléon maximum pour :", answers: ["⁵⁶Fe (≈ 8,8 MeV/nucléon)", "Hydrogène", "Uranium", "Hélium"], correct: 0, explanation: "⁵⁶Fe = noyau le plus stable. Fission et fusion libèrent de l'énergie en allant vers ce maximum." },
          { type: "mcq", visual: "☢️", question: "Limite de dose travailleurs nucléaires (France) :", answers: ["20 mSv/an (directive Euratom)", "1 mSv/an", "100 mSv/an", "50 mSv/an"], correct: 0, explanation: "20 mSv/an travailleurs exposés. 1 mSv/an population générale (hors médical et naturel)." },
          { type: "mcq", visual: "☢️", question: "Fusion nécessite T > 10⁸ K pour :", answers: ["Vaincre la barrière coulombienne entre noyaux positifs", "Ioniser le deutérium seul", "Atteindre la masse critique", "Activer la fission"], correct: 0, explanation: "Répulsion coulombienne entre protons → T très élevée → énergie cinétique > barrière → fusion." },
          { type: "input", visual: "☢️", question: "La demi-vie t₁/₂ = ln(2) / ___ (constante radioactive, 1 lettre) :", correct: "λ", explanation: "t₁/₂ = ln2/λ ≈ 0,693/λ. Grand λ → courte demi-vie." },
          { type: "mcq", visual: "☢️", question: "Vallée de stabilité : noyaux lourds ont N/Z :", answers: ["> 1 (neutrons diluent la répulsion coulombienne)", "= 1 toujours", "< 1", "> 2 uniquement stables"], correct: 0, explanation: "Pour Z > 20 : neutrons supplémentaires → N/Z augmente jusqu'à ~1,5 pour ²⁰⁸Pb." },
          { type: "mcq", visual: "☢️", question: "Constante λ : λ·dt représente :", answers: ["Probabilité de désintégration pendant dt", "Nombre de désintégrations en dt", "Énergie libérée en dt", "La demi-vie en dt"], correct: 0, explanation: "λ = probabilité de désintégration par unité de temps. dN = −λNdt → N = N₀e^(−λt)." },
          { type: "mcq", visual: "☢️", question: "Modèle de Bethe-Weizsäcker décrit l'énergie de liaison par :", answers: ["5 termes : volume, surface, coulombien, asymétrie, couplage", "1 terme unique", "Uniquement le terme de volume", "Équation d'onde"], correct: 0, explanation: "B = aV·A − aS·A^(2/3) − aC·Z²/A^(1/3) − aA·(A−2Z)²/A + δ. Reproduit la courbe d'Aston." },
          { type: "mcq", visual: "☢️", question: "Désintégration β⁻ médiée par :", answers: ["Boson W⁻ (interaction faible)", "Photon γ (EM)", "Gluon (forte)", "Graviton (gravité)"], correct: 0, explanation: "β⁻ : interaction faible via W⁻. Découverte au CERN en 1983 (Nobel Rubbia, van der Meer)." },
          { type: "mcq", visual: "☢️", question: "Nombres magiques (2,8,20,28,50,82,126) correspondent à :", answers: ["Couches nucléaires complètes → noyaux particulièrement stables", "Noyaux instables", "Noyaux radioactifs préférentiels", "Nombres arbitraires"], correct: 0, explanation: "Modèle des couches nucléaires. ²⁰⁸Pb (Z=82, N=126) = doublement magique → très stable." },
          { type: "mcq", visual: "☢️", question: "Proton composé de (modèle standard) :", answers: ["2 quarks up + 1 quark down (uud)", "3 quarks down", "2 quarks down + 1 quark up", "1 quark + 1 gluon"], correct: 0, explanation: "Proton : uud (charge = 2/3+2/3−1/3 = +1). Neutron : udd (charge = 0)." }
        ],
        [
          { type: "mcq", visual: "☢️", question: "Énergie de liaison de ⁴He ≈ 28,3 MeV. Défaut de masse Δm :", answers: ["≈ 0,030 u (E = Δm·c², 1 u = 931,5 MeV)", "≈ 4 u", "≈ 0,003 u", "≈ 28,3 u"], correct: 0, explanation: "Δm = 28,3/931,5 ≈ 0,030 u. E_liaison = Δm·c² confirme la cohésion du noyau." },
          { type: "mcq", visual: "☢️", question: "Comparaison fission/fusion : l'énergie par nucléon libérée est :", answers: ["Plus grande pour la fusion (D-T : ~3,5 MeV/nucléon vs fission : ~0,85 MeV/nucléon)", "Plus grande pour la fission", "Identique", "Dépend uniquement de la masse"], correct: 0, explanation: "Par nucléon : fusion ~3,5 MeV, fission ~0,85 MeV. Mais fusion D+T = 4 nucléons, fission ²³⁵U = 236 nucléons." },
          { type: "mcq", visual: "☢️", question: "La décroissance radioactive est une loi statistique : cela signifie que :", answers: ["On ne peut prédire quand UN noyau spécifique va se désintégrer, seulement des probabilités sur N₀ grand", "Chaque noyau se désintègre exactement à t₁/₂", "La loi est déterministe pour chaque noyau", "Le hasard ne gouverne pas la radioactivité"], correct: 0, explanation: "Principe d'incertitude quantique : la désintégration est intrinsèquement probabiliste. La loi N(t) s'applique statistiquement à N grand." }
        ],
        [
          { type: "mcq", visual: "☢️", question: "Dans le modèle standard, l'interaction forte est médiée par :", answers: ["Les gluons (qui confinent les quarks dans les hadrons)", "Les photons", "Les bosons W/Z", "Les gravitons"], correct: 0, explanation: "Gluons = bosons de jauge de l'interaction forte (QCD = Chromodynamique Quantique). Confinent les quarks à l'intérieur des hadrons." },
          { type: "mcq", visual: "☢️", question: "La fission nucléaire est un processus quantique tunnel : :", answers: ["Le noyau 'traverse' la barrière de fission par effet tunnel même sans énergie suffisante classiquement", "La fission est un processus classique", "L'effet tunnel n'a aucun rôle en nucléaire", "La fission nécessite toujours un neutron"], correct: 0, explanation: "Effet tunnel quantique : le noyau peut franchir la barrière de fission même si son énergie est inférieure classiquement. Base de la fission spontanée." },
          { type: "input", visual: "☢️", question: "La loi de décroissance : N(t) = N₀ × e^(−___ × t). Compléter (constante radioactive, 1 lettre) :", correct: "λ", explanation: "N(t) = N₀·e^(−λt). λ est la constante radioactive (s⁻¹, an⁻¹ selon l'unité de temps)." }
        ],
        [
          { type: "mcq", visual: "☢️", question: "Le confinement du plasma dans ITER utilise :", answers: ["Des champs magnétiques (tokamak) pour confiner le plasma D-T à 10⁸ K sans contact avec les parois", "Une pression mécanique extrême", "Des lasers uniquement (NIF)", "Un champ électrique seul"], correct: 0, explanation: "ITER = tokamak (chambre toroïdale + champs magnétiques). NIF (Livermore) = confinement inertiel par lasers. ITER vise Q > 10 (énergie produite/énergie injectée)." },
          { type: "mcq", visual: "☢️", question: "La datation par ²³⁸U/²⁰⁶Pb (t₁/₂ = 4,47×10⁹ ans) permet de dater :", answers: ["Des roches et minéraux de l'âge géologique (milliards d'années)", "Des objets archéologiques récents (<50 000 ans)", "Des isotopes médicaux", "Des aliments"], correct: 0, explanation: "²³⁸U → ²⁰⁶Pb : t₁/₂ = 4,47 milliards d'années. Permet de dater les roches jusqu'à l'âge de la Terre (4,54 Ga)." },
          { type: "mcq", visual: "☢️", question: "La transmutation artificielle (Rutherford, 1919) : première réaction nucléaire provoquée :", answers: ["¹⁴N + α → ¹⁷O + p (première transmutation artificielle)", "Fission de l'uranium", "Fusion D-T", "Désintégration α naturelle"], correct: 0, explanation: "Rutherford 1919 : bombardement de ¹⁴N par α → ¹⁷O + proton. Première réaction nucléaire artificielle, ouvrant la voie à toute la physique nucléaire." }
        ]
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // NOTION 8 — Signaux et spectre électromagnétique
    // ─────────────────────────────────────────────────────────────────
    {
      id: "signaux",
      label: "Signaux périodiques & Spectre EM",
      icon: "📡",
      lesson: {
        formula: "f = 1/T | c = λ·f | E = hf | E_n(H) = −13,6/n² eV",
        text: "Un signal périodique a une période T et une fréquence f = 1/T. Pour les ondes EM dans le vide, c = λ·f = 3×10⁸ m/s. L'énergie d'un photon E = hf. Les niveaux d'énergie de l'atome d'hydrogène sont E_n = −13,6/n² eV.",
        example: "Lumière verte λ = 550 nm : f = 5,45×10¹⁴ Hz. E = hf ≈ 2,25 eV."
      },
      fullBlocks: [
        { type: "definition", title: "📌 Signal périodique et oscilloscope", text: "• T (s) : période. f = 1/T (Hz). Amplitude A. Phase φ.<br>• Valeur efficace (RMS) sinusoïdale : U_eff = U_max/√2.<br>• Oscilloscope : affiche u(t) → lire T, amplitude, déphasage.<br>• Déphasage φ = 2π·Δt/T (rad)." },
        { type: "formula", title: "🔑 Spectre EM et photons", formula: "c = λ·f = 3×10⁸ m/s<br>E = h·f = h·c/λ (J) ; h = 6,63×10⁻³⁴ J·s<br>1 eV = 1,6×10⁻¹⁹ J<br>H : E_n = −13,6/n² eV<br>ΔE = hf = E_n₁ − E_n₂ (émission, n₁ > n₂)<br>Spectre EM : γ→X→UV→visible (400-700nm)→IR→micro→radio", text: "Plus la fréquence est haute, plus le photon est énergétique et ionisant." },
        { type: "technique", title: "🛠️ Lecture oscilloscope et spectres", text: "• Oscilloscope : T = n_div × base_de_temps (ms/div). Amplitude = n_div × sensibilité (V/div).<br>• Spectre d'émission : raies brillantes (transition vers niveau bas → photon émis).<br>• Spectre d'absorption : raies sombres sur fond continu (atomes absorbent leurs λ propres)." },
        { type: "warning", title: "⚠️ Pièges fréquents", text: "• T lu sur graphe temporel, λ sur graphe spatial.<br>• 230 V secteur = valeur efficace. Crête = 230×√2 ≈ 325 V.<br>• E = hf : f en Hz → E en Joules. Penser à convertir en eV si nécessaire.<br>• Spectre d'absorption ≠ émission : l'un a des raies sombres, l'autre brillantes." },
        { type: "example", title: "✅ Hydrogène et redshift", text: "Hα (n=3→2) : ΔE = 13,6(1/4−1/9) = 1,89 eV → λ = 656 nm (rouge).<br>Redshift des galaxies : λ_obs > λ_émise → expansion de l'univers (Hubble).<br>Raies de Fraunhofer : spectre continu du Soleil absorbé par son atmosphère." },
        { type: "definition", title: "📌 Modèle de Bohr et quantification", text: "E_n = −13,6/n² eV. E_1 = −13,6 eV (fondamental). E_∞ = 0 (ionisation).<br>Énergie d'ionisation depuis E_1 : 13,6 eV.<br>Transition n₁ → n₂ (n₁ > n₂) : émission photon hf = E_n₁ − E_n₂.<br>Séries : Lyman (n→1, UV), Balmer (n→2, visible), Paschen (n→3, IR)." }
      ],
      levels: [
        [
          { type: "mcq", visual: "📡", question: "Fréquence d'un signal T = 0,02 s :", answers: ["50 Hz", "20 Hz", "0,02 Hz", "100 Hz"], correct: 0, explanation: "f = 1/T = 1/0,02 = 50 Hz (fréquence réseau européen)." },
          { type: "mcq", visual: "📡", question: "Longueur d'onde, radio f = 100 MHz :", answers: ["3 m", "30 m", "0,3 m", "300 m"], correct: 0, explanation: "λ = c/f = 3×10⁸/10⁸ = 3 m." },
          { type: "mcq", visual: "📡", question: "Énergie d'un photon de fréquence f :", answers: ["E = hf", "E = h/f", "E = f/h", "E = mc²"], correct: 0, explanation: "E = hf (Planck). h = 6,63×10⁻³⁴ J·s." },
          { type: "mcq", visual: "📡", question: "Plus grande longueur d'onde dans le spectre EM :", answers: ["Ondes radio", "Infrarouge", "Rayons X", "Rayons γ"], correct: 0, explanation: "λ croissant : γ < X < UV < visible < IR < micro < radio." },
          { type: "mcq", visual: "📡", question: "Valeur efficace, U_max = 10 V :", answers: ["~7,07 V (10/√2)", "10 V", "5 V", "14,14 V"], correct: 0, explanation: "U_eff = U_max/√2 ≈ 7,07 V." },
          { type: "mcq", visual: "📡", question: "Spectre d'émission : raies brillantes viennent de :", answers: ["Transitions n_haut → n_bas (photon émis)", "Diffusion lumière blanche", "Absorption d'un continu", "Réflexion"], correct: 0, explanation: "Émission : atome excité → désexcitation → photon de λ caractéristique." },
          { type: "mcq", visual: "📡", question: "Oscilloscope mesure :", answers: ["u(t) — tension en fonction du temps", "I(t)", "La fréquence directement", "La résistance"], correct: 0, explanation: "Oscilloscope → u(t). On en déduit T, f, amplitude, déphasage." },
          { type: "mcq", visual: "📡", question: "UV plus énergétique que visible car :", answers: ["λ_UV < λ_visible → f plus grande → E = hf plus grande", "Plus rapide", "Amplitude plus grande", "λ plus grande"], correct: 0, explanation: "E = hc/λ. Plus λ petite → E grande. UV ionisant, visible non." },
          { type: "mcq", visual: "📡", question: "Série de Balmer : transitions vers :", answers: ["n = 2 (visible)", "n = 1 (UV, Lyman)", "n = 3 (IR, Paschen)", "n = 0"], correct: 0, explanation: "Balmer : n ≥ 3 → n = 2. Lumière visible. Hα = 656 nm." },
          { type: "mcq", visual: "📡", question: "Niveau fondamental H, E₁ :", answers: ["−13,6 eV", "+13,6 eV", "0 eV", "−3,4 eV"], correct: 0, explanation: "E_n = −13,6/n². E_1 = −13,6 eV. Niveau le plus stable." }
        ],
        [
          { type: "mcq", visual: "📡", question: "Énergie photon H : n=3→n=2 :", answers: ["1,89 eV", "0,85 eV", "13,6 eV", "3,4 eV"], correct: 0, explanation: "ΔE = 13,6(1/4−1/9) = 1,89 eV → λ ≈ 656 nm (Hα)." },
          { type: "mcq", visual: "📡", question: "Spectre d'absorption : raies sombres car :", answers: ["Atomes absorbent leurs λ de résonance → manque de photons à ces λ", "Le prisme absorbe", "L'œil ne voit pas tout", "Réflexion"], correct: 0, explanation: "Lumière blanche → gaz → atomes absorbent → raies sombres caractéristiques." },
          { type: "mcq", visual: "📡", question: "Oscilloscope : 2 div/cycle, base 5 ms/div. Fréquence :", answers: ["100 Hz", "200 Hz", "50 Hz", "400 Hz"], correct: 0, explanation: "T = 2×5 ms = 10 ms → f = 100 Hz." },
          { type: "mcq", visual: "📡", question: "Secteur 230 V_eff. Valeur de crête :", answers: ["~325 V", "~230 V", "~163 V", "~460 V"], correct: 0, explanation: "U_max = 230×√2 ≈ 325 V." },
          { type: "mcq", visual: "📡", question: "Spectroscopie : identification chimique car :", answers: ["Chaque élément a un spectre de raies unique (empreinte spectrale)", "Les couleurs sont universelles", "Même λ pour tous", "Lumière blanche identifie tout"], correct: 0, explanation: "Niveaux d'énergie uniques → transitions → λ caractéristiques = empreinte spectrale." },
          { type: "mcq", visual: "📡", question: "Théorème de Nyquist-Shannon : fréquence d'échantillonnage minimale :", answers: ["f_e ≥ 2·f_max", "f_e ≥ f_max", "f_e = f_max", "f_e ≥ f_max/2"], correct: 0, explanation: "CD audio : f_max = 20 kHz → f_e = 44,1 kHz." },
          { type: "mcq", visual: "📡", question: "Redshift des galaxies indique :", answers: ["Elles s'éloignent (Doppler EM → expansion de l'univers)", "Elles sont plus froides", "Absorption par l'espace", "n > 1 dans l'espace"], correct: 0, explanation: "Hubble (1929) : v = H₀·d. Redshift = preuve de l'expansion de l'univers." },
          { type: "mcq", visual: "📡", question: "Fréquence de coupure filtre RC passe-bas :", answers: ["f_c = 1/(2πRC)", "f_c = RC", "f_c = 2πRC", "f_c = 1/(RC)"], correct: 0, explanation: "f_c = 1/(2πτ) = 1/(2πRC). En dessous : signal passe. Au-dessus : atténuation." },
          { type: "mcq", visual: "📡", question: "Déphasage entre deux signaux sinusoïdaux :", answers: ["φ = 2π·Δt/T (rad)", "φ = Δt·f", "φ = Δt/T", "φ = T/Δt"], correct: 0, explanation: "φ = 2π·Δt/T. Δt = décalage temporel mesuré sur l'oscilloscope." },
          { type: "mcq", visual: "📡", question: "Effet photoélectrique : métal éjecte des électrons si :", answers: ["hf > W (travail de sortie), indépendant de l'intensité", "Intensité suffisante", "λ > λ_seuil", "T élevée"], correct: 0, explanation: "Einstein 1905 (Nobel 1921) : E = hf. Si hf < W : aucun électron quelle que soit l'intensité." }
        ],
        [
          { type: "mcq", visual: "📡", question: "Raie Hα à 656 nm. Fréquence :", answers: ["~4,57×10¹⁴ Hz", "~2,26×10¹⁴ Hz", "~6,56×10¹⁴ Hz", "~10¹⁵ Hz"], correct: 0, explanation: "f = c/λ = 3×10⁸/656×10⁻⁹ ≈ 4,57×10¹⁴ Hz." },
          { type: "mcq", visual: "📡", question: "Énergie d'ionisation de H depuis E₁ :", answers: ["13,6 eV", "3,4 eV", "10,2 eV", "1,51 eV"], correct: 0, explanation: "E_ionisation = 0 − (−13,6) = 13,6 eV depuis l'état fondamental." },
          { type: "mcq", visual: "📡", question: "Signal numérisé à 16 bits : nombre de niveaux :", answers: ["65 536 (2¹⁶)", "16 niveaux", "256 (2⁸)", "1024 (2¹⁰)"], correct: 0, explanation: "2¹⁶ = 65 536. Plus de bits → résolution plus fine." },
          { type: "input", visual: "📡", question: "L'énergie d'un photon : E = ___ × f (constante de Planck, 1 lettre) :", correct: "h", explanation: "E = hf. h = 6,63×10⁻³⁴ J·s est la constante de Planck." },
          { type: "mcq", visual: "📡", question: "Loi de Wien : λ_max×T = 2,898×10⁻³ m·K. Pour le Soleil (T ≈ 5778 K), λ_max :", answers: ["~502 nm (visible, jaune-vert)", "~290 nm (UV)", "~3000 nm (IR)", "~5778 nm"], correct: 0, explanation: "λ_max = 2898/5778 ≈ 0,502 µm = 502 nm. Le Soleil émet principalement dans le jaune-vert." },
          { type: "mcq", visual: "📡", question: "Cohérence temporelle d'une source : longueur de cohérence L_c :", answers: ["L_c ≈ λ²/Δλ (plus monochromatique → plus grande L_c → interférences sur grande différence de marche)", "L_c = λ·f", "L_c dépend de l'intensité", "L_c est identique pour toutes les sources"], correct: 0, explanation: "Laser : L_c = km. Lumière blanche : L_c ≈ 1 µm. La cohérence conditionne les interférences." },
          { type: "mcq", visual: "📡", question: "Raies de Fraunhofer dans le spectre solaire viennent de :", answers: ["Absorption par l'atmosphère solaire des λ de résonance des atomes", "Réflexion par les planètes", "Diffraction par la Terre", "Émission laser du Soleil"], correct: 0, explanation: "Photosphère : corps noir. Atmosphère solaire : absorbe λ caractéristiques de ses éléments (H, Ca, Na…)." },
          { type: "mcq", visual: "📡", question: "De Broglie : longueur d'onde d'une particule de quantité de mouvement p :", answers: ["λ = h/p", "λ = h·p", "λ = p/h", "λ = m·v/h"], correct: 0, explanation: "λ_De Broglie = h/p = h/(mv). Dualité onde-corpuscule universelle." },
          { type: "mcq", visual: "📡", question: "Transformée de Fourier d'une impulsion de durée Δt :", answers: ["Largeur spectrale Δf ≈ 1/Δt (réciprocité temps-fréquence)", "Δf = Δt", "Δf → 0", "Δf = 2Δt"], correct: 0, explanation: "Δt·Δf ≈ 1. Impulsion courte → spectre large. Fondamental en radar, optique ultrarapide." },
          { type: "mcq", visual: "📡", question: "Puissance d'un signal sinusoïdal U_eff dans R :", answers: ["P = U_eff²/R", "P = U_max²/R", "P = U_eff·U_max/R", "P = U_eff/(2R)"], correct: 0, explanation: "P_moy = U_eff²/R = U_max²/(2R). La valeur efficace est définie pour que cette formule soit analogue au DC." }
        ],
        [
          { type: "mcq", visual: "📡", question: "Principe d'incertitude de Heisenberg Δx·Δp ≥ ℏ/2 : conséquence :", answers: ["L'électron dans l'atome a une Ec_min > 0 (énergie de point zéro) → l'atome est stable", "L'électron peut être au repos", "L'énergie est indéterminée uniquement à grande vitesse", "Heisenberg ne s'applique qu'aux photons"], correct: 0, explanation: "Confinement (Δx ≈ a₀) → Δp grand → Ec_min > 0. L'atome ne s'effondre pas : stabilité quantique fondamentale." },
          { type: "mcq", visual: "📡", question: "Fréquence propre d'un circuit LC oscillant :", answers: ["f₀ = 1/(2π√(LC))", "f₀ = √(LC)", "f₀ = 2π/LC", "f₀ = LC/2π"], correct: 0, explanation: "f₀ = 1/(2π√(LC)). Analogue électromagnétique du pendule mécanique." },
          { type: "mcq", visual: "📡", question: "Intrication quantique (Bell, Aspect 1982) : deux particules intriquées :", answers: ["Restent corrélées quelle que soit la distance (non-localité, violation des inégalités de Bell)", "Corrélées seulement à courte distance", "Violent la conservation d'énergie", "N'existent que théoriquement"], correct: 0, explanation: "Les expériences d'Aspect confirment : corrélations quantiques > inégalités de Bell → mécanique quantique non-locale." }
        ],
        [
          { type: "mcq", visual: "📡", question: "Mécanique quantique vs modèle de Bohr :", answers: ["Schrödinger : orbitales probabilistes |ψ|² remplacent les orbites circulaires définies", "Trajectoires elliptiques (Sommerfeld)", "Aucun modèle ne remplace Bohr", "La relativité générale"], correct: 0, explanation: "Schrödinger (1926) : ψ = fonction d'onde. |ψ|² = probabilité de présence. Fin des trajectoires déterministes." },
          { type: "mcq", visual: "📡", question: "Principe d'exclusion de Pauli : deux électrons ne peuvent pas :", answers: ["Avoir les mêmes 4 nombres quantiques → structure des atomes et toute la chimie", "Être dans le même atome", "Avoir le même spin seul", "Avoir la même énergie seul"], correct: 0, explanation: "Pauli : chaque orbital peut accueillir au maximum 2 électrons (spin ±½). Base de la configuration électronique." },
          { type: "input", visual: "📡", question: "La constante de Planck est notée ___ (1 lettre minuscule) :", correct: "h", explanation: "h = 6,63×10⁻³⁴ J·s. Présente dans E = hf, p = h/λ, ΔEΔt ≥ ℏ/2." }
        ],
        [
          { type: "mcq", visual: "📡", question: "Dans le modèle standard, les photons sont :", answers: ["Bosons de jauge de l'EM (QED), masse nulle, spin 1", "Fermions de spin 1/2", "Médiateurs de l'interaction forte", "Particules massives"], correct: 0, explanation: "Photon : boson de jauge de l'électromagnétisme (QED = Électrodynamique Quantique). Feynman, Schwinger, Tomonaga : Nobel 1965." },
          { type: "mcq", visual: "📡", question: "Dualité onde-corpuscule de la lumière : manifestation ondulatoire vs corpusculaire :", answers: ["Ondes : interférences/diffraction. Corpuscule : photoélectrique/Compton. Complémentarité (Bohr)", "Toujours ondulatoire", "Toujours corpusculaire", "Dépend de la couleur"], correct: 0, explanation: "Complémentarité de Bohr : onde OU corpuscule selon l'expérience. Jamais les deux simultanément." },
          { type: "mcq", visual: "📡", question: "L'effet Compton montre que le photon a une quantité de mouvement :", answers: ["p = h/λ = E/c (le photon est corpusculaire dans la diffusion)", "p = 0 (le photon est sans masse)", "p = mc (comme les particules massives)", "p = E·λ"], correct: 0, explanation: "Compton (1923, Nobel 1927) : diffusion photon-électron → le photon perd de l'énergie/quantité de mouvement. p = h/λ." }
        ]
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // NOTION 9 — Chimie : solutions, pH et réactions
    // ─────────────────────────────────────────────────────────────────
    {
      id: "chimie-solutions",
      label: "Chimie — Solutions & Réactions",
      icon: "🧪",
      lesson: {
        formula: "n = m/M | c = n/V | pH = −log[H₃O⁺] | Ka = [A⁻][H₃O⁺]/[HA]",
        text: "La quantité de matière n (mol) = m/M. La concentration molaire c = n/V. Le pH = −log[H₃O⁺] mesure l'acidité. Acides forts : totalement dissociés. Acides faibles : partiellement, selon Ka.",
        example: "NaOH 0,01 mol/L (base forte) : [OH⁻] = 0,01 → pOH = 2 → pH = 12."
      },
      fullBlocks: [
        { type: "definition", title: "📌 Quantité de matière et solutions", text: "• 1 mol = N_A = 6,02×10²³ entités.<br>• n = m/M = c·V = N/N_A.<br>• Dilution : c₁V₁ = c₂V₂ (n conservée).<br>• Masse molaire M (g/mol) = somme des masses atomiques." },
        { type: "formula", title: "🔑 pH et équilibres acido-basiques", formula: "pH = −log([H₃O⁺]) (mol/L)<br>pOH = −log([OH⁻])<br>pH + pOH = 14 (25°C)<br>Ke = [H₃O⁺][OH⁻] = 10⁻¹⁴<br>Acide fort : [H₃O⁺] = c<br>Acide faible : [H₃O⁺] = √(Ka·c)<br>Henderson-Hasselbalch : pH = pKa + log([A⁻]/[HA])", text: "pH < 7 : acide. pH = 7 : neutre. pH > 7 : basique (à 25°C)." },
        { type: "technique", title: "🛠️ Dosage acido-basique", text: "1) Équation du dosage (acide + base → sel + eau).<br>2) Équivalence : n_titrant × coeff = n_titré × coeff.<br>3) Si 1:1 : c_A·V_A = c_B·V_B.<br>4) Point d'équivalence : saut de pH ou virage indicateur.<br>5) Spectrométrie : A = ε·l·c (Beer-Lambert)." },
        { type: "warning", title: "⚠️ Pièges fréquents", text: "• pH = −log(c) : valable seulement pour acide FORT.<br>• n = m/M (pas m×M !). Vérifier unités.<br>• pOH = 14 − pH uniquement à 25°C.<br>• pH à l'équivalence ≠ 7 si acide ou base faible.<br>• Beer-Lambert : A = ε·l·c (c en mol/L, l en cm)." },
        { type: "example", title: "✅ Dosage et redox", text: "Dosage : 20 mL NaOH (inconnu) + HCl 0,1 M, V_éq = 25 mL.<br>c_NaOH = n/V = 0,1×0,025/0,02 = 0,125 mol/L.<br><br>Demi-équation : MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O.<br><br>Acide faible Ka = 10⁻⁵, c = 0,1 M : [H₃O⁺] = √(10⁻⁶) = 10⁻³ → pH = 3." },
        { type: "definition", title: "📌 Oxydoréduction", text: "Oxydation = perte e⁻. Réduction = gain e⁻.<br>Couple Ox/Red : Ox + ne⁻ → Red.<br>Réaction globale = combinaison de deux demi-équations (éliminer e⁻).<br>Exemples : Fe³⁺/Fe²⁺, MnO₄⁻/Mn²⁺, I₂/I⁻, Cu²⁺/Cu.<br>Pile galvanique : ΔG = −nFE_pile < 0 (réaction spontanée → courant)." }
      ],
      levels: [
        [
          { type: "mcq", visual: "🧪", question: "Nombre d'Avogadro :", answers: ["6,02×10²³ mol⁻¹", "6,02×10²³ kg", "1 mol", "6,02×10²⁶"], correct: 0, explanation: "N_A = 6,02×10²³ mol⁻¹." },
          { type: "mcq", visual: "🧪", question: "n dans 18 g d'eau (M = 18 g/mol) :", answers: ["1 mol", "18 mol", "0,18 mol", "6×10²³ mol"], correct: 0, explanation: "n = m/M = 18/18 = 1 mol." },
          { type: "mcq", visual: "🧪", question: "Concentration de 0,5 mol dans 250 mL :", answers: ["2 mol/L", "0,125 mol/L", "0,5 mol/L", "125 mol/L"], correct: 0, explanation: "c = n/V = 0,5/0,25 = 2 mol/L." },
          { type: "mcq", visual: "🧪", question: "pH de HCl 0,001 mol/L :", answers: ["3", "11", "7", "1"], correct: 0, explanation: "HCl fort : [H₃O⁺] = 10⁻³ → pH = 3." },
          { type: "mcq", visual: "🧪", question: "pH + pOH à 25°C :", answers: ["14", "7", "0", "Variable"], correct: 0, explanation: "Ke = 10⁻¹⁴ → pH + pOH = 14." },
          { type: "mcq", visual: "🧪", question: "pH = 9 est :", answers: ["Basique", "Acide", "Neutre", "Indéterminé"], correct: 0, explanation: "pH > 7 → basique à 25°C." },
          { type: "mcq", visual: "🧪", question: "Acide fort : :", answers: ["Totalement dissocié → [H₃O⁺] = c", "Partiellement dissocié", "Ka = 0", "Ne libère pas H₃O⁺"], correct: 0, explanation: "HCl, H₂SO₄, HNO₃ : dissociation complète." },
          { type: "mcq", visual: "🧪", question: "Lors d'une dilution, ce qui est conservé :", answers: ["n = c·V", "La concentration c", "Le volume V", "La masse volumique"], correct: 0, explanation: "c₁V₁ = c₂V₂ : la quantité de matière est conservée." },
          { type: "mcq", visual: "🧪", question: "Oxydation = :", answers: ["Perte d'électrons (LEO)", "Gain d'électrons", "Gain de H⁺", "Perte de neutrons"], correct: 0, explanation: "LEO = Loss Electrons Oxidation. GER = Gain Electrons Reduction." },
          { type: "mcq", visual: "🧪", question: "Masse molaire H₂O :", answers: ["18 g/mol", "2 g/mol", "16 g/mol", "20 g/mol"], correct: 0, explanation: "M(H₂O) = 2×1 + 16 = 18 g/mol." }
        ],
        [
          { type: "mcq", visual: "🧪", question: "pH de NaOH 0,01 mol/L :", answers: ["12", "2", "7", "10"], correct: 0, explanation: "[OH⁻] = 0,01 → pOH = 2 → pH = 12." },
          { type: "mcq", visual: "🧪", question: "Point d'équivalence = :", answers: ["n_titrant = n_titré × rapport stœchio", "pH = 7 toujours", "Indicateur change seul", "Solution neutre"], correct: 0, explanation: "Équivalence : quantités stœchiométriques épuisées. pH ≠ 7 si acide/base faible." },
          { type: "mcq", visual: "🧪", question: "Demi-équation MnO₄⁻/Mn²⁺ en milieu acide :", answers: ["MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O", "MnO₄⁻ → Mn²⁺ + 4O²⁻", "MnO₄⁻ + 5e⁻ → Mn²⁺", "MnO₄⁻ + 5H⁺ → Mn²⁺"], correct: 0, explanation: "Vérif charges : −1+8−5 = +2 ✓. Atomes O : 4=4 ✓." },
          { type: "mcq", visual: "🧪", question: "Moles dans 11,2 L de O₂ (V_m = 22,4 L/mol) :", answers: ["0,5 mol", "11,2 mol", "22,4 mol", "2 mol"], correct: 0, explanation: "n = V/V_m = 11,2/22,4 = 0,5 mol." },
          { type: "mcq", visual: "🧪", question: "Masse molaire du glucose C₆H₁₂O₆ :", answers: ["180 g/mol", "12 g/mol", "72 g/mol", "168 g/mol"], correct: 0, explanation: "M = 6×12 + 12×1 + 6×16 = 180 g/mol." },
          { type: "mcq", visual: "🧪", question: "pKa = −log(Ka). Pour Ka = 1,8×10⁻⁵ (acide acétique) :", answers: ["~4,74", "~5,26", "~1,8", "~0,000018"], correct: 0, explanation: "pKa = −log(1,8×10⁻⁵) = 5 − log(1,8) ≈ 4,74." },
          { type: "mcq", visual: "🧪", question: "pH d'acide faible Ka = 10⁻⁵, c = 0,1 mol/L :", answers: ["3", "5", "7", "1"], correct: 0, explanation: "[H₃O⁺] = √(Ka·c) = √(10⁻⁶) = 10⁻³ → pH = 3." },
          { type: "mcq", visual: "🧪", question: "Loi de Beer-Lambert A = ε·l·c permet :", answers: ["Dosage par spectrophotométrie (A linéaire en c)", "Mesurer le pH", "Calculer M", "Mesurer la conductivité"], correct: 0, explanation: "A = ε·l·c. Linéaire → dosage précis par spectrométrie UV-Vis." },
          { type: "mcq", visual: "🧪", question: "Solution tampon : :", answers: ["Contient couple HA/A⁻ qui neutralise ajouts d'acide ou de base → pH stable", "Très concentrée", "Ne contient pas d'eau", "Chimiquement inerte"], correct: 0, explanation: "pH = pKa + log([A⁻]/[HA]) (Henderson-Hasselbalch). pH = pKa quand [HA] = [A⁻]." },
          { type: "mcq", visual: "🧪", question: "Mélange 200 mL HCl 0,1 M + 100 mL NaOH 0,1 M. pH :", answers: ["~1,5 (excès HCl)", "7", "~11,5", "3"], correct: 0, explanation: "n_HCl = 0,02, n_NaOH = 0,01. Excès HCl = 0,01 mol. V = 0,3 L. [H₃O⁺] ≈ 0,033 → pH ≈ 1,5." }
        ],
        [
          { type: "mcq", visual: "🧪", question: "Dosage : 20 mL NaOH + HCl 0,1 M, V_éq = 25 mL. c_NaOH :", answers: ["0,125 mol/L", "0,1 mol/L", "0,2 mol/L", "0,05 mol/L"], correct: 0, explanation: "n_HCl = 2,5×10⁻³ mol = n_NaOH. c = 2,5×10⁻³/0,020 = 0,125 mol/L." },
          { type: "mcq", visual: "🧪", question: "Indicateur coloré : doit avoir son virage :", answers: ["Proche du pH d'équivalence", "À pH = 7 toujours", "En dehors du saut de pH", "Le plus coloré possible"], correct: 0, explanation: "Phénolphtaléine (pH 8-10) : adaptée base forte / acide faible. BBT (pH 6-7,6) : pour fort/fort." },
          { type: "input", visual: "🧪", question: "La concentration molaire s'écrit c = n / ___ (symbole du volume, 1 lettre) :", correct: "V", explanation: "c = n/V. c en mol/L, n en mol, V en litres." },
          { type: "mcq", visual: "🧪", question: "Henderson-Hasselbalch : quand [A⁻] = [HA] :", answers: ["pH = pKa", "pH = 7", "pH = 0", "pH = 14"], correct: 0, explanation: "log(1) = 0 → pH = pKa. Point à mi-équivalence lors d'un dosage d'acide faible." },
          { type: "mcq", visual: "🧪", question: "Loi de Nernst : E = E° + (0,059/n)·log([Ox]/[Red]) à 25°C. Pour Cu²⁺/Cu (n=2), si [Cu²⁺] = 0,01 M :", answers: ["E = E° − 0,059 V", "E = E°", "E = E° + 0,059 V", "E = 2E°"], correct: 0, explanation: "E = E° + (0,059/2)·log(0,01) = E° + 0,0295×(−2) = E° − 0,059 V." },
          { type: "mcq", visual: "🧪", question: "pH sanguin (7,35-7,45) maintenu par le tampon :", answers: ["H₂CO₃/HCO₃⁻ (bicarbonate/CO₂, pKa = 6,1)", "H₃PO₄/H₂PO₄⁻", "NH₄⁺/NH₃", "OH⁻/H₂O"], correct: 0, explanation: "Tampon bicarbonate : pKa₂ = 6,1. CO₂ expiré par les poumons régule l'équilibre. Crucial pour la survie." },
          { type: "mcq", visual: "🧪", question: "Réaction redox : l'oxydant est :", answers: ["Réduit (gagne des électrons)", "Oxydé (perd des électrons)", "Ni oxydé ni réduit", "Toujours un métal"], correct: 0, explanation: "L'oxydant oxyde l'autre et est lui-même réduit. Mémorisation : LEO-GER." },
          { type: "mcq", visual: "🧪", question: "Spectrométrie de masse : permet d'identifier :", answers: ["Molécules par rapport m/z (masse/charge) après ionisation", "Le pH d'une solution", "La concentration directement", "La fluorescence"], correct: 0, explanation: "MS : ionisation + séparation par m/z + détection. Identification, structure (fragmentation), masse molaire." },
          { type: "mcq", visual: "🧪", question: "Chromatographie (HPLC, CCM) : sépare par :", answers: ["Différence d'affinité phase mobile/stationnaire", "Masse des molécules", "Charge électrique seule", "Radioactivité"], correct: 0, explanation: "Rf ou temps de rétention → identification. Séparation par partage mobile/stationnaire." },
          { type: "mcq", visual: "🧪", question: "Réaction spontanée : ΔG = −nFE_pile. Si E_pile > 0 :", answers: ["ΔG < 0 → réaction spontanée (pile galvanique)", "ΔG > 0 → électrolyse", "ΔG = 0", "Pas de relation entre E et ΔG"], correct: 0, explanation: "ΔG = −nFE. E > 0 → ΔG < 0 → spontané. C'est le principe de la pile électrochimique." }
        ],
        [
          { type: "mcq", visual: "🧪", question: "ΔG° = −RT·ln(K). Pour K = 10⁶ à 298K, ΔG° :", answers: ["≈ −34 kJ/mol (réaction très spontanée)", "≈ +34 kJ/mol", "≈ 0", "≈ −6 kJ/mol"], correct: 0, explanation: "ΔG° = −8,314×298×ln(10⁶) ≈ −34 200 J/mol ≈ −34 kJ/mol." },
          { type: "mcq", visual: "🧪", question: "Principe de Le Chatelier :", answers: ["Si perturbation → l'équilibre se déplace pour s'y opposer", "L'équilibre est immuable", "T↑ favorise toujours les réactifs", "P↑ favorise toujours les produits"], correct: 0, explanation: "Le Chatelier : ajout réactif → vers produits. T↑ → vers endothermique. P↑ → vers moins de gaz." },
          { type: "mcq", visual: "🧪", question: "Pourquoi l'eau bout à 100°C (bien plus que H₂S à −60°C) :", answers: ["Liaisons hydrogène O−H···O très fortes → haute cohésion → haute T_éb", "L'eau est plus lourde", "Liaison covalente O−H plus forte que S−H", "L'eau est ionique"], correct: 0, explanation: "Liaisons H (~20 kJ/mol) : fortes interactions intermoléculaires → énergie élevée pour vaporiser l'eau." }
        ],
        [
          { type: "mcq", visual: "🧪", question: "Réaction endothermique (ΔH > 0) peut être spontanée si :", answers: ["TΔS > ΔH (ΔG = ΔH − TΔS < 0 → grande T et/ou grand ΔS)", "Jamais spontanée", "Seulement à basse T", "Uniquement si ΔH = 0"], correct: 0, explanation: "ΔG = ΔH − TΔS. Endothermique + augmentation de désordre + T élevée → ΔG < 0 possible." },
          { type: "mcq", visual: "🧪", question: "Électrolyse de l'eau (ΔG° > 0) : énergie nécessaire au minimum :", answers: ["ΔG° = nFE° ≈ 2×96485×1,23 ≈ 237 kJ/mol", "ΔG° = 0 (spontané)", "ΔG° = 1,23 J/mol", "ΔG° = −237 kJ/mol"], correct: 0, explanation: "Électrolyse H₂O : E° = 1,23 V, n = 2 electrons → W_min = nFE° = 2×96485×1,23 ≈ 237 kJ/mol H₂O." },
          { type: "input", visual: "🧪", question: "Le pH est défini par pH = −log([_₃O⁺]). Compléter l'ion (2 lettres) :", correct: "H₃", explanation: "pH = −log([H₃O⁺]). H₃O⁺ = ion oxonium (proton hydraté)." }
        ],
        [
          { type: "mcq", visual: "🧪", question: "Constante d'équilibre K reliée à ΔG° : ΔG° = :", answers: ["−RT·ln(K) (K grand → ΔG° très négatif → réaction quasi-totale)", "K·RT", "−K/RT", "RT/K"], correct: 0, explanation: "ΔG° = −RT·ln K. K >> 1 : ΔG° << 0. K << 1 : ΔG° >> 0." },
          { type: "mcq", visual: "🧪", question: "Pile H₂/O₂ (pile à combustible) : réactions :", answers: ["Anode : H₂ → 2H⁺ + 2e⁻. Cathode : O₂ + 4H⁺ + 4e⁻ → 2H₂O. Bilan : H₂ + ½O₂ → H₂O + énergie", "Inverse : H₂O → H₂ + O₂", "Fission de l'eau", "Combustion de l'hydrogène thermique uniquement"], correct: 0, explanation: "Pile à combustible : oxydation de H₂ → courant électrique + chaleur + eau. E° ≈ 1,23 V. Rendement > moteur thermique." },
          { type: "mcq", visual: "🧪", question: "La liaison covalente est décrite par la théorie des orbitales moléculaires (OM) comme :", answers: ["Combinaison linéaire des orbitales atomiques (LCAO) → orbitales liantes et antiliantes", "Transfert d'électrons", "Liaison ionique atténuée", "Simple chevauchement géométrique"], correct: 0, explanation: "LCAO-MO : ψ_±  = ψ_A ± ψ_B. Liaison : ψ₊ (énergie < ψ_A). Antiliante : ψ₋ (énergie > ψ_A). Fonde toute la chimie moléculaire." }
        ]
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // NOTION 10 — Chimie organique : structure, réactivité, synthèse
    // ─────────────────────────────────────────────────────────────────
    {
      id: "chimie-organique",
      label: "Chimie organique — Structures & Réactivité",
      icon: "⚗️",
      lesson: {
        formula: "CₙH₂ₙ₊₂ (alcane) | CₙH₂ₙ (alcène) | RCOOH + R'OH ⇌ RCOOR' + H₂O (estérification)",
        text: "La chimie organique est la chimie du carbone. Les groupes fonctionnels déterminent la réactivité. L'estérification (acide + alcool ⇌ ester + eau) est un équilibre limité. La spectroscopie IR et RMN permettent d'identifier les molécules.",
        example: "CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O. Taux d'estérification ≈ 67% (équilibre)."
      },
      fullBlocks: [
        { type: "definition", title: "📌 Familles de composés organiques", text: "• <strong>Alcanes</strong> CₙH₂ₙ₊₂ : liaisons simples, inertes (combustion, halogénation UV).<br>• <strong>Alcènes</strong> CₙH₂ₙ : C=C, addition électrophile (HX, X₂, H₂O).<br>• <strong>Alcools</strong> R−OH : oxydation → aldéhyde (1°) ou cétone (2°).<br>• <strong>Acides carboxyliques</strong> R−COOH : estérification.<br>• <strong>Esters</strong> R−COO−R' : hydrolyse (acide = équilibre) ou saponification (base = totale)." },
        { type: "formula", title: "🔑 Réactions importantes", formula: "Estérification : RCOOH + HOR' ⇌ RCOOR' + H₂O (lente, équilibre, cat H₂SO₄, τ ≈ 67%)<br>Saponification : RCOOR' + OH⁻ → RCOO⁻ + HOR' (totale)<br>Addition Markovnikov : H sur C le plus hydrogéné<br>Alcool 1° → aldéhyde → acide<br>Alcool 2° → cétone (pas d'oxydation poussée)", text: "Pour améliorer le rendement d'une estérification : excès d'un réactif, éliminer l'eau formée, ou chlorure d'acyle (réaction totale)." },
        { type: "technique", title: "🛠️ Spectroscopie IR et RMN ¹H", text: "IR (nombre d'onde, cm⁻¹) :<br>• ~3300-3600 : O−H alcool (large)<br>• ~2500-3300 très large : O−H acide<br>• ~1700-1750 : C=O (carbonyle)<br>• ~1250 + ~1740 : ester (deux bandes)<br><br>RMN ¹H (δ en ppm) :<br>• CH₃ aliphatique : ~0,9<br>• CH₂ : ~1,3<br>• O−CH₂/O−CH₃ (ester) : ~3,5-4,5<br>• COOH : ~10-12" },
        { type: "warning", title: "⚠️ Pièges fréquents", text: "• Estérification ≠ saponification : estérification = réversible. Saponification = totale.<br>• Alcool 2° → cétone uniquement (pas d'acide possible).<br>• Markovnikov : H sur C le PLUS hydrogéné.<br>• Combustion complète → CO₂ + H₂O. Incomplète → CO (oxygène insuffisant)." },
        { type: "example", title: "✅ Synthèse d'ester et identification", text: "Synthèse acétate d'éthyle : CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O.<br>IR de l'ester : bandes C=O à ~1740 cm⁻¹ et C−O−C à ~1250 cm⁻¹. Pas de bande O−H large.<br><br>Halogénation de CH₄ + Cl₂ (UV) : CH₃Cl + HCl. Mécanisme radicalaire.<br><br>Polymérisation : n CH₂=CH₂ → −(CH₂−CH₂)ₙ− (polyéthylène)." },
        { type: "definition", title: "📌 Isomérie et nomenclature IUPAC", text: "• Isomérie de constitution : même formule brute, enchaînements différents.<br>• Stéréoisomérie : même enchaînement, arrangements spatiaux différents.<br>• Carbone asymétrique C* : 4 substituants différents → chiralité → énantiomères.<br>• Nomenclature IUPAC : chaîne principale + préfixe/suffixe selon le groupe fonctionnel (−ol, −al, −one, −oïque, −oate)." }
      ],
      levels: [
        [
          { type: "mcq", visual: "⚗️", question: "Formule générale des alcanes :", answers: ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙHₙ"], correct: 0, explanation: "Alcanes : hydrocarbures saturés (liaisons simples). CₙH₂ₙ₊₂." },
          { type: "mcq", visual: "⚗️", question: "Groupe fonctionnel des alcools :", answers: ["−OH (hydroxyle)", "−COOH", "−CHO", "−CO−"], correct: 0, explanation: "Alcool : R−OH. Le groupement hydroxyle −OH est lié à un carbone sp³." },
          { type: "mcq", visual: "⚗️", question: "L'estérification est :", answers: ["Réversible (équilibre), lente, catalysée par H₂SO₄", "Totale", "Très rapide", "Sans catalyseur possible"], correct: 0, explanation: "RCOOH + R'OH ⇌ RCOOR' + H₂O. Équilibre. τ_max ≈ 67%." },
          { type: "mcq", visual: "⚗️", question: "La saponification (base forte + ester) est :", answers: ["Totale et irréversible", "Équilibrée", "Lente et réversible", "Sans intérêt industriel"], correct: 0, explanation: "RCOOR' + OH⁻ → RCOO⁻ + R'OH. Totale : l'ion carboxylate ne peut pas reformer l'ester en milieu basique." },
          { type: "mcq", visual: "⚗️", question: "Oxydation d'un alcool primaire donne d'abord :", answers: ["Un aldéhyde", "Une cétone", "Un acide directement", "Un alcène"], correct: 0, explanation: "R−CH₂OH → R−CHO (aldéhyde). Puis si oxydation poussée → R−COOH (acide)." },
          { type: "mcq", visual: "⚗️", question: "Oxydation d'un alcool secondaire :", answers: ["Une cétone (pas d'oxydation poussée)", "Un aldéhyde", "Un acide", "Un alcène"], correct: 0, explanation: "R−CHOH−R' → R−CO−R' (cétone). Pas d'oxydation poussée : pas de H sur le C carbonyle." },
          { type: "mcq", visual: "⚗️", question: "Bande IR vers 1700-1750 cm⁻¹ :", answers: ["C=O (carbonyle)", "O−H alcool", "C−H aliphatique", "C=C alcène"], correct: 0, explanation: "C=O : 1700-1750 cm⁻¹. Acide ~1710, ester ~1740, cétone/aldéhyde ~1710-1730." },
          { type: "mcq", visual: "⚗️", question: "Carbone asymétrique C* possède :", answers: ["4 substituants différents → chiralité", "3 substituants identiques", "Un doublet libre", "2 liaisons doubles"], correct: 0, explanation: "C* : 4 substituants différents → énantiomères (images miroir non superposables)." },
          { type: "mcq", visual: "⚗️", question: "Règle de Markovnikov (addition HX sur alcène) :", answers: ["H se fixe sur le C le plus hydrogéné (moins substitué)", "H se fixe sur le C le moins hydrogéné", "X se fixe sur le C le moins substitué", "Fixation aléatoire"], correct: 0, explanation: "Markovnikov : addition électrophile. H⁺ sur C le plus riche en H → carbocation le plus stable." },
          { type: "mcq", visual: "⚗️", question: "Taux d'estérification à l'équilibre (1:1 sans déplacement) :", answers: ["~67%", "~100%", "~50%", "~33%"], correct: 0, explanation: "Estérification acide/alcool 1:1 : τ_max ≈ 67%. Pour améliorer : excès réactif ou éliminer l'eau." }
        ],
        [
          { type: "mcq", visual: "⚗️", question: "Pour augmenter le taux d'estérification :", answers: ["Excès d'alcool ou éliminer l'eau formée", "Ajouter de la base", "Refroidir", "Travailler à pression réduite"], correct: 0, explanation: "Déplacer l'équilibre vers produits : excès réactif ou élimination de l'eau (distillation azéotropique)." },
          { type: "mcq", visual: "⚗️", question: "Hydrolyse acide d'un ester :", answers: ["Acide + alcool (réversible, équilibre)", "Sel de l'acide + alcool (totale)", "Uniquement l'alcool", "Un éther"], correct: 0, explanation: "Hydrolyse acide = inverse de l'estérification → équilibre. Saponification (base) = totale → sel + alcool." },
          { type: "mcq", visual: "⚗️", question: "En RMN ¹H, un proton COOH résonne vers :", answers: ["~10-12 ppm (très déblindé)", "~0-1 ppm", "~3-5 ppm", "~7-8 ppm (aromatique)"], correct: 0, explanation: "COOH très déblindé → 10-12 ppm. OH alcool : 3-5 ppm. CH₃ : ~0,9 ppm." },
          { type: "mcq", visual: "⚗️", question: "Combustion complète d'un alcane CₙH₂ₙ₊₂ :", answers: ["n CO₂ + (n+1) H₂O", "CO + H₂", "n C + (n+1) H₂O", "CO₂ uniquement"], correct: 0, explanation: "Combustion complète : CₙH₂ₙ₊₂ + (3n+1)/2 O₂ → n CO₂ + (n+1) H₂O." },
          { type: "mcq", visual: "⚗️", question: "Isomérie de constitution = :", answers: ["Même formule brute, enchaînements différents (butane/isobutane)", "Même enchaînement, spatial différent", "Identique à stéréoisomérie", "Même formule développée"], correct: 0, explanation: "Isomérie plane : même formule brute mais connectivité différente." },
          { type: "mcq", visual: "⚗️", question: "Halogénation CH₄ + Cl₂ (UV) : mécanisme :", answers: ["Radicalaire (UV → Cl• → initiation/propagation/terminaison)", "Ionique (acide de Lewis)", "Électrophile (comme alcène)", "Nucléophile"], correct: 0, explanation: "UV → Cl₂ → 2 Cl•. Radical Cl• attaque CH₄. Mécanisme en chaîne." },
          { type: "mcq", visual: "⚗️", question: "Nomenclature de CH₃−CH(OH)−CH₃ :", answers: ["Propan-2-ol", "Propan-1-ol", "2-méthylpropanol", "Isopropane"], correct: 0, explanation: "Chaîne principale 3C (propane). OH sur C2 → propan-2-ol." },
          { type: "mcq", visual: "⚗️", question: "Polymérisation par addition de l'éthylène :", answers: ["Polyéthylène −(CH₂−CH₂)ₙ−", "Polystyrène", "Nylon", "Caoutchouc naturel"], correct: 0, explanation: "n CH₂=CH₂ → −(CH₂−CH₂)ₙ− (HDPE ou LDPE). Polymérisation radicalaire ou Ziegler-Natta." },
          { type: "mcq", visual: "⚗️", question: "Liaison peptidique entre deux acides aminés :", answers: ["Condensation COOH + NH₂ → CO−NH + H₂O", "Estérification COOH + OH", "Réaction entre deux NH₂", "Réaction radicalaire"], correct: 0, explanation: "Liaison amide (peptidique) : R−COOH + H₂N−R' → R−CO−NH−R' + H₂O. Base des protéines." },
          { type: "mcq", visual: "⚗️", question: "T_éb alcools > alcanes de même masse car :", answers: ["Liaisons hydrogène O−H···O (intermoléculaires fortes, ~20 kJ/mol)", "Alcools plus lourds", "Liaison C−O très forte", "Dipôles seuls"], correct: 0, explanation: "Liaisons H : fortes interactions intermoléculaires → T_éb plus élevée." }
        ],
        [
          { type: "mcq", visual: "⚗️", question: "Spectroscopie de masse : perte de 45 u.m.a. d'un ester éthylique correspond à :", answers: ["Perte d'−OC₂H₅ (45 u.m.a.) → fragment acylium R−CO⁺", "Perte de −CH₃ (15)", "Perte de −OH (17)", "Perte de −COOH (45)"], correct: 0, explanation: "OC₂H₅ = 16+24+5 = 45 u.m.a. Fragment caractéristique de l'ester éthylique en SM." },
          { type: "mcq", visual: "⚗️", question: "En RMN ¹³C : pic à ~170 ppm correspond à :", answers: ["Carbone carbonyle C=O", "CH₃ aliphatique (~20 ppm)", "CH₂ (~30 ppm)", "Aromatique (~130 ppm)"], correct: 0, explanation: "C=O : 160-220 ppm en ¹³C. Aliphatiques : 0-50 ppm. Aromatiques : 110-150 ppm." },
          { type: "mcq", visual: "⚗️", question: "Addition anti-Markovnikov de HBr (peroxydes) :", answers: ["Mécanisme radicalaire → Br sur C le moins hydrogéné", "Ionique → Markovnikov normal", "Pas de régiosélectivité", "Syn-addition"], correct: 0, explanation: "Peroxydes → radical Br• → anti-Markovnikov. Sans peroxyde → ionique → Markovnikov." },
          { type: "input", visual: "⚗️", question: "Formule générale des alcanes : CₙH___ (exposant en fonction de n) :", correct: "2n+2", explanation: "Alcanes : CₙH₂ₙ₊₂. Chaque carbone saturé → 2n+2 atomes H." },
          { type: "mcq", visual: "⚗️", question: "Réaction de Diels-Alder : cycloaddition [4+2] entre :", answers: ["Diène conjugué (4π) + diénophile (2π) → cyclohexène (régiosélective, stéréospécifique)", "Deux alcènes", "Alcène + acide", "Deux diènes"], correct: 0, explanation: "Diels-Alder : réaction péricyclique. Concertée, stéréospécifique (syn), régiosélective (règle d'endo)." },
          { type: "mcq", visual: "⚗️", question: "Mécanisme SN2 (substitution nucléophile bimoléculaire) :", answers: ["Attaque du nucléophile par derrière → inversion de configuration (Walden) → stéréosélectif", "Carbocation intermédiaire", "Radical libre", "Addition puis élimination"], correct: 0, explanation: "SN2 : mécanisme concerté, une étape, inversion de Walden (configuration inversée). Favorable pour substrats primaires." },
          { type: "mcq", visual: "⚗️", question: "Mécanisme E1 d'élimination : :", answers: ["Formation d'un carbocation → départ du H β → alcène (réarrangement possible)", "Concerté, anti-périplanaire (E2)", "Radical libre", "Addition d'eau"], correct: 0, explanation: "E1 : 2 étapes, carbocation. E2 : 1 étape, base forte, anti-périplanaire. E1 favorisé par substrats tertiaires et solvants polaires." },
          { type: "mcq", visual: "⚗️", question: "Aromate benzène : caractéristiques :", answers: ["6π électrons délocalisés (règle de Hückel : 4n+2, n=1) → stabilité particulière, substitution électrophile", "3 doubles liaisons localisées", "Non aromatique", "Réagit par addition préférentiellement"], correct: 0, explanation: "Benzène : 6π électrons (4×1+2) → aromatique. Réagit par substitution électrophile aromatique (SEAr), pas addition (préserve l'aromaticité)." },
          { type: "mcq", visual: "⚗️", question: "Réaction d'acylation de Friedel-Crafts :", answers: ["ArH + RCOCl + AlCl₃ → Ar−CO−R + HCl (SEAr, catalyse Lewis)", "Addition sur alcène", "Estérification", "Réduction"], correct: 0, explanation: "Friedel-Crafts (acylation) : chlorure d'acyle + acide de Lewis (AlCl₃) → ion acylium → SEAr → cétone aromatique." },
          { type: "mcq", visual: "⚗️", question: "La chromatographie chirale permet de :", answers: ["Séparer les énantiomères d'un racémique (même propriétés physiques, différentes activités biologiques)", "Séparer par masse molaire", "Séparer par polarité seule", "Mesurer le pH des énantiomères"], correct: 0, explanation: "Phase stationnaire chirale crée des interactions diastéréomères avec les énantiomères → séparation. Crucial en pharmacologie (L vs D)." }
        ],
        [
          { type: "mcq", visual: "⚗️", question: "La rétrosynthèse est une stratégie consistant à :", answers: ["Analyser une molécule cible en décomposant les liaisons pour identifier les précurseurs (raisonnement inverse)", "Synthétiser directement sans planification", "Analyser les produits obtenus après réaction", "Identifier les sous-produits"], correct: 0, explanation: "Rétrosynthèse (Corey, Nobel 1990) : partir du produit cible → couper des liaisons logiquement → précurseurs disponibles. Planification des synthèses complexes." },
          { type: "mcq", visual: "⚗️", question: "Pourquoi les médicaments chiraux (chiraux) nécessitent-ils un contrôle stéréochimique en synthèse ?", answers: ["Les deux énantiomères ont des effets biologiques différents (un actif, l'autre inactif ou toxique : thalidomide)", "Ils ont les mêmes propriétés biologiques", "La chiralité n'affecte pas l'activité pharmacologique", "Seul le coût de production justifie le contrôle"], correct: 0, explanation: "Thalidomide : R-énantiomère = sédatif. S-énantiomère = tératogène. Exige synthèse énantiosélective ou résolution des racémiques." },
          { type: "mcq", visual: "⚗️", question: "La chimie verte (12 principes, Anastas & Warner) vise à :", answers: ["Réduire les déchets et la toxicité à la source (atome d'économie, solvants verts, catalyse, énergie minimale)", "Maximiser les rendements uniquement", "Utiliser le pétrole plus efficacement", "Éviter toute réaction exothermique"], correct: 0, explanation: "Chimie verte : 12 principes dont économie d'atomes (max incorporation des réactifs dans le produit), solvants verts, énergies alternatives, catalyse." }
        ],
        [
          { type: "mcq", visual: "⚗️", question: "La catalyse enzymatique est si efficace car :", answers: ["L'enzyme stabilise l'état de transition (abaisse ΔG‡) par interactions spécifiques dans le site actif → facteurs d'accélération 10⁶-10¹²", "L'enzyme augmente T", "L'enzyme augmente la concentration des réactifs", "L'enzyme change l'équilibre thermodynamique"], correct: 0, explanation: "Catalyse enzymatique : k_cat/K_M peut atteindre la limite de diffusion (~10⁸-10⁹ M⁻¹·s⁻¹). ΔG‡ abaissé par complémentarité de forme et liaisons dans l'état de transition." },
          { type: "mcq", visual: "⚗️", question: "La photochimie (photosynthèse) : la phase claire utilise la lumière pour :", answers: ["Produire ATP et NADPH par photophosphorylation (chaîne de transfert d'électrons chloroplastique)", "Fixer le CO₂ directement", "Synthétiser le glucose directement", "Décomposer O₂"], correct: 0, explanation: "Phase claire : absorption de photons par les chlorophylles → transfert d'e⁻ → ΔpH → ATP synthase → ATP + NADPH. Utilisés dans le cycle de Calvin pour fixer CO₂." },
          { type: "input", visual: "⚗️", question: "La formule brute de l'acétate d'éthyle (ester de l'acide acétique et de l'éthanol) est CH₃COO___ (compléter la partie alcool, 3 caractères) :", correct: "C₂H₅", explanation: "Acétate d'éthyle = CH₃COOC₂H₅. L'éthanol C₂H₅OH perd son H pour former la liaison ester." }
        ],
        [
          { type: "mcq", visual: "⚗️", question: "L'orbite moléculaire frontière (FMO) explique la réactivité en chimie organique par :", answers: ["Interaction HOMO du nucléophile avec LUMO de l'électrophile → abaissement d'énergie → réactivité", "Interactions électrostatiques seules", "Effets stériques uniquement", "Masses molaires des réactifs"], correct: 0, explanation: "Théorie FMO (Fukui, Nobel 1981) : la réactivité est contrôlée par l'interaction HOMO-LUMO. S'applique à SEAr, SN2, Diels-Alder, etc." },
          { type: "mcq", visual: "⚗️", question: "La biocatalyse (enzymes en synthèse industrielle) offre l'avantage de :", answers: ["Haute stéréosélectivité, conditions douces (T ambiante, H₂O), renouvelable → chimie verte", "Conditions sévères mais haut rendement", "Produits exclusivement énantiopurs à coût nul", "Aucun avantage sur la catalyse chimique"], correct: 0, explanation: "Biocatalyse (lipases, cétostéréoïsomérases…) : stéréosélective, verte, conditions douces. Industrie pharmaceutique, agroalimentaire." },
          { type: "mcq", visual: "⚗️", question: "Le principe d'économie d'atomes (Trost, 1991) définit l'efficacité d'une synthèse comme :", answers: ["(Masse molaire produit / Σ masses molaires réactifs) × 100% : maximiser l'incorporation des atomes dans le produit", "Rendement × sélectivité", "Vitesse de réaction × T", "Nombre d'étapes / rendement global"], correct: 0, explanation: "Atome économie = M_produit/ΣM_réactifs × 100%. Addition = 100% (tous les atomes dans le produit). Substitution < 100% (sous-produits)." }
        ]
      ]
    }

  ]
};
