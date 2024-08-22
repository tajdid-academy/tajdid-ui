import React, { useState } from 'react';
import { Badge } from '../badge';
import { Input } from '../input';

const TagBuilder = () => {
  const [inputValue, setInputValue] = useState('');
  const [badges, setBadges] = useState<string[]>(['react', 'typescript']);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue) {
      setBadges([...badges, inputValue]);
      setInputValue('');
      event.preventDefault();
    }
  };

  const handleBadgeDelete = (badgeToDelete: string) => {
    setBadges(badges.filter(badge => badge !== badgeToDelete));
  };

  return (
    <div className="flex items-center px-3 py-2 text-base self-stretch w-full rounded-sm bg-white border border-gray-300 font-normal  shadow-xs">
      <div className="flex flex-wrap gap-1 w-full">
        {badges.map((badge, index) => (
          <Badge
            onClick={() => handleBadgeDelete(badge)}
            onKeyDown={() => handleBadgeDelete(badge)}
            key={index}
          >
            {badge}
          </Badge>
        ))}
        <input
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
