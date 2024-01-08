import { IconProps, withIcon } from './with-svg';

const AlertWarningIcon = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      width={20}
      height={20}
      {...props}
    >
      <path
        d="M9.99963 7.49995V10.8333M9.99963 14.1666H10.008M8.84573 3.24305L1.99166 15.0819C1.61149 15.7386 1.4214 16.0669 1.4495 16.3364C1.474 16.5714 1.59714 16.785 1.78828 16.924C2.00741 17.0833 2.38679 17.0833 3.14556 17.0833H16.8537C17.6125 17.0833 17.9919 17.0833 18.211 16.924C18.4021 16.785 18.5253 16.5714 18.5498 16.3364C18.5779 16.0669 18.3878 15.7386 18.0076 15.0819L11.1535 3.24305C10.7747 2.58875 10.5853 2.26159 10.3382 2.15172C10.1227 2.05587 9.8766 2.05587 9.66105 2.15172C9.41394 2.26159 9.22454 2.58875 8.84573 3.24305Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default withIcon(AlertWarningIcon);
