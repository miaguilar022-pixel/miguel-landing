import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const trackContact = (method) => {
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Contact', { contact_method: method });
  }
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'contact_click', { method: method });
  }
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const LandingPage = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead');
      }
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead');
      }
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div ref={containerRef} className="bg-black text-white overflow-hidden">
      {/* CSS Custom Properties */}
      <style>{`
        :root {
          --background: 0 0% 0%;
          --foreground: 0 0% 100%;
          --card: 0 0% 5%;
          --card-foreground: 0 0% 100%;
          --primary: 0 0% 100%;
          --primary-foreground: 0 0% 0%;
          --secondary: 0 0% 12%;
          --secondary-foreground: 0 0% 85%;
          --muted: 0 0% 15%;
          --muted-foreground: 0 0% 65%;
          --accent: 170 15% 45%;
          --accent-foreground: 0 0% 100%;
          --border: 0 0% 20%;
          --input: 0 0% 18%;
          --ring: 0 0% 40%;
          --hero-subtitle: 210 17% 95%;
        }

        .liquid-glass {
          background: rgba(255, 255, 255, 0.01);
          background-blend-mode: luminosity;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: none;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .liquid-glass::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.4px;
          background: linear-gradient(180deg,
            rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
            rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
            rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .instrument-serif {
          font-family: 'Instrument Serif', serif;
        }

        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap');

        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 z-50 w-full px-8 md:px-28 py-4 flex justify-between items-center backdrop-blur-sm"
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 border-2 border-white/60 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 border border-white/60 rounded-full"></div>
          </div>
          <span className="text-lg font-bold">Miguel Aguilar</span>
        </div>

        <div className="hidden md:flex gap-6 text-sm items-center">
          <a href="#services" className="text-white/65 hover:text-white transition">Servicios</a>
          <span className="text-white/40">•</span>
          <a href="#results" className="text-white/65 hover:text-white transition">Resultados</a>
          <span className="text-white/40">•</span>
          <a href="#why" className="text-white/65 hover:text-white transition">Por qué</a>
        </div>

        <div className="flex gap-4">
          <a href="https://instagram.com" className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/5 transition">
            <Instagram size={18} />
          </a>
          <a href="https://linkedin.com" className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/5 transition">
            <Linkedin size={18} />
          </a>
          <a href="https://twitter.com" className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/5 transition">
            <Twitter size={18} />
          </a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Background video placeholder - dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black -z-10"></div>

        {/* Gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="z-10 pt-28 md:pt-32 max-w-3xl px-4 md:px-8 text-center"
        >
          {/* Avatar row */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-black bg-gradient-to-br from-gray-300 to-gray-600 flex items-center justify-center text-xs font-bold"
                >
                  {i}
                </div>
              ))}
            </div>
            <p className="text-sm text-white/65">40+ clientes con campañas activas</p>
          </div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6"
          >
            Resultados en{' '}
            <span className="instrument-serif italic font-normal">Paid Media</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg mb-8"
            style={{ color: 'hsl(var(--hero-subtitle))' }}
          >
            Optimización de campañas Google Ads, Meta Ads, DV360 y más. Reducción de CPL, aumento de ROAS, y máximo retorno en tu inversión publicitaria.
          </motion.p>

          {/* Email Form */}
          <motion.form
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            onSubmit={handleSubscribe}
            className="liquid-glass rounded-full p-2 max-w-lg mx-auto flex items-center"
          >
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-transparent px-6 py-3 text-white placeholder-white/40 focus:outline-none text-sm"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-black rounded-full px-8 py-3 font-semibold text-sm whitespace-nowrap hover:bg-white/90 transition"
            >
              {submitted ? '✓ Enviado' : 'CONTACTAR'}
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative pt-32 md:pt-48 pb-32 md:pb-44 px-8 md:px-28"
      >
        <motion.div {...fadeUp(0)} className="max-w-2xl mx-auto mb-20 text-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6">
            Especialización en{' '}
            <span className="instrument-serif italic font-normal">Performance</span>
          </h2>
          <p className="text-white/65 text-lg">
            Más de 5 años manejando presupuestos de $200k+ anuales en agencias tier-1. Experto en campañas que convierten.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-6 max-w-4xl mx-auto mb-12">
          {[
            { title: 'Google Ads', desc: 'Search, Display, Shopping, YouTube con enfoque en conversion tracking y ROI' },
            { title: 'Meta Ads', desc: 'Facebook e Instagram con audiencias segmentadas y creative optimization' },
            { title: 'DV360', desc: 'Compra programática y orientación de audiencias en escala' },
            { title: 'Estrategia', desc: 'Funnels de conversión, Media Flow Charts, y análisis de performance' },
          ].map((service, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.1)}
              className="border border-white/10 rounded-lg p-6 hover:border-white/30 transition hover:bg-white/2"
            >
              <h3 className="font-semibold text-base mb-2">{service.title}</h3>
              <p className="text-white/65 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-white/50 text-sm text-center">
          Clientes: Nissan El Salvador, Honda El Salvador, Porsche, CrediQ, Holcim/Disensa, ARKA Research
        </p>
      </motion.section>

      {/* Results Section */}
      <motion.section
        id="results"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative border-t border-white/10 py-32 md:py-44 px-8 md:px-28"
      >
        <motion.div {...fadeUp(0)} className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6">
            <span className="instrument-serif italic font-normal">Resultados</span> que hablan
          </h2>
          <p className="text-white/65 text-lg">
            Números reales de campañas activas en 2024–2026
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { metric: '-26%', label: 'Reducción CPL YoY' },
            { metric: '3.8x', label: 'ROAS Promedio' },
            { metric: '100%', label: 'Retención de Clientes' },
            { metric: '$8K', label: 'Revenue Upsell Q4 2024' },
            { metric: '40%', label: 'Mejora en SLAs' },
            { metric: '$200k+', label: 'Presupuesto Anual Gestionado' },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.08)}
              className="border border-white/10 rounded-lg p-8 text-center hover:border-white/30 transition"
            >
              <div className="text-4xl md:text-5xl font-bold mb-3">{item.metric}</div>
              <div className="text-white/65 text-sm">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About Me Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative border-t border-white/10 py-32 md:py-44 px-8 md:px-28"
      >
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Story */}
          <motion.div {...fadeUp(0)}>
            <p className="text-xs tracking-[3px] uppercase text-white/50 mb-4">ABOUT ME</p>
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-8">
              De agencias a <span className="instrument-serif italic font-normal">emprendedor</span>
            </h2>
            <p className="text-white/75 text-base leading-relaxed mb-6">
              Pasé 5+ años en agencias tier-1 (MullenLowe, Saatchi & Saatchi, Ogilvy) manejando presupuestos de $200k+ anuales, campañas para Nissan, Honda, Porsche, CrediQ. Construí sistemas, mentorizé equipos, cerré clientes con 100% de retención.
            </p>
            <p className="text-white/75 text-base leading-relaxed mb-6">
              Pero aprendí algo clave: la agencia es perfecta para escala pero no para profundidad. Así que en 2023 cofundé <span className="font-semibold">Sleek</span>, una marca de streetwear en El Salvador. Desde cero: producto, branding, logística, paid media.
            </p>
            <p className="text-white/75 text-base leading-relaxed">
              Eso es lo que vendo ahora: no solo la teoría de agencia, sino la mentalidad de fundador. Sé qué duele el CPL alto, sé qué significa un peso mal gastado cuando es tu dinero. Por eso no propongo bandazos. Propongo sistemas.
            </p>
          </motion.div>

          {/* Right: Sleek Stats */}
          <motion.div {...fadeUp(0.1)}>
            <div className="border border-white/10 rounded-lg p-8 space-y-8">
              <div>
                <div className="text-3xl font-bold mb-2">6,000+</div>
                <p className="text-white/65 text-sm">Seguidores en Instagram (@sleek.store)</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">60%</div>
                <p className="text-white/65 text-sm">Crecimiento en clientes base en últimos 6 meses</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50%</div>
                <p className="text-white/65 text-sm">Incremento de ingresos (margen bruto 50-55%)</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2 años</div>
                <p className="text-white/65 text-sm">Desde cero a operación escalada: inventario, logística, paid ads</p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-white/50 text-xs">
                  <strong>Stack actual:</strong> Loyverse POS, Meta Ads, Google Ads, WordPress/WooCommerce, Lookalike Audiences, UTM tracking
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Section - Detailed */}
      <motion.section
        id="why"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative border-t border-white/10 py-32 md:py-44 px-8 md:px-28"
      >
        <motion.div {...fadeUp(0)} className="max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6">
            Por qué <span className="instrument-serif italic font-normal">funciona</span>
          </h2>
          <p className="text-white/65 text-lg">
            Metodología probada en 40+ cuentas. Estos son los pilares.
          </p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {[
            {
              step: '01',
              title: 'Auditoría sin compromisos (24–48h)',
              details: [
                'Reviso Meta Ads Manager, Google Ads, GA4, Data Studio',
                'Identifico fugas: audience overlap, creative que underperforms, conversion tracking roto',
                'Te muestro 3–5 oportunidades de optimización con impacto mensual estimado',
                'Sin propuesta forzada. Si no hace falta intervención, lo digo.',
              ],
            },
            {
              step: '02',
              title: 'Ejecución sistemática',
              details: [
                'Media Flow Charts: modelamos spend → CPM → CTR → conversion rate → CPL',
                'Dashboard en Data Studio: actualización diaria, KPIs que importan (no vanity metrics)',
                'Segmentación por modelo/producto: Google Ads con adsets por SKU, Meta con Lookalike + interest-based',
                'Testing metodológico: cambios pequeños, medición clara, iteración en 2–3 semanas',
              ],
            },
            {
              step: '03',
              title: 'Reporting operacional',
              details: [
                'Semanales: qué funcionó, qué no, decisiones de la semana siguiente',
                'Mensuales: trend análisis, benchmark vs. target, revenue impact',
                'Transparencia total: cuál fue la propuesta, qué pasó, por qué',
              ],
            },
            {
              step: '04',
              title: 'Escalabilidad integrada',
              details: [
                'No hago "proyectos". Hago sistemas que viven. Documentación clara.',
                'Si tu equipo crece, la operación escala sin perder calidad',
                'Integraciones limpias: Leadsbridge, GTM, pixel tracking, CRM — todo conectado',
              ],
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.08)}
              className="border border-white/10 rounded-lg p-8 hover:border-white/30 transition"
            >
              <div className="flex gap-6">
                <div className="text-4xl font-bold text-white/20 w-16 flex-shrink-0">{item.step}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.details.map((detail, j) => (
                      <li key={j} className="text-white/65 text-sm flex items-start gap-3">
                        <span className="text-white/30 mt-1">→</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Guarantee */}
          <motion.div
            {...fadeUp(0.4)}
            className="border-2 border-white/20 rounded-lg p-8 bg-white/2 mt-8"
          >
            <p className="text-sm text-white/75 leading-relaxed">
              <span className="font-semibold text-white">Garantía implícita:</span> Si después de 90 días no vemos mejora en CPL o ROAS vs. baseline, revisamos la estrategia o ajustamos el engagement. No pago por tiempo — pago por resultados.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative border-t border-white/10 py-32 md:py-44 px-8 md:px-28 overflow-hidden"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex justify-center"
          >
            <div className="w-10 h-10 border-2 border-white/60 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 border border-white/60 rounded-full"></div>
            </div>
          </motion.div>

          <motion.h2
            {...fadeUp(0)}
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6"
          >
            Hablemos de <span className="instrument-serif italic font-normal">tu presupuesto</span>
          </motion.h2>

          <motion.p
            {...fadeUp(0.1)}
            className="text-white/65 text-lg mb-8 max-w-2xl mx-auto"
          >
            Envía un mensaje. Auditaré tu account. Te diré qué está roto y cómo lo arreglamos.
          </motion.p>

          <motion.div
            {...fadeUp(0.2)}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.a
              href="mailto:miaguilar022@gmail.com"
              onClick={() => trackContact('email')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-black rounded-lg px-8 py-3.5 font-semibold hover:bg-white/90 transition"
            >
              Enviar email
            </motion.a>
            <motion.a
              href="https://wa.me/50379597128"
              onClick={() => trackContact('whatsapp')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="liquid-glass rounded-lg px-8 py-3.5 font-semibold hover:bg-white/5 transition"
            >
              WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-white/10 py-12 px-8 md:px-28 flex justify-between items-center text-sm text-white/50"
      >
        <p>© 2026 Miguel Aguilar. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition">Privacidad</a>
          <a href="#" className="hover:text-white transition">Términos</a>
          <a href="#" className="hover:text-white transition">Contacto</a>
        </div>
      </motion.footer>
    </div>
  );
};

export default LandingPage;
