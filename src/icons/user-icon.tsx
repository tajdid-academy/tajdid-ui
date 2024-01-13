import { IconProps, withIcon } from './with-svg';

const UserIcon = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M10 12.5C7.35831 12.5 5.00904 13.7755 3.51337 15.755C3.19146 16.181 3.0305 16.394 3.03577 16.6819C3.03984 16.9043 3.17951 17.1849 3.35451 17.3222C3.58103 17.5 3.89493 17.5 4.52273 17.5H15.4773C16.1051 17.5 16.4191 17.5 16.6456 17.3222C16.8206 17.1849 16.9602 16.9043 16.9643 16.6819C16.9696 16.394 16.8086 16.181 16.4867 15.755C14.991 13.7755 12.6418 12.5 10 12.5Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10C12.0711 10 13.75 8.32107 13.75 6.25C13.75 4.17893 12.0711 2.5 10 2.5C7.92897 2.5 6.25004 4.17893 6.25004 6.25C6.25004 8.32107 7.92897 10 10 10Z"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default withIcon(UserIcon);
