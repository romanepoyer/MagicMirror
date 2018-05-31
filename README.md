![Polytech](http://www.polytechnice.fr/jahia/jsp/jahia/templates/inc/img/polytech_nice-sophia.png)

Ce projet est réalisé dans le cadre de la formation de prépa intégrée de Polytech'Nice Sophia
# MagicMirror

        • Description de notre projet 


Notre projet est intitulé MagicMiror. Nous avons eu l’idée d’un miroir connecté pour plusieurs raisons. Tout d’abord, nous passons tous un certain temps à nous préparer, et nous avons pensé qu’un miroir nous donnant des informations alors que l’on se regarde dedans était un bon moyen de passer moins de temps à se préparer. De plus, nous pensons que bientôt, tout le monde sera équipé de cette technologie, et elle fera partie de notre quotidien. Nous avons donc voulu participer à cette évolution, et concevoir notre propre miroir afin de le doter de fonctionnalisés adaptées à nos besoins. 

![Nous](/Doc/image/face3.jpg)

 

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

![Ecran](/Doc/image/ecran.jpg)


Dans un deuxième temps, nous avons réalisé le cadre en bois à l’aide de tasseaux aux dimensions de la plaque de plexiglass que nous avions. Nous avons ensuite collé le film miroir sans teint sur la plaque de plexiglass, puis nous l’avons fixé dans le cadre. 
Nous avons étudié les différentes possibilités pour l’orientation du miroir, compte tenue de la taille du miroir et de celle de l’écran. Nous avons opté pour un miroir en orientation portrait, avec l’écran en bas du cadre. 


![Realisation](/Doc/image/Conceptionmiroir.jpg)



Nous avons par ailleurs été obligé de découper le film miroir sans teint au niveau de l’écran car le contraste de ce dernier était trop faible, et la visibilité était donc médiocre. Pour augmenter un peu plus le contraste, nous avons aussi collé une feuille de papier là ou l’écran n’est pas visible pour qu’aucune lumière ne passe. 
Nous avons ensuite fixé tous les composants électronique à l’arrière de l’écran à l’aide de scotch et de pâte à fixe. 


![derriere](/Doc/image/derriere.jpg)

![image](/Doc/image/dehors.jpg)

        • Difficultés
        
 Durant notre projet, nous avons rencontrés plusieurs difficultés, dont certaines que nous avons réussi à résoudre et d’autres non. 

Notre première difficulté a été de comprendre le fonctionnement de la carte Raspberry. Nous avons passé beaucoup de temps pour la prendre en main et installer l’interface nécessaire. 
Une fois que nous avions bien compris le fonctionnement, nous avons pu commencer à coder les différentes fonctionnalités. 

Nous avons ensuite mis du temps à réaliser le cadre du miroir car nous n’avions pas le matériel nécessaire. Nous l’avons ensuite réalisé au FabLab en une après midi. 


La plus grande difficulté pour nous a été de connecter des éléments en lien avec la carte Arduino et la carte Raspberry. Lorsque nous avons essayé, nous nous sommes rendu compte que nous y passerions beaucoup de temps, nous avons donc décider d’abandonner certaines fonctionnalités, telle que le capteur de mouvement. 

Une autre difficulté à été de réaliser tout le travail sur un petit écran. Nous avons d’abord essayé de coder sur l’ordinateur, puis de transférer le code sur la carte Raspberry, mais compte tenue de la grande différence de taille, ce n’étais pas la manière la plus pratique. Il fallait effectuer beaucoup de modifications sur le petit écran et c’était donc plus pratique de coder directement sur le miroir.


Nous avons de plus essayé d’automatiser le chargement de la page lors de l’allumage de la raspberry, mais nous n’avons pas réussi.  

Par manque de place sur l’écran, nous avons du faire une choix des fonctionnalités affichées. Nous aurions par exemple voulu placer l’emplois du temps, mais les fonctionnalité déjà présentes occupent tout l’espace.

![image](/Doc/image/photo3.jpg)

        • Perspectives et conclusion
        
Pour aller plus loin dans notre projet, nous avions pensé à plusieurs améliorations, mais malheureusement, nous n’avons pas eu le temps de les réaliser. 

Nous pensions d’abord créer un miroir de grande taille, avec un écran d’ordinateur d’environ 15 pouces. Mais lors de l’étude du poids et des contraintes pour la réalisation du cadre en bois, nous  avons réalisé qu’il faudrait de trop gros moyens. En effet le poids d’un écran d’ordinateur comparé à celui d’un écran Raspberry est largement supérieur, et un simple cadre en bois comme celui réalisé n’aurait pas supporté ces contraintes. 

De plus, au début de notre projet, nous avions en tête une grand nombre de fonctionnalités, mais par manque de temps et à cause de la complexité de certaine d’entre elles, nous avons du les abandonner. Nous aurions aimé par exemple placer un accéléromètre sur le miroir pour que l’utilisateur puisse mettre le miroir à la fois en orientation portrait ou paysage selon ses envies. De plus, nous voulions que l’écran s’allume grâce à un détecteur de mouvement. 

Pour finir, nous aurions aussi aimé créer ce miroir avec un écran tactile afin de pouvoir afficher plus de news par exemple en les faisant défiler avec le doigt comme sur un smartphone.  Nous avions un miroir tactile, mais il ne fonctionnait pas avec notre programme. 


![photo](/Doc/image/photo4.jpg)

Pour conclure, nous avons apprécié réaliser ce projet car il nous apporté des compétences que nous n’avions pas avant, comme mener a bien un projet en quasi autonomie, travailler en groupe sur le long terme, respecter des dates limites, un emplois du temps et un cahier des charges. Nous souhaitons remercier le FabLab et les enseignants, Monsieur MASSON et Monsieur FERRERO, qui nous ont guidés pendant toute la durée du projet, et qui nous ont aussi mis tous le matériel a disposition. 

