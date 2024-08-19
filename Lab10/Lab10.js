const http = require('http'); 
const path = require('path');
const fs   = require('fs');

const server = http.createServer( (request, response) => {    
    console.log(request.url);
    
    switch(request.url){
        case "/":
            response.setHeader('Content-Type', 'text/html');    
            response.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Lab10</title>
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css"
                    >
                </head>
                <body>
                    <a href="/chiste_html" button class="button is-dark">Chiste?</button>
                    <a href="/json" button class="button is-dark">JSON</button>
                    <a href="/ST" button class="button is-dark">StarWars</button>
                </body>
                </html>
            
            `);
            response.end();   
            break;
        case "/json":
            if(request.method == "GET"){
                response.setHeader('Content-Type', 'application/json');
                response.write('MEJOR INTENTA CON LAS OTRAS RUTAS');
                response.end();  
            }else if(request.method == "POST"){
                response.setHeader('Content-Type', 'application/json');
                response.write('{code:200, msg:"Ok POST"}');
                response.end();  
                }
            break;
        case "/chiste_html":
            response.setHeader('Content-Type', 'text/html');    
            response.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Chiste HTML</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        text-align: center;
                        background-color: #f0f0f0;
                        padding: 50px;
                    }
                    .chiste {
                        background-color: #fff;
                        border-radius: 10px;
                        padding: 20px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        max-width: 400px;
                        margin: 0 auto;
                    }
                </style>
            </head>
            <body>
                <div class="chiste">
                    <h1>¡Chiste HTML!</h1>
                    <p>¿Por qué los programadores odian el mar?</p>
                    <p>Porque siempre tienen que hacer "buoy" (¡boo-y!) en sus proyectos.</p>
                    <img src="https://media.giphy.com/media/3o6fJ8ldiYBjSCYTS4/giphy.gif" alt="Programador en la playa">
                </div>
            </body>
            </html>
            
            `);
            response.end();   
            break;
        case "/ST":
            if(request.method == "GET"){
                response.setHeader('Content-Type', 'text/html');
                const html = fs.readFileSync(path.resolve(__dirname, './Lab10.html'), 'utf8')
                response.write(html);
                response.end();  
            }else if(request.method == "POST"){
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
            }
            break;
        default:
            response.statusCode = 404;
            response.end();
            break;
    }
});
server.listen(3000);
