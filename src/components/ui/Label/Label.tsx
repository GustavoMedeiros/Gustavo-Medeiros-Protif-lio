import React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import styles from "./Label.module.css";

interface LabelProps
  extends React.ComponentPropsWithoutRef<
    typeof LabelPrimitive.Root
  > {}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className = "", ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={`${styles.label} ${className}`}
    {...props}
  />
));

Label.displayName = "Label";

export default Label;