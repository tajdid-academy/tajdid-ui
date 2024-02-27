import { IconProps, withIcon } from './with-svg';

function Time(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      {...props}
      fill="none"
      viewBox="0 0 22 22"
    >
      <circle
        cx="11"
        cy="11"
        r="10"
        stroke="currentcolor"
        strokeWidth="1.5"
      ></circle>
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8.5 8.5L12 12m3-5l-5 5"
      ></path>
    </svg>
  );
}

export default withIcon(Time);
