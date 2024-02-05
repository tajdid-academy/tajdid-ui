import { cn } from '../../utils';

export type ImageProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackSrc?: string;
};

export default function Image({
  src,
  alt,
  className,
  width,
  height,
  fallbackSrc,
}: ImageProps) {
  return (
    <img
      className={cn('block max-w-full', className)}
      src={src ?? fallbackSrc}
      alt={alt}
      width={width}
      height={height}
    />
  );
}
