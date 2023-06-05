import React from 'react';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  return (
    <ol className={styles.wrapper}>
      <li className={styles.toastWrapper}>
        <Toast variant="notice" onClose={() => {}}>Example notice toast</Toast>
      </li>
      <li className={styles.toastWrapper}>
        <Toast variant="error" onClose={() => {}}>Example error toast</Toast>
      </li>
    </ol>
  );
}

export default ToastShelf;
