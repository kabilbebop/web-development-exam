## Exercice 3 : Web components 

Lancer le serveur http-serve avec la commande :

```
npx http-serve .
```

Ouvrir dans un navigateur http://127.0.0.1:8080/ex3.html

Vous devez voir s'afficher une page avec :
- 3 colonnes "firstname, lastname', birthdate" 
- des lignes correspondant aux user-components, un bouton "Add year" qui incrémente la date de naissance
- un libellé "Birthdate of the youngest user"

1. Compléter ex3.html pour que l'information "Birthdate of the youngest user" soit mise à jour avec la date de naissance la plus récente lorsque l'on clique plusieurs fois sur "Add year". 
Par exemple :
- je clique 3 fois sur le bouton "Add year" de "John Snow"
- sa date de naissance passe à "1998-02-06" 
- il devient le plus jeune de la liste
=> donc la date de naissance doit être mise à jour en bas avec "1998-02-06"
