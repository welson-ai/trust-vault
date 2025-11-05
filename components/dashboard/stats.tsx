"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { ArrowUp, DollarSign, TrendingUp, CheckCircle2 } from "lucide-react"
import { getContracts } from "@/lib/supabase"
import type { Contract } from "@/lib/supabase"

export function DashboardStats() {
  const [contracts, setContracts] = useState<Contract[]>([])

  useEffect(() => {
    const loadContracts = async () => {
      const data = await getContracts()
      setContracts(data)
    }
    loadContracts()
  }, [])

  const totalAmount = contracts.reduce((sum, contract) => sum + (Number.parseFloat(contract.amount) || 0), 0)
  const activeContracts = contracts.filter((c) => c.status === "active").length
  const completedContracts = contracts.filter((c) => c.status === "completed").length
  const pendingPayouts = contracts
    .filter((c) => c.status === "active")
    .reduce((sum, contract) => sum + (Number.parseFloat(contract.amount) || 0), 0)

  const stats = [
    {
      label: "Total Transacted",
      value: `$${totalAmount.toLocaleString("en-US", { maximumFractionDigits: 2 })}`,
      change: `${contracts.length} total contracts`,
      icon: DollarSign,
      gradient: "from-primary to-secondary",
    },
    {
      label: "Active Contracts",
      value: activeContracts.toString(),
      change: "In progress",
      icon: TrendingUp,
      gradient: "from-secondary to-accent",
    },
    {
      label: "Pending Payouts",
      value: `$${pendingPayouts.toLocaleString("en-US", { maximumFractionDigits: 2 })}`,
      change: "In escrow",
      icon: ArrowUp,
      gradient: "from-accent to-primary",
    },
    {
      label: "Completed Tasks",
      value: completedContracts.toString(),
      change: "Successfully finished",
      icon: CheckCircle2,
      gradient: "from-primary/50 to-secondary/50",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, idx) => {
        const Icon = stat.icon
        return (
          <Card key={idx} className="p-6 hover:border-secondary/50 transition-all">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <p className="text-xs text-secondary mt-2">{stat.change}</p>
              </div>
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.gradient} p-2.5 flex-shrink-0`}>
                <Icon className="w-full h-full text-white" />
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
