const express = require('express')
const controller = require('../controller/hospedagem_controller')

const router = express.Router()


router.post('/', controller.addHospedagem)
router.get('/', controller.buscarHospedagens)
router.get('/:id_usuario', controller.buscarHospedagemUsuario)
router.get('/:id', controller.buscarHospedagemId)
router.put('/:id', controller.atualizarHospedagem)
router.delete('/:id', controller.deletarHospedagem)

module.exports = router