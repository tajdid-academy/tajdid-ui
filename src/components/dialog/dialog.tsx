import { XCloseIcon } from '@/icons';
import { cn } from '@/utils';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { Button } from '..';

type ChildrenProps = {
  children: React.ReactNode;
  className?: string;
};

const dialogMainVariants = cva(
  'py-6 fixed -translate-x-1/2 -translate-y-1/2 bg-white rounded-md top-1/2 left-1/2 max-h-85vh',
  {
    variants: {
      size: {
        sm: 'w-[400px]',
        md: 'w-[900px]',
        lg: 'w-[1200]',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  },
);

export type DialogMainProps = VariantProps<typeof dialogMainVariants> &
  ChildrenProps &
  DialogPrimitive.DialogProps;

const Dialog = ({
  children,
  open,
  onOpenChange,
  defaultOpen,
  ...props
}: DialogMainProps) => {
  return (
    <DialogPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { ...props });
        }
      })}
    </DialogPrimitive.Root>
  );
};

const DialogMain = ({ children, className, size }: DialogMainProps) => {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay
        className="fixed inset-0 z-50"
        style={{
          background: 'rgba(52, 64, 84, 0.70)',
          backdropFilter: 'blur(8px)',
        }}
      />
      <DialogPrimitive.Content
        className={cn(dialogMainVariants({ size, className }))}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};

const DialogTitle = ({ children, className }: ChildrenProps) => (
  <DialogPrimitive.Title
    className={cn('px-6 text-lg font-semibold text-gray-900', className)}
  >
    {children}
  </DialogPrimitive.Title>
);

const DialogSubtitle = ({ children, className }: ChildrenProps) => (
  <DialogPrimitive.Title
    className={cn('mb-2 px-6 text-sm text-gray-600', className)}
  >
    {children}
  </DialogPrimitive.Title>
);

const DialogContent = ({ children, className }: ChildrenProps) => (
  <div className={cn('px-6 mt-4', className)}>{children}</div>
);

const DialogDivider = ({ className }: { className?: string }) => (
  <div className={cn('px-6 border-b-1 border-gray-200', className)} />
);

const DialogAction = ({ children, className }: ChildrenProps) => (
  <div className={cn('flex justify-end mt-9 gap-x-3', className)}>
    {children}
  </div>
);

const dialogIconVariants = cva(
  'ml-6 inline-flex  items-center justify-center w-12 h-12 mb-4 border-8 rounded-full ',
  {
    variants: {
      color: {
        error: 'text-error-600 border-error-50 bg-error-100',
        success: 'text-primary-600 border-primary-50 bg-primary-100',
      },
    },
  },
);

const DialogIcon = ({
  children,
  className,
  color,
}: ChildrenProps & VariantProps<typeof dialogIconVariants>) => (
  <div className={cn(dialogIconVariants({ color, className }))}>{children}</div>
);

const DialogTrigger = ({ children }: ChildrenProps) => (
  <DialogPrimitive.Trigger asChild>{children}</DialogPrimitive.Trigger>
);

const DialogCloseButton = () => {
  return (
    <DialogPrimitive.Close
      asChild
      aria-label="Close"
      className="absolute top-3 right-3 focus-visible:outline-none"
    >
      <Button variant="icon">
        <XCloseIcon className="text-gray-500" width="20" height="20" />
      </Button>
    </DialogPrimitive.Close>
  );
};

Dialog.Root = Dialog;
Dialog.Trigger = DialogTrigger;
Dialog.Main = DialogMain;
Dialog.Content = DialogContent;
Dialog.Title = DialogTitle;
Dialog.Divider = DialogDivider;
Dialog.Action = DialogAction;
Dialog.Close = DialogPrimitive.Close;
Dialog.CloseButton = DialogCloseButton;
Dialog.Subtitle = DialogSubtitle;
Dialog.Icon = DialogIcon;
export default Dialog;
