import { NextSeo } from "next-seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CTAButton from "@/components/CTAButton";
import * as Icons from "lucide-react";
import { solutions, solutionCategories } from "@/content/solutions";

export const metadata = {
  title: "AI Solutions Catalogue",
  description: "Comprehensive AI solutions for public institutions and regulated industries. From citizen services to compliance automation.",
};

export default function SolutionsPage() {
  return (
    <>
      <NextSeo
        title="AI Solutions Catalogue"
        description="Comprehensive AI solutions for public institutions and regulated industries. From citizen services to compliance automation."
        canonical="https://azqyra.com/solutions"
      />
      <Header />
      <main id="main-content" className="pt-24">
        <Section padding="large">
          <div className="text-center mb-16">
            <h1 className="heading text-4xl lg:text-5xl text-navy-900 mb-6">
              Solutions built for your sector
            </h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
              Comprehensive AI solutions designed specifically for the unique challenges 
              and requirements of public institutions and regulated industries.
            </p>
          </div>

          {solutionCategories.map((category) => {
            const categorySolutions = solutions.filter(s => s.category === category);
            
            return (
              <div key={category} className="mb-20 last:mb-0">
                <h2 className="heading-2 text-2xl lg:text-3xl text-navy-900 mb-8 text-center">
                  {category}
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categorySolutions.map((solution) => {
                    const IconComponent = (Icons as any)[solution.icon] || Icons.Circle;
                    
                    return (
                      <Card key={solution.id} className="h-full">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-navy-900/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-navy-900" />
                          </div>
                          <div className="flex-1">
                            <h3 className="heading-2 text-lg text-navy-900 mb-3 group-hover:text-blue-700 transition-colors">
                              {solution.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                              {solution.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className="text-center mt-16 pt-16 border-t border-slate-500/20">
            <h2 className="heading-2 text-2xl text-navy-900 mb-6">
              Ready to explore these solutions?
            </h2>
            <p className="text-slate-500 mb-8 max-w-2xl mx-auto">
              Schedule a confidential consultation to discuss which solutions align 
              with your specific needs and objectives.
            </p>
            <CTAButton href="/contact" size="lg" location="solutions-bottom">
              Start Confidential Consultation
            </CTAButton>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

