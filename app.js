/* -- Requires --- */
const express = require("express");
const session = require("express-session");
const path = require("path");
const methodOverride = require("method-override");

const mainRoutes = require('./routers/main')
const adminRoute = require('./routers/main')
const profileRoute = require('./routers/main')
const logMiddleware = require("./middlewares/logMiddleware");
const profileImages = require("./middlewares/profileImages");

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

app.use(express.static('./public')); 

app.set('view engine', 'ejs');

app.use(express.json());

app.use(methodOverride("_method"));

//app.use(logMiddleware);

app.use(profileRoute);

app.use('/', mainRoutes)

app.use('/admin', adminRoute)

app.listen(3000, () =>{
    console.log("Servidor corriendo en 3000");
})
