const persistencia = require('../persistencia/hospedagem_persistencia');
const { buscarUsuarioId } = require('../persistencia/usuario_persistencia');

// Iniciando CRUD

// Create
async function addHospedagem(id_usuario, hospedagem) {
    const id = await buscarUsuarioId(id_usuario)

    if (!id) {
        console.log(id)
        throw ({status: 404, message: "Não existe este usuário"})
    }

    if(id_usuario, hospedagem && hospedagem.nome && hospedagem.cep && hospedagem.tipo_logradouro && hospedagem.logradouro &&
        hospedagem.numero && hospedagem.complemento && hospedagem.bairro && hospedagem.cidade && hospedagem.uf && hospedagem.descricao &&
        hospedagem.foto && hospedagem.tipo_acomodacao && valor && hospedagem.qt_hospede && hospedagem.qt_banheiro && hospedagem.qt_quarto &&
        hospedagem.qt_cama) {
        try {
            const hospedagens = await persistencia.addHospedagem(id_usuario, hospedagem)
            return hospedagens
        } catch (error) { throw error }
    } else {
        const erro = new Error()
        erro.message = "Todos os campos são obrigatórios."
        erro.status = 400
        throw erro
    }
}

// Read
async function buscarHospedagens() {
    try {
        const hospedagens = await persistencia.buscarHospedagens()

        if (hospedagens.length == 0) {
            const erro = new Error()
            erro.message = "Não há hospedagens cadastradas."
            erro.status = 404
            throw erro
        }

        return hospedagens
    } catch (error) { throw error }
}

async function buscarHospedagemUsuario(idUsuario) {
    try {
        const hospedagens = await persistencia.buscarHospedagemUsuario(idUsuario)

        if (!hospedagens) {
            const erro = new Error()
            erro.message = "Hospedagem não encontrada."
            erro.status = 404
            throw erro
        }

        return hospedagens
    } catch (error) { throw error }
    
}

async function buscarHospedagemId(id) {
    try {
        const hospedagem = await persistencia.buscarHospedagemId(id)

        if (!hospedagem) {
            const erro = new Error()
            erro.message = "Hospedagem não encontrada."
            erro.status = 404
            throw erro
        }

        return hospedagem
    } catch (error) { throw error }    
}

// Update
async function atualizarHospedagem(id, hospedagem) {
    if(hospedagem && hospedagem.nome && hospedagem.cep && hospedagem.tipo_logradouro && hospedagem.logradouro &&
        hospedagem.numero && hospedagem.complemento && hospedagem.bairro && hospedagem.cidade && hospedagem.uf && hospedagem.descricao &&
        hospedagem.foto && hospedagem.tipo_acomodacao && valor && hospedagem.qt_hospede && hospedagem.qt_banheiro && hospedagem.qt_quarto &&
        hospedagem.qt_cama) {
            const atualizarHospedagem = await persistencia.atualizarHospedagem(id, hospedagem)

            if(!atualizarHospedagem) {
                let erro = new Error()
                erro.message = "Hospedagem não encontrada."
                erro.status = 404
                throw erro
            }

            return atualizarHospedagem
        } else {
            let erro = new Error()
            erro.message = "Todos os campos são obrigatórios."
            erro.status = 400
            throw erro
        }
}

// Delete
async function deletarHospedagem(id) {
    try {
        const deletarHospedagem =  await persistencia.deletarHospedagem(id)

        if (!deletarHospedagem) {
            const erro = new Error()
            erro.message = "Hospedagem não encontrada."
            erro.status = 404
            throw erro
        }

        return deletarHospedagem
    } catch (error) { throw error }    
}


module.exports = {
    addHospedagem,
    buscarHospedagens,
    buscarHospedagemUsuario,
    buscarHospedagemId,
    atualizarHospedagem,
    deletarHospedagem
}