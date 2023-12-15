import React from "react";
import { Button } from "./Button";
import { cn } from "./mergeClasses";

export const IconButton = React.forwardRef<
  React.ElementRef<typeof Button>,
  Omit<React.ComponentPropsWithoutRef<typeof Button>, "leftIcon" | "rightIcon">
>(({ className, children, ...props }, ref) => (
  <Button
    {...props}
    className={cn("h-12 w-12 rounded-full p-0", className)}
    ref={ref}
  >
    {props.isLoading ? null : children}
  </Button>
));

IconButton.displayName = "IconButton";
