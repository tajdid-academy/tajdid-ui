import CheckIcon from '../../icons/check-success-icon';
import InfoCircleIcon from '../../icons/info-circle-icon';

type ValidationStatusItemProps = {
  isValid: boolean;
  text: string;
};

export default function ValidationStatusItem({
  isValid,
  text,
}: ValidationStatusItemProps) {
  return (
    <div className="flex items-center gap-2 mb-2">
      {isValid ? <CheckIcon /> : <InfoCircleIcon />}
      <p className="text-sm font-normal text-gray-700">{text}</p>
    </div>
  );
}
