import { cn } from '@/utils';
import * as LabelPrimitive from '@radix-ui/react-label';

type Props = {
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
};

export default function Label({ children, className, htmlFor }: Props) {
  return (
    <LabelPrimitive.Root
      className={cn(
        'text-sm font-medium text-gray-700 hover:cursor-pointer block',
        className,
      )}
      htmlFor={htmlFor}
    >
      {children}
    </LabelPrimitive.Root>
  );
}
