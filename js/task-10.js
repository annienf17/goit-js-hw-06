function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const createBoxes = (amount) => {
const boxes = document.getElementById("boxes");
const div = document.createElement("div");
boxes.append(div*amount);

}