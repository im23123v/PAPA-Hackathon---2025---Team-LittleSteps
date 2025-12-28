import { useState } from "react";
import { cn } from "@/lib/utils";

type AgeGroup = "5-10" | "10-15";

interface AgeGroupTabsProps {
  activeGroup: AgeGroup;
  onGroupChange: (group: AgeGroup) => void;
}

export function AgeGroupTabs({ activeGroup, onGroupChange }: AgeGroupTabsProps) {
  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex bg-card rounded-2xl p-1.5 shadow-card">
        <button
          onClick={() => onGroupChange("5-10")}
          className={cn(
            "flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300",
            activeGroup === "5-10"
              ? "bg-gradient-hero text-primary-foreground shadow-soft"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <span className="text-xl">👶</span>
          <span>Age 5-10</span>
        </button>
        <button
          onClick={() => onGroupChange("10-15")}
          className={cn(
            "flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300",
            activeGroup === "10-15"
              ? "bg-secondary text-secondary-foreground shadow-glow-teal"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <span className="text-xl">🧑‍🎓</span>
          <span>Age 10-15</span>
        </button>
      </div>
    </div>
  );
}

export default AgeGroupTabs;
