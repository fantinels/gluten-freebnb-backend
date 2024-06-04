const connect = require("../db");

// Create
async function addUsuario(usuario) {
    const client = await connect()

    try {
        const sql = `INSERT INTO usuario(nome, cpf, email, senha, tipo) 
                     VALUES ($1, $2, $3, $4, $5) RETURNING *`
        const values = [usuario.nome, usuario.cpf, usuario.email, usuario.senha, usuario.tipo]
        const usuarios = await client.query(sql, values)

        client.release
        return usuarios.rows[0]
    } catch (error) { throw error }
}

// Read
async function buscarUsuario() {
    const client = await connect()

    try {
        const sql = `SELECT * FROM usuario`
        const usuarios = await client.query(sql)
        await client.end()
        // await client.release
        return usuarios.rows
    } catch (error) { throw error }
}

async function buscarUsuarioNome(nome) {
    const client = await connect()

    try {
        const sql = `SELECT * FROM usuario WHERE nome = $1`
        const values = [nome]
        const usuarios = await client.query(sql, values)

        client.release
        return usuarios.rows[0]
    } catch (error) { throw error }
}

async function buscarUsuarioId(id) {
    const client = await connect()
    
    try {
        const sql = `SELECT * FROM usuario WHERE id = $1`
        const values = [id]
        const usuarios = await client.query(sql, values)

        client.release
        return usuarios.rows[0]
    } catch (error) { throw error }
}

async function buscarUsuarioEmail(email) {
    const client = await connect()

    try {
        const sql = `SELECT * FROM usuario WHERE email = $1`
        const values = [email]
        const usuarios = await client.query(sql, values)

        client.release
        return usuarios.rows[0]
    } catch (error) { throw error }
}

// Update
async function atualizarUsuario(id, usuario) {
    const client = await connect()

    try {
        const sql = `UPDATE usuario SET nome          = $1,
                                        cpf           = $2,
                                        email         = $3,
                                        senha         = $4,
                                        tipo          = $5
                      WHERE id = $6 RETURNING *`
        const values = [usuario.nome, usuario.cpf, usuario.email, usuario.senha, usuario.tipo, id]
        const usuarios = await client.query(sql, values)

        client.release
        return usuarios.rows[0]
    } catch (error) { throw error }
}

// Delete
async function deletarUsuario(id) {
    const client = await connect()

    try {
        const sql = `DELETE FROM usuario WHERE id = $1 RETURNING *`
        const values = [id]
        const usuarios = await client.query(sql, values)

        client.release
        return usuarios.rows[0]
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