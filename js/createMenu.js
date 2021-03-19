import { getUsername }  from "./storage.js"; 

export default function createMenu()  {

    const { pathname } = document.location;
    console.log(pathname);


    const username = getUsername();
    console.log(username); 

    let authLink =  `<a href="login.html" class="${pathname === "/login.html" ? "active" : ""}">Login</a>`

    if (username) {
        authLink = `<span>Hi ${username}</span>`;
    }


    const container = document.querySelector(".menu-container");

    container.innerHTML = `<div class="menu">
                                <a href="/" class="${pathname === "/" ? "active" : ""}">Home</a>
                                <a href="products.html" class="${pathname === "/products.html" ? "active" : ""}">Products</a>
                                ${authLink}
                                <a href="cart-basket.html" i class="fa fa-shopping-bag"></i></a>
                           </div>`; 

}