"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, AlertCircle } from "lucide-react"
import { getContracts } from "@/lib/supabase"
import type { Contract } from "@/lib/supabase"

const statusConfig = {
  completed: { icon: CheckCircle2, badge: "bg-accent/20 text-accent", text: "Completed" },
  active: { icon: Clock, badge: "bg-secondary/20 text-secondary", text: "Active" },
  pending: { icon: AlertCircle, badge: "bg-primary/20 text-primary", text: "Pending" },
}

export function DashboardRecentActivity() {
  const [contracts, setContracts] = useState<Contract[]>([])

  useEffect(() => {
    const loadContracts = async () => {
      const data = await getContracts()
      setContracts(data)
    }
    loadContracts()
  }, [])

  if (contracts.length === 0) {
    return (
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-6">Recent Activity</h2>
        <div className="text-center py-8">
          <p className="text-muted-foreground">No contracts yet. Create one to get started!</p>
        </div>
      </Card>
    )
  }

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-6">Recent Activity</h2>
      <div className="space-y-4">
        {contracts
          .slice()
          .reverse()
          .map((contract) => {
            const config = statusConfig[contract.status as keyof typeof statusConfig] || statusConfig.pending
            const Icon = config.icon
            const createdDate = new Date(contract.created_at)
            const timeAgo = Math.floor((Date.now() - createdDate.getTime()) / 1000)
            const formattedTime =
              timeAgo < 60
                ? "just now"
                : timeAgo < 3600
                  ? `${Math.floor(timeAgo / 60)}m ago`
                  : `${Math.floor(timeAgo / 3600)}h ago`

            return (
              <div
                key={contract.id}
                className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${config.badge}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium truncate">{contract.title}</h3>
                  <p className="text-sm text-muted-foreground">{contract.type}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="font-semibold">${Number.parseFloat(contract.amount).toLocaleString()}</span>
                  <Badge className={config.badge} variant="outline">
                    {config.text}
                  </Badge>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{formattedTime}</span>
              </div>
            )
          })}
      </div>
    </Card>
  )
}
