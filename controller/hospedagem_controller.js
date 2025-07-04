const negocio = require('../negocio/hospedagem_negocio')

// Iniciando CRUD

// Create
async function addHospedagem(req, res) {
    const id_usuario = req.params.id;
    const hospedagem = req.body;
    if (req.files) {
        hospedagem.foto = req.files.map(file => file.path); // Salve o nome do arquivo no campo 'foto'
    }

    try {
        const hospedagens = await negocio.addHospedagem(id_usuario, hospedagem);
        res.status(201).json(hospedagens);
    } catch (error) {
        if (error.status) {
            res.status(error.status).json(error);
        } else {
            console.error("ERRO DETALHADO:", error);
            res.status(500).json({ message: "Erro interno!", erro: String(error), stack: error.stack });
            // res.status(500).json({ message: "Erro interno!" });
        }
    }
}

// Read
async function buscarHospedagens(req, res) {
    const hospedagem = req.body

    try {
        const hospedagens = await negocio.buscarHospedagens(hospedagem)
        res.status(200).json(hospedagens)
    } catch (error) {
        if (error.status) {
            res.status(error.status).json(error)
        } else {
            console.error("ERRO DETALHADO:", error);
            res.status(500).json({ message: "Erro interno!", erro: String(error), stack: error.stack });
            // res.status(500).json({message: "Erro interno!"})
            console.log(error)
        }
    }
}

async function buscarHospedagemUsuario(req, res) {
    const id_usuario = req.params.id

    try {
        const hospedagens = await negocio.buscarHospedagemUsuario(id_usuario)
        res.status(200).json(hospedagens)
    } catch (error) {
        if (error.status) {
            res.status(error.status).json(error)
        } else {
            console.error("ERRO DETALHADO:", error);
            res.status(500).json({ message: "Erro interno!", erro: String(error), stack: error.stack });
            // res.status(500).json({message: "Erro interno!"})
            console.log(error)
        }
    }
}

async function buscarHospedagemId(req, res) {
    const id = req.params.id

    try {
        const hospedagens = await negocio.buscarHospedagemId(id)
        res.status(200).json(hospedagens)
    } catch (error) {
        if (error.status) {
            res.status(error.status).json(error)
        } else {
            console.error("ERRO DETALHADO:", error);
            res.status(500).json({ message: "Erro interno!", erro: String(error), stack: error.stack });
            // res.status(500).json({message: "Erro interno!"})
            console.log(error)
        }
    }
}

// Update
async function atualizarHospedagem(req, res) {
    const id = req.params.id
    const hospedagem = req.body
    // if (req.files) {
    //     hospedagem.foto = req.files.map(file => file.path); // Salve o nome do arquivo no campo 'foto'
    // }

    try {
        const hospedagens = await negocio.atualizarHospedagem(id, hospedagem)
        res.status(200).json(hospedagens)
    } catch (error) {
        if (error.status) {
            res.status(error.status).json(error)
        } else {
            console.error("ERRO DETALHADO:", error);
            res.status(500).json({ message: "Erro interno!", erro: String(error), stack: error.stack });
            // res.status(500).json({message: "Erro interno!"})
            console.log(error)
        }
    }
}

// Atualizar fotos
async function atualizarFotoHospedagem(req, res) {
    const id = req.params.id
    const hospedagem = req.body
    if (req.files) {
        hospedagem.foto = req.files.map(file => file.path); // Salve o nome do arquivo no campo 'foto'
    }

    try {
        const hospedagens = await negocio.atualizarFotoHospedagem(id, hospedagem)
        res.status(200).json(hospedagens)
    } catch (error) {
        if (error.status) {
            res.status(error.status).json(error)
        } else {
            console.error("ERRO DETALHADO:", error);
            res.status(500).json({ message: "Erro interno!", erro: String(error), stack: error.stack });
            // res.status(500).json({message: "Erro interno!"})
            console.log(error)
        }
    }
}

// Delete
async function deletarHospedagem(req, res) {
    const id = req.params.id

    try {
        const hospedagens = await negocio.deletarHospedagem(id)
        res.status(200).json(hospedagens)
    } catch (error) {
        if (error.status) {
            res.status(error.status).json(error)
        } else {
            console.error("ERRO DETALHADO:", error);
            res.status(500).json({ message: "Erro interno!", erro: String(error), stack: error.stack });
            // res.status(500).json({message: "Erro interno!"})
            console.log(error)
        }
    }
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