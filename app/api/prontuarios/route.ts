import { NextResponse } from "next/server"

const prontuarios = [
  {
    id: 1,
    pacienteId: 1,
    pacienteNome: "João Silva",
    data: "2024-01-10",
    diagnostico: "Hipertensão arterial",
    prescricao: "Losartana 50mg - 1x ao dia",
    observacoes: "Paciente apresenta pressão controlada",
  },
  {
    id: 2,
    pacienteId: 2,
    pacienteNome: "Maria Santos",
    data: "2024-01-12",
    diagnostico: "Diabetes tipo 2",
    prescricao: "Metformina 850mg - 2x ao dia",
    observacoes: "Glicemia em controle",
  },
]

export async function GET() {
  return NextResponse.json(prontuarios)
}

export async function POST(request: Request) {
  const body = await request.json()
  const novoProntuario = {
    id: prontuarios.length + 1,
    ...body,
  }
  prontuarios.push(novoProntuario)
  return NextResponse.json(novoProntuario, { status: 201 })
}
