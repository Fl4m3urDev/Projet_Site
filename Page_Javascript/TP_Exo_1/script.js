    // à compléter par la saisie de noms, l'affichage des noms saisis

    // dans une liste numérotée et le nombre de noms saisis

    var nom;
    var tabNom = new Array();

    do {
      nom = prompt("Entrez un nom : ", "");
      if ((nom != null) && (nom != '')) {
        tabNom.push(nom);
      }
    }
    while (nom != null);

    for (var i in tabNom)
    {
      var oLi = document.createElement("li");
      var oText = document.createTextNode(majNom(tabNom[i]));
      oLi.appendChild(oText);
      document.getElementById('elem').appendChild(oLi);
    }

  

    var fin = tabNom.length != 0 ? document.createTextNode("Tu as saisi " + tabNom.length + " noms.") : document.createTextNode("Tu n'as rien saisi, guignol !");
    document.getElementById('elem-li').appendChild(fin);
    
    function majNom(a) {
    	var premiereLettreMaj = a.charAt(0).toUpperCase();
      var nomSansPremiereLettre = a.substr(1).toLowerCase();
      var newNom = premiereLettreMaj + nomSansPremiereLettre;
      return newNom;
    }