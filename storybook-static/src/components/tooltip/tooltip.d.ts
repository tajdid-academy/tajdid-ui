import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import React from 'react';
type Props = {
    children: React.ReactNode;
};
declare const Tooltip: {
    ({ children }: Props): import("react/jsx-runtime").JSX.Element;
    Root: any;
    Content: ({ children }: Props) => import("react/jsx-runtime").JSX.Element;
    Trigger: React.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React.RefAttributes<HTMLButtonElement>>;
};
export default Tooltip;
