'use strict'
// create var to store current counter value
let counterValue = 0;
// counter in HTML
let value = document.getElementById("value");

// select button
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

const handleClickDecr = () => {
    counterValue--;
// assign to HTML value counterValue
    value.innerHTML = counterValue;    
};
const handleClickIncr = () => {
    counterValue++;
// assign to HTML value counterValue
    value.innerHTML = counterValue;    
};
// callback function
decrementButton.addEventListener("click", handleClickDecr);
incrementButton.addEventListener("click", handleClickIncr);

