import { styleSetter } from "./utils.js"

const modalBox = (message, isModal = true) => {
    if(!message || typeof message !== "string") return

    const modal = document.querySelector("[modal-box]")
    const closeBtn = document.createElement("button")
    const pMessage = document.createElement("p")
    const content = document.createElement("div")

    closeBtn.classList.add("btn", "btn-danger")
    closeBtn.setAttribute("type", "button")

    pMessage.innerText = message
    pMessage.classList.add("card-text")
    closeBtn.innerHTML = "Understood"
    content.appendChild(pMessage)
    content.appendChild(closeBtn)

    styleSetter({
        padding: "8px 48px",
        border: "none",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        borderRadius: "8px",
        minHeight: "20vh",
        minWidth: "20vw ",
        fontSize: "1.3em",
    }, modal.style)

    styleSetter({
        display: "flex",
        flexDirection: "column",
        rowGap: "8px",
    }, content.style)
    

    modal.appendChild(content)

    closeBtn.addEventListener("click", () => {
        while(modal.firstChild) {
            modal.removeChild(modal.firstChild)
        }

        styleSetter({
            minHeight: "0",
            minWidth: "0",
        }, modal.style)

        modal.close()
    })

    if(isModal) modal.showModal()
    else modal.show()
}

export default modalBox