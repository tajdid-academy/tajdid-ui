import { IconProps, withIcon } from './with-svg';

function SupportIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      {...props}
    >
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9.136 9.136L4.93 4.93m0 14.142l4.239-4.239m5.693.032l4.207 4.207m0-14.142l-4.24 4.24M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-6 0a4 4 0 11-8 0 4 4 0 018 0z"
      ></path>
    </svg>
  );
}

export default withIcon(SupportIcon);
