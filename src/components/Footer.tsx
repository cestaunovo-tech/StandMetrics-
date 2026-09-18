import React from 'react';
import { StandMetricsLogo } from './StandMetricsLogo';
import { ShieldCheck, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#061E1F] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <StandMetricsLogo size="lg" variant="white" />
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed pt-2">
              Plataforma líder de Physical Space Intelligence para ferias,
              congresos, showrooms y retail. Medición de atención, permanencia y
              el verdadero retorno de inversión de tu stand con arquitectura
              Privacy by Design.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Conforme con RGPD / GDPR de la Unión Europea</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#servicios"
                  className="hover:text-white transition-colors"
                >
                  Servicios de Medición
                </a>
              </li>
              <li>
                <a
                  href="#metodologia"
                  className="hover:text-white transition-colors"
                >
                  Del Tráfico al Engagement (Funnel)
                </a>
              </li>
              <li>
                <a
                  href="#dashboard"
                  className="hover:text-white transition-colors"
                >
                  Dashboard Live en Tiempo Real
                </a>
              </li>
              <li>
                <a
                  href="#calculadora"
                  className="hover:text-white transition-colors"
                >
                  Calculadora de ROI de Stand
                </a>
              </li>
              <li>
                <a
                  href="#privacidad"
                  className="hover:text-white transition-colors"
                >
                  Seguridad & Privacy by Design
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Soluciones */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Contacto & Soporte Ferial
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00A887] shrink-0" />
                <a
                  href="mailto:cestaunovo@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  cestaunovo@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#00A887] shrink-0" />
                <a
                  href="tel:+56951942366"
                  className="hover:text-white transition-colors"
                >
                  +56 9 5194 2366
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00A887] shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  Martin Alonso Pinzón 4956, Las Condes
                </span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00A887] text-[#061E1F] font-bold text-xs hover:bg-emerald-300 transition-colors"
              >
                Solicitar Cotización Inmediata
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} StandMetrics. Todos los derechos
            reservados. Análisis y ROI de Stands.
          </p>
          <div className="flex items-center gap-6">
            <a href="#privacidad" className="hover:text-slate-400 transition-colors">
              Política de Privacidad
            </a>
            <a href="#privacidad" className="hover:text-slate-400 transition-colors">
              Aviso Legal
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-400 transition-colors"
              title="Volver arriba"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
