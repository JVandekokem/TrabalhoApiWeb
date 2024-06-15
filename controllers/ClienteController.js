const { Cliente } = require('../models');

module.exports = class ClienteController {

    static async showAll(req, res) {
        try {
            const clientes = await Cliente.findAll();
            res.status(200).json({clientes});
        } catch(error) {
            res.status(500).json({error: error.message})
        }
    }

    static async show(req, res) {
        try {
            const cliente = await Cliente.findByPk(req.params.id);
            res.status(200).json({cliente});
        } catch(error) {
            res.status(500).json({error: error.message})
        }
    }

    static async create(req, res) {
        try {
            const { nome, telefone, cpf, } = req.body;
            await Cliente.create({
                nome: nome,
                telefone: telefone,
                cpf: cpf
            })
            res.status(201).json({response: 'Cliente criado com sucesso!'})
        } catch(error) {
            res.status(500).json({error: error.message})
        }
    }

    static async update(req, res) {
        try {
            const cliente = await Cliente.findByPk(req.params.id);
            const { nome, telefone, cpf, } = req.body;
            await cliente.update({
                nome: nome,
                telefone: telefone,
                cpf: cpf
            })
            res.status(200).json({response: 'Cliente atualizado com sucesso!'})
        } catch(error) {
            res.status(500).json({error: error.message})
        }
    }

    static async delete(req, res) {
        try {
            const cliente = await Cliente.findByPk(req.params.id);
            cliente.destroy();
            res.status(200).json({response: 'Cliente apagado com sucesso!'})
        } catch(error) {
            res.status(500).json({error: error.message})
        }
    }
}