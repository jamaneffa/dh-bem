module.exports = (sequelize, DataTypes) => {

    const ProductsDetails = sequelize.define(
        'ProductsDetails',
        {
            id : {
                type : DataTypes.INTEGER(10).UNSIGNED,
                primaryKey : true,
                autoIncrement : true,
                allowNull: false
            },
            product_sku : {
                type : DataTypes.INTEGER(10).UNSIGNED,
                allowNull: false,
                references: {
                    model: "Products",
                    key: 'sku'
                }
            },            
            size_id : {
                type : DataTypes.INTEGER(10).UNSIGNED,
                allowNull: false,
                references: {
                    model: "Sizes",
                    key: 'id'
                }
            },
            stock : {
                type : DataTypes.INTEGER(10).UNSIGNED,
                allowNull: false
            }
        },
        {
            tablename : 'productsdetails',
            timestamps : false
        }
    )
    
    return ProductsDetails
}