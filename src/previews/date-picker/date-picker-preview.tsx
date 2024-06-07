import { DatePicker } from '@/components';
import { useState } from 'react';

export default function DatePickerPreview() {
  const [value, setValue] = useState<Date>();

  return (
    <DatePicker
      label="Select"
      value={value}
      onChange={date => {
        console.log('date', date);
        setValue(date);
      }}
    />
  );
}
