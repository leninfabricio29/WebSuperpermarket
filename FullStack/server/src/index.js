const express  = require ('express')
const app = express()
const morgan = require ('morgan')
const cors = require ('cors')
const bodyparser = require ('body-parser')
require('./db/main')


//Asignacion de puertos
app.use(cors())

app.set('Port',4000)
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.unsubscribe(bodyparser.json())


//Peticiones



//RUTAS

app.use('/api/',require('./routes/rutas'))

app.listen(app.get('Port'),()=>{
    console.log('Servidor funcionando'),app.get('Port')
})