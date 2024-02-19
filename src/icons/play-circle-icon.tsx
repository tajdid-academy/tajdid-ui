import { IconProps } from '.';
import { withIcon } from './with-svg';

function PlayCircleIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      {...props}
      fill="none"
      viewBox="0 0 18 18"
    >
      <circle
        cx="8.998"
        cy="9"
        r="7.778"
        stroke="currentcolor"
        strokeWidth="1.5"
      ></circle>
      <path
        stroke="currentcolor"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11.685 9.308c-.118.487-.675.832-1.788 1.52-1.077.666-1.615 1-2.049.866a1.071 1.071 0 01-.475-.306c-.318-.35-.318-1.029-.318-2.387 0-1.359 0-2.038.318-2.388a1.07 1.07 0 01.475-.305c.434-.134.972.199 2.049.865 1.113.689 1.67 1.033 1.788 1.52.048.202.048.413 0 .615z"
      ></path>
    </svg>
  );
}

export default withIcon(PlayCircleIcon);
