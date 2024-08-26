import { MultiRange } from '@/components/multi-range';
import { useState } from 'react';

export default function MyComponent() {
  const [values, setValues] = useState([50, 400]);

  return (
    <MultiRange
      label={value => `${value}`}
      value={values}
      onValueChange={setValues}
      min={50}
      max={400}
      step={10}
      className="mt-10"
    />
  );
}
