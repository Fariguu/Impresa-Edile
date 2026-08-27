import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps extends React.ComponentProps<"div"> {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  size?: "default" | "large";
}

function SectionHeader({
  className,
  title,
  subtitle,
  align = "center",
  size = "default",
  ...props
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  const sizeClasses = {
    default: "gap-4",
    large: "gap-6",
  };

  return (
    <div
      className={cn(
        "flex flex-col max-w-3xl mx-auto",
        alignmentClasses[align],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <h2
        className={cn(
          "font-bold tracking-tight",
          size === "large" ? "text-5xl md:text-6xl" : "text-4xl md:text-5xl"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-muted-foreground leading-relaxed",
            size === "large" ? "text-xl md:text-2xl" : "text-lg md:text-xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export { SectionHeader };
