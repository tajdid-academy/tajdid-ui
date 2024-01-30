import { IconProps } from '.';
import { withIcon } from './with-svg';

function Copy2Icon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          stroke="currentcolor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.667"
          d="M8.751 1.668c-.562.008-.9.04-1.173.18-.314.16-.569.414-.728.728-.14.273-.172.61-.18 1.173m9.581-2.08c.563.007.9.04 1.174.179.313.16.568.414.728.728.14.273.172.61.18 1.173m0 7.5c-.008.563-.04.9-.18 1.174-.16.313-.415.568-.728.728-.273.14-.611.172-1.174.18m2.084-6.665v1.667m-6.667-6.667h1.667m-9 16.667h6.333c.933 0 1.4 0 1.757-.182.313-.16.568-.415.728-.728.182-.357.182-.824.182-1.757V9.333c0-.934 0-1.4-.182-1.757a1.667 1.667 0 00-.728-.728c-.357-.182-.824-.182-1.757-.182H4.335c-.934 0-1.4 0-1.757.182-.314.16-.569.414-.728.728-.182.357-.182.823-.182 1.757v6.333c0 .933 0 1.4.182 1.757.16.313.414.568.728.728.357.182.823.182 1.757.182z"
        ></path>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h20v20H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default withIcon(Copy2Icon);
