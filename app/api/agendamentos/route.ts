import { NextResponse } from "next/server"

const agendamentos = [
  {
    id: 1,
    pacienteId: 1,
    pacienteNome: "João Silva",
    data: "2024-01-15",
    hora: "09:00",
    tipo: "Consulta",
    status: "Agendado",
  },
  {
    id: 2,
    pacienteId: 2,
    pacienteNome: "Maria Santos",
    data: "2024-01-16",
    hora: "14:30",
    tipo: "Retorno",
    status: "Confirmado",
  },
]

export async function GET() {
  return NextResponse.json(agendamentos)
}

export async function POST(request: Request) {
  const body = await request.json()
  const novoAgendamento = {
    id: agendamentos.length + 1,
    ...body,
  }
  agendamentos.push(novoAgendamento)
  return NextResponse.json(novoAgendamento, { status: 201 })
}
