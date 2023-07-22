const buttonColor = document.querySelector(".change-color");

const getRandomHexColor = () => {
  document.body.style.background = 
   `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonColor.addEventListener("click", getRandomHexColor);
