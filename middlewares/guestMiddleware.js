function guestMiddleware(req,res,next){

    if(req.session.userLogged) {
        return res.redirect('/UserProfile');
    }

    next();

}

module.exports = guestMiddleware;

