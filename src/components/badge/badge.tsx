import { cn } from '../../utils';
import { VariantProps, cva } from 'class-variance-authority';

export const badgeVariants = cva(
  'rounded-lg capitalize px-[10px] py-[2px] text-sm font-medium',
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
        variant: 'contained',
        color: 'blueLight',
        className: 'bg-blueLight-50 text-blueLight-700',
      },
      {
        variant: 'contained',
        color: 'purple',
        className: 'bg-purple-50 text-purple-700',
      },
      {
        variant: 'contained',
        color: 'indigo',
        className: 'bg-indigo-50 text-indigo-700',
      },
      {
        variant: 'contained',
        color: 'fuchsia',
        className: 'bg-fuchsia-50 text-fuchsia-700',
      },
      {
        variant: 'contained',
        color: 'orange',
        className: 'bg-orange-50 text-orange-700',
      },
      {
        variant: 'contained',
        color: 'blue',
        className: 'bg-blue-50 text-blue-700',
      },
      {
        variant: 'outlined',
        color: 'success',
        className: 'border border-success-600 rounded-lg text-success-700',
      },
      {
        variant: 'outlined',
        color: 'gray',
        className: 'border border-gray-700 rounded-lg text-gray-700',
      },
      {
        variant: 'outlined',
        color: 'blue',
        className: 'border border-blue-600 rounded-lg text-blue-700',
      },
      {
        variant: 'outlined',
        color: 'warning',
        className: 'border border-warning-600 rounded-lg text-warning-700',
      },
    ],
    defaultVariants: {
      variant: 'contained',
      color: 'moss',
    },
  },
);

export type BadgeProps = VariantProps<typeof badgeVariants> & {
  children: React.ReactNode;
  className?: string;
  variant?: 'contained' | 'outlined';
};

const Badge = ({ children, color, className, variant }: BadgeProps) => {
  return (
    <span className={cn(badgeVariants({ variant, color, className }))}>
      {children}
    </span>
  );
};

export default Badge;
