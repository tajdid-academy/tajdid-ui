import { AlertCircleIcon } from '@/icons';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { ErrorMessage, Label } from '..';
import { cn } from '../../utils';

export const inputVariants = cva(
  'flex items-center self-stretch w-full rounded-sm bg-white border border-gray-300  text-base text-gray-900 font-normal  shadow-xs ring-offset-background  focus-visible:outline-none  focus-visible:border-primary-400 focus-visible:focus:shadow-md  placeholder:text-gray-500 disabled:text-gray-500  disabled:cursor-not-allowed disabled:border-gray-300 disabled:border disabled:bg-gray-100',
  {
    variants: {
      size: {
        default: 'px-3 py-2 text-base',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants> & {
    error?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    inputClassName?: string;
    warning?: string;
    label?: string;
    hideErrorIcon?: boolean;
    errorIcon?: React.ReactNode;
  };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      size,
      startIcon,
      inputClassName,
      placeholder,
      endIcon,
      error,
      warning,
      label,
      hideErrorIcon,
      errorIcon = <AlertCircleIcon className="text-error-500" />,
      ...props
    },
    ref,
  ) => {
    const id = React.useId();
    const combinedInputClassName = cn(
      startIcon && 'pl-[38px]',
      endIcon && 'pr-[44px]',
      error &&
        'border-error ring-error-200 focus-visible:border-error focus-visible:ring-error-200',
      inputClassName,
    );

    const endIconOrErrorIcon = error && !hideErrorIcon ? errorIcon : endIcon;

    return (
      <div className={cn(className, 'w-full')}>
        {label && (
          <div className="mb-2">
            <Label className="text-sm font-medium text-gray-700">{label}</Label>
          </div>
        )}
        <div className="relative">
          {startIcon && (
            <span className="absolute -translate-y-1/2 top-1/2 left-3">
              {startIcon}
            </span>
          )}

          <input
            type={type}
            id={id}
            placeholder={placeholder}
            className={cn(
              inputVariants({ size, className: combinedInputClassName }),
            )}
            ref={ref}
            {...props}
          />

          {endIconOrErrorIcon && (
            <span className="absolute -translate-y-1/2 top-1/2 right-3">
              {endIconOrErrorIcon}
            </span>
          )}
        </div>
        {error && <ErrorMessage message={error} />}
        {warning && !error && (
          <p className="mt-2 text-sm text-warning-600">{warning}</p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
