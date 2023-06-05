export const TOAST_VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'] as const;
export type ToastVariant = typeof TOAST_VARIANT_OPTIONS[number];

export type ToastSettings = {
  id: number;
  message: string;
  variant: ToastVariant;
}
