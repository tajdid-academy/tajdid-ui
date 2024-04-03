import { Radio } from '@/components';
import { useState } from 'react';

export default function RadioPreview() {
  const [value, setValue] = useState('');

  return (
    <Radio
      options={[
        {
          label: 'One',
          value: '1',
        },
        {
          label: 'Two',
          value: '2',
        },
      ]}
      value={value}
      onChange={setValue}
    />
  );
}
