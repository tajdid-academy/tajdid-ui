import * as DialogPrimitive from '@radix-ui/react-dialog';
import { forwardRef } from 'react';
import { Button } from '..';
import { XCloseIcon } from '@/icons';

type ChildrenProps = {
  children: React.ReactNode;
};

const Dialog = ({ children }: ChildrenProps) => {
  return <DialogPrimitive.Root>{children}</DialogPrimitive.Root>;
};

const DialogTitle = ({ children }: ChildrenProps) => (
  <DialogPrimitive.Title className="mb-2 text-lg font-semibold text-gray-900">
    {children}
  </DialogPrimitive.Title>
);

const DialogSubtitle = ({ children }: ChildrenProps) => (
  <DialogPrimitive.Title className="mb-2 text-sm text-gray-600">
    {children}
  </DialogPrimitive.Title>
);

const DialogDescription = ({ children }: ChildrenProps) => (
  <DialogPrimitive.Description className="DialogDescription">
    {children}
  </DialogPrimitive.Description>
);

const DialogAction = ({ children }: ChildrenProps) => (
  <div className="flex justify-end mt-9 gap-x-3">{children}</div>
);

const DialogIcon = ({ children }: ChildrenProps) => (
  <div className="inline-flex items-center justify-center w-12 h-12 mb-6 border-8 rounded-full border-error-50 bg-error-100">
    {children}
  </div>
);

const DialogContent = forwardRef(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ({ children, ...props }: any, forwardedRef) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 bg-black bg-opacity-40" />
      <DialogPrimitive.Content
        {...props}
        ref={forwardedRef}
        className="fixed p-6 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md top-1/2 left-1/2 w-[400px] max-w-450px max-h-85vh"
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  ),
);

DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogTrigger = ({ children }: ChildrenProps) => (
  <DialogPrimitive.Trigger asChild>{children}</DialogPrimitive.Trigger>
);

const DialogCloseButton = () => {
  return (
    <DialogPrimitive.Close
      asChild
      aria-label="Close"
      className="absolute top-2 right-2 focus-visible:outline-none"
    >
      <Button size="icon" variant="ghost" color="error">
        <XCloseIcon className="text-gray-500" width="24" height="24" />
      </Button>
    </DialogPrimitive.Close>
  );
};

Dialog.Root = Dialog;
Dialog.Trigger = DialogTrigger;
Dialog.Content = DialogContent;
Dialog.Title = DialogTitle;
Dialog.Description = DialogDescription;
Dialog.Action = DialogAction;
Dialog.Close = DialogPrimitive.Close;
Dialog.CloseButton = DialogCloseButton;
Dialog.Subtitle = DialogSubtitle;
Dialog.Icon = DialogIcon;
export default Dialog;
