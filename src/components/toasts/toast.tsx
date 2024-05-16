import * as ToastPrimitives from '@radix-ui/react-toast';
import { cva, VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import React, { ElementRef, forwardRef } from 'react';

import AlertSuccessIcon from '../../icons/alert-success-icon';
import AlertWarningIcon from '../../icons/alert-warning-icon';
import { XCloseIcon } from '@/icons';
import { cn } from '../../utils';
import { AlertErrorIcon } from '@/icons';

export const ToastPrimitivesProvider = ToastPrimitives.Provider;

export type ToastActionElement = React.ReactElement<typeof ToastAction>;

const toastVariants = cva('rounded p-4', {
  variants: {
    variant: {
      success: 'text-success-700 border border-success-300 bg-success-25',
      warning: 'text-warning-700 border border-warning-300 bg-warning-25',
      error: 'text-error-700 border border-error-300 bg-error-25',
    },
  },
  defaultVariants: {
    variant: 'success',
  },
});

export type ToastProps = VariantProps<typeof toastVariants> & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  onOpenChange: (open: boolean) => void;
  action?: ToastActionElement;
};

const iconVariants = {
  success: <AlertSuccessIcon />,
  warning: <AlertWarningIcon />,
  error: <AlertErrorIcon />,
};

export const Toast = forwardRef<
  ElementRef<typeof ToastPrimitives.Root>,
  ToastProps
>(function Toast(
  { onOpenChange, title, description, variant = 'success', action },
  forwardedRef,
) {
  const width = 416;
  const margin = 16;

  return (
    <ToastPrimitives.Root
      ref={forwardedRef}
      asChild
      forceMount
      onOpenChange={onOpenChange}
      duration={5000}
      className={cn(toastVariants({ variant }))}
    >
      <motion.li
        layout
        initial={{ x: width + margin }}
        animate={{ x: 0 }}
        exit={{
          opacity: 0,
          zIndex: -1,
          transition: {
            opacity: {
              duration: 0.2,
            },
          },
        }}
        transition={{
          type: 'spring',
          mass: 1,
          damping: 30,
          stiffness: 200,
        }}
        style={{ width, WebkitTapHighlightColor: 'transparent' }}
      >
        <div className="flex items-start gap-x-3">
          {variant && <span className="mt-1">{iconVariants[variant]}</span>}
          <div className="w-full">
            {title && (
              <ToastPrimitives.Title className="flex items-center gap-3 font-semibold">
                <div>{title}</div>
              </ToastPrimitives.Title>
            )}
            {description && (
              <ToastPrimitives.Description className="font-normal">
                {description}
              </ToastPrimitives.Description>
            )}
            {action}
          </div>
          <ToastPrimitives.Close>
            <XCloseIcon />
          </ToastPrimitives.Close>
        </div>
      </motion.li>
    </ToastPrimitives.Root>
  );
});

export const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action> & {
    className?: string;
  }
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn('text-error-700 font-semibold text-sm', className)}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

export const ToastViewport = forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport> & {
    className?: string;
  }
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      'fixed flex flex-col-reverse gap-3 max-sm:top-20 top-4 right-4 w-80 z-[9999]',
      className,
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
