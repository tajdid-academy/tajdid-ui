import { IconProps } from '.';
import { withIcon } from './with-svg';

function FileDocumentIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={17}
      {...props}
      fill="none"
      viewBox="0 0 16 17"
    >
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.333"
        d="M9.335 2.012v2.753c0 .374 0 .56.072.703a.667.667 0 00.292.291c.142.073.329.073.702.073h2.754m.18 1.326v4.807c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874c-.428.218-.988.218-2.108.218H5.868c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874c-.218-.428-.218-.988-.218-2.108V5.032c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874c.428-.218.988-.218 2.108-.218h2.141c.49 0 .734 0 .964.055a2 2 0 01.578.24c.202.123.375.296.72.642l2.126 2.126c.346.346.52.519.643.72a2 2 0 01.24.579c.055.23.055.474.055.964z"
      ></path>
    </svg>
  );
}

export default withIcon(FileDocumentIcon);
