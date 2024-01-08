import { IconProps, withIcon } from './with-svg';

const AlertSuccessIcon = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      width={20}
      height={20}
      {...props}
    >
      <g clipPath="url(#clip0_794_50)">
        <path
          d="M6.25008 10.0001L8.75008 12.5001L13.7501 7.50008M18.3334 10.0001C18.3334 14.6025 14.6025 18.3334 10.0001 18.3334C5.39771 18.3334 1.66675 14.6025 1.66675 10.0001C1.66675 5.39771 5.39771 1.66675 10.0001 1.66675C14.6025 1.66675 18.3334 5.39771 18.3334 10.0001Z"
          stroke="currentcolor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_794_50">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default withIcon(AlertSuccessIcon);
