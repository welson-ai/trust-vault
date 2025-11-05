import { Card } from "@/components/ui/card"
import { Shield, Zap, TrendingUp, Lock, Blocks, Bell } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Trust Scores",
    description: "AI-powered reputation system with real-time verification and transparent history.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Lock,
    title: "Escrow Protection",
    description: "Funds held securely until both parties confirm completion and satisfaction.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Blocks,
    title: "Blockchain Settlement",
    description: "Solana-powered payments with x402 tokens and instant Visa Tap settlements.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Zap,
    title: "Instant Settlements",
    description: "Real-time payment processing with zero hidden fees and transparent pricing.",
    gradient: "from-primary/50 to-secondary/50",
  },
  {
    icon: TrendingUp,
    title: "Analytics",
    description: "Comprehensive tracking of transactions, trends, and financial performance.",
    gradient: "from-secondary/50 to-accent/50",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Real-time updates on transactions, disputes, and trust score changes.",
    gradient: "from-accent/50 to-primary/50",
  },
]

export function LandingFeatures() {
  return (
    <section id="features" className="w-full py-16 sm:py-24 bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold">Powerful Features</h2>
          <p className="text-base sm:text-xl text-muted-foreground">
            Everything you need for secure financial transactions
          </p>
        </div>

        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <Card key={idx} className="p-6 hover:border-secondary/50 transition-all hover:shadow-lg group">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} p-2.5 mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            )
          })}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory">
          <div className="flex gap-4 min-w-min">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="flex-shrink-0 w-72 snap-start">
                  <Card className="p-6 h-full hover:border-secondary/50 transition-all hover:shadow-lg group">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} p-2.5 mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
