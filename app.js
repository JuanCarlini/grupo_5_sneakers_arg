const express = require("express");
const react = require('react')
const app = express();
const path = require("path");

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3000, () =>{
    console.log("Servidor corriendo en 3000");
})

react.get("/", (req, res) => {
    render(path.resolve(__dirname, "./views/home.html"))
})

react.post("/", (req, res) => {
    render(path.resolve(__dirname, "./views/home.html"))
})

react.get("/log-in", (req, res) => {
    render(path.resolve(__dirname, "./views/log-in.html"))
})

react.get("/register", (req, res) => {
    render(path.resolve(__dirname, "./views/register.html"))
})

react.get("/carrito", (req, res) => {
    render(path.resolve(__dirname, "./views/carrito.html"))
})

react.get("/detalle-del-producto", (req, res) => {
    render(path.resolve(__dirname, "./views/detalle-del-producto.html"))
})