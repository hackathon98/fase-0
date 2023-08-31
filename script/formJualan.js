import { products, users } from "./database.js"

const formContainer = document.getElementById("jual-form-container")

const userInput = {
    product: "",
    type: "",
    category: "",
}

const showForm = () => {
    const formDialog = document.getElementById("jual-form-container")
    const formBtn = document.getElementById("form-btn")
    const closeBtn = document.getElementById("close-dialog")
    const selectProduct = document.getElementById("product")
    const options = {
        "iphone-11" : [
            
        ],
        "iphone-12" : [],
        "iphone-13" : [],
        "iphone-14" : [],
    }

    
    formBtn.addEventListener("click", () => {
        formDialog.showModal()
    })
    closeBtn.addEventListener("click", () => {
        formDialog.close()
    })
    
    
}

export default showForm



/*

{
    "iphone-11" : [
        [val, text],
        [val, text],
        [val, text],
        [val, text],
    ],
}

*/

// const formInput = () => {
//     const currUserId = localStorage.getItem("auth")
//     const [ currUser ] = users.filter(user => user.id === +currUserId) 

//     const form = document.createElement("form")

//     if(currUser.name === "") {

//     }

//     const headProduct = titleTag("h4", "Select your iPhone", "mb-3")

//     headProduct.style.marginTop = "40px"

    

    
// }

// const titleTag = (tag, text, ...className) => {
//     const header = document.createElement(tag)

//     header.innerText = text

//     if(className.length !== 0) header.classList.add(...classList)

//     return header
// }

// const createSelectInput = (arr, type, required = true) => {
//     const select = document.createElement("select")
//     const defaultOption = document.createElement("option")
    
//     select.appendChild(defaultOption)
//     select.setAttribute("id", "state")
//     select.classList.add("form-select")
    
//     if(required) select.setAttribute("required", "true")
    
//     for(let name of arr) {
//         const [val, text ] = name
//         const option = document.createElement("option")
//         option.setAttribute("value", val)
//         option.innerText = text

//         select.appendChild(option)
//     }

//     select.addEventListener("change", (e) => {
//         const { value } = e.target 
//         userInput[type] = value
//     })

//     return select
// }

// const createRadio = (name, id, text, input, required = true) => {
//     const formCheck = document.createElement("div")
//     const input = document.createElement("input")
//     const label = document.createElement("label")

//     input.setAttribute("id", id)
//     input.setAttribute("name", name)
//     input.setAttribute("type", "radio")
//     input.classList.add("form-check-input")

//     label.setAttribute("for", id)
//     label.classList.add("form-check-label")
//     label.innerText = text

//     if(required) input.setAttribute("required", "true")

//     formCheck.classList.add("form-check")

//     formCheck.appendChild(input)
//     formCheck.appendChild(label)

//     formCheck.addEventListener("click", (e) => {
//         const { value } = e.target 
//         userInput[name] = value
//     })

//     return formCheck
// }

// export default form


