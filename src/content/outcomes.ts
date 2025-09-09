export interface Outcome {
  id: string;
  metric: string;
  before: string;
  after: string;
  description: string;
  context?: string;
}

export const outcomes: Outcome[] = [
  {
    id: "response-time",
    metric: "Citizen response time",
    before: "days",
    after: "minutes",
    description: "Automated triage and templated responses for common citizen inquiries",
    context: "Standard information requests and service applications",
  },
  {
    id: "operational-savings",
    metric: "Operational savings",
    before: "manual processing",
    after: "automated workflows",
    description: "High-volume tasks automated; teams focus on complex work requiring human judgment",
    context: "Document processing, data entry, and routine approvals",
  },
  {
    id: "policy-turnarounds",
    metric: "Policy turnarounds",
    before: "weeks",
    after: "hours",
    description: "Draft analysis and impact synthesis with source citations and recommendations",
    context: "Legislative review and policy impact assessment",
  },
  {
    id: "communications-efficiency",
    metric: "Communications efficiency",
    before: "days to draft",
    after: "same-day approval",
    description: "Targeted posts and newsletters drafted and reviewed within approval workflows",
    context: "Public communications and stakeholder updates",
  },
];

export const outcomesDisclaimer = "Illustrative benchmarks; we validate targets during Discovery phase based on your specific processes and data readiness.";

