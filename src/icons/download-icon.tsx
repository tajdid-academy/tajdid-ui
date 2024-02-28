import { IconProps, withIcon } from './with-svg';

function DownloadIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      {...props}
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 11.5v-10m0 10c-.7 0-2.008-1.994-2.5-2.5M9 11.5c.7 0 2.008-1.994 2.5-2.5m5.5 4.5c0 2.482-.518 3-3 3H4c-2.482 0-3-.518-3-3"
      ></path>
    </svg>
  );
}

export default withIcon(DownloadIcon);
