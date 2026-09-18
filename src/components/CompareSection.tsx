import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  GitCompare,
  TrendingUp,
  ArrowUp,
  ArrowDown,
  CheckCircle2,
  Sparkles,
  Layers,
} from 'lucide-react';

export const CompareSection: React.FC = () => {
  const [comparisonMode, setComparisonMode] = useState<'design' | 'fair'>('design');

  const designComparison = {
    standA: {
      name: 'Stand A · Diseño Abierto + Demos',
      size: '32 m²',
      traffic: '3.836 pax',
      captureRate: '12,4%',
      dwellTime: '3m 12s',
      engagement: '1.385',
      highInterest: '70,0%',
      cpe: '24,50 €',
      highlight: 'Óptimo para captación dinámica',
    },
    standB: {
      name: 'Stand B · Diseño Cerrado Clásico',
      size: '32 m²',
      traffic: '3.710 pax',
      captureRate: '7,1%',
      dwellTime: '1m 20s',
      engagement: '640',
      highInterest: '48,2%',
      cpe: '52,10 €',
      highlight: 'Barrera visual de entrada',
    },
  };

  const metrics = [
    { label: 'Tráfico de Pasillo', a: '3.836', b: '3.710', diff: '+3,4%', win: 'A' },
    { label: 'Capture Rate (% Entrada)', a: '12,4%', b: '7,1%', diff: '+74,6%', win: 'A' },
    { label: 'Dwell Time Promedio', a: '3m 12s', b: '1m 20s', diff: '+140%', win: 'A' },
    { label: 'Interacciones Totales', a: '1.385', b: '640', diff: '+116%', win: 'A' },
    { label: 'High Interest (>45s)', a: '70,0%', b: '48,2%', diff: '+45,2%', win: 'A' },
    { label: 'Coste por Lead Cualificado', a: '24,50 €', b: '52,10 €', diff: '-53% (Ahorro)', win: 'A' },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header directly matching Image 8 */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0C3A3B] text-xs font-bold uppercase tracking-wider">
            Inteligencia Competitiva
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0C3A3B] tracking-tight">
            COMPARA. APRENDE. <span className="text-[#00A887]">MEJORA.</span>
          </h2>
          <p className="text-lg text-slate-600">
            Compara el desempeño de tus stands, diferentes días de feria y eventos
            anuales para tomar decisiones de inversión 100% basadas en datos.
          </p>
        </div>

        {/* Comparison Board */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          {/* Header Row of Table */}
          <div className="grid grid-cols-12 gap-3 pb-4 border-b border-slate-200 text-xs font-bold uppercase text-slate-500">
            <div className="col-span-4 sm:col-span-5 text-slate-700">
              Métrica Clave
            </div>
            <div className="col-span-4 sm:col-span-3 text-center text-[#0C3A3B] font-extrabold">
              <span className="hidden sm:inline">Stand A · </span>Abierto (Demos)
            </div>
            <div className="col-span-4 sm:col-span-3 text-center text-slate-600">
              <span className="hidden sm:inline">Stand B · </span>Cerrado Clásico
            </div>
            <div className="hidden sm:block sm:col-span-1 text-right text-emerald-700 font-extrabold">
              Impacto
            </div>
          </div>

          {/* Metric Rows */}
          <div className="divide-y divide-slate-200/70">
            {metrics.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 gap-3 py-4 items-center hover:bg-white/80 px-2 rounded-lg transition-colors"
              >
                <div className="col-span-4 sm:col-span-5 font-semibold text-slate-800 text-xs sm:text-sm">
                  {row.label}
                </div>
                <div className="col-span-4 sm:col-span-3 text-center">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-50 text-[#0C3A3B] border border-emerald-200 font-extrabold text-xs sm:text-sm">
                    {row.a}
                  </span>
                </div>
                <div className="col-span-4 sm:col-span-3 text-center font-medium text-slate-500 text-xs sm:text-sm">
                  {row.b}
                </div>
                <div className="hidden sm:flex sm:col-span-1 justify-end items-center text-xs font-bold text-emerald-600">
                  <span className="flex items-center gap-0.5">
                    <ArrowUp className="w-3.5 h-3.5" />
                    {row.diff}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Insights Box */}
          <div className="mt-8 p-4 sm:p-5 rounded-xl bg-white border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#00A887] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#0C3A3B]">
                  Conclusión del Benchmarking:
                </h4>
                <p className="text-xs text-slate-600">
                  Los stands con fachada permeable y punto interactivo reducen el
                  coste por lead a la mitad y duplican la retención de visitantes de
                  alto interés comercial.
                </p>
              </div>
            </div>

            <a
              href="#calculadora"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-[#0C3A3B] bg-emerald-50 hover:bg-emerald-100 transition-colors border border-emerald-200 shrink-0"
            >
              <span>Calcular mi ROI</span>
              <TrendingUp className="w-3.5 h-3.5 text-[#00A887]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
