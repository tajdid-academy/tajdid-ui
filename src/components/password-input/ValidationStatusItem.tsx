import { CheckSuccessIcon, InfoCircleIcon } from '../../icons';

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
      {isValid ? (
        <CheckSuccessIcon className="text-primary-600" />
      ) : (
        <InfoCircleIcon />
      )}
      <p className="text-sm font-normal text-gray-700">{text}</p>
    </div>
  );
}
