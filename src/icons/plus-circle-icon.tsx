import { IconProps } from '.';
import { withIcon } from './with-svg';

function PlusCircleIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      {...props}
      fill="none"
      viewBox="0 0 20 20"
    >
      <g clipPath="url(#a)">
        <path
          stroke="currentcolor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.667"
          d="M10.001 6.666v6.667M6.668 9.999h6.667m5 0a8.333 8.333 0 11-16.667 0 8.333 8.333 0 0116.667 0z"
        ></path>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h20v20H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default withIcon(PlusCircleIcon);
