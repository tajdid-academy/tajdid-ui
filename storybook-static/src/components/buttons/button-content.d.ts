import React from 'react';
export type ButtonContentProps = {
    isLoading?: boolean;
    icon?: React.ReactNode;
    iconPosition?: 'start' | 'end';
    loadingText?: string;
    children?: React.ReactNode;
};
export default function ButtonContent({ isLoading, children, icon, iconPosition, loadingText, }: ButtonContentProps): string | number | boolean | import("react/jsx-runtime").JSX.Element | Iterable<React.ReactNode> | null | undefined;
