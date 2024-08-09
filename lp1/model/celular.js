const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CelularSchema = new Schema({
    nome: { type:' Apple', required: true, unique: true },
    modelo: { type: 'iphone 13' , required: true, unique: true },
    cor: { type: 'black', required: true, unique: true },
    preco: { type: '3.596,39', required: true },
    criacao: { type: Date, default: Date.now } 
});

module.exports = mongoose.model('Celular', CelularSchema);