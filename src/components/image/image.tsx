import { cn } from '../../utils';

export type ImageProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
};

export default function Image({
  src,
  alt,
  className,
  width,
  height,
}: ImageProps) {
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
