const fs = require('fs');
const path = require('path');
const db = require('../database/models/index');


const controller = {
	// Mostrar todos los productos:
	index: (req, res) => {
		db.Producto.findAll()
            .then(products => {
                return res.render("products", { products , user: req.session.userLogged })
            })
	},

	// Detalle de un producto en particular:  
	detail: (req, res) => {
		let id = req.params.id;
        db.Producto.findByPk(id)
            .then(producto => {
                return res.render("detalle-del-producto", { products: producto , user: req.session.userLogged })
            })
	},

	// Api Productos:

	products: (req, res) => {
		db.Producto.findAll()
		.then(products => {
			for (let i = 0; i < products.length; i++) {
			  products[i].setDataValue("detail", "http://localhost:3000/api/products/" + products[i].id)
			}
	
			res.status(200).json({
			  count: products.length,
			  products: products,
			  status: 200
			})
	
		  }).catch(error => res.json(error));
	  },
};
module.exports = controller;

