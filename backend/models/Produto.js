const mongoose = require('mongoose');
const ProdutoSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  preco: Number,
  imagem: String,
  tipoEnvio: String,
  estoque: Number,
});
module.exports = mongoose.model('Produto', ProdutoSchema);