import { IconProps, withIcon } from './with-svg';

const StopWatchIcon = (props: IconProps) => {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 6.333V9l1.667 1M8 3.333a5.667 5.667 0 100 11.334A5.667 5.667 0 008 3.334zm0 0v-2m-1.333 0h2.666m4.22 2.395l-1-1 .5.5m-10.606.5l1-1-.5.5"
      ></path>
    </svg>
  );
};

export default withIcon(StopWatchIcon);
