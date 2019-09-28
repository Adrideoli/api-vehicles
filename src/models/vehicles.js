const db = require ('../db')

const vehicles = db.model('vehicles', {
    marca: String,
    modelo: String, 
    ano: String
})

module.exports = vehicles