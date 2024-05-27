const express = require('express')
const controller = require('../controller/hospedagem_controller')
// const upload = require('../multerConfig')
const upload = require('../cloudinaryConfig');

const router = express.Router()


router.post('/:id', upload.array('foto', 10), controller.addHospedagem)
router.get('/', controller.buscarHospedagens)
router.get('/user/:id', controller.buscarHospedagemUsuario)
router.get('/:id', controller.buscarHospedagemId)
router.put('/:id', controller.atualizarHospedagem)
router.delete('/:id', controller.deletarHospedagem)

module.exports = router