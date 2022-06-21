const express = require('express');
const router = express.Router();
const Joi = require('joi');

const validateRequest = require('_middleware/validate-request');

const costumerService = require('./costumer.service');

// routes

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', createSchema, create);
router.put('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
    costumerService.getAll()
        .then(costumers => res.json(costumers))
        .catch(next);
}

function getById(req, res, next) {
    costumerService.getById(req.params.id)
        .then(costumer => res.json(costumer))
        .catch(next);
}

function create(req, res, next) {
    costumerService.create(req.body)
        .then(() => res.json({ message: 'Costumer created' }))
        .catch(next);
}

function update(req, res, next) {
    costumerService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'Costumer updated' }))
        .catch(next);
}

function _delete(req, res, next) {
    costumerService.delete(req.params.id)
        .then(() => res.json({ message: 'Costumer deleted' }))
        .catch(next);
}

// schema functions

function createSchema(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required(),
        cep: Joi.string().required(),
        logradouro: Joi.string().required(),
        cidade: Joi.string().required(),
        estado: Joi.string().required(),
        bairro: Joi.string().required(),
        numero: Joi.string().required()
  
    });
    validateRequest(req, next, schema);
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required(),
        cep: Joi.string().required(),
        logradouro: Joi.string().required(),
        cidade: Joi.string().required(),
        estado: Joi.string().required(),
        bairro: Joi.string().required(),
        numero: Joi.string().required()
    });
    validateRequest(req, next, schema);
}
