import { VariantProps } from "class-variance-authority";
import React, { useMemo } from "react";
import { cn } from "./mergeClasses";
import { baseButtonVariants } from "./variants";
import { Loader } from "lucide-react";

export type BaseButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof baseButtonVariants> & {
    isLoading?: boolean;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
  };

export const BaseButton = React.forwardRef<
  React.ElementRef<"button">,
  BaseButtonProps
>(
  (
    {
      className,
      size,
      rounded,
      leftIcon,
      rightIcon,
      children,
      isLoading,
      disabled,
      ...props
    },
    ref,
  ) => {
    const { icon, iconPlacement } = useMemo(() => {
      let icon = rightIcon || leftIcon;

      if (isLoading) {
        icon = <Loader className="motion-safe:animate-spin-slow" />;
      }

      return {
        icon,
        iconPlacement: rightIcon ? ("right" as const) : ("left" as const),
      };
    }, [isLoading, leftIcon, rightIcon]);

    return (
      <button // Most of the time I use a polymorphic component that change to a link when there is href in props
        className={cn(baseButtonVariants({ size, rounded, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        data-state={isLoading ? "loading" : undefined}
        {...props}
      >
        {icon && iconPlacement === "left" ? (
          <span
            className={cn(
              { "mr-2": !!children },
              "inline-flex shrink-0 self-center",
            )}
          >
            {icon}
          </span>
        ) : null}
        {children}
        {icon && iconPlacement === "right" ? (
          <span
            className={cn(
              { "ml-2": !!children },
              "inline-flex shrink-0 self-center",
            )}
          >
            {icon}
          </span>
        ) : null}
      </button>
    );
  },
);

BaseButton.displayName = "BaseButton";
