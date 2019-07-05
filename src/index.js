const express = require("express")
const path = require("path")
const ejs = require("ejs")

const app = express()

app.set("port" , process.env.PORT || 3000)
app.set("views", path.join(__dirname,"views"))
app.set("view engine", "ejs")

app.use(require("./routes"))

app.use(express.static(path.join(__dirname,"public")))

app.listen(app.get("port"), ()=>{
    console.log("Server on port", app.get("port"))
})