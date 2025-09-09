import { NextSeo } from "next-seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import CaseStudyHero from "@/components/CaseStudyHero";
import RichText from "@/components/RichText";
import CTAButton from "@/components/CTAButton";
import Badge from "@/components/Badge";
import { caseStudies } from "@/content/case-studies";

export const metadata = {
  title: "Case Study: Citizen Request Automation",
  description: "How a European municipal government reduced citizen response times from days to minutes with AI automation.",
};

const study = caseStudies.find(s => s.slug === "citizen-request-automation")!;

export default function CitizenRequestAutomationCase() {
  return (
    <>
      <NextSeo
        title="Case Study: Citizen Request Automation"
        description="How a European municipal government reduced citizen response times from days to minutes with AI automation."
        canonical="https://azqyra.com/case-studies/citizen-request-automation"
      />
      <Header />
      <main id="main-content" className="pt-24">
        <CaseStudyHero study={study} />
        
        <Section padding="large" maxWidth="readable">
          <RichText>
            <h2>The Challenge</h2>
            <p>
              A European municipal government was struggling with overwhelming volumes of citizen 
              requests across multiple channels—email, phone, web portal, and in-person visits. 
              Citizens faced wait times of 3-7 days for responses to standard information requests, 
              leading to frustration and repeated inquiries that further strained resources.
            </p>
            
            <p>
              The municipality's customer service team was spending 70% of their time on routine 
              inquiries that could be resolved with standardized information: opening hours, 
              document requirements, fee schedules, and basic procedural guidance. This left 
              little time for complex cases requiring human judgment and personalized attention.
            </p>

            <h2>The Solution</h2>
            <p>
              We implemented a comprehensive **Citizen Request Automation** system that could:
            </p>
            
            <ul>
              <li>Automatically categorize incoming requests across all channels</li>
              <li>Generate appropriate responses using approved templates and current information</li>
              <li>Route complex cases to the right human specialists with full context</li>
              <li>Maintain complete audit trails for compliance and quality assurance</li>
              <li>Learn from human feedback to improve response accuracy over time</li>
            </ul>

            <p>
              The system was designed with *human-in-the-loop* controls, ensuring that sensitive 
              or ambiguous requests were always reviewed by qualified staff before responses 
              were sent.
            </p>

            <h2>Implementation Approach</h2>
            <p>
              <strong>Discovery (2 weeks):</strong> We analyzed 6 months of citizen inquiries, 
              identifying the top 20 request types that represented 80% of volume. We also 
              mapped existing response templates and approval workflows.
            </p>
            
            <p>
              <strong>Design (2 weeks):</strong> Created the automation architecture with 
              built-in governance controls, including confidence thresholds for automatic 
              responses and escalation rules for edge cases.
            </p>
            
            <p>
              <strong>Pilot (4 weeks):</strong> Deployed the system in shadow mode, processing 
              real requests but requiring human approval for all responses. This allowed us 
              to tune accuracy and build staff confidence.
            </p>
            
            <p>
              <strong>Scale (6 weeks):</strong> Gradually increased automation levels, starting 
              with the highest-confidence responses and expanding based on performance metrics.
            </p>

            <h2>Results</h2>
            <p>
              The transformation was immediate and measurable:
            </p>
            
            <blockquote>
              "Within the first month, we saw citizen satisfaction scores increase by 35% while 
              our team could finally focus on the complex cases that really need human expertise."
              <br />— *Head of Citizen Services*
            </blockquote>
            
            <ul>
              <li><strong>60% reduction in handling costs</strong> through automation of routine requests</li>
              <li><strong>85% faster processing</strong> with most responses sent within minutes</li>
              <li><strong>35% increase in citizen satisfaction</strong> due to faster, more consistent service</li>
              <li><strong>50% reduction in repeat inquiries</strong> through more comprehensive initial responses</li>
            </ul>

            <h2>Governance & Compliance</h2>
            <p>
              Every aspect of the system was designed with governance in mind:
            </p>
            
            <ul>
              <li><strong>Full audit trails:</strong> Every automated decision logged with reasoning and confidence scores</li>
              <li><strong>Human oversight:</strong> Configurable review requirements for different request types</li>
              <li><strong>Data protection:</strong> GDPR-compliant processing with automatic data minimization</li>
              <li><strong>Quality monitoring:</strong> Continuous feedback loops to maintain and improve accuracy</li>
            </ul>

            <h2>Long-term Impact</h2>
            <p>
              Six months after full deployment, the municipality has expanded the system to 
              handle additional request types and integrated it with their document management 
              system. Staff report higher job satisfaction as they can focus on meaningful 
              citizen interactions rather than repetitive information requests.
            </p>
            
            <p>
              The system now handles 78% of all citizen requests automatically while maintaining 
              a 94% citizen satisfaction rating—higher than the previous manual process.
            </p>
          </RichText>

          <div className="mt-16 pt-16 border-t border-slate-500/20">
            <div className="flex flex-wrap gap-3 mb-8">
              {study.tags.map((tag) => (
                <Badge key={tag} variant="default">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <div className="text-center">
              <h3 className="heading-2 text-2xl text-navy-900 mb-4">
                Could this work for your organization?
              </h3>
              <p className="text-slate-500 mb-8 max-w-2xl mx-auto">
                Let's discuss how citizen request automation could transform your 
                service delivery and citizen satisfaction.
              </p>
              <CTAButton href="/contact" size="lg" location="case-study-cta">
                Explore This Solution
              </CTAButton>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

