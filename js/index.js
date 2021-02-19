import { url } from "./api.js"; 
/* import { createBanner } from "./createBanner.js"; */
/* import { clickFlag } from "./flagIcon.js"; */
import { saveToStorage } from "./localStorage.js";
import { getFromStorage } from "./getFromStorage.js";


/* const getArticle = getFromStorage; */

/* clickFlag(); */


// Make a GET request to fetch a list of resources from your API.

const productsUrl = url + "products";


 (async function ()  {

    const container = document.querySelector(".product-container");

    try { 

        const response = await fetch(productsUrl);
        const json = await response.json();

        container.innerHTML = "";


        /* Create HTML for each item. Each product has a featured flag that can be turned on or off.
           When the flag is on, the product should be displayed on the homepage. */
           
        json.forEach(function (products) {
            container.innerHTML += `<a class="product" href="index.html?id=${products.id}"> 
                                    <h3>${products.title}</h3>  <i class="far fa-flag" data-id="${products.id}"></i>
                                    <p>${products.description}</p>
                                    <p>Price: ${products.price}</p>
                                   </a>`;

        }); 


    } catch(error) {

        console.log(error);
    } 

})();   


