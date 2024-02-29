import { IconProps } from '.';
import { withIcon } from './with-svg';

function ArrowRightIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={21}
      height={20}
      {...props}
      fill="none"
      viewBox="0 0 21 20"
    >
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.667"
        d="M3.834 10h13.333m0 0l-5-5m5 5l-5 5"
      ></path>
    </svg>
  );
}

export default withIcon(ArrowRightIcon);
