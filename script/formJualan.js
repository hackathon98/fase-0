import { products } from "./database.js"

const form = document.getElementById("jual-form-container")

const createSelectInput = (objects, required = true) => {
    const select = document.createElement("select")
    const defaultOption = document.createElement("option")
    
    select.appendChild(defaultOption)
    select.setAttribute("id", "state")
    select.classList.add("form-select")
    
    if(required) select.setAttribute("required", "true")
    
    for(let obj in objects) {
        const option = document.createElement("option")
        option.setAttribute("value", obj)
        option.innerText = objects[obj]
        select.appendChild(option)
    }

    return select
}

// const createRadio = (objects) => {
//     const 
// }

