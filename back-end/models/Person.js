;
'use strict'
const mongoose = require('mongoose');
const {Schema} = mongoose;

const Person = new Schema({
    rol: {
        type: String,
        enum: ['Administrador', 'Organizador', 'Revisor', 'Ponente', 'Asistente']
    },
    level_academy: {
        type: String,
        enum: ['Master', 'TercerNivel', 'SegundoNivel']
        
    },
    specialty: {
        type: String,
        enum: ['Medicina', 'Economía', 'Deportes', 'Educacion']
    },
    type_dni: {
        type: String,
        enum: ['Cedula', 'Pasaporte']
    },
    dni: {type: String},
    names: {type: String},
    last_names: {type: String},
    phone: {type: String},
    email: {type: String},
    password: {type: String},
    status: {type: Boolean},
});

module.exports = mongoose.model('persons', Person);
