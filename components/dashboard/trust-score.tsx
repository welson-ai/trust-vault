import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export function DashboardTrustScore() {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-6">
        <h2 className="text-lg font-semibold">Trust Score</h2>
        <Badge className="bg-accent/20 text-accent hover:bg-accent/30">Excellent</Badge>
      </div>

      <div className="space-y-6">
        {/* Score Circle */}
        <div className="flex items-center justify-center">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="text-muted" />
              {/* Progress circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                strokeDasharray={`${(87 / 100) * 2 * Math.PI * 45} ${2 * Math.PI * 45}`}
                strokeLinecap="round"
                className="text-secondary transition-all"
                style={{ transform: "rotate(-90deg)", transformOrigin: "50px 50px" }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold">87</span>
              <span className="text-xs text-muted-foreground">/100</span>
            </div>
          </div>
        </div>

        {/* Breakdown */}
        <div className="space-y-3">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-medium">Completion Rate</span>
              <span className="text-sm text-secondary">98%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-secondary" style={{ width: "98%" }} />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-medium">Reliability</span>
              <span className="text-sm text-secondary">95%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-secondary to-accent" style={{ width: "95%" }} />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-medium">Communication</span>
              <span className="text-sm text-secondary">92%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-accent to-primary" style={{ width: "92%" }} />
            </div>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 pt-3 border-t border-border">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-accent text-accent" />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">(128 reviews)</span>
        </div>
      </div>
    </Card>
  )
}
