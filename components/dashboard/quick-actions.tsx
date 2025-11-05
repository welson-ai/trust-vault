import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Send, Download } from "lucide-react"

export function DashboardQuickActions() {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
      <div className="space-y-3">
        <Button className="w-full justify-start gap-2 bg-transparent" size="lg" variant="outline">
          <Plus className="w-4 h-4" />
          New Contract
        </Button>
        <Button className="w-full justify-start gap-2 bg-transparent" size="lg" variant="outline">
          <Send className="w-4 h-4" />
          Send Payment
        </Button>
        <Button className="w-full justify-start gap-2 bg-transparent" size="lg" variant="outline">
          <Download className="w-4 h-4" />
          Export Report
        </Button>
      </div>
    </Card>
  )
}
