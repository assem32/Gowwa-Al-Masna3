export default function SupplierSection({ formData, handleTextChange }) {
  return (
    <div className="section-supplier">
      <h3>القسم الثالث — لو مورد خامات أو مواد أولية</h3>
      
      <div className="form-group">
        <label>إيه المواد أو الخامات اللي بتوفرها؟</label>
        <input type="text" name="rawMaterials" value={formData.rawMaterials} onChange={handleTextChange} required />
      </div>

      <div className="form-group">
        <label>هل عندك طاقة إنتاجية زيادة ممكن تستوعب عملاء جدد؟</label>
        <select name="extraCapacity" value={formData.extraCapacity} onChange={handleTextChange} required>
          <option value="" disabled>اختر الإجابة</option>
          <option value="yes">أيوه</option>
          <option value="no">لا</option>
          <option value="maybe">ممكن</option>
        </select>
      </div>
    </div>
  );
}
