"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Plus, User, ChevronLeft, ChevronRight } from "lucide-react"

const appointments = [
  {
    id: 1,
    patient: "Maria Silva",
    date: "2024-01-15",
    time: "09:00",
    type: "Consulta",
    status: "confirmado",
    doctor: "Dr. Roberto Silva",
  },
  {
    id: 2,
    patient: "João Santos",
    date: "2024-01-15",
    time: "10:30",
    type: "Retorno",
    status: "aguardando",
    doctor: "Dr. Roberto Silva",
  },
  {
    id: 3,
    patient: "Ana Costa",
    date: "2024-01-15",
    time: "14:00",
    type: "Exame",
    status: "confirmado",
    doctor: "Dra. Ana Oliveira",
  },
  {
    id: 4,
    patient: "Pedro Lima",
    date: "2024-01-16",
    time: "09:30",
    type: "Consulta",
    status: "pendente",
    doctor: "Dr. Roberto Silva",
  },
]

const timeSlots = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
]

export default function AgendamentosPage() {
  const [selectedDate, setSelectedDate] = useState("2024-01-15")

  const todayAppointments = appointments.filter((apt) => apt.date === selectedDate)

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-hidden">
        <div className="flex-1 space-y-6 p-6 overflow-auto">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Agendamentos</h1>
              <p className="text-muted-foreground">Gerencie consultas e horários</p>
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Novo Agendamento
            </Button>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Calendar View */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-primary" />
                    Agenda do Dia
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <span className="text-sm font-medium">15 Jan 2024</span>
                    <Button variant="outline" size="sm">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription>{todayAppointments.length} consultas agendadas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {timeSlots.map((time) => {
                    const appointment = todayAppointments.find((apt) => apt.time === time)

                    return (
                      <div key={time} className="flex items-center p-3 rounded-lg border">
                        <div className="w-16 text-sm font-medium text-muted-foreground">{time}</div>
                        {appointment ? (
                          <div className="flex-1 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                              <div>
                                <p className="font-medium text-foreground">{appointment.patient}</p>
                                <p className="text-sm text-muted-foreground">{appointment.type}</p>
                              </div>
                            </div>
                            <Badge
                              variant={
                                appointment.status === "confirmado"
                                  ? "default"
                                  : appointment.status === "aguardando"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {appointment.status}
                            </Badge>
                          </div>
                        ) : (
                          <div className="flex-1 text-sm text-muted-foreground">Horário disponível</div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Appointments Summary */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Resumo do Dia</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Total de consultas</span>
                    <span className="font-medium">{todayAppointments.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Confirmadas</span>
                    <span className="font-medium text-chart-3">
                      {todayAppointments.filter((apt) => apt.status === "confirmado").length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Aguardando</span>
                    <span className="font-medium text-chart-1">
                      {todayAppointments.filter((apt) => apt.status === "aguardando").length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Pendentes</span>
                    <span className="font-medium text-chart-4">
                      {todayAppointments.filter((apt) => apt.status === "pendente").length}
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Próximas Consultas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {appointments.slice(0, 3).map((appointment) => (
                      <div key={appointment.id} className="flex items-center space-x-3 p-2 rounded-lg bg-muted/50">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                          <User className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">{appointment.patient}</p>
                          <p className="text-xs text-muted-foreground">
                            {appointment.time} - {appointment.type}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
