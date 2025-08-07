export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-800 to-blue-500 text-white p-4">
      <h1 className="text-4xl font-bold">Cell Fit Acessórios</h1>
      <p className="mt-2">Eletrônicos no geral — Produtos nacionais e internacionais</p>
      <div className="mt-6">
        <a href="/produtos" className="bg-white text-purple-800 px-4 py-2 rounded shadow">
          Ver Produtos
        </a>
      </div>
    </main>
  );
}