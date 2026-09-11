export default function BasicInfoSection({ formData, handleTextChange }) {
  return (
    <>
      <div className="form-group">
        <label>أنت بتنتمي لأنهي فئة؟ / What category do you belong to?</label>
        <select name="category" value={formData.category} onChange={handleTextChange} required>
          <option value="" disabled>اختر واحدة (Select one)</option>
          <option value="owner">صاحب مصنع أو مدير تشغيل</option>
          <option value="supplier">مورد خامات أو مواد أولية</option>
          <option value="expert">خبير أو مستشار صناعي</option>
          <option value="specialist">متخصص (خبرة اقل من خمس سنوات)</option>
          <option value="consulting_firm">شركة استشارات</option>
          <option value="researcher">باحث أو أكاديمي</option>
          <option value="student">خريج جديد أو طالب يبحث عن فرصة في الصناعة</option>
        </select>
      </div>

      <div className="form-group">
        <label>الاسم الكامل / Full Name</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleTextChange} required />
      </div>

      <div className="form-group">
        <label>رقم التواصل (يفضل واتساب) / Contact Phone</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleTextChange} required dir="ltr" />
      </div>

      <div className="form-group">
        <label>البريد الإلكتروني / Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleTextChange} required dir="ltr" />
      </div>

      <div className="form-group">
        <label>الدولة / Country</label>
        <input type="text" name="country" value={formData.country} onChange={handleTextChange} required />
        <small>صاحب المصنع يذكر دولة المصنع، والخبير يذكر دولة تواجده.</small>
      </div>

      <div className="form-group">
        <label>المدينة / City</label>
        <input type="text" name="city" value={formData.city} onChange={handleTextChange} required />
      </div>
    </>
  );
}
