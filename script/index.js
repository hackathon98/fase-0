import { userSignOut } from "./login.js"
import { users } from "./database.js"
import appendProducts from "./displayProduct.js"
import showForm from "./formJualan.js"

const currLoggedId = localStorage.getItem("auth")
const newUsers = localStorage.getItem("newUser")
const [ loggedUser ] = users.filter(user => user.id === +currLoggedId)
console.log(loggedUser)

if(!currLoggedId && loggedUser) window.location.replace("sign-in.html")

if(newUsers) {
    const parsed= JSON.parse(newUsers)
    users.push(...parsed)
}


const userInfo = document.getElementById("user-info")
userInfo.innerText = `Halo, ${loggedUser?.fullName ? loggedUser.fullName : "Pengguna Baru"}`

showForm()


userSignOut()
appendProducts()

