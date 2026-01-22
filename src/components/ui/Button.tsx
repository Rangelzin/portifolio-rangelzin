import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'solid' | 'outline'; 
}

export default function Button({ href, children, variant = 'solid' }: ButtonProps) {
  const baseStyles = "px-8 h-20 w-80 flex justify-center items-center rounded-3xl text-2xl font-bold transition-all duration-300 border-2 box-border";
  
  const variants = {
    solid: "bg-gold text-black border-transparent hover:bg-transparent hover:text-gold hover:border-gold",
    outline: "bg-transparent text-gold border-gold hover:bg-gold hover:text-black"
  };

  return (
    <Link href={href} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </Link>
  );
}