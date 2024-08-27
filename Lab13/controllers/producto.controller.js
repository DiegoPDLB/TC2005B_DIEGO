const Producto = require('../models/producto.model');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/add-product'
    });
};

exports.postAddProduct = (req, res, next) => {
    const producto = new Producto(req.body.title);
    producto.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    const productos = Producto.fetchAll();
    res.render('product-list', {
        prods: productos,
        pageTitle: 'Product List',
        path: '/'
    });
};
