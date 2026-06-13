"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "Datos de la Empresa",
    body: "Razón social: Julietas Flowers, Florería de Samborondón. Domicilio: Samborondón, Guayaquil, Ecuador. Correo: julietas.flowers@gmail.com — WhatsApp: +593 99 999 9999. Horario de atención: Lunes a Domingo de 8:00 a 20:00.",
  },
  {
    number: "02",
    title: "Productos y Precios",
    body: "Julietas Flowers vende flores, arreglos personalizados y detalles florales a través de su tienda online. Todos los precios están expresados en dólares americanos e incluyen IVA del 15% según ley vigente. Las fotos son referenciales; los colores y disponibilidad pueden variar según la temporada. Nos reservamos el derecho de modificar precios sin previo aviso — el precio válido es el que aparece al momento de confirmar el pedido.",
  },
  {
    number: "03",
    title: "Proceso de Compra",
    body: "Selecciona tus flores y detalles, personaliza si es necesario, agrega al carrito y procede al checkout. Completa tus datos de facturación y envío — eres responsable de que sean correctos, especialmente dirección y teléfono de entrega. Acepta la Política de Privacidad y estos Términos. Realiza el pago a través de Datafast o coordina por WhatsApp. Recibirás un correo de confirmación con el detalle de tu pedido una vez aprobado el pago.",
  },
  {
    number: "04",
    title: "Métodos de Pago",
    body: "Aceptamos tarjetas Visa, Mastercard, Diners, Discover y American Express procesadas por Datafast S.A. También transferencia bancaria o depósito coordinado por WhatsApp. Julietas Flowers no almacena datos de tarjetas — todo pago es procesado directamente por Datafast bajo estándar PCI DSS. El pedido se procesa una vez confirmado el pago.",
  },
  {
    number: "05",
    title: "Envíos y Entregas",
    body: "Realizamos envíos a Guayaquil continental a través de courier especializado. Tiempo de entrega: Samborondón mismo día (pedidos antes de 2 PM), Guayaquil 1-2 días hábiles, otras ciudades 2-5 días hábiles desde la confirmación del pago. El costo de envío se calcula en el checkout según zona de destino y se muestra antes de pagar. Julietas Flowers se esfuerza por respetar las fechas de entrega; no nos responsabilizamos por retrasos causados por el courier, fuerza mayor o dirección incorrecta proporcionada por el cliente.",
  },
  {
    number: "06",
    title: "Cambios y Devoluciones",
    body: "Si las flores llegan dañadas o no corresponden a lo solicitado, debes reportarlo máximo 24 horas después de la entrega con fotos como evidencia. Te ofreceremos un reemplazo gratuito o devolución del dinero. Para cambios de pedidos válidos (error del cliente), asume costos de envío. Flores personalizadas no se pueden cambiar una vez confirmadas.",
  },
  {
    number: "07",
    title: "Garantía",
    body: "Todas las flores tienen garantía de frescura de 3-5 días desde la entrega (dependiendo de la variedad). Julietas Flowers selecciona flores de la mejor calidad, pero no garantiza longevidad extraordinaria — esto depende del cuidado del cliente. Sigue las instrucciones de conservación incluidas en cada pedido.",
  },
  {
    number: "08",
    title: "Propiedad Intelectual",
    body: "Todo el contenido de julietas-flowers.com — logos, textos, imágenes y diseños — es propiedad de Julietas Flowers. Queda prohibida su reproducción total o parcial sin autorización escrita.",
  },
  {
    number: "09",
    title: "Responsabilidad",
    body: "Julietas Flowers se esfuerza por mantener la calidad de sus productos. No se responsabiliza por el mal cuidado de las flores después de la entrega. No garantizamos que el sitio esté libre de errores; si encuentras uno, repórtalo a julietas.flowers@gmail.com. No nos responsabilizamos por links a sitios de terceros.",
  },
  {
    number: "10",
    title: "Datos Personales",
    body: "El tratamiento de tus datos se rige por nuestra Política de Privacidad, disponible en el footer del sitio. Al comprar, aceptas dicha política conforme a la Ley Orgánica de Protección de Datos Personales de Ecuador.",
  },
  {
    number: "11",
    title: "Legislación Aplicable",
    body: "Estos Términos se rigen por las leyes de la República del Ecuador. Para cualquier controversia, las partes se someten a los jueces de la ciudad de Guayaquil y a los procedimientos de la Ley de Comercio Electrónico, Ley de Defensa del Consumidor y Ley Orgánica de Protección de Datos Personales.",
  },
  {
    number: "12",
    title: "Modificaciones",
    body: "Julietas Flowers se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios aplican desde su publicación en la web. Te recomendamos revisarlos antes de cada compra.",
  },
  {
    number: "13",
    title: "Contacto",
    body: null,
    isContact: true,
  },
];

