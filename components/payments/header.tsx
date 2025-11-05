"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, Wallet, LogOut } from "lucide-react"
import { WithdrawModal } from "./withdraw-modal"
import { supabase } from "@/lib/supabase"

export function PaymentsHeader() {
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false)
  const [connectedWallet, setConnectedWallet] = useState<string | null>(null)
  const [userBalance, setUserBalance] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadUserData()
  }, [])

  const loadUserData = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) return

      const { data: profile } = await supabase
        .from("profiles")
        .select("wallet_address, wallet_balance")
        .eq("id", user.id)
        .single()

      if (profile) {
        setConnectedWallet(profile.wallet_address)
        setUserBalance(profile.wallet_balance || 0)
      }
    } catch (error) {
      console.error("[v0] Error loading user data:", error)
    }
  }

  const handleConnectWallet = async () => {
    setLoading(true)
    try {
      const mockWallet = `${Math.random().toString(36).substring(7)}`

      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) throw new Error("Not authenticated")

      const { error } = await supabase.from("profiles").update({ wallet_address: mockWallet }).eq("id", user.id)

      if (error) throw error

      setConnectedWallet(mockWallet)
      alert(`Wallet connected: ${mockWallet.slice(0, 8)}...`)
    } catch (error: any) {
      console.error("[v0] Wallet connection error:", error)
      alert("Failed to connect wallet")
    } finally {
      setLoading(false)
    }
  }

  const handleDisconnectWallet = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) return

      const { error } = await supabase.from("profiles").update({ wallet_address: null }).eq("id", user.id)

      if (error) throw error

      setConnectedWallet(null)
      alert("Wallet disconnected")
    } catch (error) {
      console.error("[v0] Error disconnecting wallet:", error)
    }
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Payments & Escrow</h1>
          <p className="text-muted-foreground mt-1">Track all transactions and escrow accounts</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-full gap-2 bg-transparent">
            <Download className="w-4 h-4" />
            Export
          </Button>

          {connectedWallet ? (
            <Button variant="outline" className="rounded-full gap-2 bg-transparent" onClick={handleDisconnectWallet}>
              <LogOut className="w-4 h-4" />
              {connectedWallet.slice(0, 8)}...
            </Button>
          ) : (
            <Button onClick={handleConnectWallet} disabled={loading} className="rounded-full gap-2">
              <Wallet className="w-4 h-4" />
              {loading ? "Connecting..." : "Connect Wallet"}
            </Button>
          )}

          <Button onClick={() => setIsWithdrawOpen(true)} className="rounded-full gap-2 bg-accent hover:bg-accent/90">
            Withdraw
          </Button>
        </div>
      </div>

      <WithdrawModal isOpen={isWithdrawOpen} onClose={() => setIsWithdrawOpen(false)} userBalance={userBalance} />
    </>
  )
}
