const fs = require('fs');
const path = require('path');
const db = require('../database/models/index');


const controller = {
	// Mostrar todos los productos:
	index: (req, res) => {
		db.Producto.findAll()
			.then(products => {
				return res.render("products", { products, user: req.session.userLogged })
			})
	},

	// Detalle de un producto en particular:  
	detail: (req, res) => {
		let id = req.params.id;
		db.Producto.findByPk(id)
			.then(producto => {
				return res.render("detalle-del-producto", { products: producto, user: req.session.userLogged })
			})
	},

	// Api Productos:

	products: (req, res) => {
		db.Producto.findAll({
			attributes: ["id", "name", "description", "category", "image"]
		})
			.then(products => {
				let categoryUrban = 0
				let categoryRetro = 0
				let categorySport = 0

				for (let i = 0; i < products.length; i++) {
					products[i].setDataValue("detail", "http://localhost:3100/api/products/" + products[i].id)

					if (products[i].category == "Urban") {
						categoryUrban++

					} if (products[i].category == "Retro") {
						categoryRetro++

					} if (products[i].category == "Sport") {
						categorySport++

					}
					
				}

				for (let i = 0; i < products.length; i++) {
					products[i].setDataValue('image', `http://localhost:3100/images/products/${products[i].image}`)
				}
	

				res.status(200).json({  
					count: products.length,
					countByCategory: [
						{Urban: categoryUrban},
						{Retro: categoryRetro},
						{Sport: categorySport}
					],
					products: products,
					status: 200
				})



			}).catch(error => res.json(error));
	},


	productsId: (req, res) => {
		db.Producto.findByPk(req.params.id)
			.then(function (producto) {
				console.log(producto)
				res.status(200).json({
					id: producto.id,
					Name: producto.name,
					description: producto.description,
					category: [producto.category],
					color: producto.color,
					price: producto.price,
					image: `http://localhost:3100/images/products/` + producto.image,
					status: 200,
				})
			})
	},

};
module.exports = controller;

