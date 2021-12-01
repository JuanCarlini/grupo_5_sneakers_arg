// Db:
const db = require('../database/models/index');

// Requires:

const { validationResult } = require('express-validator');


// Controller:


const adminController = {

    admin: (req, res) => {
        return res.render('admin');
    },

    create: (req, res) => {
        return res.render('create')
    },
    productList: (req, res) => {
        db.Producto.findAll()
            .then(products => {
                return res.render("admin_productList", { products })
            })

    },
    crear: function (req, res) {
        const resultValidation = validationResult(req)
        if (resultValidation.errors.length > 0) {
            return res.render('create', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        } else {
            db.Producto.create({

                name: req.body.name,
                description: req.body.description,
                image: req.file.filename,
                category: req.body.category,
                color: req.body.color,
                price: req.body.price

            }).then(function () {
                res.redirect("/admin/create")
            })
        }
    },

    edit: (req, res) => {
            let id = req.params.id;
            db.Producto.findByPk(id).then((producto) => {
                console.log(producto.dataValues)
                res.render("edit", { producto: producto.dataValues })

            });
        

    },

    update: (req, res) => {
        const resultValidation = validationResult(req)
        if (resultValidation.errors.length > 0) {
            return res.render('edit', { 
                producto: req.body,
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        } else {
        let id = req.params.id
        db.Producto.update(
            {
                name: req.body.name,
                description: req.body.description,
                image: req.file.filename,
                category: req.body.category,
                color: req.body.color,
                price: req.body.price
            },
            {
                where: {
                    id: id,
                },
            }
        )
            .then(() => {
                console.log("Datos actualizados!")
                return res.redirect("/products");
            })
            .catch((error) => res.send(error));
        }

    },

    delete: (req, res) => {
        db.Producto.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(res.redirect("/products"))
    }




}



module.exports = adminController