import React, { useState } from 'react';

export function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: '¿Qué es Los Cumpas de la Suerte?',
      a: 'Es una plataforma prémium de sorteos mensuales donde puedes adquirir tickets para participar por increíbles premios como autos 0 km, tecnología de última generación y más.'
    },
    {
      q: '¿Cómo me registro?',
      a: 'Es muy sencillo: compra uno o más tickets, completa tu registro con tu DNI (verificado con RENIEC), tu correo y contraseña. ¡Así de fácil quedas participando!'
    },
    {
      q: '¿Puedo participar desde el extranjero?',
      a: 'Sí, puedes participar desde cualquier parte del mundo. Sin embargo, la entrega física de los premios principales está sujeta a los términos y condiciones locales en el Perú, o su equivalente en valor.'
    },
    {
      q: '¿Cuándo son los sorteos?',
      a: 'Los sorteos son mensuales y se realizan el último día hábil de cada mes. Los resultados se transmiten en vivo por nuestras redes sociales oficiales (@loscumpasdelasuerte).'
    },
    {
      q: '¿Cómo sé que todo es legal?',
      a: 'Contamos con total transparencia en cada sorteo. Todos los ganadores se seleccionan de manera aleatoria certificada y los sorteos se realizan bajo supervisión legal para garantizar la máxima seguridad.'
    },
    {
      q: '¿Cómo me contactan si soy ganador?',
      a: 'Nos comunicaremos contigo directamente a través del correo electrónico registrado en tu cuenta dentro de las 48 horas siguientes al sorteo. Además, publicamos la lista oficial en nuestra sección de Ganadores.'
    },
    {
      q: '¿Cuánto cuesta cada ticket?',
      a: 'Cada ticket tiene un valor de S/ 50.00. No hay límite máximo de tickets por participante. Cada ticket que adquieres te otorga un número único de participación, aumentando tus probabilidades de ganar.'
    },
    {
      q: '¿Cuánto demora la entrega del premio?',
      a: 'Para premios digitales y tecnológicos la entrega se realiza en un plazo de 3 a 5 días hábiles. Para autos y premios mayores, la entrega física se coordina en un máximo de 15 días hábiles.'
    },
    {
      q: '¿Puedo cancelar o reembolsar mi ticket?',
      a: 'Los tickets no son reembolsables una vez adquiridos, ya que quedan registrados en el sistema del sorteo activo. Te recomendamos revisar las fechas de sorteo antes de comprar.'
    },
    {
      q: '¿Qué métodos de pago aceptan?',
      a: 'Aceptamos pagos a través de la pasarela Flow Pagos, que permite tarjetas de crédito, débito y otros métodos de pago locales de forma segura con cifrado SSL.'
    }
  ];

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="auth-page" style={{ alignItems: 'flex-start', padding: '60px 20px' }}>
      <div style={{
        maxWidth: '820px',
        width: '100%',
        margin: '0 auto',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,225,110,0.12)',
        borderRadius: '24px',
        padding: '48px 52px',
        backdropFilter: 'blur(20px)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '32px', borderBottom: '1px solid rgba(255,225,110,0.15)', paddingBottom: '24px' }}>
          <span style={{ fontSize: '36px' }}>❓</span>
          <div>
            <p style={{ color: '#ffe16e', fontSize: '11px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', margin: 0 }}>Los Cumpas de la Suerte</p>
            <h1 style={{ color: '#fff', fontSize: '26px', fontFamily: 'Impact, sans-serif', textTransform: 'uppercase', margin: '4px 0 0' }}>Preguntas</h1>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  borderRadius: '14px',
                  border: `1px solid ${isOpen ? 'rgba(255,225,110,0.35)' : 'rgba(255,255,255,0.08)'}`,
                  background: isOpen ? 'rgba(255,225,110,0.06)' : 'rgba(255,255,255,0.02)',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '18px 22px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: isOpen ? '#ffe16e' : '#fff',
                    fontSize: '15px',
                    fontWeight: '600',
                    textAlign: 'left',
                    gap: '12px',
                    transition: 'color 0.2s',
                  }}
                >
                  <span>{faq.q}</span>
                  <span style={{
                    fontSize: '20px',
                    fontWeight: '300',
                    flexShrink: 0,
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease',
                    color: '#ffe16e',
                  }}>+</span>
                </button>
                {isOpen && (
                  <div style={{ padding: '0 22px 18px', color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: '1.75' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <a href="#inicio" style={{ color: '#ffe16e', fontWeight: '700', fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            ← Volver al Inicio
          </a>
        </div>
      </div>
    </div>
  );
}

function LegalPage({ title, icon, children }) {
  return (
    <div className="auth-page" style={{ alignItems: 'flex-start', padding: '60px 20px' }}>
      <div style={{
        maxWidth: '820px',
        width: '100%',
        margin: '0 auto',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,225,110,0.12)',
        borderRadius: '24px',
        padding: '48px 52px',
        backdropFilter: 'blur(20px)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '32px', borderBottom: '1px solid rgba(255,225,110,0.15)', paddingBottom: '24px' }}>
          <span style={{ fontSize: '36px' }}>{icon}</span>
          <div>
            <p style={{ color: '#ffe16e', fontSize: '11px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', margin: 0 }}>Los Cumpas de la Suerte</p>
            <h1 style={{ color: '#fff', fontSize: '26px', fontFamily: 'Impact, sans-serif', textTransform: 'uppercase', margin: '4px 0 0' }}>{title}</h1>
          </div>
        </div>
        <div style={{ color: 'rgba(255,255,255,0.75)', lineHeight: '1.8', fontSize: '15px' }}>
          {children}
        </div>
        <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <a href="#inicio" style={{ color: '#ffe16e', fontWeight: '700', fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            ← Volver al Inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export function TerminosPage() {
  return (
    <LegalPage title="Términos y Condiciones" icon="📋">
      <h2 style={{ color: '#ffe16e', fontSize: '16px', marginTop: '0' }}>1. Aceptación de los Términos</h2>
      <p>Al acceder y utilizar la plataforma <strong>Los Cumpas de la Suerte</strong>, el usuario acepta íntegramente los presentes términos y condiciones. Si no está de acuerdo con alguno de los términos aquí establecidos, deberá abstenerse de utilizar nuestros servicios.</p>

      <h2 style={{ color: '#ffe16e', fontSize: '16px' }}>2. Descripción del Servicio</h2>
      <p>Los Cumpas de la Suerte es una plataforma de sorteos mensuales legalmente constituida en el Perú. La participación se realiza mediante la adquisición de tickets con un valor de <strong>S/ 50.00</strong> cada uno. Cada ticket otorga un número único de participación en el sorteo mensual correspondiente.</p>

      <h2 style={{ color: '#ffe16e', fontSize: '16px' }}>3. Requisitos de Participación</h2>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Ser mayor de 18 años.</li>
        <li>Ser ciudadano peruano o residente legal en el Perú.</li>
        <li>Proporcionar datos verídicos al momento del registro (DNI válido).</li>
        <li>No estar inhabilitado por resolución judicial o administrativa.</li>
      </ul>

      <h2 style={{ color: '#ffe16e', fontSize: '16px' }}>4. Mecánica del Sorteo</h2>
      <p>Los sorteos se realizan el último día hábil de cada mes. El ganador es seleccionado mediante un sistema aleatorio certificado y transparente. El resultado es inapelable. El ganador será notificado por los medios de contacto registrados dentro de las 48 horas siguientes al sorteo.</p>

      <h2 style={{ color: '#ffe16e', fontSize: '16px' }}>5. Responsabilidad</h2>
      <p>Los Cumpas de la Suerte no se hace responsable por errores en los datos proporcionados por el usuario, ni por la imposibilidad de contactar al ganador por información incorrecta. Los premios no son canjeables por dinero en efectivo salvo indicación expresa.</p>

      <h2 style={{ color: '#ffe16e', fontSize: '16px' }}>6. Modificaciones</h2>
      <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán publicados en esta página con indicación de la fecha de actualización. La continuación del uso del servicio implica la aceptación de los nuevos términos.</p>

      <p style={{ marginTop: '32px', color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>Última actualización: Junio 2026 · RUC: 20611347116</p>
    </LegalPage>
  );
}

export function PrivacidadPage() {
  return (
    <LegalPage title="Políticas de Privacidad" icon="🔒">
      <h2 style={{ color: '#ffe16e', fontSize: '16px', marginTop: '0' }}>1. Datos que Recopilamos</h2>
      <p>Recopilamos los siguientes datos personales cuando te registras en nuestra plataforma:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Número de DNI (verificado con RENIEC).</li>
        <li>Nombre completo y apellidos.</li>
        <li>Correo electrónico.</li>
        <li>Historial de tickets adquiridos.</li>
      </ul>

      <h2 style={{ color: '#ffe16e', fontSize: '16px' }}>2. Uso de la Información</h2>
      <p>Tus datos son utilizados exclusivamente para:</p>
      <ul style={{ paddingLeft: '20px' }}>
        <li>Verificar tu identidad y habilitar tu participación en los sorteos.</li>
        <li>Notificarte en caso de resultar ganador.</li>
        <li>Enviarte información sobre nuevos sorteos y premios (con tu consentimiento).</li>
        <li>Cumplir con las obligaciones legales y tributarias aplicables.</li>
      </ul>

      <h2 style={{ color: '#ffe16e', fontSize: '16px' }}>3. Protección de Datos</h2>
      <p>Implementamos medidas técnicas y organizativas adecuadas para proteger tus datos personales frente a accesos no autorizados, pérdida o divulgación. Tus datos se almacenan en servidores seguros con cifrado SSL.</p>

      <h2 style={{ color: '#ffe16e', fontSize: '16px' }}>4. Compartición de Datos</h2>
      <p>No vendemos ni cedemos tus datos a terceros. Solo podremos compartir información con autoridades competentes cuando así lo exija la ley peruana, o con proveedores de pago para procesar tus transacciones de forma segura.</p>

      <h2 style={{ color: '#ffe16e', fontSize: '16px' }}>5. Tus Derechos (ARCO)</h2>
      <p>De conformidad con la Ley N° 29733 — Ley de Protección de Datos Personales del Perú, tienes derecho a <strong>Acceder, Rectificar, Cancelar y Oponerte</strong> al tratamiento de tus datos. Puedes ejercer estos derechos escribiéndonos a <a href="mailto:soporte@loscumpasdelasuerte.com" style={{ color: '#ffe16e' }}>soporte@loscumpasdelasuerte.com</a>.</p>

      <p style={{ marginTop: '32px', color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>Última actualización: Junio 2026 · RUC: 20611347116</p>
    </LegalPage>
  );
}

export function GestionPage() {
  return (
    <LegalPage title="Política del Sistema Integrado de Gestión" icon="⚙️">
      <h2 style={{ color: '#ffe16e', fontSize: '16px', marginTop: '0' }}>Nuestro Compromiso</h2>
      <p><strong>Los Cumpas de la Suerte</strong> se compromete a operar bajo los más altos estándares de calidad, ética y transparencia. Nuestro Sistema Integrado de Gestión (SIG) engloba las dimensiones de Calidad, Antisoborno y Responsabilidad Social.</p>

      <h2 style={{ color: '#ffe16e', fontSize: '16px' }}>Calidad del Servicio</h2>
      <p>Nos comprometemos a mantener la excelencia en todos nuestros procesos: desde la adquisición de tickets hasta la entrega del premio al ganador. Buscamos la mejora continua basada en el feedback de nuestros participantes y en la revisión periódica de nuestros procesos internos.</p>

      <h2 style={{ color: '#ffe16e', fontSize: '16px' }}>Política Antisoborno</h2>
      <p>Los Cumpas de la Suerte tiene tolerancia cero hacia cualquier forma de corrupción, soborno o conducta fraudulenta. Todos nuestros colaboradores y proveedores están obligados a cumplir con esta política. Contamos con un canal de denuncias confidencial para reportar irregularidades.</p>

      <h2 style={{ color: '#ffe16e', fontSize: '16px' }}>Transparencia en los Sorteos</h2>
      <p>Todos los sorteos son realizados con mecanismos auditables. Los participantes pueden solicitar la verificación del proceso de selección. Los resultados son publicados en nuestras redes sociales oficiales de forma inmediata tras cada sorteo.</p>

      <h2 style={{ color: '#ffe16e', fontSize: '16px' }}>Revisión y Mejora</h2>
      <p>Esta política es revisada anualmente por la Dirección de la empresa para asegurar su vigencia y efectividad, y adaptarla a los cambios regulatorios y del entorno.</p>

      <p style={{ marginTop: '32px', color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>Última actualización: Junio 2026 · RUC: 20611347116</p>
    </LegalPage>
  );
}

export function CookiesPage() {
  return (
    <LegalPage title="Política de Cookies" icon="🍪">
      <h2 style={{ color: '#ffe16e', fontSize: '16px', marginTop: '0' }}>¿Qué son las Cookies?</h2>
      <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Nos permiten recordar tus preferencias y mejorar tu experiencia de navegación en <strong>Los Cumpas de la Suerte</strong>.</p>

      <h2 style={{ color: '#ffe16e', fontSize: '16px' }}>Tipos de Cookies que Utilizamos</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', marginTop: '8px' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid rgba(255,225,110,0.2)' }}>
            <th style={{ textAlign: 'left', padding: '10px 8px', color: '#ffe16e' }}>Tipo</th>
            <th style={{ textAlign: 'left', padding: '10px 8px', color: '#ffe16e' }}>Finalidad</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid rgba(255,255,0,0.06)' }}>
            <td style={{ padding: '10px 8px', fontWeight: '700' }}>Esenciales</td>
            <td style={{ padding: '10px 8px' }}>Necesarias para el funcionamiento básico del sitio (sesión de usuario, carrito).</td>
          </tr>
          <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <td style={{ padding: '10px 8px', fontWeight: '700' }}>Analíticas</td>
            <td style={{ padding: '10px 8px' }}>Nos ayudan a entender cómo interactúan los usuarios con el sitio para mejorar la experiencia.</td>
          </tr>
          <tr>
            <td style={{ padding: '10px 8px', fontWeight: '700' }}>Preferencias</td>
            <td style={{ padding: '10px 8px' }}>Recuerdan tus ajustes para personalizar tu visita.</td>
          </tr>
        </tbody>
      </table>

      <h2 style={{ color: '#ffe16e', fontSize: '16px' }}>Control de Cookies</h2>
      <p>Puedes controlar y/o eliminar las cookies cuando lo desees a través de la configuración de tu navegador. Ten en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad del sitio, como mantener tu sesión iniciada.</p>

      <h2 style={{ color: '#ffe16e', fontSize: '16px' }}>Cookies de Terceros</h2>
      <p>Utilizamos servicios de pago (Flow) que pueden instalar sus propias cookies durante el proceso de transacción. Estas están sujetas a las políticas de privacidad de dichos terceros.</p>

      <p style={{ marginTop: '32px', color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>Última actualización: Junio 2026 · RUC: 20611347116</p>
    </LegalPage>
  );
}

export function ReglamentoPage() {
  return (
    <LegalPage title="Reglamento de Sorteos" icon="📜">
      <h2 style={{ color: '#ffe16e', fontSize: '16px', marginTop: '0' }}>Artículo 1 — Organizador</h2>
      <p>Los sorteos son organizados por <strong>Los Cumpas de la Suerte</strong>, con RUC N° 20611347116, domicilio fiscal en Lima, Perú. La empresa se encuentra debidamente autorizada para la realización de sorteos conforme a la normativa peruana vigente.</p>

      <h2 style={{ color: '#ffe16e', fontSize: '16px' }}>Artículo 2 — Periodicidad</h2>
      <p>Los sorteos son de periodicidad <strong>mensual</strong>. Se realiza un sorteo principal por mes, el último día hábil del mes calendario. Los premios de cada mes son publicados en la plataforma al inicio de dicho mes.</p>

      <h2 style={{ color: '#ffe16e', fontSize: '16px' }}>Artículo 3 — Adquisición de Tickets</h2>
      <p>Cada ticket tiene un valor de <strong>S/ 50.00</strong> (cincuenta soles). No hay límite máximo de tickets por participante. Cada ticket genera un número único e irrepetible de participación. Los tickets no son transferibles ni reembolsables una vez adquiridos.</p>

      <h2 style={{ color: '#ffe16e', fontSize: '16px' }}>Artículo 4 — Mecánica del Sorteo</h2>
      <p>El sorteo se realiza mediante un sistema de selección aleatoria digital debidamente auditado. El proceso es filmado y se transmite en vivo por las redes sociales oficiales de Los Cumpas de la Suerte (@loscumpasdelasuerte). El resultado es definitivo e inapelable.</p>

      <h2 style={{ color: '#ffe16e', fontSize: '16px' }}>Artículo 5 — Entrega del Premio</h2>
      <p>El ganador es notificado en un plazo máximo de 48 horas tras el sorteo por correo electrónico y/o llamada telefónica. Deberá acreditar su identidad con el DNI original para reclamar el premio. Si el ganador no se presenta en 30 días calendario, se procederá a un nuevo sorteo.</p>

      <h2 style={{ color: '#ffe16e', fontSize: '16px' }}>Artículo 6 — Exclusiones</h2>
      <p>Quedan excluidos de participar los colaboradores directos de Los Cumpas de la Suerte y sus familiares en primer grado. Asimismo, toda persona que haya proporcionado datos falsos será descalificada automáticamente y no tendrá derecho al premio.</p>

      <h2 style={{ color: '#ffe16e', fontSize: '16px' }}>Artículo 7 — Jurisdicción</h2>
      <p>Cualquier controversia derivada del presente reglamento se resolverá conforme a las leyes de la República del Perú, siendo competentes los juzgados y tribunales de la ciudad de Lima.</p>

      <p style={{ marginTop: '32px', color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>Última actualización: Junio 2026 · RUC: 20611347116</p>
    </LegalPage>
  );
}
