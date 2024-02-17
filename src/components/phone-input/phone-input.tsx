import { PhoneIcon } from '@/icons';
import { cn } from '@/utils';
import React from 'react';
import { InputProps, Label, Input } from '..';

const PhoneInput = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      inputClassName,
      className,
      label,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      startIcon,
      ...rest
    },
    ref,
  ) => {
    return (
      <div className={className}>
        {label && <Label className="mb-2">{label}</Label>}
        <div className="relative">
          <div className="absolute z-10 flex items-center px-3 py-[9px] pt-[10px] border-gray-300 rounded-l-sm border-r-1">
            <PhoneIcon className="text-gray-500" />
            <span className="text-gray-600">+88</span>
          </div>
          <Input
            ref={ref}
            inputClassName={cn('!pl-[92px] pt-[9px]', inputClassName)}
            {...rest}
          />
        </div>
      </div>
    );
  },
);

PhoneInput.displayName = 'PhoneInput';

export default PhoneInput;
