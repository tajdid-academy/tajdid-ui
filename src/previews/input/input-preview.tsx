import { Input } from '@/components';
import { useState } from 'react';

export default function InputPreview() {
  const [value, setValue] = useState('');

  return <Input value={value} onChange={e => setValue(e.target.value)} />;
}
