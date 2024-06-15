const { Veiculo } = require('../models');

module.exports = class VeiculoController {

    static async showAll(req, res) {
        try {
            const veiculos = await Veiculo.findAll();
            res.status(200).json({veiculos});
        } catch(error) {
            res.status(500).json({error: error.message})
        }
    }

    static async show(req, res) {
        try {
            const veiculo = await Veiculo.findByPk(req.params.id);
            res.status(200).json({veiculo});
        } catch(error) {
            res.status(500).json({error: error.message})
        }
    }

    static async create(req, res) {
        try {
            const { marca, modelo, ano, placa } = req.body;
            await Veiculo.create({
                marca: marca,
                modelo: modelo,
                ano: ano,
                placa: placa
            })
            res.status(201).json({response: 'Veiculo adicionado com sucesso!'})
        } catch(error) {
            res.status(500).json({error: error.message})
        }
    }

    static async update(req, res) {
        try {
            const veiculo = await Veiculo.findByPk(req.params.id);
            const { nome, telefone, cpf, } = req.body;
            await veiculo.update({
                marca: marca,
                modelo: modelo,
                ano: ano,
                placa: placa
            })
            res.status(200).json({response: 'Veiculo atualizado com sucesso!'})
        } catch(error) {
            res.status(500).json({error: error.message})
        }
    }

    static async delete(req, res) {
        try {
            const veiculo = await Veiculo.findByPk(req.params.id);
            veiculo.destroy();
            res.status(200).json({response: 'Veiculo apagado com sucesso!'})
        } catch(error) {
            res.status(500).json({error: error.message})
        }
    }
}