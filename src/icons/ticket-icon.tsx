import { IconProps, withIcon } from './with-svg';

function TicketIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      {...props}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.667"
        d="M8.333 6.667v-.833m0 4.583v-.833m0 4.583v-.833m-4-10h11.333c.933 0 1.4 0 1.757.182.313.16.568.414.728.728.182.357.182.823.182 1.757v1.083a2.917 2.917 0 000 5.833v1.084c0 .933 0 1.4-.182 1.756a1.67 1.67 0 01-.728.729c-.357.181-.824.181-1.757.181H4.333c-.934 0-1.4 0-1.757-.181a1.667 1.667 0 01-.728-.729c-.182-.356-.182-.823-.182-1.756v-1.084a2.917 2.917 0 100-5.833V6.001c0-.934 0-1.4.182-1.757.16-.314.414-.569.728-.728.357-.182.823-.182 1.757-.182z"
      ></path>
    </svg>
  );
}

export default withIcon(TicketIcon);
