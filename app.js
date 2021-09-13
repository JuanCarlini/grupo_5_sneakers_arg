const express = require("express");

const app = express();

const mainRoutes = require('./routers/main')

const adminRoute = require('./routers/main')

const logMiddleware = require("./middlewares/logMiddleware")

app.use(express.static('./public')); 

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/', mainRoutes)

app.use('/admin', adminRoute)

app.use(logMiddleware);


app.listen(3000, () =>{
    console.log("Servidor corriendo en 3000");
})


