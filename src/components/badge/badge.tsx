import { cn } from '../../utils';
import { VariantProps, cva } from 'class-variance-authority';

export const badgeVariants = cva(
  'rounded-lg capitalize px-[10px] py-[2px] text-sm font-medium',
  {
    variants: {
      color: {
        moss: 'bg-moss-50 text-moss-700',
        blueLight: 'bg-blueLight-50 text-blueLight-700',
        purple: 'bg-purple-50 text-purple-700',
        indigo: 'bg-indigo-50 text-indigo-700',
        fuchsia: 'bg-fuchsia-50 text-fuchsia-700',
        orange: 'bg-orange-50 text-orange-700',
        blue: 'bg-blue-50 text-blue-700',
      },
    },
    defaultVariants: {
      color: 'moss',
    },
  },
);

export type BadgeProps = VariantProps<typeof badgeVariants> & {
  children: string;
  className?: string;
};

const Badge = ({ children, color, className }: BadgeProps) => {
  return (
    <span className={cn(badgeVariants({ color, className }))}>{children}</span>
  );
};

export default Badge;
