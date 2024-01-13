import { IconProps, withIcon } from './with-svg';

const ArrowLeft = (props: IconProps) => {
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
        d="M16.666 10H3.333m0 0l5 5m-5-5l5-5"
      ></path>
    </svg>
  );
};

export default withIcon(ArrowLeft);
