/* La fonciton setDate permet de récupérer la date grâce aux fonctionnalitées présente déjà de base dans le javascript
On utilise des tableaux Array afin d'afficher une date en toutes lettres et non pas une date du style 05/04/1987*/

var jours = new Array("Dimanche", "Lundi","Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");

var mois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Novembre", "Décembre");

var m31 = new Array("Janvier","Mars","Mai","Juillet","Août","Octobre","Décembre");

var date = new Date();

var jour;

var month;

var base;
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
	let complo =  document.getElementById("compliment");
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

	complo.innerHTML=compliment;
}

/*function setComplimentsT(){
	setInterval(setCompliments, 3000);
}*/


function setMusique(){
	var x = getRndInteger(0,3);
	console.log(x);
	var musique="";
	switch(x){
		case 0 :
			musique = "Right_Now.m4a";
			break;
		case 1 :
			musique = "Highway_to_Hell.m4a";
			break;
		case 2 :
			musique ="Master_Clash.m4a";
			break;
	}


	var audio = document.getElementById('myAudio');
	audio.src=musique;
	audio.play();
}

function countCalecon(){
	let nb = document.getElementById('nbcal');

	if(m31.indexOf(month)==-1){
		base = 15;
		if(jour==15||jour==30){
			nb.style="color: red; font-weight: bolder;";
			nb.innerHTML="Nombre de caleçons restant : 0 <br>";
			nb.innerHTML+="Il faut impérativement faire une machine";
		}
		else if (jour<15){
			nb.innerHTML="Nombre de caleçons restant : "+(base-jour);
		}
		else{
			nb.innerHTML="Nombre de caleçons restant : "+(2*base-jour);
		}
	}
	else if (month==="Février"){
		base = 14;
		if(jour==14||jour==28){
			nb.style="color: red; font-weight: bolder;";
			nb.innerHTML="Nombre de caleçons restant : 0 <br>";
			nb.innerHTML+="Il faut impérativement faire une machine";
		}
		else if (jour<14){
			nb.innerHTML="Nombre de caleçons restant : "+(base-jour);
		}
		else {
			nb.innerHTML="Nombre de caleçons restant : "+(2*base-jour);
		}
	}
	else {
		base = 16;
		if(jour==16||jour==31){
			nb.style="color: red; font-weight: bolder;";
			nb.innerHTML="Nombre de caleçons restant : 0 <br>";
			nb.innerHTML+="Il faut impérativement faire une machine";
		}
		else if(jour <16){
			nb.innerHTML="Nombre de caleçons restant : "+(base-jour);
		}
		else {
			nb.innerHTML="Nombre de caleçons restant : "+(2*base-(jour+1));
		}
	}

}

function Reload(){
	location.reload(true);
}

function fakeReload(){
	setInterval(Reload, 900000);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
