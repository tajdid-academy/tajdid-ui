import { cn } from '@/utils';
import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { ErrorMessage } from '..';

export const textAreaVariants = cva(
  'flex items-center self-stretch  w-full rounded-sm border border-gray-300  text-base text-gray-900 font-normal ring-offset-background shadow-sm  focus-visible:outline-none  focus-visible:border-primary-400 focus-visible: focus:shadow-md focus-visible:ring-ring focus-visible:ring-offset-0 placeholder:text-gray-500  disabled:cursor-not-allowed',
  {
    variants: {
      size: {
        default: 'p-[14px] text-base',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof textAreaVariants> & {
    rows?: number;
    cols?: number;
    className?: string;
    error?: string;
    hintText?: string;
  };

const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { className, rows = 4, cols, size, placeholder, error, hintText, ...props },
    ref,
  ) => {
    const combinedTextAreaClassName = cn(
      error &&
        'border-error ring-error-200 focus-visible:border-error focus-visible:ring-error-200',
      className,
    );
    return (
      <div className="flex flex-col gap-[6px]">
        <textarea
          className={cn(
            textAreaVariants({ size, className: combinedTextAreaClassName }),
          )}
          rows={rows}
          cols={cols}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
        {error && <ErrorMessage message={error} />}
        <p className="font-normal text-gray-600">{hintText}</p>
      </div>
    );
  },
);

TextArea.displayName = 'TextArea';

export default TextArea;
