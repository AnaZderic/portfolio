"use client";

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Variant = "primary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export const Button = ({
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "px-6 py-3 rounded-lg font-semibold transition-transform duration-200 ease-out",
        "hover:scale-105 hover:shadow-lg",
        variant === "primary" && [
          "bg-[rgb(var(--primary))]",
          "text-[rgb(var(--primary-foreground))]",
          "hover:opacity-90",
        ],
        variant === "outline" && [
          "border border-[rgb(var(--primary))]",
          "text-[rgb(var(--primary))]",
          "hover:bg-[rgb(var(--primary))/0.1]",
        ],
        className
      )}
    />
  );
};
