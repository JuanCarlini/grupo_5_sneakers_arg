const fs = require('fs');
const path = require('path');
const db = require('../database/models/index');


const controller = {
	// Root - Show all products
	index: (req, res) => {
		db.Producto.findAll()
            .then(products => {
                return res.render("products", { products })
            })
	},

	// Detail - Detail from one product    
	detail: (req, res) => {
		let id = req.params.id;
        db.Producto.findByPk(id)
            .then(producto => {
                return res.render("detalle-del-producto", { products: producto })
            })
	},
};
module.exports = controller;

