import { Button, Input, InputProps } from '..';

export type SearchProps = InputProps & {
  onClick?: () => void;
};

export default function Search({ onClick, ...rest }: SearchProps) {
  return (
    <div className="flex w-full">
      <Input inputClassName="rounded-se-none rounded-ee-none" {...rest} />
      <Button className="rounded-ss-none rounded-es-none" onClick={onClick}>
        Search
      </Button>
    </div>
  );
}
