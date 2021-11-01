const db = require("../database/models");

const usuariosController ={
    crear: function(req,res){
        db.Usuarios.create({
            id: req.body.id,
            name: req.body.name,
            surname: req.body.surname, 
            email: req.body.email, 
            user: req.body.user,
            pass: req.body.pass, 
            avatar: req.body.avatar  
        })

    }

}
 
res.redirect('/register')

module.exports = usuariosController;