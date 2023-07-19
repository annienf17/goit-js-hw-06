const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// get ul ingrediens
const ulList = document.querySelector("#ingredients");
// create li emement
const liList = document.createElement("li");
// add class .item
liList.className = "item";
// add text of first li element
liList.textContent = "Potatoes";
// dodaj el klasy item do ul list 
ulList.append(liList);
// add array of the rest of elements
const updateList = ingredients.slice(1, 6).map((ingredient) => 
`<li class="item">${ingredient}</li>`).join("");
ulList.insertAdjacentHTML("beforeend", updateList);