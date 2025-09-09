"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import NewsletterForm from "./NewsletterForm";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function NewsletterInline() {
  return (
    <Section background="off-50" padding="default">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="heading-2 text-2xl text-navy-900 mb-4">
          Strategic briefs on governed AI
        </h3>
        <p className="text-slate-500 mb-8">
          Occasional, executive-grade insights on AI implementation in regulated environments. 
          Unsubscribe anytime.
        </p>
        
        <NewsletterForm
          inline
          placeholder="Your work email"
          buttonText="Subscribe"
          className="max-w-md mx-auto"
        />
      </motion.div>
    </Section>
  );
}

