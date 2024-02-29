import { IconProps } from '.';
import { withIcon } from './with-svg';

function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      {...props}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.667"
        d="M5.834 14.166l8.333-8.333m0 0H5.834m8.333 0v8.333"
      ></path>
    </svg>
  );
}

export default withIcon(ArrowUpRightIcon);
