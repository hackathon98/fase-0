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
    const radioInputs = document.querySelectorAll('input[type="radio"][name="condition"]')

    radioInputs.forEach((input) => {
        input.addEventListener('change', (e) => {
            const { checked, value } = e.target
            if (checked) {
                userInput.category = value
                console.log(userInput)
            }
        })
    })

    for(let name in products) {
        const option = document.createElement("option")
        option.setAttribute("value", name)
        name = name.split("-").join(" ")
        name = name[0] + name[1].toUpperCase() + name.slice(2)
        option.innerText = name

        selectProduct.appendChild(option)
    }

    
    formBtn.addEventListener("click", () => {
        formDialog.showModal()
    })
    closeBtn.addEventListener("click", () => {
        formDialog.close()
    })
    
    selectProduct.addEventListener("change", (e) => {
        const { value } = e.target
        const selectTag = document.createElement("select")
        const selectInput = document.getElementById("select-input")
        selectTag.classList.add("form-select")
        selectTag.setAttribute("required", "true")
        selectTag.style.marginTop = "8px"

        userInput.product = value

        while(selectInput.children[2]) {
            selectInput.removeChild(selectInput.children[2])
        }
        
        for(let phone of products[value]) {
            const option = document.createElement("option")
            option.innerText = phone.name
            option.setAttribute("value", phone.type)
            selectTag.appendChild(option)
            
            option.addEventListener("click", (e) => {
                const { value } = e.target
                console.log(value)
            })
        }
        
        selectInput.appendChild(selectTag)
    })
}

export default showForm


