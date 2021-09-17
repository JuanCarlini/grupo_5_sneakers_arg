const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const dotToComma = n => n.toString().replace(/\./, ",");


const controller = {
	// Root - Show all products
	index: (req, res) => {
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.render('products', {products: products})
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

	store: (req, res) => {
		if (req.file) {
			let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
			let newProduct = {
			id: products[products.length-1].id+1,
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			image: req.file.filename,
			price: req.body.price
			};
			products.push(newProduct);
			let productsJSON = JSON.stringify(products, null, ' ');
			fs.writeFileSync(productsFilePath, productsJSON);
			res.redirect('/products'); 
		} else {
			res.render('create');
		}
	},
	// Update - Form to edit
	edit: (req, res) => {
		let idProduct = parseInt(req.params.id);
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let productToEdit = products.filter(i => i.id === idProduct);
		res.render('edit', {productToEdit: productToEdit,
			toThousand: toThousand}); 
	},
	// Update - Method to update
	update: (req, res) => {
		let idProduct = req.params.id;
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		products.forEach(product => {
			if(product.id == idProduct) {
				product.name= req.body.name,
				product.price= req.body.price,
				product.discount= req.body.discount,
				product.category= req.body.category,
				product.description= req.body.description,
				product.price= req.body.price
				if (req.file) {
					let indexProduct = products.findIndex(product => product.id == idProduct);
					let imagePath = path.join(__dirname, '../public/images/products', products[indexProduct].image);
					fs.unlink(imagePath, function (err) {
						if (err) throw err;
					});
					product.image = req.file.filename;
				}
			}
			
		});
		let productsJSON = JSON.stringify(products, null, ' ');
		fs.writeFileSync(path.join(__dirname, "../data/products.json"), productsJSON);
		res.redirect('/products');
	},// Delete - Delete one product from DB
	destroy : (req, res) => {
		let idProduct = parseInt(req.params.id);
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
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
module.exports = controller;

