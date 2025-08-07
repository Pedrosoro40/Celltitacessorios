const mongoose = require('mongoose');
const PedidoSchema = new mongoose.Schema({
  cliente: String,
  email: String,
  endereco: String,
  produtos: Array,
  total: Number,
  status: { type: String, default: 'Pendente' },
  data: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Pedido', PedidoSchema);