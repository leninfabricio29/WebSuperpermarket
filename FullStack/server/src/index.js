const express  = require ('express')
const app = express()
const morgan = require ('morgan')
const cors = require ('cors')
const bodyparser = require ('body-parser')
require('./db/main')


//Asignacion de puertos
app.set('Port',4000)
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.unsubscribe(bodyparser.json())
app.use(cors())


//Peticiones



//RUTAS

app.use('/api/',require('./routes/rutas'))

app.listen(app.get('Port'),()=>{
    console.log('Servidor funcionando'),app.get('Port')
})