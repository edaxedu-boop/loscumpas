import React, { useState } from 'react';

export function GanadoresPage() {
  const [ticketSearch, setTicketSearch] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!ticketSearch.trim()) return;
    
    const num = parseInt(ticketSearch.replace(/\D/g, ''), 10);
    if (isNaN(num)) {
      setSearchResult({ status: 'error', message: 'Formato de ticket no válido.' });
    } else if (num % 7 === 0) {
      setSearchResult({
        status: 'winner',
        winner: 'Juan Pérez',
        prize: 'iPhone 15 Pro',
        ticket: `#LC-${num}`,
        date: '31/05/2026'
      });
    } else {
      setSearchResult({ status: 'no-win', ticket: `#LC-${num}` });
    }
  };

  const historicWinners = [
    { name: 'María R. - Trujillo', prize: 'Auto 0 KM', ticket: '#LC-8212', date: '31/05/2026' },
    { name: 'Carlos D. - Lima', prize: 'iPhone 15 Pro', ticket: '#LC-7943', date: '24/05/2026' },
    { name: 'Jorge H. - Arequipa', prize: 'S/ 10,000', ticket: '#LC-6582', date: '17/05/2026' },
    { name: 'Ana M. - Piura', prize: 'PlayStation 5', ticket: '#LC-9311', date: '10/05/2026' },
    { name: 'Lucía G. - Cusco', prize: 'Laptop Gamer', ticket: '#LC-4392', date: '03/05/2026' },
  ];

  return (
    <div className="ganadores-page">
      <div className="page-header">
        <span className="page-badge">Ganadores Oficiales</span>
        <h1 className="page-title">Salón de la Fama</h1>
        <p className="page-subtitle">Conoce a los afortunados Cumpas que confiaron in su suerte y ya disfrutan de sus premios.</p>
      </div>

      <div className="verifier-box">
        <h3>Verificador de Suscripciones</h3>
        <p>¿Tienes una suscripción? Ingresa tu número para verificar si resultaste ganador en el último sorteo.</p>
        <form onSubmit={handleSearch} className="verifier-form">
          <input 
            type="text" 
            placeholder="Ej: LC-8212" 
            value={ticketSearch}
            onChange={(e) => setTicketSearch(e.target.value)}
          />
          <button type="submit">Verificar Número</button>
        </form>

        {searchResult && (
          <div className={`verifier-result ${searchResult.status}`}>
            {searchResult.status === 'winner' && (
              <div>
                <h4>🎉 ¡FELICIDADES! ¡ERES GANADOR! 🎉</h4>
                <p>El ticket <strong>{searchResult.ticket}</strong> perteneciente a <strong>{searchResult.winner}</strong> ganó un <strong>{searchResult.prize}</strong> el día {searchResult.date}.</p>
              </div>
            )}
            {searchResult.status === 'no-win' && (
              <div>
                <h4>El ticket {searchResult.ticket} no registra premios</h4>
                <p>No te desanimes, Cumpa. ¡Aún quedan muchos sorteos activos! Sigue participando.</p>
              </div>
            )}
            {searchResult.status === 'error' && (
              <p className="error-text">{searchResult.message}</p>
            )}
          </div>
        )}
      </div>

      <div className="winners-table-container">
        <h3>Historial de Ganadores Recientes</h3>
        <div className="winners-table-wrap">
          <table className="winners-table">
            <thead>
              <tr>
                <th>Ganador</th>
                <th>Premio Entregado</th>
                <th>Número de Suscripción</th>
                <th>Fecha de Sorteo</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {historicWinners.map((winner, idx) => (
                <tr key={idx}>
                  <td>{winner.name}</td>
                  <td><strong>{winner.prize}</strong></td>
                  <td><code className="ticket-code">{winner.ticket}</code></td>
                  <td>{winner.date}</td>
                  <td><span className="delivered-badge">Entregado</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
