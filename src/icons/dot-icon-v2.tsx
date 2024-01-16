import { withIcon, IconProps } from './with-svg';

function DotIconV2(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 25 24"
      width={25}
      height={24}
      {...props}
    >
      <rect
        width="22.5"
        height="22.5"
        x="1.082"
        y="0.75"
        stroke="#E3E8EF"
        strokeWidth="1.5"
        rx="11.25"
      ></rect>
      <circle cx="12.332" cy="12" r="4" fill="#E3E8EF"></circle>
    </svg>
  );
}

export default withIcon(DotIconV2);
