const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const indexRouter = require('./routes/index');

// Crear la aplicación Express
const app = express();

// Middleware para manejar JSON
app.use(bodyParser.json());

// Middleware para servir archivos estáticos desde el directorio "public"
app.use(express.static(path.join(__dirname, 'public')));

// Configuración del motor de vistas
app.set('view engine', 'ejs');

// Uso de rutas definidas en routes/index.js
app.use('/', indexRouter);

// Configuración del puerto
const PORT = process.env.PORT || 3000;

// Arranque del servidor
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
