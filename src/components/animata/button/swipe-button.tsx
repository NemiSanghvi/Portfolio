"use client";
import type React from "react";

import { cn } from "@/lib/utils";

export interface SwipeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  firstText: string;
  secondText: string;
  className?: string;
  firstClass?: string;
  secondClass?: string;
  href?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
}

export default function SwipeButton({
  className = "",
  secondText = "",
  firstText = "",
  firstClass = "bg-orange-500 text-white",
  secondClass = "bg-black text-white",
  href,
  download,
  target,
  rel,
  ...props
}: SwipeButtonProps) {
  const common = "block px-4 py-2 text-2xl font-bold transition-transform duration-300 ease-in-out select-none";

  const content = (
    <>
      <span
        className={cn(
          "absolute inset-0 translate-y-full group-hover/button:translate-y-0 group-focus-visible/button:translate-y-0",
          common,
          secondClass,
        )}
      >
        {secondText}
      </span>
      <span
        className={cn(
          "group-hover/button:-translate-y-full group-focus-visible/button:-translate-y-full",
          common,
          firstClass,
        )}
      >
        {firstText}
      </span>
    </>
  );

  const baseClasses = cn(
    "group/button relative inline-flex min-w-fit items-center justify-center overflow-hidden rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5851F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2A2A2A]",
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={baseClasses}
        onClick={props.onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        aria-label={typeof firstText === "string" ? firstText : "Download Resume"}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      {...props}
      className={baseClasses}
    >
      {content}
    </button>
  );
}
