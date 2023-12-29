import { ReactNode } from 'react';
import { ToastProps } from './toast';
type ToastContext = Omit<ToastProps, 'id' | 'onOpenChange'>;
declare const ToastContext: import("react").Context<{
    showToast: (toast: ToastContext) => void;
}>;
export declare function useToast(): {
    showToast: (toast: ToastContext) => void;
};
export declare function ToastProvider({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export {};
