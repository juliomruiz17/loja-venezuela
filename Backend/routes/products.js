const express = require('express');
const router = express.Router();

// retorna todas os productos
router.get('/', (req, res, next) => {
    res.status(200).send ({
        mensagem: 'Retorna todos Products'
    });
});

//insere uma products
router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
    };
    res.status(201).send ({
        mensagem: 'Insere um Products',
        productCriado: product
    });
});

// retorna los dados de um products
router.get('/:id_product', (req, res, next) => {
    const id = req.params.id_product

    if (id ==='vestidos') {
        res.status(200).send ({
            mensagem: 'Voce descobriou o id do product vestidos ',
            id: id
    });
} else {
    res.status(200).send ({
        mensagem: 'Voce passou um ID',
    });
}
})

router.patch('/', (req, res, next) => {
    res.status(201).send ({
        mensagem: 'Alteracao do  de products'
    });
});

router.delete('/', (req, res, next) => {
    res.status(201).send ({
        mensagem: ' products excluido'
    });
});

module.exports = router;