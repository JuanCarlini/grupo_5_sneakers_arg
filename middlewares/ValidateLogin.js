// Requires:

const { body } = require('express-validator');

// Validations:

const validationsLogin =  [
    body ('email').notEmpty().withMessage("Email no puede estar vacío.").bail().isEmail()
    .withMessage("Ingresa un email válido."),
    body ('pass').notEmpty().withMessage("Contraseña no puede estar vacío.")
]

module.exports = validationsLogin;