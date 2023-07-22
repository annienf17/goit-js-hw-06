'use strict'
const textInput = document.querySelector("input");

textInput.addEventListener("focus", () => {
   
    if(textInput.value.length === 6){
       textInput.classList.add('valid') 
    } else if (textInput.innerHTML.length !== 6) {
        textInput.classList.add('invalid') 
    }
    
});