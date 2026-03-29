# MathoDuo v2 — Architecture multi-fichiers

## Lancement (serveur local requis pour les modules ES6)

```bash
# Python
python3 -m http.server 8080
# → http://localhost:8080

# Node.js
npx serve .

# VS Code : extension "Live Server" → clic droit sur index.html
```

## Structure

```
mathoduo2/
├── index.html                    ← Page principale
├── styles/
│   ├── reset.css                 ← Reset + animations
│   ├── tokens.css                ← Variables CSS (couleurs, shadows...)
│   ├── layout.css                ← Sidebar, écrans, nav
│   ├── components.css            ← Tous les composants UI
│   └── screens.css               ← Onboarding + responsive desktop
├── js/
│   ├── app.js                    ← Point d'entrée + logique principale
│   ├── exercise.js               ← Moteur d'exercices
│   ├── state.js                  ← État global + localStorage
│   └── ui.js                     ← Helpers UI
├── premiere/
│   ├── suites/index.js
│   └── derivees/index.js
├── terminale/
│   ├── integrales/index.js       ← Avec bonus L1
│   ├── exponentielle/index.js
│   └── logarithme/index.js
└── l1/
    └── algebre-lineaire/index.js
```

## Ajouter un chapitre

1. Créer `terminale/probabilites/index.js` :
```js
export default {
  id: 'probabilites',
  title: 'Probabilités',
  description: 'Variables aléatoires, loi normale...',
  icon: '🎲',
  xpMax: 130,
  notions: [
    {
      id: 'va-discrete', label: 'Variables aléatoires discrètes',
      lesson: { formula: 'E(X) = Σ xᵢ·P(X=xᵢ)', text: '...', example: '...' },
      fullBlocks: [...],
      exercises: [...],
    }
  ]
};
```

2. L'importer dans `js/app.js` :
```js
import probabilites from '../terminale/probabilites/index.js';
// Puis l'ajouter dans LEVELS → terminale → chapitres: [..., probabilites]
```

## Ajouter un niveau

1. Créer le dossier et les chapitres : `l2/analyse/index.js`
2. Dans `js/app.js`, ajouter dans le tableau `LEVELS` :
```js
{
  id: 'l2',
  label: 'Licence 2',
  subtitle: 'Topologie, intégration de Lebesgue...',
  color: '#06B6D4',
  colorDark: '#0E7490',
  icon: '🔬',
  chapitres: [analyse],
}
```
