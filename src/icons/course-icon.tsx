import { withIcon, IconProps } from './with-svg';

function CoursesIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 20"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={20}
      {...props}
      fill="none"
    >
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m11 19-.1-.15c-.695-1.042-1.042-1.563-1.5-1.94a4 4 0 0 0-1.378-.737C7.453 16 6.827 16 5.575 16H4.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C1 14.48 1 13.92 1 12.8V4.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C2.52 1 3.08 1 4.2 1h.4c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C11 4.04 11 5.16 11 7.4M11 19V7.4M11 19l.1-.15c.695-1.042 1.042-1.563 1.5-1.94a3.999 3.999 0 0 1 1.378-.737C14.547 16 15.173 16 16.425 16H17.8c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 14.48 21 13.92 21 12.8V4.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 1 18.92 1 17.8 1h-.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C11 4.04 11 5.16 11 7.4"
      />
    </svg>
  );
}

export default withIcon(CoursesIcon);
