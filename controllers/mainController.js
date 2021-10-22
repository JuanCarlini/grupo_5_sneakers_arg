const fs = require('fs');
const path = require('path');
const { validationResult }= require('express-validator');

const productsFilePath = path.join(__dirname, '../data/products.json');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const dotToComma = n => n.toString().replace(/\./, ",");



const controlador ={
    home: (req, res) => {
		let idProduct = parseInt(req.params.id);
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let product = products.filter(i => i.id === idProduct);
		res.render('home', {product: product,
			toThousand: toThousand, dotToComma: dotToComma})
	},
    login: (req,res) =>{
        return res.render('log-in')
    },
    
        

    register: (req,res) =>{
        return res.render('register')
    },    

    processRegister: (req,res) =>{
       const resultValidation = validationResult(req);
       return res.send(resultValidation);
    },

    processLogin: (req, res) =>{
        let errors = validationResult(req);
        if(errors.isEmpty()){
            let usersJSON = fs.readFileSync("users.json", ) 
            let users;
            if (usersJSON == ""){
                users = [];
            } else{
                users = JSON.parse(usersJSON);
            }

            for (let i = 0; i < users.length; i++){
                if (users[i].email == req.body.email){
                    if (bcrypt.compareSync(req.body.password, users[i].password)){
                        let usuarioALoguearse = users[i];
                        break;
                    }
                }
            }
            if ( usuarioALoguearse == undefined){
                return res.render("login", {errors: [
                    {msg: "Credenciales inválidas"}
                ]});
            }

            req.session.usuarioLogueado = usuarioALoguearse
        }else{
            return res.render("login", {errors: errors.errors})
        }
    },
    
        carrito: (req,res) =>{
        let idProduct = parseInt(req.params.id);
		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let product = products.filter(i => i.id === idProduct);
		res.render('carrito', {product: product,
			toThousand: toThousand, dotToComma: dotToComma});
    },
    edit: (req,res) =>{
        return res.render("edit")
    }, 
};

module.exports= controlador;