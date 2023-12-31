type Props = {
  className?: string;
  width?: string;
  height?: string;
};

const XCloseIcon = ({ className, width = '20', height = '20' }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M15 5L5 15M5 5L15 15"
        stroke="currentcolor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default XCloseIcon;
