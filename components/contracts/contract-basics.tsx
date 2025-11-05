"use client"

import { Card } from "@/components/ui/card"

const contractTypes = [
  { id: "freelance", label: "Freelance Work", description: "Hire freelancers for specific tasks" },
  { id: "chama", label: "Group Savings", description: "Pool funds with group members" },
  { id: "purchase", label: "Online Purchase", description: "Buy and verify delivery" },
]

const taskStructures = [
  { id: "one-off", label: "One-Time Task", description: "Single payment upon completion" },
  { id: "milestone", label: "Milestone-Based", description: "Payments at different stages" },
]

export function ContractBasics({ formData, setFormData }: any) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Contract Type</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contractTypes.map((type) => (
            <Card
              key={type.id}
              className={`p-4 cursor-pointer transition-all border-2 ${
                formData.type === type.id ? "border-primary bg-primary/5" : "border-muted hover:border-primary/50"
              }`}
              onClick={() => setFormData({ ...formData, type: type.id })}
            >
              <h3 className="font-semibold mb-1">{type.label}</h3>
              <p className="text-sm text-muted-foreground">{type.description}</p>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Task Structure</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {taskStructures.map((structure) => (
            <Card
              key={structure.id}
              className={`p-4 cursor-pointer transition-all border-2 ${
                formData.contractType === structure.id
                  ? "border-primary bg-primary/5"
                  : "border-muted hover:border-primary/50"
              }`}
              onClick={() => setFormData({ ...formData, contractType: structure.id })}
            >
              <h3 className="font-semibold mb-1">{structure.label}</h3>
              <p className="text-sm text-muted-foreground">{structure.description}</p>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Contract Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="e.g., Website Redesign for RetailCo"
          className="w-full px-4 py-2 rounded-lg border border-muted bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Description & Deliverables</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Describe the work, deliverables, and acceptance criteria..."
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-muted bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        />
      </div>
    </div>
  )
}
