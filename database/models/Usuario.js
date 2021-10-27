module.exports = (sequelize, DataTypes) =>{
    const Usuario = sequelize.define(alias,cols,config)
    let alias = "Usuarios";

    let cols = {
    id: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    surname:{
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    user: {
        type: DataTypes.STRING
    },
    pass: {
        type: DataTypes.STRING
    },
    avatar: {
        type: DataTypes.STRING // ?
    }

    };

    let config = {
        timestamps: false
    }
    

    return Usuario;
}