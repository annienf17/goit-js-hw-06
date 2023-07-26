'use strrict';
// random colors
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// buttons
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

 // function adds div amount from input
function createBoxes(amount) {
  // create div in boxex
const boxes = document.getElementById("boxes");
console.log(boxes)

// take value from input
const inputField = document.querySelector("input");
const inputValue = inputField.value;
amount = inputValue;

// create div 
for (let i = 0; i < amount; i++){
  const div = document.createElement("div");
  div.style.width = "30px";
  div.style.height = "30px";
  div.style.backgroundColor = getRandomHexColor();
  boxes.append(div);

  // array of created divs
  const divsArray = [];
  divsArray.push(div);
  console.log(divsArray);

  // extend every next div by 10px
  let result = divsArray.map(d => d.style.width += "10px");
  console.log(result);
}
}
// remove all child nodes from a list
function destroyBoxes() {
  const list = document.getElementById("boxes");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}
createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);