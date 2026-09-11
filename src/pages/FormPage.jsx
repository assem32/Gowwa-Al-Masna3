import { useFactoryForm } from '../hooks/useFactoryForm';
import BasicInfoSection from '../components/form-sections/BasicInfoSection';
import OwnerSection from '../components/form-sections/OwnerSection';
import SupplierSection from '../components/form-sections/SupplierSection';
import ExpertSection from '../components/form-sections/ExpertSection';
import StudentSection from '../components/form-sections/StudentSection';
import IntegrationSection from '../components/form-sections/IntegrationSection';

export default function FormPage() {
  const {
    formData,
    submitted,
    isSubmitting,
    error,
    isFactoryOwner,
    isSupplier,
    isExpert,
    isStudent,
    handleTextChange,
    handleCheckboxChange,
    submitForm,
    resetForm
  } = useFactoryForm();

  return (
    <section className="form-container">
      {submitted ? (
        <div className="success-message">
          <h2>شكرًا لك! / Thank You!</h2>
          <p>تم استلام بياناتك بنجاح. سنتواصل معك قريبًا.</p>
          <button type="button" onClick={resetForm}>
            إرسال رد آخر (تسجيل جديد)
          </button>
        </div>
      ) : (
        <form className="data-form" onSubmit={submitForm}>
          <h2>تسجيل البيانات</h2>
          
          {error && <div className="error-banner" style={{color: 'red', marginBottom: '1rem'}}>{error}</div>}

          <BasicInfoSection 
            formData={formData} 
            handleTextChange={handleTextChange} 
          />

          <hr className="divider" />

          {isFactoryOwner && (
            <OwnerSection 
              formData={formData} 
              handleTextChange={handleTextChange} 
              handleCheckboxChange={handleCheckboxChange} 
            />
          )}

          {isSupplier && (
            <SupplierSection 
              formData={formData} 
              handleTextChange={handleTextChange} 
            />
          )}

          {isExpert && (
            <ExpertSection 
              formData={formData} 
              handleTextChange={handleTextChange} 
              handleCheckboxChange={handleCheckboxChange} 
            />
          )}

          {isStudent && (
            <StudentSection 
              formData={formData} 
              handleTextChange={handleTextChange} 
              handleCheckboxChange={handleCheckboxChange} 
            />
          )}

          {formData.category !== '' && (
            <>
              <hr className="divider" />
              <IntegrationSection 
                formData={formData} 
                handleTextChange={handleTextChange} 
                handleCheckboxChange={handleCheckboxChange} 
              />
              <button 
                type="submit" 
                className="submit-btn" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'جاري الإرسال...' : 'إرسال النموذج / Submit'}
              </button>
            </>
          )}
        </form>
      )}
    </section>
  );
}
