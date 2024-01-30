import { IconProps } from '.';
import { withIcon } from './with-svg';

function FolderPlusIcon(props: IconProps) {
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
        d="M11.335 5.833l-.93-1.859c-.268-.535-.401-.803-.6-.998a1.667 1.667 0 00-.624-.385C8.917 2.5 8.618 2.5 8.02 2.5H4.835c-.934 0-1.4 0-1.757.182-.314.16-.569.414-.728.728-.182.357-.182.823-.182 1.757v.666m0 0h12.667c1.4 0 2.1 0 2.635.273a2.5 2.5 0 011.092 1.092c.273.535.273 1.235.273 2.635V13.5c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 01-1.092 1.092c-.535.273-1.235.273-2.635.273H6.168c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 01-1.093-1.092c-.272-.535-.272-1.235-.272-2.635V5.833zm8.333 8.334v-5m-2.5 2.5h5"
      ></path>
    </svg>
  );
}

export default withIcon(FolderPlusIcon);
