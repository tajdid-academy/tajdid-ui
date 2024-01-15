import { withIcon, IconProps } from './with-svg';

function CopyIcon(props: IconProps) {
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
        d="M6.25 2.5h5.917c1.867 0 2.8 0 3.513.363.627.32 1.137.83 1.457 1.457.363.713.363 1.646.363 3.513v5.917M5.167 17.5h6.75c.933 0 1.4 0 1.756-.182.314-.16.569-.414.729-.728.181-.357.181-.823.181-1.757v-6.75c0-.933 0-1.4-.181-1.756a1.667 1.667 0 00-.729-.729c-.356-.181-.823-.181-1.756-.181h-6.75c-.934 0-1.4 0-1.757.181a1.66 1.66 0 00-.728.729C2.5 6.683 2.5 7.15 2.5 8.083v6.75c0 .934 0 1.4.182 1.757.16.314.414.569.728.728.357.182.823.182 1.757.182z"
      ></path>
    </svg>
  );
}

export default withIcon(CopyIcon);
