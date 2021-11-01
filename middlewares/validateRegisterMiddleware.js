const { body } = require('express-validator');
const path = require('path');



const validations =  [
    body ('name').notEmpty().withMessage("Nombre no puede estar vacío"),
    body ('surname').notEmpty().withMessage("Apellido no puede estar vacío"),
    body ('user').notEmpty().withMessage("Nombre de usuario no puede estar vacío"),
    body ('pass').notEmpty().withMessage("Contraseña no puede estar vacío"),
    body ('email').notEmpty().withMessage("Email no puede estar vacío")
         .bail().isEmail().withMessage("Ingresa un email válido"),
    body ('avatar').custom((value, { req })=>{
        let file = req.file;
                
        if (!file) {
            throw new Error('Tenes que subir una imagen');
        } else {
            
        }

        

        return true;
    })
    
   ];

   module.exports = validations;