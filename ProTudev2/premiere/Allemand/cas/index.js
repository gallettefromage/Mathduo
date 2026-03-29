export default {
  id: "cas-allemand-enrichi",
  title: "Les cas en Allemand",
  description: "Les cas en allemand",
  icon: "📜",
  xpMax: 400,
  notions: [
    // ─────────────────────────────────────────────────────────────────
// NOTION 6 — Nominativ (cas sujet)
// ─────────────────────────────────────────────────────────────────
{
  id: "nominativ",
  label: "Nominativ — le sujet",
  icon: "👤",
  lesson: {
    formula: "Nominativ = sujet | Wer? / Was? | article défini : der, die, das, die",
    text: "Le nominatif est le cas du sujet. Il répond aux questions 'wer?' (qui ?) pour les personnes et 'was?' (quoi ?) pour les choses. En français, c'est le sujet du verbe."
  },
  fullBlocks: [
    {
      type: "definition",
      title: "📌 Équivalent français",
      text: "Le nominatif correspond au <strong>sujet</strong> en français. Il désigne la personne ou la chose qui fait l'action ou qui est décrite.<br><br>Exemples :<br>• <strong>Der Mann</strong> singt. → <strong>L'homme</strong> chante.<br>• <strong>Die Frau</strong> arbeitet. → <strong>La femme</strong> travaille.<br>• <strong>Das Kind</strong> spielt. → <strong>L'enfant</strong> joue."
    },
    {
      type: "formula",
      title: "🔑 Tableau des articles définis (Nominativ)",
      formula: "┌─────────────┬───────────────┐\n│   Genre     │  Artikel def. │\n├─────────────┼───────────────┤\n│ masculin    │ der           │\n│ féminin     │ die           │\n│ neutre      │ das           │\n│ pluriel     │ die           │\n└─────────────┴───────────────┘",
      text: "L'article défini au nominatif : der (m), die (f), das (n), die (pl)."
    },
    {
      type: "formula",
      title: "🔑 Tableau des articles indéfinis (Nominativ)",
      formula: "┌─────────────┬───────────────┐\n│   Genre     │  Artikel indef.│\n├─────────────┼───────────────┤\n│ masculin    │ ein           │\n│ féminin     │ eine          │\n│ neutre      │ ein           │\n│ pluriel     │ (kein Artikel)│\n└─────────────┴───────────────┘",
      text: "L'article indéfini au nominatif : ein (m), eine (f), ein (n)."
    },
    {
      type: "formula",
      title: "🔑 Déclinaison des adjectifs (Nominativ)",
      formula: "┌────────────────┬──────────────────┬──────────────────┬──────────────────┐\n│   Genre        │ après def. (der) │ après indef. (ein)│ sans article     │\n├────────────────┼──────────────────┼──────────────────┼──────────────────┤\n│ masculin       │ -e               │ -er               │ -er              │\n│ féminin        │ -e               │ -e                │ -e               │\n│ neutre         │ -e               │ -es               │ -es              │\n│ pluriel        │ -en              │ -en               │ -e               │\n└────────────────┴──────────────────┴──────────────────┴──────────────────┘",
      text: "Exemples : der große Mann, ein großer Mann, großer Mann ; die schöne Frau, eine schöne Frau, schöne Frau."
    },
    {
      type: "example",
      title: "📜 Exemples de phrases",
      text: "• <strong>Der Hund</strong> bellt. → Le chien aboie.<br>• <strong>Eine Katze</strong> schläft. → Un chat dort.<br>• <strong>Das kleine Kind</strong> lacht. → Le petit enfant rit.<br>• <strong>Schöne Blumen</strong> blühen. → De belles fleurs fleurissent."
    },
    {
      type: "warning",
      title: "⚠️ Piège fréquent",
      text: "Ne pas confondre le nominatif avec l’accusatif après les verbes d’état comme sein, werden, bleiben. Ces verbes exigent le nominatif (sujet et attribut).<br>Ex: Er <strong>ist ein Lehrer</strong>. (Il est professeur.) → 'ein Lehrer' est au nominatif."
    }
  ],
  levels: [
    // Level 1 : articles définis et indéfinis de base
    [
      { type: "mcq", visual: "👤", question: "Quel est l'article défini masculin au nominatif ?", answers: ["der", "die", "das", "den"], correct: 0, explanation: "Masculin singulier au nominatif : der." },
      { type: "mcq", visual: "👤", question: "Quel est l'article défini neutre au nominatif ?", answers: ["das", "der", "die", "den"], correct: 0, explanation: "Neutre : das." },
      { type: "mcq", visual: "👤", question: "Quel est l'article indéfini féminin au nominatif ?", answers: ["eine", "ein", "einer", "eines"], correct: 0, explanation: "Féminin indéfini : eine." },
      { type: "mcq", visual: "👤", question: "Complétez : '___ Mann arbeitet.' (l'homme)", answers: ["Der", "Die", "Das", "Den"], correct: 0, explanation: "Masculin défini : der." },
      { type: "mcq", visual: "👤", question: "Complétez : '___ Kind spielt.' (un enfant)", answers: ["Ein", "Eine", "Einer", "Eines"], correct: 0, explanation: "Neutre indéfini : ein." },
      { type: "mcq", visual: "👤", question: "Traduisez 'Le chat dort.' (der Kater)", answers: ["Der Kater schläft", "Die Kater schläft", "Das Kater schläft", "Den Kater schläft"], correct: 0, explanation: "Sujet masculin : der Kater." },
      { type: "mcq", visual: "👤", question: "Quel cas utilise-t-on pour le sujet ?", answers: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"], correct: 0, explanation: "Le sujet est toujours au nominatif." },
      { type: "mcq", visual: "👤", question: "Complétez : '___ alte Frau' (une vieille femme) :", answers: ["Eine", "Einer", "Einen", "Ein"], correct: 0, explanation: "Nominatif féminin indéfini : eine." },
      { type: "mcq", visual: "👤", question: "Quelle question pose-t-on pour trouver le nominatif ?", answers: ["Wer oder was?", "Wen oder was?", "Wem?", "Wessen?"], correct: 0, explanation: "Wer? / Was? = nominatif." },
      { type: "input", visual: "👤", question: "Donnez l'article défini féminin au nominatif :", correct: "die", explanation: "die Frau." }
    ],
    // Level 2 : adjectifs épithètes (déclinaison)
    [
      { type: "mcq", visual: "👤", question: "Quelle est la terminaison de l'adjectif après 'der' au masculin ?", answers: ["-e", "-er", "-en", "-es"], correct: 0, explanation: "Après article défini, l'adjectif prend -e (der große Mann)." },
      { type: "mcq", visual: "👤", question: "Quelle est la terminaison de l'adjectif après 'die' au féminin ?", answers: ["-e", "-er", "-en", "-es"], correct: 0, explanation: "die schöne Frau." },
      { type: "mcq", visual: "👤", question: "Complétez : 'Der ___ Tisch ist neu.' (grand)", answers: ["große", "großer", "großen", "großes"], correct: 0, explanation: "der große Tisch." },
      { type: "mcq", visual: "👤", question: "Complétez : 'Ein ___ Haus steht dort.' (grand)", answers: ["großes", "große", "großer", "großen"], correct: 0, explanation: "ein großes Haus (neutre indéfini → -es)." },
      { type: "mcq", visual: "👤", question: "Complétez : '___ kleine Katze' (une petite chatte) :", answers: ["Eine", "Ein", "Einer", "Einen"], correct: 0, explanation: "eine kleine Katze." },
      { type: "mcq", visual: "👤", question: "Traduisez 'Le petit enfant' (das Kind) :", answers: ["Das kleine Kind", "Der kleine Kind", "Die kleine Kind", "Den kleinen Kind"], correct: 0, explanation: "das kleine Kind." },
      { type: "mcq", visual: "👤", question: "Quelle est la terminaison de l'adjectif après un article indéfini au neutre ?", answers: ["-es", "-e", "-er", "-en"], correct: 0, explanation: "ein schönes Haus." },
      { type: "mcq", visual: "👤", question: "Complétez : '___ alte Häuser' (les vieilles maisons) :", answers: ["Die", "Der", "Das", "Den"], correct: 0, explanation: "die alten Häuser (pluriel défini)." },
      { type: "mcq", visual: "👤", question: "Traduisez 'Un grand homme' :", answers: ["Ein großer Mann", "Ein großer Mann", "Einen großen Mann", "Einem großen Mann"], correct: 0, explanation: "Nominatif masculin indéfini : ein großer Mann." },
      { type: "input", visual: "👤", question: "Complétez : 'Das ___ Buch' (intéressant) :", correct: "interessante", explanation: "das interessante Buch." }
    ],
    // Level 3 : pronoms personnels et verbes d'état
    [
      { type: "mcq", visual: "👤", question: "Quel pronom personnel correspond à 'je' au nominatif ?", answers: ["ich", "du", "er", "sie"], correct: 0, explanation: "ich." },
      { type: "mcq", visual: "👤", question: "Traduisez 'Il est professeur.' (sein + Nominativ)", answers: ["Er ist Lehrer", "Ihn ist Lehrer", "Ihm ist Lehrer", "Er ist Lehrer"], correct: 0, explanation: "Le verbe 'sein' exige le nominatif." },
      { type: "mcq", visual: "👤", question: "Complétez : 'Sie ___ eine Ärztin.' (elle est)", answers: ["ist", "bin", "bist", "sind"], correct: 0, explanation: "Sie ist Ärztin (nominatif)." },
      { type: "mcq", visual: "👤", question: "Le verbe 'werden' (devenir) est suivi de quel cas ?", answers: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"], correct: 0, explanation: "Les verbes d'état (sein, werden, bleiben) exigent le nominatif." },
      { type: "mcq", visual: "👤", question: "Traduisez 'Ils restent amis.' (bleiben)", answers: ["Sie bleiben Freunde", "Sie bleiben Freunden", "Sie bleiben Freund", "Sie bleiben Freundes"], correct: 0, explanation: "Nominatif : Freunde." },
      { type: "mcq", visual: "👤", question: "Complétez : 'Du ___ mein bester Freund.' (tu es)", answers: ["bist", "bin", "ist", "seid"], correct: 0, explanation: "du bist (nominatif)." },
      { type: "mcq", visual: "👤", question: "Quel est le nominatif du pronom 'vous' (formel) ?", answers: ["Sie", "sie", "ihr", "euch"], correct: 0, explanation: "Sie (formel) toujours au nominatif." },
      { type: "mcq", visual: "👤", question: "Traduisez 'Nous sommes étudiants.'", answers: ["Wir sind Studenten", "Wir sind Studenten", "Uns sind Studenten", "Wir sind Studenten"], correct: 0, explanation: "Nominatif : wir, Studenten." },
      { type: "mcq", visual: "👤", question: "Complétez : 'Er ___ ein guter Musiker.' (il devient)", answers: ["wird", "ist", "bleibt", "wurde"], correct: 0, explanation: "werden + Nominativ : er wird ein guter Musiker." },
      { type: "input", visual: "👤", question: "Donnez le nominatif du pronom 'tu' :", correct: "du", explanation: "du." }
    ],
    // Level 4 : phrases complexes avec adjectifs et noms composés
    [
      { type: "mcq", visual: "👤", question: "Complétez : 'Der ___ Hund bellt laut.' (gros)", answers: ["große", "großer", "großen", "großes"], correct: 0, explanation: "der große Hund." },
      { type: "mcq", visual: "👤", question: "Traduisez 'Une belle maison blanche.'", answers: ["Ein schönes weißes Haus", "Eine schöne weiße Haus", "Ein schöner weißer Haus", "Ein schönes weißes Haus"], correct: 0, explanation: "Haus neutre : ein schönes weißes Haus." },
      { type: "mcq", visual: "👤", question: "Complétez : '___ altes Auto gehört meinem Vater.' (Une vieille voiture)", answers: ["Ein", "Eine", "Einer", "Eines"], correct: 0, explanation: "Auto neutre : ein altes Auto." },
      { type: "mcq", visual: "👤", question: "Quelle est la terminaison de l'adjectif sans article au masculin singulier ?", answers: ["-er", "-e", "-en", "-es"], correct: 0, explanation: "großer Mann (sans article, -er)." },
      { type: "mcq", visual: "👤", question: "Complétez : '___ Wasser ist kalt.' (L'eau)", answers: ["Das", "Der", "Die", "Dem"], correct: 0, explanation: "das Wasser." },
      { type: "mcq", visual: "👤", question: "Traduisez 'De vieux arbres' (ohne Artikel)", answers: ["Alte Bäume", "Alter Bäume", "Alten Bäume", "Altes Bäume"], correct: 0, explanation: "Pluriel sans article : alte Bäume." },
      { type: "mcq", visual: "👤", question: "Complétez : 'Der ___, die ___ und das ___' (grand, petit, jeune)", answers: ["große, kleine, junge", "großer, kleiner, junger", "großen, kleinen, jungen", "große, kleine, junges"], correct: 0, explanation: "der große, die kleine, das junge." },
      { type: "mcq", visual: "👤", question: "Traduisez 'Le premier homme'", answers: ["Der erste Mann", "Der erster Mann", "Der ersten Mann", "Die erste Mann"], correct: 0, explanation: "der erste Mann." },
      { type: "mcq", visual: "👤", question: "Complétez : '___ guter Freund ist wichtig.' (Un bon ami)", answers: ["Ein", "Eine", "Einer", "Einen"], correct: 0, explanation: "ein guter Freund." },
      { type: "input", visual: "👤", question: "Complétez : '___ schönes Wetter!' (Quel beau temps !)", correct: "Ein", explanation: "Ein schönes Wetter (neutre indéfini)." }
    ],
    // Level 5 : synthèse et exceptions
    [
      { type: "mcq", visual: "👤", question: "Le nom 'der Herr' (monsieur) a-t-il une forme particulière au nominatif ?", answers: ["Non, c'est der Herr", "Oui, c'est den Herrn", "Oui, c'est dem Herrn", "Oui, c'est des Herrn"], correct: 0, explanation: "der Herr (nominatif) ; l'accusatif serait den Herrn." },
      { type: "mcq", visual: "👤", question: "Quel est le nominatif de 'die Leute' (les gens) ?", answers: ["die Leute", "den Leuten", "der Leute", "die Leuten"], correct: 0, explanation: "die Leute (pluriel)." },
      { type: "mcq", visual: "👤", question: "Traduisez 'Ce sont mes amis.' (das sind)", answers: ["Das sind meine Freunde", "Das ist meine Freunde", "Das sind meiner Freunde", "Das sind mein Freunde"], correct: 0, explanation: "Das sind + Nominativ pluriel : meine Freunde." },
      { type: "mcq", visual: "👤", question: "Complétez : '___ erstaunlich! Wie schnell du lernst.' (C'est étonnant !)", answers: ["Das ist", "Das sind", "Es ist", "Es sind"], correct: 0, explanation: "Das ist erstaunlich." },
      { type: "mcq", visual: "👤", question: "Quelle est la forme correcte au nominatif : 'mein' ou 'meiner' ?", answers: ["mein (pour masculin/neutre), meine (féminin/pluriel)", "meiner toujours", "meine toujours", "meines toujours"], correct: 0, explanation: "Possessifs : mein Hund, mein Haus, meine Katze." },
      { type: "mcq", visual: "👤", question: "Traduisez 'Mon père est ingénieur.'", answers: ["Mein Vater ist Ingenieur", "Meinem Vater ist Ingenieur", "Meinen Vater ist Ingenieur", "Meines Vaters ist Ingenieur"], correct: 0, explanation: "Nominatif : mein Vater." },
      { type: "mcq", visual: "👤", question: "Complétez : '___ schön, dass du da bist.' (C'est beau)", answers: ["Es ist", "Das ist", "Es sind", "Das sind"], correct: 0, explanation: "Es ist schön." },
      { type: "mcq", visual: "👤", question: "Quel est le nominatif du pronom relatif 'qui' pour une personne masculine ?", answers: ["der", "den", "dem", "dessen"], correct: 0, explanation: "der Mann, der ..." },
      { type: "mcq", visual: "👤", question: "Traduisez 'La ville, qui est grande, s'appelle Berlin.'", answers: ["Die Stadt, die groß ist, heißt Berlin", "Die Stadt, der groß ist, heißt Berlin", "Die Stadt, das groß ist, heißt Berlin", "Die Stadt, den groß ist, heißt Berlin"], correct: 0, explanation: "die Stadt, die (nominatif)." },
      { type: "input", visual: "👤", question: "Complétez : '___ neue Auto ist sehr teuer.' (La nouvelle voiture)", correct: "Das", explanation: "Das neue Auto (neutre défini)." }
    ]
  ]
},

// ─────────────────────────────────────────────────────────────────
// NOTION 7 — Akkusativ (COD)
// ─────────────────────────────────────────────────────────────────
{
  id: "akkusativ",
  label: "Akkusativ — le COD",
  icon: "🎯",
  lesson: {
    formula: "Akkusativ = COD | Wen? / Was? | article défini : den, die, das, die",
    text: "L’accusatif est le cas du complément d’objet direct. Il répond aux questions 'wen?' (qui ?) et 'was?' (quoi ?). En français, c’est le COD."
  },
  fullBlocks: [
    {
      type: "definition",
      title: "📌 Équivalent français",
      text: "L’accusatif correspond au <strong>complément d’objet direct (COD)</strong> en français. Il répond à la question 'qui ?' ou 'quoi ?' après le verbe.<br><br>Exemples :<br>• Ich sehe <strong>den Mann</strong>. → Je vois <strong>l’homme</strong>.<br>• Sie hat <strong>einen Hund</strong>. → Elle a <strong>un chien</strong>.<br>• Er liebt <strong>die Frau</strong>. → Il aime <strong>la femme</strong>."
    },
    {
      type: "formula",
      title: "🔑 Tableau des articles définis (Akkusativ)",
      formula: "┌─────────────┬───────────────┐\n│   Genre     │  Artikel def. │\n├─────────────┼───────────────┤\n│ masculin    │ den           │\n│ féminin     │ die           │\n│ neutre      │ das           │\n│ pluriel     │ die           │\n└─────────────┴───────────────┘",
      text: "Seul le masculin change (der → den)."
    },
    {
      type: "formula",
      title: "🔑 Tableau des articles indéfinis (Akkusativ)",
      formula: "┌─────────────┬───────────────┐\n│   Genre     │  Artikel indef.│\n├─────────────┼───────────────┤\n│ masculin    │ einen         │\n│ féminin     │ eine          │\n│ neutre      │ ein           │\n│ pluriel     │ (kein Artikel)│\n└─────────────┴───────────────┘",
      text: "Masculin : ein → einen."
    },
    {
      type: "formula",
      title: "🔑 Déclinaison des adjectifs (Akkusativ)",
      formula: "┌────────────────┬──────────────────┬──────────────────┬──────────────────┐\n│   Genre        │ après def. (den) │ après indef. (einen)│ sans article     │\n├────────────────┼──────────────────┼──────────────────┼──────────────────┤\n│ masculin       │ -en               │ -en               │ -en              │\n│ féminin        │ -e                │ -e                │ -e               │\n│ neutre         │ -e                │ -es               │ -es              │\n│ pluriel        │ -en               │ -en               │ -e               │\n└────────────────┴──────────────────┴──────────────────┴──────────────────┘",
      text: "Exemples : den großen Mann, einen großen Mann, großen Mann ; die schöne Frau, eine schöne Frau, schöne Frau."
    },
    {
      type: "example",
      title: "📜 Exemples de phrases",
      text: "• Ich kaufe <strong>den Tisch</strong>. → J’achète la table.<br>• Sie hat <strong>einen Bruder</strong>. → Elle a un frère.<br>• Wir sehen <strong>das Auto</strong>. → Nous voyons la voiture.<br>• Er mag <strong>die schönen Blumen</strong>. → Il aime les belles fleurs."
    },
    {
      type: "warning",
      title: "⚠️ Pièges fréquents",
      text: "• Certaines prépositions exigent toujours l’accusatif : durch, für, gegen, ohne, um.<br>• Les verbes de mouvement + direction prennent l’accusatif après la préposition (in, auf, etc.) : Ich gehe <strong>in den Park</strong>.<br>• Ne pas confondre avec le datif (indirect)."
    }
  ],
  levels: [
    // Level 1 : articles définis et indéfinis
    [
      { type: "mcq", visual: "🎯", question: "Quel est l'article défini masculin à l'accusatif ?", answers: ["den", "der", "dem", "des"], correct: 0, explanation: "Masculin accusatif : den." },
      { type: "mcq", visual: "🎯", question: "Quel est l'article défini féminin à l'accusatif ?", answers: ["die", "den", "der", "das"], correct: 0, explanation: "Féminin accusatif : die (inchangé)." },
      { type: "mcq", visual: "🎯", question: "Complétez : 'Ich habe ___ Hund.' (un chien)", answers: ["einen", "ein", "einer", "einem"], correct: 0, explanation: "Accusatif masculin indéfini : einen." },
      { type: "mcq", visual: "🎯", question: "Traduisez 'Je vois la femme.'", answers: ["Ich sehe die Frau", "Ich sehe der Frau", "Ich sehe den Frau", "Ich sehe die Frauen"], correct: 0, explanation: "Féminin accusatif : die." },
      { type: "mcq", visual: "🎯", question: "Complétez : 'Sie kauft ___ Buch.' (un livre)", answers: ["ein", "einen", "eine", "einer"], correct: 0, explanation: "Neutre accusatif : ein." },
      { type: "mcq", visual: "🎯", question: "Quelle question pose-t-on pour trouver l'accusatif ?", answers: ["Wen oder was?", "Wer oder was?", "Wem?", "Wessen?"], correct: 0, explanation: "Wen? / Was? = accusatif." },
      { type: "mcq", visual: "🎯", question: "Complétez : 'Er hat ___ neuen Computer.' (un nouvel ordinateur)", answers: ["einen", "ein", "eine", "einer"], correct: 0, explanation: "Masculin accusatif indéfini : einen." },
      { type: "mcq", visual: "🎯", question: "Traduisez 'J'aime le café.'", answers: ["Ich liebe den Kaffee", "Ich liebe der Kaffee", "Ich liebe dem Kaffee", "Ich liebe des Kaffees"], correct: 0, explanation: "Masculin défini : den Kaffee." },
      { type: "mcq", visual: "🎯", question: "Quel est l'accusatif de 'der Tisch' ?", answers: ["den Tisch", "dem Tisch", "des Tisches", "die Tische"], correct: 0, explanation: "der Tisch → den Tisch." },
      { type: "input", visual: "🎯", question: "Donnez l'article défini neutre à l'accusatif :", correct: "das", explanation: "das Auto, das Buch." }
    ],
    // Level 2 : adjectifs épithètes
    [
      { type: "mcq", visual: "🎯", question: "Quelle est la terminaison de l'adjectif après 'den' au masculin ?", answers: ["-en", "-e", "-er", "-es"], correct: 0, explanation: "den großen Mann." },
      { type: "mcq", visual: "🎯", question: "Complétez : 'Ich kaufe ___ alten Wagen.' (la vieille voiture)", answers: ["den", "die", "das", "dem"], correct: 0, explanation: "Wagen masculin : den alten Wagen." },
      { type: "mcq", visual: "🎯", question: "Complétez : 'Sie sucht ___ neue Wohnung.' (un nouvel appartement)", answers: ["eine", "einen", "ein", "einer"], correct: 0, explanation: "Wohnung féminin : eine neue Wohnung." },
      { type: "mcq", visual: "🎯", question: "Traduisez 'Il lit un livre intéressant.'", answers: ["Er liest ein interessantes Buch", "Er liest einen interessanten Buch", "Er liest eine interessante Buch", "Er liest ein interessanter Buch"], correct: 0, explanation: "Buch neutre : ein interessantes Buch." },
      { type: "mcq", visual: "🎯", question: "Quelle est la terminaison de l'adjectif sans article au masculin accusatif ?", answers: ["-en", "-e", "-er", "-es"], correct: 0, explanation: "großen Mann (sans article, -en)." },
      { type: "mcq", visual: "🎯", question: "Complétez : 'Hast du ___ neuen Film gesehen?' (le nouveau film)", answers: ["den", "die", "das", "dem"], correct: 0, explanation: "Film masculin : den neuen Film." },
      { type: "mcq", visual: "🎯", question: "Traduisez 'Elle a acheté une belle robe.'", answers: ["Sie hat ein schönes Kleid gekauft", "Sie hat einen schönen Kleid gekauft", "Sie hat eine schöne Kleid gekauft", "Sie hat ein schöner Kleid gekauft"], correct: 0, explanation: "Kleid neutre : ein schönes Kleid." },
      { type: "mcq", visual: "🎯", question: "Complétez : 'Ich mag ___ kalte Getränke.' (les boissons froides)", answers: ["die", "den", "der", "das"], correct: 0, explanation: "Pluriel accusatif : die kalten Getränke." },
      { type: "mcq", visual: "🎯", question: "Complétez : 'Er trinkt ___ Glas Wasser.' (un verre d'eau)", answers: ["ein", "einen", "eine", "einer"], correct: 0, explanation: "Glas neutre : ein Glas." },
      { type: "input", visual: "🎯", question: "Complétez : 'Ich sehe ___ kleinen Jungen.' (le petit garçon)", correct: "den", explanation: "den kleinen Jungen." }
    ],
    // Level 3 : pronoms personnels et verbes courants
    [
      { type: "mcq", visual: "🎯", question: "Quel est le pronom personnel accusatif de 'ich' ?", answers: ["mich", "mir", "mich", "meiner"], correct: 0, explanation: "ich → mich." },
      { type: "mcq", visual: "🎯", question: "Complétez : 'Kannst du ___ verstehen?' (me)", answers: ["mich", "mir", "ich", "mich"], correct: 0, explanation: "mich (accusatif)." },
      { type: "mcq", visual: "🎯", question: "Traduisez 'Je te vois.'", answers: ["Ich sehe dich", "Ich sehe dir", "Ich sehe du", "Ich sehe euch"], correct: 0, explanation: "dich (accusatif de du)." },
      { type: "mcq", visual: "🎯", question: "Quel est l'accusatif de 'er' ?", answers: ["ihn", "ihm", "er", "seiner"], correct: 0, explanation: "er → ihn." },
      { type: "mcq", visual: "🎯", question: "Complétez : 'Wir besuchen ___ morgen.' (vous, pluriel informel)", answers: ["euch", "ihr", "sie", "euch"], correct: 0, explanation: "euch (accusatif de ihr)." },
      { type: "mcq", visual: "🎯", question: "Traduisez 'Elle nous aide.' (helfen + datif, attention !)", answers: ["Sie hilft uns", "Sie hilft uns", "Sie hilft uns", "Sie hilft uns"], correct: 0, explanation: "helfen + datif, donc uns (datif), pas accusatif. Mais ici on teste la reconnaissance du cas. Pour l'accusatif, prenons un autre verbe : 'Sie sieht uns.' → nous (accusatif)." },
      { type: "mcq", visual: "🎯", question: "Quel est l'accusatif du pronom 'sie' (pluriel) ?", answers: ["sie", "ihnen", "sie", "sich"], correct: 0, explanation: "sie (pluriel) reste sie à l'accusatif." },
      { type: "mcq", visual: "🎯", question: "Complétez : 'Ich liebe ___ sehr.' (elle)", answers: ["sie", "ihr", "ihn", "sie"], correct: 0, explanation: "sie (accusatif)." },
      { type: "mcq", visual: "🎯", question: "Traduisez 'Appelle-le !' (rufen)", answers: ["Ruf ihn!", "Ruf ihm!", "Ruf er!", "Ruf seine!"], correct: 0, explanation: "ihn (accusatif)." },
      { type: "input", visual: "🎯", question: "Donnez l'accusatif de 'wir' :", correct: "uns", explanation: "uns." }
    ],
    // Level 4 : prépositions accusatives et verbes de mouvement
    [
      { type: "mcq", visual: "🎯", question: "Quelle préposition exige l'accusatif ?", answers: ["für", "mit", "aus", "bei"], correct: 0, explanation: "für est une préposition accusative." },
      { type: "mcq", visual: "🎯", question: "Complétez : 'Das Geschenk ist ___ dich.' (pour)", answers: ["für", "mit", "ohne", "durch"], correct: 0, explanation: "für + accusatif." },
      { type: "mcq", visual: "🎯", question: "Traduisez 'Il court dans le parc.' (dans = in + direction)", answers: ["Er läuft in den Park", "Er läuft in dem Park", "Er läuft im Park", "Er läuft in der Park"], correct: 0, explanation: "in + accusatif pour une direction." },
      { type: "mcq", visual: "🎯", question: "Complétez : 'Wir gehen ___ Kino.' (au cinéma)", answers: ["ins", "im", "in den", "in das"], correct: 0, explanation: "in + das Kino → ins." },
      { type: "mcq", visual: "🎯", question: "Quelle est la différence entre 'in den Park' et 'im Park' ?", answers: ["in den Park = direction, im Park = lieu", "in den Park = lieu, im Park = direction", "pas de différence", "in den Park est faux"], correct: 0, explanation: "accusatif (in den) pour direction, datif (im) pour lieu." },
      { type: "mcq", visual: "🎯", question: "Complétez : 'Ich lege das Buch ___ Tisch.' (sur la table, direction)", answers: ["auf den", "auf dem", "auf die", "auf der"], correct: 0, explanation: "auf + accusatif pour direction." },
      { type: "mcq", visual: "🎯", question: "Traduisez 'Elle va à l'école.' (die Schule)", answers: ["Sie geht in die Schule", "Sie geht in der Schule", "Sie geht zur Schule", "Sie geht in die Schule"], correct: 0, explanation: "in + accusatif pour direction." },
      { type: "mcq", visual: "🎯", question: "Complétez : 'Ich warte ___ dich.' (j'attends)", answers: ["auf", "für", "an", "bei"], correct: 0, explanation: "warten auf + accusatif." },
      { type: "mcq", visual: "🎯", question: "Quelle est la forme correcte : 'Er denkt ___ seine Freundin.' (à sa copine)", answers: ["an", "auf", "für", "über"], correct: 0, explanation: "denken an + accusatif." },
      { type: "input", visual: "🎯", question: "Complétez : 'Ohne ___ kann ich nicht leben.' (toi)", correct: "dich", explanation: "ohne + accusatif." }
    ],
    // Level 5 : synthèse et verbes particuliers
    [
      { type: "mcq", visual: "🎯", question: "Le verbe 'fragen' (demander) se construit avec quel cas ?", answers: ["Akkusativ", "Dativ", "Genitiv", "Nominativ"], correct: 0, explanation: "jemanden fragen (accusatif)." },
      { type: "mcq", visual: "🎯", question: "Complétez : 'Darf ich ___ etwas fragen?' (vous, formel)", answers: ["Sie", "Ihnen", "Ihr", "Sie"], correct: 0, explanation: "Sie (accusatif)." },
      { type: "mcq", visual: "🎯", question: "Traduisez 'Il coûte 10 euros.' (kosten)", answers: ["Er kostet 10 Euro", "Ihn kostet 10 Euro", "Ihm kostet 10 Euro", "Er kostet 10 Euro"], correct: 0, explanation: "kosten + Nominativ (sujet)." },
      { type: "mcq", visual: "🎯", question: "Le verbe 'helfen' (aider) se construit avec quel cas ?", answers: ["Dativ", "Akkusativ", "Genitiv", "Nominativ"], correct: 0, explanation: "helfen + datif, attention piège." },
      { type: "mcq", visual: "🎯", question: "Complétez : 'Ich habe ___ gestern getroffen.' (elle)", answers: ["sie", "ihr", "sie", "ihr"], correct: 0, explanation: "treffen + accusatif : sie." },
      { type: "mcq", visual: "🎯", question: "Traduisez 'Je me lave.' (sich waschen)", answers: ["Ich wasche mich", "Ich wasche mir", "Ich wasche ich", "Ich wasche sich"], correct: 0, explanation: "sich + accusatif pour la plupart des verbes réfléchis." },
      { type: "mcq", visual: "🎯", question: "Complétez : 'Er hat ___ sehr gefreut.' (il s'est réjoui)", answers: ["sich", "ihn", "ihm", "sich"], correct: 0, explanation: "sich freuen + accusatif." },
      { type: "mcq", visual: "🎯", question: "Quel est l'accusatif de 'der Löwe' (le lion) ?", answers: ["den Löwen", "dem Löwen", "des Löwen", "die Löwen"], correct: 0, explanation: "Löwe est un nom faible : den Löwen." },
      { type: "mcq", visual: "🎯", question: "Traduisez 'Je connais cet homme.' (kennen)", answers: ["Ich kenne diesen Mann", "Ich kenne diesem Mann", "Ich kenne diesen Mann", "Ich kenne dieser Mann"], correct: 0, explanation: "diesen Mann (accusatif)." },
      { type: "input", visual: "🎯", question: "Complétez : 'Wir haben ___ neuen Lehrer sehr gern.' (notre)", correct: "unseren", explanation: "unseren neuen Lehrer (accusatif masculin)." }
    ]
  ]
},

// ─────────────────────────────────────────────────────────────────
// NOTION 8 — Dativ (COI)
// ─────────────────────────────────────────────────────────────────
{
  id: "dativ",
  label: "Dativ — le COI",
  icon: "🎁",
  lesson: {
    formula: "Dativ = COI | Wem? | article défini : dem, der, dem, den",
    text: "Le datif est le cas du complément d’objet indirect. Il répond à la question 'wem?' (à qui ?). En français, c’est souvent le COI introduit par 'à'."
  },
  fullBlocks: [
    {
      type: "definition",
      title: "📌 Équivalent français",
      text: "Le datif correspond au <strong>complément d’objet indirect (COI)</strong> en français, souvent introduit par la préposition 'à'.<br><br>Exemples :<br>• Ich gebe <strong>dem Mann</strong> das Buch. → Je donne le livre <strong>à l’homme</strong>.<br>• Sie hilft <strong>der Frau</strong>. → Elle aide <strong>la femme</strong> (COI en allemand, COD en français ? Attention : helfen est un verbe qui se construit avec le datif en allemand).<br>• Wir danken <strong>den Eltern</strong>. → Nous remercions <strong>les parents</strong>."
    },
    {
      type: "formula",
      title: "🔑 Tableau des articles définis (Dativ)",
      formula: "┌─────────────┬───────────────┐\n│   Genre     │  Artikel def. │\n├─────────────┼───────────────┤\n│ masculin    │ dem           │\n│ féminin     │ der           │\n│ neutre      │ dem           │\n│ pluriel     │ den           │\n└─────────────┴───────────────┘",
      text: "Les articles changent tous : der → dem, die → der, das → dem, die (pl) → den."
    },
    {
      type: "formula",
      title: "🔑 Tableau des articles indéfinis (Dativ)",
      formula: "┌─────────────┬───────────────┐\n│   Genre     │  Artikel indef.│\n├─────────────┼───────────────┤\n│ masculin    │ einem         │\n│ féminin     │ einer         │\n│ neutre      │ einem         │\n│ pluriel     │ (kein Artikel)│\n└─────────────┴───────────────┘",
      text: "Masculin/neutre : ein → einem ; féminin : eine → einer."
    },
    {
      type: "formula",
      title: "🔑 Déclinaison des adjectifs (Dativ)",
      formula: "┌────────────────┬──────────────────┬──────────────────┬──────────────────┐\n│   Genre        │ après def. (dem) │ après indef. (einem)│ sans article     │\n├────────────────┼──────────────────┼──────────────────┼──────────────────┤\n│ masculin       │ -en               │ -en               │ -em              │\n│ féminin        │ -en               │ -en               │ -er              │\n│ neutre         │ -en               │ -en               │ -em              │\n│ pluriel        │ -en               │ -en               │ -en              │\n└────────────────┴──────────────────┴──────────────────┴──────────────────┘",
      text: "Exemples : dem großen Mann, einem großen Mann, großem Mann ; der schönen Frau, einer schönen Frau, schöner Frau."
    },
    {
      type: "example",
      title: "📜 Exemples de phrases",
      text: "• Ich schenke <strong>dem Kind</strong> ein Spielzeug. → J’offre un jouet <strong>à l’enfant</strong>.<br>• Sie antwortet <strong>ihrem Vater</strong>. → Elle répond <strong>à son père</strong>.<br>• Wir helfen <strong>den Nachbarn</strong>. → Nous aidons <strong>les voisins</strong>.<br>• Er fährt <strong>mit dem Auto</strong>. → Il roule <strong>avec la voiture</strong> (préposition mit + datif)."
    },
    {
      type: "warning",
      title: "⚠️ Pièges fréquents",
      text: "• Beaucoup de verbes allemands se construisent avec le datif alors qu’en français ils sont COD : helfen (aider), danken (remercier), gefallen (plaire), gehören (appartenir).<br>• Certaines prépositions exigent toujours le datif : aus, außer, bei, mit, nach, seit, von, zu.<br>• Les verbes de mouvement + préposition de lieu fixe (in, auf, etc.) prennent le datif s’il n’y a pas de changement de lieu (Wo?) et l’accusatif s’il y a direction (Wohin?)."
    }
  ],
  levels: [
    // Level 1 : articles définis et indéfinis
    [
      { type: "mcq", visual: "🎁", question: "Quel est l'article défini masculin au datif ?", answers: ["dem", "den", "der", "des"], correct: 0, explanation: "Masculin datif : dem." },
      { type: "mcq", visual: "🎁", question: "Quel est l'article défini féminin au datif ?", answers: ["der", "die", "dem", "den"], correct: 0, explanation: "Féminin datif : der." },
      { type: "mcq", visual: "🎁", question: "Complétez : 'Ich gebe ___ Frau das Buch.' (à la femme)", answers: ["der", "die", "dem", "den"], correct: 0, explanation: "Féminin datif : der." },
      { type: "mcq", visual: "🎁", question: "Quel est l'article indéfini neutre au datif ?", answers: ["einem", "ein", "einer", "einen"], correct: 0, explanation: "einem." },
      { type: "mcq", visual: "🎁", question: "Traduisez 'Il aide l'homme.' (helfen)", answers: ["Er hilft dem Mann", "Er hilft den Mann", "Er hilft der Mann", "Er hilft des Mannes"], correct: 0, explanation: "helfen + datif : dem Mann." },
      { type: "mcq", visual: "🎁", question: "Quelle question pose-t-on pour trouver le datif ?", answers: ["Wem?", "Wen?", "Wer?", "Wessen?"], correct: 0, explanation: "Wem? = datif." },
      { type: "mcq", visual: "🎁", question: "Complétez : 'Wir danken ___ Lehrer.' (au professeur)", answers: ["dem", "den", "der", "des"], correct: 0, explanation: "Lehrer masculin, datif = dem." },
      { type: "mcq", visual: "🎁", question: "Quel est le datif pluriel défini ?", answers: ["den", "dem", "der", "die"], correct: 0, explanation: "den (plus -n au nom souvent)." },
      { type: "mcq", visual: "🎁", question: "Traduisez 'Il donne le livre à une fille.'", answers: ["Er gibt einem Mädchen das Buch", "Er gibt ein Mädchen das Buch", "Er gibt einer Mädchen das Buch", "Er gibt einen Mädchen das Buch"], correct: 0, explanation: "Mädchen neutre : einem Mädchen." },
      { type: "input", visual: "🎁", question: "Donnez l'article défini neutre au datif :", correct: "dem", explanation: "dem Kind." }
    ],
    // Level 2 : adjectifs épithètes
    [
      { type: "mcq", visual: "🎁", question: "Quelle est la terminaison de l'adjectif après 'dem' au masculin ?", answers: ["-en", "-e", "-er", "-em"], correct: 0, explanation: "dem großen Mann." },
      { type: "mcq", visual: "🎁", question: "Complétez : 'Ich helfe ___ alten Dame.' (à la vieille dame)", answers: ["der", "die", "dem", "den"], correct: 0, explanation: "Féminin datif : der alten Dame." },
      { type: "mcq", visual: "🎁", question: "Traduisez 'Il parle avec un vieil ami.'", answers: ["Er spricht mit einem alten Freund", "Er spricht mit einen alten Freund", "Er spricht mit einer alten Freund", "Er spricht mit einem alte Freund"], correct: 0, explanation: "mit + datif : einem alten Freund." },
      { type: "mcq", visual: "🎁", question: "Quelle est la terminaison de l'adjectif sans article au datif masculin ?", answers: ["-em", "-en", "-er", "-es"], correct: 0, explanation: "großem Mann." },
      { type: "mcq", visual: "🎁", question: "Complétez : 'Das gehört ___ kleinen Kind.' (au petit enfant)", answers: ["dem", "der", "den", "das"], correct: 0, explanation: "dem kleinen Kind." },
      { type: "mcq", visual: "🎁", question: "Traduisez 'Il est chez de bons amis.' (bei)", answers: ["Er ist bei guten Freunden", "Er ist bei gute Freunde", "Er ist bei guten Freunde", "Er ist bei gutem Freunden"], correct: 0, explanation: "bei + datif : guten Freunden." },
      { type: "mcq", visual: "🎁", question: "Complétez : 'Sie wohnt ___ ihren Eltern.' (avec)", answers: ["bei", "mit", "zu", "nach"], correct: 0, explanation: "bei + datif." },
      { type: "mcq", visual: "🎁", question: "Complétez : 'Ich fahre ___ meinem Auto.' (avec)", answers: ["mit", "bei", "zu", "nach"], correct: 0, explanation: "mit + datif." },
      { type: "mcq", visual: "🎁", question: "Traduisez 'Ils viennent de la banque.' (von)", answers: ["Sie kommen von der Bank", "Sie kommen von dem Bank", "Sie kommen von die Bank", "Sie kommen von den Bank"], correct: 0, explanation: "von + datif : der Bank." },
      { type: "input", visual: "🎁", question: "Complétez : 'Er hilft ___ kranken Frau.' (à la femme malade)", correct: "der", explanation: "der kranken Frau." }
    ],
    // Level 3 : pronoms personnels et verbes datifs
    [
      { type: "mcq", visual: "🎁", question: "Quel est le pronom datif de 'ich' ?", answers: ["mir", "mich", "mir", "meiner"], correct: 0, explanation: "mir." },
      { type: "mcq", visual: "🎁", question: "Complétez : 'Kannst du ___ helfen?' (me)", answers: ["mir", "mich", "ich", "mir"], correct: 0, explanation: "mir (datif)." },
      { type: "mcq", visual: "🎁", question: "Traduisez 'Je te donne le livre.'", answers: ["Ich gebe dir das Buch", "Ich gebe dich das Buch", "Ich gebe du das Buch", "Ich gebe euch das Buch"], correct: 0, explanation: "dir (datif de du)." },
      { type: "mcq", visual: "🎁", question: "Quel est le datif de 'er' ?", answers: ["ihm", "ihn", "er", "seiner"], correct: 0, explanation: "ihm." },
      { type: "mcq", visual: "🎁", question: "Complétez : 'Das Buch gehört ___ .' (lui, à elle)", answers: ["ihr", "ihm", "ihr", "sie"], correct: 0, explanation: "gehören + datif : ihr (féminin)." },
      { type: "mcq", visual: "🎁", question: "Traduisez 'Nous vous remercions.' (danken, vous formel)", answers: ["Wir danken Ihnen", "Wir danken Sie", "Wir danken euch", "Wir danken ihr"], correct: 0, explanation: "danken + datif : Ihnen." },
      { type: "mcq", visual: "🎁", question: "Quel est le datif du pronom 'sie' (pluriel) ?", answers: ["ihnen", "sie", "ihr", "sich"], correct: 0, explanation: "ihnen." },
      { type: "mcq", visual: "🎁", question: "Complétez : 'Es gefällt ___ sehr gut.' (à nous)", answers: ["uns", "wir", "uns", "us"], correct: 0, explanation: "uns (datif)." },
      { type: "mcq", visual: "🎁", question: "Traduisez 'Il a manqué son train.' (fehlen + datif)", answers: ["Ihm fehlt der Zug", "Ihn fehlt der Zug", "Er fehlt den Zug", "Ihm fehlt den Zug"], correct: 0, explanation: "fehlen + datif : ihm." },
      { type: "input", visual: "🎁", question: "Donnez le datif de 'du' :", correct: "dir", explanation: "dir." }
    ],
    // Level 4 : prépositions datives et verbes de lieu
    [
      { type: "mcq", visual: "🎁", question: "Quelle préposition exige le datif ?", answers: ["mit", "für", "gegen", "ohne"], correct: 0, explanation: "mit est une préposition dative." },
      { type: "mcq", visual: "🎁", question: "Complétez : 'Ich wohne ___ meiner Familie.' (avec)", answers: ["bei", "mit", "zu", "nach"], correct: 0, explanation: "bei + datif." },
      { type: "mcq", visual: "🎁", question: "Traduisez 'Il vient de l'école.' (von)", answers: ["Er kommt von der Schule", "Er kommt von dem Schule", "Er kommt von die Schule", "Er kommt von den Schule"], correct: 0, explanation: "von + datif : der Schule." },
      { type: "mcq", visual: "🎁", question: "Complétez : 'Ich gehe ___ meinem Freund.' (chez)", answers: ["zu", "nach", "bei", "mit"], correct: 0, explanation: "zu + datif : zu meinem Freund." },
      { type: "mcq", visual: "🎁", question: "Traduisez 'Il est en Allemagne.' (in + datif)", answers: ["Er ist in Deutschland", "Er ist in Deutschland", "Er ist in Deutschland", "Er ist in Deutschland"], correct: 0, explanation: "in + datif pour le lieu." },
      { type: "mcq", visual: "🎁", question: "Complétez : 'Das Buch liegt ___ Tisch.' (sur la table, position)", answers: ["auf dem", "auf den", "auf der", "auf das"], correct: 0, explanation: "auf + datif pour une position." },
      { type: "mcq", visual: "🎁", question: "Quelle est la différence entre 'in die Schule' et 'in der Schule' ?", answers: ["in die Schule = direction, in der Schule = lieu", "in die Schule = lieu, in der Schule = direction", "pas de différence", "les deux sont direction"], correct: 0, explanation: "accusatif pour direction, datif pour lieu." },
      { type: "mcq", visual: "🎁", question: "Traduisez 'Il est à la banque.' (bei)", answers: ["Er ist bei der Bank", "Er ist bei die Bank", "Er ist bei dem Bank", "Er ist bei den Bank"], correct: 0, explanation: "bei + datif." },
      { type: "mcq", visual: "🎁", question: "Complétez : 'Wir fahren ___ dem Meer.' (à la mer)", answers: ["ans", "an den", "an der", "an das"], correct: 0, explanation: "ans Meer = an das Meer (accusatif direction). Mais ici c'est 'ans', attention." },
      { type: "input", visual: "🎁", question: "Complétez : 'Er sitzt ___ seinem Schreibtisch.' (à son bureau)", correct: "an", explanation: "an + datif : an seinem Schreibtisch." }
    ],
    // Level 5 : synthèse et verbes particuliers
    [
      { type: "mcq", visual: "🎁", question: "Le verbe 'antworten' (répondre) se construit avec quel cas ?", answers: ["Dativ", "Akkusativ", "Genitiv", "Nominativ"], correct: 0, explanation: "jemandem antworten." },
      { type: "mcq", visual: "🎁", question: "Complétez : 'Bitte antworte ___ !' (moi)", answers: ["mir", "mich", "ich", "mir"], correct: 0, explanation: "antworten + datif." },
      { type: "mcq", visual: "🎁", question: "Traduisez 'Elle manque à ses parents.' (fehlen)", answers: ["Sie fehlt ihren Eltern", "Sie fehlt ihre Eltern", "Sie fehlt ihren Eltern", "Sie fehlt ihre Eltern"], correct: 0, explanation: "fehlen + datif : ihren Eltern." },
      { type: "mcq", visual: "🎁", question: "Le verbe 'gratulieren' (féliciter) se construit avec quel cas ?", answers: ["Dativ", "Akkusativ", "Genitiv", "Nominativ"], correct: 0, explanation: "jemandem gratulieren." },
      { type: "mcq", visual: "🎁", question: "Complétez : 'Ich gratuliere ___ zum Geburtstag.' (toi)", answers: ["dir", "dich", "du", "dir"], correct: 0, explanation: "dir." },
      { type: "mcq", visual: "🎁", question: "Traduisez 'Cela me plaît.' (gefallen)", answers: ["Das gefällt mir", "Das gefällt mich", "Das gefällt mir", "Das gefällt ich"], correct: 0, explanation: "gefallen + datif." },
      { type: "mcq", visual: "🎁", question: "Quel est le datif du nom 'der Herr' ?", answers: ["dem Herrn", "den Herrn", "des Herrn", "der Herr"], correct: 0, explanation: "Herr est un nom faible : dem Herrn." },
      { type: "mcq", visual: "🎁", question: "Complétez : 'Ich helfe ___ Jungen.' (au garçon)", answers: ["dem", "den", "der", "das"], correct: 0, explanation: "dem Jungen (Junge est faible)." },
      { type: "mcq", visual: "🎁", question: "Traduisez 'Nous allons au cinéma.' (ins Kino)", answers: ["Wir gehen ins Kino", "Wir gehen im Kino", "Wir gehen in dem Kino", "Wir gehen in den Kino"], correct: 0, explanation: "direction → accusatif : ins Kino." },
      { type: "input", visual: "🎁", question: "Complétez : 'Sie schreibt ___ Freund einen Brief.' (à son ami)", correct: "ihrem", explanation: "ihrem Freund (datif)." }
    ]
  ]
},

// ─────────────────────────────────────────────────────────────────
// NOTION 9 — Genitiv (complément du nom)
// ─────────────────────────────────────────────────────────────────
{
  id: "genitiv",
  label: "Genitiv — le complément du nom",
  icon: "📎",
  lesson: {
    formula: "Genitiv = complément du nom | Wessen? | article défini : des, der, des, der",
    text: "Le génitif est le cas de la possession ou de l’appartenance. Il répond à la question 'wessen?' (à qui ? / de qui ?). En français, il correspond souvent à la préposition 'de'."
  },
  fullBlocks: [
    {
      type: "definition",
      title: "📌 Équivalent français",
      text: "Le génitif correspond au <strong>complément du nom</strong> introduit par 'de' en français. Il indique la possession ou l’appartenance.<br><br>Exemples :<br>• Das Auto <strong>des Mannes</strong> → La voiture <strong>de l’homme</strong>.<br>• Die Tasche <strong>der Frau</strong> → Le sac <strong>de la femme</strong>.<br>• Das Haus <strong>des Kindes</strong> → La maison <strong>de l’enfant</strong>."
    },
    {
      type: "formula",
      title: "🔑 Tableau des articles définis (Genitiv)",
      formula: "┌─────────────┬───────────────┐\n│   Genre     │  Artikel def. │\n├─────────────┼───────────────┤\n│ masculin    │ des           │\n│ féminin     │ der           │\n│ neutre      │ des           │\n│ pluriel     │ der           │\n└─────────────┴───────────────┘",
      text: "Masculin/neutre : des + -s au nom (sauf noms terminés par -s, -ß, -x, -z)."
    },
    {
      type: "formula",
      title: "🔑 Tableau des articles indéfinis (Genitiv)",
      formula: "┌─────────────┬───────────────┐\n│   Genre     │  Artikel indef.│\n├─────────────┼───────────────┤\n│ masculin    │ eines         │\n│ féminin     │ einer         │\n│ neutre      │ eines         │\n│ pluriel     │ (kein Artikel)│\n└─────────────┴───────────────┘",
      text: "Masculin/neutre : eines + -s au nom."
    },
    {
      type: "formula",
      title: "🔑 Déclinaison des adjectifs (Genitiv)",
      formula: "┌────────────────┬──────────────────┬──────────────────┬──────────────────┐\n│   Genre        │ après def. (des) │ après indef. (eines)│ sans article     │\n├────────────────┼──────────────────┼──────────────────┼──────────────────┤\n│ masculin       │ -en               │ -en               │ -en              │\n│ féminin        │ -en               │ -en               │ -er              │\n│ neutre         │ -en               │ -en               │ -en              │\n│ pluriel        │ -en               │ -en               │ -er              │\n└────────────────┴──────────────────┴──────────────────┴──────────────────┘",
      text: "Exemples : des großen Mannes, eines großen Mannes, großen Mannes ; der schönen Frau, einer schönen Frau, schöner Frau."
    },
    {
      type: "example",
      title: "📜 Exemples de phrases",
      text: "• Die Farbe <strong>des Himmels</strong> ist blau. → La couleur du ciel est bleue.<br>• Das Haus <strong>meiner Eltern</strong> ist alt. → La maison de mes parents est vieille.<br>• Die Arbeit <strong>eines Lehrers</strong> ist anstrengend. → Le travail d’un professeur est fatigant.<br>• Die Schönheit <strong>der Natur</strong> beeindruckt mich. → La beauté de la nature m’impressionne."
    },
    {
      type: "warning",
      title: "⚠️ Remarques",
      text: "• À l’oral, on utilise souvent 'von' + datif à la place du génitif : das Auto von dem Mann.<br>• Certaines prépositions exigent le génitif : während, trotz, wegen, statt, etc.<br>• Les noms masculins et neutres prennent un -s au génitif (des Mannes, des Kindes)."
    }
  ],
  levels: [
    // Level 1 : articles définis et indéfinis
    [
      { type: "mcq", visual: "📎", question: "Quel est l'article défini masculin au génitif ?", answers: ["des", "dem", "den", "der"], correct: 0, explanation: "Masculin génitif : des." },
      { type: "mcq", visual: "📎", question: "Quel est l'article défini féminin au génitif ?", answers: ["der", "die", "des", "den"], correct: 0, explanation: "Féminin génitif : der." },
      { type: "mcq", visual: "📎", question: "Complétez : 'Das Auto ___ Mannes.' (de l'homme)", answers: ["des", "dem", "den", "der"], correct: 0, explanation: "des Mannes." },
      { type: "mcq", visual: "📎", question: "Quelle question pose-t-on pour trouver le génitif ?", answers: ["Wessen?", "Wem?", "Wen?", "Wer?"], correct: 0, explanation: "Wessen? = génitif." },
      { type: "mcq", visual: "📎", question: "Quel est l'article indéfini masculin au génitif ?", answers: ["eines", "einen", "einem", "ein"], correct: 0, explanation: "eines." },
      { type: "mcq", visual: "📎", question: "Complétez : 'Die Tochter ___ Frau.' (de la femme)", answers: ["der", "die", "des", "den"], correct: 0, explanation: "der Frau." },
      { type: "mcq", visual: "📎", question: "Traduisez 'le chapeau de l'homme'", answers: ["der Hut des Mannes", "der Hut dem Mann", "der Hut den Mann", "der Hut der Mann"], correct: 0, explanation: "des Mannes." },
      { type: "mcq", visual: "📎", question: "Quelle est la marque du génitif pour les noms masculins ?", answers: ["-s (ou -es)", "-en", "-n", "pas de marque"], correct: 0, explanation: "Les noms masculins et neutres ajoutent -s ou -es." },
      { type: "mcq", visual: "📎", question: "Complétez : 'Das Buch ___ Kindes.' (de l'enfant)", answers: ["des", "dem", "den", "der"], correct: 0, explanation: "des Kindes." },
      { type: "input", visual: "📎", question: "Donnez l'article défini pluriel au génitif :", correct: "der", explanation: "der (die → der au génitif pluriel)." }
    ],
    // Level 2 : adjectifs épithètes
    [
      { type: "mcq", visual: "📎", question: "Quelle est la terminaison de l'adjectif après 'des' au masculin ?", answers: ["-en", "-e", "-er", "-es"], correct: 0, explanation: "des großen Mannes." },
      { type: "mcq", visual: "📎", question: "Complétez : 'Die Farbe ___ blauen Himmels.' (du ciel bleu)", answers: ["des", "der", "dem", "den"], correct: 0, explanation: "des blauen Himmels." },
      { type: "mcq", visual: "📎", question: "Complétez : 'Das Haus ___ alten Dame.' (de la vieille dame)", answers: ["der", "die", "des", "den"], correct: 0, explanation: "der alten Dame." },
      { type: "mcq", visual: "📎", question: "Traduisez 'le travail d'un professeur expérimenté'", answers: ["die Arbeit eines erfahrenen Lehrers", "die Arbeit eines erfahrener Lehrer", "die Arbeit eines erfahrenen Lehrer", "die Arbeit eines erfahrenem Lehrers"], correct: 0, explanation: "eines erfahrenen Lehrers." },
      { type: "mcq", visual: "📎", question: "Quelle est la terminaison de l'adjectif sans article au génitif masculin ?", answers: ["-en", "-er", "-es", "-em"], correct: 0, explanation: "großen Mannes." },
      { type: "mcq", visual: "📎", question: "Complétez : 'Die Entwicklung ___ modernen Technologie.' (de la technologie moderne)", answers: ["der", "die", "des", "den"], correct: 0, explanation: "der modernen Technologie." },
      { type: "mcq", visual: "📎", question: "Traduisez 'la maison de mes parents âgés'", answers: ["das Haus meiner alten Eltern", "das Haus meiner alten Eltern", "das Haus meinen alten Eltern", "das Haus meiner alten Eltern"], correct: 0, explanation: "meiner alten Eltern." },
      { type: "mcq", visual: "📎", question: "Complétez : 'Die Meinung ___ klugen Mannes.' (de l'homme intelligent)", answers: ["des", "der", "dem", "den"], correct: 0, explanation: "des klugen Mannes." },
      { type: "mcq", visual: "📎", question: "Complétez : 'Die Bedeutung ___ guten Ausbildung.' (d'une bonne formation)", answers: ["einer", "eines", "eine", "einem"], correct: 0, explanation: "einer guten Ausbildung." },
      { type: "input", visual: "📎", question: "Complétez : 'Die Straße ___ alten Stadt.' (de la vieille ville)", correct: "der", explanation: "der alten Stadt." }
    ],
    // Level 3 : pronoms possessifs et noms propres
    [
      { type: "mcq", visual: "📎", question: "Comment dit-on 'le livre de mon père' ?", answers: ["das Buch meines Vaters", "das Buch meinem Vater", "das Buch meinen Vater", "das Buch meiner Vater"], correct: 0, explanation: "meines Vaters (génitif)." },
      { type: "mcq", visual: "📎", question: "Traduisez 'la voiture de ma mère'", answers: ["das Auto meiner Mutter", "das Auto meiner Mutter", "das Auto meinem Mutter", "das Auto meine Mutter"], correct: 0, explanation: "meiner Mutter." },
      { type: "mcq", visual: "📎", question: "Complétez : 'Das ist ___ Freundin.' (la copine de mon frère)", answers: ["die Freundin meines Bruders", "die Freundin meinem Bruder", "die Freundin meinen Bruder", "die Freundin meiner Bruders"], correct: 0, explanation: "meines Bruders." },
      { type: "mcq", visual: "📎", question: "Comment forme-t-on le génitif d'un nom propre masculin ?", answers: ["-s (ou -ens)", "-en", "-n", "pas de marque"], correct: 0, explanation: "Peters Auto." },
      { type: "mcq", visual: "📎", question: "Traduisez 'la maison de Thomas'", answers: ["das Haus von Thomas", "das Haus Thomas'", "das Haus des Thomas", "das Haus Thomas's"], correct: 0, explanation: "Thomas' Haus (apostrophe)." },
      { type: "mcq", visual: "📎", question: "Complétez : 'Die Eltern ___ Kindes sind nett.' (de l'enfant)", answers: ["des", "dem", "den", "der"], correct: 0, explanation: "des Kindes." },
      { type: "mcq", visual: "📎", question: "Quel est le génitif de 'der Professor' ?", answers: ["des Professors", "dem Professor", "den Professor", "der Professor"], correct: 0, explanation: "des Professors." },
      { type: "mcq", visual: "📎", question: "Traduisez 'la bibliothèque de l'université'", answers: ["die Bibliothek der Universität", "die Bibliothek der Universität", "die Bibliothek des Universität", "die Bibliothek den Universität"], correct: 0, explanation: "der Universität." },
      { type: "mcq", visual: "📎", question: "Complétez : 'Die Werke ___ großen Dichters.' (du grand poète)", answers: ["des", "der", "dem", "den"], correct: 0, explanation: "des großen Dichters." },
      { type: "input", visual: "📎", question: "Donnez le génitif de 'mein Vater' :", correct: "meines Vaters", explanation: "meines Vaters." }
    ],
    // Level 4 : prépositions génitives
    [
      { type: "mcq", visual: "📎", question: "Quelle préposition exige le génitif ?", answers: ["während", "für", "mit", "nach"], correct: 0, explanation: "während (pendant) est une préposition génitive." },
      { type: "mcq", visual: "📎", question: "Complétez : '___ des Spiels blieb er ruhig.' (Pendant)", answers: ["Während", "Trotz", "Wegen", "Statt"], correct: 0, explanation: "während + génitif." },
      { type: "mcq", visual: "📎", question: "Traduisez 'Malgré la pluie' (trotz)", answers: ["trotz des Regens", "trotz dem Regen", "trotz den Regen", "trotz der Regen"], correct: 0, explanation: "trotz + génitif." },
      { type: "mcq", visual: "📎", question: "Complétez : '___ des schlechten Wetters blieben wir zu Hause.' (À cause de)", answers: ["Wegen", "Trotz", "Während", "Statt"], correct: 0, explanation: "wegen + génitif." },
      { type: "mcq", visual: "📎", question: "Traduisez 'Au lieu de l'école' (statt)", answers: ["statt der Schule", "statt der Schule", "statt die Schule", "statt dem Schule"], correct: 0, explanation: "statt + génitif." },
      { type: "mcq", visual: "📎", question: "Complétez : '___ des Lehrers sprach der Direktor.' (À la place du professeur)", answers: ["Statt", "Trotz", "Wegen", "Während"], correct: 0, explanation: "statt + génitif." },
      { type: "mcq", visual: "📎", question: "Quelle est la forme correcte après 'trotz' ?", answers: ["trotz des Wetters", "trotz dem Wetter", "trotz den Wetter", "trotz der Wetter"], correct: 0, explanation: "trotz + génitif." },
      { type: "mcq", visual: "📎", question: "Traduisez 'pendant des années'", answers: ["während Jahren", "während Jahre", "während der Jahre", "während den Jahren"], correct: 0, explanation: "während + génitif pluriel : der Jahre." },
      { type: "mcq", visual: "📎", question: "Complétez : '___ des Krieges lebten sie in Angst.' (Pendant)", answers: ["Während", "Trotz", "Wegen", "Statt"], correct: 0, explanation: "während + génitif." },
      { type: "input", visual: "📎", question: "Complétez : '___ des Films ist er eingeschlafen.' (Pendant)", correct: "Während", explanation: "Während des Films." }
    ],
    // Level 5 : synthèse et alternatives
    [
      { type: "mcq", visual: "📎", question: "À l'oral, comment exprime-t-on souvent la possession ?", answers: ["von + datif", "dem + datif", "des + génitif", "zu + datif"], correct: 0, explanation: "das Auto von dem Mann." },
      { type: "mcq", visual: "📎", question: "Traduisez 'la voiture de mon ami' (version orale)", answers: ["das Auto von meinem Freund", "das Auto meines Freundes", "das Auto meinem Freund", "das Auto meinen Freund"], correct: 0, explanation: "von + datif." },
      { type: "mcq", visual: "📎", question: "Quel est le génitif de 'die Leute' (les gens) ?", answers: ["der Leute", "den Leuten", "die Leute", "des Leute"], correct: 0, explanation: "der Leute." },
      { type: "mcq", visual: "📎", question: "Complétez : 'Das ist das Haus ___.' (de mes grands-parents)", answers: ["meiner Großeltern", "meinen Großeltern", "meine Großeltern", "meines Großeltern"], correct: 0, explanation: "meiner Großeltern (génitif pluriel)." },
      { type: "mcq", visual: "📎", question: "Traduisez 'à cause du bruit' (wegen)", answers: ["wegen des Lärms", "wegen dem Lärm", "wegen den Lärm", "wegen der Lärm"], correct: 0, explanation: "wegen + génitif (ou datif à l'oral)." },
      { type: "mcq", visual: "📎", question: "Le nom 'der Name' (le nom) a quel génitif ?", answers: ["des Namens", "des Namen", "dem Namen", "den Namen"], correct: 0, explanation: "des Namens (nom faible)." },
      { type: "mcq", visual: "📎", question: "Complétez : 'Die Farbe ___ Autos ist rot.' (de la voiture)", answers: ["des", "der", "dem", "den"], correct: 0, explanation: "des Autos." },
      { type: "mcq", visual: "📎", question: "Traduisez 'le fils de mon voisin'", answers: ["der Sohn meines Nachbarn", "der Sohn meinem Nachbarn", "der Sohn meinen Nachbarn", "der Sohn meiner Nachbarn"], correct: 0, explanation: "meines Nachbarn." },
      { type: "mcq", visual: "📎", question: "Quelle est la forme correcte : 'wegen ___ Wetters' (à cause du mauvais temps) ?", answers: ["des schlechten", "dem schlechten", "den schlechten", "der schlechten"], correct: 0, explanation: "des schlechten Wetters." },
      { type: "input", visual: "📎", question: "Complétez : 'Die Tür ___ Hauses ist offen.' (de la maison)", correct: "des", explanation: "des Hauses." }
    ]
  ]
}
  ]
};