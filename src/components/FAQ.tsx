export default function FAQ() {
  return (
    <section className="py-20">
      <div className="container-custom text-center max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl text-navy-900 mb-16">Frequently asked questions</h2>
        <div className="space-y-8 text-left">
          <div>
            <h3 className="text-lg font-semibold text-navy-900 mb-3">Is this compliant with our legal requirements?</h3>
            <p className="text-slate-500">Yes—governance and auditability are embedded by design. We align with your internal policies and applicable regulations.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-navy-900 mb-3">Where does our data live?</h3>
            <p className="text-slate-500">EU/EEA residency and multiple deployment models, including private cloud/on-prem.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-navy-900 mb-3">How fast can we see value?</h3>
            <p className="text-slate-500">Pilots are designed to show measurable wins within weeks.</p>
          </div>
        </div>
      </div>
    </section>
  );
}