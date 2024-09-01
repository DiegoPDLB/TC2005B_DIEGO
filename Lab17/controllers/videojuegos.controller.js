const Videojuego = require('../models/videojuegos.model.js');

exports.getVideojuegos = (request, response, next) => {
    Videojuego.fetchAll()
        .then(rows => {
            response.render('vista', {
                videojuegos: rows
            });
        })
        .catch(err => console.log(err));
};

exports.insertarVideojuego = (request, response, next) => {
    const videojuego = new Videojuego(request.body.nombre, request.body.plataforma);
    videojuego.save()
        .then(() => {
            response.redirect('/');
        })
        .catch(err => console.log(err));
};

exports.getVideojuego = (request, response, next) => {
    const id = request.params.videojuego_id;
    Videojuego.findById(id)
        .then(rows => {
            if (rows.length > 0) {
                response.render('detalle', { videojuego: rows[0] });
            } else {
                response.status(404).send('Videojuego no encontrado');
            }
        })
        .catch(err => console.log(err));
};
