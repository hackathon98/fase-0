import { products } from "./database.js"

const generateProductCard = (product) => {
    const { 
        name, 
        image, 
        price,
    } = product

    let toIdr = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });

    const displayCondition = product.condition.charAt(0).toUpperCase() + product.condition.slice(1)

    const card = document.createElement("div")
    const innerCard = document.createElement("div")
    const productImage = document.createElement("img")
    const cardBody = document.createElement("div")
    const textCenter = document.createElement("div")
    const productName = document.createElement("h5")
    const phoneCondition = document.createElement("div")
    const phonePrice = document.createElement("div")
    

    card.classList.add("col", "mb-5")
    innerCard.classList.add("card", "h-100")
    productImage.classList.add("card-img-top")
    productImage.setAttribute("src", image)
    productImage.setAttribute("alt", name)
    cardBody.classList.add("card-body", "p-4")
    textCenter.classList.add("text-center")
    productName.classList.add("fw-bolder")
    productName.innerText = name
    phoneCondition.classList.add("phoneCondition")
    phoneCondition.innerText = `Kondisi : ${displayCondition}`
    phonePrice.classList.add("phonePrice")
    phonePrice.innerText = `${toIdr.format(price)}`
    
    textCenter.appendChild(productName)
    textCenter.appendChild(phoneCondition)
    textCenter.appendChild(phonePrice)
    cardBody.appendChild(textCenter)
    innerCard.appendChild(productImage)
    innerCard.appendChild(cardBody)
    card.appendChild(innerCard)

    return card
}

const appendProducts = () => {
    const container = document.getElementById("products-container")

    for(let category in products) {
        for(let product of products[category]) {
            const card = generateProductCard(product)
            container.appendChild(card)
        }
    }
}

export default appendProducts