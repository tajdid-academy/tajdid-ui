import { cn } from '../../utils';
import { VariantProps, cva } from 'class-variance-authority';
import XCloseIcon from '@/icons/x-close-icon';

export const badgeVariants = cva(
  'rounded-lg capitalize px-[10px] py-[2px] text-sm font-medium inline-flex items-center',
  {
    variants: {
      variant: {
        contained: '',
        outlined: '',
      },
      color: {
        moss: '',
        blueLight: '',
        purple: '',
        indigo: '',
        fuchsia: '',
        orange: '',
        blue: '',
        success: '',
        gray: '',
        warning: '',
      },
    },
    compoundVariants: [
      {
        variant: 'contained',
        color: 'moss',
        className: 'bg-moss-50 text-moss-700',
      },
      {
        variant: 'outlined',
        color: 'moss',
        className: 'border border-moss-50 text-moss-700',
      },
      {
        variant: 'contained',
        color: 'purple',
        className: 'bg-purple-50 text-purple-700',
      },
      {
        variant: 'outlined',
        color: 'purple',
        className: 'border border-purple-50 text-purple-700',
      },
      {
        variant: 'contained',
        color: 'indigo',
        className: 'bg-indigo-50 text-indigo-700',
      },
      {
        variant: 'outlined',
        color: 'indigo',
        className: 'border border-indigo-50 text-indigo-700',
      },
      {
        variant: 'contained',
        color: 'fuchsia',
        className: 'bg-fuchsia-50 text-fuchsia-700',
      },
      {
        variant: 'outlined',
        color: 'fuchsia',
        className: 'border border-fuchsia-50 text-fuchsia-700',
      },
      {
        variant: 'contained',
        color: 'orange',
        className: 'bg-orange-50 text-orange-700',
      },
      {
        variant: 'outlined',
        color: 'orange',
        className: 'border border-orange-50 text-orange-700',
      },
      {
        variant: 'contained',
        color: 'blueLight',
        className: 'bg-blue-50 text-blue-700',
      },
      {
        variant: 'outlined',
        color: 'blueLight',
        className: 'border border-blue-100 text-blue-700',
      },
      {
        variant: 'contained',
        color: 'success',
        className: 'bg-success-600 rounded-lg text-success-700',
      },
      {
        variant: 'outlined',
        color: 'success',
        className: 'border border-success-600 rounded-lg text-success-700',
      },
      {
        variant: 'contained',
        color: 'gray',
        className: 'bg-gray-300 rounded-lg text-gray-700',
      },
      {
        variant: 'outlined',
        color: 'gray',
        className: 'border border-gray-400 rounded-lg text-gray-700',
      },
      {
        variant: 'contained',
        color: 'blue',
        className: 'bg-blue-600 rounded-lg text-blue-700',
      },
      {
        variant: 'outlined',
        color: 'blue',
        className: 'border border-blue-600 rounded-lg text-blue-700',
      },
      {
        variant: 'contained',
        color: 'warning',
        className: 'bg-warning-600 rounded-lg text-warning-700',
      },
      {
        variant: 'outlined',
        color: 'warning',
        className: 'border border-warning-600 rounded-lg text-warning-700',
      },
    ],
    defaultVariants: {
      variant: 'outlined',
      color: 'gray',
    },
  },
);

export const badgeButtonVariant = cva(
  'ml-1 rounded-full outline-none p-[1px]',
  {
    variants: {
      color: {
        moss: '',
        blueLight: '',
        purple: '',
        indigo: '',
        fuchsia: '',
        orange: '',
        blue: '',
        success: '',
        gray: '',
        warning: '',
      },
    },
    compoundVariants: [
      {
        color: 'moss',
        className: 'border border-moss-50 text-moss-700',
      },
      {
        color: 'blueLight',
        className: 'border border-blue-500 text-blue-700',
      },
      {
        color: 'purple',
        className: 'border border-purple-50 text-purple-700',
      },
      {
        color: 'indigo',
        className: 'border border-indigo-50 text-indigo-700',
      },
      {
        color: 'fuchsia',
        className: 'border border-fuchsia-50 text-fuchsia-700',
      },
      {
        color: 'orange',
        className: 'border border-orange-50 text-orange-700',
      },
      {
        color: 'blue',
        className: 'border border-blue-50 text-blue-700',
      },
      {
        color: 'success',
        className: 'border border-success-600 rounded-lg text-success-700',
      },
      {
        color: 'gray',
        className: 'border border-gray-700 rounded-lg text-gray-700',
      },
      {
        color: 'blue',
        className: 'border border-blue-600 rounded-lg text-blue-700',
      },
      {
        color: 'warning',
        className: 'border border-warning-600 rounded-lg text-warning-700',
      },
    ],
    defaultVariants: {
      color: 'gray',
    },
  },
);

export type BadgeProps = VariantProps<typeof badgeVariants> & {
  children: React.ReactNode;
  className?: string;
  variant?: 'contained' | 'outlined';
  onClick?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
};

const Badge = ({
  children,
  color,
  className,
  variant,
  onClick,
  onKeyDown,
}: BadgeProps) => {
  return (
    <span className={cn(badgeVariants({ variant, color, className }))}>
      {children}

      {onClick && (
        <button
          className={cn(badgeButtonVariant({ color }))}
          onKeyDown={onKeyDown}
          onMouseDown={e => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onClick={onClick}
        >
          <XCloseIcon className="transition-transform duration-300 ease-in-out hover:rotate-180 h-3 w-3" />
        </button>
      )}
    </span>
  );
};

export default Badge;
