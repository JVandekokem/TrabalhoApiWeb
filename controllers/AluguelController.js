const { Aluguel } = require('../models');

module.exports = class AluguelController {
    static async showAll(req, res) {
        try {
            const alugueis = await Aluguel.findAll(
                {
                    include: 'veiculo',
                }
            );
            res.status(200).json({alugueis})
        } catch(error) {
            res.status(500).json({error: error.message})
        }
    }

    static async show(req, res) {
        try {
            const aluguel = await Aluguel.findByPk(req.params.id, {
                include: ['cliente', 'veiculo']
            });
            res.status(200).json({aluguel});
        } catch(error) {
            res.status(500).json({error: error.message})
        }
    }

    static async create(req, res) {
        try {
            const { clienteId, veiculoId, data_inicio, data_fim } = req.body;
            await Aluguel.create({
                clienteId:clienteId,
                veiculoId:veiculoId,
                data_inicio:new Date(data_inicio),
                data_fim:new Date(data_fim)
            })
            res.status(200).json({response: 'Aluguel criado com sucesso!'})
        } catch(error) {
            res.status(500).json({error: error.message})
        }
    }

    static async update(req, res) {
        try {
            const aluguel = await Aluguel.findByPk(req.params.id);
            const { clienteId, veiculoId, data_inicio, data_fim } = req.body;
            await aluguel.create({
                clienteId:clienteId,
                veiculoId:veiculoId,
                data_inicio:new Date(data_inicio),
                data_fim:new Date(data_fim)
            })
            res.status(200).json({response: 'Aluguel atualizado com sucesso!'})
        } catch(error) {
            res.status(500).json({error: error.message})
        }
    }

    static async delete(req, res) {
        try {
            const aluguel = await Aluguel.findByPk(req.params.id);
            await aluguel.destroy();
            res.status(200).json({response: 'Aluguel deletado com sucesso!'});
        } catch(error) {
            res.status(500).json({error: error.message})
        }
    }
}

try {

} catch(error) {
    res.status(500).json({error: error.message})
}