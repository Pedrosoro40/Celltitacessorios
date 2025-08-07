export default function AdminLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-semibold mb-4 text-center">Login do Admin</h2>
        <input type="email" placeholder="E-mail" className="w-full mb-3 p-2 border" />
        <input type="password" placeholder="Senha" className="w-full mb-3 p-2 border" />
        <button className="bg-purple-700 text-white w-full py-2 rounded">Entrar</button>
      </form>
    </div>
  );
}