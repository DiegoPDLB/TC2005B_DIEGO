const express = require('express');
const router = express.Router();
const videojuegosController = require('../controllers/videojuegos.controller.js');

router.get('/videojuegos', videojuegosController.getVideojuegos);
router.post('/videojuegos', videojuegosController.insertarVideojuego);
router.get('/videojuegos/:videojuego_id', videojuegosController.getVideojuego);

module.exports = router;
