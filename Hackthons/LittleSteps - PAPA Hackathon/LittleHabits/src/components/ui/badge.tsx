import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground border-2",
        coral: "border-transparent bg-coral text-primary-foreground",
        teal: "border-transparent bg-teal text-primary-foreground",
        sunshine: "border-transparent bg-sunshine text-foreground",
        lavender: "border-transparent bg-lavender text-primary-foreground",
        mint: "border-transparent bg-mint text-primary-foreground",
        age5: "border-transparent bg-coral-light text-foreground font-extrabold",
        age10: "border-transparent bg-teal-light text-foreground font-extrabold",
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
