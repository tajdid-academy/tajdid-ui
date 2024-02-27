import { IconProps, withIcon } from './with-svg';

const ImageUploadIcon = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={20}
      {...props}
      fill="none"
      viewBox="0 0 19 20"
    >
      <path
        stroke="currentcolor"
        strokeWidth="1.5"
        d="M3.667 17.499c3.508-3.96 7.451-9.21 13.333-5.272"
      ></path>
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M13.667 3.75c.41-.422 1.5-2.084 2.083-2.084m2.084 2.083c-.41-.421-1.5-2.083-2.084-2.083m0 0v6.667"
      ></path>
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M17 10.833c-.001 3.456-.044 5.226-1.159 6.341-1.16 1.16-3.025 1.16-6.757 1.16-3.732 0-5.598 0-6.758-1.16-1.159-1.16-1.159-3.025-1.159-6.757 0-3.732 0-5.598 1.16-6.758C3.485 2.5 5.351 2.5 9.083 2.5h2.083"
      ></path>
    </svg>
  );
};

export default withIcon(ImageUploadIcon);
