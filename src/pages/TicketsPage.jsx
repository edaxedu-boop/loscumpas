import React, { useState } from 'react';

const getPlanes = (billingPeriod) => {
  const multipliers = {
    mensual: { label: '/mes', factor: 1, text: 'Facturado mensual' },
    semestral: { label: '/mes', factor: 0.9, text: 'Facturado semestral (10% desc.)' },
    anual: { label: '/mes', factor: 0.8, text: 'Facturado anual (20% desc.)' }
  };
  
  const current = multipliers[billingPeriod] || multipliers.mensual;

  return [
    {
      id: 'gratis',
      nombre: 'Gratis',
      precio: 0,
      qty: 0,
      tag: null,
      color: '#ffffff',
      border: 'rgba(132, 93, 6, 0.25)',
      badge: null,
      beneficios: [
        '1 oportunidad de suerte',
        'Válido para algunos premios',
        'Notificaciones de resultados',
      ],
      cta: 'SUSCRIBIRME',
      free: true,
      sublabel: 'Plan gratuito',
    },
    {
      id: 'basico',
      nombre: 'Básico',
      precio: Math.round(15 * current.factor),
      qty: 1,
      tag: null,
      color: '#ffffff',
      border: '#e0a924',
      badge: null,
      beneficios: [
        '1 oportunidad de la suerte',
        'Sorteo mensual garantizado',
        'Soporte por WhatsApp',
      ],
      cta: 'SUSCRIBIRME',
      free: false,
      sublabel: current.text,
    },
    {
      id: 'intermedio',
      nombre: 'Intermedio',
      precio: Math.round(50 * current.factor),
      qty: 5,
      tag: 'MÁS POPULAR',
      color: '#ffffff',
      border: '#f5c430',
      badge: 'popular',
      beneficios: [
        '5 oportunidades de la suerte',
        'Sorteo mensual garantizado',
        'Acceso a premios exclusivos',
        'Soporte prioritario',
      ],
      cta: 'SUSCRIBIRME',
      free: false,
      sublabel: current.text,
    },
    {
      id: 'avanzado',
      nombre: 'Avanzado',
      precio: Math.round(90 * current.factor),
      qty: 10,
      tag: 'MEJOR VALOR',
      color: '#ffffff',
      border: '#ff8c00',
      badge: 'premium',
      beneficios: [
        '10 oportunidades de la suerte',
        'Todos los sorteos del mes',
        'Premios VIP exclusivos',
        'Doble chance en el gran sorteo',
        'Soporte VIP dedicado',
      ],
      cta: 'SUSCRIBIRME',
      free: false,
      sublabel: current.text,
    },
  ];
};

