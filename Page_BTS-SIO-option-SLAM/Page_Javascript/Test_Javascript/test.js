nombre = prompt("Nombre ?");

if (nombre != null) {

    // affichage dans document, fenêtre du navigateur - retour à ligne fin de chaîne

    window.document.write("Le nombre saisi est "+ nombre +"<BR>");

} else {

    // affichage dans fenêtre pop-up

    alert("Vous n'avez rien saisi.");

}

function verif() {

    // l'adresse URL de destination du formulaire

    alert("destination : " + document.frmPersonne.action);

    // afficher la valeur du bouton radio sélectionné var radio =

    for (var i = 0; i < document.frmPersonne.optEtatCivil.length; i++) {

        if (document.frmPersonne.optEtatCivil[i].checked)

            radio = document.frmPersonne.optEtatCivil[i].value;

    }

    alert("radio sélectionné : " + radio);

    // changer l'option sélectionnée de la liste : ce doit être la première

    document.frmPersonne.lstReg[0].selected = true;

    return false;

}