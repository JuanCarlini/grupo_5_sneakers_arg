// Requires:

const db = require('../database/models');
const bcript = require('bcryptjs');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs')


const usuariosController = {

  // Register render/ Process:

  register: (req, res) => {
    return res.render('register')
  },

  registerProcess: function (req, res) {
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
        })
      } else {
        db.Usuario.create({
          name: req.body.name,
          surname: req.body.surname,
          email: req.body.email,
          user: req.body.user,
          pass: bcript.hashSync(req.body.pass, 10),
          avatar: req.file.filename
        }).then(function () {
          res.redirect('/log-in')
        });
      }
    });

  },

  // Login render / Process:

  login: (req, res) => {
    return res.render('log-in')
  },


  loginProcess: function (req, res) {
    const resultValidation = validationResult(req)
    if (resultValidation.errors.length > 0) {
      return res.render('log-in', {
        errors: resultValidation.mapped(),
        oldData: req.body
      })
    }

    db.Usuario.findAll()
      .then(Usuario => {
        let UsuarioALoguear = Usuario.find(i => i.email == req.body.email)

        if (UsuarioALoguear) {  
          let passOk = bcryptjs.compareSync( 
            req.body.pass,
            UsuarioALoguear.pass,
          )
          if (passOk) { 
            delete UsuarioALoguear.pass // ?
            req.session.userLogged = UsuarioALoguear
            return res.redirect('/UserProfile')

          }

          return res.render('log-in', {
            errors: {
              email: {
                msg: 'Las credenciales son incorrectas.',
              },
            },
          })
        }

        return res.render('log-in', {
          errors: {
            email: {
              msg: 'Las credenciales son incorrectas.',
            },
          },
        })
      })
  },

// UserProfile:

  userProfile: (req, res) => {
    return res.render('UserProfile', { user: req.session.userLogged })
  },

// Logout:

  logout: (req, res) => {
    req.session.destroy()
    return res.redirect('/')
    
  },



  // Api Usuarios:

  users: function (req, res) {
    db.Usuario.findAll()
      .then(usuarios => {
        return res.status(200).json({
          count: usuarios.length,
          users: usuarios,
          status: 200,

        })
      })
  }
}



module.exports = usuariosController;
