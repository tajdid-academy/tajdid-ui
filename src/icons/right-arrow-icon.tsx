import { IconProps, withIcon } from './with-svg';

function RightArrowIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      width={16}
      height={16}
      {...props}
    >
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.333"
        d="M6 12l4-4-4-4"
      ></path>
    </svg>
  );
}

export default withIcon(RightArrowIcon);
