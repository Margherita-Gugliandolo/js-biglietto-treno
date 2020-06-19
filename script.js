//chiedere l'età

var anni = prompt("Quanti anni hai?");
console.log (anni);

//chiedere il numero di km
var km = prompt("Quanti km devi percorrere?");
console.log (km);

//Fasce di prezzo

var prezzoKm = 0.21;

var prezzoStandard = km * prezzoKm;
console.log(prezzoStandard);

var standardFixed = prezzoStandard.toFixed(2);

console.log(standardFixed);
//Sconto Giovanile
var scontoGiovani =  prezzoStandard * 20 / 100;


var prezzoGiovani = prezzoStandard - scontoGiovani;
console.log(prezzoGiovani);

var giovaniFixed = prezzoGiovani.toFixed(2);
console.log(giovaniFixed);
//Sconto anziani
var scontoAnziani = prezzoStandard * 40 / 100;

var prezzoAnziani = prezzoStandard - scontoAnziani;
console.log(prezzoAnziani);

var anzianiFixed = prezzoAnziani.toFixed(2);
console.log(anzianiFixed);
// utenti

var giovani = (anni > 0 && anni < 18);

var standard = (anni > 17 && anni < 65);

var anziani = (anni > 64);


//output utenza

if(giovani){
  document.getElementById("output").innerHTML= "devi pagare: " + giovaniFixed;
}

if(standard)
{document.getElementById("output").innerHTML= "devi pagare: " + standardFixed;
}

if(anziani){
  document.getElementById("output").innerHTML= "devi pagare: " + anzianiFixed;
}
