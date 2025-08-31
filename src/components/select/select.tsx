import XCloseIcon from '@/icons/x-close-icon';
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
  showClear?: boolean;
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
  showClear = true,
}: SelectProps) {
  return (
    <div className={className}>
      {label && (
        <Label className={cn('mb-[8px]', labelClassName)}>{label}</Label>
      )}

      <div className="relative w-full">
        <Select disabled={disabled} value={value} onValueChange={onChange}>
          <SelectTrigger
            error={!!error}
            fullWidth={fullWidth}
            className={cn('w-full bg-white', showClear && value ? 'pr-8' : '')}
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

        {showClear && value && (
          <button
            type="button"
            onClick={() => onChange?.('')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1 hover:bg-gray-100 rounded-full"
          >
            <XCloseIcon className="w-4 h-4 text-gray-500" />
          </button>
        )}
      </div>

      {error && <ErrorMessage message={error} />}
    </div>
  );
}
