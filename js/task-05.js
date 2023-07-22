'use strict'
// selelct elements by id
const textInput = document.getElementById("name-input");
const output = document.getElementById("name-output");
console.log(output.innerHTML.length);
console.log(output.innerHTML);

// when input written
const handleInputText = (event) => {
output.innerHTML = event.currentTarget.value;  
};
textInput.addEventListener("input", handleInputText);

