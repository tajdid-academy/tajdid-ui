import React, { useState } from 'react';
import { Badge } from '../badge';
import { cn } from '@/utils';

export type TagBuilderProps = {
  handleEnter: (values: string[]) => void;
  className?: string;
  values?: string[];
};

const TagBuilder = ({
  values = [],
  handleEnter,
  className,
}: TagBuilderProps) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue) {
      handleEnter([...values, inputValue]);
      setInputValue('');
      event.preventDefault();
    }

    if (event.key === 'Delete' || event.key === 'Backspace') {
      const newSelected = [...values];
      const optionValueToRemove = newSelected.pop();

      optionValueToRemove && handleBadgeDelete(optionValueToRemove);
    }

    if (event.key === 'Escape') {
      inputRef?.current?.blur();
    }
  };

  const handleBadgeDelete = (valueToDelete: string) => {
    handleEnter(values.filter(item => item !== valueToDelete));
  };

  return (
    <div
      className={cn(
        className,
        'flex items-center px-3 py-2 text-base self-stretch w-full rounded-sm bg-white border border-gray-300 font-normal  shadow-xs',
      )}
    >
      <div className="flex flex-wrap gap-1 w-full">
        {values.map((badge, index) => (
          <Badge
            onClick={() => handleBadgeDelete(badge)}
            onKeyDown={() => handleBadgeDelete(badge)}
            key={index}
          >
            {badge}
          </Badge>
        ))}
        <input
          ref={inputRef}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="placeholder:text-gray-500 disabled:text-gray-500  disabled:cursor-not-allowed disabled:border-gray-300 disabled:border disabled:bg-gray-100 ml-2 flex-1 bg-transparent outline-none"
          placeholder="Type and press enter"
        />
      </div>
    </div>
  );
};

export default TagBuilder;
