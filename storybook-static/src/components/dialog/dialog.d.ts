/// <reference types="react" />
import * as DialogPrimitive from '@radix-ui/react-dialog';
type ChildrenProps = {
    children: React.ReactNode;
};
declare const Dialog: {
    ({ children }: ChildrenProps): import("react/jsx-runtime").JSX.Element;
    Root: any;
    Trigger: ({ children }: ChildrenProps) => import("react/jsx-runtime").JSX.Element;
    Content: import("react").ForwardRefExoticComponent<Omit<any, "ref"> & import("react").RefAttributes<unknown>>;
    Title: ({ children }: ChildrenProps) => import("react/jsx-runtime").JSX.Element;
    Description: ({ children }: ChildrenProps) => import("react/jsx-runtime").JSX.Element;
    Action: ({ children }: ChildrenProps) => import("react/jsx-runtime").JSX.Element;
    Close: import("react").ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & import("react").RefAttributes<HTMLButtonElement>>;
};
export default Dialog;
