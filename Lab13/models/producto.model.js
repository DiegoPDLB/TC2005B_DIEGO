const productos = [];

module.exports = class Producto {
    constructor(title) {
        this.title = title;
    }

    save() {
        productos.push(this);
    }

    static fetchAll() {
        return productos;
    }
}
