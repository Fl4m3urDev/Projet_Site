// Test fonction JS

window.addEventListener('load', function () {
    console.log('Cette fonction est éxécutée une fois quand la page est chargée.');
});

/***************************************************************************************************************/

// Constante pour la fonction de "positionnement aléatoire des images des beaux ciel"

const max = 3;

/***************************************************************************************************************/

// Boîte de dialogue de Bienvenue (Heure Fixe) 

var time = new Date().getHours();
if (time < 7) {
    window.alert("Bonne nuit et Bienvenue à vous !");
} else if (time < 18) {
    window.alert("Bonjour et Bienvenue à vous !");
} else {
    window.alert("Bonsoir et Bienvenue à vous !");
}

/***************************************************************************************************************/

// Fonction permetttant de retourner un nombre flottant pseudo-aléatoire compris dans l'intervalle [0, 1[

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/***************************************************************************************************************/

// Fonction permettant de changer l'image de la 'femme japonaise" en un clic et ainsi de suite...

function ChangeImgClick() {
    var Image_Id = document.getElementById('imggirl');
    if (Image_Id.src.match("images/anime_girls_sexy.png")) {
        Image_Id.src = "images/ffn_girl.png";
    }
    else if (Image_Id.src.match("images/ffn_girl.png")) {
        Image_Id.src = "images/Sailor_Moon.png";
    }
    else if (Image_Id.src.match("images/Sailor_Moon.png")) {
        Image_Id.src = "images/TMM_Zoey.png";
    }
    else if (Image_Id.src.match("images/TMM_Zoey.png")) {
        Image_Id.src = "images/MD_Doremi.png";
    }
    else if (Image_Id.src.match("images/MD_Doremi.png")) {
        Image_Id.src = "images/SC_Amu.png";
    }
    else if (Image_Id.src.match("images/SC_Amu.png")) {
        Image_Id.src = "images/Kilari.png";
    }
    else if (Image_Id.src.match("images/Kilari.png")) {
        Image_Id.src = "images/Lucie_PPP.png";
    }
    else if (Image_Id.src.match("images/Lucie_PPP.png")) {
        Image_Id.src = "images/FT_Lucy.png";
    }
    else if (Image_Id.src.match("images/FT_Lucy.png")) {
        Image_Id.src = "images/Ayu_Tsukimiya.png";
    }
    else if (Image_Id.src.match("images/Ayu_Tsukimiya.png")) {
        Image_Id.src = "images/mkdm_tohru.png";
    }
    else if (Image_Id.src.match("images/mkdm_tohru.png")) {
        Image_Id.src = "images/The_Quintessential_Quintuplets.png";
    }
    else if (Image_Id.src.match("images/The_Quintessential_Quintuplets.png")) {
        Image_Id.src = "images/Nagatoro.gif";
    }
    else if (Image_Id.src.match("images/Nagatoro.gif")) {
        Image_Id.src = "images/Marin_Kitagawa_MDUD.png";
    }
    else if (Image_Id.src.match("images/Marin_Kitagawa_MDUD.png")) {
        Image_Id.src = "images/Marin_Kitagawa_2_MDUD.png";
    }
    else if (Image_Id.src.match("images/Marin_Kitagawa_2_MDUD.png")) {
        Image_Id.src = "images/Shikimori_Micchon.png";
    }
    else if (Image_Id.src.match("images/Shikimori_Micchon.png")) {
        Image_Id.src = "images/Komi_San.png";
    }
    else if (Image_Id.src.match("images/Komi_San.png")) {
        Image_Id.src = "images/Futaba_Igarashi.png";
    }
    else if (Image_Id.src.match("images/Futaba_Igarashi.png")) {
        Image_Id.src = "images/Kizuna_AI.png";
    }
    else if (Image_Id.src.match("images/Kizuna_AI.png")) {
        Image_Id.src = "images/Hatsune_Miku.png";
    }
    else if (Image_Id.src.match("images/Hatsune_Miku.png")) {
        Image_Id.src = "images/Kirino_Kousaka.png";
    }
    else if (Image_Id.src.match("images/Kirino_Kousaka.png")) {
        Image_Id.src = "images/Haruhi_Suzumiya.png";
    }
    else if (Image_Id.src.match("images/Haruhi_Suzumiya.png")) {
        Image_Id.src = "images/Konata_Izumi.png";
    }
    else if (Image_Id.src.match("images/Konata_Izumi.png")) {
        Image_Id.src = "images/Yazawa_Nico.png";
    }
    else if (Image_Id.src.match("images/Yazawa_Nico.png")) {
        Image_Id.src = "images/Doki_Doki_Literrature_Club.png";
    }
    else if (Image_Id.src.match("images/Doki_Doki_Literrature_Club.png")) {
        Image_Id.src = "images/PP_Arle.png";
    }
    else if (Image_Id.src.match("images/PP_Arle.png")) {
        Image_Id.src = "images/PP_Amitie.png";
    }
    else if (Image_Id.src.match("images/PP_Amitie.png")) {
        Image_Id.src = "images/splatoon_callie.png";
    }
    else if (Image_Id.src.match("images/splatoon_callie.png")) {
        Image_Id.src = "images/SD_CharlotteSpitz.png";
    }
    else if (Image_Id.src.match("images/SD_CharlotteSpitz.png")) {
        Image_Id.src = "images/Reimu_Hakurei.png";
    }
    else if (Image_Id.src.match("images/Reimu_Hakurei.png")) {
        Image_Id.src = "images/Marisa_Kirisame.png";
    }
    else if (Image_Id.src.match("images/Marisa_Kirisame.png")) {
        Image_Id.src = "images/Koishi_Komeiji.png";
    }
    else if (Image_Id.src.match("images/Koishi_Komeiji.png")) {
        Image_Id.src = "images/Satori_Komeiji.png";
    }
    else if (Image_Id.src.match("images/Satori_Komeiji.png")) {
        Image_Id.src = "images/Flandre_Scarlet.png";
    }
    else {
        Image_Id.src = "images/anime_girls_sexy.png";
    }
}

/***************************************************************************************************************/

// Fonction permettant de charger les images des beaux ciel

function randomImgLoad() {
    var tabImg = new Array();
    tabImg[0] = "images/Ciel_Rouge.png";
    tabImg[1] = "images/Ciel_Bleu.png";
    tabImg[2] = "images/Ciel_Rose.png";

    var lTab = tabImg.length - 1;

    document.getElementById('Photo_Ciel_Rouge').src = tabImg[getRandomInt(max)];
    document.getElementById('Photo_Ciel_Bleu').src = tabImg[getRandomInt(max)];
    document.getElementById('Photo_Ciel_Rose').src = tabImg[getRandomInt(max)];
}

/***************************************************************************************************************/

// Fonction permettant de changer le texte en n'importe quoi (sous-entendu une chaîne de caractère !)

function lien(elem) {
    var reponse = prompt("Veuillez saisir un truc !");
    elem.innerHTML = reponse;
}

/***************************************************************************************************************/