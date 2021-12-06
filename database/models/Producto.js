module.exports= (sequelize,DataTypes) =>{
    const producto = sequelize.define(
        'Producto',
        {
            id:{
            type: DataTypes.INTEGER(10),
            autoIncrement: true,
            primaryKey: true
            
            },
            name :DataTypes.STRING(50),
            description: DataTypes.STRING(50),
            image:DataTypes.STRING(250),
            category: DataTypes.STRING(50), 
            color: DataTypes.STRING(50),
            price:DataTypes.INTEGER(10)
                                  
        },
        {
            tableName:'productos',
            timestamps:false}
    );

    producto.assosiate = function(models){
        producto.belongsToMany(models.usuario, {
        as: "usuarios",
        through: "usuarios_productos",
        foreignKey: "productos_id",
        other: "usuarios_id",
        timestamps: false
        })
    }
    

    return producto;
    
}