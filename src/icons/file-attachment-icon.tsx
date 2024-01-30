import { IconProps } from '.';
import { withIcon } from './with-svg';

function FileAttachmentIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={21}
      height={20}
      fill="none"
      viewBox="0 0 21 20"
      {...props}
    >
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.667"
        d="M5.5 8.333V3.749a1.25 1.25 0 112.5 0v4.584a2.5 2.5 0 11-5 0V4.999m7.917-3.333h2.25c1.4 0 2.1 0 2.635.272a2.5 2.5 0 011.092 1.093c.273.535.273 1.235.273 2.635v8.667c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 01-1.092 1.092c-.535.273-1.235.273-2.635.273H7.833c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 01-1.092-1.092c-.273-.535-.273-1.235-.273-2.635v-.584"
      ></path>
    </svg>
  );
}

export default withIcon(FileAttachmentIcon);
