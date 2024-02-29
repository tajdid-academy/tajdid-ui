import { IconProps } from '.';
import { withIcon } from './with-svg';

function DotIconV3(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={8}
      height={8}
      {...props}
      fill="none"
      viewBox="0 0 8 8"
    >
      <circle cx="4" cy="4" r="3" fill="currentcolor"></circle>
    </svg>
  );
}

export default withIcon(DotIconV3);
