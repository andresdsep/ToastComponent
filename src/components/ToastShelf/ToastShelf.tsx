import React from 'react';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastSettings } from '../types';

type Props = {
  toasts: ToastSettings[];
  setToasts: React.Dispatch<React.SetStateAction<ToastSettings[]>>;
};

function ToastShelf({ toasts, setToasts }: Props) {
  const removeToast = (id: number) => {
    const newToasts = toasts.filter((t) => t.id !== id);
    setToasts(newToasts);
  };
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, message, variant }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast variant={variant} onClose={() => removeToast(id)}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
