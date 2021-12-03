// Requires:
const path = require('path');
const db = require('../database/models/index');


// Controller Home:

const controlador = {
    home: (req, res) => {
        db.Producto.findAll()
            .then(products => {
                return res.render("home", { products , user: req.session.userLogged })
            })
    },
    carrito: (req, res) => {
        return res.render("carrito", {user: req.session.userLogged})
    },
    edit: (req, res) => {
        return res.render("edit")
    }
};

module.exports = controlador;