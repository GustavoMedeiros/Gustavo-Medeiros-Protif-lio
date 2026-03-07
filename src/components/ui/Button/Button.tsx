import React from "react";
import styles from "./Button.module.css";

export type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

export type ButtonSize = "default" | "sm" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const sizeClass =
      size === "default"
        ? styles["btn-defaultSize"]
        : styles[`btn-${size}`];

    const classes = `
      ${styles.btn}
      ${styles[`btn-${variant}`]}
      ${sizeClass}
      ${className}
    `.trim();

    return <button ref={ref} className={classes} {...props} />;
  }
);

Button.displayName = "Button";

export { Button };