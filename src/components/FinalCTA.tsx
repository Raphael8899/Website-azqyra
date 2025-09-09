export default function FinalCTA() {
  return (
    <section className="py-20 bg-navy-900 text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl lg:text-4xl mb-6">Ready for day-one impact?</h2>
        <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
          Schedule a confidential consultation. We'll identify 2–3 quick-win processes 
          and outline a pilot that delivers measurable results within weeks.
        </p>
        
        <a 
          href="/contact" 
          className="inline-block bg-gold-500 text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-gold-500/90 transition-colors"
        >
          Start a Confidential Consultation
        </a>
        
        <p className="text-sm text-white/70 mt-6">
          We respond within 24 hours. Your information is handled with strict confidentiality.
        </p>
      </div>
    </section>
  );
}