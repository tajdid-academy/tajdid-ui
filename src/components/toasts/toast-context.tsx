import { AnimatePresence } from 'framer-motion';
import { ReactNode, createContext, useContext, useState } from 'react';
import {
  Toast,
  ToastPrimitivesProvider,
  ToastProps,
  ToastViewport,
} from './toast';

type ToastContext = Omit<ToastProps, 'id' | 'onOpenChange'>;

const ToastContext = createContext<{
  showToast: (toast: ToastContext) => void;
}>({
  showToast: () => {
    throw new Error(
      "You can't call showToast() outside of a <ToastProvider> – add it to your tree.",
    );
  },
});

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Omit<ToastProps, 'onOpenChange'>[]>(
    [],
  );

  function showToast(toast: Omit<ToastProps, 'id' | 'onOpenChange'>) {
    setMessages(toasts => [
      ...toasts,
      {
        id: window.crypto.randomUUID(),
        ...toast,
      },
    ]);
  }

  return (
    <ToastPrimitivesProvider>
      <ToastContext.Provider value={{ showToast }}>
        {children}
      </ToastContext.Provider>

      <AnimatePresence mode="popLayout">
        {messages.map(toast => (
          <Toast
            key={toast.id}
            id={toast.id}
            title={toast.title}
            description={toast.description}
            variant={toast.variant}
            onOpenChange={() => {
              setMessages(toasts => toasts.filter(t => t.id !== toast.id));
            }}
            action={toast.action}
          />
        ))}
      </AnimatePresence>

      <ToastViewport />
    </ToastPrimitivesProvider>
  );
}
