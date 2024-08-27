const express = require('express');
const productoController = require('../controllers/producto.controller');

const router = express.Router();

router.get('/add-product', productoController.getAddProduct);
router.post('/add-product', productoController.postAddProduct);
router.get('/', productoController.getProducts);

module.exports = router;
