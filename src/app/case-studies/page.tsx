import { NextSeo } from "next-seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import CaseStudyList from "@/components/CaseStudyList";
import CTAButton from "@/components/CTAButton";
import { caseStudies } from "@/content/case-studies";

export const metadata = {
  title: "Case Studies - Real Results",
  description: "See how AZQYRA's AI solutions deliver measurable results for public institutions and regulated industries.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <NextSeo
        title="Case Studies - Real Results"
        description="See how AZQYRA's AI solutions deliver measurable results for public institutions and regulated industries."
        canonical="https://azqyra.com/case-studies"
      />
      <Header />
      <main id="main-content" className="pt-24">
        <Section padding="large">
          <div className="text-center mb-16">
            <h1 className="heading text-4xl lg:text-5xl text-navy-900 mb-6">
              Real results from day one
            </h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
              See how organizations like yours have transformed their operations 
              with governed AI solutions that deliver measurable impact quickly.
            </p>
          </div>

          <CaseStudyList caseStudies={caseStudies} />

          <div className="text-center mt-16 pt-16 border-t border-slate-500/20">
            <h2 className="heading-2 text-2xl text-navy-900 mb-6">
              Ready for your success story?
            </h2>
            <p className="text-slate-500 mb-8 max-w-2xl mx-auto">
              Let's identify the quick wins that could deliver similar results 
              for your organization.
            </p>
            <CTAButton href="/contact" size="lg" location="case-studies-bottom">
              Start Your Pilot
            </CTAButton>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

