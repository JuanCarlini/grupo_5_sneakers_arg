module.exports = (sequelize, DataTypes) => {

    let alias = "Productos";

    let cols = {
        productoid: {
            type: DataTypes.INTEGER(10),
            foreignkey: true,
            /* autoIncrement: true */
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
        }

        
    };

    let config = {
        timestamps:false,
        tableName:"productos"
    }

    const Producto = sequelize.define(alias, cols, config)
     /* Producto.associate = function (models){
        Producto.belongsToMany(models.Producto, { 
            as: 'productoid', 
            primaryKey: 'id' 
        })
    } */


    return Producto;
}