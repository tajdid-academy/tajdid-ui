'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { forwardRef } from 'react';
import { Button } from '..';
import { XCloseIcon } from '../../icons';

type ChildrenProps = {
  children: React.ReactNode;
};

const Dialog = ({ children }: ChildrenProps) => {
  return <DialogPrimitive.Root>{children}</DialogPrimitive.Root>;
};

const DialogTitle = ({ children }: ChildrenProps) => (
  <DialogPrimitive.Title className="mb-2 text-lg">
    {children}
  </DialogPrimitive.Title>
);

const DialogDescription = ({ children }: ChildrenProps) => (
  <DialogPrimitive.Description className="DialogDescription">
    {children}
  </DialogPrimitive.Description>
);

const DialogAction = ({ children }: ChildrenProps) => (
  <div className="flex justify-end mt-9">{children}</div>
);

const DialogContent = forwardRef(
  ({ children, ...props }: any, forwardedRef) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 bg-black bg-opacity-40" />
      <DialogPrimitive.Content
        {...props}
        ref={forwardedRef}
        className="fixed p-4 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md top-1/2 left-1/2 w-90vw max-w-450px max-h-85vh"
      >
        {children}
        <DialogPrimitive.Close
          asChild
          aria-label="Close"
          className="absolute top-2 right-2 focus-visible:outline-none"
        >
          <Button size="icon" variant="ghost" color="error">
            <XCloseIcon className="text-error" />
          </Button>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  ),
);

DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogTrigger = ({ children }: ChildrenProps) => (
  <DialogPrimitive.Trigger asChild>{children}</DialogPrimitive.Trigger>
);

const DialogClose = DialogPrimitive.Close;

Dialog.Root = Dialog;
Dialog.Trigger = DialogTrigger;
Dialog.Content = DialogContent;
Dialog.Title = DialogTitle;
Dialog.Description = DialogDescription;
Dialog.Action = DialogAction;
Dialog.Close = DialogClose;

export default Dialog;
