module.exports = (sequelize, DataTypes) => {

    const Brands = sequelize.define(
	    'Brands',
        {
            id : {
                type : DataTypes.INTEGER(10).UNSIGNED,
                primaryKey : true,
                autoIncrement : true,
                allowNull: false
            },
            name : {
                type : DataTypes.STRING(100),
                allowNull: false
            }
        },
        {
            tablename : 'brands',
            timestamps : false
        }
    )

    Brands.associate = function (models) {
        Brands.hasMany(models.Products, {
            as : 'productBrands',
            foreignKey : 'brand_id'
        })
    }
        
    return Brands
}