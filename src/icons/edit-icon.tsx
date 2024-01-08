import { withIcon, IconProps } from './with-svg';

function EditIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      width={20}
      height={20}
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          stroke="currentcolor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.667"
          d="M9.167 3.333h-3.5c-1.4 0-2.1 0-2.635.273a2.5 2.5 0 00-1.093 1.092c-.272.535-.272 1.235-.272 2.635v7c0 1.4 0 2.1.272 2.635a2.5 2.5 0 001.093 1.093c.534.272 1.235.272 2.635.272h7c1.4 0 2.1 0 2.635-.272a2.5 2.5 0 001.092-1.093c.273-.535.273-1.235.273-2.635v-3.5m-10 2.5h1.395c.408 0 .612 0 .803-.046.17-.04.333-.108.482-.2.168-.102.312-.246.6-.535l7.97-7.969a1.768 1.768 0 00-2.5-2.5l-7.97 7.97c-.288.287-.432.432-.535.6a1.7 1.7 0 00-.2.482c-.045.191-.045.395-.045.803v1.395z"
        ></path>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h20v20H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default withIcon(EditIcon);
