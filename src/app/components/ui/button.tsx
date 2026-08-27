import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-full",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 rounded-full",
        outline:
          "border-2 border-current bg-transparent hover:bg-current/10 rounded-full",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full",
        ghost:
          "hover:bg-accent/10 hover:text-accent-foreground rounded-md",
        link: "text-primary underline-offset-4 hover:underline",
        pill: "bg-bg-dark text-text-primary-light hover:bg-bg-dark/90 rounded-full border-2 border-transparent",
        "pill-light": "bg-transparent text-text-primary-light hover:bg-text-primary-light/10 rounded-full border-2 border-text-primary-light",
        "pill-dark": "bg-transparent text-text-primary-dark hover:bg-text-primary-dark/10 rounded-full border-2 border-text-primary-dark",
        accent: "bg-accent-red text-white hover:bg-accent-red/90 rounded-full",
        "accent-outline": "bg-transparent text-accent-red hover:bg-accent-red/10 rounded-full border-2 border-accent-red",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 px-4 py-2",
        lg: "h-12 px-8 py-3 text-base",
        icon: "size-11 rounded-full",
        "icon-sm": "size-9 rounded-full",
        "icon-lg": "size-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
