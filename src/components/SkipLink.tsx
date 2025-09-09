"use client";

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="skip-link"
      onFocus={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
      onBlur={(e) => {
        e.currentTarget.style.transform = "translateY(-4rem)";
      }}
    >
      Skip to main content
    </a>
  );
}

