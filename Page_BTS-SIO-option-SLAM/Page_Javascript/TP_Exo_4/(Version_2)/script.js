function AffecteSomme() {
    // déclaration de variables.
    var Operande_1 = parseFloat(document.getElementById("Oper_1").value);
    var Operande_2 = parseFloat(document.getElementById("Oper_2").value);
    // Effectuation de l'opération.
    var Somme = Operande_1 + Operande_2;
    var Resultat;
    document.getElementById("Resultat").value = ValideReset(Somme);

} // fin fonction

function ValideReset(Somme) {

    // Condition lorsqu'il y a une autre saisi à la place d'un nombre.  
    if (!isNaN(Somme)) {
        return Somme;
    }
    else {
        return 'Erreur ! Veuillez saisir des nombres !';
    } // fin "if" et "else"
} // fin fonction 