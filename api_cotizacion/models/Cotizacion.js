const {Schema, model} = require('mongoose')

const CotizacionSchema = ({
    tipoHurto:{
        type: String,
        required:[true, 'El hurto es requerido'],
        enum:['Arma blanca', 'Drogado'],
    },

    direccion:{
        type: String,
        required:[true, 'La dirección es requerida'],
        min:[4, 'La dirección debe contener minimo 4 caracteres'],
        max:[10, 'La dirección debe contener maximo 10 caracteres']
    },

    fehca:{
        type: Date,
        require: [true, 'La fecha es requerida'],
        format: 'YYYY-MM-DD'
    },

    ciudad:{
        type: String,
        required:[true, 'La ciudad es requerido'],
    },

    descripcion:{
        type: String,
        required:[true, 'La descripcion es requerido'],
        maxlength: 100
    },
})

module.exports = model('cotizacion', CotizacionSchema)