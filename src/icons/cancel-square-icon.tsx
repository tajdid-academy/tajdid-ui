import { IconProps } from '.';
import { withIcon } from './with-svg';

function CancelSquareIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      {...props}
      fill="none"
      viewBox="0 0 28 28"
    >
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18 10l-8 8m8 0l-8-8"
      ></path>
      <path
        stroke="currentcolor"
        strokeWidth="1.5"
        d="M1.334 14c0-5.971 0-8.957 1.855-10.812 1.855-1.855 4.84-1.855 10.812-1.855 5.97 0 8.956 0 10.811 1.855 1.855 1.855 1.855 4.84 1.855 10.812 0 5.97 0 8.956-1.855 10.811-1.855 1.855-4.84 1.855-10.811 1.855s-8.957 0-10.812-1.855C1.334 22.956 1.334 19.971 1.334 14z"
      ></path>
    </svg>
  );
}

export default withIcon(CancelSquareIcon);
