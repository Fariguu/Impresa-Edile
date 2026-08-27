import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageCardProps extends React.ComponentProps<"div"> {
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  orientation?: "vertical" | "horizontal";
}

function ImageCard({
  className,
  imageSrc,
  imageAlt = "",
  title,
  description,
  icon,
  orientation = "vertical",
  ...props
}: ImageCardProps) {
  return (
    <div
      className={cn(
        "group",
        orientation === "horizontal" ? "flex gap-6" : "flex flex-col gap-4",
        className
      )}
      {...props}
    >
      {/* Image Container */}
      <div
        className={cn(
          "relative overflow-hidden bg-secondary/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]",
          orientation === "vertical"
            ? "aspect-[4/3] w-full rounded-3xl"
            : "aspect-[16/10] w-full md:w-2/5 rounded-2xl"
        )}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes={orientation === "vertical" 
              ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              : "(max-width: 768px) 100vw, 40vw"
            }
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 p-8 text-muted-foreground">
            {icon && <div className="opacity-40">{icon}</div>}
            <p className="text-sm text-center">Immagine Placeholder</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={cn(
        "flex flex-col gap-2",
        orientation === "horizontal" && "flex-1 justify-center"
      )}>
        <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
        {description && (
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}

export { ImageCard };
