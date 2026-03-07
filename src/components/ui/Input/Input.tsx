import React from "react";
import styles from "./Input.module.css";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={`${styles.input} ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;