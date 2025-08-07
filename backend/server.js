const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const mercadopago = require('mercadopago');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const Produto = require('./models/Produto');
const Pedido = require('./models/Pedido');

mercadopago.configure({
  access_token: process.env.MERCADO_PAGO_TOKEN
});

app.get('/', (req, res) => {
  res.send('API Cell Fit Acessórios funcionando.');
});

app.get('/produtos', async (req, res) => {
  const produtos = await Produto.find();
  res.json(produtos);
});

app.post('/produtos', async (req, res) => {
  const novo = new Produto(req.body);
  await novo.save();
  res.json(novo);
});

app.post('/pedidos', async (req, res) => {
  const novoPedido = new Pedido(req.body);
  await novoPedido.save();
  res.json(novoPedido);
});

app.post('/mercado-pago', async (req, res) => {
  const { produtos, total } = req.body;

  const preference = {
    items: produtos.map(p => ({
      title: p.nome,
      unit_price: p.preco,
      quantity: 1
    })),
    back_urls: {
      success: "http://localhost:3000/sucesso",
      failure: "http://localhost:3000/erro"
    },
    auto_return: "approved"
  };

  try {
    const result = await mercadopago.preferences.create(preference);
    res.json({ init_point: result.body.init_point });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao criar preferência do Mercado Pago' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));