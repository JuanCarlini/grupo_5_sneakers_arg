const { body } = require('express-validator');
const path = require('path');


const validations =  [
    body ('name').notEmpty().withMessage("Nombre no puede estar vacío.").bail().isLength({ min: 2  })
    .withMessage("Tu nombre es demaciado corto." ),

    body ('surname').notEmpty().withMessage("Apellido no puede estar vacío.").bail().isLength({ min: 2  })
    .withMessage("Tu apellido es demaciado corto." ),

    body ('user').notEmpty().withMessage("Nombre de usuario no puede estar vacío."),

    body ('pass').notEmpty().withMessage("Contraseña no puede estar vacío").bail().isLength({ min: 8  })
    .withMessage("Tu contraseña tiene que tener 8 caracteres como mínimo." ),

    body ('email').notEmpty().withMessage("Email no puede estar vacío.").bail().isEmail()
    .withMessage("Ingresa un email válido."),

    body ('avatar').custom((value, { req })=>{

        let file = req.file;
        let extensiones = ['JPG', 'PNG', 'GIF', 'JPEG'];
          
        if (!file) {
            throw new Error('Tenés que subir una imagen.');
        } else {
            let fileExtension = path.extname(file.originalname)
            if (!extensiones.includes(fileExtension)) {
              throw new Error(
                `Las extensiones permitidas son: ${extensiones.join(',')}`,
              )
            }
          }
          return true
        }),
      ]

   module.exports = validations;

  
