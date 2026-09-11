export default function ExpertSection({ formData, handleTextChange, handleCheckboxChange }) {
  return (
    <div className="section-expert">
      <h3>القسم الرابع — لو خبير أو مستشار أو متخصص</h3>
      
      <div className="form-group checkbox-group">
        <label>القطاعات الصناعية اللي بتخدمها دلوقتي</label>
        {['غذائي / مشروبات', 'بلاستيك / مطاط', 'كيماويات', 'غزل ونسيج / ملابس', 'معادن / حديد / صلب', 'مواد بناء / إسمنت / زجاج', 'ورق / طباعة تعبئة وتغليف', 'إلكترونيات / كهرباء', 'أدوية ومستحضرات طبية / مستحضرات تجميلية', 'تدوير مخلفات واقتصاد دائرى', 'منتجات زراعية', 'صناعات الجلود'].map(sector => (
          <label key={sector} className="checkbox-label">
            <input type="checkbox" name="expertSectors" value={sector} onChange={handleCheckboxChange} /> {sector}
          </label>
        ))}
      </div>

      <div className="form-group">
        <label>هل أنت مستعد تقدم استشارة مجانية لمصانع في الشبكة؟</label>
        <select name="freeConsultation" value={formData.freeConsultation} onChange={handleTextChange} required>
          <option value="" disabled>اختر الإجابة</option>
          <option value="yes">أيوه بكل سرور</option>
          <option value="maybe">ممكن — حسب الموضوع</option>
          <option value="no">لا، بس مستعد للتعاون المدفوع</option>
        </select>
      </div>
    </div>
  );
}
