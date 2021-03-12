import createMenu from "./createMenu.js";

createMenu();

// Log in to get to the admin pages.

const message = document.querySelector("textarea");
const characterCount = document.querySelector(".character-count span");
const submitButton = document.querySelector("button[type='submit']");

message.onkeyup = function (event) {

    console.log(event.target.value.length);

    const len = event.target.value.length;
    
    characterCount.innerHTML = len;

    if(len >= 7) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }

};

