import { ReactNode } from "react";
import { Card as ShadcnCard, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  title?: string;
  className?: string;
  hover?: boolean;
  padding?: "default" | "large" | "small";
}

export default function Card({
  children,
  title,
  className = "",
  hover = true,
  padding = "default",
}: CardProps) {
  const paddingClasses = {
    default: "p-6",
    large: "p-8",
    small: "p-4",
  };

  return (
    <ShadcnCard
      className={cn(
        "card-shadow border-0 transition-all duration-200",
        hover && "hover:shadow-lg hover:-translate-y-1 cursor-pointer group",
        className
      )}
    >
      {title && (
        <CardHeader className="pb-4">
          <CardTitle className="heading-2 text-navy-900 group-hover:text-blue-700 transition-colors duration-200">
            {title}
          </CardTitle>
        </CardHeader>
      )}
      <CardContent className={cn(paddingClasses[padding], title ? "pt-0" : "")}>
        {children}
      </CardContent>
    </ShadcnCard>
  );
}

