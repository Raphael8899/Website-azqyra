"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import CTAButton from "./CTAButton";
import { mainNavItems } from "@/content/nav";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActivePath = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container-custom py-4" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo priority className="z-50" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative py-2 text-sm font-medium transition-colors duration-200 hover:text-blue-700",
                  isActivePath(item.href)
                    ? "text-navy-900"
                    : "text-ink-800",
                  "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gold-500 after:transition-all after:duration-200",
                  isActivePath(item.href)
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <CTAButton href="/contact" location="header">
              Confidential Consultation
            </CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-navy-900 hover:text-blue-700 transition-colors z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-500/20 shadow-lg transition-all duration-200",
            isMobileMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          )}
        >
          <div className="container-custom py-6 space-y-4">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block py-3 text-lg font-medium transition-colors duration-200 border-b border-slate-500/10 last:border-b-0",
                  isActivePath(item.href)
                    ? "text-navy-900"
                    : "text-ink-800 hover:text-blue-700"
                )}
              >
                {item.label}
                {item.description && (
                  <span className="block text-sm text-slate-500 mt-1">
                    {item.description}
                  </span>
                )}
              </Link>
            ))}
            <div className="pt-4">
              <CTAButton href="/contact" location="mobile-header" className="w-full">
                Confidential Consultation
              </CTAButton>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}