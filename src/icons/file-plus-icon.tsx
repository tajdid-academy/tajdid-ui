import { IconProps } from '.';
import { withIcon } from './with-svg';

function FilePlus(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={21}
      height={20}
      viewBox="0 0 21 20"
      {...props}
      fill="none"
    >
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.667"
        d="M17.165 8.75V5.665c0-1.4 0-2.1-.272-2.635A2.5 2.5 0 0015.8 1.938c-.534-.272-1.235-.272-2.635-.272H7.832c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 00-1.092 1.093c-.273.535-.273 1.235-.273 2.635v8.667c0 1.4 0 2.1.273 2.635a2.5 2.5 0 001.092 1.092c.535.273 1.235.273 2.635.273h2.667m1.666-9.167h-5m1.667 3.333H7.165m6.667-6.666H7.165M15.5 17.499v-5m-2.5 2.5h5"
      ></path>
    </svg>
  );
}

export default withIcon(FilePlus);
