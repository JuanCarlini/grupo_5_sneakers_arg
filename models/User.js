const fs = require('fs');

const User ={
    filename: './database/users.json',

    getData: function () {
        return JSON.parse(fs.readFileSync(this.filename, 'utf-8'));
    },

    findAll: function () {
        return this.getData();
    },

    findByPk: function (id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

    findByField: function (field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },

    create: function (userData){

    }
}

console.log(User.findByField('email', 'juan@gmail.com'));

