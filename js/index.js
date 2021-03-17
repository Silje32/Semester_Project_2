import { url }  from "./api.js"; 
import createMenu from "./createMenu.js";

createMenu();

const queryString = document.location.search;
console.log(queryString);

const  params = new URLSearchParams(queryString);
console.log(params);

const id = params.get("id");
console.log(id);


const homeUrl = url + "home";


// Make a GET request to fetch a list of resources from your API.

(async function getBanner()  {
    const heroBanner = document.querySelector(".image-container");
    
    try { 
        const response = await fetch(homeUrl);
        const banner = await response.json();
        console.log(banner);

        const imageBanner = banner;

        
        // Display a hero banner on the home page. 
        let html = "";
            html = `"${imageBanner.hero_banner.name}"  alt text="${imageBanner.hero_banner_alt_text}">`;
             
        heroBanner.innerHTML = html;
     
     }


    catch(error) {
        console.log(error);
} 
     
})(); 



// Make a GET request to fetch a list of resources from your API.

const productsUrl = url + "products";

 (async function ()  {
    const productContainer = document.querySelector(".product-container");

    try { 
        const response = await fetch(productsUrl);
        const json = await response.json();
        console.log(json);


        /* Create HTML for each item. Each product has a featured flag that can be turned on or off. */
        json.forEach(function (product) {
            productContainer.innerHTML += `<div class="product" href="index.html?id=${product.id}">
                                           <h2>${product.title}</h2>  
                                           <i class="fa fa-flag"></i>
                                           <p>${product.description}</p>
                                           <p>Price: ${product.price} $</p>
                                           <img src=${product.image}>
                                           </div>`;

        });


    } catch(error) {

        console.log(error);
    } 

})();   
