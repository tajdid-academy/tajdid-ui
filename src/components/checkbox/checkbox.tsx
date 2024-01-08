import * as CheckboxPrimitives from '@radix-ui/react-checkbox';
import { Label } from '..';
import { useId } from 'react';
import { cn } from '@/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { CheckIcon } from '@/icons';

export type CheckIcon = React.ReactElement<typeof CheckIcon>;

export const checkboxVariants = cva(
  'flex h-[20px] w-[20px] appearance-none items-center justify-center rounded-[6px] outline-none',
  {
    variants: {
      color: {
        primary: 'text-primary-600 border-1 border-primary-600 bg-primary-50',
        gray: 'text-gray-600 border-1 border-gray-300 bg-white',
      },
    },
    defaultVariants: {
      color: 'gray',
    },
  },
);

type Props = VariantProps<typeof checkboxVariants> & {
  className?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  icon?: CheckIcon;
  label?: string;
  disabled?: boolean;
};

export default function Checkbox({
  className,
  checked,
  color,
  onChange,
  label,
  disabled,
  icon = <CheckIcon />,
}: Props) {
  const id = useId();

  return (
    <div className={cn('flex items-center gap-x-2', className)}>
      <CheckboxPrimitives.Root
        className={cn(checkboxVariants({ color }))}
        checked={checked}
        onCheckedChange={onChange}
        id={id}
        disabled={disabled}
      >
        <CheckboxPrimitives.Indicator className="text-violet11">
          {icon}
        </CheckboxPrimitives.Indicator>
      </CheckboxPrimitives.Root>
      {label && <Label htmlFor={id}>{label}</Label>}
    </div>
  );
}
