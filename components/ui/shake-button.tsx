"use client";
import { motion } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";

// Extract the type of buttonVariants
type ButtonVariantProps = VariantProps<typeof buttonVariants>;
export const ShakeButton = ({
  children,
  variant = "default",
  size = "default",
  className,
  icon,
}: {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  variant?: ButtonVariantProps["variant"];
  size?: ButtonVariantProps["size"];
}) => {
  return (
    <motion.button
      className={cn(buttonVariants({ variant, size }), className)}
      whileHover="hover"
      whileTap={{ scale: 0.9 }}
    >
      {children}
      <motion.div
        variants={{
          hover: {
            rotate: [-10, 10, -10, 10, 0],
            transition: {
              duration:0.5,
              repeat: Infinity,
              repeatType: 1,
            },
          },
        }}
      >
        {icon}
      </motion.div>
    </motion.button>
  );
};
