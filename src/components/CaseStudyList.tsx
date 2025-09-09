import Link from "next/link";
import Card from "./Card";
import Badge from "./Badge";
import { CaseStudyMeta } from "@/content/case-studies";

interface CaseStudyListProps {
  caseStudies: CaseStudyMeta[];
}

export default function CaseStudyList({ caseStudies }: CaseStudyListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {caseStudies.map((study) => (
        <Link key={study.slug} href={`/case-studies/${study.slug}`}>
          <Card className="h-full">
            <div className="mb-4">
              <Badge variant="info" size="sm">
                {study.sector}
              </Badge>
            </div>
            
            <h3 className="heading-2 text-lg text-navy-900 mb-4 group-hover:text-blue-700 transition-colors">
              {study.title}
            </h3>
            
            <div className="space-y-3 mb-6">
              {study.metrics.slice(0, 2).map((metric, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{metric.label}</span>
                  <span className="mono font-semibold text-navy-900">
                    {metric.value} {metric.improvement}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {study.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="default" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}

