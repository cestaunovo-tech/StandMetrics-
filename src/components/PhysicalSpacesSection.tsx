import React from 'react';
import { motion } from 'motion/react';
import {
  Compass,
  ArrowRight,
  TrendingUp,
  BrainCircuit,
  Store,
  Building2,
  Sparkles,
  Layers,
} from 'lucide-react';
import spacesMapImg from '../assets/images/spaces_intelligence_map_1789147819318.jpg';

export const PhysicalSpacesSection: React.FC = () => {
  const lifecycleSteps = [
    { step: '01', title: 'Medir', desc: 'Captura objetiva de flujos, pasos y segundos en tiempo real.' },
    { step: '02', title: 'Entender', desc: 'Identificación de zonas calientes, puntos de fuga y High Interest.' },
    { step: '03', title: 'Comparar', desc: 'Benchmarking entre días, eventos, ubicaciones y formatos.' },
    { step: '04', title: 'Predecir', desc: 'Anticipación de picos de afluencia y distribución óptima de personal.' },
    { step: '05', title: 'Decidir', desc: 'Inversión informada con retorno de capital demostrado.' },
  ];

  const spaces = [
    { name: 'Stands en Ferias & Congresos', metric: 'ROI por evento y lead cualificado' },
    { name: 'Showrooms Corporativos', metric: 'Tiempo de interacción por producto' },
    { name: 'Pop-Up Stores & Corners', metric: 'Conversión de tráfico a engagement' },
    { name: 'Espacios de Retail Insignia', metric: 'Recorrido y dwell time en tienda' },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header directly matching Image 11 */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            Ecosistema Global
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            EL FUTURO DE LOS ESPACIOS FÍSICOS.
          </h2>
          <div className="text-xl sm:text-2xl font-extrabold text-[#00A887] uppercase tracking-wider">
            PHYSICAL SPACE INTELLIGENCE
          </div>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            La misma analítica de precisión que revoluciona los stands de ferias,
            aplicada a todos tus espacios comerciales y de exhibición.
          </p>
        </div>

        {/* 5-Step Process Bar: Medir -> Entender -> Comparar -> Predecir -> Decidir */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-16">
          {lifecycleSteps.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl bg-slate-800/80 border transition-all ${
                idx === 4
                  ? 'border-emerald-400/80 bg-emerald-950/40 col-span-2 sm:col-span-1'
                  : 'border-slate-700/80'
              }`}
            >
              <div className="text-xs font-black text-emerald-400 mb-1">
                {item.step}
              </div>
              <div className="text-lg font-black text-white mb-1">
                {item.title}
              </div>
              <div className="text-xs text-slate-400 leading-relaxed">
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Image and Spaces Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
            <img
              src={spacesMapImg}
              alt="Ecosistema de inteligencia de espacios físicos StandMetrics"
              className="w-full h-80 sm:h-96 object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Conecta todas tus ubicaciones en una sola plataforma
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Ya sea para una feria de 3 días en Ifema o un showroom permanente en
              el centro de la ciudad, StandMetrics centraliza todas las métricas en
              un panel unificado con alertas, comparativas y reportes automáticos.
            </p>

            <div className="space-y-3 pt-2">
              {spaces.map((sp, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00A887]" />
                    <span className="text-sm font-bold text-white">{sp.name}</span>
                  </div>
                  <span className="text-xs text-emerald-300 font-medium">
                    {sp.metric}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00A887] hover:bg-emerald-400 text-[#061E1F] font-black text-xs transition-colors shadow-lg"
              >
                <span>Consultar Proyecto a Medida</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
