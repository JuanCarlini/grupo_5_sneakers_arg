const fs = require('fs');
const path = require('path');
const db = require('../database/models/index');


const adminController={

        admin: (req,res) => {
            return res.render('admin');
    },
        productList: (req,res) => {
            db.Producto.findAll()
                .then(products=>{
                    return res.render("admin_productList", {products})
                })
            
        },
        edit: (req, res) => {
            let id = req.params.id;
            db.Producto.findByPk(id).then((producto) => {
                console.log(producto.dataValues)
                res.render("edit", {producto: producto.dataValues})
    
            });
        },
        update: (req,res) => { 
            let id = req.params.id
            console.log("Valor del id",id)
            db.Producto.update(
                {
                    name: req.body.name,
                    description:req.body.description, 
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
        



}



module.exports=adminController