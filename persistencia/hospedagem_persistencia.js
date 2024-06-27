const connect = require("../db");

// Create
async function addHospedagem(id_usuario, hospedagem) {
    const client = await connect()

    try {
        const sql = `INSERT INTO hospedagem(id_usuario, endereco, numero, complemento, bairro, cidade, estado, cep, nome, valor, descricao,
                                            especificacao, foto) 
                     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *`
        const values = [id_usuario, 
                        hospedagem.endereco,      hospedagem.numero, hospedagem.complemento, hospedagem.bairro, hospedagem.cidade,
                        hospedagem.estado,        hospedagem.cep,    hospedagem.nome,        hospedagem.valor,  hospedagem.descricao,
                        hospedagem.especificacao, hospedagem.foto]
        const hospedagens = await client.query(sql, values)

        client.release
        return hospedagens.rows[0]
    } catch (error) { throw error }
}

// Read
async function buscarHospedagens() {
    const client = await connect()

    try {
        const sql = `SELECT * FROM hospedagem ORDER BY id`
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
        return hospedagens.rows
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
    const client = await connect();

    try {
        const sql = `UPDATE hospedagem SET endereco      = $1,
                                           numero        = $2,
                                           complemento   = $3,
                                           bairro        = $4,
                                           cidade        = $5,
                                           estado        = $6,
                                           cep           = $7,
                                           nome          = $8,
                                           valor         = $9,
                                           descricao     = $10,
                                           especificacao = $11
                      WHERE id = $12 RETURNING *`;
        const values = [hospedagem.endereco,      hospedagem.numero, hospedagem.complemento, hospedagem.bairro, hospedagem.cidade,
                        hospedagem.estado,        hospedagem.cep,    hospedagem.nome,        hospedagem.valor,  hospedagem.descricao,
                        hospedagem.especificacao, id];
        const hospedagens = await client.query(sql, values);

        client.release;
        return hospedagens.rows[0];
    } catch (error) {
        throw error;
    }
}

// Atualizar fotos
async function atualizarFotoHospedagem(id, hospedagem) {
    const client = await connect()

    try {
        const sql = `UPDATE hospedagem SET foto = $1 WHERE id = $2 RETURNING *`
        const value = [hospedagem.foto, id]

        const fotoHospedagem = await client.query(sql, value)
        client.release;
        return fotoHospedagem.rows[0]
    } catch (error) {
        throw error;
    }
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
    atualizarFotoHospedagem,
    deletarHospedagem
}