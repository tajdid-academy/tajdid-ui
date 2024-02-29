import { IconProps } from '.';
import { withIcon } from './with-svg';

function MedalIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={30}
      {...props}
      fill="none"
      viewBox="0 0 24 30"
    >
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13.037 17.2l1.055 2.13c.144.296.528.58.852.635l1.914.32c1.224.206 1.512 1.101.63 1.985L16 23.77c-.252.254-.39.744-.312 1.095l.426 1.857c.336 1.47-.438 2.038-1.728 1.27l-1.793-1.07c-.324-.195-.858-.195-1.188 0l-1.794 1.07c-1.284.768-2.064.193-1.728-1.27l.426-1.858c.078-.35-.06-.84-.312-1.094l-1.488-1.5c-.876-.884-.594-1.779.63-1.985l1.914-.32c.318-.055.702-.339.846-.635l1.056-2.13c.576-1.155 1.512-1.155 2.082 0z"
      ></path>
      <path
        stroke="currentcolor"
        strokeWidth="2"
        d="M19.012 1.683H4.99c-1.08 0-2.509-.21-3.247.912-.408.62-.408 1.516-.408 3.31 0 1.529 0 2.294.275 2.938.47 1.1 1.52 1.578 2.419 2.097l4.395 2.54C10.179 14.492 11.056 15 12 15s1.822-.507 3.577-1.52l4.396-2.54c.9-.52 1.949-.997 2.418-2.097.275-.644.275-1.409.275-2.938 0-1.794 0-2.69-.407-3.31-.739-1.122-2.168-.912-3.248-.912z"
      ></path>
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M12 1.667v6.667"
      ></path>
    </svg>
  );
}

export default withIcon(MedalIcon);
