'use client';

import { format } from 'date-fns';

import CalendarIcon from '@/icons/calendar-icon';
import { cn } from '@/utils';
import { Button } from '../button';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';
import { Calendar } from './calendar';

type DatePickerProps = {
  date?: Date;
  handleDate?: (date?: Date) => void;
  error?: string;
};

export default function DatePicker({
  date,
  handleDate,
  error,
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
        />
      </PopoverContent>
      {error && <div className="text-error-500">{error}</div>}
    </Popover>
  );
}
