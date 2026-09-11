import { useState, useEffect } from 'react';
import { SubmissionsService } from '../services/submissionsService';

export function useOwnersDirectory() {
  const [owners, setOwners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('');

  const fetchOwners = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await SubmissionsService.getFactoryOwners();
      setOwners(data);
    } catch (err) {
      console.error(err);
      setError('تعذر تحميل بيانات أصحاب المصانع حالياً. تأكد من إعدادات الاتصال.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOwners();
  }, []);

  const filteredOwners = owners.filter(owner => {
    const matchesSearch = 
      (owner.fullName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (owner.companyName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (owner.city || '').toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSector = 
      !selectedSector || 
      (Array.isArray(owner.industrialSector) && owner.industrialSector.includes(selectedSector));

    return matchesSearch && matchesSector;
  });

  return {
    owners: filteredOwners,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    selectedSector,
    setSelectedSector,
    refreshOwners: fetchOwners
  };
}
