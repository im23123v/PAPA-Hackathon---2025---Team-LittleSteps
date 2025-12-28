import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground border-border",
        teal: "border-transparent bg-teal/15 text-teal",
        coral: "border-transparent bg-coral/15 text-coral",
        sunny: "border-transparent bg-sunny/20 text-accent-foreground",
        purple: "border-transparent bg-purple/15 text-purple",
        mint: "border-transparent bg-mint/20 text-foreground",
        sky: "border-transparent bg-sky/15 text-sky",
        beginner: "border-transparent bg-mint/20 text-foreground",
        intermediate: "border-transparent bg-sunny/20 text-accent-foreground",
        advanced: "border-transparent bg-coral/15 text-coral",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
