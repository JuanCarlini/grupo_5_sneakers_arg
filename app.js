const express = require("express");
<<<<<<< HEAD
const react = require('react')
=======

>>>>>>> e3d4896d7bbd2258e041e6d8843d5d640a67653f
const app = express();

const mainRoutes = require('./routers/main')

app.use(express.static('./public')); 

<<<<<<< HEAD
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
=======
app.set('view engine', 'ejs');



app.use('/', mainRoutes)



app.listen(3000, () =>{
    console.log("Servidor corriendo en 3000");
})


>>>>>>> e3d4896d7bbd2258e041e6d8843d5d640a67653f
