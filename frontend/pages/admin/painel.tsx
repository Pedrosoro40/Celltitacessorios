export default function PainelAdmin() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Painel do Administrador</h2>
      <ul className="space-y-2">
        <li><a href="/admin/produtos" className="text-blue-600 underline">Gerenciar Produtos</a></li>
        <li><a href="/admin/pedidos" className="text-blue-600 underline">Ver Pedidos</a></li>
      </ul>
    </div>
  );
}