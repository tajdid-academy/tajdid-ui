import { withIcon, IconProps } from './with-svg';

function DotIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      {...props}
    >
      <rect
        width="24"
        height="24"
        fill={props.outlineColor ?? '#F0FDFA'}
        rx="12"
      ></rect>
      <circle cx="12" cy="12" r="4" fill="currentColor"></circle>
    </svg>
  );
}

export default withIcon(DotIcon);
