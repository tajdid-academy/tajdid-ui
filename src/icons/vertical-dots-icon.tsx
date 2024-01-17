import { IconProps } from '.';
import { withIcon } from './with-svg';

function VerticalDotsIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={21}
      height={20}
      {...props}
      fill="none"
    >
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.667"
        d="M10.501 10.834a.833.833 0 100-1.667.833.833 0 000 1.667zm0-5.834a.833.833 0 100-1.666.833.833 0 000 1.667zm0 11.667a.833.833 0 100-1.666.833.833 0 000 1.666z"
      ></path>
    </svg>
  );
}

export default withIcon(VerticalDotsIcon);
