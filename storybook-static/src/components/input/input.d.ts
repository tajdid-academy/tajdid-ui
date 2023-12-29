import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
export declare const inputVariants: (props?: ({
    size?: "default" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof inputVariants> & {
    error?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    inputClassName?: string;
    warning?: string;
};
declare const Input: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & VariantProps<(props?: ({
    size?: "default" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string> & {
    error?: string | undefined;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    inputClassName?: string | undefined;
    warning?: string | undefined;
} & React.RefAttributes<HTMLInputElement>>;
export default Input;
