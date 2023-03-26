function CalculSomme() {
    // déclaration de variables.
    var Operande_1 = parseFloat(document.getElementById("Oper_1").value);
    var Operande_2 = parseFloat(document.getElementById("Oper_2").value);
    var Somme = document.getElementById("Somme").value;

    // Effectuation de l'opération.
    Somme = Operande_1 + Operande_2;

    // Condition lorsqu'il y a une autre saisi à la place d'un nombre.
    if (isNaN(Somme)) {
        alert("Veuillez saisir des nombres !");
    }
    else {
        alert("Résultat = " + Somme);
    } // fin "if" et "else"
} // fin fonction