const persistencia = require('../persistencia/usuario_persistencia');

// Iniciando CRUD

// Create
async function addUsuario(usuario) {
    const email = await persistencia.buscarUsuarioEmail(usuario.email)

    if(email) {
        throw({status: 400, message: "E-mail já cadastrado"})
    }

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
    try {
        const usuario = await persistencia.buscarUsuarioNome(nome)

        if (!usuario) {
            const erro = new Error()
            erro.message = "Não há usuários cadastrados."
            erro.status = 404
            throw erro
        }

        return usuario
    } catch (error) { throw error }
    
}

async function buscarUsuarioId(id) {
    try {
        const usuario = await persistencia.buscarUsuarioId(id)

        if (!usuario) {
            const erro = new Error()
            erro.message = "Não há usuários cadastrados."
            erro.status = 404
            throw erro
        }

        return usuario
    } catch (error) { throw error }    
}

async function buscarUsuarioEmail(email) {
    try {
        const usuario = await persistencia.buscarUsuarioEmail(email)

        if (!usuario) {
            const erro = new Error()
            erro.message = "Não há usuários cadastrados."
            erro.status = 404
            throw erro
        }

        return usuario
    } catch (error) { throw error }
    
}

// Update
async function atualizarUsuario(id, usuarios) {
    if(usuarios && usuarios.nome && usuarios.cpf && usuarios.email && usuarios.telefone && usuarios.cidade && usuarios.uf 
        && usuarios.dt_nascimento && usuarios.senha) {
            const atualizarUsuario = await persistencia.atualizarUsuario(id, usuarios)

            if(!atualizarUsuario) {
                let erro = new Error()
                erro.message = "Usuário não encontrado."
                erro.status = 404
                throw erro
            }

            return atualizarUsuario
        } else {
            let erro = new Error()
            erro.message = "Todos os campos são obrigatórios."
            erro.status = 400
            throw erro
        }
}

// Delete
async function deletarUsuario(id) {
    try {
        const deletarUsuario =  await persistencia.deletarUsuario(id)

        if (!deletarUsuario) {
            const erro = new Error()
            erro.message = "Usuário não encontrado"
            erro.status = 404
            throw erro
        }

        return clienteDeletado
    } catch (error) { throw error }    
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