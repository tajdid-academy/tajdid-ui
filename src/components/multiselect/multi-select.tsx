import * as React from 'react';

import { Command as CommandPrimitive } from 'cmdk';
import { Badge } from '../badge';
import { Command, CommandGroup, CommandItem, CommandList } from '../command';
import { cn } from '@/utils';
import { Label } from '../label';
import { DownArrowIcon } from '@/icons';
import { ErrorMessage } from '../error-message';

export type MultiSelectOption = {
  label: string;
  value: string;
};

export type MultiSelectProps = {
  label?: string;
  className?: string;
  placeholder?: string;
  options: MultiSelectOption[];
  selected: MultiSelectOption[];
  handleUnselect: (option: MultiSelectOption) => void;
  handleSelect: (option: MultiSelectOption) => void;
  error?: string;
};

export function MultiSelect({
  options,
  selected,
  placeholder = 'Select...',
  className,
  handleSelect,
  handleUnselect,
  label,
  error,
}: MultiSelectProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const input = inputRef.current;

    if (input) {
      if (e.key === 'Delete' || e.key === 'Backspace') {
        if (input.value === '') {
          const newSelected = [...selected];
          const optionValueToRemove = newSelected.pop();

          optionValueToRemove && handleUnselect(optionValueToRemove);
        }
      }
      // This is not a default behaviour of the <input /> field
      if (e.key === 'Escape') {
        input.blur();
      }
    }
  };

  const selectables = options.filter(option => !selected.includes(option));

  return (
    <div className={className}>
      {label && <Label className={cn('mb-2')}>{label}</Label>}
      <Command
        onKeyDown={handleKeyDown}
        className={cn('overflow-visible bg-transparent')}
      >
        <div className="flex items-center px-3 py-2 text-base self-stretch w-full rounded-sm bg-white border border-gray-300 font-normal  shadow-xs">
          <div className="flex flex-wrap gap-1 w-full">
            {selected.map(option => {
              return (
                <Badge
                  color="gray"
                  key={option.value}
                  onClick={() => handleUnselect(option)}
                  variant="outlined"
                  onKeyDown={e => {
                    if (e.key === 'Enter') {
                      handleUnselect(option);
                    }
                  }}
                >
                  {option.label}
                </Badge>
              );
            })}
            <CommandPrimitive.Input
              ref={inputRef}
              value={inputValue}
              onValueChange={setInputValue}
              onBlur={() => setOpen(false)}
              onFocus={() => setOpen(true)}
              placeholder={placeholder}
              className="placeholder:text-gray-500 disabled:text-gray-500  disabled:cursor-not-allowed disabled:border-gray-300 disabled:border disabled:bg-gray-100 ml-2 flex-1 bg-transparent outline-none"
            />
          </div>
          <DownArrowIcon
            onClick={() => {
              !open && inputRef.current?.focus();
            }}
            className={cn(
              'w-5 h-5 text-gray-500 hover:cursor-pointer',
              selectables.length > 0 ? 'visible' : 'invisible',
            )}
          />
        </div>
        <div className="relative mt-2">
          <CommandList>
            {open && selectables.length > 0 ? (
              <div className="absolute top-0 z-10 w-full shadow-md outline-none animate-in rounded-sm bg-white border border-gray-300">
                <CommandGroup className="h-full overflow-auto">
                  {selectables.map(framework => {
                    return (
                      <CommandItem
                        key={framework.value}
                        onMouseDown={e => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        onSelect={() => {
                          setInputValue('');
                          handleSelect(framework);
                        }}
                        className={'cursor-pointer'}
                      >
                        {framework.label}
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </div>
            ) : null}
          </CommandList>
        </div>
      </Command>
      {error && <ErrorMessage className="mt-0" message={error} />}
    </div>
  );
}
