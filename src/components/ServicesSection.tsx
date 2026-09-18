import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Activity,
  BarChart3,
  FileSpreadsheet,
  Layers,
  Store,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Cpu,
  Smartphone,
  PieChart,
} from 'lucide-react';
import { ServiceItem } from '../types';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'ferias',
      title: 'Medición Llave en Mano para Ferias',
      shortDesc:
        'Sensorización discreta Plug & Play antes de que abra el pabellón. Cobertura total de tu stand sin complicaciones técnicas.',
      fullDesc:
        'Nuestro equipo técnico instala y calibra sensores ópticos inteligentes horas antes de la apertura oficial de la feria. Dispositivos ultra compactos sin cableado invasivo, con conectividad 4G/5G propia que no depende del saturado WiFi del recinto ferial. Listo para medir desde el minuto uno.',
      badge: 'El Más Solicitado',
      iconName: 'Cpu',
      benefits: [
        'Instalación express en menos de 30 minutos',
        'Conectividad autónoma 4G/5G incluida',
        '100% discreto: no altera la estética del stand',
        'Cobertura de stands desde 9 m² hasta más de 500 m²',
      ],
    },
    {
      id: 'dashboard',
      title: 'Dashboard Live & Alertas de Picos',
      shortDesc:
        'Visualiza tráfico, dwell time y High Interest en tiempo real desde tu móvil o laptop. Coordina a tu equipo en horas punta.',
      fullDesc:
        'Acceso seguro en la nube para ti y tus directores comerciales durante los días del evento. Observa los picos de afluencia hora por hora, detecta cuellos de botella y activa a tus comerciales en las zonas calientes cuando el tráfico exterior se intensifica.',
      badge: 'En Tiempo Real',
      iconName: 'Smartphone',
      benefits: [
        'App responsive para smartphone, tablet y laptop',
        'Métricas instantáneas actualizadas cada minuto',
        'Alertas de saturación y picos de oportunidad comercial',
        'Multi-usuario: acceso para todo tu equipo directivo',
      ],
    },
    {
      id: 'roi-audit',
      title: 'Auditoría de ROI Post-Evento',
      shortDesc:
        'Informe ejecutivo con cálculo de Coste Por Visitante Cualificado (CPE), mapas de calor y recomendaciones de diseño.',
      fullDesc:
        'Al finalizar la feria, generamos un dossier ejecutivo de alta dirección que cruza la inversión total (alquiler de espacio, diseño de stand, personal, viajes) con los visitantes de alto interés generados. Sabrás con exactitud si tu stand fue rentable y cómo optimizar la próxima edición.',
      badge: 'Para Dirección',
      iconName: 'PieChart',
      benefits: [
        'Cálculo exacto de Coste Por Lead Comprometido (CPE)',
        'Mapas térmicos de flujo y zonas frías/calientes',
        'Conclusiones sobre efectividad del staff y reclamos visuales',
        'Formato ejecutivo en PDF y presentación para comité directivo',
      ],
    },
    {
      id: 'benchmarking',
      title: 'Benchmarking & Comparativas Multievento',
      shortDesc:
        'Compara el desempeño entre diferentes ferias anuales, pabellones, días de la semana y configuraciones de montaje.',
      fullDesc:
        '¿Rindió mejor el stand de 48 m² en Madrid o el de 32 m² en Barcelona? ¿Funciona mejor un diseño abierto o cerrado con salas de reunión? Con nuestra analítica histórica comparativa dispondrás de datos objetivos para negociar ubicaciones y presupuestos en futuras ferias.',
      badge: 'Estratégico',
      iconName: 'Layers',
      benefits: [
        'Comparación stand vs. stand y edición vs. edición',
        'Análisis de rendimiento por día de la semana',
        'Detección de las mejores ubicaciones en cada recinto ferial',
        'Histórico unificado en una sola plataforma corporativa',
      ],
    },
    {
      id: 'retail-showrooms',
      title: 'Physical Space Intelligence (Showrooms & Retail)',
      shortDesc:
        'Medición permanente para salas de exposición corporativas, pop-up stores y tiendas insignia de marca.',
      fullDesc:
        'Lleva el poder de la analítica ferial a tus espacios físicos permanentes. Entiende el recorrido del comprador, el tiempo de interacción frente a nuevos lanzamientos y la conversión real del escaparate a la compra asistida.',
      badge: 'Espacios Continuos',
      iconName: 'Store',
      benefits: [
        'Monitorización continua 24/7 de tus salas de exhibición',
        'Medición de efectividad de escaparates y novedades',
        'Integración con tus sistemas CRM y de ventas',
        'Privacidad total certificada RGPD (Privacy by Design)',
      ],
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-white relative overflow-hidden">
      {/* Background soft pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0C3A3B] text-xs font-bold uppercase tracking-wider">
            Nuestros Servicios
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0C3A3B] tracking-tight">
            SOLUCIONES DE ANALÍTICA PARA TU PRÓXIMO EVENTO
          </h2>
          <p className="text-lg text-slate-600">
            Desde la instalación plug & play de sensores hasta la auditoría
            financiera de ROI. Todo lo necesario para que tu stand rinda al máximo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 relative bg-white hover:shadow-xl hover:-translate-y-1 ${
                service.id === 'ferias'
                  ? 'border-emerald-300 ring-1 ring-emerald-400/30 shadow-md'
                  : 'border-slate-200 hover:border-emerald-200'
              }`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-emerald-50 text-[#0C3A3B] border border-emerald-200">
                  {service.badge}
                </span>
                <span className="text-xs font-bold text-slate-400">0{idx + 1}</span>
              </div>

              {/* Title & Short Description */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#0C3A3B] leading-snug">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              {/* Benefits Checklist */}
              <div className="my-6 pt-5 border-t border-slate-100 space-y-2.5">
                {service.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#00A887] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA button inside card */}
              <div className="pt-2">
                <a
                  href={`#contacto?servicio=${service.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-[#0C3A3B] bg-emerald-50/80 hover:bg-[#0C3A3B] hover:text-white transition-colors duration-200 border border-emerald-200/60"
                >
                  <span>Solicitar Presupuesto</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}

          {/* 6th Card: Custom Solution & Agency Partnership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="rounded-2xl bg-gradient-to-br from-[#0C3A3B] via-[#092A2B] to-[#061E1F] text-white p-6 sm:p-7 flex flex-col justify-between shadow-xl"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/10 text-emerald-300 text-[10px] font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-[#00A887]" />
                Para Diseñadores & Agencias
              </div>
              <h3 className="text-2xl font-black leading-snug">
                ¿Diseñas o construyes stands para tus clientes?
              </h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed">
                Integra la tecnología StandMetrics en tu propuesta de valor. Ofrece a tus
                clientes stands con analítica y ROI demostrable incluido, diferenciándote de
                la competencia.
              </p>
              <div className="space-y-2 pt-2 text-xs text-emerald-200/90">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00A887]" />
                  <span>Marca blanca o co-branded para tu agencia</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00A887]" />
                  <span>Tarifas especiales para proyectos recurrentes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00A887]" />
                  <span>Soporte técnico y despliegue in situ garantizado</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="#contacto"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-[#0C3A3B] bg-white hover:bg-emerald-50 transition-colors shadow-sm"
              >
                <span>Ser Partner de StandMetrics</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00A887]" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
