import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectCardProps extends React.ComponentProps<"div"> {
  imageSrc?: string;
  imageAlt?: string;
  client: string;
  location: string;
  description?: string;
}

function ProjectCard({
  className,
  imageSrc,
  imageAlt = "",
  client,
  location,
  description,
  ...props
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col gap-4 cursor-pointer",
        className
      )}
      {...props}
    >
      {/* Image Container */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-secondary/20 transition-transform duration-500 group-hover:scale-[1.02]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-sm text-muted-foreground">Immagine Progetto</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-bold tracking-tight">{client}</h3>
        <p className="text-sm text-muted-foreground">{location}</p>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
    </div>
  );
}

export { ProjectCard };
