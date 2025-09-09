"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { trackCTAClick } from "@/lib/analytics";
import Link from "next/link";

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
  onClick?: () => void;
  location?: string;
}

export default function CTAButton({
  children,
  href,
  variant = "primary",
  size = "default",
  className = "",
  onClick,
  location = "unknown",
}: CTAButtonProps) {
  const handleClick = () => {
    trackCTAClick(String(children), location);
    if (onClick) {
      onClick();
    }
  };

  const buttonVariants = {
    primary: "bg-navy-900 text-white hover:bg-navy-900/90 hover:shadow-lg transition-all duration-200 relative group",
    secondary: "bg-white text-navy-900 border-2 border-navy-900 hover:bg-navy-900 hover:text-white transition-all duration-200",
    outline: "border-2 border-current bg-transparent hover:bg-current hover:text-white transition-all duration-200",
  };

  const buttonContent = (
    <Button
      variant="ghost"
      size={size}
      className={cn(
        buttonVariants[variant],
        "font-medium relative",
        variant === "primary" && "after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-gold-500 after:transition-all after:duration-200 group-hover:after:w-full group-hover:after:left-0",
        className
      )}
      onClick={handleClick}
    >
      {children}
    </Button>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block group">
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
}

