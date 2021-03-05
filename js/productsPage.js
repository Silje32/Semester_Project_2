import { url } from "./api.js"; 
import { renderProducts } from "./renderProducts.js";
import { searchProduct } from "./searchProduct.js";


const productsUrl = url + "products";

// Make a GET request to fetch a list of resources from your API.

async function getProducts()  {

    try { 

        const response = await fetch(productsUrl);
        const json = await response.json();
        console.log(json);

        // The array
        const productsToRender = json;

        renderProducts(productsToRender);
        searchProduct(productsToRender);
    } catch(error) {
        console.log(error);
    } 

}
getProducts();   



