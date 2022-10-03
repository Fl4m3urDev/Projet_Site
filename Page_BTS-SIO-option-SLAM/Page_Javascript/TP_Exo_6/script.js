function DeleteElement() {
    var child = document.getElementById('rose');
    child.parentNode.removeChild(child)
}

function ChangeText() {
    document.getElementById('vert').innerHTML = "le texte change !";
}

function Glisser_Deplacer(event) {
event
.dataTransfer
.setData('text/plain', event.target.id);

event
.currentTarget
.style
}