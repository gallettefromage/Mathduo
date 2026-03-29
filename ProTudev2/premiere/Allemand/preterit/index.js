// Chapitre: Le Passé en Allemand (Präteritum & Perfekt)
// A1/A2 > Grammaire allemande
// 4 notions (1. Verbes faibles, 2. Verbes forts, 3. Verbes mixtes & auxiliaires, 4. Valeur et emploi du prétérit)

export default {
  id: "passe-allemand-enrichi",
  title: "Le Passé en Allemand",
  description: "Maîtriser le Präteritum (imparfait) et le Participe II (Perfekt) : verbes faibles, forts, mixtes et emplois.",
  icon: "📜",
  xpMax: 400,
  notions: [
    // ─────────────────────────────────────────────────────────────────
    // NOTION 0 — Reconnaître un verbe faible / fort (à l'infinitif)
    // ─────────────────────────────────────────────────────────────────
    {
      id: "reconnaitre-infinitif",
      label: "Reconnaître faible / fort (infinitif)",
      icon: "🔎",
      lesson: {
        formula: "Faible = -ieren, préfixe inséparable, verbe nouveau | Fort = voyelle changeante, verbes très courants",
        text: "Il est souvent possible de deviner si un verbe est faible ou fort rien qu'en regardant son infinitif. Certaines terminaisons, préfixes ou schémas de voyelles sont des indicateurs fiables. Cette notion vous donne les clés pour anticiper le comportement du verbe au passé."
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Verbes faibles : signes distinctifs à l'infinitif",
          text: "Un verbe faible (régulier) conserve toujours la même voyelle dans le radical. Voici les indices qui indiquent presque toujours un verbe faible :<br><br><strong>1. Terminaison -ieren</strong><br>Tous les verbes en -ieren sont faibles : studieren, probieren, marschieren, fotografieren, diskutieren.<br><br><strong>2. Verbes à préfixe inséparable (be-, ge-, er-, ver-, zer-, ent-, emp-)</strong><br>Sauf quelques exceptions (ex: verlieren, gewinnen), ces préfixes donnent souvent des verbes faibles : besuchen, erklären, verbessern, entschuldigen.<br><br><strong>3. Verbes récents ou d'origine étrangère</strong><br>Les emprunts récents (computern, chatten, surfen) sont toujours faibles."
        },
        {
          type: "definition",
          title: "📌 Verbes forts : signes distinctifs à l'infinitif",
          text: "Les verbes forts changent de voyelle au passé. À l'infinitif, ils présentent souvent des motifs de voyelles reconnaissables.<br><br><strong>1. Verbes très courants (à mémoriser)</strong><br>La plupart des verbes forts sont des verbes de base : gehen, fahren, sehen, lesen, sprechen, helfen, essen, schlafen, laufen, etc.<br><br><strong>2. Indices de voyelles</strong><br>• Voyelle **ei** (rester, écrire) → souvent fort (bleiben, schreiben, reiten).<br>• Voyelle **ie** (tirer, mentir) → souvent fort (ziehen, liegen, fliegen).<br>• Voyelle **i** (chanter, boire) → souvent fort (singen, trinken, finden).<br>• Voyelle **a** + consonne simple (porter, aller) → parfois fort (fahren, tragen, graben).<br>• Voyelle **e** suivie de plusieurs consonnes (aider, parler) → souvent fort (helfen, sprechen, werfen).<br><br><strong>⚠️ Attention :</strong> Ces indices ne sont pas des règles absolues ; il existe des verbes faibles avec les mêmes voyelles (ex : machen a, fragen a)."
        },
        {
          type: "formula",
          title: "🔑 Groupes de forts courants (à connaître par cœur)",
          formula: "┌─────────────────────────────────────────────────────────────┐\n│  SÉRIE          │  EXEMPLES (infinitifs)                         │\n├─────────────────────────────────────────────────────────────────┤\n│  ei → ie → ie   │  bleiben, schreiben, reiten, steigen          │\n│  i  → a  → u    │  singen, trinken, finden, springen            │\n│  e  → a  → o    │  helfen, werfen, sterben, brechen             │\n│  e  → a  → e    │  nehmen, geben, treffen, essen, lesen         │\n│  a  → u  → a    │  fahren, tragen, schlagen, waschen            │\n│  a  → ie → a    │  schlafen, blasen, lassen, braten              │\n└─────────────────────────────────────────────────────────────────┘",
          text: "Apprenez ces séries par cœur. Si un infinitif ressemble à l'un de ces exemples, il y a de fortes chances qu'il soit fort."
        },
        {
          type: "example",
          title: "📜 Exemples : reconnaître à l'infinitif",
          text: "<strong>Faibles évidents :</strong><br>• studieren, probieren, telefonieren → -ieren → faible<br>• besuchen, erklären, verbessern → préfixe inséparable → faible<br>• chatten, googeln, surfen → verbe nouveau → faible<br><br><strong>Fort probables :</strong><br>• fahren (a) → série a→u→a → fort<br>• sehen (e) → série e→a→e → fort<br>• singen (i) → série i→a→u → fort<br>• schreiben (ei) → série ei→ie→ie → fort<br><br><strong>Cas ambigus :</strong><br>• machen (a) → a, mais c'est un faible (machte, gemacht)<br>• fragen (a) → a, mais c'est un faible (fragte, gefragt)<br>• tanzen (a) → a, mais c'est un faible (tanzte, getanzt)<br>→ Seul l'apprentissage des listes ou la vérification dans un dictionnaire lèvent le doute."
        },
        {
          type: "technique",
          title: "🛠️ Astuces pour mémoriser",
          text: "• <strong>Mémorisez les forts les plus fréquents :</strong> une trentaine de verbes forts couvrent 80% des usages. Apprenez-les par cœur comme une liste.<br>• <strong>Les verbes en -ieren sont toujours faibles :</strong> c'est la règle la plus fiable.<br>• <strong>Les verbes avec préfixe inséparable (be-, er-, ver-…) sont très souvent faibles :</strong> vérifiez seulement les exceptions comme verlieren, gewinnen.<br>• <strong>Les verbes de mouvement (fahren, gehen, laufen, fliegen) sont souvent forts.</strong><br>• <strong>Quand vous doutez :</strong> consultez un dictionnaire. L'entrée indique la conjugaison (ex: fahren (fährt, fuhr, gefahren) → fort)."
        },
        {
          type: "warning",
          title: "⚠️ Pièges et exceptions",
          text: "• <strong>Certains verbes forts ont des formes faibles alternatives :</strong> hängen (hing / hängte), schaffen (schuf / schaffte). Seul le sens ou le contexte indique la forme.<br>• <strong>Des verbes faibles peuvent ressembler à des forts :</strong> machen, fragen, kaufen, antworten ont la voyelle 'a' mais sont faibles.<br>• <strong>Des verbes forts ont un participe en -t :</strong> ce sont les verbes mixtes (denken, bringen). Leur infinitif ne permet pas toujours de les distinguer d'un faible (sauf mémorisation).<br>• <strong>Les verbes modaux (können, müssen, etc.) :</strong> à l'infinitif, ils ressemblent à des forts, mais leur conjugaison est particulière. Ils se comportent comme des forts (changement de voyelle) mais avec des particularités."
        }
      ],
      levels: [
        // Level 1 — Évidence : -ieren, préfixes inséparables, forts évidents
        [
          { type: "mcq", visual: "🔎", question: "Le verbe 'studieren' (étudier) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 0, explanation: "Tous les verbes en -ieren sont faibles. Participe : studiert." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'besuchen' (visiter) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 0, explanation: "Verbe avec préfixe inséparable be- → généralement faible (besuchte, besucht)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'fahren' (aller, conduire) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "fahren est fort (fuhr, gefahren). Il appartient à la série a → u → a." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'gehen' (aller) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "gehen est fort (ging, gegangen). C'est un verbe très courant." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'sagen' (dire) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 0, explanation: "sagen est faible (sagte, gesagt). Aucune indication contraire." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'fotografieren' (photographier) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 0, explanation: "Terminaison -ieren → faible. Participe : fotografiert." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'sehen' (voir) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "sehen est fort (sah, gesehen). Série e → a → e." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'machen' (faire) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 0, explanation: "machen est faible (machte, gemacht). Malgré la voyelle a, c'est un faible." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'singen' (chanter) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "singen est fort (sang, gesungen). Série i → a → u." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'verlieren' (perdre) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "verlieren est une exception : préfixe ver- mais fort (verlor, verloren)." }
        ],
        // Level 2 — Autres indices de voyelles
        [
          { type: "mcq", visual: "🔎", question: "Le verbe 'schreiben' (écrire) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "schreiben (ei) est fort (schrieb, geschrieben). Série ei → ie → ie." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'bleiben' (rester) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "bleiben (ei) est fort (blieb, geblieben)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'reiten' (aller à cheval) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "reiten (ei) est fort (ritt, geritten)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'helfen' (aider) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "helfen (e) est fort (half, geholfen). Série e → a → o." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'sprechen' (parler) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "sprechen (e) est fort (sprach, gesprochen)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'essen' (manger) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "essen (e) est fort (aß, gegessen)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'nehmen' (prendre) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "nehmen est fort (nahm, genommen)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'trinken' (boire) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "trinken (i) est fort (trank, getrunken)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'springen' (sauter) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "springen (i) est fort (sprang, gesprungen)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'laufen' (courir) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "laufen (au) est fort (lief, gelaufen)." }
        ],
        // Level 3 — Mélange de faibles ambigus et forts
        [
          { type: "mcq", visual: "🔎", question: "Le verbe 'fragen' (demander) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 0, explanation: "fragen est faible (fragte, gefragt). Malgré la voyelle a, il est régulier." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'tanzen' (danser) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 0, explanation: "tanzen est faible (tanzte, getanzt)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'arbeiten' (travailler) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 0, explanation: "arbeiten est faible (arbeitete, gearbeitet). La terminaison -t n'affecte pas la force." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'graben' (creuser) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "graben est fort (grub, gegraben). Série a → u → a." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'waschen' (laver) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "waschen est fort (wusch, gewaschen)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'lassen' (laisser) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "lassen est fort (ließ, gelassen)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'erklären' (expliquer) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 0, explanation: "erklären (préfixe er-) est faible (erklärte, erklärt)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'gewinnen' (gagner) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "gewinnen est fort (gewann, gewonnen). Exception malgré le préfixe ge-." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'entschuldigen' (excuser) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 0, explanation: "entschuldigen (ent-) est faible (entschuldigte, entschuldigt)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'vergessen' (oublier) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "vergessen est fort (vergass, vergessen). Exception malgré ver-." }
        ],
        // Level 4 — Verbes mixtes et modaux à l'infinitif
        [
          { type: "mcq", visual: "🔎", question: "Le verbe 'denken' (penser) est-il faible ou fort ?", answers: ["Faible", "Fort", "Mixte"], correct: 2, explanation: "denken est mixte (dachte, gedacht) : changement de voyelle mais participe en -t." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'bringen' (apporter) est-il faible ou fort ?", answers: ["Faible", "Fort", "Mixte"], correct: 2, explanation: "bringen est mixte (brachte, gebracht)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'kennen' (connaître) est-il faible ou fort ?", answers: ["Faible", "Fort", "Mixte"], correct: 2, explanation: "kennen est mixte (kannte, gekannt)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'nennen' (nommer) est-il faible ou fort ?", answers: ["Faible", "Fort", "Mixte"], correct: 2, explanation: "nennen est mixte (nannte, genannt)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'wissen' (savoir) est-il faible ou fort ?", answers: ["Faible", "Fort", "Mixte"], correct: 2, explanation: "wissen est mixte (wusste, gewusst)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'können' (pouvoir) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "können est un verbe modal, considéré comme fort (konnte, gekonnt)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'müssen' (devoir) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "müssen est fort (musste, gemusst)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'wollen' (vouloir) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "wollen est fort (wollte, gewollt)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'sollen' (devoir) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "sollen est fort (sollte, gesollt)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'dürfen' (avoir le droit) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "dürfen est fort (durfte, gedurft)." }
        ],
        // Level 5 — Mélange plus complexe
        [
          { type: "mcq", visual: "🔎", question: "Le verbe 'schaffen' (créer / réussir) est-il faible ou fort ?", answers: ["Faible", "Fort", "Les deux selon le sens"], correct: 2, explanation: "schaffen a deux formes : 'schaffte, geschafft' (faible) pour 'accomplir' ; 'schuf, geschaffen' (fort) pour 'créer'." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'hängen' (pendre) est-il faible ou fort ?", answers: ["Faible", "Fort", "Les deux"], correct: 2, explanation: "hängen a deux formes : 'hängte, gehängt' (faible) pour 'accrocher' ; 'hing, gehangen' (fort) pour 'être suspendu'." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'backen' (cuire au four) est-il faible ou fort ?", answers: ["Faible", "Fort", "Les deux"], correct: 1, explanation: "backen est généralement fort (buk, gebacken) ; parfois faible (backte) en langage courant." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'senden' (envoyer) est-il faible ou fort ?", answers: ["Faible", "Fort", "Mixte"], correct: 2, explanation: "senden est mixte (sandte, gesandt) mais a aussi des formes faibles (sendete, gesendet)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'wenden' (tourner) est-il faible ou fort ?", answers: ["Faible", "Fort", "Mixte"], correct: 2, explanation: "wenden est mixte (wandte, gewandt) mais aussi faible (wendete, gewendet)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'stoßen' (pousser) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "stoßen est fort (stieß, gestoßen)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'fliegen' (voler) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "fliegen (ie) est fort (flog, geflogen)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'ziehen' (tirer) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "ziehen est fort (zog, gezogen)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'rufen' (appeler) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "rufen est fort (rief, gerufen)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'heißen' (s'appeler) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "heißen est fort (hieß, geheißen)." }
        ],
        // Level 6 — Synthèse et exceptions
        [
          { type: "mcq", visual: "🔎", question: "Le verbe 'reisen' (voyager) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 0, explanation: "reisen est faible (reiste, gereist). Malgré le sens de mouvement, il est régulier." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'schneiden' (couper) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "schneiden (ei) est fort (schnitt, geschnitten)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'leiden' (souffrir) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "leiden (ei) est fort (litt, gelitten)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'schwimmen' (nager) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "schwimmen est fort (schwamm, geschwommen)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'lügen' (mentir) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "lügen est fort (log, gelogen)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'sitzen' (être assis) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "sitzen est fort (saß, gesessen)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'liegen' (être couché) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 1, explanation: "liegen est fort (lag, gelegen)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'beten' (prier) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 0, explanation: "beten est faible (betete, gebetet)." },
          { type: "mcq", visual: "🔎", question: "Le verbe 'mieten' (louer) est-il faible ou fort ?", answers: ["Faible", "Fort"], correct: 0, explanation: "mieten est faible (mietete, gemietet)." },
          { type: "mcq", visual: "🔎", question: "Parmi ces verbes, lequel est fort ?", answers: ["laufen", "kaufen", "haufen", "raufen"], correct: 0, explanation: "laufen (courir) est fort (lief, gelaufen). Les autres sont faibles." }
        ]
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // NOTION 1 — Les verbes faibles (réguliers)
    // ─────────────────────────────────────────────────────────────────
    {
      id: "verbes-faibles",
      label: "Verbes Faibles (Réguliers)",
      icon: "⚙️",
      lesson: {
        formula: "Präteritum : stem + -te + terminaisons | Participe II : ge- + stem + -t",
        text: "Les verbes faibles (ou réguliers) suivent une règle simple et prévisible. Ils forment leur prétérit en ajoutant un **-te-** entre le radical et la terminaison personnelle. Leur participe passé (Partizip II) se forme avec le préfixe **ge-** et la terminaison **-t**. C'est la base pour maîtriser le passé en allemand."
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 La conjugaison au Präteritum (verbes faibles)",
          text: "Au prétérit, on intercale **-te-** entre le radical et la terminaison personnelle.<br><br><strong>Exemple avec 'sagen' (dire) :</strong><br>• ich sagte (je disais/dis)<br>• du sagtest<br>• er/sie/es sagte<br>• wir sagten<br>• ihr sagtet<br>• sie/Sie sagten<br><br><strong>Terminaisons :</strong> -e, -st, -e, -en, -t, -en.<br>Les 1ère et 3ème personnes du singulier sont identiques."
        },
        {
          type: "definition",
          title: "📌 La formation du Participe II (verbes faibles)",
          text: "Le participe passé (Partizip II) se place généralement en fin de phrase et s'utilise avec les auxiliaires **haben** ou **sein** pour former le <strong>Perfekt</strong> (passé composé).<br><br><strong>Règle générale :</strong> <strong>ge- + radical + -t</strong><br>• machen (faire) → gemacht<br>• fragen (demander) → gefragt<br>• lernen (apprendre) → gelernt<br><br><strong>⚠️ Cas particulier :</strong> Les verbes terminés par **-ieren** n'ont pas de **ge-** : studieren → studiert."
        },
        {
          type: "formula",
          title: "🔑 Tableau récapitulatif : Verbe faible 'spielen' (jouer)",
          formula: "┌─────────────────┬────────────────────┬─────────────────────┐\n│     Personne     │    Präteritum      │    Participe II     │\n├─────────────────┼────────────────────┼─────────────────────┤\n│ ich             │ spielte            │                     │\n│ du              │ spieltest          │                     │\n│ er/sie/es       │ spielte            │     gespielt        │\n│ wir             │ spielten           │                     │\n│ ihr             │ spieltet           │                     │\n│ sie/Sie         │ spielten           │                     │\n└─────────────────┴────────────────────┴─────────────────────┘",
          text: "Le radical 'spiel-' reste inchangé. On ajoute simplement 'te' + terminaison."
        },
        {
          type: "technique",
          title: "🛠️ Règles détaillées de formation",
          text: "<strong>1. Ajout du -e- de liaison :</strong><br>Les verbes dont le radical se termine par **-t, -d, -fn, -gn, -chn, -dm** ajoutent un **-e-** devant la terminaison du prétérit et du participe pour faciliter la prononciation.<br>• arbeiten (travailler) → arbeitete, gearbeitet<br>• rechnen (calculer) → rechnete, gerechnet<br>• widmen (dédier) → widmete, gewidmet<br><br><strong>2. Verbes séparables :</strong> Le 'ge-' se place entre le préfixe séparable et le radical.<br>• aufmachen (ouvrir) → machte auf → aufgemacht<br>• einkaufen (acheter) → kaufte ein → eingekauft<br><br><strong>3. Verbes inséparables (be-, ge-, er-, ver-, zer-, ent-, emp-) :</strong> Pas de 'ge-' au participe.<br>• besuchen → besuchte → besucht<br>• verstehen → verstand (fort) mais règle générale : verstanden"
        },
        {
          type: "example",
          title: "📜 Exemples de verbes faibles courants",
          text: "<strong>Infinitif - Präteritum - Participe II :</strong><br><br>• <strong>sagen</strong> (dire) → sagte → gesagt<br>• <strong>machen</strong> (faire) → machte → gemacht<br>• <strong>hören</strong> (écouter) → hörte → gehört<br>• <strong>lachen</strong> (rire) → lachte → gelacht<br>• <strong>tanzen</strong> (danser) → tanzte → getanzt<br>• <strong>reisen</strong> (voyager) → reiste → gereist<br>• <strong>wohnen</strong> (habiter) → wohnte → gewohnt<br>• <strong>arbeiten</strong> (travailler) → arbeitete → gearbeitet<br>• <strong>öffnen</strong> (ouvrir) → öffnete → geöffnet<br>• <strong>zeichnen</strong> (dessiner) → zeichnete → gezeichnet"
        },
        {
          type: "warning",
          title: "⚠️ Pièges et exceptions",
          text: "• <strong>Verbes en -ieren</strong> : Pas de 'ge-' au participe.<br>  Ex: studieren → studierte → **studiert**.<br><br>• <strong>Verbes inséparables</strong> : Pas de 'ge-'.<br>  Ex: besuchen → besuchte → **besucht**.<br><br>• <strong>Verbes séparables</strong> : 'ge' entre le préfixe et le radical.<br>  Ex: aufmachen → machte auf → **aufgemacht**.<br><br>• <strong>Attention à la prononciation</strong> : 'arbeitete' a trois 'e' mais se prononce distinctement."
        }
      ],
      levels: [
        // Level 1
        [
          { type: "mcq", visual: "⚙️", question: "Quelle est la terminaison du prétérit pour 'er' avec un verbe faible ?", answers: ["-te", "-t", "-e", "-st"], correct: 0, explanation: "La 1ère et 3ème personne du singulier au prétérit des verbes faibles prennent la terminaison '-te'. Ex : er spielte." },
          { type: "mcq", visual: "⚙️", question: "Comment se forme le participe passé (Partizip II) d'un verbe faible régulier ?", answers: ["ge- + radical + -t", "ge- + radical + -en", "radical + -t", "ge- + radical"], correct: 0, explanation: "La règle générale : ge- + radical + -t. Ex : machen -> gemacht." },
          { type: "mcq", visual: "⚙️", question: "Quel est le prétérit de 'sagen' (dire) pour 'du' ?", answers: ["sagtest", "sagte", "sagten", "gesagt"], correct: 0, explanation: "du + radical + test = sagtest." },
          { type: "mcq", visual: "⚙️", question: "Quel est le participe passé de 'lernen' (apprendre) ?", answers: ["gelernt", "gelernen", "lernt", "gelearnt"], correct: 0, explanation: "lernen -> ge + lern + t = gelernt." },
          { type: "mcq", visual: "⚙️", question: "Pourquoi 'arbeiten' (travailler) fait-il 'arbeitete' au prétérit ?", answers: ["On ajoute un -e- de liaison car le radical se termine par -t", "C'est un verbe fort", "C'est une exception sans règle", "On double le t"], correct: 0, explanation: "Les verbes dont le radical se termine par -t, -d, -fn, etc. ajoutent un -e- de liaison pour la prononciation." },
          { type: "mcq", visual: "⚙️", question: "Quelle est la particularité du participe passé de 'studieren' ?", answers: ["Il n'a pas de 'ge-' : studiert", "Il a un 'ge-' : gestudiert", "Il change de voyelle", "Il se termine par -en"], correct: 0, explanation: "Les verbes en -ieren forment leur participe passé sans le préfixe ge-." },
          { type: "mcq", visual: "⚙️", question: "Quelle est la forme correcte du prétérit pour 'wir' avec 'wohnen' (habiter) ?", answers: ["wohnten", "wohnte", "wohnen", "gewohnt"], correct: 0, explanation: "wir + radical + ten = wohnten." },
          { type: "mcq", visual: "⚙️", question: "Quelle est la forme correcte du prétérit pour 'ich' avec 'machen' ?", answers: ["machte", "machete", "macht", "gemacht"], correct: 0, explanation: "ich + mach + te = machte." },
          { type: "mcq", visual: "⚙️", question: "Comment forme-t-on le prétérit d'un verbe faible ?", answers: ["Radical + te + terminaison personnelle", "Radical + terminaison personnelle", "Radical + t + terminaison", "ge + radical + t"], correct: 0, explanation: "On insère un -te- entre le radical et la terminaison. Ex : mach-te-st." },
          { type: "input", visual: "⚙️", question: "Donnez le participe passé de 'fragen' (demander) :", correct: "gefragt", explanation: "fragen -> ge + frag + t = gefragt." }
        ],
        // Level 2
        [
          { type: "mcq", visual: "⚙️", question: "Quelle est la règle pour les verbes en -ieren au participe passé ?", answers: ["Pas de 'ge-'", "Ajout de 'ge-'", "Ajout de 'be-'", "Terminaison -en"], correct: 0, explanation: "Les verbes comme studieren, probieren, marschieren n'ont pas de ge- au participe passé." },
          { type: "mcq", visual: "⚙️", question: "Quelle est la forme correcte du prétérit pour 'ihr' avec 'reisen' ?", answers: ["reistet", "reisten", "reiste", "reisst"], correct: 0, explanation: "ihr + radical + tet = reistet." },
          { type: "mcq", visual: "⚙️", question: "Quel est le participe passé de 'hören' (écouter) ?", answers: ["gehört", "gehören", "hört", "gehörtet"], correct: 0, explanation: "hören -> ge + hör + t = gehört." },
          { type: "mcq", visual: "⚙️", question: "Le prétérit de 'sagen' à la 3ème personne du pluriel (sie) est :", answers: ["sagten", "sagte", "sagtest", "sagt"], correct: 0, explanation: "sie (pluriel) + radical + ten = sagten." },
          { type: "mcq", visual: "⚙️", question: "Comment appelle-t-on un verbe dont le participe passé se termine par '-t' ?", answers: ["Verbe faible", "Verbe fort", "Verbe mixte", "Verbe modal"], correct: 0, explanation: "Les verbes faibles (réguliers) ont un participe en -t. Les verbes forts l'ont en -en." },
          { type: "mcq", visual: "⚙️", question: "Pourquoi 'rechnen' (calculer) fait-il 'rechnete' au prétérit ?", answers: ["À cause du 'ch' (son guttural)", "C'est un verbe fort", "C'est un verbe en -ieren", "C'est un verbe irrégulier"], correct: 0, explanation: "Les verbes en -chn, -gn, etc. ajoutent un -e- de liaison." },
          { type: "input", visual: "⚙️", question: "Prétérit de 'tanzen' (danser) pour 'ich' :", correct: "tanzte", explanation: "ich + tanz + te = tanzte." },
          { type: "mcq", visual: "⚙️", question: "Quelle forme a le participe passé d'un verbe inséparable comme 'besuchen' ?", answers: ["besucht", "gebessucht", "besuch", "gebesucht"], correct: 0, explanation: "Les verbes inséparables (be-, ge-, ver-, etc.) n'ont pas de 'ge-' au participe." },
          { type: "mcq", visual: "⚙️", question: "Identifiez le verbe faible :", answers: ["spielen", "gehen", "fahren", "lesen"], correct: 0, explanation: "spielen est faible (spielte, gespielt). Les autres sont forts (changement de voyelle)." },
          { type: "mcq", visual: "⚙️", question: "Quel est le prétérit de 'machen' pour 'er' ?", answers: ["machte", "macht", "machete", "gemacht"], correct: 0, explanation: "er + mach + te = machte." }
        ],
        // Level 3
        [
          { type: "mcq", visual: "⚙️", question: "Complétez : 'Ich ___ (lernen) Deutsch.'", answers: ["lernte", "lerne", "gelernt", "lernten"], correct: 0, explanation: "Phrase au prétérit : ich lernte." },
          { type: "mcq", visual: "⚙️", question: "Complétez : 'Wir haben viel ___ (tanzen).'", answers: ["getanzt", "tanzten", "tanzt", "getanzen"], correct: 0, explanation: "Au Perfekt avec haben : Participe II = getanzt." },
          { type: "input", visual: "⚙️", question: "Participe passé de 'fragen' (demander) :", correct: "gefragt", explanation: "ge + frag + t = gefragt." },
          { type: "mcq", visual: "⚙️", question: "Quelle est la forme correcte du prétérit pour 'du' avec 'sagen' ?", answers: ["sagtest", "sagte", "sagt", "gesagt"], correct: 0, explanation: "du + sag + test = sagtest." },
          { type: "mcq", visual: "⚙️", question: "Quelle est la particularité de 'arbeiten' au prétérit ?", answers: ["arbeitete", "arbeit", "arbeite", "gearbeitet"], correct: 0, explanation: "À cause du -t final, on ajoute -e- : arbeit-ete." },
          { type: "mcq", visual: "⚙️", question: "Comment se forme le participe passé d'un verbe séparable comme 'aufmachen' ?", answers: ["aufgemacht", "gemachtauf", "geaufmacht", "aufmacht"], correct: 0, explanation: "Le 'ge' se place entre le préfixe séparable et le radical : auf + ge + mach + t." },
          { type: "mcq", visual: "⚙️", question: "Quel est le prétérit de 'öffnen' (ouvrir) pour 'sie' (singulier) ?", answers: ["öffnete", "öffnet", "öffnen", "geöffnet"], correct: 0, explanation: "öffnen -> öffnete (avec -e- de liaison)." },
          { type: "input", visual: "⚙️", question: "Participe passé de 'zeichnen' (dessiner) :", correct: "gezeichnet", explanation: "zeichnen -> gezeichnet (avec -e- de liaison)." },
          { type: "mcq", visual: "⚙️", question: "Quel auxiliaire utilise-t-on avec 'reisen' au Perfekt ?", answers: ["sein", "haben", "werden", "tun"], correct: 0, explanation: "reisen (voyager) est un verbe de mouvement, donc sein." },
          { type: "mcq", visual: "⚙️", question: "Lequel de ces verbes est faible ?", answers: ["lachen", "helfen", "geben", "sehen"], correct: 0, explanation: "lachen (rire) est faible (lachte, gelacht). Les autres sont forts." }
        ],
        // Level 4
        [
          { type: "mcq", visual: "⚙️", question: "Identifiez le verbe faible parmi ceux-ci :", answers: ["reden", "geben", "sehen", "trinken"], correct: 0, explanation: "reden (parler) est faible : redete, geredet." },
          { type: "input", visual: "⚙️", question: "Prétérit de 'spielen' pour 'ihr' :", correct: "spieltet", explanation: "ihr + spiel + tet = spieltet." },
          { type: "mcq", visual: "⚙️", question: "Lequel de ces verbes ne prend pas de 'ge-' au participe ?", answers: ["probieren", "machen", "fragen", "lernen"], correct: 0, explanation: "Les verbes en -ieren (probieren) n'ont pas de 'ge-'." },
          { type: "mcq", visual: "⚙️", question: "Complétez : 'Er ___ (arbeiten) den ganzen Tag.'", answers: ["arbeitete", "arbeit", "arbeite", "gearbeitet"], correct: 0, explanation: "Prétérit : er arbeitete." },
          { type: "mcq", visual: "⚙️", question: "Quel est le participe passé de 'versuchen' (essayer) ?", answers: ["versucht", "geversucht", "versuchte", "versucht"], correct: 0, explanation: "ver- est inséparable, donc pas de ge- : versucht." },
          { type: "input", visual: "⚙️", question: "Prétérit de 'kochen' (cuisiner) pour 'wir' :", correct: "kochten", explanation: "wir + koch + ten = kochten." },
          { type: "mcq", visual: "⚙️", question: "Quel est le participe passé de 'einkaufen' (faire les courses) ?", answers: ["eingekauft", "einkauft", "gekauft ein", "eingekaufte"], correct: 0, explanation: "Verbe séparable : ein + ge + kauf + t = eingekauft." },
          { type: "mcq", visual: "⚙️", question: "Quelle est la règle pour les verbes en -t, -d au prétérit ?", answers: ["Ajout d'un -e- de liaison", "Aucun changement", "Changement de voyelle", "Suppression du -t"], correct: 0, explanation: "Pour faciliter la prononciation, on ajoute -e- : arbeitete, redete." },
          { type: "mcq", visual: "⚙️", question: "Quel est le prétérit de 'regnen' (pleuvoir) pour 'es' ?", answers: ["regnete", "regnt", "geregnet", "regnen"], correct: 0, explanation: "regnen -> regnete (avec -e- de liaison)." },
          { type: "mcq", visual: "⚙️", question: "Quel est le participe passé de 'trocknen' (sécher) ?", answers: ["getrocknet", "trocknete", "trocknet", "getrockent"], correct: 0, explanation: "trocknen -> getrocknet (avec -e- de liaison)." }
        ],
        // Level 5
        [
          { type: "mcq", visual: "⚙️", question: "Traduisez 'Il habitait à Berlin' (wohnen).", answers: ["Er wohnte in Berlin", "Er wohnt in Berlin", "Er hat in Berlin gewohnt", "Er wohnte in Berlin"], correct: 0, explanation: "Prétérit de wohnen = wohnte." },
          { type: "input", visual: "⚙️", question: "Participe passé de 'studieren' :", correct: "studiert", explanation: "Les verbes en -ieren n'ont pas de ge-." },
          { type: "mcq", visual: "⚙️", question: "Complétez : 'Wir ___ (sagen) die Wahrheit.'", answers: ["sagten", "sagte", "sagt", "gesagt"], correct: 0, explanation: "Prétérit : wir sagten." },
          { type: "mcq", visual: "⚙️", question: "Quel est le prétérit de 'lächeln' (sourire) pour 'er' ?", answers: ["lächelte", "lacht", "lächel", "gelächelt"], correct: 0, explanation: "lächeln -> lächelte (avec -e- de liaison)." },
          { type: "input", visual: "⚙️", question: "Participe passé de 'verreisen' (partir en voyage) :", correct: "verreist", explanation: "ver- inséparable, pas de ge-." },
          { type: "mcq", visual: "⚙️", question: "Quel est le prétérit de 'antworten' (répondre) pour 'ich' ?", answers: ["antwortete", "antwort", "antwortte", "geantwortet"], correct: 0, explanation: "antworten -> antwortete (avec -e- de liaison)." },
          { type: "mcq", visual: "⚙️", question: "Comment forme-t-on le participe passé de 'abholen' (aller chercher) ?", answers: ["abgeholt", "geholt ab", "abholte", "geabholt"], correct: 0, explanation: "abholen -> ab + ge + hol + t = abgeholt." },
          { type: "mcq", visual: "⚙️", question: "Quel auxiliaire utilise-t-on avec 'bleiben' au Perfekt ?", answers: ["sein", "haben", "werden", "tun"], correct: 0, explanation: "bleiben (rester) se conjugue avec sein : er ist geblieben." },
          { type: "input", visual: "⚙️", question: "Prétérit de 'atmen' (respirer) pour 'du' :", correct: "atmetest", explanation: "atmen -> atmetest (avec -e- de liaison)." },
          { type: "mcq", visual: "⚙️", question: "Lequel de ces verbes est faible ?", answers: ["schwimmen", "singen", "denken", "spielen"], correct: 3, explanation: "spielen est faible (spielte, gespielt). Schwimmen est fort, denken mixte." }
        ]
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // NOTION 2 — Les verbes forts (changement de voyelle)
    // ─────────────────────────────────────────────────────────────────
    {
      id: "verbes-forts",
      label: "Verbes Forts (Changement de voyelle)",
      icon: "⚡",
      lesson: {
        formula: "Präteritum : changement de voyelle (Ablaut) + terminaisons | Participe II : ge- + radical modifié + -en",
        text: "Les verbes forts (ou irréguliers) ne prennent PAS de -te- au prétérit. Leur radical change de voyelle (Ablaut). Leur participe passé se termine par **-en** et comporte souvent un changement de voyelle. Il existe plusieurs séries de changements (i-a-u, e-a-o, etc.)."
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Les séries d'Ablaut (changement de voyelle)",
          text: "Voici les principales séries de changements pour les verbes forts :<br><br><strong>1. i → a → u (i/a/u) :</strong><br>  singen (chanter) → sang → gesungen<br>  trinken (boire) → trank → getrunken<br>  finden (trouver) → fand → gefunden<br>  springen (sauter) → sprang → gesprungen<br><br><strong>2. e → a → o (e/a/o) :</strong><br>  helfen (aider) → half → geholfen<br>  werfen (jeter) → warf → geworfen<br>  sterben (mourir) → starb → gestorben<br>  sprechen (parler) → sprach → gesprochen<br><br><strong>3. e → a → e (e/a/e) :</strong><br>  nehmen (prendre) → nahm → genommen<br>  geben (donner) → gab → gegeben<br>  treffen (rencontrer) → traf → getroffen<br>  essen (manger) → aß → gegessen<br><br><strong>4. a → u → a (a/u/a) :</strong><br>  fahren (aller) → fuhr → gefahren<br>  tragen (porter) → trug → getragen<br>  schlafen (dormir) → schlief (exception) → geschlafen<br><br><strong>5. ei → ie → ie (ei/ie/ie) :</strong><br>  schreiben (écrire) → schrieb → geschrieben<br>  bleiben (rester) → blieb → geblieben<br>  steigen (monter) → stieg → gestiegen"
        },
        {
          type: "formula",
          title: "🔑 Liste des verbes forts les plus courants (A1-B1)",
          formula: "┌─────────────────┬────────────────────┬─────────────────────┐\n│   INFINITIF     │    PRÄTERITUM       │    PARTIZIP II      │\n├─────────────────┼────────────────────┼─────────────────────┤\n│ gehen (aller)   │ ging               │ gegangen            │\n│ fahren (aller)  │ fuhr               │ gefahren            │\n│ sehen (voir)    │ sah                │ gesehen             │\n│ lesen (lire)    │ las                │ gelesen             │\n│ sprechen (parler)│ sprach            │ gesprochen          │\n│ finden (trouver)│ fand               │ gefunden            │\n│ geben (donner)  │ gab                │ gegeben             │\n│ kommen (venir)  │ kam                │ gekommen            │\n│ nehmen (prendre)│ nahm               │ genommen            │\n│ trinken (boire) │ trank              │ getrunken           │\n│ singen (chanter)│ sang               │ gesungen            │\n│ helfen (aider)  │ half               │ geholfen            │\n│ essen (manger)  │ aß                 │ gegessen            │\n│ schlafen (dormir)│ schlief           │ geschlafen          │\n│ laufen (courir) │ lief               │ gelaufen            │\n│ fliegen (voler) │ flog               │ geflogen            │\n│ ziehen (tirer)  │ zog                │ gezogen             │\n└─────────────────┴────────────────────┴─────────────────────┘",
          text: "Ces verbes doivent être appris par cœur. Le prétérit des verbes forts n'a pas de -te-."
        },
        {
          type: "formula",
          title: "🔑 Liste des verbes forts vus en classe",
          formula: "┌─────────────────────┬────────────────────┬─────────────────────┬─────────────────────────┐\n│     INFINITIV       │    PRÄTERITUM      │    PARTIZIP II      │   REGEL (VOKALWECHSEL)  │\n├─────────────────────┼────────────────────┼─────────────────────┼─────────────────────────┤\n│ wissen              │ wusste             │ gewusst             │ i → u → u (mixte)       │\n│ befehlen            │ befahl             │ gefohlen            │ a → ie → a              │\n│ kommen              │ kam                │ gekommen            │ o → a → o               │\n│ ziehen              │ zog                │ gezogen             │ ie → o → o              │\n│ liegen              │ lag                │ gelegen             │ ie → a → e              │\n│ schlagen            │ schlug             │ geschlagen          │ a → u → a               │\n│ zerspringen         │ zersprang          │ zersprungen         │ i → a → u               │\n│ bekommen            │ bekam              │ bekommen            │ e → a → o (?)           │\n│ gehen               │ ging               │ gegangen            │ e → i → a               │\n│ nehmen              │ nahm               │ genommen            │ e → a → o               │\n│ sterben             │ starb              │ gestorben           │ e → a → o               │\n│ befehlen            │ befahl             │ befohlen            │ e → a → o               │\n│ lassen              │ ließ               │ gelassen            │ a → ie → a              │\n│ helfen              │ half               │ geholfen            │ e → a → o               │\n│ einschlafen         │ schlief ein        │ eingeschlafen       │ a → ie → a              │\n│ tragen              │ trug               │ getragen            │ a → u → a               │\n│ aufraffen*          │ raffte auf         │ aufgerafft          │ (schwach, kein Wandel)  │\n│ nachsehen           │ sah nach           │ nachgesehen         │ e → a → e               │\n│ sein                │ war                │ gewesen             │ (unregelmäßig)          │\n│ haben               │ hatte              │ gehabt              │ (unregelmäßig)          │\n│ können              │ konnte             │ gekonnt             │ ö → o → o               │\n│ müssen              │ musste             │ gemusst             │ ü → u → u               │\n│ dürfen              │ durfte             │ gedurft             │ ü → u → u               │\n│ sollen              │ sollte             │ gesollt             │ (kein Vokalwechsel)     │\n│ wollen              │ wollte             │ gewollt             │ o → o → o               │\n│ mögen               │ mochte             │ gemocht             │ ö → o → o               │\n└─────────────────────┴────────────────────┴─────────────────────┴─────────────────────────┘\n\n* aufraffen (sich aufraffen) = se ressaisir ; verbe faible régulier, pas de changement de voyelle.",
          text: "Ces verbes doivent être appris par cœur. Le prétérit des verbes forts n'a pas de -te-."
        },
        {
          type: "formula",
          title: "🔑 Liste des verbes forts de modalité",
          formula: "┌─────────────────────┬────────────────────┬─────────────────────┬─────────────────────────┐\n│     INFINITIV       │    PRÄTERITUM      │    PARTIZIP II      │   REGEL (VOKALWECHSEL)  │\n├─────────────────────┼────────────────────┼─────────────────────┼─────────────────────────┤\n│ können (pouvoir)    │ konnte             │ gekonnt             │ ö → o → o               │\n│ müssen (devoir)     │ musste             │ gemusst             │ ü → u → u               │\n│ dürfen (avoir droit)│ durfte             │ gedurft             │ ü → u → u               │\n│ sollen (devoir)     │ sollte             │ gesollt             │ (kein Vokalwechsel)     │\n│ wollen (vouloir)    │ wollte             │ gewollt             │ o → o → o               │\n│ mögen (aimer)       │ mochte             │ gemocht             │ ö → o → o               │\n└─────────────────────┴────────────────────┴─────────────────────┴─────────────────────────┘",
          text: "Ces verbes doivent être appris par cœur. Le prétérit des verbes forts n'a pas de -te-."
        },
        {
          type: "definition",
          title: "📌 La conjugaison au Präteritum (verbes forts)",
          text: "Le prétérit des verbes forts n'utilise pas le -te-. On ajoute directement les terminaisons personnelles au radical modifié.<br><br><strong>Exemple avec 'sehen' (voir) :</strong><br>• ich **sah** (pas de terminaison)<br>• du **sahst**<br>• er/sie/es **sah**<br>• wir **sahen**<br>• ihr **saht**<br>• sie/Sie **sahen**<br><br><strong>Remarque :</strong> Les terminaisons sont les mêmes que pour les verbes faibles, mais sans le -te-."
        },
        {
          type: "example",
          title: "📜 Exemples de phrases avec verbes forts",
          text: "<strong>Präteritum :</strong><br>• Ich <strong>ging</strong> gestern ins Kino. (Je suis allé au cinéma hier.)<br>• Er <strong>las</strong> das Buch. (Il lisait/lut le livre.)<br>• Wir <strong>sprachen</strong> Deutsch. (Nous parlions allemand.)<br>• Sie <strong>fuhren</strong> nach Berlin. (Ils allèrent à Berlin.)<br><br><strong>Perfekt :</strong><br>• Ich <strong>habe</strong> den Film <strong>gesehen</strong>. (J'ai vu le film.)<br>• Sie <strong>ist</strong> nach Berlin <strong>gefahren</strong>. (Elle est allée à Berlin.)<br>• Wir <strong>haben</strong> viel <strong>getrunken</strong>. (Nous avons beaucoup bu.)"
        },
        {
          type: "technique",
          title: "🛠️ Astuces de mémorisation",
          text: "• <strong>Par groupes de rimes :</strong> Classez les verbes par série d'Ablaut.<br>  Ex: bleiben, schreiben, steigen → blieb, schrieb, stieg → geblieben, geschrieben, gestiegen (ei → ie → ie).<br><br>• <strong>Les 3 formes :</strong> Apprenez l'infinitif, le prétérit et le participe II ensemble comme un seul bloc.<br><br>• <strong>Cartes mémoire :</strong> Une carte = un verbe avec ses 3 formes.<br><br>• <strong>Chansons et comptines :</strong> Il existe des chansons pour mémoriser les verbes forts (ex: \"Ich singe, ich sang, ich habe gesungen...\")."
        },
        {
          type: "warning",
          title: "⚠️ Pièges et exceptions",
          text: "• Les verbes forts ne prennent <strong>jamais</strong> de -te- au prétérit.<br>• Leur participe passé se termine par <strong>-en</strong> et non -t.<br>• Certains verbes forts modifient aussi la consonne (ex : sitzen → saß → gesessen).<br>• Les verbes <strong>sein</strong> (être) et <strong>haben</strong> (avoir) sont très irréguliers :<br>  sein : war, warst, war, waren, wart, waren | gewesen<br>  haben : hatte, hattest, hatte, hatten, hattet, hatten | gehabt<br>• Attention à 'schlafen' (dormir) : a → ie (schlief) au prétérit, mais participe 'geschlafen' (a)."
        }
      ],
      levels: [
        // Level 1
        [
          { type: "mcq", visual: "⚡", question: "Quel est le prétérit de 'gehen' (aller) ?", answers: ["ging", "gehte", "gang", "gegangen"], correct: 0, explanation: "gehen est fort : ging (Prät.), gegangen (Part. II)." },
          { type: "mcq", visual: "⚡", question: "Quelle est la terminaison du participe passé d'un verbe fort ?", answers: ["-en", "-t", "-ge", "-te"], correct: 0, explanation: "Les verbes forts ont un participe passé en -en." },
          { type: "mcq", visual: "⚡", question: "Quel est le participe passé de 'sprechen' (parler) ?", answers: ["gesprochen", "sprach", "gesprecht", "gespracht"], correct: 0, explanation: "sprechen → sprach (Prät.) → gesprochen (Part. II)." },
          { type: "mcq", visual: "⚡", question: "Quel est le prétérit de 'sehen' (voir) pour 'er' ?", answers: ["sah", "sehte", "sähe", "gesehen"], correct: 0, explanation: "er sah." },
          { type: "mcq", visual: "⚡", question: "Quel est le prétérit de 'essen' (manger) pour 'du' ?", answers: ["aßest", "aßt", "isst", "gegessen"], correct: 0, explanation: "du + aß + est = aßest." },
          { type: "mcq", visual: "⚡", question: "Quelle série d'Ablaut correspond à 'helfen' (aider) ?", answers: ["e - a - o", "i - a - u", "a - u - a", "ei - ie - ie"], correct: 0, explanation: "helfen → half → geholfen (e-a-o)." },
          { type: "mcq", visual: "⚡", question: "Quel est le participe passé de 'nehmen' (prendre) ?", answers: ["genommen", "nahm", "genommen", "genimmt"], correct: 0, explanation: "nehmen → nahm → genommen." },
          { type: "mcq", visual: "⚡", question: "Quel est le prétérit de 'lesen' (lire) pour 'wir' ?", answers: ["lasen", "las", "lesen", "lassen"], correct: 0, explanation: "wir + las + en = lasen." },
          { type: "mcq", visual: "⚡", question: "Identifiez le verbe fort :", answers: ["fahren", "sagen", "machen", "hören"], correct: 0, explanation: "fahren est fort (fuhr, gefahren). Les autres sont faibles." },
          { type: "input", visual: "⚡", question: "Prétérit de 'geben' (donner) pour 'ich' :", correct: "gab", explanation: "geben -> gab." }
        ],
        // Level 2
        [
          { type: "mcq", visual: "⚡", question: "Quelle est la forme correcte du prétérit pour 'ihr' avec 'sprechen' ?", answers: ["spracht", "sprecht", "sprachen", "gesprochen"], correct: 0, explanation: "ihr + sprach + t = spracht." },
          { type: "mcq", visual: "⚡", question: "Quel est le participe passé de 'finden' (trouver) ?", answers: ["gefunden", "fand", "gefundet", "finden"], correct: 0, explanation: "finden → fand → gefunden." },
          { type: "mcq", visual: "⚡", question: "Quel est le prétérit de 'fahren' (aller) pour 'sie' (pluriel) ?", answers: ["fuhren", "fuhr", "fahrt", "gefahren"], correct: 0, explanation: "sie (pluriel) + fuhr + en = fuhren." },
          { type: "mcq", visual: "⚡", question: "Quel est le participe passé de 'trinken' (boire) ?", answers: ["getrunken", "trank", "getrinkt", "getrunkt"], correct: 0, explanation: "trinken → trank → getrunken." },
          { type: "mcq", visual: "⚡", question: "Comment se conjugue 'schlafen' (dormir) au prétérit ?", answers: ["schlief", "schlafte", "schläfte", "geschlafen"], correct: 0, explanation: "schlafen (a->ie) : schlief." },
          { type: "input", visual: "⚡", question: "Prétérit de 'sehen' pour 'du' :", correct: "sahst", explanation: "du + sah + st = sahst." },
          { type: "mcq", visual: "⚡", question: "Quelle est la terminaison du prétérit pour 'wir' avec un verbe fort ?", answers: ["-en", "-ten", "-t", "-te"], correct: 0, explanation: "Les verbes forts prennent les mêmes terminaisons que les faibles, mais sans le -te-. wir = -en." },
          { type: "mcq", visual: "⚡", question: "Quel est le prétérit de 'singen' (chanter) pour 'er' ?", answers: ["sang", "singte", "sängt", "gesungen"], correct: 0, explanation: "singen (i-a-u) : sang." },
          { type: "mcq", visual: "⚡", question: "Lequel de ces verbes change de voyelle au prétérit ?", answers: ["kommen", "lernen", "spielen", "sagen"], correct: 0, explanation: "kommen (venir) : kam. Les autres sont faibles." },
          { type: "mcq", visual: "⚡", question: "Quel est le participe passé de 'gehen' ?", answers: ["gegangen", "geht", "ging", "gegeht"], correct: 0, explanation: "gehen -> gegangen." }
        ],
        // Level 3
        [
          { type: "mcq", visual: "⚡", question: "Complétez : 'Ich ___ (sehen) den Film.'", answers: ["sah", "sehe", "gesehen", "sahe"], correct: 0, explanation: "Prétérit : ich sah." },
          { type: "input", visual: "⚡", question: "Participe passé de 'geben' :", correct: "gegeben", explanation: "geben -> gegeben." },
          { type: "mcq", visual: "⚡", question: "Complétez : 'Wir ___ (fahren) nach Berlin.'", answers: ["fuhren", "fahren", "gefahren", "fuhrten"], correct: 0, explanation: "Prétérit : wir fuhren." },
          { type: "mcq", visual: "⚡", question: "Quel est le prétérit de 'lesen' pour 'ich' ?", answers: ["las", "lese", "laste", "gelesen"], correct: 0, explanation: "ich las." },
          { type: "mcq", visual: "⚡", question: "Quel est le participe passé de 'helfen' ?", answers: ["geholfen", "half", "gehelft", "helfen"], correct: 0, explanation: "helfen -> geholfen." },
          { type: "mcq", visual: "⚡", question: "Quel est le prétérit de 'werfen' (jeter) pour 'er' ?", answers: ["warf", "wirft", "werfte", "geworfen"], correct: 0, explanation: "werfen (e-a-o) : warf." },
          { type: "input", visual: "⚡", question: "Participe passé de 'schreiben' (écrire) :", correct: "geschrieben", explanation: "schreiben -> geschrieben." },
          { type: "mcq", visual: "⚡", question: "Complétez : 'Sie ___ (sein) gestern müde.'", answers: ["war", "ist", "waren", "gewesen"], correct: 0, explanation: "Prétérit (elle) : sie war." },
          { type: "mcq", visual: "⚡", question: "Quel est le prétérit de 'tragen' (porter) pour 'du' ?", answers: ["trugst", "trug", "trägst", "getragen"], correct: 0, explanation: "du + trug + st = trugst." },
          { type: "mcq", visual: "⚡", question: "Lequel de ces verbes suit la série i-a-u ?", answers: ["singen", "helfen", "fahren", "sprechen"], correct: 0, explanation: "singen (sang, gesungen) est i-a-u." }
        ],
        // Level 4
        [
          { type: "mcq", visual: "⚡", question: "Complétez : 'Er ___ (nehmen) das Buch.'", answers: ["nahm", "nimmt", "nehmen", "genommen"], correct: 0, explanation: "Prétérit : er nahm." },
          { type: "input", visual: "⚡", question: "Prétérit de 'trinken' pour 'du' :", correct: "trankst", explanation: "du + trank + st = trankst." },
          { type: "mcq", visual: "⚡", question: "Complétez : 'Sie ___ (sprechen) leise.'", answers: ["sprach", "spricht", "sprachte", "gesprochen"], correct: 0, explanation: "Prétérit : sie sprach." },
          { type: "mcq", visual: "⚡", question: "Quel est le participe passé de 'fliegen' (voler) ?", answers: ["geflogen", "flog", "gefliegt", "fliegt"], correct: 0, explanation: "fliegen -> flog -> geflogen." },
          { type: "input", visual: "⚡", question: "Prétérit de 'laufen' (courir) pour 'ich' :", correct: "lief", explanation: "laufen -> lief." },
          { type: "mcq", visual: "⚡", question: "Quel est le prétérit de 'essen' pour 'er' ?", answers: ["aß", "isst", "aßte", "gegessen"], correct: 0, explanation: "essen -> aß." },
          { type: "mcq", visual: "⚡", question: "Quelle est la série de 'steigen' (monter) ?", answers: ["ei - ie - ie", "i - a - u", "e - a - o", "a - u - a"], correct: 0, explanation: "steigen -> stieg -> gestiegen (ei-ie-ie)." },
          { type: "mcq", visual: "⚡", question: "Complétez : 'Ich ___ (finden) den Schlüssel.'", answers: ["fand", "finde", "fandte", "gefunden"], correct: 0, explanation: "Prétérit : ich fand." },
          { type: "mcq", visual: "⚡", question: "Quel est le participe passé de 'ziehen' (tirer) ?", answers: ["gezogen", "zog", "gezieht", "gezogen"], correct: 0, explanation: "ziehen -> zog -> gezogen." },
          { type: "input", visual: "⚡", question: "Prétérit de 'bleiben' (rester) pour 'wir' :", correct: "blieben", explanation: "wir + blieb + en = blieben." }
        ],
        // Level 5
        [
          { type: "mcq", visual: "⚡", question: "Traduisez 'Il est venu' (kommen) au Perfekt.", answers: ["Er ist gekommen", "Er kam", "Er hat gekommen", "Er kommt"], correct: 0, explanation: "kommen se conjugue avec sein au Perfekt : er ist gekommen." },
          { type: "input", visual: "⚡", question: "Participe passé de 'schwimmen' (nager) :", correct: "geschwommen", explanation: "schwimmen -> schwamm -> geschwommen." },
          { type: "mcq", visual: "⚡", question: "Quel est le prétérit de 'treffen' (rencontrer) pour 'du' ?", answers: ["trafst", "triffst", "traf", "getroffen"], correct: 0, explanation: "du + traf + st = trafst." },
          { type: "mcq", visual: "⚡", question: "Complétez : 'Wir ___ (sein) im Urlaub.'", answers: ["waren", "sind", "war", "gewesen"], correct: 0, explanation: "Prétérit : wir waren." },
          { type: "mcq", visual: "⚡", question: "Quel est le participe passé de 'sterben' (mourir) ?", answers: ["gestorben", "starb", "sterbt", "gestarben"], correct: 0, explanation: "sterben -> starb -> gestorben." },
          { type: "input", visual: "⚡", question: "Prétérit de 'schreiben' (écrire) pour 'er' :", correct: "schrieb", explanation: "schreiben -> schrieb." },
          { type: "mcq", visual: "⚡", question: "Quelle est la série de 'werfen' (jeter) ?", answers: ["e - a - o", "i - a - u", "a - u - a", "ei - ie - ie"], correct: 0, explanation: "werfen -> warf -> geworfen (e-a-o)." },
          { type: "mcq", visual: "⚡", question: "Lequel de ces verbes est fort ?", answers: ["lesen", "sagen", "arbeiten", "spielen"], correct: 0, explanation: "lesen est fort (las, gelesen)." },
          { type: "input", visual: "⚡", question: "Participe passé de 'sitzen' (être assis) :", correct: "gesessen", explanation: "sitzen -> saß -> gesessen (changement de consonne)." },
          { type: "mcq", visual: "⚡", question: "Traduisez 'Elle a pris le train' (nehmen) au Perfekt.", answers: ["Sie hat den Zug genommen", "Sie nahm den Zug", "Sie ist den Zug genommen", "Sie hat den Zug nehmen"], correct: 0, explanation: "nehmen -> hat genommen (pas de mouvement, donc haben)." }
        ]
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // NOTION 3 — Verbes mixtes et auxiliaires (haben/sein)
    // ─────────────────────────────────────────────────────────────────
    {
      id: "verbes-mixtes",
      label: "Verbes Mixtes & Auxiliaires",
      icon: "🔄",
      lesson: {
        formula: "Mixtes : changement de voyelle (fort) + terminaison -t (faible) | Auxiliaires : conjugaisons spécifiques",
        text: "Les verbes mixtes combinent les deux systèmes : ils changent de voyelle comme les verbes forts (au prétérit et au participe), mais prennent une terminaison en -t comme les verbes faibles. Les auxiliaires 'haben' (avoir) et 'sein' (être) sont essentiels pour former le Perfekt."
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Les verbes mixtes (Mischverben)",
          text: "Les verbes mixtes sont un petit groupe (environ 15 verbes) qui mélangent les caractéristiques des verbes faibles et forts.<br><br><strong>Caractéristiques :</strong><br>• Changement de voyelle au prétérit et au participe (comme les forts).<br>• Terminaison **-t** au participe et **-te** au prétérit (comme les faibles).<br><br><strong>Liste des principaux verbes mixtes :</strong><br>• denken (penser) → dachte → gedacht<br>• bringen (apporter) → brachte → gebracht<br>• kennen (connaître) → kannte → gekannt<br>• nennen (nommer) → nannte → genannt<br>• rennen (courir) → rannte → gerannt<br>• senden (envoyer) → sandte → gesandt (ou sendete/gesendet)<br>• wenden (tourner) → wandte → gewandt (ou wendete/gewendet)<br>• wissen (savoir) → wusste → gewusst<br>• brennen (brûler) → brannte → gebrannt"
        },
        {
          type: "definition",
          title: "📌 Les auxiliaires 'haben' et 'sein' au passé",
          text: "<strong>HABEN (avoir) :</strong><br>• Prétérit : hatte, hattest, hatte, hatten, hattet, hatten<br>• Participe II : gehabt<br><br><strong>SEIN (être) :</strong><br>• Prétérit : war, warst, war, waren, wart, waren<br>• Participe II : gewesen<br><br><strong>Quand utilise-t-on 'sein' au Perfekt ?</strong><br>1. Verbes de mouvement (gehen, fahren, kommen, laufen, reisen, etc.)<br>2. Verbes de changement d'état (einschlafen, aufwachen, sterben, werden)<br>3. Le verbe sein lui-même (ist gewesen)<br>4. Le verbe bleiben (rester)<br><br><strong>Exceptions :</strong> schwimmen, tanzen peuvent se construire avec sein ou haben selon le sens (mouvement vs activité)."
        },
        {
          type: "formula",
          title: "🔑 Tableau récapitulatif : Verbes mixtes",
          formula: "┌─────────────────┬────────────────────┬─────────────────────┐\n│   INFINITIF     │    PRÄTERITUM       │    PARTIZIP II      │\n├─────────────────┼────────────────────┼─────────────────────┤\n│ denken          │ dachte             │ gedacht             │\n│ bringen         │ brachte            │ gebracht            │\n│ kennen          │ kannte             │ gekannt             │\n│ nennen          │ nannte             │ genannt             │\n│ rennen          │ rannte             │ gerannt             │\n│ wissen          │ wusste             │ gewusst             │\n│ brennen         │ brannte            │ gebrannt            │\n│ haben           │ hatte              │ gehabt              │\n│ sein            │ war                │ gewesen             │\n└─────────────────┴────────────────────┴─────────────────────┘",
          text: "Ces verbes sont souvent très utilisés. Il faut les mémoriser."
        },
        {
          type: "example",
          title: "📜 Exemples d'utilisation",
          text: "<strong>Präteritum :</strong><br>• Ich <strong>hatte</strong> keine Zeit. (Je n'avais pas le temps.)<br>• Er <strong>brachte</strong> mir ein Geschenk. (Il m'a apporté un cadeau.)<br>• Wir <strong>wussten</strong> die Antwort. (Nous savions la réponse.)<br>• Sie <strong>kannte</strong> den Weg. (Elle connaissait le chemin.)<br><br><strong>Perfekt (avec sein) :</strong><br>• Ich <strong>bin</strong> nach Hause <strong>gegangen</strong>. (Je suis rentré à la maison.)<br>• Sie <strong>ist</strong> gestern <strong>gekommen</strong>. (Elle est venue hier.)<br>• Wir <strong>sind</strong> in Berlin <strong>gewesen</strong>. (Nous avons été à Berlin.)"
        },
        {
          type: "technique",
          title: "🛠️ Astuce : sein ou haben ?",
          text: "• <strong>sein</strong> : mouvement d'un lieu à un autre (gehen, fahren, kommen, laufen) ET changement d'état (einschlafen, aufwachen, sterben, werden).<br>  Ex: Ich bin gefahren. (Je suis allé.)<br><br>• <strong>haben</strong> : tous les autres verbes (transitifs, verbes d'état, verbes de durée).<br>  Ex: Ich habe gespielt. (J'ai joué.)<br><br>• <strong>Moyen mnémotechnique :</strong> S'il y a un déplacement d'un point A à un point B, ou un changement d'état, on utilise souvent 'sein'.<br>• <strong>Cas particuliers :</strong> 'schwimmen' (nager) : 'Ich bin geschwommen' si je me déplace, 'Ich habe geschwommen' si je nage sur place."
        },
        {
          type: "warning",
          title: "⚠️ Points de vigilance",
          text: "• <strong>wissen</strong> (savoir) est un verbe mixte : il change de voyelle (i->u) mais prend une terminaison faible : wusste, gewusst.<br>• <strong>bringen</strong> est très irrégulier : bringen → brachte → gebracht.<br>• Attention à la différence entre <strong>kennen</strong> (connaître une personne/lieu) et <strong>wissen</strong> (savoir un fait).<br>• Le verbe <strong>bleiben</strong> (rester) se conjugue avec <strong>sein</strong> au Perfekt : er ist geblieben.<br>• 'senden' et 'wenden' ont aussi des formes faibles régulières (sendete, gesendet) mais les formes mixtes sont plus courantes."
        }
      ],
      levels: [
        // Level 1
        [
          { type: "mcq", visual: "🔄", question: "Quel est le prétérit de 'bringen' ?", answers: ["brachte", "bringte", "brang", "gebracht"], correct: 0, explanation: "bringen est mixte : brachte (Prät.), gebracht (Part. II)." },
          { type: "mcq", visual: "🔄", question: "Quel est le participe passé de 'denken' ?", answers: ["gedacht", "dachte", "gedenkt", "gedankt"], correct: 0, explanation: "denken -> dachte -> gedacht." },
          { type: "mcq", visual: "🔄", question: "Quel auxiliaire utilise-t-on avec 'fahren' au Perfekt ?", answers: ["sein", "haben", "werden", "tun"], correct: 0, explanation: "Les verbes de mouvement (fahren) se conjuguent avec sein." },
          { type: "mcq", visual: "🔄", question: "Quel est le prétérit de 'sein' pour 'er' ?", answers: ["war", "ist", "waren", "gewesen"], correct: 0, explanation: "er war." },
          { type: "mcq", visual: "🔄", question: "Quel est le participe passé de 'wissen' ?", answers: ["gewusst", "wusste", "gewissen", "gewist"], correct: 0, explanation: "wissen -> wusste -> gewusst." },
          { type: "mcq", visual: "🔄", question: "Quel est le prétérit de 'kennen' (connaître) ?", answers: ["kannte", "kennte", "kennete", "gekannt"], correct: 0, explanation: "kennen est mixte : kannte." },
          { type: "mcq", visual: "🔄", question: "Complétez : 'Ich ___ (haben) keine Zeit.'", answers: ["hatte", "habte", "hat", "gehabt"], correct: 0, explanation: "Prétérit : ich hatte." },
          { type: "mcq", visual: "🔄", question: "Quel est le participe passé de 'nennen' (nommer) ?", answers: ["genannt", "nannte", "genennt", "nennen"], correct: 0, explanation: "nennen -> nannte -> genannt." },
          { type: "mcq", visual: "🔄", question: "Quel auxiliaire utilise-t-on avec 'bleiben' au Perfekt ?", answers: ["sein", "haben", "werden", "tun"], correct: 0, explanation: "bleiben (rester) se conjugue avec sein : er ist geblieben." },
          { type: "input", visual: "🔄", question: "Prétérit de 'denken' pour 'ich' :", correct: "dachte", explanation: "denken -> dachte." }
        ],
        // Level 2
        [
          { type: "mcq", visual: "🔄", question: "Quelle est la forme correcte du prétérit pour 'wir' avec 'sein' ?", answers: ["waren", "war", "warten", "gewesen"], correct: 0, explanation: "wir waren." },
          { type: "mcq", visual: "🔄", question: "Complétez : 'Er ___ (bringen) den Kaffee.'", answers: ["brachte", "bringte", "brang", "gebracht"], correct: 0, explanation: "Prétérit : er brachte." },
          { type: "mcq", visual: "🔄", question: "Quel est le prétérit de 'rennen' (courir) ?", answers: ["rannte", "rennte", "rennte", "gerannt"], correct: 0, explanation: "rennen -> rannte." },
          { type: "mcq", visual: "🔄", question: "Quel auxiliaire utilise-t-on avec 'schlafen' au Perfekt ?", answers: ["haben", "sein", "werden", "tun"], correct: 0, explanation: "schlafen n'est pas un verbe de mouvement ni de changement d'état : hat geschlafen." },
          { type: "input", visual: "🔄", question: "Participe passé de 'bringen' :", correct: "gebracht", explanation: "bringen -> gebracht." },
          { type: "mcq", visual: "🔄", question: "Quel est le prétérit de 'wissen' pour 'du' ?", answers: ["wusstest", "wusste", "wissen", "gewusst"], correct: 0, explanation: "du + wusst + est = wusstest." },
          { type: "mcq", visual: "🔄", question: "Complétez : 'Wir ___ (sein) im Kino.'", answers: ["waren", "sind", "war", "gewesen"], correct: 0, explanation: "Prétérit : wir waren." },
          { type: "mcq", visual: "🔄", question: "Quel est le participe passé de 'senden' (envoyer) ?", answers: ["gesandt", "sendete", "gesendet", "sandte"], correct: 0, explanation: "senden a deux formes : gesandt (mixte) ou gesendet (faible)." },
          { type: "mcq", visual: "🔄", question: "Quelle est la particularité des verbes mixtes ?", answers: ["Changement de voyelle + terminaison -t", "Pas de changement de voyelle", "Terminaison -en", "Ils n'ont pas de participe"], correct: 0, explanation: "Ils mélangent fort (changement) et faible (-t)." },
          { type: "mcq", visual: "🔄", question: "Quel auxiliaire utilise-t-on avec 'gehen' au Perfekt ?", answers: ["sein", "haben", "werden", "tun"], correct: 0, explanation: "gehen (mouvement) : ist gegangen." }
        ],
        // Level 3
        [
          { type: "mcq", visual: "🔄", question: "Complétez : 'Ich ___ (wissen) die Antwort nicht.'", answers: ["wusste", "weißte", "wisse", "gewusst"], correct: 0, explanation: "Prétérit : ich wusste." },
          { type: "input", visual: "🔄", question: "Participe passé de 'kennen' :", correct: "gekannt", explanation: "kennen -> kannte -> gekannt." },
          { type: "mcq", visual: "🔄", question: "Complétez : 'Sie ___ (sein) gestern müde.'", answers: ["war", "ist", "waren", "gewesen"], correct: 0, explanation: "Prétérit (elle) : sie war." },
          { type: "mcq", visual: "🔄", question: "Quel est le participe passé de 'denken' ?", answers: ["gedacht", "denkt", "gedenkt", "dachte"], correct: 0, explanation: "denken -> gedacht." },
          { type: "mcq", visual: "🔄", question: "Quel auxiliaire utilise-t-on avec 'schwimmen' (nager) au Perfekt ?", answers: ["sein", "haben", "les deux selon le contexte", "werden"], correct: 2, explanation: "Avec mouvement/direction : sein (ich bin geschwommen). Sans direction précise : haben (ich habe geschwommen)." },
          { type: "mcq", visual: "🔄", question: "Quel est le prétérit de 'brennen' (brûler) ?", answers: ["brannte", "brennte", "brannt", "gebrannt"], correct: 0, explanation: "brennen -> brannte." },
          { type: "input", visual: "🔄", question: "Participe passé de 'rennen' :", correct: "gerannt", explanation: "rennen -> rannte -> gerannt." },
          { type: "mcq", visual: "🔄", question: "Complétez : 'Er ___ (haben) ein Auto.'", answers: ["hatte", "habte", "hat", "gehabt"], correct: 0, explanation: "Prétérit : er hatte." },
          { type: "mcq", visual: "🔄", question: "Quel est le prétérit de 'wenden' (tourner) ?", answers: ["wandte", "wendete", "wendte", "wandte/wendete"], correct: 3, explanation: "Les deux formes sont possibles : wandte (mixte) ou wendete (faible)." },
          { type: "mcq", visual: "🔄", question: "Lequel de ces verbes est mixte ?", answers: ["kennen", "spielen", "machen", "gehen"], correct: 0, explanation: "kennen (kannte, gekannt) est mixte." }
        ],
        // Level 4
        [
          { type: "mcq", visual: "🔄", question: "Traduisez 'Il a apporté le livre' (bringen) au Perfekt.", answers: ["Er hat das Buch gebracht", "Er brachte das Buch", "Er ist das Buch gebracht", "Er hat das Buch bringt"], correct: 0, explanation: "bringen -> hat gebracht." },
          { type: "input", visual: "🔄", question: "Participe passé de 'wissen' :", correct: "gewusst", explanation: "wissen -> wusste -> gewusst." },
          { type: "mcq", visual: "🔄", question: "Complétez : 'Wir ___ (sein) in der Stadt.'", answers: ["waren", "sind", "war", "gewesen"], correct: 0, explanation: "Prétérit : wir waren." },
          { type: "mcq", visual: "🔄", question: "Quel auxiliaire utilise-t-on avec 'sterben' (mourir) au Perfekt ?", answers: ["sein", "haben", "werden", "tun"], correct: 0, explanation: "sterben (changement d'état) : ist gestorben." },
          { type: "input", visual: "🔄", question: "Prétérit de 'nennen' pour 'er' :", correct: "nannte", explanation: "nennen -> nannte." },
          { type: "mcq", visual: "🔄", question: "Quel est le participe passé de 'senden' (forme mixte) ?", answers: ["gesandt", "gesendet", "sendet", "sandte"], correct: 0, explanation: "La forme mixte est gesandt." },
          { type: "mcq", visual: "🔄", question: "Complétez : 'Ich ___ (kennen) ihn gut.'", answers: ["kannte", "kennte", "kennete", "gekannt"], correct: 0, explanation: "Prétérit : ich kannte." },
          { type: "mcq", visual: "🔄", question: "Quel est le prétérit de 'denken' pour 'ihr' ?", answers: ["dachtet", "dachte", "denktet", "gedacht"], correct: 0, explanation: "ihr + dacht + et = dachtet." },
          { type: "input", visual: "🔄", question: "Participe passé de 'brennen' :", correct: "gebrannt", explanation: "brennen -> brannte -> gebrannt." },
          { type: "mcq", visual: "🔄", question: "Lequel de ces verbes n'est pas mixte ?", answers: ["helfen", "bringen", "denken", "kennen"], correct: 0, explanation: "helfen est fort, pas mixte." }
        ],
        // Level 5
        [
          { type: "mcq", visual: "🔄", question: "Traduisez 'Nous étions fatigués' (sein).", answers: ["Wir waren müde", "Wir sind müde", "Wir hatten müde", "Wir gewesen müde"], correct: 0, explanation: "Prétérit de sein : wir waren." },
          { type: "input", visual: "🔄", question: "Prétérit de 'wissen' pour 'sie' (pluriel) :", correct: "wussten", explanation: "sie + wusst + en = wussten." },
          { type: "mcq", visual: "🔄", question: "Complétez : 'Sie ___ (bringen) die Blumen.'", answers: ["brachte", "brachten", "bringte", "gebracht"], correct: 1, explanation: "Prétérit 3e pers. pluriel : sie brachten." },
          { type: "mcq", visual: "🔄", question: "Quel auxiliaire utilise-t-on avec 'aufwachen' (se réveiller) au Perfekt ?", answers: ["sein", "haben", "werden", "tun"], correct: 0, explanation: "Aufwachen est un changement d'état : ist aufgewacht." },
          { type: "input", visual: "🔄", question: "Participe passé de 'denken' :", correct: "gedacht", explanation: "denken -> gedacht." },
          { type: "mcq", visual: "🔄", question: "Quel est le prétérit de 'rennen' pour 'du' ?", answers: ["ranntest", "rennst", "rannte", "gerannt"], correct: 0, explanation: "du + rannt + est = ranntest." },
          { type: "mcq", visual: "🔄", question: "Complétez : 'Er ___ (sein) krank.'", answers: ["war", "ist", "waren", "gewesen"], correct: 0, explanation: "Prétérit : er war." },
          { type: "input", visual: "🔄", question: "Prétérit de 'kennen' pour 'wir' :", correct: "kannten", explanation: "wir + kann + ten = kannten." },
          { type: "mcq", visual: "🔄", question: "Quel est le participe passé de 'wenden' (forme mixte) ?", answers: ["gewandt", "gewendet", "wandte", "wendete"], correct: 0, explanation: "La forme mixte est gewandt." },
          { type: "mcq", visual: "🔄", question: "Lequel de ces verbes utilise 'sein' au Perfekt ?", answers: ["gehen", "spielen", "arbeiten", "sagen"], correct: 0, explanation: "gehen (mouvement) utilise sein." }
        ]
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // NOTION 4 — Valeur et emploi du prétérit (Präteritum)
    // ─────────────────────────────────────────────────────────────────
    {
      id: "preterit-valeur",
      label: "Emploi du Prétérit (Präteritum)",
      icon: "⏳",
      lesson: {
        formula: "Präteritum = passé simple/imparfait | Utilisation principale : écrit, récit, verbes modaux",
        text: "En allemand, le prétérit (Präteritum) est principalement utilisé dans la langue écrite (romans, journaux, récits) et pour certains verbes courants à l'oral (sein, haben, verbes modaux). Il correspond souvent à l'imparfait ou au passé simple français."
      },
      fullBlocks: [
        {
          type: "definition",
          title: "📌 Quand utilise-t-on le prétérit ?",
          text: "Le prétérit est le temps du <strong>récit écrit</strong> (conte, roman, fait divers). À l'oral, on utilise davantage le <strong>Perfekt</strong> (passé composé).<br><br><strong>Cas d'utilisation du prétérit :</strong><br>• <strong>Langue écrite formelle :</strong> journaux, livres, rapports.<br>• <strong>Verbes modaux :</strong> können, müssen, dürfen, sollen, wollen, mögen → leur prétérit est très fréquent même à l'oral.<br>• <strong>Verbes sein, haben :</strong> on utilise leur prétérit plutôt que le Perfekt à l'oral.<br>• <strong>Récits oraux structurés :</strong> pour raconter une histoire de façon soutenue."
        },
        {
          type: "formula",
          title: "🔑 Comparaison Präteritum / Perfekt",
          formula: "┌─────────────────────────────────────────────────────────────────┐\n│ Präteritum (imparfait/passé simple)  │ Perfekt (passé composé) │\n├─────────────────────────────────────────────────────────────────┤\n│ Écrit, formel                        │ Oral, informel          │\n│ Narration, contes, journaux           │ Conversation courante   │\n│ Verbes modaux (konnte, musste…)      │ Verbes d'action fréquents│\n│ sein, haben (war, hatte)             │                         │\n└─────────────────────────────────────────────────────────────────┘",
          text: "En résumé : à l'oral, on utilise le Perfekt sauf pour les verbes modaux et sein/haben. À l'écrit, le prétérit est la norme."
        },
        {
          type: "example",
          title: "📜 Exemples comparés",
          text: "<strong>À l'oral (Perfekt) :</strong><br>• Ich <strong>habe</strong> gestern Fußball <strong>gespielt</strong>. (J'ai joué au foot hier.)<br>• Wir <strong>sind</strong> nach Berlin <strong>gefahren</strong>. (Nous sommes allés à Berlin.)<br><br><strong>À l'écrit (Präteritum) :</strong><br>• Er <strong>spielte</strong> Fußball, als es zu regnen begann. (Il jouait au foot quand il se mit à pleuvoir.)<br>• Sie <strong>fuhr</strong> nach Berlin und besuchte ihre Freunde. (Elle alla à Berlin et visita ses amis.)<br><br><strong>Verbes modaux (oral et écrit) :</strong><br>• Ich <strong>konnte</strong> nicht kommen. (Je n'ai pas pu venir.)<br>• Er <strong>musste</strong> früher gehen. (Il a dû partir plus tôt.)"
        },
        {
          type: "technique",
          title: "🛠️ Astuces pour bien choisir",
          text: "• <strong>Dans un récit écrit :</strong> utilisez le prétérit pour tous les verbes, sauf si vous voulez un effet de style.<br>• <strong>Dans une conversation :</strong> utilisez le Perfekt pour les verbes d'action, le prétérit pour sein/haben et les modaux.<br>• <strong>Verbes modaux :</strong> mémorisez leur prétérit : können → konnte, müssen → musste, etc. Ils sont très employés.<br>• <strong>Règle empirique :</strong> si vous hésitez, utilisez le Perfekt à l'oral ; vous ne serez pas faux, même si parfois un peu familier."
        },
        {
          type: "warning",
          title: "⚠️ Différences régionales",
          text: "• En Allemagne du Nord, le prétérit est plus utilisé à l'oral (influence du bas-allemand).<br>• En Allemagne du Sud, en Autriche et en Suisse, le Perfekt est prédominant même pour les verbes modaux et sein/haben (mais le prétérit reste compris).<br>• Dans les médias écrits (journaux, livres), le prétérit est la norme partout."
        }
      ],
      levels: [
        // Level 1
        [
          { type: "mcq", visual: "⏳", question: "Dans quel contexte utilise-t-on principalement le prétérit en allemand ?", answers: ["Langue écrite (romans, journaux)", "Conversation courante", "Pour le futur", "Pour les ordres"], correct: 0, explanation: "Le prétérit est le temps du récit écrit." },
          { type: "mcq", visual: "⏳", question: "Quel temps utilise-t-on à l'oral pour la plupart des verbes d'action ?", answers: ["Perfekt", "Präteritum", "Plusquamperfekt", "Futur I"], correct: 0, explanation: "À l'oral, on utilise le Perfekt (passé composé)." },
          { type: "mcq", visual: "⏳", question: "Quel est le prétérit de 'können' (pouvoir) pour 'er' ?", answers: ["konnte", "kann", "könnte", "gekonnt"], correct: 0, explanation: "können -> konnte." },
          { type: "mcq", visual: "⏳", question: "Quel est le prétérit de 'haben' pour 'wir' ?", answers: ["hatten", "haben", "hatte", "gehabt"], correct: 0, explanation: "wir hatten." },
          { type: "mcq", visual: "⏳", question: "Quel est le prétérit de 'sein' pour 'du' ?", answers: ["warst", "war", "waren", "gewesen"], correct: 0, explanation: "du warst." },
          { type: "mcq", visual: "⏳", question: "Lequel de ces verbes utilise-t-on souvent au prétérit même à l'oral ?", answers: ["müssen", "spielen", "arbeiten", "lernen"], correct: 0, explanation: "Les verbes modaux (müssen) sont souvent au prétérit à l'oral." },
          { type: "mcq", visual: "⏳", question: "Traduisez 'Il a dû partir' (müssen) en utilisant le prétérit.", answers: ["Er musste gehen", "Er hat müssen gehen", "Er muss gehen", "Er musst gehen"], correct: 0, explanation: "Prétérit de müssen : musste." },
          { type: "input", visual: "⏳", question: "Prétérit de 'wollen' (vouloir) pour 'ich' :", correct: "wollte", explanation: "wollen -> wollte." },
          { type: "mcq", visual: "⏳", question: "Dans une lettre formelle, quel temps est préférable pour raconter un événement passé ?", answers: ["Präteritum", "Perfekt", "Plusquamperfekt", "Präsens"], correct: 0, explanation: "À l'écrit formel, le prétérit est la norme." },
          { type: "mcq", visual: "⏳", question: "Quel est le prétérit de 'sollen' (devoir) pour 'sie' (pluriel) ?", answers: ["sollten", "sollte", "sollen", "gesollt"], correct: 0, explanation: "sie (pluriel) + sollt + en = sollten." }
        ],
        // Level 2
        [
          { type: "mcq", visual: "⏳", question: "Pourquoi dit-on 'Ich war' et non 'Ich bin gewesen' dans une conversation ?", answers: ["Parce que 'sein' est souvent utilisé au prétérit à l'oral", "Parce que 'sein' n'a pas de participe", "C'est une faute", "Parce que c'est plus long"], correct: 0, explanation: "Le verbe sein se met souvent au prétérit même à l'oral." },
          { type: "mcq", visual: "⏳", question: "Quel est le prétérit de 'dürfen' (avoir le droit) pour 'er' ?", answers: ["durfte", "darf", "dürfte", "gedurft"], correct: 0, explanation: "dürfen -> durfte." },
          { type: "input", visual: "⏳", question: "Prétérit de 'müssen' pour 'du' :", correct: "musstest", explanation: "du + musst + est = musstest." },
          { type: "mcq", visual: "⏳", question: "Dans un article de journal, on lit : 'Der Mann ___ (gehen) nach Hause.' Quel temps est le plus adapté ?", answers: ["ging", "ist gegangen", "geht", "wird gehen"], correct: 0, explanation: "Le prétérit (ging) est utilisé dans la presse écrite." },
          { type: "mcq", visual: "⏳", question: "Lequel de ces énoncés est correct à l'oral ?", answers: ["Ich hatte keine Zeit", "Ich habe keine Zeit gehabt", "Les deux sont corrects", "Aucun"], correct: 2, explanation: "Les deux sont corrects : 'hatte' (prétérit) est courant pour haben, et 'habe gehabt' (Perfekt) est aussi possible." },
          { type: "mcq", visual: "⏳", question: "Quel est le prétérit de 'mögen' (aimer) pour 'er' ?", answers: ["mochte", "mag", "möchte", "gemocht"], correct: 0, explanation: "mögen -> mochte." },
          { type: "input", visual: "⏳", question: "Prétérit de 'können' pour 'wir' :", correct: "konnten", explanation: "wir + konn + ten = konnten." },
          { type: "mcq", visual: "⏳", question: "Dans une conversation avec un ami, pour dire 'J'ai joué au tennis', quelle forme est la plus naturelle ?", answers: ["Ich habe Tennis gespielt", "Ich spielte Tennis", "Ich spiele Tennis", "Ich werde Tennis spielen"], correct: 0, explanation: "À l'oral, le Perfekt est préféré." },
          { type: "mcq", visual: "⏳", question: "Quel est le prétérit de 'wissen' (savoir) pour 'ihr' ?", answers: ["wusstet", "wisst", "wusste", "gewusst"], correct: 0, explanation: "ihr + wusst + et = wusstet." },
          { type: "mcq", visual: "⏳", question: "Lequel de ces verbes est le plus souvent employé au prétérit à l'oral ?", answers: ["haben", "spielen", "lernen", "tanzen"], correct: 0, explanation: "haben (et sein) sont souvent au prétérit même à l'oral." }
        ],
        // Level 3
        [
          { type: "mcq", visual: "⏳", question: "Complétez : 'Als Kind ___ (ich, können) gut singen.'", answers: ["konnte", "kann", "könnte", "gekonnt"], correct: 0, explanation: "Prétérit : ich konnte." },
          { type: "input", visual: "⏳", question: "Prétérit de 'sein' pour 'ihr' :", correct: "wart", explanation: "ihr + war + t = wart." },
          { type: "mcq", visual: "⏳", question: "Complétez : 'Gestern ___ (es, regnen) den ganzen Tag.' (récit écrit)", answers: ["regnete", "hat geregnet", "regnet", "wird regnen"], correct: 0, explanation: "Dans un récit écrit, on utilise le prétérit." },
          { type: "mcq", visual: "⏳", question: "Quelle est la différence principale entre Präteritum et Perfekt ?", answers: ["Präteritum = écrit, Perfekt = oral (sauf exceptions)", "Präteritum = passé composé, Perfekt = imparfait", "Aucune différence", "Präteritum = futur, Perfekt = passé"], correct: 0, explanation: "L'opposition principale est stylistique (écrit vs oral)." },
          { type: "mcq", visual: "⏳", question: "Dans une lettre à un ami, pour raconter ses vacances, quel temps est le plus courant ?", answers: ["Perfekt", "Präteritum", "Plusquamperfekt", "Präsens"], correct: 0, explanation: "Même à l'écrit informel, le Perfekt est souvent utilisé. Le prétérit est plus formel." },
          { type: "input", visual: "⏳", question: "Prétérit de 'mögen' pour 'du' :", correct: "mochtest", explanation: "du + mocht + est = mochtest." },
          { type: "mcq", visual: "⏳", question: "Complétez : 'Er ___ (wollen) nicht kommen.' (à l'oral)", answers: ["wollte", "hat gewollt", "will", "wollte"], correct: 0, explanation: "Les modaux sont souvent au prétérit même à l'oral." },
          { type: "mcq", visual: "⏳", question: "Quel est le prétérit de 'sollen' pour 'sie' (singulier) ?", answers: ["sollte", "soll", "sollte", "gesollt"], correct: 0, explanation: "sie (sing.) + sollt + e = sollte." },
          { type: "input", visual: "⏳", question: "Prétérit de 'haben' pour 'ich' :", correct: "hatte", explanation: "ich hatte." },
          { type: "mcq", visual: "⏳", question: "Le prétérit de 'gehen' dans un conte : 'Der Prinz ___ in den Wald.'", answers: ["ging", "ist gegangen", "geht", "ging"], correct: 0, explanation: "Dans un récit écrit (conte), on utilise le prétérit." }
        ],
        // Level 4
        [
          { type: "mcq", visual: "⏳", question: "Quelle est la forme correcte du prétérit pour 'er' avec 'dürfen' ?", answers: ["durfte", "darfte", "dürfte", "durft"], correct: 0, explanation: "dürfen -> durfte." },
          { type: "input", visual: "⏳", question: "Prétérit de 'können' pour 'ihr' :", correct: "konntet", explanation: "ihr + konnt + et = konntet." },
          { type: "mcq", visual: "⏳", question: "Complétez : 'Wir ___ (sein) sehr glücklich.' (à l'oral)", answers: ["waren", "sind gewesen", "sind", "waren"], correct: 0, explanation: "À l'oral, on utilise souvent le prétérit de sein." },
          { type: "mcq", visual: "⏳", question: "Dans un rapport de police, on lit : 'Der Täter ___ (fliehen).' Quel temps est attendu ?", answers: ["floh", "ist geflohen", "flieht", "wird fliehen"], correct: 0, explanation: "Le prétérit est la norme dans les écrits formels." },
          { type: "input", visual: "⏳", question: "Prétérit de 'wollen' pour 'wir' :", correct: "wollten", explanation: "wir + wollt + en = wollten." },
          { type: "mcq", visual: "⏳", question: "Lequel de ces verbes est le plus souvent au Perfekt à l'oral ?", answers: ["spielen", "sein", "haben", "können"], correct: 0, explanation: "spielen (verbe d'action) est souvent au Perfekt à l'oral." },
          { type: "mcq", visual: "⏳", question: "Complétez : 'Sie ___ (müssen) früher aufstehen.' (récit)", answers: ["musste", "muss", "hat gemusst", "musste"], correct: 0, explanation: "Prétérit de müssen pour elle." },
          { type: "input", visual: "⏳", question: "Prétérit de 'sollen' pour 'ihr' :", correct: "solltet", explanation: "ihr + sollt + et = solltet." },
          { type: "mcq", visual: "⏳", question: "Pour dire 'Il avait un chien' à l'oral, quelle forme est la plus courante ?", answers: ["Er hatte einen Hund", "Er hat einen Hund gehabt", "Er hat einen Hund", "Er hatte einen Hund"], correct: 0, explanation: "haben est souvent au prétérit à l'oral." },
          { type: "mcq", visual: "⏳", question: "Dans un livre d'histoire, on utilise principalement :", answers: ["Präteritum", "Perfekt", "Futur", "Präsens"], correct: 0, explanation: "Le prétérit est le temps narratif de l'écrit." }
        ],
        // Level 5
        [
          { type: "mcq", visual: "⏳", question: "Traduisez 'Je pouvais nager quand j'étais petit.' (prétérit)", answers: ["Ich konnte schwimmen, als ich klein war.", "Ich habe schwimmen gekonnt, als ich klein gewesen bin.", "Ich kann schwimmen, wenn ich klein bin.", "Ich könnte schwimmen, als ich klein war."], correct: 0, explanation: "Utilisation du prétérit pour 'können' et 'sein'." },
          { type: "input", visual: "⏳", question: "Prétérit de 'mögen' pour 'sie' (pluriel) :", correct: "mochten", explanation: "sie + mocht + en = mochten." },
          { type: "mcq", visual: "⏳", question: "Complétez : 'Es ___ (geben) einmal einen König.' (début de conte)", answers: ["gab", "hat gegeben", "gibt", "wird geben"], correct: 0, explanation: "Dans les contes, on utilise le prétérit (es gab)." },
          { type: "mcq", visual: "⏳", question: "Quelle est la forme la plus naturelle à l'oral : 'Ich ___ (haben) keine Lust.'", answers: ["hatte", "habe gehabt", "habe", "hatte"], correct: 0, explanation: "Prétérit de haben est courant à l'oral." },
          { type: "input", visual: "⏳", question: "Prétérit de 'dürfen' pour 'du' :", correct: "durftest", explanation: "du + durft + est = durftest." },
          { type: "mcq", visual: "⏳", question: "Lequel de ces énoncés utilise le prétérit de manière appropriée dans un journal ?", answers: ["Der Zug kam verspätet an.", "Der Zug ist verspätet angekommen.", "Der Zug kommt verspätet an.", "Der Zug wird verspätet ankommen."], correct: 0, explanation: "Le prétérit (kam) est la norme dans la presse." },
          { type: "mcq", visual: "⏳", question: "Pourquoi le prétérit est-il parfois utilisé à l'oral en Allemagne du Nord ?", answers: ["Influence du bas-allemand", "C'est une erreur", "C'est plus formel", "C'est une mode"], correct: 0, explanation: "Dans le nord, l'usage du prétérit à l'oral est plus répandu." },
          { type: "input", visual: "⏳", question: "Prétérit de 'müssen' pour 'er' :", correct: "musste", explanation: "müssen -> musste." },
          { type: "mcq", visual: "⏳", question: "Complétez : 'Als ich jung war, ___ (ich, wollen) Pilot werden.'", answers: ["wollte", "habe gewollt", "will", "wollte"], correct: 0, explanation: "Prétérit de wollen." },
          { type: "mcq", visual: "⏳", question: "Dans un roman, pour dire 'Elle souriait', on écrira :", answers: ["Sie lächelte", "Sie hat gelächelt", "Sie lächelt", "Sie wird lächeln"], correct: 0, explanation: "Le prétérit (lächelte) est le temps narratif." }
        ]
      ]
    }
  ]
};