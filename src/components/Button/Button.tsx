import { VariantProps } from "class-variance-authority";
import React from "react";
import { BaseButton } from "./BaseButton";

import { buttonVariants } from "./variants";
import { cn } from "./mergeClasses";

export const Button = React.forwardRef<
  React.ElementRef<typeof BaseButton>,
  React.ComponentPropsWithoutRef<typeof BaseButton> &
    VariantProps<typeof buttonVariants>
>(({ className, variant, ...props }, ref) => (
  <BaseButton
    className={cn(buttonVariants({ variant, className }))}
    {...props}
    ref={ref}
  />
));

Button.displayName = "Button";
