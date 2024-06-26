import { IconProps, withIcon } from './with-svg';

function MortarboardIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      fill="none"
      {...props}
    >
      <path
        stroke="currentColor"
        d="M1.666 5.667c0 1.118 6.755 4.166 8.333 4.166 1.579 0 8.334-3.048 8.334-4.166 0-1.118-6.755-4.167-8.334-4.167-1.578 0-8.333 3.049-8.333 4.167z"
      />
      <path
        stroke="#currentColor"
        d="m5 8.166.203 4.664a1.304 1.304 0 0 0 .52 1.007c1.853 1.328 6.7 1.328 8.554 0a1.304 1.304 0 0 0 .52-1.007L15 8.166"
      />
      <path
        fill="currentcolor"
        d="M17.832 6.917a.75.75 0 0 0-1.5 0h1.5zm-1.94 8.552.73.174-.73-.174zm2.38 0 .73-.173-.73.173zm-1.94-8.553v5.84h1.5v-5.84h-1.5zm.29 8.727c.117-.494.32-.948.54-1.38.198-.387.472-.863.618-1.232l-1.396-.55c-.11.281-.294.583-.558 1.1-.242.473-.506 1.05-.664 1.715l1.46.347zm2.38-.347c-.158-.665-.422-1.242-.664-1.715-.264-.517-.447-.819-.558-1.1l-1.396.55c.146.369.42.845.619 1.232.22.432.422.886.54 1.38l1.46-.347zm-1.657.454h-.526v1.5h.526v-1.5zm-2.183-.454c-.104.436-.183 1.071.276 1.531.214.215.475.313.695.361.22.05.457.062.686.062v-1.5c-.186 0-.298-.012-.361-.026-.062-.014-.019-.017.042.044a.327.327 0 0 1 .069.101c.013.031.014.05.014.044a.389.389 0 0 1 .003-.078c.005-.047.016-.11.035-.192l-1.46-.347zm2.38.347c.02.082.031.145.036.192a.422.422 0 0 1 .003.078c0 .005 0-.013.014-.044a.327.327 0 0 1 .069-.1c.06-.062.104-.059.042-.045a1.794 1.794 0 0 1-.361.026v1.5c.229 0 .466-.013.686-.061.22-.05.481-.147.695-.362.459-.46.38-1.095.276-1.531l-1.46.347z"
      />
    </svg>
  );
}

export default withIcon(MortarboardIcon);
