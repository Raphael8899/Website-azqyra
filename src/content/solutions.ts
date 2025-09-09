export interface Solution {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  featured?: boolean;
}

export const solutionCategories = [
  "Public Administration & Citizen Services",
  "Critical Services & Infrastructure", 
  "Law Firms & Legal Functions",
  "Banking & Financial Services",
  "Regulated Corporates",
  "Media Organizations",
] as const;

export type SolutionCategory = typeof solutionCategories[number];

export const solutions: Solution[] = [
  // Public Administration & Citizen Services
  {
    id: "funding-navigator",
    title: "Funding Navigator",
    description: "Instantly matches citizens and businesses to eligible subsidies; generates compliant checklists and next steps.",
    icon: "compass",
    category: "Public Administration & Citizen Services",
    featured: true,
  },
  {
    id: "press-monitoring",
    title: "Press Monitoring AI",
    description: "Executive digests of policy-relevant coverage with source links and trend signals.",
    icon: "newspaper",
    category: "Public Administration & Citizen Services",
  },
  {
    id: "targeted-social",
    title: "Targeted Social & Newsletters",
    description: "AI-authored, tone-governed content for defined audiences; approval workflows included.",
    icon: "megaphone",
    category: "Public Administration & Citizen Services",
    featured: true,
  },
  {
    id: "audience-insights",
    title: "AI Audience Insights",
    description: "Segment discovery, message resonance analysis, and performance lift suggestions.",
    icon: "users",
    category: "Public Administration & Citizen Services",
  },
  {
    id: "automated-outreach",
    title: "Automated Outreach",
    description: "Structured, compliant, multi-channel communications at scale with throttling and audit logs.",
    icon: "send",
    category: "Public Administration & Citizen Services",
  },
  {
    id: "citizen-request-automation",
    title: "Citizen Request Automation",
    description: "End-to-end handling of standard inquiries via email & phone; human escalation with full context.",
    icon: "phone",
    category: "Public Administration & Citizen Services",
    featured: true,
  },
  {
    id: "ai-personal-assistant",
    title: "AI Personal Assistant",
    description: "Calendar, reservations, bookings—policy-aligned and approval-aware.",
    icon: "calendar",
    category: "Public Administration & Citizen Services",
  },
  {
    id: "legislation-analyzer",
    title: "Legislation & Opinion Analyzer",
    description: "Draft reading, material change flags, impact synthesis, and action recommendations with citations.",
    icon: "scale",
    category: "Public Administration & Citizen Services",
  },
  {
    id: "policy-navigator",
    title: "Policy Navigator",
    description: "Enter a keyword → backgrounders, legal framing, recommended wording, and ready-to-publish outputs.",
    icon: "map",
    category: "Public Administration & Citizen Services",
  },

  // Critical Services & Infrastructure
  {
    id: "border-intelligence",
    title: "Border/Port Intelligence",
    description: "Pattern detection, anomaly triage, prioritized workflows—operator-in-the-loop.",
    icon: "shield",
    category: "Critical Services & Infrastructure",
  },
  {
    id: "risk-dashboards",
    title: "Real-Time Risk Dashboards",
    description: "Geopolitical, cyber, and operational signals unified for situational awareness.",
    icon: "activity",
    category: "Critical Services & Infrastructure",
    featured: true,
  },
  {
    id: "incident-briefing",
    title: "Incident Briefing Automation",
    description: "Structured incident summaries with playbooks, distribution lists, and follow-up tracking.",
    icon: "alert-triangle",
    category: "Critical Services & Infrastructure",
  },

  // Law Firms & Legal Functions
  {
    id: "contract-review",
    title: "Smart Contract Review",
    description: "Clause extraction, risk flags, suggested markups aligned to your playbooks.",
    icon: "file-text",
    category: "Law Firms & Legal Functions",
  },
  {
    id: "litigation-intelligence",
    title: "Litigation & Case Intelligence",
    description: "Matter mapping, precedent surfacing, and strategy notes (human-validated).",
    icon: "gavel",
    category: "Law Firms & Legal Functions",
  },
  {
    id: "due-diligence",
    title: "Due Diligence Automation",
    description: "Entity checks, adverse media, and evidence-linked reports with audit trails.",
    icon: "search",
    category: "Law Firms & Legal Functions",
  },

  // Banking & Financial Services
  {
    id: "aml-kyc-assist",
    title: "AML/KYC Assist",
    description: "Enriched profiles, watchlist orchestration, explainable risk scoring.",
    icon: "user-check",
    category: "Banking & Financial Services",
    featured: true,
  },
  {
    id: "fraud-insights",
    title: "Fraud & Anomaly Insights",
    description: "Cross-channel pattern detection; investigator workbench with evidence linking.",
    icon: "eye",
    category: "Banking & Financial Services",
  },
  {
    id: "regulatory-response",
    title: "Regulatory Response Automation",
    description: "Draft, validate, and assemble recurring regulatory submissions with traceability.",
    icon: "clipboard-check",
    category: "Banking & Financial Services",
  },

  // Regulated Corporates
  {
    id: "demand-generation",
    title: "Fully-Automated Demand Generation",
    description: "Prospect discovery, outreach sequencing, and meeting booking under brand/legal guardrails.",
    icon: "target",
    category: "Regulated Corporates",
  },
  {
    id: "exec-briefings",
    title: "Exec Briefings on Demand",
    description: "Daily/weekly strategic memos from internal + public sources, aligned to leadership priorities.",
    icon: "briefcase",
    category: "Regulated Corporates",
  },
  {
    id: "knowledge-assistants",
    title: "Knowledge Assistants",
    description: "Private, role-aware assistants with source citations and access controls.",
    icon: "brain",
    category: "Regulated Corporates",
  },

  // Media Organizations
  {
    id: "newsroom-assistant",
    title: "Newsroom Assistant",
    description: "Beat-specific monitoring, tipsheets, and summary drafts with source lineage.",
    icon: "edit",
    category: "Media Organizations",
  },
  {
    id: "audience-growth",
    title: "Audience Growth Automation",
    description: "Topic clustering, headline testing, time-of-day distribution, newsletter variants.",
    icon: "trending-up",
    category: "Media Organizations",
  },
  {
    id: "research-factcheck",
    title: "Research & Fact-Check Assist",
    description: "Evidence retrieval, cross-source consistency checks, editorial guardrails.",
    icon: "check-circle",
    category: "Media Organizations",
  },
];

export const featuredSolutions = solutions.filter(s => s.featured);

