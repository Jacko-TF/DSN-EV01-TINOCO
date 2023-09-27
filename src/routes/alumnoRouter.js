const express = require("express");

const api = express.Router();

const alumnoController = require('../controllers/alumnoController')

api.get('/listar',alumnoController.listar)

api.post('/registrar',alumnoController.registrar)

module.exports = api;