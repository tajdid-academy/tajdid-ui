import { withIcon, IconProps } from './with-svg';

function CheckCircleIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      width="14"
      height="14"
      fill="none"
      {...props}
    >
      <rect width="14" height="14" rx="7" fill="#D1FADF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.97284 4.31097L5.79617 8.3418L4.68784 7.15763C4.48367 6.96513 4.16284 6.95347 3.9295 7.1168C3.702 7.28597 3.63784 7.58347 3.77784 7.82263L5.09034 9.95763C5.21867 10.156 5.44034 10.2785 5.69117 10.2785C5.93034 10.2785 6.15784 10.156 6.28617 9.95763C6.49617 9.68347 10.5037 4.90597 10.5037 4.90597C11.0287 4.3693 10.3928 3.8968 9.97284 4.30513V4.31097Z"
        fill="#039855"
      />
    </svg>
  );
}

export default withIcon(CheckCircleIcon);
