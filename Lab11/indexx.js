const http    = require('http');
const express = require('express');
const path    = require('path');
const fs      = require('fs');
const app     = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.get('/', (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send("trata con ---> /pregunta_lab11   /test_json   /form_method   /otro    /otromas ");
    response.end(); 
});

app.get('/test_json', (request, response, next) => {
    response.setHeader('Content-Type', 'application/json');
    response.json({code:200, msg:"Ok GET"});
    response.end();  
});

app.post('/test_json', (request, response, next) => {
    response.setHeader('Content-Type', 'application/json');
    response.json("Ok POST");
    response.end();  
});

app.get('/otro', (request, response, next) => {
    response.setHeader('Content-Type', 'application/json');
    response.json({code:200, msg:"Hola profe"});
    response.end();  
});



app.get('/pregunta_lab11', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');    
    response.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>Pregunta lab 11</title>
        </head>
        <body>
            <h1>Describe el archivo package.json.</h1>
            <p> El archivo package.json es un archivo de configuración utilizado en proyectos de Node.js. Contiene información como el nombre, la versión, las dependencias, los scripts y otra metadata del proyecto. Es crucial para la gestión de dependencias, construcción y distribución de proyectos Node.js.</p>
        </body>
        </html>
    `);
    response.end(); 
});


app.get('/otromas', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');    
    response.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Chiste HTML</title>
        </head>
        <body>
            <h1>Chiste HTML</h1>
            <p>¿Por qué fue el  <span style="color: blue;">&lt;div&gt;</span> a terapia?</p>
            <p>Porque tenía problemas de identidad y quería ser un <span style="color: red;">&lt;span&gt;</span> independiente.</p>
        </body>
        </html>
    
    `);
    response.end(); 
});
app.get('/form_method', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    const html = fs.readFileSync(path.resolve(__dirname, './form.html'), 'utf8')
    response.write(html);
    response.end();  
});

app.post('/form_method', (request, response, next) => {
    let body = [];
    request
    .on('data', chunk => {
        body.push(chunk);
    })
    .on('end', () => {
        body = Buffer.concat(body).toString();
        console.log(body)
    
        const indice = Number(body.split('&')[0].split('=')[1]);
        console.log(indice);
        const imprimir = body.split('&')[1].split('=')[1];
        console.log(imprimir);
    
        for(var i = 1; i <= indice; i++){
            console.log(imprimir)
        }
    
        response.setHeader('Content-Type', 'application/json');
        response.statusCode = 200;
        response.write('{code:200, msg:"Ok POST"}');
        response.end();
    });
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.status(404);
    response.send('¡Page Not Found!'); //Manda la respuesta
});

const server = http.createServer( (request, response) => {    
    console.log(request.url);
});
app.listen(3000);