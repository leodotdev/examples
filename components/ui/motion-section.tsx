"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { fadeIn, viewportConfig } from "@/lib/motion";

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  animation?: Variants;
  delay?: number;
}

export function MotionSection({
  children,
  animation = fadeIn,
  delay = 0,
  className,
}: MotionSectionProps) {
  return (
    <motion.section
      className={className}
      initial="initial"
      whileInView="animate"
      viewport={viewportConfig}
      variants={animation}
      custom={delay}
    >
      {children}
    </motion.section>
  );
}