import React from "react";
import { FiArrowRight } from "react-icons/fi";

export interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  arrow?: boolean;
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, arrow = false, className = "", ...props }, ref) => (
    <button
      ref={ref}
      rel="noopener noreferrer"
      className={
        "relative cursor-pointer max-w-53 w-full px-2 pb-1 flex items-center justify-center text-center rounded-full xl:text-sm text-sm font-normal hover:text-red-btn text-dark transition-all duration-300 overflow-hidden group bg-primary-light " +
        className
      }
      {...props}
    >
      <span className={
        "relative z-10 flex flex-row gap-4 items-center mt-1" + (arrow ? "" : " justify-center")
      }>
        {children}
        {arrow && (
          <span className="relative translate-x-0 group-hover:translate-x-3 group-hover:scale-[1.6] transition-transform">
            <FiArrowRight className="text-black w-3.5 h-3.5" />
          </span>
        )}
      </span>
      <span className="absolute inset-0 bg-primary transition-transform duration-300 group-hover:-translate-x-full"></span>
      <span className="absolute inset-0 bg-primary transition-transform duration-300 group-hover:translate-x-full"></span>
    </button>
  )
);

Button.displayName = "Button";
