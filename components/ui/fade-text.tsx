"use client";
import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
export const FadeText = ({
  children,
  delay = 0,
  duration = 0.7,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true,margin:"-20px" });
  return (
    <motion.div
      ref={ref}
      className={cn("leading-normal w-full", className)}
      initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }
          : {}
      }
      transition={{
        duration,
        ease: "easeInOut",
        delay,
        bounce: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
};
