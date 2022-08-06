window.addEventListener('load', function () {
    console.log('Cette fonction est exécutée une fois quand la page est chargée.');
  });

var time = new Date().getHours();
  if (time < 7) {
    window.alert("Bonne nuit et Bienvenue à vous !");
  } else if (time < 18) {
    window.alert("Bonjour et Bienvenue à vous");
  } else {
    window.alert("Bonsoir et Bienvenue à vous");
  }

  function FunctionDialogueJS() {
    var dialogjs = document.getElementById("JSDialog");
    dialogjs.open = true;
  }

  function FunctionDialoguePHP() {
    var dialogphp = document.getElementById("PHPDialog");
    dialogphp.open = true;
  }