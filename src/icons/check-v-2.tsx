import { IconProps, withIcon } from './with-svg';

function CheckV2Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      {...props}
      fill="none"
      viewBox="0 0 22 22"
    >
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M13.262 2.6C12.196 1.532 11.662 1 11 1c-.662 0-1.196.533-2.262 1.6-.64.64-1.274.936-2.186.936-.796 0-1.93-.154-2.552.473-.618.623-.464 1.752-.464 2.543 0 .912-.297 1.546-.937 2.186C1.533 9.804 1 10.338 1 11c0 .662.533 1.196 1.6 2.262.716.717.936 1.18.936 2.186 0 .796-.154 1.93.473 2.552.623.617 1.752.464 2.543.464.971 0 1.44.19 2.133.883C9.275 19.937 10.066 21 11 21c.934 0 1.725-1.063 2.315-1.653.694-.693 1.162-.883 2.133-.883.791 0 1.92.154 2.543-.464m1.41-9.262C20.467 9.804 21 10.338 21 11c0 .662-.533 1.196-1.6 2.262-.716.717-.936 1.18-.936 2.186 0 .796.154 1.93-.473 2.552m0 0H18"
      ></path>
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7 9.308S9.25 9 11 13c0 0 5.059-10 10-12"
      ></path>
    </svg>
  );
}

export default withIcon(CheckV2Icon);
