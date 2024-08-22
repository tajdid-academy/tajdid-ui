import React, { useState } from 'react';
import { Badge } from '../badge';
import { Input } from '../input';
import { Button } from '../button';

const TagBuilder = () => {
  const [inputValue, setInputValue] = useState('');
  const [badges, setBadges] = useState([]);

  const handleKeyDown = event => {
    if (event.key === 'Enter' && inputValue) {
      setBadges([...badges, inputValue]);
      setInputValue('');
      event.preventDefault();
    }
  };

  const handleBadgeDelete = badgeToDelete => {
    setBadges(badges.filter(badge => badge !== badgeToDelete));
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-2">
        {badges.map((badge, index) => (
          <Badge key={index}>{badge}</Badge>
        ))}
      </div>
      <Input
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type and press enter"
      />
      {badges.length > 0 && (
        <Button onClick={() => setBadges([])}>Clear All</Button> // Optional: Clear all badges
      )}
    </div>
  );
};

export default TagBuilder;
