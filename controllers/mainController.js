const controlador ={
    home: (req,res) => {
        return res.render('home');
    },
    login: (req,res) =>{
        return res.render('log-in')
    },
    register: (req,res) =>{
        return res.render('register')
    },
    carrito: (req,res) =>{
        return res.render('carrito')
    },
    edit: (rqe,res) =>{
        return res.render("edit")
    }, 
};

module.exports= controlador;