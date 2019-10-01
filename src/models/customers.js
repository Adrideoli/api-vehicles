const db = require('../db')

const customers = db.model('Customers', {
    name: String,
    cep: String,    
    street: String,
    neighborhood: String,
    number: String,
    city: String,
    state: String,
    created: { type: Date, default: Date.now }
});

module.exports = customers