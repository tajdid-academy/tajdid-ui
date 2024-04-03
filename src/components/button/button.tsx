import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import ButtonContent, { ButtonContentProps } from './button-content';
import { cn } from '../../utils';

export const buttonVariants = cva(
  'disabled:bg-gray-300 disabled:text-gray-500 inline-flex items-center justify-center min-w-[70px] whitespace-nowrap rounded-sm text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:shadow-sm shadow-sm',
  {
    variants: {
      variant: {
        contained: '',
        outlined: '',
        ghost: '',
        link: '',
        icon: '',
      },
      color: {
        primary: '',
        error: '',
        gray: '',
      },
      size: {
        small: 'py-[6px] px-[14px] text-sm',
        medium: 'py-2 px-[20px] text-base',
        large: 'py-3 px-8 text-base',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    compoundVariants: [
      {
        variant: 'contained',
        color: 'primary',
        className: 'bg-primary hover:bg-primary-700 text-white',
      },
      {
        variant: 'contained',
        color: 'error',
        className: 'bg-error hover:bg-error-600 text-white',
      },
      {
        variant: 'contained',
        color: 'gray',
        className: 'bg-gray hover:bg-gray-600 text-white',
      },
      {
        variant: 'outlined',
        color: 'primary',
        className:
          'border border-primary hover:bg-primary text-primary hover:text-white',
      },
      {
        variant: 'outlined',
        color: 'error',
        className:
          'border border-error hover:bg-error text-error hover:text-white',
      },
      {
        variant: 'outlined',
        color: 'gray',
        className:
          'border border-gray-300 hover:bg-gray text-gray-700 hover:text-white',
      },
      {
        variant: 'ghost',
        color: 'primary',
        className:
          'text-primary hover:text-primary-700 !shadow-none disabled:bg-transparent',
      },
      {
        variant: 'ghost',
        color: 'error',
        className:
          'text-error hover:text-error-600 !shadow-none disabled:bg-transparent',
      },
      {
        variant: 'ghost',
        color: 'gray',
        className:
          'text-gray-700 hover:text-gray-600 !shadow-none disabled:bg-transparent',
      },
      {
        variant: 'link',
        color: 'primary',
        className:
          'text-primary-600 text-sm font-semibold !shadow-none underline-offset-4 hover:underline px-0 py-0 disabled:bg-transparent',
      },
      {
        variant: 'link',
        color: 'error',
        className:
          'text-error-600 text-sm font-semibold !shadow-none underline-offset-4 hover:underline px-0 py-0 disabled:bg-transparent',
      },
      {
        variant: 'link',
        color: 'gray',
        className:
          'text-gray-700 text-sm font-semibold !shadow-none underline-offset-4 hover:underline px-0 py-0 disabled:bg-transparent',
      },
      {
        variant: 'icon',
        color: 'primary',
        className:
          'text-primary-600 text-sm font-semibold !shadow-none p-[10px] min-w-0 hover:bg-primary-50',
      },
      {
        variant: 'icon',
        color: 'error',
        className:
          'text-error-600 text-sm font-semibold !shadow-none p-[10px] min-w-0 rounded-sm hover:bg-error-50',
      },
      {
        variant: 'icon',
        color: 'gray',
        className:
          'text-gray-700 text-sm font-semibold !shadow-none p-[10px] min-w-0 hover:bg-gray-50',
      },
    ],
    defaultVariants: {
      variant: 'contained',
      color: 'primary',
      size: 'medium',
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> &
  ButtonContentProps & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading,
      icon,
      iconPosition,
      loadingText,
      color,
      children,
      fullWidth,
      type = 'button',
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, color, className, fullWidth }),
        )}
        ref={ref}
        type={type}
        {...props}
      >
        <ButtonContent
          isLoading={isLoading}
          icon={icon}
          iconPosition={iconPosition}
          loadingText={loadingText}
        >
          {children}
        </ButtonContent>
      </Comp>
    );
  },
);

Button.displayName = 'Button';

export default Button;
