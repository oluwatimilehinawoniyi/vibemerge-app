import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  bgColor?: string;
}

export default function Button({
  children,
  bgColor = "var(--light-red)",
}: ButtonProps) {
  return (
    <button
      className="rounded-full w-max flex items-center text-white gap-2 p-1 pr-2"
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </button>
  );
}
