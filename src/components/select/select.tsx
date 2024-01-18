import { cn } from '@/utils';
import { ErrorMessage, Label } from '..';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select-primitives';

export type SelectOptions = {
  label: string;
  value: string;
};

export type SelectProps = {
  value?: string;
  onChange?: (value: string) => void;
  options: SelectOptions[];
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  className?: string;
  labelClassName?: string;
  fullWidth?: boolean;
  error?: string;
};

export default function SelectComponent({
  value,
  onChange,
  options,
  disabled,
  label,
  labelClassName,
  className,
  fullWidth,
  placeholder = 'Select...',
  error,
}: SelectProps) {
  return (
    <div className={className}>
      {label && (
        <Label className={cn('mb-[6px]', labelClassName)}>{label}</Label>
      )}
      <Select disabled={disabled} value={value} onValueChange={onChange}>
        <SelectTrigger
          error={!!error}
          fullWidth={fullWidth}
          className={cn('w-min-[100px]')}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map(item => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <ErrorMessage message={error} />}
    </div>
  );
}
