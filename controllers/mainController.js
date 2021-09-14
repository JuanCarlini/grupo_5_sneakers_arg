const controlador ={
    home: (req,res) => {
        return res.render('home');
    },
    login: (req,res) =>{
        return res.render('log-in')
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