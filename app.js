const express = require("express");

const session = require("express-session");

const path = require("path");

const methodOverride = require("method-override");

const app = express();

app.use(express.urlencoded({ extended: false })); 

const logMiddleware = require("./middlewares/logMiddleware");

const profileImages = require("./middlewares/profileImages");

const mainRoutes = require('./routers/main')

const adminRoute = require('./routers/main')

const profileRoute = require('./routers/main')




const { use } = require("./routers/main");

app.use(express.static('./public')); 

app.set('view engine', 'ejs');

app.use(express.json());

app.use(methodOverride("_method"));

app.use(session({secret: "Secreto"}));

app.use('/', mainRoutes)

app.use('/admin', adminRoute)

app.use(logMiddleware);

app.use(profileImages);

app.use(profileRoute);


app.listen(3000, () =>{
    console.log("Servidor corriendo en 3000");
})


