import React, { ReactElement, SVGProps } from 'react';

export type IconProps = SVGProps<SVGSVGElement> & {
  className?: string;
};

export const withIcon = <P extends IconProps>(
  WrappedComponent: React.ComponentType<P>,
) => {
  // eslint-disable-next-line react/display-name
  return ({ className, width, height, ...rest }: IconProps): ReactElement => {
    const componentProps = {
      className,
      ...(width && { width }),
      ...(height && { height }),
      ...rest,
    };

    return <WrappedComponent {...(componentProps as P)} />;
  };
};