export function TicketsPage({ onCheckout }) {
  const [billingPeriod, setBillingPeriod] = useState('mensual');
  const [selected, setSelected] = useState(null);

  const handleSelect = (plan) => {
    if (plan.free) {
      alert('¡Te has registrado en el plan Gratis! Recibirás tu número de la suerte pronto.');
      return;
    }
    setSelected(plan.id);
    onCheckout(plan.qty);
  };

  const planes = getPlanes(billingPeriod);

  return (
    <div className="tickets-page" style={{ paddingBottom: '60px' }}>
      <div className="page-header" style={{ marginBottom: '36px' }}>
        <span className="page-badge">Planes</span>
        <h1 className="page-title">Elige tu Suscripción</h1>
        <p className="page-subtitle">
          Selecciona el plan que mejor se adapte a ti. ¡Más oportunidades, más chances de ganar!
        </p>
      </div>

      {/* Período de facturación selector */}
      <div className="billing-selector-container" style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        marginBottom: '48px',
        padding: '0 20px',
        flexWrap: 'wrap',
      }}>
        {['mensual', 'semestral', 'anual'].map((period) => (
          <button
            key={period}
            onClick={() => setBillingPeriod(period)}
            style={{
              padding: '12px 28px',
              borderRadius: '30px',
              border: billingPeriod === period ? '2.5px solid #f5c430' : '2.5px solid rgba(255, 255, 255, 0.15)',
              background: billingPeriod === period 
                ? 'linear-gradient(135deg, #f5c430, #e09800)' 
                : 'rgba(255, 255, 255, 0.05)',
              color: billingPeriod === period ? '#110a02' : '#ffffff',
              fontWeight: '900',
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: billingPeriod === period ? '0 8px 20px rgba(245,196,48,0.3)' : 'none',
            }}
          >
            {period === 'mensual' ? 'Mensual' : period === 'semestral' ? 'Semestral' : 'Anual'}
          </button>
        ))}
      </div>

      <div className="tickets-packs-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
        gap: '24px',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 20px',
        alignItems: 'stretch',
      }}>
        {planes.map((plan) => (
          <div
            key={plan.id}
            className={`ticket-pack-card${plan.badge ? ` ${plan.badge}` : ''}`}
            style={{
              position: 'relative',
              background: plan.color,
              border: `2.5px solid ${plan.border}`,
              borderRadius: '20px',
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              height: '100%',
              boxSizing: 'border-box',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              boxShadow: plan.badge === 'popular' ? '0 10px 32px rgba(245,196,48,0.4)' : '0 8px 24px rgba(0,0,0,0.15)',
            }}
          >
            {plan.tag && (
              <div style={{
                position: 'absolute',
                top: '-14px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: plan.badge === 'popular' ? '#f5c430' : '#ff8c00',
                color: '#110a02',
                fontWeight: '900',
                fontSize: '11px',
                letterSpacing: '1.5px',
                padding: '4px 16px',
                borderRadius: '20px',
                whiteSpace: 'nowrap',
                zIndex: 2,
              }}>
                {plan.tag}
              </div>
            )}

            <div>
              <p style={{ color: '#845d06', opacity: 0.65, fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px', fontWeight: 'bold' }}>
                Plan
              </p>
              <h3 style={{ color: '#845d06', fontSize: '26px', fontWeight: '950', margin: 0 }}>
                {plan.nombre}
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                {plan.free ? (
                  <span style={{ fontSize: '40px', fontWeight: '950', color: '#845d06' }}>GRATIS</span>
                ) : (
                  <>
                    <span style={{ fontSize: '14px', color: '#845d06', marginTop: '8px', fontWeight: 'bold' }}>S/</span>
                    <span style={{ fontSize: '42px', fontWeight: '950', color: '#2b1b04', lineHeight: 1 }}>{plan.precio}</span>
                    <span style={{ fontSize: '13px', color: '#845d06', fontWeight: 'bold' }}>/mes</span>
                  </>
                )}
              </div>
              {!plan.free && (
                <span style={{ fontSize: '11px', color: '#845d06', opacity: 0.8, fontWeight: 'bold', letterSpacing: '0.5px' }}>
                  {plan.sublabel}
                </span>
              )}
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
              {plan.beneficios.map((b, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#3d2b16', fontSize: '14px', textAlign: 'left', fontWeight: '600' }}>
                  <span style={{ color: '#845d06', fontSize: '16px', flexShrink: 0, fontWeight: 'bold' }}>✓</span>
                  {b}
                </li>
              ))}
            </ul>

            <button
              className={`ticket-buy-btn${plan.badge === 'popular' ? ' popular' : ''}`}
              type="button"
              onClick={() => handleSelect(plan)}
              style={{
                background: plan.badge === 'popular'
                  ? 'linear-gradient(135deg, #f5c430, #e09800)'
                  : 'transparent',
                border: plan.badge === 'popular' ? '2px solid transparent' : `2px solid ${plan.border}`,
                color: plan.badge === 'popular' ? '#110a02' : '#845d06',
                fontWeight: '900',
                fontSize: '14px',
                height: '52px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                width: '100%',
              }}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
