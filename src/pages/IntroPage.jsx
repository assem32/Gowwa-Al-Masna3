export default function IntroPage({ onExploreDirectory, onOpenForm }) {
  return (
    <section className="intro-page">
      {/* Hero Intro Banner */}
      <div className="intro-hero">
        <div className="intro-hero-content">
          <h1 className="intro-title">
            شبكة واحدة تربط <span>مصانع مصر</span> لتحقيق الاكتفاء والنمو
          </h1>
          <p className="intro-lead">
            منصة ذكية تحول فائض ومخلفات المصانع إلى مدخلات إنتاج لمصانع أخرى، وتفتح قنوات تواصل مباشرة بين أصحاب المصانع، موردي الخامات، والخبراء الصناعيين.
          </p>

          <div className="hero-actions">
            <button type="button" className="btn-primary" onClick={onOpenForm}>
              🚀 سجل مصنعك أو نشاطك الآن
            </button>
            <button type="button" className="btn-outline" onClick={onExploreDirectory}>
              👥 تصفح دليل أصحاب المصانع
            </button>
          </div>

          <div className="stats-strip">
            <div className="stat-box">
              <span className="stat-number">+8</span>
              <span className="stat-label">قطاعات صناعية مغطاة</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">100%</span>
              <span className="stat-label">تواصل مباشر بدون وسيط</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">♻️</span>
              <span className="stat-label">إعادة تدوير الفائض والمخلفات</span>
            </div>
          </div>
        </div>

        <div className="intro-hero-visual">
          <div className="visual-card main-img-card">
            <img 
              src="https://picsum.photos/seed/factory/900/600" 
              alt="خط إنتاج مصنع متطور" 
              className="featured-image"
            />
            <div className="floating-tag tag-top">
              <span>🔄 تكامل وتبادل مخلفات</span>
            </div>
            <div className="floating-tag tag-bottom">
              <span>🤝 صفقات مباشرة بين المصانع</span>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works - Interactive Workflow with Animated Cards */}
      <div className="workflow-section">
        <div className="section-title-wrap">
          <span className="section-kicker">كيف تعمل المنصة؟</span>
          <h2>3 خطوات لتحقيق التكامل الصناعي</h2>
        </div>

        <div className="workflow-grid">
          <div className="step-card">
            <div className="step-number">01</div>
            <div className="step-img-wrap">
              <img 
                src="https://picsum.photos/seed/form/600/400" 
                alt="تسجيل البيانات"
              />
            </div>
            <h3>سجل بيانات مصنعك أو خبرتك</h3>
            <p>حدد قطاعك الصناعي، طاقتك الإنتاجية، الفائض أو المخلفات المتاحة لديك، أو احتياجاتك من الخامات.</p>
          </div>

          <div className="step-card featured-step">
            <div className="step-number">02</div>
            <div className="step-img-wrap">
              <img 
                src="https://picsum.photos/seed/connect/600/400" 
                alt="التشبيك الذكي"
              />
            </div>
            <h3>التشبيك والتكامل الصناعي</h3>
            <p>المنصة تربط بين المصانع التي تحتاج مواد خام بمصانع أخرى تنتج نفس المواد كفائض أو مخلفات ثانوية.</p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>
            <div className="step-img-wrap">
              <img 
                src="https://picsum.photos/seed/deal/600/400" 
                alt="التواصل المباشر والاتفاق"
              />
            </div>
            <h3>تواصل مباشر وتنفيذ صفقات</h3>
            <p>تواصل هاتفياً أو عبر واتساب مباشرة مع صاحب المصنع أو المورد أو الاستشاري بدون عمولات أو وسطاء.</p>
          </div>
        </div>
      </div>

      {/* Core Sectors Preview Grid */}
      <div className="sectors-section">
        <div className="section-title-wrap">
          <span className="section-kicker">القطاعات المدعومة</span>
          <h2>نخدم مختلف الصناعات الحيوية</h2>
        </div>

        <div className="sectors-grid">
          {[
            { name: 'الصناعات الهندسية والمعدنية', icon: '⚙️', img: 'https://picsum.photos/seed/metal/400/300' },
            { name: 'الصناعات الكيماوية والبلاستيك', icon: '🧪', img: 'https://picsum.photos/seed/chemical/400/300' },
            { name: 'صناعات الأغذية والمشروبات', icon: '🌾', img: 'https://picsum.photos/seed/food/400/300' },
            { name: 'الغزل والنسيج والملابس', icon: '🧵', img: 'https://picsum.photos/seed/textile/400/300' },
          ].map((sec, i) => (
            <div key={i} className="sector-card">
              <img src={sec.img} alt={sec.name} className="sector-bg" />
              <div className="sector-overlay">
                <span className="sector-icon">{sec.icon}</span>
                <h4>{sec.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call To Action Banner */}
      <div className="cta-banner">
        <h2>هل أنت جاهز لتوسيع شبكة أعمالك الصناعية؟</h2>
        <p>انضم الآن لمئات المصانع والموردين وسجل بيانات مصنعك في دقائق معدودة.</p>
        <div className="cta-buttons">
          <button type="button" className="btn-primary" onClick={onOpenForm}>
            تسجيل استمارة المصنع الآن
          </button>
          <button type="button" className="btn-secondary" onClick={onExploreDirectory}>
            مشاهدة المصانع المشاركة
          </button>
        </div>
      </div>
    </section>
  );
}
