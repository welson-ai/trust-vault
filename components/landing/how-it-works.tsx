import { Card } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    title: "Create Profile",
    description: "Sign up and complete identity verification. Build your trust score from day one.",
  },
  {
    number: "02",
    title: "Connect Wallet",
    description: "Link your Solana wallet or use our managed account for easy transactions.",
  },
  {
    number: "03",
    title: "Initiate Transaction",
    description: "Create a contract or task with clear terms, timeline, and escrow amount.",
  },
  {
    number: "04",
    title: "Secure Escrow",
    description: "Funds are locked in smart escrow. Both parties confirm and complete.",
  },
  {
    number: "05",
    title: "Instant Settlement",
    description: "Upon completion, funds settle instantly to fiat or crypto wallet.",
  },
  {
    number: "06",
    title: "Build Trust",
    description: "Ratings and reviews update your trust score and reputation permanently.",
  },
]

export function LandingHowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">How It Works</h2>
          <p className="text-xl text-muted-foreground">Simple, secure, and transparent</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <Card className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary-foreground">{step.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </Card>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
