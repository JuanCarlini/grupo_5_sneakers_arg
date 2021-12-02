// Requires:
const path = require('path');
const db = require('../database/models/index');


// Controller Home:

const controlador = {
    home: (req, res) => {
        db.Producto.findAll()
            .then(products => {
                return res.render("home", { products })
            })
    },


    carrito: (req, res) => {
        return res.render("carrito")
    },
    edit: (req, res) => {
        return res.render("edit")
    }
};

module.exports = controlador;