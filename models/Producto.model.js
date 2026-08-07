const mongoose = require("mongoose")

const Productoschema = new mongoose.Schema({
    nombre : {
        type : String,
        require : true
    },

    precio : {
        type : Number,
        require : true
    }

});

const Producto = mongoose.model("Producto", Productoschema)
module.exports = Producto;