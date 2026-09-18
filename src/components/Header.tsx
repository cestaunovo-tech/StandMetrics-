import React, { useState, useEffect } from 'react';
import { StandMetricsLogo } from './StandMetricsLogo';
import { Menu, X, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Metodología ROI', href: '#metodologia' },
    { name: 'Dashboard Live', href: '#dashboard' },
    { name: 'Calculadora ROI', href: '#calculadora' },
    { name: 'Privacy by Design', href: '#privacidad' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100'
          : 'bg-white/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center group">
            <StandMetricsLogo size="md" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-[#00A887] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#calculadora"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#0C3A3B] bg-emerald-50 hover:bg-emerald-100/80 rounded-lg transition-colors border border-emerald-200/60"
            >
              Simular ROI
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#0C3A3B] hover:bg-[#145E5F] rounded-lg shadow-sm transition-all hover:shadow hover:-translate-y-0.5"
            >
              <span>Solicitar Demo</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#00A887]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#contacto"
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#0C3A3B] rounded-md sm:hidden"
            >
              Demo
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0C3A3B] focus:outline-none"
              aria-label="Alternar menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-slate-200/80 flex flex-col gap-3 bg-white rounded-xl shadow-lg p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-700 hover:text-[#00A887] py-2 border-b border-slate-50"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#calculadora"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-sm font-bold text-[#0C3A3B] bg-emerald-50 rounded-lg"
              >
                Simular ROI de Stand
              </a>
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-sm font-bold text-white bg-[#0C3A3B] hover:bg-[#145E5F] rounded-lg"
              >
                Solicitar Asesoría & Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
