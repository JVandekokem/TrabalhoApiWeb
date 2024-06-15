const express = require('express');
const router = express.Router();
const VeiculoController = require('../controllers/VeiculoController');
const ClienteController = require('../controllers/ClienteController');
const AluguelController = require('../controllers/AluguelController');

router.get('/', (req, res) => {
    res.status(200).json({response: "Bem vindo a api!"});
})

router.get('/cliente', ClienteController.showAll);
router.get('/cliente/:id', ClienteController.show);
router.post('/cliente', ClienteController.create);
router.put('/cliente/:id/update', ClienteController.update);
router.delete('/cliente/:id/delete', ClienteController.delete);

router.get('/veiculo', VeiculoController.showAll);
router.get('/veiculo/:id', VeiculoController.show);
router.post('/veiculo', VeiculoController.create);
router.put('/veiculo/:id/update', VeiculoController.update);
router.delete('/veiculo/:id/delete', VeiculoController.delete);

router.get('/aluguel', AluguelController.showAll);
router.get('/aluguel/:id', AluguelController.show);
router.post('/aluguel', AluguelController.create);
router.put('/aluguel/:id/update', AluguelController.update);
router.delete('/aluguel/:id/delete', AluguelController.delete);







module.exports = router