module.exports = (sequelize, DataTypes) => {

    const Orders = sequelize.define(
        'Orders',
        {
            id : {
                type : DataTypes.INTEGER(10).UNSIGNED,
                primaryKey : true,
                autoIncrement : true,
                allowNull: false
            },
            user_id : {
                type : DataTypes.INTEGER(10).UNSIGNED,
                allowNull: false,
                references: {
                    model: "Users",
                    key: 'id'
                }
            },
            created_date: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            }
        },
        {
            tablename : 'orders',
            timestamps: false
        }
    )

    Orders.associate = function (models) {
        Orders.belongsTo(models.Users, {
            as : 'users',
            foreignKey : 'user_id'
        })
        Orders.hasMany(models.OrdersDetails, {
            as : 'orderDetails',
            foreignKey : 'order_id' 
        })
    }
    
    return Orders
}
