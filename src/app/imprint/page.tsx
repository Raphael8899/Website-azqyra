import { NextSeo } from "next-seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import RichText from "@/components/RichText";

export const metadata = {
  title: "Imprint",
  description: "Legal information and company details for AZQYRA.",
};

export default function ImprintPage() {
  return (
    <>
      <NextSeo
        title="Imprint"
        description="Legal information and company details for AZQYRA."
        canonical="https://azqyra.com/imprint"
        noindex={true}
      />
      <Header />
      <main id="main-content" className="pt-24">
        <Section padding="large" maxWidth="readable">
          <h1 className="heading text-4xl lg:text-5xl text-navy-900 mb-8">
            Imprint
          </h1>
          
          <RichText>
            <h2>Company Information</h2>
            <p>
              <strong>AZQYRA</strong><br />
              Vienna, Austria<br />
              Email: hello@azqyra.com
            </p>

            <h2>Responsible for Content</h2>
            <p>
              [Name]<br />
              Managing Director<br />
              AZQYRA
            </p>

            <h2>Professional Liability Insurance</h2>
            <p>
              [Insurance details to be added]
            </p>

            <h2>Regulatory Information</h2>
            <p>
              [Regulatory registration details to be added based on jurisdiction]
            </p>

            <h2>Dispute Resolution</h2>
            <p>
              The European Commission provides a platform for online dispute resolution (ODR): 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>

            <h2>Disclaimer</h2>
            <p>
              Despite careful content control, we assume no liability for the content 
              of external links. The operators of the linked pages are solely responsible 
              for their content.
            </p>

            <p><em>
              Note: This is a placeholder imprint. Please consult with legal counsel 
              to ensure compliance with Austrian/EU legal requirements for commercial websites.
            </em></p>
          </RichText>
        </Section>
      </main>
      <Footer />
    </>
  );
}

