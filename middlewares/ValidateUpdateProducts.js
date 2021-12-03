// Requires:
const { body } = require('express-validator');
const path =require('path')

// Validations:

const validationsUpdate= [
    body ('name').notEmpty().withMessage("Nombre no puede estar vacío.").bail().isLength({ min: 5  })
    .withMessage("El nombre del producto es demaciado corto." ),
    body ('description').notEmpty().withMessage("La descripción del producto no puede estar vacía.").bail().isLength({ min: 20  })
    .withMessage("La descripción del producto es demasiado corta." ), body ('category').notEmpty().withMessage("La categoría del producto no puede estar vacía.").bail(),
    body ('color').notEmpty().withMessage("La categoría del color no puede estar vacía.").bail(),
    body ('price').notEmpty().withMessage("La categoría del precio no puede estar vacía.").bail(),

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

module.exports = validationsUpdate;


