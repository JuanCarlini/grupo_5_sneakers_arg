const authAdmin = function (req, res, next) {
    if (req.session.userLogged && req.session.userLogged.email == 'admin@afrotic20.com') {

    } else {
        return res.send('No autorizado!')
    }

    next()
}


module.exports = authAdmin;