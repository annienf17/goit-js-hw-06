'use strict';

const textInput = document.querySelector("#validation-input");

const handleText = () => {
    if(textInput.value.length <= 6){
       textInput.classList.add('invalid') 

    } else if (textInput.value.length > 6) {
        textInput.classList.remove('invalid')
        textInput.classList.add('valid')
    }
}
textInput.addEventListener("focus", handleText);


    