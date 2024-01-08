import { IconProps, withIcon } from './with-svg';

const ToolTip = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 17 9"
      width={17}
      height={9}
      {...props}
    >
      <path
        fill="#fff"
        d="M14.571.485c.891 0 1.337 1.077.707 1.707l-6.07 6.071a1 1 0 01-1.415 0l-6.071-6.07c-.63-.63-.184-1.708.707-1.708H14.57z"
      ></path>
    </svg>
  );
};

export default withIcon(ToolTip);
