export default function StudentSection({ formData, handleTextChange, handleCheckboxChange }) {
  return (
    <div className="section-student">
      <h3>القسم الخامس — لو خريج جديد أو طالب</h3>
      
      <div className="form-group">
        <label>الجامعة</label>
        <input type="text" name="university" value={formData.university} onChange={handleTextChange} required />
      </div>

      <div className="form-group">
        <label>التخصص الدراسي</label>
        <input type="text" name="major" value={formData.major} onChange={handleTextChange} required />
      </div>

      <div className="form-group">
        <label>سنة التخرج أو السنة الدراسية الحالية</label>
        <input type="text" name="graduationYear" value={formData.graduationYear} onChange={handleTextChange} required />
      </div>

      <div className="form-group checkbox-group">
        <label>القطاع الصناعي اللي بتدور على فرصة فيه</label>
        {['غذائي / مشروبات', 'بلاستيك / مطاط', 'كيماويات', 'نسيج / ملابس', 'معادن / حديد / صلب', 'مواد بناء / إسمنت / زجاج', 'ورق / طباعة', 'إلكترونيات / كهرباء'].map(sector => (
          <label key={sector} className="checkbox-label">
            <input type="checkbox" name="targetSector" value={sector} onChange={handleCheckboxChange} /> {sector}
          </label>
        ))}
      </div>

      <div className="form-group checkbox-group">
        <label>نوع الفرصة اللي بتدور عليها</label>
        {['تدريب صيفي summer internship', 'تدريب نصف وقت part time', 'وظيفة بدوام كامل full time job', 'مشروع تخرج في مصنع حقيقي graduation project', 'factory visit زيارة لمصنع'].map(opp => (
          <label key={opp} className="checkbox-label">
            <input type="checkbox" name="opportunityType" value={opp} onChange={handleCheckboxChange} /> {opp}
          </label>
        ))}
      </div>

      <div className="form-group">
        <label>في جملتين — إيه اللي تقدر تقدمه لأي مصنع يوفرلك تدريب؟</label>
        <textarea name="whatCanYouOffer" value={formData.whatCanYouOffer} onChange={handleTextChange} rows="3" required></textarea>
      </div>

      <div className="form-group">
        <label>لينك الـ CV (اختياري)</label>
        <input type="url" name="cvLink" value={formData.cvLink} onChange={handleTextChange} dir="ltr" placeholder="https://..." />
      </div>
    </div>
  );
}
