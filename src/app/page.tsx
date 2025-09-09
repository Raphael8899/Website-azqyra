export default function HomePage() {
  return (
    <div>
      {/* Header */}
      <header style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'}}>
        <nav style={{maxWidth: '1200px', margin: '0 auto', padding: '16px 24px'}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <div style={{fontSize: '32px', fontWeight: 'bold', color: '#0A1B3C'}}>AZQYRA</div>
            <div style={{display: 'none', alignItems: 'center', gap: '32px'}} className="lg:flex">
              <a href="/solutions" style={{color: '#0A1B3C', textDecoration: 'none'}}>Solutions</a>
              <a href="/focus-areas" style={{color: '#0A1B3C', textDecoration: 'none'}}>Focus Areas</a>
              <a href="/case-studies" style={{color: '#0A1B3C', textDecoration: 'none'}}>Case Studies</a>
              <a href="/about" style={{color: '#0A1B3C', textDecoration: 'none'}}>About</a>
            </div>
            <a href="/contact" style={{backgroundColor: '#0A1B3C', color: 'white', padding: '8px 24px', borderRadius: '8px', textDecoration: 'none'}}>
              Confidential Consultation
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section style={{backgroundColor: '#0A1B3C', color: 'white', paddingTop: '128px', paddingBottom: '80px'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center'}}>
            <h1 style={{fontSize: '64px', fontWeight: 'bold', marginBottom: '32px', lineHeight: '1.1'}}>
              AI Solutions for Public Institutions & Regulated Industries
            </h1>
            <p style={{fontSize: '24px', marginBottom: '48px', opacity: 0.9, maxWidth: '800px', margin: '0 auto 48px'}}>
              We design and deploy trusted AI systems that cut costs, improve service quality, 
              and accelerate delivery—built for sensitive environments where compliance and 
              reliability matter.
            </p>
            <div style={{display: 'flex', gap: '24px', justifyContent: 'center', marginBottom: '48px', flexWrap: 'wrap'}}>
              <a href="/contact" style={{backgroundColor: '#D4AF37', color: '#0A1B3C', padding: '16px 32px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none'}}>
                Confidential Consultation
              </a>
              <a href="/solutions" style={{border: '2px solid white', color: 'white', padding: '14px 32px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none'}}>
                Explore Our Solutions
              </a>
            </div>
            <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
              <span style={{backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: '20px', fontSize: '14px'}}>Discreet by design</span>
              <span style={{backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: '20px', fontSize: '14px'}}>Rapid pilots</span>
              <span style={{backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: '20px', fontSize: '14px'}}>Production-grade delivery</span>
            </div>
          </div>
        </section>

        {/* Impact Triad */}
        <section style={{padding: '80px 0', backgroundColor: '#f9fafb'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center'}}>
            <h2 style={{fontSize: '48px', fontWeight: 'bold', color: '#0A1B3C', marginBottom: '64px'}}>Impact from day one</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px'}}>
              <div style={{textAlign: 'center'}}>
                <div style={{width: '64px', height: '64px', backgroundColor: '#0A1B3C', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'white', fontSize: '32px'}}>$</div>
                <h3 style={{fontSize: '24px', fontWeight: 'bold', color: '#0A1B3C', marginBottom: '16px'}}>Cut Costs</h3>
                <p style={{color: '#6b7280'}}>Automate high-volume work and reduce operational overhead—often within weeks.</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{width: '64px', height: '64px', backgroundColor: '#0A1B3C', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'white', fontSize: '32px'}}>★</div>
                <h3 style={{fontSize: '24px', fontWeight: 'bold', color: '#0A1B3C', marginBottom: '16px'}}>Enhance Quality</h3>
                <p style={{color: '#6b7280'}}>Consistent, evidence-linked outputs with audit trails and controls.</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{width: '64px', height: '64px', backgroundColor: '#0A1B3C', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'white', fontSize: '32px'}}>⚡</div>
                <h3 style={{fontSize: '24px', fontWeight: 'bold', color: '#0A1B3C', marginBottom: '16px'}}>Accelerate Speed</h3>
                <p style={{color: '#6b7280'}}>Shorter processing times, faster responses, and real-time insights.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section style={{padding: '80px 0', backgroundColor: '#0A1B3C', color: 'white'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center'}}>
            <h2 style={{fontSize: '48px', fontWeight: 'bold', marginBottom: '64px'}}>Trust by design</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px', marginBottom: '48px'}}>
              <div style={{textAlign: 'center'}}>
                <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '12px'}}>Data Protection</h3>
                <p style={{opacity: 0.8, fontSize: '14px'}}>GDPR-aligned; data minimization; encryption in transit & at rest.</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '12px'}}>Data Residency</h3>
                <p style={{opacity: 0.8, fontSize: '14px'}}>EU/EEA residency; cloud/private cloud/on-prem options.</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '12px'}}>Auditability</h3>
                <p style={{opacity: 0.8, fontSize: '14px'}}>Full logging, versioning, traceable decision trails.</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '12px'}}>Human-in-the-Loop</h3>
                <p style={{opacity: 0.8, fontSize: '14px'}}>Configurable approvals for sensitive actions.</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '12px'}}>Model Governance</h3>
                <p style={{opacity: 0.8, fontSize: '14px'}}>Evaluation harnesses, red-team testing, safety guardrails.</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '12px'}}>Ethics</h3>
                <p style={{opacity: 0.8, fontSize: '14px'}}>Escalation paths; bias testing; content/publishing guardrails.</p>
              </div>
            </div>
            <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
              <span style={{backgroundColor: 'rgba(46, 125, 50, 0.2)', color: '#4ade80', border: '1px solid rgba(46, 125, 50, 0.3)', padding: '8px 16px', borderRadius: '20px', fontSize: '14px'}}>Gov-Ready</span>
              <span style={{backgroundColor: 'rgba(46, 125, 50, 0.2)', color: '#4ade80', border: '1px solid rgba(46, 125, 50, 0.3)', padding: '8px 16px', borderRadius: '20px', fontSize: '14px'}}>Audit-Ready</span>
              <span style={{backgroundColor: 'rgba(46, 125, 50, 0.2)', color: '#4ade80', border: '1px solid rgba(46, 125, 50, 0.3)', padding: '8px 16px', borderRadius: '20px', fontSize: '14px'}}>EU Residency</span>
              <span style={{backgroundColor: 'rgba(46, 125, 50, 0.2)', color: '#4ade80', border: '1px solid rgba(46, 125, 50, 0.3)', padding: '8px 16px', borderRadius: '20px', fontSize: '14px'}}>Human-in-the-loop</span>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section style={{padding: '80px 0', backgroundColor: '#0A1B3C', color: 'white'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center'}}>
            <h2 style={{fontSize: '48px', fontWeight: 'bold', marginBottom: '24px'}}>Ready for day-one impact?</h2>
            <p style={{fontSize: '24px', opacity: 0.9, marginBottom: '48px', maxWidth: '800px', margin: '0 auto 48px'}}>
              Schedule a confidential consultation. We'll identify 2–3 quick-win processes 
              and outline a pilot that delivers measurable results within weeks.
            </p>
            <a href="/contact" style={{backgroundColor: '#D4AF37', color: '#0A1B3C', padding: '16px 32px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block'}}>
              Start a Confidential Consultation
            </a>
            <p style={{fontSize: '14px', opacity: 0.7, marginTop: '24px'}}>
              We respond within 24 hours. Your information is handled with strict confidentiality.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{backgroundColor: '#0A1B3C', color: 'white', padding: '64px 0'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px'}}>
            <div>
              <div style={{fontSize: '32px', fontWeight: 'bold', marginBottom: '24px'}}>AZQYRA</div>
              <p style={{fontSize: '18px', opacity: 0.9, maxWidth: '400px', marginBottom: '24px'}}>
                AZQYRA is a discreet AI partner for institutions with responsibility. 
                We build governed automation with measurable ROI from day one.
              </p>
              <div style={{fontSize: '14px', opacity: 0.7}}>Vienna, Austria</div>
            </div>
            <div>
              <h3 style={{fontSize: '20px', marginBottom: '24px'}}>Quick Links</h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px'}}>
                <a href="/solutions" style={{color: 'rgba(255,255,255,0.8)', textDecoration: 'none'}}>Solutions</a>
                <a href="/focus-areas" style={{color: 'rgba(255,255,255,0.8)', textDecoration: 'none'}}>Focus Areas</a>
                <a href="/case-studies" style={{color: 'rgba(255,255,255,0.8)', textDecoration: 'none'}}>Case Studies</a>
                <a href="/about" style={{color: 'rgba(255,255,255,0.8)', textDecoration: 'none'}}>About</a>
                <a href="/contact" style={{color: 'rgba(255,255,255,0.8)', textDecoration: 'none'}}>Contact</a>
                <a href="/privacy" style={{color: 'rgba(255,255,255,0.8)', textDecoration: 'none'}}>Privacy</a>
              </div>
            </div>
          </div>
          <div style={{borderTop: '1px solid rgba(255,255,255,0.2)', marginTop: '48px', paddingTop: '32px', textAlign: 'center'}}>
            <div style={{fontSize: '14px', opacity: 0.7}}>
              © 2025 AZQYRA. All rights reserved. Vienna, Austria.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}