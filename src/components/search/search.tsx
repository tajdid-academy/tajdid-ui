import { SearchIcon } from '@/icons';
import { Button, Input, InputProps, Label } from '..';
import { useId } from 'react';

export type SearchProps = InputProps & {
  onClick?: () => void;
};

export default function Search({
  onClick,
  placeholder,
  label,
  disabled,
  ...rest
}: SearchProps) {
  const id = useId();

  return (
    <div>
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className="flex">
        <Input
          id={id}
          disabled={disabled}
          startIcon={<SearchIcon className="text-gray-500" />}
          placeholder={placeholder ?? 'Search'}
          inputClassName="rounded-se-none rounded-ee-none"
          {...rest}
        />
        <Button
          disabled={disabled}
          className="rounded-ss-none rounded-es-none"
          onClick={onClick}
        >
          <SearchIcon className="text-white" />
        </Button>
      </div>
    </div>
  );
}
