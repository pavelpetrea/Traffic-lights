var i = 1;
function changeColor() {
    var doc = document.getElementById("background");
    var color = ["red","yellow","green"];
    doc.style.backgroundColor = color[i];
    i = (i + 1) % color.length;
}
setInterval(changeColor,10000);