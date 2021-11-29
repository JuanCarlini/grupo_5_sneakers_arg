// Requires:
const { body } = require('express-validator');
const path = require('path');

// Validations:

const validationsCreate =[
    body ('name').notEmpty().withMessage("Nombre no puede estar vacío.").bail().isLength({ min: 5  })
    .withMessage("El nombre del producto es demaciado corto." ),
    body ('description').notEmpty().withMessage("La descripción del producto no puede estar vacía.").bail().isLength({ min: 20  })
    .withMessage("La descripción del producto es demaciado corta." ),

    body ('productimage').custom((value, { req })=>{

        let file = req.file;
        let extensiones = ['.jpg', '.png', '.gif', '.jpeg'];
          
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

module.exports = validationsCreate;