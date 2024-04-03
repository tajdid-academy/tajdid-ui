import { IconProps, withIcon } from './with-svg';

function HamburgerIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      {...props}
    >
      <path
        stroke="currentcolor"
        d="M12 5h8m-8 7h8M4 19h16M3 12l3.14-2.747a1 1 0 0 0 0-1.506L3 5"
      />
    </svg>
  );
}

export default withIcon(HamburgerIcon);
