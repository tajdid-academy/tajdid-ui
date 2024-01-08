import { withIcon, IconProps } from './with-svg';

function SettingsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 22 22" fill="none" width={22} height={22} {...props}>
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11 14a3 3 0 100-6 3 3 0 000 6z"
      ></path>
      <path
        stroke="currentcolor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.727 13.727a1.5 1.5 0 00.3 1.655l.055.054a1.816 1.816 0 010 2.573 1.818 1.818 0 01-2.573 0l-.055-.055a1.5 1.5 0 00-1.654-.3 1.5 1.5 0 00-.91 1.373v.155a1.818 1.818 0 11-3.635 0V19.1a1.5 1.5 0 00-.982-1.373 1.5 1.5 0 00-1.655.3l-.054.055a1.818 1.818 0 01-3.106-1.287 1.818 1.818 0 01.533-1.286l.054-.055a1.5 1.5 0 00.3-1.654 1.5 1.5 0 00-1.372-.91h-.155a1.818 1.818 0 110-3.635H2.9a1.5 1.5 0 001.373-.982 1.5 1.5 0 00-.3-1.655l-.055-.054A1.818 1.818 0 116.491 3.99l.054.054a1.5 1.5 0 001.655.3h.073a1.5 1.5 0 00.909-1.372v-.155a1.818 1.818 0 013.636 0V2.9a1.499 1.499 0 00.91 1.373 1.5 1.5 0 001.654-.3l.054-.055a1.817 1.817 0 012.573 0 1.819 1.819 0 010 2.573l-.055.054a1.5 1.5 0 00-.3 1.655v.073a1.5 1.5 0 001.373.909h.155a1.818 1.818 0 010 3.636H19.1a1.499 1.499 0 00-1.373.91z"
      ></path>
    </svg>
  );
}

export default withIcon(SettingsIcon);
