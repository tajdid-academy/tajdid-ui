import { IconProps } from '.';
import { withIcon } from './with-svg';

function FileQuizIcon(props: IconProps) {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M1.389 2.761c0-.85.696-1.538 1.555-1.538.86 0 1.556.688 1.556 1.538 0 .306-.09.592-.247.831-.465.715-1.309 1.396-1.309 2.246v.385m0 2h.01m3.879-7h1.768c2.536 0 3.804 0 4.685.62.253.178.477.389.666.626.659.83.659 2.023.659 4.41v1.98c0 2.305 0 3.457-.365 4.377-.586 1.48-1.826 2.647-3.398 3.199-.978.343-2.203.343-4.651.343-1.4 0-2.1 0-2.658-.196-.898-.315-1.607-.982-1.942-1.828-.208-.526-.208-1.184-.208-2.501v-1.697"
      ></path>
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14.612 9a2.593 2.593 0 01-2.593 2.593c-.518 0-1.128-.091-1.632.044-.447.12-.796.469-.916.916-.135.504-.044 1.114-.044 1.632a2.593 2.593 0 01-2.593 2.593"
      ></path>
    </svg>
  );
}

export default withIcon(FileQuizIcon);
