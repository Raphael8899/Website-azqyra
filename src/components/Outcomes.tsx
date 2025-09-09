export default function Outcomes() {
  return (
    <section className="py-20 bg-off-50">
      <div className="container-custom text-center">
        <h2 className="text-3xl lg:text-4xl text-navy-900 mb-16">Measurable results</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-navy-900 mb-2">days → minutes</div>
            <div className="text-sm text-slate-500">Citizen response time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-navy-900 mb-2">automated</div>
            <div className="text-sm text-slate-500">Operational savings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-navy-900 mb-2">weeks → hours</div>
            <div className="text-sm text-slate-500">Policy turnarounds</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-navy-900 mb-2">same-day</div>
            <div className="text-sm text-slate-500">Communications efficiency</div>
          </div>
        </div>
      </div>
    </section>
  );
}