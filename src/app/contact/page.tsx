import { NextSeo } from "next-seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import Card from "@/components/Card";
import { MapPin, Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Contact Us - Confidential Consultation",
  description: "Schedule a confidential consultation to discuss your AI automation needs. We respond within 24 hours with strict confidentiality.",
};

export default function ContactPage() {
  return (
    <>
      <NextSeo
        title="Contact Us - Confidential Consultation"
        description="Schedule a confidential consultation to discuss your AI automation needs. We respond within 24 hours with strict confidentiality."
        canonical="https://azqyra.com/contact"
      />
      <Header />
      <main id="main-content" className="pt-24">
        <Section padding="large" maxWidth="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="heading text-4xl lg:text-5xl text-navy-900 mb-6">
                Start your confidential consultation
              </h1>
              <p className="text-xl text-slate-500 max-w-3xl mx-auto">
                We'll identify 2–3 quick-win processes and outline a pilot that delivers 
                measurable results within weeks. All discussions are handled with strict 
                confidentiality.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card title="Get in touch" padding="large">
                  <ContactForm />
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card padding="large">
                  <h3 className="heading-2 text-lg text-navy-900 mb-6">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-navy-900/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-navy-900" />
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900 mb-1">
                          Headquarters
                        </h4>
                        <p className="text-slate-500 text-sm">
                          Vienna, Austria
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-navy-900/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-navy-900" />
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900 mb-1">
                          Email
                        </h4>
                        <p className="text-slate-500 text-sm">
                          hello@azqyra.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-navy-900/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-navy-900" />
                      </div>
                      <div>
                        <h4 className="font-medium text-navy-900 mb-1">
                          Phone
                        </h4>
                        <p className="text-slate-500 text-sm">
                          +43 1 XXX XXXX
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card padding="large">
                  <h3 className="heading-2 text-lg text-navy-900 mb-4">
                    Response Time
                  </h3>
                  <p className="text-slate-500 text-sm mb-4">
                    We respond to all inquiries within 24 hours during business days. 
                    For urgent matters, please mention it in your message.
                  </p>
                  <div className="text-xs text-slate-500">
                    Business hours: Monday-Friday, 9:00-17:00 CET
                  </div>
                </Card>

                {/* TODO: Add calendar booking integration */}
                {/* 
                <Card padding="large">
                  <h3 className="heading-2 text-lg text-navy-900 mb-4">
                    Book a Call
                  </h3>
                  <p className="text-slate-500 text-sm mb-4">
                    Prefer to schedule a call directly? Book a 30-minute consultation.
                  </p>
                  <Button variant="outline" className="w-full">
                    Schedule Call
                  </Button>
                </Card>
                */}
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

