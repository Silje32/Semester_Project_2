import { url } from "./api.js"; 
import { getToken }  from "./storage.js"; 

export default function deleteButton(id)  {

    const deleteButton = document.querySelector(".delete");

    deleteButton.innerHTML = `<button type ="button" class="delete">Delete Product</div>`;
    

}