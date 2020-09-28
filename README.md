Le but de l’exercice est de compléter la fonction converter qui se trouve dans app.js

Cette fonction doit retourner la formule brute à partir de la formule semi développé
	 Ex : « H-O-O-H » => H2O2

Dans ce test nous n’utilisons que des atome ayant comme nomenclature une seule lettre ( C, H, O, N …) sont donc exclu tout les atome en comportant plusieurs ( Fe, Ar, Kr …)

La formule semi développé ne comportera que des liaison simple (-) seront donc exclu des test les double liaison ( O=C=O )

Afin de facilité le test l’ordre d’apparition des atomes reste le même dans les deux formules
	Ex : « H-O-O-H » => H2O2 et non pas O2H2

Aucune molécule ionisée n’est présente dans ce test (CH4+)

Votre objectif est donc de complété la fonction en vue de réussir les tests unitaires (test/test.js). Vous avez a votre disposition tout les méthodes de base et rien ne vous interdit l’installation de package supplémentaire bien que l’exercice puisse être réalisé sans

Les tests unitaires peuvent être lancé via le menu d’exécution présent en haut (flèche verte) ou dans la console (npm run test)