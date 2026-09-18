import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Calendar,
  Building,
  ShieldCheck,
  MessageSquare,
} from 'lucide-react';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    eventOrFair: '',
    standSize: '32 m²',
    serviceType: 'Medición de Stand para Feria',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      eventOrFair: '',
      standSize: '32 m²',
      serviceType: 'Medición de Stand para Feria',
      notes: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contacto" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Value & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0C3A3B] text-xs font-bold uppercase tracking-wider">
                Hablemos de tu Próxima Feria
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C3A3B] tracking-tight">
                ¿LISTO PARA MEDIR EL RETORNO DE TU STAND?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Cuéntanos sobre tu próximo evento. Nuestro equipo de ingenieros y
                especialistas feriales te preparará una propuesta técnica y
                económica a la medida de tu espacio.
              </p>
            </div>

            {/* Quick Guarantees */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <Clock className="w-5 h-5 text-[#00A887] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#0C3A3B]">
                    Respuesta en menos de 4 horas
                  </h4>
                  <p className="text-xs text-slate-500">
                    Estudio preliminar de cobertura de sensores para tu stand.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-[#00A887] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#0C3A3B]">
                    Documentación Técnica y RGPD
                  </h4>
                  <p className="text-xs text-slate-500">
                    Certificado de Privacy by Design listo para el organizador ferial.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="pt-4 border-t border-slate-200 space-y-3 text-xs text-slate-600">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#00A887] shrink-0" />
                <a
                  href="mailto:cestaunovo@gmail.com"
                  className="font-semibold text-slate-900 hover:text-[#00A887] transition-colors"
                >
                  cestaunovo@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#00A887] shrink-0" />
                <a
                  href="tel:+56951942366"
                  className="font-semibold text-slate-900 hover:text-[#00A887] transition-colors"
                >
                  +56 9 5194 2366
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00A887] shrink-0 mt-0.5" />
                <span className="text-slate-800 font-medium">
                  Martin Alonso Pinzón 4956, Las Condes
                </span>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/56951942366?text=Hola%2C%20quisiera%20cotizar%20la%20medici%C3%B3n%20de%20mi%20stand%20con%20StandMetrics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-50 text-[#0C3A3B] border border-emerald-200 font-bold hover:bg-emerald-100 transition-colors text-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#00A887]" />
                  <span>Chatear por WhatsApp (+56 9 5194 2366)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-lg relative">
              {isSubmitted ? (
                /* Success Confirmation State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-5"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#00A887] flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-[#0C3A3B]">
                      ¡Solicitud Recibida con Éxito!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Gracias, <strong className="text-[#0C3A3B]">{formData.name}</strong>.
                      Hemos asignado un consultor de StandMetrics a tu proyecto para{' '}
                      <span className="font-bold text-[#00A887]">
                        {formData.eventOrFair || 'tu próximo evento'}
                      </span>
                      .
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-emerald-200 text-left text-xs text-slate-600 max-w-md mx-auto space-y-1.5">
                    <div>
                      <strong>Empresa:</strong> {formData.company || 'Particular'}
                    </div>
                    <div>
                      <strong>Servicio solicitado:</strong> {formData.serviceType}
                    </div>
                    <div>
                      <strong>Email de contacto:</strong> {formData.email}
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0C3A3B] text-white text-xs font-bold hover:bg-[#145E5F] transition-colors"
                  >
                    Enviar otra consulta
                  </button>
                </motion.div>
              ) : (
                /* Form Fields */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-200 pb-3">
                    <h3 className="text-lg font-bold text-[#0C3A3B]">
                      Formulario de Presupuesto & Asesoría
                    </h3>
                    <p className="text-xs text-slate-500">
                      Rellena tus datos para recibir una propuesta personalizada.
                    </p>
                  </div>

                  {/* Service type select */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      ¿Qué servicio necesitas?
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) =>
                        setFormData({ ...formData, serviceType: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00A887] focus:border-transparent font-medium"
                    >
                      <option value="Medición de Stand para Feria">
                        Medición de Stand para Próxima Feria
                      </option>
                      <option value="Demo en Vivo del Dashboard">
                        Demostración en Vivo de la Plataforma
                      </option>
                      <option value="Auditoría de ROI Post-Evento">
                        Auditoría y Cálculo de ROI para Evento
                      </option>
                      <option value="Showroom o Espacio Permanente">
                        Physical Space Intelligence para Showroom / Tienda
                      </option>
                      <option value="Programa de Partners para Agencias">
                        Programa de Partners para Agencias y Montadores de Stands
                      </option>
                    </select>
                  </div>

                  {/* Name and Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                        Nombre y Apellidos *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Carlos Mendoza"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00A887] focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                        Email Corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="carlos@tuempresa.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00A887] focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Company and Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                        Empresa / Marca *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Innova Tech Global"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00A887] focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                        Teléfono de Contacto
                      </label>
                      <input
                        type="tel"
                        placeholder="+34 600 000 000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00A887] focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Fair Name and Stand Size */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                        Próxima Feria o Evento
                      </label>
                      <input
                        type="text"
                        placeholder="Ej. FITUR, MWC, Fruit Attraction..."
                        value={formData.eventOrFair}
                        onChange={(e) =>
                          setFormData({ ...formData, eventOrFair: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00A887] focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                        Superficie Estimada (m²)
                      </label>
                      <select
                        value={formData.standSize}
                        onChange={(e) =>
                          setFormData({ ...formData, standSize: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00A887] focus:border-transparent"
                      >
                        <option value="12 m² o menos">Menos de 16 m² (Modular pequeño)</option>
                        <option value="16 - 32 m²">16 - 32 m² (Stand estándar)</option>
                        <option value="33 - 64 m²">33 - 64 m² (Stand mediano)</option>
                        <option value="65 - 120 m²">65 - 120 m² (Stand grande / Isla)</option>
                        <option value="Más de 120 m²">Más de 120 m² (Pabellón / Multi-zona)</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Detalles o Preguntas Adicionales
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Cuéntanos fechas del evento, qué objetivos tienes o si cuentas con diseño de stand..."
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00A887] focus:border-transparent resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-[#0C3A3B] hover:bg-[#145E5F] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Procesando solicitud...</span>
                      </span>
                    ) : (
                      <>
                        <span>Solicitar Propuesta & Asesoría</span>
                        <Send className="w-4 h-4 text-[#00A887]" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00A887]" />
                    <span>
                      Tus datos se tratan de forma confidencial. Sin spam ni llamadas no deseadas.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
