Génère un fichier index.js en JavaScript TÉLÉCHARGEABLE.

⚠️ La structure doit être STRICTEMENT la suivante :

export default {
  id: 'nom-du-chapitre',
  title: 'Nom du chapitre',
  description: 'mots clés du chapitre',
  icon: 'emoji',
  xpMax: 130,
  notions: [
    {
      id: 'nom-notion',
      label: 'Nom de la notion',
      lesson: {
        formula: '...',
        text: '...',
        example: '...'
      },
      fullBlocks: [
        {
          type: 'definition',
          title: '...',
          text: '...'
        },
        {
          type: 'formula',
          title: '...',
          formula: '...',
          text: '...'
        },
        {
          type: 'example',
          title: '...',
          text: '...'
        },
        {
          type: 'demo',
          title: '...',
          text: '...'
        }
      ],
      levels: [
        [
          {
            type: 'mcq',
            question: '...',
            answers: ['bonne réponse', 'mauvaise', 'mauvaise', 'mauvaise'],
            correct: 0,
            explanation: 'explication claire'
          }
        ]
      ]
    }
  ]
};

📚 CONTENU À GÉNÉRER

Le chapitre doit être exactement :
id: 'fonctions-elliptiques',
title: 'Fonctions elliptiques',
description: 'fonctions doublement périodiques, réseau de périodes, Weierstrass, Jacobi, courbes elliptiques',
icon: '🔷',
xpMax: 130,

Il doit contenir les 10 notions suivante , correspondant exactement aux parties du chapitre.


Intégrales elliptiques – Les fonctions elliptiques apparaissent comme inverses des intégrales elliptiques issues du calcul d’arcs d’ellipses.

Définition d’une fonction elliptique – Une fonction elliptique est une fonction méromorphe doublement périodique sur le plan complexe.

Réseau de périodes – Les périodes d’une fonction elliptique forment un réseau discret engendré par deux périodes complexes non colinéaires.

Fonction elliptique de Weierstrass – La fonction ℘ de Weierstrass est l’exemple fondamental de fonction elliptique associée à un réseau.

Équation différentielle de ℘ – La fonction ℘ satisfait une équation différentielle du type (℘')² = 4℘³ − g₂℘ − g₃.

Fonctions elliptiques de Jacobi – Les fonctions sn, cn et dn généralisent les fonctions trigonométriques dans le cadre elliptique.

Structure algébrique – Les fonctions elliptiques sont liées aux courbes elliptiques définies par des équations cubiques.

Groupe des points d’une courbe elliptique – Les points d’une courbe elliptique forment un groupe abélien pour une loi géométrique d’addition.

Invariants modulaires – Les invariants g₂, g₃ et le discriminant caractérisent la structure du réseau associé.

Applications modernes – Les fonctions et courbes elliptiques interviennent en cryptographie, théorie des nombres et géométrie algébrique.

🎯 CONTRAINTES OBLIGATOIRES
📏 Taille du fichier

    Minimum 1200 lignes

📊 Pour CHAQUE notion :

    6 niveaux dans levels

    Chaque niveau contient exactement 10 questions

    Difficulté progressive

    Niveau Première → Maths Expertes → L1

    Mettre un commentaire AVANT la section L1 :

// =======================
// ===== Niveau L1 =======
// =======================

🧠 STRUCTURE DES QUESTIONS

Deux types de questions sont AUTORISÉS dans le projet :
🔹 1️⃣ Question de type INPUT

Format obligatoire :

{
  type: 'input',
  visual: '∫',
  question: '∫₀¹ 1 dx calculé par Riemann (n rectangles). La limite est ?',
  correct: '1',
  explanation: 'Explication détaillée et rigoureuse du raisonnement.'
}

🔹 2️⃣ Question de type QCM

Format obligatoire :

{
  type: 'mcq',
  visual: '∞',
  question: '∫₀² x² dx par Riemann : lim Σ (i·2/n)²·(2/n) vaut :',
  answers: ['8/3','4/3','2','1'],
  correct: 0,
  explanation: 'Explication complète avec justification mathématique.'
}

⚠️ RÈGLES IMPORTANTES POUR LES QUESTIONS

Pour les QCM dans ce chapitre complexes, la structure doit être EXACTEMENT :

{
  type: 'mcq',
  question: '...',
  answers: ['bonne réponse', 'mauvaise', 'mauvaise', 'mauvaise'],
  correct: 0,
  explanation: 'explication claire et pédagogique'
}

Règles obligatoires :

    ✅ Bonne réponse toujours à l’index 0

    ✅ Toujours 4 réponses

    ✅ Mauvaises réponses plausibles

    ❌ Aucun champ supplémentaire

    ❌ Aucun commentaire dans les questions

    ✅ Explication mathématiquement rigoureuse

    ✅ Explication réellement pédagogique (pas une phrase vide)

📘 STRUCTURE DES BLOCS DE COURS

Les cours doivent être très pédagogiques, progressifs et clairs. Fait des graphique.
🔷 fullBlocks utilisables :

Blocs autorisés :

definition
formula
example
warning
technique
demo
graph
image

🔹 Bloc graph

{
  type:'graph',
  title:'...',
  svgContent:'...',
  caption:'...',
  text:'...'
}

🔹 Bloc image

{
  type:'image',
  title:'...',
  src:'...',
  caption:'...',
  text:'...'
}

🔹 Structure levels

    levels = tableau de 6 tableaux

    levels[0] = niveau 1

    ...

    levels[5] = niveau 6

Si absence → fallback possible :

exercises:[...]

🎓 EXIGENCE PÉDAGOGIQUE

Les cours doivent être :

    Très clairs

    Structurés

    Progressifs

    Avec vraies démonstrations

    Explications détaillées

    Exemples concrets

    Mise en garde sur erreurs classiques

    Lien algébrique ↔ géométrique

    Adapté Terminal → L1

🚫 INTERDIT

    Pas de réponses approximatives

    Pas d’explications vagues

    Pas d’abréviation non expliquée

    Pas de réponse sans justification

    Pas de champ supplémentaire dans les questions

    Pas de modification de la structure export

Ci joint un fichier modèle