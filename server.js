const express = require("express")
const producto = require("./routes/Producto.route")
const db= require("./bd/bd")
const PORT = 3000;
const app = express();

db();

app.use(express.json())
app.use(producto)
app.listen(PORT, () => {
    console.log(`conectadoooo`)
})