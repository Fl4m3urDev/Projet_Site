window.addEventListener('load', function () {
    console.log('Cette fonction est exécutée une fois quand la page est chargée.');
  });
  const max = 4;

var time = new Date().getHours();
  if (time < 7) {
    window.alert("Bonne nuit et Bienvenue à vous !");
  } else if (time < 18) {
    window.alert("Bonjour et Bienvenue à vous");
  } else {
    window.alert("Bonsoir et Bienvenue à vous");
  }
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function randomImg(){
    var tabImg = new Array();
    tabImg[0]  = "../image/beetlejuice.png";
    tabImg[1]  = "../image/Flandre_Scarlet.png";
    tabImg[2]  = "../image/The_Exortist_Screamer.png";
    tabImg[3]  = "../image/Zombatar_1.png";

    var lTab = tabImg.length-1;
    
    document.getElementById('photo1').src = tabImg[getRandomInt(max)];
    document.getElementById('photo2').src = tabImg[getRandomInt(max)];
    document.getElementById('photo3').src = tabImg[getRandomInt(max)];
    document.getElementById('photo4').src = tabImg[getRandomInt(max)];
}

