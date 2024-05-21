const connect = require("../db");

// Create
async function addHospedagem(id_usuario, hospedagem) {
    const client = await connect()

    try {
        const sql = `INSERT INTO hospedagem(id_usuario, nome, cep, tipo_logradouro, logradouro, numero, complemento, bairro, cidade, uf, descricao,
                                            foto, tipo_acomodacao, valor, qt_hospede, qt_banheiro, qt_quarto, qt_cama) 
                     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING *`
        const values = [id_usuario, hospedagem.nome, hospedagem.cep, hospedagem.tipo_logradouro, hospedagem.logradouro, hospedagem.numero, 
            hospedagem.complemento, hospedagem.bairro, hospedagem.cidade, hospedagem.uf, hospedagem.descricao, hospedagem.foto, 
            hospedagem.tipo_acomodacao, hospedagem.valor, hospedagem.qt_hospede, hospedagem.qt_banheiro, hospedagem.qt_quarto, hospedagem.qt_cama]
        const hospedagens = await client.query(sql, values)

        client.release
        return hospedagens.rows[0]
    } catch (error) { throw error }
}

// Read
async function buscarHospedagens() {
    const client = await connect()

    try {
        const sql = `SELECT * FROM hospedagem`
        const hospedagens = await client.query(sql)

        client.release
        return hospedagens.rows
    } catch (error) { throw error }
}

async function buscarHospedagemUsuario(idUsuario) {
    const client = await connect()

    try {
        const sql = `SELECT usuario.nome, hospedagem.* FROM hospedagem
                     INNER JOIN usuario ON usuario.id = hospedagem.id_usuario 
                     WHERE hospedagem.id_usuario = $1`
        const values = [idUsuario]
        const hospedagens = await client.query(sql, values)

        client.release
        return hospedagens.rows[0]
    } catch (error) { throw error }
}

async function buscarHospedagemId(id) {
    const client = await connect()

    try {
        const sql = `SELECT * FROM hospedagem WHERE id = $1`
        const values = [id]
        const hospedagens = await client.query(sql, values)

        client.release
        return hospedagens.rows[0]
    } catch (error) { throw error }
}

// Update
async function atualizarHospedagem(id, hospedagem) {
    const client = await connect()

    try {
        const sql = `UPDATE hospedagem SET nome            = $1,
                                           cep             = $2,
                                           tipo_logradouro = $3,
                                           logradouro      = $4,
                                           numero          = $5,
                                           complemento     = $6,
                                           bairro          = $7,
                                           cidade          = $8,
                                           uf              = $9,
                                           descricao       = $10,
                                           foto            = $11,
                                           tipo_acomodacao = $12,
                                           valor           = $13,
                                           qt_hospede      = $14,
                                           qt_banheiro     = $15,
                                           qt_quarto       = $16,
                                           qt_cama         = $17
                      WHERE id = $18 RETURNING *`
        const values = [hospedagem.nome, hospedagem.cep, hospedagem.tipo_logradouro, hospedagem.logradouro, hospedagem.numero, 
            hospedagem.complemento, hospedagem.bairro, hospedagem.cidade, hospedagem.uf, hospedagem.descricao, hospedagem.foto,
            hospedagem.tipo_acomodacao, hospedagem.valor, hospedagem.qt_hospede, hospedagem.qt_banheiro, hospedagem.qt_quarto,
            hospedagem.qt_cama, id]
        const hospedagens = await client.query(sql, values)

        client.release
        return hospedagens.rows[0]
    } catch (error) { throw error }
}

// Delete
async function deletarHospedagem(id) {
    const client = await connect()

    try {
        const sql = `DELETE FROM hospedagem WHERE id = $1 RETURNING *`
        const values = [id]
        const hospedagens = await client.query(sql, values)

        client.release
        return hospedagens.rows[0]
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