const { body } = require('express-validator');


const validations =  [
    body ('name').notEmpty().withMessage("Nombre no puede estar vacio"),
    body ('surname').notEmpty().withMessage("Apellido no puede estar vacio"),
    body ('user').notEmpty().withMessage("Nombre de usuario no puede estar vacio"),
    body ('pass').notEmpty().withMessage("Contraseña no puede estar vacio"),
    body ('email').isEmail().withMessage("Ingresa un email valido"),
   ];

   module.exports = validations;