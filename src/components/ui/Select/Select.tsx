import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import styles from "./Select.module.css";

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<
    typeof SelectPrimitive.Trigger
  >
>(({ className = "", children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={`${styles.trigger} ${className}`}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown size={16} />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));

SelectTrigger.displayName =
  SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<
    typeof SelectPrimitive.Content
  >
>(({ className = "", children, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={`${styles.content} ${className}`}
      {...props}
    >
      <SelectPrimitive.ScrollUpButton className={styles.scrollBtn}>
        <ChevronUp size={16} />
      </SelectPrimitive.ScrollUpButton>

      <SelectPrimitive.Viewport className={styles.viewport}>
        {children}
      </SelectPrimitive.Viewport>

      <SelectPrimitive.ScrollDownButton className={styles.scrollBtn}>
        <ChevronDown size={16} />
      </SelectPrimitive.ScrollDownButton>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));

SelectContent.displayName =
  SelectPrimitive.Content.displayName;

const SelectItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<
    typeof SelectPrimitive.Item
  >
>(({ className = "", children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={`${styles.item} ${className}`}
    {...props}
  >
    <SelectPrimitive.ItemText>
      {children}
    </SelectPrimitive.ItemText>

    <SelectPrimitive.ItemIndicator className={styles.indicator}>
      <Check size={16} />
    </SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>
));

SelectItem.displayName =
  SelectPrimitive.Item.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
};