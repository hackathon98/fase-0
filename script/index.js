import { userSignOut } from "./login.js"
import { users, products } from "./database.js"
import appendProducts from "./displayProduct.js"
import showForm from "./formJualan.js"

const currLoggedId = localStorage.getItem("auth")
const newUsers = localStorage.getItem("newUser")
const newProducts = localStorage.getItem("newProducts")

if(!currLoggedId) {
    window.location.replace("sign-in.html")
}

if(newUsers) {
    const parsed = JSON.parse(newUsers)
    users.push(...parsed)
}

if(newProducts) {
    const parsed = JSON.parse(newProducts)
    console.log(parsed)
    for(let name in products) {
        for(let newProd of parsed) {
            if(products[name].filter(phone => phone.type === newProd.type).length !== 0) {
                products[name].push(newProd)

                break
            }
        }
    }
}

const [ loggedUser ] = users.filter(user => user.id === +currLoggedId)

const userInfo = document.getElementById("user-info")
userInfo.innerText = `Halo, ${loggedUser?.fullName ? loggedUser.fullName : "Pengguna Baru"}`

showForm()


userSignOut()
appendProducts()

