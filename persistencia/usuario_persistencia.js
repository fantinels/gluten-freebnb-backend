// const { Client } = require('pg')
// const { conexao } = require('./conexao')
const connect = require("../db");

// Create
async function addUsuario(usuario) {
    const client = await connect()
    // const client = new Client(conexao)
    // await client.connect()

    try {
        const sql = `INSERT INTO usuario(nome, cpf, email, telefone, cidade, uf, dt_nascimento, senha) 
                     VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`
        const values = [usuario.nome, usuario.cpf, usuario.email, usuario.telefone, usuario.cidade, usuario.uf, usuario.dt_nascimento, usuario.senha]
        const usuarios = await client.query(sql, values)

        // await client.end()
        await client.release
        return usuarios.rows[0]
    } catch (error) { throw error }
}

// Read
async function buscarUsuario() {
    const client = await connect()
    // const client = new Client(conexao)
    // await client.connect()

    try {
        const sql = `SELECT * FROM usuario`
        const usuarios = await client.query(sql)
        // await client.end()
        await client.release
        return usuarios.rows
    } catch (error) { throw error }
}

async function buscarUsuarioNome(nome) {
    const client = await connect()
    // const client = new Client(conexao)
    // await client.connect()
}

async function buscarUsuarioId(id) {
    const client = await connect()
    // const client = new Client(conexao)
    // await client.connect()
}

async function buscarUsuarioEmail(id) {
    const client = await connect()
    // const client = new Client(conexao)
    // await client.connect()
}

// Update
async function atualizarUsuario(id, alunos) {
    const client = await connect()
    // const client = new Client(conexao)
    // await client.connect()
}

// Delete
async function deletarUsuario(id) {
    const client = await connect()
    // const client = new Client(conexao)
    // await client.connect()
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