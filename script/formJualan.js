import { products } from "./database.js"

const form = document.getElementById("jual-form-container")

const createSelectInput = (objects, required = true) => {
    const select = document.createElement("select")
    const defaultOption = document.createElement("option")

    select.setAttribute("required", "true")

    if(required) select.setAttribute("required", "true")

    for(let obj in objects) {

    }
}