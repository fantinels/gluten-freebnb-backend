const express = require('express');
const cors = require('cors');
require("dotenv").config();


const app = express();
const port = process.env.PORT;

const rotaUsuario = require('./rota/usuario_rota');
const rotaHospedagem = require('./rota/hospedagem_rota');

app.use(cors({ origin: '*' })); // Configura o CORS para permitir qualquer orige

app.use(express.json()); // Configuração para receber dados JSON
app.use(express.urlencoded({ extended: true }));

app.use("/api/usuario", rotaUsuario);
app.use("/api/hospedagem", rotaHospedagem);


app.listen(port, () => {
    console.log(`Gluten Freebnb rodando na porta ${port}`);
});
