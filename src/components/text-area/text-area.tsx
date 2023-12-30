import { cn } from '@/utils';
import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

export const textAreaVariants = cva(
  'flex items-center self-stretch  w-full rounded-sm border border-gray-300  text-base text-gray-900 font-normal ring-offset-background shadow-sm  focus-visible:outline-none focus-visible:ring-2 ring-primary-400 focus:shadow-md focus-visible:ring-ring focus-visible:ring-offset-0 placeholder:text-gray-500  disabled:cursor-not-allowed disabled:opacity-50',
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
  };

const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, rows = 4, cols, size, placeholder, ...props }, ref) => {
    return (
      <div>
        <textarea
          className={cn(textAreaVariants({ size, className }))}
          rows={rows}
          cols={cols}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
        <p className="font-normal text-gray-600">
          This is a hint text to help user.
        </p>
      </div>
    );
  },
);

TextArea.displayName = 'TextArea';

export default TextArea;
