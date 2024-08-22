import { Checkbox } from '@/components';
import { useState } from 'react';

export default function CheckPreview() {
  const [value, setValue] = useState(true);

  return (
    <Checkbox
      onChange={value => {
        setValue(value);
      }}
      disabled
      checked={value}
      label="Stock visibility"
    />
  );
}
