import React from 'react';

export function ComoFuncionaPage() {
  const steps = [
    {
      num: '1',
      title: 'Elige tu Participación',
      desc: 'Adquiere tickets individuales de S/ 50 para el sorteo de tu preferencia o únete a la suscripción premium para participar automáticamente en todos los sorteos del año.'
    },
    {
      num: '2',
      title: 'Recibe tus Números',
      desc: 'Tus tickets digitales se generan al instante con números de serie únicos y se envían directamente a tu correo electrónico y a tu zona de usuario.'
    },
    {
      num: '3',
      title: 'Sintoniza los Sorteos',
      desc: 'Todos los domingos a las 8:00 PM transmitimos en vivo los sorteos en nuestras redes oficiales usando un sistema certificado y bajo supervisión legal.'
    },
    {
      num: '4',
      title: 'Reclama tu Premio',
      desc: 'Si resultas ganador, nuestro equipo VIP te contactará inmediatamente para coordinar la entrega física del premio a cualquier parte del Perú de forma segura.'
    }
  ];

  return (
    <div className="como-funciona-page">
      <div className="page-header">
        <span className="page-badge">Guía del Cumpa</span>
        <h1 className="page-title">¿Cómo Funciona?</h1>
        <p className="page-subtitle">Participar en Los Cumpas de la Suerte es súper fácil. Sigue estos simples pasos y empieza a soñar en grande.</p>
      </div>

      <div className="steps-timeline">
        {steps.map((step, idx) => (
          <div className="step-item" key={idx}>
            <div className="step-number-bubble">{step.num}</div>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="guarantees-banner">
        <h3>Nuestras Garantías de Transparencia</h3>
        <div className="guarantees-grid">
          <div className="guarantee-card">
            <h4>Transmisión en Vivo</h4>
            <p>Nada es pregrabado. Todos los sorteos se realizan con bolillero digital certificado en tiempo real.</p>
          </div>
          <div className="guarantee-card">
            <h4>Supervisión Notarial</h4>
            <p>Cada edición cuenta con la presencia de un Notario Público que da fe de la legalidad del sorteo.</p>
          </div>
          <div className="guarantee-card">
            <h4>Entrega Asegurada</h4>
            <p>Garantizamos el 100% de la entrega de los premios físicos o el depósito del equivalente en efectivo.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
