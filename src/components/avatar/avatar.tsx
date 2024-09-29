import { VariantProps, cva } from 'class-variance-authority';
import { Image } from '../image';
import { cn } from '@/utils';

export const avatarVariants = cva(
  'bg-gray-100 rounded-full  flex justify-center items-center',
  {
    variants: {
      elevation: {
        0: '',
        1: 'shadow-sm',
      },
      size: {
        sm: 'w-[40px] h-[40px]',
        md: 'w-[70px] h-[70px] xl:w-[96px]  xl:h-[96px]',
        lg: 'w-[96px] h-[96px]',
      },
      border: {
        0: '',
        1: 'border-2 border-white',
        2: 'border-4 border-white',
      },
    },
    defaultVariants: {
      elevation: 0,
      size: 'sm',
      border: 0,
    },
  },
);

type AvatarProps = VariantProps<typeof avatarVariants> & {
  src?: string;
  alt?: string;
  className?: string;
};

const Avatar = ({
  src,
  alt = 'profile picture',
  elevation,
  className,
  size,
  border,
}: AvatarProps) => {
  return (
    <Image
      className={cn(avatarVariants({ elevation, className, size, border }))}
      src={src ?? ''}
      alt={alt}
    />
  );
};

export default Avatar;
