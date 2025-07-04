const connect = require("../db");

// Create
async function addUsuario(usuario) {
    const client = await pool.connect()

    try {
        const sql = `INSERT INTO usuario(nome, sobrenome, cpf, email, senha, tipo) 
                     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`
        const values = [usuario.nome, usuario.sobrenome, usuario.cpf, usuario.email, usuario.senha, usuario.tipo]
        const usuarios = await client.query(sql, values)

        client.release()
        return usuarios.rows[0]
    } catch (error) { throw error }
}

// Read
async function buscarUsuario() {
    const client = await pool.connect()

    try {
        const sql = `SELECT * FROM usuario`
        const usuarios = await client.query(sql)
        await client.end()
        // await client.release
        return usuarios.rows
    } catch (error) { throw error }
}

async function buscarUsuarioNome(nome) {
    const client = await pool.connect()

    try {
        const sql = `SELECT * FROM usuario WHERE nome = $1`
        const values = [nome]
        const usuarios = await client.query(sql, values)

        client.release()
        return usuarios.rows[0]
    } catch (error) { throw error }
}

async function buscarUsuarioId(id) {
    const client = await pool.connect()
    
    try {
        const sql = `SELECT * FROM usuario WHERE id = $1`
        const values = [id]
        const usuarios = await client.query(sql, values)

        client.release()
        return usuarios.rows[0]
    } catch (error) { throw error }
}

async function buscarUsuarioEmail(email) {
    const client = await pool.connect()

    try {
        const sql = `SELECT * FROM usuario WHERE email = $1`
        const values = [email]
        const usuarios = await client.query(sql, values)

        client.release()
        return usuarios.rows[0]
    } catch (error) { throw error }
}

// Update
async function atualizarUsuario(id, usuario) {
    const client = await pool.connect()

    try {
        const sql = `UPDATE usuario SET nome          = $1,
                                        sobrenome     = $2,
                                        cpf           = $3,
                                        email         = $4,
                                        senha         = $5,
                                        tipo          = $6
                      WHERE id = $7 RETURNING *`
        const values = [usuario.nome, usuario.sobrenome, usuario.cpf, usuario.email, usuario.senha, usuario.tipo, id]
        const usuarios = await client.query(sql, values)

        client.release()
        return usuarios.rows[0]
    } catch (error) { throw error }
}

// Delete
async function deletarUsuario(id) {
    const client = await pool.connect()

    try {
        await client.query('BEGIN')
        const sqlHospedagem = `DELETE FROM hospedagem WHERE id_usuario = $1 RETURNING *`
        const valuesHospedagem = [id]
        const hospedagemDel = await client.query(sqlHospedagem, valuesHospedagem)

        const sqlUsuario = `DELETE FROM usuario WHERE id = $1 RETURNING *`
        const valuesUsuario = [id]
        const usuarioDel = await client.query(sqlUsuario, valuesUsuario)

        await client.query('COMMIT')
        return { usuario: usuarioDel.rows[0], hospedagem: hospedagemDel.rows[0] }
    } catch (error) { 
        await client.query('ROLLBACK')

        throw error 
    } finally { client.release() }
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