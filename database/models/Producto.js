module.exports = (sequelize, DataTypes) => {

    let alias = "Producto";

    let cols = {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true

        },
        name: {
            type: DataTypes.STRING(50)
        },
        surname: {
            type: DataTypes.STRING(50)
        },
        email: {
            type: DataTypes.STRING(50)
        },
        user: {
            type: DataTypes.STRING(50)
        },
        pass: {
            type: DataTypes.STRING(50)
        },
        avatar: {
            type: DataTypes.STRING(250)
        }

    };

    let config = {
        tableName= "Producto"
    }

    const Producto = sequelize.define(alias, cols, config)
    Producto.associate = function (models) {

    }


    return Producto;
}