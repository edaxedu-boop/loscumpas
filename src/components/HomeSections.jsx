import React, { useState } from 'react';
import { cloverImages } from '../data/prizes';
import { Gift, Zap, Shield, Bell, Users, MessageSquare, Award, Sparkles } from 'lucide-react';

export function Car({ variant = 0 }) {
  const colors = ['#be861c', '#e0ac38', '#f6f1df', '#c8962d', '#d8a43a'];
  return (
    <div className={`car car-${variant}`}>
      <svg viewBox="0 0 260 110" role="img" aria-label="Auto premio">
        <defs>
          <linearGradient id={`body-${variant}`} x1="0" x2="1">
            <stop offset="0" stopColor="#6a450b" />
            <stop offset="0.22" stopColor={colors[variant]} />
            <stop offset="0.55" stopColor="#fff4b6" />
            <stop offset="1" stopColor="#8a5a12" />
          </linearGradient>
          <linearGradient id={`glass-${variant}`} x1="0" x2="1">
            <stop offset="0" stopColor="#120d08" />
            <stop offset="1" stopColor="#6b4c1e" />
          </linearGradient>
        </defs>
        <path className="car-shadow" d="M25 92 C55 104 204 104 238 91" />
        <path className="car-body" fill={`url(#body-${variant})`} d="M26 70 C42 43 66 39 93 38 L123 20 C145 10 183 18 201 40 C221 43 242 55 250 75 L242 91 L32 91 Z" />
        <path fill={`url(#glass-${variant})`} d="M94 42 L126 25 C142 20 168 22 185 42 Z" />
        <path fill="#0b0704" d="M74 91 A22 22 0 1 0 74 47 A22 22 0 0 0 74 91 M198 91 A22 22 0 1 0 198 47 A22 22 0 0 0 198 91" />
        <path fill="#d9b250" d="M74 82 A13 13 0 1 0 74 56 A13 13 0 0 0 74 82 M198 82 A13 13 0 1 0 198 56 A13 13 0 0 0 198 82" />
        <path fill="#fff2a6" d="M36 70 L61 63 L65 72 L39 77 Z M219 64 L244 70 L238 79 L216 74 Z" />
        <rect x="114" y="73" width="42" height="14" rx="4" fill="#2a1504" />
        <text x="135" y="83" textAnchor="middle" fontSize="12" fontWeight="900" fill="#ffca2f">NHSS</text>
      </svg>
    </div>
  );
}

export function Character() {
  return (
    <div className="character" aria-hidden="true">
      <div className="cap" />
      <div className="head">
        <div className="glasses" />
        <div className="mouth" />
      </div>
      <div className="hand" />
      <div className="shirt" />
      <div className="chain" />
    </div>
  );
}

