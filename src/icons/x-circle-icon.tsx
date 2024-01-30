import { IconProps } from '.';
import { withIcon } from './with-svg';

function XCircleIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      {...props}
      fill="none"
      viewBox="0 0 16 16"
    >
      <g clipPath="url(#a)">
        <path
          stroke="currentcolor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.999 6l-4 4m0-4l4 4m4.666-2A6.667 6.667 0 111.332 8a6.667 6.667 0 0113.333 0z"
        ></path>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default withIcon(XCircleIcon);
