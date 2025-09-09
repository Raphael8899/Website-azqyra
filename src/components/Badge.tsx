import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "info";
  size?: "sm" | "default" | "lg";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  size = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default: "bg-slate-500/10 text-slate-500 border-slate-500/20",
    success: "bg-green-700/10 text-green-700 border-green-700/20",
    warning: "bg-amber-700/10 text-amber-700 border-amber-700/20",
    info: "bg-blue-700/10 text-blue-700 border-blue-700/20",
  };

  const sizes = {
    sm: "px-2 py-1 text-xs",
    default: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border font-medium",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}

