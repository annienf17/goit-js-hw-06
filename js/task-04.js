'use strict'
// create var to store current counter value
let counterValue = 0;
// counter in HTML
let value = document.getElementById("value");
// select button
const button = document.querySelector("button");

const handleClick = () => {
    counterValue--;
// assign to HTML value counterValue
    value.innerHTML = counterValue;    
};

button.addEventListener("click", handleClick);

