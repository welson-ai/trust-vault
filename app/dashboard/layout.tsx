"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Sidebar } from "@/components/navigation/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="sticky top-0 bg-background border-b border-border px-8 py-4 flex items-center gap-3 z-10">
          <Button variant="ghost" size="sm" onClick={() => router.back()} className="rounded-full">
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <span className="text-sm text-muted-foreground">Back</span>
        </div>
        <div className="p-8">{children}</div>
      </main>
    </div>
  )
}
