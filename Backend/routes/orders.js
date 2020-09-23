const express = require('express');
const router = express.Router();

// retorna todas os orders
router.get('/', (req, res, next) => {
    res.status(200).send ({
        mensagem: 'Retorna todos Orders'
    });
});

//insere uma orders
router.post('/', (req, res, next) => {
    const orders = {
        id_loja: req.body.id_loja,
        id_product: req.body.id_product,
        name: req.body.name,
        email: req.body.email,
        paymentOption: req.body.paymentOption
    }
    res.status(200).send ({
        mensagem: 'Insere uma orders',
        ordersCriada: orders

    });
});

// retorna los dados de uma orders
router.get('/:id_orders', (req, res, next) => {
    const id = req.params.id_orders
    res.status(201).send ({
            mensagem: 'Detalhes uma orders',
            id_orders: id
    });
});


// exclui alguma coisas
router.delete('/', (req, res, next) => {
    res.status(201).send ({
        mensagem: ' orders excluida'
    });
});

module.exports = router;