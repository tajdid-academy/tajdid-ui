import { IconProps, withIcon } from './with-svg';

function PenEditIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      {...props}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="currentcolor"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11.728 3.237c.621-.673.932-1.009 1.262-1.205a2.588 2.588 0 012.586-.04c.335.187.655.514 1.295 1.168.64.654.96.98 1.143 1.323.44.827.425 1.829-.038 2.642-.192.337-.522.654-1.18 1.289L8.959 15.96c-1.248 1.202-1.872 1.804-2.652 2.108-.78.305-1.637.282-3.352.238L2.72 18.3c-.522-.013-.783-.02-.934-.192-.152-.172-.131-.438-.09-.97l.023-.289c.116-1.497.174-2.245.467-2.918.292-.672.796-1.219 1.805-2.311l7.736-8.383zm-.894.095l5.833 5.833"
      ></path>
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11.667 18.332h6.667"
      ></path>
    </svg>
  );
}

export default withIcon(PenEditIcon);
