import * as React from "react"
import { cn } from "@/lib/cn"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild, ...props }, ref) => {
    const Comp: any = asChild ? "a" : "button"
    return (
      <Comp
        ref={ref as any}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium",
          "bg-primary text-primary-foreground hover:opacity-90",
          "h-10 px-4 py-2 transition-colors shadow-sm",
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
