const fs = require('fs');
const path = require('path');
const db = require('../database/models');

const productsFilePath = path.join(__dirname, '../data/products.json');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const dotToComma = n => n.toString().replace(/\./, ",");


const controller = {
	// Root - Show all products
	index: (req, res) => {
		db.Producto.findAll()
            .then(products => {
                return res.render("admin_productList", { products })
            })
	},

	// Detail - Detail from one product    
	detail: (req, res) => {
		let idProduct = parseInt(req.params.id);
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let product = products.filter(i => i.id === idProduct);
		res.render('detalle-del-producto', {product: product,
			toThousand: toThousand, dotToComma: dotToComma}); 
	},
	
	// Create - Form to create
	create: (req,res) =>{
        return res.render('create')
    },

			crear: function(req,res){
				/* return res.json(req.file.filename) */
			db.Producto.create({
				
				name: req.body.name,
				description:req.body.description, 
				image: req.file.filename,   
				category: req.body.category,
				color: req.body.color,
				price: req.body.price 
				
			 }).then(function (){
				res.redirect("/admin/products")
			}) 
		},
		
 	
	// Update - Form to edit

		


	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let idProduct = req.params.id;
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let indexProduct = products.findIndex(product => product.id == idProduct);
		let imagePath = path.join(__dirname, '../public/images/products', products[indexProduct].image);
		fs.unlink(imagePath, function (err) {
			if (err) throw err;
		});
		let productsUpdated = products.filter(i => i.id != idProduct);
		let productsUpdatedJSON = JSON.stringify(productsUpdated, null, ' ');
		fs.writeFileSync(path.join(__dirname, "../data/products.json"), productsUpdatedJSON);
		res.redirect('/products');
	}
};
module.exports = controller;

