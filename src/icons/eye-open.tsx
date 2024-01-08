import { IconProps, withIcon } from './with-svg';

function EyeOpenIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      width={16}
      height={16}
      {...props}
    >
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M1.613 8.476c-.09-.144-.136-.216-.161-.327a.782.782 0 010-.298c.025-.11.07-.183.161-.326C2.363 6.337 4.597 3.333 8 3.333c3.404 0 5.637 3.004 6.387 4.192.09.143.136.215.162.326a.786.786 0 010 .298c-.026.111-.071.183-.162.327-.75 1.188-2.983 4.19-6.387 4.19-3.403 0-5.636-3.002-6.387-4.19z"
      ></path>
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8 10a2 2 0 100-4 2 2 0 000 4z"
      ></path>
    </svg>
  );
}

export default withIcon(EyeOpenIcon);
