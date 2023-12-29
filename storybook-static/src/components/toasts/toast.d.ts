import * as ToastPrimitives from '@radix-ui/react-toast';
import { VariantProps } from 'class-variance-authority';
import React from 'react';
export declare const ToastPrimitivesProvider: React.FC<ToastPrimitives.ToastProviderProps>;
export type ToastActionElement = React.ReactElement<typeof ToastAction>;
declare const toastVariants: (props?: ({
    variant?: "error" | "warning" | "success" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type ToastProps = VariantProps<typeof toastVariants> & {
    id: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    onOpenChange: (open: boolean) => void;
    action?: ToastActionElement;
};
export declare const Toast: React.ForwardRefExoticComponent<VariantProps<(props?: ({
    variant?: "error" | "warning" | "success" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string> & {
    id: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    onOpenChange: (open: boolean) => void;
    action?: ToastActionElement | undefined;
} & React.RefAttributes<HTMLLIElement>>;
export declare const ToastAction: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastActionProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export declare const ToastViewport: React.ForwardRefExoticComponent<Omit<ToastPrimitives.ToastViewportProps & React.RefAttributes<HTMLOListElement>, "ref"> & React.RefAttributes<HTMLOListElement>>;
export {};
