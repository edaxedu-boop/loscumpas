import React, { useState } from 'react';

export function RegisterPage({ pendingQty, onRegister }) {
  const [step, setStep] = useState(1);
  const [dni, setDni] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [isDniValidated, setIsDniValidated] = useState(false);
  const [showManualFallback, setShowManualFallback] = useState(false);

  if (pendingQty <= 0) {
    return (
      <div className="auth-page">
        <div className="auth-card text-center">
          <h2>Registro Requerido</h2>
          <p className="auth-subtitle">Para registrarte en la plataforma, primero debes activar una suscripción.</p>
          <div style={{ margin: '24px 0' }}>
            <a href="#tickets" className="auth-btn inline-flex">Elegir un Plan de Suscripción</a>
          </div>
          <a href="#inicio" className="back-home-link">← Volver al Inicio</a>
        </div>
      </div>
    );
  }

  const handleValidateDni = async (e) => {
    e.preventDefault();
    if (!dni || dni.length !== 8 || isNaN(dni)) {
      setError('Por favor, ingresa un DNI válido de 8 dígitos.');
      return;
    }
    setIsValidating(true);
    setError('');
    setShowManualFallback(false);

    try {
      const token = import.meta.env.VITE_APISPERU_TOKEN;
      const response = await fetch(`https://dniruc.apisperu.com/api/v1/dni/${dni}?token=${token}`);
      
      if (!response.ok) {
        throw new Error('Response error');
      }

      const data = await response.json();

      if (data && (data.dni === dni || data.nombres)) {
        const names = [data.nombres, data.apellidoPaterno, data.apellidoMaterno]
          .filter(Boolean)
          .join(' ');
        setFullName(names || '');
        setIsDniValidated(true);
        setStep(2);
      } else {
        setError(data.message || 'No se encontraron datos para este DNI.');
        setShowManualFallback(true);
      }
    } catch (err) {
      console.error(err);
      setError('Servicio de verificación no disponible temporalmente. Puedes continuar e ingresar tus datos manualmente.');
      setShowManualFallback(true);
    } finally {
      setIsValidating(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    onRegister({ dni, name: fullName, email, password });
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="registration-badge">¡Pago Aprobado!</div>
        <h2>Crear tu Cuenta</h2>
        <p className="auth-subtitle">Completa tu registro para guardar y asignar tus <strong>{pendingQty} {pendingQty === 1 ? 'suscripción' : 'suscripciones'}</strong>.</p>
        
        {error && <div className="auth-error">{error}</div>}

        <div className="step-indicator">
          <span className={`step-dot ${step >= 1 ? 'active' : ''}`}>1. DNI</span>
          <span className="step-line"></span>
          <span className={`step-dot ${step >= 2 ? 'active' : ''}`}>2. Datos Personales</span>
        </div>

        {step === 1 ? (
          <form onSubmit={handleValidateDni} className="auth-form">
            <div className="form-group">
              <label>DNI (Documento Nacional de Identidad)</label>
              <input 
                type="text" 
                maxLength="8"
                placeholder="Ingresa tu DNI" 
                value={dni}
                onChange={(e) => { setDni(e.target.value.replace(/\D/g, '')); setError(''); setShowManualFallback(false); }}
                required 
                disabled={isValidating}
              />
            </div>
            
            {isValidating ? (
              <button type="button" className="auth-btn" disabled style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <span className="spinner" style={{ width: '16px', height: '16px', border: '2px solid rgba(19, 13, 4, 0.2)', borderTopColor: '#130d04', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></span>
                Validando con RENIEC...
              </button>
            ) : (
              <button type="submit" className="auth-btn">Verificar DNI →</button>
            )}

            {showManualFallback && (
              <button 
                type="button" 
                className="auth-btn-secondary" 
                onClick={() => { setError(''); setStep(2); }}
                style={{ marginTop: '8px', width: '100%' }}
              >
                Continuar manualmente →
              </button>
            )}
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label>DNI</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input 
                  type="text" 
                  value={dni} 
                  disabled 
                  style={{ flex: 1, opacity: 0.8, background: 'rgba(255,255,255,0.05)' }} 
                />
                {isDniValidated && (
                  <span style={{ color: '#81c784', fontSize: '11px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap' }}>
                    ✓ VERIFICADO
                  </span>
                )}
              </div>
            </div>

            <div className="form-group">
              <label>Nombres y Apellidos Completos</label>
              <input 
                type="text" 
                placeholder="Juan Perez Gomez" 
                value={fullName}
                onChange={(e) => { setFullName(e.target.value); setError(''); }}
                required 
                disabled={isDniValidated}
                style={isDniValidated ? { opacity: 0.8, background: 'rgba(255,255,255,0.05)' } : {}}
              />
              {isDniValidated && (
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>
                  * Nombre obtenido de la consulta oficial de DNI.
                </span>
              )}
            </div>
            
            <div className="form-group">
              <label>Correo Electrónico</label>
              <input 
                type="email" 
                placeholder="ejemplo@correo.com" 
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                required 
              />
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input 
                type="password" 
                placeholder="Crea una contraseña" 
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                required 
              />
            </div>
            <div className="form-actions-row">
              <button type="button" className="auth-btn-secondary" onClick={() => setStep(1)}>← Atrás</button>
              <button type="submit" className="auth-btn">Completar Registro</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
