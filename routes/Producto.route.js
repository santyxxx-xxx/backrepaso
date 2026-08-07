const express = require ("express")
const producto = require("../controllers/Producto.controller")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("hola")
});


router.get("/producto", producto.obtenerProducto )

router.post("/producto", producto.crearProducto )

router.put("/producto/:id", producto.actualizarProducto )

router.delete("/producto/:id", producto.eliminarProducto )

module.exports = router;