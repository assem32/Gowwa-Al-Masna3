export default function OwnerSection({ formData, handleTextChange, handleCheckboxChange }) {
  return (
    <div className="section-factory">
      <h3>القسم الثاني — لو صاحب مصنع أو مدير تشغيل</h3>
      
      <div className="form-group">
        <label>اسم المصنع أو الشركة</label>
        <input type="text" name="companyName" value={formData.companyName} onChange={handleTextChange} required />
      </div>

      <div className="form-group checkbox-group">
        <label>القطاع الصناعي (اختر ما ينطبق)</label>
        {['غذائي / مشروبات', 'بلاستيك / مطاط', 'كيماويات', 'غزل ونسيج / ملابس', 'معادن / حديد / صلب', 'مواد بناء / إسمنت / زجاج', 'ورق / طباعة', 'إلكترونيات / كهرباء'].map(sector => (
          <label key={sector} className="checkbox-label">
            <input type="checkbox" name="industrialSector" value={sector} onChange={handleCheckboxChange} /> {sector}
          </label>
        ))}
      </div>

      <div className="form-group">
        <label>المخلفات أو المنتجات الثانوية اللي بتطلع من المصنع</label>
        <input type="text" name="byProducts" value={formData.byProducts} onChange={handleTextChange} required />
      </div>

      <div className="form-group checkbox-group">
        <label>إيه أكبر تحدي بتواجهه دلوقتي؟ (اختر حتى 3)</label>
        {['تكلفة الخامات', 'إدارة المخلفات', 'كفاءة الإنتاج', 'إيجاد موردين موثوقين', 'تطوير العمليات', 'إيجاد عمالة موثوقة ومؤهلة'].map(challenge => (
          <label key={challenge} className="checkbox-label">
            <input type="checkbox" name="biggestChallenge" value={challenge} onChange={handleCheckboxChange} /> {challenge}
          </label>
        ))}
      </div>

      <div className="form-group checkbox-group">
        <label>إيه نوع التعاون اللي ممكن يفيدك؟</label>
        {['تبادل مخلفات أو خامات مع مصانع تانية', 'استشارة خبير في مجالك', 'ربط بموردين', 'تحسين كفاءة خط الإنتاج', 'توفير تدريب صيفي او زيارة لطلاب الهندسة'].map(collab => (
          <label key={collab} className="checkbox-label">
            <input type="checkbox" name="usefulCooperation" value={collab} onChange={handleCheckboxChange} /> {collab}
          </label>
        ))}
      </div>
    </div>
  );
}
