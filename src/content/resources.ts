export interface Resource {
  id: string;
  title: string;
  description: string;
  type: "PDF" | "XLSX" | "DOC";
  size?: string;
  downloadUrl: string;
  requiresEmail?: boolean;
  category: "Executive" | "Technical" | "Governance" | "Tools";
}

export const resources: Resource[] = [
  {
    id: "executive-brief",
    title: "Executive Brief: Governed AI for Public Institutions",
    description: "A comprehensive overview of AI implementation strategies for government and public sector organizations, including governance frameworks and compliance considerations.",
    type: "PDF",
    size: "2.4 MB",
    downloadUrl: "/resources/executive-brief-governed-ai.pdf",
    requiresEmail: false,
    category: "Executive",
  },
  {
    id: "governance-onepager",
    title: "Governance One-Pager: Audit-Ready Automation",
    description: "Essential checklist and framework for implementing AI systems that meet audit and compliance requirements in regulated environments.",
    type: "PDF",
    size: "1.1 MB",
    downloadUrl: "/resources/governance-onepager-audit-ready.pdf",
    requiresEmail: false,
    category: "Governance",
  },
  {
    id: "roi-estimator",
    title: "ROI Estimator Worksheet",
    description: "Interactive spreadsheet to calculate potential cost savings and efficiency gains from AI automation in your organization.",
    type: "XLSX",
    size: "850 KB",
    downloadUrl: "/resources/roi-estimator-worksheet.xlsx",
    requiresEmail: false,
    category: "Tools",
  },
];

export const resourceCategories = ["Executive", "Technical", "Governance", "Tools"] as const;

