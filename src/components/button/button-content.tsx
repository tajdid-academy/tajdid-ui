import React from "react";
import { SpinnerIcon } from "../../icons";

export type ButtonContentProps = {
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
  loadingText?: string;
  children?: React.ReactNode;
};

export default function ButtonContent({
  isLoading,
  children,
  icon,
  iconPosition,
  loadingText,
}: ButtonContentProps) {
  if (isLoading) {
    return (
      <>
        <span className={loadingText && "mr-2"}>
          <SpinnerIcon />
        </span>
        {loadingText}
      </>
    );
  }

  if (icon && iconPosition === "start") {
    return (
      <>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </>
    );
  }

  if (icon && iconPosition === "end") {
    return (
      <>
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </>
    );
  }

  return children;
}
