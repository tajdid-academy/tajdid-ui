import { IconProps } from '.';
import { withIcon } from './with-svg';

function HamburgerMenuIcon(props: IconProps) {
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
        d="M1 1h16M1 8h16M1 15h16"
      ></path>
    </svg>
  );
}

export default withIcon(HamburgerMenuIcon);
