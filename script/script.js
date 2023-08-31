import userAuth from "./login.js";
import { users } from "./database.js";

if(localStorage.getItem("auth")) {
    window.location.replace("index.html")
}

if(localStorage.getItem("newUser")) {
    const parsed = JSON.parse(localStorage.getItem("newUser"))
    users.push(...parsed)
}

userAuth()