import { IconProps, withIcon } from './with-svg';

function InfoCircleIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 17"
      width={16}
      height={17}
      {...props}
    >
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 11.167V8.5m0-2.667h.007m6.66 2.667a6.667 6.667 0 11-13.333 0 6.667 6.667 0 0113.333 0z"
      ></path>
    </svg>
  );
}

export default withIcon(InfoCircleIcon);
