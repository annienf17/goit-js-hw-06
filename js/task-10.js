function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// create div in boxex
const boxes = document.getElementById("boxes");

// take value from input
const inputField = document.querySelector("input");
const inputValue = inputField.value;


// buttons
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

const handleClickCreate = () => {
  // function adds div amount from input
for (let i = 0; i < inputValue; i++){
  const div = document.createElement("div");
  div.style.width = "30px";
  div.style.height = "30px";
  div.style.backgroundColor = getRandomHexColor();
  const divAdd = boxes.append(div);
}
}
// remove all child nodes from a list
const handleClickDestroy = () => {
  const list = document.getElementById("boxes");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
  
}
createButton.addEventListener("click", handleClickCreate);
destroyButton.addEventListener("click", handleClickDestroy);