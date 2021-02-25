import { url } from "./api.js"; 


// Make a GET request to fetch a list of resources from your API.

const productsUrl = url + "products";
const productsContainer = document.querySelector(".products-container");

 (async function ()  {

    try { 

        const response = await fetch(productsUrl);
        const json = await response.json();

        productsContainer.innerHTML = "";


/*  Display a list of all the products added to Strapi. Each product must display its title, price and image.*/

json.forEach(function (product)  {
    productsContainer.innerHTML += `<div class="products" href="products.html?id=${product.id}  data-id="${product.id}">
                                  <h2>${product.title}</h2>
                                  <h4>${product.price}</h4>
                                  <img>${product.img} </img> 
                             </div>`;

});

} catch(error) {

    console.log(error);
} 

})();   



/* A search text box. When searching (filtering), only the products that include the searched text in their 
   title or description should be listed.  */

const search = document.querySelector(".search");

search.onkeyup = function (event) { 
    
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredProduct = url.filter(function (product) {
        if(product.title.toLowerCase().startsWidt(searchValue)) {
           return true;
        }

    })

    console.log(filteredProduct);
};



/* A search text box. When searching (filtering), only the products that include the searched text in their 
   title or description should be listed.  */


   /* function searchProduct(list)  {
    const search = document.querySelector(".search");


        const filteredProduct = list.filter (function (list)  {
            
            if(list.title.toLowerCase().startsWidt(filterValue)) {

                return true;
            }

        });
           console.log(filteredProduct);

           newList = filteredProduct;



    };

}*/


