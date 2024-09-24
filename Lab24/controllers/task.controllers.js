const tasks = [];

// Controlador para obtener las tareas
exports.getTasks = (req, res) => {
    res.render('index', { tasks });
};

// Controlador para agregar una tarea
exports.addTask = (req, res) => {
    const { message } = req.body;
    tasks.push({ message });
    res.status(200).json({ tasks });
};
