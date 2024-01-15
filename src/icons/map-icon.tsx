import { withIcon, IconProps } from './with-svg';

function MapIcon(props: IconProps) {
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
        d="M10 10.833a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
      ></path>
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.667"
        d="M10 18.333c3.333-3.333 6.667-6.318 6.667-10a6.667 6.667 0 00-13.334 0c0 3.682 3.334 6.667 6.667 10z"
      ></path>
    </svg>
  );
}

export default withIcon(MapIcon);
