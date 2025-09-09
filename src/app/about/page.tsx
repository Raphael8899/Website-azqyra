import { NextSeo } from "next-seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CTAButton from "@/components/CTAButton";
import Approach from "@/components/Approach";
import Trust from "@/components/Trust";

export const metadata = {
  title: "About AZQYRA - Our Mission & Approach",
  description: "Learn about AZQYRA's mission to become the trusted AI partner for governments and regulated industries worldwide.",
};

export default function AboutPage() {
  return (
    <>
      <NextSeo
        title="About AZQYRA - Our Mission & Approach"
        description="Learn about AZQYRA's mission to become the trusted AI partner for governments and regulated industries worldwide."
        canonical="https://azqyra.com/about"
      />
      <Header />
      <main id="main-content" className="pt-24">
        <Section padding="large">
          <div className="text-center mb-16">
            <h1 className="heading text-4xl lg:text-5xl text-navy-900 mb-6">
              About AZQYRA
            </h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
              We are building the future of responsible AI for institutions with 
              responsibility—where trust, governance, and measurable impact matter most.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <Card padding="large" hover={false}>
              <h2 className="heading-2 text-2xl text-navy-900 mb-6">
                Our Vision
              </h2>
              <p className="text-slate-500 leading-relaxed text-lg">
                To become the trusted AI partner for governments and regulated industries 
                worldwide—enabling institutions to cut costs, improve quality, and accelerate 
                speed without compromising trust, compliance, or security.
              </p>
            </Card>

            <Card padding="large" hover={false}>
              <h2 className="heading-2 text-2xl text-navy-900 mb-6">
                Our Mission
              </h2>
              <p className="text-slate-500 leading-relaxed text-lg">
                We design and deliver governed AI solutions that create measurable impact 
                from day one. Every system we build is engineered for trust, compliance, 
                and operational excellence in sensitive environments.
              </p>
            </Card>
          </div>

          <div className="text-center mb-20">
            <h2 className="heading-2 text-3xl text-navy-900 mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center" hover={false}>
                <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="heading-2 text-xl text-navy-900 mb-4">
                  Trust & Discretion
                </h3>
                <p className="text-slate-500">
                  We handle sensitive information with the highest levels of confidentiality 
                  and security, earning trust through consistent, reliable service.
                </p>
              </Card>

              <Card className="text-center" hover={false}>
                <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="heading-2 text-xl text-navy-900 mb-4">
                  Impact
                </h3>
                <p className="text-slate-500">
                  Every solution we deliver is designed to create measurable, meaningful 
                  improvements from day one—not distant promises but immediate value.
                </p>
              </Card>

              <Card className="text-center" hover={false}>
                <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="heading-2 text-xl text-navy-900 mb-4">
                  Governed Innovation
                </h3>
                <p className="text-slate-500">
                  We push the boundaries of what's possible with AI while maintaining the 
                  highest standards of governance, ethics, and regulatory compliance.
                </p>
              </Card>
            </div>
          </div>
        </Section>

        {/* Include Approach and Trust sections */}
        <Approach />
        <Trust />

        <Section padding="large">
          <div className="text-center">
            <h2 className="heading-2 text-3xl text-navy-900 mb-6">
              Ready to work with us?
            </h2>
            <p className="text-slate-500 mb-8 max-w-2xl mx-auto">
              Let's explore how our governed AI approach can deliver measurable 
              impact for your organization.
            </p>
            <CTAButton href="/contact" size="lg" location="about-bottom">
              Start a Conversation
            </CTAButton>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

