const express = require('express')
const controller = require('../controller/usuario_controller')

const router = express.Router()


router.post('/', controller.addUsuario)

module.exports = router