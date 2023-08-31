import { userSignOut } from "./login.js"
import { users } from "./database.js";

const currLoggedId = localStorage.getItem("auth")
const newUsers = localStorage.getItem("newUser")

if(!currLoggedId) window.location.replace("sign-in.html")

if(newUsers) {
    const parsed= JSON.parse(newUsers)
    users.push(...parsed)
}

const [ loggedUser ] = users.filter(user => user.id === +currLoggedId)

const userInfo = document.getElementById("user-info")
userInfo.innerText = `Halo, ${loggedUser.fullName ? loggedUser.fullName : "Pengguna Baru"}`

userSignOut()

