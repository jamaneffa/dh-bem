module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define(
	    'Users',
        {
            id : {
                type : DataTypes.INTEGER(10).UNSIGNED,
                primaryKey : true,
                autoIncrement : true,
                allowNull: false
            },
            first_name : {
                type : DataTypes.STRING(100),
                allowNull: false
            },
            last_name : {
                type : DataTypes.STRING(100),
                allowNull: false
            },
            dni : {
                type : DataTypes.STRING(25),
                allowNull: false
            },
            address_id : {
                type : DataTypes.INTEGER(10).UNSIGNED,
                allowNull: false,
                references: {
                    model: "Addresses",
                    key: 'id'
                }
            },
            email : {
                type : DataTypes.STRING(100),
                allowNull: false
            },
            password : {
                type : DataTypes.STRING(100),
                allowNull: false
            },
            avatar : {
                type : DataTypes.STRING(200),
                allowNull: false
            },
            admin : {
                type : DataTypes.INTEGER(1),
                allowNull: false
            }
        },
        {
            tablename : 'users',
            timestamps : false
        }
    )   

    Users.associate = function (models) {
        Users.belongsTo(models.Addresses, {
            as : 'addresses',
            foreignKey : 'address_id'
        })
        Users.hasMany(models.Orders, {
            as : 'userOrders',
            foreignKey : 'user_id'
        })
    }

    return Users
}
