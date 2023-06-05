import React, { PropsWithChildren, createContext, useContext, useMemo, useState } from 'react';
import { ToastSettings, ToastVariant } from '../types';

type ToastContextType = {
  toasts: ToastSettings[];
  pushToast: (message: string, variant: ToastVariant) => void;
  removeToast: (id: number) => void;
};

const ToastContext = createContext({} as ToastContextType);

export const useToastContext = () => useContext(ToastContext);

function ToastProvider({ children }: PropsWithChildren<{}>) {
  const [toasts, setToasts] = useState<ToastSettings[]>([]);

  const value = useMemo(() => {
    const pushToast = (message: string, variant: ToastVariant) => {
      setToasts((curr) => [...curr, { id: Math.random(), message, variant }]);
    };
    const removeToast = (id: number) => {
      const newToasts = toasts.filter((t) => t.id !== id);
      setToasts(newToasts);
    };
    return {
      toasts,
      pushToast,
      removeToast,
    };
  }, [toasts]);

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