const TerminosCondiciones: React.FC = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      if (!lineRef.current) return;
      const el = lineRef.current;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const progress = Math.min(Math.max((windowH - rect.top) / (rect.height + windowH), 0), 1);
      el.style.setProperty("--progress", String(progress));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((_, i) => {
      const el = document.getElementById(`tc-section-${i}`);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setVisible((prev) => new Set(prev).add(i)); },
        { threshold: 0.1 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }

        body { background: #080808; }

        .tc-root {
          background: #080808;
          color: #e8e4f0;
          font-family: 'Outfit', sans-serif;
          min-height: 100vh;
        }

        .tc-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        /* ── HERO ── */
        .tc-hero {
          position: relative;
          padding: 80px 24px 60px;
          text-align: center;
          overflow: hidden;
        }

        .tc-hero-glow {
          position: absolute;
          top: -120px;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(220,180,50,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .tc-hero-glow2 {
          position: absolute;
          top: -60px;
          left: 50%;
          transform: translateX(-50%);
          width: 400px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(220,180,50,0.12) 0%, transparent 65%);
          pointer-events: none;
        }

        .tc-badge {
          display: inline-block;
          border: 1px solid rgba(220,180,50,0.4);
          color: #dcb432;
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 2px;
          margin-bottom: 24px;
        }

        .tc-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(52px, 10vw, 100px);
          letter-spacing: 0.04em;
          line-height: 0.9;
          color: #ffffff;
          margin: 0 0 20px;
        }

        .tc-title span { color: #dcb432; }

        .tc-subtitle {
          color: #6b6480;
          font-size: 14px;
          font-weight: 300;
          max-width: 480px;
          margin: 0 auto 12px;
          line-height: 1.6;
        }

        .tc-date {
          color: #3d3a4a;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .tc-divider {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #dcb432, transparent);
          margin: 32px auto;
        }

        /* ── BODY ── */
        .tc-body {
          position: relative;
          max-width: 860px;
          margin: 0 auto;
          padding: 0 24px 100px;
        }

        /* ── TIMELINE LINE ── */
        .tc-line {
          position: absolute;
          left: 43px;
          top: 0;
          bottom: 80px;
          width: 1px;
          background: rgba(220,180,50,0.08);
        }

        .tc-line::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
          background: linear-gradient(180deg, #dcb432 0%, rgba(220,180,50,0.3) 100%);
          height: calc(var(--progress, 0) * 100%);
          transition: height 0.1s linear;
        }

        @media (max-width: 640px) {
          .tc-line { display: none; }
        }

        /* ── ROW ── */
        .tc-row {
          display: flex;
          gap: 24px;
          margin-bottom: 16px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .tc-row.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── NUMBER ── */
        .tc-num {
          flex-shrink: 0;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(220,180,50,0.25);
          background: rgba(220,180,50,0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 600;
          color: #dcb432;
          letter-spacing: 0.05em;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 640px) {
          .tc-num { display: none; }
        }

        /* ── CARD ── */
        .tc-card {
          flex: 1;
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 12px;
          padding: 22px 26px;
          background: #0e0e12;
          transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
          margin-bottom: 8px;
        }

        .tc-card:hover {
          border-color: rgba(220,180,50,0.2);
          box-shadow: 0 0 0 1px rgba(220,180,50,0.08), 0 20px 50px rgba(0,0,0,0.6);
          transform: translateY(-1px);
        }

        .tc-card-title {
          font-weight: 600;
          font-size: 14px;
          color: #ffffff;
          margin-bottom: 8px;
          letter-spacing: 0.01em;
        }

        .tc-card-body {
          font-size: 13px;
          line-height: 1.75;
          color: #e8e4f0;
          font-weight: 300;
        }

        /* ── CONTACT CARD ── */
        .tc-contact-card {
          flex: 1;
          border: 1px solid rgba(220,180,50,0.2);
          border-radius: 12px;
          padding: 26px 30px;
          background: linear-gradient(135deg, #0e0e12, #121018);
          box-shadow: 0 0 0 1px rgba(220,180,50,0.06), 0 20px 60px rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        .tc-contact-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #dcb432;
          margin-bottom: 6px;
        }

        .tc-contact-desc {
          font-size: 13px;
          color: #5a5570;
          margin-bottom: 14px;
          font-weight: 300;
        }

        .tc-btn {
          display: inline-block;
          background: #dcb432;
          color: #080808;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 0.05em;
          padding: 10px 20px;
          border-radius: 6px;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }

        .tc-btn:hover {
          background: #f0ca50;
          transform: translateY(-1px);
        }

        /* ── CONSENT BAR ── */
        .tc-consent {
          border: 1px solid rgba(220,180,50,0.1);
          border-radius: 10px;
          background: #0c0c10;
          padding: 18px 24px;
          font-size: 12px;
          color: #5a5570;
          text-align: center;
          margin-bottom: 40px;
          font-weight: 300;
          line-height: 1.6;
        }

        .tc-consent strong {
          color: #dcb432;
          font-weight: 600;
        }

        /* ── FOOTER ── */
        .tc-footer {
          text-align: center;
          border-top: 1px solid rgba(255,255,255,0.04);
          padding-top: 40px;
          margin-top: 20px;
        }

        .tc-footer p {
          font-size: 12px;
          color: #3a3750;
          margin-bottom: 16px;
          font-weight: 300;
        }

        .tc-footer a {
          color: #dcb432;
          font-size: 12px;
          text-decoration: none;
          letter-spacing: 0.05em;
        }

        .tc-footer a:hover { text-decoration: underline; }
      `}</style>

      <div className="tc-root">

        {/* HERO */}
        <div className="tc-hero" style={{ position: "relative", zIndex: 1 }}>
          <div className="tc-hero-glow" />
          <div className="tc-hero-glow2" />
          <div style={{ position: "relative", zIndex: 2 }}>
            <div className="tc-badge">Documento Legal · Ecuador</div>
            <h1 className="tc-title">
              TÉRMINOS Y<br /><span>CONDICIONES</span>
            </h1>
            <p className="tc-subtitle">
              Al realizar una compra en MARCA ESTILO aceptas estos términos en su totalidad. Te recomendamos leerlos antes de cada pedido.
            </p>
            <p className="tc-date">Última actualización: 01 de junio de 2026</p>
            <div className="tc-divider" />
          </div>
        </div>

        {/* BODY */}
        <div className="tc-body" style={{ position: "relative", zIndex: 1 }}>
          <div
            className="tc-line"
            ref={lineRef}
            style={{ "--progress": "0" } as React.CSSProperties}
          />

          {sections.map((s, i) =>
            s.isContact ? (
              <div
                key={s.number}
                id={`tc-section-${i}`}
                className={`tc-row${visible.has(i) ? " visible" : ""}`}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="tc-num">{s.number}</div>
                <div className="tc-contact-card">
                  <div>
                    <p className="tc-contact-label">Contacto</p>
                    <p className="tc-contact-desc">
                      Dudas sobre estos términos o para iniciar un cambio / garantía.
                    </p>
                    <a href="mailto:julietas.flowers@gmail.com" className="tc-btn">
                      julietas.flowers@gmail.com
                    </a>
                  </div>
                  <div style={{ fontSize: "12px", color: "#3a3750", textAlign: "right", lineHeight: 1.8 }}>
                    <div style={{ color: "#5a5570", marginBottom: 4 }}>WhatsApp</div>
                    <div style={{ color: "#dcb432", fontWeight: 600 }}>+593 99 999 9999</div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={s.number}
                id={`tc-section-${i}`}
                className={`tc-row${visible.has(i) ? " visible" : ""}`}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="tc-num">{s.number}</div>
                <div className="tc-card">
                  <p className="tc-card-title">{s.title}</p>
                  <p className="tc-card-body">{s.body}</p>
                </div>
              </div>
            )
          )}

          {/* CONSENT NOTE */}
          <div className="tc-consent">
            Al usar <strong>julietas-flowers.com</strong> y marcar la casilla <strong>"Acepto los Términos y Condiciones"</strong> en el checkout, confirmas que leíste y estás de acuerdo con este documento. Conforme a la <strong>Ley de Comercio Electrónico y Ley de Defensa del Consumidor de Ecuador</strong>.
          </div>

          {/* FOOTER */}
          <div className="tc-footer">
            <p>Gracias por confiar en Julietas Flowers. Tu satisfacción es nuestra prioridad 💘</p>
            <Link href="/">← Volver al inicio</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TerminosCondiciones;