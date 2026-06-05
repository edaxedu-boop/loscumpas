import React, { useState } from 'react';

export function AdminDashboard({ users, tickets, prizes, onAddPrize, onDeletePrize, onLogout }) {
  const [activeTab, setActiveTab] = useState('users');
  const [winnerInfo, setWinnerInfo] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);

  // Form states for uploading a prize
  const [prizeTitle, setPrizeTitle] = useState('');
  const [prizeDate, setPrizeDate] = useState('');
  const [prizeImage, setPrizeImage] = useState('');
  const [prizeValue, setPrizeValue] = useState('Sorteo Especial');
  const [prizeMonth, setPrizeMonth] = useState('junio-2026');
  const [prizeStatus, setPrizeStatus] = useState('activo');
  const [prizeWinner, setPrizeWinner] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // State for filtering prizes in the Upload tab
  const [adminPrizeFilter, setAdminPrizeFilter] = useState('junio-2026');

  const regularUsers = users.filter(u => u.role !== 'admin');
  const totalRevenue = tickets.length * 50;

  const handleRaffle = () => {
    if (tickets.length === 0) {
      alert('No hay tickets vendidos para realizar el sorteo.');
      return;
    }
    setIsDrawing(true);
    setWinnerInfo(null);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * tickets.length);
      const winningTicket = tickets[randomIndex];
      const prizesList = prizes ? prizes.map(p => p.title) : ['Auto 0 KM', 'iPhone 15 Pro', 'PlayStation 5'];
      const randomPrize = prizesList.length > 0 ? prizesList[Math.floor(Math.random() * prizesList.length)] : 'Auto 0 KM';
      
      setWinnerInfo({
        ticket: winningTicket.serial,
        dni: winningTicket.dni,
        name: winningTicket.name,
        prize: randomPrize
      });
      setIsDrawing(false);
    }, 2500);
  };

  const handleAddPrize = (e) => {
    e.preventDefault();
    if (!prizeTitle || !prizeDate || !prizeImage) {
      alert('Por favor, completa todos los campos requeridos.');
      return;
    }

    const newPrize = {
      title: prizeTitle,
      image: prizeImage,
      value: prizeValue,
      month: prizeMonth,
      status: prizeStatus,
      date: prizeDate,
      ...(prizeStatus === 'sorteado' ? { winner: prizeWinner || 'Sin ganador registrado' } : {})
    };

    onAddPrize(newPrize);

    // Reset Form
    setPrizeTitle('');
    setPrizeDate('');
    setPrizeImage('');
    setPrizeWinner('');
    setUploadSuccess(true);
    setTimeout(() => setUploadSuccess(false), 3000);
  };

  const handleExportTickets = () => {
    if (tickets.length === 0) {
      alert('No hay tickets emitidos para exportar.');
      return;
    }
    
    const headers = ['Código de Ticket', 'DNI Comprador', 'Nombre Comprador', 'Fecha de Emisión', 'Precio (S/)'];
    const rows = tickets.map(t => [
      t.serial,
      t.dni,
      t.name,
      t.date,
      t.price
    ]);
    
    const csvContent = "\uFEFF"
      + [headers.join(','), ...rows.map(e => e.map(val => `"${val}"`).join(','))].join('\n');
      
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `tickets_emitidos_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const adminFilteredPrizes = prizes ? prizes.filter(p => p.month === adminPrizeFilter) : [];

  return (
    <div className="dashboard-page admin-dashboard">
      <div className="dashboard-header-banner admin">
        <div className="header-info">
          <span className="welcome-tag admin">PANEL ADMINISTRATIVO</span>
          <h2>Panel de Sorteos & Ventas</h2>
          <p>Administra los tickets de la suerte, registra nuevos premios y realiza sorteos oficiales</p>
        </div>
        <button className="dashboard-logout-btn" onClick={onLogout}>Cerrar Sesión</button>
      </div>

      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <span className="stat-label">Total Tickets Vendidos</span>
          <span className="stat-val">{tickets.length}</span>
        </div>
        <div className="admin-stat-card">
          <span className="stat-label">Total Recaudado</span>
          <span className="stat-val">S/ {totalRevenue}.00</span>
        </div>
        <div className="admin-stat-card">
          <span className="stat-label">Usuarios Registrados</span>
          <span className="stat-val">{regularUsers.length}</span>
        </div>
      </div>

      <div className="admin-tabs">
        <button className={`tab-btn ${activeTab === 'users' ? 'active' : ''}`} onClick={() => setActiveTab('users')}>Usuarios ({regularUsers.length})</button>
        <button className={`tab-btn ${activeTab === 'tickets' ? 'active' : ''}`} onClick={() => setActiveTab('tickets')}>Tickets Emitidos ({tickets.length})</button>
        <button className={`tab-btn ${activeTab === 'add-prize' ? 'active' : ''}`} onClick={() => setActiveTab('add-prize')}>➕ Subir Premio</button>
        <button className={`tab-btn ${activeTab === 'draw' ? 'active' : ''}`} onClick={() => setActiveTab('draw')}>🏆 Realizar Sorteo</button>
      </div>

      <div className="admin-tab-content">
        {activeTab === 'users' && (
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>DNI</th>
                  <th>Nombre Completo</th>
                  <th>Correo Electrónico</th>
                  <th>Tickets Activos</th>
                </tr>
              </thead>
              <tbody>
                {regularUsers.map((u, idx) => (
                  <tr key={idx}>
                    <td><strong>{u.dni}</strong></td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td><span className="admin-ticket-badge">{u.ticketsCount || 0} tickets</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'tickets' && (
          <div className="admin-table-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ color: '#ffe16e', margin: 0, fontSize: '18px', textTransform: 'uppercase', fontFamily: 'Impact, sans-serif' }}>Listado de Tickets Emitidos</h3>
              <button 
                onClick={handleExportTickets} 
                style={{ 
                  background: 'rgba(255, 225, 110, 0.15)', 
                  border: '1.5px solid #ffe16e', 
                  color: '#ffe16e', 
                  padding: '8px 18px', 
                  borderRadius: '30px', 
                  cursor: 'pointer', 
                  fontWeight: '800', 
                  fontSize: '13px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s'
                }}
              >
                📥 Exportar Tickets (CSV)
              </button>
            </div>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Código de Ticket</th>
                  <th>DNI Comprador</th>
                  <th>Nombre Comprador</th>
                  <th>Fecha de Emisión</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((t, idx) => (
                  <tr key={idx}>
                    <td><span className="ticket-serial-badge">{t.serial}</span></td>
                    <td>{t.dni}</td>
                    <td>{t.name}</td>
                    <td>{t.date}</td>
                    <td>S/ {t.price}.00</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'add-prize' && (
          <div className="admin-upload-grid">
            <div className="upload-form-side">
              <h3>Subir Nuevo Premio</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '24px', fontSize: '14px' }}>
                Registra un nuevo premio en el catálogo. Se listará automáticamente bajo el mes correspondiente.
              </p>

              {uploadSuccess && (
                <div className="admin-upload-success">
                  ¡Premio registrado exitosamente y agregado al catálogo!
                </div>
              )}

              <form onSubmit={handleAddPrize} className="auth-form">
                <div className="form-group">
                  <label>Nombre del Premio *</label>
                  <input 
                    type="text" 
                    placeholder="Ej: iPhone 16 Pro Max" 
                    value={prizeTitle}
                    onChange={(e) => setPrizeTitle(e.target.value)}
                    required 
                  />
                </div>

                <div className="form-row-2col">
                  <div className="form-group">
                    <label>Fecha de Sorteo *</label>
                    <input 
                      type="text" 
                      placeholder="Ej: 28/06/2026" 
                      value={prizeDate}
                      onChange={(e) => setPrizeDate(e.target.value)}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Tipo de Sorteo / Valor</label>
                    <select 
                      value={prizeValue}
                      onChange={(e) => setPrizeValue(e.target.value)}
                    >
                      <option value="Premio Mayor">Premio Mayor</option>
                      <option value="Sorteo Mensual">Sorteo Mensual</option>
                      <option value="Sorteo Especial">Sorteo Especial</option>
                      <option value="Sorteo Express">Sorteo Express</option>
                    </select>
                  </div>
                </div>

                <div className="form-row-2col">
                  <div className="form-group">
                    <label>Mes de Publicación</label>
                    <select 
                      value={prizeMonth}
                      onChange={(e) => setPrizeMonth(e.target.value)}
                    >
                      <option value="junio-2026">Junio 2026 (Activo)</option>
                      <option value="mayo-2026">Mayo 2026 (Historial)</option>
                      <option value="abril-2026">Abril 2026 (Historial)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Estado del Sorteo</label>
                    <select 
                      value={prizeStatus}
                      onChange={(e) => {
                        setPrizeStatus(e.target.value);
                        if (e.target.value === 'activo') setPrizeWinner('');
                      }}
                    >
                      <option value="activo">Activo (Participable)</option>
                      <option value="sorteado">Sorteado (Finalizado)</option>
                    </select>
                  </div>
                </div>

                {prizeStatus === 'sorteado' && (
                  <div className="form-group" style={{ animation: 'fadeIn 0.3s ease' }}>
                    <label>Nombre del Ganador *</label>
                    <input 
                      type="text" 
                      placeholder="Ej: Juan Perez (Lima)" 
                      value={prizeWinner}
                      onChange={(e) => setPrizeWinner(e.target.value)}
                      required={prizeStatus === 'sorteado'}
                    />
                  </div>
                )}

                <div className="form-group">
                  <label>URL de la Imagen *</label>
                  <input 
                    type="url" 
                    placeholder="https://images.unsplash.com/... o ruta de imagen" 
                    value={prizeImage}
                    onChange={(e) => setPrizeImage(e.target.value)}
                    required 
                  />
                </div>

                {prizeImage && (
                  <div className="form-group">
                    <label>Vista Previa de la Imagen</label>
                    <div 
                      style={{ 
                        width: '100%', 
                        height: '150px', 
                        borderRadius: '14px', 
                        overflow: 'hidden', 
                        border: '1.5px solid rgba(255,225,110,0.15)',
                        background: '#000'
                      }}
                    >
                      <img 
                        src={prizeImage} 
                        alt="Vista previa" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=300&q=80'; }}
                      />
                    </div>
                  </div>
                )}

                <button type="submit" className="auth-btn" style={{ marginTop: '12px' }}>
                  💾 Registrar Premio en Catálogo
                </button>
              </form>
            </div>

            <div className="prizes-list-side">
              <h3 style={{ color: '#ffe16e', margin: '0 0 8px', fontSize: '20px', fontFamily: 'Impact, sans-serif', textTransform: 'uppercase' }}>Premios Registrados</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', marginBottom: '20px' }}>Filtra y visualiza los premios subidos o elimínalos.</p>
              
              <div className="filter-bar" style={{ gap: '6px', marginBottom: '20px', paddingBottom: '0', border: '0' }}>
                <button 
                  type="button"
                  className={`filter-btn ${adminPrizeFilter === 'junio-2026' ? 'active' : ''}`}
                  onClick={() => setAdminPrizeFilter('junio-2026')}
                  style={{ padding: '6px 12px', fontSize: '12px' }}
                >
                  Junio 2026
                </button>
                <button 
                  type="button"
                  className={`filter-btn ${adminPrizeFilter === 'mayo-2026' ? 'active' : ''}`}
                  onClick={() => setAdminPrizeFilter('mayo-2026')}
                  style={{ padding: '6px 12px', fontSize: '12px' }}
                >
                  Mayo 2026
                </button>
                <button 
                  type="button"
                  className={`filter-btn ${adminPrizeFilter === 'abril-2026' ? 'active' : ''}`}
                  onClick={() => setAdminPrizeFilter('abril-2026')}
                  style={{ padding: '6px 12px', fontSize: '12px' }}
                >
                  Abril 2026
                </button>
              </div>

              <div className="admin-prizes-scroll-list">
                {adminFilteredPrizes.length === 0 ? (
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontStyle: 'italic', fontSize: '13px', textAlign: 'center', padding: '40px 0' }}>
                    No hay premios registrados en este mes.
                  </p>
                ) : (
                  adminFilteredPrizes.map((p, idx) => (
                    <div 
                      key={idx} 
                      style={{ 
                        background: 'rgba(255,255,255,0.03)', 
                        border: '1px solid rgba(255,255,255,0.08)', 
                        borderRadius: '12px', 
                        padding: '12px',
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '10px'
                      }}
                    >
                      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', minWidth: 0 }}>
                        <img 
                          src={p.image} 
                          alt={p.title} 
                          style={{ width: '48px', height: '48px', borderRadius: '8px', objectFit: 'cover', flexShrink: 0 }} 
                          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=300&q=80'; }}
                        />
                        <div style={{ minWidth: 0 }}>
                          <h4 style={{ margin: '0 0 2px', fontSize: '13px', color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.title}</h4>
                          <p style={{ margin: '0 0 2px', fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>Sorteo: {p.date}</p>
                          <span style={{ fontSize: '10px', color: p.status === 'sorteado' ? '#ffe16e' : '#81c784', fontWeight: '800', textTransform: 'uppercase' }}>
                            {p.status === 'sorteado' ? `Sorteado 🎉` : p.value}
                          </span>
                        </div>
                      </div>
                      <button 
                        onClick={() => {
                          if (confirm(`¿Estás seguro de que deseas eliminar el premio "${p.title}"?`)) {
                            onDeletePrize(p);
                          }
                        }}
                        style={{ 
                          background: 'rgba(211, 47, 47, 0.15)', 
                          border: '1px solid rgba(211, 47, 47, 0.3)', 
                          color: '#ef5350', 
                          padding: '6px 10px', 
                          borderRadius: '8px', 
                          cursor: 'pointer', 
                          fontSize: '11px',
                          fontWeight: '700',
                          flexShrink: 0,
                          transition: 'all 0.2s'
                        }}
                        onMouseOver={(e) => { e.target.style.background = '#d32f2f'; e.target.style.color = '#fff'; }}
                        onMouseOut={(e) => { e.target.style.background = 'rgba(211, 47, 47, 0.15)'; e.target.style.color = '#ef5350'; }}
                      >
                        Eliminar
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'draw' && (
          <div className="admin-draw-widget">
            <div className="draw-instructions">
              <h3>Sorteo Aleatorio de Premios</h3>
              <p>Haz clic en el botón de abajo para seleccionar un ganador al azar de la lista completa de {tickets.length} tickets emitidos.</p>
            </div>

            <div className="draw-action-box">
              {isDrawing ? (
                <div className="drawing-animation">
                  <div className="spinner"></div>
                  <p>Mezclando bolillero digital...</p>
                </div>
              ) : (
                <button className="big-gold-draw-btn" onClick={handleRaffle}>
                  🎰 ¡Lanzar Sorteo de Los Cumpas!
                </button>
              )}
            </div>

            {winnerInfo && (
              <div className="winner-announcement-card">
                <div className="ribbon">¡GANADOR!</div>
                <h3>{winnerInfo.name}</h3>
                <p className="winner-dni">DNI: {winnerInfo.dni}</p>
                <div className="winner-ticket-display">
                  <span>Ticket N°:</span>
                  <strong>{winnerInfo.ticket}</strong>
                </div>
                <div className="winner-prize-display">
                  <span>Premio obtenido:</span>
                  <h3>🎁 {winnerInfo.prize}</h3>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
