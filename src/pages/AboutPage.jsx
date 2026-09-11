export default function AboutPage({ onGoToForm }) {
  return (
    <section className="about-container">
      <div className="about-card">
        <h2>عن منصة GowaAlMasna3</h2>
        <p className="about-description">
          منصة مصرية صناعية رائدة تهدف إلى تشبيك المنشآت والمصانع ببعضها البعض لتحقيق التكامل الصناعي وتدوير الفائض والمخلفات وتسهيل تبادل الخبرات والكوادر الهندسية.
        </p>

        <div className="about-features">
          <div className="feature-item">
            <h3>🏭 أصحاب المصانع</h3>
            <p>إيجاد مصادر خامات بأسعار أفضل وتصريف المخلفات الصناعية بكفاءة.</p>
          </div>
          <div className="feature-item">
            <h3>📦 الموردين</h3>
            <p>فتح قنوات تسويقية مباشرة ومستدامة مع كبرى المصانع وخطوط الإنتاج.</p>
          </div>
          <div className="feature-item">
            <h3>💡 الخبراء والاستشاريين</h3>
            <p>تقديم الدعم التقني والاستشارات الهندسية للمصانع والمنشآت.</p>
          </div>
          <div className="feature-item">
            <h3>🎓 الطلاب والخريجين</h3>
            <p>فرص تدريب صيفي، مشروعات تخرج وزيارات ميدانية داخل مصانع حقيقية.</p>
          </div>
        </div>

        <div className="about-action">
          <button type="button" className="submit-btn" onClick={onGoToForm}>
            سجل الآن في المنصة
          </button>
        </div>
      </div>
    </section>
  );
}
