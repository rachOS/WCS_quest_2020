# Exercices sur map et filter

## Installation

* **D'abord** forker ce repo (bouton ci-dessus à droite)
* Tu seras alors redirigé vers la copie créée sur ton compte, dont tu devras récupérer l'URL pour la **cloner** sur ton ordinateur.
* **Si** tu as cloné d'abord sans forker, pas de panique, voir à la fin (mais lis d'abord les instructions la prochaine fois :wink:)
* Une fois le repo cloné, se placer dans le répertoire `array-map-filter`, puis lancer `npm install`

## Utilisation

**Absolument lire** la partie sur "réactiver les tests" dans cette section !

### Lancer les tests

* Il y a deux séries d'exercices, situées dans `map` et `filter`.
* L'ordre importe peu entre `map` et `filter`.
* Pour lancer les tests: `npm test`

### Réactiver les tests

Tous les tests sont désactivés au début (nom du test en bleu clair si tu fais `npm test`), pour ne pas "polluer" le terminal avec les messages d'erreurs dûs au fait que les exercices sont non-résolus.

**Les tests se réactivent 1 par 1**:

* soit en remplaçant `xdescribe` par `describe`, dans le fichier de test correspondant à l'exercice sur lequel on travaille (par exemple, `tests/filter1.test.js` si on travaille sur `filter/ex1.js`).
* soit plus simplement en lançant (avec **Git Bash** sous Windows, ou le terminal Linux/MacOS), depuis la racine du repo `array-map-filter` : `./enable SERIE NUMERO`, en remplaçant `SERIE` par `map` ou `filter` et `NUMERO` par le n° de l'exercice. Par exemple, `./enable map 2` pour activer les tests du 2ème exercice de la série `map`.
* On peut également les activer / désactiver tous d'un coup, via `./enableAll` et `./disableAll`

## HELP! J'ai cloné sans forker !

* Pas de panique: tu peux maintenant forker le dépôt
* Pour lier ton dépôt à ton fork, au lieu du dépôt initial, il faut éditer le fichier `.git/config`.
* Dans ce fichier, sous la ligne `[remote "origin"]`, remplacer `WildCodeSchool` par ton pseudo GitHub dans l'URL `https://github.com/WildCodeSchool/array-map-filter`.
