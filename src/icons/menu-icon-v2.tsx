import { IconProps, withIcon } from './with-svg';

function MenuIconV2(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={16}
      {...props}
      fill="none"
      viewBox="0 0 18 16"
    >
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17 8H7m10-7H1m16 14H1"
      ></path>
    </svg>
  );
}

export default withIcon(MenuIconV2);
