import { TagBuilder } from '@/components';
import { useState } from 'react';

export default function TagBuilderPreview() {
  const [badges, setBadges] = useState<string[]>(['react', 'typescript']);

  return <TagBuilder values={badges} handleEnter={setBadges} />;
}
