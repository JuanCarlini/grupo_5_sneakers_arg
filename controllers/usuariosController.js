const db = require('../database/models');
const bcript = require('bcryptjs');
const { validationResult } = require('express-validator');

const usuariosController = {

    register: function (req, res) { 
        const resultValidation = validationResult(req)
        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        } 
        db.Usuario.findAll({
            where: {
                email: req.body.email
            }
        }).then(function (resultados) {
            if (resultados.length > 0) {
                res.render('register', {
                    errors: {
                        email: {
                            msg: 'Este Email ya esta registrado.',
                        },
                    },
                    oldData: req.body
                },)
            } else {
                db.Usuario.create({
                    name: req.body.name,
                    surname: req.body.surname,
                    email: req.body.email,
                    user: req.body.user,
                    pass: bcript.hashSync(req.body.pass, 10)
                }).then(function () {
                    res.redirect('/register')
                });
            }
        });

    },

    login: function (req, res) { 
        const resultValidation = validationResult(req)
        if (resultValidation.errors.length > 0) {
            return res.render('log-in', {
                errors: resultValidation.mapped(),
                oldData: req.body // No llegan los datos del input
            })
        }        
    },

    // Api Usuarios:

    users: function (req,res) {
        db.Usuario.findAll()
        .then(usuarios =>{
            return res.json(usuarios)
        })
    }
}



module.exports = usuariosController;
