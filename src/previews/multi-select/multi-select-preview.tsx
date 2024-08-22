import { MultiSelect, MultiSelectOption } from '@/components';
import { useState } from 'react';

const options = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'wordpress',
    label: 'WordPress',
  },
  {
    value: 'express.js',
    label: 'Express.js',
  },
  {
    value: 'nest.js',
    label: 'Nest.js',
  },
];

export default function MultiSelectPreview() {
  const [selected, setSelected] = useState<MultiSelectOption[]>([options[0]]);

  const handleUnselect = (option: MultiSelectOption) => {
    setSelected(prev => prev.filter(s => s.value !== option.value));
  };

  return (
    <MultiSelect
      handleSelect={option => setSelected(prev => [...prev, option])}
      selected={selected}
      options={options}
      handleUnselect={handleUnselect}
      placeholder="Select a framework..."
      label="Framework"
      error="Please select a framework"
    />
  );
}
