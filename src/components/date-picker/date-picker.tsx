'use client';

import CalendarIcon from '@/icons/calendar-icon';
import { cn } from '@/utils';
import { format } from 'date-fns';
import { useState } from 'react';
import { Matcher } from 'react-day-picker';
import ButtonContent from '../button/button-content';
import { ErrorMessage } from '../error-message';
import { Label } from '../label';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';
import Calendar from './calendar';

type DatePickerProps = {
  value?: Date;
  onChange?: (date?: Date) => void;
  error?: string;
  disabled?: Matcher | Matcher[];
  label?: string;
};

export default function DatePicker({
  label,
  value,
  onChange,
  error,
  disabled,
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <Label className="mb-2">{label}</Label>
      <PopoverTrigger asChild>
        <div
          className={cn(
            'hover:cursor-pointer px-3 py-2 flex items-center self-stretch w-full rounded-sm bg-white border border-gray-300  text-base text-gray-900 font-normal  shadow-xs ring-offset-background  focus-visible:outline-none  focus-visible:border-primary-400 focus-visible: focus:shadow-md  placeholder:text-gray-500 disabled:text-gray-500  disabled:cursor-not-allowed disabled:border-gray-300 disabled:border disabled:bg-gray-100',
            !value && 'text-gray-500',
            error && 'border-error text-error-500',
          )}
        >
          <ButtonContent
            icon={<CalendarIcon className="w-4 h-4 mr-2" />}
            iconPosition="start"
          >
            {value ? format(value, 'PPP') : <span>Pick a date</span>}
          </ButtonContent>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={date => {
            onChange?.(date);
            date && setIsOpen(false);
          }}
          initialFocus
          disabled={disabled}
        />
      </PopoverContent>

      <ErrorMessage message={error} />
    </Popover>
  );
}
