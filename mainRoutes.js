const express = require('express')
const controllers = require('./controllers')

const { getData } = controllers

const router = express.Router()

router.get('/', getData)

module.exports = router
