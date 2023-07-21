'use strict'
// selelct elements by id
const textInput = document.getElementById("name-input");
const textOutput = document.getElementById("name-output");

// add event listener
textInput.addEventListener("input", (event) => {
    textOutput.textContent = event.currentTarget.value;
})
