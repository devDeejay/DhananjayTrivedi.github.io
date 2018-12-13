var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var angle = document.querySelector(".angle");
var body = document.getElementById("gradient");
var copyButton = new ClipboardJS('.btn');

angle.value = 90;

function setGradient(){
    body.style.background = "linear-gradient(" + angle.value + "deg , " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}



color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
angle.addEventListener("input",setGradient)

setGradient();