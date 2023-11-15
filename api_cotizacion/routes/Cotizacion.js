const {Router} = require('express')

const route = Router()

//Listar todos los datos
const {getCotizacion, postCotizacion, putCotizacion, deleteCotizacion} = require('../controllers/Cotizacion') //Importando el controlador de ususarios


route.get('/', getCotizacion)

route.post('/', postCotizacion)

route.put('/', putCotizacion)

route.delete('/', deleteCotizacion)


//Consultar un dato
// route.get('/consultarUsuario', (req, res) => {
//     res.json({
//         msg: 'Datos'
//     })
// })

//Método para agregar datos
// route.post('/', (req, res) => {
   
//     res.json({
//         msg: 'Inserción exitosa'
//     })
// })

// route.put('/', (req, res) => {
//     //Implementar lógica
//     res.json({
//         msg:'Modificación exitosa'
//     })
// })

// route.delete('/', (req, res) => {
//     //Implementar lógica
//     res.json({
//         msg:'Eliminación exitosa'
//     })
// })

module.exports = route