import { Label } from '../label';
import { RadioGroup, RadioGroupItem } from './radio-primitive';

export type RadioProps = {
  options: {
    label: string;
    value: string;
  }[];
  value?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  name?: string;
  className?: string;
};

export default function Radio({
  options,
  onChange,
  name,
  disabled,
  value,
  className,
}: RadioProps) {
  return (
    <RadioGroup
      onValueChange={onChange}
      value={value}
      disabled={disabled}
      name={name}
    >
      <div className={className}>
        {options.map(item => (
          <div key={item.value} className="flex gap-2 items-center">
            <RadioGroupItem value={item.value} id={item.value} />
            <Label htmlFor={item.value}>{item.label}</Label>
          </div>
        ))}
      </div>
    </RadioGroup>
  );
}
