import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { User, Bell, Shield, Database, Save } from "lucide-react"

export default function ConfiguracoesPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Configurações</h1>
          <p className="text-slate-600">Gerencie as configurações do sistema</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Save className="w-4 h-4 mr-2" />
          Salvar Alterações
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar de Configurações */}
        <div className="space-y-2">
          <Card>
            <CardContent className="p-4">
              <nav className="space-y-2">
                <Button variant="default" className="w-full justify-start">
                  <User className="w-4 h-4 mr-2" />
                  Perfil
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Bell className="w-4 h-4 mr-2" />
                  Notificações
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Shield className="w-4 h-4 mr-2" />
                  Segurança
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Database className="w-4 h-4 mr-2" />
                  Sistema
                </Button>
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Conteúdo Principal */}
        <div className="lg:col-span-2 space-y-6">
          {/* Informações do Perfil */}
          <Card>
            <CardHeader>
              <CardTitle>Informações do Perfil</CardTitle>
              <CardDescription>Atualize suas informações pessoais e profissionais</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome Completo</Label>
                  <Input id="nome" defaultValue="Dr. Roberto Silva" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="especialidade">Especialidade</Label>
                  <Input id="especialidade" defaultValue="Cardiologista" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="crm">CRM</Label>
                  <Input id="crm" defaultValue="12345-SP" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input id="telefone" defaultValue="(11) 99999-9999" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" defaultValue="dr.roberto@clinica.com" />
              </div>
            </CardContent>
          </Card>

          {/* Configurações de Notificação */}
          <Card>
            <CardHeader>
              <CardTitle>Notificações</CardTitle>
              <CardDescription>Configure como você deseja receber notificações</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-notifications">Notificações por E-mail</Label>
                  <p className="text-sm text-slate-600">Receba notificações importantes por e-mail</p>
                </div>
                <Switch id="email-notifications" defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="appointment-reminders">Lembretes de Consulta</Label>
                  <p className="text-sm text-slate-600">Notificações sobre consultas agendadas</p>
                </div>
                <Switch id="appointment-reminders" defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="system-updates">Atualizações do Sistema</Label>
                  <p className="text-sm text-slate-600">Notificações sobre novas funcionalidades</p>
                </div>
                <Switch id="system-updates" />
              </div>
            </CardContent>
          </Card>

          {/* Configurações do Sistema */}
          <Card>
            <CardHeader>
              <CardTitle>Configurações do Sistema</CardTitle>
              <CardDescription>Configurações gerais da aplicação</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="timezone">Fuso Horário</Label>
                  <Input id="timezone" defaultValue="America/Sao_Paulo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Idioma</Label>
                  <Input id="language" defaultValue="Português (Brasil)" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="dark-mode">Modo Escuro</Label>
                  <p className="text-sm text-slate-600">Ativar tema escuro da interface</p>
                </div>
                <Switch id="dark-mode" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
