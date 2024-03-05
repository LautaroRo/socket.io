import express from "express"
import __dirname from "./utils.js"
import handlebars from "express-handlebars"
import { Server } from "socket.io"

const app = express()

app.set("views", __dirname + "/views")
app.set("view engine", "handlebars")
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.engine("handlebars", handlebars.engine())
app.use(express.static(__dirname + "/public"))



app.get("/", (req,res) => {
    res.render("home", {user:users})
})




const server = app.listen(8081, () => console.log("servidor corriendo"))

const io = new Server(server)

const users = []
io.on("connection", socket => {

    socket.on("user", (data) => {
        users.push({socketid:socket.id, user: data})
        io.emit("user",{users})
    })

})

