import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function LandingCTA() {
  return (
    <section className="w-full py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div>
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of freelancers and communities building trust-based financial relationships.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="rounded-full" asChild>
            <Link href="/signup" className="gap-2">
              Create Account <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full bg-transparent" asChild>
            <Link href="/docs">View Documentation</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
