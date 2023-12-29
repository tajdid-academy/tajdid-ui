import { VariantProps } from 'class-variance-authority';
import React from 'react';
import { ButtonContentProps } from './button-content';
export declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "error" | "outline" | "ghost" | null | undefined;
    size?: "small" | "icon" | "default" | "medium" | null | undefined;
    fullWidth?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & ButtonContentProps & {
    asChild?: boolean;
};
declare const Button: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<(props?: ({
    variant?: "link" | "default" | "error" | "outline" | "ghost" | null | undefined;
    size?: "small" | "icon" | "default" | "medium" | null | undefined;
    fullWidth?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string> & ButtonContentProps & {
    asChild?: boolean | undefined;
} & React.RefAttributes<HTMLButtonElement>>;
export default Button;
