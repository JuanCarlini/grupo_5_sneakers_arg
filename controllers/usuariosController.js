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
    db.Usuario.findByPk(parseInt(req.session.userLogged.id)).then((user) => {
      res.render('UserProfile', {
        user: user,
      })
    })
  },

  // Logout:

  logout: (req, res) => {
    req.session.destroy()
    return res.redirect('/')

  },



  // Api Usuarios:

  users: (req, res) => {
    db.Usuario.findAll({
      attributes: ["id", "name", "email"]
    })

      .then(users => {
        for (let i = 0; i < users.length; i++) {
          users[i].setDataValue("detail", "http://localhost:3000/api/users/" + users[i].id)
        }

        res.status(200).json({
          count: users.length,
          users: users,
          status: 200
        })

      }).catch(error => res.json(error));
  },



  userId: (req, res) => {
    db.Usuario.findByPk(parseInt(req.params.id))

      .then((userProfile) => {
        res.status(200).json({
          id: userProfile.id,
          name: userProfile.name,
          surname: userProfile.surname,
          user: userProfile.user,
          email: userProfile.email,
          avatar: "http://localhost:3000/images/avatars/" + userProfile.avatar,
        });

      })
      .catch((error) => console.error(error));
  },
}




module.exports = usuariosController;
