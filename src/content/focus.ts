export interface FocusArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
  icon: string;
  color: string;
}

export const focusAreas: FocusArea[] = [
  {
    id: "public-institutions",
    title: "Public Institutions & State-Adjacent",
    subtitle: "Responsible automation for administration and citizen services",
    description: "We help government agencies and public institutions automate high-volume processes while maintaining transparency, accountability, and policy alignment. Our solutions are designed to improve citizen services and operational efficiency without compromising on governance or compliance requirements.",
    outcomes: [
      "Citizen response times reduced from days to minutes",
      "Policy analysis and impact synthesis completed in hours",
      "Automated compliance reporting with full audit trails",
    ],
    icon: "building",
    color: "blue-700",
  },
  {
    id: "critical-services",
    title: "Critical Services & Infrastructure",
    subtitle: "Operational resilience with real-time insights",
    description: "For organizations managing critical infrastructure and essential services, we provide AI solutions that enhance operational resilience, enable real-time decision-making, and maintain human oversight where it matters most. Our systems are built to handle sensitive operations with the highest reliability standards.",
    outcomes: [
      "Real-time threat detection and prioritized response workflows",
      "Automated incident reporting with structured playbooks",
      "Enhanced situational awareness across multiple data sources",
    ],
    icon: "shield-check",
    color: "green-700",
  },
  {
    id: "regulated-industries",
    title: "Regulated Industries & Media",
    subtitle: "Automate complex processes without compromising compliance",
    description: "We serve highly regulated sectors including finance, legal, healthcare, and media organizations. Our solutions help automate complex processes while ensuring full compliance with industry regulations, maintaining brand safety, and preserving editorial standards.",
    outcomes: [
      "Regulatory submissions automated with complete traceability",
      "Content generation with built-in compliance guardrails",
      "Risk assessment and monitoring with explainable AI",
    ],
    icon: "scale",
    color: "amber-700",
  },
];

