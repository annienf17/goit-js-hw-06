'use strict'
const textInput = document.querySelector("input");

const handleText = () => {
    if(textInput.value.length === 6){
       textInput.classList.add('valid') 
    } else if (textInput.innerHTML.length !== 6) {
        textInput.classList.add('invalid') 
    }
}

textInput.addEventListener("focus", handleText);


    