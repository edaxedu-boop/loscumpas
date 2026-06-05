import React, { useState } from 'react';

export function UserDashboard({ user, tickets, onBuyMore, onLogout }) {
  const [buyQty, setBuyQty] = useState(1);
  const myTickets = tickets.filter(t => t.dni === user.dni);

  const handleQuickBuy = () => {
    onBuyMore(buyQty);
    setBuyQty(1);
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-header-banner">
        <div className="header-info">
          <span className="welcome-tag">CUMPA REGISTRADO</span>
          <h2>¡Bienvenido, {user.name}!</h2>
          <p>DNI: <strong>{user.dni}</strong> | Email: <strong>{user.email}</strong></p>
        </div>
        <button className="dashboard-logout-btn" onClick={onLogout}>Cerrar Sesión</button>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-left-panel">
          <div className="dashboard-card stats-card">
            <h3>Tu Resumen de la Suerte</h3>
            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-val">{myTickets.length}</span>
                <span className="stat-lbl">Suscripciones Activas</span>
              </div>
              <div className="stat-item">
                <span className="stat-val">S/ {myTickets.length * 50}</span>
                <span className="stat-lbl">Total Invertido</span>
              </div>
              <div className="stat-item">
                <span className="stat-val">100%</span>
                <span className="stat-lbl">Participando</span>
              </div>
            </div>
          </div>

          <div className="dashboard-card quick-buy-card">
            <h3>¿Quieres más oportunidades?</h3>
            <p>Cada suscripción adicional te otorga más números de sorteo y multiplica tus opciones de ganar los grandes premios.</p>
            <div className="quick-buy-form">
              <div className="quantity-selector">
                <button type="button" onClick={() => setBuyQty(q => Math.max(1, q - 1))}>-</button>
                <span>{buyQty}</span>
                <button type="button" onClick={() => setBuyQty(q => q + 1)}>+</button>
              </div>
              <button className="quick-buy-btn" onClick={handleQuickBuy}>
                Agregar {buyQty} suscripción(es) (S/ {buyQty * 50})
              </button>
            </div>
          </div>
        </div>

        <div className="dashboard-right-panel">
          <div className="dashboard-card tickets-list-card">
            <h3>Tus Suscripciones Activas</h3>
            {myTickets.length === 0 ? (
              <p className="no-tickets-msg">Aún no tienes suscripciones activas. Adquiere una arriba.</p>
            ) : (
              <div className="user-tickets-scroll-grid">
                {myTickets.map((t, idx) => (
                  <div className="dashboard-ticket-item" key={idx}>
                    <div className="ticket-item-left">
                      <span className="ticket-serial-badge">{t.serial}</span>
                      <span className="ticket-date-label">Compra: {t.date}</span>
                    </div>
                    <div className="ticket-item-right">
                      <span className="ticket-price-badge">S/ 50</span>
                      <span className="ticket-status-dot active">Participando</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
