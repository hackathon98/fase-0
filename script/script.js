import userAuth from "./login.js";
import { users } from "./database.js";

if(localStorage.getItem("newUser")) {
    const parsed = JSON.parse(localStorage.getItem("newUser"))
    users.push(...parsed)
    console.log(users)
}

console.log(users)

userAuth()