import { withIcon, IconProps } from './with-svg';

const SearchIcon = (props: IconProps) => {
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
        d="M17.5 17.5l-2.917-2.917m2.084-5a7.083 7.083 0 11-14.167 0 7.083 7.083 0 0114.167 0z"
      ></path>
    </svg>
  );
};

export default withIcon(SearchIcon);
