function DeleteElement() {
    var child = document.getElementById('rose');
    child.parentNode.removeChild(child)
}

function ChangeText() {
    document.getElementById('vert').innerHTML = "le texte change !";
}

// Ensemble Focntion : Drag n Drop

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
    ev.dataTransfer.setData("color", window.getComputedStyle(ev.target, null).getPropertyPriority('background-color'));
}

function drop(ev) {
    ev.preventDefault();
    // déclaration variable pour le texte
    var recup_id = ev.dataTransfer.getData("id");
    var recup_elem = document.getElementById(recup_id);
    var recup_text = recup_elem.innerHTML;
    // déclaration variable pour la couleur de fond
    var recup_color = ev.dataTransfer.getData("color");
    var color = window.getComputedStyle(ev.target, null).getPropertyPriority('background-color');
    // Text
    var text = ev.target.innerHTML;
    // Application sur ancien
    recup_elem.style.backgroundColor = color;
    recup_elem.innerHTML = text;
    // Application sur nouveau
    ev.target.innerHTML = recup_text;
    ev.target.style.backgroundColor = recup_color;
}