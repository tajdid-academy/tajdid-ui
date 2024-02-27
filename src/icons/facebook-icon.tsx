import { IconProps, withIcon } from './with-svg';

function FacebookIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={22}
      {...props}
      fill="none"
      viewBox="0 0 16 22"
    >
      <path
        stroke="currentcolor"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M2.182 9.333C1.204 9.333 1 9.525 1 10.444v1.667c0 .92.204 1.111 1.182 1.111h2.363v6.667c0 .92.205 1.111 1.182 1.111h2.364c.978 0 1.182-.192 1.182-1.111v-6.667h2.654c.741 0 .932-.135 1.136-.806l.507-1.666c.348-1.149.133-1.417-1.137-1.417h-3.16V6.556c0-.614.529-1.112 1.181-1.112h3.364c.978 0 1.182-.191 1.182-1.11V2.11C15 1.191 14.796 1 13.818 1h-3.364C7.191 1 4.545 3.487 4.545 6.556v2.777H2.182z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default withIcon(FacebookIcon);
