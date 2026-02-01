'use client';

import Link from 'next/link';
import './AnimatedButton.css';

interface AnimatedButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'white' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export default function AnimatedButton({ 
  href, 
  children, 
  variant = 'primary',
  className = '',
  type = 'button',
  onClick
}: AnimatedButtonProps) {
  const baseClasses = 'animated-btn';
  const variantClasses = {
    primary: 'animated-btn-primary',
    secondary: 'animated-btn-secondary',
    white: 'animated-btn-white',
    outline: 'animated-btn-outline'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      <span>{children}</span>
    </button>
  );
}
