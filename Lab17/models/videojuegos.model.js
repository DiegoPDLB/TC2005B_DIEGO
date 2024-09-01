const pool = require('../util/database.js');

class Videojuego {
    constructor(nombre, plataforma) {
        this.nombre = nombre;
        this.plataforma = plataforma;
    }

    save() {
        return pool.query(
            'INSERT INTO videojuegos (nombre, plataforma) VALUES (?, ?)',
            [this.nombre, this.plataforma]
        );
    }

    static fetchAll() {
        return pool.query('SELECT * FROM videojuegos');
    }

    static findById(id) {
        return pool.query('SELECT * FROM videojuegos WHERE id = ?', [id]);
    }
}

module.exports = Videojuego;
