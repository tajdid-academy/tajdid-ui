import { IconProps } from '.';
import { withIcon } from './with-svg';

function FileIcon(props: IconProps) {
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
        d="M12.165 9.166h-5m1.667 3.333H7.165m6.667-6.666H7.165m10-.167v8.667c0 1.4 0 2.1-.272 2.635A2.5 2.5 0 0115.8 18.06c-.534.273-1.235.273-2.635.273H7.832c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 01-1.092-1.092c-.273-.535-.273-1.235-.273-2.635V5.666c0-1.4 0-2.1.273-2.635a2.5 2.5 0 011.092-1.093c.535-.272 1.235-.272 2.635-.272h5.333c1.4 0 2.1 0 2.635.272a2.5 2.5 0 011.093 1.093c.272.535.272 1.235.272 2.635z"
      ></path>
    </svg>
  );
}

export default withIcon(FileIcon);
