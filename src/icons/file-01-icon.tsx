import { IconProps } from '.';
import { withIcon } from './with-svg';

function FileIcon1(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={18}
      {...props}
      fill="none"
      viewBox="0 0 16 18"
    >
      <path
        stroke="currentcolor"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M1.389 7.445c0-2.933 0-4.4.968-5.311.968-.911 2.526-.911 5.643-.911h.6c2.537 0 3.806 0 4.686.62.253.178.477.389.666.626.659.83.659 2.023.659 4.41v1.98c0 2.305 0 3.457-.365 4.377-.586 1.48-1.826 2.647-3.398 3.199-.978.343-2.203.343-4.651.343-1.4 0-2.1 0-2.658-.196-.898-.315-1.607-.982-1.942-1.828-.208-.526-.208-1.184-.208-2.501V7.445z"
      ></path>
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14.612 9a2.593 2.593 0 01-2.593 2.593c-.518 0-1.128-.091-1.632.044-.447.12-.796.469-.916.916-.135.504-.044 1.114-.044 1.632a2.593 2.593 0 01-2.593 2.593M4.889 5.111h5.444M4.889 8.223h2.333"
      ></path>
    </svg>
  );
}

export default withIcon(FileIcon1);
