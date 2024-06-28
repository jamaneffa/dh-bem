module.exports = (sequelize, DataTypes) => {

    const Products = sequelize.define(
        'Products',
        {
            sku : {
                type : DataTypes.INTEGER(10).UNSIGNED,
                primaryKey : true,
                autoIncrement : true,
                allowNull: false
            },
            name : {
                type : DataTypes.STRING(100),
                allowNull: false
            },
            description : {
                type : DataTypes.TEXT,
                allowNull: false
            },
            price : {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            discount : {
                type : DataTypes.INTEGER(10).UNSIGNED,
                allowNull: false
            },
            image : {
                type : DataTypes.STRING(200),
                allowNull: false
            },
            category_id : {
                type : DataTypes.INTEGER(10).UNSIGNED,
                allowNull: false,
                references: {
                    model: "Categories",
                    key: 'id'
                }
            },
            brand_id : {
                type : DataTypes.INTEGER(10).UNSIGNED,
                allowNull: false,
                references: {
                    model: "Brands",
                    key: 'id'
                }
            }
        },
        {
            tablename : 'products',
            timestamps : false
        }
    )

    Products.associate = function (models) {
        Products.belongsTo(models.Categories, {
            as : 'categories',
            foreignKey : 'category_id'
        })
        Products.belongsTo(models.Brands, {
            as : 'brands',
            foreignKey : 'brand_id'
        })
        Products.hasMany(models.OrdersDetails, {
            as : 'orderDetails',
            foreignKey : 'product_sku'
        })
        Products.belongsToMany(models.Sizes, {
            through: 'ProductsDetails',
            as: 'productDetails',
            foreignKey: 'product_sku'
        })   
    }
    
    return Products
}
