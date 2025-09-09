export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "compliance",
    question: "Is this compliant with our legal requirements?",
    answer: "Yes—governance and auditability are embedded by design. We align with your internal policies and applicable regulations, including GDPR, sector-specific compliance requirements, and organizational governance frameworks. Every solution includes comprehensive audit trails and configurable approval workflows.",
  },
  {
    id: "data-residency",
    question: "Where does our data live?",
    answer: "We offer EU/EEA residency and multiple deployment models, including public cloud, private cloud, and on-premises solutions. Your data sovereignty requirements are our priority, and we work within your existing infrastructure constraints and security policies.",
  },
  {
    id: "time-to-value",
    question: "How fast can we see value?",
    answer: "Our pilots are designed to show measurable wins within 2-4 weeks. We focus on high-impact, quick-win processes during the Discovery phase to ensure rapid ROI demonstration. Most clients see operational improvements and cost savings from day one of pilot deployment.",
  },
  {
    id: "job-displacement",
    question: "Will jobs be replaced?",
    answer: "We remove repetitive, low-value work so your people can focus on complex, human-critical tasks. Our approach is about augmentation, not replacement—freeing up your team to handle strategic work, complex decision-making, and tasks that require human judgment and creativity.",
  },
  {
    id: "integration",
    question: "Can this integrate with our systems?",
    answer: "Yes—we provide secure connectors for CRMs, document management systems, ticketing platforms, email systems, telephony, and data warehouses. Our solutions are designed to work within your existing technology stack with minimal disruption to current workflows.",
  },
  {
    id: "governance",
    question: "How do you ensure AI governance and safety?",
    answer: "Every solution includes built-in governance controls: human-in-the-loop approvals for sensitive actions, bias testing and monitoring, content safety guardrails, model evaluation harnesses, and red-team testing. We provide full transparency into AI decision-making with explainable outputs and audit trails.",
  },
];

