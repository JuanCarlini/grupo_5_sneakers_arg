const express = require("express");

const app = express();

const mainRoutes = require('./routers/main')

app.use(express.static('./public')); 

app.set('view engine', 'ejs');



app.use('/', mainRoutes)



app.listen(3000, () =>{
    console.log("Servidor corriendo en 3000");
})


