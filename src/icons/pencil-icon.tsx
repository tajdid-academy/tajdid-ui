import { IconProps, withIcon } from './with-svg';

function PencilIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="16"
      fill="none"
      viewBox="0 0 12 16"
      {...props}
    >
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.949 4.667c.174-.788.727-2.13.079-2.845-.442-.489-1.274-.489-2.938-.489h-.178c-1.663 0-2.495 0-2.937.489-.648.714-.096 2.057.079 2.845M10.005 9.769l-2.813 3.804c-.54.73-.81 1.094-1.191 1.094-.382 0-.652-.365-1.192-1.094L1.996 9.769c-.451-.61-.677-.915-.661-1.24.015-.325.316-.666.919-1.347h0c.58-.656.799-1.335.799-2.515h5.895c0 1.18.219 1.859.8 2.515.602.681.903 1.022.919 1.347.015.325-.21.63-.662 1.24z"
      ></path>
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        d="M7 9.334a1.7 1.7 0 01-1 .333m0 0a1.7 1.7 0 01-1-.333m1 .333v5"
      ></path>
    </svg>
  );
}

export default withIcon(PencilIcon);
