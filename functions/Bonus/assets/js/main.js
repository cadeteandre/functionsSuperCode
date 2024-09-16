const h1 = document.querySelector(".h1");
const container = document.querySelector(".container");

// ========= Body ========= 
container.style.backgroundColor = "#e6cd8f";
container.style.margin = "auto";

// ========= h1 =========
h1.style.color = "#4d3b0d";
h1.style.textAlign = "center";

// ========= buttons =========

function changeColors(bgColor, textColor) {
    container.style.backgroundColor = bgColor;
    h1.style.color = textColor;
}