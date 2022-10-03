var form = document.forms.frmPersonne;
document.getElementById('url').innerHTML = form.action
document.getElementById('nombre').innerHTML = form.length + " éléments"
document.getElementById('type').innerHTML = form[5].type
document.getElementById('nbOptions').innerHTML = form[5].length

var radio = document.querySelector('input[name="optEtatCivil"]:checked');
document.getElementById('choix').innerHTML = "Choix du bouton radio sélectionné : " + radio.value;
var select = form[5].options[form[5].selectedIndex].text;
document.getElementById('select').innerHTML = "Option sélectionnée de la liste : " + select;

form[5].selectedIndex = 0;

document.getElementById('chkSport').checked = true; console.log(document.getElementsByName('input[name="chkSport"]').checked = true);