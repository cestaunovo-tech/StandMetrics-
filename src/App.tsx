/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { StandMetricsLogo } from './components/StandMetricsLogo';

export default function App() {
  const [activeTab, setActiveTab] = useState<'v1' | 'v2' | 'v3' | 'v4'>('v1');

  return (
    <>
      <header className="wrap nav">
        <a className="logo" href="#inicio" title="StandMetrics — Análisis y ROI de Stands">
          <StandMetricsLogo size="md" variant="white" />
        </a>
        <nav className="navlinks">
          <a href="#producto">Producto</a>
          <a href="#como">Cómo funciona</a>
          <a href="#demo">Demo</a>
          <a href="#faq">FAQ</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="btn primary" href="#contacto">
          Solicitar demo
        </a>
      </header>

      <main id="inicio">
        {/* HERO */}
        <section className="wrap hero">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">Analítica para ferias, eventos y activaciones</div>
              <h1>
                NO CUENTES PERSONAS.
                <br />
                <span>MIDE ATENCIÓN.</span>
              </h1>
              <p className="lead">
                Descubre cuánto tiempo logras captar la atención de tus visitantes y convierte lo que ocurre en tu stand en datos que puedes analizar, comparar y mejorar.
              </p>
              <div className="actions">
                <a className="btn primary" href="#contacto">
                  Quiero medir mi stand →
                </a>
                <a className="btn ghost" href="#demo">
                  Ver demo interactiva
                </a>
              </div>
              <div className="micro">
                Sin hardware especializado · Configuración de zona · Visitantes · Dwell Time · Categorías de permanencia
              </div>
            </div>
            <div className="dashboard">
              <div className="dash-top">
                <span>STANDMETRICS / ANALYTICS</span>
                <span className="status">● MEDICIÓN ACTIVA</span>
              </div>
              <div className="dash-grid">
                <div className="stat">
                  <small>Visitantes</small>
                  <strong>1.248</strong>
                </div>
                <div className="stat">
                  <small>Dwell Time</small>
                  <strong>42 s</strong>
                </div>
                <div className="stat">
                  <small>Atención</small>
                  <strong>68%</strong>
                </div>
              </div>
              <div className="chart">
                <div className="bars">
                  <i className="bar" style={{ height: '32%' }}></i>
                  <i className="bar" style={{ height: '47%' }}></i>
                  <i className="bar" style={{ height: '39%' }}></i>
                  <i className="bar" style={{ height: '67%' }}></i>
                  <i className="bar" style={{ height: '53%' }}></i>
                  <i className="bar" style={{ height: '84%' }}></i>
                  <i className="bar" style={{ height: '71%' }}></i>
                  <i className="bar" style={{ height: '94%' }}></i>
                  <i className="bar" style={{ height: '76%' }}></i>
                  <i className="bar" style={{ height: '88%' }}></i>
                </div>
                <div className="axis">
                  <span>10:00</span>
                  <span>14:00</span>
                  <span>18:00</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EL PROBLEMA */}
        <section className="section alt" id="problema">
          <div className="wrap">
            <div className="eyebrow">El problema</div>
            <h2>Tu stand puede estar lleno y aun así no saber si funcionó.</h2>
            <p className="sub">
              En una feria es fácil salir con impresiones: “había mucha gente”, “la activación gustó”, “el stand estuvo bueno”. Pero una impresión no es evidencia.
            </p>
            <div className="cards">
              <article className="card">
                <div className="num">01 / FLUJO</div>
                <h3>¿Cuántas personas realmente interactuaron?</h3>
                <p>Separar el tránsito de una interacción real permite entender mejor el desempeño del espacio.</p>
              </article>
              <article className="card">
                <div className="num">02 / PERMANENCIA</div>
                <h3>¿Cuánto tiempo lograron quedarse?</h3>
                <p>El Dwell Time agrega una dimensión que un simple contador de personas no entrega.</p>
              </article>
              <article className="card">
                <div className="num">03 / EVIDENCIA</div>
                <h3>¿Puedes demostrar el resultado?</h3>
                <p>Convierte la conversación posterior al evento en datos que puedes presentar y comparar.</p>
              </article>
            </div>
          </div>
        </section>

        {/* PRODUCTO */}
        <section className="section" id="producto">
          <div className="wrap split">
            <div>
              <div className="eyebrow">De percepción a evidencia</div>
              <h2>
                Tu stand habla.
                <br />
                StandMetrics lo mide.
              </h2>
              <p className="sub">
                StandMetrics transforma el comportamiento observado dentro de una zona definida en información fácil de interpretar.
              </p>
              <div className="cards" style={{ gridTemplateColumns: '1fr', marginTop: '28px' }}>
                <article className="card">
                  <div className="num">01</div>
                  <h3>Mide visitantes</h3>
                  <p>Obtén una visión objetiva del flujo de personas que interactúan con tu espacio.</p>
                </article>
                <article className="card">
                  <div className="num">02</div>
                  <h3>Entiende la permanencia</h3>
                  <p>Analiza cuánto tiempo permanecen y detecta diferentes niveles de atención.</p>
                </article>
                <article className="card">
                  <div className="num">03</div>
                  <h3>Mejora la experiencia</h3>
                  <p>Usa los aprendizajes para tomar mejores decisiones en tu próximo evento.</p>
                </article>
              </div>
            </div>
            <div className="scene">
              <div className="tag">ZONA DE MEDICIÓN · ACTIVA</div>
              <div className="floor"></div>
              <div className="stand"></div>
              <div className="zone">ÁREA ANALIZADA</div>
              <div className="person p1"></div>
              <div className="person p2"></div>
              <div className="person p3"></div>
            </div>
          </div>
        </section>

        {/* CÓMO FUNCIONA */}
        <section className="section alt" id="como">
          <div className="wrap">
            <div className="eyebrow">Simple por diseño</div>
            <h2>De tu stand a tus datos en cinco pasos.</h2>
            <p className="sub">
              Sin una implementación complicada. Define qué quieres observar y deja que la plataforma transforme la actividad en métricas.
            </p>
            <div className="steps">
              <div className="step">
                <strong>01</strong>
                <h3>Instala</h3>
                <p>Utiliza un dispositivo compatible en tu espacio.</p>
              </div>
              <div className="step">
                <strong>02</strong>
                <h3>Configura</h3>
                <p>Define la zona que quieres medir.</p>
              </div>
              <div className="step">
                <strong>03</strong>
                <h3>Mide</h3>
                <p>Registra la interacción de tus visitantes.</p>
              </div>
              <div className="step">
                <strong>04</strong>
                <h3>Analiza</h3>
                <p>Visualiza las métricas de comportamiento.</p>
              </div>
              <div className="step">
                <strong>05</strong>
                <h3>Mejora</h3>
                <p>Convierte los aprendizajes en mejores experiencias.</p>
              </div>
            </div>
          </div>
        </section>

        {/* MÉTRICAS */}
        <section className="section">
          <div className="wrap">
            <div className="eyebrow">Las métricas que importan</div>
            <h2>Más que un contador.</h2>
            <p className="sub">
              Saber cuántas personas pasaron es solo el comienzo. La permanencia ayuda a construir una lectura más completa de la atención.
            </p>
            <div className="metrics">
              <div className="metric">
                <b>↗</b>
                <span>Visitantes</span>
                <p>Comprende el flujo de personas.</p>
              </div>
              <div className="metric">
                <b>◷</b>
                <span>Dwell Time</span>
                <p>Conoce cuánto tiempo permanecen.</p>
              </div>
              <div className="metric">
                <b>≈</b>
                <span>Categorías</span>
                <p>Identifica niveles de permanencia.</p>
              </div>
              <div className="metric">
                <b>▦</b>
                <span>Visualización</span>
                <p>Convierte mediciones en información clara.</p>
              </div>
            </div>
          </div>
        </section>

        {/* DEMO INTERACTIVA */}
        <section className="demo" id="demo">
          <div className="wrap">
            <div className="eyebrow">Demo interactiva</div>
            <h2>Explora cómo se lee una experiencia.</h2>
            <p className="sub">
              Los datos son ilustrativos. La interfaz muestra cómo distintas métricas pueden contar una misma historia.
            </p>
            <div className="demo-box">
              <input
                id="v1"
                name="view"
                type="radio"
                checked={activeTab === 'v1'}
                onChange={() => setActiveTab('v1')}
              />
              <input
                id="v2"
                name="view"
                type="radio"
                checked={activeTab === 'v2'}
                onChange={() => setActiveTab('v2')}
              />
              <input
                id="v3"
                name="view"
                type="radio"
                checked={activeTab === 'v3'}
                onChange={() => setActiveTab('v3')}
              />
              <input
                id="v4"
                name="view"
                type="radio"
                checked={activeTab === 'v4'}
                onChange={() => setActiveTab('v4')}
              />

              <div className="tabs">
                <label htmlFor="v1" onClick={() => setActiveTab('v1')}>
                  Visitantes
                </label>
                <label htmlFor="v2" onClick={() => setActiveTab('v2')}>
                  Dwell Time
                </label>
                <label htmlFor="v3" onClick={() => setActiveTab('v3')}>
                  Atención
                </label>
                <label htmlFor="v4" onClick={() => setActiveTab('v4')}>
                  Zonas
                </label>
              </div>

              <div className="demo-panels">
                <div className="panel p1x" style={{ display: activeTab === 'v1' ? 'block' : 'none' }}>
                  <div className="demo-content">
                    <div>
                      <small>VISITANTES DETECTADOS</small>
                      <div className="big">1.248</div>
                      <p className="status">↑ 18,4% vs. evento anterior</p>
                      <div className="mini-bars">
                        <i style={{ height: '38%' }}></i>
                        <i style={{ height: '55%' }}></i>
                        <i style={{ height: '44%' }}></i>
                        <i style={{ height: '70%' }}></i>
                        <i style={{ height: '63%' }}></i>
                        <i style={{ height: '92%' }}></i>
                      </div>
                    </div>
                    <div className="insight">
                      <b>Insight</b>
                      <p>
                        El flujo aumentó durante las horas centrales. El siguiente paso es cruzar volumen con permanencia para entender la calidad de esa atención.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="panel p2x" style={{ display: activeTab === 'v2' ? 'block' : 'none' }}>
                  <div className="demo-content">
                    <div>
                      <small>DWELL TIME PROMEDIO</small>
                      <div className="big">42 s</div>
                      <p>Tiempo medio dentro de la zona de medición.</p>
                      <div className="mini-bars">
                        <i style={{ height: '25%' }}></i>
                        <i style={{ height: '38%' }}></i>
                        <i style={{ height: '51%' }}></i>
                        <i style={{ height: '64%' }}></i>
                        <i style={{ height: '58%' }}></i>
                        <i style={{ height: '78%' }}></i>
                      </div>
                    </div>
                    <div className="insight">
                      <b>Insight</b>
                      <p>
                        Una permanencia más alta puede indicar mayor capacidad de capturar atención, especialmente cuando se analiza junto al flujo.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="panel p3x" style={{ display: activeTab === 'v3' ? 'block' : 'none' }}>
                  <div className="demo-content">
                    <div>
                      <small>ATENCIÓN</small>
                      <div className="big">68%</div>
                      <p>Visitantes que superan el umbral definido.</p>
                      <div className="mini-bars">
                        <i style={{ height: '45%' }}></i>
                        <i style={{ height: '57%' }}></i>
                        <i style={{ height: '52%' }}></i>
                        <i style={{ height: '72%' }}></i>
                        <i style={{ height: '69%' }}></i>
                        <i style={{ height: '88%' }}></i>
                      </div>
                    </div>
                    <div className="insight">
                      <b>Insight</b>
                      <p>
                        Clasificar la permanencia permite ir más allá del volumen y observar qué proporción de visitantes muestra una interacción más prolongada.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="panel p4x" style={{ display: activeTab === 'v4' ? 'block' : 'none' }}>
                  <div className="demo-content">
                    <div>
                      <small>ZONA CON MAYOR PERMANENCIA</small>
                      <div className="big">B</div>
                      <p>Área con mayor tiempo medio observado.</p>
                      <div className="mini-bars">
                        <i style={{ height: '41%' }}></i>
                        <i style={{ height: '83%' }}></i>
                        <i style={{ height: '52%' }}></i>
                        <i style={{ height: '62%' }}></i>
                        <i style={{ height: '48%' }}></i>
                        <i style={{ height: '74%' }}></i>
                      </div>
                    </div>
                    <div className="insight">
                      <b>Insight</b>
                      <p>
                        Comparar zonas ayuda a entender qué parte del espacio está consiguiendo más permanencia y dónde conviene experimentar.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PARA EQUIPOS QUE QUIEREN DEMOSTRAR RESULTADOS */}
        <section className="section alt">
          <div className="wrap">
            <div className="eyebrow">Para equipos que quieren demostrar resultados</div>
            <h2>De “estuvo lleno” a “estos son los resultados”.</h2>
            <p className="sub">
              StandMetrics puede complementar la evaluación de ferias, exposiciones, activaciones y experiencias presenciales.
            </p>
            <div className="cards">
              <article className="card">
                <div className="num">EMPRESAS EXPOSITORAS</div>
                <h3>Evalúa tu presencia</h3>
                <p>Obtén evidencia para entender qué ocurrió durante tu participación y mejorar la siguiente.</p>
              </article>
              <article className="card">
                <div className="num">AGENCIAS / BTL</div>
                <h3>Agrega datos a tu propuesta</h3>
                <p>Entrega a tus clientes una capa adicional de medición sobre el desempeño de sus activaciones.</p>
              </article>
              <article className="card">
                <div className="num">EXPERIENCIAS</div>
                <h3>Compara y aprende</h3>
                <p>Construye una base de aprendizaje para optimizar espacios, dinámicas y experiencias futuras.</p>
              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="wrap">
            <div className="cta-box">
              <div className="eyebrow">Tu próximo evento puede generar más información</div>
              <h2>Deja de suponer. Empieza a medir.</h2>
              <p className="sub" style={{ margin: 'auto' }}>
                Descubre cómo StandMetrics puede ayudarte a convertir la atención de tus visitantes en datos accionables.
              </p>
              <div className="actions" style={{ justifyContent: 'center' }}>
                <a className="btn primary" href="#contacto">
                  Quiero medir mi stand →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faq">
          <div className="wrap faq">
            <div className="eyebrow">FAQ</div>
            <h2>Preguntas frecuentes.</h2>
            <details>
              <summary>¿StandMetrics solo cuenta personas?</summary>
              <p>No. El foco es entender el comportamiento dentro de una zona de medición: visitantes, permanencia y categorías de tiempo.</p>
            </details>
            <details>
              <summary>¿Necesito hardware especializado?</summary>
              <p>La propuesta está pensada para utilizar dispositivos compatibles disponibles para realizar la medición, sin depender de hardware especializado.</p>
            </details>
            <details>
              <summary>¿Qué es Dwell Time?</summary>
              <p>Es el tiempo que un visitante permanece dentro de la zona definida. Es una métrica útil para complementar el simple volumen de visitantes.</p>
            </details>
            <details>
              <summary>¿Los datos de la demo son reales?</summary>
              <p>No. Los datos mostrados en esta landing son ilustrativos y sirven para demostrar la experiencia del producto.</p>
            </details>
          </div>
        </section>

        {/* CONTACTO */}
        <section className="section alt" id="contacto">
          <div className="wrap contact">
            <div>
              <div className="eyebrow">Contacto</div>
              <h2>Solicita una demo.</h2>
              <p className="sub">
                Cuéntanos brevemente sobre tu empresa, stand o activación y te contactaremos para mostrarte cómo funciona StandMetrics.
              </p>
              <p>✓ Sin hardware especializado</p>
              <p>✓ Demo comercial</p>
              <p>✓ Datos accionables</p>
            </div>
            <form
              className="contact-form"
              action="https://formsubmit.co/cestaunovo@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_subject" value="Nueva solicitud de demo StandMetrics" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://standmetrics.vercel.app" />
              <input name="nombre" placeholder="Nombre" required />
              <input name="empresa" placeholder="Empresa" required />
              <input name="email" type="email" placeholder="Email" required />
              <textarea name="mensaje" placeholder="Cuéntanos sobre tu stand, feria o activación"></textarea>
              <button className="btn primary" type="submit">
                Solicitar demo →
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="wrap footer">
        <span>© 2026 StandMetrics</span>
        <span>NO CUENTES PERSONAS. MIDE ATENCIÓN.</span>
      </footer>
    </>
  );
}
