import { IconProps, withIcon } from './with-svg';

const FileUpload = (props: IconProps) => {
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
        d="M6.667 13.333L10 10m0 0l3.333 3.333M10 10v7.5m6.667-3.548a4.583 4.583 0 00-2.917-8.12.516.516 0 01-.445-.25 6.25 6.25 0 10-9.816 7.58"
      ></path>
    </svg>
  );
};

export default withIcon(FileUpload);
