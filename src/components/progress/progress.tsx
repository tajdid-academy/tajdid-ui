import { useEffect, useState } from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cn } from '@/utils';

export type ProgressProps = {
  value: number;
  className?: string;
};

export default function Progress({ value, className }: ProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div
      className={cn(
        'grid grid-cols-[1fr_max-content] gap-x-2 items-center',
        className,
      )}
    >
      <ProgressPrimitive.Root
        className="relative z-0 h-2 overflow-hidden bg-gray-200 rounded-xs"
        style={{
          // Fix overflow clipping in Safari
          // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
          transform: 'translateZ(0)',
        }}
        value={progress}
      >
        <ProgressPrimitive.Indicator
          className="bg-primary-600 w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </ProgressPrimitive.Root>
      <p className="text-sm font-semibold text-primary-700">{progress}%</p>
    </div>
  );
}
