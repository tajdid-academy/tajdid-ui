import { withIcon, IconProps } from './with-svg';

function EmailIcon(props: IconProps) {
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
        d="M1.667 5.833l6.804 4.763c.55.386.826.579 1.126.653.265.066.542.066.806 0 .3-.074.575-.267 1.126-.653l6.804-4.763M5.667 16.667h8.666c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 001.093-1.092c.272-.535.272-1.235.272-2.635V7.333c0-1.4 0-2.1-.272-2.635a2.5 2.5 0 00-1.093-1.092c-.534-.273-1.235-.273-2.635-.273H5.667c-1.4 0-2.1 0-2.635.273a2.5 2.5 0 00-1.093 1.092c-.272.535-.272 1.235-.272 2.635v5.334c0 1.4 0 2.1.272 2.635a2.5 2.5 0 001.093 1.092c.535.273 1.235.273 2.635.273z"
      ></path>
    </svg>
  );
}

export default withIcon(EmailIcon);
