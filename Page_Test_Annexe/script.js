// Test fonction JS

window.addEventListener('load', function () {
    console.log('Cette fonction est éxécutée une fois quand la page est chargée.');
});

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
        Image_Id.src = "images/Sakura_Kinomoto.png";
    }
    else if (Image_Id.src.match("images/Sakura_Kinomoto.png")) {
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
        Image_Id.src = "images/Ayame_Himuro.png";
    }
    else if (Image_Id.src.match("images/Ayame_Himuro.png")) {
        Image_Id.src = "images/RAGF_Mami_Nanami.png";
    }
    else if (Image_Id.src.match("images/RAGF_Mami_Nanami.png")) {
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
        Image_Id.src = "images/Megumin_Konosuba.png";
    }
    else if (Image_Id.src.match("images/Megumin_Konosuba.png")) {
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

// premier affichage
loadDonnee();

// fonction permettant de recupérer les images ciels
function loadDonnee() {
    fetch('ciels.json').then(function (response) {
        if (response.ok) {
            response.json().then(function (json) {
                AffichageCiel(json); // lancement asynchrone !
            });
        } else {
            console.log('La demande de requête pour ciels.json a échoué ' + response.status + ': ' + response.statusText);
        }
    });
}

/***************************************************************************************************************/

// fonction permettant sucessivement de melanger le positonnement des affichages des elements dans un tableaux.

function MélangeTableau(ciels) {
    for(var i = ciels.length-1 ; i>0 ;i--){
        var j = Math.floor( Math.random() * (i + 1) );
        [ciels[i],ciels[j]]=[ciels[j],ciels[i]];
      }
      return ciels;
}

/***************************************************************************************************************/

// fonction permettant d'ajouter les ciels dans le html.

function AffichageCiel(ciel) {

    // déclaration de variables des elements qui composera le(s) ciel(s).
    var bloc = document.getElementById("Photo_Ciel");
    var items = ciel["items"];
    MélangeTableau(items);
    for (var i = 0; i < items.length; i++) {
        var flickr_entry = items[i];
        var url = flickr_entry.image;
        bloc.className = "flex_premier_container";
        var image = document.createElement('img');
        image.className = "images-ciels";

        image.src = "images_ciels/" + url;
        image.alt = "Ciel_Test";

        // cette variable (défini au-dessus) permettant d'ajouter l'element du ciel dans le html.
        bloc.appendChild(image);
    }
}

/***************************************************************************************************************/

// Fonction permettant de changer le texte en n'importe quoi (sous-entendu une chaîne de caractère !)

function lien(elem) {
    var reponse = prompt("Veuillez saisir un truc !");
    elem.innerHTML = reponse;
}

/***************************************************************************************************************/