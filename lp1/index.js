//email temporario mongodbatlas wocerih166@leacore.com
import express from 'express';
const app = express();
import mongoose from 'mongoose';

const express = require('express');
const api = express();
const URL_BD = 'mongodb+srv://aderbal:senha@cluster0.yr0dzyz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const portaApi = 3000;
const mongoose = require('mongoose');

mongoose.connect(URL_BD);

mongoose.connection.on('connected', () => {
    console.log('API conectada ao BD!');
});

mongoose.connection.on('disconnected', () => {
    console.log('API foi desconectada do BD!');
});

mongoose.connection.on('error', (erro) => {
    console.log('Erro ao conectar no BD! ', erro);
});


api.get('/status', function (req, res) {
    res.send('<h3>API Online!</h3>');
});

api.listen(portaApi, function() {
    console.log('API Online!');
});

const celularController = require('./controller/celular.js');
api.get('/celular', celularController.listarCelular);
api.post('/celular', celularController.adicionarCelular);
api.put('/celular', celularController.editarCelular);
api.delete('/celular', celularController.removerCelular);