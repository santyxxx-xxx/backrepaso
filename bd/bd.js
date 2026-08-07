const mongoose = require("mongoose");
const bd = async () => {
    try {
        await mongoose.connect("mongodb+srv://santy2507e5_db_user:Santy2507@cluster0.nvicdk0.mongodb.net/?appName=Cluster0")
        console.log("BDD conectada")
    } catch (error) {
        console.log("Error conectando")
    }
};

module.exports = bd;