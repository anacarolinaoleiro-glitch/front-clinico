"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Filter, MoreHorizontal, Phone, Mail, Calendar } from "lucide-react"

const patients = [
  {
    id: 1,
    name: "Maria Silva",
    age: 45,
    phone: "(11) 99999-9999",
    email: "maria@email.com",
    lastVisit: "2024-01-15",
    condition: "Hipertensão",
    status: "ativo",
  },
  {
    id: 2,
    name: "João Santos",
    age: 32,
    phone: "(11) 88888-8888",
    email: "joao@email.com",
    lastVisit: "2024-01-10",
    condition: "Diabetes",
    status: "ativo",
  },
  {
    id: 3,
    name: "Ana Costa",
    age: 28,
    phone: "(11) 77777-7777",
    email: "ana@email.com",
    lastVisit: "2024-01-08",
    condition: "Asma",
    status: "inativo",
  },
]

export default function PacientesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.condition.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-hidden">
        <div className="flex-1 space-y-6 p-6 overflow-auto">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Pacientes</h1>
              <p className="text-muted-foreground">Gerencie informações dos pacientes</p>
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Novo Paciente
            </Button>
          </div>

          {/* Search and Filters */}
          <div className="flex items-center space-x-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar pacientes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          </div>

          {/* Patients Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPatients.map((patient) => (
              <Card key={patient.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{patient.name}</CardTitle>
                      <CardDescription>{patient.age} anos</CardDescription>
                    </div>
                    <Badge variant={patient.status === "ativo" ? "default" : "secondary"}>{patient.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Phone className="w-4 h-4 mr-2" />
                      {patient.phone}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Mail className="w-4 h-4 mr-2" />
                      {patient.email}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      Última consulta: {patient.lastVisit}
                    </div>
                  </div>

                  <div className="pt-2 border-t">
                    <p className="text-sm font-medium text-foreground">Condição:</p>
                    <p className="text-sm text-muted-foreground">{patient.condition}</p>
                  </div>

                  <div className="flex justify-between pt-2">
                    <Button variant="outline" size="sm">
                      Ver Prontuário
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
