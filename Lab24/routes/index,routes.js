const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Ruta para obtener las tareas
router.get('/', taskController.getTasks);

// Ruta para agregar una tarea
router.post('/addTask', taskController.addTask);

module.exports = router;
