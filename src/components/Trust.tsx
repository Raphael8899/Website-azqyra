export default function Trust() {
  return (
    <section className="py-20 bg-navy-900 text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl lg:text-4xl mb-16">Trust by design</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-lg mb-3">Data Protection</h3>
            <p className="text-white/80 text-sm">GDPR-aligned; data minimization; encryption in transit & at rest.</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg mb-3">Data Residency</h3>
            <p className="text-white/80 text-sm">EU/EEA residency; cloud/private cloud/on-prem options.</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg mb-3">Auditability</h3>
            <p className="text-white/80 text-sm">Full logging, versioning, traceable decision trails.</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg mb-3">Human-in-the-Loop</h3>
            <p className="text-white/80 text-sm">Configurable approvals for sensitive actions.</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg mb-3">Model Governance</h3>
            <p className="text-white/80 text-sm">Evaluation harnesses, red-team testing, safety guardrails.</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg mb-3">Ethics</h3>
            <p className="text-white/80 text-sm">Escalation paths; bias testing; content/publishing guardrails.</p>
          </div>
        </div>
      </div>
    </section>
  );
}