import React, { useState } from 'react';
import { LogIn } from 'lucide-react';

export function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor, ingresa todos los campos.');
      return;
    }
    const success = onLogin(email, password);
    if (!success) {
      setError('Correo o contraseña incorrectos.');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Iniciar Sesión</h2>
        <p className="auth-subtitle">Ingresa a tu cuenta para ver tus tickets</p>
        
        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
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
              placeholder="••••••••" 
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(''); }}
              required 
            />
          </div>
          <button type="submit" className="auth-btn">
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <LogIn size={18} /> Ingresar
            </span>
          </button>
        </form>

        <div className="auth-footer">
          <p>¿No tienes cuenta? <a href="#tickets">Adquiere un ticket</a> para registrarte.</p>
          <a href="#inicio" className="back-home-link">← Volver al Inicio</a>
        </div>
      </div>
    </div>
  );
}
