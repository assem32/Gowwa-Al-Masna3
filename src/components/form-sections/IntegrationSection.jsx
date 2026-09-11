export default function IntegrationSection({ formData, handleTextChange, handleCheckboxChange }) {
  return (
    <div className="section-integration">
      <h3>القسم السادس — التكامل الصناعي ونشرة جوا المصنع</h3>

      <div className="form-group">
        <label>هل سبق وتعاملت مع جهة تانية في المناطق الصناعية المحيطة بيك؟ (تبادل خامات، مخلفات، خبرات)</label>
        <select name="previousCooperation" value={formData.previousCooperation} onChange={handleTextChange} required>
          <option value="" disabled>اختر الإجابة</option>
          <option value="yes">نعم</option>
          <option value="no">لا — بس مهتم أبدأ</option>
        </select>
      </div>

      <div className="form-group checkbox-group">
        <label>إيه أكتر نوع تعاون بتفكر فيه؟</label>
        {['waste circulation & by products | تبادل مخلفات أو منتجات ثانوية', 'Buying raw materials with a better price | شراء خامات بسعر أفضل', 'sharing experience | مشاركة خبرة أو معرفة تقنية', 'codeveloping a common project | تطوير مشروع مشترك'].map(coop => (
          <label key={coop} className="checkbox-label">
            <input type="checkbox" name="preferredCooperation" value={coop} onChange={handleCheckboxChange} /> {coop}
          </label>
        ))}
      </div>

      <div className="form-group checkbox-group">
        <label>هل تحب الانضمام لنشرة اخبار جوّا المصنع؟</label>
        {[
          'أيوه — عايز أعرف بفرص التوظيف الجديدة', 
          'أيوه — عايز أعرف بطلبات الخامات والمواد المتاحة', 
          'أيوه — عايز أعرف بفرص التكامل الصناعي بين المصانع', 
          'أيوه — عايز أعرف بالأحداث والفعاليات الصناعية', 
          'أيوه — عايز أعرف بالمستشارين والخبراء المتاحين للتعاون', 
          'لا شكراً'
        ].map(news => (
          <label key={news} className="checkbox-label">
            <input type="checkbox" name="newsletter" value={news} onChange={handleCheckboxChange} /> {news}
          </label>
        ))}
      </div>

      <div className="form-group">
        <label>هل عندك أي حاجة تاني حابب تضيفها أو تشاركها مع الشبكة؟</label>
        <textarea name="additionalComments" value={formData.additionalComments} onChange={handleTextChange} rows="4"></textarea>
      </div>
    </div>
  );
}
