import { NextSeo } from "next-seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CTAButton from "@/components/CTAButton";
import { Download, FileText, Table, Book } from "lucide-react";
import { resources } from "@/content/resources";

export const metadata = {
  title: "Resources - Executive Briefs & Tools",
  description: "Download executive briefs, governance frameworks, and tools for AI implementation in regulated environments.",
};

const iconMap = {
  PDF: FileText,
  XLSX: Table,
  DOC: Book,
};

export default function ResourcesPage() {
  return (
    <>
      <NextSeo
        title="Resources - Executive Briefs & Tools"
        description="Download executive briefs, governance frameworks, and tools for AI implementation in regulated environments."
        canonical="https://azqyra.com/resources"
      />
      <Header />
      <main id="main-content" className="pt-24">
        <Section padding="large">
          <div className="text-center mb-16">
            <h1 className="heading text-4xl lg:text-5xl text-navy-900 mb-6">
              Resources & Downloads
            </h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
              Executive briefs, governance frameworks, and practical tools to guide 
              your AI implementation in regulated environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {resources.map((resource) => {
              const IconComponent = iconMap[resource.type] || FileText;
              
              return (
                <Card key={resource.id} className="h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-navy-900/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-navy-900" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-slate-500 bg-slate-500/10 px-2 py-1 rounded">
                          {resource.type}
                        </span>
                        {resource.size && (
                          <span className="text-xs text-slate-500">
                            {resource.size}
                          </span>
                        )}
                      </div>
                      <h3 className="heading-2 text-lg text-navy-900 mb-3 group-hover:text-blue-700 transition-colors">
                        {resource.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {resource.description}
                  </p>
                  
                  <div className="mt-auto">
                    <a
                      href={resource.downloadUrl}
                      className="inline-flex items-center gap-2 text-blue-700 hover:text-navy-900 transition-colors font-medium text-sm group"
                      download
                    >
                      <Download className="h-4 w-4 group-hover:translate-y-0.5 transition-transform duration-200" />
                      Download {resource.type}
                    </a>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center bg-off-50 rounded-2xl p-12">
            <h2 className="heading-2 text-2xl text-navy-900 mb-4">
              Need something specific?
            </h2>
            <p className="text-slate-500 mb-8 max-w-2xl mx-auto">
              We can create custom executive briefs, ROI analyses, or implementation 
              roadmaps tailored to your organization's specific needs and challenges.
            </p>
            <CTAButton href="/contact" size="lg" location="resources-custom">
              Request Custom Analysis
            </CTAButton>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

