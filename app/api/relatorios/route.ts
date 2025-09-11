import { NextResponse } from "next/server"

export async function GET() {
  const relatorios = {
    totalPacientes: 150,
    agendamentosHoje: 8,
    consultasRealizadas: 45,
    faturamentoMes: 15000,
  }

  return NextResponse.json(relatorios)
}
