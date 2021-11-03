module.exports = (sequelize, DataTypes) => {

    let alias = "Usuarios";

    let cols = {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            /* autoIncrement: true */
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        user: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        pass: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING(250)
        }


    };

    let config = {
        timestamps:false,
        tableName:'usuarios'
    }

    const Usuario = sequelize.define(alias, cols, config)
      /* Usuario.associate = function (models){
        Usuario.hasMany(models.Productos, { 
            as: 'id', 
            foreingKey: 'productoid'
        })   
 
    } */

    return Usuario;

}