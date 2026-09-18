import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  DollarSign,
  TrendingUp,
  Target,
  Clock,
  Sparkles,
  ArrowRight,
  Calculator,
  HelpCircle,
} from 'lucide-react';

export const RoiCalculator: React.FC = () => {
  const [budget, setBudget] = useState<number>(18000);
  const [days, setDays] = useState<number>(3);
  const [area, setArea] = useState<number>(36);

  // Dynamic calculations based on real exhibition metrics
  const estimatedTraffic = Math.round(area * 95 * days);
  const captureRate = 0.1; // ~10%
  const estimatedVisitors = Math.round(estimatedTraffic * captureRate);
  const highInterestRate = 0.28; // ~28% high interest >45s
  const qualifiedLeads = Math.round(estimatedVisitors * highInterestRate);
  const costPerEngagedVisitor = (budget / (qualifiedLeads || 1)).toFixed(2);
  const costPerAllVisitor = (budget / (estimatedVisitors || 1)).toFixed(2);

  return (
    <section id="calculadora" className="py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header directly matching Image 6 */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0C3A3B] text-xs font-bold uppercase tracking-wider">
            Simulador Interactivo
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0C3A3B] tracking-tight">
            TU STAND TIENE UN <span className="text-[#00A887]">ROI.</span>
          </h2>
          <p className="text-lg text-slate-600">
            Conecta inversión, tráfico, engagement y resultados. Simula el coste
            real por visitante cualificado de tu próximo evento.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-7">
            <h3 className="text-lg font-bold text-[#0C3A3B] flex items-center gap-2 pb-3 border-b border-slate-100">
              <Calculator className="w-5 h-5 text-[#00A887]" />
              <span>Parámetros de tu Próximo Stand</span>
            </h3>

            {/* Slider 1: Total Budget */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-baseline">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Inversión Total del Stand (€)
                </label>
                <span className="text-xl font-black text-[#0C3A3B]">
                  {budget.toLocaleString('es-ES')} €
                </span>
              </div>
              <input
                type="range"
                min="3000"
                max="80000"
                step="1000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full accent-[#00A887] cursor-pointer h-2 bg-slate-100 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                <span>3.000 € (Modular)</span>
                <span>40.000 €</span>
                <span>80.000 €+ (Gran Diseño)</span>
              </div>
            </div>

            {/* Slider 2: Stand Size */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-baseline">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Superficie del Stand (m²)
                </label>
                <span className="text-xl font-black text-[#0C3A3B]">
                  {area} m²
                </span>
              </div>
              <input
                type="range"
                min="9"
                max="150"
                step="3"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full accent-[#00A887] cursor-pointer h-2 bg-slate-100 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                <span>9 m² (Básico)</span>
                <span>60 m² (Medio)</span>
                <span>150 m² (Isla)</span>
              </div>
            </div>

            {/* Slider 3: Fair Duration */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-baseline">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Duración de la Feria (Días)
                </label>
                <span className="text-xl font-black text-[#0C3A3B]">
                  {days} {days === 1 ? 'día' : 'días'}
                </span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((d) => (
                  <button
                    key={d}
                    onClick={() => setDays(d)}
                    className={`py-2 rounded-lg font-bold text-xs transition-all ${
                      days === d
                        ? 'bg-[#0C3A3B] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {d} {d === 1 ? 'día' : 'días'}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-400 pt-2 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 shrink-0" />
              <span>
                Cálculo basado en benchmarks de más de 120 stands sensorizados en ferias sectoriales.
              </span>
            </p>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#0C3A3B] via-[#0A2D2E] to-[#061E1F] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-emerald-500/20">
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-300">
                  Proyección de Retorno & Eficiencia
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                  StandMetrics Model
                </span>
              </div>

              {/* Main Metric Hero */}
              <div className="p-5 rounded-xl bg-white/5 border border-emerald-400/20 space-y-1">
                <div className="text-xs font-semibold text-emerald-200">
                  Coste por Prospecto Cualificado (High Interest &gt;45s)
                </div>
                <div className="text-4xl sm:text-5xl font-black text-emerald-400 flex items-baseline gap-2">
                  <span>{costPerEngagedVisitor} €</span>
                  <span className="text-sm font-bold text-emerald-200/80">/ lead</span>
                </div>
                <p className="text-xs text-slate-300 pt-1">
                  Frente a los {costPerAllVisitor} € por visitante general no filtrado.
                </p>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-2 gap-3 text-left">
                <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-[10px] uppercase font-bold text-slate-300">
                    Tráfico Total Pasillo
                  </div>
                  <div className="text-xl font-bold text-white">
                    {estimatedTraffic.toLocaleString('es-ES')}
                  </div>
                  <div className="text-[10px] text-emerald-300">Transeúntes estimados</div>
                </div>

                <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-[10px] uppercase font-bold text-slate-300">
                    Visitantes Entrantes
                  </div>
                  <div className="text-xl font-bold text-white">
                    {estimatedVisitors.toLocaleString('es-ES')}
                  </div>
                  <div className="text-[10px] text-emerald-300">10% Capture Rate</div>
                </div>

                <div className="p-3.5 rounded-lg bg-emerald-950/70 border border-emerald-500/40 col-span-2">
                  <div className="text-[10px] uppercase font-bold text-emerald-300 flex items-center justify-between">
                    <span>Prospectos de Alto Interés</span>
                    <span className="font-extrabold text-white">High Interest</span>
                  </div>
                  <div className="text-2xl font-black text-emerald-300">
                    ~ {qualifiedLeads.toLocaleString('es-ES')} visitantes
                  </div>
                  <div className="text-[10px] text-emerald-100/80">
                    Permanecen más de 45 segundos explorando tus soluciones
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="pt-6 border-t border-white/10">
              <a
                href="#contacto"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-sm text-[#0C3A3B] bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-md"
              >
                <span>Auditar mi Stand con StandMetrics</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
