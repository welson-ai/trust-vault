import { Button } from "@/components/ui/button"
import { Bell, Settings } from "lucide-react"

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold">Welcome back!</h1>
        <p className="text-muted-foreground mt-1">Here's your financial overview</p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-lg">
          <Bell className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-lg">
          <Settings className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}
