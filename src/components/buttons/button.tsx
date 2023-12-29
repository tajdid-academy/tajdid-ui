import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import ButtonContent, { ButtonContentProps } from './button-content';
import { cn } from '../../utils';

export const buttonVariants = cva(
  'disabled:bg-gray-300 disabled:text-gray-500 inline-flex items-center justify-center min-w-[100px] whitespace-nowrap rounded-sm text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:shadow-sm',
  {
    variants: {
      variant: {
        default: 'bg-primary hover:bg-primary-700 text-white shadow-md',
        error: 'bg-error hover:bg-error-600 text-white',
        outline:
          'border border-primary hover:bg-primary text-primary hover:text-white',
        ghost: 'text-primary hover:text-primary-600 !shadow-none',
        link: 'text-primary-600 text-sm font-semibold shadow-none underline-offset-4 hover:underline',
      },
      size: {
        default: 'py-[8px] px-[20px] text-base',
        small: 'py-[6px] px-[14px] text-sm',
        medium: 'py-[14px] px-[24px] text-lg',
        icon: 'py-[6px] px-[6px] min-w-0',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
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
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
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

export default Button;
