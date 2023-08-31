import { users } from "./database.js"

const userAuth = () => {
    const signupBtn = document.getElementById("signup-btn")
    const loginBtn = document.getElementById("login-btn")
    const signoutBtn = document.getElementById("signout-btn")
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
                    // window.location("index.html")
                    return
                }
                // messageModal("Password is incorrect")
                alert("Password is incorrect")
                return
            }
        }
        // messageModal("Username is incorrect")
        alert("Username is incorrect")
    })
    
    signupBtn.addEventListener("click", (e) => {
        e.preventDefault()
    
        for(let user of users) {
            if(user.username === input.username) {
                alert("User name is already being used")
                // messageModal("User name is already being used")
                return
            }
        }

        const newUser = {
            id: users[users.length - 1].id + 1,
            username: input.username,
            password: input.password,
            fullName: "",
        }
    
        // users.push(
        //     newUser
        // )

        if(localStorage.getItem("newUser")) {
            const parsed = JSON.parse(localStorage.getItem("newUser"))

            parsed.push(newUser)

            localStorage.setItem("newUser", JSON.stringify(parsed))
        } else localStorage.setItem("newUser", JSON.stringify([newUser]))        
    
        localStorage.setItem("auth", newUser.id)

        location.reload()
        // window.location("index.html")
        return
    })
    
    signoutBtn.addEventListener("click", (e) => {
        e.preventDefault()
        localStorage.removeItem("auth")
        location.reload()

        // window.location("sign-in.html")

    })
}

export default userAuth


