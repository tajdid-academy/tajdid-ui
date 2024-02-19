import { IconProps } from '.';
import { withIcon } from './with-svg';

function CheckMarkIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      {...props}
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M16.874 5.833c.043.875.043 1.916.043 3.167 0 3.732 0 5.598-1.16 6.757-1.158 1.16-3.024 1.16-6.756 1.16s-5.598 0-6.758-1.16C1.084 14.597 1.084 12.732 1.084 9c0-3.732 0-5.598 1.16-6.758C3.402 1.083 5.268 1.083 9 1.083c.893 0 1.68 0 2.375.016"
      ></path>
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5.668 8.583s1.25 0 2.917 2.917c0 0 4.215-7.64 8.333-9.167"
      ></path>
    </svg>
  );
}

export default withIcon(CheckMarkIcon);
