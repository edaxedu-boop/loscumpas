import React, { useState } from 'react';

export function PremiosPage({ prizes }) {
  const [filter, setFilter] = useState('junio-2026');

  const filteredPrizes = prizes ? prizes.filter(p => p.month === filter) : [];

  return (
    <div className="premios-page">
      <div className="page-header">
        <span className="page-badge">Catálogo Oficial</span>
        <h1 className="page-title">Grandes Premios</h1>
        <p className="page-subtitle">Participa por los mejores premios del Perú. Tu suscripción te da oportunidades de ganar.</p>
      </div>

      <div className="filter-bar">
        <button 
          className={`filter-btn ${filter === 'junio-2026' ? 'active' : ''}`}
          onClick={() => setFilter('junio-2026')}
        >
          Junio 2026 (Activo)
        </button>
        <button 
          className={`filter-btn ${filter === 'mayo-2026' ? 'active' : ''}`}
          onClick={() => setFilter('mayo-2026')}
        >
          Mayo 2026 (Sorteado)
        </button>
        <button 
          className={`filter-btn ${filter === 'abril-2026' ? 'active' : ''}`}
          onClick={() => setFilter('abril-2026')}
        >
          Abril 2026 (Sorteado)
        </button>
      </div>

      <div className="premios-grid">
        {filteredPrizes.map((prize, idx) => (
          <div className="premio-page-card" key={idx}>
            <div className="premio-card-image-wrap">
              <img src={prize.image} alt={prize.title} />
              <span className={`premio-card-badge ${prize.status === 'sorteado' ? 'sorteado-badge' : ''}`}>
                {prize.status === 'sorteado' ? 'Sorteado 🎉' : prize.value}
              </span>
            </div>
            <div className="premio-card-info">
              <h3>{prize.title}</h3>
              <p>
                {prize.status === 'sorteado' 
                  ? `Este espectacular premio ya tiene un feliz ganador. ¡Mantente atento a las próximas ediciones!`
                  : `Este espectacular premio puede ser tuyo. Activa tu suscripción antes de la fecha del sorteo.`}
              </p>
              <div className="premio-card-meta">
                {prize.status === 'sorteado' ? (
                  <>
                    <span className="draw-date done">Sorteado el: {prize.date}</span>
                    <span className="draw-chance winner">Ganador: {prize.winner}</span>
                  </>
                ) : (
                  <>
                    <span className="draw-date">Próximo Sorteo: {prize.date}</span>
                    <span className="draw-chance">Con tu suscripción</span>
                  </>
                )}
              </div>
              {prize.status === 'sorteado' ? (
                <button className="premio-card-action-btn disabled" disabled>Sorteo Finalizado</button>
              ) : (
                <a href="#tickets" className="premio-card-action-btn">Participar Ahora</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
