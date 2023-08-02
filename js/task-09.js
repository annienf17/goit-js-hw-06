const buttonColor = document.querySelector(".change-color");
const printColor = document.querySelector(".color");


const getRandomHexColor = () => {
  document.body.style.background = 
   `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
// print randomly selected color in place "-"
    printColor.innerHTML = document.body.style.background;  
}

buttonColor.addEventListener("click", getRandomHexColor);


