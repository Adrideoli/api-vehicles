const uuid = require ("uuid/v1");
const { Router } = require ('express');
const routes = new Router();

//Model

const vehiclesModel = require('../../models/vehicles')

// Função GET

routes.get ("/", function (req, res) {
    vehiclesModel.find().then(resposta => {
        res.json (resposta);
    })    
});

//Função POST

routes.post ("/", function (req, res) {
    vehiclesModel.create({
        marca: req.body.marca,
        modelo: req.body.modelo,
        ano: req.body.ano
    })
    res.json({ msg: 'veículo cadastrado!' })
});

//Função PUT

routes.put ("/:id", function (req, res) {
    const id = req.params.id;

    vehiclesModel.findOneAndUpdate ({ _id: id }, {
        marca: req.body.marca,
        modelo: req.body.modelo,
        ano: req.body.ano
    }).then (() => res.json({ msg: 'Veículo atualizado' }))
});

//Função DELETE

routes.delete ("/:id", function (req, res) {
    const id = req.params.id;
    vehiclesModel.findOneAndDelete({ _id: id }).then (() => 
    res.json ({ msg: 'Veículo deletado!'}))
    
});

module.exports = routes;