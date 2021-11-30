const fs = require('fs');
const path = require('path');
const db = require('../database/models/index');


const controller = {
	// Mostrar todos los productos:
	index: (req, res) => {
		db.Producto.findAll()
            .then(products => {
                return res.render("products", { products })
            })
	},

	// Detalle de un producto en particular:  
	detail: (req, res) => {
		let id = req.params.id;
        db.Producto.findByPk(id)
            .then(producto => {
                return res.render("detalle-del-producto", { products: producto })
            })
	},
};
module.exports = controller;

