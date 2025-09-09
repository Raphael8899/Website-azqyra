export interface CaseStudyMeta {
  slug: string;
  title: string;
  sector: string;
  client: string;
  metrics: {
    label: string;
    value: string;
    improvement: string;
  }[];
  tags: string[];
  featured?: boolean;
}

export const caseStudies: CaseStudyMeta[] = [
  {
    slug: "citizen-request-automation",
    title: "Citizen Request Automation — Response time days → minutes",
    sector: "Public Administration",
    client: "European Municipal Government",
    metrics: [
      {
        label: "Handling Cost Reduction",
        value: "60%",
        improvement: "decrease",
      },
      {
        label: "Customer Satisfaction",
        value: "35%",
        improvement: "increase",
      },
      {
        label: "Processing Time",
        value: "85%",
        improvement: "faster",
      },
    ],
    tags: ["Automation", "Citizen Services", "Cost Reduction"],
    featured: true,
  },
  {
    slug: "legislative-analyzer",
    title: "Legislative Analyzer — From draft to decision in hours",
    sector: "Government",
    client: "National Parliamentary Office",
    metrics: [
      {
        label: "Review Speed",
        value: "10x",
        improvement: "faster",
      },
      {
        label: "Citation Accuracy",
        value: "95%",
        improvement: "accuracy",
      },
      {
        label: "Analysis Completeness",
        value: "100%",
        improvement: "coverage",
      },
    ],
    tags: ["Policy Analysis", "Legislative Review", "Decision Support"],
    featured: true,
  },
  {
    slug: "aml-assist",
    title: "AML Assist — Faster onboarding with explainable scoring",
    sector: "Financial Services",
    client: "Regional Banking Group",
    metrics: [
      {
        label: "Manual Checks",
        value: "40%",
        improvement: "reduction",
      },
      {
        label: "Processing Consistency",
        value: "92%",
        improvement: "improvement",
      },
      {
        label: "Regulatory Compliance",
        value: "100%",
        improvement: "maintained",
      },
    ],
    tags: ["AML", "Risk Assessment", "Banking", "Compliance"],
    featured: true,
  },
];

