import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function Logo({ 
  className = "", 
  width = 120, 
  height = 40,
  priority = false 
}: LogoProps) {
  return (
    <Link href="/" className={`inline-block ${className}`}>
      <div className="text-2xl font-bold text-navy-900">
        AZQYRA
      </div>
    </Link>
  );
}