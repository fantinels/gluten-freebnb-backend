const express = require('express');
// const cors = require('cors');
// require("dotenv").config();

const app = express();
const port = 3001 //process.env.PORT;

const rotaUsuario = require('./rota/usuario_rota');

// app.use(cors({ origin: '*' })); // Configura o CORS para permitir qualquer origem

app.use(express.json()); // Configuração para receber dados JSON
app.use(express.urlencoded({ extended: true }));

app.use("/api/usuario", rotaUsuario);


app.listen(port, () => {
    console.log(`Gluten Freebnb rodando na porta ${port}`);
});
