// Requires:

const fs = require('fs');
const path = require('path');
const { validationResult }= require('express-validator');

// Coma:

const productsFilePath = path.join(__dirname, '../data/products.json');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const dotToComma = n => n.toString().replace(/\./, ",");

// Controller Home:

const controlador ={
    home: (req, res) => {
		let idProduct = parseInt(req.params.id);
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let product = products.filter(i => i.id === idProduct);
		res.render('home', {product: product,
			toThousand: toThousand, dotToComma: dotToComma})

    // Render Login:

            
	},
    login: (req,res) =>{
        return res.render('log-in')
    },
    
    // Render Register:


    register: (req,res) =>{
        return res.render('register')
    },    

    // ProcessRegister:

    processRegister: (req,res) =>{
       const resultValidation = validationResult(req);
       
       if(resultValidation.errors.length > 0){
        return res.render('register',{
            errors: resultValidation.mapped()
        })   

       }
    },

    // ProccesLogin:

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