import { useState } from 'react';
import { SubmissionsService } from '../services/submissionsService';

const INITIAL_FORM_DATA = {
  fullName: '',
  phone: '',
  email: '',
  country: '',
  city: '',
  category: '',
  companyName: '',
  industrialSector: [],
  byProducts: '',
  biggestChallenge: [],
  usefulCooperation: [],
  rawMaterials: '',
  extraCapacity: '',
  expertSectors: [],
  freeConsultation: '',
  university: '',
  major: '',
  graduationYear: '',
  targetSector: [],
  opportunityType: [],
  whatCanYouOffer: '',
  cvLink: '',
  previousCooperation: '',
  preferredCooperation: [],
  newsletter: [],
  additionalComments: ''
};

export function useFactoryForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const resetForm = () => {
    setFormData(INITIAL_FORM_DATA);
    setSubmitted(false);
    setError(null);
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => {
      const currentValues = prev[name] || [];
      if (checked) {
        return { ...prev, [name]: [...currentValues, value] };
      } else {
        return { ...prev, [name]: currentValues.filter((v) => v !== value) };
      }
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      await SubmissionsService.submitForm(formData);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError('حدث خطأ أثناء إرسال البيانات. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper flags for UI rendering
  const isFactoryOwner = formData.category === 'owner';
  const isSupplier = formData.category === 'supplier';
  const isExpert = ['expert', 'specialist', 'consulting_firm', 'researcher'].includes(formData.category);
  const isStudent = formData.category === 'student';

  return {
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
  };
}
