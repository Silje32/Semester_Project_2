import { url } from "./api.js"; 
import createMenu from "./createMenu.js";

createMenu();


const queryString = document.location.search;

const  params = new URLSearchParams(queryString);

const id = params.get("id");

if (!id) {
   document.location.href = "/";
}

const detailUrl = url + "products/" + id;
console.log(detailUrl);



// Make a GET request to fetch a list of resources from your API.

const detailsContainer = document.querySelector(".details-container");

(async function() { 
   try {
       const response = await fetch(detailUrl);
       const details = await response.json();
       //console.log(details);

       document.title = details.name;


       const detailsContainer = document.querySelector(".details-container");

       detailsContainer.innerHTML = `<h1>${details.title}</h2>
                                      <p>${details.description}</p>
                                      <p>Price: ${details.price} $</p>
                                      <img src=${details.image_url}>`;

       console.log(details); 
   }
   catch(error) {

   }

})(); 
