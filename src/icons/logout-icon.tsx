import { IconProps, withIcon } from './with-svg';

function LogoutIcon(props: IconProps) {
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
        d="M13.333 14.167L17.5 10m0 0l-4.167-4.167M17.5 10h-10m0-7.5h-1c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 00-1.093 1.093C2.5 4.4 2.5 5.1 2.5 6.5v7c0 1.4 0 2.1.272 2.635a2.5 2.5 0 001.093 1.092C4.4 17.5 5.1 17.5 6.5 17.5h1"
      ></path>
    </svg>
  );
}

export default withIcon(LogoutIcon);
