import { Sidebar } from "@/components/sidebar"
import { Dashboard } from "@/components/dashboard"

export default function HomePage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-hidden">
        <Dashboard />
      </main>
    </div>
  )
}
