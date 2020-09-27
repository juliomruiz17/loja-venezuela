const express = require('express');
const app = express();
const db = require('./models/index')
const morgan = require('morgan');
const bodyParser = require('body-parser');



const rotaLojas = require('./routes/lojas');
const rotaProducts = require('./routes/products');
const rotaOrders = require('./routes/orders');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));  // dados simples
app.use(bodyParser.json());  // json de entrada no body

app.use('/lojas', rotaLojas);
app.use('/products', rotaProducts);
app.use('/orders', rotaOrders);

// quando não se encontra rotas
app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
   res.status(error.status || 500);
   return res.send({
       erro: {
           mensagem: error.mensagem
       }

   });
});


db.sequelize.sync({ force: true}).then(() =>{
    console.log('Nos hemos conectado a la base de datos');
}).catch(error => {
    console.log('Se ha producido un error', error);
})

module.exports = app;