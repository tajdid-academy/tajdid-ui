import { IconProps, withIcon } from './with-svg';

function ErrorIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      width={16}
      height={16}
      {...props}
    >
      <path
        stroke="currentcolor"
        d="M8 5.333V8m0 2.667h.007M14.667 8A6.667 6.667 0 111.333 8a6.667 6.667 0 0113.334 0z"
      ></path>
    </svg>
  );
}

export default withIcon(ErrorIcon);
