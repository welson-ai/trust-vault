"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"
import { getContracts } from "@/lib/supabase"
import type { Contract } from "@/lib/supabase"

export function LandingHero() {
  const [contracts, setContracts] = useState<Contract[]>([])

  useEffect(() => {
    const loadContracts = async () => {
      const data = await getContracts()
      setContracts(data)
    }
    loadContracts()
  }, [])

  const totalTransacted = contracts.reduce((sum, contract) => sum + (Number.parseFloat(contract.amount) || 0), 0)

  return (
    <section className="relative w-full pt-12 pb-20 sm:pt-20 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-xs sm:text-sm font-medium text-secondary">Secure. Trusted. Transparent.</span>
            </div>

            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Trust-Based
                </span>{" "}
                Financial Platform
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-xl text-muted-foreground leading-relaxed">
                Secure payments, trust scores, and blockchain settlement for freelancers, clients, and communities.
                Escrow protection for every transaction.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Button size="lg" className="rounded-full text-sm sm:text-base" asChild>
                <Link href="/signup" className="gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full bg-transparent text-sm sm:text-base" asChild>
                <Link href="#how-it-works">Learn More</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-border">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-primary">{contracts.length}+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Contracts</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-secondary">
                  ${totalTransacted.toLocaleString("en-US", { maximumFractionDigits: 0 })}+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">Transacted</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-accent">99.9%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative h-64 sm:h-96 lg:h-full min-h-64 sm:min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-6 sm:p-8 border border-border/50 backdrop-blur-sm h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto flex items-center justify-center">
                  <Shield className="w-8 sm:w-10 h-8 sm:h-10 text-primary-foreground" />
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">Secure Escrow Platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
