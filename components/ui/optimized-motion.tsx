"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, memo } from "react";

interface OptimizedMotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

const OptimizedMotion = memo(({
  children,
  className,
  delay = 0,
  duration = 0.5,
}: OptimizedMotionProps) => {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration,
        delay,
        ease: [0.21, 1.11, 0.81, 0.99], // Custom easing for better performance
      }}
    >
      {children}
    </motion.div>
  );
});

OptimizedMotion.displayName = "OptimizedMotion";

export { OptimizedMotion };