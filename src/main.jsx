import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { LogIn, LogOut, Menu, X, User, Shield } from 'lucide-react';
import './styles.css';

// Data imports
import { prizes, navItems } from './data/prizes';
import { defaultUsers, defaultTickets } from './data/defaultData';

// Component imports
import { Particles, Sparkles } from './components/Particles';
import {
  TrustSection,
  SubscriptionSection,
  PrizesSection,
  WinnersSection,
  TicketPurchaseSection,
  FaqSection,
  BenefitsSection
} from './components/HomeSections';
import { Footer } from './components/Footer';

// Page imports
import { PremiosPage } from './pages/PremiosPage';
import { GanadoresPage } from './pages/GanadoresPage';
import { ComoFuncionaPage } from './pages/ComoFuncionaPage';
import { BeneficiosPage } from './pages/BeneficiosPage';
import { TicketsPage } from './pages/TicketsPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { UserDashboard } from './pages/UserDashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import {
  FaqPage,
  TerminosPage,
  PrivacidadPage,
  GestionPage,
  CookiesPage,
  ReglamentoPage
} from './pages/LegalPages';

function LogoBadge() {
  return (
    <div className="logo-badge" aria-label="Los cumpas de la suerte">
      <div className="logo-badge-frame" />
      <img
        src="https://res.cloudinary.com/dl1pgzshh/image/upload/v1780782601/ChatGPT_Image_6_jun_2026_16_48_19.png"
        alt="Los Cumpas de la Suerte"
        className="logo-badge-img"
      />
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('lc_users');
    return saved ? JSON.parse(saved) : defaultUsers;
  });
  const [tickets, setTickets] = useState(() => {
    const saved = localStorage.getItem('lc_tickets');
    return saved ? JSON.parse(saved) : defaultTickets;
  });
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('lc_current_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [pendingQty, setPendingQty] = useState(() => {
    const saved = localStorage.getItem('lc_pending_qty');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [checkoutQty, setCheckoutQty] = useState(0);

  // 3-Step Checkout Funnel State
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [checkoutDni, setCheckoutDni] = useState('');
  const [checkoutName, setCheckoutName] = useState('');
  const [checkoutEmail, setCheckoutEmail] = useState('');
  const [checkoutPassword, setCheckoutPassword] = useState('');
  const [checkoutError, setCheckoutError] = useState('');
  const [checkoutValidating, setCheckoutValidating] = useState(false);
  const [checkoutDniValidated, setCheckoutDniValidated] = useState(false);
  const [checkoutManualFallback, setCheckoutManualFallback] = useState(false);

  const startCheckout = (qty) => {
    setCheckoutQty(qty);
    if (currentUser) {
      setCheckoutStep(3); // Already logged in, skip registration steps
    } else {
      setCheckoutStep(1); // Needs registration: Step 1 (DNI)
    }
    setCheckoutDni('');
    setCheckoutName('');
    setCheckoutEmail('');
    setCheckoutPassword('');
    setCheckoutError('');
    setCheckoutDniValidated(false);
    setCheckoutManualFallback(false);
  };

  const handleCheckoutValidateDni = async (e) => {
    e.preventDefault();
    if (!checkoutDni || checkoutDni.length !== 8 || isNaN(checkoutDni)) {
      setCheckoutError('Por favor, ingresa un DNI válido de 8 dígitos.');
      return;
    }
    setCheckoutValidating(true);
    setCheckoutError('');
    setCheckoutManualFallback(false);

    try {
      const token = import.meta.env.VITE_APISPERU_TOKEN;
      const response = await fetch(`https://dniruc.apisperu.com/api/v1/dni/${checkoutDni}?token=${token}`);
      
      if (!response.ok) {
        throw new Error('Response error');
      }

      const data = await response.json();

      if (data && (data.dni === checkoutDni || data.nombres)) {
        const names = [data.nombres, data.apellidoPaterno, data.apellidoMaterno]
          .filter(Boolean)
          .join(' ');
        setCheckoutName(names || '');
        setCheckoutDniValidated(true);
        setCheckoutStep(2);
      } else {
        setCheckoutError(data.message || 'No se encontraron datos para este DNI.');
        setCheckoutManualFallback(true);
      }
    } catch (err) {
      console.error(err);
      setCheckoutError('Servicio de verificación no disponible temporalmente. Puedes continuar e ingresar tus datos manualmente.');
      setCheckoutManualFallback(true);
    } finally {
      setCheckoutValidating(false);
    }
  };

  const handleCheckoutRegisterNext = (e) => {
    e.preventDefault();
    if (!checkoutName || !checkoutEmail || !checkoutPassword) {
      setCheckoutError('Por favor, completa todos los campos.');
      return;
    }
    
    const emailExists = users.some(u => u.email.toLowerCase() === checkoutEmail.toLowerCase());
    const dniExists = users.some(u => u.dni === checkoutDni);

    if (emailExists) {
      setCheckoutError('Este correo electrónico ya está registrado.');
      return;
    }
    if (dniExists) {
      setCheckoutError('Este DNI ya está registrado.');
      return;
    }

    setCheckoutError('');
    setCheckoutStep(3); // Go to Payment step
  };

  const handleCheckoutCompletePayment = () => {
    const newTickets = [];
    const dateStr = new Date().toISOString().split('T')[0];
    
    let activeUser = currentUser;
    if (!activeUser) {
      const newUser = {
        dni: checkoutDni,
        name: checkoutName,
        email: checkoutEmail,
        password: checkoutPassword,
        role: 'user',
        ticketsCount: checkoutQty
      };
      setUsers(prev => [...prev, newUser]);
      setCurrentUser(newUser);
      activeUser = newUser;
    } else {
      setUsers(prev => prev.map(u => {
        if (u.dni === activeUser.dni) {
          return { ...u, ticketsCount: (u.ticketsCount || 0) + checkoutQty };
        }
        return u;
      }));
      setCurrentUser(prev => ({
        ...prev,
        ticketsCount: (prev.ticketsCount || 0) + checkoutQty
      }));
    }

    for (let i = 0; i < checkoutQty; i++) {
      const serial = `#LC-${8247 + tickets.length + i}-${2026}`;
      newTickets.push({
        serial,
        dni: activeUser.dni,
        name: activeUser.name,
        date: dateStr,
        price: 50
      });
    }

    setTickets(prev => [...prev, ...newTickets]);
    setCheckoutQty(0); // Close modal
    setCurrentPage('dashboard');
    window.location.hash = '#dashboard';
    alert('¡Pago completado con éxito! Tus suscripciones han sido activadas.');
  };

  const [prizesList, setPrizesList] = useState(() => {
    const saved = localStorage.getItem('lc_prizes');
    return saved ? JSON.parse(saved) : prizes;
  });

  const activePrizes = prizesList.filter(p => p.status === 'activo');
  const carouselPrizes = activePrizes.length > 0 
    ? [...activePrizes, ...activePrizes, ...activePrizes]
    : [];

  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return ['inicio', 'premios', 'ganadores', 'como-funciona', 'beneficios', 'tickets', 'login', 'register', 'dashboard', 'admin-dashboard', 'terminos', 'privacidad', 'gestion', 'cookies', 'reglamento', 'preguntas'].includes(hash) ? hash : 'inicio';
  });

  const [bgIndex, setBgIndex] = useState(0);

  const heroSlides = [
    {
      title: '¡GANA!',
      gold: 'COMPRA TU SUSCRIPCIÓN AHORA',
      white: 'Y MULTIPLICA TU SUERTE',
    },
    {
      title: '¡TÚ PUEDES!',
      gold: 'MILES DE PREMIOS TE ESPERAN',
      white: 'PARTICIPA Y CAMBIA TU VIDA',
    },
    {
      title: '¡ES TU MOMENTO!',
      gold: 'ÚNETE A LOS CUMPAS DE LA SUERTE',
      white: 'EL PREMIO PUEDE SER TUYO HOY',
    },
  ];

  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (currentPage !== 'inicio' || !autoPlay) return;
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % 3);
    }, 10000);
    return () => clearInterval(interval);
  }, [currentPage, autoPlay, bgIndex]);

  // Sync state with localStorage
  useEffect(() => {
    localStorage.setItem('lc_prizes', JSON.stringify(prizesList));
  }, [prizesList]);

  useEffect(() => {
    localStorage.setItem('lc_users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem('lc_tickets', JSON.stringify(tickets));
  }, [tickets]);

  useEffect(() => {
    localStorage.setItem('lc_current_user', currentUser ? JSON.stringify(currentUser) : '');
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('lc_pending_qty', pendingQty.toString());
  }, [pendingQty]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      let page = ['inicio', 'premios', 'ganadores', 'como-funciona', 'beneficios', 'tickets', 'login', 'register', 'dashboard', 'admin-dashboard', 'terminos', 'privacidad', 'gestion', 'cookies', 'reglamento', 'preguntas'].includes(hash) ? hash : 'inicio';
      
      // Access Control
      if (page === 'dashboard') {
        if (!currentUser) {
          page = 'login';
          window.location.hash = '#login';
        } else if (currentUser.role === 'admin') {
          page = 'admin-dashboard';
          window.location.hash = '#admin-dashboard';
        }
      } else if (page === 'admin-dashboard') {
        if (!currentUser) {
          page = 'login';
          window.location.hash = '#login';
        } else if (currentUser.role !== 'admin') {
          page = 'dashboard';
          window.location.hash = '#dashboard';
        }
      } else if (page === 'register' && pendingQty <= 0) {
        page = 'tickets';
        window.location.hash = '#tickets';
      }

      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentUser, pendingQty]);

  const handleLogin = (email, password) => {
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (user) {
      setCurrentUser(user);
      if (user.role === 'admin') {
        window.location.hash = '#admin-dashboard';
      } else {
        window.location.hash = '#dashboard';
      }
      return true;
    }
    return false;
  };

  const handleRegister = ({ dni, name, email, password }) => {
    // Check if email or DNI exists
    const emailExists = users.some(u => u.email.toLowerCase() === email.toLowerCase());
    const dniExists = users.some(u => u.dni === dni);
    if (emailExists) {
      alert('Este correo electrónico ya está registrado.');
      return;
    }
    if (dniExists) {
      alert('Este DNI ya está registrado.');
      return;
    }

    // Generate tickets
    const newTickets = [];
    const dateStr = new Date().toISOString().split('T')[0];
    for (let i = 0; i < pendingQty; i++) {
      const serial = `#LC-${8247 + tickets.length + i}-${2026}`;
      newTickets.push({
        serial,
        dni,
        name,
        date: dateStr,
        price: 50
      });
    }

    const newUser = {
      dni,
      name,
      email,
      password,
      role: 'user',
      ticketsCount: pendingQty
    };

    setTickets(prev => [...prev, ...newTickets]);
    setUsers(prev => [...prev, newUser]);
    setCurrentUser(newUser);
    setPendingQty(0);
    window.location.hash = '#dashboard';
  };

  const handleLogout = () => {
    setCurrentUser(null);
    window.location.hash = '#inicio';
  };

  const handleBuyTickets = (qty) => {
    if (currentUser) {
      const newTickets = [];
      const dateStr = new Date().toISOString().split('T')[0];
      for (let i = 0; i < qty; i++) {
        const serial = `#LC-${8247 + tickets.length + i}-${2026}`;
        newTickets.push({
          serial,
          dni: currentUser.dni,
          name: currentUser.name,
          date: dateStr,
          price: 50
        });
      }

      setTickets(prev => [...prev, ...newTickets]);
      setUsers(prev => prev.map(u => {
        if (u.dni === currentUser.dni) {
          return { ...u, ticketsCount: (u.ticketsCount || 0) + qty };
        }
        return u;
      }));
      setCurrentUser(prev => ({
        ...prev,
        ticketsCount: (prev.ticketsCount || 0) + qty
      }));

      alert(`¡Felicidades! Has activado ${qty} suscripción(es) exitosamente.`);
      window.location.hash = '#dashboard';
    } else {
      setPendingQty(qty);
      window.location.hash = '#register';
    }
  };

  return (
    <main className={`page ${menuOpen ? 'menu-open' : ''}`}>

      <header className="topbar">
        <LogoBadge />
        <div className="nav-container-wrapper">
          <nav className="nav" aria-label="Principal">
            {navItems.map((item) => (
              <a
                className={currentPage === item.id ? 'active' : ''}
                href={`#${item.id}`}
                key={item.id}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            {currentUser ? (
              <>
                <a 
                  href={currentUser.role === 'admin' ? '#admin-dashboard' : '#dashboard'} 
                  className={['dashboard', 'admin-dashboard'].includes(currentPage) ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  Panel de Control
                </a>
                <button className="mobile-login" type="button" onClick={() => { setMenuOpen(false); handleLogout(); }}>
                  <LogOut size={18} /> {'Cerrar sesión'}
                </button>
              </>
            ) : (
              <a href="#login" className={`mobile-only-link ${currentPage === 'login' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
                <LogIn size={18} /> {'Iniciar sesión'}
              </a>
            )}
          </nav>
          {currentUser ? (
            <div className="login-container" style={{ gap: '10px', alignItems: 'center' }}>
              <a href={currentUser.role === 'admin' ? '#admin-dashboard' : '#dashboard'} className="login" style={{ textDecoration: 'none', alignItems: 'center', gap: '8px' }}>
                {currentUser.role === 'admin' ? <Shield size={18} /> : <User size={18} />}
                {currentUser.role === 'admin' ? 'Admin' : 'Mi Cuenta'}
              </a>
              <button className="login" type="button" onClick={handleLogout} style={{ background: 'rgba(255, 255, 255, 0.12)', color: '#ffe16e', border: '1.5px solid rgba(255, 255, 255, 0.25)' }}>
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <a href="#login" className="login" style={{ textDecoration: 'none', alignItems: 'center', gap: '8px' }}>
              <LogIn size={18} />
              {'Iniciar sesión'}
            </a>
          )}
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={24} />}
        </button>
      </header>

      {currentPage === 'inicio' ? (
        <>
          <div className="hero-viewport" id="inicio">
            {/* Background Image Carousel */}
            <div className="hero-bg-carousel">
              <div className={`hero-bg-slide slide-1 ${bgIndex === 0 ? 'active' : ''}`} />
              <div className={`hero-bg-slide slide-2 ${bgIndex === 1 ? 'active' : ''}`} />
              <div className={`hero-bg-slide slide-3 ${bgIndex === 2 ? 'active' : ''}`} />
              <div className="hero-bg-overlay" />
              <div className="hero-bg-dots" aria-label="Indicadores de imagen">
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    className={`hero-bg-dot ${bgIndex === i ? 'active' : ''}`}
                    aria-label={`Imagen ${i + 1}`}
                    onClick={() => { setBgIndex(i); setAutoPlay(false); setTimeout(() => setAutoPlay(true), 15000); }}
                  />
                ))}
              </div>
            </div>

            {/* Mobile-only Subscribe Button placed outside the animated copy container */}
            <a className="subscribe mobile-only-subscribe" href="#tickets">{'\u00a1Suscribirme!'}</a>

            <section className="hero">
              <div key={bgIndex} className="copy hero-copy-animated visible">
                <h1>{heroSlides[bgIndex].title}</h1>
                <p className="gold-line">{heroSlides[bgIndex].gold}</p>
                <p className="white-line">{heroSlides[bgIndex].white}</p>
                <a className="subscribe desktop-only-subscribe" href="#tickets">{'\u00a1Suscribirme!'}</a>
              </div>
              <div className="hero-visuals">
              </div>
            </section>


          </div>

          <div className="home-sections-container">
            <div className="gold-aurora" aria-hidden="true" />
            <Particles />
            <Sparkles />
            <TrustSection />
            <PrizesSection prizes={prizesList} />
            <SubscriptionSection />
            <BenefitsSection />
            <WinnersSection />
            <TicketPurchaseSection onCheckout={startCheckout} />
            <FaqSection />
          </div>
        </>
      ) : (
        <div className="subpage-container">
          <div className="gold-aurora" aria-hidden="true" />
          <Particles />
          <Sparkles />
          {currentPage === 'premios' && <PremiosPage prizes={prizesList} />}
          {currentPage === 'ganadores' && <GanadoresPage />}
          {currentPage === 'como-funciona' && <ComoFuncionaPage />}
          {currentPage === 'beneficios' && <BeneficiosPage />}
          {currentPage === 'tickets' && <TicketsPage onCheckout={startCheckout} />}
          {currentPage === 'login' && <LoginPage onLogin={handleLogin} />}
          {currentPage === 'register' && <RegisterPage pendingQty={pendingQty} onRegister={handleRegister} />}
          {currentPage === 'dashboard' && currentUser && (
            <UserDashboard 
              user={currentUser} 
              tickets={tickets} 
              onBuyMore={handleBuyTickets} 
              onLogout={handleLogout} 
            />
          )}
          {currentPage === 'admin-dashboard' && currentUser && (
            <AdminDashboard 
              users={users} 
              tickets={tickets} 
              prizes={prizesList}
              onAddPrize={(newPrize) => setPrizesList(prev => [newPrize, ...prev])}
              onDeletePrize={(prizeToDelete) => setPrizesList(prev => prev.filter(p => p !== prizeToDelete))}
              onLogout={handleLogout} 
            />
          )}
          {currentPage === 'preguntas' && <FaqPage />}
          {currentPage === 'terminos' && <TerminosPage />}
          {currentPage === 'privacidad' && <PrivacidadPage />}
          {currentPage === 'gestion' && <GestionPage />}
          {currentPage === 'cookies' && <CookiesPage />}
          {currentPage === 'reglamento' && <ReglamentoPage />}
        </div>
      )}

      <Footer />

      {checkoutQty > 0 && (
        <div className="checkout-modal-overlay">
          <div className="checkout-modal" style={{ maxWidth: '480px', padding: '28px' }}>
            <button className="close-btn" onClick={() => setCheckoutQty(0)}>&times;</button>
            
            <div className="checkout-header" style={{ marginBottom: '20px' }}>
              <h2>Suscripción</h2>
              <p>Adquiriendo: <strong>{checkoutQty} {checkoutQty === 1 ? 'suscripción' : 'suscripciones'} (S/ {checkoutQty * 50}.00)</strong></p>
            </div>

            {/* Step indicator */}
            {!currentUser && (
              <div className="step-indicator" style={{ marginBottom: '24px', justifyContent: 'center' }}>
                <span className={`step-dot ${checkoutStep >= 1 ? 'active' : ''}`}>1. DNI</span>
                <span className="step-line" style={{ width: '40px' }}></span>
                <span className={`step-dot ${checkoutStep >= 2 ? 'active' : ''}`}>2. Registro</span>
                <span className="step-line" style={{ width: '40px' }}></span>
                <span className={`step-dot ${checkoutStep >= 3 ? 'active' : ''}`}>3. Pago</span>
              </div>
            )}

            {checkoutError && (
              <div className="auth-error" style={{ marginBottom: '16px', fontSize: '13px' }}>
                {checkoutError}
              </div>
            )}

            {/* STEP 1: DNI VALIDATION */}
            {checkoutStep === 1 && !currentUser && (
              <form onSubmit={handleCheckoutValidateDni} className="auth-form" style={{ background: 'none', border: 'none', padding: 0 }}>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>
                  Primero, ingresa tu DNI para verificar tus datos. Esto asociará tus suscripciones a tu identidad oficial.
                </p>
                <div className="form-group" style={{ marginBottom: '18px' }}>
                  <label>Número de DNI</label>
                  <input 
                    type="text" 
                    maxLength="8"
                    placeholder="Ingresa tu DNI de 8 dígitos" 
                    value={checkoutDni}
                    onChange={(e) => { setCheckoutDni(e.target.value.replace(/\D/g, '')); setCheckoutError(''); setCheckoutManualFallback(false); }}
                    required 
                    disabled={checkoutValidating}
                  />
                </div>
                
                {checkoutValidating ? (
                  <button type="button" className="auth-btn" disabled style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <span className="spinner" style={{ width: '16px', height: '16px', border: '2px solid rgba(19, 13, 4, 0.2)', borderTopColor: '#130d04', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></span>
                    Consultando RENIEC...
                  </button>
                ) : (
                  <button type="submit" className="auth-btn">Verificar DNI →</button>
                )}

                {checkoutManualFallback && (
                  <button 
                    type="button" 
                    className="auth-btn-secondary" 
                    onClick={() => { setCheckoutError(''); setCheckoutStep(2); }}
                    style={{ marginTop: '8px', width: '100%' }}
                  >
                    Ingresar datos manualmente →
                  </button>
                )}

                <p style={{ textAlign: 'center', fontSize: '12px', marginTop: '16px', color: 'rgba(255,255,255,0.5)' }}>
                  ¿Ya tienes cuenta?{' '}
                  <a 
                    href="#login" 
                    onClick={(e) => { e.preventDefault(); setCheckoutQty(0); setCurrentPage('login'); window.location.hash = '#login'; }} 
                    style={{ color: '#ffe16e', fontWeight: 'bold', textDecoration: 'underline' }}
                  >
                    Inicia Sesión aquí
                  </a>
                </p>
              </form>
            )}

            {/* STEP 2: REGISTRATION DETAILS */}
            {checkoutStep === 2 && !currentUser && (
              <form onSubmit={handleCheckoutRegisterNext} className="auth-form" style={{ background: 'none', border: 'none', padding: 0 }}>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>
                  Completa tus datos de acceso para crear tu cuenta.
                </p>
                
                <div className="form-group" style={{ marginBottom: '12px' }}>
                  <label>DNI</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input 
                      type="text" 
                      value={checkoutDni} 
                      disabled 
                      style={{ flex: 1, opacity: 0.8, background: 'rgba(255,255,255,0.05)', padding: '10px 14px' }} 
                    />
                    {checkoutDniValidated && (
                      <span style={{ color: '#81c784', fontSize: '11px', fontWeight: '800', whiteSpace: 'nowrap' }}>
                        ✓ VERIFICADO
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '12px' }}>
                  <label>Nombres y Apellidos Completos</label>
                  <input 
                    type="text" 
                    placeholder="Juan Perez Gomez" 
                    value={checkoutName}
                    onChange={(e) => { setCheckoutName(e.target.value); setCheckoutError(''); }}
                    required 
                    disabled={checkoutDniValidated}
                    style={checkoutDniValidated ? { opacity: 0.8, background: 'rgba(255,255,255,0.05)', padding: '10px 14px' } : { padding: '10px 14px' }}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '12px' }}>
                  <label>Correo Electrónico</label>
                  <input 
                    type="email" 
                    placeholder="ejemplo@correo.com" 
                    value={checkoutEmail}
                    onChange={(e) => { setCheckoutEmail(e.target.value); setCheckoutError(''); }}
                    required 
                    style={{ padding: '10px 14px' }}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '16px' }}>
                  <label>Contraseña</label>
                  <input 
                    type="password" 
                    placeholder="Crea tu contraseña" 
                    value={checkoutPassword}
                    onChange={(e) => { setCheckoutPassword(e.target.value); setCheckoutError(''); }}
                    required 
                    style={{ padding: '10px 14px' }}
                  />
                </div>

                <div className="form-actions-row" style={{ display: 'flex', gap: '10px' }}>
                  <button type="button" className="auth-btn-secondary" style={{ flex: 1 }} onClick={() => setCheckoutStep(1)}>← Atrás</button>
                  <button type="submit" className="auth-btn" style={{ flex: 1.5 }}>Siguiente: Pago →</button>
                </div>
              </form>
            )}

            {/* STEP 3: PAYMENT */}
            {checkoutStep === 3 && (
              <div>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>
                  {!currentUser ? 'Paso final: Completa la simulación del pago.' : 'Confirma tu compra directa.'}
                </p>

                <div className="checkout-summary" style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '12px', padding: '16px', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="summary-row" style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                    <span style={{ color: 'rgba(255,255,255,0.6)' }}>Asignado a:</span>
                    <strong style={{ color: '#fff' }}>{currentUser ? currentUser.name : checkoutName}</strong>
                  </div>
                  <div className="summary-row" style={{ marginBottom: '12px', display: 'flex', justifyContent: 'space-between', fontSize: '14px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px' }}>
                    <span style={{ color: 'rgba(255,255,255,0.6)' }}>DNI:</span>
                    <strong style={{ color: '#fff' }}>{currentUser ? currentUser.dni : checkoutDni}</strong>
                  </div>
                  <div className="summary-row" style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                    <span>Subtotal ({checkoutQty} suscripciones):</span>
                    <span>S/ {checkoutQty * 50}.00</span>
                  </div>
                  <div className="summary-row total" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '16px', fontWeight: 'bold', color: '#ffe16e', paddingTop: '8px', borderTop: '1px dotted rgba(255,225,110,0.2)' }}>
                    <span>Total a pagar:</span>
                    <span>S/ {checkoutQty * 50}.00</span>
                  </div>
                </div>

                <div className="payment-simulation-box" style={{ textAlign: 'center' }}>
                  <p className="secure-lock" style={{ fontSize: '12px', color: '#81c784', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                    🔒 Conexión cifrada segura
                  </p>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>
                    Serás redirigido a la simulación oficial de la pasarela <strong>Flow Pagos</strong>.
                  </p>
                  
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {!currentUser && (
                      <button 
                        type="button" 
                        className="auth-btn-secondary" 
                        style={{ flex: 1 }} 
                        onClick={() => setCheckoutStep(2)}
                      >
                        ← Volver
                      </button>
                    )}
                    <button 
                      className="checkout-pay-btn" 
                      style={{ flex: 2 }}
                      onClick={handleCheckoutCompletePayment}
                    >
                      Pagar con Flow
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
