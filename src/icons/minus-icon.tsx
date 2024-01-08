import { withIcon, IconProps } from './with-svg';

function MinusIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      width={14}
      height={14}
      fill="none"
      {...props}
    >
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M2.917 7h8.166"
      ></path>
    </svg>
  );
}

export default withIcon(MinusIcon);
