import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Smartphone,
  Laptop,
  TrendingUp,
  Clock,
  Users,
  Eye,
  Activity,
  Calendar,
  Layers,
  ArrowUpRight,
  Info,
} from 'lucide-react';
import dashboardMockupImg from '../assets/images/dashboard_device_mockup_1789147801606.jpg';

export const DashboardPreviewSection: React.FC = () => {
  const [activeDay, setActiveDay] = useState<'dia1' | 'dia2' | 'dia3'>('dia2');
  const [selectedPeak, setSelectedPeak] = useState<number>(2); // Peak 2 (13:30h) default

  // Data sets matching the user's uploaded dashboard images exactly!
  const dayData = {
    dia1: {
      trafico: '3.120',
      visitantes: '310',
      engagement: '1.140',
      highInterest: '64,5%',
      occupancy: '89,0%',
      picoMax: '13:00h (390 pax/h)',
    },
    dia2: {
      trafico: '3.836',
      visitantes: '373',
      engagement: '1.385',
      highInterest: '70,0%',
      occupancy: '98,5%',
      picoMax: '13:30h (480 pax/h)',
    },
    dia3: {
      trafico: '2.940',
      visitantes: '285',
      engagement: '980',
      highInterest: '68,2%',
      occupancy: '82,4%',
      picoMax: '12:15h (340 pax/h)',
    },
  };

  const current = dayData[activeDay];

  const peaks = [
    {
      id: 1,
      name: 'PICO HORA 1',
      time: '11:00h - 12:00h',
      rate: '340 personas / h',
      reason: 'Apertura de conferencias principales y entrada masiva al pabellón.',
      action: 'Tener a todos los comerciales en posición activa y pantallas encendidas.',
    },
    {
      id: 2,
      name: 'PICO HORA 2',
      time: '13:00h - 14:30h',
      rate: '480 personas / h (MÁXIMO)',
      reason: 'Paseo previo al almuerzo. Máxima densidad de permanencia en el stand.',
      action: 'Activar demos en vivo cada 15 minutos en el kiosco principal.',
    },
    {
      id: 3,
      name: 'PICO HORA 3',
      time: '17:00h - 18:30h',
      rate: '395 personas / h',
      reason: 'Hora de networking vespertino, visitas técnicas y reuniones distendidas.',
      action: 'Ofrecer café/cóctel y focalizar en cierre de reuniones agendadas.',
    },
  ];

  return (
    <section id="dashboard" className="py-24 bg-gradient-to-b from-white via-slate-50 to-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0C3A3B] text-xs font-bold uppercase tracking-wider">
            Control Operativo en Vivo
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0C3A3B] tracking-tight">
            MONITOREA TU STAND DESDE CUALQUIER LUGAR.
          </h2>
          <p className="text-lg text-slate-600">
            Visualiza tráfico, visitantes, engagement y High Interest en tiempo real
            desde tu móvil o portátil durante toda la feria.
          </p>
        </div>

        {/* Top Control Bar: Day selector */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm mb-8">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-bold uppercase text-slate-400">
              Seleccionar Jornada:
            </span>
            <div className="flex items-center bg-slate-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveDay('dia1')}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                  activeDay === 'dia1'
                    ? 'bg-[#0C3A3B] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Día 1 (Apertura)
              </button>
              <button
                onClick={() => setActiveDay('dia2')}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                  activeDay === 'dia2'
                    ? 'bg-[#0C3A3B] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Día 2 (Pico Ferial)
              </button>
              <button
                onClick={() => setActiveDay('dia3')}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                  activeDay === 'dia3'
                    ? 'bg-[#0C3A3B] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Día 3 (Clausura)
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-700">
              Datos sincronizados en tiempo real
            </span>
            <span className="hidden sm:inline">| Stand 4B-12</span>
          </div>
        </div>

        {/* Real-time KPI Cards matching the user's image 6 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {/* Card 1: Tráfico */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-[10px] font-extrabold uppercase tracking-wider">
                Tráfico Pasillo
              </span>
              <Users className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-[#0C3A3B]">
              {current.trafico}
            </div>
            <div className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3" />
              <span>+18% vs media pabellón</span>
            </div>
          </div>

          {/* Card 2: Visitantes en Stand */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-[10px] font-extrabold uppercase tracking-wider">
                Visitantes Stand
              </span>
              <Eye className="w-4 h-4 text-[#00A887]" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-[#00A887]">
              {current.visitantes}
            </div>
            <div className="text-[11px] text-slate-500">
              9,7% Capture Rate
            </div>
          </div>

          {/* Card 3: Engagement */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-[10px] font-extrabold uppercase tracking-wider">
                Engagement Total
              </span>
              <Activity className="w-4 h-4 text-teal-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-[#0C3A3B]">
              {current.engagement}
            </div>
            <div className="text-[11px] text-teal-700 font-semibold">
              3,7 interacciones / pax
            </div>
          </div>

          {/* Card 4: High Interest */}
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 shadow-sm space-y-1">
            <div className="flex items-center justify-between text-emerald-800">
              <span className="text-[10px] font-extrabold uppercase tracking-wider">
                High Interest
              </span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-600 text-white text-[9px] font-black">
                LEADS
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-800">
              {current.highInterest}
            </div>
            <div className="text-[11px] text-emerald-700 font-bold">
              Permanencia &gt;45s
            </div>
          </div>

          {/* Card 5: Ocupación */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1 col-span-2 sm:col-span-1">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-[10px] font-extrabold uppercase tracking-wider">
                Ocupación Pico
              </span>
              <Clock className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-800">
              {current.occupancy}
            </div>
            <div className="text-[11px] text-slate-500 font-medium truncate">
              {current.picoMax}
            </div>
          </div>
        </div>

        {/* Interactive Hourly Curve & Peaks matching Image 7 */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-[#00A887]">
                Análisis Temporal Detallado
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#0C3A3B]">
                ¿CUÁNDO FUNCIONA MEJOR TU STAND?
              </h3>
              <p className="text-xs text-slate-500">
                Analiza tráfico y engagement hora por hora para organizar a tu
                equipo comercial.
              </p>
            </div>

            {/* Peak switcher */}
            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg">
              {peaks.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPeak(p.id)}
                  className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
                    selectedPeak === p.id
                      ? 'bg-white text-[#0C3A3B] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          {/* SVG Hourly Peak Curve matching Image 7 */}
          <div className="relative w-full h-64 sm:h-72 bg-gradient-to-b from-emerald-50/20 to-transparent rounded-xl p-4 border border-slate-100">
            <svg
              viewBox="0 0 800 240"
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00A887" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#00A887" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0C3A3B" />
                  <stop offset="30%" stopColor="#00A887" />
                  <stop offset="60%" stopColor="#14C6A3" />
                  <stop offset="100%" stopColor="#0C3A3B" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1="40" y1="30" x2="760" y2="30" stroke="#e2e8f0" strokeDasharray="4 4" />
              <line x1="40" y1="80" x2="760" y2="80" stroke="#e2e8f0" strokeDasharray="4 4" />
              <line x1="40" y1="130" x2="760" y2="130" stroke="#e2e8f0" strokeDasharray="4 4" />
              <line x1="40" y1="180" x2="760" y2="180" stroke="#cbd5e1" strokeWidth="1.5" />

              {/* Area fill */}
              <path
                d="M 60 180 Q 150 170, 220 120 T 380 40 T 560 60 T 740 180 L 740 180 L 60 180 Z"
                fill="url(#areaGrad)"
              />

              {/* Primary Curve (Tráfico & Engagement) */}
              <path
                d="M 60 180 Q 150 170, 220 120 T 380 40 T 560 60 T 740 180"
                fill="none"
                stroke="url(#lineGrad)"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Secondary Baseline Curve (Tráfico Pasillo) */}
              <path
                d="M 60 180 Q 150 150, 220 140 T 380 80 T 560 100 T 740 180"
                fill="none"
                stroke="#0C3A3B"
                strokeWidth="2"
                strokeDasharray="5 5"
                opacity="0.6"
              />

              {/* Peak Indicator 1 (11:00h) */}
              <g className="cursor-pointer" onClick={() => setSelectedPeak(1)}>
                <circle cx="220" cy="120" r="7" fill="#00A887" stroke="#ffffff" strokeWidth="2" />
                <rect x="175" y="85" width="90" height="24" rx="4" fill="#00A887" />
                <text x="220" y="101" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">
                  PICO HORA 1
                </text>
              </g>

              {/* Peak Indicator 2 (13:30h - Highest peak) */}
              <g className="cursor-pointer" onClick={() => setSelectedPeak(2)}>
                <circle cx="380" cy="40" r="8" fill="#0C3A3B" stroke="#00A887" strokeWidth="3" />
                <rect x="335" y="5" width="90" height="24" rx="4" fill="#0C3A3B" />
                <text x="380" y="21" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">
                  PICO HORA 2
                </text>
              </g>

              {/* Peak Indicator 3 (17:30h) */}
              <g className="cursor-pointer" onClick={() => setSelectedPeak(3)}>
                <circle cx="560" cy="60" r="7" fill="#00A887" stroke="#ffffff" strokeWidth="2" />
                <rect x="515" y="25" width="90" height="24" rx="4" fill="#00A887" />
                <text x="560" y="41" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">
                  PICO HORA 3
                </text>
              </g>

              {/* Hour X-Axis Labels matching Image 7 */}
              <text x="60" y="205" fill="#64748b" fontSize="11" fontWeight="bold" textAnchor="middle">09h</text>
              <text x="170" y="205" fill="#64748b" fontSize="11" fontWeight="bold" textAnchor="middle">11h</text>
              <text x="280" y="205" fill="#64748b" fontSize="11" fontWeight="bold" textAnchor="middle">13h</text>
              <text x="390" y="205" fill="#64748b" fontSize="11" fontWeight="bold" textAnchor="middle">15h</text>
              <text x="500" y="205" fill="#64748b" fontSize="11" fontWeight="bold" textAnchor="middle">17h</text>
              <text x="610" y="205" fill="#64748b" fontSize="11" fontWeight="bold" textAnchor="middle">19h</text>
              <text x="720" y="205" fill="#64748b" fontSize="11" fontWeight="bold" textAnchor="middle">21h</text>
            </svg>
          </div>

          {/* Peak Detail Bar */}
          {peaks
            .filter((p) => p.id === selectedPeak)
            .map((peak) => (
              <motion.div
                key={peak.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-slate-50 border border-emerald-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[#0C3A3B] text-white text-[10px] font-black">
                      {peak.name}
                    </span>
                    <span className="text-xs font-bold text-slate-700">
                      Horario: {peak.time}
                    </span>
                    <span className="text-xs font-bold text-[#00A887]">
                      ({peak.rate})
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">
                    <strong className="text-slate-800">Causa:</strong> {peak.reason}
                  </p>
                </div>

                <div className="text-xs text-slate-700 bg-white px-3.5 py-2 rounded-lg border border-slate-200 shrink-0">
                  <strong className="text-[#0C3A3B]">Acción recomendada:</strong>{' '}
                  {peak.action}
                </div>
              </motion.div>
            ))}

          {/* Device Mockup Picture */}
          <div className="pt-4">
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                src={dashboardMockupImg}
                alt="StandMetrics en laptop y smartphone en tiempo real"
                className="w-full h-64 sm:h-80 object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
