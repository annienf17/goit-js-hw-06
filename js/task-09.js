const buttonColor = document.querySelector(".change-color");
const printColor = document.querySelector(".color");


const getRandomHexColor = (event) => {
  document.body.style.background = 
   `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
    printColor.innerHTML = document.body.style.background;
}

buttonColor.addEventListener("click", getRandomHexColor);


