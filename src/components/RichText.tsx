import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RichTextProps {
  children: ReactNode;
  className?: string;
}

export default function RichText({ children, className = "" }: RichTextProps) {
  return (
    <div className={cn("prose prose-lg max-w-none", className)}>
      <style jsx global>{`
        .prose {
          color: #5E6B7A;
          line-height: 1.7;
        }
        .prose h2 {
          color: #0A1B3C;
          font-family: var(--font-inter);
          font-weight: 600;
          font-size: 1.5rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
        }
        .prose h3 {
          color: #0A1B3C;
          font-family: var(--font-inter);
          font-weight: 600;
          font-size: 1.25rem;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }
        .prose p {
          margin-bottom: 1.25rem;
        }
        .prose ul {
          margin-top: 1rem;
          margin-bottom: 1.25rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
        }
        .prose strong {
          color: #0A1B3C;
          font-weight: 600;
        }
        .prose em {
          color: #1565C0;
          font-style: normal;
          font-weight: 500;
        }
        .prose blockquote {
          border-left: 4px solid #D4AF37;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: #0A1B3C;
          background: #F7F9FC;
          padding: 1.5rem;
          border-radius: 0.5rem;
        }
      `}</style>
      {children}
    </div>
  );
}

