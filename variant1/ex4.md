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

Vous devez voir s'afficher une page avec 3 colonnes "Name, City, Age" et un bouton "Add year".

1. Modifier ex4/ex4.App.js pour qu'au clic sur le bouton "Add year", la propriété age de tous les UserComponents soit incrémentée de 1



