import React from 'react';

export function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-col col-contact">
          <h3>Contáctanos</h3>
          <ul className="contact-list">
            <li>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
              <span>Escríbenos a <a href="https://instagram.com/loscumpasdelasuerte" target="_blank" rel="noopener noreferrer">@loscumpasdelasuerte</a></span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>Escríbenos a: <a href="mailto:soporte@loscumpasdelasuerte.com">soporte@loscumpasdelasuerte.com</a></span>
            </li>
            <li className="contact-hours">
              Horario: L-V de 9 a 6pm | Sáb. de 9am a 2pm
            </li>
            <li className="contact-help">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <span>¿Dudas? Revisa <a href="#faq">Preguntas</a></span>
            </li>
          </ul>
        </div>

        <div className="footer-col col-legal">
          <h3>Información legal</h3>
          <ul>
            <li><a href="#terminos">Términos y condiciones</a></li>
            <li><a href="#privacidad">Políticas de privacidad</a></li>
            <li><a href="#gestion">Política del sistema integrado de gestión</a></li>
            <li><a href="#cookies">Política de cookies</a></li>
            <li><a href="#reglamento">Reglamento</a></li>
          </ul>
        </div>

        <div className="footer-col col-certs">
          <a href="#reclamaciones" aria-label="Libro de Reclamaciones" style={{ display: 'inline-block' }}>
            <img
              src="https://stnohaysinsuerteprod.blob.core.windows.net/home/libro-de-reclamaciones.webp"
              alt="Libro de Reclamaciones"
              style={{ height: '60px', width: 'auto', objectFit: 'contain', borderRadius: '8px' }}
            />
          </a>

          <div className="cert-panel">
            <span className="cert-label">Certificados por:</span>
            <div className="cert-logos">
              <div className="mock-cert-logo iqnet">
                <span>IQNET</span>
              </div>
              <div className="mock-cert-logo aenor">
                <span className="aenor-top">AENOR</span>
                <span className="aenor-sub">Gestión Calidad</span>
              </div>
              <div className="mock-cert-logo aenor">
                <span className="aenor-top">AENOR</span>
                <span className="aenor-sub">Antisoborno</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-col col-brand">
          <div className="footer-logo">
            <span>LOS CUMPAS</span>
            <small>DE LA</small>
            <b>SUERTE</b>
          </div>

          <div className="social-links">
            <a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.62.962 3.205 1.488 4.887 1.489 5.4 0 9.794-4.382 9.797-9.77.001-2.61-1.01-5.064-2.85-6.907-1.838-1.84-4.288-2.853-6.897-2.854-5.4 0-9.795 4.384-9.799 9.774-.002 1.8.483 3.5 1.402 5.097l-.988 3.606 3.74-.988z" />
              </svg>
            </a>
            <a href="https://instagram.com/loscumpasdelasuerte" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://facebook.com/loscumpasdelasuerte" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
            </a>
            <a href="https://tiktok.com/@loscumpasdelasuerte" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12.525.01c1.306-.022 2.613-.005 3.914-.014.136.871.49 1.72 1.05 2.406.845.988 2.057 1.56 3.287 1.83v3.743c-1.127-.068-2.228-.466-3.155-1.112-.602-.416-1.113-.967-1.503-1.602-.03 1.93-.014 3.86-.024 5.79-.017 1.745-.48 3.52-1.543 4.896-.92 1.258-2.36 2.05-3.896 2.186-1.536.143-3.167-.174-4.46-1.042-1.554-1.01-2.483-2.825-2.42-4.68.04-1.782.91-3.52 2.39-4.516 1.15-.81 2.6-.1.173-1.393-.173.136.26-.064.29-.1.352-.398.81-.652 1.348-.795.534-.14 1.09-.133 1.636-.073.344.037.684.12 1.01.246.732.28 1.36.786 1.82 1.417.432.6.68 1.32.713 2.053.05.99-.444 1.988-1.258 2.53-.787.525-1.84.58-2.673.14-.627-.323-1.05-.966-1.124-1.666-.084-.81.254-1.663.882-2.17.406-.33.916-.487 1.442-.487V4.73c-2.407.037-4.836 1.22-6.074 3.32-1.365 2.26-1.233 5.3 0.324 7.42 1.516 2.122 4.316 3.036 6.84 2.224 2.355-.724 4.093-2.83 4.544-5.26.17-.923.153-1.873.155-2.813V0h-3.91v.01z" />
              </svg>
            </a>
          </div>

          <div className="footer-copyright">
            <p>© 2026 Todos los derechos reservados</p>
            <p className="footer-ruc">RUC: 20611347116 - LOS CUMPAS DE LA SUERTE</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
