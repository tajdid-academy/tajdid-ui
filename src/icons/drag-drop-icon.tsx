import { IconProps } from '.';
import { withIcon } from './with-svg';

function DragDropIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={13}
      height={16}
      {...props}
      fill="none"
    >
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M.5 2a2 2 0 012-2h.006a2 2 0 110 4H2.5a2 2 0 01-2-2zm7.994 0a2 2 0 012-2h.006a2 2 0 110 4h-.006a2 2 0 01-2-2zM.5 8a2 2 0 012-2h.006a2 2 0 110 4H2.5a2 2 0 01-2-2zm7.994 0a2 2 0 012-2h.006a2 2 0 110 4h-.006a2 2 0 01-2-2zM.5 14a2 2 0 012-2h.006a2 2 0 110 4H2.5a2 2 0 01-2-2zm7.994 0a2 2 0 012-2h.006a2 2 0 110 4h-.006a2 2 0 01-2-2z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default withIcon(DragDropIcon);
