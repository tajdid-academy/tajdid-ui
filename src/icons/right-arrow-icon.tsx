import { IconProps } from './icon-props';

export default function RightArrowIcon({
  className,
  width = 24,
  height = 24,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 16 16"
      className={className}
    >
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.333"
        d="M6 12l4-4-4-4"
      ></path>
    </svg>
  );
}
