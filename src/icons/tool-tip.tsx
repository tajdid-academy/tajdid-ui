type Props = {
  className?: string;
};

const ToolTip = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="9"
      viewBox="0 0 17 9"
      fill="none"
      className={className}
    >
      <path
        d="M14.5711 0.485289C15.462 0.485289 15.9081 1.56243 15.2782 2.1924L9.20711 8.26347C8.81658 8.654 8.18342 8.654 7.79289 8.26347L1.72183 2.1924C1.09187 1.56243 1.53803 0.485289 2.42894 0.485289L14.5711 0.485289Z"
        fill="white"
      />
    </svg>
  );
};

export default ToolTip;
