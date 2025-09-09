export default function FocusAreas() {
  return (
    <section className="py-20 bg-off-50">
      <div className="container-custom text-center">
        <h2 className="text-3xl lg:text-4xl text-navy-900 mb-16">Built for sensitive environments</h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="text-left">
            <h3 className="text-xl text-navy-900 mb-2">Public Institutions & State-Adjacent</h3>
            <p className="text-slate-500">Responsible automation for administration and citizen services—transparent, auditable, policy-aligned.</p>
          </div>
          <div className="text-left">
            <h3 className="text-xl text-navy-900 mb-2">Critical Services & Infrastructure</h3>
            <p className="text-slate-500">Operational resilience with real-time insights, prioritized workflows, and human-in-the-loop control.</p>
          </div>
          <div className="text-left">
            <h3 className="text-xl text-navy-900 mb-2">Regulated Industries & Media</h3>
            <p className="text-slate-500">Automate complex processes without compromising compliance, brand safety, or editorial standards.</p>
          </div>
        </div>
        <div className="mt-8">
          <a href="/focus-areas" className="text-blue-700 hover:text-navy-900 font-medium">View focus areas →</a>
        </div>
      </div>
    </section>
  );
}