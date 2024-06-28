module.exports = (sequelize, DataTypes) => {

    const Categories = sequelize.define(
	    'Categories',
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
            tablename : 'categories',
            timestamps : false
        }
    )

    Categories.associate = function (models) {
        Categories.hasMany(models.Products, {
            as : 'productCategories',
            foreignKey : 'category_id'
        })
    }
        
    return Categories
}