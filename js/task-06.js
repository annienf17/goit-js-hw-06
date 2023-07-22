'use strict'
const textInput = document.querySelector("input");
const setFocusInput = document.querySelector('[data-length="6"]');
setFocusInput.addEventListener("click", () => {
    textInput.focus();
});
textInput.addEventListener("focus", () => {
   
    if(textInput.length === 6){
       textInput.classList.add('valid') 
    } else if (textInput !== 6) {
        textInput.classList.add('invalid') 
    }
    
})