const db = require('../database/models')
const { Op } = require("sequelize");

let productAssociations = [
  { association: "categories" },
  { association: "brands" },
  { association: "productDetails" },
];

const productServices = {
    getAllProducts : () => db.Products.findAll({include : productAssociations}),
    getAllBrands : () => db.Brands.findAll(),
    getAllCategories : () => db.Categories.findAll(),
    getAllSizes : () => db.Sizes.findAll(),
    getProductByPk : (id) => db.Products.findByPk(id,{include : productAssociations}),
    getProductByName : (name) => db.Products.findOne({
        where : {name: name},
        include : productAssociations
    }),
    getProductsByCategory : (category_id) => db.Products.findAll({
        where : {category_id: category_id},
        include : productAssociations
    }),
    getProductsByQuery : (querySearch, limit, page) => db.Products.findAll({
        where: {name: {[Op.like] : querySearch}},
        include: productAssociations
    }),
    getProductsDetailsBySku : (sku) => db.ProductsDetails.findAll({
        where : {product_sku: sku}
    }),
    getLastProductInDb : () =>  db.Products.findOne({
        order: [["sku", "DESC"]],
        include: productAssociations
    }),
    createProduct : (body, customFileName) => db.Products.create({
        name: body.name,
        description: body.description,
        price: body.price,
        discount: body.discount,
        image: customFileName,
        category_id: body.category,
        brand_id: body.brand
    }),
    createProductDetail : (product, size, body) => db.ProductsDetails.create({
        product_sku : product.sku,
        size_id: size,
        stock: body[`stockForSizeId_${size}`]
    }),
    updateProduct : (body, customFileName, id) => db.Products.update({
        name: body.name,
        description: body.description,
        price: body.price,
        discount: body.discount,
        image: customFileName,
        category_id: body.category,
        brand_id: body.brand
    }, {
        where : {sku: id}
    }),
    deleteProduct : (id) => db.Products.destroy({ where: {sku: id} }),
    deleteProductDetail : (id) => db.ProductsDetails.destroy({ where: {product_sku: id} })
}

module.exports = productServices

