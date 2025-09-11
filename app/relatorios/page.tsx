import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, Users, Calendar, Download, Filter } from "lucide-react"

const relatorios = [
  {
    id: 1,
    titulo: "Relatório Mensal de Consultas",
    descricao: "Análise das consultas realizadas no mês atual",
    tipo: "Consultas",
    periodo: "Janeiro 2024",
    status: "Disponível",
  },
  {
    id: 2,
    titulo: "Relatório de Pacientes Ativos",
    descricao: "Lista de pacientes com consultas nos últimos 6 meses",
    tipo: "Pacientes",
    periodo: "Últimos 6 meses",
    status: "Disponível",
  },
  {
    id: 3,
    titulo: "Análise Financeira",
    descricao: "Receitas e despesas do consultório",
    tipo: "Financeiro",
    periodo: "2023",
    status: "Processando",
  },
]

const estatisticas = [
  {
    titulo: "Total de Consultas",
    valor: "1,234",
    variacao: "+12%",
    icon: Calendar,
    cor: "text-blue-600",
  },
  {
    titulo: "Pacientes Ativos",
    valor: "856",
    variacao: "+8%",
    icon: Users,
    cor: "text-green-600",
  },
  {
    titulo: "Taxa de Ocupação",
    valor: "87%",
    variacao: "+5%",
    icon: TrendingUp,
    cor: "text-purple-600",
  },
  {
    titulo: "Receita Mensal",
    valor: "R$ 45.230",
    variacao: "+15%",
    icon: BarChart3,
    cor: "text-orange-600",
  },
]

export default function RelatoriosPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Relatórios</h1>
          <p className="text-slate-600">Análises e estatísticas do consultório</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {estatisticas.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">{stat.titulo}</p>
                  <p className="text-2xl font-bold text-slate-900">{stat.valor}</p>
                  <p className="text-sm text-green-600">{stat.variacao} vs mês anterior</p>
                </div>
                <div className={`w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center ${stat.cor}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Relatórios Disponíveis */}
      <Card>
        <CardHeader>
          <CardTitle>Relatórios Disponíveis</CardTitle>
          <CardDescription>Acesse e baixe os relatórios gerados pelo sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {relatorios.map((relatorio) => (
              <div
                key={relatorio.id}
                className="flex items-center justify-between p-4 border border-slate-200 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{relatorio.titulo}</h3>
                    <p className="text-sm text-slate-600">{relatorio.descricao}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="outline">{relatorio.tipo}</Badge>
                      <span className="text-xs text-slate-500">{relatorio.periodo}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Badge variant={relatorio.status === "Disponível" ? "default" : "secondary"}>
                    {relatorio.status}
                  </Badge>
                  {relatorio.status === "Disponível" && (
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Baixar
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
