import React from 'react';
import { Gift, Zap, Shield, Bell, Users, MessageSquare, Award, Sparkles } from 'lucide-react';

export function BeneficiosPage() {
  const benefits = [
    {
      icon: <Gift size={32} color="#845d06" />,
      title: "Sorteos Todos los Meses",
      desc: "Olvídate de comprar boletos individuales. Al estar suscrito, participas automáticamente en todos los sorteos del mes."
    },
    {
      icon: <Zap size={32} color="#845d06" />,
      title: "Multiplicador de Oportunidades",
      desc: "Entre más alto sea tu plan de suscripción, más oportunidades automáticas de ganar se te asignarán en cada sorteo."
    },
    {
      icon: <Award size={32} color="#845d06" />,
      title: "Acceso a Premios VIP",
      desc: "Accede a sorteos premium exclusivos con premios de alto valor como autos 0KM, viajes de ensueño y tecnología de punta."
    },
    {
      icon: <Bell size={32} color="#845d06" />,
      title: "Alertas y Notificaciones",
      desc: "Recibe de forma inmediata tus números de la suerte asignados y notificaciones de ganadores directo en tu WhatsApp y correo."
    },
    {
      icon: <Users size={32} color="#845d06" />,
      title: "Comunidad Exclusiva",
      desc: "Disfruta de descuentos especiales y preventas con comercios y marcas aliadas asociadas a Los Cumpas de la Suerte."
    },
    {
      icon: <MessageSquare size={32} color="#845d06" />,
      title: "Soporte VIP Personalizado",
      desc: "Línea de soporte dedicada a través de WhatsApp para asistirte de inmediato con cualquier consulta sobre tu plan."
    }
  ];

  return (
    <div className="beneficios-page" style={{ paddingBottom: '60px', position: 'relative', zIndex: 10 }}>
      <div className="page-header" style={{ marginBottom: '48px', textAlign: 'center' }}>
        <span className="page-badge">Beneficios Exclusivos</span>
        <h1 className="page-title">¿Por qué ser un Cumpa Activo?</h1>
        <p className="page-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Tu suscripción mensual no solo te acerca a tus sueños, sino que te brinda un ecosistema de ventajas únicas diseñadas para ti.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {benefits.map((benefit, idx) => (
          <div 
            key={idx} 
            className="benefit-card"
            style={{
              background: '#ffffff',
              border: '2.5px solid rgba(245, 196, 48, 0.3)',
              borderRadius: '24px',
              padding: '36px 30px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.border = '2.5px solid #f5c430';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(245, 196, 48, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.border = '2.5px solid rgba(245, 196, 48, 0.3)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
            }}
          >
            <div style={{
              background: 'linear-gradient(135deg, rgba(245,196,48,0.15), rgba(224,152,0,0.05))',
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '8px',
              border: '1.5px solid rgba(132, 93, 6, 0.2)'
            }}>
              {benefit.icon}
            </div>
            
            <h3 style={{
              fontSize: '20px',
              fontWeight: '900',
              color: '#845d06',
              margin: 0
            }}>
              {benefit.title}
            </h3>
            
            <p style={{
              fontSize: '14.5px',
              color: '#3d2b16',
              lineHeight: '1.6',
              margin: 0,
              fontWeight: '600'
            }}>
              {benefit.desc}
            </p>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '60px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(255,225,110,0.08), rgba(243,173,25,0.01))',
        border: '1.5px solid rgba(255, 225, 110, 0.2)',
        borderRadius: '32px',
        padding: '48px 32px',
        maxWidth: '700px',
        margin: '60px auto 0',
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 10
      }}>
        <Sparkles size={28} color="#ffe16e" style={{ marginBottom: '16px' }} />
        <h2 style={{ fontSize: '24px', fontWeight: '900', color: '#fff', margin: '0 0 12px 0' }}>
          ¿Listo para empezar a ganar?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', maxWidth: '500px', margin: '0 auto 24px', lineHeight: '1.6' }}>
          Únete a miles de peruanos suscritos y obtén tu primer número de la suerte en menos de 2 minutos.
        </p>
        <a 
          href="#tickets" 
          style={{
            display: 'inline-block',
            padding: '14px 36px',
            background: 'linear-gradient(135deg, #f5c430, #e09800)',
            color: '#110a02',
            fontWeight: '900',
            fontSize: '16px',
            textDecoration: 'none',
            borderRadius: '14px',
            boxShadow: '0 8px 24px rgba(245,196,48,0.35)',
            transition: 'all 0.2s ease',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 12px 30px rgba(245,196,48,0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(245,196,48,0.35)';
          }}
        >
          Ver Planes y Suscribirme
        </a>
      </div>
    </div>
  );
}
