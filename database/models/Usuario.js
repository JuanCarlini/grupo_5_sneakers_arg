module.exports = (sequelize, DataTypes) => {

    let alias = "Usuario";

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
        tableName: 'Usuario'
    }

    const Usuario = sequelize.define(alias, cols, config)
    Usuario.associate = function (models){
        Usuario.belongsToMany(models.Producto, { 
            as: 'produtos_usuarios', 
            foreingKey: 'producto_id'
        })

    }

    return Usuario;

}