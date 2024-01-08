import { IconProps, withIcon } from './with-svg';

function HomeIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      width={20}
      height={20}
      {...props}
    >
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.667"
        d="M6.667 14.167h6.666M9.181 2.303L3.53 6.7c-.377.294-.566.441-.702.625-.12.163-.21.347-.265.542-.062.22-.062.46-.062.938v6.03c0 .933 0 1.4.182 1.756.16.314.414.569.728.729.357.181.823.181 1.757.181h9.666c.934 0 1.4 0 1.757-.181a1.66 1.66 0 00.728-.729c.182-.356.182-.823.182-1.757v-6.03c0-.478 0-.718-.062-.938a1.665 1.665 0 00-.265-.542c-.136-.184-.325-.33-.702-.625L10.82 2.303c-.293-.227-.44-.341-.601-.385a.834.834 0 00-.436 0c-.161.044-.308.158-.6.385z"
      ></path>
    </svg>
  );
}

export default withIcon(HomeIcon);
