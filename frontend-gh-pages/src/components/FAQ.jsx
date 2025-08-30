import React, { useState } from 'react'

const faqsDefault = [
  {
    q: 'What outcomes can you deliver quickly?',
    a: 'Week 1–2: stabilize and measure (SLOs, alerts, dashboards). Week 3–4: pipeline hardening and safe deploys. Month 2: performance and reliability improvements verified by metrics.'
  },
  {
    q: 'How do you ensure reliability at scale?',
    a: 'SLO-driven design, canary/blue-green deploys, automated rollbacks, chaos testing, and continuous profiling. We optimise p95/p99 latency and MTTR with data.'
  },
  {
    q: 'What is your typical engagement model?',
    a: 'Discovery (goals/constraints), implementation in small increments, weekly demos, and transparent metrics. We prioritise business KPIs and developer ergonomics.'
  },
  {
    q: 'Can you integrate with our existing stack?',
    a: 'Yes. We adapt to your cloud and tooling: AWS/Azure/GCP, Kubernetes, Terraform, Jenkins/GitHub Actions, and common observability stacks.'
  },
  {
    q: 'How do you keep security in focus?',
    a: 'Shift-left security, dependency scanning, IaC policy checks, secrets management, and least-privilege IAM. We add guardrails without blocking delivery.'
  }
]

const FAQ = ({ faqs = faqsDefault }) => {
  const [open, setOpen] = useState(null)
  return (
    <section className="section-pad snap-section">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="headline text-center mb-8">Questions, Answered</h2>
        <p className="subhead text-center mb-10">What clients usually ask—and how we address them</p>
        <div className="space-y-3">
          {faqs.map((item, idx) => (
            <div key={idx} className="glass-card neon-border p-5">
              <button onClick={() => setOpen(open === idx ? null : idx)} className="w-full text-left">
                <div className="flex items-center justify-between">
                  <span className="text-primary font-medium">{item.q}</span>
                  <span className="text-secondary">{open === idx ? '–' : '+'}</span>
                </div>
              </button>
              {open === idx ? (
                <div className="mt-3 text-secondary leading-relaxed">{item.a}</div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

