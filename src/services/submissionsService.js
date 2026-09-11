import { saveToFirestore, getFromFirestore } from './firebaseClient';

/**
 * Service to handle submission API calls and data logic.
 */
export const SubmissionsService = {
  /**
   * Save a new submission.
   * @param {Object} formData 
   */
  async submitForm(formData) {
    if (!formData.fullName || !formData.email) {
      throw new Error("Missing required fields");
    }
    
    const dataWithTimestamp = {
      ...formData,
      submittedAt: new Date().toISOString()
    };
    
    return await saveToFirestore('submissions', dataWithTimestamp);
  },

  /**
   * Get all factory owners submissions.
   */
  async getFactoryOwners() {
    const data = await getFromFirestore('submissions');
    
    // Filter owners
    const owners = data.filter(item => 
      item.category === 'owner' || Boolean(item.companyName)
    );
    
    // Sort by newest
    return owners.sort((a, b) => {
      const timeA = new Date(a.submittedAt || 0).getTime();
      const timeB = new Date(b.submittedAt || 0).getTime();
      return timeB - timeA;
    });
  }
};
