import { products } from "./database.js"

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
    const submitBtn = document.getElementById("submit-btn")

    radioInputs.forEach((input) => {
        input.addEventListener('change', (e) => {
            const { checked, value } = e.target
            if (checked) {
                userInput.category = value
                console.log(userInput)
            }
        })
    })

    for (let name in products) {
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

        while (selectInput.children[2]) {
            selectInput.removeChild(selectInput.children[2])
        }

        for (let phone of products[value]) {
            const option = document.createElement("option")
            option.innerText = phone.name
            option.setAttribute("value", phone.type)
            selectTag.appendChild(option)

            option.addEventListener("click", (e) => {
                const { value } = e.target
                userInput.type = value
            })
        }

        selectInput.appendChild(selectTag)

        submitBtn.addEventListener("click", (e) => {
            e.preventDefault()

            const { product, category, type } = userInput

            if (!product || !category || !type) return

            const multiplier = {
                perfect: 0.9,
                good: 0.6,
                bad: 0.4,
            }

            const [filtered] = products[product].filter(phone => phone.type === type)


            const addedItem = {
                ...filtered,
                condition: category,
                price: filtered.price * multiplier[category]
            }

            if (!localStorage.getItem("newProducts")) localStorage.setItem("newProducts", JSON.stringify([addedItem]))
            else {
                const parsed = JSON.parse(localStorage.getItem("newProducts"))
                parsed.push(addedItem)
                localStorage.setItem("newProducts", JSON.stringify(parsed))
            }

            location.reload()
        })
    })
}

export default showForm


