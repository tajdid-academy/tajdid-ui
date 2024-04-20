import { IconProps, withIcon } from './with-svg';

function HamburgerIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 5h8M12 12h8M4 19h16"
      ></path>
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M3 12l3.14-2.747a1 1 0 000-1.506L3 5"
      ></path>
    </svg>
  );
}

export default withIcon(HamburgerIcon);
