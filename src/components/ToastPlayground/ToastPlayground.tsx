import React, { useState } from 'react';
import Button from '../Button';
import ToastShelf from '../ToastShelf/ToastShelf';
import { TOAST_VARIANT_OPTIONS, ToastSettings, ToastVariant } from '../types';
import styles from './ToastPlayground.module.css';

function ToastPlayground() {
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState<ToastVariant>('notice');
  const [toasts, setToasts] = useState<ToastSettings[]>([]);

  const pushToast = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setToasts((curr) => [...curr, { id: Math.random(), message, variant }]);
    setMessage('');
    setVariant('notice');
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} setToasts={setToasts} />

      <form onSubmit={pushToast}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label htmlFor="message" className={styles.label} style={{ alignSelf: 'baseline' }}>
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {TOAST_VARIANT_OPTIONS.map((option) => (
                <label htmlFor={`variant-${option}`} key={option}>
                  <input
                    id={`variant-${option}`}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={option === variant}
                    onChange={() => setVariant(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
