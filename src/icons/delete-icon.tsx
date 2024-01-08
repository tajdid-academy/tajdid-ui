import { withIcon, IconProps } from './with-svg';

function DeleteIcon(props: IconProps) {
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
        d="M7.5 2.5h5M2.5 5h15m-1.667 0l-.584 8.766c-.088 1.315-.132 1.973-.416 2.472a2.5 2.5 0 01-1.082 1.012c-.516.25-1.175.25-2.493.25H8.742c-1.318 0-1.977 0-2.493-.25a2.5 2.5 0 01-1.082-1.012c-.284-.5-.328-1.157-.416-2.472L4.167 5"
      ></path>
    </svg>
  );
}

export default withIcon(DeleteIcon);
