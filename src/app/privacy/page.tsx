import { NextSeo } from "next-seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import RichText from "@/components/RichText";

export const metadata = {
  title: "Privacy Policy",
  description: "AZQYRA's privacy policy and data protection practices.",
};

export default function PrivacyPage() {
  return (
    <>
      <NextSeo
        title="Privacy Policy"
        description="AZQYRA's privacy policy and data protection practices."
        canonical="https://azqyra.com/privacy"
        noindex={true}
      />
      <Header />
      <main id="main-content" className="pt-24">
        <Section padding="large" maxWidth="readable">
          <h1 className="heading text-4xl lg:text-5xl text-navy-900 mb-8">
            Privacy Policy
          </h1>
          
          <RichText>
            <p><em>Last updated: {new Date().toLocaleDateString()}</em></p>
            
            <h2>Overview</h2>
            <p>
              AZQYRA ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, and protect your information 
              when you use our website and services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Information You Provide</h3>
            <ul>
              <li>Contact information (name, email, organization)</li>
              <li>Communication preferences</li>
              <li>Messages and inquiries you send us</li>
            </ul>

            <h3>Information We Collect Automatically</h3>
            <ul>
              <li>Website usage data and analytics</li>
              <li>Device and browser information</li>
              <li>IP address and location data</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Respond to your inquiries and provide our services</li>
              <li>Send you relevant updates and communications</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Data Protection</h2>
            <p>
              We implement appropriate technical and organizational measures to protect 
              your personal data against unauthorized access, alteration, disclosure, 
              or destruction.
            </p>

            <h2>Your Rights</h2>
            <p>Under GDPR and other applicable laws, you have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Delete your data</li>
              <li>Restrict processing</li>
              <li>Data portability</li>
              <li>Object to processing</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@azqyra.com
              <br />
              Address: Vienna, Austria
            </p>

            <p><em>
              Note: This is a placeholder privacy policy. Please consult with legal 
              counsel to ensure compliance with all applicable privacy laws and regulations.
            </em></p>
          </RichText>
        </Section>
      </main>
      <Footer />
    </>
  );
}

