type Props = {
  className?: string;
};

export default function LockIcon({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M5.91753 8.33333H5.83335V6.66667C5.83335 4.36548 7.69883 2.5 10 2.5C12.3012 2.5 14.1667 4.36548 14.1667 6.66667V8.33333H14.0825M10 11.6667V13.3333M15.8334 12.5C15.8334 15.7217 13.2217 18.3333 10 18.3333C6.77836 18.3333 4.16669 15.7217 4.16669 12.5C4.16669 9.27834 6.77836 6.66667 10 6.66667C13.2217 6.66667 15.8334 9.27834 15.8334 12.5Z"
        stroke="#697586"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
