export default function createMenu()  {

    const { pathname } = document.location;

    console.log(pathname);

    const container = document.querySelector(".menu-container");

    container.innerHTML = `<div class="menu">
                                <a href="/" class="${pathname === "/" ? "active" : ""}">Home</a>
                                <a href="products.html" class="${pathname === "/products.html" ? "active" : ""}">Products</a>
                                <a href="login.html" class="${pathname === "/login.html" ? "active" : ""}">Login</a>
                                <i class="fa fa-shopping-bag"></i>
                           </div>`; 

}