/* La fonciton setDate permet de récupérer la date grâce aux fonctionnalitées présente déjà de base dans le javascript
On utilise des tableaux Array afin d'afficher une date en toutes lettres et non pas une date du style 05/04/1987*/

var jours = new Array("Dimanche", "Lundi","Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");

var mois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Novembre", "Décembre");

var m31 = new Array("Janvier","Mars","Mai","Juillet","Août","Octobre","Décembre");

var date = new Date();

var jour;

var month;

var base;

//La variable fin permet d'émettre une alerte si il n'y a plus de caleçons dans le tiroir 

var fin=false;


function setDate(){

	/*La fonctionnalité .getDay() renvoi 0 pour Dimanche, 1 pour Lundi ... 6 pour Samedi.*/

	var	datedisplay = jours[date.getDay()] +" ";

	datedisplay += date.getDate()+" ";

	datedisplay += mois[date.getMonth()] + " ";

	datedisplay += date.getFullYear();

	document.write(datedisplay);

	jour = date.getDate();
	month = mois[date.getMonth()];
}

function startTime() {

    var today = new Date();

    var heure = today.getHours();

    var minutes = today.getMinutes();

    var secondes = today.getSeconds();

    heure = checkZero(heure);

    minutes = checkZero(minutes);

    secondes = checkZero(secondes);

    document.getElementById('time').innerHTML =(heure + ":" + minutes + ":" 	+ secondes);

    var t = setTimeout(startTime, 500); //permet de recharger la fonction toutes les 0,5s permettant ainsi l'affichage d'une heure de façon dynamique
}

function checkZero(i) {

	if (i < 10) {i = "0" + i};  // ajoute un zéro devant les heures, les minutes et les secondes si < 10

    	return i;
}

function setCompliments(){
	var x = getRndInteger(0, 9);
	var compliment='';
	let complo =  document.getElementById("compliment"); //récupère l'endroit où l'on veut afficher le compliment
	switch(x) {
		case 0 :;

			compliment = "'Tu es beau aujourd'hui'";
			break;
		case 1 :
			compliment = "'Passe une bonne journée'";
			break;
		case 2 :
			compliment = "'La joie de vivre est une émotion contagieuse'";
			break;
		case 3 :
			compliment = "'Le bonheur vient vers ceux qui croient en lui'";
			break;
		case 4 :
			compliment = "'Le plus grand secret du bohneur, c'est d'être bien avec soi'";
			break;
		case 5 :
			compliment = "'Work in silence and let success make noise'";
			break;
		case 6 :
			compliment ="'Ne limite pas tes défis, défie tes limites'";
			break;
		case 7 :
			compliment = "'Quand tu as envie d'abandonner, pense à la raison qui t'a fait commencé'";
			break;
		case 8 :
			compliment = "'Tu es ta seule limite'";
			break;
		case 9 :
			compliment = "'Si ton esprit est motivé, ton corps suivra'";
			break;
	}

	complo.innerHTML=compliment; //ajoute une valeur "aléatoire" à l'endroit où l'on affiche le compliment 
}

/* Le fameux compteur de caleçons imaginé par Monsieur Thomas Rovere
   Plusieurs cas s'y distinguent suivant le mois la base de caleçons dans le tiroir est différente*/

function countCalecon(){
	let nb = document.getElementById('nbcal');

	if(m31.indexOf(month)==-1){
		base = 15;
		if(jour==15||jour==30){
			nb.style="color: red;  ";
			nb.innerHTML="Nombre de caleçons restant : 0 <br><br>";
			nb.innerHTML+="Il faut impérativement <br> faire une machine";
			fin=true;
		}
		else if (jour<15){
			nb.innerHTML="Nombre de caleçons restant : "+(base-jour);
			fin=false;
		}
		else{
			nb.innerHTML="Nombre de caleçons restant : "+(2*base-jour);
			fin=false;
		}
	}
	else if (month==="Février"){
		base = 14;
		if(jour==14||jour==28){
			nb.style="color: red;  ";
			nb.innerHTML="Nombre de caleçons restant : 0 <br><br>";
			nb.innerHTML+="Il faut impérativement <br> faire une machine";
			fin=true;
		}
		else if (jour<14){
			nb.innerHTML="Nombre de caleçons restant : "+(base-jour);
			fin=false;
		}
		else {
			nb.innerHTML="Nombre de caleçons restant : "+(2*base-jour);
			fin=false;
		}
	}
	else {
		base = 16;
		if(jour==16||jour==31){
			nb.style="color: red;";
			nb.innerHTML="Nombre de caleçons restant : 0 <br><br>";
			nb.innerHTML+="Il faut impérativement <br> faire une machine";
			fin=true;
		}
		else if(jour <16){
			nb.innerHTML="Nombre de caleçons restant : "+(base-jour);
			fin=false;
		}
		else {
			nb.innerHTML="Nombre de caleçons restant : "+(2*base-(jour+1));
			fin=false;
		}
	}

}
/* Permet de générer un mesagge d'acceuil */
function acceuil(){
	var audio = document.getElementById('acceuil');
	if (!fin){	
		audio.src="acceuil.mp3";
	}
	else {
		audio.src="calecon.mp3";
	}
	audio.play();
}

function appelAcceuil(){
	if(!fin){
		setTimeout(acceuil,0);
	}
	else {
		setTimeout(acceuil, 20000);
	}
}


function pauseMusique(x){
	x.pause();
}

function setMusique(){
	var x = getRndInteger(0,6);
	var musique="";
	if (!fin){
		musique=x+".mp3";
	}
	else {
		musique="alerte.mp3";
	}


	var audio = document.getElementById('myAudio');
	audio.src=musique;
	audio.play();
	setTimeout(pauseMusique,30000,audio);
}

function playMusique(){
	if(!fin){
		setTimeout(setMusique,10000);
	}
	else {
		setTimeout(setMusique,1);
	}
}


function Reload(){
	location.reload(true);
}

function fakeReload(){
	setInterval(Reload, 540000);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
