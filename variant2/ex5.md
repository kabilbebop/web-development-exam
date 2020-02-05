## Exercice 5 : ReactJS

Dans un nouveau terminal, compilez les fichiers du répertoire ex5 avec la commande : 

```
npx babel --watch ex5 --out-dir . --presets react-app/prod
```

Cette commande ne rend pas la main, elle compile les fichiers de /ex5/** dès que ceux-ci sont modifiés : 

/ex5/ex5.App.js     compilé en     /ex5.App.js
/ex5/ex5.User.js    compilé en     /ex5.User.js

**Vous ne devez donc modifier que les fichiers du répertoire /ex5**

Si ce n'est pas déjà fait, lancer le serveur http-serve avec la commande :

```
npx http-serve .
```

Ouvrir dans un navigateur http://127.0.0.1:8080/ex5.html

Vous devez voir s'afficher une page avec 3 colonnes "Name, City, Age".

1. Modifier ex5/ex5.App.js et ex5/ex5.User.js pour faire en sorte que chaque user du state de AppComponent soit correctement affiché
    
