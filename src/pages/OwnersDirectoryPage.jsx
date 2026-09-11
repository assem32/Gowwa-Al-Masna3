import { useOwnersDirectory } from '../hooks/useOwnersDirectory';

export default function OwnersDirectoryPage({ onGoToForm }) {
  const {
    owners,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    selectedSector,
    setSelectedSector,
    refreshOwners
  } = useOwnersDirectory();

  return (
    <section className="directory-container">
      <div className="directory-header">
        <span className="badge">دليل المصانع المشتركة</span>
        <h2>شبكة أصحاب المصانع وجهات الاتصال</h2>
        <p className="directory-subtitle">
          تواصل مباشرة مع أصحاب المصانع والمديرين لتنسيق التوريدات، تبادل المخلفات الصناعية، وفرص الشراكة والإنتاج المشترك.
        </p>
      </div>

      <div className="directory-controls">
        <input 
          type="text" 
          className="search-input"
          placeholder="🔍 ابحث بالاسم، المصنع أو المدينة..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select 
          className="filter-select"
          value={selectedSector}
          onChange={(e) => setSelectedSector(e.target.value)}
        >
          <option value="">جميع القطاعات الصناعية</option>
          <option value="غذائي / مشروبات">غذائي / مشروبات</option>
          <option value="بلاستيك / مطاط">بلاستيك / مطاط</option>
          <option value="كيماويات">كيماويات</option>
          <option value="غزل ونسيج / ملابس">غزل ونسيج / ملابس</option>
          <option value="معادن / حديد / صلب">معادن / حديد / صلب</option>
          <option value="مواد بناء / إسمنت / زجاج">مواد بناء / إسمنت / زجاج</option>
          <option value="ورق / طباعة">ورق / طباعة</option>
          <option value="إلكترونيات / كهرباء">إلكترونيات / كهرباء</option>
        </select>

        <button type="button" className="refresh-btn" onClick={refreshOwners}>
          تحديث البيانات 🔄
        </button>
      </div>

      {loading && (
        <div className="state-card loading-state">
          <div className="spinner"></div>
          <p>جاري تحميل أصحاب المصانع من قاعدة البيانات...</p>
        </div>
      )}

      {error && !loading && (
        <div className="state-card error-state">
          <p>{error}</p>
          <button type="button" className="btn-secondary" onClick={refreshOwners}>
            إعادة المحاولة
          </button>
        </div>
      )}

      {!loading && !error && owners.length === 0 && (
        <div className="state-card empty-state">
          <div className="empty-icon">🏭</div>
          <h3>لا توجد مصانع مسجلة تطابق بحثك حالياً</h3>
          <p>كن أول من يسجل مصنعه وينضم لشبكة التكامل الصناعي!</p>
          <button type="button" className="submit-btn compact" onClick={onGoToForm}>
            تسجيل مصنعي الآن
          </button>
        </div>
      )}

      {!loading && !error && owners.length > 0 && (
        <div className="owners-grid">
          {owners.map((owner, idx) => {
            const cleanPhone = (owner.phone || '').replace(/[^0-9+]/g, '');
            const whatsappUrl = `https://wa.me/${cleanPhone.replace('+', '')}`;

            return (
              <div key={owner.id || idx} className="owner-card">
                <div className="card-top">
                  <div className="avatar-badge">
                    {(owner.fullName || 'م')[0]}
                  </div>
                  <div>
                    <h3 className="owner-name">{owner.fullName || 'غير محدد'}</h3>
                    <div className="company-title">
                      🏢 {owner.companyName || 'صاحب مصنع'}
                    </div>
                  </div>
                </div>

                <div className="card-details">
                  <div className="detail-row">
                    <span className="detail-label">📍 الموقع:</span>
                    <span>{owner.city ? `${owner.city}، ` : ''}{owner.country || 'مصر'}</span>
                  </div>

                  {owner.industrialSector && owner.industrialSector.length > 0 && (
                    <div className="detail-row tags-row">
                      <span className="detail-label">🏭 القطاع:</span>
                      <div className="tags-list">
                        {(Array.isArray(owner.industrialSector) ? owner.industrialSector : [owner.industrialSector]).map((sec, i) => (
                          <span key={i} className="sector-tag">{sec}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {owner.byProducts && (
                    <div className="detail-row">
                      <span className="detail-label">♻️ الفائض / المخلفات:</span>
                      <span className="highlight-text">{owner.byProducts}</span>
                    </div>
                  )}
                </div>

                <div className="card-actions">
                  {owner.phone && (
                    <a 
                      href={`tel:${owner.phone}`} 
                      className="contact-btn call-btn"
                      title="اتصال هاتفي"
                    >
                      📞 اتصال: {owner.phone}
                    </a>
                  )}

                  {owner.phone && (
                    <a 
                      href={whatsappUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-btn whatsapp-btn"
                      title="محادثة واتساب"
                    >
                      💬 واتساب
                    </a>
                  )}

                  {owner.email && (
                    <a 
                      href={`mailto:${owner.email}`} 
                      className="contact-btn email-btn"
                      title="إرسال بريد"
                    >
                      ✉️ {owner.email}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
