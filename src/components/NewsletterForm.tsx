"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { trackFormSubmit } from "@/lib/analytics";

interface NewsletterFormProps {
  className?: string;
  placeholder?: string;
  buttonText?: string;
  inline?: boolean;
}

export default function NewsletterForm({
  className = "",
  placeholder = "Enter your email",
  buttonText = "Subscribe",
  inline = false,
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        trackFormSubmit("newsletter", true);
        setEmail("");
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.error || "Something went wrong");
        trackFormSubmit("newsletter", false);
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please try again.");
      trackFormSubmit("newsletter", false);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className={`text-center ${className}`}>
        <div className="inline-flex items-center gap-2 text-green-700 bg-green-700/10 px-4 py-2 rounded-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-medium">Successfully subscribed!</span>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      {submitStatus === "error" && (
        <div className="mb-4 text-sm text-red-600 bg-red-50 px-3 py-2 rounded border border-red-200">
          {errorMessage}
        </div>
      )}
      
      <form 
        onSubmit={handleSubmit} 
        className={inline ? "flex gap-3" : "space-y-3"}
      >
        <div className={inline ? "flex-1" : ""}>
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="newsletter-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border border-slate-500/20 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
            placeholder={placeholder}
          />
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className={`bg-navy-900 text-white hover:bg-navy-900/90 font-medium ${
            inline ? "px-6" : "w-full"
          }`}
        >
          {isSubmitting ? "..." : buttonText}
        </Button>
      </form>
    </div>
  );
}

