const fs = require('fs');

const User ={
    filename: './database/users.json',
    getData: function (){
        return fs.readFileSync(this.filename, 'utf-8');
    },
    create: function (userData){

    }
}

console.log(User.getData());

// Verificar el punto