import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-24">
        <Section padding="large">
          <div className="text-center max-w-2xl mx-auto">
            <div className="mb-8">
              <div className="text-6xl lg:text-8xl font-bold text-navy-900/20 mb-4">
                404
              </div>
              <h1 className="heading text-3xl lg:text-4xl text-navy-900 mb-4">
                Page not found
              </h1>
              <p className="text-lg text-slate-500 mb-8">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/" location="404-home">
                Back to Home
              </CTAButton>
              <CTAButton href="/contact" variant="outline" location="404-contact">
                Contact Us
              </CTAButton>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-500/20">
              <p className="text-sm text-slate-500 mb-4">
                Looking for something specific?
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/solutions" className="text-blue-700 hover:text-navy-900 transition-colors">
                  Solutions
                </Link>
                <Link href="/focus-areas" className="text-blue-700 hover:text-navy-900 transition-colors">
                  Focus Areas
                </Link>
                <Link href="/case-studies" className="text-blue-700 hover:text-navy-900 transition-colors">
                  Case Studies
                </Link>
                <Link href="/blog" className="text-blue-700 hover:text-navy-900 transition-colors">
                  Blog
                </Link>
                <Link href="/about" className="text-blue-700 hover:text-navy-900 transition-colors">
                  About
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

