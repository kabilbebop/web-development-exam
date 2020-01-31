# Examen de développement Web

Pour cet examen, utiliser une version récente de Chrome ou Firefox et NodeJS.

## Exercice 5 : ReactJS

Transpilez les fichiers du répertoire ex5 avec la commande : 

```
npx babel --watch ex5 --out-dir . --presets react-app/prod
```

Lancer le serveur http-serve avec la commande :

```
npx http-serve .
```

Ouvrir dans un navigateur http://127.0.0.1:8080/ex5.html

Vous devez voir s'afficher une page avec 3 colonnes "Name, City, Age" et un bouton "Add year".

1. Faire en sorte que user-component affiche bien les informations name, city, age
2. Quand on clique sur le bouton "Add year", la propriété age de tous les user-components doivent ête incrémentées de 1


