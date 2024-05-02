const express = require('express')
const controller = require('../controller/usuario_controller')

const router = express.Router()


router.post('/', controller.addUsuario)
router.get('/', controller.buscarUsuario)
router.get('/nome/:nome', controller.buscarUsuarioNome)
router.get('/:id', controller.buscarUsuarioId)
router.get('/email/:email', controller.buscarUsuarioEmail)
router.put('/:id', controller.atualizarUsuario)
router.delete('/:id', controller.deletarUsuario)

module.exports = router