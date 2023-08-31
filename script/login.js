import { users } from "./database.js"
import modalBox from "./modal.js"

const userAuth = () => {
    const signupBtn = document.getElementById("signup-btn")
    const loginBtn = document.getElementById("login-btn")
    const usernameInput = document.querySelector(".form-floating #floatingInput")
    const passwordInput = document.querySelector(".form-floating #floatingPassword")
    
    const input = {
        username : "",
        password : "",
    }
    
    usernameInput.addEventListener("change", (e) => {
        const {value, name} = e.target
        input[name] = value
        console.log(input)
    })
    
    passwordInput.addEventListener("change", (e) => {
        const {value, name} = e.target
        input[name] = value
        console.log(input)
    })
    
    loginBtn.addEventListener("click", (e) => {
        e.preventDefault()
    
        for(let user of users) {
            if(user.username === input.username) {
                if(user.password === input.password) {
                    localStorage.setItem("auth", user.id)
                    location.reload()
                    return
                }
                modalBox("Password is incorrect")
                return
            }
        }
        modalBox("Username is incorrect")
    })
    
    signupBtn.addEventListener("click", (e) => {
        e.preventDefault()
    
        for(let user of users) {
            if(user.username === input.username) {
                modalBox("User name is already being used")
                return
            }
        }

        const newUser = {
            id: users[users.length - 1].id + 1,
            username: input.username,
            password: input.password,
            fullName: "",
        }
    

        if(localStorage.getItem("newUser")) {
            const parsed = JSON.parse(localStorage.getItem("newUser"))

            parsed.push(newUser)

            localStorage.setItem("newUser", JSON.stringify(parsed))
        } else localStorage.setItem("newUser", JSON.stringify([newUser]))        
    
        localStorage.setItem("auth", newUser.id)

        location.reload()
        return
    })
    
    
}

const userSignOut = () => {
    const signoutBtn = document.getElementById("signout-btn")

    signoutBtn.addEventListener("click", (e) => {
        e.preventDefault()
        console.log("masuk")
        localStorage.removeItem("auth")
        location.reload()
    })
}

export { userAuth, userSignOut }


