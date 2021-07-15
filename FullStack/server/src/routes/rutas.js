const {Router} = require('express')
const route = Router()
const Control = require('../controllers/appcontrol')

route.get('/',Control.leer)
route.post('/',Control.crear)
route.put('/',Control.actualizar)
route.delete('/',Control.eliminar)

module.exports = route