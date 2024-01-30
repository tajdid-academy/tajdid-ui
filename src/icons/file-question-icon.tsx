import { IconProps } from '.';
import { withIcon } from './with-svg';

function FileQuestionIcon(props: IconProps) {
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
        d="M12.165 1.89v3.443c0 .466 0 .7.091.878.08.157.208.284.364.364.179.091.412.091.879.091h3.442m-8.234 3.335a1.874 1.874 0 013.641.625c0 1.249-1.874 1.873-1.874 1.873M10.5 15h.008m1.658-13.333H7.832c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 00-1.092 1.093c-.273.535-.273 1.235-.273 2.635v8.667c0 1.4 0 2.1.273 2.635a2.5 2.5 0 001.092 1.092c.535.273 1.235.273 2.635.273h5.333c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 001.093-1.092c.272-.535.272-1.235.272-2.635V6.666l-5-5z"
      ></path>
    </svg>
  );
}

export default withIcon(FileQuestionIcon);
