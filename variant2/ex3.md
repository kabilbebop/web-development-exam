## Exercice 3 : Web components 

Lancer le serveur http-serve avec la commande :

```
npx http-serve .
```

Ouvrir dans un navigateur http://127.0.0.1:8080/ex3.html

Vous devez voir s'afficher une page avec 3 colonnes "firstname, lastname', birthdate" et un bouton "Add year".

1. Faire en sorte que user-component affiche bien les informations "firstname, lastname, birthdate"
2. Quand on clique sur le bouton "Add year", la propriété birthdate de tous les user-components sont incrémentées de 1 année.
   Compléter le code de ex3.html pour que l'information "Birthdate of the youngest user" soit mise à jour avec la date la plus récente lorsque l'on clique plusieurs fois sur "Add year" sur l'une des lignes.
