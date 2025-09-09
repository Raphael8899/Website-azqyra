import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white" role="contentinfo">
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-6">
            <Logo className="brightness-0 invert" />
            <p className="text-lg leading-relaxed text-white/90 max-w-md">
              AZQYRA is a discreet AI partner for institutions with responsibility. 
              We build governed automation with measurable ROI from day one.
            </p>
            <div className="text-sm text-white/70">
              Vienna, Austria
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl text-white mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <Link href="/solutions" className="text-white/80 hover:text-white transition-colors">Solutions</Link>
              <Link href="/focus-areas" className="text-white/80 hover:text-white transition-colors">Focus Areas</Link>
              <Link href="/case-studies" className="text-white/80 hover:text-white transition-colors">Case Studies</Link>
              <Link href="/about" className="text-white/80 hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
              <Link href="/privacy" className="text-white/80 hover:text-white transition-colors">Privacy</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <div className="text-sm text-white/70">
            © {currentYear} AZQYRA. All rights reserved. Vienna, Austria.
          </div>
        </div>
      </div>
    </footer>
  );
}