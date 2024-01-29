import { cn } from '@/utils';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Tooltip = ({ children }: Props) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root delayDuration={100}>
        {children}
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

const TooltipContent = ({ children, className }: Props) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      style={{
        boxShadow:
          '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
      }}
      className={cn(
        'max-w-[369px] px-3 py-2 text-xs font-semibold text-gray-700 bg-white rounded-sm',
        className,
      )}
      sideOffset={5}
    >
      {children}
      <TooltipPrimitive.Arrow className="fill-white" />
    </TooltipPrimitive.Content>
  </TooltipPrimitive.Portal>
);

Tooltip.Root = Tooltip;
Tooltip.Content = TooltipContent;
Tooltip.Trigger = TooltipPrimitive.Trigger;

export default Tooltip;
