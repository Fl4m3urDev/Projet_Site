function ClickImg(ampoule) {
    var img = ampoule.src.substr(-12);
    if (img == "image009.gif") {
        ampoule.src = "image008.gif";
    }
    else {
        ampoule.src = "image009.gif";
    }
}