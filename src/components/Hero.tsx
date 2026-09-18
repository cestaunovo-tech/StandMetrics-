import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Clock,
  Eye,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  BarChart3,
  ArrowRight,
  Activity,
  Sparkles,
} from 'lucide-react';
import smartBoothImg from '../assets/images/smart_booth_analytics_1789147779398.jpg';

export const Hero: React.FC = () => {
  const [viewMode, setViewMode] = useState<'smart' | 'comparison'>('smart');

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F0FDF9]/80 via-white to-white">
      {/* Background glow and geometric grid accents */}
      <div className="absolute top-0 inset-x-0 h-96 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,168,135,0.15),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Pill tag */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#0C3A3B] text-xs font-bold tracking-wide"
            >
              <span className="w-2 h-2 rounded-full bg-[#00A887] animate-pulse" />
              PHYSICAL SPACE INTELLIGENCE PARA FERIAS Y EVENTOS
            </motion.div>

            {/* Main Headline from User Image */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0C3A3B] tracking-tight leading-[1.12]">
                NO CUENTES PERSONAS.{' '}
                <span className="text-[#00A887] block sm:inline">
                  MIDE ATENCIÓN.
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl"
            >
              Descubre cuánto tiempo logras captar la atención de tus visitantes.
              Transforma el simple conteo de pasillo en métricas de{' '}
              <strong className="text-[#0C3A3B] font-semibold">
                permanencia, High Interest y ROI demostrable
              </strong>{' '}
              para tu stand.
            </motion.p>

            {/* Key Value Badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2"
            >
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-xs">
                <Clock className="w-4 h-4 text-[#00A887] shrink-0" />
                <span className="text-xs font-semibold text-slate-800">
                  Dwell Time Real
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-xs">
                <Eye className="w-4 h-4 text-[#00A887] shrink-0" />
                <span className="text-xs font-semibold text-slate-800">
                  High Interest (&gt;45s)
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-xs col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-[#00A887] shrink-0" />
                <span className="text-xs font-semibold text-slate-800">
                  Privacy by Design
                </span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4"
            >
              <a
                href="#contacto"
                className="inline-flex justify-center items-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-[#0C3A3B] hover:bg-[#145E5F] rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>Solicitar Demo & Cotización</span>
                <ArrowRight className="w-4 h-4 text-[#00A887]" />
              </a>
              <a
                href="#metodologia"
                className="inline-flex justify-center items-center gap-2 px-6 py-3.5 text-sm font-bold text-[#0C3A3B] bg-white hover:bg-slate-50 border border-slate-300/80 rounded-xl transition-colors"
              >
                <span>Ver Cómo Funciona</span>
              </a>
            </motion.div>

            {/* Trust Quote / Proof note */}
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-500">
              <div className="flex -space-x-1">
                <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">
                  F
                </div>
                <div className="w-6 h-6 rounded-full bg-[#0C3A3B] text-white flex items-center justify-center font-bold text-[10px]">
                  S
                </div>
                <div className="w-6 h-6 rounded-full bg-[#00A887] text-white flex items-center justify-center font-bold text-[10px]">
                  M
                </div>
              </div>
              <p>
                Diseñado para expositores de ferias, congresos y diseñadores de stands.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Interactive Card Matching Image 2 */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative bg-white rounded-2xl shadow-xl border border-slate-200/90 overflow-hidden"
            >
              {/* Card Header with View Switcher */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-slate-50 border-b border-slate-200/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0C3A3B]">
                    Tecnología StandMetrics en Acción
                  </span>
                </div>
                <div className="flex items-center bg-slate-200/70 p-0.5 rounded-lg text-xs font-semibold">
                  <button
                    onClick={() => setViewMode('smart')}
                    className={`px-3 py-1 rounded-md transition-all ${
                      viewMode === 'smart'
                        ? 'bg-white text-[#0C3A3B] shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Stand Inteligente
                  </button>
                  <button
                    onClick={() => setViewMode('comparison')}
                    className={`px-3 py-1 rounded-md transition-all ${
                      viewMode === 'comparison'
                        ? 'bg-white text-[#0C3A3B] shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Comparación vs Tradicional
                  </button>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-6 bg-radial from-emerald-50/30 via-white to-white">
                {viewMode === 'smart' ? (
                  <div className="space-y-4">
                    {/* Rendered 3D visual preview */}
                    <div className="relative rounded-xl overflow-hidden border border-emerald-100 shadow-inner group">
                      <img
                        src={smartBoothImg}
                        alt="Stand inteligente con sensor y analítica de permanencia"
                        className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />

                      {/* Interactive Floating Metric Badges directly matching image 2 & 4 */}
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg shadow-sm border border-emerald-200 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-xs font-bold text-slate-800">
                          Sensor Activo: Cobertura 100%
                        </span>
                      </div>

                      <div className="absolute top-3 right-3 bg-[#0C3A3B]/90 backdrop-blur-xs text-white px-3 py-1.5 rounded-lg shadow-sm border border-emerald-400/40 flex items-center gap-2">
                        <Eye className="w-3.5 h-3.5 text-[#00A887]" />
                        <span className="text-xs font-bold text-emerald-300">
                          ATENCIÓN: 15s - 58s
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 bg-emerald-950/85 backdrop-blur-xs text-white px-3.5 py-2 rounded-lg shadow-md border border-emerald-500/30">
                        <div className="text-[10px] uppercase font-bold text-emerald-400">
                          Prospecto Cualificado
                        </div>
                        <div className="text-xs font-extrabold flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                          <span>INTERÉS: ALTO (&gt;45s)</span>
                        </div>
                      </div>

                      <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs px-3 py-2 rounded-lg shadow-md border border-slate-200 text-right">
                        <div className="text-[10px] font-semibold text-slate-500">
                          Tráfico vs Captación
                        </div>
                        <div className="text-xs font-bold text-[#0C3A3B]">
                          3.836 pasaron · 373 entraron
                        </div>
                      </div>
                    </div>

                    {/* Quick Live Bar */}
                    <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                      <div className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-100">
                        <div className="text-[10px] uppercase font-bold text-slate-500">
                          Dwell Time Promedio
                        </div>
                        <div className="text-lg font-black text-[#0C3A3B]">
                          2m 45s
                        </div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-teal-50/70 border border-teal-100">
                        <div className="text-[10px] uppercase font-bold text-slate-500">
                          High Interest Rate
                        </div>
                        <div className="text-lg font-black text-[#00A887]">
                          70,0%
                        </div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                        <div className="text-[10px] uppercase font-bold text-slate-500">
                          Ocupación Pico
                        </div>
                        <div className="text-lg font-black text-slate-800">
                          98,5%
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Comparison View directly recreating Image 2 */
                  <div className="grid grid-cols-2 gap-3 py-2">
                    {/* Left: Traditional Counting */}
                    <div className="p-4 rounded-xl bg-slate-100/90 border border-slate-200 text-center space-y-3">
                      <div className="inline-block px-2.5 py-0.5 rounded bg-slate-200 text-slate-600 text-[10px] font-extrabold uppercase">
                        Conteo Tradicional
                      </div>
                      <div className="space-y-1">
                        <p className="text-2xl font-black text-slate-400">16 / 20</p>
                        <p className="text-xs text-slate-500 font-medium">
                          Personas pasaron cerca
                        </p>
                      </div>
                      <div className="text-left text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-200">
                        <div className="text-red-500 font-medium">✕ Sin tiempo de atención</div>
                        <div className="text-red-500 font-medium">✕ Sin distinguir interés</div>
                        <div className="text-red-500 font-medium">✕ Imposible calcular ROI</div>
                      </div>
                    </div>

                    {/* Right: StandMetrics */}
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-center space-y-3 relative overflow-hidden">
                      <div className="inline-block px-2.5 py-0.5 rounded bg-[#00A887] text-white text-[10px] font-extrabold uppercase">
                        StandMetrics Intelligence
                      </div>
                      <div className="space-y-1">
                        <p className="text-2xl font-black text-[#0C3A3B]">
                          Atención: 58s
                        </p>
                        <p className="text-xs font-bold text-[#00A887]">
                          INTERÉS: ALTO
                        </p>
                      </div>
                      <div className="text-left text-xs text-slate-700 space-y-1.5 pt-2 border-t border-emerald-200">
                        <div className="text-emerald-700 font-semibold">✓ Tiempo real en stand</div>
                        <div className="text-emerald-700 font-semibold">✓ Detección de leads reales</div>
                        <div className="text-emerald-700 font-semibold">✓ ROI exacto por visitante</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom footer bar of card */}
              <div className="px-5 py-3 bg-[#0C3A3B] text-white flex items-center justify-between text-xs">
                <span className="font-semibold text-emerald-200">
                  ¿Listo para medir el éxito real de tu próximo evento?
                </span>
                <a
                  href="#contacto"
                  className="font-bold underline text-white hover:text-emerald-300"
                >
                  Consultar fecha →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
