import { IconProps, withIcon } from './with-svg';

function LockIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      width={20}
      height={20}
      {...props}
    >
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5.917 8.333h-.084V6.667a4.167 4.167 0 118.334 0v1.666h-.085M10 11.667v1.666m5.833-.833a5.833 5.833 0 11-11.666 0 5.833 5.833 0 0111.666 0z"
      ></path>
    </svg>
  );
}

export default withIcon(LockIcon);
