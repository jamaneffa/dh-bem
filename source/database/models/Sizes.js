module.exports = (sequelize, DataTypes) => {

    const Sizes = sequelize.define(
	    'Sizes',
        {
            id : {
                type : DataTypes.INTEGER(10).UNSIGNED,
                primaryKey : true,
                autoIncrement : true,
                allowNull: false
            },
            size_name : {
                type : DataTypes.STRING(100),
                allowNull: false
            }
        },
        {
            tablename : 'sizes',
            timestamps : false
        }
    )

    Sizes.associate = function (models) {
        Sizes.belongsToMany(models.Products, {
            through: 'ProductsDetails',
            as: 'productSizes',
            foreignKey: 'size_id'
        })
    }    
        
    return Sizes
}