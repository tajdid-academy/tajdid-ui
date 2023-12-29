type Props = {
  className?: string;
};

export default function PlayIcon({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="#fff"
      className={className}
    >
      <path d="M45.563 29.174l-22-15a1.003 1.003 0 00-1.031-.058A1 1 0 0022 15v30a1 1 0 00.533.884A.99.99 0 0023 46a1 1 0 00.563-.174l22-15a1 1 0 000-1.652zM24 43.107V16.893L43.225 30 24 43.107zM30 0C13.458 0 0 13.458 0 30s13.458 30 30 30 30-13.458 30-30S46.542 0 30 0zm0 58C14.561 58 2 45.439 2 30S14.561 2 30 2s28 12.561 28 28-12.561 28-28 28z"></path>
    </svg>
  );
}
