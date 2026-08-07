const Producto = require("../models/Producto.model")

async function obtenerProducto (req, res) {
    const productos = await Producto.find()
    res.json(productos);
};

async function crearProducto(req, res) {
    await Producto.create(req.body)
    res.json({
        mensaje: "Producto Creado"
    })
};

async function actualizarProducto(req, res) {
    const id = req.params.id;
    Producto.findByIdAndUpdate(
        id,
        req.body
    );
    res.json({
        mensaje: "Producto Actualizado"
    })
};

async function eliminarProducto(req, res) {
    const id = req.params.id;
    Producto.findByIdAndDelete(
        id,
        req.body
    );
    res.json({
        mensaje: "Producto Eliminado"
    })
}

module.exports = {
    obtenerProducto,
    crearProducto,
    actualizarProducto,
    eliminarProducto
}