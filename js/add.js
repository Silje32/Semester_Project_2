import { url }  from "./api.js"; 
import { getToken }  from "./storage.js"; 
import createMenu from "./createMenu.js";

createMenu();

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");


form.addEventListener("submit", submitForm);

function submitForm(event)  {
    event.preventDefault();
    
    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();

    if(titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0 ) {
        formError.style.display = "none";
    } else {
        formError.style.display = "block";
    }

    addProduct(titleValue, priceValue, descriptionValue);
}

async function addProduct(title, price, description) {
    const productsUrl = url + "products";
    
    const data = JSON.stringify({ title: title, price: price, description: description });

    const token = getToken();

    const options = {
        method: "POST",
        body: data, 
        headers: {
            "Content-Type": "application/json", 
            Authorization: `Bearer ${token}` 
        },
  
     };

    try {
        const response = await fetch(productsUrl, options);
        const json = await response.json();
        console.log(json);
    }
    catch(error) {
        console.log(error)
    }

}