"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export function TasksHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">Contracts & Tasks</h1>
        <p className="text-muted-foreground mt-1">Manage your active and completed contracts</p>
      </div>
      <Link href="/contracts/create">
        <Button size="lg" className="rounded-full gap-2">
          <Plus className="w-4 h-4" />
          New Contract
        </Button>
      </Link>
    </div>
  )
}
