'use client';

import { format } from 'date-fns';

import CalendarIcon from '@/icons/calendar-icon';
import { cn } from '@/utils';
import { Matcher } from 'react-day-picker';
import { Button } from '../button';
import { ErrorMessage } from '../error-message';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';
import { Calendar } from './calendar';

type DatePickerProps = {
  date?: Date;
  handleDate?: (date?: Date) => void;
  error?: string;
  disabled?: Matcher | Matcher[];
};

export default function DatePicker({
  date,
  handleDate,
  error,
  disabled,
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outlined"
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !date && 'text-gray-500',
          )}
        >
          <CalendarIcon className="w-4 h-4 mr-2" />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDate}
          initialFocus
          disabled={disabled}
        />
      </PopoverContent>

      <ErrorMessage message={error} />
    </Popover>
  );
}
