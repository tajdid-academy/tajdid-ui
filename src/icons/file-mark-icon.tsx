import { IconProps } from '.';
import { withIcon } from './with-svg';

function FileMarkIcon(props: IconProps) {
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
        stroke="currentcolor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M12.294 28.334c-5.324 0-7.986 0-9.64-1.562C1 25.209 1 22.695 1 17.667v-5.333C1 7.305 1 4.79 2.654 3.229c1.654-1.562 4.316-1.562 9.64-1.562h1.412c5.324 0 7.986 0 9.64 1.562C25 4.791 25 7.305 25 12.334m-12.667 16h2m-6.667-20h10.667M7.666 15h6.667"
      ></path>
      <path
        stroke="currentcolor"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.334 23.787l-1.203 4.204a.267.267 0 00.357.313l2.648-1.057a.534.534 0 01.396 0l2.673 1.067a.267.267 0 00.36-.302l-1.02-4.357m1.789-3.328a3.997 3.997 0 00-4-3.993c-2.21 0-4 1.788-4 3.994a3.997 3.997 0 004 3.993c2.21 0 4-1.788 4-3.994z"
      ></path>
    </svg>
  );
}

export default withIcon(FileMarkIcon);
