import { TagBuilder } from '@/components';
import { useState } from 'react';

export default function TagBuilderPreview() {
  const [badges, setBadges] = useState<string[]>(['react', 'typescript']);

  return (
    <TagBuilder
      error="Please enter your tag"
      label="Tag"
      values={badges}
      handleEnter={setBadges}
    />
  );
}
