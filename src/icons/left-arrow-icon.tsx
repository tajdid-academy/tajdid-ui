import { IconProps, withIcon } from './with-svg';

function LeftArrowIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={8}
      height={8}
      {...props}
      viewBox="-12 0 32 32"
    >
      <path d="M7.28 23.28c-.2 0-.44-.08-.6-.24L.24 16.6c-.32-.32-.32-.84 0-1.2l6.44-6.44c.32-.32.84-.32 1.2 0 .32.32.32.84 0 1.2L2.08 16l5.84 5.84c.32.32.32.84 0 1.2-.16.16-.44.24-.64.24z"></path>
    </svg>
  );
}

export default withIcon(LeftArrowIcon);
