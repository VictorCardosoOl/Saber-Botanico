import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useToast } from './ToastContext';

interface CollectionContextData {
  collection: string[]; // Array de IDs das plantas
  addToCollection: (plantId: string, plantName: string) => void;
  removeFromCollection: (plantId: string) => void;
  hasInCollection: (plantId: string) => boolean;
}

const CollectionContext = createContext<CollectionContextData>({} as CollectionContextData);

export const CollectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [collection, setCollection] = useState<string[]>([]);
  const { addToast } = useToast();

  // Carregar do localStorage na inicialização
  useEffect(() => {
    const stored = localStorage.getItem('saber-botanico-collection');
    if (stored) {
      try {
        setCollection(JSON.parse(stored));
      } catch (e) {
        console.error("Falha ao carregar coleção", e);
      }
    }
  }, []);

  // Persistir mudanças
  useEffect(() => {
    localStorage.setItem('saber-botanico-collection', JSON.stringify(collection));
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
    throw new Error('useCollection deve ser usado dentro de um CollectionProvider');
  }
  return context;
}
