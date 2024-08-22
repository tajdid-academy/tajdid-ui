import { cn } from '@/utils';

type Props = {
  message?: string;
  className?: string;
};

export default function ErrorMessage({ className, message }: Props) {
  if (!message) return null;

  return (
    <p className={cn('mt-2 text-sm text-error-500', className)}>{message}</p>
  );
}
