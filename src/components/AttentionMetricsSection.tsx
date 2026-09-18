import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Clock,
  UserCheck,
  Flame,
  MousePointerClick,
  Target,
  ArrowRight,
  ShieldCheck,
  BarChart,
  Layers,
} from 'lucide-react';

export const AttentionMetricsSection: React.FC = () => {
  const [selectedVisitorType, setSelectedVisitorType] = useState<number>(2); // High interest default

  const visitorTiers = [
    {
      id: 0,
      time: '03s - 05s',
      name: 'Paso Rápido / Transeúnte',
      badge: 'Bajo Interés',
      badgeColor: 'bg-slate-100 text-slate-600',
      percentage: '35% del total',
      behavior: 'Persona que pasa frente al stand o hace un cruce rápido sin detenerse.',
      actionable:
        'Indica el flujo periférico del pasillo. Ayuda a valorar si los elementos colgantes o carteles captan la atención visual inicial.',
    },
    {
      id: 1,
      time: '15s - 25s',
      name: 'Visitante Explorador',
      badge: 'Interés Medio',
      badgeColor: 'bg-teal-50 text-teal-700 border border-teal-200',
      percentage: '40% del total',
      behavior: 'Se detiene en la entrada, toma un folleto o mira una pantalla desde el perímetro.',
      actionable:
        'Candidato perfecto para que el equipo comercial inicie un saludo o invitación a conocer el producto principal.',
    },
    {
      id: 2,
      time: '45s - 58s+',
      name: 'High Interest Prospect',
      badge: 'ALTO INTERÉS',
      badgeColor: 'bg-emerald-500 text-white font-extrabold',
      percentage: '25% de alto valor',
      behavior:
        'Interactúa con una demo interactiva, conversa activamente con un comercial o prueba el producto en exhibición.',
      actionable:
        '¡Tu ROI real! Prospecto con alta intención de compra. Prioridad máxima para captura de datos y seguimiento comercial post-feria.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual representation of Dwell Time zones */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/70 border border-teal-200 text-[#0C3A3B] text-xs font-bold uppercase tracking-wider">
              Detección de Compromiso
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C3A3B] tracking-tight">
              ¿CUÁNTO TIEMPO PERMANECEN?
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              El tiempo de permanencia (<span className="italic font-semibold text-[#0C3A3B]">Dwell Time</span>)
              revela mucho más que un simple conteo. Detecta con precisión milimétrica cuándo
              un visitante realmente está comprometido con tu espacio.
            </p>

            {/* Interactive Selector of Visitor Depth */}
            <div className="space-y-3 pt-2">
              {visitorTiers.map((tier) => {
                const isSelected = selectedVisitorType === tier.id;
                return (
                  <div
                    key={tier.id}
                    onClick={() => setSelectedVisitorType(tier.id)}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-200 border ${
                      isSelected
                        ? 'bg-white border-[#00A887] shadow-md ring-2 ring-emerald-500/20'
                        : 'bg-white/70 border-slate-200/80 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center font-black text-xs ${
                            isSelected
                              ? 'bg-[#0C3A3B] text-emerald-300'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {tier.time.split(' ')[0]}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-[#0C3A3B]">
                            {tier.name}
                          </div>
                          <div className="text-xs text-slate-500">
                            {tier.behavior}
                          </div>
                        </div>
                      </div>
                      <span
                        className={`text-[10px] uppercase px-2.5 py-1 rounded-md font-bold shrink-0 ${tier.badgeColor}`}
                      >
                        {tier.badge}
                      </span>
                    </div>

                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 flex items-start gap-2"
                      >
                        <Target className="w-4 h-4 text-[#00A887] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#0C3A3B]">Qué hacer:</strong>{' '}
                          {tier.actionable}
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Architectural Zones Visual Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#00A887]" />
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Mapa de Zonas de Interés en Stand (32 m²)
                  </span>
                </div>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                  En Vivo
                </span>
              </div>

              {/* Stand Blueprint Layout Grid Simulation matching Image 4 */}
              <div className="relative bg-slate-900 rounded-xl p-5 text-white overflow-hidden shadow-inner">
                {/* Ceiling Sensor Spotlight */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-48 h-48 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

                <div className="relative grid grid-cols-2 gap-3 z-10">
                  {/* Zone A: Kiosk */}
                  <div className="p-3.5 rounded-lg bg-slate-800/80 border border-emerald-500/40 relative">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-emerald-300">
                        ZONA DEMO / KIOSCO
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-emerald-500 text-black text-[9px] font-black">
                        HOT ZONE
                      </span>
                    </div>
                    <div className="mt-2 text-2xl font-black text-white">58s</div>
                    <div className="text-[10px] text-slate-400">
                      High Interest · 142 visitantes hoy
                    </div>
                  </div>

                  {/* Zone B: Mostrador Principal */}
                  <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-300">
                        MOSTRADOR RECEPCIÓN
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-slate-700 text-slate-300 text-[9px] font-bold">
                        REGULAR
                      </span>
                    </div>
                    <div className="mt-2 text-2xl font-black text-white">27s</div>
                    <div className="text-[10px] text-slate-400">
                      Exploración · 284 visitantes
                    </div>
                  </div>

                  {/* Zone C: Pasillo Perimetral */}
                  <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-300">
                        UMBRAL PASILLO
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-slate-700 text-slate-300 text-[9px] font-bold">
                        PASO
                      </span>
                    </div>
                    <div className="mt-2 text-2xl font-black text-white">08s</div>
                    <div className="text-[10px] text-slate-400">
                      Transeúntes captados: 1.120
                    </div>
                  </div>

                  {/* Zone D: Lounge Reuniones */}
                  <div className="p-3.5 rounded-lg bg-slate-800/80 border border-teal-500/40">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-teal-300">
                        SALA REUNIONES / VIP
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-teal-500/30 text-teal-300 text-[9px] font-bold">
                        NEGOCIACIÓN
                      </span>
                    </div>
                    <div className="mt-2 text-2xl font-black text-white">12m 40s</div>
                    <div className="text-[10px] text-slate-400">
                      Reuniones comerciales cerradas: 18
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Sensor Sensor-Ceiling-01</span>
                  <span className="text-emerald-400 font-semibold">
                    Resolución temporal: 100ms
                  </span>
                </div>
              </div>

              {/* Bottom Key takeaway */}
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 flex items-start gap-3">
                <Flame className="w-5 h-5 text-[#00A887] shrink-0 mt-0.5" />
                <p className="text-xs text-[#0C3A3B] leading-relaxed">
                  <strong>Regla de oro de StandMetrics:</strong> Los visitantes que pasan
                  más de 45 segundos en tu stand tienen un{' '}
                  <span className="font-bold underline text-emerald-800">
                    400% más de probabilidad
                  </span>{' '}
                  de formalizar una reunión comercial post-evento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
