const db = require('../database/models');
const bcript = require('bcryptjs');
const { validationResult } = require('express-validator');

const usuariosController = {

    crear: function (req, res) { 
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
                            msg: 'Este Email ya esta registrado',
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

    }

}



module.exports = usuariosController;
