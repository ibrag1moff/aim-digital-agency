"use client";
// framer motion
import { motion } from "framer-motion";

interface SectionPageProps {
  title: string;
  text?: string;
}

export default function SectionPage({ title, text }: SectionPageProps) {
  return (
    <div className="bg-section bg-center bg-cover h-[500px] pt-[40px] sm:pt-[120px]">
      <div className="flex flex-col items-center justify-center gap-2 h-full text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="font-bold text-5xl tracking-[2px]"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="max-w-[600px]"
        >
          {text}
        </motion.p>
      </div>
    </div>
  );
}
