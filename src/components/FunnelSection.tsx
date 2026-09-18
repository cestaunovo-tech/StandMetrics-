import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Users,
  Eye,
  Clock,
  MessageSquare,
  Sparkles,
  TrendingUp,
  ArrowDown,
  Info,
  CheckCircle,
} from 'lucide-react';

export const FunnelSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(4); // default on High Interest

  const funnelStages = [
    {
      id: 1,
      name: 'TRÁFICO',
      tagline: 'Asistentes en el pasillo exterior',
      metric: '3.836 personas',
      percentage: '100%',
      icon: Users,
      color: 'from-slate-700 to-slate-800',
      border: 'border-slate-300',
      description:
        'Conteo volumétrico de personas que transitan frente a tu stand en el pabellón de la feria.',
      impact:
        'Determina la visibilidad de tu ubicación en la feria y el potencial total de atracción de tu fachada.',
    },
    {
      id: 2,
      name: 'CAPTACIÓN',
      tagline: 'Frenan el paso y cruzan el umbral',
      metric: '373 visitantes',
      percentage: '9,7% Capture Rate',
      icon: Eye,
      color: 'from-teal-800 to-teal-900',
      border: 'border-teal-400',
      description:
        'Visitantes que deciden frenar su camino, mirar activamente tus displays o entrar a tu espacio.',
      impact:
        'Evalúa la efectividad del diseño exterior de tu stand, llamadas visuales y atractivo inicial.',
    },
    {
      id: 3,
      name: 'PERMANENCIA',
      tagline: 'Dwell Time: tiempo que se quedan dentro',
      metric: '2m 45s promedio',
      percentage: 'Zonas calientes',
      icon: Clock,
      color: 'from-[#0C3A3B] to-[#104C4E]',
      border: 'border-[#00A887]',
      description:
        'Medición segundo a segundo del tiempo de estancia en cada zona del stand (mostradores, pantallas, mesas).',
      impact:
        'Distingue a quien solo cruzó de paso (3s) de quien exploró a fondo tus productos.',
    },
    {
      id: 4,
      name: 'ENGAGEMENT',
      tagline: 'Interacción con equipo y contenidos',
      metric: '1.385 interacciones',
      percentage: '3,7 por visitante',
      icon: MessageSquare,
      color: 'from-[#114C4E] to-[#166163]',
      border: 'border-[#14C6A3]',
      description:
        'Conversaciones mantenidas con el equipo comercial, uso de pantallas interactivas o manipulación de muestras.',
      impact:
        'Permite medir la productividad de tus comerciales y la efectividad de las actividades del stand.',
    },
    {
      id: 5,
      name: 'HIGH INTEREST',
      tagline: 'Visitantes altamente comprometidos (>45s)',
      metric: '261 prospectos clave',
      percentage: '70,0% cualificados',
      icon: Sparkles,
      color: 'from-[#008F73] to-[#00A887]',
      border: 'border-emerald-300',
      description:
        'Asistentes que pasan el umbral crítico de atención focalizada y demuestran una intención comercial real.',
      impact:
        'El dato más valioso para tu fuerza de ventas: prospectos calientes para seguimiento prioritario post-evento.',
    },
    {
      id: 6,
      name: 'ROI',
      tagline: 'Retorno real sobre la inversión',
      metric: 'Coste por Lead Cualificado',
      percentage: 'Retorno medible',
      icon: TrendingUp,
      color: 'from-[#00A887] to-emerald-500',
      border: 'border-emerald-400',
      description:
        'Cálculo exacto del coste por visitante comprometido vs. la inversión total de diseño, espacio y personal.',
      impact:
        'Justifica ante dirección general el presupuesto ferial y optimiza la inversión de próximas ferias.',
    },
  ];

  return (
    <section id="metodologia" className="py-20 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header directly matching Image 3 */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0C3A3B] text-xs font-bold uppercase tracking-wider">
            Metodología Exclusiva
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0C3A3B] tracking-tight">
            DEL TRÁFICO AL <span className="text-[#00A887]">ENGAGEMENT.</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Medimos qué ocurre realmente dentro de tu stand. Descubre el embudo
            completo desde que un asistente pasa por tu pasillo hasta que se convierte
            en una oportunidad de negocio cuantificable.
          </p>
        </div>

        {/* Funnel Layout: Interactive Funnel Visualization + Stage Deep Dive */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Funnel Visual Stack */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="w-full max-w-lg space-y-2.5">
              {funnelStages.map((stage, idx) => {
                const IconComponent = stage.icon;
                const isSelected = activeStage === stage.id;
                // progressive width for funnel shape
                const widths = [
                  'w-[100%]',
                  'w-[90%]',
                  'w-[80%]',
                  'w-[70%]',
                  'w-[60%]',
                  'w-[50%]',
                ];

                return (
                  <div
                    key={stage.id}
                    onClick={() => setActiveStage(stage.id)}
                    className="flex justify-center cursor-pointer group transition-all"
                  >
                    <div
                      className={`relative ${widths[idx]} transition-all duration-300 transform ${
                        isSelected
                          ? 'scale-[1.03] shadow-md ring-2 ring-[#00A887] ring-offset-2'
                          : 'hover:scale-[1.01] opacity-90 hover:opacity-100'
                      }`}
                    >
                      <div
                        className={`p-3.5 sm:p-4 rounded-xl text-white bg-gradient-to-r ${stage.color} flex items-center justify-between shadow-sm`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                            <IconComponent className="w-4 h-4 text-white" />
                          </div>
                          <div className="text-left">
                            <div className="text-xs font-black tracking-wider uppercase flex items-center gap-1.5">
                              <span>{stage.name}</span>
                              {stage.name === 'HIGH INTEREST' && (
                                <span className="px-1.5 py-0.2 bg-white text-[#0C3A3B] rounded text-[9px] font-extrabold">
                                  CLAVE
                                </span>
                              )}
                            </div>
                            <div className="text-[11px] text-emerald-100/90 font-medium hidden sm:block">
                              {stage.tagline}
                            </div>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <div className="text-sm font-extrabold text-white">
                            {stage.metric}
                          </div>
                          <div className="text-[10px] text-emerald-200/90 font-medium">
                            {stage.percentage}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Hint below funnel */}
            <p className="text-xs text-slate-400 mt-4 text-center">
              Haz clic en cada nivel para conocer cómo lo medimos y qué valor aporta a tu marca.
            </p>
          </div>

          {/* Right Column: Stage Detail Box */}
          <div className="lg:col-span-5">
            {funnelStages
              .filter((s) => s.id === activeStage)
              .map((stage) => {
                const Icon = stage.icon;
                return (
                  <motion.div
                    key={stage.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50/40 border border-slate-200/90 shadow-lg space-y-6"
                  >
                    <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-[#0C3A3B] text-white flex items-center justify-center shadow-sm">
                          <Icon className="w-6 h-6 text-[#00A887]" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                            Paso 0{stage.id} del Embudo
                          </div>
                          <h3 className="text-2xl font-black text-[#0C3A3B]">
                            {stage.name}
                          </h3>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-[#0C3A3B] text-xs font-bold">
                        {stage.percentage}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                          ¿Qué medimos aquí?
                        </h4>
                        <p className="text-slate-700 text-sm leading-relaxed">
                          {stage.description}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-white border border-emerald-200/70 shadow-2xs">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#0C3A3B] flex items-center gap-1.5 mb-1.5">
                          <CheckCircle className="w-4 h-4 text-[#00A887]" />
                          <span>Impacto en tus decisiones</span>
                        </h4>
                        <p className="text-slate-600 text-xs leading-relaxed">
                          {stage.impact}
                        </p>
                      </div>

                      <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
                        <span>Tecnología: Sensores Ópticos Anónimos</span>
                        <a
                          href="#contacto"
                          className="font-bold text-[#00A887] hover:underline"
                        >
                          Medir en mi stand →
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};
