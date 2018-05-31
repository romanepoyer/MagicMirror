![Polytech](http://www.polytechnice.fr/jahia/jsp/jahia/templates/inc/img/polytech_nice-sophia.png)

Ce projet est réalisé dans le cadre de la formation de prépa intégrée de Polytech'Nice Sophia
# MagicMirror

        • Description de notre projet 

Notre projet est intitulé MagicMiror. Nous avons eu l’idée d’un miroir connecté pour plusieurs raisons. Tout d’abord, nous passons tous un certain temps à nous préparer, et nous avons pensé qu’un miroir nous donnant des informations alors que l’on se regarde dedans était un bon moyen de passer moins de temps à se préparer. De plus, nous pensons que bientôt, tout le monde sera équipé de cette technologie, et elle fera partie de notre quotidien. Nous avons donc voulu participer à cette évolution, et concevoir notre propre miroir afin de le doter de fonctionnalisés adaptées à nos besoins. 


• Description de notre projet 
        

Notre projet est intitulé MagicMiror. Nous avons eu l’idée d’un miroir connecté pour plusieurs raisons. Tout d’abord, nous passons tous un certain temps à nous préparer, et nous avons pensé qu’un miroir nous donnant des informations alors que l’on se regarde dedans était un bon moyen de passer moins de temps à se préparer. De plus, nous pensons que bientôt, tout le monde sera équipé de cette technologie, et elle fera partie de notre quotidien. Nous avons donc voulu participer à cette évolution, et concevoir notre propre miroir afin de le doter de fonctionnalisés adaptées à nos besoins. 

 

        • Présentation du matériel

Voici les différents composants que nous avons utilisé pour réaliser notre projet :

•D’un point de vue Electronique :  

La carte Raspberry Pi 3 : cette carte électronique est le coeur de notre projet, elle nous permet de stocker l’information.  Elle fonctionne comme un ordinateur. 
Il faut de plus la munir d’une carte micro SD afin de stocker l’information et le logiciel d’exploitation de la Raspberry. 
Pour programmer cette carte, il faut aussi se munir d’un clavier et d’une souris dotés d’un câble USB. 

Un écran adapté à la Raspberry : cet écran nous permet de visualiser nos différentes fonctionnalités. Il est équipé de boutons de commandes permettant de l’allumer. 

Un câble HDMI qui nous permet de relier la carte Raspberry à l’écran. 

•Du point de vue « bricolage » : 

Des tasseaux de bois : nous avons réaliser le cadre du miroir grâce a des tasseaux de bois. 

Du film miroir sans teint afin de réaliser l’effet miroir

Une plaque en plexiglass

        •Réalisation 



Nous avons d’abord découvert la carte Raspberry. Nous avons mis un certain temps pour la prendre en main et comprendre les différentes fonctionnalités qu’elle pouvait avoir. 
Nous avons ensuite installé l’interface Noodle Pi spécialement conçue pour Raspberry. Avec cette interface et un écran, notre carte Raspberry est un ordinateur. 
Nous avons choisit de créer un site web dynamique qui nous permet d’ajouter, de supprimer et de modifier des fonctionnalisés selon les envies et le besoin chacun. 

![Codage](/Doc/image/codereal.jpg)


Nous avons codé les différentes fonctionnalités grâce à plusieurs langages informatiques : Java Script, HTML et css. 
Nous avons tout d’abord généré un code qui permet d’afficher l’heure, avec les secondes qui défilent. Nous avons ensuite fait affiché la date du jour. 
Afin d’afficher la météo, nous avons récupéré un « widget » sur internet. De la même manière, nous avons récupérer le flux RSS de BFM.


Nous avons ensuite ajouté un compteur de caleçons. Cette fonctionnalité permet de savoir, selon la date du jour, combien sous-vêtement propre il reste. Nous sommes partis de la base de 15 caleçons. Tous les 15 jours, le miroir émet un message sonore et un message d’alerte indiquant qu’il faut faire une lessive. 
Nous avons eu l’idée de faire défiler des « proverbes » sur l’écran afin de donner de la motivation à la personne qui se regarde dans le miroir. 
Nous avons programmé un message sonore : le miroir nous dit bonjour, et nous annonce qu’il va jouer de la musique. A la fin du message une des musique que nous avons téléchargée est jouée.
Tous les sons sont transmis sur une enceinte qui est connectée en Bluetooth à la Raspberry. 
Grâce à HTML et css, nous avons disposé les différents éléments de la manière la plus esthétique et optimisée par rapport à la taille de l’écran.





Dans un deuxième temps, nous avons réalisé le cadre en bois à l’aide de tasseaux aux dimensions de la plaque de plexiglass que nous avions. Nous avons ensuite collé le film miroir sans teint sur la plaque de plexiglass, puis nous l’avons fixé dans le cadre. 
Nous avons étudié les différentes possibilités pour l’orientation du miroir, compte tenue de la taille du miroir et de celle de l’écran. Nous avons opté pour un miroir en orientation portrait, avec l’écran en bas du cadre. 








Nous avons par ailleurs été obligé de découper le film miroir sans teint au niveau de l’écran car le contraste de ce dernier était trop faible, et la visibilité était donc médiocre. Pour augmenter un peu plus le contraste, nous avons aussi collé une feuille de papier là ou l’écran n’est pas visible pour qu’aucune lumière ne passe. 
Nous avons ensuite fixé tous les composants électronique à l’arrière de l’écran à l’aide de scotch et de pâte à fixe. 
