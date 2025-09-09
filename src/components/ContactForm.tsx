"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { trackFormSubmit } from "@/lib/analytics";

interface FormData {
  name: string;
  org: string;
  email: string;
  area: string;
  message: string;
}

const priorityAreas = [
  "Public Administration & Citizen Services",
  "Critical Services & Infrastructure",
  "Law Firms & Legal Functions",
  "Banking & Financial Services",
  "Regulated Corporates",
  "Media Organizations",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    org: "",
    email: "",
    area: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        trackFormSubmit("contact", true);
        // Reset form
        setFormData({
          name: "",
          org: "",
          email: "",
          area: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.error || "Something went wrong");
        trackFormSubmit("contact", false);
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please try again.");
      trackFormSubmit("contact", false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (submitStatus === "success") {
    return (
      <div className="bg-green-700/10 border border-green-700/20 rounded-lg p-6 text-center">
        <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="heading-2 text-lg text-green-700 mb-2">
          Thank you for your inquiry
        </h3>
        <p className="text-green-700/80">
          Your confidential request was received. We reply within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          {errorMessage}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-500/20 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="org" className="block text-sm font-medium text-navy-900 mb-2">
            Organization *
          </label>
          <input
            type="text"
            id="org"
            name="org"
            required
            value={formData.org}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-500/20 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
            placeholder="Your organization"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-2">
          Work Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-500/20 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
          placeholder="you@organization.com"
        />
      </div>

      <div>
        <label htmlFor="area" className="block text-sm font-medium text-navy-900 mb-2">
          Priority Area
        </label>
        <select
          id="area"
          name="area"
          value={formData.area}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-500/20 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
        >
          <option value="">Select your primary focus area</option>
          {priorityAreas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-500/20 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
          placeholder="Tell us about your specific needs or challenges (optional)"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-navy-900 text-white hover:bg-navy-900/90 py-3 text-lg font-medium"
      >
        {isSubmitting ? "Sending..." : "Send Confidential Request"}
      </Button>

      <p className="text-xs text-slate-500 text-center">
        Your information is handled with strict confidentiality. We typically respond within 24 hours.
      </p>
    </form>
  );
}

