module.exports = (sequelize, DataTypes) => {

    let alias = "Usuarios";

    let cols = {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
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
        tableName: 'usuarios'
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