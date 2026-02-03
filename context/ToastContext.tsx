import React, { createContext, useContext, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'info';
}

interface ToastContextData {
  addToast: (message: string, type?: 'success' | 'info') => void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((message: string, type: 'success' | 'info' = 'success') => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { id, message, type };

    setToasts((state) => [...state, newToast]);

    // Auto remove after 3 seconds
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((state) => state.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4 pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              layout
              className="pointer-events-auto bg-forest-dark border border-gold/30 text-paper px-6 py-4 rounded-sm shadow-2xl backdrop-blur-md flex items-center gap-4 min-w-[300px]"
            >
              <span className={`material-symbols-outlined ${toast.type === 'success' ? 'text-gold' : 'text-sage'}`}>
                {toast.type === 'success' ? 'spa' : 'info'}
              </span>
              <div className="flex flex-col">
                <span className="font-serif text-lg leading-none mb-1">
                    {toast.type === 'success' ? 'Sucesso' : 'Nota'}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-70">
                    {toast.message}
                </span>
              </div>
              <button 
                onClick={() => removeToast(toast.id)}
                className="ml-auto text-white/20 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}