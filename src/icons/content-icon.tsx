import { IconProps, withIcon } from './with-svg';

function ContentIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={30}
      {...props}
      fill="none"
      viewBox="0 0 28 30"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M22 1.667v2.666M6 1.667v2.666"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M13.995 16.333h.012m-.012 5.334h.012m5.316-5.334h.012m-10.667 0h.012m-.012 5.334h.012"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M2.668 9.667h22.667M1.334 15.324c0-5.81 0-8.714 1.67-10.52C4.672 3 7.36 3 12.733 3h2.533c5.374 0 8.061 0 9.73 1.805 1.67 1.805 1.67 4.71 1.67 10.52v.684c0 5.81 0 8.715-1.67 10.52-1.669 1.804-4.356 1.804-9.73 1.804h-2.533c-5.374 0-8.061 0-9.73-1.804-1.67-1.805-1.67-4.71-1.67-10.52v-.685zM2 9.667h24"
      ></path>
    </svg>
  );
}

export default withIcon(ContentIcon);
