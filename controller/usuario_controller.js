const negocio = require('../negocio/usuario_negocio')

// Iniciando CRUD

// Create
async function addUsuario(req, res) {
    const usuario = req.body  

    try {
        const usuarios = await negocio.addUsuario(usuario)
        res.status(201).json(usuarios)
    } catch (error) {
        if (error.status) {
            res.status(error.status).json(error)
            console.log(error)
        } else {
            res.status(500).json({message: "Erro interno!"})
            console.log(error)
        }
    }
}

// Read
async function buscarUsuario(req, res) {
    const usuario = req.body
}

async function buscarUsuarioNome(req, res) {
    const nome = req.params.nome
}

async function buscarUsuarioId(req, res) {
    const id = req.params.id
}

async function buscarUsuarioEmail(req, res) {
    const email = req.params.email
}

// Update
async function atualizarUsuario(req, res) {
    const id = req.params.id
    const usuario = req.body
}

// Delete
async function deletarUsuario(req, res) {
    const id = req.params.id
}

module.exports = {
    addUsuario,
    buscarUsuario,
    buscarUsuarioNome,
    buscarUsuarioId,
    buscarUsuarioEmail,
    atualizarUsuario,
    deletarUsuario
}