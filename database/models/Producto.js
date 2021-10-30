module.exports = (sequelize, DataTypes) => {

    let alias = "Productos";

    let cols = {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        brand: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        model: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        type: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        size: {
            type: DataTypes.INTEGER(50),
            allowNull: false
        },
        color: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        price: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        name:{
            type: DataTypes.STRING(50),
            allowNull: false          
        },

        created_at: {
            type: DataTypes.DATE,
        },

        modified_at: {
            type: DataTypes.DATE,
        },

        deleted_at: {
            type: DataTypes.DATE,
        },

    };

    let config = {
        tableName= "productos"
    }

    const Producto = sequelize.define(alias, cols, config)
    Producto.associate = function (models) {

    }


    return Producto;
}