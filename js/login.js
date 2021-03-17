import createMenu from "./createMenu.js";

createMenu();

// Log in to get to the admin pages.

const username = document.querySelector("input");
const characterCount = document.querySelector(".character-count span");
const submitButton = document.querySelector("button[type='submit']");
const form = document.querySelector("#logInForm");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

username.onkeyup = function (event) {

    console.log(event.target.value.length);

    const len = event.target.value.length;
    
    characterCount.innerHTML = len;

    if(len >= 7) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }

};


function validateEmail(email)  {

    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;

}


function validateForm(event)  {
    event.preventDefault();

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

}
form.addEventListener("submit", validateForm);



form.onsubmit = function (event)  {

    event.preventDefault();

    console.log(event);

}


