const express = require('express')
const morgan = require('morgan')

const mainRoutes = require('./mainRoutes')

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use('/api', mainRoutes)

module.exports = app
