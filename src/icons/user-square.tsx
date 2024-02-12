import { IconProps, withIcon } from './with-svg';

function UserSquare(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      fill="none"
      viewBox="0 0 18 18"
      {...props}
    >
      <path
        stroke="currentcolor"
        strokeWidth="1.5"
        d="M1.084 9c0-3.732 0-5.598 1.16-6.758C3.402 1.083 5.268 1.083 9 1.083s5.598 0 6.757 1.16c1.16 1.159 1.16 3.025 1.16 6.757 0 3.732 0 5.598-1.16 6.757-1.16 1.16-3.025 1.16-6.757 1.16-3.732 0-5.598 0-6.758-1.16C1.084 14.597 1.084 12.732 1.084 9z"
      ></path>
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M5.25 13.166c1.943-2.035 5.536-2.13 7.5 0m-1.67-6.25C11.08 8.066 10.144 9 8.992 9a2.085 2.085 0 01-2.086-2.084c0-1.15.934-2.083 2.086-2.083 1.152 0 2.086.933 2.086 2.083z"
      ></path>
    </svg>
  );
}

export default withIcon(UserSquare);
