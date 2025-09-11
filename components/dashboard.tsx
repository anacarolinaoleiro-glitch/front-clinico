"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, FileText, TrendingUp, Clock, AlertCircle, Plus } from "lucide-react"

const stats = [
  {
    title: "Total de Pacientes",
    value: "1,247",
    change: "+12%",
    icon: Users,
    color: "text-blue-600",
  },
  {
    title: "Consultas Hoje",
    value: "23",
    change: "+5%",
    icon: Calendar,
    color: "text-green-600",
  },
  {
    title: "Prontuários Atualizados",
    value: "89",
    change: "+18%",
    icon: FileText,
    color: "text-purple-600",
  },
  {
    title: "Taxa de Ocupação",
    value: "87%",
    change: "+3%",
    icon: TrendingUp,
    color: "text-orange-600",
  },
]

const recentAppointments = [
  {
    id: 1,
    patient: "Maria Silva",
    time: "09:00",
    type: "Consulta",
    status: "confirmado",
  },
  {
    id: 2,
    patient: "João Santos",
    time: "10:30",
    type: "Retorno",
    status: "aguardando",
  },
  {
    id: 3,
    patient: "Ana Costa",
    time: "14:00",
    type: "Exame",
    status: "confirmado",
  },
  {
    id: 4,
    patient: "Pedro Lima",
    time: "15:30",
    type: "Consulta",
    status: "pendente",
  },
]

const alerts = [
  {
    id: 1,
    message: "3 pacientes aguardando confirmação de consulta",
    type: "warning",
  },
  {
    id: 2,
    message: "Lembrete: Reunião da equipe às 16h",
    type: "info",
  },
  {
    id: 3,
    message: "Sistema de backup concluído com sucesso",
    type: "success",
  },
]

export function Dashboard() {
  return (
    <div className="flex-1 space-y-6 p-6 overflow-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-600">Bem-vindo de volta, Dr. Roberto Silva</p>
        </div>
        <div className="flex space-x-2">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Nova Consulta
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-white border border-slate-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">{stat.title}</CardTitle>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <p className="text-xs text-slate-600">
                <span className="text-green-600">{stat.change}</span> em relação ao mês anterior
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Recent Appointments */}
        <Card className="lg:col-span-2 bg-white border border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center text-slate-900">
              <Calendar className="w-5 h-5 mr-2 text-blue-600" />
              Próximas Consultas
            </CardTitle>
            <CardDescription className="text-slate-600">Agendamentos para hoje</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{appointment.patient}</p>
                      <p className="text-sm text-slate-600">{appointment.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-slate-900">{appointment.time}</p>
                    <Badge
                      variant={
                        appointment.status === "confirmado"
                          ? "default"
                          : appointment.status === "aguardando"
                            ? "secondary"
                            : "outline"
                      }
                      className="text-xs"
                    >
                      {appointment.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Alerts */}
        <Card className="bg-white border border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center text-slate-900">
              <AlertCircle className="w-5 h-5 mr-2 text-amber-600" />
              Alertas
            </CardTitle>
            <CardDescription className="text-slate-600">Notificações importantes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div key={alert.id} className="p-3 rounded-lg bg-slate-50 border-l-4 border-l-amber-500">
                  <p className="text-sm text-slate-900">{alert.message}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
