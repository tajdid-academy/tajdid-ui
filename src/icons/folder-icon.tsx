import { IconProps } from '.';
import { withIcon } from './with-svg';

function FolderIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={52}
      height={52}
      {...props}
      fill="none"
      viewBox="0 0 52 52"
    >
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M28.165 15.167l-2.417-4.834c-.695-1.392-1.043-2.087-1.562-2.595a4.333 4.333 0 00-1.62-1.001C21.88 6.5 21.104 6.5 19.548 6.5h-8.282c-2.427 0-3.64 0-4.567.472a4.333 4.333 0 00-1.894 1.894c-.472.927-.472 2.14-.472 4.567v1.734m0 0h32.933c3.64 0 5.46 0 6.851.708a6.5 6.5 0 012.84 2.84c.71 1.391.71 3.211.71 6.852V35.1c0 3.64 0 5.46-.71 6.85a6.5 6.5 0 01-2.84 2.841c-1.39.709-3.21.709-6.85.709H14.731c-3.64 0-5.46 0-6.85-.709a6.5 6.5 0 01-2.842-2.84c-.708-1.39-.708-3.21-.708-6.851V15.167z"
      ></path>
    </svg>
  );
}

export default withIcon(FolderIcon);
