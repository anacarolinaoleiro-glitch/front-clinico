export default function HomePage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Sistema Clínico</h1>
        <p className="text-xl text-gray-600 mb-8">Gestão médica simplificada</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-2">Pacientes</h2>
            <p className="text-blue-700">Gerencie informações dos pacientes</p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-900 mb-2">Agendamentos</h2>
            <p className="text-green-700">Controle de consultas e horários</p>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-purple-900 mb-2">Relatórios</h2>
            <p className="text-purple-700">Análises e estatísticas</p>
          </div>
        </div>
      </div>
    </div>
  )
}
