const http = require('http');
const fs = require('fs');
const path = require('path');

// Crear el servidor
const server = http.createServer((req, res) => {
    // Definir la ruta del archivo solicitado
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './Lab08.html';
    }

    // Extensión del archivo
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.svg': 'application/image/svg+xml',
    };

    // Determinar el tipo de contenido
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // Leer y servir el archivo solicitado
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code == 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - Página no encontrada</h1>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end('Error del servidor: ' + error.code + ' ..\n');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

// El servidor escuchará en el puerto 3000
server.listen(3000, () => {
    console.log('Servidor corriendo en http://127.0.0.1:3000/');
});
