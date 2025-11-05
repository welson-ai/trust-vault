"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, X } from "lucide-react"

export function ContractPayment({ formData, setFormData }: any) {
  const handleAddMilestone = () => {
    setFormData({
      ...formData,
      milestones: [...formData.milestones, { title: "", amount: "", dueDate: "" }],
    })
  }

  const handleUpdateMilestone = (idx: number, field: string, value: string) => {
    const updated = [...formData.milestones]
    updated[idx] = { ...updated[idx], [field]: value }
    setFormData({ ...formData, milestones: updated })
  }

  const handleRemoveMilestone = (idx: number) => {
    setFormData({
      ...formData,
      milestones: formData.milestones.filter((_: any, i: number) => i !== idx),
    })
  }

  const totalMilestones = formData.milestones.reduce(
    (sum: number, m: any) => sum + (Number.parseFloat(m.amount) || 0),
    0,
  )

  return (
    <div className="space-y-8">
      {formData.contractType === "one-off" ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Amount</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  placeholder="0.00"
                  className="flex-1 px-4 py-2 rounded-lg border border-muted bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <select
                  value={formData.currency}
                  onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                  className="px-4 py-2 rounded-lg border border-muted bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="KES">KES</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Deadline</label>
              <input
                type="date"
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-muted bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Milestones</h2>
            <Button onClick={handleAddMilestone} className="rounded-full gap-2" size="sm">
              <Plus className="w-4 h-4" />
              Add Milestone
            </Button>
          </div>

          {formData.milestones.length > 0 && (
            <div className="space-y-3 mb-6">
              {formData.milestones.map((milestone: any, idx: number) => (
                <Card key={idx} className="p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="flex-1">
                      <input
                        type="text"
                        value={milestone.title}
                        onChange={(e) => handleUpdateMilestone(idx, "title", e.target.value)}
                        placeholder="Milestone title"
                        className="w-full px-3 py-2 rounded border border-muted bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveMilestone(idx)}
                      className="text-destructive hover:bg-destructive/10"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold mb-1 block">Amount</label>
                      <input
                        type="number"
                        value={milestone.amount}
                        onChange={(e) => handleUpdateMilestone(idx, "amount", e.target.value)}
                        placeholder="0.00"
                        className="w-full px-3 py-2 rounded border border-muted bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold mb-1 block">Due Date</label>
                      <input
                        type="date"
                        value={milestone.dueDate}
                        onChange={(e) => handleUpdateMilestone(idx, "dueDate", e.target.value)}
                        className="w-full px-3 py-2 rounded border border-muted bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {formData.milestones.length > 0 && (
            <Card className="p-4 bg-primary/5 border-primary/20">
              <p className="text-sm font-semibold">Total Contract Value</p>
              <p className="text-2xl font-bold text-primary mt-1">
                {formData.currency} {totalMilestones.toFixed(2)}
              </p>
            </Card>
          )}
        </div>
      )}

      <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
        <p className="text-sm font-semibold text-accent mb-1">Escrow Protection</p>
        <p className="text-xs text-muted-foreground">
          All funds will be held in escrow by Trust Vault. Payments are released only after task completion
          verification.
        </p>
      </div>
    </div>
  )
}
