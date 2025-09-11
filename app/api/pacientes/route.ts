import { NextResponse } from "next/server"

// Dados mock para demonstração
const pacientes = [
  {
    id: 1,
    nome: "João Silva",
    cpf: "123.456.789-00",
    telefone: "(11) 99999-9999",
    email: "joao@email.com",
    dataNascimento: "1985-05-15",
    endereco: "Rua das Flores, 123",
  },
  {
    id: 2,
    nome: "Maria Santos",
    cpf: "987.654.321-00",
    telefone: "(11) 88888-8888",
    email: "maria@email.com",
    dataNascimento: "1990-08-22",
    endereco: "Av. Principal, 456",
  },
]

export async function GET() {
  return NextResponse.json(pacientes)
}

export async function POST(request: Request) {
  const body = await request.json()
  const novoPaciente = {
    id: pacientes.length + 1,
    ...body,
  }
  pacientes.push(novoPaciente)
  return NextResponse.json(novoPaciente, { status: 201 })
}