export function TrustSection() {
  return (
    <section className="trust-section">
      <div className="trust-card">
        <div className="trust-card-left">
          <h2 className="trust-title">
            ¡Confía en tu suerte!
          </h2>
          <p className="trust-subtitle">Premios increíbles todos los meses</p>
          <div className="trust-btns">
            <button className="trust-btn-outline" type="button">Todos los premios</button>
            <button className="trust-btn-gold" type="button">¡Suscribirme ya!</button>
          </div>
        </div>
        <div className="trust-card-right">
          <div className="clover-wrap">
            <div className="clover-grid">
              {cloverImages.map((img, i) => (
                <div className="clover-cell" key={i}>
                  <img src={img.src} alt={img.alt} className="clover-img" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SubscriptionSection() {
  const benefits = [
    {
      icon: (
        <svg viewBox="0 0 64 64" width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg" className="benefit-icon">
          <defs>
            <linearGradient id="gold-icon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffe16e" />
              <stop offset="50%" stopColor="#f3ad19" />
              <stop offset="100%" stopColor="#c97c00" />
            </linearGradient>
          </defs>
          <path d="M6 18C6 16 7.6 14 9.6 14H54.4C56.4 14 58 16 58 18V26C55.5 26 53.5 28 53.5 30.5C53.5 33 55.5 35 58 35V43C58 45 56.4 47 54.4 47H9.6C7.6 47 6 45 6 43V35C8.5 35 10.5 33 10.5 30.5C10.5 28 8.5 26 6 26V18Z" fill="rgba(201, 124, 0, 0.1)" stroke="url(#gold-icon-grad)" strokeWidth="2.5" />
          <line x1="20" y1="14" x2="20" y2="47" stroke="url(#gold-icon-grad)" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="34" cy="24" r="3" stroke="url(#gold-icon-grad)" strokeWidth="2.5" />
          <line x1="43" y1="21" x2="31" y2="39" stroke="url(#gold-icon-grad)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="40" cy="36" r="3" stroke="url(#gold-icon-grad)" strokeWidth="2.5" />
        </svg>
      ),
      title: 'Descuentos y Promos',
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg" className="benefit-icon">
          <rect x="8" y="24" width="20" height="16" rx="6" fill="rgba(201, 124, 0, 0.1)" stroke="url(#gold-icon-grad)" strokeWidth="2.5" />
          <rect x="36" y="24" width="20" height="16" rx="6" fill="rgba(201, 124, 0, 0.1)" stroke="url(#gold-icon-grad)" strokeWidth="2.5" />
          <path d="M28 28C30 26 34 26 36 28" stroke="url(#gold-icon-grad)" strokeWidth="3" strokeLinecap="round" />
          <path d="M8 26C5 24 2 24 2 20" stroke="url(#gold-icon-grad)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M56 26C59 24 62 24 62 20" stroke="url(#gold-icon-grad)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M12 28L18 34" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          <path d="M40 28L46 34" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        </svg>
      ),
      title: 'Merch exclusivo',
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg" className="benefit-icon">
          <path d="M32 32C32 18 20 18 26 25C29 28 31 31 32 32Z" stroke="url(#gold-icon-grad)" strokeWidth="2.5" fill="rgba(201, 124, 0, 0.1)" />
          <path d="M32 32C32 18 44 18 38 25C35 28 33 31 32 32Z" stroke="url(#gold-icon-grad)" strokeWidth="2.5" fill="rgba(201, 124, 0, 0.1)" />
          <path d="M32 32C18 32 18 20 25 26C28 29 31 31 32 32Z" stroke="url(#gold-icon-grad)" strokeWidth="2.5" fill="rgba(201, 124, 0, 0.1)" />
          <path d="M32 32C18 32 18 44 25 38C28 35 31 33 32 32Z" stroke="url(#gold-icon-grad)" strokeWidth="2.5" fill="rgba(201, 124, 0, 0.1)" />
          <path d="M32 32C46 32 46 20 39 26C36 29 33 31 32 32Z" stroke="url(#gold-icon-grad)" strokeWidth="2.5" fill="rgba(201, 124, 0, 0.1)" />
          <path d="M32 32C46 32 46 44 39 38C36 35 33 33 32 32Z" stroke="url(#gold-icon-grad)" strokeWidth="2.5" fill="rgba(201, 124, 0, 0.1)" />
          <path d="M32 32C32 46 20 46 26 39C29 36 31 33 32 32Z" stroke="url(#gold-icon-grad)" strokeWidth="2.5" fill="rgba(201, 124, 0, 0.1)" />
          <path d="M32 32C32 46 44 46 38 39C35 36 33 33 32 32Z" stroke="url(#gold-icon-grad)" strokeWidth="2.5" fill="rgba(201, 124, 0, 0.1)" />
          <path d="M32 32C32 44 24 50 20 52" stroke="url(#gold-icon-grad)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
      title: 'Experiencias VIP',
    },
  ];

  return (
    <section className="sub-section" id="como-funciona">
      <div className="sub-header">
        <div className="sub-header-left">
          <h2 className="sub-title">Tus suscripciones exclusivas</h2>
          <p className="sub-subtitle">con cada suscripción obtienes acceso a:</p>
        </div>
        <button className="sub-btn-gold" type="button">
          Suscribirme
        </button>
      </div>

      <div className="sub-grid">
        {benefits.map((benefit, index) => (
          <div className="sub-card" key={index}>
            <div className="sub-card-icon-container">
              {benefit.icon}
            </div>
            <h3 className="sub-card-title">{benefit.title}</h3>
            <div className="sub-card-arrow">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PrizesSection({ prizes }) {
  const activePrizes = prizes ? prizes.filter(p => p.status === 'activo') : [];
  const marqueePrizes = [...activePrizes, ...activePrizes, ...activePrizes];

  return (
    <section className="prizes-section" id="premios">
      <div className="prizes-header">
        <div className="prizes-header-left">
          <span className="prizes-badge">Sorteos Activos</span>
          <h2 className="prizes-title">Premiazos del mes</h2>
        </div>
        <div className="prizes-header-right">
          <button className="prizes-btn" type="button">
                        ¡Suscribirme ya!
          </button>
        </div>
      </div>

      <div className="prizes-track-container">
        <div className="prizes-track">
          {marqueePrizes.map((prize, index) => (
            <div className="prizes-section-card" key={index}>
              <div className="prizes-section-card-img" style={{ backgroundImage: `url(${prize.image})` }} />
              <div className="prizes-section-card-overlay" />
              <div className="prizes-section-card-content">
                <span className="prizes-section-card-badge">{prize.value}</span>
                <h3 className="prizes-section-card-title">{prize.title}</h3>
                <a className="prizes-section-card-btn" href="#tickets" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>Suscribirme</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="prizes-footer-notice">
        <span>Anuncio publicitario. Aplican términos y condiciones. Conócelos en www.loscumpasdelasuerte.com</span>
      </div>
    </section>
  );
}

const row1Images = [
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635475/A_joyful_Peruvian_person_receiving_202606042356.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635475/A_Peruvian_elderly_person_receiving_202606042356.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635475/A_Peruvian_teenager_receiving_a_202606042356.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635476/A_Peruvian_family_in_a_202606042356.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635476/A_Peruvian_person_excitedly_gesturing_202606042356.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635476/A_delighted_Peruvian_person_celebrating_202606042356.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635476/A_Peruvian_person_happily_standing_202606042356.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635487/A_Peruvian_family_celebrating_together_202606042355.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635487/A_Peruvian_person_s_hands_receiving_202606042355.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635478/A_happy_Peruvian_person_surprised_202606042355.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635476/A_Peruvian_teenager_with_an_202606042355.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635477/A_Peruvian_person_holding_a_202606042355.jpg'
];

const row2Images = [
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635476/A_Peruvian_person_excitedly_gesturing_202606042356.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635476/A_delighted_Peruvian_person_celebrating_202606042356.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635476/A_Peruvian_person_happily_standing_202606042356.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635487/A_Peruvian_family_celebrating_together_202606042355.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635487/A_Peruvian_person_s_hands_receiving_202606042355.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635478/A_happy_Peruvian_person_surprised_202606042355.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635476/A_Peruvian_teenager_with_an_202606042355.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635477/A_Peruvian_person_holding_a_202606042355.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635475/A_joyful_Peruvian_person_receiving_202606042356.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635475/A_Peruvian_elderly_person_receiving_202606042356.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635475/A_Peruvian_teenager_receiving_a_202606042356.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635476/A_Peruvian_family_in_a_202606042356.jpg'
];

const row3Images = [
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635487/A_Peruvian_person_s_hands_receiving_202606042355.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635478/A_happy_Peruvian_person_surprised_202606042355.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635476/A_Peruvian_teenager_with_an_202606042355.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635477/A_Peruvian_person_holding_a_202606042355.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635475/A_joyful_Peruvian_person_receiving_202606042356.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635475/A_Peruvian_elderly_person_receiving_202606042356.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635475/A_Peruvian_teenager_receiving_a_202606042356.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635476/A_Peruvian_family_in_a_202606042356.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635476/A_Peruvian_person_excitedly_gesturing_202606042356.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635476/A_delighted_Peruvian_person_celebrating_202606042356.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635476/A_Peruvian_person_happily_standing_202606042356.jpg',
  'https://res.cloudinary.com/dl1pgzshh/image/upload/v1780635487/A_Peruvian_family_celebrating_together_202606042355.jpg'
];

export function WinnersSection() {
  const row1 = [...row1Images, ...row1Images, ...row1Images];
  const row2 = [...row2Images, ...row2Images, ...row2Images];
  const row3 = [...row3Images, ...row3Images, ...row3Images];

  return (
    <section className="winners-section" id="ganadores">
      <div className="winners-container">
        <div className="winners-header">
          <div className="winners-header-left">
            <div className="winners-cat-wrapper">
              <svg viewBox="0 0 100 100" className="winners-cat-svg">
                <defs>
                  <radialGradient id="cat-pink-grad" cx="35%" cy="30%" r="60%">
                    <stop offset="0%" stopColor="#ffecf0" />
                    <stop offset="60%" stopColor="#f48fb1" />
                    <stop offset="100%" stopColor="#c2185b" />
                  </radialGradient>
                  <linearGradient id="cat-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffe16e" />
                    <stop offset="100%" stopColor="#d9900e" />
                  </linearGradient>
                </defs>
                <path d="M 22 45 L 8 18 C 15 15, 30 25, 30 35 Z" fill="url(#cat-pink-grad)" stroke="#c2185b" strokeWidth="1.2" />
                <path d="M 78 45 L 92 18 C 85 15, 70 25, 70 35 Z" fill="url(#cat-pink-grad)" stroke="#c2185b" strokeWidth="1.2" />
                <path d="M 20 40 L 12 24 C 17 22, 25 28, 25 33 Z" fill="#ff80ab" />
                <path d="M 80 40 L 88 24 C 83 22, 75 28, 75 33 Z" fill="#ff80ab" />
                <ellipse cx="50" cy="72" rx="32" ry="24" fill="url(#cat-pink-grad)" stroke="#c2185b" strokeWidth="1.2" />
                <ellipse cx="50" cy="74" rx="20" ry="15" fill="#ffffff" />
                <circle cx="50" cy="46" r="28" fill="url(#cat-pink-grad)" stroke="#c2185b" strokeWidth="1.2" />
                <path d="M 33 42 C 35 39, 41 39, 43 42" stroke="#110a02" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M 67 42 C 65 39, 59 39, 57 42" stroke="#110a02" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <circle cx="28" cy="49" r="3" fill="#ff4081" opacity="0.6" />
                <circle cx="72" cy="49" r="3" fill="#ff4081" opacity="0.5" />
                <polygon points="49,48 51,48 50,50" fill="#110a02" />
                <path d="M 45 52 C 47 54, 50 54, 50 52 C 50 54, 53 54, 55 52" stroke="#110a02" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                <rect x="36" y="66" width="28" height="4" rx="2" fill="#d32f2f" />
                <circle cx="50" cy="70" r="5" fill="url(#cat-gold-grad)" stroke="#b1790b" strokeWidth="1" />
                <circle cx="50" cy="72" r="1.2" fill="#110a02" />
                <g>
                  <circle cx="24" cy="74" r="8" fill="url(#cat-pink-grad)" stroke="#c2185b" strokeWidth="1" />
                  <circle cx="24" cy="74" r="5.5" fill="url(#cat-gold-grad)" stroke="#b1790b" strokeWidth="1" />
                  <text x="24" y="77" fontSize="5" fontWeight="bold" textAnchor="middle" fill="#744a00" fontFamily="sans-serif">福</text>
                </g>
                <g className="winners-cat-paw">
                  <path d="M 68 55 C 72 55, 78 50, 78 44 C 78 38, 70 32, 66 38 C 62 44, 64 55, 68 55 Z" fill="url(#cat-pink-grad)" stroke="#c2185b" strokeWidth="1" />
                  <circle cx="72" cy="38" r="2.5" fill="#ff80ab" />
                  <circle cx="68" cy="40" r="2" fill="#ff80ab" />
                  <circle cx="76" cy="40" r="2" fill="#ff80ab" />
                </g>
              </svg>
            </div>
            <div className="winners-title-block">
              <span className="winners-badge">¡Tú podrías ser</span>
              <h2 className="winners-title">el próximo suertud@!</h2>
            </div>
          </div>
          <button className="winners-btn" type="button">
                        ¡Suscribirme ya!
          </button>
        </div>
      </div>

      <div className="winners-carousels-wrapper">
        <div className="winners-track-container">
          <div className="winners-track track-to-right">
            {row1.map((src, index) => (
              <div className="winners-card" key={index}>
                <img src={src} alt="Ganador" className="winners-card-img" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        <div className="winners-track-container">
          <div className="winners-track track-to-left">
            {row2.map((src, index) => (
              <div className="winners-card" key={index}>
                <img src={src} alt="Ganador" className="winners-card-img" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        <div className="winners-track-container">
          <div className="winners-track track-to-right">
            {row3.map((src, index) => (
              <div className="winners-card" key={index}>
                <img src={src} alt="Ganador" className="winners-card-img" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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

export function TicketPurchaseSection({ onCheckout }) {
  const [billingPeriod, setBillingPeriod] = useState('mensual');

  const handleSelect = (plan) => {
    if (plan.free) {
      alert('¡Te has registrado en el plan Gratis! Recibirás tu número de la suerte pronto.');
      return;
    }
    onCheckout(plan.qty);
  };

  const planes = getPlanes(billingPeriod);

  return (
    <section className="ticket-section" id="tickets" style={{ padding: '80px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '36px', padding: '0 20px' }}>
        <span className="page-badge" style={{ display: 'inline-block', background: 'rgba(255,225,110,0.1)', color: '#ffe16e', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>Planes</span>
        <h2 style={{ fontSize: '38px', fontWeight: '900', color: '#fff', marginBottom: '16px' }}>Elige tu Plan de Suscripción</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.6' }}>
          Selecciona el plan de suscripción que prefieras y accede a oportunidades de la suerte mensuales para todos nuestros sorteos.
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
    </section>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: '¿Qué es Los Cumpas de la Suerte?',
      a: 'Es una plataforma prémium de sorteos y beneficios exclusivos donde puedes adquirir tickets o suscribirte mensualmente para participar por increíbles premios como autos 0 km, tecnología de última generación y más.'
    },
    {
      q: '¿Cómo me vuelvo parte de Los Cumpas de la Suerte?',
      a: 'Es muy sencillo: solo debes registrarte en nuestra plataforma, elegir tu plan de suscripción mensual o comprar tickets individuales para los sorteos que prefieras.'
    },
    {
      q: '¿Puedo participar desde el extranjero?',
      a: 'Sí, puedes participar desde cualquier parte del mundo. Sin embargo, la entrega física de los premios principales está sujeta a los términos y condiciones locales en el Perú, o su equivalente en valor.'
    },
    {
      q: '¿Cuándo son las ediciones de premios semanales?',
      a: 'Los sorteos semanales se realizan todos los domingos a las 8:00 PM y se transmiten en vivo a través de nuestras redes oficiales. ¡No te los pierdas!'
    },
    {
      q: '¿Cómo sé que todo en Los Cumpas de la Suerte es legal?',
      a: 'Contamos con total transparencia en cada sorteo. Todos los ganadores se seleccionan de manera aleatoria certificada y los sorteos se realizan bajo supervisión legal para garantizar la máxima seguridad.'
    },
    {
      q: '¿Cómo me contactan si soy ganador?',
      a: 'Nos comunicaremos contigo directamente a través del número telefónico y correo electrónico registrados en tu cuenta. Además, publicamos la lista oficial en nuestra sección de Ganadores.'
    },
    {
      q: '¿Cuánto demora la entrega de mi premio?',
      a: 'Para premios digitales y tecnológicos la entrega se realiza en un plazo de 3 a 5 días hábiles. Para autos y premios mayores, la entrega física se coordina en un máximo de 15 días hábiles.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-header">
          <span className="faq-badge">Ayuda & Soporte</span>
          <h2 className="faq-title">Cumpa, ¿tienes dudas?</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                className={`faq-item ${isOpen ? 'active' : ''}`} 
                key={index}
              >
                <button 
                  className="faq-question" 
                  type="button" 
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <svg 
                    viewBox="0 0 24 24" 
                    width="18" 
                    height="18" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="faq-chevron"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className="faq-answer-wrapper">
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function BenefitsSection() {
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
    <section className="benefits-section" id="beneficios" style={{ padding: '80px 0', position: 'relative', zIndex: 10 }}>
      <div style={{ textAlign: 'center', marginBottom: '48px', padding: '0 20px' }}>
        <span className="page-badge" style={{ display: 'inline-block', background: 'rgba(255,225,110,0.1)', color: '#ffe16e', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>Beneficios Exclusivos</span>
        <h2 style={{ fontSize: '38px', fontWeight: '900', color: '#fff', marginBottom: '16px' }}>¿Por qué ser un Cumpa Activo?</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: '1.6' }}>
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
    </section>
  );
}
