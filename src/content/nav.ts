export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const mainNavItems: NavItem[] = [
  {
    label: "Solutions",
    href: "/solutions",
    description: "AI solutions for your specific needs",
  },
  {
    label: "Focus Areas",
    href: "/focus-areas",
    description: "Industries and verticals we serve",
  },
  {
    label: "Case Studies",
    href: "/case-studies",
    description: "Real-world results and outcomes",
  },
  {
    label: "Blog",
    href: "/blog",
    description: "Insights on governed AI",
  },
  {
    label: "Resources",
    href: "/resources",
    description: "Downloads and executive briefs",
  },
  {
    label: "About",
    href: "/about",
    description: "Our mission and approach",
  },
];