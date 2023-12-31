import { IconProps, withIcon } from './with-svg';

const XCloseIcon = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      width={20}
      height={20}
      {...props}
    >
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.667"
        d="M15 5L5 15M5 5l10 10"
      ></path>
    </svg>
  );
};

export default withIcon(XCloseIcon);
