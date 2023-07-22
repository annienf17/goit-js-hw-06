'use strict'
const sizeControl = document.getElementById("font-size-control");
const content = document.getElementById("text");

const handleSlider = () => {
const rangeValue = sizeControl.value;
    content.style.fontSize = rangeValue + "px";
}

sizeControl.addEventListener("input", handleSlider);

