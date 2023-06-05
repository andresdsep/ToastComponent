import { useEffect } from 'react';

export const useEscapeKey = (memoisedCallback: () => void) => {
  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        memoisedCallback();
      }
    };
    document.addEventListener('keydown', onEscape);
    return () => document.removeEventListener('keydown', onEscape);
  }, [memoisedCallback]);
};
