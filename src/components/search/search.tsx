import { SearchIcon } from '@/icons';
import { useId } from 'react';
import { Button, Input, InputProps, Label } from '..';

export type SearchProps = InputProps & {
  onClick: () => void;
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
      <form
        className="flex"
        onSubmit={e => {
          e.preventDefault();
          onClick();
        }}
      >
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
          className="!min-w-0 px-3 py-2 rounded-ss-none rounded-es-none"
          type="submit"
        >
          <SearchIcon className="text-white" />
        </Button>
      </form>
    </div>
  );
}
