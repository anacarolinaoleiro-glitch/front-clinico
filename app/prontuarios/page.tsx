import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, FileText } from "lucide-react"

const prontuarios = [
  {
    id: 1,
    paciente: "Maria Silva",
    cpf: "123.456.789-00",
    ultimaConsulta: "2024-01-15",
    diagnostico: "Hipertensão",
    status: "Ativo",
  },
  {
    id: 2,
    paciente: "João Santos",
    cpf: "987.654.321-00",
    ultimaConsulta: "2024-01-10",
    diagnostico: "Diabetes Tipo 2",
    status: "Ativo",
  },
  {
    id: 3,
    paciente: "Ana Costa",
    cpf: "456.789.123-00",
    ultimaConsulta: "2023-12-20",
    diagnostico: "Asma",
    status: "Inativo",
  },
]

export default function ProntuariosPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Prontuários</h1>
          <p className="text-slate-600">Gerencie os prontuários médicos dos pacientes</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Novo Prontuário
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input placeholder="Buscar por nome do paciente ou CPF..." className="pl-10" />
            </div>
            <Button variant="outline">Buscar</Button>
          </div>
        </CardContent>
      </Card>

      {/* Prontuários List */}
      <div className="grid gap-4">
        {prontuarios.map((prontuario) => (
          <Card key={prontuario.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{prontuario.paciente}</h3>
                    <p className="text-sm text-slate-600">CPF: {prontuario.cpf}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <p className="text-sm text-slate-500">Última Consulta</p>
                    <p className="font-medium text-slate-900">{prontuario.ultimaConsulta}</p>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-slate-500">Diagnóstico</p>
                    <p className="font-medium text-slate-900">{prontuario.diagnostico}</p>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-slate-500">Status</p>
                    <Badge variant={prontuario.status === "Ativo" ? "default" : "secondary"}>{prontuario.status}</Badge>
                  </div>

                  <Button variant="outline" size="sm">
                    Ver Prontuário
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
