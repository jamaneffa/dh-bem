const db = require('../database/models')
const bcryptjs = require('bcryptjs');

let userAssociations = [
    {association: "addresses"},
    {association: "userOrders"}
];

let orderAssociations = [
    { association: "users" },
    { association: "orderDetails" }
]

const userServices = {
    getAllUsers : () => db.Users.findAll(),
    getUserByEmail : (email) => db.Users.findOne({ 
        where : {email : email},
        include : userAssociations
    }),
    getUserById : (id) => db.Users.findByPk(id, {include : userAssociations}),
    getOrdersByUser : (id) => db.Orders.findAll({
        where: { user_id: id },
        include : orderAssociations
    }),
    createUser: (body, customFileName, address_id) => db.Users.create({
        first_name: body.first_name,
        last_name: body.last_name,
        dni : body.dni,
        email: body.email,
        password: bcryptjs.hashSync(body.password, 10),
        avatar: customFileName,
        admin: body.email.includes('@beelegantmen.com') ? 1 : 0,
        address_id: address_id 
    }),
    createAddress : (body) => db.Addresses.create({
        country: body.country,
        state: body.state, 
        city: body.city,
        street: body.street,
        street_number: body.street_number,
        cp: body.cp
    }),
    deleteUser : (id) => db.Users.destroy({ where: {id: id} }),
    deleteAddress : (id) => db.Addresses.destroy({ where: {id: id} }),
    updateUser : (body, id) => db.Users.update(
        {
            first_name: body.first_name,
            last_name: body.last_name,
            dni : body.dni
        },
        {
            where: { id: id }
        },
        {include : userAssociations}
    ),
    updateAddress : (body, id) => db.Addresses.update(
        {
            country: body.country,
            state: body.state,
            city: body.city,
            cp: body.cp,
            street: body.street,
            street_number: body.street_number
        },
        {
            where: { id: id }
        }
    ),
    updateAvatar : (customFileName, id) => db.Users.update(
        {avatar: customFileName}, 
        {where : {id: id}}
    ),
    updatePass : (newPass, id) => db.Users.update(
        {password: bcryptjs.hashSync(newPass, 10)},
        {where : {id: id}
    })
}

module.exports = userServices

