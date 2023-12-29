import { cn } from '../../utils';

type Props = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
};

export default function Image({ src, alt, className, width, height }: Props) {
  return (
    <img
      className={cn('block max-w-full', className)}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
}
