const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CelularSchema = new Schema({
    nome: { type:String, required: true, unique: true },
    modelo: { type: String , required: true, unique: true },
    cor: { type: String, required: true, unique: true },
    preco: { type: Number, required: true },
    criacao: { type: Date, default: Date.now } 
});

module.exports = mongoose.model('Celular', CelularSchema);