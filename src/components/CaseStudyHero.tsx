import Badge from "./Badge";
import StatBlock from "./StatBlock";
import { CaseStudyMeta } from "@/content/case-studies";

interface CaseStudyHeroProps {
  study: CaseStudyMeta;
}

export default function CaseStudyHero({ study }: CaseStudyHeroProps) {
  return (
    <div className="bg-navy-900 text-white py-16 lg:py-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <Badge variant="info" className="bg-white/10 text-white border-white/20">
              {study.sector}
            </Badge>
          </div>
          
          <h1 className="heading text-3xl lg:text-5xl mb-8">
            {study.title}
          </h1>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {study.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="mono text-3xl lg:text-4xl font-bold text-gold-500 mb-2">
                  {metric.value}
                </div>
                <div className="text-white/80 text-sm uppercase tracking-wide">
                  {metric.improvement}
                </div>
                <div className="text-white/60 text-sm mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

