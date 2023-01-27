// Test fonction JS

window.addEventListener('load', function () {
    console.log('Cette fonction est éxécutée une fois quand la page est chargée.');
});

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