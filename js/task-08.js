'use strict';
// select form .login-form
const form = document.querySelector(".login-form");

const handleSubmit = (event) => {
// block browser refreshing
event.preventDefault();
// grab email and password input to elements object
const {
    elements: { email, password }
} = event.currentTarget;
// if email or password empty
if (email.value === "" || password.value === "") {
    return alert("All fields should be filled");
}
// print values of email and password to the console
console.log(`Email: ${email.value}, Password: ${password.value}`);

// clear input fields with method reset()
event.currentTarget.reset();
};

form.addEventListener("submit", handleSubmit);
