"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type TextShimmerProps = {
  children: string;
  className?: string;
  animationDuration?: number;
  gradientSpread?: number;
  variant?: "wobble" | "default" | "fast" | "reverse";
};

const variantStyles = {
  default: {
    backgroundSize: "450% 100%",
    initialBackgroundPosition: "100% center",
    backgroundPosition: "0% center",
    transition: { duration: 1, ease: "linear", repeat: Infinity },
  },
  wobble: {
    backgroundSize: "25% 100%",
    initialBackgroundPosition: "100% center",
    backgroundPosition: "0% center",
    transition: {
      duration: 1,
      ease: "linear",
      repeat: Infinity,
    },
  },
  fast: {
    backgroundSize: "450% 100%",
    initialBackgroundPosition: "100% center",
    backgroundPosition: "0% center",

    transition: { duration: 0.75, ease: "linear", repeat: Infinity },
  },
  reverse: {
    backgroundSize: "100% 100%",
    initialBackgroundPosition: "0% center",
    backgroundPosition: "100% center",
    transition: { duration: 1, ease: "linear", repeat: Infinity },
  },
};

export function TextShimmer({
  variant = "default",
  children,
  className = "",
  animationDuration = 2,
}: TextShimmerProps) {
  const combinedClasses = cn(
    "bg-gradient-to-r relative inline-block from-gray-300 via-gray-700 to-gray-300 bg-clip-tex text-transparent",
    className
  );

  const currentVariantStyles = variantStyles[variant];

  const transitionStyle = {
    ...currentVariantStyles.transition,
    duration: animationDuration,
  };

  return (
    <motion.div
      className={combinedClasses}
      initial={{
        backgroundPosition: currentVariantStyles.initialBackgroundPosition,
      }}
      animate={{ backgroundPosition: currentVariantStyles.backgroundPosition }}
      transition={transitionStyle}
      style={currentVariantStyles}
    >
      {children}
    </motion.div>
  );
}
