import { IconProps, withIcon } from './with-svg';

function CalendarIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={8}
      height={8}
      {...props}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 10h18M7 3v2m10-2v2M6.2 21h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C21 19.48 21 18.92 21 17.8V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874C19.48 5 18.92 5 17.8 5H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C3 6.52 3 7.08 3 8.2v9.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C4.52 21 5.08 21 6.2 21z"
      ></path>
    </svg>
  );
}

export default withIcon(CalendarIcon);
