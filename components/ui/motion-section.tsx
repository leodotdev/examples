"use client";

import { motion } from "framer-motion";
import { Section, SectionProps } from "./section";
import { fadeIn, viewportConfig } from "@/lib/motion";

interface MotionSectionProps extends SectionProps {
  animation?: any;
  delay?: number;
}

export function MotionSection({
  children,
  animation = fadeIn,
  delay = 0,
  ...props
}: MotionSectionProps) {
  return (
    <Section asChild {...props}>
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={viewportConfig}
        variants={animation}
        custom={delay}
      >
        {children}
      </motion.section>
    </Section>
  );
}