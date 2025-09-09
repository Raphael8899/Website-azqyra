import { cn } from "@/lib/utils";

interface StatBlockProps {
  before: string;
  after: string;
  label: string;
  description?: string;
  className?: string;
}

export default function StatBlock({
  before,
  after,
  label,
  description,
  className = "",
}: StatBlockProps) {
  return (
    <div className={cn("text-center", className)}>
      <div className="mb-2">
        <span className="mono text-2xl lg:text-3xl text-slate-500 line-through decoration-2">
          {before}
        </span>
        <span className="mx-3 text-slate-500">→</span>
        <span className="mono text-2xl lg:text-3xl font-semibold text-navy-900">
          {after}
        </span>
      </div>
      <div className="heading-2 text-lg text-navy-900 mb-1">
        {label}
      </div>
      {description && (
        <p className="text-sm text-slate-500">
          {description}
        </p>
      )}
    </div>
  );
}

