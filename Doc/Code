/* La fonciton setDate permet de récupérer la date grâce aux fonctionnalitées présente déjà de base dans le javascript 
On utilise des tableaux Array afin d'afficher une date en toutes lettres et non pas une date du style 05/04/1987*/

var jours = new Array("Dimanche", "Lundi","Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"); 

var mois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Novembre", "Décembre");

var date = new Date();

function setDate(){

	/*La fonctionnalité .getDay() renvoi 0 pour Dimanche, 1 pour Lundi ... 6 pour Samedi.*/

	var	datedisplay = jours[date.getDay()] +" ";

	datedisplay += date.getDate()+" ";
	
	datedisplay += mois[date.getMonth()] + " ";
	
	datedisplay += date.getFullYear();

	document.write(datedisplay);
}

function startTime() {

    var today = new Date();

    var heure = today.getHours();
    
    var minutes = today.getMinutes();
    
    var secondes = today.getSeconds();
    
    heure = checkZero(heure);
    
    minutes = checkZero(minutes);
    
    secondes = checkZero(secondes);
    
    document.getElementById('time').innerHTML =("Il est "+ heure + "h" + minutes + ":" 	+ secondes);
    
    var t = setTimeout(startTime, 500); //permet de recharger la fonction toutes les 0,5s permettant ainsi l'affichage d'une heure de façon dynamique
}

function checkZero(i) {
	
	if (i < 10) {i = "0" + i};  // ajoute un zéro devant les heures, les minutes et les secondes si < 10 
    
    	return i;
}

function setCompliments(){
	var x = getRndInteger(0, 3);
	var compliment="";
	switch(x) {
		case 0 :
			compliment = "Tu es beau aujourh'ui";
			break;
		case 1 :
			compliment = "Passe une bonne journée";
			break;
		case 2 :
			compliment = "Team jul";
			break;
	}
	document.write(compliment);
}

function setMusique(){
	var x = getRndInteger(0,2);
	var musique="";
	switch(x){
		case 0 :
			musique = "Right_Now.m4a";
		case 1 :
			musique = "Highway_to_Hell.m4a";
			break;
	}


	var audio = new Audio(musique);
	audio.play();
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
