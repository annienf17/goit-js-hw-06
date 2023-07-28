'use strict';
// random colors
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// get buttons
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

// first div size
let size = 30;

// function adds div amount from input
function createBoxes(amount) {
// create div in boxex
const boxes = document.getElementById("boxes");
// take value from input
const inputField = document.querySelector("input");
amount = inputField.value;
// create div 
for (let i = 0; i < amount; ++i){
  const div = document.createElement("div");
let divW = div.style.width = `${size}px`;
let divH = div.style.height = `${size}px`;
div.style.backgroundColor = getRandomHexColor();
boxes.append(div);
console.log(divW, divH)
// increase by 10px
size += 10;
}};

// remove all child nodes from a list
function destroyBoxes() {
  const list = document.getElementById("boxes");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
   
  }};

// call event by click on button
createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);
