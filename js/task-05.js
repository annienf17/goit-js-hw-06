'use strict'
// selelct elements by id
const textInput = document.getElementById("name-input");
const output = document.getElementById("name-output");

console.log(output.innerHTML.length);
console.log(output.innerHTML);

// when input written
const handleInputText = (event) => {
     if(textInput.value.length > 0) {
        output.innerHTML = event.currentTarget.value;
    } else if(textInput.value.length < 1) {
        output.innerHTML = "Anonymous";     
    }
};
textInput.addEventListener("input", handleInputText);

