import { NextSeo } from "next-seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import NewsletterForm from "@/components/NewsletterForm";
import Card from "@/components/Card";

export const metadata = {
  title: "Newsletter - Strategic AI Insights",
  description: "Subscribe to strategic briefs on governed AI for public institutions and regulated industries.",
};

export default function NewsletterPage() {
  return (
    <>
      <NextSeo
        title="Newsletter - Strategic AI Insights"
        description="Subscribe to strategic briefs on governed AI for public institutions and regulated industries."
        canonical="https://azqyra.com/newsletter"
      />
      <Header />
      <main id="main-content" className="pt-24">
        <Section padding="large">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="heading text-4xl lg:text-5xl text-navy-900 mb-6">
              Strategic briefs on governed AI
            </h1>
            <p className="text-xl text-slate-500 mb-12">
              Occasional, executive-grade insights on AI implementation in regulated 
              environments. Real-world case studies, governance frameworks, and 
              strategic guidance for decision-makers.
            </p>
            
            <Card padding="large" className="max-w-md mx-auto">
              <NewsletterForm
                placeholder="Your work email"
                buttonText="Subscribe"
              />
            </Card>
            
            <div className="mt-12 text-center">
              <div className="grid md:grid-cols-3 gap-8 text-sm text-slate-500">
                <div>
                  <div className="font-medium text-navy-900 mb-2">
                    Executive-Grade
                  </div>
                  <p>Strategic insights, not technical details</p>
                </div>
                <div>
                  <div className="font-medium text-navy-900 mb-2">
                    Occasional
                  </div>
                  <p>Quality over quantity—no spam</p>
                </div>
                <div>
                  <div className="font-medium text-navy-900 mb-2">
                    Unsubscribe Anytime
                  </div>
                  <p>One-click unsubscribe, no questions asked</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

