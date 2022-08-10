function load(){
    console.log()
    var oText = document.createTextNode("navigateur : "+navigator.appName);
    createLi(oText, "navi");
    var oText = document.createTextNode("écran : "+ screen.width +"x"+ screen.height);
    createLi(oText, "ecran");
    var oText = document.createTextNode("URL : " + document.URL);
    createLi(oText, "url");
    var oText = document.createTextNode("nb liens : " + document.links.length);
    createLi(oText, "url");
    var oText = document.createTextNode("nb d'images : " + document.images.length);
    createLi(oText, "url");
    var oText = document.createTextNode("nb formulaire : " + document.forms.length);
    createLi(oText, "url");
    var oText = document.createTextNode("nb d'ancres : " + document.anchors.length);
    createLi(oText, "url");
    var oText = document.createTextNode("nb frames : " + frames.length);
    createLi(oText, "url");
}

function createLi(txt, id) {
    var oLi = document.createElement("li");
    oLi.appendChild(txt);
    document.getElementById(id).appendChild(oLi);
  }