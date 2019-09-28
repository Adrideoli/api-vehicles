const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:admin@cluster0-zvgrx.mongodb.net/DB_Vehicles?retryWrites=true&w=majority", { useNewUrlParser: true })

module.exports = mongoose
