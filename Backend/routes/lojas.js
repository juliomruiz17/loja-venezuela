const express = require('express');
const router = express.Router();

// retorna todas as lojas
router.get('/', (req, res, next) => {
    res.status(200).send ({
        mensagem: 'Usando o Get dentro da rota de lojas'
    });
});

//insere uma loja
router.post('/', (req, res, next) => {
    res.status(200).send ({
        mensagem: 'Usando o POST dentro da rota de lojas'
    });
});

// retorna los dados de una loja
router.get('/:id_loja', (req, res, next) => {
    const id = req.params.id_loja

    if (id ==='mirandina') {
        res.status(200).send ({
            mensagem: 'Voce descobriou o id la loja Mirandina ',
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
        mensagem: 'Usando o PATCH dentro da rota de lojas'
    });
});

router.delete('/', (req, res, next) => {
    res.status(201).send ({
        mensagem: 'Usando o DELETE dentro da rota de lojas'
    });
});

module.exports = router;