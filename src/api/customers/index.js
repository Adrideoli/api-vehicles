const uuid = require ("uuid/v1");
const { Router } = require ('express');
const routes = new Router();

// Model

const customersModel = require('../../models/customers')

// Função GET

routes.get("/", function (req, res) {
    customersModel.find().then(resposta => {
        res.json(resposta)    
    })
})

// Função POST

routes.post("/", function (req, res) {
    customersModel.create({
        name: req.body.name, 
        cep: req.body.cep,
        street: req.body.street,
        neighborhood: req.body.neighborhood,
        number: req.body.number,
        city: req.body.city,
        state: req.body.state
    });

    res.json({ msg: 'Cliente cadastrado!' });    
});

// Função PUT 

routes.put("/:id", function (req, res) {
    const id = req.params.id;

    customersModel.findOneAndUpdate({ _id: id }, {
        name: req.body.name,
        street: req.body.street
    }).then (() => res.json({ msg: 'Cliente atualizado!' }))
});

// Função DELETE

routes.delete("/:id", function (req, res) {
    const id = req.params.id;
    customersModel.findOneAndDelete({ _id: id }).then (() => res.json({ msg: 'Cliente deletado' }))
})

module.exports = routes;
