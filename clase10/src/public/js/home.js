const socket = io()

const form = document.getElementById("form")
const log = document.getElementById("log")
const delet = document.querySelector(".delete")

let logs = "";

form.addEventListener("submit", e => {

    e.preventDefault()


    let info = {
        username: e.target.username.value,
        age: e.target.age.value
    }

    socket.emit("user", info)

    e.target.username.value = ""
    e.target.age.value = ""


    log.innerHTML += `<div style="display: flex; flex-direction: row; align-items: center">
                        <p>${info.username} ${info.age}</p>
                    </div>`;
})

