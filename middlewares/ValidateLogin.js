const { body } = require('express-validator');


const validationsLogin =  [
    body ('email').notEmpty().withMessage("Email no puede estar vacío.").bail().isEmail()
    .withMessage("Ingresa un email válido.")
]

module.exports = validationsLogin;