const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const dotToComma = n => n.toString().replace(/\./, ",");


const controller = {
	// Root - Show all products
	index: (req, res) => {
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.render('products', {products: products,
		toThousand: toThousand})
	},

	// Detail - Detail from one product    
	detail: (req, res) => {
		let idProduct = parseInt(req.params.id);
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let product = products.filter(i => i.id === idProduct);
		res.render('detalle-del-producto', {product: product,
			toThousand: toThousand, dotToComma: dotToComma}); 
	},
}
module.exports = controller;

/*
// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		if (req.file) {
			let products = JSON.parse(fs.readFileSync(products, 'utf-8'));
			let newProduct = {
				id: Date.now(),
				brand: req.body.brand,
				model: req.body.model,
				description: req.body.description,
				type: req.body.type,
				size: req.body.size,
                color: req.body.color,
				image: req.file.filename
			};
			products.push(newProduct);
			let productsJSON = JSON.stringify(products, null, ' ');
			fs.writeFileSync(products, productsJSON);
			res.redirect('/products'); 
		} else {
			res.render('product-create-form');
		}
	},

	// Update - Form to edit
	edit: (req, res) => {
		let idProduct = parseInt(req.params.id);
		let products = JSON.parse(fs.readFileSync(products, 'utf-8'));
		let productToEdit = products.filter(i => i.id === idProduct);
		res.render('product-edit-form', {productToEdit: productToEdit,
			toThousand: toThousand}); 
	},
	// Update - Method to update
	update: (req, res) => {
		let idProduct = parseInt(req.params.id);
		let products = JSON.parse(fs.readFileSync(products, 'utf-8'));
		products.forEach(product => {
			if(product.id === idProduct) {
				product.name = req.body.name;
				product.price = req.body.price;
				product.discount = req.body.discount;
				product.category = req.body.category;
				product.description = req.body.description;
				if (req.file) {
					let indexProduct = products.findIndex(product => product.id === idProduct);
					let imagePath = path.join(__dirname, '../../public/images/products', products[indexProduct].image);
					fs.unlink(imagePath, function (err) {
						if (err) throw err;
					});
					product.image = req.file.filename;
				}
			}
		});
		let productsJSON = JSON.stringify(products, null, ' ');
		fs.writeFileSync(products, productsJSON);
		res.redirect('/products');
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let idProduct = parseInt(req.params.id);
		let products = JSON.parse(fs.readFileSync(products, 'utf-8'));
		let indexProduct = products.findIndex(product => product.id === idProduct);
		let imagePath = path.join(__dirname, '../../public/images/products', products[indexProduct].image);
		fs.unlink(imagePath, function (err) {
			if (err) throw err;
			console.log('File deleted!');
		});
		let productsUpdated = products.filter(i => i.id !== idProduct);
		let productsUpdatedJSON = JSON.stringify(productsUpdated, null, ' ');
		fs.writeFileSync(products, productsUpdatedJSON);
		res.redirect('/products');
	}
};
*/