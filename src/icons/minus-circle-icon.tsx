import { IconProps } from '.';
import { withIcon } from './with-svg';

function MinusCircleIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20} // dynamic width value
      height={20} // dynamic height value
      {...props} //spread the props here
      fill="none"
    >
      <g clipPath="url(#a)">
        <path
          stroke="currentcolor" //change stroke to currentcolor
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.667"
          d="M6.668 10h6.667m5 0a8.333 8.333 0 11-16.667 0 8.333 8.333 0 0116.667 0z"
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

export default withIcon(MinusCircleIcon); // export here with withIcon
