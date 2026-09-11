import Footer from '../Footer';

export default function Layout({ children, currentScreen, onNavigate }) {
  return (
    <div className="app-container" dir="rtl">
      {/* Top Sticky Navigation Bar */}
      <nav className="top-nav">
        <div className="nav-brand" onClick={() => onNavigate && onNavigate('intro')}>
          <span className="brand-logo-icon">🏭</span> Gowwa Al Masna3
        </div>
        <div className="nav-links">
          <button 
            type="button"
            className={`nav-btn ${currentScreen === 'intro' ? 'active' : ''}`}
            onClick={() => onNavigate && onNavigate('intro')}
          >
            🌟 فكرة المنصة
          </button>
          <button 
            type="button"
            className={`nav-btn ${currentScreen === 'directory' ? 'active' : ''}`}
            onClick={() => onNavigate && onNavigate('directory')}
          >
            👥 دليل أصحاب المصانع
          </button>
          <button 
            type="button"
            className={`nav-btn ${currentScreen === 'form' ? 'active' : ''}`}
            onClick={() => onNavigate && onNavigate('form')}
          >
            📝 استمارة التسجيل
          </button>
          <button 
            type="button"
            className={`nav-btn ${currentScreen === 'about' ? 'active' : ''}`}
            onClick={() => onNavigate && onNavigate('about')}
          >
            ℹ️ عن المنصة
          </button>
        </div>
      </nav>

      {/* Main Screen Content */}
      <main className="main-content">
        {children}
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
