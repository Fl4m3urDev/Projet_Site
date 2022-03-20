window.addEventListener('load', function (){
    console.log('Cette fonction est éxécutée une fois quand la page est chargée.');
});

const max = 3;
const click = 21;

var time = new Date().getHours();
if (time < 7) {
window.alert("Bonne nuit et Bienvenue Test !");
} else if (time < 18) {
window.alert("Bonjour et Bienvenue Test !");
} else {
window.alert("Bonsoir et Bienvenue Test !");
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomInt(click) {
    return Math.floor(Math.random() * click);
}

function ChangeImgClick(){
    var tabImg = new Array ();
    tabImg[0] = "images/anime_girls_sexy.png";
    tabImg[1] = "images/ffn_girl.png";
    tabImg[2] = "images/Sailor_Moon.png";
    tabImg[3] = "images/TMM_Zoey.png";
    tabImg[4] = "images/MD_Doremi.png";
    tabImg[5] = "images/SC_Amu.png";
    tabImg[6] = "images/Kilari.png";
    tabImg[7] = "images/FT_Lucy.png";
    tabImg[8] = "images/mkdm_tohru.png";
    tabImg[9] = "images/Nagatoro.gif";
    tabImg[10] = "images/Komi_San.png";
    tabImg[11] = "images/Kizuna_AI.png";
    tabImg[12] = "images/Hatsune_Miku.png";
    tabImg[13] = "images/Haruhi_Suzumiya.png";
    tabImg[14] = "images/Konata_Izumi.png";
    tabImg[15] = "images/Yazawa_Nico.png";
    tabImg[16] = "images/PP_Arle.png";
    tabImg[17] = "images/PP_Amitie.png";
    tabImg[18] = "images/splatoon_callie.png";
    tabImg[19] = "images/SD_CharlotteSpitz.png";
    tabImg[20] = "images/Flandre_Scarlet.png";

    var lTab = tabImg.length-1;

   document.getElementById('imggirl').src = tabImg[getRandomInt(click)];

}

function somme(input1, input2) {
           
    var operande1 = document.getElementById(input1).value;
    var operande2 = document.getElementById(input2).value;
    var somme = parseFloat(operande1) + parseFloat(operande2);
    if(isNaN(somme)){alert("Veuillez saisir des nombres");}
    else{
    alert("Résultat : " + somme);}
}

function randomImgLoad(){
    var tabImg = new Array ();
    tabImg[0] = "images/Ciel_Rouge.jpg";
    tabImg[1] = "images/Ciel_Bleu.jpg";
    tabImg[2] = "images/Ciel_Rose.jpg";

    var lTab = tabImg.length-1;

   document.getElementById('photo1').src = tabImg[getRandomInt(max)];
   document.getElementById('photo2').src = tabImg[getRandomInt(max)];
   document.getElementById('photo3').src = tabImg[getRandomInt(max)];
}

function lien(elem) {
    var reponse = prompt("Veuillez saisir un nom !");
    elem.innerHTML = reponse;
   }