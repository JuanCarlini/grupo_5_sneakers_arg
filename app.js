const express = require("express");

const session = require("express-session");

const methodOverride = require("method-override");

const app = express();

const mainRoutes = require('./routers/main')

const adminRoute = require('./routers/main')

const logMiddleware = require("./middlewares/logMiddleware");
const { use } = require("./routers/main");

app.use(express.static('./public')); 

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride("_method"));

app.use(session({secret: "Secreto"}));

app.use('/', mainRoutes)

app.use('/admin', adminRoute)

app.use(logMiddleware);


app.listen(3000, () =>{
    console.log("Servidor corriendo en 3000");
})


