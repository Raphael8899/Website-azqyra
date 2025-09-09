import { NextSeo } from "next-seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CTAButton from "@/components/CTAButton";
import * as Icons from "lucide-react";
import { focusAreas } from "@/content/focus";

export const metadata = {
  title: "Focus Areas - Industries We Serve",
  description: "AI solutions built for sensitive environments: public institutions, critical services, and regulated industries.",
};

export default function FocusAreasPage() {
  return (
    <>
      <NextSeo
        title="Focus Areas - Industries We Serve"
        description="AI solutions built for sensitive environments: public institutions, critical services, and regulated industries."
        canonical="https://azqyra.com/focus-areas"
      />
      <Header />
      <main id="main-content" className="pt-24">
        <Section padding="large">
          <div className="text-center mb-16">
            <h1 className="heading text-4xl lg:text-5xl text-navy-900 mb-6">
              Built for sensitive environments
            </h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
              We specialize in AI solutions for organizations where compliance, 
              security, and governance are paramount. Our systems are designed 
              to meet the highest standards of trust and reliability.
            </p>
          </div>

          <div className="space-y-20">
            {focusAreas.map((area, index) => {
              const IconComponent = (Icons as any)[area.icon] || Icons.Circle;
              const isEven = index % 2 === 0;
              
              return (
                <div key={area.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}>
                  {/* Icon and Visual */}
                  <div className="flex-shrink-0 lg:w-1/3">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-navy-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="h-12 w-12 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 lg:w-2/3">
                    <Card padding="large" hover={false}>
                      <h2 className="heading-2 text-2xl lg:text-3xl text-navy-900 mb-4">
                        {area.title}
                      </h2>
                      <p className="text-lg font-medium text-blue-700 mb-6">
                        {area.subtitle}
                      </p>
                      <p className="text-slate-500 leading-relaxed mb-8">
                        {area.description}
                      </p>
                      
                      <div className="space-y-4 mb-8">
                        <h3 className="heading-2 text-lg text-navy-900">
                          Key Outcomes:
                        </h3>
                        <ul className="space-y-3">
                          {area.outcomes.map((outcome, outcomeIndex) => (
                            <li key={outcomeIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-slate-500">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <CTAButton 
                        href="/contact" 
                        variant="outline" 
                        location={`focus-area-${area.id}`}
                      >
                        Discuss Your Needs
                      </CTAButton>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-20 pt-16 border-t border-slate-500/20">
            <h2 className="heading-2 text-2xl lg:text-3xl text-navy-900 mb-6">
              Don't see your sector?
            </h2>
            <p className="text-slate-500 mb-8 max-w-2xl mx-auto">
              We work with any organization that values governance, compliance, 
              and responsible AI implementation. Let's discuss your specific requirements.
            </p>
            <CTAButton href="/contact" size="lg" location="focus-areas-bottom">
              Start a Conversation
            </CTAButton>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

