import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useToast } from './ToastContext';

interface CollectionContextData {
  collection: string[];
  addToCollection: (plantId: string, plantName: string) => void;
  removeFromCollection: (plantId: string) => void;
  hasInCollection: (plantId: string) => boolean;
}

const STORAGE_KEY = 'saber-botanico-collection';

const CollectionContext = createContext<CollectionContextData>({} as CollectionContextData);

export const CollectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [collection, setCollection] = useState<string[]>([]);
  const { addToast } = useToast();

  // Initialize and Sync
  useEffect(() => {
    const loadCollection = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          setCollection(JSON.parse(stored));
        } catch (e) {
          console.error("Failed to parse collection from storage", e);
          setCollection([]);
        }
      }
    };

    loadCollection();

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        loadCollection();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Persistence
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(collection));
    } catch (e) {
      console.error("Failed to save collection to storage", e);
    }
  }, [collection]);

  const addToCollection = useCallback((plantId: string, plantName: string) => {
    setCollection(prev => {
      if (prev.includes(plantId)) return prev;
      addToast(`${plantName} foi adicionada à sua coleção.`, 'success');
      return [...prev, plantId];
    });
  }, [addToast]);

  const removeFromCollection = useCallback((plantId: string) => {
    setCollection(prev => prev.filter(id => id !== plantId));
  }, []);

  const hasInCollection = useCallback((plantId: string) => {
    return collection.includes(plantId);
  }, [collection]);

  return (
    <CollectionContext.Provider value={{ collection, addToCollection, removeFromCollection, hasInCollection }}>
      {children}
    </CollectionContext.Provider>
  );
};

export function useCollection() {
  const context = useContext(CollectionContext);
  if (!context) {
    throw new Error('useCollection must be used within a CollectionProvider');
  }
  return context;
}