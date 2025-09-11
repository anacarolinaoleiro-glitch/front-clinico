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
    color: "text-primary",
  },
  {
    title: "Consultas Hoje",
    value: "23",
    change: "+5%",
    icon: Calendar,
    color: "text-secondary",
  },
  {
    title: "Prontuários Atualizados",
    value: "89",
    change: "+18%",
    icon: FileText,
    color: "text-chart-1",
  },
  {
    title: "Taxa de Ocupação",
    value: "87%",
    change: "+3%",
    icon: TrendingUp,
    color: "text-chart-3",
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
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Bem-vindo de volta, Dr. Roberto Silva</p>
        </div>
        <div className="flex space-x-2">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Nova Consulta
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-chart-3">{stat.change}</span> em relação ao mês anterior
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Recent Appointments */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-primary" />
              Próximas Consultas
            </CardTitle>
            <CardDescription>Agendamentos para hoje</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{appointment.patient}</p>
                      <p className="text-sm text-muted-foreground">{appointment.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground">{appointment.time}</p>
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
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertCircle className="w-5 h-5 mr-2 text-secondary" />
              Alertas
            </CardTitle>
            <CardDescription>Notificações importantes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div key={alert.id} className="p-3 rounded-lg bg-muted/50 border-l-4 border-l-secondary">
                  <p className="text-sm text-foreground">{alert.message}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
