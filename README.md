Le but de l’exercice est de compléter la fonction converter qui se trouve dans app.js

Cette fonction doit retourner la formule chimique brute à partir de la formule semi-développée.
	 Ex : « H-O-O-H » ====> H2O2

Dans le cadre de ce test, nous n’utilisons que des atomes ayant comme nomenclature une seule lettre (C, H, O, N, …). 
Sont donc exclus tous les atomes à plusieurs lettres (Fe, Ar, Kr, …)

La formule semi-développée ne comportera que des liaisons simples avec tiret (-).
Les doubles liaisons (O=C=O) seront donc exclues.

L’ordre d’apparition des atomes reste le même dans les deux formules.
	Ex : « H-O-O-H » ====> H2O2 et non pas O2H2

Aucune molécule ionisée n’est présente dans ce test (Ex : CH4+).

Votre objectif est donc de compléter la fonction en vue de réussir les tests unitaires (test/test.js). Vous avez a votre disposition toutes les méthodes de base et rien ne vous interdit l’installation de packages supplémentaires, bien que l’exercice puisse être réalisé sans.

Les tests unitaires peuvent être lancés via le menu d’exécution présent en haut (flèche verte) ou dans la console (npm run test).

Vous disposez de 45 minutes pour réussir ce test.

Good luck!
