/*  Display a list of all the products added to Strapi. Each product must display its title, price and image.*/


export function renderProducts(productsToRender) {
    const productsContainer = document.querySelector(".products-container");
    productsContainer.innerHTML = "";

    productsToRender.forEach(function (product)  {
        productsContainer.innerHTML += `<div class="products" href="products.html?id=${product.id}"  data-id="${product.id}">
                                      <h2>${product.title}</h2>
                                      <p>${product.price}</p>
                                      <img src="${product.image}"  data-id="${product.id}"/>
                                      </div>`;
    
    });
}
