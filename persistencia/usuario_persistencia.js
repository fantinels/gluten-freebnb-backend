const connect = require("../db");
const { Client }  = require('pg')
const { conexao } = require('./conexao');

// Create
async function addUsuario(usuario) {
    const client = await connect()

    try {
        const sql = `INSERT INTO usuario(nome, cpf, email, telefone, cidade, uf, dt_nascimento, senha) 
                     VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`
        const values = [usuario.nome, usuario.cpf, usuario.email, usuario.telefone, usuario.cidade, usuario.uf, usuario.dt_nascimento, usuario.senha]
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

        client.release
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
                                        telefone      = $4,
                                        cidade        = $5,
                                        uf            = $6,
                                        dt_nascimento = $7,
                                        senha         = $8
                      WHERE id = $9 RETURNING *`
        const values = [usuario.nome, usuario.cpf, usuario.email, usuario.telefone, usuario.cidade, usuario.uf, usuario.dt_nascimento, usuario.senha,id]
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