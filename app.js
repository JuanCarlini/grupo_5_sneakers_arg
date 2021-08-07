const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3000, () =>{
    console.log("Servidor corriendo en 3000");
})

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.post("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.get("/log-in", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/log-in.html"))
})

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})

app.get("/carrito", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/carrito.html"))
})

app.get("/detalle-del-producto", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/detalle-del-producto.html"))
})
