import { IconProps, withIcon } from './with-svg';

function ClockIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      {...props}
      fill="none"
      viewBox="0 0 30 30"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14.999 28.333c7.364 0 13.333-5.97 13.333-13.333 0-7.364-5.97-13.333-13.333-13.333C9.029 1.667 4.03 5.59 2.332 11h3.333"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 9.667V15l2.667 2.667M1.666 15c0 .45.02.895.06 1.333m9.273 12c-.455-.15-.9-.324-1.333-.523m-6.387-6.143a14.227 14.227 0 01-.686-1.539m2.848 4.614c.408.44.842.85 1.302 1.23"
      ></path>
    </svg>
  );
}

export default withIcon(ClockIcon);
