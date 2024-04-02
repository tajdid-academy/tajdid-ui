import { IconProps, withIcon } from './with-svg';

function HamburgerMenuOpenIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="18"
      fill="none"
      {...props}
    >
      <path
        stroke="currentcolor"
        fill="#4B5565"
        d="M19.388 15.763a1.118 1.118 0 0 1 0 2.237H1.493a1.118 1.118 0 0 1 0-2.237h17.895zM15.778.707a1 1 0 0 1 1.414 0l3.726 3.726a1 1 0 0 1 0 1.414l-3.726 3.726a1 1 0 0 1-1.415 0l-.167-.168a1 1 0 0 1 0-1.414l2.852-2.851-2.852-2.851a1 1 0 0 1 0-1.415l.168-.167zM9.322 7.936a1.118 1.118 0 1 1 0 2.236h-7.83a1.118 1.118 0 0 1 0-2.237h7.83zm0-7.828a1.118 1.118 0 1 1 0 2.236h-7.83a1.118 1.118 0 1 1 0-2.236h7.83z"
      />
    </svg>
  );
}

export default withIcon(HamburgerMenuOpenIcon);
