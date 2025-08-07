export default function Checkout() {
  const handlePagamento = async () => {
    const response = await fetch("http://localhost:5000/mercado-pago", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome: "Cliente Teste",
        email: "cliente@email.com",
        endereco: "Rua Exemplo, 123",
        produtos: [{ nome: "Produto 1", preco: 100 }],
        total: 100
      })
    });
    const data = await response.json();
    if (data.init_point) window.location.href = data.init_point;
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Finalizar Compra</h2>
      <form className="bg-white p-4 rounded shadow max-w-md mx-auto" onSubmit={e => { e.preventDefault(); handlePagamento(); }}>
        <input type="text" placeholder="Nome completo" className="w-full mb-3 p-2 border" required />
        <input type="email" placeholder="E-mail" className="w-full mb-3 p-2 border" required />
        <input type="text" placeholder="Endereço de entrega" className="w-full mb-3 p-2 border" required />
        <button className="bg-purple-700 text-white w-full py-2 rounded">Pagar com Mercado Pago</button>
      </form>
    </div>
  );
}