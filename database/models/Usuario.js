/* module.exports = (sequelize, DataTypes) => {

    let alias = "Usuario";

    let cols = {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            /* autoIncrement: true 
        },
        name: {
            type: DataTypes.STRING(50)
        },
        surname: {
            type: DataTypes.STRING(50),
           
        },
        email: {
            type: DataTypes.STRING(50),
            
        },
        user: {
            type: DataTypes.STRING(50),
            
        },
        pass: {
            type: DataTypes.STRING(50),
           
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
       Usuario.associate = function (models){
        Usuario.hasMany(models.Productos, { 
            as: 'id', 
            foreingKey: 'productoid'
        })   
 
    } 

    return Usuario;

} */

module.exports= (sequelize,DataTypes) =>{
    const usuario = sequelize.define(
        'Usuario',
        {
            id:{
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
            
            },
            name:DataTypes.STRING(50), 
            surname:DataTypes.STRING(50),
            email:DataTypes.STRING(50),
            user:DataTypes.STRING(50),
            pass:DataTypes.STRING(50),
            avatar:DataTypes.STRING(250)
            
        },
        {
            tableName:'usuarios',
            timestamps:false}
    );

    return usuario
    
}