/* -- Requires --- */
const express = require("express");
const session = require("express-session");
const path = require("path");
const methodOverride = require("method-override");

const mainRoutes = require('./routers/main')
const adminRoute = require('./routers/adminRoutes')
const usuariosController = require("./controllers/usuariosController");






const app = express();

/* -- Middlewares --- */
app.use(express.urlencoded({ extended: false })); 
//app.use(session({secret: "Secreto"}));
app.use(session({
  secret: 'Secreto',
  resave: false,
  saveUninitialized: false
}))
const { use } = require("./routers/main");

// Session:

app.use(session({
  secret: "Es un secreto!",
  resave: false,
  saveUninitialized: false,
}))


app.use(express.static('./public')); 

app.set('view engine', 'ejs');

app.use(express.json());

app.use(methodOverride("_method"));

//app.use(logMiddleware);

/* app.use(profileRoute); */

app.use('/', mainRoutes)

app.use('/admin', adminRoute)



// CRUD BASE DE DATOS:

app.use('/register', mainRoutes)

/* app.use('/productos', productosRouter) */

// Express Session:



// API

app.use('/users', mainRoutes)

// Servidor:

app.listen(3000, () =>{
    console.log("Servidor corriendo en el puerto 3000");
})
