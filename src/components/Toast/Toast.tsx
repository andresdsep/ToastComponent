import React from 'react';
import { AlertOctagon, AlertTriangle, CheckCircle, Icon, Info, X } from 'react-feather';
import VisuallyHidden from '../VisuallyHidden';
import styles from './Toast.module.css';
import { ToastVariant } from '../types';

const ICONS_BY_VARIANT: Record<ToastVariant, Icon> = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

interface Props {
  message: string;
  variant: ToastVariant;
  onClose: () => void;
}

function Toast({ message, variant, onClose }: Props) {
  const ToastIcon = ICONS_BY_VARIANT[variant];
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <ToastIcon size={24} />
      </div>
      <p className={styles.content}>{message}</p>
      <button className={styles.closeButton} onClick={onClose}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
