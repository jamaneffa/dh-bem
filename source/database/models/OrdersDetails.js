module.exports = (sequelize, DataTypes) => {

    const OrdersDetails = sequelize.define(
        'OrdersDetails',
        {
            id : {
                type : DataTypes.INTEGER(10).UNSIGNED,
                primaryKey : true,
                autoIncrement : true,
                allowNull: false
            },
            order_id : {
                type : DataTypes.INTEGER(10).UNSIGNED,
                allowNull: false,
                references: {
                    model: "Orders",
                    key: 'id'
                }
            },            
            product_sku : {
                type : DataTypes.INTEGER(10).UNSIGNED,
                allowNull: false,
                references: {
                    model: "Products",
                    key: 'sku'
                }
            },
            quantity : {
                type: DataTypes.INTEGER(10),
                allowNull: false
            },
            unit_price : {
                type: DataTypes.DECIMAL(10,2),
                allowNull: false
            },
            total_amount : {
                type: DataTypes.DECIMAL(10,2),
                allowNull: false
            }
        },
        {
            tablename : 'ordersdetails',
            timestamps : false
        }
    )

    OrdersDetails.associate = function (models) {
        OrdersDetails.belongsTo(models.Orders, {
            as : 'order',
            foreignKey : 'order_id'
        })
        OrdersDetails.belongsTo(models.Products, {
            as : 'orderProduct',
            foreignKey : 'product_sku'
        })
    }
    
    return OrdersDetails
}