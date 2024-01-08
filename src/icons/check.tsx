import { withIcon, IconProps } from './with-svg';

function CheckIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      width={14}
      height={14}
      fill="none"
      {...props}
    >
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11.667 3.5L5.25 9.917 2.333 7"
      ></path>
    </svg>
  );
}

export default withIcon(CheckIcon);
