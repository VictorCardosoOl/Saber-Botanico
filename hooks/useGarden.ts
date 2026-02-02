import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'saber_botanico_garden';

// Evento customizado para sincronizar componentes sem Context/Redux
const GARDEN_EVENT = 'garden_update';

export function useGarden() {
  const [savedIds, setSavedIds] = useState<string[]>([]);

  const loadSaved = useCallback(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setSavedIds(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Falha ao carregar jardim', e);
    }
  }, []);

  useEffect(() => {
    loadSaved();

    const handleStorageChange = () => loadSaved();
    
    // Escuta eventos locais e de outras abas
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener(GARDEN_EVENT, handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener(GARDEN_EVENT, handleStorageChange);
    };
  }, [loadSaved]);

  const togglePlant = useCallback((id: string) => {
    setSavedIds(current => {
      const newIds = current.includes(id)
        ? current.filter(pid => pid !== id)
        : [...current, id];
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newIds));
      window.dispatchEvent(new Event(GARDEN_EVENT));
      return newIds;
    });
  }, []);

  const hasPlant = useCallback((id: string) => savedIds.includes(id), [savedIds]);

  return { savedIds, togglePlant, hasPlant };
}