const {response} = require('express')
const cotizacion = require('../models/Cotizacion')
const async = require('hbs/lib/async')
const Cotizacion = require('../models/Cotizacion')

Cotizacion = require('../models/Cotizacion')

const getCotizacion = async(req, res ) => {

    const cotizacion = await Cotizacion.find(); //Obtener todos los documentos de una coleccion
    res.json({
        msg: Cotizacion
    })
}

const postCotizacion = async(req, res) => {
    
    const datos = req.query //Capturara datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const cotizacion = new Cotizacion(datos)//Instanciar el objeto
        await cotizacion.save() //Guardar en la base de datos 
        console.log(cotizacion)
    } catch (error) {
        mensaje = error
        console.log(error)
    }
    
    res.json({
        msg: mensaje
    })

  
}

const putCotizacion = async(req, res) => {
    const { nombreCliente, nombreProducto, cantidadP, descripcion } = req.query //Desestructurar
    let mensaje = ''

    try{
        const cotizacion = await Hurto.findOneAndUpdate({nombreCliente: nombreCliente},{nombreProducto: nombreProducto, cantidadP: cantidadP, descripcion: descripcion })
        mensaje = 'Actualizacion exitosa'

    } catch (error) {
        mensaje = error
    }
    
    res.json({
        msg: mensaje
    })
}

const deleteCotizacion = async(req, res ) => {
    const { nompreProducto } = req.query //Desestructurar
    let mensaje = ''

    try {
        const cotizacion = await Cotizacion.findOneAndUpdate({nombreProducto: nombreProducto}); //Obtener todos los documentos de una coleccion
        mensaje = 'Eliminacion exitosa'
        
    } catch (error) {
        mensaje = error
    }

    res.json({
        msg: cotizacion
    })
}
   




module.exports = {
    getCotizacion,
    postCotizacion,
    putCotizacion,
    deleteCotizacion
}