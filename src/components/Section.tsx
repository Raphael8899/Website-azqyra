import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "off-50" | "navy-900";
  padding?: "default" | "large" | "small";
  maxWidth?: "container" | "readable" | "full";
}

export default function Section({
  children,
  className = "",
  id,
  background = "white",
  padding = "default",
  maxWidth = "container",
}: SectionProps) {
  const backgroundClasses = {
    white: "bg-white",
    "off-50": "bg-off-50",
    "navy-900": "bg-navy-900 text-white",
  };

  const paddingClasses = {
    default: "py-16 lg:py-24",
    large: "py-24 lg:py-32",
    small: "py-12 lg:py-16",
  };

  const maxWidthClasses = {
    container: "container-custom",
    readable: "container-readable", 
    full: "w-full px-6",
  };

  return (
    <section
      id={id}
      className={cn(
        backgroundClasses[background],
        paddingClasses[padding],
        className
      )}
    >
      <div className={maxWidthClasses[maxWidth]}>
        {children}
      </div>
    </section>
  );
}

