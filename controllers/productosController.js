const fs = require('fs');
const path = require('path');
const db = require('../database/models/index');

const productsFilePath = path.join(__dirname, '../data/products.json');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const dotToComma = n => n.toString().replace(/\./, ",");


const controller = {
	// Root - Show all products
	index: (req, res) => {
		db.Producto.findAll()
            .then(products => {
                return res.render("produts", { products })
            })
	},

	// Detail - Detail from one product    
	detail: (req, res) => {
		let id = req.params.id;
        db.Producto.findByPk(id)
            .then(producto => {
                return res.redirect("/detalle-del-producto", { producto: producto.dataValues })
            })
	},
};
module.exports = controller;

