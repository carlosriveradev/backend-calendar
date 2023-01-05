const express = require('express')
require('dotenv').config()
const cors = require('cors')
const { dbConnection } = require('./database/config')

// crear servidor de express
const app = express()

// Base de datos
dbConnection()

// CORS
app.use(cors())

// Lectura y parseo del body
app.use(express.json())

// directorio publico
app.use(express.static('public'))

// rutas
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))




// escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
})