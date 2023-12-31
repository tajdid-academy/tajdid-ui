import { withIcon, IconProps } from './with-svg';

function DownArrowIcon(props: IconProps) {
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
        d="M5 7.5l5 5 5-5"
      ></path>
    </svg>
  );
}
export default withIcon(DownArrowIcon);
