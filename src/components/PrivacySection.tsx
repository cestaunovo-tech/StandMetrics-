import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Lock,
  EyeOff,
  FileCheck,
  Cpu,
  ServerOff,
  CheckCircle2,
  Scale,
} from 'lucide-react';

export const PrivacySection: React.FC = () => {
  const privacyPillars = [
    {
      icon: EyeOff,
      title: 'Cero Reconocimiento Facial',
      desc: 'Nuestros sensores detectan vectores de movimiento y siluetas volumétricas anónimas. No reconocen caras, identidades, sexo ni edad.',
    },
    {
      icon: ServerOff,
      title: 'Sin Grabación ni Almacén de Vídeo',
      desc: 'No existe flujo de vídeo guardado ni transmitido a servidores. El procesamiento se ejecuta en tiempo real dentro del propio chip del sensor.',
    },
    {
      icon: Scale,
      title: 'Conformidad RGPD / GDPR Total',
      desc: 'Cumple al 100% con la legislación europea y normativas de protección de datos más exigentes. No requiere consentimiento individual de los transeúntes.',
    },
    {
      icon: Cpu,
      title: 'Procesamiento Edge Computing',
      desc: 'El dato se convierte instantáneamente en coordenadas matemáticas anónimas. Lo único que viaja a la nube es el conteo y los segundos de permanencia.',
    },
  ];

  return (
    <section id="privacidad" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header directly matching Image 10 */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0C3A3B] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#00A887]" />
            <span>Compromiso Ético & Legal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0C3A3B] tracking-tight">
            MIDE COMPORTAMIENTO.{' '}
            <span className="text-[#00A887]">NO IDENTIDAD.</span>
          </h2>
          <p className="text-lg text-slate-600">
            Analytics para espacios físicos con enfoque{' '}
            <strong className="text-[#0C3A3B]">Privacy by Design</strong>.
            Garantía de cumplimiento legal para expositores y recintos feriales.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {privacyPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 hover:bg-white transition-all shadow-2xs space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-[#0C3A3B] flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#00A887]" />
                </div>
                <h3 className="text-base font-bold text-[#0C3A3B]">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Legal Certificate Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50/60 to-white border border-emerald-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#0C3A3B] text-white flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-8 h-8 text-[#00A887]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0C3A3B]">
                ¿Necesitas la memoria técnica de privacidad para el organizador ferial?
              </h4>
              <p className="text-xs text-slate-600">
                Proporcionamos a tu empresa la certificación y cláusulas legales de
                cumplimiento RGPD listas para presentar a la dirección del recinto ferial.
              </p>
            </div>
          </div>

          <a
            href="#contacto"
            className="px-5 py-2.5 rounded-xl bg-[#0C3A3B] hover:bg-[#145E5F] text-white text-xs font-bold shrink-0 transition-colors shadow-xs"
          >
            Solicitar Documentación Legal
          </a>
        </div>
      </div>
    </section>
  );
};
