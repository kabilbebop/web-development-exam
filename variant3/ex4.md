## Exercice 4 : ReactJS

Dans un nouveau terminal, compilez les fichiers du répertoire ex4 avec la commande : 

```
npx babel --watch ex4 --out-dir . --presets react-app/prod
```

Cette commande ne rend pas la main, elle compile les fichiers de /ex4/** dès que ceux-ci sont modifiés : 

/ex4/ex4.App.js     compilé en     /ex4.App.js
/ex4/ex4.User.js    compilé en     /ex4.User.js

**Vous ne devez donc modifier que les fichiers du répertoire /ex4**

Si ce n'est pas déjà fait, lancer le serveur http-serve avec la commande :

```
npx http-serve .
```

Ouvrir dans un navigateur http://127.0.0.1:8080/ex4.html

Vous devez voir s'afficher une page avec 3 colonnes "Name, City, Year of birth", un bouton "Add year" et le nom du plus jeune utilisateur de la liste.

1. Modifier ex4/ex4.App.js pour que le bouton "Add year" incrémente la colonne Year of birth de la même ligne.
2. A chaque modification, le nom du plus jeune utilisateur de la liste doit être mis à jour en appelant la méthode `computeYoungest()`



