"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, CheckSquare, Wallet, TrendingUp, LogOut, User } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { useState, useEffect } from "react"

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/tasks", icon: CheckSquare, label: "Tasks" },
  { href: "/payments", icon: Wallet, label: "Payments" },
  { href: "/trust", icon: TrendingUp, label: "Trust Score" },
]

export function Sidebar() {
  const pathname = usePathname()
  const [user, setUser] = useState<any>(null)
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)
    }

    getUser()
  }, [supabase])

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border h-screen flex flex-col fixed left-0 top-0 pt-20">
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          return (
            <Link key={item.href} href={item.href}>
              <Button variant={isActive ? "default" : "ghost"} className="w-full justify-start gap-3">
                <Icon className="w-4 h-4" />
                {item.label}
              </Button>
            </Link>
          )
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 space-y-2 border-t border-sidebar-border">
        <Link href="/profile">
          <Button variant="ghost" className="w-full justify-start gap-3">
            <User className="w-4 h-4" />
            Profile
          </Button>
        </Link>
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-destructive"
          onClick={async () => {
            await supabase.auth.signOut()
            window.location.href = "/login"
          }}
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </Button>
      </div>
    </aside>
  )
}
