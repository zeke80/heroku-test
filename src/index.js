const express = require("express")
const exphbs = require("express-handlebars");
const path = require("path")

const bodyParser = require('body-parser');
const session = require("express-session")

const app = express()

app.set("port" , process.env.PORT || 3000)
app.set("views", path.join(__dirname,"views"))
app.engine(".hbs", exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs"
}))
app.set("view engine", "hbs")

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(session({
    secret: "mysecretapp",
    resave: true,
    saveUninitialized: true
}))

app.use(require("./routes"))

app.use(express.static(path.join(__dirname,"public")))

app.listen(app.get("port"), ()=>{
    console.log("Server on port", app.get("port"))
})