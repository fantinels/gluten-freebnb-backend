const persistencia = require('../persistencia/usuario_persistencia');

// Iniciando CRUD

// Create
async function addUsuario(usuario) {
    if(usuario && usuario.nome && usuario.cpf && usuario.email && usuario.telefone && usuario.cidade && usuario.uf &&
       usuario.dt_nascimento && usuario.senha) {
        try {
            const usuarios = await persistencia.addUsuario(usuario)
            console.log(usuarios)
            return usuarios
        } catch (error) { throw error }
    } else {
        const erro = new Error()
        erro.message = "Todos os campos são obrigatórios."
        erro.status = 400
        throw erro
    }
}

// Read
async function buscarUsuario() {
    try {
        const usuario = await persistencia.buscarUsuario()

        if (usuario.length == 0) {
            const erro = new Error()
            erro.message = "Não há usuários cadastrados."
            erro.status = 404
            throw erro
        }

        return usuario
    } catch (error) { throw error }
}

async function buscarUsuarioNome(nome) {
    
}

async function buscarUsuarioId(id) {
    
}

async function buscarUsuarioEmail(id) {
    
}

// Update
async function atualizarUsuario(id, alunos) {
    
}

// Delete
async function deletarUsuario(id) {
    
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