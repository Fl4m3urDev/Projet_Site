/* on mémorise l'emplacement de la case vide */
var elig = 4;
var ecol = 4;
/* Fonction qui échange la case (lig,col) avec la case vide */
function move(lig, col) {
    /* Condition permettant d'echanger la case numéroté par la case vide la plus proche.
     Par conséquent, les cases passant en diagonale et les cases éloignés de la case vide ne pouvant pas être déplacé.*/

    /* Sans déclaration de variable + Méthode plus courtes et détaillé */

    if ((elig == lig && ((ecol==col+1) || (ecol==col-1))) || (ecol == col && ((elig == lig-1) || (elig== lig+1)))) {
        
    /* on récupère les identifiants des deux boutons concernés */
    var bname = 'case' + lig + col;
    var ename = 'case' + elig + ecol;
    /* on récupère les noeuds correspondant à ces boutons */
    var bnode = document.getElementById(bname);
    var enode = document.getElementById(ename);
    /* on récupère les fils textuels des deux boutons */
    var bvalue = bnode.removeChild(bnode.childNodes[0]);
    var evalue = enode.removeChild(enode.childNodes[0]);
    /* on échange ces fils */
    bnode.appendChild(evalue);
    enode.appendChild(bvalue);
    /* on échange les classes des deux boutons */
    bnode.setAttribute('class', 'vide');
    enode.setAttribute('class', 'case');
    /* on enlève le "focus" sur le bouton cliqué */
    bnode.blur();
    /* on mémorise l'emplacement de la case vide */
    elig = lig;
    ecol = col;
}
}